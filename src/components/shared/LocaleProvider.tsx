"use client";

import { createContext, useContext } from "react";
import type { ReactNode } from "react";
import { enCopy } from "@/lib/copy";
import type { Locale, SiteCopy } from "@/lib/copy";

const copies: Record<Locale, SiteCopy> = { en: enCopy };

const CopyContext = createContext<SiteCopy>(enCopy);

/** Copy for the current language; English outside a LocaleProvider (the design-lab versions). */
export const useCopy = () => useContext(CopyContext);

export function LocaleProvider({ locale, children }: { locale: Locale; children: ReactNode }) {
  return <CopyContext.Provider value={copies[locale]}>{children}</CopyContext.Provider>;
}
