import { routing } from "@/i18n/routing";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  process.env.SITE_URL ||
  "https://monkeyui.com";

export default function sitemap() {
  const now = new Date();

  return routing.locales.map((locale) => ({
    url: `${siteUrl}/${locale}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: locale === routing.defaultLocale ? 1 : 0.9,
  }));
}
