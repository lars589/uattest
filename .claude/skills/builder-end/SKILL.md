---
name: builder-end
description: >-
  Close out this session: resolve the active claim, confirm the tree is clean, and tear down the worktree. Own-scoped; /builder-exit offboards a whole builder. Triggers: "/builder-end", "end my session", "sign off", "wrap up and clean up".
plain: >-
  Wraps up your working session: settles the task you were on, checks nothing is left unsaved, and tidies away your workspace.
reach-for: >-
  When you are done for now and want to sign off cleanly.
cost: >-
  Free. It removes your temporary workspace once your work is safely saved.
---

You are closing out the current Claude Code **session** safely: resolve the held claim, confirm no work is stranded uncommitted, and clean up the session's git worktree. It is the bookend to `/builder-start` — one command so a session ends in a known-clean state instead of leaving a half-shipped claim and an orphaned worktree behind.

This is **not** `/builder-exit` — that deactivates an entire builder (releases all claims, drops rank to Xenos). `/builder-end` is the everyday "I'm done with this session" close-out for one session's one claim.

## What this skill does

Composes operations that already exist, in a safe order, with the destructive ones gated last:

1. **Resolve the claim** — `/builder-ship` when there's committed, shippable work; `/builder-release` when there isn't. (It calls the sibling skills; it does not re-implement shipping.)
2. **Clean-git verify** — refuse to go further if any *tracked* file is uncommitted. This is the same guard `scripts/gds/ship.js` enforces (`trackedDirty` in [`modules/lifecycle/ship-preflight.js`](../../../modules/lifecycle/ship-preflight.js)): untracked scratch is ignored, but a modified/staged/deleted tracked file means real work isn't committed — stop before anything is lost.
3. **Worktree teardown** — from the main checkout, remove this session's linked worktree via `bongos exec scripts/gds/worktree.js remove` (junction-aware), `prune`, and delete the now-merged `claude/<name>` branch.

It never pushes to `main`, never `ssh`-es, never runs a deploy — landing is `/builder-ship`'s job (server-mediated). It only ever touches the caller's **own** claim and **own** worktree.

## How to use

### 0. Snapshot the session state — read, don't mutate yet

- **Held claim(s):** `bongos exec scripts/gds/api.js GET /api/bongos/me` → `active_claims`. (A builder can hold parallel claims across sessions; resolve only the one this session worked.)
- **Are we in a linked worktree?** `git rev-parse --git-dir` differs from `git rev-parse --git-common-dir` ⇒ yes (`--git-dir` is the per-worktree `<main>/.git/worktrees/<name>`; `--git-common-dir` is the shared `<main>/.git`); they're equal ⇒ main checkout (skip step 3). Test `--git-dir`, **not** `--git-common-dir` — the latter always returns the shared `<main>/.git` even inside a worktree, so checking *it* for `/worktrees/` never matches.
- **Working-tree state:** `git status --porcelain`.
- **Commits ahead of main:** `git rev-list --count main..HEAD` (fall back to `origin/main..HEAD`). Real commits ⇒ likely shippable; zero ⇒ likely a release.

### 1. Resolve the claim

- **Commits ahead AND clean tree ⇒ shippable.** Confirm with the user, then run the **`builder-ship`** skill with honest handoff `--notes` and a one-line non-jargon `--summary`. Don't fabricate the summary — if you can't state the value plainly, it isn't shippable; release instead.
- **No commits / no shippable progress ⇒** run the **`builder-release`** skill with a one-phrase reason.
- **No active claim ⇒** nothing to resolve; go to step 2.
- **Ship strands at `confirmed`** (merge conflict or a failing check — the ship lands, the merge doesn't): **stop here.** The branch still needs to land via `/merge-mode`. Surface that and do NOT tear down the worktree — its branch isn't merged yet (step 3's `git branch -d` would correctly refuse it).

### 2. Clean-git verify

Re-run `git status --porcelain`. Apply the `trackedDirty` rule: ignore `??` untracked lines, but if **any** tracked file is modified/staged/deleted/renamed/unmerged, **stop** and surface those files so the user can commit or discard them. Never tear down a worktree that still holds uncommitted tracked work — that is exactly how work gets lost.

### 3. Worktree teardown — gated, and last

Proceed only when **all** hold: we're in a linked worktree, the claim is resolved, the tree is clean, and (for a ship) the branch is merged into `main`.

You can't remove the worktree you're standing in, so run the removal **from the main checkout** — resolve its path the way `ship.js` does (`findMainWorktree`: parse `git worktree list --porcelain` for the block whose `branch` is `main`). From there:

```bash
bongos exec scripts/gds/worktree.js remove <this-worktree-path>   # junction-aware wrapper: unlinks a node_modules junction FIRST, then runs `git worktree remove` (which still refuses a dirty tree; do not --force)
git worktree prune
git branch -d claude/<worktree-name>        # -d (not -D): git refuses an unmerged branch, by design
```

Removing this session's worktree ends its filesystem — do it last, and tell the user the session is closed and they can start fresh from `/builder-start` anytime.

**On the main checkout (not a worktree):** skip the teardown above — there's nothing to remove. Resolving the claim + the clean-git verify is then the whole close-out.

## Constraints

- **Own-scoped.** Only this session's claim and this session's worktree — never another builder's claim, never another worktree, never `git worktree remove` a path you didn't create.
- **Never destroy uncommitted work.** The clean-git verify gates teardown; the dirty-tree refusal in `git worktree remove` and `git branch -d` (not `-D`) are the load-bearing safety nets — keep them as written. But note: that refusal does NOT protect a Windows worktree carrying a `node_modules` junction — node_modules is gitignored, so the clean check passes and `git worktree remove` (even without `--force`) follows the junction and deletes the SHARED node_modules (task 1002809). That is why teardown runs through `bongos exec scripts/gds/worktree.js remove`, which unlinks the junction first.
- **Never push / ssh / deploy.** Landing goes through `/builder-ship` (server-mediated); this skill stays local to the builder's machine and makes no API writes of its own.
- **Teardown never runs unattended without a clear go.** Ship vs. release can be inferred from state (commits ⇒ ship, none ⇒ release) and proceed; removing the worktree ends the session, so wait for an explicit yes before step 3.
- **Don't tear down a branch that isn't merged.** A released task or a ship stuck at `confirmed` still has an un-landed `claude/*` branch — `git branch -d` will refuse it; respect that and leave the worktree for `/merge-mode`.

## Files this skill touches

- Reads: `~/.config/otb/gds-session.json`
- Runs: the `builder-ship` / `builder-release` skills (`scripts/gds/ship.js` · `release.js`), `bongos exec scripts/gds/api.js GET /api/bongos/me`, and local `git worktree` / `git status` / `git branch` commands. It makes no API writes of its own.
