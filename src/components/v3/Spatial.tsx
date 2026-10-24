"use client";

/*
 * v3 — SPATIAL. Dark glass panels floating over a live red shader, a 3D QR eyeball,
 * tilt cards and a pinned horizontal process track.
 */

import dynamic from "next/dynamic";
import { motion, useMotionValue, useScroll, useSpring, useTransform } from "motion/react";
import type { ReactNode } from "react";
import { useEffect, useRef, useState } from "react";
import type { FormEvent } from "react";
import { Marquee, NumberTicker, Reveal } from "@/components/shared/fx";
import { budgetOptions, cases, contact, hero, nav, process, serviceOptions, services, stats, testimonials } from "@/lib/content";
import { LabeledInput } from "@/components/shared/Sections";
import { isEmail, LEAD_FAILED_MESSAGE, submitLead } from "@/lib/leads";
import { openChat } from "@/lib/chat-bus";
import { cn } from "@/lib/utils";

const ShaderBg = dynamic(() => import("./ShaderBg"), { ssr: false });
const Eye3D = dynamic(() => import("./Eye3D"), { ssr: false });

const glass =
  "border border-white/10 bg-white/[.045] shadow-[inset_0_1px_0_rgba(255,255,255,.1),0_30px_80px_-30px_rgba(0,0,0,.8)] backdrop-blur-2xl";

export function SpBackground() {
  return (
    <div className="fixed inset-0 -z-10 bg-wu-black" aria-hidden>
      <ShaderBg />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,rgba(0,0,0,.55))]" />
    </div>
  );
}

export function SpNav() {
  return (
    <header className="fixed inset-x-0 top-4 z-50 flex justify-center px-4">
      <div className={cn(glass, "flex h-14 w-full max-w-[980px] items-center gap-6 rounded-full pl-5 pr-2")}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="brand/logo-horizontal-light.png" alt="WakeUP Marketing" className="h-7 w-auto" />
        <nav className="ml-auto hidden gap-1 md:flex" aria-label="Primary">
          {nav.map((l) => (
            <a key={l.href} href={l.href} className="inline-flex h-11 items-center rounded-full px-4 text-sm text-white/70 transition-colors hover:bg-white/10 hover:text-white">
              {l.label}
            </a>
          ))}
        </nav>
        <a href="#contact" className="ml-auto flex h-11 items-center rounded-full bg-white px-5 text-sm font-semibold text-black transition-colors hover:bg-wu-red hover:text-white md:ml-0">
          Let’s talk
        </a>
      </div>
    </header>
  );
}

export function SpHero() {
  return (
    <section id="top" className="relative flex min-h-[100svh] flex-col items-center justify-center overflow-hidden px-4 pb-16 pt-28 text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
        className="relative -mb-10 -mt-6 aspect-square w-[min(430px,86vw)]"
      >
        <div className="absolute inset-[12%] rounded-full bg-wu-red/25 blur-[80px]" aria-hidden />
        <Eye3D className="absolute inset-0" />
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className={cn(glass, "hud-label mb-6 inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs text-white/80")}
      >
        <i className="size-1.5 rounded-full bg-wu-amber shadow-[0_0_8px_#ffa800]" /> {hero.eyebrow}
      </motion.p>
      <motion.h1
        initial={{ opacity: 0, y: 30, filter: "blur(12px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ delay: 0.6, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-[1100px] font-display text-[clamp(40px,6vw,96px)] leading-[0.92]"
      >
        Marketing from the future,
        <br />
        <span className="text-wu-red">measured in revenue.</span>
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="mt-7 max-w-[560px] text-lg text-white/65"
      >
        {hero.sub}
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.15, duration: 0.8 }}
        className="mt-9 flex w-full flex-col justify-center gap-3 sm:w-auto sm:flex-row"
      >
        <a href="#contact" className="flex h-14 items-center justify-center gap-2 rounded-full bg-wu-red px-8 font-semibold shadow-[0_0_40px_-6px_rgba(228,6,19,.9)] transition-transform hover:scale-[1.03]">
          {hero.primaryCta} →
        </a>
        <button onClick={() => openChat()} className={cn(glass, "flex h-14 items-center justify-center gap-2 rounded-full px-8 font-semibold transition-colors hover:bg-white/10")}>
          Ask WakeUP AI
        </button>
      </motion.div>
    </section>
  );
}

function Tilt({ children, className }: { children: ReactNode; className?: string }) {
  const rx = useSpring(useMotionValue(0), { stiffness: 200, damping: 18 });
  const ry = useSpring(useMotionValue(0), { stiffness: 200, damping: 18 });
  const gx = useMotionValue(50);
  const gy = useMotionValue(50);
  const glare = useTransform([gx, gy], ([x, y]) => `radial-gradient(400px circle at ${x}% ${y}%, rgba(255,255,255,.14), transparent 50%)`);
  return (
    <motion.div
      style={{ rotateX: rx, rotateY: ry, transformPerspective: 900 }}
      onPointerMove={(e) => {
        if (e.pointerType !== "mouse") return;
        const r = e.currentTarget.getBoundingClientRect();
        const px = (e.clientX - r.left) / r.width;
        const py = (e.clientY - r.top) / r.height;
        ry.set((px - 0.5) * 14);
        rx.set(-(py - 0.5) * 14);
        gx.set(px * 100);
        gy.set(py * 100);
      }}
      onPointerLeave={() => {
        rx.set(0);
        ry.set(0);
      }}
      className={cn("relative", className)}
    >
      {children}
      <motion.span style={{ background: glare }} className="pointer-events-none absolute inset-0 rounded-[inherit]" aria-hidden />
    </motion.div>
  );
}

const ICONS = ["◆", "▲", "●", "■", "◢", "✦"];

export function SpServices() {
  return (
    <section id="services" className="mx-auto max-w-[1240px] px-4 py-28 md:px-8">
      <Reveal className="mx-auto mb-14 max-w-[720px] text-center">
        <p className="hud-label text-wu-red">Services</p>
        <h2 className="mt-4 font-display text-[clamp(38px,5.2vw,76px)]">One team. Every channel.</h2>
      </Reveal>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s, i) => (
          <Reveal key={s.code} delay={(i % 3) * 0.08}>
            <Tilt className={cn(glass, "h-full rounded-3xl p-7")}>
              <div className="flex items-center justify-between">
                <span className="grid size-12 place-items-center rounded-2xl bg-gradient-to-br from-wu-red to-wu-red-deep text-lg shadow-[0_10px_30px_-8px_rgba(228,6,19,.9)]">
                  {ICONS[i]}
                </span>
                <span className="hud-label text-xs text-white/40">{s.code}</span>
              </div>
              <h3 className="mt-10 font-display text-2xl leading-none">{s.title}</h3>
              <p className="mt-3 text-white/60">{s.text}</p>
              <div className="mt-6 flex flex-wrap gap-1.5">
                {s.tags.map((t) => (
                  <span key={t} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
                    {t}
                  </span>
                ))}
              </div>
            </Tilt>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export function SpStats() {
  return (
    <section className="mx-auto max-w-[1240px] px-4 md:px-8">
      <div className={cn(glass, "grid grid-cols-2 overflow-hidden rounded-[32px] md:grid-cols-4")}>
        {stats.map((s) => (
          <div key={s.label} className="border-white/10 p-8 text-center [&:not(:last-child)]:border-r max-md:[&:nth-child(2)]:border-r-0 max-md:[&:nth-child(-n+2)]:border-b">
            <p className="font-display text-[clamp(44px,5vw,76px)]">
              <NumberTicker value={s.value} decimals={s.decimals} />
              <span className="text-wu-red">{s.suffix}</span>
            </p>
            <p className="mt-2 text-sm text-white/55">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export function SpProcess() {
  const ref = useRef<HTMLElement>(null);
  const track = useRef<HTMLOListElement>(null);
  const [dist, setDist] = useState(0);
  useEffect(() => {
    const measure = () => track.current && setDist(Math.max(0, track.current.scrollWidth - window.innerWidth + 32));
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const x = useTransform(scrollYProgress, [0.05, 0.95], [0, -dist]);
  return (
    <section id="process" ref={ref} className="relative h-[320vh]">
      <div className="sticky top-0 flex h-[100svh] flex-col justify-center overflow-hidden">
        <div className="mx-auto mb-10 w-full max-w-[1240px] px-4 md:px-8">
          <p className="hud-label text-wu-red">Process</p>
          <h2 className="mt-4 font-display text-[clamp(38px,5.2vw,76px)]">From first call to live in 30 days.</h2>
        </div>
        <motion.ol ref={track} style={{ x }} className="flex w-max gap-6 pl-[max(16px,calc((100vw-1240px)/2+32px))]">
          {process.map((s) => (
            <li key={s.step} className={cn(glass, "flex h-[min(52vh,440px)] w-[min(78vw,520px)] shrink-0 flex-col justify-between rounded-[32px] p-8")}>
              <span className="font-display text-[120px] leading-[0.8] text-transparent [-webkit-text-stroke:1.5px_rgba(255,255,255,.6)]">{s.step}</span>
              <div>
                <h3 className="font-display text-4xl">{s.title}</h3>
                <p className="mt-3 max-w-[380px] text-lg text-white/65">{s.text}</p>
              </div>
            </li>
          ))}
          <li className="flex h-[min(52vh,440px)] w-[min(78vw,520px)] shrink-0 flex-col justify-between rounded-[32px] bg-wu-red p-8 shadow-[0_0_80px_-20px_rgba(228,6,19,.9)]">
            <span className="hud-label text-white/80">Next step</span>
            <div>
              <h3 className="font-display text-5xl leading-[0.95]">Start with a free growth audit.</h3>
              <a href="#contact" className="mt-6 inline-flex h-12 items-center rounded-full bg-black px-6 font-semibold">
                Get mine →
              </a>
            </div>
          </li>
        </motion.ol>
      </div>
    </section>
  );
}

export function SpWork() {
  return (
    <section id="work" className="mx-auto max-w-[1240px] px-4 py-28 md:px-8">
      <Reveal className="mb-14 flex flex-wrap items-end justify-between gap-6">
        <div>
          <p className="hud-label text-wu-red">Selected work</p>
          <h2 className="mt-4 font-display text-[clamp(38px,5.2vw,76px)]">Results, not noise.</h2>
        </div>
      </Reveal>
      <div className="grid gap-5 md:grid-cols-3">
        {cases.map((c, i) => (
          <Reveal key={c.id} delay={i * 0.1}>
            <Tilt className={cn(glass, "group h-full overflow-hidden rounded-3xl")}>
              <div className="relative grid aspect-[4/3] place-items-center overflow-hidden bg-[radial-gradient(circle_at_30%_20%,rgba(228,6,19,.55),transparent_60%)]">
                <span className="font-display text-[clamp(48px,4.6vw,80px)] drop-shadow-[0_0_30px_rgba(228,6,19,.6)] transition-transform duration-700 group-hover:scale-110">{c.metric}</span>
              </div>
              <div className="border-t border-white/10 p-6">
                <p className="text-sm text-white/50">{c.client}</p>
                <h3 className="mt-1 text-xl font-semibold">{c.title}</h3>
                <p className="mt-1 text-sm text-white/60">{c.metricLabel}</p>
              </div>
            </Tilt>
          </Reveal>
        ))}
      </div>
      <div className="mt-16 [mask-image:linear-gradient(90deg,transparent,#000_15%,#000_85%,transparent)]">
        <Marquee duration={50}>
          {[...testimonials, ...testimonials].map((t, i) => (
            <figure key={i} className={cn(glass, "mr-5 w-[400px] shrink-0 rounded-3xl p-6")}>
              <blockquote className="text-lg leading-snug">“{t.quote}”</blockquote>
              <figcaption className="mt-4 text-sm text-white/50">
                {t.name}, {t.company}
              </figcaption>
            </figure>
          ))}
        </Marquee>
      </div>
    </section>
  );
}

export function SpContact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [picked, setPicked] = useState<string[]>([serviceOptions[0]]);
  const [budget, setBudget] = useState(budgetOptions[1]);
  const [done, setDone] = useState<string | null>(null);
  const [err, setErr] = useState("");
  const submit = async (e: FormEvent) => {
    e.preventDefault();
    if (name.trim().length < 2 || !isEmail(email)) return setErr("Add your name and a valid email.");
    setErr("");
    try {
      const { id } = await submitLead({ name, email, services: picked, budget, source: "form" });
      setDone(id);
    } catch (error) {
      console.error(error);
      setErr(LEAD_FAILED_MESSAGE);
    }
  };
  const field = "h-13 w-full rounded-2xl border border-white/10 bg-black/30 px-5 py-3.5 text-base outline-none transition-colors placeholder:text-white/35 focus:border-wu-red focus:bg-black/50";
  return (
    <section id="contact" className="mx-auto max-w-[1240px] px-4 py-28 md:px-8">
      <div className={cn(glass, "grid gap-10 overflow-hidden rounded-[36px] p-6 md:grid-cols-2 md:p-12")}>
        <div>
          <p className="hud-label text-wu-red">Start a project</p>
          <h2 className="mt-4 font-display text-[clamp(40px,5vw,76px)]">Ready to wake up?</h2>
          <p className="mt-5 max-w-[420px] text-lg text-white/65">A free audit of your ads, site and funnel within one business day, with three quick wins you can act on.</p>
          <p className="mt-10 font-mono text-sm text-white/70">{contact.email}</p>
        </div>
        {done ? (
          <div className="grid place-items-center rounded-3xl bg-wu-red/15 p-8 text-center" role="status">
            <p className="font-display text-5xl">Received.</p>
            <p className="mt-2 text-white/70">
              Request {done}. We’ll reply to {email} soon.
            </p>
          </div>
        ) : (
          <form onSubmit={submit} noValidate className="grid gap-4">
            <LabeledInput id="s-name" label="Your name" autoComplete="name" value={name} onChange={(e) => setName(e.target.value)} className={field} />
            <LabeledInput id="s-email" label="Work email" type="email" autoComplete="email" value={email} onChange={(e) => setEmail(e.target.value)} className={field} />
            <div className="flex flex-wrap gap-2">
              {serviceOptions.slice(0, 6).map((s) => {
                const on = picked.includes(s);
                return (
                  <button
                    type="button"
                    key={s}
                    aria-pressed={on}
                    onClick={() => setPicked(on ? picked.filter((x) => x !== s) : [...picked, s])}
                    className={cn("min-h-11 rounded-full border px-4 py-2 text-sm transition-colors", on ? "border-wu-red bg-wu-red" : "border-white/15 bg-white/5 hover:bg-white/10")}
                  >
                    {s}
                  </button>
                );
              })}
            </div>
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
              {budgetOptions.map((b) => (
                <button
                  type="button"
                  key={b}
                  aria-pressed={budget === b}
                  onClick={() => setBudget(b)}
                  className={cn("min-h-11 rounded-xl border px-2 py-2.5 text-xs", budget === b ? "border-white bg-white text-black" : "border-white/10 bg-white/5")}
                >
                  {b}
                </button>
              ))}
            </div>
            {err && <p className="text-sm text-[#ff6b73]">{err}</p>}
            <button className="mt-2 h-14 rounded-2xl bg-wu-red font-semibold shadow-[0_0_40px_-8px_rgba(228,6,19,.9)] transition-transform hover:scale-[1.01]">Send request →</button>
          </form>
        )}
      </div>
      <footer className="flex flex-wrap items-center justify-between gap-4 py-12 pb-24 text-sm text-white/50">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="brand/logo-horizontal-light.png" alt="WakeUP Marketing" className="h-7 w-auto" />
        <div className="flex gap-5">
          {contact.socials.map((s) => (
            <a key={s.label} href={s.href} className="inline-flex min-h-11 items-center hover:text-white">
              {s.label}
            </a>
          ))}
        </div>
      </footer>
    </section>
  );
}
