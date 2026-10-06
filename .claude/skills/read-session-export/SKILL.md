---
name: read-session-export
description: >-
  Read a Claude Code /export zip to answer questions about a past session; never creates one. Triggers: a dropped session-export-*.zip, "read/summarize this session", "what happened in this session", "what was I/you thinking", "/read-session-export".
plain: >-
  Reads a saved copy of a past conversation with your assistant and answers questions about what happened in it.
reach-for: >-
  When you have a saved conversation file and want to know what went on.
cost: >-
  Free, and it changes nothing. It only reads the file you give it.
---

The user already has the zip — Claude Code's built-in `/export` made it. Read it with the reader rather than by hand: it prints a compact transcript (prompts + thinking + replies + one-line tool calls) to stdout and skips the megabytes of debug logs.

```bash
bongos exec scripts/gds/read-session-export.js <export.zip>     # compact transcript → stdout
bongos exec scripts/gds/read-session-export.js --latest         # newest session-export-*.zip in ~/Downloads
```

Then **answer what the user actually asked** — summarize the session, pull out the reasoning behind a decision, find where something went wrong, list what was built. Don't paste the transcript back; that's the raw material, not the answer.

## Pick the right depth (it's fast either way)

| The ask | Run |
|---|---|
| "What is this / how long / what model" | `--meta` (header only: model, dates, counts) |
| "What was I/you *thinking*" | `--thoughts` (only the 💭 thinking blocks) |
| Normal "read / summarize this session" | _(no flag)_ — compact transcript, tool results clipped |
| "I need the full tool output / exact text" | `--full` (loosens the result clipping) |

**A long export is a file, not a dump.** Always open with `--meta`; if it reports hundreds of tool calls, redirect to your session's scratchpad directory and read it in slices, rather than pouring thousands of lines into context at once:

```bash
bongos exec scripts/gds/read-session-export.js <zip> > <scratchpad>/transcript.md   # then sed -n '1,400p', '400,850p', …
```

## If the thinking is redacted

Opus sessions export encrypted reasoning rather than words, and the reader says so in its header. Tell the user plainly — then answer their question anyway from the **text replies**, which routinely state the reasoning outright ("the problem is X, so I'll Y"), and the **tool-call sequence**, which shows the investigation step by step. The zip's `logs/*.log` are not a fallback: app-wide rolling debug logs, no per-session correlation, no reasoning.

Reads only — it creates no files and never modifies the zip.
