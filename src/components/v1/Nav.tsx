"use client";

import { useEffect, useState } from "react";
import { nav } from "@/lib/content";
import { cn } from "@/lib/utils";
import { Magnetic, Scramble } from "@/components/shared/fx";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 24);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-3 md:px-6">
      <div
        className={cn(
          "mx-auto flex h-14 max-w-[1320px] items-center gap-6 rounded-full border px-3 pl-5 transition-all duration-500",
          scrolled || open
            ? "border-white/10 bg-wu-black/70 shadow-[0_20px_60px_-20px_rgba(0,0,0,.8)] backdrop-blur-xl"
            : "border-transparent",
        )}
      >
        <a href="#top" aria-label="WakeUP Marketing home" className="shrink-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="brand/logo-horizontal-light.png" alt="WakeUP Marketing" className="h-7 w-auto" />
        </a>

        <nav className="ml-auto hidden items-center gap-1 md:flex" aria-label="Primary">
          {nav.map((l, i) => (
            <a
              key={l.href}
              href={l.href}
              className="group flex h-11 items-center gap-1.5 rounded-full px-4 text-sm text-white/65 transition-colors hover:bg-white/5 hover:text-white"
            >
              <span className="font-mono text-xs text-wu-red">0{i + 1}</span>
              <Scramble text={l.label} trigger="hover" duration={400} />
            </a>
          ))}
        </nav>

        <Magnetic className="hidden md:block" strength={0.25}>
          <a
            href="#contact"
            className="group relative flex h-11 items-center gap-2 overflow-hidden rounded-full bg-wu-red px-5 text-sm font-semibold text-white shadow-[0_8px_30px_-6px_rgba(228,6,19,.7)]"
          >
            <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
            Start a project <span className="transition-transform group-hover:translate-x-1">→</span>
          </a>
        </Magnetic>

        <button
          className="ml-auto grid size-10 place-items-center rounded-full border border-white/15 md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="relative block h-3 w-4">
            <i className={cn("absolute left-0 top-0 h-0.5 w-4 bg-white transition-transform", open && "translate-y-[5px] rotate-45")} />
            <i className={cn("absolute bottom-0 left-0 h-0.5 w-4 bg-white transition-transform", open && "-translate-y-[5px] -rotate-45")} />
          </span>
        </button>
      </div>

      <div
        className={cn(
          "mx-auto mt-2 max-w-[1320px] overflow-hidden rounded-3xl border border-white/10 bg-wu-black/95 backdrop-blur-xl transition-all duration-500 md:hidden",
          open ? "max-h-[420px] opacity-100" : "pointer-events-none max-h-0 opacity-0",
        )}
      >
        {nav.map((l, i) => (
          <a
            key={l.href}
            href={l.href}
            onClick={() => setOpen(false)}
            className="flex items-baseline gap-3 border-b border-white/10 px-6 py-4 font-display text-3xl"
          >
            <span className="font-mono text-xs text-wu-red">0{i + 1}</span>
            {l.label}
          </a>
        ))}
        <a href="#contact" onClick={() => setOpen(false)} className="m-4 flex h-12 items-center justify-center rounded-full bg-wu-red font-semibold">
          Start a project →
        </a>
      </div>
    </header>
  );
}
