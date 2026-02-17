import { Nunito, Quicksand, Caveat } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { notFound } from "next/navigation";
import "./globals.css";

const nunito = Nunito({
  variable: "--font-nunito-var",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
});

const quicksand = Quicksand({
  variable: "--font-quicksand-var",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const caveat = Caveat({
  variable: "--font-caveat-var",
  subsets: ["latin"],
  weight: ["600"],
});

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata" });

  return {
    title: t("title"),
    description: t("description"),
  };
}

export default async function RootLayout({ children, params }) {
  const { locale } = await params;

  if (!routing.locales.includes(locale)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className={`${nunito.variable} ${quicksand.variable} ${caveat.variable}`}
      >
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
