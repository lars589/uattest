---
name: bug-triage
description: >-
  Daily walk of open kind=bug tasks, which land with no triage gate and accumulate near-duplicates. Batch-verdict the dups, then merge or won't-fix the rest. Metic+ only. Triggers: "/bug-triage", "triage bugs", "walk the bug queue", "dedupe bugs".
disable-model-invocation: true
plain: >-
  Goes through the reported bugs, groups the near-duplicates, and decides what happens to each: merge it, keep it, or close it.
reach-for: >-
  Once a day, or when the bug list feels messy.
cost: >-
  Free. It closes or merges bug reports only when you agree.
---

You are running the bug-triage session for Example. Open `kind=bug` tasks get
walked and verdicted, so near-duplicate reports don't sit forever as separate
claimable rows.

## Why this exists (task 1001478, idea 244)

Since task 1003071, a `#bugs` report routes straight to a `kind=bug` task at
filing time — no inbox stop, no gate. That is correct for getting a report
into the queue fast, but it means nothing ever folds two reports of the same
underlying bug together the way `/idea-triage` folds duplicate ideas. This
skill is that missing step, built on a **task-merge primitive** (`tasks`
gained `merged_into_task_id` + `triage_note` in `core_232`, mirroring
`idea_inbox`'s `merged_into_idea_id` from `core_195`) that did not exist
before this task.

**A merge is `abandoned` + a target, not a new status.** `tasks.status` has no
`'merged'` value — adding one would touch every place that already enumerates
task statuses (the claimable feed, dependency satisfaction, the diagrams
state machine) to answer a question `abandoned` already answers: this task is
retired, and by owner ruling its dependents are stranded, not waiting (see
`modules/lifecycle/CLAUDE.md`). `merged_into_task_id` carries the one thing
bare abandon can't: which task absorbed it. Read `modules/lifecycle/db-ship.js`
`mergeTask`'s header comment for the full guard list before touching this
surface.

## Rank gate — Metic+ only

**Gated to Metic+ (Metic, Archon); not Xenos or Thetes.** Merging or
won't-fixing a bug task reshapes the team's backlog the same way idea triage
does — `task.merge` and `task.abandon` are both floor-`metic` permissions
(`modules/government/catalog.js`). A sub-Metic can still **file** a bug (via
Discord `#bugs`, or `POST /tasks` if `task.create` allows it); they can't
verdict the queue.

**Enforce the gate at the very top of the session, before reading anything else:**

1. Call `GET /api/bongos/me` and read `builder.rank`. Compare case-insensitively.
2. **If `rank` lowercases to `xenos` or `thetes`** → stop immediately. Tell the
   builder: *"Bug triage is a Metic+ operation — merging or dismissing a bug
   report reshapes the team's backlog. File new bugs via Discord `#bugs`;
   ask an Archon to promote you if you need to triage them."* Do not list
   open bugs, do not propose verdicts.
3. **If `rank` lowercases to `metic` or `archon`** → proceed below.
4. **If `rank` is absent** (pre-rank deployment) → treat the session as
   available, the same pre-rank passthrough `/idea-triage` uses.

> Belt-and-braces: the server already rejects `POST /tasks/:id/merge` and
> `POST /tasks/:id/abandon` with `403 permission_forbidden` for a sub-Metic
> caller — this check just stops one early instead of after a wall of 403s.

## What this skill does

1. Lists open `kind=bug` tasks via `GET /api/bongos/tasks?kind=bug&limit=1000`,
   filtered to the still-open statuses (`backlog`, `ready`, `active`,
   `blocked`, `completed`, `confirmed` — never `shipped` or `abandoned`,
   the latter of which already includes merged-away duplicates).
2. **Batches near-duplicate bug tasks** into one verdict per cluster
   (`bongos exec scripts/gds/bug-triage.js`'s reuse of `triage.js`'s `clusterRecords`
   — the same union-find/Jaccard core `/idea-triage`'s `clusterIdeas` uses,
   generalized in task 1001478 so the algorithm is written once). Partitioned
   by `goal_id`, not `kind` — every row here is already `kind='bug'`, so a
   kind gate would be a no-op; two bug reports in unrelated goals describing
   similar-sounding symptoms are not the same triage decision.
3. For each remaining bug, prompts the user with: **merge** (this is the same
   report as task N) or **won't-fix** (not a bug / already fixed / can't
   reproduce — closes the report itself, folds into nothing).
4. Applies each verdict via `POST /api/bongos/tasks/:id/merge` or
   `POST /api/bongos/tasks/:id/abandon`.

**No "promote" step, unlike `/idea-triage`.** A bug report is already a task —
there is no shape question (goal vs criterion vs task) to work out, because
`task-classifier.js`'s auto-routing already decided `kind=bug` at capture
time. The only two questions triage adds are "is this the same as an existing
report" and "should this report be closed at all".

## How to use

**Step 1 — fetch open bug tasks.**

```
bongos exec scripts/gds/api.js GET "/api/bongos/tasks?kind=bug&limit=1000"
```

Filter client-side to the open statuses above. If nothing remains, print "bug
queue empty — nothing to triage today" and stop.

For a human at a terminal, `bongos exec scripts/gds/bug-triage.js` runs the whole
walk interactively instead — batching, per-task prompts, and the summary all
in one command, same shape as `bongos exec scripts/gds/triage.js`.

**Step 1.5 — batch near-duplicate bug reports BEFORE walking individually.**

Run `clusterRecords` (`scripts/gds/triage.js`, pure, no I/O) with
`textOf: t => t.title + ' ' + t.description`, `kindOf: t => t.goal_id`,
`timeOf: t => new Date(t.created_at)`. For each cluster it returns, offer the
user ONE decision covering the whole group:

> Cluster of 3 likely duplicates: #501 "Login button does nothing on
> Safari", #517 "Safari: login unresponsive", #530 "Login broken in Safari".
> **Keep #501 and merge the rest, dismiss all as won't-fix, walk them
> individually, or skip?**

- **Keep #N** → merge every other member into #N (`POST /tasks/:id/merge
  {"into_task_id": N}`), leaving #N itself open — it still gets the normal
  Step 2 walk below, since "which report is the real one" and "should it stay
  open" are different decisions.
- **Won't-fix all** → every member abandoned with one shared reason.
- **Individually** → ignore the grouping for this cluster; each member
  returns to the normal walk.
- **Skip** → leave the whole cluster open; it clusters again next triage.

`bongos exec scripts/gds/bug-triage.js` already runs this pass automatically before
its interactive walk — a human running the deterministic walker gets it for
free with no flag.

**Step 2 — walk the list, task by task.**

Present each remaining bug with:
- id, status, title
- description (full)
- goal_id, created_at

Then ask the user (concise prompt — the owner may not be a software engineer,
CLAUDE.md §2's portable default; frame in product/outcome terms, not
implementation):

> Bug #N: "{title}". {one-sentence summary of the report}. **Is this a
> duplicate of an existing bug, should it be closed as won't-fix, or should
> it stay open?**

**Step 3 — apply the verdict.**

**Merge** → ask which existing task N is the canonical one, then fold this
report into it:

```
bongos exec scripts/gds/api.js POST /api/bongos/tasks/<id>/merge --body '{"into_task_id":<N>,"reason":"same report as #N"}'
```

The server refuses a self-merge (`merge_self`), a shipped source
(`cannot_merge_shipped`), a task with an active claim
(`task_has_active_claim`), a target that doesn't exist
(`merge_target_not_found`), and a target that is itself merged elsewhere
(`merge_target_merged` — it names where the chain ends; retarget there
instead of re-merging).

**Won't-fix** → dismiss with a reason (not a bug / already fixed / cannot
reproduce):

```
bongos exec scripts/gds/api.js POST /api/bongos/tasks/<id>/abandon --body '{"reason":"cannot reproduce on current build"}'
```

**Keep open** is implicit — leave the task un-patched by not calling either
route. It will surface again next triage.

**Step 4 — surface a summary.**

Report to the user:
- Total walked
- Merged (count + which task each folded into)
- Won't-fixed (count + ids)
- Skipped / left open (count — these surface again next session)
- Remaining open bug count

## Why we run this

The same reason `/idea-triage` runs daily: a queue nobody walks quietly fills
with near-duplicates that each cost a separate builder's attention to
discover independently. A fast pass with mostly "skip" verdicts beats
skipping the session entirely — the cadence is the discipline.

## Tone for the user

The owner is the prompter (CLAUDE.md §2's portable default). Frame merge/
won't-fix decisions in terms of what's actually broken for the end user, not
implementation: "these
are the same login failure reported twice" not "these share 71% word
overlap." Decide the mechanical merge target yourself; ask the human only
when two reports are genuinely ambiguous (different symptoms that might
share one root cause, say) rather than obviously the same.
