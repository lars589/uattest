---
name: builder-stage
description: >-
  Stage the working tree on the builder's own live preview to see a change in a browser BEFORE shipping. Own-scoped and machine-local. Triggers: "/builder-stage", "stage my work", "let me see it before shipping", "preview this change".
plain: >-
  Puts your unfinished change on your own private preview site, so you can see it in a browser before handing it in.
reach-for: >-
  When you want to look at a change in a real browser before shipping it.
cost: >-
  Free. It only changes your own preview; the real site is untouched.
---

You are staging a builder's in-progress work on **their own** sandbox — the live game preview running on their own machine — so they can see the change in a browser, suggest fixes, and only then decide to ship it to the main game (ADR 0046).

## Background

Staging (re)starts the preview, which serves the **game-only** entry (`src/preview-server.js`, ADR 0052), degraded-DB (fully playable, no saved state, isolated from prod, no `/api/bongos`): a private detached process at `http://localhost:<port>` (default 3100, `$OTB_PREVIEW_PORT` to override), managed by `scripts/gds/local-preview.js` (task 1056). No tunnel, no public URL — it never leaves your machine.
Staging = (re)start the preview, health-check it, and record a marker of exactly what tree state was staged. `/builder-ship` checks that marker: a game-surface diff that wasn't staged at its current state triggers the sandbox review gate before the claim resolves.

## How to use

1. **Run the stage command** from your clone root:
   ```bash
   bongos exec scripts/gds/sandbox-stage.js
   ```
   It (re)starts the preview, waits until the game answers, writes the staged marker, and prints the review URL (`http://localhost:<port>`).

   > **First-time setup:** the preview needs the game's dependencies, so run `npm install` once in your clone. You can also drive the preview directly: `npm run preview` (start), `bongos exec scripts/gds/local-preview.js {status|restart|stop|logs}`. Reviewing via the Claude Code preview tools? A `local-sandbox` server is pre-wired in `.claude/launch.json`.

2. **Hand the builder the URL** and tell them plainly: this is *their* private copy of the game running on *their own machine* — nothing has shipped. Ask them to open it, walk around, and check the change.

   > **Generated art?** If the change was a pixel-art tile, the builder can also see it at the **`/art`** path of the same sandbox URL (`…/art`) — the generated-art gallery (#1262), which shows every tile they've made *even when it isn't placed in the game world yet*. Point them there when the work is "I made a tile" rather than "I changed the map."

3. **Collect their reaction:**
   - **Change requests** → make the edits, then re-run `bongos exec scripts/gds/sandbox-stage.js` and have them refresh the browser tab. Loop until they're happy.
   - **Looks right** → proceed to `/builder-ship`. The ship gate sees the fresh staged marker and carries on to the main game. (If the marker went stale — the game files changed after staging — the ship stages again and pauses with the review URL; show it to the builder, then re-run.)

4. **Useful sub-commands:**
   - `bongos exec scripts/gds/sandbox-stage.js status` — is the sandbox current with the working tree, when was it last staged?
   - `bongos exec scripts/gds/sandbox-stage.js url` — just the URL.

## Constraints

- **A full local clone.** The ONLY machine with no sandbox is a partial clone that lacks the game (`src/preview-server.js`) — there the script says so and exits.
- **Never present the sandbox as prod.** No credits, no broadcast, nothing shipped — staging is review, `/builder-ship` is the decision. The preview is private to the builder's own machine (not shareable).
- If the preview won't come up healthy, point the builder at the logs — `bongos exec scripts/gds/local-preview.js logs` — rather than guessing.

## Files this skill touches

- Runs: `scripts/gds/sandbox-stage.js`, which drives `scripts/gds/local-preview.js` + `local-preview-lib.js` to (re)start `node src/preview-server.js`
- Reads: `$OTB_PREVIEW_PORT` (local port, default 3100)
- Writes: the staged marker in the OS temp dir (`otb-sandbox-staged.json`); locally, the preview pid/log in the OS temp dir (`otb-local-preview.{pid,log}`)
