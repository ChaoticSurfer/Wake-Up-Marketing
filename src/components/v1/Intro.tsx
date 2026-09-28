"use client";

import { useEffect, useState } from "react";

const COLS = 16;
const ROWS = 10;

/** Boot screen: logo glitches in, then the screen dissolves into QR modules. Once per session. */
export default function Intro() {
  const [phase, setPhase] = useState<"boot" | "dissolve" | "done">("boot");
  const [pct, setPct] = useState(0);
  const [delays] = useState(() => Array.from({ length: COLS * ROWS }, () => Math.random() * 0.5));

  useEffect(() => {
    let skip = false;
    try {
      skip = sessionStorage.getItem("wu_intro") === "1";
    } catch {}
    if (skip || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      // storage is only readable after hydration; drop the overlay on the next frame
      const id = requestAnimationFrame(() => setPhase("done"));
      return () => cancelAnimationFrame(id);
    }
    document.documentElement.style.overflow = "hidden";
    const start = performance.now();
    let raf = 0;
    const tick = (t: number) => {
      const k = Math.min(1, (t - start) / 1300);
      setPct(Math.round(100 * (1 - Math.pow(1 - k, 3))));
      if (k < 1) raf = requestAnimationFrame(tick);
      else {
        setPhase("dissolve");
        try {
          sessionStorage.setItem("wu_intro", "1");
        } catch {}
        setTimeout(() => {
          document.documentElement.style.overflow = "";
          setPhase("done");
        }, 1100);
      }
    };
    raf = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(raf);
      document.documentElement.style.overflow = "";
    };
  }, []);

  if (phase === "done") return null;
  const out = phase === "dissolve";
  return (
    <div className="fixed inset-0 z-[100]" aria-hidden>
      <div
        className="absolute inset-0 grid"
        style={{ gridTemplateColumns: `repeat(${COLS}, 1fr)`, gridTemplateRows: `repeat(${ROWS}, 1fr)` }}
      >
        {delays.map((d, i) => (
          <span
            key={i}
            className="bg-wu-black transition-[opacity,transform] duration-300 ease-out"
            style={{
              opacity: out ? 0 : 1,
              transform: out ? "scale(0.6)" : "none",
              transitionDelay: out ? `${d}s` : "0s",
              backgroundColor: out && i % 7 === 0 ? "var(--color-wu-red)" : undefined,
            }}
          />
        ))}
      </div>
      <div
        className="absolute inset-0 grid place-items-center content-center gap-6 transition-opacity duration-200"
        style={{ opacity: out ? 0 : 1 }}
      >
        <div className="relative w-[min(280px,60vw)]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="brand/logo-stacked-red.png" alt="" className="w-full" />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="brand/logo-stacked-red.png" alt="" className="glitch-img absolute inset-0 w-full" />
        </div>
        <div className="h-0.5 w-[min(280px,60vw)] bg-white/10">
          <div className="h-full origin-left bg-wu-red shadow-[0_0_12px_#e40613]" style={{ transform: `scaleX(${pct / 100})` }} />
        </div>
        <p className="hud-label text-white/60">
          Waking up <span className="text-wu-red">{String(pct).padStart(3, "0")}%</span>
        </p>
      </div>
    </div>
  );
}
