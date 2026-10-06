# @bongos/client

A **generated**, zero-dependency typed client for the Bongos API — produced from
`docs/api/openapi.json` by `scripts/gds/gen-api-client.js` (ADR 0118). Do not edit
by hand; it regenerates when the spec changes, so it can never drift from the routes.

- API version: **v1** (served at `/api/bongos/v1`)
- 520 operations across 75 resource groups

## Use it from your project

**This is not an npm package** — it is not published, and nothing depends on it as one
(task 1003742). Consume it by VENDORING the build you need, which is what every consumer
in this repo already does:

```bash
# ESM / bundler:  cp clients/bongos-client/index.mjs  <your project>/vendor/
# CommonJS:       cp clients/bongos-client/index.cjs  <your project>/vendor/
# Browser global: cp clients/bongos-client/bongos-client.global.js <your project>/public/
```

Copy `index.d.ts` alongside it for types. Re-copy after `gen-api-client.js` runs, so the
client cannot drift from the routes.

## Use

The examples import by package name, which resolves in a workspace. A VENDORED copy is
imported by its path instead — `from './vendor/index.mjs'` — everything below is identical.

```js
import { createClient, ApiError } from '@bongos/client';

const api = createClient({
  baseUrl: 'https://example.com/api/bongos/v1', // your instance origin — or omit for same-origin (browser)
  token: process.env.BONGOS_TOKEN,             // Authorization: Bearer <token>
});

try {
  const first = await api.me.getMe();               // GET /me
  const item = await api.tasks.getTasksId({ id: 1988 });   // GET /tasks/{id}
  const created = await api.tasks.postTasks({ body: { version_id: '…', title: '…' } }); // POST /tasks
  const page = await api.tasks.getTasks({ query: { limit: 25, offset: 0 } }); // GET /tasks
} catch (e) {
  if (e instanceof ApiError) console.error(e.code, e.status, e.details); // the ADR-0116 envelope
}
```

Every method takes one `args` object: path params by name (e.g. `{ id }`), plus
optional `query`, `body`, and `headers`. A non-2xx response throws `ApiError`
carrying the envelope's `code` / `message` / `details` and the HTTP `status`.

## Authenticate + a runnable hello-world

How to get a `token` (Device Flow for a headless program, or a portal-issued
bearer) and a copy-paste-runnable proof are in the on-ramp guide:
**`docs/api-onramp.md`**. The example lives next to this client:

```bash
node clients/bongos-client/examples/hello-world.mjs   # public read — no token needed
```
