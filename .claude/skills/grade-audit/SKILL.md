---
name: grade-audit
description: >-
  Old name for /grade-sweep audit: the accountability half of the grade sweep (override ledger, dropped findings, false-pass spot-check). Queues follow-ups only. Triggers: "/grade-audit".
disable-model-invocation: true
plain: >-
  The older name for the look back over recent quality reviews, for anything that slipped through.
reach-for: >-
  When you remember the old name; it opens the same check as the grade sweep.
cost: >-
  Free. It only files follow-up notes; it never changes a review or a task.
---

**This command is an alias (task 1004471).** `/grade-audit` and `/grader-health` were merged into one skill, `/grade-sweep`. Read [`.claude/skills/grade-sweep/SKILL.md`](../grade-sweep/SKILL.md) and run its **Part B — grade audit** only (the same as `/grade-sweep audit`), with every rule that file states: describe and queue, never confirm, flip a status or re-grade.
