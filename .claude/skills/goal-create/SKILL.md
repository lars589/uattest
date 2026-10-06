---
name: goal-create
description: >-
  Plan and create ONE goal (the module-scoped workspace between a version and its criteria) with its done-when criteria and seed tasks. Metic+. Triggers: "/goal-create", "create a goal", "what goal should this live in", a task created with no goal.
plain: >-
  Helps you set up a new goal: what it is for, how you will know it is done, and the first tasks to get there.
reach-for: >-
  When new work does not fit any existing goal.
cost: >-
  Free. It creates the goal and its first tasks once you agree to them.
---

You are running the **goal-create** session for this Cloud Bongos instance. You produce **one goal**: a title, a scope wall, two to four done-when criteria, and a handful of seed tasks — written to Bongos in one sitting.

> **Not `/planning-session`, not `/goal-review`.** `/planning-session` scopes a whole **version**: 5–9 criteria, a written spec under `docs/specs/`, a multi-round interview, a seed script, a migration. This skill produces **one goal**, with no spec file and no migration. `/goal-review` is the other end of the same lifecycle — it *confirms* criteria and auto-achieves goals. If the ask is "plan the next version", stop and run `/planning-session` instead.

## Rank gate — Metic+ only

**Gated to Metic+ (Metic, Archon); not Xenos.** Creating a goal sets a **scope wall** — the module keys its members may author inside — and seeds the criteria a slice of the version will be judged against. That is a trusted-builder operation (ADR 0086 §3/§4). The server enforces it: `POST /api/bongos/goals` is `requireRank('metic','archon')`, and `POST /api/bongos/versions/:id/done-when` is `requireRank('metic','archon')` **plus a goal-ownership wall** (ADR 0154) — both pinned in `route-rank-check.MODULE_EXPECTED_RANKS.lifecycle`. This check just stops a Xenos early instead of after a wall of 403s. Markdown never grants authority ([`docs/canonical-permissions.md`](../../../docs/canonical-permissions.md), [ADR 0016](../../../docs/adr/0016-trust-boundary-server-enforced-permissions.md)).

**Enforce the gate at the very top of the session, before reading anything else:**

1. Call `bongos exec scripts/gds/api.js GET /api/bongos/me` and read `builder.rank`. Compare case-insensitively (lowercase it before testing).
2. **If `rank` lowercases to `xenos`** → stop immediately. Tell the builder: *"Creating a goal sets a scope wall and seeds a version's done-when criteria — a Metic+ operation. You're currently Xenos. You can still **file** the proposal as an idea (`bongos exec scripts/gds/capture.js "…"`) for a Metic+ builder to promote at triage; ask an Archon for promotion if you need to create goals directly."* Do not read the goal board, do not draft criteria.
3. **If `rank` lowercases to `metic` or `archon`** → proceed with the phases below.
4. **If `rank` is absent** (a deployment where the three-rank model hasn't shipped) → treat the session as available, exactly as `/idea-triage` does in its pre-rank passthrough mode, and note that in the session log.
5. **The protected-scope branch is a SECOND gate, decided in Phase 3 — not here.** A goal whose `scope_modules` includes a **protected** key is Archon-only to create (`403 archon_required_for_protected_scope`) and Archon-mediated to join. You do not know the scope at gate time. Draft it in Phase 3, then take one of the off-ramps in Phase 5 if you are a Metic and the drafted scope is protected.

## What this skill does

1. Reads the live goal board for the target version, and the version's existing criteria.
2. Decides **reuse vs. create** — an open goal whose outcome and scope already cover the work wins; a net-new goal only when nothing does.
3. Drafts, on its own: title · description · `scope_modules` (verified against the **live** roster) · `succeeds_goal_id` lineage · 2–4 criteria · a seed-task outline.
4. Asks — via AskUserQuestion — only the gray areas it genuinely cannot decide, then **one** approval round.
5. Writes in the order **goal → criteria → tasks**, then verifies and reports.

## Phase 1 — Read the board (autonomous; ask nothing)

Determine without asking:

- **The version.** `bongos exec scripts/gds/api.js GET /api/bongos/public/versions`. If exactly one is `building` or `planning`, take it. Ask only when two or more are open *and* the work doesn't obviously belong to one.
- **The existing goals.** `bongos exec scripts/gds/api.js GET "/api/bongos/goals?version=<ver>&status=open"`, then `GET /api/bongos/goals/<id>` on each plausible candidate — the detail response is `{goal, members, criteria, dependencies}`, which is what tells you whether a candidate already owns criteria in this space.
- **The version's criteria.** `bongos exec scripts/gds/api.js GET "/api/bongos/versions/<ver>/done-when"` → `{version_id, criteria, goals}`. Use it to avoid a `criterion_id` collision and to pick the next `sort_order` (max + 1).
- **The module roster — LIVE, never from memory and never from this file:**

  ```
  node -e "const m=require('./src/bongos/module-scope-map');console.log(m.moduleKeys().map(k=>k+(m.isProtectedModule(k)?' [PROTECTED — Archon-only]':'')).join('\n'))"
  ```

  > **Run the line. Do not paste a roster anywhere, including into this file.** `protected` is *derived* from glob overlap with the trust core, so it changes when the globs change. The snapshot in `/planning-session`'s Phase 2.5 rotted within one release and now omits a key — that is the failure mode this rule exists to prevent.

- **Lineage**, only when this goal continues a prior version's work: `bongos exec scripts/gds/api.js GET "/api/bongos/goals?version=<prev>&status=achieved"` and pick the predecessor for `succeeds_goal_id`.

## Phase 2 — Reuse or create (autonomous; one question only on a genuine tie)

> **Reuse** when an open goal's outcome already contains this work *and* its `scope_modules` already cover the files it touches. **Create** when the work is a distinct outcome, or when reusing would force that goal's wall to widen into a new module — widening is `POST /goals/:id/scope`, a separate ask a trusted rank approves. Don't smuggle it in.

If the answer is reuse, **stop creating.** Report the goal id, and if an orphan task triggered this session, move it:

```
bongos exec scripts/gds/api.js PATCH /api/bongos/tasks/<task_id> --body '{"goal_id":<gid>}'   # ids only — safe inline
```

Only a real tie between two candidates earns an AskUserQuestion.

## Phase 3 — Draft the goal (autonomous)

Everything here is your call. It is presented in Phase 4 as a proposal, not as questions.

- **Title** — the outcome the goal owns, not a task list. One line.
- **`description`** — 2–4 sentences: what is true when this goal is achieved, and what it explicitly does not cover.
- **`scope_modules`** — infer from the planned work's file paths, then **verify every key against `moduleKeys()`**. An unknown key is a hard `400 unknown_module` (the response helpfully returns the full valid roster). Keep it tight: the wall is set here and only here. **No covering key?** Do not invent one — file a `kind='refactor'` prep task scoped to `kernel` to extend `MODULE_GLOBS`, and make this goal's tasks depend on it.
- **`category_id`** — the goal's HUMAN category (task 1003277; ADR 0192 — advisory, it gates nothing). Read the live set with `GET /api/bongos/work-categories` (never hard-code the labels), infer the best fit from the goal's outcome and its `scope_modules`, and state your pick in the Phase-4 approval round like every other drafted field. **When nothing in the set fits, that is a designed prompt, not an error**: do NOT silently pick the nearest, and do NOT leave it null and move on — surface the gap in the gray-area round and offer to create a new category (`POST /api/bongos/work-categories` with `{"label":"..."}`; a duplicate slug converges on the existing row), then use it. Creating uncategorised stays legal — if the user declines to name one, POST the goal without `category_id` and note that the 201 body will carry a `category_advisory` reminding whoever looks next.
- **`succeeds_goal_id`** — set it when carrying an achieved goal forward. `POST /goals` validates the predecessor exists *before* creating, so a bad ref can't orphan a goal; it then stamps the predecessor's `succeeded_by_goal_id`. Archiving the predecessor is a **separate** call.
- **Criteria — 2 to 4.** A goal's criteria are narrower than a version's: each should plausibly anchor 2–5 tasks. Draft `criterion_id` as a stable kebab slug (position-independent, and what `criterion_ids` on `POST /tasks` should reference); `criterion_md` is the outcome prose.
- **Seed tasks — 3 to 8.** Per criterion, with `kind`, a one-line done-when, `criterion_ids: ["<slug>"]`, and dependency edges. Omit `touches[]` (advisory, ADR 0049 — backfilled from the real diff at ship). Never hand-set `requires_rank`: it auto-derives (ADR 0084) from `needs_migration` and the goal's own scope wall, neither of which needs a prediction (ADR 0270). **Do set `needs_migration: true` on any task that will alter the live database** — it is the input that floors such a task at Metic, and omitting it is how a schema change lands in the open queue. Proof tasks use `kind='verify'`; exploration uses `kind='spike'` (and spikes are deliberately left in backlog).

## Phase 4 — Ask, then get sign-off

Two rounds at most, both via **AskUserQuestion**.

1. **Gray-area round — at most one round, at most 4 questions, often zero.** A question earns its place only if the work is genuinely underspecified on it, reasonable people would disagree, **and** the answer changes the goal's shape. Put your recommendation first and leave room for "Other". Legitimate gray areas: where this goal's boundary falls against an adjacent one; whether a module belongs inside the wall or is a dependency; whether this succeeds a prior goal or replaces it; whether a criterion belongs to this goal or the version. **Do not ask** anything the goal board, the criteria list, or `moduleKeys()` already answers, and never ask a yes/no rubber-stamp.
2. **The approval round — always exactly one, always last.** Present the goal (title · category · `scope_modules` · join policy · succeeds), the **numbered** criteria, and the seed-task table. Then one question: **Create it** / **Goal + criteria only** (skip the seed tasks) / **Edit first** / **Cancel**. Number the criteria so the user edits by number rather than by copy/paste.

## Phase 5 — Land it (write order: goal → criteria → tasks)

The order is forced: a criterion needs `goal_id`, a task needs both `goal_id` and the criterion slugs.

> **Always `--body-file`, never inline `--body`, for anything carrying a title, description or criterion prose.** Those strings are authored in this session and routinely contain an apostrophe ("the builder's hall"), which terminates a single-quoted shell argument and corrupts the JSON — or, with a hostile string, runs whatever follows on the builder's machine. Write the body to a temp `.json` file and pass its path. On Windows also heed `scripts/gds/CLAUDE.md`: do **not** create that file with `Out-File`/`>` (the UTF-8 BOM breaks `JSON.parse`), and never pipe `api.js` through `2>&1` (its banner goes to stderr by design).

```
# 5a — the goal. STRICT validation: exactly these seven fields are accepted
#      (version_id*, title*, subtitle, description, scope_modules[], succeeds_goal_id, category_id).
#      ANY other key is a 400 unknown_field — do NOT pass criteria, tasks, lead or visibility.
#   goal.json: {"version_id":"<ver>","title":"...","description":"...","scope_modules":["<key>"],"category_id":<id>}
#   category_id comes from GET /api/bongos/work-categories (task 1003277); omitting it is
#   legal — the 201 body then carries a category_advisory, never a refusal.
#   carry-forward: add "succeeds_goal_id":<prior_goal_id>
bongos exec scripts/gds/api.js POST /api/bongos/goals --body-file <path-to-goal.json>
# → 201 {ok, goal, succeeds_goal_id}. CAPTURE goal.id.
# You are now the goal's OWNER and its 'lead' member — the membership row is inserted
# in the SAME statement, so there is NO join step. Don't POST /goals/<id>/join after.

# 5b — the criteria, one call each, in presentation order.
#   criterion.json: {"criterion_id":"<slug>","criterion_md":"...","goal_id":<gid>,"sort_order":<n>}
bongos exec scripts/gds/api.js POST /api/bongos/versions/<ver>/done-when --body-file <path-to-criterion.json>
# You may write these because you OWN the goal (ADR 0154), not merely because you are
# a Metic. Refusals: 409 criterion_exists (slug already on this version — reuse it,
# don't rename around the collision) · 409 goal_not_open · 409 version_closed ·
# 400 bad_goal_id (which ALSO masks "you don't own this goal" — see below).

# 5c — the seed tasks, one call each. --body-file avoids shell-quoting description/arrays.
bongos exec scripts/gds/api.js POST /api/bongos/tasks --body-file <path-to-task.json>
#   {"version_id":"<ver>","goal_id":<gid>,"title":"...","description":"...",
#    "kind":"feature|refactor|infra|spike|verify|decision","priority":N,"est_minutes":N,
#    "criterion_ids":["<slug>"],"source":"goal-create","source_ref":"goal-<gid>-R##"}
# criterion_ids takes a SLUG (preferred), a "Cn" position, or a numeric id; an
# unresolvable ref is 400 bad_criterion_ref and NOTHING is created. source_ref makes a
# re-run idempotent (a repeat returns the original task with "idempotent": true).
# Throttle between calls and honour 429 retry_after.

# 5d — dependency edges, only where a real gate exists.
bongos exec scripts/gds/api.js POST /api/bongos/tasks/<id>/dependencies --body '{"depends_on_task_id":<id>}'  # ids only

# 5e — promote the zero-dependency layer. Every new task lands status='backlog', and
#      auto-promotion only fires when a DEPENDENCY ships — so a task with no deps would
#      sit unclaimable forever. Leave spikes in backlog.
bongos exec scripts/gds/api.js POST /api/bongos/tasks/<id>/promote

# 6 — verify + report.
bongos exec scripts/gds/api.js GET /api/bongos/goals/<gid>            # {goal, members, criteria, dependencies}
bongos exec scripts/gds/api.js GET "/api/bongos/tasks?goal_id=<gid>"
```

### Protected scope — the Archon off-ramps

> **If the drafted `scope_modules` contains a protected key and you are a Metic, do not POST.** `POST /goals` returns `403 archon_required_for_protected_scope`, and a protected-scope goal is Archon-mediated to join in any case. Say so plainly and offer three routes:
> 1. **Narrow the wall.** Usually only *part* of the work needs the protected module. Create the goal scoped to the unprotected keys, and file the protected-core piece as a task under an existing Archon-owned goal.
> 2. **Hand an Archon the drafted body.** They create it, then admit you via `POST /goals/:id/members` (Archon-only for protected scope, and the target must be Metic+).
> 3. **File it as an idea** — `bongos exec scripts/gds/capture.js "<the goal proposal>"` — for an Archon to promote at `/idea-triage`.
>
> **Do not** create the goal narrow intending to widen it later. Widening into a protected key is Archon-gated too. Scope is never self-granted (ADR 0086 §4).

### A 400 on a criterion can mean "not your goal"

`POST /versions/:id/done-when` deliberately returns the **same** `400 bad_goal_id` whether the goal doesn't exist or you simply don't own/manage it — so the route can't be used to probe which goals (including private ones) exist on a version (ADR 0154). If you get `bad_goal_id` for a goal you just created, you are almost certainly writing to the wrong version; if it's a goal someone else owns, ask them or an Archon to add the criterion.

## Auto-invoked from a task create (the orphan hook)

When `POST /tasks` came back with a non-null **`goal_advisory`**, you were invoked to give that task a home.

- `reason: "no_goal"` — the task has no goal at all. Its version has no catch-all, which is normal for any version created after the goal tier shipped.
- `reason: "catch_all"` — it landed in `"<version> — general"`: a bucket with no scope wall, no criteria and no owner.

Run the phases above **with the orphan task as the seed** — its title, description and touches are your best evidence for the goal's title and `scope_modules`. Two shortcuts:

- **Prefer reuse.** `goal_advisory.candidate_goals` already lists the version's open goals with the catch-all excluded. Check each with `GET "/api/bongos/goals/<id>/suggest-criteria?title=<t>&description=<d>"` — a strong criterion match means the task belongs there and no new goal is needed. Move it with `PATCH /tasks/<id> {"goal_id":<gid>}`.
- **If you do create a goal, re-home the orphan into it** (same PATCH) and link the criterion: `POST /api/bongos/tasks/<task_id>/criteria --body '{"criterion_ids":["<slug>"]}'` (slugs are kebab-case, so inline is safe). Do **not** delete and recreate the task — you would lose its id, `source_ref` and any votes.

**A goal-less task is not an error and was never blocked.** `goal_advisory` is advice on a request that already succeeded. Never fail a build, refuse work, or badger the builder over it — if they say "later", file the idea and move on.

## The sibling advisory: `dependency_advisory` (task 1002827)

The same `POST /tasks` response can also carry a non-null **`dependency_advisory`** — a *different* check, unrelated to which goal the task landed in: it names OPEN tasks in the same version whose `touches[]` overlap this one's, with no declared dependency between them (`scripts/gds/audit-deps.js`'s detector, run live for the first time).

- `dependency_advisory.candidates` is sorted by confidence (`high`/`medium`/`low`) — read each candidate's title before acting; most overlap is parallel work on a shared file, not a real build-order dependency.
- Only backfill a **high**-confidence candidate, and only after reading both task descriptions. Add the edge with `POST /tasks/<id>/dependencies --body '{"depends_on_task_id":<dep_id>}'`.
- **Same non-blocking contract as `goal_advisory`** — it is advice on a request that already succeeded, never a reason to redo the create, and a wrong edge GATES the dependent (`POST /claims` → 409 `DEPS_NOT_SHIPPED`) until the named blocker ships, so silence (skip it) beats a guessed edge.

## Why we run this

Nothing in the system creates a goal on its own, and nothing errors when a task has none. `db.createTask` falls back to the version's `"<version> — general"` catch-all, and those rows were created **only** by migration 160, for the versions that existed at that moment — `db.createVersion` makes no such goal and there is no trigger. So on any newer version, every task quietly gets `goal_id = NULL`: no scope wall, no criteria gating it, no workspace where anyone reviews it. This skill is how a real goal comes to exist before that happens.

## Tone for the user

Lars is the prompter (see CLAUDE.md §2). Frame the goal as an **outcome** — what is true when it's done — never as a `scope_modules` array or a rank discussion. Decide the mechanics yourself; ask only about the boundary: what this goal owns, and what it deliberately doesn't. Keep the approval round to one screen.
