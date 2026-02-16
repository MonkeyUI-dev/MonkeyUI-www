import { Nunito, Quicksand, Caveat } from "next/font/google";
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

export const metadata = {
  title: "Design Monkey — Style DNA for AI UI",
  description:
    "Bring your own reference image. Design Monkey extracts the style DNA and injects it into your IDE via MCP, so AI-generated UI looks consistent and less AI-ish.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${nunito.variable} ${quicksand.variable} ${caveat.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
