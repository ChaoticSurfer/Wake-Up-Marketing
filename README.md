# WakeUP Marketing — Design Lab

Frontend-only design exploration for **WakeUP Marketing**. Several complete homepage directions
built on one brand kit and one set of copy, so the team can compare them and pick one.

**Stack:** Next.js 16 (App Router, static export) · Tailwind CSS v4 · shadcn/ui (Base UI) · Motion ·
React Three Fiber (v3 only).

| Route | Direction | What it is |
| --- | --- | --- |
| `/` | Design Lab | Hub with previews of every version |
| `/v1` | **Signal** (flagship) | Cyber-brutalist HUD: assembling QR-eye, decrypting type, bento services with live micro-visuals |
| `/v2` | **Editorial** | Swiss kinetic on white: giant moving type, grid rules, red floods |
| `/v3` | **Spatial** | Live WebGL shader, 3D QR eyeball, glass panels, pinned horizontal process |
| `/v4` | **Terminal** | Red-phosphor CRT, boot sequence, pixel eye, command-line sections (keys 1–4) |

Every version has the lead form and the **WakeUP AI** chat widget. A floating **Lab** pill in the
bottom-left corner jumps between versions.

## Run

```bash
npm install
npm run dev     # http://localhost:3000  → /, /v1 … /v4
npm run build   # static export → out/  (index.html, v1.html … v4.html)
npm run lint
```

`out/` uses relative asset paths, so it can be dropped into any static host or sub-folder.

## Structure

```
src/
  app/                 routes: page.tsx (lab hub), v1 … v4
  components/
    shared/            QrEye (canvas eye), ChatWidget, VersionSwitcher, fx.tsx (scramble, marquee,
                       magnetic, spotlight, flickering grid, number ticker, reveal)
    ui/                shadcn/ui primitives
    v1 … v4/           one folder per design direction
  lib/
    content.ts         all copy (shared by every version)
    versions.ts        version registry (drives the hub + switcher)
    chatEngine.ts      scripted chat assistant
    leads.ts           lead submission
  fonts/               Swiss 721 Heavy (brand display face)
docs/research.md       design research behind the directions
```

## Adding a version

1. Create `src/components/vN/` and `src/app/vN/page.tsx` (include `<ChatWidget />` and `<VersionSwitcher current="vN" />`).
2. Add an entry to `src/lib/versions.ts`.
3. Put a 1440×900 screenshot at `public/lab/vN.jpg`.

## Brand

Red `#E40613`, black `#111111`, white, graphite `#313231`. Amber `#FFA800` is a rare accent and
only appears on "online" status dots. Tokens live in `src/app/globals.css`.

## Placeholders

Stats, case studies, testimonials, email and phone in `src/lib/content.ts` are placeholders.
The chat is scripted (`src/lib/chatEngine.ts`). Leads are stored in `localStorage` unless
`NEXT_PUBLIC_LEAD_ENDPOINT` is set, in which case they are POSTed there as JSON.
