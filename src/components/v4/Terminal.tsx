"use client";

/*
 * v4 — TERMINAL. Retro-futurist CRT: red phosphor on black, boot sequence, ASCII QR eye,
 * command-line sections and keyboard shortcuts (1–4) for navigation.
 */

import { motion, useInView } from "motion/react";
import { useEffect, useMemo, useRef, useState } from "react";
import type { FormEvent, ReactNode } from "react";
import { budgetOptions, cases, contact, nav, process, serviceOptions, services, stats, testimonials } from "@/lib/content";
import { isEmail, submitLead } from "@/lib/leads";
import { openChat } from "@/lib/chat-bus";
import { cn } from "@/lib/utils";

const YEAR = new Date().getFullYear();
const glow = "[text-shadow:0_0_6px_rgba(255,43,54,.75),0_0_18px_rgba(228,6,19,.35)]";

/* ---------- block-letter headline ---------- */
const FONT: Record<string, string[]> = {
  W: ["█   █", "█   █", "█ █ █", "██ ██", "█   █"],
  A: [" ███ ", "█   █", "█████", "█   █", "█   █"],
  K: ["█  █ ", "█ █  ", "██   ", "█ █  ", "█  █ "],
  E: ["█████", "█    ", "████ ", "█    ", "█████"],
  U: ["█   █", "█   █", "█   █", "█   █", " ███ "],
  P: ["████ ", "█   █", "████ ", "█    ", "█    "],
  " ": ["  ", "  ", "  ", "  ", "  "],
};
function BlockText({ text, className }: { text: string; className?: string }) {
  const rows = [0, 1, 2, 3, 4].map((r) =>
    text
      .split("")
      .map((c) => FONT[c]?.[r] ?? "")
      .join(" "),
  );
  const cols = rows[0].length;
  return (
    <div
      role="img"
      aria-label={text}
      className={cn("grid w-full max-w-[640px] gap-[3px]", className)}
      style={{ gridTemplateColumns: `repeat(${cols}, 1fr)` }}
    >
      {rows.flatMap((row, y) =>
        row.split("").map((ch, x) => (
          <span
            key={`${y}-${x}`}
            className={cn("aspect-square", ch === "█" ? "bg-white shadow-[0_0_8px_rgba(255,43,54,.9)]" : "")}
          />
        )),
      )}
    </div>
  );
}

/* ---------- ASCII QR eye ---------- */
const EW = 64;
const EH = 22;
type ECell = { ch: string; kind: "o" | "i" | "f" | "p" | " " };
function buildEye(): ECell[][] {
  const g: ECell[][] = [];
  for (let y = 0; y < EH; y++) {
    const row: ECell[] = [];
    for (let x = 0; x < EW; x++) {
      const dx = (x - EW / 2) / (EW / 2);
      const dy = (y - EH / 2) / (EH / 2);
      const h = 1 - dx * dx;
      const inOuter = Math.abs(dy) <= h;
      const inInner = Math.abs(dy) <= h - 0.3 && Math.abs(dx) < 0.86;
      const d = Math.hypot(dx * 1.7, dy * 0.95);
      let cell: ECell = { ch: " ", kind: " " };
      if (inOuter && !inInner) cell = { ch: Math.random() < 0.6 ? "█" : "▓", kind: "o" };
      else if (inInner && d < 0.72) {
        cell = d < 0.26 ? { ch: " ", kind: "p" } : { ch: Math.random() < 0.55 ? "█" : " ", kind: "i" };
      }
      row.push(cell);
    }
    g.push(row);
  }
  // finder squares
  const finder = (cx: number, cy: number) => {
    for (let y = -2; y <= 2; y++)
      for (let x = -3; x <= 3; x++) {
        const edge = Math.abs(y) === 2 || Math.abs(x) === 3;
        const core = Math.abs(y) === 0 && Math.abs(x) <= 1;
        const c = g[cy + y]?.[cx + x];
        if (c) g[cy + y][cx + x] = { ch: edge || core ? "█" : " ", kind: "f" };
      }
  };
  finder(EW / 2 - 12, EH / 2 - 5);
  finder(EW / 2 + 12, EH / 2 - 5);
  finder(EW / 2 - 12, EH / 2 + 5);
  return g;
}

function AsciiEye() {
  const [grid, setGrid] = useState<ECell[][] | null>(null);
  const [look, setLook] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const id0 = requestAnimationFrame(() => setGrid(buildEye()));
    const id = setInterval(() => {
      setGrid((g) => {
        if (!g) return g;
        const next = g.map((r) => r.slice());
        for (let k = 0; k < 26; k++) {
          const y = (Math.random() * EH) | 0;
          const x = (Math.random() * EW) | 0;
          const c = next[y][x];
          if (c.kind === "i") next[y][x] = { ...c, ch: c.ch === "█" ? " " : "█" };
          if (c.kind === "o") next[y][x] = { ...c, ch: c.ch === "█" ? "▓" : "█" };
        }
        return next;
      });
    }, 120);
    const onMove = (e: PointerEvent) =>
      setLook({ x: Math.round(((e.clientX / window.innerWidth) * 2 - 1) * 3), y: Math.round(((e.clientY / window.innerHeight) * 2 - 1) * 1.4) });
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => {
      cancelAnimationFrame(id0);
      clearInterval(id);
      window.removeEventListener("pointermove", onMove);
    };
  }, []);
  if (!grid) return <div className="aspect-[64/33]" aria-hidden />;
  const px = EW / 2 + look.x;
  const py = EH / 2 + look.y;
  return (
    <div
      role="img"
      aria-label="Pixel eye made of QR modules"
      className="grid w-full gap-[2px]"
      style={{ gridTemplateColumns: `repeat(${EW}, 1fr)` }}
    >
      {grid.flatMap((row, y) =>
        row.map((c, x) => {
          const pd = Math.hypot((x - px) / 1.6, (y - py) * 1.05);
          let cls = "";
          if (c.kind === "i" || c.kind === "p") {
            if (pd < 2.2) cls = x === Math.round(px) + 1 && y === Math.round(py) - 1 ? "bg-white" : "bg-black";
            else if (pd < 3) cls = "bg-white/90";
            else if (c.kind === "i" && c.ch === "█") cls = "bg-[#ff2b36] shadow-[0_0_6px_rgba(255,43,54,.8)]";
          } else if (c.kind === "f") cls = c.ch === "█" ? "bg-white" : "";
          else if (c.kind === "o") cls = c.ch === "█" ? "bg-[#ffd6d8]" : "bg-[#ffd6d8]/40";
          return <span key={`${y}-${x}`} className={cn("aspect-[1/1.5]", cls)} />;
        }),
      )}
    </div>
  );
}

/* ---------- typing ---------- */
function useTyped(lines: string[], speed = 14, start = true) {
  const [out, setOut] = useState<string[]>([]);
  useEffect(() => {
    if (!start) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      const id = requestAnimationFrame(() => setOut(lines));
      return () => cancelAnimationFrame(id);
    }
    let li = 0;
    let ci = 0;
    const id = setInterval(() => {
      if (li >= lines.length) return clearInterval(id);
      ci += 3;
      const idx = li;
      const cur = lines[idx].slice(0, ci);
      setOut((o) => [...o.slice(0, idx), cur]);
      if (ci >= lines[li].length) {
        li++;
        ci = 0;
      }
    }, speed);
    return () => clearInterval(id);
  }, [lines, speed, start]);
  return out;
}

function Window({ title, children, className, id }: { title: string; children: ReactNode; className?: string; id?: string }) {
  return (
    <section id={id} className={cn("min-w-0 scroll-mt-20 border border-[#ff2b36]/40 bg-black/60", className)}>
      <div className="flex items-center justify-between border-b border-[#ff2b36]/40 bg-[#ff2b36]/10 px-4 py-1.5 text-xs">
        <span>┌─ {title}</span>
        <span className="opacity-60">[■][□][×]</span>
      </div>
      <div className="p-4 md:p-6">{children}</div>
    </section>
  );
}

function Prompt({ cmd }: { cmd: string }) {
  const ref = useRef<HTMLParagraphElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });
  const lines = useMemo(() => [cmd], [cmd]);
  const typed = useTyped(lines, 30, inView);
  return (
    <p ref={ref} className="mb-4">
      <span className="text-white">wakeup@agency</span>:<span className="text-[#ff8a8f]">~</span>$ {typed[0] ?? ""}
      <span className="ml-0.5 inline-block h-[1.05em] w-[0.6em] translate-y-[0.15em] animate-blink bg-current" />
    </p>
  );
}

/* ---------- page ---------- */
const BOOT = [
  "WAKEUP OS v4.0.26 (tty1)",
  "[ OK ] Mounting /dev/attention ............... done",
  "[ OK ] Loading brand.module, ads.module, content.module",
  "[ OK ] Calibrating QR optic sensor ........... 98.2%",
  "[ OK ] Audience status: ASLEEP → preparing wake-up call",
];

export function TermPage() {
  const boot = useTyped(BOOT, 12);
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const t = e.target as HTMLElement;
      if (t.closest("input,textarea")) return;
      const i = Number(e.key) - 1;
      if (i >= 0 && i < nav.length) document.querySelector(nav[i].href)?.scrollIntoView({ behavior: "smooth" });
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <div className={cn("relative min-h-screen bg-black font-mono text-[15px] leading-relaxed text-[#ff2b36] selection:bg-[#ff2b36] selection:text-black", glow)}>
      {/* CRT overlays */}
      <div className="pointer-events-none fixed inset-0 z-[65] bg-[repeating-linear-gradient(0deg,rgba(0,0,0,.35)_0_1px,transparent_1px_3px)]" aria-hidden />
      <div className="crt-flicker pointer-events-none fixed inset-0 z-[66] bg-[radial-gradient(ellipse_at_center,transparent_55%,rgba(0,0,0,.75))]" aria-hidden />

      <header className="sticky top-0 z-50 border-b border-[#ff2b36]/40 bg-black/90 backdrop-blur">
        <div className="mx-auto flex max-w-[1200px] flex-wrap items-center gap-x-6 gap-y-1 px-4 py-2.5 text-xs md:text-sm">
          <span className="text-white">WAKEUP://</span>
          {nav.map((l, i) => (
            <a key={l.href} href={l.href} className="hover:bg-[#ff2b36] hover:text-black">
              [{i + 1}] {l.label.toLowerCase()}
            </a>
          ))}
          <span className="ml-auto hidden items-center gap-2 opacity-70 sm:flex">
            <i className="size-1.5 bg-wu-amber shadow-[0_0_8px_#ffa800]" /> online
          </span>
        </div>
      </header>

      <main className="mx-auto grid max-w-[1200px] grid-cols-[minmax(0,1fr)] gap-8 px-4 pb-32 pt-8">
        <section id="top" className="min-h-[82svh]">
          <div className="min-h-[9.5em] text-sm">
            {boot.map((l, i) => (
              <p key={i} className={cn("break-words", l.startsWith("[ OK ]") ? "" : "text-white")}>
                {l.startsWith("[ OK ]") ? (
                  <>
                    [ <span className="text-white">OK</span> ]{l.slice(6)}
                  </>
                ) : (
                  l
                )}
              </p>
            ))}
          </div>
          <div className="grid grid-cols-[minmax(0,1fr)] items-center gap-6 pt-6 lg:grid-cols-[1.1fr_.9fr]">
            <div>
              <BlockText text="WAKE UP" />
              <h1 className="mt-6 max-w-[620px] font-display text-[clamp(34px,4.4vw,64px)] leading-[0.95] tracking-tight text-white [text-shadow:0_0_24px_rgba(228,6,19,.55)]">
                Your audience is asleep. We run the wake-up call.
              </h1>
              <p className="mt-5 max-w-[560px] text-[#ff8a8f]">
                &gt; brand, performance and content marketing, compiled for revenue. Press <span className="text-white">1–4</span> to navigate.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#contact" className="border border-[#ff2b36] bg-[#ff2b36] px-5 py-3 text-black [text-shadow:none] hover:bg-white hover:border-white">
                  ./start_project.sh
                </a>
                <button onClick={() => openChat()} className="border border-[#ff2b36] px-5 py-3 hover:bg-[#ff2b36]/15">
                  ./ask_ai --now
                </button>
              </div>
            </div>
            <div className="overflow-hidden">
              <AsciiEye />
            </div>
          </div>
        </section>

        <Window title="services" id="services">
          <Prompt cmd="ls -la /services" />
          <div className="overflow-x-auto">
            <table className="w-full min-w-[640px] text-left text-sm">
              <thead className="text-white/70">
                <tr>
                  <th className="py-1 font-normal">perm</th>
                  <th className="font-normal">code</th>
                  <th className="font-normal">name</th>
                  <th className="font-normal">tags</th>
                </tr>
              </thead>
              <tbody>
                {services.map((s) => (
                  <tr key={s.code} className="group cursor-default hover:bg-[#ff2b36] hover:text-black hover:[text-shadow:none]">
                    <td className="py-2 pr-4">drwxr-xr-x</td>
                    <td className="pr-4">{s.code}</td>
                    <td className="pr-4 text-white group-hover:text-black">
                      {s.title.toLowerCase().replace(/ & /g, "_&_").replace(/ /g, "_")}/
                      <span className="block text-xs text-[#ff8a8f] group-hover:text-black">{s.text}</span>
                    </td>
                    <td className="text-xs">{s.tags.join(", ")}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Window>

        <div className="grid grid-cols-[minmax(0,1fr)] gap-8 lg:grid-cols-2">
          <Window title="stats — top">
            <Prompt cmd="top -o impact" />
            <div className="grid gap-4">
              {stats.map((s, i) => (
                <StatBar key={s.label} label={s.label} value={`${s.value}${s.suffix}`} pct={[0.8, 0.96, 0.7, 0.98][i]} />
              ))}
            </div>
          </Window>
          <Window title="process" id="process">
            <Prompt cmd="git log --graph --oneline" />
            <ul className="grid gap-3">
              {process.map((s, i) => (
                <li key={s.step}>
                  <span className="text-white">*</span>{" "}
                  <span className="text-[#ff8a8f]">{["a1f9c02", "7d3e11b", "c0ffee4", "9e5b2a0"][i]}</span>{" "}
                  <span className="text-white">{s.title.toLowerCase()}:</span> {s.text}
                  {i < process.length - 1 && <span className="block pl-0.5 opacity-60">|</span>}
                </li>
              ))}
            </ul>
          </Window>
        </div>

        <Window title="work" id="work">
          <Prompt cmd="cat ./cases/*.log" />
          <div className="grid gap-4 md:grid-cols-3">
            {cases.map((c) => (
              <div key={c.id} className="border border-[#ff2b36]/40 p-4 transition-colors hover:bg-[#ff2b36]/10">
                <p className="text-xs opacity-70">
                  {c.id.toLowerCase()}.log · {c.client.toLowerCase()}
                </p>
                <p className="my-3 font-display text-6xl text-white [text-shadow:0_0_24px_rgba(228,6,19,.6)]">{c.metric}</p>
                <p className="text-white">{c.title}</p>
                <p className="text-sm text-[#ff8a8f]">{c.metricLabel}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 h-24 overflow-hidden border-t border-[#ff2b36]/30 pt-3 text-sm">
            <div className="tail-scroll">
              {[...testimonials, ...testimonials].map((t, i) => (
                <p key={i} className="py-1">
                  <span className="opacity-60">[review]</span> <span className="text-white">&quot;{t.quote}&quot;</span> <span className="opacity-60">— {t.name}, {t.company}</span>
                </p>
              ))}
            </div>
          </div>
        </Window>

        <TermContact />

        <footer className="pt-8 text-sm opacity-80">
          <p>
            wakeup@agency:~$ logout <span className="text-white">— {contact.email}</span>
          </p>
          <p className="mt-2 text-xs opacity-60">© {YEAR} WakeUP Marketing. Connection closed.</p>
        </footer>
      </main>
    </div>
  );
}

function StatBar({ label, value, pct }: { label: string; value: string; pct: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });
  const cells = 24;
  return (
    <div ref={ref}>
      <div className="flex justify-between text-sm">
        <span className="text-white">{label.toLowerCase()}</span>
        <span>{value}</span>
      </div>
      <motion.p className="overflow-hidden whitespace-nowrap" initial={{ width: 0 }} animate={inView ? { width: "100%" } : {}} transition={{ duration: 1.2, ease: "easeOut" }}>
        [{"█".repeat(Math.round(cells * pct))}
        <span className="opacity-30">{"░".repeat(cells - Math.round(cells * pct))}</span>] {Math.round(pct * 100)}%
      </motion.p>
    </div>
  );
}

function TermContact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [svc, setSvc] = useState(serviceOptions[1]);
  const [budget, setBudget] = useState(budgetOptions[1]);
  const [log, setLog] = useState<string[]>([]);
  const [busy, setBusy] = useState(false);
  const submit = async (e: FormEvent) => {
    e.preventDefault();
    if (name.trim().length < 2) return setLog(["[ERR] name: required (min 2 chars)"]);
    if (!isEmail(email)) return setLog(["[ERR] email: invalid address"]);
    setBusy(true);
    setLog(["[ .. ] encrypting payload", "[ .. ] transmitting to strategist queue"]);
    const { id } = await submitLead({ name, email, services: [svc], budget, source: "form" });
    setBusy(false);
    setLog((l) => [...l, `[ OK ] lead ${id} received — reply within 1 business day`]);
  };
  const field = "flex-1 bg-transparent text-white outline-none placeholder:text-[#ff2b36]/40 caret-[#ff2b36]";
  return (
    <Window title="new_lead.sh" id="contact">
      <Prompt cmd="./start_project.sh --interactive" />
      <form onSubmit={submit} noValidate className="grid max-w-[760px] gap-3">
        <label className="flex gap-3">
          <span className="shrink-0">? name:</span>
          <input id="t-name" value={name} onChange={(e) => setName(e.target.value)} placeholder="jane doe" className={field} />
        </label>
        <label className="flex gap-3">
          <span className="shrink-0">? email:</span>
          <input id="t-email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="jane@company.com" className={field} />
        </label>
        <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
          <span>? service:</span>
          {serviceOptions.map((s) => (
            <button type="button" key={s} onClick={() => setSvc(s)} aria-pressed={svc === s} className={cn("px-1", svc === s ? "bg-[#ff2b36] text-black [text-shadow:none]" : "hover:text-white")}>
              {svc === s ? `(•) ${s}` : `( ) ${s}`}
            </button>
          ))}
        </div>
        <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
          <span>? budget:</span>
          {budgetOptions.map((b) => (
            <button type="button" key={b} onClick={() => setBudget(b)} aria-pressed={budget === b} className={cn("px-1", budget === b ? "bg-[#ff2b36] text-black [text-shadow:none]" : "hover:text-white")}>
              {budget === b ? `(•) ${b}` : `( ) ${b}`}
            </button>
          ))}
        </div>
        <button disabled={busy} className="mt-3 w-fit border border-[#ff2b36] bg-[#ff2b36] px-5 py-2.5 text-black [text-shadow:none] hover:border-white hover:bg-white">
          {busy ? "transmitting…" : "[ENTER] submit"}
        </button>
        <div aria-live="polite" className="min-h-[4.5em] text-sm">
          {log.map((l, i) => (
            <p key={i} className={l.startsWith("[ OK ]") ? "text-white" : undefined}>
              {l}
            </p>
          ))}
        </div>
      </form>
    </Window>
  );
}
