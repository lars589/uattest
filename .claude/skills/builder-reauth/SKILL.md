---
name: builder-reauth
description: >-
  Sign the CLI back in with one browser click. Triggers: "/builder-reauth", "re-auth", "sign me back in", "refresh my session", "re-issue my CLI token", or any /builder-* failing with "Bongos CLI session is no longer valid".
plain: >-
  Signs your assistant back in when its sign-in to the project has expired.
reach-for: >-
  When a command says your session is no longer valid.
cost: >-
  Free. It replaces your saved sign-in and changes nothing else.
---

You are signing the current builder's command line back in to Bongos. CLI sessions **do not expire** — since [ADR 0294](../../../docs/adr/0294-cli-sessions-do-not-expire.md) a session lasts until it is revoked. So a rejected session means something killed it: the builder (or an Archon) revoked it, a demotion swept it, or an auth-changing deploy invalidated it. This skill gets them back in with **one Approve click in their browser** — nothing to copy, nothing to paste, and the token never passes through the chat (task 1005118).

## Why there is no expiry (so you can explain it if asked)

There used to be a 24h idle TTL, for auth-token hygiene (GDS-V3 criterion **C9**): the CLI token sits in a plaintext file (`~/.config/uattest/bongos-session.json`, mode 0600), so bounding a leaked or abandoned token seemed worth the friction. It wasn't. Because the TTL refreshed on every use, a thief's own traffic kept a stolen token alive indefinitely — the only person a timer ever signed out was the legitimate holder, who had stepped away. [ADR 0294](../../../docs/adr/0294-cli-sessions-do-not-expire.md) removed it.

What actually bounds a leaked token is **revocation**, and it is faster than any clock: the builder kills it themselves from Settings → Active sessions or "Sign out everywhere" ([ADR 0206](../../../docs/adr/0206-own-scoped-session-revocation-no-absolute-ceiling.md)). Rank changes were never the TTL's job either — demotion calls `revokeAllSessionsForBuilder` synchronously and rank is read fresh from the DB on every request ([ADR 0016](../../../docs/adr/0016-trust-boundary-server-enforced-permissions.md)).

## The flow (one click)

1. **Say what is about to happen, in one line**, before running anything: a page will open in their browser; they check the code and click **Approve**, and you carry on by yourself.

2. **Run the helper with a long timeout** — it waits for the click (up to ten minutes):
   ```bash
   npx bongos reauth
   ```
   Give the Bash call `timeout: 600000`. The helper checks the current session first; if it is broken it asks the instance for its own approval page (`approve_in_browser`), opens it with the code filled in, waits for the click, and saves the new session itself.
   - **Exit 0** → signed in. Either the session was already working (say so — do NOT re-sign-in a working session) or the approval just landed. Relay who they are signed in as, then re-run whatever `/builder-*` command they were trying.
   - **Exit 10** → not signed in: they pressed Cancel, the page ran out, or the account is not let in. The helper says which and prints the fallback below. Offer to run it again once; if that also fails, use the fallback.
   - **Exit 2** → the instance was unreachable (network). The session may be fine; let them retry once they are back online.

3. **If the page says they are not signed in** in the browser, it shows a **Continue with GitHub** button (and Google where the instance offers it). They sign in there and land straight back on the Approve page — the helper is still waiting.

## Fallback — the copied line (no browser on this machine)

Only when the one-click path cannot work — a remote/SSH machine with no browser, or the click path failed twice — run `npx bongos reauth --paste` and relay its click-path: Settings → **CLI Access** → **Re-issue CLI token** → **Copy**, then paste the `npx bongos paste-token <token>` line back into the chat and run it exactly as given. `paste-token.js` verifies the token before writing and preserves `gemini_api_key`. This path puts the token in the chat, so never echo it beyond running that one command, and never write it anywhere yourself.

## Edge cases

- **An instance older than task 1005118** ignores the browser-approval ask and answers GitHub's own device flow: the helper prints a code and opens github.com/login/device. Relay the code; the person types it there and approves. It still finishes by itself.
- **No session file at all (fresh machine).** The helper runs the same browser approval. A brand-new builder who has never signed in anywhere uses `/builder-setup` instead.
- **Several projects on one machine.** The helper signs in to the project the active session names (or `BONGOS_API_BASE`). Saving goes through the per-instance store (ADR 0269), so other projects' sign-ins are kept.

## Constraints

- **Don't re-sign-in a working session.** If the helper says the sign-in is working, stop.
- **Never ask for or accept a token in chat** on the one-click path — there is none to handle. Only the fallback carries one.
- **`BONGOS_API_BASE`** overrides the instance (for local dev `BONGOS_API_BASE=http://localhost:3000`).

## Files this skill touches

- Runs: `npx bongos reauth` (detect, browser approval, save) — `--paste` for the fallback
- Runs (fallback only): `npx bongos paste-token <token>`
- Writes (via `saveSession`): the active session file and the per-instance store under `~/.config/uattest/`
- Calls: `GET /api/bongos/me`, `POST /api/bongos/auth/device/start` + `/auth/device/poll`; the browser page is `/api/bongos/auth/device`
