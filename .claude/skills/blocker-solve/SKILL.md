---
name: blocker-solve
description: >-
  Drive ONE blocker to done and auto-close it, handing the owner-only parts back as precise steps. Unlike /blocker-review, which walks the whole list. Metic+ only. Triggers: "/blocker-solve N", "solve blocker N", "fix the thing blocking task M".
plain: >-
  Takes one thing the project is stuck on and works it through to the end, handing back as clear steps anything only the owner can do.
reach-for: >-
  When a single problem is holding up work and you want it fixed rather than just listed.
cost: >-
  Uses your session. It asks for your yes before anything that spends money or is hard to undo.
---

You are running a **blocker-solve session** — a session scoped to exactly one Bongos blocker, whose goal is to drive that blocker to resolution and close the loop automatically. Where `/blocker-review` is a daily list-walk that records status, this is a *working* session that actually moves one blocker toward done and, when the fix is verified, resolves it — which promotes every linked task `blocked → ready` via the migration-009 trigger.

The session **always works the same way**, whether the fix is something you can do or something only the owner can do:

> **gather context → do what you can / guide the rest → verify → auto-resolve → report.**

A blocker that "needs the owner's hands" (a Cloudflare login, a billing change, a payment, a yes/no decision) is **not a different mode** — the human action is just a *pause inside this same flow*. You produce exact instructions, the owner performs the step, you verify it landed, and you resolve. The point is to kill the gap that bites today: the owner finishes the real-world action but Bongos never hears about it, so the blocker sits open forever and its tasks stay stuck.

## Rank gate — Metic+ only

Resolving a blocker auto-promotes every task linked to it — a write that reshapes the whole team's `ready` queue — so this is a trusted-builder operation, gated to **Metic and Archon** (not Xenos). Enforce it at the very top, before reading anything else:

1. Call `bongos exec scripts/gds/api.js GET /api/bongos/me` and read `builder.rank`. Lowercase before testing.
2. **If `rank` lowercases to `xenos`** → stop immediately: *"Blocker-solve is a Metic+ operation — resolving a blocker auto-promotes every task linked to it. You're currently Xenos. You can still **file** a blocker (`POST /api/bongos/blockers`); ask an Archon to promote you if you need to solve them."* Do not read the blocker or propose a fix.
3. **If `rank` lowercases to `metic` or `archon`** → proceed.
4. **If `rank` is absent** (pre-rank deployment) → proceed in passthrough mode, exactly as `/blocker-review` does, and note it.

> Belt-and-braces only: the server already rejects `/blockers/:id/resolve` with `403` for non-Metic+ ([ADR 0018](../../../docs/adr/0018-three-rank-model-goes-live.md), [`docs/canonical-permissions.md`](../../../docs/canonical-permissions.md)). Markdown never grants authority (criterion C7) — this check just stops a Xenos before they walk a whole solve only to 403 on the resolve.

## Guardrails — read before you touch anything

These are what keep a "solve" honest. Violating them turns a helpful session into a lying ledger or an untracked change.

- **Verify before you resolve. Never resolve on assumption.** Resolve **only** when either (a) a programmatic probe confirms the fix is live, or (b) the item is genuinely un-probeable and the owner explicitly attests it's done. Write *how* you verified into the `resolution_note`. If you can't verify, the blocker stays **open** — say so plainly. Resolving something to look productive is the one unforgivable move here.
- **Don't smuggle code through a blocker-solve.** Performing **operator / external / config actions** to clear a blocker (set a repo secret, flip a prod env var, add a Cloudflare rule, change a non-code setting, record a decision) *is* the blocker's purpose and is in-scope for this cadence, claim-free — same standing as `/blocker-review` resolving a blocker. **But if clearing the blocker requires net-new _code_, stop** and route that through a normal claimed task (`/builder-start` → claim → `/builder-ship`). Every code change is backed by a claimed task — there is no blocker-solve loophole.
- **Sensitive or outward-facing actions need the owner's explicit go-ahead in this session before you execute them** — SSH to the prod droplet, `git push`, rotating a credential, anything that spends money or is hard to reverse. Present the exact command and wait for "yes."
- **Server enforces rank, not this skill.** You only ever *call* the rank-gated endpoints; you never reimplement or bypass the gate.

## The flow

### 1. Gather context
Read the blocker fully, then enrich it:

```
bongos exec scripts/gds/api.js GET /api/bongos/blockers/<id>
```

Fields: `title`, `body_md` (often already contains a numbered "Steps (owner): …" plan — lean on it), `source`, `source_ref`, `status`, plus `blocking_task_ids` (task 1002459 — the detail route now hydrates the same array the list view returns). These linked tasks are exactly what will auto-promote when you resolve.

- Read any linked task's notes (`GET /api/bongos/tasks/<task-id>`) — the source task usually explains what "done" means.
- Pull project knowledge so you're not re-deriving: `bongos recall "<the blocker's topic>"` (add `--kind doc` for ADRs/recipes). This surfaces the ADR, recipe, or past session that already documents how to do this thing.

If the blocker is already `status: resolved`, stop — there's nothing to solve; tell the user and exit.

### 2. Plan and split the steps
Turn the blocker into a concrete checklist, and label every step **[I can do]** or **[needs you]**:

- **[I can do]** — anything reachable from this session: a repo secret via `gh`, a prod env flip via SSH (with go-ahead), a config/DNS/Cloudflare change via an available API token, regenerating a doc, running a script.
- **[needs you]** — anything that only the owner can perform: logging into a third-party dashboard, a billing/plan change, a payment, granting an API-token scope, or a business/architectural decision.

Present the checklist to the user before acting, so they see what you're about to do and what you'll need from them.

### 3. Execute or guide
- For each **[I can do]** step: do it. For sensitive/outward steps, show the exact command and get the explicit go-ahead first (see guardrails).
- For each **[needs you]** step: write **precise, click-by-click** instructions (Lars is non-technical — name the dashboard, the menu, the exact field; see CLAUDE.md §2). Then **pause** and wait. This pause is the whole point of "needs manual attention" — the flow is identical, you just don't perform that one step.

### 4. Verify the fix actually landed
Pick the cheapest real check for the step's kind — examples:

| Blocker kind | How to verify |
|---|---|
| Repo secret / branch protection / Actions | `gh secret list`, `gh api repos/:owner/:repo/branches/main/protection`, or confirm the relevant workflow run went green |
| Cloudflare rule / token scope | probe the live behavior — `curl` the affected URL and assert the header/cookie/cache behaves; or read it back via the CF API if a token is in env |
| Prod env var / service config | with go-ahead, SSH the droplet and `grep` the EnvironmentFile, or hit a health/echo endpoint that reflects the setting |
| DNS / domain | `dig`/`curl` the host and confirm it resolves/serves as expected |
| Business or architectural decision | not probeable — take the owner's explicit attestation, and if it's an architectural call, capture it in an ADR or the source task's notes |

If verification **fails or is impossible and the owner won't attest**, do **not** resolve. Leave it open, and report exactly what's still needed.

### 5. Auto-resolve and report
Once verified, resolve it. Write the note as *what unblocked it + how you verified* — that's the durable audit trail. Use a temp file to dodge shell-quoting:

```
bongos exec scripts/gds/api.js POST /api/bongos/blockers/<id>/resolve --body-file <path-to-note.json>
```

where the file is `{ "resolution_note": "<what was done> — verified via <how>." }`.

The response includes `promoted_tasks` — the tasks the trigger just flipped `blocked → ready`. **Surface them**: tell the user what's now claimable (and offer `/builder-start` if they have time). If `promoted_tasks` is empty, say so — it means nothing downstream was waiting, the blocker was just cluttering the "stuck on you" list.

## Tone for the user

Lars is the prompter (CLAUDE.md §2). Frame around the outcome, not the plumbing. For **[needs you]** steps, be a precise guide — exact clicks, no jargon — never a nag. Some blockers are genuinely external and may stay open; that's fine. Your job is to do everything you can, make the rest a clean one-step ask, verify honestly, and close the loop the moment it's real.

## Where this fits

This skill is the **reusable core** of the blocker-solve idea. Future entry points call into this same flow rather than reinventing it:
- a hall **"Solve this"** button on the Archon blocker card (records an intent), and
- a **cloud / autonomous runner** that spins the session up server-side (mirroring the `provisioning_intents` control-plane request queue), pinging the owner only for the **[needs you]** steps.

Both reuse the gather → do/guide → verify → auto-resolve loop above. (Filed under GDS-V4; see the task that shipped this skill.)
