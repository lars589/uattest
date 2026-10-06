---
name: worktree-clean
description: >-
  Remove per-claim worktrees whose work landed, and sweep the husks a locked remove leaves, via junction-safe worktree.js, never raw git worktree remove. Triggers: "/worktree-clean", "prune stale worktrees", "worktree husks".
plain: >-
  Tidies away old workspace folders on your computer whose work has already been merged.
reach-for: >-
  When your computer is collecting old workspaces.
cost: >-
  Free. It deletes only workspaces whose work is already safe in the project.
---

**Script skill (authoritative).** Two scripts do the work; this skill only sequences them and shows the list before anything is removed.

## What this skill does

1. `bongos exec scripts/gds/stale-worktrees.js` — the list. A worktree is **stale** when its branch is an ancestor of `origin/main` (the land happened) or the branch is gone (the ship deleted it). Detached worktrees, unmerged branches, and branches sitting exactly at `origin/main` (a claim worktree with no commits yet — task 1003912) are **live** and never touched. Run `git fetch origin` first so "merged into main" reflects today's main, not the last fetch. The same call also names **husks** — directories under `.claude/worktrees/` that git does not list as worktrees at all (step 6).
2. Show the stale list to the builder (names + why). A worktree holding a **live claim** should not appear: an unmerged branch is live, and since task 1003912 so is a branch still sitting exactly at `origin/main` — the window between `worktree.js add` and the builder's first commit, during which a live claim's tree really did read as "merged into main".
   - Do not treat that as a guarantee. This list is derived from git alone, with no knowledge of who holds what, so **if a name on it looks like someone's live claim, ask before removing it.** The assurance this replaced — that a current claim could not possibly be listed — is exactly what would stop an agent double-checking.
3. For each stale name: `bongos exec scripts/gds/worktree.js remove <name>`. That helper unlinks any node_modules junction BEFORE `git worktree remove`, which is the whole reason raw git is off-limits here (learning in `scripts/gds/CLAUDE.md` → "Gotchas / invariants"; the `git-guard.js` PreToolUse hook blocks the raw form).
   - A worktree with untracked leftovers (`.playwright-mcp/`, a stray screenshot) refuses without `--force`. Show the `git -C <path> status --porcelain` output; if it is only untracked junk, re-run with `--force`. If it shows **modified tracked files**, skip it and report — someone's uncommitted work is not this skill's to delete.
4. `git worktree prune` — clears any registrations whose directory is already gone.
5. Print the tally: removed / skipped (with why) / still live. Stale branches stay — a merged branch is harmless and `git branch -d` is the ship's business, not a cleanup chore.
6. `bongos exec scripts/gds/worktree.js prune-husks` — the **husks**: directories still under `.claude/worktrees/` that git no longer lists. They are the residue of an OneDrive-locked `git worktree remove`, which deregisters the worktree but cannot delete the directory (task 1002594). Nothing else can see them: a deregistered husk is absent from `git worktree list`, which is all step 1's stale scan reads. The sweep deletes only an **empty** husk that this session is not standing in and that has not been touched in 24h — the harness parks live session directories in the same folder and a fresh one looks exactly like residue. It prints the reason for every skip; `--force` waives only the 24h rule.

## Safety

- Read-only until step 3; the list is shown first.
- Never `--force` over modified tracked files.
- Never deletes branches, never touches the primary checkout, never calls `git worktree remove` directly.
- The husk sweep uses `rmdir`, never a recursive delete: a husk that gained files between the check and the call is refused by the filesystem, not emptied.
- No claim is needed: worktrees are local machine state, not project state — nothing here is committed.

## Calls

`bongos exec scripts/gds/stale-worktrees.js [--json]` · `bongos exec scripts/gds/worktree.js remove <name> [--force]` · `bongos exec scripts/gds/worktree.js prune-husks [--force]` · `git worktree prune`.
