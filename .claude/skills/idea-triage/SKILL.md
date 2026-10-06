---
name: idea-triage
description: >-
  Daily walk of the idea_inbox, which holds only HOMELESS work — anything naming a goal became a task at filing time. Promote, discard or merge each open idea. Metic+ only. Triggers: "/idea-triage", "triage ideas", "review the inbox", "walk the idea inbox", or a scheduled daily run.
disable-model-invocation: true
plain: >-
  Goes through the ideas that have no home yet and decides what happens to each: turn it into work, drop it, or merge it with another.
reach-for: >-
  Once a day, or when the idea inbox is filling up.
cost: >-
  Uses your session. An idea only changes when you decide what to do with it.
---

You are running the daily idea-triage session for Example. Open ideas in the Bongos `idea_inbox` table get walked one-at-a-time and verdicted, so the inbox doesn't accumulate stale entries.

## The inbox is HOMELESS-ONLY now (task 1003065 / R01 + task 1003691, goal 1000071)

**What changed.** Since R01 (task 1003065) a capture that NAMES A GOAL routes at
filing time — it becomes a task in that goal, in one transaction, and never appears
here. The inbox is therefore no longer "everything anyone filed"; it holds only
**work with no home yet**. Expect it to be smaller, and read what IS in it as
work that genuinely needs a decision rather than a queue to clear.

**Bugs (task 1003691, [ADR 0262](../../../docs/adr/0262-a-bug-never-lands-in-the-inbox.md)).**
A `kind='bug'` now routes even with NO goal named: the system files it into the
version's maintenance goal rather than making the reporter know the goal map. So a
bug should not appear in this queue — with **one deliberate exception**. Routing is
gated on the VECTOR, and Discord `#ideas` is not on the allowlist: it passes no
kind, so the classifier GUESSES one from keywords ("we should fix the copy" reads
as a bug), and a guess must not mint work (ADR 0234's owner-interview decision).
Bug reports from Discord have their own channel, `#bugs`, which does route.

> An earlier version of this section claimed bugs "never appear here" and credited
> task 1003071. That was false when written — 1003071 only touched the
> triage/promote path (commit `dab7e314`), while capture-time routing was 1003065,
> whose no-goal early return made the bug branch unreachable. If you are triaging a
> bug today, it arrived from `#ideas` or from a vector predating ADR 0262.

**Two consequences for how you run this skill:**

1. **Every promote names a goal.** The promote step now asks for one, defaulted
   for you, and `-` opts out explicitly. Take the default unless you disagree with
   it. Opting out is legal but rarely right: a promote with no goal is **not**
   goal-less — the server files it under the version's catch-all `<version> —
   general` goal — and that bucket carries no done-when criteria, so since
   [ADR 0183](../../../docs/adr/0183-criteria-close-themselves.md) made criteria
   close themselves off LINKED tasks, work parked there can never advance
   anything. The general bucket used to be the silent default; it is now a choice
   you type.
2. **The default is inherited, not guessed, when a hint exists.** Precedence is
   the stored `suggested_goal_id` (written at capture precisely so triage inherits
   the guess) FIRST, then the R07 suggester (`GET /goals/suggestions`). When the
   suggester supplies it you are shown the score and the matched terms — check
   them: token overlap can match an incidental word, so a low score with one
   matched term is weak evidence, not a recommendation.

**If an idea should have routed at filing and didn't**, that is worth noticing
rather than just promoting past: it usually means the filer named no goal, and the
capture-time suggester (R08/R09/R11 surfaces) is where the fix belongs.

> **This skill is no longer the only way to triage.** Since task 1002447 a Metic+ builder can promote, discard and merge from the **hall** — the Home "Needs your attention" card's idea rows each carry a *Triage* verb that opens the record overlay, where all three forms live. No Claude session involved. What this skill adds over the hall is the **parallel development pass** (Step 1.5b) — an idea fleshed out into open questions/risks before the verdict — so reach for it when the queue needs judgment, and use the hall when it just needs clearing.

## Rank gate — Metic+ only

**Gated to Metic+ (Metic, Archon); not Xenos.** Triage verdicts (promote, discard, merge) reshape the team's backlog — a trusted-builder operation (GDS-V3 criterion C2, `three-ranks-gate-everything`; [`docs/canonical-permissions.md`](../../../docs/canonical-permissions.md), [ADR 0018](../../../docs/adr/0018-three-rank-model-goes-live.md)). A Xenos can still **file** an idea (`POST /api/bongos/inbox`); they just can't verdict them.

**Enforce the gate at the very top of the session, before reading anything else:**

1. Call `GET /api/bongos/me` and read `builder.rank`. Compare case-insensitively (lowercase it before testing).
2. **If `rank` is present and lowercases to `xenos`** → stop immediately. Tell the builder: *"Idea triage is a Metic+ operation — promoting, discarding, or merging an idea reshapes the team's backlog. You're currently Xenos. You can still file a new idea via `POST /api/bongos/inbox`; ask an Archon to promote you if you need to triage them."* Do not list open ideas, do not propose verdicts.
3. **If `rank` lowercases to `metic` or `archon`** → proceed with the steps below.
4. **If `rank` is absent** (the GET /me response has no `rank` field — only possible against a deployment where the three-rank model hasn't shipped yet): treat the session as available, exactly as `/planning-session` and `/priority-session` do in their pre-rank passthrough mode. Note in the session log that the gate ran in pre-rank passthrough mode.

> Belt-and-braces: the server already rejects `PATCH /inbox/:id` with `403 rank_forbidden` for non-Metic+ callers (#360 / ADR 0018) — this check just stops a Xenos early instead of after a whole walk of 403s. Markdown never grants authority (criterion C7).

## What this skill does

1. Lists open ideas via `GET /api/bongos/inbox`.
2. **Batches near-duplicate ideas** into one verdict per cluster (`bongos exec scripts/gds/triage.js`'s `clusterIdeas`), so a backlog of similar asks doesn't cost one decision each (task 1001465).
3. **Develops what's left with a LEAN inline pass by default** — reasoning from context already in the session, no subagent spend — and escalates to a FEW targeted subagents only where repo grounding would actually flip the verdict (task 1001465; the old unconditional 12-subagent fan-out is now opt-in, task 930's original mechanism).
4. For each, prompts the user with: **promote** (create a task and link it), **discard** (closed, no action), or **merge** (this duplicates idea N, mark merged into N).
5. Updates each idea via `PATCH /api/bongos/inbox/:id` with the verdict.

## How to use

**Step 1 — fetch the open inbox.**

```
bongos exec scripts/gds/api.js GET /api/bongos/inbox
```

(`api.js` is the cross-platform Bongos API helper — it signs the request with your
session token and runs on Windows/macOS/Linux, replacing the old `python3`/`curl`
block. For a human at a terminal, `bongos exec scripts/gds/triage.js` runs the whole
walk interactively instead.)

If `open_count` is 0, print "inbox empty — nothing to triage today" and exit.

**Read the GRADE on every row, and walk in two groups** (task 1002924 / BV1.R148).
Each idea carries `grade` (`quick` | `spark` | `full`) and, for a Full Idea, a
`completeness_score` out of 100. The grade decides what kind of verdict the idea
even needs, so it is the first thing to read, not a detail:

| Grade | What it is | What triage does with it |
|---|---|---|
| `full` | five answered fields, scored | **Do not auto-convert.** Reason about the right shape — a goal, a task, or a merge — and *recommend* it (that is R149's rule; an ideator often lacks the full picture). |
| `spark` | a quick idea its **author** offered up for development | Leave it for someone to develop — it is already in the spark queue at `/builders/ideas`. Promoting it discards the author's invitation. |
| `quick` | a thought filed fast | Promotes straight to a task, as it always did. |

Walk **Full Ideas first, best-formed first (highest completeness), then quick
ideas and sparks newest-first.** Two runs, not one list sorted by score: a single
score-sorted list puts every unscored idea after every scored one, and in a long
inbox nobody reaches them. `bongos exec scripts/gds/triage.js` already walks in exactly
this order and prints the grade on each card, and `render-ideas.js` renders the
same two sections — so the interactive walk, the generated file and this skill all
show the same idea the same way.

**Step 1.4 — a cheap staleness pass, before anything else costs a token.** Quick-skim each open idea's title/body against the current codebase/CLAUDE.md to catch ones already implemented, already superseded, or otherwise obviously stale. A recent triage found 47 of 170 open ideas already stale — filtering those first means neither the batching pass nor the development pass below is spent on an idea that just needs a discard.

**Step 1.5a — batch near-duplicate ideas BEFORE developing anything (task 1001465).**

Run `clusterIdeas` (`scripts/gds/triage.js` — pure, no I/O): it groups open quick ideas (not Full Ideas, not sparks) that share a `kind` and a high title/body word overlap. For each cluster it returns, offer the user ONE decision covering the whole group instead of walking each member — this is the actual fix for "triage costs a ton of credits" (idea 377): a backlog of near-identical asks used to cost one full development + verdict PER idea, and now costs one:

> Cluster of 3 likely duplicates: #101 "Add dark mode toggle", #145 "Dark mode support", #203 "Support a dark theme". **Keep #101 and merge the rest, discard all, walk them individually, or skip?**

- **Keep #N** → merge every other member into #N (`merged_into_idea_id`), leaving #N itself open — it still gets the normal Step 2 walk below, since "which of these duplicates is real" and "should the real one become a task" are different decisions.
- **Discard all** → every member closed, one shared `triage_note`.
- **Individually** → ignore the grouping for this cluster; each member returns to the normal walk.
- **Skip** → leave the whole cluster open; it clusters again next triage.

`bongos exec scripts/gds/triage.js` already runs this pass automatically before its interactive walk — if a human is running the deterministic walker instead of you, they get it for free with no flag.

**Step 1.5b — develop what's LEFT with a lean inline pass by default (task 1001465).**

**The subagent fan-out below is now OPT-IN, not the default.** The prior design ran a 12-Opus-subagent fan-out unconditionally on every session — the main cost driver idea 377 was filed about. Default instead to a **lean inline pass**: for each remaining open idea (after batching), reason about it yourself using context you already have — CLAUDE.md, `/recall`, a quick grep if genuinely needed — and write a short inline note (one or two lines: what it touches, the one open question that matters) directly in the session. No `Agent` tool call, no JSON cache file, no per-idea cost.

**Escalate to a targeted subagent only when the inline pass can't tell whether repo grounding would flip the verdict** — a technical/GDS idea where "is this already implemented?", "does this surface still exist?", or "would this conflict with X" needs an actual code read to answer, not a guess. Cap this at a **FEW** ideas per session (3, not 12) — if more than 3 are genuinely ambiguous, develop the 3 oldest and note the rest are walked on the inline pass alone.

- **Model:** `opus` for a targeted subagent — this is still research/design analysis against the live repo (CLAUDE.md §2's routing table), never downgrade to Haiku just because there are fewer of them now.
- **One idea per subagent**, same instruction as before: give it the idea's `id`, `title`, `body_md`, `kind`, `captured_by`, and ask for the same JSON shape (`summary`, `integration_surfaces`, `open_questions`, `challenges`, `risks`, `rough_effort`, `recommendation`) — only the FAN-OUT WIDTH changed, not the shape a developed idea returns.
- **Collect results into the same development cache**, written to `${TMPDIR:-/tmp}/otb-idea-development.json` (Windows: `%TEMP%\otb-idea-development.json`):

  ```json
  { "generated_at": "<ISO>", "ideas": { "228": { "summary": "...", "integration_surfaces": ["..."], "open_questions": ["..."], "challenges": ["..."], "risks": ["..."], "rough_effort": "M", "recommendation": "needs-info" } } }
  ```

  A subagent that fails or returns unparseable JSON is simply omitted — that idea is walked on the inline pass alone, not blocked.

**The full 12-idea fan-out is still available, explicitly, when the queue genuinely needs it** — a big backlog day, or the user asks for "the deep pass" / "develop all of these with subagents". When asked for it: spawn one Opus subagent per open idea (not just the ambiguous few), up to the same 12-idea cap (oldest-first), same instruction and cache shape as above. This is the OLD default, now a deliberate choice rather than something that runs unasked every time.

If a human will run the interactive walker instead of the Claude-driven walk below, hand it the cache (works the same whether it came from the lean pass's few subagents or the full deep pass):

```
bongos exec scripts/gds/triage.js --development "${TMPDIR:-/tmp}/otb-idea-development.json"
```

`triage.js` prints each idea's developed block above its verdict prompt, and runs its own batch-cluster pass (Step 1.5a) automatically first. It never *generates* the analysis (that's this skill's job); it only displays what the cache holds, and runs exactly as before when no cache is present.

> **Not in this cut (follow-up leg).** The next step is to let the Archon push the developed `open_questions` *back to the submitter* — a round-trip in the Discord `#ideas` thread / DM before promotion — so the submitter says how they'd want it integrated. That needs the Discord bot interaction + idea↔thread linking (idea `#216` / [ADR 0033](../../../docs/adr/0033-discord-bot-service-principal.md)) and is tracked separately. For now the open questions are answered by the Archon in-session.

**Step 2 — walk the list, idea by idea.**

Present each idea with:
- id + kind (auto-classified by B2 — one of `feature`, `bug`, `infra`, `refactor`, `spike`, `learning-capture`, `cleanup`, `decision`, `blocker-resolution`, `unclassified`, `criterion-proposal`; mirrors `tasks.kind` plus the triage-only `criterion-proposal` value, `modules/ideas/inbox.js`)
- title
- body_md (full)
- captured_at + captured_by
- **its developed block** (from Step 1.5b): summary, integration surfaces, open questions, challenges, risks, rough effort, and the subagent's recommendation

Then ask the user (concise prompt — Lars is an EE, not a software engineer; frame in product/outcome terms). Lead with the developed open questions, since those are what the Archon actually needs to decide:

> Idea #N: "{title}". {one-sentence developed summary}. **Open questions:** {the subagent's open_questions}. **Promote, discard, or merge with another idea?**

**Step 2.5 — for a FULL IDEA, work out its SHAPE and recommend one (task 1002925 / BV1.R149).**

Only for `grade='full'`. A quick idea promotes straight to a task — that is what a
quick idea is *for* — and a spark is not yours to convert at all (its author
offered it up for development, and promoting it discards that invitation).

**Why this step exists, in the owner's words:** *for ideators it is hard to say
what is a task or a goal, because it is often hard to have the full picture.* So a
Full Idea gets **thought about** at triage instead of being forced down a fixed
path. The person who wrote it was not required to know whether it was one task or
a quarter of work; that is the judgement triage adds.

**Three shapes it can take.** Read the five answers — especially *how does it fit*
— and decide which one it actually is:

| Shape | It looks like this | What you would create |
|---|---|---|
| **Goal** | several distinct pieces of work, or an outcome you would measure rather than finish; the "big picture" answer names more than one surface | a goal, plus **draft done-when criteria** taken from what the idea says "done" means |
| **Task** | one concrete change with an obvious end | a single task in whatever goal already owns that area |
| **Merge** | work that already exists — an open goal, a live task, or another idea says the same thing | nothing; point it at the existing record |

**Do the legwork before recommending.** A recommendation with nothing behind it is
worse than no recommendation, because it looks like an answer. Run
`/recall <the idea's subject>`, check the goal board
(`bongos exec scripts/gds/goal.js list`), and look for an existing task before proposing
anything new — "merge" is the recommendation people skip, and it is often the right
one.

**Then RECOMMEND, and show the reasoning.** Say which shape and *why*, name the
alternative you rejected and why, and — for a goal — sketch the criteria you would
draft. One short paragraph, not a report:

> Idea #N (Full, 84/100) — **I'd make this a goal.** Its "big picture" answer names
> three separate surfaces (the CLI, the hall, and the Discord mirror), so a single
> task would either be a month long or quietly deliver only one of them. Draft
> criteria: *(1) the CLI can do X; (2) the same is reachable in the hall; (3) the
> Discord path stops needing the old flag.* I considered a task in goal 1000071
> since the routing work overlaps, but this outlives that goal's scope.
> **Goal, task, or merge?**

**NOTHING CONVERTS UNTIL THEY ANSWER.** The recommendation is a recommendation:
do not create the goal, do not create the task, do not mark the idea promoted
until the human has chosen. If they pick a different shape than you recommended,
that is the step working — build what they chose, not what you argued for. (The
server backs this up at the capture end: a Full Idea never auto-routes,
`full_idea_never_routes` in `modules/ideas/routing.js`. This step is the same rule
at the triage end, where the judgement is.)

**Step 3 — apply the verdict.**

**Promote → pick the tier (BV1.R64 / ADR 0086).** An idea no longer only becomes a *task* — it can promote into any tier of the work hierarchy: a **goal** (a whole module-scoped workspace), a **criterion** (a new done-when test), or a **task** (a single unit of work). Choose by the idea's size: a broad objective → goal; a "we should also require X to be done" → criterion; a concrete piece of work → task. Frame the choice to the user in those terms, then create the right record and mark the idea promoted.

- **Promote → task** (the common case). Ask for version, title, est_minutes, priority, credits_reward (`touches[]` optional — [ADR 0049](../../../docs/adr/0049-split-parallel-safety-contract.md)). `POST /api/bongos/tasks` lands the new task in `backlog`, **not** `active` — it still needs `POST /tasks/:id/promote` (Metic+) before it's claimable. **Pass `goal_id` on the create** so the task lands in a real goal rather than the version's `"<version> — general"` catch-all — `POST /tasks` has accepted it since task 1763, and the 201 now returns a `goal_advisory` when the task ends up with no proper home. If no existing goal fits, run [`/goal-create`](../goal-create/SKILL.md) instead of filing it loose.

  ```
  # 1. Create the task (--body-file avoids shell-quoting the touches[]/description).
  bongos exec scripts/gds/api.js POST /api/bongos/tasks --body-file <path-to-task.json>
  #    task.json: {"version_id":"...","title":"...","description":"...","touches":[...],
  #    "est_minutes":N,"priority":N,"credits_reward":N,"source":"idea_inbox","source_ref":"idea:<idea_id>"}
  # 2. Mark the idea promoted, pointing promoted_to_task_id at the new task id.
  bongos exec scripts/gds/api.js PATCH /api/bongos/inbox/<idea_id> --body '{"status":"promoted","promoted_to_task_id":<new_task_id>}'
  ```

- **Promote → goal** (Metic+; Archon if the scope includes a `protected` module). For anything needing criteria and seed tasks, run [`/goal-create`](../goal-create/SKILL.md) — it does the reuse-vs-new check, the scope wall and the sign-off. The bare one-liner below is fine only for a goal you are deliberately leaving empty. Create the goal, then mark the idea promoted — `promoted_to_task_id` stays NULL (a goal isn't a task; note the new goal id in the session log, mirroring how criterion-promotion records its link).

  ```
  bongos exec scripts/gds/api.js POST /api/bongos/goals --body '{"version_id":"<ver>","title":"...","description":"from idea #<idea_id>","scope_modules":["<module-key>", ...]}'
  bongos exec scripts/gds/api.js PATCH /api/bongos/inbox/<idea_id> --body '{"status":"promoted"}'
  ```

- **Promote → criterion** (Metic+ — `idea.ratify`, metic-floored since ADR 0157; done-when writes are scope-shaping, criterion C2). This reuses the existing ratify path: the idea must be `kind='criterion-proposal'` with a `body_md` JSON of `{target_version, criterion_md, sort_order_hint}` (the `/planning-session` shape). One atomic call both inserts the criterion and marks the idea promoted:

  ```
  bongos exec scripts/gds/api.js POST /api/bongos/inbox/<idea_id>/ratify --body '{"notes_md":"ratified via idea-triage"}'
  ```

  If the idea isn't already criterion-proposal-shaped, either re-file it in that shape or promote it to a task/goal instead — don't hand-write a `done_when_criteria` row.

**Discard** → mark it closed, with the reason (`triage_note`, task 1002447 / migration core_195 — a discard with no reason is a verdict nobody can audit):

```
bongos exec scripts/gds/api.js PATCH /api/bongos/inbox/<idea_id> --body '{"status":"discarded","triage_note":"superseded by the new gate"}'
```

**Merge** → ask the user which other idea N is the canonical one, then fold this one into it:

```
bongos exec scripts/gds/api.js PATCH /api/bongos/inbox/<idea_id> --body '{"status":"merged","merged_into_idea_id":<canonical_idea_id>,"triage_note":"same ask as #N"}'
```

> **`merged_into_idea_id`, NOT `promoted_to_task_id`.** This skill used to document the latter; that column is `REFERENCES tasks(id)`, so an idea id written there either trips the FK (a 500) or silently points at an unrelated task that happens to share the number. Task 1002447 added the real column. The server refuses a self-merge (`MERGE_SELF`), a target that doesn't exist (`MERGE_TARGET_NOT_FOUND`), and a target that is itself merged (`MERGE_TARGET_MERGED` — it names where the chain ends, so retarget there).

**Defer** is implicit — leave the idea open by not patching it. Inbox count stays the same; the idea will surface again tomorrow.

**Step 4 — surface a summary.**

Report to the user:
- Total walked
- Promoted (count + new task ids)
- Discarded (count + ids)
- Merged (count + ids)
- Deferred (count + ids — these will surface again next session)
- New inbox open_count

## Why we run this daily

Daily cadence keeps the inbox actionable. If the user is busy, a fast pass with mostly "defer" verdicts beats skipping the session — the cadence is the discipline, not the volume of decisions.

## Tone for the user

Lars is the prompter (see CLAUDE.md §2). Frame promotion decisions in terms of product outcome, not implementation: "this would let the player resume after refresh" not "this would add a localStorage hook." Decide the implementation details yourself when promoting.
