---
name: grader-health
description: >-
  Old name for /grade-sweep health: the read-only grader health check (outage runs, pass-rate drift, cost, stale model pins). --probe runs a paid calibration. Triggers: "/grader-health".
disable-model-invocation: true
plain: >-
  The older name for the check that the automatic quality reviewer is working well.
reach-for: >-
  When you remember the old name; it opens the same check as the grade sweep.
cost: >-
  Free and read-only. An optional live test of the reviewer costs a small amount.
---

**This command is an alias (task 1004471).** `/grader-health` and `/grade-audit` were merged into one skill, `/grade-sweep`. Read [`.claude/skills/grade-sweep/SKILL.md`](../grade-sweep/SKILL.md) and run its **Part A — grader health** only (the same as `/grade-sweep health`; pass `--probe` through if given), with every rule that file states: read-only, confirm an outage before alarming anyone.
