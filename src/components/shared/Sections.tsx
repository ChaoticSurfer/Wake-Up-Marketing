"use client";

/*
 * Sections every version needs for mid-sized buyers: clear pricing, answers to the
 * questions they ask on the first call, and who we are for. Each version passes a
 * `look` so the section sits in its own visual language.
 */

import { AnimatePresence, motion } from "motion/react";
import type { InputHTMLAttributes, ReactNode } from "react";
import { useState } from "react";
import { faq, pains, tiers } from "@/lib/content";
import { cn } from "@/lib/utils";

export type Look = "hud" | "glass" | "plain";

const ease = [0.16, 1, 0.3, 1] as const;

const surface: Record<Look, string> = {
  hud: "rounded-2xl border border-white/10 bg-gradient-to-b from-[#171717] to-wu-ink",
  glass: "rounded-3xl border border-white/10 bg-white/[.045] shadow-[inset_0_1px_0_rgba(255,255,255,.1)] backdrop-blur-2xl",
  plain: "rounded-2xl border border-white/10 bg-[#141414]",
};

function Head({ label, title, look }: { label: string; title: ReactNode; look: Look }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.8, ease }}
      className="mb-12 max-w-[780px]"
    >
      <p className={cn(look === "hud" ? "hud-label" : "text-sm font-semibold uppercase tracking-[0.12em]", "text-wu-red")}>{label}</p>
      <h2 className="mt-4 font-display text-[clamp(34px,4.6vw,68px)] leading-[0.96]">{title}</h2>
    </motion.div>
  );
}

/** "Built for" strip: the four problems mid-sized teams bring us, and what we do about each. */
export function FitSection({ look = "plain", id }: { look?: Look; id?: string }) {
  return (
    <section id={id} className="mx-auto max-w-[1320px] px-4 py-24 md:px-8 md:py-32">
      <Head look={look} label="Built for mid-sized businesses" title={<>Too big for freelancers. <span className="text-wu-red">Tired of agency theatre.</span></>} />
      <div className="grid gap-4 md:grid-cols-2">
        {pains.map((p, i) => (
          <motion.div
            key={p.problem}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-8%" }}
            transition={{ duration: 0.7, delay: (i % 2) * 0.1, ease }}
            className={cn(surface[look], "group grid gap-3 p-7")}
          >
            <p className="flex items-center gap-3 text-lg text-white/50 line-through decoration-wu-red/70 decoration-2">{p.problem}</p>
            <p className="flex gap-3 text-xl font-semibold leading-snug">
              <motion.span
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + i * 0.1, type: "spring", stiffness: 300, damping: 16 }}
                className="mt-0.5 grid size-7 shrink-0 place-items-center rounded-full bg-wu-red text-sm"
                aria-hidden
              >
                ✓
              </motion.span>
              {p.fix}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

/** Three engagement models with prices shown up front. */
export function PricingSection({ look = "plain" }: { look?: Look }) {
  return (
    <section id="pricing" className="mx-auto max-w-[1320px] scroll-mt-20 px-4 py-24 md:px-8 md:py-32">
      <Head look={look} label="Pricing" title={<>Clear scope. Clear price. <span className="text-wu-red">No lock-in.</span></>} />
      <div className="grid gap-5 md:grid-cols-3">
        {tiers.map((t, i) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-8%" }}
            transition={{ duration: 0.8, delay: i * 0.1, ease }}
            className={cn("relative overflow-hidden p-px", look === "glass" ? "rounded-3xl" : "rounded-2xl", t.featured ? "" : "bg-white/10")}
          >
            {t.featured && <span className="beam-border absolute inset-[-50%]" aria-hidden />}
            <div className={cn("relative flex h-full flex-col bg-[#131313] p-8", look === "glass" ? "rounded-[23px]" : "rounded-[15px]")}>
              <div className="flex items-center justify-between gap-3">
                <h3 className="font-display text-3xl">{t.name}</h3>
                {t.featured && <span className="rounded-full bg-wu-red px-3 py-1 text-xs font-semibold">Most chosen</span>}
              </div>
              <p className="mt-6 font-display text-4xl">{t.price}</p>
              <p className="mt-1 text-sm text-white/55">{t.note}</p>
              <ul className="mt-8 grid flex-1 gap-3 text-white/80">
                {t.items.map((it) => (
                  <li key={it} className="flex gap-3">
                    <span className="text-wu-red" aria-hidden>
                      ✓
                    </span>
                    {it}
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className={cn(
                  "mt-8 flex min-h-12 items-center justify-center rounded-full px-6 py-3 text-center font-semibold leading-tight transition-colors",
                  t.featured ? "bg-wu-red hover:bg-white hover:text-black" : "border border-white/20 hover:bg-white/10",
                )}
              >
                Discuss the {t.name} plan
              </a>
            </div>
          </motion.div>
        ))}
      </div>
      <p className="mt-6 text-sm text-white/50">Prices exclude ad spend. Ad accounts, data and creative always stay in your name.</p>
    </section>
  );
}

/** Accordion with the questions mid-sized buyers ask on the first call. */
export function FaqSection({ look = "plain" }: { look?: Look }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="mx-auto grid max-w-[1320px] gap-10 px-4 py-24 md:px-8 md:py-32 lg:grid-cols-[.8fr_1.2fr]">
      <Head look={look} label="FAQ" title="Questions we hear on every first call." />
      <div className="grid gap-3">
        {faq.map((f, i) => {
          const isOpen = open === i;
          return (
            <div key={f.q} className={cn(surface[look], "overflow-hidden transition-colors", isOpen && "border-wu-red/50")}>
              <button
                onClick={() => setOpen(isOpen ? null : i)}
                aria-expanded={isOpen}
                className="flex min-h-16 w-full items-center justify-between gap-6 px-6 py-4 text-left text-lg font-semibold"
              >
                {f.q}
                <motion.span animate={{ rotate: isOpen ? 45 : 0 }} className="grid size-8 shrink-0 place-items-center rounded-full border border-white/20 text-xl leading-none" aria-hidden>
                  +
                </motion.span>
              </button>
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.p
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease }}
                    className="overflow-hidden px-6 pb-5 text-white/70"
                  >
                    {f.a}
                  </motion.p>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </section>
  );
}

/** Text input with a visible label (never placeholder-only). */
export function LabeledInput({
  id,
  label,
  className,
  labelClassName,
  ...rest
}: { id: string; label: string; labelClassName?: string } & InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div className="grid gap-2">
      <label htmlFor={id} className={cn("text-sm font-medium text-white/70", labelClassName)}>
        {label}
      </label>
      <input id={id} className={className} {...rest} />
    </div>
  );
}
