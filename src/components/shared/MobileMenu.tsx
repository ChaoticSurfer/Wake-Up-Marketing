"use client";

import { useState } from "react";
import { nav } from "@/lib/content";
import { cn } from "@/lib/utils";

/** Menu button and drop-down panel for phones; render inside a positioned (fixed/relative) header. */
export function MobileMenu() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button
        type="button"
        className="grid size-11 place-items-center rounded-full border border-white/15 md:hidden"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        aria-controls="mobile-menu"
        onClick={() => setOpen((v) => !v)}
      >
        <span className="relative block h-3 w-4">
          <i className={cn("absolute left-0 top-0 h-0.5 w-4 bg-white transition-transform", open && "translate-y-[5px] rotate-45")} />
          <i className={cn("absolute bottom-0 left-0 h-0.5 w-4 bg-white transition-transform", open && "-translate-y-[5px] -rotate-45")} />
        </span>
      </button>
      <nav
        id="mobile-menu"
        aria-label="Primary"
        className={cn(
          "absolute inset-x-4 top-full mt-2 overflow-hidden rounded-3xl border border-white/10 bg-wu-black shadow-2xl transition-all duration-300 md:hidden",
          open ? "max-h-[420px] opacity-100" : "pointer-events-none invisible max-h-0 opacity-0",
        )}
      >
        {nav.map((l, i) => (
          <a
            key={l.href}
            href={l.href}
            onClick={() => setOpen(false)}
            className="flex items-baseline gap-3 border-b border-white/10 px-6 py-4 font-display text-2xl"
          >
            <span className="font-mono text-xs text-wu-red">0{i + 1}</span>
            {l.label}
          </a>
        ))}
      </nav>
    </>
  );
}
