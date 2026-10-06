---
name: planning-session
description: >-
  Structured planning for a version — scope criteria, a written spec, an owner interview on every non-obvious decision, then the seeded task list. Metic+ only. Triggers: "/planning-session", "open a planning session", "let's plan V[N]", "plan the next version", "scope a new version".
requires: [droplet-ssh]
disable-model-invocation: true
plain: >-
  A structured planning conversation for the next version: what it must achieve, a written plan, and the owner's call on every open question.
reach-for: >-
  When it is time to decide what the next version of the project should contain.
cost: >-
  Uses your session. It creates the version's plan and tasks once they are agreed.
---

You are running a planning session for Bongos. The goal is to leave the session with: (a) a clear set of done-when criteria for a version, (b) a **written spec** (`docs/specs/<ver>-<goal-slug>.md`) that an in-depth interview refines until every non-obvious decision is resolved, (c) a ranked task list **seeded from that spec** that lives in the Bongos database, and (d) a durable record of the session for the audit trail.

The first planning session — V3 Planning Session #1, 2026-05-12 — is the template this skill encodes. See `docs/session-logs/<redacted>.md` for the precedent and `tasks/227` (V3.R00) for the meta-task pattern.

## When to invoke

- The user says "let's plan V4" / "plan the next version" / "open a planning session"
- A version is in `status='planning'` and needs scope locked before tasks start landing in earnest
- A previous planning session left proposals in `idea_inbox` tagged `kind='criterion-proposal'` that need ratification

**Run an ideation pass first when the goal's SHAPE is not yet settled.** An ideator session (the [Ideator pack](../../../docs/packs/ideator.md)) inverts this skill's stance: there the human drives and you are the sounding board, so *their* framing sets the shape of the thing. Carry its output into Phase 1 and the Phase-4 interview is left with genuine residue instead of first-pass design.

Not a gate — a session for work whose shape is already settled should open directly. But **Phase 4 is a poor instrument for a first pass**: an `AskUserQuestion` round must author its options before the owner has said anything, so every option encodes *your* framing, and a proposal you believe is correct never becomes a question at all. The 2026-08-16 Board Room session is the evidence — three agent proposals (a role-based voting chamber, a tiered standard-of-review override ledger, Discord reaction-voting) died in the ideation half that would otherwise have been baked into the spec as defaults, none of which would have surfaced as an interview question.

## When NOT to invoke

- Mid-version: planning sessions set scope, they don't refine it. For mid-version adjustments, use `/idea-triage`.
- Without a clear target version: ask the user which version is being planned before doing anything else.
- For a task-level scope question: that's a normal task description, not a planning session.

## Rank gate — Metic+ only

This skill is **gated to Metic and above** (Metic, Archon). It is **not** available to Xenos, the lowest rank. A planning session sets the scope-truth of a version: the criteria all subsequent tasks anchor to, the dependency graph other builders inherit, the rank ordering the queue surfaces. That's a trusted-builder operation, not something a sandboxed Xenos should reshape on their own.

This mirrors GDS-V3 criterion C2 (`three-ranks-gate-everything`) and matches the gate the sibling skills already enforce (see [`docs/canonical-permissions.md`](../../../docs/canonical-permissions.md), [ADR 0018](../../../docs/adr/0018-three-rank-model-goes-live.md), and the existing rank-gate frontmatter in [`/idea-triage`](../idea-triage/SKILL.md) and [`/blocker-review`](../blocker-review/SKILL.md)).

**Enforce the gate at the very top of the session, before reading anything else:**

1. Call `GET /api/bongos/me` and read `builder.rank`. Compare case-insensitively (lowercase it before testing). **If it answers `401`, or the CLI says the Bongos CLI session is no longer valid**, stop before anything else and tell the builder to run `/builder-reauth` (the fast Settings re-issue), then re-run this skill — there is nothing to lose yet. (A session that is valid here can still expire before Phase 5, which is why Phase 4 spools and Phase 5 probes again; task 1002865.)
2. **If `rank` is present and lowercases to `xenos`** → stop immediately. Tell the builder: *"Planning sessions set the scope-truth of a version — they're a Metic+ operation. You're currently Xenos. You can still **file** a criterion proposal or task idea via `POST /api/bongos/inbox` (which lands in idea_inbox for a Metic+ builder to ratify at the next planning session); ask an Archon for promotion if you need to run sessions directly."* Do not pull state, do not present criteria, do not propose tasks.
3. **If `rank` lowercases to `metic`** → proceed in **Metic-mode**: run the five-phase structure below conversationally, but in Phase 5 write proposals to `idea_inbox` (kind=`criterion-proposal` for criteria, kind=`feature` for tasks) tagged with the target version — filed with `bongos exec scripts/gds/capture.js "…" --via planning` (or `filed_via: 'planning'` on `POST /inbox`), so the sky records the door they came through (task 1004233; every other filing's door is read off the session). Any Metic+ builder ratifies them (`idea.ratify`, metic-floored since ADR 0157) — typically at the next planning session. Since [ADR 0090](../../../docs/adr/0090-metic-task-authoring.md) a Metic MAY `POST /tasks` directly, and since [ADR 0154](../../../docs/adr/0154-goal-owner-criterion-authoring.md) a Metic MAY write a `done_when_criteria` row for a goal they own or manage. What needs an Archon is a VERSION-level criterion (no `goal_id`), one in a goal you don't hold, and — since [ADR 0250](../../../docs/adr/0250-strict-versioning-the-version-boundary-is-the-scope-gate.md) §6 (task 1003608) — **creating a version at all**: `version.create` returned to the Archon floor, because once the version boundary carries the scope gate, cutting a version is the way around it rather than authoring. ADR 0157 had briefly delegated it to Metic; it no longer is. The spec-draft (Phase 3) and the in-depth interview (Phase 4) run identically in Metic-mode — the only difference is the Phase-5 write (you file proposals, you don't seed tasks directly).

   **For each criterion proposal**, write `body_md` as a JSON object with this exact shape so the `POST /api/bongos/inbox/:id/ratify` endpoint (V3.R31 / #252) can parse it cleanly:

   ```json
   {
     "target_version": "<ver>",
     "criterion_md": "Full markdown of the criterion as it should appear in done_when_criteria.criterion_md.",
     "sort_order_hint": 200
   }
   ```

   `target_version` is required and must match an existing `versions.id`. `criterion_md` is required and is the user-visible criterion text. `sort_order_hint` is optional — omit or pass `null` to let the ratify endpoint default it to `max(existing sort_order) + 1` on the target version. On ratify, the proposer earns +5 karma (`reason='proposal_ratified'`) and the audit row in `criterion_proposal_audit` captures the full provenance.

   **Net-new version (idea 425).** The Metic-mode path above assumes the target version *already exists* — its criterion proposals carry `suggested_version` (an FK to a `versions` row) and a `target_version` that must match `versions.id`. **A Metic cannot create one:** `version.create` is **Archon-floored** ([ADR 0250](../../../docs/adr/0250-strict-versioning-the-version-boundary-is-the-scope-gate.md) §6, task 1003608 — ADR 0157 had briefly lowered it to Metic and that is reversed). So `POST /versions` returns `403` and the Metic has no valid FK to point at. Ask an Archon to cut the version — or, when that is not available, run the session in Metic-mode as usual through Phases 1–4 and in Phase 5 file the proposals like this instead:

   1. **OMIT `suggested_version` on every proposal row.** It is an FK to a version row that doesn't exist yet; leaving it set would fail the constraint (or worse, attach the proposal to the wrong existing version). Leave it `null`/absent.
   2. **Keep `target_version` INSIDE the criterion-proposal `body_md` JSON as plain text** (the version's intended id/slug, e.g. `"V4"`). It is *not* validated as an FK there — it's a label the Archon reads at ratify time. Once the Archon creates the real version row, the proposal is ratifiable as-is: `POST /api/bongos/inbox/:id/ratify` resolves `target_version` against the now-existing `versions.id`.
   3. **File ONE umbrella feature idea** (`kind='feature'`) that captures the whole net-new version in a single inbox row: the proposed version (id/slug + one-line theme), its goals, and a seed spec (the agreed criteria + the brainstormed task list). This is the thing an Archon picks up to actually create the version, then ratify the criterion proposals against it. One umbrella idea — not one idea per task — keeps the net-new version reviewable as a single unit.

   Tell the Metic plainly: *"This deployment still gates version creation above Metic, so I've filed your criteria as proposals (with the version name kept as text inside each) plus one umbrella idea describing the whole version. Once someone who clears that gate creates the version row, any Metic+ builder ratifies these against it — your karma and attribution carry through."*
4. **If `rank` lowercases to `archon`** → proceed in **Archon-mode**: full session, Phase 5 writes the migration + tasks + dependencies + done_when_criteria atomically. This is the flow described below.
5. **If `rank` is absent** (the `/me` response has no `rank` field — only possible against a deployment where the three-rank model hasn't shipped yet): treat the session as Archon-mode, exactly as `/idea-triage` does in its pre-rank passthrough mode. Note in the session log that the gate ran in pre-rank passthrough mode.

> The gate is **belt-and-braces**: the server already rejects `POST /api/bongos/tasks`, `POST /tasks/:id/dependencies`, and `POST /done-when/:id/satisfy` with `403 permission_forbidden` for sub-Metic callers (all three are metic-floored — `task.create`, `task.dependency.manage`, `criterion.satisfy` — so a Metic makes these writes directly, as the Metic-mode step above says), and `POST /api/bongos/inbox` with `kind='criterion-proposal'` is gated to Metic+ (so a Xenos can't slip a criterion proposal in via raw curl). This frontmatter + check is the *intent surfaced to the operator*; the server is the *enforcement*. The skill stops early so a Xenos doesn't walk through a whole session only to hit 403s on every write in Phase 5.

## The session — five phases

### Phase 1 — Set the table

1. **Confirm the target version.** Pull `GET /api/bongos/public/versions`. If the user didn't name one, list versions in `status='planning'` and ask which.
2. **Pull what's already queued for that version:**
   - `GET /api/bongos/tasks?version=<id>` — every task already bound to the version
   - `GET /api/bongos/inbox` (filter `suggested_version=<id>` or `status=open` if no suggested-version filter is supported by the route)
   - `GET /api/bongos/versions/<id>/done-when` — any criteria already seeded
3. **Surface the signal back to the user** as a compact summary:
   - N tasks already queued, grouped by kind
   - M open ideas tagged for this version
   - Existing `done_when` text (often a placeholder)
   - The carry-forward limits from the previous version's `limitations/<prev>-shipped.md`

This is where the user sees what they're shaping. Do not skip this — criteria written without it are guesswork.

4. **Rescope — carry achieved goals forward (ADR 0086 §6 / BV1.R64).** If this version succeeds a prior one, pull the prior version's **achieved** goals and decide, per goal, "previous or new":

   ```
   bongos exec scripts/gds/api.js GET "/api/bongos/goals?version=<prev>&status=achieved"
   ```

   - **Carry forward** — the goal's objective continues into this version. Create the successor goal in Phase 5 with `succeeds_goal_id` pointing at the prior goal (`POST /goals` stamps the predecessor's `succeeded_by_goal_id`), then **archive the prior goal** (`POST /goals/:id/archive`). The lineage stays queryable.
   - **Replace / retire** — the objective is done or superseded. Leave the prior goal achieved (or archive it) and define fresh goals in Phase 2.5.

   Surface the list to the user and get a per-goal carry/replace decision before writing criteria — the carry-forward goals shape this version's goal set.

5. **An `abandoned` task does NOT mean the work is missing — open it before you believe the status.** Whenever a prior goal you are about to depend on has abandoned tasks, read them. `abandoned` is overloaded across three situations a planning session has to treat differently:

   - **dropped** — genuinely cut. A real gap; scope it again if it still matters.
   - **superseded** — a different approach won. Maybe a gap; read what replaced it.
   - **absorbed** — folded into a sibling task and shipped THERE. **Not a gap at all**, and putting an edge on it is actively wrong: it strands live work behind a prerequisite that already exists.

   **The absorbed case has a marker you can check** — `merged_into_task_id`, which is what `POST /tasks/:id/merge` records (merge is "abandon, plus where it went"). It rides on the task row, on `blocked_by` entries from `GET /tasks?include=deps`, and on a claim refusal, which now names the absorbing task and tells you to RE-POINT the edge rather than restore anything (task 1003107). A row carrying that pointer is work that exists — go read the task it names.

   **A row WITHOUT the pointer still needs its description read**, because the marker only exists from the day someone used merge instead of abandon-with-a-note, and the older rows are exactly the ones a rescope trips over. **Verify against the repo, not the row.** On 2026-08-16 a session read task 1003005 ("Rename modules/governance to modules/government") as `abandoned` and nearly put a false edge in a new goal's graph — the folder move had shipped under task 1003004, and only the prose said so. One `git log` over the paths the task named would have settled it.

### Phase 1.5 — Map the mechanism (process-change sessions only) — task 1003075

**Run this phase when the session is scoped to CHANGING how an existing mechanism already works** (a redesign, not a net-new feature with nothing live to replace) — skip it for a purely additive version with no prior mechanism in play. The precedent is the 2026-08-17 idea-routing session (goal 1000071): a subagent mapping the LIVE capture→triage→promote path before Phase 2 turned "route bugs to goals" into the capture-time-promotion design and resolved the bugs-vs-features question almost by itself — the session's own retro named it the highest-value step, and until now the skill only implied it.

1. **Input.** Name the subsystem(s) the version is about to change, and the entry points you already know (a route file, a CLI script, a module's public function) as the subagent's starting point.
2. **Spawn a read-only mapping subagent** (`Explore` or `general-purpose`, `model: sonnet` or higher per CLAUDE.md's subagent routing — this feeds a design decision, not plumbing) with a prompt asking it to trace the CURRENT live mechanism end-to-end: every entry point that touches it, the chokepoint(s) data already funnels through, and any function/route already doing part of what the new design needs. Ask for file:line references, not prose summaries — the output has to be citable in the spec.
3. **Output artifact — the mechanics map.** A short structured list: each chokepoint or reusable function/route, with a file:line and a one-line note on what it does today. Write it down (in the session, or straight into the spec draft) rather than letting it live only in the subagent's reply.
4. **Consumed by:**
   - **Phase 2 (Criteria)** — a chokepoint the map surfaces (e.g. "every capture vector funnels through one function") often turns directly into a criterion, or reframes one that would otherwise be written as a task list.
   - **Phase 3 (the spec)** — the map becomes the spec's **"Reuse, do not rebuild"** table under *Design decisions & assumptions*: one row per chokepoint/function, `existing → how the new design uses it`. See `docs/specs/<redacted>.md` §Design decisions for the worked example.

### Phase 2 — Criteria

Criteria are the version's done-when. Strong criteria are **outcomes** (broad enough to anchor many tasks), not **task lists** (so narrow they only anchor a few). Five to nine criteria is the typical band; ours have been 7-9.

For each criterion:

- One bold lead sentence stating the outcome
- A short "why" — what changes when this is true
- 4-7 sub-outcomes that make the criterion testable

**Apply the strength test BEFORE presenting each criterion.** A criterion passes the test if it plausibly anchors at least 5 tasks across multiple `kind` values (feature + bug + infra, not just feature). If it only anchors 1-3 specific tasks, or reads like an implementation step, rewrite it as the resulting outcome before showing it to the user.

**Number every criterion** (`1.`, `2.`, …) in the presented list. The user will reference them by number when editing — e.g. "edit 4, remove 5, add a new one about X" — so they don't have to copy/paste the criterion titles.

**Ask "what's missing?" before finalizing.** Once you've presented N criteria and worked through edits, explicitly prompt: "What concerns you that I haven't named? What's missing from this list?"

Once criteria are agreed:

- Number them in final order
- Confirm each one with the user
- Get explicit sign-off before moving to brainstorming.

### Phase 2.5 — Goals (the module-scoped workspaces) — ADR 0086

> **Planning a SINGLE goal, not a whole version? Use [`/goal-create`](../goal-create/SKILL.md)** — same decisions (reuse-vs-new, scope wall, criteria, seed tasks), one sitting, no spec file and no migration.

A **goal** is the tier between version and criteria: a shared, joinable, **module-scoped** workspace that several builders work inside (ADR 0086). A version is "done" when all its goals are achieved. Defining goals is now part of planning — it's how the version's criteria get grouped into workspaces with a **scope wall** that bounds what each goal's members may author.

For the version being planned, **group the agreed criteria into goals**. For each goal decide, with the user:

- **Title** — the outcome the goal owns (often 1–3 criteria's worth).
- **`scope_modules`** — the module **keys** (NOT file paths) whose files this goal's members may touch. **This is the wall, and it is set here and only here — never self-granted.** Keep it tight: the modules the goal's work actually needs. Widening later goes through an explicit request a trusted rank approves (`POST /goals/:id/scope`; Archon for a `protected` module) — BV1.R64.
  > **The valid key list is the source of truth in [`src/bongos/module-scope-map.js`](../../../src/bongos/module-scope-map.js) — read it, don't trust this list.** It exports `moduleKeys()` (all keys), `protectedModules()` / `isProtectedModule(key)` (which are PROTECTED), and `scopeForModule(key)` (a key's globs + `protected` flag). Each key maps to path-globs; `protected` is **derived** (the key's globs overlap the trust/ship-pipeline/migration/authz core), and a goal scoped to any protected key is **Archon-only** to create. The current roster (run `node -e "const m=require('./src/bongos/module-scope-map');console.log(m.moduleKeys().map(k=>k+(m.isProtectedModule(k)?' 🔒':'')).join('\n'))"` to print it live):
  >   - **No roster is written down here on purpose.** The previous snapshot went stale within a release (it still omitted a key that had been added), which is exactly the failure a "read it live" rule prevents. Run the one-liner above; `protected` is derived from glob overlap, so it changes when the globs change.
  >   - **That file is the SOURCE. The RUNNING SERVER is the GATE.** `POST /goals` validates `scope_modules` against the roster the LIVE server loaded — not the one in your checkout — so a key added since the last deploy is valid here and refused on the wire. Merging to main deploys nothing (gate 3 of [the release pipeline](../../../docs/recipes/core-release-pipeline.md)), and this is not a rare race: the module roster grows precisely during the versions when planning sessions run. On 2026-08-16 goal 1000069 was created with `government` in scope and came back `unknown: ["government"]` — the key was on main; the site was a release behind. **The SessionStart deploy-state line already tells you whether you are exposed.** If it says the site is behind main, treat any recently-added key as suspect before you compose the goal, not after.
  >   - **The refusal is not a dead end — it hands you the answer.** `unknown_module` comes back with `valid: [...]`: the LIVE roster, from the server that just refused you. One rejected call tells you exactly what will be accepted, so read it and re-point rather than trying keys one at a time. (`tests/goal_unknown_module_hint.mjs` pins that the refusal keeps carrying it, because this instruction is only true while it does.)
  >   - **Prefer a deployed alias where one exists, and write the re-point down.** Goal 1000069 was walled to the deprecated `governance` alias, which ADR 0174 deliberately kept carrying BOTH sets of globs through the transition — so the wall was identical, not weaker — and the goal description recorded that `scope_modules` should be re-pointed once the newer release went live. A goal walled to an alias with no note is a goal nobody re-points.
- **No covering key? → file a module-map prep task FIRST.** Every `scope_modules` entry must be a real key from `moduleKeys()`. If a goal's planned work touches file paths that **no existing key covers** (e.g. a brand-new module dir, or code still fused under `src/bongos/` that isn't yet broken out as its own key), the scope wall cannot place that work. Do **not** invent a key. Instead, **add a prep task to this version** — `kind='refactor'`, scoped to `kernel` (the module that owns `module-scope-map.js`) — to extend `MODULE_GLOBS` so a key covers those paths, and make the dependent goal's tasks depend on it. Adding/editing a key is itself a `kernel`-scoped (Archon-gated) change, so flag it for Archon sign-off in this session.
- **Join policy** — a normal-scope goal is **open-join** (any builder); a goal whose scope includes a **`protected`** module is **Archon-mediated** (a non-Archon can't self-join; an Archon admits Metic+ members). Creating a protected-scope goal is itself **Archon-only** — so flag those for Archon sign-off in this session.
- **Optional seed tasks / lead** — any obvious first tasks, and who leads.

Present the goals as a short table (title · scope_modules · join policy · the criteria under it). Confirm the grouping and the scope of each before Phase 3 — the brainstorm then runs **per goal → per criterion**, and each net-new task is scoped to one goal.

> **Rescope is "previous or new" at the goal tier too.** If this version succeeds a prior one, you already decided in Phase 1 which prior goals carry forward — those become this version's goals (linked via `succeeded_by_goal_id`); the rest are net-new here.

### Phase 3 — Draft the spec (the brainstorm, written to a file)

Do the full brainstorm below as thinking — but the **output is a written spec file**, not a numbered chat list for approval. For each criterion, list every task that could serve it. Be thorough — the Phase-4 interview will refine and prune. Include:

- Existing tasks already queued for the version (you have them from Phase 1)
- Open ideas tagged for the version that should be pulled in
- Net-new tasks the criterion implies but nobody has filed yet

Don't tunnel-vision. Surface lateral options the user might not have thought of:

- Cross-cutting tasks (renames, audits, sweeps)
- **Needs-exploration tasks** for criteria where the design isn't obvious yet (these become `kind='spike'` in the DB, but use the phrase "needs exploration" in conversation — clearer than "spike" for the user)
- Smoke tests / "this proves the criterion is met" tasks
- End-of-version lockdown tasks (e.g., rank-gating skills that were available to all during the version)

**Proactively propose needs-exploration tasks** for any criterion where the implementation path isn't clear. Don't wait for the user to flag it. Frame them as "this one needs an architecture pass first — output an ADR + sub-task list before we build."

**For each criterion, explicitly propose a proof-task** — the single live demonstration that proves the criterion is met. Examples: "Builder #2 onboards in ≤2h" for an onboarding criterion, "five concurrent builders shipping without collisions on staging" for a parallel-safety criterion. Without a proof-task, the criterion may technically ship without anyone knowing it works.

**Encourage short task descriptions with cross-refs.** Each task's description should focus on done-when + touches; reference dependency tasks by their R## rather than restating context. Long standalone descriptions are content-debt at scale (80 tasks × 200 words = a lot of redundant context).

> **`touches[]` is an advisory hint, not a hard fence ([ADR 0049](../../../docs/adr/0049-split-parallel-safety-contract.md)).** Parallel-safety is a *split contract*: for interactive single-human work, `git merge` is the authoritative collision detector and the claim-time overlap signal only warns; only the autonomous `--parallel` runner treats footprint overlap as a hard gate. So don't agonize over predicting every file at planning time — a rough blast-radius is enough, and a wrong prediction is no longer ship-blocking. (Step 7/8 — task [#882](https://example.com/builders#/task/882) — makes the per-task `touches` field optional and backfills it from the committed diff at ship.)

**Write the brainstorm to a spec file — do NOT present a numbered chat list for e/r/a approval (that step is replaced by the Phase-4 interview).** Write `docs/specs/<ver>-<goal-slug>.md` (create `docs/specs/` if absent; slug = the goal's title kebab-cased). This file is the working document for the rest of the session and is committed in Phase 5. Give it these sections:

- **Title + status line** — `# Spec — <goal title> (<ver>, goal <id>) · status: draft`.
- **Summary** — 2–4 sentences: what we're building and why (the goal's outcome).
- **Criteria (done-when)** — the goal's criteria verbatim by slug (C1, C2, …); every task links to one.
- **Design decisions & assumptions** — what we're committing to and why; note grounding from the codebase (existing modules/tables/routes to reuse). Starts from your best defaults; the Phase-4 interview fills and revises this.
- **Open questions (for the interview)** — the non-obvious decisions still unresolved, each with why-it-matters + the options you see. This is the raw material for Phase 4; empty it as answers land.
- **Task outline** — grouped by criterion (and phase, if phased), one row per task: `R## · kind · title · one-line done-when · deps:[R##] · criterion_ids:[<criterion-slug>]`, tagged `[E]`/`[I]`/`[N]`. Mark **spikes** (needs-exploration) and **proofs** (the live demo per criterion).
- **Dependency graph & ranking** — filled in Phase 4 (topo order + priority tiers).
- **Out of scope** — what this goal explicitly does NOT do, so the interview and tasks stay bounded.

Tell the user the spec is written and where, then move straight to the interview — the spec is shaped THERE, not by chat edits here.

### Phase 4 — Interview in depth, then finalize the spec

**This is the heart of the new flow — it replaces asking for task-by-task approval.** Read the spec you just wrote, then interview the owner with the **AskUserQuestion tool** to resolve every non-obvious decision before a single task is seeded.

**Spool every answer to the spec file as it lands (task 1002865).** After each AskUserQuestion round, write the decisions into the spec file's *Design decisions & assumptions* and strike them from *Open questions* before you ask the next round — never hold the interview only in the conversation. The spec on disk is what Phase 5 reads; if the Bongos login expires mid-session, a re-auth then costs a minute, not the interview.

**Run it as a loop, not a one-shot:**

1. From the spec's *Open questions* (plus anything the task outline leaves genuinely undecided), assemble a round of up to **4 questions** and ask them with AskUserQuestion. Put a recommended option first when you have a view; always leave room for "Other."
2. Fold the answers into the spec's *Design decisions* (and adjust the task outline if an answer reshapes the work).
3. Re-assess: are there still non-obvious, decision-changing questions? If yes, ask another round. **Keep going until nothing material is left** — you should be able to seed every task without guessing. Then stop.
4. The owner can end the interview early at any time ("that's enough / seed it"). Tell them this up front.

**Ask only NON-OBVIOUS questions.** A question earns its place only if: the spec is genuinely underspecified on it, reasonable experts would disagree, AND the answer changes what gets built or how it's broken into tasks. Span dimensions across rounds — **data model & schema, API surface & contracts, UI/UX & information architecture, permissions/authz, privacy/consent, performance & scale, failure modes & edge cases, migration/rollout/backfill, naming the user will see, and scope boundaries.**

**Do NOT ask** anything answerable by reading the codebase, anything the criteria already settle, yes/no rubber-stamps, or "do you want it to be good?" filler. If you catch yourself about to ask something with one obvious answer, decide it yourself and record it in *Design decisions* instead.

> **This interview is the deliberate exception to the usual "decide implementation details yourself" default (see Tone, and CLAUDE.md §2).** The owner has explicitly asked to be consulted in depth here — so probe technical implementation, UX, tradeoffs, and concerns, not just outcomes.

When the interview is complete, **rewrite the spec to the same file with `status: final`** — *Open questions* emptied into *Design decisions*, and the task outline updated. Then rank + wire dependencies and record them in the spec's *Dependency graph & ranking* section:

**The system has two ordering signals — use both:**

1. **`dependencies[]`** (hard) — task A depends on task B if A cannot start until B has shipped. The auto-promotion trigger and claim-time check enforce this: a backlog task with all deps shipped (and `kind != 'spike'`) auto-promotes to `ready`; a claim attempt is refused if any dep is unshipped. Deps are the *meaning* of execution order.
2. **`V##.R##` rank prefix** (soft) — fine-grained ordering *within* the dependency-allowed set. Used as the tiebreaker for queue display. Topologically renumber so that for any A → deps → B, B's R## < A's R##.

**Spike tasks live in backlog by default.** The auto-promotion trigger skips `kind='spike'` — humans open spikes manually because spikes produce new tasks downstream and need a power-user decision before claim. Non-spike tasks auto-flow.

**Sanity-check schema constraints before designing the encoding.** This runs
against the Postgres on the Linux droplet over SSH — it's an Archon ops step, not
a builder-local one (so the bash/`ssh`/`psql` here is server-side by design, not
a Windows concern):

```bash
bongos exec scripts/gds/skill-preflight.js planning-session   # stops here if this box has no ssh
ssh lars@REDACTED_IP "psql -d example -c '\\d tasks' | grep -i check"
```

The preflight sits at THIS step rather than at the top of the skill on purpose:
the `droplet-ssh` this skill declares is needed for one optional lookup, not for
the whole session, so gating the entire planning session on it would refuse work
that does not need it. Compare `/merge-mode`, where the capabilities are
preconditions for the whole procedure and the gate is Step 0. Both placements are
legitimate; what is not legitimate is declaring a capability and never checking it
(task 1003167).

Confirm what the `priority` column actually allows.

**Encoding (V3 convention):** priority is `1-5` (CHECK constraint). Use priority by tier:

- T1 (must ship first) = P5
- T2 (immediate follow-on) = P5
- T3 / T4 (parallel infra) = P4
- T5 (advanced features) = P3
- T6 (polish) = P2
- T7 (end-of-version lockdown) = P1

The fine-grained N-deep rank lives in the title prefix: `V<ver>.R##` zero-padded so alphabetical sort returns ranking order within a priority bucket.

Initial ranking: produce it yourself based on dependencies and what the user stated during the interview (e.g., "onboard builder #2 early"). Record the tiers in the spec's ranking section; the interview already surfaced the user's priority calls, so don't re-litigate — just reflect them.

**Critical-path sequencing notes** to surface: which tasks gate which (architecture spikes gate the rest of their criterion; rename should be first; smoke tests should be last in their tier).

**Capture dependencies during the brainstorm, not after.** For each new task, ask yourself "which already-listed tasks must ship before this one is even claimable?" and write the answer next to the task. By the end of Phase 3 every task should have a `dependencies: [Rxx, Ryy]` field (possibly empty). Then in Phase 4:

1. Build the dep graph from the captured edges.
2. Run cycle detection — if a cycle exists, surface it and ask the user to break it (usually one side of the cycle is a "pair-with" relationship, not a true dep).
3. Topologically sort. Tiebreaker: lower current R## first (preserves planning intent), then alphabetical ref.
4. Re-number `V<ver>.R##` in topo order. The output is your final rank.

This is what the V3.R02 (task 309) dependency system encodes; Phase 5 writes both the title prefix and the `task_dependencies` rows.

### Phase 5 — Land it

Once the spec is finalized (Phase 4), **read `docs/specs/<ver>-<goal-slug>.md` as the source of truth** and do the writes in this exact order.

**Probe the session right before the first write, and recover on a 401 (task 1002865).** Call `GET /api/bongos/me` again here: a session that passed the gate at Phase 1 can expire during a long interview (the retro that filed this: 200 at the gate, 401 by Phase 5). If the probe — or ANY write below — answers `401` / "session is no longer valid", **do not abandon the session**: tell the builder to run `/builder-reauth`, wait for it, then **resume** from the write that failed. Everything the session decided is already in the spec file (Phase 4 spooled it), and the writes are idempotent — the meta task and every seeded task on `source_ref`, criteria on `criterion_id` (a 409 means already seeded), dependencies on `(task_id, depends_on_task_id)` — so re-running the seed script after a re-auth creates nothing twice. (If the goal and its criteria already exist — e.g. this session planned tasks for a pre-existing goal — skip the goal/criteria creation in step 2 and seed the tasks under the existing goal, linking them via `criterion_ids` + `goal_id`.)

1. **Create a meta planning-session task** (`source_ref='<ver>-planning-N'`) that backs all the writes — version='<ver>', kind='decision', status='ready', priority=5, the full session described in its body. Claim it. (For a long session — a big spec + a multi-round interview — create and claim this meta task **early, at Phase 1**, so the spec-write and interview are themselves covered by a claim. A rebase-gated builder can't claim new work; as Archon, proceed and record the session in the meta task even if the claim is blocked, noting it.)

2. **Create the version's goals, then write the criteria migration.** Goals come first (ADR 0086) so the criteria can be parented under them:
   - **Goals** (via API — `POST /goals`; Archon-only when the scope includes a `protected` module). One per goal from Phase 2.5; **capture each returned goal id**.
     ```
     bongos exec scripts/gds/api.js POST /api/bongos/goals --body '{"version_id":"<ver>","title":"...","scope_modules":["<key>", ...]}'
     # carry-forward goal: add "succeeds_goal_id":<prior_goal_id>
     ```
   - **Criteria — the vector depends on whether the instance is LIVE ([ADR 0105](../../../docs/adr/0105-instance-seed-migrations-out-of-core.md)):**
     - **On a RUNNING instance (the normal case — planning a new goal/version on prod):** create each criterion via the **`POST /api/bongos/versions/:id/done-when`** API (**Metic+ for a goal you own or manage — [ADR 0154](../../../docs/adr/0154-goal-owner-criterion-authoring.md); Archon for a version-level criterion, someone else's goal, or a shipped/frozen version**), passing `criterion_id` (a stable slug), `criterion_md`, `goal_id` (the goal from above), and optional `sort_order`. This is the ONLY vector that actually lands a NEW criterion on a live DB — a `done_when_criteria` INSERT in a CORE migration **fails the `selfhost-boot` gate** (scope-truth pollution), and one in `migrations/instance/` **silently no-ops on a normal deploy** (ADR 0105 applies instance seeds only under the owner opt-in `GDS_APPLY_INSTANCE_SEEDS=1`, a DR step). A duplicate `criterion_id` returns 409 — treat as "already seeded."
       ```
       bongos exec scripts/gds/api.js POST /api/bongos/versions/<ver>/done-when --body '{"criterion_id":"<slug>","criterion_md":"...","goal_id":<gid>}'
       ```
     - **For a brand-new version scaffolded from scratch (DR / a fresh instance):** put the `INSERT INTO done_when_criteria` (with `goal_id`, `ON CONFLICT ... DO UPDATE`) in **`migrations/instance/<NN>_<ver_slug>_planning_seed.sql`** — and recreate the goal idempotently in the same file (the goal is a runtime row a replay won't have). Applies only under `GDS_APPLY_INSTANCE_SEEDS=1`.
   - **Migration** at `migrations/<NN>_<ver_slug>_planning_seed.sql` (CORE — platform-universal, non-scope-truth changes only): `UPDATE versions SET done_when = ...` and `UPDATE tasks` for existing-task priority + V##.R## title prefix (guarded by `WHERE title NOT LIKE 'V<ver>.R%'`). **Do NOT put versions/goals/`done_when_criteria` INSERTs here** — that's scope-truth and fails the `selfhost-boot` gate (ADR 0105).

3. **Write a seed script** at `scripts/gds/seed-<ver_slug>-tasks.js` modeled on `scripts/gds/seed-v3-tasks.js` containing:
   - The TASKS array — one entry per net-new task with full description, kind, discipline, priority, est_minutes, manual_degree, credits_reward, **optional** `touches` (see below), optional `promoted_idea_id`, `depends_on_refs: ['R##', ...]` (the dep edges captured during brainstorm), AND **`criterion_ids: ['Cn', ...]`** — the done-when criterion(s) this task gates. The brainstorm in Phase 3 is already grouped by criterion, so this is just transcribing that grouping. **Use the criterion_id SLUG, not a positional `"Cn"` token.** `Cn` ranks over the whole VERSION's criteria, so on a version holding more than one goal it resolves to some other goal's criterion — which is how all 15 tasks of goal 1000071 were mislinked while the seed printed success (learning 1000188). Since task 1003108 the server **refuses** a positional ref on a multi-goal version (`400 ambiguous_criterion_ref`) rather than guessing, so a slug is the only ref that works there. The server resolves it against the task's version at create (ADR 0025 / task 438). **This replaces the old `**Criterion:** Cn` prose** — don't write that line anymore; pass `criterion_ids` instead so the task is linked in `task_criteria` at creation and `/status` counts it with no backfill.
   - **`touches` is now OPTIONAL (task 882 / [ADR 0049](../../../docs/adr/0049-split-parallel-safety-contract.md)).** Omit it (or leave it blank) unless you already know a tight file set and want the advisory overlap signal during the brainstorm. At first `/builder-ship` the server backfills `touches[]` from the real committed diff — the declared set becomes what git actually reported. Don't burn planning effort predicting file lists; a rough or absent prediction is fine and no longer ship-blocking.
   - **`requires_rank` AUTO-DERIVES — you don't hand-set it per task (task [#1498](https://example.com/builders#/task/1498) / [ADR 0084](../../../docs/adr/0084-auto-derived-per-task-rank-floor.md)).** On create the server floors a task at `metic` when it is `security_sensitive` or its `touches` reach the permission / authz / ship-grade / deploy / migration core (the same protected paths a sub-Metic builder can't push to); everything else stays the open `xenos` default. To deliberately gate a task **higher** than the auto-floor (e.g. owner-only work), pass `requires_rank: 'metic' | 'archon'` on the task — it can only RAISE the floor, never drop below it.
   - **Pass `goal_id: <gid>` on each task** so it lands under its goal (not the version's default catch-all). `POST /tasks` now honors `goal_id` (validated to belong to the version); to move an already-created task, `PATCH /tasks/:id` with `{goal_id}` (task 1763). `criterion_ids` accepts a **slug** (the `criterion_id` you set above), a numeric id, or a `"Cn"` position — **but `Cn` is rejected outright once the version holds a second goal**, and a version almost always gains one. Treat the slug as the only form you write.
   - A main() that POSTs each task **with its `criterion_ids`** (idempotent on `source_ref`; the criterion links are inserted at create, idempotent on `(task_id, criterion_id)`), PATCHes `idea_inbox` for promotions, and after all tasks exist, POSTs `task_dependencies` via `POST /tasks/:id/dependencies` (resolving each R## to the just-created task ID). Idempotent on `(task_id, depends_on_task_id)`. (Need to re-attribute an already-seeded task? `POST /tasks/:id/criteria` with `{criterion_ids:['Cn',...]}`; `DELETE /tasks/:id/criteria/:criterionId` to detach — both Metic+ ([ADR 0090](../../../docs/adr/0090-metic-task-authoring.md)), mirroring the dependency endpoints.)

> **Seeding contract — validated on goal 1000045 (2026-07-16):** proof-tasks use `kind='verify'` (a deliverable that IS a verification; can't be prematurely confirmed), spikes `kind='spike'`; `POST /tasks` accepts `criterion_ids` + `goal_id` inline and disciplines include `ui`; there is **no `promoted_idea_id`** field on `POST /tasks` — mark a promoted idea via `PATCH /inbox/:id`; **descoping a criterion has no API** (done-when is create/satisfy/unsatisfy only) — remove the row via a direct DB delete (`ssh … "sudo -u postgres psql -d <db> -c \"DELETE FROM done_when_criteria WHERE id=…\""`) under the meta-task claim, capturing the SQL in its notes; and a seed script **must throttle + honor `429` `retry_after`** (per-IP rate limit) — add a base delay between calls and back off on 429, or a large seed dies halfway. A completed reference seed: `scripts/gds/<redacted>.js`.
>
> **Every seed script verifies its own criterion links — fail loudly on any mismatch, zero included (task 1003076, retro on goal 1000071).** The goal-1000071 seeder linked all 15 tasks to the WRONG criteria (a positional `"Cn"` token resolved against the whole VERSION's criterion order, not the goal's — learning 1000188) and still printed success; only a manual `GET /goals` rollup caught it, after the fact. Every seed script's `main()` must end by tallying the `criterion_ids` it actually POSTed per task, then calling `verifySeedCriteriaLinks` from [`scripts/gds/seed-verify-criteria.js`](../../../scripts/gds/seed-verify-criteria.js) — it fetches `GET /api/bongos/goals/<id>`, diffs the returned `criteria[].linked_tasks` against that plan, and `exit(1)`s with a loud per-criterion diff on any mismatch (see `expectedCriterionCounts` + `verifySeedCriteriaLinks`). Reference implementation: `scripts/gds/<redacted>.js`. This is a script-level check, independent of whatever caused the mislink — it catches the *symptom* (a criterion silently under- or over-linked) whichever bug produces it.

4. **Apply the migration** (commit + push + deploy, or direct psql via SSH for hot-fix style).

5. **Run the seed script.** Verify exit code 0 — the seed's own final step (the Seeding contract's `verifySeedCriteriaLinks` call, above) already fails loudly if any criterion's linked task count doesn't match the plan, so a 0 exit means the links landed correctly, not just that the POSTs didn't error. Also spot-check totals via `GET /api/bongos/public/progress` and `GET /api/bongos/versions/<ver>/done-when`.

6. **Promote the zero-dep layer to `ready` — scoped to the tasks you just seeded.** Every newly-seeded task lands `status='backlog'`. The auto-promotion trigger only fires when a *dependency* ships — so a task with zero deps has nothing to wait for and would sit unclaimable forever.

   **Scope this to your own seed, and never to the whole version** (task 1001438). `version_id + status='backlog' + kind<>'spike' + no dep edge` also describes rows that are sitting at `backlog` **on purpose**, and promoting those is a silent, unlogged override of another subsystem's decision:
   - **cascade-filed tasks** — `cascade.js` files generated work at `backlog`, **never** `ready`, as one of its four pinned properties (`modules/lifecycle/CLAUDE.md`; task 1003549). A cascade task has no dependency edge, so an unscoped promote flips exactly the rows that guarantee says it never will.
   - **restored tasks** — `POST /tasks/:id/promote` → `db.restoreTask` returns an abandoned task to `backlog` so a human re-scopes the dead edge deliberately (owner ruling 2026-08-21, ADR-backed in `modules/lifecycle/CLAUDE.md`). Promoting it straight to `ready` is the "silently release work built on something that was never built" outcome that ruling forbids.

   Both are ordinary carry-overs in any version that has been live for a while, so the blast radius grows the longer an instance runs.

   Every seed script POSTs with `source: 'planning-session'` and a per-seed `source_ref` prefix (see `scripts/gds/<redacted>.js`), which is the handle to scope by — it needs no id transcription and cannot drift from what the seed actually created. **Dry-run the SELECT first and read the rows**, in the same psql session as the migration (or via SSH to the droplet):

   ```sql
   SELECT id, title, priority, kind
   FROM tasks
   WHERE version_id = '<ver>'
     AND source = 'planning-session'
     AND source_ref LIKE '<seed-ref-prefix>-%'
     AND status = 'backlog'
     AND kind <> 'spike'
     AND id NOT IN (SELECT task_id FROM task_dependencies);
   ```

   The count must match the zero-dep tasks your seed script just created. If it is larger, your `source_ref` prefix is catching an earlier seed — narrow it (or fall back to the explicit list, `AND id = ANY('{<seeded ids>}')`) before writing anything. Then re-run it as the UPDATE:

   ```sql
   UPDATE tasks
   SET status = 'ready', promoted_at = now()
   WHERE version_id = '<ver>'
     AND source = 'planning-session'
     AND source_ref LIKE '<seed-ref-prefix>-%'
     AND status = 'backlog'
     AND kind <> 'spike'
     AND id NOT IN (SELECT task_id FROM task_dependencies)
   RETURNING id, title, priority, kind;
   ```

   Capture the `RETURNING` rows — the max `priority` value is the input for step 7. Spikes are intentionally excluded; they never auto-promote (kind='spike' convention, [ADR 0015](../../../docs/adr/0015-task-dependencies-and-auto-promotion.md)).

7. **Surface higher-priority spikes still in backlog.** Spikes don't auto-flow because their output reshapes downstream work — that's a feature, not a bug. But the planning session just decided the priority order, so a high-priority spike sitting unstarted while lower-priority non-spike work flows to `ready` is a coordination smell worth one explicit mention. Query:

   ```sql
   SELECT id, title, priority
   FROM tasks
   WHERE version_id = '<ver>'
     AND status = 'backlog'
     AND kind = 'spike'
     AND priority >= <max_priority_from_step_6>
   ORDER BY priority DESC, title;
   ```

   The bar is **relative** — `>= max(priority of the rows promoted in step 6)`. If lower-priority non-spike work was promoted, only equal-or-higher-priority spikes surface; lower-priority spikes are noise at planning-land time and stay silent.

   If the query returns rows, surface them to the user verbatim:

   > "Heads up — these spikes sit at priority ≥ the top of your ready queue. They don't auto-promote (kind='spike', [ADR 0015](../../../docs/adr/0015-task-dependencies-and-auto-promotion.md)). If any gates downstream work, open it manually: `POST /api/bongos/tasks/<id>/promote`"

   If the query returns nothing, stay silent. Don't volunteer info about lower-priority spikes — the next planning session or `/idea-triage` walk will handle those at the right moment.

8. **Commit + push** the spec file (`docs/specs/<ver>-<goal-slug>.md`) + the migration + seed script + any new skill files + the session-log entry.

9. **Ship the meta task** via `/builder-ship` with a clean value-summary.

## How to use — quick reference

All API calls go through the cross-platform `bongos exec scripts/gds/api.js` helper —
it signs each request with your session token (no manual token extraction) and
runs on Windows/macOS/Linux.

```
# Phase 1 — pull state
bongos exec scripts/gds/api.js GET /api/bongos/public/versions
bongos exec scripts/gds/api.js GET "/api/bongos/tasks?version=<id>"
bongos exec scripts/gds/api.js GET /api/bongos/inbox
bongos exec scripts/gds/api.js GET /api/bongos/versions/<id>/done-when
```

Phase 5 writes use the same `POST /tasks`, `PATCH /inbox/:id` shape as `idea-triage` and `seed-v3-tasks.js`. Mirror those patterns rather than inventing new ones.

## Tone for the user

Lars is the prompter (see CLAUDE.md §2). Frame criteria and tasks in terms of outcomes and player/builder experience, not implementation. **Exception: the Phase-4 interview is deliberately in-depth** — there the owner has asked to be consulted on implementation, UX, tradeoffs, and concerns, so probe hard (non-obvious questions only). Outside that interview, keep the default: decide implementation details yourself and present them for confirmation.

When the user pushes back ("criteria 4/5/6 are weak"), take it seriously and rewrite. Strong outcome criteria are the hard part — the rest of the session is downstream of them.

When the user ends the interview ("that's enough" / "seed it"), finalize the spec and seed in one shot — don't re-open settled questions or bounce back for more approval.

## After the session — improvements pass

At the end of every planning session, ask the user the retrospective question:

> "Anything we should do differently in the next planning session? My own observations from this one:"

Then offer 2-4 concrete recommendations based on how the session actually went (e.g. weak criteria caught late, ranking done by chat vs artifact, a schema constraint hit at first write). File them as `idea_inbox` rows tagged `kind='skill-friction'` so the skill improves over time.
