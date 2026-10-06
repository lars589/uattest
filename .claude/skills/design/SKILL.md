---
name: design
description: >-
  The UI design playbook: layouts, pages, components, design systems, the hall, status and landing. World-first: the branding pack and DESIGN.md before any taste rule. Triggers: "/design", "design this page", "let's work on the UI", a claimed ui task.
plain: >-
  The guided way to design or change how a page or screen looks, starting from the project's own style.
reach-for: >-
  When you are working on the layout or look of a page.
cost: >-
  Uses your session. You see the changes on a preview before anything goes live.
---

You are running a **UI design session**. Two things make it different from the Engineer pack (`docs/packs/engineer.md`): the work is judged **by looking at it** (so every step ends in a rendered screen, not a paragraph), and it is done **inside a world that is not yours** — the instance's, which you read first and never override. The `ui-design` module's [CLAUDE.md](../../../modules/ui-design/CLAUDE.md) is the reference; this file is the loop.

## Step 0 — the tools, then the mode

- **The skills named below have to be ON THE MACHINE.** Claiming a `ui` task lands them as part of the claim (`scripts/gds/claim.js`, the `materializeModuleSkills` flag in `scripts/gds/discipline-modes.json`); opening `/design` without one does not. If `.claude/skills/` has no `impeccable`, first check that the `design-styles` module is on — the style skills below are opt-in since task 1004470, so with it off, say in one plain sentence that the design styles are off on this project and carry on with the loop, the kit and the style library, which stay. Turning them on is the instance's choice, one line in `config/modules.json` (`"design-styles": true`). With it on, run `bongos exec scripts/gds/claude-materialize.js --module-skills-only` — it copies every enabled module's `skills/` into this checkout as untracked, self-ignored dirs ([ADR 0224](../../../docs/adr/0224-module-skills-reach-the-core-checkout-as-untracked-self-ignored-copies.md)), so `git status` stays clean and `--clean` takes them away again. A scaffolded instance already received them at `bongos init`. A skill of the same name in your own `~/.claude/skills` is **not** the module's — it carries no platform preamble and was never scanned ([ADR 0220](../../../docs/adr/0220-an-in-house-rebuilt-skill-is-a-first-party-skill.md)).
- **Interactive** (someone is here to look and react): show, let them steer, iterate. One or two lines per step, then a screen.
- **Autonomous** (no one will look): build inside the contract, prove it in both modes, stage or park the screens for review, and **never ship an interface change blind** — a task that cannot be verified visually gets a release with a reason, not a guess.

## Step 1 — load the world before you draw anything

Read, in this order, and quote nothing from memory:

1. `config/branding.json` over `config/branding.neutral.json` — `theme.ui` is **the fifteen tokens** (thirteen colours + two font stacks): the only palette a platform surface may rely on.
2. `config/design-tokens.json` over `config/design-tokens.neutral.json` — the `--dt-*` tokens an adapter emits; `config/design-sources.json` — which tool authors each surface.
3. **`DESIGN.md` at the repo root** — the instance's world: palette + derived tiers, faces, materials, motion grammar, components, do's and don'ts, accessibility floors. If it names a rule, it wins over your taste.
4. The surface's own sheet and the nested `CLAUDE.md` of the directory you're in; `/recall <surface>` for what was already decided.

**No `DESIGN.md`?** Then the neutral pack *is* the world and the platform floors below are the whole rulebook. Say so in your notes and build to them. Do not invent a palette.

## Step 2 — look before you ship

Render the real surface before and after — never reason about layout from source alone:

- Run the kit — `node modules/ui-design/kit/render.js --page <path>` renders every state of the page's states file at **1440 / 390 / 320 × dark / light** through a stub that serves the surface the way the instance does, audits each render against the floors below, and writes the shots; `node modules/ui-design/kit/probe.js --page <path>` runs the page's interaction contract as PASS/FAIL lines. The loop, the file shapes and the failure table: [`docs/recipes/ui-look-before-you-ship.md`](../../../docs/recipes/ui-look-before-you-ship.md). A page with no states file yet gets one first (copy the hub's). `/builder-stage` on a box shows the same change on a live preview.
- Show the screens, then caption them in one line. The person you're working with judges the picture.
- Grep the receiving page for class collisions before porting a component across pages (the landing's content sections are `.band`; the menu is `.menuBand`).

## Step 3 — build inside the contract (the platform floors)

These hold on every instance; a `DESIGN.md` may tighten them, never loosen them:

- **The Fifteen Rule** — every colour is a `var()` or a `color-mix()` of the fifteen; the only legal literal is pure black or white with alpha as a scrim, mask or halo.
- **The dark twins** — every dark rule written twice, byte-identical: `:root[data-mode="dark"]` and `@media (prefers-color-scheme: dark) { :root:not([data-mode="light"]) }`.
- **No page `:root`** — the pack's `:root` is spliced at the end of `<head>`; page tokens live on `body`.
- **The 24px floor** — every control clears 24px on both sides; primary pills 46–48px.
- **AA in both modes** — 4.5:1 body text, 3:1 large text and non-text, light *and* dark, measured from the real stylesheet.
- **The Kill Switch** — `prefers-reduced-motion: reduce` at the foot of the token layer kills every animation and transition; no motion in JavaScript; the rest frame is a complete composition.

Generated code uses the `--dt-*` variables; adapters write only `src/ui/<surface>/`, `assets/ui/<surface>/` and `config/design-sources.json`.

## Step 4 — prove it, then ship the tests with the UI

- `bongos exec scripts/gds/validate-design.js --strict` after touching adapters, tokens or `design-sources.json` (fitness runs it on every PR).
- **New interactive code gets a pin in the page's own test file in the same diff** — the grader's Quality worker fails a chrome change that arrives with no test. Contrast pairs are measured in CI, not eyeballed.
- The task's DONE WHEN is read literally — "both pages" means both pages. Deliberate deviations from a mock stay minor if the ship notes say why.
- **The person you're working with OKs it before it ships** — the project default for every builder (owner, 2026-09-23). Open the before/after shots in their browser with `bongos exec scripts/gds/review-sheet.js --title … --shot "<caption>=<png>"` (a terminal shows no images, so a screenshot you only read yourself never reached them), and wait. Autonomous: no one to ask, so list the shots in the notes and ship; the change files a visual review that holds the deploy (ADR 0241), never the ship.
- `/builder-ship` with real `--notes` (what changed, which screens you looked at, in which modes, and who OKed them) and a plain-language `--summary`.

## Round-tripping with a design tool

- **Claude Design** (`/design-sync`): export the tokens + surfaces in, land the generated code back under the claimed task. Design is code; it merges like code.
- **Figma** (`/figma-design-sync`): push the current state so a designer never opens a stale file; land their edit back as committed code. Canvas art that won't translate becomes an asset, never forced into code.
- Both are adapters against `modules/ui-design/docs/design-contract.md`; a third tool is a third adapter, not a new integration.

## The vetted skills and the in-house rebuilds (the `design-styles` module's `skills/`)

**These are opt-in.** They ship in the `design-styles` module, which is off by default (task 1004470): an instance turns it on with `"design-styles": true` in `config/modules.json`. When it is off, none of the skills below is on the machine — tell the person so in one plain sentence ("the design styles are switched off on this project") rather than looking for them, and work on with the loop above and the style library below, which `ui-design` keeps.

Third-party design skills reach a builder only through the module's vendoring policy ([`modules/design-styles/skills/README.md`](../../../modules/design-styles/skills/README.md), ADR 0198): scanned with `/scan-before-install` and reduced to `clean` or `caution`, a licence on the allowlist, a `PROVENANCE.md` sidecar, and the PLATFORM PREAMBLE that reads the instance's world before any taste rule. A skill the module ships is listed here by name, one line each, whether vendored or rebuilt in-house; a name that is not listed is not the module's, whatever a builder's own `~/.claude/skills` carries.

- *None vendored (2026-08-28).* Both origins scanned for the scoped set — `pbakaus/impeccable`, and the eleven `Leonxlnx/taste-skill` skills (`minimalist-ui`, `industrial-brutalist-ui`, `gpt-taste`, `stitch-design-taste`, `image-to-code`, `imagegen-frontend-web`, `imagegen-frontend-mobile`, `brandkit`, and the rest of the roster below) — reduced to `dangerous` at the scanner's deterministic floor and landed as rebuild specs (GDS tasks). The roster, the verdicts and the way to land one are in the README; vendoring one anyway is an owner override recorded in an ADR, not a session's call.

**Rebuilt in-house from the specs** ([ADR 0220](../../../docs/adr/0220-an-in-house-rebuilt-skill-is-a-first-party-skill.md), task 1003325; [ADR 0221](../../../docs/adr/0221-the-impeccable-method-is-one-skill-with-sub-command-playbooks.md), task 1003326; [ADR 0222](../../../docs/adr/0222-the-image-family-under-the-hero-only-rule.md), task 1003328; [ADR 0230](../../../docs/adr/0230-a-look-skill-is-a-composition-grammar-the-palette-is-the-pack.md), task 1003327): first-party skills at `modules/design-styles/skills/<name>/`, each opening with the same preamble, each naming its spec and what changed in translation. They run INSIDE the loop above: the world first, the style library as the palette source for a variant, images as hero plates only, every motion rule inside the Kill Switch, the kit as the pre-flight.

- **design-taste-frontend** — the default taste skill for a landing page, a portfolio or a marketing surface: the brief read in one line, three dials from presets, one world locked for the page, hero and layout discipline, rationed decoration, a pre-flight the kit measures. Declines dashboards, tables, wizards and editors.
- **high-end-visual-design** — the agency-build polish pass: one texture archetype (the library's looks) and one layout archetype per project, the nested container anatomy where the world allows a container, the pill with its nested arrow disc, the spatial rhythm, choreography and scroll entry inside the Kill Switch.
- **redesign-existing-projects** — the in-place upgrade: scan the stack, diagnose against the seven-group audit with the instance's world as the answer key, fix in impact-per-risk order, one group per commit; keeps the stack, never migrates frameworks, `probe.js` green before and after.
- **minimalist-ui** — the quiet editorial look: macro whitespace first, a capped measure, one display job and one body job, exactly one hairline weight in the whole sheet, washed accents measured against their own ink, flat tile cards with no shadow, box-less accordions and keycap shortcuts, one depth treatment per band. Declines dense surfaces; the nearest library look is `expedition`.
- **industrial-brutalist-ui** — the technical-document look: one archetype per project (Swiss industrial print or dark tactical terminal, never mixed) with the other mode still complete and measured, massive clamped uppercase display against fixed tracked-out mono metadata, the pack's terracotta as the one hazard accent and its sea as one terminal green, the hairline as a one-pixel grid gap, zero corner rounding, static halftone and scanline degradation.
- **gpt-taste** — the anti-default pass for a surface that came out looking like every other one: a written plan block before any markup whose selection is derived from the route and bumped against sibling surfaces, the four-stage structure, an ultra-wide hero held to two or three lines, a dense tile grid with zero empty cells, real scroll-driven motion in CSS. Pack-agnostic; it runs over whatever look is on.
- **stitch-design-taste** — the design contract document for an external screen-generating tool: four dials, eight fixed sections, descriptive language paired with exact values, the thirteen transcribed from the instance's pack and diffed rather than invented, and motion written as an intent brief for whoever codes the screens afterwards.
- **style** — the `/style` session, the module's first FIRST-PARTY skill (no upstream): four bounded steps in which an owner authors their own look as a branding pack. SEARCH renders the nearest two library entries and asks two or three questions about feel; CREATE drafts the three files inside the contract, never a fork of a sheet and never a sixteenth token; PROVE retunes the thirteen against `contrast.js`, the styles suite, `check-mock.js` and the renders until every named pair is green; ADOPT hands the owner the one-step switch and files the catalogue rows. It never writes `config/branding.json`.
- **impeccable** — the design-craft method as one skill with sub-commands: `impeccable <sub-command> <target>` loads exactly one of eighteen playbooks (shape, critique, audit, polish, harden, onboard, animate, colorize, typeset, layout, adapt, distill, clarify, optimize, document, extract, bolder, quieter); no argument prints a menu from live project signals and never auto-runs; a bare description is routed to the closest playbook; carries the craft floor (loaded right before UI is edited, never recited) and the bounded finish (build, one kit round, one batch of fixes, at most one confirming round, stop; a read-only reviewer that answers with one of four words). No hooks, no bypass agent, no telemetry, no live server: the live loop is the playwright plugin below and the headless loop is the kit; the detector is task 1003329; native mobile declines to this loop.
- **imagegen-frontend-web** — the plate-making skill under the hero-only rule: text-free hero plates, hero objects, backdrops and orbs for the slots a composition already has (the count is the slot count, committed out loud), a composition anchor per plate that is not text-left image-right, one material / light / lens across the family, the pack as the palette lock, the instance's art pipeline key, and the pair-and-sidecar output contract (a black-ground JPEG for dark, an alpha WebP cutout for light, a `<file>.json` beside each). Never a section image, a comp or a screen; writes no page code.
- **imagegen-frontend-mobile** — the same, for the 390 and 320 compositions: portrait mastheads and fields clear of the regions a phone reserves, the first view held to one focal point, a scrim under any text over a plate. A screen is the surface's states file rendered by the kit; no phone mockups, no flows of screens; a native app target declines to this loop.
- **image-to-code** — the analyse-then-implement loop with the owner's references and the instance's world as the source of truth: a structured per-image analysis, the extraction spec, a faithful translation with drift named as the failure mode, the hero and clutter rules, a clarity checklist the kit measures. The only image it may cause is the hero plate, through imagegen-frontend-web.
- **brandkit** — the identity-system method with the strategy inferred first, the logo standard and the five concept methods; the mark is drawn as inline SVG, the colour system is the pack, the type specimen is the pack's faces on a real page, the applications are the platform's surfaces rendered by the kit, the image direction is a hero-object family, and the nine-panel board is a contact sheet of those real parts. Never a generated logo, board or mockup.

**Prerequisite, not vendored:** the **playwright plugin** (`claude plugin install playwright@claude-plugins-official`) is the LIVE browser-driving loop, where the kit in Step 2 is the headless one. Install it on the machine that runs a design session; the module never installs anything.

## The style library (the ui-design module's `styles/`)

A **look** is a branding pack, never a sheet ([`modules/ui-design/styles/README.md`](../../../modules/ui-design/styles/README.md), ADR 0219): the thirteen colours and the two font stacks of `theme.ui`, a `DESIGN.md` of the look's derived recipes, and one specimen mock. Every look is measured clean against every pair the landing's, the hub's and the hall's sheets paint, in both modes, before it is listed here. Render any surface under any look with `STYLE=<name>` on the stub or `--style <name>` on `render.js` / `probe.js`; `contrast.js --pack <name>` is the pack floor. An instance adopts a look by copying its `pack.json` `theme` into `config/branding.json`; dark stays the sheets' black and the hall's status vocabulary stays the platform's whichever look is on.

- `chrome-world` — the canonical entry: one iridescent chrome sculpture in a black void, pale grey paper in light, one warm salmon. Pinned to the neutral pack; its recipes are the root `DESIGN.md`.
- `expedition` — a printed field journal: warm paper under a halftone screen, hairline frames, big heavy uppercase Archivo headlines, one lamp yellow as a fill only.
- `grove` — a sculpted paper garden: pale sage, soft corners, tinted shadows, the sea green as a slab, the tan as the one lit thing, Nunito.
- `blueprint` — a drafting table under north light: cool grey-blue paper on a graph lattice, compartments registered with a crosshair tick and a 2px cut edge, one cyanotype blue on what is pressable, a slate green for what was measured, IBM Plex Sans in sentence case. The library's first cool look, authored through `/style`.

A look that is not listed here is not in the library. Adding one is the README's five steps under a claimed task, or the `/style` session above, which walks them with an owner; a look that needs a sixteenth token is a contract change and an ADR, not a style.

## Stay clear of

- The pack's neutral values and `DESIGN.md`'s named rules — changing the world is the owner's decision and an ADR, not a session's taste.
- A page-private palette, a hex that isn't one of the fifteen, a `:root` in a page, motion in JavaScript.
- Text: the words belong to the artists, who rewrite whole pages in Tweak Mode (ADR 0341) — don't rewrite the product's voice in passing. A page whose words your ship changes rises in their queue on its own.
- Image generation for anything but text-free hero plates (the owner's rule); UI is rebuilt from templates and the instance's world, not painted.

## How sessions reach this skill

- **Standalone:** invoke `/design` to have the loop in front of you.
- **From a claim:** a `ui`-discipline task makes `claim.js` print the `/design` directive from `scripts/gds/discipline-modes.json` — one carrier, one lookup, the same registry the three core crafts ride to their role packs under `docs/packs/` (task 1002990).
