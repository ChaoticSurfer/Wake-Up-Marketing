"use client";

import { useEffect, useRef } from "react";

/**
 * Full-screen particle field that morphs between shapes. The active shape is chosen by
 * whichever `[data-shape]` section is in view: eye · up · bars · target.
 * Particles spring toward their targets, leave short trails and scatter away from the cursor.
 */

export type Shape = "eye" | "up" | "bars" | "target";

const SIZE = 420; // offscreen sampling canvas

function sample(draw: (c: CanvasRenderingContext2D) => void, n: number): Float32Array {
  const cv = document.createElement("canvas");
  cv.width = cv.height = SIZE;
  const c = cv.getContext("2d", { willReadFrequently: true })!;
  c.fillStyle = "#fff";
  c.strokeStyle = "#fff";
  draw(c);
  const data = c.getImageData(0, 0, SIZE, SIZE).data;
  const pts: number[] = [];
  for (let y = 0; y < SIZE; y += 3)
    for (let x = 0; x < SIZE; x += 3) if (data[(y * SIZE + x) * 4 + 3] > 128) pts.push(x / SIZE - 0.5, y / SIZE - 0.5);
  const out = new Float32Array(n * 2);
  const count = pts.length / 2;
  for (let i = 0; i < n; i++) {
    const k = ((Math.random() * count) | 0) * 2;
    out[i * 2] = pts[k] + (Math.random() - 0.5) * 0.004;
    out[i * 2 + 1] = pts[k + 1] + (Math.random() - 0.5) * 0.004;
  }
  return out;
}

function shapes(n: number, font: string): Record<Shape, Float32Array> {
  const eye = sample((c) => {
    const cx = SIZE / 2;
    const cy = SIZE / 2;
    c.lineWidth = 16;
    c.beginPath();
    c.moveTo(20, cy);
    c.quadraticCurveTo(cx, cy - 250, SIZE - 20, cy);
    c.quadraticCurveTo(cx, cy + 250, 20, cy);
    c.stroke();
    c.lineWidth = 34;
    c.beginPath();
    c.arc(cx, cy, 78, 0, Math.PI * 2);
    c.stroke();
    // finder squares
    for (const [dx, dy] of [[-44, -44], [44, -44], [-44, 44]]) {
      c.fillRect(cx + dx - 14, cy + dy - 14, 28, 28);
    }
  }, n);
  const up = sample((c) => {
    c.font = `800 250px ${font}`;
    c.textAlign = "center";
    c.textBaseline = "middle";
    c.fillText("UP", SIZE / 2, SIZE / 2 + 10);
  }, n);
  const bars = sample((c) => {
    const hs = [70, 120, 170, 230, 300];
    hs.forEach((h, i) => c.fillRect(40 + i * 70, 370 - h, 44, h));
    c.lineWidth = 14;
    c.beginPath();
    c.moveTo(40, 250);
    c.lineTo(160, 190);
    c.lineTo(250, 150);
    c.lineTo(370, 50);
    c.stroke();
    c.beginPath();
    c.moveTo(330, 50);
    c.lineTo(375, 45);
    c.lineTo(370, 90);
    c.stroke();
  }, n);
  const target = sample((c) => {
    c.lineWidth = 14;
    for (const r of [60, 115, 170]) {
      c.beginPath();
      c.arc(SIZE / 2, SIZE / 2, r, 0, Math.PI * 2);
      c.stroke();
    }
    c.beginPath();
    c.arc(SIZE / 2, SIZE / 2, 22, 0, Math.PI * 2);
    c.fill();
    c.fillRect(SIZE / 2 - 4, 10, 8, 60);
    c.fillRect(SIZE / 2 - 4, SIZE - 70, 8, 60);
    c.fillRect(10, SIZE / 2 - 4, 60, 8);
    c.fillRect(SIZE - 70, SIZE / 2 - 4, 60, 8);
  }, n);
  return { eye, up, bars, target };
}

export default function ParticleField() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const mobile = window.innerWidth < 768;
    const N = mobile ? 1100 : 2400;

    let W = 0;
    let H = 0;
    let dpr = 1;
    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      W = canvas.clientWidth;
      H = canvas.clientHeight;
      canvas.width = W * dpr;
      canvas.height = H * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    window.addEventListener("resize", resize);

    const pos = new Float32Array(N * 2);
    const vel = new Float32Array(N * 2);
    const red = new Uint8Array(N);
    for (let i = 0; i < N; i++) {
      pos[i * 2] = Math.random() * W;
      pos[i * 2 + 1] = Math.random() * H;
      red[i] = Math.random() < 0.34 ? 1 : 0;
    }

    let targets: Record<Shape, Float32Array> | null = null;
    let current: Shape = "eye";
    let stopped = false;
    const displayFont = getComputedStyle(document.documentElement).getPropertyValue("--font-swiss").trim() || "Arial Black";
    document.fonts.ready.then(() => {
      if (!stopped) targets = shapes(N, displayFont);
    });

    // which shape: the [data-shape] section nearest the viewport centre
    const sections = Array.from(document.querySelectorAll<HTMLElement>("[data-shape]"));
    const pick = () => {
      let best: HTMLElement | null = null;
      let bd = Infinity;
      for (const s of sections) {
        const r = s.getBoundingClientRect();
        const d = Math.abs(r.top + r.height / 2 - H / 2);
        if (d < bd) {
          bd = d;
          best = s;
        }
      }
      if (best) current = (best.dataset.shape as Shape) ?? "eye";
    };
    pick();
    window.addEventListener("scroll", pick, { passive: true });

    const mouse = { x: -9999, y: -9999 };
    const onMove = (e: PointerEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };
    const onLeave = () => {
      mouse.x = mouse.y = -9999;
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    document.addEventListener("pointerleave", onLeave);

    let raf = 0;
    const frame = (t: number) => {
      raf = requestAnimationFrame(frame);
      // trails: paint the background with partial alpha instead of clearing
      ctx.fillStyle = "rgba(17,17,17,0.28)";
      ctx.fillRect(0, 0, W, H);
      if (!targets) return;
      const tg = targets[current];
      const scale = Math.min(W * (mobile ? 0.95 : 0.5), H * 0.8);
      const cx = mobile ? W / 2 : W * 0.7;
      const cy = H / 2;
      const time = t / 1000;
      for (let i = 0; i < N; i++) {
        const ix = i * 2;
        const iy = ix + 1;
        const wob = reduced ? 0 : Math.sin(time * 1.3 + i) * 1.4;
        const tx = cx + tg[ix] * scale + wob;
        const ty = cy + tg[iy] * scale + (reduced ? 0 : Math.cos(time * 1.1 + i * 0.7) * 1.4);
        let ax = (tx - pos[ix]) * 0.012;
        let ay = (ty - pos[iy]) * 0.012;
        const dx = pos[ix] - mouse.x;
        const dy = pos[iy] - mouse.y;
        const d2 = dx * dx + dy * dy;
        if (d2 < 110 * 110) {
          const f = (1 - Math.sqrt(d2) / 110) * 2.4;
          const d = Math.sqrt(d2) || 1;
          ax += (dx / d) * f;
          ay += (dy / d) * f;
        }
        vel[ix] = (vel[ix] + ax) * 0.86;
        vel[iy] = (vel[iy] + ay) * 0.86;
        pos[ix] += vel[ix];
        pos[iy] += vel[iy];
      }
      ctx.fillStyle = "rgba(255,255,255,0.85)";
      for (let i = 0; i < N; i++) if (!red[i]) ctx.fillRect(pos[i * 2], pos[i * 2 + 1], 1.8, 1.8);
      ctx.fillStyle = "#e40613";
      for (let i = 0; i < N; i++) if (red[i]) ctx.fillRect(pos[i * 2] - 0.3, pos[i * 2 + 1] - 0.3, 2.4, 2.4);
    };
    raf = requestAnimationFrame(frame);

    return () => {
      stopped = true;
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("scroll", pick);
      window.removeEventListener("pointermove", onMove);
      document.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  return <canvas ref={ref} className="pointer-events-none fixed inset-0 -z-10 h-full w-full max-md:opacity-40" aria-hidden />;
}
