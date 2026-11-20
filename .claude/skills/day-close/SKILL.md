---
name: day-close
description: >-
  Close up YOUR day: your open work against your limit, your loose ends (claims, stuck ships, done or empty goals, unsorted ideas); put away the safe ones, park unclear ones with a note. Triggers: "/day-close", "end of day", "close up", "log off", "calling it a night", the late-hour reminder.
plain: >-
  Tidies up your own work before you stop, like closing a shop: shows how much you have left open against your limit, puts away work nobody is doing, and labels anything unclear so the next person understands it.
reach-for: >-
  At the end of the day, when Claude reminds you it is getting late, or when you have more open than your limit.
cost: >-
  Free. One read of the project's records; changes are made only after you say yes.
---

You are closing up the builder's day. Bongos is the record other builders read: a claim nobody is working, a goal whose work is all done, or a ship stuck halfway reads as a puzzle to the next person. The job is to leave nothing half-open on the counter — and to **label** what can't be put away, never to force it somewhere just so it looks sorted.

It is about **one builder — the one running it**. Every pile holds only what they hold or made; another builder's claims, goals and ideas are never listed (task 1005564). It is wider than `/builder-end` (one session's one claim): it looks across everything this builder has open.

**The point is to keep less open, not only to tidy at night.** Each builder has an open-work limit — default **3** things open at once, counting tasks they are holding plus their ships stuck halfway (`scripts/bongos/open-load.js`; `OTB_OPEN_LIMIT` moves it for one machine). Over the limit, the next move is to put something away before starting anything new. The limit is soft: the sweep shows it, `claim.js` warns when a claim goes over it, and the Conductor reminds once a day. Nothing refuses (the server's stuck-ship pause is the one hard stop).

## 1. Sweep — read only

```bash
npx bongos exec scripts/bongos/day-close.js
```

(`--json` for the raw piles.) It changes nothing. Run it from inside the repo; it needs network for the API and `origin`. Its first line is the builder's open count against their limit; then the piles:

| Pile | What it means | Who acts |
|---|---|---|
| **Put away** | Your claims with no workspace on this machine and no branch on origin — nothing can be lost | You, after one yes |
| **Still on the counter** | Your claims with a workspace | Whoever is in that session |
| **Stuck halfway** | Your ships the server lists as stuck (the same list its new-work pause reads) | `/strand-fix N`, one session each |
| **Waiting on a grade** | Your ships parked at `completed` — the review did not pass | `/grade-recover N`, one session each |
| **Needs tidying** | Your goals, ideas and claims that are unclear — parked with a note, **not allocated** | The builder decides |
| **You made today** / **This machine** | Context for the next builder; old workspaces | `/worktree-clean` |

## 2. Show it — one short board, then the asks

The script prints the board as ONE quote-block card (🌙 header, an icon per pile) so it stands apart from your own words. **Relay it exactly as printed** — do not re-word it into prose or a table; put your own sentences before or after the card, never inside it. The reminders use the same look (🌙 **Closing time**, 📦 **Too much open**); copy those blocks exactly too. Lead your own words with the open count against the limit. Over the limit, say how many must go and which are the easiest to put away (the Put away pile first, then a stuck ship to land).

## 3. Put away the safe pile — after ONE yes

Ask once for the whole **Put away** pile (list it). On yes, for each:

```bash
npx bongos release <N> --reason "day-close: no workspace or code"
```

Then, if a task in it is obviously out of date (e.g. it names an old version number that has since moved on), it is **needs tidying**, not ready work: demote it so no one claims it blind — `npx bongos exec scripts/bongos/api.js POST /api/bongos/tasks/<N>/demote` (Metic+; it lands parked, so the sweep will not re-promote it) — and say why in one line to the builder. Do not abandon it; that is the builder's call.

## 4. Needs tidying — the "don't allocate" rule

Unclear things get **parked with a reason**, never guessed into place:

- **Goal with no open tasks but shipped work** → suggest `/goal-close N`. Do not close it yourself.
- **Goal that never had a task** → ask: seed a first task, or archive it.
- **Idea with no goal** → leave it open for `/idea-triage`. Never attach a goal by guess.
- **Claim whose branch is only on origin** → check the branch (`git log origin/main..origin/<branch>`); nothing ahead → it belongs in Put away; real commits → leave it and say where it is.
- **Tasks made today on a version still in planning** → mention the count; it is the owner's scope call, not a tidy.

Ask these as one `🔀 **HUMAN DECISION:**` list, your pick marked, and act only on what they choose.

## 5. Stuck ships and old workspaces

Do not fix strands inside the close-up — each is its own session. Offer them as follow-ups (`/strand-fix N`, `/grade-recover N`). Offer `/worktree-clean` if old workspaces are listed.

## 6. Leave a note for tomorrow

Close with three lines: what was put away, what is parked and why, and what is waiting on whom. If the day's work left a discovery worth keeping, capture it (`learning-capture.js`) — but no session log just for a close-up.

## Constraints

- **Own-scoped writes.** Release only the builder's own claims. Never another builder's claim, goal or idea.
- **Never destroy work.** A claim with a workspace or a branch ahead of `main` is never in Put away; the script enforces it — don't override it by hand.
- **Never allocate to look tidy.** No guessed goals, no guessed versions, no closing goals unasked.
- **No push, no deploy.** Landing stays with `/builder-ship` and `/strand-fix`.

The Conductor hook adds a one-line reminder once an evening from 21:00 local, carrying the open count (`OTB_DAY_CLOSE_HOUR` moves it), and — over the limit — one line once a day at any hour. `OTB_DAY_CLOSE_OFF=1` silences both.
