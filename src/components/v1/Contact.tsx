"use client";

import { useState } from "react";
import type { FormEvent, ReactNode } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Reveal, Scramble } from "@/components/shared/fx";
import { budgetOptions, contact, serviceOptions } from "@/lib/content";
import { isEmail, submitLead } from "@/lib/leads";
import { openChat } from "@/lib/chat-bus";
import { cn } from "@/lib/utils";

const field =
  "h-12 rounded-md border-0 border-b border-white/15 bg-white/[.03] px-3.5 text-base text-white placeholder:text-white/25 focus-visible:border-wu-red focus-visible:bg-wu-red/[.06] focus-visible:ring-0 aria-invalid:border-wu-red";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [message, setMessage] = useState("");
  const [services, setServices] = useState<string[]>(["Performance ads"]);
  const [budget, setBudget] = useState("$5k – $15k");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [state, setState] = useState<"idle" | "sending" | "done">("idle");
  const [ticket, setTicket] = useState("");

  const progress = [name.trim().length > 1, isEmail(email), services.length > 0, !!budget, message.trim().length > 0].filter(Boolean).length / 5;

  const submit = async (e: FormEvent) => {
    e.preventDefault();
    const errs: Record<string, string> = {};
    if (name.trim().length < 2) errs.name = "Tell us your name.";
    if (!isEmail(email)) errs.email = "Enter a valid email address.";
    if (!services.length) errs.services = "Pick at least one area.";
    setErrors(errs);
    if (Object.keys(errs).length) return;
    setState("sending");
    const { id } = await submitLead({ name, email, company, services, budget, message, source: "form" });
    setTicket(id);
    setState("done");
  };

  return (
    <section id="contact" className="relative overflow-hidden border-t border-white/10 py-28 md:py-36">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(700px_circle_at_85%_30%,rgba(228,6,19,.2),transparent_60%),radial-gradient(500px_circle_at_5%_90%,rgba(228,6,19,.1),transparent_60%)]" aria-hidden />
      <div className="mx-auto grid max-w-[1320px] items-start gap-14 px-4 md:px-8 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
        <Reveal className="lg:sticky lg:top-28">
          <p className="hud-label text-white/50">
            <span className="text-wu-red">[04]</span> Start a project
          </p>
          <h2 className="mt-4 font-display text-[clamp(40px,5.4vw,84px)]">
            Ready to <span className="text-wu-red">wake up</span> your brand?
          </h2>
          <p className="mt-6 max-w-[460px] text-lg text-white/60">
            Tell us where you are and where you want to be. We reply within one business day with a free mini-audit and a clear next step.
          </p>
          <ol className="mt-8 border-t border-white/10">
            {["We review your brand, ads and site.", "30-minute strategy call. No fluff.", "You get a proposal with KPIs and budget."].map((s, i) => (
              <li key={s} className="flex items-baseline gap-4 border-b border-white/10 py-4">
                <span className="font-mono text-xs text-wu-red">0{i + 1}</span>
                {s}
              </li>
            ))}
          </ol>
          <div className="mt-8 flex flex-wrap items-center gap-5">
            <span className="border-b border-wu-red pb-0.5 font-mono text-sm">{contact.email}</span>
            <button onClick={() => openChat()} className="hud-label text-white/50 transition-colors hover:text-white">
              or chat with WakeUP AI →
            </button>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="rounded-2xl bg-[linear-gradient(140deg,#e40613,rgba(255,255,255,.12)_35%,rgba(255,255,255,.08)_70%,rgba(255,255,255,.4))] p-px shadow-[0_40px_120px_-40px_rgba(228,6,19,.5)]">
          <div className="relative rounded-[15px] bg-[#101010]">
            <div className="hud-label flex items-center gap-3 border-b border-white/10 px-5 py-3.5 !text-[10px] text-white/50">
              <span className="flex gap-1.5">
                <i className="size-2 rounded-full bg-wu-red" />
                <i className="size-2 rounded-full bg-wu-graphite" />
                <i className="size-2 rounded-full bg-wu-graphite" />
              </span>
              new_lead.form
              <span className="ml-auto tabular-nums text-white">{Math.round(progress * 100)}%</span>
            </div>
            <div className="h-0.5">
              <div className="h-full origin-left bg-wu-red shadow-[0_0_10px_#e40613] transition-transform duration-500" style={{ transform: `scaleX(${progress})` }} />
            </div>

            <AnimatePresence mode="wait">
              {state === "done" ? (
                <motion.div
                  key="done"
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="grid justify-items-start gap-4 p-8 md:p-12"
                  role="status"
                >
                  <div className="grid size-16 place-items-center rounded-full bg-wu-red shadow-[0_0_40px_rgba(228,6,19,.5)]">
                    <svg viewBox="0 0 48 48" className="w-8 fill-none stroke-white stroke-[4]" aria-hidden>
                      <motion.path d="M12 25l8 8 16-18" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 0.2 }} strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <p className="hud-label text-wu-red">Transmission received · {ticket}</p>
                  <h3 className="font-display text-5xl">You’re awake now.</h3>
                  <p className="text-white/60">
                    Thanks, {name.split(" ")[0]}. We’ll reply to <strong className="text-white">{email}</strong> within one business day.
                  </p>
                  <button onClick={() => setState("idle")} className="mt-2 h-11 rounded-full border border-white/20 px-6 text-sm font-semibold hover:border-white">
                    Send another request
                  </button>
                </motion.div>
              ) : (
                <motion.form key="form" onSubmit={submit} noValidate className="grid gap-6 p-6 md:p-9" exit={{ opacity: 0 }}>
                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field label="Full name" error={errors.name} htmlFor="c-name" required>
                      <Input id="c-name" className={field} placeholder="Jane Doe" value={name} onChange={(e) => setName(e.target.value)} aria-invalid={!!errors.name} autoComplete="name" />
                    </Field>
                    <Field label="Email" error={errors.email} htmlFor="c-email" required>
                      <Input id="c-email" type="email" className={field} placeholder="jane@company.com" value={email} onChange={(e) => setEmail(e.target.value)} aria-invalid={!!errors.email} autoComplete="email" />
                    </Field>
                  </div>
                  <Field label="Company / website" htmlFor="c-company">
                    <Input id="c-company" className={field} placeholder="company.com" value={company} onChange={(e) => setCompany(e.target.value)} />
                  </Field>
                  <fieldset className="grid gap-3">
                    <legend className="hud-label mb-3 !text-[10px] text-white/50">
                      What do you need? <span className="text-wu-red">*</span>
                    </legend>
                    <div className="flex flex-wrap gap-2">
                      {serviceOptions.map((s) => {
                        const on = services.includes(s);
                        return (
                          <button
                            key={s}
                            type="button"
                            aria-pressed={on}
                            onClick={() => setServices(on ? services.filter((x) => x !== s) : [...services, s])}
                            className={cn(
                              "rounded-full border px-4 py-2 text-sm transition-all active:scale-95",
                              on ? "border-wu-red bg-wu-red text-white shadow-[0_6px_20px_-6px_rgba(228,6,19,.8)]" : "border-white/15 hover:border-white/50",
                            )}
                          >
                            {s}
                          </button>
                        );
                      })}
                    </div>
                    {errors.services && <p className="font-mono text-xs text-[#ff5a63]">{errors.services}</p>}
                  </fieldset>
                  <fieldset className="grid gap-3">
                    <legend className="hud-label mb-3 !text-[10px] text-white/50">Monthly budget</legend>
                    <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
                      {budgetOptions.map((b) => (
                        <button
                          key={b}
                          type="button"
                          aria-pressed={budget === b}
                          onClick={() => setBudget(budget === b ? "" : b)}
                          className={cn(
                            "rounded-lg border px-3 py-3 font-mono text-xs transition-all",
                            budget === b ? "border-wu-red bg-wu-red/15 text-white" : "border-white/10 text-white/60 hover:border-white/40",
                          )}
                        >
                          {b}
                        </button>
                      ))}
                    </div>
                  </fieldset>
                  <Field label="Tell us about your goals" htmlFor="c-msg">
                    <Textarea id="c-msg" className={cn(field, "h-auto min-h-28 py-3")} placeholder="We want to double online sales before Q4…" value={message} onChange={(e) => setMessage(e.target.value)} />
                  </Field>
                  <button
                    disabled={state === "sending"}
                    className="group relative flex h-14 items-center justify-center gap-3 overflow-hidden rounded-full bg-wu-red font-semibold text-white shadow-[0_14px_40px_-10px_rgba(228,6,19,.8)] disabled:opacity-80"
                  >
                    <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                    {state === "sending" ? (
                      <>
                        <span className="size-4 animate-spin rounded-full border-2 border-white/30 border-t-white" /> <Scramble text="Transmitting…" trigger="mount" />
                      </>
                    ) : (
                      <>Send request →</>
                    )}
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Field({
  label,
  htmlFor,
  error,
  required,
  children,
}: {
  label: string;
  htmlFor: string;
  error?: string;
  required?: boolean;
  children: ReactNode;
}) {
  return (
    <div className="grid gap-2.5">
      <label htmlFor={htmlFor} className="hud-label !text-[10px] text-white/50">
        {label} {required && <span className="text-wu-red">*</span>}
      </label>
      {children}
      {error && <p className="font-mono text-xs text-[#ff5a63]">{error}</p>}
    </div>
  );
}
