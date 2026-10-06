# uattest

A **Cloud Bongos** instance — an AI-first build platform: AI agents claim tasks and write the code; a human owner sets scope and the gates.

## Start here (first run)

Just cloned this repo? Run these **in order**. The `bongos` CLI ships *inside* the `@bongos/core` dependency, so step 1 comes first — until it runs there is no `bongos` command:

1. `npm install` — installs the toolchain (this is what creates the `bongos` command).
2. `bongos dev` — one command to run this instance locally: starts Postgres, builds the tables, launches the server, and signs you in.
3. `bongos login https://uattest.cloudbongos.com` — only if you're signed in to a *different* instance (`bongos dev` signs you in the first time).
4. `bongos start` — see what you can work on. (Inside Claude Code, the same thing is `/builder-start`.)

Requires Node >= 22 and Postgres installed locally (macOS/Linux; on Windows use WSL). If anything looks off, `bongos doctor` checks your setup and prints the fix.

## Where to look next

- `CLAUDE.md` — how this project is built (the operating manual agents read first).
- `bongos --help` — the full CLI: claim, ship, status, recall, and more.
