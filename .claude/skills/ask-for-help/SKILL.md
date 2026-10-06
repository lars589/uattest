---
name: ask-for-help
description: >-
  Ask a named builder or a craft for help on a task, as a filed collab help request. Triggers: "ask <builder> to help with task N", "get <name> on this", "who can help with N", "I'm stuck on task N", "/ask-for-help".
plain: >-
  Asks a specific person, or anyone with the right skills, to help you with a piece of work, and records the request so they see it.
reach-for: >-
  When you are stuck on a task or know someone who could help with it.
cost: >-
  Free. It sends one request to the person you name; nothing about the task itself changes.
---

**Route skill (authoritative).** The core action is `POST /api/bongos/help-requests`. Once the addressee and the context are settled, file it and report the id — do not narrate the API.

You are asking a *person* for help on behalf of the current builder. Being asked assigns them nothing: the collab surfaces recommend, they never transfer a claim (ADR 0187 §3). Declining costs them nothing.

## Recognise the ask

"Ask <builder> to help with task N", "can someone artist-side look at this", "I'm stuck on N" — all of these are help requests. **File one before reaching for any other surface.** The failure this skill exists to stop: a session hears "ask X to help" and files a BLOCKER instead, which is the owner's review queue and is not read at `/#/collab` by anyone. Both were needed once (2026-09-10, task 1002068) and only the blocker got written.

## Pick the right surface

| The ask | Surface | Route |
|---|---|---|
| "Ask X to help with N" / "I'm stuck" | **help request** — this skill | `POST /help-requests` |
| "X should pick this up" / "pass N to X" | task recommendation — "you might want to claim this" | `POST /task-recommendations` (`task_id`, `recommended_to`, `reason`) |
| Work stuck on the owner's decision, credential, or a hand on the box | blocker — see `/blocker-review` | `POST /blockers` |

They are **complementary, not alternatives.** An owner-only task (a credential rotation, a purchase) deserves a blocker *and* a help request addressed to the owner: the blocker parks the task and holds the detail, the help request is what actually reaches them.

## How to use

1. **Resolve the addressee to an id — never guess one.**
   ```bash
   bongos exec scripts/gds/api.js GET /api/bongos/builders/directory
   ```
   Match the `github_login` or `display_name` the user named. A name with no match is a question for the user, not a guess — a wrong `needs_builder_id` sends the ask to a stranger.

   Addressing a **craft** instead of a person is the alternative: `needs_craft` is one of `artist`, `builder`, `ideator`, `ui`. It reaches only builders who declared that discipline in their profile, so a craft nobody has declared reaches nobody.

   **Exactly one addressee.** Both fields is a 400 `two_addressees`; neither is `no_addressee`. The refusal body carries the valid `crafts`.

2. **Attach at most one context.** `task_id` **or** `goal_id`, never both (400 `two_contexts`). Neither is allowed — a general "who knows about X" has no context row.

3. **Write `what_is_stuck` so it is answerable without this session** (≤ 4000 chars). The recipient has none of your context. Cover:
   - what is stuck, in plain words;
   - why it needs *this* person (rank, access, a call only they can make) — being asked without a reason reads as work being dumped;
   - the concrete steps, so the ask is actionable rather than a summons;
   - how to verify it worked;
   - what has already been tried or ruled out.

   Never put a secret in it — a password, token, or key. If the work involves one, describe the rotation and let them handle the value on the box.

4. **File it.** Write the body to a file first — `api.js` silently drops a positional JSON body:
   ```bash
   bongos exec scripts/gds/api.js POST /api/bongos/help-requests --body-file <path>.json
   ```
   ```json
   { "needs_builder_id": 3, "task_id": 1002068, "what_is_stuck": "..." }
   ```
   A 201 returns the row. `no_such_builder` on `needs_builder_id` means step 1 was skipped.

5. **Report it honestly, including the limit.** Give the request id and say where it lands: the recipient sees it at `/#/collab`, which reads `GET /help-requests/for-me`. That is a **pull, not a push** — help requests have no builder-needs notification (task recommendations do). If it is urgent, say so and tell the user the ask waits until that person opens Collab.

6. **Settle it when it resolves** — an unsettled pile is noise. The person you asked may also mark it resolved (ADR 0330); withdrawing is yours alone:
   ```bash
   bongos exec scripts/gds/api.js PATCH /api/bongos/help-requests/<id> --body-file <path>.json
   ```
   `{"status": "answered"}` when someone helped, `{"status": "withdrawn"}` when it is no longer needed. Check yours with `GET /api/bongos/help-requests/mine` (open) and `GET /api/bongos/help-requests/archive` (settled — your asks are under `asked_of_others`).

7. **Reopen it if the answer did not do it** — ticket style, and only the asker can (task 1004458). Say why first, as a reply, so the person reading the reopened ask knows what is still missing; then send `{"status": "open"}` through the same PATCH. A reopened ask is never auto-closed again by its task shipping. `404 help_request_not_reopenable` means it is still open, or it is not yours.

## Constraints

- **Never claim the task on the recipient's behalf**, and never say they are "assigned" or "on it". They still claim it themselves.
- **One request per ask.** Re-asking the same person about the same task makes a second open row, not a nudge.
- **Asking is not privileged** — any builder may file one, and gating it would exclude exactly the newcomers most likely to be stuck.

## Files this skill touches

- Calls: `GET /api/bongos/builders/directory`, `POST /api/bongos/help-requests`, `GET /api/bongos/help-requests/{for-me,mine}`, `GET /api/bongos/help-requests/archive`, `POST /api/bongos/help-requests/:id/replies`, `PATCH /api/bongos/help-requests/:id`
- Reads: `modules/lifecycle/routes/help-requests.js` (the four routes), `modules/lifecycle/help-requests.js` (the validation rules), ADR 0187 §3 (recommend, never transfer)
