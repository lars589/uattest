---
name: session-board
description: >-
  Show every session the builder has going and where they are jammed, as a board in chat. Triggers: "/session-board", "what are my sessions doing", "where are things stuck", "why is everything waiting", "show my sessions".
plain: >-
  Shows, in the chat, every piece of work you have going at once: what each one is doing, what is waiting to land, and what is stuck and holding the rest up.
reach-for: >-
  When you run several sessions and things seem to be waiting on each other, or you want to know which one to look at first.
cost: >-
  Free. It only reads; nothing changes.
---

You are showing the builder a board of everything they have in flight (task 1004957). It reads only.

## Run it

```bash
npx bongos exec scripts/bongos/sessions-board.js
```

It prints markdown: a **Jams** list first, then one table — each session's folder, its task, its stage (building, waiting to land, back from review, stuck) and what it is waiting on. Paste it into your reply as it is; it is already written for the builder.

## Then say what to do about the jams, in one or two lines

- **"New work is paused for every one of your sessions"** is the one that matters most: too many finished pieces are stuck, so no session can start new work until one comes down. Say which stuck ship nobody is fixing yet and offer `/strand-fix N` for it. Never send more than one session at the same stuck ship — a ship marked "<session> is fixing it" is that session's.
- **A single stuck ship** that is not pausing anything can wait; mention it, do not lead with it.
- **Nothing jammed**: say so in one line and stop.

`--json` prints the same as data if you need to reason over it. The startup line (`--line`) is silent unless new work is paused; this skill is how the builder sees the whole picture.
