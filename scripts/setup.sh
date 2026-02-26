#!/usr/bin/env bash
# setup.sh — One-command environment bootstrap for MonkeyUI-www
#
# Usage:
#   bash scripts/setup.sh
#
# What it does:
#   1. Checks that Node.js (>= 18) and npm are available.
#   2. Installs project dependencies with `npm install`.
#   3. Starts the local development server.
#
# Designed for contributors without a technical background.
# If anything goes wrong the script prints a plain-English error and stops.

set -euo pipefail

# ── helpers ──────────────────────────────────────────────────────────────────

info()  { echo "  ✅  $*"; }
warn()  { echo "  ⚠️   $*"; }
error() { echo "  ❌  $*" >&2; exit 1; }

require_command() {
  local cmd="$1"
  local install_hint="$2"
  if ! command -v "$cmd" &>/dev/null; then
    error "'$cmd' is not installed. $install_hint"
  fi
}

# ── banner ────────────────────────────────────────────────────────────────────

echo ""
echo "╔══════════════════════════════════════════╗"
echo "║   MonkeyUI — local dev environment setup  ║"
echo "╚══════════════════════════════════════════╝"
echo ""

# ── step 1: check prerequisites ───────────────────────────────────────────────

echo "Step 1 / 3 — Checking prerequisites…"

require_command "node" \
  "Please install Node.js (version 18 or newer) from https://nodejs.org and then run this script again."

require_command "npm" \
  "npm comes bundled with Node.js. Please reinstall Node.js from https://nodejs.org."

NODE_VERSION=$(node --version | sed 's/v//')
NODE_MAJOR=$(echo "$NODE_VERSION" | cut -d. -f1)

if [ "$NODE_MAJOR" -lt 18 ]; then
  error "Node.js $NODE_VERSION is too old. Please install version 18 or newer from https://nodejs.org and run this script again."
fi

info "Node.js $NODE_VERSION found."
info "npm $(npm --version) found."

# ── step 2: install dependencies ──────────────────────────────────────────────

echo ""
echo "Step 2 / 3 — Installing project dependencies…"
echo "   (This may take a minute the first time.)"
echo ""

npm install

info "Dependencies installed."

# ── step 3: start the development server ─────────────────────────────────────

echo ""
echo "Step 3 / 3 — Starting the development server…"
echo ""
echo "   The site will open at: http://localhost:3000"
echo "   Press Ctrl + C at any time to stop the server."
echo ""

npm run dev
