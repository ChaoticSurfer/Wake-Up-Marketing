# WakeUP Marketing — Design Lab

Frontend-only design exploration for **WakeUP Marketing**. Several complete homepage directions
built on one brand kit and one set of copy, so the team can compare them and pick one.

**Stack:** Next.js 16 (App Router, static export) · Tailwind CSS v4 · shadcn/ui (Base UI) · Motion ·
React Three Fiber (v3 only).

| Route | Direction | What it is |
| --- | --- | --- |
| `/` | Homepage | Serves **v4 Pulse** |
| `/versions` | Design Lab | Hub with previews of every version |
| `/v1` | **Signal** (flagship) | Cyber-brutalist HUD: assembling QR-eye, decrypting type, bento services with live micro-visuals |
| `/v2` | **Awaken** | Scroll story: the eye opens, a live growth dashboard animates with scroll, before/after results, packages |
| `/v3` | **Spatial** | Live WebGL shader, 3D QR eyeball, glass panels, pinned horizontal process |
| `/v4` | **Pulse** | Particle field that morphs per section (eye → UP → chart → target), kinetic word-by-word type |

Every version has the lead form and the **WakeUP AI** chat widget. A floating **Lab** pill in the
bottom-left corner jumps between versions.

## Run

```bash
npm install
npm run dev     # http://localhost:3000  → /, /versions, /v1 … /v4
npm run build   # static export → out/  (index.html, versions.html, v1.html … v4.html)
npm run lint
```

`out/` uses relative asset paths. Links between versions are clean paths (`/v2`), which is what Vercel serves. For a plain static host that only serves the files as-is, build with `NEXT_PUBLIC_FLAT_LINKS=1` so links point to `v2.html`.

## Structure

```
src/
  app/                 routes: page.tsx (homepage, v4), versions (lab hub), v1 … v4
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
docs/design-review.md  gstack design audit and the mid-sized business positioning
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

## CI/CD

`main` is the deploy branch. `.github/workflows/ci-cd.yml` lints and builds every push and pull
request to `main`. Deploys come from Vercel's Git integration on the `wake-up-marketing` project
(kezeroti2 account): pushes to `main` go to production (https://wake-up-marketing.vercel.app),
other branches and pull requests get preview URLs. No tokens or secrets are needed.
