---
name: goal-uat
description: >-
  Old name for /goal-close uat: test criteria awaiting UAT on the live site, then sign off. Metic+. Triggers: "/goal-uat".
disable-model-invocation: true
plain: >-
  The older name for trying a finished goal on the live site, so a person can confirm it really works before it is signed off.
reach-for: >-
  When you remember the old name; it opens the same walk as closing a goal.
cost: >-
  Free. Your sign-off is recorded; nothing else changes.
---

**This command is an alias (task 1004471).** `/goal-uat` and `/goal-review` were merged into one skill, `/goal-close`. Read [`.claude/skills/goal-close/SKILL.md`](../goal-close/SKILL.md) and run its rank gate, then **Part 1 — UAT** only (the same as `/goal-close uat`), with every rule that file states: hold each criterion to its words on the live site, and never use the override to get past a refusal.
