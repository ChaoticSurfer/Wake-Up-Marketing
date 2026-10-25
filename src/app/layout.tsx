import type { Metadata, Viewport } from "next";
import { Geist, JetBrains_Mono } from "next/font/google";
import localFont from "next/font/local";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { hero } from "@/lib/content";
import { SITE_NAME, SITE_URL } from "@/lib/site";

const swiss = localFont({
  src: [
    { path: "../fonts/Swiss721HeavyBT.woff2", weight: "800", style: "normal" },
    { path: "../fonts/Swiss721HeavyItalicBT.woff2", weight: "800", style: "italic" },
  ],
  variable: "--font-swiss",
  display: "swap",
});

const body = Geist({ variable: "--font-body", subsets: ["latin"] });
const code = JetBrains_Mono({ variable: "--font-code", subsets: ["latin"], weight: ["400", "500"] });

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: `${SITE_NAME} | Growth marketing for mid-sized businesses in Georgia`, template: `%s | ${SITE_NAME}` },
  description: hero.sub,
  openGraph: { type: "website", siteName: SITE_NAME, locale: "en_US", url: "/" },
  twitter: { card: "summary_large_image" },
  icons: { icon: "/favicon.svg" },
};

export const viewport: Viewport = { themeColor: "#111111" };

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${swiss.variable} ${body.variable} ${code.variable}`}>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
