"use client";

/*
 * v2 — EDITORIAL. Swiss-editorial kinetic direction on a white ground:
 * oversized Swiss 721 type, strict grid rules, red floods, scroll-driven type motion.
 */

import { motion, useScroll, useTransform } from "motion/react";
import type { MotionValue } from "motion/react";
import { useRef, useState } from "react";
import type { FormEvent } from "react";
import QrEye, { EYE_LIGHT } from "@/components/shared/QrEye";
import { Marquee, NumberTicker } from "@/components/shared/fx";
import { budgetOptions, cases, contact, manifesto, nav, process, serviceOptions, services, stats, testimonials } from "@/lib/content";
import { isEmail, submitLead } from "@/lib/leads";
import { openChat } from "@/lib/chat-bus";
import { cn } from "@/lib/utils";

const ease = [0.76, 0, 0.24, 1] as const;

function Letters({ text, delay = 0, className }: { text: string; delay?: number; className?: string }) {
  return (
    <span className={cn("inline-flex overflow-hidden", className)} aria-label={text}>
      {text.split("").map((ch, i) => (
        <motion.span
          key={i}
          aria-hidden
          className="inline-block"
          initial={{ y: "105%" }}
          animate={{ y: 0 }}
          transition={{ duration: 1, delay: delay + i * 0.045, ease }}
        >
          {ch === " " ? " " : ch}
        </motion.span>
      ))}
    </span>
  );
}

function Rule({ label, index }: { label: string; index: string }) {
  return (
    <div className="flex items-center justify-between border-t-2 border-black pt-3 font-mono text-xs uppercase tracking-[0.14em]">
      <span>{label}</span>
      <span className="text-wu-red">{index}</span>
    </div>
  );
}

export function EdNav() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b-2 border-black bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-[1440px] items-center justify-between px-4 text-black md:px-8">
        <a href="#top" className="font-display text-xl tracking-tight">
          WakeUP<span className="align-super text-[10px]">®</span>
        </a>
        <nav className="hidden gap-8 font-mono text-xs uppercase tracking-[0.14em] md:flex" aria-label="Primary">
          {nav.map((l) => (
            <a key={l.href} href={l.href} className="hover:underline hover:underline-offset-4">
              {l.label}
            </a>
          ))}
        </nav>
        <a href="#contact" className="bg-wu-red px-4 py-2 font-mono text-xs uppercase tracking-[0.14em] text-white transition-colors hover:bg-black">
          Start a project ↗
        </a>
      </div>
    </header>
  );
}

export function EdHero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const x1 = useTransform(scrollYProgress, [0, 1], ["0%", "-18%"]);
  const x2 = useTransform(scrollYProgress, [0, 1], ["0%", "14%"]);
  return (
    <section ref={ref} id="top" className="relative overflow-hidden pt-24">
      <div className="mx-auto max-w-[1440px] px-4 md:px-8">
        <div className="grid grid-cols-12 gap-4 border-b-2 border-black pb-4 font-mono text-[11px] uppercase tracking-[0.14em]">
          <span className="col-span-6 md:col-span-3">Marketing agency</span>
          <span className="col-span-3 hidden md:block">Brand · Performance · Content</span>
          <span className="col-span-3 hidden md:block">Index 2026</span>
          <span className="col-span-6 text-right md:col-span-3">
            <span className="text-wu-red">●</span> Taking new clients
          </span>
        </div>

        <h1 className="font-display leading-[0.8] tracking-[-0.05em]">
          <motion.span style={{ x: x1 }} className="block text-[clamp(88px,23vw,380px)]">
            <Letters text="WAKE" />
          </motion.span>
          <motion.span style={{ x: x2 }} className="flex items-end justify-end gap-[3vw] text-[clamp(88px,23vw,380px)] text-wu-red">
            <motion.span
              initial={{ scale: 0, rotate: -20 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 1, delay: 0.7, ease }}
              className="mb-[0.12em] hidden w-[26vw] max-w-[420px] bg-wu-red p-[1.4vw] md:block"
            >
              <span className="block bg-white p-[1vw]">
                <QrEye palette={EYE_LIGHT} beam={false} />
              </span>
            </motion.span>
            <Letters text="UP." delay={0.25} />
          </motion.span>
        </h1>

        <div className="grid gap-8 border-t-2 border-black py-8 md:grid-cols-12">
          <p className="text-2xl leading-tight tracking-tight md:col-span-6 md:text-3xl">
            Your audience is asleep. We build brand, performance and content marketing that wakes it up and turns attention into
            revenue.
          </p>
          <div className="flex flex-wrap items-end gap-3 md:col-span-6 md:justify-end">
            <a href="#contact" className="group flex h-14 w-full items-center justify-center gap-3 bg-black px-7 font-semibold text-white transition-colors hover:bg-wu-red sm:w-auto">
              Get a free growth audit <span className="transition-transform group-hover:translate-x-1">→</span>
            </a>
            <button onClick={() => openChat()} className="flex h-14 w-full items-center justify-center gap-3 border-2 border-black px-7 font-semibold transition-colors hover:bg-black hover:text-white sm:w-auto">
              Ask WakeUP AI
            </button>
          </div>
        </div>
      </div>
      <div className="border-y-2 border-black bg-wu-red py-3 text-white">
        <Marquee duration={28}>
          {["Brand strategy", "Performance ads", "Social media", "Websites", "SEO", "Analytics"].map((m) => (
            <span key={m} className="flex items-center gap-8 pr-8 font-display text-4xl uppercase tracking-tight whitespace-nowrap">
              {m} <span className="text-black">●</span>
            </span>
          ))}
        </Marquee>
      </div>
    </section>
  );
}

function ManifestoWord({ w, i, n, p }: { w: string; i: number; n: number; p: MotionValue<number> }) {
  const c = useTransform(p, [i / n, i / n + 0.04], ["rgba(17,17,17,.12)", w.startsWith("*") ? "#e40613" : "#111111"]);
  return <motion.span style={{ color: c }}>{w.replace(/^\*/, "")} </motion.span>;
}

export function EdManifesto() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 75%", "end 50%"] });
  const words = manifesto.split(" ");
  return (
    <section className="mx-auto max-w-[1440px] px-4 py-28 md:px-8 md:py-40">
      <Rule label="Manifesto" index="(00)" />
      <div ref={ref} className="grid gap-8 pt-10 md:grid-cols-12">
        <p className="font-mono text-xs uppercase tracking-[0.14em] md:col-span-3">Why we exist</p>
        <p className="font-display text-[clamp(32px,4.4vw,72px)] leading-[1] tracking-[-0.03em] md:col-span-9">
          {words.map((w, i) => (
            <ManifestoWord key={i} w={w} i={i} n={words.length} p={scrollYProgress} />
          ))}
        </p>
      </div>
    </section>
  );
}

export function EdServices() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="services" className="mx-auto max-w-[1440px] px-4 pb-28 md:px-8 md:pb-40">
      <Rule label="Services" index="(01)" />
      <h2 className="py-10 font-display text-[clamp(44px,7vw,120px)] leading-[0.88] tracking-[-0.04em]">
        Six ways to be <span className="text-wu-red">seen.</span>
      </h2>
      <ul className="border-b-2 border-black">
        {services.map((s, i) => (
          <li key={s.code} className="border-t-2 border-black">
            <button
              onClick={() => setOpen(open === i ? null : i)}
              onMouseEnter={() => setOpen(i)}
              aria-expanded={open === i}
              className="group relative grid w-full grid-cols-12 items-center gap-4 overflow-hidden py-6 text-left md:py-8"
            >
              <span className="absolute inset-0 origin-left scale-x-0 bg-wu-red transition-transform duration-500 ease-[cubic-bezier(.76,0,.24,1)] group-hover:scale-x-100" aria-hidden />
              <span className="relative col-span-2 font-mono text-sm group-hover:text-white md:col-span-1">0{i + 1}</span>
              <span className="relative col-span-9 font-display text-[clamp(28px,4.2vw,68px)] leading-none tracking-[-0.03em] transition-colors group-hover:text-white md:col-span-7">
                {s.title}
              </span>
              <span className="relative col-span-3 hidden font-mono text-xs uppercase tracking-[0.12em] group-hover:text-white md:block">{s.tags.join(" / ")}</span>
              <span className="relative col-span-1 text-right text-3xl transition-all duration-500 group-hover:rotate-45 group-hover:text-white">↗</span>
            </button>
            <motion.div initial={false} animate={{ height: open === i ? "auto" : 0 }} transition={{ duration: 0.5, ease }} className="overflow-hidden">
              <p className="grid grid-cols-12 gap-4 pb-8">
                <span className="col-span-12 max-w-[640px] text-xl leading-snug md:col-span-7 md:col-start-2">{s.text}</span>
              </p>
            </motion.div>
          </li>
        ))}
      </ul>
    </section>
  );
}

export function EdStats() {
  return (
    <section className="bg-wu-red text-white">
      <div className="mx-auto max-w-[1440px] px-4 py-24 md:px-8">
        <div className="flex items-center justify-between border-t-2 border-white pt-3 font-mono text-xs uppercase tracking-[0.14em]">
          <span>By the numbers</span>
          <span>(02)</span>
        </div>
        <div className="grid grid-cols-2 gap-y-12 pt-12 md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="border-l-2 border-white/40 pl-4">
              <p className="font-display text-[clamp(56px,8vw,140px)] leading-[0.85] tracking-[-0.05em]">
                <NumberTicker value={s.value} decimals={s.decimals} />
                {s.suffix}
              </p>
              <p className="mt-4 font-mono text-xs uppercase tracking-[0.14em] text-white/80">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function EdProcess() {
  return (
    <section id="process" className="mx-auto max-w-[1440px] px-4 py-28 md:px-8 md:py-40">
      <Rule label="Process" index="(03)" />
      <div className="grid gap-px bg-black md:grid-cols-4">
        {process.map((s, i) => (
          <motion.div
            key={s.step}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.8, delay: i * 0.1, ease }}
            className="group bg-white pb-8 pt-10 md:pr-8 [&:not(:first-child)]:md:pl-6"
          >
            <p className="font-display text-[120px] leading-[0.8] tracking-[-0.06em] text-black transition-colors group-hover:text-wu-red">{s.step}</p>
            <h3 className="mt-8 font-display text-3xl uppercase tracking-tight">{s.title}</h3>
            <p className="mt-3 text-lg leading-snug text-black/65">{s.text}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export function EdWork() {
  return (
    <section id="work" className="bg-wu-black text-white">
      <div className="mx-auto max-w-[1440px] px-4 py-28 md:px-8 md:py-40">
        <div className="flex items-center justify-between border-t-2 border-white pt-3 font-mono text-xs uppercase tracking-[0.14em]">
          <span>Selected work</span>
          <span className="text-wu-red">(04)</span>
        </div>
        <h2 className="py-10 font-display text-[clamp(44px,7vw,120px)] leading-[0.88] tracking-[-0.04em]">
          Results, not <span className="text-wu-red">noise.</span>
        </h2>
        <motion.div
          className="grid gap-4 md:grid-cols-3"
          initial="hidden"
          whileInView="shown"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ staggerChildren: 0.12 }}
        >
          {cases.map((c, i) => (
            <motion.article
              key={c.id}
              variants={{ hidden: { clipPath: "inset(100% 0% 0% 0%)" }, shown: { clipPath: "inset(0% 0% 0% 0%)" } }}
              transition={{ duration: 1.1, ease }}
              className={cn("group flex min-h-[460px] flex-col justify-between p-6", i === 1 ? "bg-wu-red" : "bg-white text-black")}
            >
              <div className="flex justify-between font-mono text-xs uppercase tracking-[0.14em]">
                <span>{c.id.replace("_", " ")}</span>
                <span>{c.tags.join(" / ")}</span>
              </div>
              <p className="font-display text-[clamp(72px,8vw,140px)] leading-[0.8] tracking-[-0.06em] transition-transform duration-700 group-hover:-translate-y-2">
                {c.metric}
              </p>
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.14em] opacity-60">{c.client}</p>
                <h3 className="mt-2 font-display text-3xl leading-none tracking-tight">{c.title}</h3>
                <p className="mt-2 opacity-70">{c.metricLabel}</p>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export function EdVoices() {
  const [i, setI] = useState(0);
  const t = testimonials[i];
  return (
    <section className="mx-auto max-w-[1440px] px-4 py-28 md:px-8 md:py-40">
      <Rule label="Clients say" index="(05)" />
      <div className="grid gap-8 pt-10 md:grid-cols-12">
        <div className="flex gap-2 md:col-span-3">
          {testimonials.map((_, k) => (
            <button
              key={k}
              onClick={() => setI(k)}
              aria-label={`Quote ${k + 1}`}
              className={cn("grid size-12 place-items-center border-2 border-black font-mono text-sm transition-colors", k === i ? "bg-black text-white" : "hover:bg-black/5")}
            >
              0{k + 1}
            </button>
          ))}
        </div>
        <motion.figure key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease }} className="md:col-span-9">
          <blockquote className="font-display text-[clamp(32px,4.4vw,72px)] leading-[1] tracking-[-0.03em]">
            <span className="text-wu-red">“</span>
            {t.quote}
            <span className="text-wu-red">”</span>
          </blockquote>
          <figcaption className="mt-8 font-mono text-xs uppercase tracking-[0.14em]">
            {t.name} — {t.company}
          </figcaption>
        </motion.figure>
      </div>
    </section>
  );
}

export function EdContact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");
  const [picked, setPicked] = useState<string[]>(["Branding"]);
  const [budget, setBudget] = useState(budgetOptions[1]);
  const [err, setErr] = useState("");
  const [done, setDone] = useState<string | null>(null);
  const [sending, setSending] = useState(false);

  const submit = async (e: FormEvent) => {
    e.preventDefault();
    if (name.trim().length < 2 || !isEmail(email)) {
      setErr("Add your name and a valid email so we can reply.");
      return;
    }
    setErr("");
    setSending(true);
    const { id } = await submitLead({ name, email, services: picked, budget, message: msg, source: "form" });
    setSending(false);
    setDone(id);
  };

  const input =
    "w-full border-0 border-b-2 border-white/60 bg-transparent py-3 text-2xl text-white placeholder:text-white/50 outline-none focus:border-white md:text-3xl";

  return (
    <section id="contact" className="bg-wu-red text-white">
      <div className="mx-auto max-w-[1440px] px-4 py-28 md:px-8 md:py-36">
        <div className="flex items-center justify-between border-t-2 border-white pt-3 font-mono text-xs uppercase tracking-[0.14em]">
          <span>Start a project</span>
          <span>(06)</span>
        </div>
        <div className="grid gap-12 pt-10 md:grid-cols-12">
          <h2 className="font-display text-[clamp(56px,8vw,150px)] leading-[0.82] tracking-[-0.05em] md:col-span-5">
            Let’s wake it up.
          </h2>
          {done ? (
            <div className="md:col-span-7" role="status">
              <p className="font-mono text-xs uppercase tracking-[0.14em]">Request {done} received</p>
              <p className="mt-6 font-display text-6xl leading-[0.9] tracking-tight">Thanks, {name.split(" ")[0]}.</p>
              <p className="mt-4 max-w-[520px] text-xl">We’ll reply to {email} within one business day with a mini-audit and next steps.</p>
            </div>
          ) : (
            <form onSubmit={submit} noValidate className="grid gap-8 md:col-span-7">
              <p className="text-2xl leading-snug md:text-3xl">
                Hi, I’m{" "}
                <input id="e-name" aria-label="Your name" value={name} onChange={(e) => setName(e.target.value)} placeholder="your name" className={cn(input, "inline w-[min(100%,280px)]")} /> and you can
                reach me at <input id="e-email" type="email" aria-label="Your email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="email@company.com" className={cn(input, "inline w-[min(100%,360px)]")} />.
              </p>
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.14em]">I need help with</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {serviceOptions.map((s) => {
                    const on = picked.includes(s);
                    return (
                      <button
                        key={s}
                        type="button"
                        aria-pressed={on}
                        onClick={() => setPicked(on ? picked.filter((x) => x !== s) : [...picked, s])}
                        className={cn("border-2 border-white px-4 py-2 text-lg transition-colors", on ? "bg-white text-wu-red" : "hover:bg-white/10")}
                      >
                        {s}
                      </button>
                    );
                  })}
                </div>
              </div>
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.14em]">Monthly budget</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {budgetOptions.map((b) => (
                    <button
                      key={b}
                      type="button"
                      aria-pressed={budget === b}
                      onClick={() => setBudget(b)}
                      className={cn("border-2 border-white px-4 py-2 font-mono text-sm", budget === b ? "bg-black text-white border-black" : "hover:bg-white/10")}
                    >
                      {b}
                    </button>
                  ))}
                </div>
              </div>
              <textarea id="e-msg" aria-label="Your goals" value={msg} onChange={(e) => setMsg(e.target.value)} rows={2} placeholder="What should marketing do for you?" className={cn(input, "resize-none text-xl md:text-2xl")} />
              {err && <p className="font-mono text-sm">{err}</p>}
              <button disabled={sending} className="group flex h-16 w-full items-center justify-between bg-black px-7 text-xl font-semibold text-white transition-colors hover:bg-white hover:text-black md:w-auto md:justify-self-start md:gap-10">
                {sending ? "Sending…" : "Send request"} <span className="transition-transform group-hover:translate-x-1">→</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

export function EdFooter() {
  return (
    <footer className="bg-wu-black pb-24 text-white">
      <div className="mx-auto max-w-[1440px] px-4 md:px-8">
        <div className="grid gap-8 border-b border-white/20 py-12 md:grid-cols-4">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="brand/logo-horizontal-light.png" alt="WakeUP Marketing" className="h-9 w-auto self-start justify-self-start" />
          <div className="grid gap-2 font-mono text-xs uppercase tracking-[0.14em]">
            {nav.map((l) => (
              <a key={l.href} href={l.href} className="w-fit hover:text-wu-red">
                {l.label}
              </a>
            ))}
          </div>
          <div className="grid gap-2 font-mono text-xs uppercase tracking-[0.14em]">
            {contact.socials.map((s) => (
              <a key={s.label} href={s.href} className="w-fit hover:text-wu-red">
                {s.label}
              </a>
            ))}
          </div>
          <div className="grid content-start gap-2 font-mono text-xs uppercase tracking-[0.14em]">
            <span>{contact.email}</span>
            <span>{contact.phone}</span>
          </div>
        </div>
        <p className="select-none pt-6 font-display text-[clamp(80px,24vw,400px)] leading-[0.78] tracking-[-0.06em]">
          Wake<span className="text-wu-red">UP</span>
        </p>
      </div>
    </footer>
  );
}
