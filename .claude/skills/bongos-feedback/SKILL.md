---
name: bongos-feedback
description: >-
  Send feedback, a bug or a wish about Bongos itself to its maintainers; unasked when a builder vents. Triggers: "Bongos feedback: …", "tell the Bongos team", "Bongos should…", "Bongos is broken", "this keeps failing", "/bongos-feedback".
plain: >-
  Sends a short note about a problem with Bongos, or an idea for it, to the people who build Bongos. It also does this by itself when you complain that Bongos is not working.
reach-for: >-
  When Bongos itself got in your way — a command that failed or confused you, or something you wish it did. You do not have to ask; complaining is enough.
cost: >-
  Free, and instant: one line back, and it sends in the background. It changes nothing in your project.
---

Sends a note about Bongos — the tool — straight to its maintainers (tasks 1004462, 1004591). One tool call, one line back.

**When.** File when the builder (a) labels it — "Bongos feedback: …", "tell the Bongos team" — that **is** the go; (b) wishes — "Bongos should…" (**Suggestions count**: send with `--idea`, even if you also fix it in their project); or (c) vents that Bongos is broken — **File it without being asked**, don't argue them out of it. Only about **Bongos itself** (a `bongos`/`/builder-*` command, claim, ship, grade, deploy, upgrade, hall, Settings, sign-in, credits, how it organises work). Not their own project's code, Claude, their laptop or GitHub, nor a rule working as designed. **One filing per distinct problem per session.**

**Write it yourself — Never paste the rant.** First line = what went wrong, in at most twelve words (it becomes the title); then what they did, what they expected, what happened, the exact error line. A wish (`--idea`) asks the maintainers to decide something, so it opens with the card `npx bongos exec scripts/gds/ask.js check <file>` prints, and the rest follows as detail (agents ask like humans, task 1004704). No code, file contents, secrets or personal data.

**Send** (stdin, so nothing in the text is mangled by the shell):

```bash
npx bongos feedback --message-file - <<'EOF'
<report>
EOF
```

Add `--idea` for a wish. The command prints one line — relay it, then carry on. Proactive filing: one short sentence, e.g. *"I've sent that to the Bongos team."* If it says the project runs only on this computer, tell the builder in one line; never retry.

## Files this skill touches

- Runs: `npx bongos feedback` → `scripts/gds/feedback-send.js` → a receipt from this project (`POST /api/bongos/feedback/receipt`, `src/bongos/routes/feedback.js`) → the hub's `POST /api/bongos/sso/feedback/direct` (`modules/platform-identity/instance-feedback.js`), which redeems the receipt before filing.
