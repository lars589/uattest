---
name: owner-review
description: >-
  The owner's review in one walk: backlog (what needs a go), bugs (dedupe), ideas (promote, drop, merge), then priorities. Metic+. Triggers: "/owner-review", "review the backlog", "triage bugs", "triage ideas", "review the inbox", "reprioritize".
plain: >-
  One place to go through everything waiting on you: work that needs a go-ahead, reported problems, new ideas, and what matters most next.
reach-for: >-
  Once a day, or whenever you want to clear what is waiting on your decision.
cost: >-
  Uses your session. Nothing changes until you decide each item.
---

You are running the **owner review**: the one front door to the four queues that wait on a person's decision (task 1004471). It walks them in this order, because each step makes the next one smaller:

| Step | Queue | The step's own playbook | Old command (still typeable) |
|---|---|---|---|
| 1. **backlog** | tasks at `status='backlog'` — waiting for a person to say go | [`.claude/skills/backlog-review/SKILL.md`](../backlog-review/SKILL.md) | `/backlog-review` |
| 2. **bugs** | open `kind=bug` tasks — batch the near-duplicates, then merge or won't-fix | [`.claude/skills/bug-triage/SKILL.md`](../bug-triage/SKILL.md) | `/bug-triage` |
| 3. **ideas** | the `idea_inbox` — promote, discard or merge each homeless idea | [`.claude/skills/idea-triage/SKILL.md`](../idea-triage/SKILL.md) | `/idea-triage` |
| 4. **priorities** | a few plain questions that reweight what is left and suggest what to claim next | [`.claude/skills/priority-session/SKILL.md`](../priority-session/SKILL.md) | `/priority-session` |

## Where to start

- `/owner-review` with nothing else → all four, in order.
- `/owner-review <step>` (`backlog`, `bugs`, `ideas` or `priorities`) → that step only.
- **Plain words open the matching step directly — do not walk the earlier ones first:** "review the backlog", "what needs a nod", "walk the backlog" → **backlog**; "triage bugs", "walk the bug queue", "dedupe bugs" → **bugs**; "triage ideas", "review the inbox", "walk the idea inbox" → **ideas**; "run a priority session", "reprioritize the inbox" → **priorities**. When one step finishes, offer the next in one line ("Next is bugs — go on?"); stop if they say no.

## How to run a step

The four step playbooks are **hidden** skills (`disable-model-invocation: true`): a person can still type their old `/name`, but you cannot load them through the Skill tool. So for each step, **Read that step's `SKILL.md` with the Read tool and follow it in full** — its rank gate, its queue read, its one-decision-at-a-time walk, its write rules and its summary. This file adds no rule of its own to any step and overrides none; where they differ, the step's playbook wins.

**The rank gate runs once.** All four steps are Metic+. Check it at the top — `bongos exec scripts/gds/api.js GET /api/bongos/me`, lowercase `builder.rank` — and if it is `xenos` or `thetes`, stop before reading any queue: *"The owner review is a Metic+ step — it decides what the whole team works on. Ask an Archon to promote you."* An absent `rank` follows the pre-rank passthrough each step describes.

## Between steps

Give a two-line tally of the step just finished (decided / deferred) before offering the next one. At the end, one summary per step that ran, in that step's own summary shape — nothing re-derived.

## What stays separate

Blockers have their own daily walk, `/blocker-review`, and one blocker at a time is `/blocker-solve`. Closing a goal's criteria is `/goal-close`. The unattended nightly twin of step 3 (`.claude/scheduled-tasks/idea-triage-nightly/`) reads the idea step's playbook by its path, which is why that file stays where it is.
