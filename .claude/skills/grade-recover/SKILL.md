---
name: grade-recover
description: >-
  Diagnose why a ship parked at completed (grader outage, fabricated fail, or a real quality fail) and run the right recovery. Triggers: "/grade-recover N", "my grade failed", "grader unavailable", or a ship that landed at completed.
plain: >-
  Works out why a quality review held your work back, whether the reviewer broke, got it wrong, or found a real problem, and takes the right next step.
reach-for: >-
  When your work failed its review or is stuck waiting for one.
cost: >-
  A fresh review is paid, usually a few dollars charged to the project, and is only run after the real cause is fixed.
---

You are recovering a task whose ship parked at `completed` because of its grade. Your job is to diagnose WHICH of three distinct shapes did it — they look similar in a terminal scrollback and need opposite responses — then run the right recovery. You never add a new approval step: everything here is a documented, existing path (ADR 0162).

## What this skill does

Reads the persisted grade, branches on `panel_outcome` FIRST, then walks exactly one of three recovery branches. The re-grade command every branch eventually reaches is:

```bash
bongos ship <id> --regrade
```

`--regrade` re-runs ONLY the grade step (no smoke/scanner re-run), reads **committed history, not the working tree**, applies only to a task at `completed`, is gated to the task's most-recent claim holder or an Archon, and has no attempt cap.

## Step 1 — Read the grade

```bash
bongos exec scripts/gds/api.js GET "/api/bongos/tasks/<id>?include=grade,last_claim"
```

- Task not at `completed` → stop; there is nothing to recover. `confirmed`/`shipped` means the grade passed (a `confirmed` strand lands via the ~5-min reconciler; `/merge-mode` is the rare manual fallback). `active` means ship first.
- **A page tweak whose grade PASSED** (`task.source` is `page-tweak`, `grade.passed` is `true`) → stop; it is **waiting for the artist**, not a failed grade (ADR 0341 D7). Its pass is held at `completed` on purpose until the artist approves the applied page. Do not re-grade it and do not ask for an override. If its branch never published, a plain `bongos ship <id>` re-publishes it without re-grading.
- `grade: null` → the ship never reached the grade step; re-run `/builder-ship`, not `--regrade`.
- Otherwise diagnose from the grade row: `signals.panel_outcome`, `signals.server_guard`, `passed`, `rubric_scores`, `issues[]`.

## Step 2 — Diagnose, in this order

### Branch A — grader outage: `panel_outcome='unavailable'`

The panel could not run (worker infra outage or a pre-spawn bypass). This is **not a quality verdict** — no quality signal was produced, there are no findings to fix, and nothing about the work is being judged. Grade aggregates exclude these rounds (`n_unavailable`); an outage never counts as a zero.

1. Do NOT edit code. There is nothing to fix.
2. Check the grader can run now: the panel spawns `claude -p` subprocesses locally, so confirm the CLI is present and authenticated, and the instance API is reachable (`signals.grader_unavailable_reason` usually names the leg that died).
3. Re-grade: `bongos ship <id> --regrade`.

### Branch B — fabricated / server-shape fail: the guard tripped or an axis was forged by an error

Three known sub-shapes, all recognizable because the "fail" carries **no substantive findings**. First make sure it really carries none: read the top-level `issues[]` — the API has lifted the stored findings there since task 1003488 (2026-09-02). Before that, a grade READ BACK showed no `issues` at all even when the panel had filed some, which is how task 1002721's real (and wrong) Quality blocker was taken for an empty fail.

- **Server-guard trip** (`signals.server_guard.tripped` non-empty, e.g. `implausible_pass`): the server downgraded a client-asserted pass it found implausible — historically this guard has fired on genuinely clean, unanimous zero-issue passes. Explain the downgrade honestly, then re-grade: `bongos ship <id> --regrade`.
- **An unbacked low score** (`signals.unbacked_scores` lists it; the card reads `UNBACKED LOW SCORE`): a reviewer scored below threshold without a major/blocker finding, so the severity gate downgraded it to manual-confirm instead of a hard fail (task 1002903). There is nothing to fix. Re-grade once; if it repeats on a diff you can defend, take the override path below with your evidence.
- **A FAIL scored around 4.5/10 with zero issues and a null/zero axis** (the errored-worker class): a worker error was forwarded as a real axis score. Same response — re-grade; the panel rerun replaces the forged shape with a real verdict. Since task 1003318 a Quality worker that never ran (a `Prompt is too long` window overflow, `error: PROMPT_TOO_LONG`) no longer forges a 0: the server records `signals.cq_lens_unavailable` with a json-null axis and the card reads `QUALITY LENS UNAVAILABLE` — re-grade or manual-confirm; a 4.5 with a 0 axis now only comes from a server predating it.

If an honest re-grade re-trips the guard on a diff you can defend, use the **auditable override path** — file an override-request with a real rationale (≥20 chars; only the task's most-recent claim holder or an Archon may file; an Archon then decides it):

```bash
bongos exec scripts/gds/api.js POST /api/bongos/tasks/<id>/override-request --body '{"rationale":"<why this grade is wrong, specifically>"}'
```

**Never volunteer the raw Archon confirm curl.** The override-request is the sanctioned exit precisely because it records who asked, why, and who decided — the raw confirm records none of that.

### Branch C — genuine quality fail: real findings in `issues[]`

The panel ran and rejected the work. Recover by fixing, not by re-rolling:

1. **Group `issues[]` by severity, then by worker.** Nit/minor findings are advisory by rubric policy — they cannot have caused the fail on their own, so do not start there. The fail came from blocker/major findings (or a gating axis under threshold).
2. **For each blocker/major finding, add a checked-in `tests/*.mjs` case** that reproduces it, then fix until green. The grader treats throwaway verification as unverified — the committed test is what makes the fix real.
3. **Fix real findings once; do not chase re-worded restatements** of a point you already answered (answer it in the commit or with a tracked task ref instead).
4. Commit on the claim branch — the grader reads committed history — then re-grade, saying how each finding was answered:

```bash
bongos ship <id> --regrade --response-file response.md
```

**`--response` is how you answer a finding; `--notes` is not** (task 1003702). The panel is given the task, your value summary, the changed files and the diff — it never reads ship notes, on a re-grade or on the first ship. `--response` rides to the panel fenced as the prior round's answer, so an already-answered finding cannot re-veto on re-wording alone. Passing `--notes` used to be accepted and silently dropped; it is now refused with this same guidance. Evidence itself still belongs in the **diff** — a committed test is what makes a fix real (step 2), and the panel can read every changed file.

### Not recoverable here — `REFUSED (authorization)`

A grade block naming protected surfaces above your rank is an authorization wall, not a quality verdict: no re-grade at your rank can land that diff as-is. Split the protected files out of the diff and re-ship the rest, or hand the task to a builder at/above the floor the refusal names.

## Constraints

- **It recovers; it adds nothing to pass.** This skill describes and recovers a stalled ship. It never inserts a human-approval step into the ship path (ADR 0162 retired those) and never invents a checkpoint of its own: a recovery tool that added a step would be one more thing to recover from.
- **Diagnose before touching code.** Editing code in response to an outage (Branch A) or a guard trip (Branch B) wastes a panel round and muddies the audit trail.
- **`--regrade` is claim-scoped**: most-recent claim holder or Archon. If you are neither, the recovery belongs to whoever is.
- **Honest re-grade before any override.** The override-request path is for a grade that is *wrong*, not a grade that is *inconvenient*.

## Files this skill touches

- Reads: `GET /api/bongos/tasks/:id?include=grade,last_claim` (the persisted grade row + regrade eligibility).
- Runs: `bongos ship <id> --regrade` (the grade step only).
- Writes (Branch B escalation only): `POST /api/bongos/tasks/:id/override-request`.
