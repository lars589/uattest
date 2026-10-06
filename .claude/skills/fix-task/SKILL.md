---
name: fix-task
description: Claim, fix, verify, and ship a single Bongos task by id — the standard cloud-bongos task loop. Use when asked to "claim/fix/ship task NNNN".
plain: >-
  Does one task from start to finish: reserves it, fixes it, checks it and hands it in.
reach-for: >-
  When you are asked to do a specific task by its number.
cost: >-
  Handing it in runs a paid quality review, usually a few dollars charged to the project, and merges the work into the live code.
---

You are running the standard task loop for cloud-bongos: read a task, verify its premise, claim it, fix it test-first, then ship it. This skill chains the pieces `/builder-claim` and `/builder-ship` already own — it does not re-derive their mechanics.

## What this skill does

Runs the recurring "claim, fix, and ship task NNNN" macro end to end. Its own value is the parts nothing else covers: verifying the task's premise before claiming (step 1), the test-first discipline (step 4), and confirming the ship actually landed instead of bouncing (step 7). For claiming and shipping themselves, it defers to `/builder-claim` and `/builder-ship`.

## How to use

1. **Read the task and verify it BEFORE claiming.**
   ```
   bongos exec scripts/gds/api.js GET /api/bongos/tasks/<id>
   ```
   If the task names a root cause, open the actual code it points at and confirm that root cause is real — don't take the task's own diagnosis on faith. If the description doesn't match what the code does, say so before writing anything; a task built on a wrong premise needs a corrected task, not a fix for the wrong bug.

2. **If the task is in `backlog`, promote it to `ready` first** (Metic+ only — `POST /tasks/:id/promote` is rank-gated):
   ```
   bongos exec scripts/gds/api.js POST /api/bongos/tasks/<id>/promote --body '{}'
   ```
   Skip this step if the task is already `ready`.

3. **Claim it** — see `/builder-claim` for the full mechanics (dedicated worktree, one-claim-per-session, and its error codes). In short:
   ```
   bongos claim <id> --worktree <worktree-name>
   ```

4. **Write a failing test FIRST, then fix.** Add the case to the relevant `tests/*.mjs` file (or create one if none covers the surface) that reproduces the bug/gap the task describes. Run it and confirm it fails for the reason you expect — THEN implement the fix — THEN confirm the same test passes.

5. **Run the full verification the ship gate expects, not just the one new test:**
   - the whole touched `tests/*.mjs` file (every case, not just the new one)
   - `bongos exec scripts/gds/fitness.js` (the architecture fitness gate — core/host boundary, CLAUDE.md budget, rank-guard)
   - any other suite CLAUDE.md/CONTRIBUTING.md calls out for the surface you touched (e.g. a module's own nested CLAUDE.md test pointer)

   A throwaway verification script or a one-off Playwright probe does **not** satisfy this — the grader only trusts a checked-in `tests/*.mjs` case (see `/builder-ship`).

6. **Ship from the claim branch** — see `/builder-ship` for handoff notes, the value summary, and the completion-card rendering contract. In short:
   ```
   bongos ship <id> --notes-file notes.md --summary-file summary.txt
   ```
   **Never merge the claim branch into `main` before running `ship.js`.** `ship.js` diffs the branch against `main`; a pre-merged branch yields an empty diff, and the only way out is `--allow-empty` (dead-ends the task at `completed`, needing an Archon-only confirm) or reverting the merge. Ship from the branch and let `ship.js` land it — the same trap `/builder-ship` calls out.

7. **Confirm the outcome — don't assume the ship landed.**
   ```
   bongos exec scripts/gds/api.js GET /api/bongos/tasks/<id>
   ```
   - `shipped` (or `confirmed`, awaiting `/merge-mode`) → done; relay the completion card per `/builder-ship`.
   - Still `completed` → read the grade shape before reacting; two distinct outcomes park a task here:
     - **`GRADER UNAVAILABLE`** (`panel_outcome='unavailable'`) — the panel could not run (infra outage/bypass). **Not a quality rejection**: there are no findings to fix. Re-run the grade when the grader is reachable: `bongos ship <id> --regrade`.
     - **A genuine `FAIL`** — the grader bounced it with findings. **Surface its feedback verbatim** — don't paraphrase or summarize away the specifics — then loop back to step 4 with that feedback in hand; fix, commit, and re-grade: `bongos ship <id> --regrade`.

## Constraints

- **Don't skip step 1.** A task's own description can be wrong; verifying against the live code before claiming avoids burning a claim on a fix for a bug that doesn't exist as described.
- **Don't claim a task still in `backlog`** — promote it first (step 2), or the claim is refused (`TASK_NOT_READY`; see `/builder-claim`).
- **Don't substitute a manual/throwaway check for a committed test** — see step 5.
- **Don't merge to `main` before shipping** — see step 6 and `/builder-ship`'s own callout on the same trap.

## Files this skill touches

- Calls: `GET /api/bongos/tasks/:id`, `POST /api/bongos/tasks/:id/promote`, plus whatever `/builder-claim` and `/builder-ship` call for claiming and shipping.
- Reads: `~/.config/otb/gds-session.json`
- Writes: the fix itself, plus a new or extended `tests/*.mjs` case.
