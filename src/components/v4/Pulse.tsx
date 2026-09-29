"use client";

/*
 * v4 — PULSE. A particle field re-forms behind the content as you scroll
 * (eye → UP → rising chart → target → eye). Text arrives word by word.
 */

import dynamic from "next/dynamic";
import { motion } from "motion/react";
import type { ReactNode } from "react";
import { useState } from "react";
import type { FormEvent } from "react";
import { Magnetic, Marquee, NumberTicker } from "@/components/shared/fx";
import { budgetOptions, hero, cases, contact, nav, process, serviceOptions, services, stats, testimonials } from "@/lib/content";
import { FaqSection, LabeledInput, PricingSection } from "@/components/shared/Sections";
import { isEmail, submitLead } from "@/lib/leads";
import { openChat } from "@/lib/chat-bus";
import { cn } from "@/lib/utils";
import type { Shape } from "./ParticleField";

const ParticleField = dynamic(() => import("./ParticleField"), { ssr: false });
const ease = [0.16, 1, 0.3, 1] as const;

function Words({ text, className, delay = 0, as: Tag = "h2" }: { text: string; className?: string; delay?: number; as?: "h1" | "h2" | "p" }) {
  const M = motion[Tag];
  return (
    <M
      className={className}
      initial="hidden"
      whileInView="shown"
      viewport={{ once: true, margin: "-10%" }}
      transition={{ staggerChildren: 0.06, delayChildren: delay }}
      aria-label={text}
    >
      {text.split(" ").map((w, i) => (
        <motion.span
          key={i}
          aria-hidden
          className="inline-block whitespace-pre"
          variants={{
            hidden: { opacity: 0, y: "40%", filter: "blur(10px)" },
            shown: { opacity: 1, y: "0%", filter: "blur(0px)", transition: { duration: 0.8, ease } },
          }}
        >
          {w.startsWith("*") ? <span className="text-wu-red">{w.slice(1)}</span> : w}{" "}
        </motion.span>
      ))}
    </M>
  );
}

function Section({ shape, id, children, className }: { shape: Shape; id?: string; children: ReactNode; className?: string }) {
  return (
    <section id={id} data-shape={shape} className={cn("relative flex min-h-[100svh] items-center py-24", className)}>
      <div className="mx-auto w-full max-w-[1320px] px-4 md:px-8">
        <div className="max-w-[620px]">{children}</div>
      </div>
    </section>
  );
}

function Label({ children }: { children: ReactNode }) {
  return (
    <motion.p
      initial={{ opacity: 0, x: -12 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="hud-label mb-5 flex items-center gap-3 text-wu-red"
    >
      <span className="h-px w-8 bg-wu-red" /> {children}
    </motion.p>
  );
}

export function PulsePage() {
  return (
    <div className="relative isolate min-h-screen bg-wu-black text-white">
      <ParticleField />
      <PulseNav />
      <main>
        <Section shape="eye" id="top">
          <Label>{hero.eyebrow}</Label>
          <Words as="h1" text="Marketing that shows up in your *revenue." className="font-display text-[clamp(44px,5.6vw,88px)] leading-[0.92]" />
          <Words as="p" delay={0.5} text={hero.sub} className="mt-7 max-w-[520px] text-lg text-white/65" />
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1, duration: 0.8, ease }} className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Magnetic strength={0.25}>
              <a href="#contact" className="group relative flex h-14 items-center justify-center gap-3 overflow-hidden rounded-full bg-wu-red px-8 font-semibold shadow-[0_14px_40px_-10px_rgba(228,6,19,.9)]">
                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                {hero.primaryCta} →
              </a>
            </Magnetic>
            <button onClick={() => openChat()} className="h-14 rounded-full border border-white/20 bg-black/30 px-8 font-semibold backdrop-blur transition-colors hover:bg-white/10">
              Ask WakeUP AI
            </button>
          </motion.div>
          <motion.ul initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.3 }} className="mt-12 flex flex-wrap gap-x-6 gap-y-2 text-sm text-white/70" aria-label="Who we work with">
            {hero.fit.map((f) => (
              <li key={f} className="flex items-center gap-2">
                <span className="text-wu-red" aria-hidden>
                  ✓
                </span>
                {f}
              </li>
            ))}
          </motion.ul>
        </Section>

        <Section shape="up" id="services">
          <Label>What we do</Label>
          <Words text="Six ways we move your numbers *UP." className="font-display text-[clamp(38px,4.8vw,72px)] leading-[0.95]" />
          <ul className="mt-10 border-t border-white/10">
            {services.map((s, i) => (
              <motion.li
                key={s.code}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-5%" }}
                transition={{ delay: i * 0.07, duration: 0.7, ease }}
                className="group relative overflow-hidden border-b border-white/10"
              >
                <span className="absolute inset-0 origin-left scale-x-0 bg-gradient-to-r from-wu-red/25 to-transparent transition-transform duration-500 group-hover:scale-x-100" aria-hidden />
                <div className="relative flex items-center gap-5 py-5">
                  <span className="font-mono text-xs text-wu-red">0{i + 1}</span>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold tracking-tight">{s.title}</h3>
                    <p className="max-h-0 overflow-hidden text-sm text-white/60 transition-all duration-500 group-hover:mt-1 group-hover:max-h-20">{s.text}</p>
                  </div>
                  <span className="text-white/30 transition-all duration-500 group-hover:rotate-45 group-hover:text-white">↗</span>
                </div>
              </motion.li>
            ))}
          </ul>
        </Section>

        <Section shape="bars" id="work">
          <Label>Results</Label>
          <Words text="Numbers your CFO will *like." className="font-display text-[clamp(38px,4.8vw,72px)] leading-[0.95]" />
          <div className="mt-10 grid grid-cols-2 gap-3">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6, ease }}
                className="rounded-2xl border border-white/10 bg-black/40 p-5 backdrop-blur-md"
              >
                <p className="font-display text-5xl">
                  <NumberTicker value={s.value} decimals={s.decimals} />
                  <span className="text-wu-red">{s.suffix}</span>
                </p>
                <p className="mt-2 text-sm text-white/55">{s.label}</p>
              </motion.div>
            ))}
          </div>
          <div className="mt-6 grid gap-2">
            {cases.map((c, i) => (
              <motion.div
                key={c.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + i * 0.1 }}
                className="flex items-center justify-between gap-4 rounded-xl border border-white/10 bg-black/40 px-5 py-4 backdrop-blur-md"
              >
                <div>
                  <p className="font-semibold">{c.title}</p>
                  <p className="text-sm text-white/50">{c.client}</p>
                </div>
                <p className="font-display text-2xl text-wu-red">{c.metric}</p>
              </motion.div>
            ))}
          </div>
        </Section>

        <Section shape="target" id="process">
          <Label>How we work</Label>
          <Words text="Aim. Launch. Measure. *Scale." className="font-display text-[clamp(38px,4.8vw,72px)] leading-[0.95]" />
          <ol className="relative mt-10 grid gap-8 pl-8">
            <motion.span
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 1.4, ease }}
              className="absolute bottom-2 left-[5px] top-2 w-0.5 origin-top bg-gradient-to-b from-wu-red to-wu-red/10"
              aria-hidden
            />
            {process.map((s, i) => (
              <motion.li
                key={s.step}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + i * 0.15, duration: 0.7, ease }}
                className="relative"
              >
                <span className="absolute -left-8 top-1.5 size-3 rounded-full bg-wu-red shadow-[0_0_12px_#e40613]" />
                <h3 className="font-display text-2xl">
                  {s.step} · {s.title}
                </h3>
                <p className="mt-1 text-white/60">{s.text}</p>
              </motion.li>
            ))}
          </ol>
        </Section>

        <section data-shape="target" className="overflow-hidden py-16">
          <div className="[mask-image:linear-gradient(90deg,transparent,#000_12%,#000_88%,transparent)]">
            <Marquee duration={55}>
              {[...testimonials, ...testimonials].map((t, i) => (
                <figure key={i} className="mr-5 w-[380px] shrink-0 rounded-2xl border border-white/10 bg-black/50 p-6 backdrop-blur-md">
                  <blockquote className="text-[17px] leading-snug">“{t.quote}”</blockquote>
                  <figcaption className="mt-4 text-sm text-white/50">
                    {t.name}, {t.company}
                  </figcaption>
                </figure>
              ))}
            </Marquee>
          </div>
        </section>

        <div data-shape="bars">
          <PricingSection />
        </div>
        <div data-shape="target">
          <FaqSection />
        </div>
        <PulseContact />
      </main>
    </div>
  );
}

function PulseNav() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-wu-black/60 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-[1320px] items-center gap-8 px-4 md:px-8">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="brand/logo-horizontal-light.png" alt="WakeUP Marketing" className="h-7 w-auto" />
        <nav className="ml-auto hidden gap-7 text-sm text-white/65 md:flex" aria-label="Primary">
          {nav.map((l) => (
            <a key={l.href} href={l.href} className="relative inline-flex min-h-11 items-center transition-colors after:absolute after:-bottom-1 after:left-0 after:h-px after:w-full after:origin-right after:scale-x-0 after:bg-wu-red after:transition-transform hover:text-white hover:after:origin-left hover:after:scale-x-100">
              {l.label}
            </a>
          ))}
        </nav>
        <a href="#contact" className="ml-auto inline-flex h-11 items-center rounded-full bg-wu-red px-5 text-sm font-semibold transition-colors hover:bg-white hover:text-black md:ml-0">
          Book a call
        </a>
      </div>
    </header>
  );
}

function PulseContact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [need, setNeed] = useState(serviceOptions[0]);
  const [budget, setBudget] = useState(budgetOptions[1]);
  const [done, setDone] = useState<string | null>(null);
  const [err, setErr] = useState("");
  const submit = async (e: FormEvent) => {
    e.preventDefault();
    if (name.trim().length < 2 || !isEmail(email)) return setErr("Add your name and a valid work email.");
    setErr("");
    const { id } = await submitLead({ name, email, services: [need], budget, source: "form" });
    setDone(id);
  };
  const field = "h-13 w-full rounded-xl border border-white/10 bg-black/50 px-4 py-3.5 outline-none backdrop-blur transition-colors placeholder:text-white/35 focus:border-wu-red";
  return (
    <Section shape="eye" id="contact">
      <Label>Free growth audit</Label>
      <Words text="Ready to wake your market *up?" className="font-display text-[clamp(38px,4.8vw,72px)] leading-[0.95]" />
      <p className="mt-5 text-lg text-white/60">Tell us where you are. We reply within one business day with a short audit and three quick wins.</p>
      {done ? (
        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="mt-8 rounded-2xl border border-wu-red/50 bg-wu-red/10 p-6" role="status">
          <p className="font-display text-3xl">Request received.</p>
          <p className="mt-2 text-white/65">
            Reference {done}. We’ll reply to {email} soon.
          </p>
        </motion.div>
      ) : (
        <form onSubmit={submit} noValidate className="mt-8 grid gap-3">
          <div className="grid gap-3 sm:grid-cols-2">
            <LabeledInput id="p-name" label="Your name" autoComplete="name" value={name} onChange={(e) => setName(e.target.value)} className={field} />
            <LabeledInput id="p-email" label="Work email" type="email" autoComplete="email" value={email} onChange={(e) => setEmail(e.target.value)} className={field} />
          </div>
          <div className="flex flex-wrap gap-2">
            {serviceOptions.slice(0, 6).map((s) => (
              <button key={s} type="button" aria-pressed={need === s} onClick={() => setNeed(s)} className={cn("min-h-11 rounded-full border px-4 py-2 text-sm transition-colors", need === s ? "border-wu-red bg-wu-red" : "border-white/15 bg-black/40 hover:bg-white/10")}>
                {s}
              </button>
            ))}
          </div>
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
            {budgetOptions.map((b) => (
              <button key={b} type="button" aria-pressed={budget === b} onClick={() => setBudget(b)} className={cn("h-11 rounded-xl border text-xs transition-colors", budget === b ? "border-white bg-white text-black" : "border-white/10 bg-black/40")}>
                {b}
              </button>
            ))}
          </div>
          {err && <p className="text-sm text-[#ff6b73]">{err}</p>}
          <button className="mt-2 h-14 rounded-xl bg-wu-red font-semibold shadow-[0_14px_40px_-10px_rgba(228,6,19,.9)] transition-transform hover:scale-[1.01]">Get my free audit →</button>
        </form>
      )}
      <p className="mt-12 flex flex-wrap gap-5 text-sm text-white/45">
        <span>{contact.email}</span>
        {contact.socials.map((s) => (
          <a key={s.label} href={s.href} className="inline-flex min-h-11 items-center hover:text-white">
            {s.label}
          </a>
        ))}
      </p>
    </Section>
  );
}
