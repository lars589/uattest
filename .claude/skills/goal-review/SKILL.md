---
name: goal-review
description: >-
  Old name for /goal-close residue: decide criteria a UAT can't close (work abandoned or unlinked). Metic+. Triggers: "/goal-review".
disable-model-invocation: true
plain: >-
  The older name for deciding what to do with a goal's checks that can no longer be tested, because their work was dropped or never linked.
reach-for: >-
  When you remember the old name; it opens the same walk as closing a goal.
cost: >-
  Free. It only closes or changes a check when you decide to.
---

**This command is an alias (task 1004471).** `/goal-review` and `/goal-uat` were merged into one skill, `/goal-close`. Read [`.claude/skills/goal-close/SKILL.md`](../goal-close/SKILL.md) and run its rank gate, then **Part 2 — residue** only (the same as `/goal-close residue`), with every rule that file states: rejecting is the valuable verdict, and an override always carries its written reason.
