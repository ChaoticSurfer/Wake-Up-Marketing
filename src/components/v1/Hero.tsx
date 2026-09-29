"use client";

import { motion } from "motion/react";
import QrEye from "@/components/shared/QrEye";
import { Corners, FlickeringGrid, Magnetic, Scramble } from "@/components/shared/fx";
import { openChat } from "@/lib/chat-bus";
import { hero } from "@/lib/content";

const ease = [0.16, 1, 0.3, 1] as const;

export default function Hero() {
  return (
    <section id="top" className="relative isolate flex min-h-[100svh] items-center overflow-hidden pb-20 pt-28">
      {/* background: data field + perspective floor + glow */}
      <div className="absolute inset-0 -z-10 [mask-image:radial-gradient(ellipse_at_70%_45%,#000_10%,transparent_65%)]">
        <FlickeringGrid maxOpacity={0.28} chance={0.04} />
      </div>
      <div
        className="absolute inset-x-[-20%] bottom-[-8%] -z-10 h-[46%] animate-grid-flow opacity-50 [mask-image:linear-gradient(to_top,#000,transparent_85%)]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(228,6,19,.55) 1px,transparent 1px),linear-gradient(90deg,rgba(228,6,19,.55) 1px,transparent 1px)",
          backgroundSize: "64px 64px",
          transform: "perspective(500px) rotateX(62deg)",
          transformOrigin: "bottom",
        }}
        aria-hidden
      />
      <div className="absolute left-[62%] top-[40%] -z-10 size-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(228,6,19,.25),transparent_62%)] blur-2xl" aria-hidden />

      <div className="hud-label pointer-events-none absolute bottom-7 right-24 hidden animate-float text-white/40 md:block" aria-hidden>
        Scroll ↓
      </div>

      <div className="mx-auto grid w-full max-w-[1320px] items-center gap-10 px-4 md:px-8 lg:grid-cols-[1.15fr_.85fr]">
        <div className="order-2 text-center lg:order-1 lg:text-left">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease }}
            className="hud-label mb-6 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[.03] px-3 py-1.5 text-white/60"
          >
            <span className="size-1.5 rounded-full bg-wu-red shadow-[0_0_8px_#e40613]" />
            {hero.eyebrow}
          </motion.p>

          <h1 className="font-display text-[clamp(42px,5.2vw,84px)] leading-[0.98] [text-wrap:balance]">
            <Scramble as="span" className="block" text="Marketing that" trigger="mount" delay={200} />
            <Scramble as="span" className="block" text="shows up in your" trigger="mount" delay={420} />
            <span className="block">
              <span className="glitch text-wu-red" data-text="revenue.">
                revenue.
              </span>
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.7, ease }}
            className="mx-auto mt-8 max-w-[520px] text-lg text-white/60 lg:mx-0"
          >
            {hero.sub}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.85, ease }}
            className="mt-9 flex flex-col items-center gap-3 sm:flex-row lg:justify-start sm:justify-center"
          >
            <Magnetic strength={0.2} className="w-full sm:w-auto">
              <a
                href="#contact"
                className="group relative flex h-14 w-full items-center justify-center gap-3 overflow-hidden rounded-full bg-wu-red px-8 font-semibold text-white shadow-[0_14px_40px_-10px_rgba(228,6,19,.8)] sm:w-auto"
              >
                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                {hero.primaryCta}
                <span className="grid size-7 place-items-center rounded-full bg-white/15 transition-transform group-hover:translate-x-1">→</span>
              </a>
            </Magnetic>
            <button
              onClick={() => openChat()}
              className="flex h-14 w-full items-center justify-center gap-3 rounded-full border border-white/15 bg-white/[.03] px-7 font-semibold backdrop-blur transition-colors hover:border-white/40 hover:bg-white/[.07] sm:w-auto"
            >
              <span className="size-2 animate-pulse-ring rounded-full bg-wu-red" /> {hero.secondaryCta}
            </button>
          </motion.div>

          <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.1 }}
            className="mt-10 flex flex-wrap justify-center gap-x-6 gap-y-2 border-t border-white/10 pt-6 text-sm text-white/65 lg:justify-start"
            aria-label="Who we work with"
          >
            {hero.fit.map((f) => (
              <li key={f} className="flex items-center gap-2">
                <span className="text-wu-red" aria-hidden>
                  ✓
                </span>
                {f}
              </li>
            ))}
          </motion.ul>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.1, ease }}
          className="relative order-1 mx-auto w-full max-w-[560px] lg:order-2"
        >
          {/* rotating rings + crosshair */}
          <div className="pointer-events-none absolute left-1/2 top-1/2 aspect-square w-[88%] -translate-x-1/2 -translate-y-1/2 animate-spin-slow rounded-full border border-dashed border-wu-red/30" aria-hidden />
          <div className="pointer-events-none absolute left-1/2 top-1/2 aspect-square w-[70%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/5" aria-hidden />
          <div className="pointer-events-none absolute inset-x-[-6%] top-1/2 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" aria-hidden />
          <div className="pointer-events-none absolute inset-y-[-12%] left-1/2 w-px bg-gradient-to-b from-transparent via-white/15 to-transparent" aria-hidden />

          <div className="relative px-2 py-10">
            <Corners />
            <QrEye className="drop-shadow-[0_0_28px_rgba(228,6,19,.35)]" />
          </div>

        </motion.div>
      </div>
    </section>
  );
}
