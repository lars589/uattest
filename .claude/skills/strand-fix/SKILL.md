---
name: strand-fix
description: >-
  Land ONE stranded ship — a task parked at confirmed that the reconciler gave up on. Also the fix for a claim refused 409 REBASE_REQUIRED. Triggers: "/strand-fix N", "task N is stranded", "land the strand", "my claim says REBASE_REQUIRED".
requires: [gh]
plain: >-
  Rescues one piece of approved work that got stuck on its way into the project, and gets it merged.
reach-for: >-
  When work is approved but never reached the live code, or a task refuses to start because older work is stuck.
cost: >-
  Uses your session. It gets the stuck work merged into the live code.
---

You are landing one stranded task. The reconciler is not coming back for it — a strand produces no signal of its own, so nothing happens until someone walks it.

## Preflight (first, always)

```bash
bongos exec scripts/gds/skill-preflight.js strand-fix   # exits 1 naming what is MISSING (gh)
```

## Which shape is this? (read first)

`bongos exec scripts/gds/strand-watch.js --json` — find the task. Three shapes, three owners:

| shape | status | reason | this skill? |
|---|---|---|---|
| `unprovable` | confirmed | `strand:*` | **yes** — below |
| `unlanded` | confirmed | none | no → `/merge-mode` |
| `ungraded` | completed | none | no → `/grade-recover` |

## The walk (unprovable only)

1. **Find the work.** In the main checkout:
   ```
   git fetch -q origin
   git branch -a --list "*N*"
   git log origin/main --oneline --grep="N" | head
   gh pr list --search "N" --state all --json number,state,mergeable,url
   ```
2. **Pick the ONE matching case.** (Nothing here moves **main** by hand: landing is server-mediated (ADR 0031 §6 / ADR 0055), so the step that lands is always `ship.js`. `git fetch` always works.)
   - **A. A main commit carries `(task N` and the post-merge `unit` + `main-audit` on main are green** (`gh run list --branch main --limit 4`): the land happened; only the proof failed. The proof is the claim's recorded tip (`claims.published_head_sha`, task 1547) being an ancestor of main — and a `no_branch_no_tip` claim has none (the work rode in on another branch, e.g. a cloud-agent batch, or a `--here` claim). **Record the tip first**: the owner (Archon) sets that column on the task's latest claim to the full 40-char SHA of the main commit — a direct DB write on the box as the DB owner, so it runs under this task's own ledger with the SQL in the ship note (`UPDATE claims SET published_head_sha = '<sha>' WHERE id = (SELECT id FROM claims WHERE task_id = N ORDER BY claimed_at DESC, id DESC LIMIT 1)`). Then the reconciler proves it within ≤5 min, or flip it yourself: `bongos exec scripts/gds/api.js POST /api/bongos/tasks/N/ship --body '{}'`. Never `no_artifact: true` here — the artifact exists, and the ledger would record a falsehood. Credits land on the flip (ADR 0120). (Before task 1003434 the manual POST refused even with a tip when the claim had no branch; the reconciler path always worked.)
   - **B. A local branch exists with commits ahead of `origin/main` and no PR**: the ship never pushed. From that worktree: `git push -u origin <branch>` then `gh pr create --base main --head <branch> --fill`. Green `unit` → server auto-merge → the reconciler flips it within ~5 min. If it merges but does not flip, do **A**.
   - **C. A PR exists but is `CONFLICTING`**: only the **branch owner** can resolve this, and **never with `--force`**. **Merge, never rebase** (task 1002788): the branch is already published and the server's publish is append-only, so rewriting its history makes every later push non-fast-forward and the task un-landable while the claim gate keeps the owner's queue shut.
     - **If you ARE the branch owner** (the usual case — it is your own strand), from that worktree:
       ```bash
       git fetch -q origin
       git merge origin/main      # resolve the conflicts, commit
       bongos ship <task-id>
       ```
       **`ship.js` is the landing step, not `git push`.** Landing is **server-mediated** (ADR 0031 §6 / ADR 0055): `/builder-ship` uploads a bundle and the SERVER moves main. A push from your machine does not land the task even where it succeeds, and on the documented default machine a push to main has no credential at all. So "resolve and push" is not an exit — it leaves the task at `confirmed`, unpaid, with nothing named to do next. That is what stranded task 1003529.
       **The resume does NOT re-grade.** `ship.js` sees `confirmed` + "you last held the claim", prints `resuming the merge + deploy (no re-claim needed)`, and lands it. The standing caution about re-running `ship.js` on graded work is about `--regrade`, which pays for a second panel; a bare resume from `confirmed` does not. Verified end to end on task 1003529 → PR #745 merged as `e827063f`.
     - **If it is SOMEONE ELSE'S strand**: report the PR URL and stop. That exit is still correct — only the owner can resolve a real content conflict, and this skill does not resolve conflicts for them.
   - **D. Nothing anywhere** — no branch, no PR, no commit: a codeless confirm. Ask what the task delivered. Work done outside this repo (on the box's instance checkout, a DB-only change captured in the ship note) is legitimately artifact-free → **A** with the reason in the ship body: `--body '{"note":"codeless: <where the work lives>"}'`. If the work was never done, release it instead so it returns to `ready`: `bongos release N --reason "stranded codeless confirm; nothing delivered"`.
3. **Verify**: `bongos exec scripts/gds/api.js GET /api/bongos/tasks/N` → `"status": "shipped"` (or `ready` after a release). Re-run `strand-watch.js --line` — the task must be gone from it. If the claim gate was the symptom, `claim.js` now succeeds.

## Rules

- One task per invocation; the strand list is short and every case differs.
- Never `git push origin main`, never force-push, never re-`confirm` around the grader — the fix is always land, flip, or release.
- Wrong shape → hand off (`/merge-mode`, `/grade-recover`) instead of improvising.
- No claim is needed to walk someone else's strand — landing confirmed work is the reconciler's job, and this is its manual fallback (Metic+; the ship route is rank-gated server-side).
