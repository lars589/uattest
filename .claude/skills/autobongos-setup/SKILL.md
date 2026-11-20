---
name: autobongos-setup
description: >-
  Set up THIS device as an Autobongos runner, or fix one that is not working: one copied command, then one Run button. Metic+. Triggers: "/autobongos-setup", "set up Autobongos on this PC", "add this Mac as a runner", "my runner is not running".
disable-model-invocation: true
plain: >-
  Turns the computer you are sitting at into one that builds the project's tasks by itself while you are away, and walks you through the two sign-ins it needs.
reach-for: >-
  When you want this computer to work on the project unattended, or its runner has stopped checking in.
cost: >-
  Setting it up is free and changes nothing in the project. Once you press Run, the runner spends your own Claude usage on the goals you chose, and each task it hands in runs a paid quality review charged to the project.
---

You are setting up the Autobongos runner on the device this session is running on, with the person beside you. The whole flow is **one copied command, then one button**. Your job is to get them through it in plain words and to read what the device says back — never to rebuild the flow by hand.

Design of record: [ADR 0307](../../../../docs/adr/0307-autobongos-a-deterministic-supervisor-and-agentic-workers.md) §5. The guide a person can follow alone: [docs/recipes/autobongos-runner-setup.md](../../../../docs/recipes/autobongos-runner-setup.md).

## What you must not do

- **Never run the runner from this checkout.** `autobongos-host.js run` resets its checkout to the latest code every time it starts, and it refuses any copy that is not marked as the runner's own. Do not mark this one. The setup command makes the runner its own copy under `~/.cloudbongos-runner`.
- **Never ask for the setup code in chat, and never type one yourself.** The person copies the whole command from the hall and pastes it into their own terminal. A code is a one-time login.
- **Never turn on the project's runner switch or change which goals runners may work.** Those are the owner's, on Watch → Autobongos. If they are what is holding the runner, say so and stop.

## 1. Is it already here?

```bash
node ~/.cloudbongos-runner/repo/scripts/bongos/autobongos-host.js status
```

- **The file does not exist** → the device has no runner yet. Go to step 2.
- **`running : yes`** → it is set up and running. Skip to step 4 (is it *working*?).
- **`running : no`, signed in** → start it: `node ~/.cloudbongos-runner/repo/scripts/bongos/autobongos-host.js start`, then step 4.
- **No runner login** → its login was removed or never made. Go to step 2; the same command repairs it.

On Windows the folder is `%USERPROFILE%\.cloudbongos-runner`.

## 2. The one command

Tell the person, in these words or close to them:

> Open the hall, go to **Settings → Access & keys → Your Autobongos runner**, and press **Add a device**. Pick Windows or Mac. Copy the line it shows and paste it into a new **PowerShell** window (Windows, an ordinary one, not "as administrator") or **Terminal** (Mac). It works once and for 15 minutes, so paste it straight away.

Then wait for them. What the command does, so you can answer questions without guessing:

1. Finds git, Node and Claude Code, and installs whichever is missing. On Windows, Windows itself may ask "allow this app to make changes" while it installs; that is expected. On a Mac with no developer tools, macOS opens its own install window — they press Install, wait, and paste the command again.
2. Makes the runner **its own copy** of the project. GitHub may ask them to sign in; it must be an account that can see the project.
3. Signs the device in to the project with **a login of its own**. Their own command-line sign-in on this device is not touched.
4. Checks Claude Code is signed in, and opens the Claude sign-in if it is not.
5. Registers the runner to start whenever they sign in to the device, starts it, and waits for its first check-in.

It ends with `Done. This device is connected…`. If it ends with `Autobongos setup stopped here: …`, read them the **What to do** line — it is written for them — and run the command again after they have done it. Running it twice is safe.

## 3. Press Run

A device added this way starts **stopped**, on purpose: the first press is theirs.

> Back in Settings, your device now has a card. Tick the goals you want it to work under **What it works on**, press **Save**, then press **Run** on the card.

The button then says what the device is doing: **Starting** (under a minute), **Running**, **Resting until** a time (their Claude usage is spent; it resumes by itself), or **Device is off or asleep**.

Tell them the one rule of thumb: **keep the device on and plugged in while it runs.** If it sleeps, the runner pauses and picks up when it wakes. The runner keeps the device from idle-sleeping while it is allowed to work, but a closed laptop lid still sleeps.

## 4. Is it working?

The card in Settings is the answer; read it with them. If the button's second line says it is on **but** something holds it, that line names the cause:

| The card says | Whose move |
|---|---|
| the project's runner switch is off | the owner's (Watch → Autobongos). Not yours to flip. |
| the owner paused your runner | the owner's |
| no goals are chosen for it yet | theirs: tick a goal under **What it works on**, Save |
| the project has not allowed any goals for runners yet | the owner's |
| idle because … | read them the rest of the line; it carries the fix |
| Device is off or asleep | theirs: wake it and sign in |

For anything the card does not explain, the device's own log is at `~/.cloudbongos-runner/logs/autobongos.log`. Read the last screen of it; do not paste it at the person.

## 5. Stopping and removing

- **Stop for now:** the **Stop** button on the card. It finishes the task in hand first.
- **Stop it on the device itself** (maintenance): `node ~/.cloudbongos-runner/repo/scripts/bongos/autobongos-host.js stop`. It says `Stopped` only after it has watched the processes exit; if it says `NOT STOPPED`, read them the command it prints.
- **Take the device out for good:** **Remove** on the card signs the device's login out at once. Then on the device: `…autobongos-host.js uninstall`, and delete the `.cloudbongos-runner` folder.

## An always-on PC that must start with nobody signed in

The setup above starts the runner when the person signs in, which is right for a laptop or a desktop. A Windows PC that must come back after a power cut with nobody at the keyboard uses the boot-time install instead, which needs an Administrator window once: [docs/recipes/autobongos-windows-host.md](../../../../docs/recipes/autobongos-windows-host.md). One runner per device: setup refuses to add a second beside it.
