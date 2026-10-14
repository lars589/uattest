---
name: tweak
description: >-
  Apply the next submitted page tweak: claim the round, apply every line, render the page before and after, attach the renders and ship it to wait for the artist. Metic+. Triggers: "/tweak", "apply the next page tweak", "work the tweak queue".
disable-model-invocation: true
plain: >-
  Applies the next set of change requests someone made to a page, and shows before and after pictures for the artist to approve.
reach-for: >-
  When page change requests are waiting to be done.
cost: >-
  Handing it in runs a paid quality review, usually a few dollars charged to the project. The change waits for the artist's approval.
---

You are applying ONE page an artist rewrote in the studio (Tweak Mode, ADR 0341). The artist wrote the words; your job is to transcribe them faithfully, show the artist the result, and park it. **You never land it.** The artist approves the applied page first (ADR 0341 D7), and nothing here arms a merge.

## 1. Take the next submitted round

```bash
npx bongos exec scripts/gds/api.js GET /api/bongos/copy-desk/pages --quiet
```

A round is in the queue when its page's `open_round.state` is `submitted`. Take the one with the lowest `open_round.task_id` (the oldest). None? Say "the tweak queue is empty" and stop.

Claim it in THIS worktree, on a fresh branch from `origin/main`:

```bash
npx bongos claim <task-id>
```

Read the whole printout and confirm it says "Claimed". A refusal can be silent under grep. The round sits in the version's catch-all goal: a `GOAL_MEMBERSHIP_REQUIRED` refusal means join that goal first. Writing the applied block (step 3) needs `task.edit`, which is Metic+.

## 2. Render the page BEFORE

```bash
npx bongos exec scripts/gds/tweak-renders.js shoot --page <page-id> --phase before --out <scratchpad>/tweak-<task-id>
```

The page id is in the round's title, `Tweak: <title> (<page-id>)`. Four shots: desktop 1440 and phone 390, light and dark. A page that pins one mode is shot in that mode for both, and the run says so.

## 3. Apply every line

```bash
npx bongos exec scripts/gds/copy-apply.js --batch --dry-run
npx bongos exec scripts/gds/copy-apply.js --batch
```

It reads the round you hold, applies every line of its `page-tweak` block by ADR 0233's rules (the `${expr}` holes go back in), regenerates the copy registry, re-reads the changed pages (it opens a browser) and records a `page-tweak-applied` block on the task.

**A refused line is named, never skipped.** Each one prints `REFUSED (<code>)`: `target_gone`, `ambiguous_target`, `no_exact_span`, `placeholder_mismatch` or `path_outside_surface`. It is recorded in the applied block, and the artist sees it at approval. Do not hand-edit a refused line into place, because that would put words on the page the artist cannot see were refused. The rest of the batch still lands. Exit 2 means no line applied: release the claim (`npx bongos release <task-id>`) and say which lines refused.

Review `git diff`: only the artist's words changed, plus the regenerated registry and readings. Commit.

If a line changed `modules/hall-ui/public/shell.js` (a shared line), bump the shell cache-bust on every hall page and update `SHELL_SHA` in `tests/nav_permission_atoms.mjs`, then commit.

## 4. Render AFTER and attach all eight

```bash
npx bongos exec scripts/gds/tweak-renders.js shoot --page <page-id> --phase after --out <scratchpad>/tweak-<task-id>
npx bongos exec scripts/gds/tweak-renders.js attach <task-id> --dir <scratchpad>/tweak-<task-id>
```

Look at the after shots yourself. If a rewritten line overflows or breaks the layout, say so in the ship notes: the artist decides, not you.

## 5. Ship it to wait for the artist

```bash
npx bongos exec scripts/gds/ship-check.js
npx bongos ship <task-id> --notes-file <notes> --summary-file <summary>
```

Heal whatever ship-check names first (`git add` new files before it). Run ship.js in the background and wait for it; never pipe it through tail. On a passed grade it prints **WAITING FOR THE ARTIST**: the branch and its PR are published, auto-merge is not armed, and the task stays at `completed`. That is the finish line. Never pass `--skip-grade`: it would confirm the round past the artist.

A failed grade is an ordinary one: read it (`GET /api/bongos/tasks/<task-id>?include=grade`), fix, commit, `npx bongos ship <task-id> --regrade`. If the branch did not publish, a plain `npx bongos ship <task-id>` publishes it again without re-grading.

## Unattended mode: `/tweak --page <page-id> --unattended`

The Autobongos tweak lane (ADR 0371 D1, D8) runs this skill with nobody at the terminal. It names ONE page and claims that page's submitted round with the `auto_pickup` mark before you start. In this mode:

- **Never ask.** Every question the steps above would put to a person is a halt instead.
- **Work only the named page.** Skip step 1's queue read; the round is the one you hold. Pass `--page <page-id>` to every script: `copy-apply.js --batch --page <page-id> --unattended` refuses a round for another page (exit 5) and, on any non-zero exit, releases the round with a plain note itself.
- **Change only the page's own files.** No shell cache-bust, no hand fix of a refused line, no edit outside the page's files in `docs/page-inventory.json` (besides the copy registry, the page readings and the generated maps ship.js refreshes), and no session-log file (it would move `CLAUDE.md`, a protected path). A rewrite that needs anything else is already its own engineer task.
- **Ship one round, once, graded.** Never `--skip-grade`, `--force` or `--allow-empty`. Stop at WAITING FOR THE ARTIST.

**On any halt, release and exit.** Run the matching line and stop; do not retry, and do not try another round:

```bash
npx bongos exec scripts/gds/tweak-halt.js <task-id> --code <code>
```

| What happened | `--code` |
|---|---|
| the claim was refused | `claim_refused` (nothing to release: just exit) |
| `copy-apply` exited non-zero | already released by `--unattended` |
| `ship-check` named something stale it cannot heal by regenerating | `ship_check_stale` |
| the grade came back GRADER UNAVAILABLE | `grader_unavailable` |
| the grade failed | `grade_failed` |
| the diff would touch a file outside the page | `outside_page` |

The note is fixed wording per code, so nothing you write reaches the round.

**The server holds these rules, not you.** A page tweak reaches `confirmed` only through its artist's approval or the owner's override (`POST /tasks/:id/confirm` refuses it), and the publish of an `auto_pickup` round whose pull request touches a file outside the page, or a protected path, is refused and its pull request closed. Breaking a rule above gets the round refused, not landed.

## What happens next (not yours)

The artist approves in the studio's Approval queue (TW12), which lands it like any confirmed task, or sends it back with a note, which returns the round to the queue for the next `/tweak`.
