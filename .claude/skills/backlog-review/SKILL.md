---
name: backlog-review
description: >-
  Daily walk of status='backlog', the state a human must say go on. Separates rows waiting on a PERSON from rows waiting on a TRIGGER, and surfaces those stranded behind an abandoned dependency. Metic+ only. Triggers: "/backlog-review", "review the backlog", "what needs a nod", "walk the backlog".
disable-model-invocation: true
plain: >-
  Walks you through the work that is waiting for a person to say go, and separates it from work that is only waiting for something else to finish first.
reach-for: >-
  Once a day, or whenever you want to see what is waiting on your approval.
cost: >-
  Free. It only changes a task when you choose to approve, drop or refresh it.
---

You are running the backlog-review session. Tasks at `status='backlog'` get
walked and verdicted, so work nobody has said go on doesn't sit un-nodded
forever.

## Why this exists (task 1003746)

`backlog` is the **pre-workable** state: a task lands there when the system will
not put it in the claimable queue without a human saying go. `routing.js` says it
plainly — *"'backlog' means a human still says go"* — and [ADR 0234](../../../docs/adr/0234-idea-routing-capture-time-promotion-landing-matrix-homeless-inbox.md) §2
records why: a feature/cleanup/refactor filing *"reshape[s] what gets built and a
filer should not be able to set the queue's agenda alone."*

Every **other** queue in the methodology already has a walkable cadence:
`/idea-triage` for `idea_inbox`, `/blocker-review` for blockers, `/bug-triage`
for `kind=bug`, `/goal-review` for criteria. The backlog had none. Its only pull
surfaces were:

- the **nod queue** (`GET /inbox/awaiting-nod`), scoped `WHERE origin='route'` —
  so it sees only filings that arrived through the idea inbox, and
- the **30-day rot timer** (`GET /inbox/rotting`, [ADR 0232](../../../docs/adr/0232-rot-is-derived-not-swept-and-water-is-the-only-new-verb.md)).

Neither is a review of the backlog. This skill is that missing walk.

## Rank gate — Metic+ only

**Gated to Metic and above (Metic, Archon); not Xenos or Thetes.** Promoting a
backlog task puts it in the claimable queue for the whole team and, if its reward
is unset, prices it — `task.promote` and `task.abandon` are both floor-`metic`
permissions (`modules/government/catalog.js`). A sub-Metic can still **file**
work (`POST /tasks`, `capture.js`, Discord `#bugs`) — that path stays open; they
just can't say go on it.

**Enforce the gate at the top of the session, before reading the queue:**

1. Call `GET /api/bongos/me` and read `builder.rank`. Compare case-insensitively.
2. **If `rank` lowercases to `xenos` or `thetes`** → stop immediately. Tell the
   builder: *"Backlog review is a Metic+ operation — promoting a task puts it in
   the claimable queue for everyone and sets its price. You can still file work;
   ask an Archon to promote you if you need to nod it through."* Do not list the
   queue, do not propose verdicts.
3. **If `rank` lowercases to `metic` or `archon`** → proceed below.
4. **If `rank` is absent** (pre-rank deployment) → treat the session as
   available, the same pre-rank passthrough `/idea-triage` uses.

> Belt-and-braces: the server already rejects `POST /tasks/:id/promote` and
> `/abandon` with `403 permission_forbidden` for a sub-Metic caller. This check
> stops one early instead of after a wall of 403s. Markdown never grants
> authority ([`docs/canonical-permissions.md`](../../../docs/canonical-permissions.md), ADR 0016).

## The four buckets — and why only two get walked

**This is the whole point of the skill.** One read partitions the backlog into
four populations, and conflating them is the trap: *a row waiting on a TRIGGER is
not a row waiting on a PERSON.* Asking a human to verdict the former burns the
cadence on rows it cannot move.

| Bucket | What it is | Walked? |
|---|---|---|
| **stranded** | dep-gated, but a dependency is `abandoned` — that edge can never satisfy, so the auto-promote trigger will **never** fire | **first** — it only gets worse if left |
| **awaiting a nod** | no unsatisfied dependency; nothing gates it but a human | **yes — the review subject** |
| **waiting on a dependency** | an unsatisfied but still-live dep; shipping it auto-promotes the row (migration 163) | no — counted only |
| **spikes** | `kind='spike'` lives at backlog **by convention** (migration 020: *"Spikes stay in backlog by convention"*) | no — counted only |

A promote on a healthy dep-gated row would race the trigger and put work in the
queue whose prerequisites aren't done. Don't.

## The verbs are status-derived — do NOT offer prune

The rot card publishes four task verbs (prioritise / prune / kill / water), but
two are **status-conditional at the route**:

- `POST /tasks/:id/promote` accepts only `backlog | blocked | abandoned`
- `POST /tasks/:id/demote` accepts only `ready` (`routes/tasks.js`: `if (task.status !== 'ready') return res.fail('cannot_demote', 409)`)

So on a **backlog** row, "prune" is a guaranteed `409 cannot_demote` — it is
already at the bottom. This walk offers:

| Verb | Route | Meaning |
|---|---|---|
| **promote** | `POST /tasks/:id/promote` | the nod — backlog → ready, claimable now |
| **kill** | `POST /tasks/:id/abandon` | it is not going to happen (restorable — ADR 0152) |
| **water** | `POST /tasks/:id/water` | leave it; reset the rot clock. Changes no status, destroys nothing — its route is `requireBuilder` plus an ownership-or-atom check (creator, or the see-all-rot atom), which every Metic+ caller here holds per ADR 0157 |
| **skip** | — | no write; it surfaces again next review |

Every one is an **existing** route, so this skill adds no new authority — the
[ADR 0232](../../../docs/adr/0232-rot-is-derived-not-swept-and-water-is-the-only-new-verb.md)
precedent (*"a verb that reuses a route also reuses its permission"*).

## How to use

**Step 1 — run the walk.**

```bash
bongos exec scripts/gds/backlog-review.js
```

It reads `GET /tasks?status=backlog&include=deps&limit=1000`, prints the four
bucket counts, then walks stranded rows first and the nod queue after — each
**grouped goal-by-goal** under a header naming the goal. Flags: `--limit N`
(default 20 per sitting), `--all`, `--goal ID`.

**Why goal-by-goal matters to how you prompt.** The nod is mostly a *scope*
judgment — "does this goal want this work next" — and that is one decision per
goal, not per row. So read the goal header, then offer its rows together; you
will often give the same verdict to three in a row. Within a goal the order is
oldest-first, and goals themselves are ordered by their own oldest waiting row,
so the longest-ignored goal comes up first and nothing hides behind a busy one.
`--goal ID` narrows to a single goal; grouping is what organises the *whole*
queue.

> The `include=deps` parameter is load-bearing — it is what returns `blocked_by[]`
> with a per-edge `satisfied` flag, and without it every row looks like it's
> waiting on a person. `limit` is capped at 1000 by the route.

**Step 2 — verdict each row.** For each, the walk shows title, description, goal,
kind, estimate, reward, and filing date, then asks:

```
[p]romote (make claimable) / [k]ill / [w]ater (leave it, reset the clock) / [s]kip / [q]uit
```

Frame the question around the **outcome**, not the mechanics — the prompter is
often the owner, who is not a software engineer:

> #1003678 "Goals have no intentionality record" — filed 2026-09-07, ~2h,
> goal 1000089. Say go, drop it, or leave it for now?

**Step 3 — watch the price on a promote.** If `credits_reward` is 0/NULL, promote
**auto-assigns** a capped suggestion rather than refusing (ADR 0096 + the task
1673 amendment). The walk echoes `assigned_credits_reward` — read it out, because
that number is what the task now pays.

**Step 4 — handle a stranded row deliberately.** A stranded row prints its dead
edges and the two ways out:

- **drop the dead edge** — `DELETE /api/bongos/dependencies` with
  `{"from_kind":"task","from_id":<this>,"to_kind":"task","to_id":<dead>}`, then
  the row becomes a normal nod decision; or
- **restore the dependency** — `POST /api/bongos/tasks/<dead>/promote` returns an
  abandoned task to backlog (ADR 0152).

Never just promote a stranded row past its dead edge without one of those — the
dependency was declared for a reason, and dropping it silently is the decision
being made by accident.

**Step 5 — close out.** The walk prints a summary and how many rows still await a
human. Note the counts in the session log. If the same rows get skipped three
reviews running, they are telling you something: either kill them, or the goal
they sit in has gone quiet and belongs in `/goal-review`.

## Cadence

Run it **once a day**, like `/idea-triage` and `/blocker-review` — it is a manual
slash command, not a scheduled routine. Deferring a row is fine; the cadence is
the discipline. If a day passes without it, the queue quietly grows.

## Non-goals

- **Not a re-prioritiser.** Reordering what's already `ready` is
  `/priority-session`. This skill only decides whether a row becomes claimable.
- **Not dependency surgery.** Editing the dep graph beyond dropping one dead edge
  belongs in its own task — the graph is load-bearing (ADR 0015).
- **Not a duplicate-folder.** Merging near-duplicate reports is `/bug-triage`.
- **Not a promote-everything button.** A backlog that empties every day means the
  nod has stopped being a decision, which is the gate ADR 0234 §2 exists to keep.
