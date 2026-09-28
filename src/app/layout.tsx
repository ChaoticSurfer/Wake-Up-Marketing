import type { Metadata, Viewport } from "next";
import { Geist, JetBrains_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

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
  title: "WakeUP Marketing",
  description: "Brand, performance and content marketing that wakes your audience up.",
  icons: { icon: "favicon.svg" },
};

export const viewport: Viewport = { themeColor: "#111111" };

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${swiss.variable} ${body.variable} ${code.variable}`}>
      <body>{children}</body>
    </html>
  );
}
