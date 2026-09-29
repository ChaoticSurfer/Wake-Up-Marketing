"use client";

import { motion, useScroll, useTransform } from "motion/react";
import type { MotionValue } from "motion/react";
import { useRef } from "react";
import { cases, manifesto, marquee, process, stats, testimonials } from "@/lib/content";
import { Marquee, NumberTicker, Reveal, Scramble, Spotlight } from "@/components/shared/fx";

export function Ticker() {
  return (
    <div className="relative z-10 -my-2 rotate-[-1.5deg] scale-[1.03] bg-wu-red py-4 shadow-[0_24px_80px_-20px_rgba(228,6,19,.6)]">
      <Marquee duration={32}>
        {marquee.map((m) => (
          <span key={m} className="flex items-center gap-7 pr-7 font-display text-[clamp(22px,3vw,40px)] uppercase whitespace-nowrap">
            {m}
            <span className="text-[0.55em] text-wu-black">✕</span>
          </span>
        ))}
      </Marquee>
    </div>
  );
}

function Word({ word, i, total, progress }: { word: string; i: number; total: number; progress: MotionValue<number> }) {
  const em = word.startsWith("*");
  const start = i / total;
  const opacity = useTransform(progress, [start * 0.9, start * 0.9 + 0.08], [0.14, 1]);
  return (
    <motion.span style={{ opacity }} className={em ? "text-wu-red" : undefined}>
      {word.replace(/^\*/, "")}{" "}
    </motion.span>
  );
}

export function Manifesto() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 80%", "end 45%"] });
  const words = manifesto.split(" ");
  return (
    <section className="relative py-32 md:py-44">
      <div ref={ref} className="mx-auto max-w-[1320px] px-4 md:px-8">
        <p className="hud-label text-white/50">
          <span className="text-wu-red">[00]</span> Manifesto
        </p>
        <p className="mt-8 font-display text-[clamp(30px,4.6vw,68px)] leading-[1.06]" aria-label={manifesto.replace(/\*/g, "")}>
          {words.map((w, i) => (
            <Word key={i} word={w} i={i} total={words.length} progress={scrollYProgress} />
          ))}
        </p>
      </div>
    </section>
  );
}

export function Stats() {
  return (
    <section className="border-y border-white/10 bg-[linear-gradient(90deg,transparent,rgba(228,6,19,.07),transparent)]">
      <div className="mx-auto grid max-w-[1320px] grid-cols-2 px-4 md:grid-cols-4 md:px-8">
        {stats.map((s, i) => (
          <div
            key={s.label}
            className="relative border-white/10 py-10 pl-5 max-md:[&:nth-child(-n+2)]:border-b md:py-14 [&:not(:first-child)]:border-l max-md:[&:nth-child(3)]:border-l-0 max-md:[&:nth-child(3)]:pl-0 first:pl-0"
          >
            <span className="hud-label absolute right-3 top-3 text-xs text-white/25">0{i + 1}</span>
            <p className="font-display text-[clamp(44px,6vw,92px)]">
              <NumberTicker value={s.value} decimals={s.decimals} />
              <span className="text-wu-red">{s.suffix}</span>
            </p>
            <p className="hud-label mt-3 text-white/50">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export function Process() {
  const ref = useRef<HTMLOListElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 85%", "end 55%"] });
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);
  return (
    <section id="process" className="py-28 md:py-36">
      <div className="mx-auto max-w-[1320px] px-4 md:px-8">
        <Reveal>
          <p className="hud-label text-white/50">
            <span className="text-wu-red">[02]</span> Process
          </p>
          <h2 className="mt-4 max-w-[900px] font-display text-[clamp(38px,5.4vw,80px)]">
            Four steps from <span className="text-wu-red">silent</span> to sold out.
          </h2>
        </Reveal>
        <ol ref={ref} className="relative mt-16 grid gap-10 md:grid-cols-4 md:gap-6">
          <span className="absolute inset-x-0 top-[9px] hidden h-0.5 bg-white/10 md:block" aria-hidden>
            <motion.span style={{ scaleX }} className="absolute inset-0 origin-left bg-wu-red shadow-[0_0_14px_#e40613]" />
          </span>
          {process.map((s, i) => (
            <ProcessStep key={s.step} i={i} step={s} progress={scrollYProgress} />
          ))}
        </ol>
      </div>
    </section>
  );
}

function ProcessStep({
  i,
  step,
  progress,
}: {
  i: number;
  step: (typeof process)[number];
  progress: MotionValue<number>;
}) {
  const on = useTransform(progress, [i / 4, i / 4 + 0.05], [0, 1]);
  const bg = useTransform(on, [0, 1], ["#111111", "#e40613"]);
  const border = useTransform(on, [0, 1], ["rgba(255,255,255,.25)", "#e40613"]);
  const numColor = useTransform(on, [0, 1], ["rgba(255,255,255,.22)", "#e40613"]);
  return (
    <li className="relative pt-12">
      <motion.span
        style={{ backgroundColor: bg, borderColor: border }}
        className="absolute left-0 top-0 size-5 rotate-45 border-2 max-md:hidden"
        aria-hidden
      />
      <motion.span style={{ WebkitTextStrokeColor: numColor }} className="block font-display text-7xl text-transparent [-webkit-text-stroke:1.5px]">
        {step.step}
      </motion.span>
      <h3 className="mt-4 font-display text-3xl uppercase">
        <Scramble text={step.title} />
      </h3>
      <p className="mt-3 text-[15px] leading-relaxed text-white/55">{step.text}</p>
    </li>
  );
}

export function Work() {
  return (
    <section id="work" className="py-28 md:py-36">
      <div className="mx-auto max-w-[1320px] px-4 md:px-8">
        <Reveal className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="hud-label text-white/50">
              <span className="text-wu-red">[03]</span> Selected work
            </p>
            <h2 className="mt-4 font-display text-[clamp(38px,5.4vw,80px)]">
              Results, not <span className="text-wu-red">noise.</span>
            </h2>
          </div>
          <p className="hud-label text-white/40">3 of 40+ case files</p>
        </Reveal>

        <div className="grid gap-4 md:grid-cols-[1.3fr_1fr] md:grid-rows-2">
          {cases.map((c, i) => (
            <Reveal key={c.id} delay={i * 0.08} className={i === 0 ? "md:row-span-2" : undefined}>
              <Spotlight
                as="article"
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-wu-ink transition-transform duration-500 hover:-translate-y-1"
              >
                <div
                  className="relative grid min-h-[240px] flex-1 place-items-center overflow-hidden"
                  style={{
                    background:
                      "repeating-linear-gradient(90deg,rgba(255,255,255,.035) 0 1px,transparent 1px 26px),repeating-linear-gradient(0deg,rgba(255,255,255,.035) 0 1px,transparent 1px 26px)," +
                      (i === 2
                        ? "linear-gradient(160deg,#e40613,#6d020a)"
                        : i === 1
                          ? "radial-gradient(circle at 80% 70%,rgba(228,6,19,.45),transparent 55%),linear-gradient(160deg,#222,#0b0b0b)"
                          : "radial-gradient(circle at 25% 20%,rgba(228,6,19,.55),transparent 55%),linear-gradient(160deg,#1b1b1b,#0a0a0a)"),
                  }}
                >
                  <span className="absolute inset-x-0 h-[30%] animate-scan border-b border-white/25 bg-gradient-to-b from-transparent to-white/[.05]" aria-hidden />
                  <span className="hud-label absolute left-4 top-4 text-xs text-white/60">{c.id}</span>
                  <span className="hud-label absolute right-4 top-4 text-xs text-white/60">{c.tags.join(" · ")}</span>
                  <span
                    className={`font-display text-transparent transition-all duration-500 [-webkit-text-stroke:1.5px_rgba(255,255,255,.85)] group-hover:scale-105 group-hover:text-white ${
                      i === 0 ? "text-[clamp(84px,12vw,200px)]" : "text-[clamp(64px,8vw,130px)]"
                    }`}
                  >
                    {c.metric}
                  </span>
                </div>
                <div className="grid gap-1.5 border-t border-white/10 bg-wu-black p-6">
                  <p className="hud-label text-xs text-white/45">{c.client}</p>
                  <h3 className="text-2xl font-semibold tracking-tight">{c.title}</h3>
                  <p className="text-white/55">
                    <strong className="font-display text-xl text-wu-red">{c.metric}</strong> {c.metricLabel}
                  </p>
                </div>
              </Spotlight>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Voices() {
  const row = [...testimonials, ...testimonials];
  return (
    <section className="overflow-hidden pb-28 md:pb-36">
      <div className="mx-auto mb-10 max-w-[1320px] px-4 md:px-8">
        <p className="hud-label text-white/50">
          <span className="text-wu-red">[—]</span> Client signal
        </p>
      </div>
      <div className="flex flex-col gap-4 [mask-image:linear-gradient(90deg,transparent,#000_10%,#000_90%,transparent)]">
        {[false, true].map((rev) => (
          <Marquee key={String(rev)} reverse={rev} duration={60}>
            {row.map((t, i) => (
              <figure key={i} className="mr-4 w-[380px] shrink-0 rounded-2xl border border-white/10 bg-gradient-to-b from-[#161616] to-wu-ink p-6">
                <span className="font-display text-5xl leading-[0.5] text-wu-red">“</span>
                <blockquote className="mt-2 text-[17px] leading-snug text-white/85">{t.quote}</blockquote>
                <figcaption className="hud-label mt-5 text-xs text-white/40">
                  {t.name} — {t.company}
                </figcaption>
              </figure>
            ))}
          </Marquee>
        ))}
      </div>
    </section>
  );
}
