---
name: new-project
description: >-
  Runbook from zero to a live, owned STANDALONE instance: name, address, scaffold, provision, OAuth app, first sign-in, verify, brand. Triggers: "/new-project", "stand up a new instance", "start a new project".
disable-model-invocation: true
plain: >-
  Takes you step by step from nothing to a brand-new project website of your own.
reach-for: >-
  When you want to start a separate project on the platform.
cost: >-
  Creates real things: a website, a database and a GitHub sign-in. You need a web address, which you buy yourself.
---

You are guiding a new owner from **zero to a live, owned Cloud Bongos instance**. This skill is the **canonical step sequence** (goal 35). The `bongos onboard` CLI and the hall wizard are just other front-ends over these same steps — keep them in lockstep by keeping the sequence here.

## The model (read first)

A new instance is **standalone** (ADR 0108): it runs from its **own git repo** with `@cloudbongos/core` installed as a **pinned npm dependency**, not a fork of this monorepo. Central updates are a `bongos upgrade` version-pin bump, not a merge. Every step below assumes this shape (`hosting_shape=standalone`).

Six steps are **irreducibly human** and must be rendered as **precise, UI-first, copy-paste-safe prompts** (a non-technical owner does them with browser clicks, no terminal guessing): (1) create the GitHub repo, (2) approve the pre-filled **GitHub App** for sign-in (ONE click — the App Manifest flow, task 2080; no secret to paste), (3) tick **Enable Device Flow** in that App's settings (ONE checkbox — terminal sign-in, task 1003051; until then `bongos setup` falls back to a web token), (4) install that App on the repo (ONE click — the publish credential, task 1003049), (5) own a domain, (6) the first sign-in. Everything else is automated. Never ask the owner to do in a terminal what they can do with a click.

## The canonical sequence

### 0. Before the rail — the front door (task 1004417)

The hub's wizard opens on two screens before step 1, after sign-in. **The terms:** the owner ticks that they can sign legally (or get a signature) for the platform's use and acknowledge the terms. The create request carries only `terms_acknowledged: true`; the server records WHICH terms version on the project (`provisioning_instances.terms_ack_at` / `terms_ack_version`, read from the platform's own `TERMS_VERSION`, never from the body). **Demo or create:** two equal doors. The demo route is not built yet (BV2.PS09), so walk the create door. When you guide an owner through the CLI or by hand, send the owner to `/terms` and get the same acknowledgement from them in words before you file anything. The CLI does not record it yet, so a project filed that way stores none.

### 1. Decide name + address

Interview the owner for: product name, world name, company; the **GitHub repo** (`owner/name`); the **domain** they will use (bring-your-own — ADR 0111 §4); and a DNS/db-safe **instance slug** (lowercase `[a-z0-9-]`, e.g. `mercury`).

**Human-only (UI-first):** have them create an **empty** GitHub repository — github.com → **New repository** → name it, leave it empty (no README), Create. That repo is where the instance's own code will live.

### 2. Tell us about the project — OPTIONAL, and skipping it is fine (task 1002334)

Ask three things, and offer the skip in the same breath — a "you can leave this blank" that arrives *after* the question reads as a test:

- **What are you building?** A sentence or two. This is the project's **description**, and it is half of the publish gate ([ADR 0182](../../../docs/adr/0182-project-visibility-two-axes.md) D4: a project is on the public map iff it has a name AND a description).
- **Who's building it?** `solo` / `small-team` / `community`. This is what the platform's setup recommendations read.
- **What kind of project is it?** `game` / `research` / `business` / `non-profit` / `not-sure` — the declared **type**, and the one answer that does real work downstream: it keys the starter bundle the next step preselects ([ADR 0237](../../../docs/adr/0237-a-starter-bundle-is-a-preset-over-the-always-on-core-keyed-by-declared-type.md)). `not-sure` is a real answer, not a missing one.

All three ride the provisioning request — `description`, `detail: { team_shape }`, and `type` — and each is independently skippable. **Skipping is a supported default, not a failure:** the project stands up exactly the same, it just stays *dark matter* — off the public map and un-joinable — until a description exists. Say that plainly when the owner skips, and say the way back with it: `PATCH /provisioning/instances/:id/detail` takes `description`, `detail` and `modules` later, and publishes the project the moment the description lands.

**`type` is the one answer with no way back yet** — the detail PATCH does not accept it, and an owner-facing "change my project type" surface is still open work (task 1003504). Do not tell an owner they can change it later. It is still safe to leave unanswered: `not-sure` and an absent type both simply mean the next step has no type-specific bundle to preselect, and the modules themselves stay editable forever.

Never gate the standup on this step, and never invent an answer the owner didn't give — a recommendation built on a guess is worse than no recommendation.

**Read the verdict back rather than asserting one (task 1002335).** Every instance read and the detail PATCH answer with `publish: { publishable, missing, missing_phrase }` — the server's own derivation of the gate. Report *that*, verbatim: "it's on the public map" or "it has no description, so it isn't on the map yet". Do not compute publishability yourself from the fields you happen to have sent; the owner's project page renders the same server verdict, and two surfaces disagreeing about whether a project is published is worse than either being briefly stale. If `publish` is absent, this platform has no public map — say nothing about one.

### 3. Pick its extras — OPTIONAL, and the skip is the recommendation (task 1002339)

Every project runs the **always-on core** whatever you do here; this step is only about the **optional** modules on top. Read the preselection out of the server, never a list you carry: `GET /provisioning/starter-bundles` returns the always-on core once, then one resolved bundle per type — and the bundle for the type answered in step 2 is what the picker shows ticked ([ADR 0237](../../../docs/adr/0237-a-starter-bundle-is-a-preset-over-the-always-on-core-keyed-by-declared-type.md)). Show the owner what is already ticked and why, then let them add or remove.

The type is not the only input: the **team shape** from step 2 adjusts the bundle too, and the server reports each adjustment that actually changed something, with its reason. Those belong to the bundle itself, not to a note beside it — render them as part of what is ticked, so cause and effect arrive together ([ADR 0243](../../../docs/adr/0243-a-bundle-adjustment-belongs-to-the-bundle-not-the-advice-about-it.md)). A rule whose module the bundle already carries records nothing, so an empty adjustment list means the shape changed nothing, not that it was ignored.

**Skipping means "take the bundle", and that is a real default, not a deferral** ([ADR 0240](../../../docs/adr/0240-a-skipped-module-picker-stores-nothing-and-resolves-the-bundle-on-read.md)). Three answers, three different meanings — say them apart, because two of them look alike and are not:

- **Skip** — send no `modules` key at all. The row stores nothing and the bundle is resolved **on read**, so the project ends up with exactly the set the picker had ticked. A later change to the bundle for that type reaches this project too.
- **An explicit list** — `modules: ["…"]`, the opt-in keys only, never the always-on core. This is now the project's own answer and it stops tracking the bundle.
- **`modules: []`** — the deliberate "none of them". Not the same as skipping, and a flow that collapses the two takes a choice away.

Nothing here is final: modules can be added after creation from the project's own page, which is why this step should never feel like a gate. If the owner is unsure, say that the bundle is the recommendation and move on — an owner stalled choosing modules is the failure this step's default exists to prevent.

### 4. DNS token preflight — BEFORE you commit the address (task 1980)

Before anything is provisioned, verify the control-plane's Cloudflare token can actually manage the domain's zone (a mismatched-zone token is exactly what broke the Emersonian standup mid-flow):

```bash
bongos exec scripts/gds/provision.js dns-check <domain>
```

- ✓ reachable → continue.
- ✗ not reachable → **STOP and resolve it now**, don't push past it. The command prints the fix; usually: widen the Cloudflare API token to include the domain's zone (CF dashboard → My Profile → API Tokens → edit → Zone Resources → Include → the zone), then re-run `dns-check` until green. Only then proceed.

### 5. `bongos init` — scaffold (greenfield) **or** `--adopt` (brownfield)

**This is the one leg that branches** (ADR 0121 §Decision 1). Pick the mode that matches the repo:

- **Greenfield** — a NEW, empty repo. The default below.
- **Brownfield / adopt** — an EXISTING repo (code, history, a backlog). Run `node bin/bongos.js init --adopt` instead. It DETECTS the repo's stack, runs a conflict **pre-flight** (migration-namespace / fitness-boundary / protected-path / CI-check collisions) and writes **nothing until you accept** (interactive y/N, or `--accept`); a genuine BLOCK (e.g. a `core_`-prefixed migration) is a hard stop, not accept-able. On accept it LAYERS the lean config + the pinned `@cloudbongos/core` dep + `.claude/` **additively** (merges-or-leaves-and-reports; never clobbers, never the `--force` path), captures the repo's **REAL** current version/goal, and imports its existing backlog (open GitHub issues via `GITHUB_TOKEN`/`GH_TOKEN`, else a `TODO`/`ROADMAP`/`BACKLOG` file). Then **skip step 6** — adopt layered onto the existing repo, there is no empty repo to scaffold — and continue from step 7 (provision). Every other leg is identical.

Greenfield:

```bash
node bin/bongos.js init          # interview (or: init --from spec.json for non-interactive)
```

It writes lean `config/branding.json` / `config/modules.json` / `config/hierarchy.json`, seeds the first version + its done-when goal, files the human-only kickoff tasks, and — when you opt into hosting — files a **provisioning request** (`POST /provisioning/instances`). Choose **hosting shape `standalone`**. Enable the `provisioning` module on the target so the request is honored (`config/modules.json` → `"provisioning": true`).

### 6. Scaffold the standalone repo

Materialize the instance's own repo (ADR 0108): clone the empty GitHub repo to the standalone root (`${PROVISION_STANDALONE_BASE:-/srv/cloudbongos}/<slug>` on the control plane), drop in the `config/` + `.claude/` from step 5, and pin the core as a dependency (`@cloudbongos/core` in the instance `package.json`). Commit + push. This checkout is what the standalone service will run from.

### 7. Provision — core + DB + address + service (task 1978)

The web tier only **enqueued** the request; the **control-plane runner** does the real work (it alone holds the DO/Cloudflare tokens):

```bash
bongos exec scripts/gds/provision.js run-intents --apply     # drains the queue
# or, for one instance:  bongos exec scripts/gds/provision.js provision <slug> --apply
```

For `standalone` this composes: allocate a port → `git pull` + `npm ci --omit=dev` (installs the pinned core) → `createdb` + **instance-root** migrate (`node_modules/@cloudbongos/core/scripts/migrate.sh`) → per-instance `/etc/<slug>/web.env` → a **standalone systemd unit** (runs the core package's `platform-server.js` from the instance repo) → DNS A-record UPSERT → per-instance Caddy snippet (on-demand TLS) → `/healthz`. It is idempotent + dry-run-by-default (omit `--apply` to preview). It **fail-fasts on the step-4 DNS preflight** if that token check was skipped.

### 8. GitHub sign-in — ONE click (App Manifest flow), or a manual OAuth app + first sign-in

**Recommended — one click (task 2080, ADR 0133).** GitHub has no create-an-OAuth-App API, but it *does* let us pre-fill a **GitHub App Manifest**: the owner clicks one link, approves on GitHub, and GitHub hands the control plane the credentials automatically — **no OAuth app to hand-create, no secret to copy-paste ever.** From the control-plane hall, **Start a project → “Set up GitHub sign-in”** (the button appears once the instance is requested; it needs the instance's **domain** set). Under the hood it:

1. mints a one-time `state` + a pre-filled manifest via `POST /provisioning/instances/:id/github-app`;
2. the browser POSTs the manifest to GitHub; the owner approves; GitHub redirects to the **mothership** callback `…/api/bongos/provisioning/github-app/callback` with a temporary code;
3. the **control-plane runner** (`provision.js run-intents --apply`, the sole token-holder) exchanges the code for `client_id`/`client_secret`, writes them into `/etc/<slug>/web.env`, restarts the unit, and verifies `/healthz` reports `auth_configured:true`. The secret never touches the browser, chat, or the web tier (trust boundary, ADR 0111 §2).

The instance's sign-in code is **unchanged** — a GitHub App's user token hits the same `GET /user` the OAuth-app flow did; GitHub simply ignores the extra `scope` param for Apps.

> **Terminal CLI only (task 2129):** the one-click GitHub App **cannot** have Device Flow enabled via the manifest (GitHub's manifest schema has no such field, and there's no API to toggle it after creation), but the terminal `bongos login` needs it. After approving, open the app (GitHub → **Settings** → **Developer settings** → **GitHub Apps** → your app), check **Enable Device Flow**, and save. **Web sign-in works without this** — it's only for the terminal CLI. If a builder hits `device_flow_disabled` on `bongos login`, the CLI error now names the exact settings page to fix it.

**Fallback — create an OAuth app by hand.** If there's no control-plane hall (a lone standalone box) or you prefer manual: GitHub → **your account's** Settings → **Developer settings** → **OAuth Apps** → **New OAuth App**.
> **Guidance the standup learned:** *Developer settings is under your **account**, not the repository* — this is the #1 place owners get stuck.
- **Homepage URL:** `https://<domain>`
- **Authorization callback URL:** `https://<domain>/api/gds/auth/web/callback` (PINNED — `auth.js` `WEB_REDIRECT_ORIGIN`; a sign-in begun on a `builders.` subdomain still calls back to the apex).
- **Enable Device Flow:** check **“Enable Device Flow”** on the app page and save — it's **off by default**, and the terminal `bongos login` needs it (web sign-in works without it) (task 2127/2129).
- Copy the **Client ID**; click **Generate a new client secret** and copy it (GitHub shows it **once**). Then place it **VERIFIED, never by hand (task 1979)**:

```bash
bongos exec scripts/gds/oauth-secret.js place <slug> --client-id <id> --client-secret <secret> --apply
```

> **Guidance the standup learned:** do **NOT** hand-edit `web.env` with a shell `read -s` — during the Emersonian standup that silently left a 26-char truncated secret that broke sign-in with no obvious cause. `oauth-secret` validates the length/format (catching that truncation), rewrites the env line via Node, restarts the service, then **probes `/healthz` for `auth_configured:true`** before it reports success. If it refuses, the creds are wrong — recheck them; do not proceed.

**Human-only — install the GitHub App on the repo (task 1003049, ADR 0055).** The one-click App doubles as the instance's **publish credential**: the manifest requests Contents rw + PR rw + Actions read, the runner places `GITHUB_APP_ID` + `GITHUB_APP_PRIVATE_KEY` in `web.env`, and the server discovers the installation id on its own — but only an **installed** App can mint push tokens. One click: the wizard's **Install the app on your repo** button (`github.com/apps/<slug>/installations/new`), or GitHub → Settings → Developer settings → GitHub Apps → your app → **Install App** → the project repo. Skip it and every ship strands at `confirmed` behind a manual merge. (Manual OAuth-app path instead? Set a fine-grained `GITHUB_PUSH_TOKEN` in `web.env` — ADR 0055.)

**Human-only — first sign-in.** The owner opens `https://<domain>` and signs in with GitHub **once**. This seats the **founding Archon** — config alone seats no one, so this step is inherent and cannot be automated.

### 9. Verify

```bash
curl -s https://<domain>/healthz          # → {"ok":true,"auth_configured":true}
```

Confirm the owner is **Archon** (their profile / the hall roster). If `auth_configured` is `false`, re-run the `oauth-secret place` step and recheck the OAuth app values.

### 10. Brand

Fill the instance **look** — theme / palette / fonts in `config/branding.json` (see `docs/branding-fill-prompt.md`). The identity strings were set at init; this is the visual layer. "Brand with your own LLM."

### 11. Enter your builders hall

The hall is the point of everything above — end there, not at brand (task 1002703):

- **With a domain:** open `https://<domain>/builders` — that's the project's home.
- **No domain yet:** run `bongos dev` in the repo checkout — it stands the instance up locally and serves the hall on the owner's machine ([ADR 0149](../../../docs/adr/0149-bongos-dev-local-launcher.md)).

### 12. Decide how the project stands — the four axes (BV1.R05/R10/R12, ADR 0182)

**These are not asked during creation, and that is deliberate.** A new project starts on today's behaviour — `platform_visibility: public`, `joinability: apply`, `visibility: public`, `join_grant: full` — and the owner changes them afterwards from the project's own page, each card PATCHing `…/instances/:id/settings` with its own key. Do not invent a visibility question in the creation flow; walk the owner through these once they are in, when the project is real enough for the answers to mean something.

Four axes, four different questions — they are **not** synonyms, and an owner may set them independently ([ADR 0182](../../../docs/adr/0182-project-visibility-two-axes.md)):

| Key | Asks | Values |
|---|---|---|
| `platform_visibility` | who may **read** this project's own pages | `public` · `gated` |
| `joinability` | **how** someone becomes a member | `open` · `apply` · `invite_only` |
| `visibility` | how it stands on the platform's **map** | `public` · `private` · `stealth` |
| `join_grant` | what joining a **public** project grants | `view` · `apply` · `full` |

Four things worth saying plainly, each of which has already confused someone:

- **`visibility` does not put the project on the map — publishability does.** A project is on the public map iff it has a name AND a description ([ADR 0182](../../../docs/adr/0182-project-visibility-two-axes.md) D4); that is derived, never stored, and no value of `visibility` puts a husk on the map. Read the server's `publish: { publishable, missing, missing_phrase }` back verbatim rather than computing it (step 2's rule, and it applies here too).
- **`gated` is enforced on the instance, not by the hub** — a middleware ahead of every surface refuses a session-less stranger with a door that carries the way in ([ADR 0192](../../../docs/adr/0192-platform-visibility-member-door.md)). It grants nothing; every rank check behind it still runs.
- **Gated and apply-to-join compose, and a stranger can still apply** ([ADR 0278](../../../docs/adr/0278-a-gated-project-still-takes-applications.md)): the member door exempts the application write and the applicant's own status poll, each scoped to one verb, so the owner's applicant queue keeps the door in front of it. Before that fix the two settings silently composed into "nobody can apply".
- **The door is one composed answer, and a refusal never names which knob closed it** ([ADR 0247](../../../docs/adr/0247-the-join-door-is-one-composed-answer-and-dark-matter-has-no-live-verdict-yet.md)). `join_grant` is the ceiling on the visibility axis that `joinability` may only narrow, and it governs the `public` state alone.

A settings change rides web.env and is applied by a **restart**, so the project's own manifest is the only honest source for what it currently runs — the saved choice and the running value differ for the whole life of a push, and a surface that collapses them is lying in one direction or the other ([ADR 0190](../../../docs/adr/0190-settings-apply-in-place-env-patch.md)).

### 13. Invite the first builder — the done panel's first act, not a rail step (ADR 0249)

Deliberately **outside** the numbered rail above: a step that can only run once the project exists is not a step in creating it, and putting it in the rail would buy a renumbering coupling and still have to be reordered to sit after Create ([ADR 0249](../../../docs/adr/0249-the-invite-step-is-the-done-panel-s-first-act-not-a-rail-step.md)). It appears the moment the created record has an id and a slug, it is skippable there, and **the same widget is the way back** — the project's own page carries it beside *Its extras*, one implementation mounted twice, so an owner who skipped is never stuck.

`GET /provisioning/instances/:id/invite-suggestions` answers who is worth inviting. Treat that list as a **recruiting surface**: it owes the people on it the recruiting opt-out, and an owner who is shown names has to be shown them honestly ([ADR 0251](../../../docs/adr/0251-a-suggestion-of-who-to-invite-is-a-recruiting-surface-and-owes-the-opt-out.md)).

## Done-when

A new owner has gone zero → live: their own standalone repo on a pinned core, provisioned with no hand-editing of servers, the six human-only steps done UI-first + verified, and they are signed in as the founding Archon on their own domain. That is goal 35's `project-creation-flow` criterion.

Steps 12 and 13 are **not** part of that criterion and must never gate it. They are what the owner does once the project is theirs — how it stands on the platform, and who else is in it — and both have a way back, so an owner who does neither has still finished creating a project.

## Constraints

- **This skill is the source of truth for the sequence.** If a step changes, change it here; `bongos onboard` (task 1982) and the hall wizard (task 1983) must render the same sequence. The machine-readable twin is [`modules/provisioning/onboard-plan.js`](../../../modules/provisioning/onboard-plan.js), served at `GET /provisioning/onboard-plan` — a **rail** step added here gets a step there in the same change, or the two drift and each claims to be canonical.
- **Step 0 (the front door) is not in that plan either**, for the opposite reason: it comes before the rail, is a hub-screen acknowledgement rather than a creation step, and carries no step of the machine setup. Its record is the project's terms columns, not a rail key.
- **Steps 12 and 13 are deliberately NOT in that plan**, and that is the distinction to keep: the plan is the creation rail, and both of those run only once the project exists. A step that can only run after the terminal step is not a step in the rail ([ADR 0249](../../../docs/adr/0249-the-invite-step-is-the-done-panel-s-first-act-not-a-rail-step.md)) — it belongs to the done panel and the project's own page, each of which carries its own way back.
- **Standalone only** (ADR 0108) — do not fall back to editing this monorepo's checkout for a new project.
- **Never weaken the trust boundary** — the web tier enqueues; only the control-plane runner (`provision.js`) touches cloud tokens (ADR 0016 / 0111 §2).
- **Live docs are automatic** — a standalone instance's session-log index regenerates on deploy (`provision.js` runs `regen-instance-docs.js` after migrate; `bongos init`/`upgrade` seed+refresh it), and the whole-file nav docs are gitignored so `git reset --hard` never wipes them ([ADR 0147](../../../docs/adr/0147-standalone-live-docs-regen.md)). If you wire a **bespoke** deploy script for an instance, it MUST call `node node_modules/@bongos/core/scripts/gds/regen-instance-docs.js` after `git reset` + migrate — see [`docs/recipes/standalone-live-docs.md`](../../../docs/recipes/standalone-live-docs.md).
- **Adopting an EXISTING repo** (brownfield) is the other branch of the scaffold leg (step 5) — `bongos init --adopt` ([ADR 0121](../../../docs/adr/0121-greenfield-vs-brownfield-onboarding-adopt-existing-repo.md)): detect → accept-gated conflict pre-flight → additive layering (never clobbers) → real version/goal + backlog import. Built; the `bongos onboard` CLI and the hall "start a project" wizard offer the same greenfield-vs-adopt choice.
