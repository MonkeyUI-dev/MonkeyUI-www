# MonkeyUI — Style DNA for AI-generated UI

MonkeyUI is a **UI/UX knowledge base** that empowers vibe coding by turning any reference UI screenshot into *style DNA* — a structured description of colors, typography, spacing, radii, and shadows — and injecting it into your IDE via the **Model Context Protocol (MCP)**. Through carefully designed reference guidelines, it helps developers generate professional-grade, high-intent UI without requiring designer expertise.

---

## What this repo is

This is the **public marketing website** for MonkeyUI (`MonkeyUI-www`). It is a single-page, bilingual landing page built with Next.js and deployed on Vercel.

**Live site:** [https://monkeyui.com](https://monkeyui.com)

---

## Tech stack

- **[Next.js 16](https://nextjs.org/)** — App Router with React Server Components
- **React 19**
- **[Tailwind CSS v4](https://tailwindcss.com/)** — utility classes + custom design tokens via CSS custom properties
- **[next-intl v4](https://next-intl-docs.vercel.app/)** — i18n routing and translations (English + Simplified Chinese)
- **Google Fonts** — Inter via `next/font`
- **ESLint 9** — Next.js core web vitals rules

---

## Getting started

```bash
# Install dependencies
npm install

# Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the site. The page auto-updates as you edit files.

### Other commands

```bash
npm run build   # Production build
npm start       # Start production server
npm run lint    # Run ESLint
```

---

## Internationalization

The site supports **English** (`/en`) and **Simplified Chinese** (`/zh-CN`). All user-facing strings live in the `messages/` directory. The default locale is `en`.

To contribute a translation or fix a string, edit the relevant key in both `messages/en.json` and `messages/zh-CN.json`.

---

## Contributing

Contributions are welcome! Please:

1. Fork the repository and create a feature branch.
2. Keep changes focused — one concern per pull request.
3. Ensure `npm run lint` passes before submitting.
4. Open a pull request with a clear description of what changed and why.

If you're making substantial changes, please open an issue first to discuss the approach.

---

## Deployment

The site is deployed on [Vercel](https://vercel.com). Every push to `main` triggers an automatic deployment. Preview deployments are created for all pull requests.

To deploy your own fork:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/MonkeyUI-dev/MonkeyUI)

---

## License

MIT — see [LICENSE](./LICENSE) for details.
