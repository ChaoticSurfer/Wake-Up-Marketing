"use client";

import { motion } from "motion/react";
import type { CSSProperties, ReactNode } from "react";
import { NumberTicker, Reveal, Scramble, Spotlight } from "@/components/shared/fx";
import { openChat } from "@/lib/chat-bus";
import { cn } from "@/lib/utils";

function Tile({
  code,
  title,
  text,
  className,
  children,
  delay = 0,
}: {
  code: string;
  title: string;
  text: string;
  className?: string;
  children: ReactNode;
  delay?: number;
}) {
  return (
    <Reveal delay={delay} className={cn("min-w-0", className)}>
      <Spotlight className="group flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-[#171717] to-wu-ink">
        <div className="relative h-[240px] shrink-0 overflow-hidden border-b border-white/[.06]">{children}</div>
        <div className="flex flex-1 flex-col gap-2 p-6">
          <div className="flex items-center justify-between">
            <span className="hud-label !text-[10px] text-wu-red">{code}</span>
            <span className="text-white/30 transition-all duration-500 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-white">↗</span>
          </div>
          <h3 className="font-display text-2xl leading-none tracking-tight">{title}</h3>
          <p className="text-[15px] leading-relaxed text-white/55">{text}</p>
        </div>
      </Spotlight>
    </Reveal>
  );
}

const inView = { once: true, margin: "-10% 0px" } as const;

function PerformanceViz() {
  const d = "M0 150 C 60 140, 90 120, 130 125 S 210 90, 250 95 S 330 40, 380 48 S 470 12, 540 8";
  return (
    <div className="absolute inset-0 p-6">
      <div className="flex items-start justify-between">
        <div>
          <p className="hud-label !text-[10px] text-white/40">ROAS · last 90 days</p>
          <p className="mt-1 font-display text-5xl">
            <NumberTicker value={4.8} decimals={1} />
            <span className="text-wu-red">x</span>
          </p>
        </div>
        <div className="flex gap-1.5">
          {["Meta", "Google", "TikTok"].map((c) => (
            <span key={c} className="hud-label rounded-full border border-white/10 px-2 py-1 !text-[9px] text-white/60">
              {c}
            </span>
          ))}
        </div>
      </div>
      <svg viewBox="0 0 540 170" className="absolute inset-x-0 bottom-0 h-[62%] w-full" preserveAspectRatio="none" aria-hidden>
        <defs>
          <linearGradient id="perf-fill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#e40613" stopOpacity=".35" />
            <stop offset="1" stopColor="#e40613" stopOpacity="0" />
          </linearGradient>
        </defs>
        {[40, 80, 120].map((y) => (
          <line key={y} x1="0" x2="540" y1={y} y2={y} stroke="rgba(255,255,255,.06)" />
        ))}
        {Array.from({ length: 18 }).map((_, i) => (
          <motion.rect
            key={i}
            x={i * 30 + 6}
            width="14"
            fill="rgba(255,255,255,.07)"
            initial={{ y: 170, height: 0 }}
            whileInView={{ y: 170 - (30 + ((i * 37) % 60) + i * 3), height: 30 + ((i * 37) % 60) + i * 3 }}
            viewport={inView}
            transition={{ duration: 0.8, delay: 0.3 + i * 0.03, ease: [0.16, 1, 0.3, 1] }}
          />
        ))}
        <motion.path
          d={`${d} L540 170 L0 170Z`}
          fill="url(#perf-fill)"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={inView}
          transition={{ duration: 1, delay: 1 }}
        />
        <motion.path
          d={d}
          fill="none"
          stroke="#e40613"
          strokeWidth="3"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={inView}
          transition={{ duration: 1.6, ease: [0.65, 0, 0.35, 1] }}
          style={{ filter: "drop-shadow(0 0 8px #e40613)" }}
        />
        <motion.circle
          cx="540"
          cy="8"
          r="6"
          fill="#fff"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={inView}
          transition={{ delay: 1.6 }}
        />
      </svg>
    </div>
  );
}

function BrandViz() {
  const swatches = [
    ["#E40613", "Red"],
    ["#111111", "Black"],
    ["#FFFFFF", "White"],
    ["#313231", "Graphite"],
  ];
  return (
    <div className="absolute inset-0 grid place-items-center p-6">
      <div className="relative">
        <span className="font-display text-[110px] leading-none">
          A<span className="text-wu-red">a</span>
        </span>
        <span className="hud-label absolute -right-10 -top-1 !text-[9px] text-white/40">Swiss 721</span>
      </div>
      <div className="flex gap-2">
        {swatches.map(([c, n], i) => (
          <motion.span
            key={n}
            title={n}
            className="size-9 rounded-full border border-white/20"
            style={{ background: c }}
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={inView}
            transition={{ delay: 0.2 + i * 0.1, type: "spring", stiffness: 260, damping: 18 }}
          />
        ))}
      </div>
    </div>
  );
}

function SocialViz() {
  return (
    <div className="absolute inset-0 grid place-items-center">
      <div className="relative h-[190px] w-[200px]">
        {[-14, 0, 14].map((rot, i) => (
          <div
            key={i}
            className="absolute left-1/2 top-1/2 h-[170px] w-[96px] overflow-hidden rounded-[18px] border border-white/15 bg-wu-ink p-1.5 transition-transform duration-700 group-hover:[transform:translate(-50%,-50%)_rotate(var(--r2))_translateX(var(--tx))]"
            style={
              {
                transform: `translate(-50%,-50%) rotate(${rot}deg) translateX(${rot * 2.2}px)`,
                ["--r2" as string]: `${rot * 1.4}deg`,
                ["--tx" as string]: `${rot * 3.6}px`,
                zIndex: i === 1 ? 2 : 1,
              } as CSSProperties
            }
          >
            <div
              className="h-full w-full rounded-[13px]"
              style={{
                background:
                  i === 1
                    ? "radial-gradient(circle at 30% 20%,#e40613,#5a020a 60%,#111)"
                    : "linear-gradient(160deg,#313231,#111)",
              }}
            />
            {i === 1 && (
              <>
                <span className="absolute bottom-4 left-3 h-1.5 w-12 rounded bg-white/70" />
                <span className="absolute bottom-7 left-3 h-1.5 w-16 rounded bg-white/40" />
                <span className="absolute bottom-4 right-3 grid animate-float place-items-center text-sm text-white">♥</span>
              </>
            )}
          </div>
        ))}
      </div>
      <span className="hud-label absolute right-4 top-4 rounded-full bg-wu-red px-2 py-1 !text-[9px] text-white">
        +<NumberTicker value={12} />K views
      </span>
    </div>
  );
}

function WebViz() {
  return (
    <div className="absolute inset-0 grid place-items-center p-5">
      <div className="relative w-full max-w-[250px] overflow-hidden rounded-lg border border-white/15 bg-wu-ink">
        <div className="flex items-center gap-1.5 border-b border-white/10 px-3 py-2">
          <i className="size-2 rounded-full bg-wu-red" />
          <i className="size-2 rounded-full bg-wu-graphite" />
          <i className="size-2 rounded-full bg-wu-graphite" />
          <span className="ml-2 h-3 flex-1 rounded bg-white/5" />
        </div>
        <div className="space-y-2 p-3">
          <div className="h-3 w-3/4 rounded bg-white/80" />
          <div className="h-3 w-1/2 rounded bg-white/25" />
          <div className="grid grid-cols-3 gap-1.5 pt-1">
            <div className="h-10 rounded bg-white/5" />
            <div className="h-10 rounded bg-white/5" />
            <div className="h-10 rounded bg-white/5" />
          </div>
          <div className="relative mt-1 h-7 w-24 rounded-full bg-wu-red">
            <span className="absolute inset-0 animate-ping rounded-full bg-wu-red/40 [animation-duration:2.4s]" />
          </div>
        </div>
        <svg viewBox="0 0 24 24" className="webviz-cursor absolute size-5 drop-shadow" aria-hidden>
          <path d="M3 2l7 19 2.5-7.5L20 11z" fill="#fff" stroke="#111" strokeWidth="1.2" />
        </svg>
      </div>
      <span className="hud-label absolute bottom-4 right-4 !text-[9px] text-white/50">
        CVR <span className="text-wu-red">+<NumberTicker value={38} />%</span>
      </span>
    </div>
  );
}

function SeoViz() {
  const rows = [
    ["marketing agency", 14, 1],
    ["meta ads expert", 22, 2],
    ["brand strategy", 31, 3],
  ] as const;
  return (
    <div className="absolute inset-0 flex flex-col justify-center gap-2 p-5">
      {rows.map(([kw, from, to], i) => (
        <motion.div
          key={kw}
          className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/[.02] px-3 py-2.5"
          initial={{ x: -20, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={inView}
          transition={{ delay: i * 0.12, duration: 0.6 }}
        >
          <span className="font-mono text-xs text-white/40">{i + 1}</span>
          <span className="flex-1 truncate text-sm text-white/80">{kw}</span>
          <span className="font-mono text-xs text-white/30 line-through">#{from}</span>
          <span className="grid h-6 min-w-9 place-items-center rounded bg-wu-red px-1.5 font-mono text-xs font-semibold">#{to}</span>
        </motion.div>
      ))}
    </div>
  );
}

function AnalyticsViz() {
  const nodes = [
    { label: "Meta", x: 60, y: 40 },
    { label: "Google", x: 60, y: 110 },
    { label: "TikTok", x: 60, y: 180 },
    { label: "CRM", x: 540, y: 60 },
    { label: "Email", x: 540, y: 160 },
  ];
  const hub = { x: 300, y: 110 };
  return (
    <div className="absolute inset-0">
      <svg viewBox="0 0 600 220" className="h-full w-full" aria-hidden>
        <defs>
          <linearGradient id="beam-grad" gradientUnits="userSpaceOnUse" x1="0" x2="600" y1="0" y2="0">
            <stop offset="0" stopColor="#e40613" stopOpacity="0" />
            <stop offset=".5" stopColor="#e40613" />
            <stop offset="1" stopColor="#fff" stopOpacity="0" />
          </linearGradient>
        </defs>
        {nodes.map((n, i) => {
          const mx = (n.x + hub.x) / 2;
          const p = `M${n.x} ${n.y} C ${mx} ${n.y}, ${mx} ${hub.y}, ${hub.x} ${hub.y}`;
          return (
            <g key={n.label}>
              <path d={p} fill="none" stroke="rgba(255,255,255,.1)" strokeWidth="1.5" />
              <path
                d={p}
                fill="none"
                stroke="url(#beam-grad)"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeDasharray="40 400"
                className="beam-dash"
                style={{ animationDelay: `${i * 0.45}s` }}
              />
            </g>
          );
        })}
        <circle cx={hub.x} cy={hub.y} r="34" fill="#111" stroke="#e40613" strokeWidth="1.5" />
        <circle cx={hub.x} cy={hub.y} r="44" fill="none" stroke="rgba(228,6,19,.3)" strokeDasharray="3 5" className="origin-center animate-spin-slow [transform-box:fill-box]" />
        <path d={`M${hub.x - 20} ${hub.y} Q${hub.x} ${hub.y - 16} ${hub.x + 20} ${hub.y} Q${hub.x} ${hub.y + 16} ${hub.x - 20} ${hub.y}Z`} fill="none" stroke="#fff" strokeWidth="2" />
        <circle cx={hub.x} cy={hub.y} r="6" fill="#e40613" />
        {nodes.map((n) => (
          <g key={n.label + "n"}>
            <rect x={n.x - 40} y={n.y - 14} width="80" height="28" rx="14" fill="#161616" stroke="rgba(255,255,255,.15)" />
            <text x={n.x} y={n.y + 4} textAnchor="middle" fill="rgba(255,255,255,.8)" fontSize="11" fontFamily="var(--font-code)">
              {n.label}
            </text>
          </g>
        ))}
      </svg>
    </div>
  );
}

export default function Bento() {
  return (
    <section id="services" className="relative py-28 md:py-36">
      <div className="mx-auto max-w-[1320px] px-4 md:px-8">
        <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <Reveal>
            <p className="hud-label text-white/50">
              <span className="text-wu-red">[01]</span> Services
            </p>
            <h2 className="mt-4 max-w-[760px] font-display text-[clamp(38px,5.4vw,80px)]">
              <Scramble text="Everything you need" /> to be <span className="text-wu-red">seen.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="max-w-[360px] text-white/55">
              Six disciplines under one roof, wired together by data. Most clients combine two or three.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-6">
          <Tile
            className="md:col-span-4"
            code="S-01 / PERFORMANCE"
            title="Performance Marketing"
            text="Meta, Google and TikTok campaigns engineered around one metric: profitable growth."
          >
            <PerformanceViz />
          </Tile>
          <Tile
            className="md:col-span-2"
            code="S-02 / BRAND"
            title="Brand & Identity"
            text="Positioning, visual systems and a voice that is impossible to ignore."
            delay={0.08}
          >
            <BrandViz />
          </Tile>
          <Tile
            className="md:col-span-2"
            code="S-03 / SOCIAL"
            title="Social & Content"
            text="Scroll-stopping reels, community and creator partnerships."
          >
            <SocialViz />
          </Tile>
          <Tile
            className="md:col-span-2"
            code="S-04 / WEB"
            title="Web & Landing Pages"
            text="Fast, conversion-obsessed sites and funnels."
            delay={0.08}
          >
            <WebViz />
          </Tile>
          <Tile
            className="md:col-span-2"
            code="S-05 / SEO"
            title="SEO & Content"
            text="Technical SEO and editorial that compound every month."
            delay={0.16}
          >
            <SeoViz />
          </Tile>
          <Tile
            className="md:col-span-4"
            code="S-06 / DATA"
            title="Analytics & Automation"
            text="Every channel wired into one source of truth: tracking, dashboards, CRM and email flows."
          >
            <AnalyticsViz />
          </Tile>
          <Reveal delay={0.08} className="md:col-span-2">
            <button
              onClick={() => openChat("Which services do I need?")}
              className="group relative flex h-full min-h-[300px] w-full flex-col justify-between overflow-hidden rounded-2xl bg-wu-red p-7 text-left"
            >
              <span
                className="absolute inset-0 opacity-30"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(0,0,0,.35) 1px,transparent 1px),linear-gradient(90deg,rgba(0,0,0,.35) 1px,transparent 1px)",
                  backgroundSize: "22px 22px",
                }}
                aria-hidden
              />
              <span className="hud-label relative !text-[10px] text-white/80">Not sure where to start?</span>
              <span className="relative font-display text-4xl leading-[0.95]">
                Ask WakeUP AI which mix fits you.
              </span>
              <span className="relative flex items-center gap-3 font-semibold">
                Open chat
                <span className="grid size-9 place-items-center rounded-full bg-black text-white transition-transform group-hover:translate-x-1">→</span>
              </span>
            </button>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
