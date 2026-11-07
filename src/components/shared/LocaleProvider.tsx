"use client";

import { createContext, useContext } from "react";
import type { ReactNode } from "react";
import { enCopy } from "@/lib/copy";
import type { Locale, SiteCopy } from "@/lib/copy";
import { kaCopy } from "@/lib/copy-ka";

const copies: Record<Locale, SiteCopy> = { en: enCopy, ka: kaCopy };

type PageCopy = SiteCopy & { locale: Locale; alternatePath: string };

const CopyContext = createContext<PageCopy>({ ...enCopy, locale: "en", alternatePath: kaCopy.home });

/** Copy for the current language; English outside a LocaleProvider (the design-lab versions). */
export const useCopy = () => useContext(CopyContext);

/** `alternatePath` is this page in the other language, used by the language switch. */
export function LocaleProvider({ locale, alternatePath, children }: { locale: Locale; alternatePath: string; children: ReactNode }) {
  return (
    <CopyContext.Provider value={{ ...copies[locale], locale, alternatePath }}>
      <div lang={locale}>{children}</div>
    </CopyContext.Provider>
  );
}
