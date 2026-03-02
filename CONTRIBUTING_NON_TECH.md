# Contributing to MonkeyUI — Guide for Non-Technical Collaborators

This guide is for contributors who are **not** software engineers. It covers everything you need to set up the project locally, make changes, and submit them — using plain English, helper scripts, and AI assistants.

---

## Table of contents

1. [Prerequisites — what you need before you start](#prerequisites--what-you-need-before-you-start)
2. [Setting up the project for the first time](#setting-up-the-project-for-the-first-time)
3. [Making and sharing a change](#making-and-sharing-a-change)
4. [What kinds of contributions are welcome?](#what-kinds-of-contributions-are-welcome)
5. [Getting help from an AI assistant](#getting-help-from-an-ai-assistant)

---

## Prerequisites — what you need before you start

1. **A computer running macOS, Windows, or Linux.**
2. **Node.js (version 18 or newer)** — the engine that runs the website locally.
   - Download from [https://nodejs.org](https://nodejs.org) (choose the **LTS** version).
   - After installing, open a terminal (on macOS: *Terminal*; on Windows: *Command Prompt* or *PowerShell*) and type `node --version` to confirm it's installed.
3. **Git** — the tool that tracks changes and lets you collaborate.
   - Download from [https://git-scm.com](https://git-scm.com).
   - After installing, type `git --version` in your terminal to confirm it's installed.
4. **A GitHub account** — create one for free at [https://github.com](https://github.com).

---

## Setting up the project for the first time

**Step 1 — Clone (download) the repository.**

Open a terminal and run:

```bash
git clone https://github.com/MonkeyUI-dev/MonkeyUI-www.git
cd MonkeyUI-www
```

**Step 2 — Run the setup script.**

This installs all dependencies and starts the local preview site in one step:

```bash
bash scripts/setup.sh
```

**Step 3 — View the site.**

Open [http://localhost:3000](http://localhost:3000) in your browser. You should see the MonkeyUI landing page.

Press **Ctrl + C** in the terminal when you want to stop the local server.

> **Just tell your AI assistant:** *"Help me set up the MonkeyUI project on my computer"* and it will guide you through these steps.

---

## Making and sharing a change

Use the interactive git workflow helper to avoid typing git commands manually:

```bash
bash scripts/contribute.sh
```

The script shows a plain-English menu:

```
  What would you like to do?

  1) I want to start working on something new
  2) I finished a change and want to save it
  3) I want to upload my changes so others can see them
  4) I want to get the latest changes from the team
  5) Show me what I've changed so far
  6) Exit
```

### What each option does

| What you say / want to do | Menu option | What happens |
|---|---|---|
| "I want to start working on something new" | **1** | Creates a fresh branch so your work stays separate from the main code |
| "I finished a change and want to save it" | **2** | Stages all your edits and commits them with a message you write |
| "I want to upload my changes so others can see them" | **3** | Pushes your branch to GitHub |
| "I want to get the latest changes from the team" | **4** | Downloads the most recent updates from the `main` branch |
| "Show me what I've changed so far" | **5** | Lists every file you've modified |

Each step shows you the exact git command it will run and asks for your confirmation before doing anything.

### Opening a Pull Request

After uploading your changes (option **3**), open a Pull Request so the team can review and merge them:

1. Go to [https://github.com/MonkeyUI-dev/MonkeyUI-www/pulls](https://github.com/MonkeyUI-dev/MonkeyUI-www/pulls).
2. Click **"New pull request"**.
3. Select your branch and fill in a short description of what you changed.
4. Click **"Create pull request"**.

> **Just tell your AI assistant:** *"Help me commit and push my changes to MonkeyUI-www"* and it will run the right commands for you.

---

## What kinds of contributions are welcome?

| Contribution type | How to do it |
|---|---|
| **Fix a typo or reword text** | Edit the relevant key in `messages/en.json` (English) or `messages/zh-CN.json` (Simplified Chinese) |
| **Fix a translation** | Edit `messages/zh-CN.json` and correct the wrong value |
| **Report a visual bug** | Open a [GitHub Issue](https://github.com/MonkeyUI-dev/MonkeyUI-www/issues) and describe the problem — screenshots are very helpful |
| **Suggest new content** | Open a [GitHub Issue](https://github.com/MonkeyUI-dev/MonkeyUI-www/issues) describing the content you'd like to add or change |

---

## Getting help from an AI assistant

You can describe any task in plain English to an AI coding assistant (GitHub Copilot, ChatGPT, etc.) and it will translate your request into the correct commands. Some example prompts:

| What you want to do | What to type to your AI assistant |
|---|---|
| Fix a typo | "In the MonkeyUI website, fix the typo '…' in the English translation file" |
| Start a new branch | "Create a git branch called 'fix-hero-typo' in MonkeyUI-www" |
| Save your work | "Commit all my changes in MonkeyUI-www with the message 'Fix typo in hero section'" |
| Upload your changes | "Push my current branch to GitHub for MonkeyUI-www" |
| Get the latest code | "Pull the latest changes from main in MonkeyUI-www" |
| Open a Pull Request | "Help me open a pull request on GitHub for my MonkeyUI-www branch" |
