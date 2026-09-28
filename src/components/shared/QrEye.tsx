"use client";

import { useEffect, useRef } from "react";

/**
 * The WakeUP "QR eye" as a live canvas: modules assemble on load, flicker like data,
 * the pupil tracks the cursor, a scan beam sweeps and the eye blinks (also on click).
 */

export type QrEyePalette = {
  outline: string;
  iris: string;
  finder: string;
  pupil: string;
  pupilRing: string;
  highlight: string;
  beam: [string, string];
};

export const EYE_DARK: QrEyePalette = {
  outline: "#ffffff",
  iris: "#e40613",
  finder: "#ffffff",
  pupil: "#0a0a0a",
  pupilRing: "#ffffff",
  highlight: "#ffffff",
  beam: ["rgba(228,6,19,0.28)", "rgba(255,255,255,0.9)"],
};

export const EYE_LIGHT: QrEyePalette = {
  outline: "#111111",
  iris: "#e40613",
  finder: "#111111",
  pupil: "#111111",
  pupilRing: "#111111",
  highlight: "#ffffff",
  beam: ["rgba(228,6,19,0.22)", "rgba(17,17,17,0.9)"],
};

const W = 1000;
const H = 620;
const CX = W / 2;
const CY = H / 2;
const S = 10;
const A = 480;
const B = 250;
const BAND = 40;
const R = 205;
const PUPIL = 60;

type Cell = { x: number; y: number; on: boolean; fixed?: boolean; sx: number; sy: number; delay: number };

const almondH = (dx: number, a: number, b: number) => {
  const u = dx / a;
  return u * u >= 1 ? -1 : b * (1 - u * u);
};

const scatter = () => {
  const ang = Math.random() * Math.PI * 2;
  const dist = 500 + Math.random() * 700;
  return { sx: Math.cos(ang) * dist, sy: Math.sin(ang) * dist, delay: Math.random() * 0.45 };
};

function buildCells() {
  const outline: Cell[] = [];
  const iris: Cell[] = [];
  const finders = [
    { x: -105, y: -105, size: 7 },
    { x: 105, y: -105, size: 7 },
    { x: -105, y: 105, size: 7 },
    { x: 115, y: 115, size: 5 },
  ];
  const finderState = (rx: number, ry: number): boolean | null => {
    for (const f of finders) {
      const half = (f.size * S) / 2;
      const lx = rx - (f.x - half);
      const ly = ry - (f.y - half);
      if (lx >= -S && ly >= -S && lx < f.size * S + S && ly < f.size * S + S) {
        const i = Math.floor(lx / S);
        const j = Math.floor(ly / S);
        if (i < 0 || j < 0 || i >= f.size || j >= f.size) return false;
        const edge = i === 0 || j === 0 || i === f.size - 1 || j === f.size - 1;
        const c = Math.floor(f.size / 2);
        const core = f.size === 7 ? Math.abs(i - c) <= 1 && Math.abs(j - c) <= 1 : i === c && j === c;
        return edge || core;
      }
    }
    return null;
  };

  for (let gy = 0; gy < H; gy += S) {
    for (let gx = 0; gx < W; gx += S) {
      const dx = gx + S / 2 - CX;
      const dy = Math.abs(gy + S / 2 - CY);
      const hOuter = almondH(dx, A, B);
      const hInner = almondH(dx, A - BAND * 1.6, B - BAND);
      if (hOuter >= 0 && dy <= hOuter && !(hInner >= 0 && dy <= hInner)) {
        const bias = Math.floor(gx / S) % 3 === 0 ? 0.78 : 0.55;
        outline.push({ x: gx, y: gy, on: Math.random() < bias, ...scatter() });
      }
    }
  }
  for (let gy = -R; gy < R; gy += S) {
    for (let gx = -R; gx < R; gx += S) {
      const x = gx + S / 2;
      const y = gy + S / 2;
      const d = Math.hypot(x, y);
      if (d > R || d < PUPIL + 16) continue;
      const f = finderState(x, y);
      iris.push({ x: gx, y: gy, on: f ?? Math.random() < 0.5, fixed: f !== null, ...scatter() });
    }
  }
  return { outline, iris };
}

function almondPath(ctx: CanvasRenderingContext2D, a: number, b: number) {
  ctx.beginPath();
  const steps = 60;
  for (let i = 0; i <= steps; i++) {
    const dx = -a + (2 * a * i) / steps;
    const h = Math.max(0, almondH(dx, a, b));
    if (i === 0) ctx.moveTo(CX + dx, CY - h);
    else ctx.lineTo(CX + dx, CY - h);
  }
  for (let i = steps; i >= 0; i--) {
    const dx = -a + (2 * a * i) / steps;
    ctx.lineTo(CX + dx, CY + Math.max(0, almondH(dx, a, b)));
  }
  ctx.closePath();
}

const easeOutExpo = (t: number) => (t >= 1 ? 1 : 1 - Math.pow(2, -10 * t));

export default function QrEye({
  className = "",
  palette = EYE_DARK,
  assemble = true,
  beam = true,
}: {
  className?: string;
  palette?: QrEyePalette;
  assemble?: boolean;
  beam?: boolean;
}) {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const { outline, iris } = buildCells();
    const flickerable = iris.filter((c) => !c.fixed);
    const P = palette;

    let scale = 1;
    const resize = () => {
      const r = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.max(1, Math.round(r.width * dpr));
      canvas.height = Math.max(1, Math.round(r.height * dpr));
      scale = canvas.width / W;
    };
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    const target = { x: 0, y: 0 };
    const gaze = { x: 0, y: 0 };
    let lastPointer = -1e9;
    const onMove = (e: PointerEvent) => {
      const r = canvas.getBoundingClientRect();
      const nx = (e.clientX - (r.left + r.width / 2)) / (window.innerWidth / 2);
      const ny = (e.clientY - (r.top + r.height / 2)) / (window.innerHeight / 2);
      const m = Math.hypot(nx, ny);
      const k = m > 1 ? 1 / m : 1;
      target.x = nx * k;
      target.y = ny * k;
      lastPointer = performance.now();
    };
    window.addEventListener("pointermove", onMove, { passive: true });

    let lid = 1;
    let nextBlink = performance.now() + 3200;
    let blinkStart = -1;
    const blink = () => (blinkStart = performance.now());
    canvas.addEventListener("click", blink);

    let visible = true;
    const io = new IntersectionObserver(([e]) => (visible = e.isIntersecting));
    io.observe(canvas);

    const t0 = performance.now();
    const assembleDur = assemble && !reduced ? 1.5 : 0;

    const place = (c: Cell, k: number) => {
      if (k >= 1) return [c.x, c.y];
      const local = Math.min(1, Math.max(0, (k * (1 + 0.45) - c.delay) / 1));
      const e = easeOutExpo(local);
      return [c.x + c.sx * (1 - e), c.y + c.sy * (1 - e)];
    };

    const draw = (t: number) => {
      const k = assembleDur ? Math.min(1, (t - t0) / 1000 / assembleDur) : 1;
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.setTransform(scale, 0, 0, scale, 0, 0);
      ctx.translate(CX, CY);
      ctx.scale(1, Math.max(0.04, lid));
      ctx.translate(-CX, -CY);

      ctx.fillStyle = P.outline;
      for (const c of outline) {
        if (!c.on) continue;
        const [x, y] = place(c, k);
        ctx.fillRect(x + 1, y + 1, S - 2, S - 2);
      }

      const ix = CX + gaze.x * 70;
      const iy = CY + gaze.y * 34;
      ctx.save();
      if (k >= 1) {
        almondPath(ctx, A - BAND * 1.6 - 4, B - BAND - 4);
        ctx.clip();
      }
      for (const c of iris) {
        if (!c.on) continue;
        const [x, y] = place(c, k);
        ctx.fillStyle = c.fixed ? P.finder : P.iris;
        ctx.fillRect(ix + x + 1, iy + y + 1, S - 2, S - 2);
      }

      const pk = easeOutExpo(Math.max(0, (k - 0.55) / 0.45));
      if (pk > 0) {
        const px = ix + gaze.x * 18;
        const py = iy + gaze.y * 12;
        ctx.globalAlpha = pk;
        ctx.beginPath();
        ctx.arc(px, py, PUPIL * pk, 0, Math.PI * 2);
        ctx.fillStyle = P.pupil;
        ctx.fill();
        ctx.lineWidth = 4;
        ctx.strokeStyle = P.pupilRing;
        ctx.stroke();
        ctx.beginPath();
        ctx.arc(px + 20, py - 22, 14 * pk, 0, Math.PI * 2);
        ctx.fillStyle = P.highlight;
        ctx.fill();
        ctx.globalAlpha = 1;
      }

      if (beam && !reduced && k >= 1) {
        const p = (t % 4200) / 4200;
        const by = CY - B + p * B * 2;
        const g = ctx.createLinearGradient(0, by - 40, 0, by + 4);
        g.addColorStop(0, "rgba(0,0,0,0)");
        g.addColorStop(0.85, P.beam[0]);
        g.addColorStop(1, P.beam[1]);
        ctx.fillStyle = g;
        ctx.fillRect(0, by - 40, W, 42);
      }
      ctx.restore();
    };

    let raf = 0;
    let lastFlicker = 0;
    const loop = (t: number) => {
      raf = requestAnimationFrame(loop);
      if (!visible) return;
      if (t - lastPointer > 2500) {
        target.x = Math.sin(t / 1900) * 0.55;
        target.y = Math.sin(t / 2700) * 0.35;
      }
      gaze.x += (target.x - gaze.x) * 0.08;
      gaze.y += (target.y - gaze.y) * 0.08;
      if (t > nextBlink && blinkStart < 0) blink();
      if (blinkStart >= 0) {
        const bt = (t - blinkStart) / 260;
        lid = bt >= 1 ? 1 : 1 - Math.sin(bt * Math.PI) * 0.96;
        if (bt >= 1) {
          blinkStart = -1;
          nextBlink = t + 3500 + Math.random() * 4000;
        }
      }
      if (t - lastFlicker > 70) {
        lastFlicker = t;
        for (let i = 0; i < 14; i++) {
          const c = flickerable[(Math.random() * flickerable.length) | 0];
          c.on = !c.on;
        }
        for (let i = 0; i < 6; i++) {
          const c = outline[(Math.random() * outline.length) | 0];
          c.on = !c.on;
        }
      }
      draw(t);
    };

    if (reduced) {
      draw(performance.now());
      const ro2 = new ResizeObserver(() => {
        resize();
        draw(performance.now());
      });
      ro2.observe(canvas);
      return () => {
        ro.disconnect();
        ro2.disconnect();
        io.disconnect();
        window.removeEventListener("pointermove", onMove);
        canvas.removeEventListener("click", blink);
      };
    }

    raf = requestAnimationFrame(loop);
    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      io.disconnect();
      window.removeEventListener("pointermove", onMove);
      canvas.removeEventListener("click", blink);
    };
  }, [palette, assemble, beam]);

  return (
    <canvas
      ref={ref}
      className={`block aspect-[1000/620] w-full cursor-crosshair ${className}`}
      role="img"
      aria-label="WakeUP eye made of QR code modules"
    />
  );
}
