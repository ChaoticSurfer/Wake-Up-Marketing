# Futuristic agency web design — research notes (Sept 2026)

Research behind the design directions in the Design Lab. Sites marked *(unverified look)* were
reachable, but their visuals were described from memory rather than re-checked.

## Directions that fit a red / black / white brand

| Direction | Signature devices | References | Used in |
| --- | --- | --- | --- |
| **Cyber-brutalist HUD** | 1px grids, corner brackets, mono micro-labels, text scramble, QR-module textures, red only for "live" states | igloo.inc, basement.studio, nothing.tech *(unverified look)* | **v1 Signal** |
| **Swiss editorial kinetic** | Huge tight grotesk that moves on scroll, strict 12-col grid, red full-bleed floods | matvoyce.tv, obys.agency | **v2 Editorial** |
| **WebGL / 3D object hero** | A real-time 3D eye or orb built from instanced QR cubes that tracks the cursor | lusion.co, activetheory.net, iventions.com | **v3 Spatial** |
| **Dark glass / spatial** | Frosted panels over a slow red shader gradient, depth, max 2–3 glass layers | raycast.com, linear.app *(unverified look)* | **v3 Spatial** |
| **Terminal / retro CRT** | Boot sequence, scanlines, red phosphor, command-line navigation | poolsuite.net, teenage.engineering *(unverified look)* | **v4 Terminal** |
| Bento neo-minimal | Asymmetric tile grid, one micro-animation per tile | linear.app, godly.website | v1 services |
| Y2K chrome / liquid metal | Chrome type/blobs, red-tinted env maps. Risky next to flat Swiss type | shadergradient.co, unicorn.studio, paper.design (tools) | — |
| Noir cinematic scroll | Full-screen video sequences, weighted smooth scroll, grain | by-kin.com, unseen.co | — |

## Libraries (versions checked on npm, 2026-09-28)

- **shadcn/ui** (CLI 4.21): accessible base primitives plus the registry most effect libraries install through. Tailwind v4 native. *Used for inputs, buttons, badges.*
- **Aceternity UI / Magic UI / React Bits**: copy-paste effect components (beams, spotlight, flickering grid, decrypt text, shader backgrounds), built on Motion/OGL/GSAP. *Recreated in-house in `src/components/shared/fx.tsx` so all versions share one motion language.*
- **Motion** 13.4 (`motion/react`): enter and scroll-linked animation, springs. *Used everywhere.*
- **GSAP** 3.15 + **Lenis** 1.3: timelines and smooth scroll. Fully free since 2025. Not needed yet.
- **React Three Fiber** 9.8 + three: 3D hero objects. *Used for the v3 eyeball (route-split, client-only).*
- **OGL / Paper shaders**: lightweight single-shader backgrounds. *v3 uses a hand-written WebGL fragment shader instead (no dependency).*

## Ten low-cost "wow" techniques

1. Text scramble / decrypt on reveal.
2. Kinetic split-letter headlines.
3. Spotlight / glow-border cards driven by CSS variables.
4. Animated SVG beams between nodes.
5. Grain / noise overlay at 3–8% opacity.
6. One full-screen shader, paused off-screen and static for reduced motion.
7. CSS-only infinite marquee.
8. Magnetic buttons (disabled on touch).
9. Bento grid with scroll-linked reveals.
10. Pixel / QR-module transitions (v1 boot screen).

Performance rules: animate only `transform`/`opacity`, lazy-load WebGL, one WebGL context
per page, respect `prefers-reduced-motion`, keep amber to a single state (status dots).
