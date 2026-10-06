---
name: grade-sweep
description: >-
  Read-only sweep over recent grades: grader health (outage runs, pass-rate drift, cost, stale model pins) then the accountability audit (override ledger, dropped findings, false passes). Queues follow-ups only. Triggers: "/grade-sweep", "/grader-health", "/grade-audit".
disable-model-invocation: true
plain: >-
  Checks that the automatic quality reviewer is working well, then looks back over recent reviews for anything that slipped through.
reach-for: >-
  Now and then, or when reviews seem to be failing strangely.
cost: >-
  Free. It only files follow-up notes and never changes a review or a task. An optional live test of the reviewer costs a small amount.
---

You are sweeping the last weeks of grades. It is one skill with two parts that used to be two commands (task 1004471):

- **Part A — health** (was `/grader-health`): is the grading panel *running* well?
- **Part B — audit** (was `/grade-audit`): did anything *ship past* it unaccounted for?

**Which part to run.** `/grade-sweep` runs A then B — A comes first because B's outage roll-up hands streaks to A, and an outage must be ruled out before a fail is read as a quality verdict. `/grade-sweep health` (or the old `/grader-health`) runs Part A only; `/grade-sweep audit` (or the old `/grade-audit`) runs Part B only. `--probe` applies to Part A only.

Everything here **describes and queues**. You never confirm, flip a status, re-grade, or add a gate — the builder (or `/grade-recover`) acts on what you report, and Part B's only writes are queued `idea_inbox` rows.

---

## Part A — grader health (read-only)

You read live surfaces, compare against known baselines, and emit findings + exact remediation commands. Part A writes nothing.

### The four axes

#### 1 — Outage runs (the pattern this part exists to catch)

A grader outage used to be recorded as a 0.0 "quality failure": one builder accumulated **21 zero-score rows** over a month before anyone noticed, and the public tile showed a phantom 5-day 0%-pass crater. Since the outage-as-zero fix, aggregates exclude outage rounds and bucket them as `n_unavailable` — so the streak is now directly readable.

1. Read the public trend: `bongos exec scripts/gds/api.js GET "/api/bongos/public/grades?days=30"` — scan `trend[]` for days where the average is 0 (or null) with passes 0 and n ≥ 2, and for any nonzero `n_unavailable` streak.
2. (Archon) Read the per-builder split: `bongos exec scripts/gds/api.js GET "/api/bongos/grades/by-builder?days=30"` — a single builder with pass_rate 0.000 or a large `n_unavailable` bucket is the 21×0.0 shape localized to one machine or one environment.
3. **Confirm outage vs rejection before alarming anyone.** For each task in a suspect window: `bongos exec scripts/gds/api.js GET "/api/bongos/tasks/<id>?include=grade"` — `signals.panel_outcome='unavailable'` (with `grader_unavailable_reason` and per-worker errors in `signals.workers`) is an outage, **not a quality rejection**; a real FAIL carries findings in `issues[]`.
4. For every task parked at `completed` by a confirmed outage, emit the exact remediation line, one per task:

```bash
bongos ship <id> --regrade
```

5. Check the local spawn leg: the panel spawns `claude -p` subprocesses, so verify the CLI is present and authenticated, and run `bongos doctor` for the hooks/worktree leg.

#### 2 — Pass-rate drift

Baselines: the 14-agent evaluation window measured a **90.6%** pass rate, already above the 87% that ADR 0024 called "suspiciously high" and built the adversarial panel to fix. From `/api/bongos/public/grades` compute the rolling pass rate and compare:

- **Creeping up** past the baseline → grade inflation; the panel is rubber-stamping (report; candidate causes: score compression, reused grades, trivial-path overuse).
- **Collapsing** far below it → either a real quality regression or an unconfirmed outage window — axis 1 disambiguates.

#### 3 — Cost anomalies

Benchmark: mean panel cost **$2.14** per grade, and ~90% of it is **fixed** re-exploration cost, independent of diff size. (Measured with Quality on the haiku tier; since task 1003318 Quality runs on claude-sonnet-5, so a mean sitting somewhat above $2.14 is the new normal until re-baselined — a rise alone is not an anomaly.) Read grader spend and divide by the grade count from axis 2's window:

```
bongos exec scripts/gds/api.js GET "/api/bongos/public/cost-summary?source=grader&days=30" --quiet \
  | node -e "let s='';process.stdin.on('data',d=>s+=d).on('end',()=>{const j=JSON.parse(s);
      if(j.applied_filters?.source!=='grader'){console.error('FILTER DROPPED — do not divide');process.exit(1)}
      console.log('grader 30d:', j.filtered_total_usd)})"
```

**Read `filtered_total_usd`, never `total_usd`.** The filters drill into the breakdown; they deliberately do *not* rescope the headline, so `total_usd` stays instance-wide (the treasury chart depends on that) and is off by more than an order of magnitude here. `by_category` / `by_builder` / `by_source` *are* filtered — under `?source=grader`, `by_builder` attributes each panel to the builder whose ship triggered it, which is why human logins appear. The `applied_filters` guard above makes a silently-dropped filter fail loudly instead of yielding a wrong mean.

- Mean drifting well above the benchmark → panel re-rolls/retries or timeout-and-retry loops (not "big diffs" — the fixed-cost share means diff size barely moves the mean).
- Near-zero spend with grades still recording → the trivial path or grade reuse dominating; spot-check that gating lenses are actually running.

#### 4 — Model pins

The evaluation found every grade ran on a generation-stale pin. Read the live pin from the repo: `DEFAULT_GRADER_MODEL` and `selectGraderModel` in `modules/grading/grader.js`, plus the rubric version in `modules/grading/grader-rubric.json`. Report when the pinned family is a generation behind the current Claude family, or when `selectGraderModel` would throw on a current builder model id (it throws on ids lacking opus/sonnet/haiku — a stranded-ship risk).

### Optional: `--probe` (live calibration, spends real money)

With `--probe`, run the live panel calibration: `bongos exec scripts/gds/grade-smoke.js`. It grades known-good and known-bad fixtures against the real panel and reports miscalibration. **Costs ~$0.30–0.90 per run; Metic+ only.** Never run it implicitly — only when the user passed `--probe` or asked for a live calibration.

### Related: do the workers fail differently?

Part A checks whether the grader is RUNNING well. Whether its four workers carry independent signal — or are four copies of one opinion — is a different question with its own read-only report: `bongos exec scripts/gds/grade-correlation-audit.js` (pairwise agreement + Cohen's kappa between workers, each worker's kappa against the owner's override and manual-confirm decisions, refused below a minimum sample; no model calls, Metic+ for the override read). Point the owner at it when the question is panel composition rather than health.

---

## Part B — grade audit (describe and queue)

You are auditing the last week of grades for accountability gaps: work that shipped past a failing grade unaccounted for, real findings that rode passing grades into production and evaporated, and passes the panel structurally could not have judged. Every follow-up lands as a queued idea or a handoff to another skill.

### The sweep window

```bash
bongos exec scripts/gds/api.js GET "/api/bongos/public/recent-shipped?days=7"
```

For each shipped task in the window, read its persisted grade:

```bash
bongos exec scripts/gds/api.js GET "/api/bongos/tasks/<id>?include=grade"
```

Bucket by grade shape: `passed`, failed, `signals.panel_outcome='unavailable'` (outage — no quality signal existed), or no grade row at all.

**Then split off the no-artifact species before any leg reads the bucket** (task 1004011, ADR 0320). A grade with `signals.no_artifact_grade === true` judged the builder's **claim that nothing was needed** — the handoff notes and value summary against the task description — not a diff. There is no diff, no panel, and one generalist shot (`signals.lenses_dropped` names the four lenses that did not run). It is a real grade and a real gate, but it measures a different thing, so:

- **Do not average or count it alongside diff grades.** A 7.5 over three paragraphs of prose and a 7.5 over a 400-line diff are not the same number.
- **Leg 2 still applies, and matters more here.** A `blocker`/`major` on a no-artifact pass usually means the *evidence* was thin — queue it the same way.
- **Leg 3 does not apply** — there is no merged diff to re-read for runtime behaviour. The equivalent question, worth asking on any no-artifact pass that shipped on assertion alone, is: *could a reader today re-run or re-read what the notes claim?* If not, queue it.
- **A no-artifact FAIL is not an override candidate for Leg 1** unless it also landed. The builder's remedy is better evidence, not a permission.

Note `task_grades.grader_kind` is **not** the discriminator: the server records `'subagent'` for everything arriving through `POST /tasks/:id/grade`. `signals.no_artifact_grade` is the durable marker.

### Leg 1 — the override ledger

For every shipped task whose grade **failed** (or is absent), the land needed an override. Cross-reference the ledger (Archon — `override_request.decide`):

```bash
bongos exec scripts/gds/api.js GET "/api/bongos/override-requests?status=approved"
```

- Split **infra vs real** first: a fail that is actually `panel_outcome='unavailable'` (or the errored-worker zero-issue shape) is an outage artifact, not an overridden quality verdict — route those to the Leg 4 roll-up.
- A shipped task with a real failing grade and **no approved override-request row** landed via the raw confirm — the un-audited path. Name it in the report and print its unaddressed `issues[]` verbatim. That set is the ledger's debt.
- For each such task, queue the debt (see the queueing rule below) — do not chase the lander, do not un-ship anything.

### Leg 2 — dropped findings on passing grades

A pass with `blocker`/`major` entries in `issues[]` shipped real findings that no process ever picks up (the evaluation counted 274 findings on passing ships with zero conversion paths). For each:

- **Worker-attribution filter:** findings attributed to the advisory **Narc** are the known noise class — triage them by hand (read the finding, decide), never auto-trust them into the queue. Findings from the gating workers (Quality, Hacker, Efficiency) or the deterministic pre-passes are higher-confidence — queue them unless plainly stale.
- **Queueing rule (idempotent):** first read the open inbox (`bongos exec scripts/gds/api.js GET /api/bongos/inbox`) and skip any finding already queued — the marker is the deterministic title prefix. Then:

```bash
bongos exec scripts/gds/capture.js "[grade-audit] task <id>: <finding summary>" --kind bug
```

One idea per surviving finding, titled exactly `[grade-audit] task <id>: …` so a re-run of this audit files nothing twice. (The marker keeps the old command's name on purpose: rows already in the inbox carry it.)

### Leg 3 — false-pass spot-check (runtime-behavior blindness)

The re-review found 2/8 material misses, both the same root cause: **the panel grades diff text and never reasons about runtime** — a CI workflow whose default shallow checkout broke on first run scored functional_fidelity 10/10, and an SSRF guard bypassable via HTTP redirect passed at 9.5. For the riskiest ships in the window — security surfaces, CI/workflow files, the largest diffs, and 9.5s with suspiciously few findings — re-read the merged diff asking one question: *what does this code do at runtime that the diff text does not show?* (defaults it inherits, redirects it follows, first-run behavior, tool/CI defaults). A suspicion is queued via the Leg 2 rule, prefixed the same way — never a re-grade, never a flipped verdict.

### Leg 4 — outage roll-up

Count the window's `panel_outcome='unavailable'` rows. One-off outages just get the `--regrade` pointer in the report; a streak (2+ consecutive, or clustered on one builder) is a health problem — that is **Part A's axis 1** (`/grade-sweep health`), which owns outage diagnosis. Do not diagnose it inside Part B.

---

## Report shape

End with one compact list, most severe first.

**Part A:** axis, evidence (the numbers you read), verdict (outage / drift / anomaly / stale-pin / healthy), and the exact remediation command or the skill to hand off to (`/grade-recover` for a single stuck task; a Bongos task via `capture.js` for systemic fixes). A clean bill of health is one line per axis.

**Part B:**

1. **Un-accounted overrides** — task, findings printed verbatim, queued-idea ref. A task that landed with no approved override-request row is the headline.
2. **Queued findings** — what was filed this run, what was skipped as already-queued, what was held back by the Narc filter (and why).
3. **Spot-check suspicions** — task, the runtime question the panel couldn't answer, queued-idea ref.
4. **Outage roll-up** — count, and whether Part A found a streak.

A clean week is four one-liners.

## Constraints

- **Never confirm, never flip, never re-grade.** A verdict is advisory and never self-executing (ADR 0158 §2) — this skill's entire output is a report plus queued `idea_inbox` rows, and it adds no approval step to anyone's ship (ADR 0162, which retired review gates). If a leg tempts you to "just fix it", the fix is a queued idea or a claimed task, not an action inside the sweep. The remediation lines are FOR the builder to run.
- **Confirm before alarming.** Axis 1's outage-vs-rejection check comes before any "the grader is down" conclusion — a real FAIL streak on one surface is signal, not outage.
- **`--probe` spends money** — explicit opt-in only, Metic+.
- **Manual cadence.** Invoke by hand (weekly is the intended rhythm). Do not wire it to cron or depend on `.claude/scheduled-tasks/`. It is hidden from the model's menu (`disable-model-invocation`), so it runs only when someone types it.
- **Idempotent re-runs.** The `[grade-audit] task <id>:` title marker + the inbox pre-check are what make running it twice harmless — keep both.
- **Archon surfaces degrade gracefully.** Without `override_request.decide`, Leg 1 can only report "ledger unreadable at this rank"; without the by-builder read, axis 1 step 2 says so — never skip silently.

## Files this skill touches

- Reads: `GET /api/bongos/public/grades`, `GET /api/bongos/grades/by-builder` (Archon), `GET /api/bongos/public/cost-summary?source=grader` (the `filtered_total_usd` key), `GET /api/bongos/public/recent-shipped`, `GET /api/bongos/tasks/:id?include=grade`, `GET /api/bongos/override-requests?status=approved` (Archon), `GET /api/bongos/inbox`, `modules/grading/grader.js`, `modules/grading/grader-rubric.json`.
- Runs (read-only): `bongos doctor`; with `--probe` only: `bongos exec scripts/gds/grade-smoke.js`.
- Writes: `idea_inbox` rows via `bongos exec scripts/gds/capture.js` (Part B's queued follow-ups only).
- Never calls: any confirm, status, grade, or regrade endpoint.
