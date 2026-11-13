import type { ReactNode } from "react";
import { RootDocument, rootMetadata, rootViewport } from "../root-document";

export const metadata = rootMetadata;
export const viewport = rootViewport;

// Every page outside /ka is English. Separate root layouts let <html lang> match the page.
export default function EnglishRootLayout({ children }: { children: ReactNode }) {
  return <RootDocument lang="en">{children}</RootDocument>;
}
