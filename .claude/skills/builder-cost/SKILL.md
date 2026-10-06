---
name: builder-cost
description: >-
  Log or read project spend — api, compute, infra, domain, art or other. Triggers: "/builder-cost", "log cost", "what have we spent", "I just spent X on Y".
disable-model-invocation: true
plain: >-
  Records money spent on the project, or shows what has been spent so far.
reach-for: >-
  When you have just paid for something for the project, or want to know the total spend.
cost: >-
  Free. It only adds an entry to the project's spending record.
---

**Script skill (authoritative).** The core action is `bongos cost <amount-usd> <category> [--task-id N] [--description "..."] [--skill <name>]`. Once the args are determined, run it and print its output verbatim.

You are logging a cost entry on behalf of the current builder. Bongos keeps a running ledger that powers the cost-vs-value charts on `status.example.com`.

## What this skill does

Runs `bongos cost <amount-usd> <category> [--task-id N] [--description "..."] [--source "..."] [--skill <name>]`.

The CLI hits `POST /api/bongos/cost`, which inserts a `cost_log` row.

## How to use

1. **Determine the amount in USD.** Round to four decimals (the column accepts numeric(10,4)). For Anthropic API spend, use the API response's `usage` block × the model's pricing.

2. **Pick a category**:
   - `api` — Anthropic API, Google AI Studio, GitHub paid features, etc.
   - `compute` — droplet upgrades, ad-hoc cloud spend
   - `infra` — backups, monitoring, CDN paid plans
   - `domain` — Cloudflare Registrar renewals
   - `art` — direct art commissions or stock-asset purchases
   - `other` — when none fit, with a clear description

3. **Attach to a task if one applies** — `--task-id <N>`. This is what makes the cost-vs-value chart per-task accurate.

4. **Attach to a skill if this cost was incurred by a skill invocation** — `--skill <skill-name>` (e.g. `--skill idea-triage`). This populates the `skill_name` column for per-skill spend measurement (ADR #304).

5. **Run** and print the output verbatim:
   ```bash
   bongos cost 0.42 api --task-id 12 --description "Anthropic API: 4.2k input + 1.1k output"
   ```

## Constraints

- **Don't log speculative cost.** Only log spend that has actually been incurred (or is committed and irreversible).
- **Don't log Lars's personal time** — credits are how that's accounted for, not USD.
- **Don't double-count.** Before logging an art-pipeline cost manually, verify it isn't already in the DB from the one-time cost-ledger backfill (those rows use `source: 'art-cost-ledger'`).
- **Don't log without a description for `other` category.**

## Reading the ledger back

To see what has been spent rather than add to it, run `bongos exec scripts/gds/cost-report.js` — total spend plus totals by month, category and source. The endpoint it reads is public, so no rank is needed, but the session still supplies the instance URL. `--source X`, `--category Y` and `--days N` scope the breakdowns (the header total stays project-wide); `--json` prints the raw payload. The newest month is labelled partial — it is spend to date, not a month's worth.

## Files this skill touches

- Reads: `~/.config/otb/gds-session.json`
- Calls: `POST /api/bongos/cost` (logging), `GET /public/cost-summary` (the read-out, via `scripts/gds/cost-report.js`)
