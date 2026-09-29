"use client";

/*
 * v2 — AWAKEN. A scroll-driven story for business buyers: the eye opens as you scroll,
 * a pinned "growth engine" dashboard animates with scroll, then proof, offers and contact.
 */

import { AnimatePresence, motion, useMotionValueEvent, useScroll, useSpring, useTransform } from "motion/react";
import type { MotionValue } from "motion/react";
import { useRef, useState } from "react";
import type { FormEvent } from "react";
import QrEye from "@/components/shared/QrEye";
import { Magnetic, Marquee, Reveal } from "@/components/shared/fx";
import { budgetOptions, contact, nav, services, testimonials } from "@/lib/content";
import { isEmail, submitLead } from "@/lib/leads";
import { openChat } from "@/lib/chat-bus";
import { cn } from "@/lib/utils";

const ease = [0.16, 1, 0.3, 1] as const;

/** Clamped linear map from [a, b] to [from, to]. A function transform, so it is never
 *  handed to the browser's scroll timeline (which extrapolated past the range). */
const ramp = (a: number, b: number, from: number, to: number) => (v: number) => {
  const k = Math.min(1, Math.max(0, (v - a) / (b - a)));
  return from + (to - from) * k;
};

/* ---------------- nav + progress ---------------- */

export function AwNav() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-wu-black/70 backdrop-blur-xl">
      <motion.div style={{ scaleX }} className="h-0.5 origin-left bg-wu-red shadow-[0_0_12px_#e40613]" />
      <div className="mx-auto flex h-16 max-w-[1320px] items-center gap-8 px-4 md:px-8">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="brand/logo-horizontal-light.png" alt="WakeUP Marketing" className="h-7 w-auto" />
        <nav className="ml-auto hidden gap-7 text-sm text-white/65 md:flex" aria-label="Primary">
          {nav.map((l) => (
            <a key={l.href} href={l.href} className="transition-colors hover:text-white">
              {l.label}
            </a>
          ))}
        </nav>
        <a href="#contact" className="ml-auto rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-black transition-colors hover:bg-wu-red hover:text-white md:ml-0">
          Book a call
        </a>
      </div>
    </header>
  );
}

/* ---------------- hero: the eye opens ---------------- */

export function AwHero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress: p } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const lidTop = useTransform(p, (v) => `${ramp(0, 0.42, 0, -102)(v)}%`);
  const lidBot = useTransform(p, (v) => `${ramp(0, 0.42, 0, 102)(v)}%`);
  const asleep = useTransform(p, ramp(0, 0.14, 1, 0));
  const asleepY = useTransform(p, ramp(0, 0.14, 0, -40));
  const eyeScale = useTransform(p, (v) => (v < 0.5 ? ramp(0, 0.5, 0.7, 1)(v) : ramp(0.5, 1, 1, 1.08)(v)));
  const headOp = useTransform(p, ramp(0.34, 0.5, 0, 1));
  const headY = useTransform(p, ramp(0.34, 0.5, 40, 0));
  const subOp = useTransform(p, ramp(0.46, 0.6, 0, 1));
  const glow = useTransform(p, ramp(0.2, 0.5, 0, 1));

  return (
    <section ref={ref} id="top" className="relative h-[240vh]">
      <div className="sticky top-0 flex h-[100svh] items-center justify-center overflow-hidden">
        <motion.div style={{ opacity: glow }} className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(228,6,19,.35),transparent_60%)]" aria-hidden />
        <motion.div style={{ scale: eyeScale }} className="absolute top-[9%] w-[min(620px,88vw)]">
          <QrEye className="drop-shadow-[0_0_40px_rgba(228,6,19,.45)]" />
        </motion.div>

        <div className="relative z-10 mt-[36vh] px-4 text-center">
          <motion.h1 style={{ opacity: headOp, y: headY }} className="font-display text-[clamp(48px,8vw,128px)] leading-[0.9]">
            Wake up your <span className="text-wu-red">growth.</span>
          </motion.h1>
          <motion.div style={{ opacity: subOp }} className="mx-auto mt-6 max-w-[600px]">
            <p className="text-lg text-white/65">
              We turn marketing spend into measurable pipeline for ambitious businesses: strategy, creative and performance under one roof.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Magnetic strength={0.2}>
                <a href="#contact" className="flex h-14 items-center justify-center rounded-full bg-wu-red px-8 font-semibold shadow-[0_14px_40px_-10px_rgba(228,6,19,.9)]">
                  Get a free growth audit →
                </a>
              </Magnetic>
              <button onClick={() => openChat()} className="h-14 rounded-full border border-white/20 px-8 font-semibold transition-colors hover:bg-white/10">
                Ask WakeUP AI
              </button>
            </div>
          </motion.div>
        </div>

        {/* eyelids */}
        <motion.div style={{ y: lidTop }} className="absolute inset-x-[-10%] top-0 z-20 h-1/2 rounded-b-[50%] border-b-2 border-wu-red/70 bg-wu-black shadow-[0_20px_60px_-10px_rgba(228,6,19,.45)]" aria-hidden />
        <motion.div style={{ y: lidBot }} className="absolute inset-x-[-10%] bottom-0 z-20 h-1/2 rounded-t-[50%] border-t-2 border-wu-red/70 bg-wu-black" aria-hidden />

        <motion.div style={{ opacity: asleep, y: asleepY }} className="absolute inset-0 z-30 grid place-items-center px-4 text-center">
          <div>
            <p className="hud-label text-wu-red">WakeUP Marketing</p>
            <p className="mt-5 font-display text-[clamp(44px,7.4vw,120px)] leading-[0.92]">
              Your market
              <br />
              is asleep.
            </p>
            <motion.p
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.8, repeat: Infinity }}
              className="hud-label mt-10 text-white/50"
            >
              Scroll to wake it up ↓
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ---------------- growth engine: pinned, scroll-driven dashboard ---------------- */

const STEPS = [
  { k: "Attract", t: "We put your brand in front of the right buyers with targeted ads, content and SEO.", kpi: "Reach" },
  { k: "Engage", t: "Creative that stops the scroll and makes them care, tested every week.", kpi: "CTR" },
  { k: "Convert", t: "Landing pages and funnels built to turn attention into qualified leads.", kpi: "Leads" },
  { k: "Grow", t: "Automation and reporting that compound results month after month.", kpi: "Revenue" },
];

function Kpi({ label, p, to, fmt, i }: { label: string; p: MotionValue<number>; to: number; fmt: (n: number) => string; i: number }) {
  const v = useTransform(p, ramp(i * 0.2, i * 0.2 + 0.35, 0, to));
  const [text, setText] = useState(fmt(0));
  useMotionValueEvent(v, "change", (n) => setText(fmt(n)));
  return (
    <div className="rounded-xl border border-white/10 bg-white/[.03] p-4">
      <p className="hud-label !text-[9.5px] text-white/45">{label}</p>
      <p className="mt-1 font-display text-2xl tabular-nums md:text-3xl">{text}</p>
    </div>
  );
}

function FunnelBar({ p, i, label, w }: { p: MotionValue<number>; i: number; label: string; w: number }) {
  const width = useTransform(p, (v) => `${ramp(i * 0.18, i * 0.18 + 0.3, 0, w)(v)}%`);
  return (
    <div className="grid grid-cols-[90px_1fr] items-center gap-3">
      <span className="text-xs text-white/55">{label}</span>
      <div className="h-7 overflow-hidden rounded-md bg-white/[.04]">
        <motion.div style={{ width }} className="h-full rounded-md bg-gradient-to-r from-wu-red-deep to-wu-red shadow-[0_0_20px_-4px_#e40613]" />
      </div>
    </div>
  );
}

export function AwEngine() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress: p } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const [step, setStep] = useState(0);
  useMotionValueEvent(p, "change", (n) => setStep(Math.min(3, Math.floor(n * 4.2))));
  const path = useTransform(p, ramp(0.05, 0.9, 0, 1));
  const d = "M0 150 C 50 148, 80 140, 120 130 S 190 118, 230 100 S 300 80, 340 60 S 410 30, 460 12";

  return (
    <section ref={ref} id="services" className="relative h-[420vh]">
      <div className="sticky top-0 flex h-[100svh] items-center overflow-hidden">
        <div className="mx-auto grid w-full max-w-[1320px] items-center gap-6 px-4 md:px-8 lg:grid-cols-[.9fr_1.1fr] lg:gap-10">
          <div>
            <p className="hud-label text-wu-red">The growth engine</p>
            <h2 className="mt-3 font-display text-[clamp(32px,4.6vw,68px)] leading-[0.95] lg:mt-4">One system. Four gears.</h2>
            <p className="mt-4 text-white/65 lg:hidden">
              <span className="font-mono text-xs text-wu-red">0{step + 1}</span> <strong className="text-white">{STEPS[step].k}.</strong> {STEPS[step].t}
            </p>
            <ol className="mt-10 hidden gap-2 lg:grid">
              {STEPS.map((s, i) => (
                <li
                  key={s.k}
                  className={cn(
                    "rounded-2xl border p-5 transition-all duration-500",
                    i === step ? "border-wu-red/60 bg-wu-red/[.08]" : "border-transparent opacity-40",
                  )}
                >
                  <div className="flex items-baseline gap-4">
                    <span className="font-mono text-xs text-wu-red">0{i + 1}</span>
                    <h3 className="font-display text-2xl">{s.k}</h3>
                  </div>
                  <AnimatePresence initial={false}>
                    {i === step && (
                      <motion.p
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden pl-9 pt-2 text-white/65"
                      >
                        {s.t}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </li>
              ))}
            </ol>
          </div>

          <div className="rounded-3xl border border-white/10 bg-gradient-to-b from-[#181818] to-wu-ink p-5 shadow-[0_40px_120px_-40px_rgba(228,6,19,.5)] md:p-7">
            <div className="flex items-center justify-between">
              <p className="text-sm font-semibold">Client dashboard · last 90 days</p>
              <span className="hud-label flex items-center gap-2 !text-[9.5px] text-white/50">
                <i className="size-1.5 animate-blink rounded-full bg-wu-amber" /> Live
              </span>
            </div>
            <div className="mt-5 grid grid-cols-2 gap-3 md:grid-cols-4">
              <Kpi label="Reach" p={p} to={2.4} fmt={(n) => `${n.toFixed(1)}M`} i={0} />
              <Kpi label="CTR" p={p} to={3.8} fmt={(n) => `${n.toFixed(1)}%`} i={1} />
              <Kpi label="Leads" p={p} to={1240} fmt={(n) => Math.round(n).toLocaleString("en-US")} i={2} />
              <Kpi label="Revenue" p={p} to={212} fmt={(n) => `+${Math.round(n)}%`} i={3} />
            </div>
            <div className="mt-6 grid gap-2.5">
              <FunnelBar p={p} i={0} label="Impressions" w={100} />
              <FunnelBar p={p} i={1} label="Clicks" w={72} />
              <FunnelBar p={p} i={2} label="Leads" w={46} />
              <FunnelBar p={p} i={3} label="Customers" w={28} />
            </div>
            <div className="mt-6 rounded-xl border border-white/10 bg-black/30 p-4">
              <p className="text-xs text-white/50">Revenue from marketing</p>
              <svg viewBox="0 0 460 160" className="mt-2 h-32 w-full" preserveAspectRatio="none" aria-hidden>
                {[40, 80, 120].map((y) => (
                  <line key={y} x1="0" x2="460" y1={y} y2={y} stroke="rgba(255,255,255,.06)" />
                ))}
                <motion.path d={d} fill="none" stroke="#e40613" strokeWidth="3" style={{ pathLength: path }} className="drop-shadow-[0_0_8px_#e40613]" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- services: cards flip in ---------------- */

export function AwServices() {
  return (
    <section className="mx-auto max-w-[1320px] px-4 py-28 md:px-8">
      <Reveal className="max-w-[760px]">
        <p className="hud-label text-wu-red">What we do</p>
        <h2 className="mt-4 font-display text-[clamp(36px,4.6vw,68px)] leading-[0.95]">Everything your growth needs, under one roof.</h2>
      </Reveal>
      <div className="mt-14 grid gap-4 [perspective:1200px] sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s, i) => (
          <motion.article
            key={s.code}
            initial={{ opacity: 0, rotateX: 55, y: 60 }}
            whileInView={{ opacity: 1, rotateX: 0, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 1, delay: (i % 3) * 0.12, ease }}
            whileHover={{ y: -6 }}
            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-[#141414] p-7"
          >
            <span className="absolute inset-x-0 bottom-0 h-0.5 origin-left scale-x-0 bg-wu-red transition-transform duration-500 group-hover:scale-x-100" />
            <div className="flex items-center justify-between">
              <motion.span
                whileHover={{ rotate: 90 }}
                className="grid size-11 place-items-center rounded-xl border border-wu-red/50 font-mono text-sm text-wu-red"
              >
                0{i + 1}
              </motion.span>
              <span className="text-white/30 transition-transform duration-500 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-white">↗</span>
            </div>
            <h3 className="mt-8 font-display text-2xl">{s.title}</h3>
            <p className="mt-3 text-white/60">{s.text}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

/* ---------------- results: before / after slider ---------------- */

const ROWS = [
  ["Cost per lead", "$84", "$41"],
  ["Monthly qualified leads", "62", "187"],
  ["Return on ad spend", "1.6x", "4.8x"],
  ["Website conversion rate", "1.1%", "3.4%"],
];

export function AwResults() {
  const [pos, setPos] = useState(50);
  return (
    <section id="work" className="mx-auto max-w-[1320px] px-4 py-28 md:px-8">
      <Reveal className="flex flex-wrap items-end justify-between gap-6">
        <div>
          <p className="hud-label text-wu-red">Results</p>
          <h2 className="mt-4 font-display text-[clamp(36px,4.6vw,68px)] leading-[0.95]">Before and after 90 days.</h2>
        </div>
        <p className="max-w-[360px] text-white/55">Drag the handle. Typical results from a performance engagement (example figures).</p>
      </Reveal>
      <Reveal delay={0.1} className="mt-12">
        <div className="relative select-none overflow-hidden rounded-3xl border border-white/10">
          <Table rows={ROWS.map((r) => [r[0], r[1]])} title="Before WakeUP" tone="before" />
          <div className="absolute inset-0" style={{ clipPath: `inset(0 0 0 ${pos}%)` }}>
            <Table rows={ROWS.map((r) => [r[0], r[2]])} title="After 90 days" tone="after" />
          </div>
          <div className="pointer-events-none absolute inset-y-0 w-0.5 bg-white shadow-[0_0_20px_#fff]" style={{ left: `${pos}%` }}>
            <span className="absolute left-1/2 top-1/2 grid size-11 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-white text-black shadow-xl">⇆</span>
          </div>
          <input
            id="aw-compare"
            type="range"
            min={0}
            max={100}
            value={pos}
            onChange={(e) => setPos(Number(e.target.value))}
            aria-label="Compare before and after"
            className="absolute inset-0 h-full w-full cursor-ew-resize opacity-0"
          />
        </div>
      </Reveal>
    </section>
  );
}

function Table({ rows, title, tone }: { rows: string[][]; title: string; tone: "before" | "after" }) {
  return (
    <div className={cn("p-6 md:p-10", tone === "before" ? "bg-[#171717]" : "bg-gradient-to-br from-wu-red to-wu-red-deep")}>
      <p className={cn("hud-label", tone === "before" ? "text-white/45" : "text-white/85")}>{title}</p>
      <div className="mt-6 grid gap-px overflow-hidden rounded-xl sm:grid-cols-2 lg:grid-cols-4">
        {rows.map(([k, v]) => (
          <div key={k} className={cn("p-5", tone === "before" ? "bg-white/[.03]" : "bg-black/15")}>
            <p className="text-sm opacity-70">{k}</p>
            <p className="mt-2 font-display text-5xl md:text-6xl">{v}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ---------------- proof marquee ---------------- */

export function AwProof() {
  const industries = ["E-commerce", "Hospitality", "Real estate", "SaaS", "Healthcare", "Education", "Retail", "Finance"];
  return (
    <section className="py-16">
      <p className="hud-label mb-6 text-center text-white/40">Trusted by teams across industries</p>
      <div className="[mask-image:linear-gradient(90deg,transparent,#000_15%,#000_85%,transparent)]">
        <Marquee duration={30}>
          {industries.map((n) => (
            <span key={n} className="mx-8 font-display text-3xl text-white/25 transition-colors hover:text-white">
              {n}
            </span>
          ))}
        </Marquee>
      </div>
      <div className="mx-auto mt-16 grid max-w-[1320px] gap-4 px-4 md:grid-cols-3 md:px-8">
        {testimonials.map((t, i) => (
          <Reveal key={i} delay={i * 0.1}>
            <figure className="h-full rounded-2xl border border-white/10 bg-[#141414] p-7">
              <p className="text-wu-red">★★★★★</p>
              <blockquote className="mt-4 text-lg leading-snug">“{t.quote}”</blockquote>
              <figcaption className="mt-5 text-sm text-white/50">
                {t.name}, {t.company}
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* ---------------- engagement models ---------------- */

const TIERS = [
  { name: "Sprint", price: "from $2k", note: "one-off, 4–6 weeks", items: ["Growth audit & strategy", "Campaign or landing page launch", "Tracking set-up", "Handover playbook"] },
  { name: "Growth", price: "$5k–15k / mo", note: "most chosen", items: ["Full-funnel paid media", "Weekly creative testing", "Landing pages & CRO", "Monthly strategy review"], featured: true },
  { name: "Partner", price: "custom", note: "for scaling teams", items: ["Dedicated growth squad", "Brand, content & performance", "Automation & CRM", "Quarterly roadmap with KPIs"] },
];

export function AwTiers() {
  return (
    <section id="process" className="mx-auto max-w-[1320px] px-4 py-28 md:px-8">
      <Reveal className="text-center">
        <p className="hud-label text-wu-red">Ways to work together</p>
        <h2 className="mx-auto mt-4 max-w-[760px] font-display text-[clamp(36px,4.6vw,68px)] leading-[0.95]">Clear scope. Clear KPIs. No surprises.</h2>
      </Reveal>
      <div className="mt-14 grid gap-5 md:grid-cols-3">
        {TIERS.map((t, i) => (
          <Reveal key={t.name} delay={i * 0.1}>
            <div className={cn("relative h-full overflow-hidden rounded-3xl p-px", t.featured ? "" : "bg-white/10")}>
              {t.featured && <span className="beam-border absolute inset-[-50%]" aria-hidden />}
              <div className="relative flex h-full flex-col rounded-[23px] bg-[#131313] p-8">
                <div className="flex items-center justify-between">
                  <h3 className="font-display text-3xl">{t.name}</h3>
                  {t.featured && <span className="rounded-full bg-wu-red px-3 py-1 text-xs font-semibold">Most chosen</span>}
                </div>
                <p className="mt-6 font-display text-4xl">{t.price}</p>
                <p className="mt-1 text-sm text-white/50">{t.note}</p>
                <ul className="mt-8 grid flex-1 gap-3 text-white/75">
                  {t.items.map((it) => (
                    <li key={it} className="flex gap-3">
                      <span className="text-wu-red">✓</span>
                      {it}
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className={cn(
                    "mt-8 flex h-12 items-center justify-center rounded-full font-semibold transition-colors",
                    t.featured ? "bg-wu-red hover:bg-white hover:text-black" : "border border-white/20 hover:bg-white/10",
                  )}
                >
                  Talk to us
                </a>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* ---------------- contact ---------------- */

export function AwContact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [budget, setBudget] = useState(budgetOptions[2]);
  const [err, setErr] = useState("");
  const [done, setDone] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);
  const submit = async (e: FormEvent) => {
    e.preventDefault();
    if (name.trim().length < 2 || !isEmail(email)) return setErr("Add your name and a valid work email.");
    setErr("");
    setBusy(true);
    const { id } = await submitLead({ name, email, company, budget, source: "form" });
    setBusy(false);
    setDone(id);
  };
  const field = "h-14 w-full rounded-xl border border-white/10 bg-white/[.04] px-4 outline-none transition-colors placeholder:text-white/35 focus:border-wu-red";
  return (
    <section id="contact" className="relative overflow-hidden py-28">
      <motion.div
        className="absolute left-1/2 top-1/2 -z-10 size-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[conic-gradient(from_0deg,transparent,rgba(228,6,19,.35),transparent_40%)] blur-3xl"
        animate={{ rotate: 360 }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
        aria-hidden
      />
      <div className="mx-auto grid max-w-[1120px] gap-12 px-4 md:grid-cols-2 md:px-8">
        <Reveal>
          <p className="hud-label text-wu-red">Free growth audit</p>
          <h2 className="mt-4 font-display text-[clamp(40px,5vw,76px)] leading-[0.92]">Let’s find your next 100 customers.</h2>
          <p className="mt-6 text-lg text-white/65">Tell us about your business. Within one business day you get a short audit of your ads, site and funnel, plus three quick wins.</p>
          <p className="mt-8 font-mono text-sm text-white/60">{contact.email}</p>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="rounded-3xl border border-white/10 bg-[#121212]/90 p-6 backdrop-blur-xl md:p-8">
            {done ? (
              <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="py-10 text-center" role="status">
                <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", delay: 0.1 }} className="mx-auto grid size-16 place-items-center rounded-full bg-wu-red text-2xl">
                  ✓
                </motion.div>
                <p className="mt-6 font-display text-4xl">Request received</p>
                <p className="mt-2 text-white/60">
                  Reference {done}. We’ll email {email} within one business day.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={submit} noValidate className="grid gap-3">
                <input id="aw-name" aria-label="Name" placeholder="Your name" value={name} onChange={(e) => setName(e.target.value)} className={field} />
                <input id="aw-email" type="email" aria-label="Work email" placeholder="Work email" value={email} onChange={(e) => setEmail(e.target.value)} className={field} />
                <input id="aw-company" aria-label="Company" placeholder="Company / website" value={company} onChange={(e) => setCompany(e.target.value)} className={field} />
                <p className="mt-2 text-sm text-white/55">Monthly marketing budget</p>
                <div className="grid grid-cols-2 gap-2">
                  {budgetOptions.map((b) => (
                    <button
                      key={b}
                      type="button"
                      aria-pressed={budget === b}
                      onClick={() => setBudget(b)}
                      className={cn("h-11 rounded-xl border text-sm transition-colors", budget === b ? "border-wu-red bg-wu-red/15" : "border-white/10 hover:bg-white/5")}
                    >
                      {b}
                    </button>
                  ))}
                </div>
                {err && <p className="text-sm text-[#ff6b73]">{err}</p>}
                <button disabled={busy} className="mt-3 h-14 rounded-xl bg-wu-red font-semibold shadow-[0_14px_40px_-10px_rgba(228,6,19,.9)] transition-transform hover:scale-[1.01] disabled:opacity-70">
                  {busy ? "Sending…" : "Get my free audit →"}
                </button>
              </form>
            )}
          </div>
        </Reveal>
      </div>
      <footer className="mx-auto mt-24 flex max-w-[1320px] flex-wrap items-center justify-between gap-4 px-4 pb-20 text-sm text-white/45 md:px-8">
        <span>© WakeUP Marketing</span>
        <span className="flex gap-5">
          {contact.socials.map((s) => (
            <a key={s.label} href={s.href} className="hover:text-white">
              {s.label}
            </a>
          ))}
        </span>
      </footer>
    </section>
  );
}

