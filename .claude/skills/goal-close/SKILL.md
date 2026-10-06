---
name: goal-close
description: >-
  Close a goal's criteria: test the ones awaiting UAT on the live site and sign off, then decide the ones a UAT can't close (work abandoned or unlinked). Metic+. Triggers: "/goal-close", "/goal-uat", "/goal-review", "what's awaiting UAT".
disable-model-invocation: true
plain: >-
  Walks you through trying finished goal work on the live site so a person can sign it off, then helps decide the checks nobody can test any more.
reach-for: >-
  When work is waiting for someone to try it for real, or a goal is stuck on checks nobody can finish.
cost: >-
  Free. Your sign-off or decision is recorded; nothing else changes.
---

You are running the **goal-close** session: the closing end of a goal. It is one skill with two parts that used to be two commands (task 1004471):

- **Part 1 — UAT** (was `/goal-uat`): criteria whose work shipped, tested on the live site and signed off.
- **Part 2 — residue** (was `/goal-review`): criteria a UAT cannot close, because all their work was abandoned or none was ever linked.

**Which part to run.** `/goal-close` runs Part 1 then Part 2. `/goal-close uat` (or the old `/goal-uat`) runs Part 1 only; `/goal-close residue` (or the old `/goal-review`) runs Part 2 only. If the builder named a goal, keep only that goal's rows in both parts.

> **The other end of this lifecycle is [`/goal-create`](../goal-create/SKILL.md)** — it opens a goal (scope wall, criteria, seed tasks).

## Rank gate — Metic+ only (both parts)

Signing off rides `criterion.review`, and an override rides `POST /api/bongos/done-when/:criterionId/satisfy` (`requireRank('metic','archon')`, pinned in `route-rank-check.MODULE_EXPECTED_RANKS.lifecycle`). The server enforces both; this check just stops a Xenos early instead of after a wall of 403s. Markdown never grants authority ([`docs/canonical-permissions.md`](../../../docs/canonical-permissions.md), [ADR 0016](../../../docs/adr/0016-trust-boundary-server-enforced-permissions.md)).

**Enforce the gate at the very top of the session, before reading anything else:**

1. Call `bongos exec scripts/gds/api.js GET /api/bongos/me` and read `builder.rank`. Compare case-insensitively (lowercase it before testing).
2. **If `rank` lowercases to `xenos` or `thetes`** → stop immediately. Tell the builder: *"Closing a goal's criteria is a Metic+ step — signing one off or overriding it closes out a slice of a version and can auto-achieve a goal. Ask an Archon to promote you, or ask a Metic to run it."* Do not list either queue.
3. **If `rank` lowercases to `metic` or `archon`** → proceed.
4. **If `rank` is absent** (a deployment where the three-rank model hasn't shipped) → treat the session as available, exactly as `/idea-triage` does in its pre-rank passthrough mode, and note that in the session log.

---

## Part 1 — UAT: test on the live site, then sign off

A criterion no longer closes because its linked tasks shipped ([ADR 0351](../../../docs/adr/0351-a-criterion-closes-on-a-uat.md), task 1004392, superseding ADR 0183's "shipped is enough"). Once its work has shipped it reads **Awaiting UAT**, and it closes only when a person who did **not** ship that work does what the criterion describes **on the live site** and signs it off.

This is the owner's rule because criteria were being closed by any tasks that happened to be linked to them, whether or not the thing the criterion describes was real. A UAT is the check against the criterion's **words**, not against the task list. Hold it to that.

### The three checks (what you are verifying)

| Check | Passes when | Who decides |
|---|---|---|
| **Code** | every linked task is done and at least one shipped | automatic |
| **Live** | the shipped work is running on the deployed site | read automatically where the site can tell; otherwise the signer confirms it |
| **UAT** | a signed-in person performed the criterion on the live site; a recording is stored | the signer, who must not have shipped any linked task (the project owner excepted) |

A criterion marked **backend-only** (set when it was written, visible on the criterion) has no screen to record, so it takes a recording-free **backend sign-off** instead. It still needs a non-shipper to sign it.

### Step 1: the queue

```
bongos exec scripts/gds/uat.js --queue
```

(Add `--version <id>` to scope it.) If nothing is awaiting UAT, say so and move on to Part 2 (or stop, if only Part 1 was asked for).

### Step 2: one criterion at a time

For each, run `bongos exec scripts/gds/uat.js <criterion-id>` and present, in plain words:

- the criterion's text, in full;
- its goal, and whether it is the goal's **last** open criterion (then signing it off achieves the goal);
- the Live line (running, not yet, or "this site cannot tell");
- whether it is backend-only.

Then tell the tester exactly what to do **on the live site**, derived from the criterion's words: which page, what to click, what they should see. Write it as a short numbered script. If the criterion's words describe something the tester cannot find on the live site, that is the answer: **it is not met.** Say so and go to Step 4 (reject) rather than looking for a reading under which it passes.

### Step 3: record and sign off

The tester records their screen doing the script (any screen recorder that saves **mp4 or webm**, up to **100 MB**; Windows: Win+Alt+R with Xbox Game Bar, or the Snipping Tool's record button; macOS: Cmd+Shift+5). Then:

```
bongos exec scripts/gds/uat.js <criterion-id> --recording <path-to-file> --note "<one line: what was checked>"
```

For a backend-only criterion, after the tester has checked it by whatever means proves it (a log line, an API read, a test run against live):

```
bongos exec scripts/gds/uat.js <criterion-id> --backend-signoff --note "<how it was checked>"
```

Add `--live-attested` only when the server says this site cannot tell whether the work is live, and only if the tester really did it on the live site.

**Refusals, in the words to give the builder:**

| Refusal | Meaning |
|---|---|
| `signer_shipped_this_work` | they shipped linked work; someone else signs this one |
| `work_not_live` | shipped but not deployed yet; sign off after the deploy |
| `criterion_not_awaiting_uat` | linked work still open (or none linked, or all abandoned: that is Part 2) |
| `criterion_needs_recording` / `criterion_is_backend_only` | wrong kind of sign-off for this criterion |
| `live_attestation_required` | confirm it was tested on the live site (`--live-attested`) |

A sign-off on a goal's last open criterion reports the goal achieved; say so.

### Step 4: when it is NOT met

The shipped work does not do what the criterion says. Do not sign off. File the missing work as a task linked to the criterion (`POST /api/bongos/tasks`, then `POST /api/bongos/tasks/<id>/criteria` with `{"criterion_id": <criterion-id>}`) so the criterion drops back to Open until that ships. That is what happened to `wa7-government` (task 1004400).

### What Part 1 does NOT do

- It never uses `POST /done-when/:id/satisfy`. That is the **override** (Part 2): it requires a written `override_reason` and the criterion reads "Satisfied (override)" for good. Use it only when the owner asks, and never to get past a refusal above.
- It never marks a criterion backend-only to avoid recording one. Backend-only is set while a criterion is still open (`uat.js <id> --backend-only on`), and the server refuses it once the criterion is awaiting UAT.

---

## Part 2 — residue: the criteria a UAT cannot close

This part mirrors `/idea-triage`, for the *closing* end of the work hierarchy (ADR 0086 §6). The review queue (`GET /done-when/pending-review`) also holds criteria nothing was delivered for, and a UAT cannot test those (every row carries `uat_state`; skip the `awaiting_uat` ones, they are Part 1's):

1. **A criterion whose linked tasks were ALL ABANDONED.** Nothing shipped, so there is nothing to test. *Somebody must decide whether the criterion still means anything now that its work is gone*: reject it (file the work that will really deliver it, linked to it), or, if it was genuinely met another way, override it with the reason.
2. **A criterion with NO linked tasks.** It cannot even reach Awaiting UAT. Link the tasks that deliver it (better — it makes the board true); it then goes through Part 1 like any other.

**Rejecting is the valuable verdict here**; an override is the exception and says so forever ("Satisfied (override)").

### Step 1 — fetch the review queue

```
bongos exec scripts/gds/api.js GET /api/bongos/done-when/pending-review
```

(Add `?version=BONGOS-V1` to scope to one version. `api.js` is the cross-platform Bongos API helper — it signs the request with your session token.)

If no row is left once the `awaiting_uat` ones are skipped, print "review queue empty — no criteria pending review today" and finish.

Each row carries: `id` (the criterion's numeric id — what you POST to), `criterion_id` (the slug) + `criterion_md` (the prose), `version_id`, `goal_id` + `goal_title` + `goal_status`, `task_total` (how many shipped tasks fulfilled it), and **`is_last_in_goal`** — `true` when this is the goal's only remaining unsatisfied criterion, so **closing it will auto-achieve the goal**.

### Step 2 — walk the list, criterion by criterion

Present each criterion with: its `criterion_md`, its goal (`goal_title`), how many tasks shipped under it (`task_total`), and — when `is_last_in_goal` is true — a clear flag:

> ⚠️ This is the LAST open criterion in **{goal_title}** — closing it will mark the whole goal **achieved**.

Then ask the user (concise; frame in product/outcome terms):

> Criterion C{n} — "{criterion_md}". None of its linked work was delivered. **Reject and file the real work, override (it was met another way), or defer?**

### Step 3 — apply the verdict

**Override** (only for a criterion met some other way, never for one awaiting UAT) → it closes WITHOUT a UAT, so the server requires the reason and records it; the criterion reads "Satisfied (override)" from then on:

```
bongos exec scripts/gds/api.js POST /api/bongos/done-when/<criterion_id>/satisfy --body '{"override_reason":"<why this is met without a UAT>"}'
```

The response is `{ criterion, goal_achieved, goal }`. **If `goal_achieved` is true**, announce it: *"Goal '{goal.title}' is now achieved — all its criteria are closed."* (That goal now awaits disposition — see Step 4.)

**Reject** → on review it is **not actually met** (the work missed something, or "done" was mis-scoped). There is no "unsatisfy the flag" — the durable fix is to **add the missing work**: capture what's still needed (a follow-up task linked to this criterion, or an idea via `bongos exec scripts/gds/capture.js "..."`), and note the rejection in the session log. Once an unshipped task is linked to the criterion, it drops out of `pending_review` on its own. If no follow-up is filed, the criterion simply stays flagged and resurfaces next session — an honest signal that a human said "not done" but nothing was queued to close the gap. **Do not close a criterion you would not stake the version on.**

**Note / defer** is implicit — leave the criterion open by not POSTing. It stays in the queue and surfaces again next session (same as `/idea-triage`'s defer).

### Step 4 — achieved goals (disposition)

Any goal that flipped to `achieved` this session (or is already `achieved`) awaits a disposition: **archive** it (done, put it to rest) or **carry it forward** into the next version's scope. Surface each newly-achieved goal to the user and record the intended disposition in the session log.

> The archive / reopen / carry-forward **actions** (the routes that mutate goal lifecycle) land in **BV1.R64** ([task 1518](https://example.com/builders#/task/1518)) — they are not wired here. For this session, *report* achieved goals and capture the intent; once R64 ships, this step gains the verbs to execute it.

### Step 5 — dependency check (task 1002827, idea 1000276)

A cheap housekeeping pass over the same corpus this session already has open: run the likely-missing-dependency detector and surface any `high`-confidence candidate for a human to triage.

```
bongos exec scripts/gds/audit-deps.js --min high
```

Each line names an open task and an unshipped task whose files it overlaps with no declared dependency between them. **Read both task descriptions before backfilling an edge** — most overlap is parallel work on a shared file, not a build order; a wrong edge gates the dependent (`POST /claims` → 409 `DEPS_NOT_SHIPPED`) until the named blocker ships. Report the count in the summary; zero is the common case and needs no further comment. This is advisory only — it never blocks the review, and skipping it on a rushed pass is fine (it resurfaces next session, same as a deferred criterion).

---

## Summary to give at the end

- **Part 1:** criteria walked · signed off (ids) · goals achieved · rejected, with the follow-up task filed for each · left waiting (not live yet, or no tester available).
- **Part 2:** criteria walked · overridden (count + ids) · goals auto-achieved (count + titles) · rejected (count + ids + what follow-up was filed) · deferred (count + ids — these surface again next session) · the new queue count · the dependency-check count.

## Why we run this

Without a closing cadence, criteria pile up "done but unconfirmed" and goals never flip to achieved — the version looks perpetually in-progress even when the work has shipped. A fast pass keeps the rollup honest. As with `/idea-triage`, the cadence is the discipline; a quick walk with mostly defers beats skipping it.

## Tone for the user

Frame each decision in terms of outcome — "this criterion was 'players see each other'; both tasks shipped — is that actually true in the live game?" not "flip satisfied=true on criterion 45." Decide the mechanics yourself; ask the owner only about whether the thing is *really* done.
