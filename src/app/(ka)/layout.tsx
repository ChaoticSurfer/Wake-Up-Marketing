import type { ReactNode } from "react";
import { RootDocument, rootMetadata, rootViewport } from "../root-document";

export const metadata = rootMetadata;
export const viewport = rootViewport;

// Every page under /ka is Georgian. Separate root layouts let <html lang> match the page.
export default function GeorgianRootLayout({ children }: { children: ReactNode }) {
  return <RootDocument lang="ka">{children}</RootDocument>;
}
