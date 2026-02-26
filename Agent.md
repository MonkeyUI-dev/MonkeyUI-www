# Agent.md — MonkeyUI

This document gives AI coding agents the context they need to work effectively in this repository.

---

## Project overview

**MonkeyUI** is a marketing landing page for an AI-powered style extraction tool. Users upload a reference UI screenshot; MonkeyUI extracts the *style DNA* (colors, typography, spacing, radii, shadows) and injects it into the developer's IDE via the **Model Context Protocol (MCP)**, so that AI-generated UI code matches the reference design without repeated prompt iterations.

The site is the public face of a seed-user program (limited to 10 teams) and collects applicant contact info (WeChat ID or X ID).

---

## Tech stack

| Layer | Choice |
|---|---|
| Framework | [Next.js 16](https://nextjs.org/) — App Router, React Server Components |
| UI library | React 19 |
| Styling | [Tailwind CSS v4](https://tailwindcss.com/) via `@tailwindcss/postcss` |
| i18n | [next-intl v4](https://next-intl-docs.vercel.app/) — English (`en`) and Simplified Chinese (`zh-CN`) |
| Fonts | Google Fonts: Inter (loaded via `next/font/google`) |
| Linter | ESLint 9 with `eslint-config-next` (Next.js core web vitals rules) |
| Design system | MCP-sourced design tokens via `.vscode/mcp.json` (Professional Dark / Nocturnal Nebula theme) |
| Deployment | Vercel |

---

## Repository layout

```
MonkeyUI-www/
├── .vscode/
│   └── mcp.json            # MCP design system server configuration
├── messages/               # i18n translation files
│   ├── en.json             # English strings
│   └── zh-CN.json          # Simplified Chinese strings
├── public/                 # Static assets served at /
│   ├── before.jpeg         # Evidence section: "before" screenshot
│   ├── after.jpeg          # Evidence section: "after" screenshot (also video poster)
│   └── demo-video.mp4      # Demo section: 15-second workflow video
├── src/
│   ├── proxy.js             # next-intl locale routing middleware
│   ├── i18n/
│   │   ├── routing.js      # Supported locales + default locale
│   │   ├── request.js      # Server-side locale resolution
│   │   └── navigation.js   # Re-exported next-intl navigation helpers
│   └── app/
│       └── [locale]/
│           ├── layout.js   # Root layout: Inter font, metadata, NextIntlClientProvider
│           ├── page.js     # Single-page app: all landing page sections
│           ├── globals.css # Design tokens (Professional Dark theme) + all component CSS (no CSS modules)
│           └── components/
│               ├── LanguageSwitcher.js  # Client component: custom locale dropdown
│               └── VideoPlayer.js       # Client component: play-overlay + <video>
├── next.config.mjs         # next-intl plugin wrapper
├── eslint.config.mjs       # ESLint flat config
├── postcss.config.mjs      # Tailwind CSS v4 PostCSS plugin
└── jsconfig.json           # Path alias: @/ → ./src/
```

---

## Key conventions

### Styling
- **No CSS modules** — all styles live in `src/app/[locale]/globals.css`.
- Design tokens are declared as CSS custom properties in `:root` and mirrored in a Tailwind `@theme inline` block.
- The design system follows a **Professional Dark / Nocturnal Nebula** aesthetic: dark background (`#050505`), white primary text (`#FFFFFF`), muted sage secondary (`#A8C0AF`), glass-morphism surfaces, and subtle nebula gradient overlays.
- Tailwind utility classes are available but the codebase primarily uses semantic class names (e.g., `.btn`, `.nav-pill`, `.hero-copy`).
- Responsive breakpoints use `@media (max-width: ...)` at the bottom of `globals.css`.
- `prefers-reduced-motion` is respected via a media query that strips transitions.

### MCP Design System
- The project uses an MCP design system server configured in `.vscode/mcp.json`.
- This server is the **authoritative source of truth** for design tokens (colors, typography, spacing, radii, shadows).
- When generating UI code, design tokens and aesthetic guidance from this MCP server take precedence over any other source.

### Internationalization
- Every user-visible string must live in `messages/en.json` **and** `messages/zh-CN.json`.
- Use the `useTranslations` hook in client/server components and `getTranslations` in async server functions.
- The locale is a URL segment (`/en/...`, `/zh-CN/...`). The middleware (`src/proxy.js`) handles redirects and locale detection.
- Adding a new locale requires updating `src/i18n/routing.js` and adding the corresponding `messages/<locale>.json`.

### Component patterns
- **Server components by default** — add `"use client"` only when browser APIs or React state/effects are needed.
- Client components: `LanguageSwitcher.js` (locale switching), `VideoPlayer.js` (video playback state).
- Images use `next/image` with `fill` layout and explicit `sizes` for responsive optimization.

### File naming
- React component files use PascalCase (e.g., `VideoPlayer.js`).
- Configuration and utility files use camelCase or kebab-case following Next.js conventions.

---

## Development commands

```bash
# Install dependencies
npm install

# Start the development server (http://localhost:3000)
npm run dev

# Build for production
npm run build

# Start the production server
npm start

# Lint the codebase
npm run lint
```

---

## Adding or editing content

1. **Text changes** — edit the relevant key in `messages/en.json` (and `messages/zh-CN.json`).
2. **New page section** — add the JSX to `src/app/[locale]/page.js`, the styles to `globals.css`, and both translation keys.
3. **New client component** — create it in `src/app/[locale]/components/`, add `"use client"` at the top, and import it in `page.js` or `layout.js`.
4. **Static assets** — place them in `/public/` and reference them as absolute paths (e.g., `/my-image.png`).

---

## Non-technical collaborator guide

This section is for contributors who are **not** software engineers. It explains how to set up the project and contribute changes using everyday language, with helper scripts that do the technical work for you. An AI coding assistant (like GitHub Copilot or ChatGPT) can also walk you through any of these steps if you describe what you want in plain English.

---

### Prerequisites — what you need before you start

1. **A computer running macOS, Windows, or Linux.**
2. **Node.js (version 18 or newer)** — the engine that runs the website locally.
   - Download from [https://nodejs.org](https://nodejs.org) (choose the "LTS" version).
   - After installing, open a terminal (on macOS: *Terminal*; on Windows: *Command Prompt* or *PowerShell*) and type `node --version` to confirm it's installed.
3. **Git** — the tool that tracks changes and lets you collaborate.
   - Download from [https://git-scm.com](https://git-scm.com).
   - After installing, type `git --version` in your terminal to confirm it's installed.
4. **A GitHub account** — create one for free at [https://github.com](https://github.com).

---

### Setting up the project for the first time

1. **Clone (download) the repository.**
   In your terminal, run:
   ```bash
   git clone https://github.com/MonkeyUI-dev/MonkeyUI-www.git
   cd MonkeyUI-www
   ```
2. **Run the setup script.** This installs all dependencies and starts the local preview site in one step:
   ```bash
   bash scripts/setup.sh
   ```
3. Open [http://localhost:3000](http://localhost:3000) in your browser. You should see the MonkeyUI landing page.
4. Press **Ctrl + C** in the terminal when you want to stop the local server.

**Just tell your AI assistant:** *"Help me set up the MonkeyUI project on my computer"* and it will guide you through these steps.

---

### Making and sharing a change

Use the interactive git workflow helper to avoid typing git commands manually:

```bash
bash scripts/contribute.sh
```

The script will show you a plain-English menu:

| What you say / want to do | Menu option |
|---|---|
| "I want to start working on something new" | **1** — creates a new branch |
| "I finished a change and want to save it" | **2** — stages and commits your files |
| "I want to upload my changes so others can see them" | **3** — pushes your branch to GitHub |
| "I want to get the latest changes from the team" | **4** — downloads recent updates |
| "Show me what I've changed so far" | **5** — shows a summary of changes |

Each step shows you the exact git command it will run and asks for confirmation before doing anything.

**After uploading your changes (option 3),** open a Pull Request on GitHub:
- Go to [https://github.com/MonkeyUI-dev/MonkeyUI-www/pulls](https://github.com/MonkeyUI-dev/MonkeyUI-www/pulls)
- Click **"New pull request"** and follow the prompts.

**Just tell your AI assistant:** *"Help me commit and push my changes to MonkeyUI-www"* and it will run the right commands for you.

---

### What kinds of contributions are welcome from non-technical collaborators?

- **Copy editing** — fixing typos or improving the wording of any text on the site. All user-visible text lives in `messages/en.json` (English) and `messages/zh-CN.json` (Simplified Chinese). Open either file, find the text you want to change, edit it, and save.
- **Translation fixes** — if a Chinese translation is incorrect, edit `messages/zh-CN.json`.
- **Reporting visual issues** — open a GitHub Issue at [https://github.com/MonkeyUI-dev/MonkeyUI-www/issues](https://github.com/MonkeyUI-dev/MonkeyUI-www/issues) and describe what looks wrong (screenshots are very helpful).
- **Suggesting new content** — open a GitHub Issue describing the content you'd like to add or change.

---

### Getting help from an AI assistant

You can describe any task in plain English to an AI coding assistant (GitHub Copilot, ChatGPT, etc.) and it will translate your request into the correct steps. Some example prompts:

| What you want | What to type to your AI assistant |
|---|---|
| Fix a typo | "In the MonkeyUI website, fix the typo '…' in the English translation file" |
| Start a new branch | "Create a git branch called 'fix-hero-typo' in MonkeyUI-www" |
| Save your work | "Commit all my changes in MonkeyUI-www with the message 'Fix typo in hero section'" |
| Upload your changes | "Push my current branch to GitHub for MonkeyUI-www" |
| Get the latest code | "Pull the latest changes from main in MonkeyUI-www" |

---

## Things to be careful about

- **Do not** break the `[locale]` dynamic segment — every route must be wrapped by the locale segment for `next-intl` to work.
- **Do not** add inline styles or `style={{}}` props; keep styling in `globals.css`.
- **Do not** use `<img>` directly — always use `next/image` for images that are part of the UI.
- **Do not** remove the `suppressHydrationWarning` props on `<html>` and `<body>` — they prevent noise from browser extensions that modify the DOM.
- When editing `globals.css`, update **both** the `@theme inline` block and the `:root` block if you change a design token.
- The apply form in the `#apply` section of `src/app/[locale]/page.js` collects WeChat/X ID via a simple form (`action="#"` with `method="post"`) — this is intentional for the current early-access setup.
- The MCP design system tokens in `.vscode/mcp.json` are the authoritative design source — always consult them when making visual changes.
