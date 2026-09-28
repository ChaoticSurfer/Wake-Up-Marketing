"use client";

/*
 * Small effect primitives in the spirit of Magic UI / Aceternity / React Bits,
 * written in-house so they share one motion language and have no extra deps.
 */

import { animate, motion, useInView, useMotionValue, useSpring } from "motion/react";
import type { ComponentProps, ElementType, PointerEvent, ReactNode } from "react";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

const GLYPHS = "▚▞▛▜▙▟█▓▒░01<>/\\#$%&*+=?";

/** Decrypting text: characters resolve left-to-right from random glyphs. */
export function Scramble({
  text,
  className,
  as: Tag = "span",
  trigger = "view",
  duration = 900,
  delay = 0,
}: {
  text: string;
  className?: string;
  as?: ElementType;
  trigger?: "view" | "mount" | "hover";
  duration?: number;
  delay?: number;
}) {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });
  const [out, setOut] = useState(text);
  const [runs, setRuns] = useState(0);

  useEffect(() => {
    const go = trigger === "mount" || (trigger === "view" && inView) || (trigger === "hover" && runs > 0);
    if (!go) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let raf = 0;
    let start = 0;
    const tick = (t: number) => {
      if (!start) start = t + delay;
      const p = Math.max(0, (t - start) / duration);
      const n = Math.floor(p * text.length);
      let s = "";
      for (let i = 0; i < text.length; i++) {
        const ch = text[i];
        s += i < n || ch === " " ? ch : GLYPHS[(Math.random() * GLYPHS.length) | 0];
      }
      setOut(s);
      if (p < 1) raf = requestAnimationFrame(tick);
      else setOut(text);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, trigger, runs, text, duration, delay]);

  return (
    <Tag
      ref={ref}
      className={className}
      aria-label={text}
      onMouseEnter={trigger === "hover" ? () => setRuns((r) => r + 1) : undefined}
    >
      <span aria-hidden>{out}</span>
    </Tag>
  );
}

/** Counts up to a value when scrolled into view. */
export function NumberTicker({ value, decimals = 0, className }: { value: number; decimals?: number; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-15% 0px" });
  useEffect(() => {
    if (!inView || !ref.current) return;
    const el = ref.current;
    const c = animate(0, value, {
      duration: 1.8,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => (el.textContent = v.toFixed(decimals)),
    });
    return () => c.stop();
  }, [inView, value, decimals]);
  return (
    <span ref={ref} className={cn("tabular-nums", className)}>
      {value.toFixed(decimals)}
    </span>
  );
}

/** Infinite horizontal marquee (CSS-only loop, content duplicated). */
export function Marquee({
  children,
  className,
  reverse,
  duration = 36,
}: {
  children: ReactNode;
  className?: string;
  reverse?: boolean;
  duration?: number;
}) {
  return (
    <div className={cn("group flex overflow-hidden", className)} style={{ ["--marquee-duration" as string]: `${duration}s` }}>
      <div
        className={cn(
          "flex w-max shrink-0 group-hover:[animation-play-state:paused]",
          reverse ? "animate-marquee-reverse" : "animate-marquee",
        )}
      >
        <div className="flex shrink-0">{children}</div>
        <div className="flex shrink-0" aria-hidden>
          {children}
        </div>
      </div>
    </div>
  );
}

/** Element that leans toward the cursor (desktop only). */
export function Magnetic({ children, strength = 0.35, className }: { children: ReactNode; strength?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useSpring(useMotionValue(0), { stiffness: 220, damping: 16 });
  const y = useSpring(useMotionValue(0), { stiffness: 220, damping: 16 });
  return (
    <motion.div
      ref={ref}
      className={cn("inline-block", className)}
      style={{ x, y }}
      onPointerMove={(e) => {
        if (e.pointerType !== "mouse" || !ref.current) return;
        const r = ref.current.getBoundingClientRect();
        x.set((e.clientX - (r.left + r.width / 2)) * strength);
        y.set((e.clientY - (r.top + r.height / 2)) * strength);
      }}
      onPointerLeave={() => {
        x.set(0);
        y.set(0);
      }}
    >
      {children}
    </motion.div>
  );
}

/** Tracks the pointer into --mx / --my for `.spotlight` borders and glows. */
export function Spotlight<T extends ElementType = "div">({
  as,
  className,
  children,
  ...rest
}: { as?: T; className?: string; children?: ReactNode } & Omit<ComponentProps<T>, "as" | "className" | "children">) {
  const Tag = (as ?? "div") as ElementType;
  return (
    <Tag
      className={cn("spotlight", className)}
      onPointerMove={(e: PointerEvent<HTMLElement>) => {
        const r = e.currentTarget.getBoundingClientRect();
        e.currentTarget.style.setProperty("--mx", `${e.clientX - r.left}px`);
        e.currentTarget.style.setProperty("--my", `${e.clientY - r.top}px`);
      }}
      {...rest}
    >
      {children}
    </Tag>
  );
}

/** Canvas grid of squares that randomly flicker — a quiet "data field" background. */
export function FlickeringGrid({
  className,
  color = "228,6,19",
  size = 4,
  gap = 6,
  maxOpacity = 0.35,
  chance = 0.06,
}: {
  className?: string;
  color?: string;
  size?: number;
  gap?: number;
  maxOpacity?: number;
  chance?: number;
}) {
  const ref = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = ref.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let cols = 0;
    let rows = 0;
    let cells = new Float32Array(0);
    let dpr = 1;
    const resize = () => {
      const r = canvas.getBoundingClientRect();
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = r.width * dpr;
      canvas.height = r.height * dpr;
      cols = Math.ceil(r.width / (size + gap));
      rows = Math.ceil(r.height / (size + gap));
      cells = new Float32Array(cols * rows).map(() => Math.random() * maxOpacity);
    };
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);
    let visible = true;
    const io = new IntersectionObserver(([e]) => (visible = e.isIntersecting));
    io.observe(canvas);
    let raf = 0;
    let last = 0;
    const draw = (t: number) => {
      raf = requestAnimationFrame(draw);
      if (!visible || t - last < 50) return;
      last = t;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < cells.length; i++) {
        if (!reduced && Math.random() < chance) cells[i] = Math.random() * maxOpacity;
        const x = (i % cols) * (size + gap) * dpr;
        const y = Math.floor(i / cols) * (size + gap) * dpr;
        ctx.fillStyle = `rgba(${color},${cells[i]})`;
        ctx.fillRect(x, y, size * dpr, size * dpr);
      }
    };
    raf = requestAnimationFrame(draw);
    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      io.disconnect();
    };
  }, [color, size, gap, maxOpacity, chance]);
  return <canvas ref={ref} className={cn("pointer-events-none h-full w-full", className)} aria-hidden />;
}

/** Fade/slide in once when scrolled into view. */
export function Reveal({
  children,
  className,
  delay = 0,
  y = 28,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-8% 0px" }}
      transition={{ duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}

/** Four red corner brackets framing the parent (parent must be relative). */
export function Corners({ className, size = 16 }: { className?: string; size?: number }) {
  const base = "pointer-events-none absolute border-wu-red";
  const s = { width: size, height: size };
  return (
    <>
      <span className={cn(base, "-left-2 -top-2 border-l-2 border-t-2", className)} style={s} />
      <span className={cn(base, "-right-2 -top-2 border-r-2 border-t-2", className)} style={s} />
      <span className={cn(base, "-bottom-2 -left-2 border-b-2 border-l-2", className)} style={s} />
      <span className={cn(base, "-bottom-2 -right-2 border-b-2 border-r-2", className)} style={s} />
    </>
  );
}
