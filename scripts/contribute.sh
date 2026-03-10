#!/usr/bin/env bash
# contribute.sh — Guided git workflow helper for MonkeyUI-www
#
# Usage:
#   bash scripts/contribute.sh
#
# This interactive script walks non-technical contributors through the most
# common git operations using plain English prompts:
#
#   "I want to start working on something new"   → creates a feature branch
#   "I finished a change and want to save it"    → stages + commits changes
#   "I want to upload my changes"                → pushes the current branch
#   "I want to get the latest changes"           → pulls from the remote
#   "What have I changed so far?"                → shows current git status
#
# Each operation is confirmed before running so contributors always know
# exactly what command will be executed.

set -euo pipefail

# ── helpers ──────────────────────────────────────────────────────────────────

info()    { echo "  ✅  $*"; }
preview() { echo "  🔍  Running: $*"; }
error()   { echo "  ❌  $*" >&2; exit 1; }
divider() { echo ""; echo "──────────────────────────────────────────────"; echo ""; }

# Ask a yes/no question; return 0 for yes, 1 for no.
confirm() {
  local prompt="$1"
  read -rp "  ❓  $prompt [y/N] " answer
  case "${answer,,}" in
    y|yes) return 0 ;;
    *)     return 1 ;;
  esac
}

require_command() {
  if ! command -v "$1" &>/dev/null; then
    error "'$1' is not installed. Please install git from https://git-scm.com and run this script again."
  fi
}

# ── banner ────────────────────────────────────────────────────────────────────

echo ""
echo "╔══════════════════════════════════════════╗"
echo "║   MonkeyUI — git workflow helper          ║"
echo "╚══════════════════════════════════════════╝"
echo ""
echo "  Tell me what you'd like to do and I'll walk you through it."

# ── preflight ────────────────────────────────────────────────────────────────

require_command "git"

if ! git rev-parse --git-dir &>/dev/null; then
  error "This doesn't look like a git repository. Make sure you're inside the MonkeyUI-www folder."
fi

# ── menu ─────────────────────────────────────────────────────────────────────

divider

echo "  What would you like to do?"
echo ""
echo "  1) I want to start working on something new"
echo "  2) I finished a change and want to save it"
echo "  3) I want to upload my changes so others can see them"
echo "  4) I want to get the latest changes from the team"
echo "  5) Show me what I've changed so far"
echo "  6) Exit"
echo ""

read -rp "  Enter a number (1–6): " choice

divider

case "$choice" in

  # ── 1. Start a new feature branch ──────────────────────────────────────────
  1)
    echo "  Great! Let's create a new branch for your work."
    echo "  A branch keeps your changes separate from the main code"
    echo "  until you're ready to share them."
    echo ""
    read -rp "  Give your branch a short name (e.g. fix-typo, update-hero-text): " branch_name

    # Sanitise: replace spaces with hyphens, lowercase
    branch_name=$(echo "$branch_name" | tr '[:upper:]' '[:lower:]' | tr ' ' '-' | tr -cd '[:alnum:]-')

    if [ -z "$branch_name" ]; then
      error "Branch name cannot be empty."
    fi

    echo ""
    echo "  This will run:"
    echo "    git checkout main"
    echo "    git pull"
    echo "    git checkout -b $branch_name"
    echo ""

    if confirm "Proceed?"; then
      preview "git checkout main"
      git checkout main

      preview "git pull"
      git pull

      preview "git checkout -b $branch_name"
      git checkout -b "$branch_name"

      info "You are now on branch '$branch_name'. Make your changes and then run this script again to save them."
    else
      echo "  Cancelled. No changes were made."
    fi
    ;;

  # ── 2. Stage + commit ──────────────────────────────────────────────────────
  2)
    echo "  Let's save (commit) your changes."
    echo "  First, here's what you've changed:"
    echo ""
    git status --short
    echo ""

    read -rp "  Write a short description of what you changed (e.g. Fix typo in hero text): " commit_msg

    if [ -z "$commit_msg" ]; then
      error "Please provide a description so the team knows what changed."
    fi

    echo ""
    echo "  This will run:"
    echo "    git add ."
    echo "    git commit -m \"$commit_msg\""
    echo ""

    if confirm "Proceed?"; then
      preview "git add ."
      git add .

      preview "git commit -m \"$commit_msg\""
      git commit -m "$commit_msg"

      info "Changes saved locally with the message: \"$commit_msg\""
      echo ""
      echo "  Next step: run this script again and choose option 3 to upload your changes."
    else
      echo "  Cancelled. No changes were saved."
    fi
    ;;

  # ── 3. Push current branch ─────────────────────────────────────────────────
  3)
    current_branch=$(git branch --show-current)
    echo "  You are on branch: $current_branch"
    echo ""
    echo "  This will upload your changes to GitHub so the team can review them."
    echo ""
    echo "  This will run:"
    echo "    git push --set-upstream origin $current_branch"
    echo ""

    if confirm "Proceed?"; then
      preview "git push --set-upstream origin $current_branch"
      git push --set-upstream origin "$current_branch"

      info "Your changes are now on GitHub!"
      echo ""
      echo "  Next step: open a Pull Request on GitHub so the team can review and merge your changes."
      echo "  Go to: https://github.com/MonkeyUI-dev/MonkeyUI-www/pulls"
    else
      echo "  Cancelled. Nothing was uploaded."
    fi
    ;;

  # ── 4. Pull latest changes ─────────────────────────────────────────────────
  4)
    current_branch=$(git branch --show-current)
    echo "  This will download the latest changes from the main branch."
    echo ""
    echo "  This will run:"
    echo "    git pull origin main"
    echo ""

    if confirm "Proceed?"; then
      preview "git pull origin main"
      git pull origin main

      info "Your local copy is now up to date."
    else
      echo "  Cancelled. Nothing was downloaded."
    fi
    ;;

  # ── 5. Status ──────────────────────────────────────────────────────────────
  5)
    echo "  Here is a summary of your current changes:"
    echo ""
    echo "  Current branch: $(git branch --show-current)"
    echo ""
    git status
    ;;

  # ── 6. Exit ────────────────────────────────────────────────────────────────
  6)
    echo "  Goodbye! Run this script again whenever you need help."
    exit 0
    ;;

  *)
    error "Invalid choice. Please run the script again and enter a number between 1 and 6."
    ;;
esac

echo ""
