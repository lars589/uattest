---
name: bongos-feedback
description: >-
  Send feedback, a bug or a wish about Bongos itself to its maintainers; unasked when a builder vents. Triggers: "Bongos feedback: …", "tell the Bongos team", "Bongos should…", "Bongos is broken", "this keeps failing", "/bongos-feedback".
plain: >-
  Sends a short note about a problem with Bongos, or an idea for it, to the people who build Bongos. It also does this by itself when you complain that Bongos is not working.
reach-for: >-
  When Bongos itself got in your way — a command that failed or confused you, or something you wish it did. You do not have to ask; complaining is enough.
cost: >-
  Free. It files one note with the Bongos maintainers and changes nothing in your project.
---

**Script skill (authoritative).** The core action is `bongos feedback "<message>"` (or `--idea "<message>"`, or `--message-file <path>`). Run it and print its output verbatim.

This **sends** a note about Bongos — the tool — upstream to its maintainers on Cloud Bongos, where a bug becomes a task waiting for a maintainer's approval (tasks 1004462, 1004467).

## Two ways in

- **Asked** — the builder labels a message as feedback for Bongos ("Bongos feedback: …", "feedback for Bongos", "tell the Bongos team", "report this") or runs `/bongos-feedback`. A message that already says what the feedback is **is** the go: write the report, send it, and show them what was sent. Only when they ask you to report something without saying what, draft it and send on their go.
- **Suggestions count.** Feedback is not only breakage. "Bongos should…", "I don't want Bongos to…", or a complaint about how Bongos organises their work (versions, goals, tasks, ranks) is feedback too — send it with `--idea`. Fixing it in their own project (moving the goal, saving a preference) is fine, but it does not replace sending it: the next project would hit the same thing.
- **Proactive** — the builder is venting that Bongos is not working: frustration, swearing, "this is broken again", "why does X keep failing", "Bongos is useless today". **File it without being asked**, then tell them in one line (below). The owner's standing rule (2026-09-30): every rant about Bongos not working becomes something to fix. Do not ask permission first, and do not argue them out of it.

## Is it about Bongos? (proactive mode files only when yes)

File when the complaint is about **Bongos itself**: how it organises their work (a goal that forced a new version, a version they did not want), a `bongos`/`/builder-*` command, a claim, ship, grade, merge or deploy step, the hall, Settings, sign-in, credits, the upgrade, or a Bongos message that confused them.

Do **not** file when it is about their **own project's** code, tests or design, about Claude itself, their laptop, GitHub or another service — or when the "problem" is a rule working as designed (an `[otb-plain]` card saying `By design: Yes`). If it is genuinely unclear, fix the thing in front of you first and file only if it turns out to be Bongos.

**One filing per distinct problem per session.** A second rant about the same failure adds nothing; say it is already filed (with the number) instead.

## Writing the report

Write it yourself from what you saw. **Never paste the rant.** The maintainers need the facts, not the mood:

1. A plain first line naming what went wrong — it becomes the title. (`bongos claim hung for two minutes, then failed with fetch failed`)
2. What the builder was doing, what they expected, what happened instead, and the exact error line if there was one.
3. Whether it happened more than once, and any workaround you found.

**Leave out:** code, file contents, secrets, tokens, customer or personal data, and anything about their project the maintainers do not need. Only the text you send travels (plus the Bongos and CLI versions, added automatically). As a backstop the command runs every report through Bongos's secret scrubber and refuses to send if it can't, but it is a backstop, not permission to be careless.

A report that is really a wish ("I'd like Bongos to…") goes with `--idea`.

## Sending

From the project checkout. For anything longer than one line, write the report to a file with the Write tool first — the shell eats backticks inside a quoted argument:

```bash
bongos feedback --message-file <path>
```

## Telling the builder

**Proactive:** one line, after sending, then carry on with what they were doing. For example: *"I've reported this to the Bongos team as task 1004500 — it's waiting for a maintainer to approve it."* No more than that, unless they ask what was sent — then show them the report.

**Asked:** report the CLI's output verbatim.

## If it refuses

The CLI prints one plain line for each refusal. In proactive mode, a refusal is one line to the builder and nothing more — never retry in a loop.

- **"not connected to Cloud Bongos"** — a self-hosted project has no link to the hub. Point the builder at the Bongos core repository's issue tracker.
- **"does not yet know you as a member"** — the hub only accepts reports from someone it has seen sign in to this project. Signing in to the project once through Cloud Bongos in a browser fixes it.
- **"Too much feedback"** — the hourly cap. Don't retry; mention it once.

## Files this skill touches

- Runs: `bongos feedback` → `scripts/gds/feedback-send.js` → `POST /api/bongos/feedback` on this project (`src/bongos/routes/feedback.js`) → the hub's `POST /api/bongos/sso/feedback` (`modules/platform-identity/instance-feedback.js`).
