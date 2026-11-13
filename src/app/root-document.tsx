import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { Geist, JetBrains_Mono, Noto_Sans_Georgian } from "next/font/google";
import localFont from "next/font/local";
import { Analytics } from "@vercel/analytics/next";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";
import { hero } from "@/lib/content";
import type { Locale } from "@/lib/copy";
import { GA_MEASUREMENT_ID, SITE_NAME, SITE_URL } from "@/lib/site";
import { alt as ogImageAlt, contentType as ogImageType, size as ogImageSize } from "./opengraph-image";

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
// Georgian letters for /ka; the brand fonts have none. Not preloaded, so English pages never download it.
const georgian = Noto_Sans_Georgian({ variable: "--font-georgian", subsets: ["georgian"], weight: ["400", "600", "800"], preload: false });

export const rootMetadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: `${SITE_NAME} | Marketing agency in Georgia`, template: `%s | ${SITE_NAME}` },
  description: hero.sub,
  // Named here because app/opengraph-image.tsx sits above both root layouts and is not applied to them automatically.
  openGraph: {
    type: "website",
    siteName: SITE_NAME,
    locale: "en_US",
    url: "/",
    images: [{ url: "/opengraph-image", alt: ogImageAlt, type: ogImageType, ...ogImageSize }],
  },
  twitter: { card: "summary_large_image" },
  robots: { googleBot: { "max-image-preview": "large" } },
  icons: { icon: "/favicon.svg" },
};

export const rootViewport: Viewport = { themeColor: "#111111" };

/** The <html> shell both root layouts share; `lang` is the language of every page under that layout. */
export function RootDocument({ lang, children }: { lang: Locale; children: ReactNode }) {
  return (
    <html lang={lang} className={`${swiss.variable} ${body.variable} ${code.variable} ${georgian.variable}`}>
      <body>
        {children}
        <Analytics />
      </body>
      <GoogleAnalytics gaId={GA_MEASUREMENT_ID} />
    </html>
  );
}
