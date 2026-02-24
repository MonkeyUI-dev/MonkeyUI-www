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

## Things to be careful about

- **Do not** break the `[locale]` dynamic segment — every route must be wrapped by the locale segment for `next-intl` to work.
- **Do not** add inline styles or `style={{}}` props; keep styling in `globals.css`.
- **Do not** use `<img>` directly — always use `next/image` for images that are part of the UI.
- **Do not** remove the `suppressHydrationWarning` props on `<html>` and `<body>` — they prevent noise from browser extensions that modify the DOM.
- When editing `globals.css`, update **both** the `@theme inline` block and the `:root` block if you change a design token.
- The apply form in the `#apply` section of `src/app/[locale]/page.js` collects WeChat/X ID via a simple form (`action="#"` with `method="post"`) — this is intentional for the current early-access setup.
- The MCP design system tokens in `.vscode/mcp.json` are the authoritative design source — always consult them when making visual changes.
