---
name: status
description: >-
  Roll up a version or criterion in one call — its gating tasks, their live statuses, and what is blocking. Read-only. Triggers: "/status", "what's left for C8", "status of GDS-V3", "what tasks remain to complete X".
plain: >-
  Shows how far along a version or goal is: what is finished, what is left, and what is holding it up.
reach-for: >-
  When you want to know how much is left before something is done.
cost: >-
  Free, and it changes nothing. It only reads.
---

You are answering a project-status question. Before this skill existed, doing so meant ~10 sequential Bongos calls (grep the seed file for which tasks map to a criterion, eyeball a "Gates R55–R63" sentence, then re-query each task's status). The structured criterion↔task link (`task_criteria`, migration 055) + the `/status` CLI collapse that to one call. See ADR 0025 and task #435.

## What this skill does

Rolls up a version's done-when criteria → gating tasks → live statuses → what's left, in one call to the public `GET /api/bongos/versions/:id/progress`. Read-only and unauthenticated, so it works even before `/builder-setup`. As of task 1288 it produces a **deterministic card** (same shape every time) — your job is to render it, not to re-summarize it.

## How to render it

Delivery is deterministic (task 1288, same methodology as `/builder-start`). The **card-delivery hook** (`.claude/hooks/session-cards.js`) runs `status.js` for you on a `/status` (or "what's left for C8" / "status of GDS-V4") prompt — pulling any version + criterion ref (a slug or a positional `Cn`) out of the prompt — and injects the **finished card + a one-step directive** into your context, a block beginning `[otb card — the status card below was pre-rendered …]`.

1. **Normal path — follow the injected directive.** If that `[otb card …]` block is present, do exactly what it says: `show_widget` with the fenced HTML if you have `mcp__visualize` (call `mcp__visualize__read_me` once first, silently), otherwise output the fenced markdown **verbatim**. Render **once** — don't run `status.js`, don't lead with your own headline, don't rebuild the table, don't add a recommendation or recap. The card now owns the headline, the remaining-task list, and the unattributed-tasks note (this replaces the old freeform "interpret + relay" summary).

2. **Fallback — no directive present** (hook disabled/failed, or an older checkout). Run it yourself:
   - **If you have `show_widget`**: `bongos status --widget [--version ID] [--criterion REF]` → render the HTML verbatim with `title: "status_card"` (call `read_me` once first).
   - **No widget renderer**: `bongos status [--version ID] [--criterion REF]` → print its stdout verbatim.
   - A criterion is named by its **slug** (`/status wa6-kernel-and-packs`) or, as an affordance, by position (`/status C8`); `--criterion REF` is the exact form for either. `--version` defaults to the live internal version; `--json` is the machine interface; `--hook` is the envelope the hook consumes — don't render those for the user unless asked.

## Constraints

- **Read-only.** This skill never claims, ships, or mutates anything. If the user then wants to act on a remaining task, hand off to `/builder-claim N`.
- **The SLUG is the criterion's identity; `Cn` is a position, and positions move** (task 1004069). `Cn` is `ROW_NUMBER()` over a reorderable `sort_order`, recomputed on every read: adding `wa6-noise-limited` on 2026-09-19 moved `<redacted>` from C11 to C13, and everything still quoting C11 silently began naming a different criterion. The write path (`resolveCriterionIds`) **refuses** a positional ref on a multi-goal version for that reason. So: **quote the slug** in anything durable — a note, a task description, a handoff, a card you expect someone to read tomorrow. Repeat a `Cn` back only alongside the slug it resolved to; `status.js` prints that line for you whenever a drill-in came in positionally.
- If `--version X` returns no criteria, say so plainly (that version may not have done-when criteria seeded) rather than implying 0% done.

## Files this skill touches

- Calls: `GET /api/bongos/versions/:id/progress` (public)
- Runs: `scripts/gds/status.js` (`--hook` / `--widget` render the card; default text + `--json` unchanged)
- Delivered by: `.claude/hooks/session-cards.js` (the card-delivery hook, task 1288)
