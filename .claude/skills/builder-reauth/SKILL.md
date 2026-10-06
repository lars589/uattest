---
name: builder-reauth
description: >-
  Refresh an expired Bongos CLI session the UI-first way. Triggers: "/builder-reauth", "re-auth", "refresh my session", "my Bongos session expired", "re-issue my CLI token", or any /builder-* failing with "Bongos CLI session is no longer valid".
plain: >-
  Signs your assistant back in when its sign-in to the project has expired.
reach-for: >-
  When a command says your session is no longer valid.
cost: >-
  Free. It replaces your saved sign-in and changes nothing else.
---

You are refreshing the current builder's Bongos CLI session. CLI bearer tokens **do not expire** — since [ADR 0294](../../../docs/adr/0294-cli-sessions-do-not-expire.md) a session lasts until it is revoked. So a rejected token means something killed it: the builder (or an Archon) revoked it, a demotion swept it, or an auth-changing deploy invalidated it. This skill is the **fast path back in**: browser clicks plus a single copy/paste, instead of the slower terminal Device Flow.

## Why there is no expiry (so you can explain it if asked)

There used to be a 24h idle TTL, for auth-token hygiene (GDS-V3 criterion **C9**): the CLI token sits in a plaintext file (`~/.config/uattest/bongos-session.json`, mode 0600), so bounding a leaked or abandoned token seemed worth the friction. It wasn't. Because the TTL refreshed on every use, a thief's own traffic kept a stolen token alive indefinitely — the only person a timer ever signed out was the legitimate holder, who had stepped away. [ADR 0294](../../../docs/adr/0294-cli-sessions-do-not-expire.md) removed it.

What actually bounds a leaked token is **revocation**, and it is faster than any clock: the builder kills it themselves from Settings → Active sessions or "Sign out everywhere" ([ADR 0206](../../../docs/adr/0206-own-scoped-session-revocation-no-absolute-ceiling.md)). Rank changes were never the TTL's job either — demotion calls `revokeAllSessionsForBuilder` synchronously and rank is read fresh from the DB on every request ([ADR 0016](../../../docs/adr/0016-trust-boundary-server-enforced-permissions.md)).

## The flow (guided paste)

1. **Detect.** Run the helper — it checks whether the existing session is still valid and, if not, opens the hall:
   ```bash
   bongos reauth
   ```
   - **Exit 0** → the session is already valid. Relay who they're signed in as and stop — there is nothing to do. Do NOT re-auth a working session.
   - **Exit 10** → re-auth is needed. The helper has opened (or printed) the builders' hall URL and the click-path. Continue to step 2.
   - **Exit 2** → the API was unreachable (network). Relay that, and let them retry once they're back online. The session may be fine.

2. **Relay the click-path verbatim.** The helper prints the exact steps; pass them to the user clearly (don't paraphrase the URL):
   - Open `https://example.com/builders/settings` (the helper tries to open it automatically; if not, give them the link).
   - They are already signed in there via the browser cookie. Under the **"CLI Access"** section, click **"Re-issue CLI token"**.
   - Click **"Copy"** — it copies a one-line command of the form `bongos paste-token <token>`.
   - Ask them to **paste that one line back into the chat**.

3. **Run the pasted command.** When the user pastes `bongos paste-token <token>`, run it exactly as given. `paste-token.js` verifies the token against `/api/bongos/me` **before** touching the session file (a bad paste leaves the existing session intact) and preserves any `gemini_api_key`. On success it prints the builder login, rank, and confirms the session file was written.

4. **Confirm.** Relay the authenticated identity + rank back to the user, and tell them they can now re-run whatever `/builder-*` command they were trying.

## Edge cases

- **"You are not signed in" / `cookie_required`.** The re-issue endpoint mints CLI bearers from a browser *cookie*, not a bearer — a leaked CLI token can't extend its own life. If the Settings page shows them logged out, they sign in at `https://example.com/builders` first, then return to `/builders/settings` and click Re-issue. Once signed in the button works.
- **No session file at all (fresh machine).** The helper still guides them to the Settings page; if they've never authed on this machine, the hall sign-in + Settings → CLI Access → Re-issue path still works. The terminal Device Flow (`bongos setup`) remains the fallback for a brand-new builder with no browser session anywhere.
- **Browser can't open automatically** (headless / SSH). The helper prints the URL; relay it so they can open it on whatever machine has their browser, then paste the one-liner back.
- **Fallback — terminal Device Flow.** If the browser path is unavailable for any reason, `bongos setup --force` re-auths via GitHub Device Flow (terminal code entry). Slower and not UI-first; use only when the hall route can't be used.

## Constraints

- **The token briefly transits the chat — that's the known cost of guided-paste.** The user pastes `bongos paste-token <token>` into the conversation, so the bearer appears in the chat (and any log/context that captures it). That's the accepted trade-off Lars chose; the deferred zero-paste loopback flow removes it. So: treat the session log as sensitive, **never echo the token beyond running that one pasted command**, and never write it to any file other than `~/.config/otb/gds-session.json` (`paste-token.js` is the only thing that should write it — let it do the write). The token rotates whenever the builder clicks Re-issue again, so re-running this flow invalidates an exposed paste's usefulness for an attacker who lacks the browser cookie.
- **Don't re-auth a valid session.** If `reauth.js` exits 0, stop.
- **`GDS_API_BASE`** overrides the endpoint (default `https://example.com`); for local dev `GDS_API_BASE=http://localhost:3000`.

## Files this skill touches

- Runs: `bongos reauth` (detect + open browser + print click-path)
- Runs: `bongos paste-token <token>` (verify + write the new session)
- Reads/Writes (via paste-token.js): `~/.config/otb/gds-session.json`
- Calls: `GET /api/bongos/me`; the Settings page (CLI Access) calls `POST /api/bongos/auth/cli-token/issue`
