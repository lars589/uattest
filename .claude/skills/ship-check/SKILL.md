---
name: ship-check
description: >-
  Run every freshness and fitness check ship.js will run, and get the healing command for each stale file. Triggers: "/ship-check", "am I ready to ship", "what will ship trip on", "check before I ship", "is anything stale".
plain: >-
  Runs the same checks a hand-in will run, and tells you how to fix anything that would fail.
reach-for: >-
  Before handing in work, to avoid a failed attempt.
cost: >-
  Free. It only checks; fixing is up to you.
---

# /ship-check — the pre-ship table

**Script skill (authoritative).** The whole action is one command, run from the worktree you will ship from:

```bash
bongos exec scripts/gds/ship-check.js
```

Add `--tests` to also run the DB-free unit lane (slow; minutes). Add `--json` for machine output.

## Why this exists

Builders were running the same eight generators and checks by hand, one Bash call at a time — 223
invocations across 140 sessions in three days — because a ship that fails preflight costs a grader
run, and the last 30 days of session logs name a stale generated file (`docs/copy-registry.json`,
a nested `CLAUDE.md` symbol block, `docs/file-map.md`, `docs/api/openapi.json`, the §13 session
snippet) in roughly a quarter of all sessions. This is that sequence as one call with one table.
It changes nothing: every step is a `--check`; the **fix →** column is what to run.

## What to do with the output

1. Every `✗` row names the generator to run. Run it, look at the diff it produced, commit it on your
   branch. Then re-run `/ship-check` until every row is `✓`.
2. `fitness.js` failures name their own fix inline; warnings are advisory (budgets, ratchets).
   The `render-fit` row is advisory too (`!`, never a `✗`): when the branch changed a page, it renders
   it at 1280 + 390 and names any text past its box or overlapping siblings by element and page
   (`scripts/gds/render-check.js`, ADR 0329). Look at the shots it names; fix the element, or say in the
   ship notes why it is right. `·` means no Edge or Chrome on this machine, so nothing was rendered.
   A big page takes minutes; `--no-render` leaves the row out when you are iterating on something else.
3. With `--tests`: a failing test is only "environmental" if the SAME test fails on an untouched
   checkout of `origin/main`. Compare by test name, never by count — a Windows baseline of ~25
   environment failures has masked real regressions before (see `docs/recipes/windows-builders.md`).
4. When the table is all `✓`, ship: `/builder-ship`. The grader and CI are the remaining gates;
   this skill removes the preflight trip, not the review.

## Relationship to other tools

- `ship.js` runs these checks itself at ship time and refuses on a stale one; `/ship-check` is the
  same gate run early, when fixing is cheap.
- The PostToolUse hook `.claude/hooks/edit-hints.js` tells you the moment an edit makes a generated
  file stale; `/ship-check` is the sweep that catches whatever the hints did not.
- `bongos exec scripts/gds/preflight.js` checks the MACHINE (node version, node_modules, `claude` auth);
  this checks the TREE.
