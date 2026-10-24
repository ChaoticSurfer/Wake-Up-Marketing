# WakeUP Marketing — Design Lab

Frontend-only design exploration for **WakeUP Marketing**. Several complete homepage directions
built on one brand kit and one set of copy, so the team can compare them and pick one.

**Stack:** Next.js 16 (App Router) · Tailwind CSS v4 · shadcn/ui (Base UI) · Motion ·
React Three Fiber (v3 only).

| Route | Direction | What it is |
| --- | --- | --- |
| `/` | Homepage | Serves **v2 Awaken** |
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
npm run build
npm run lint
```

## Structure

```
src/
  app/                 routes: page.tsx (homepage, v2), versions (lab hub), v1 … v4
  components/
    shared/            QrEye (canvas eye), ChatWidget, VersionSwitcher, fx.tsx (scramble, marquee,
                       magnetic, spotlight, flickering grid, number ticker, reveal)
    ui/                shadcn/ui primitives
    v1 … v4/           one folder per design direction
  lib/
    content.ts         all copy (shared by every version)
    versions.ts        version registry (drives the hub + switcher)
    chatEngine.ts      scripted chat assistant
    leads.ts           lead submission (client side of /api/lead)
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
The chat is scripted (`src/lib/chatEngine.ts`).

## Leads

The contact forms and the chat POST to `/api/lead` (`src/app/api/lead/route.ts`), which emails each lead
to `info@wakeup.ge` through [Resend](https://resend.com), sent from `leads@wakeup.ge` with the visitor as
reply-to. It needs `RESEND_API_KEY` in the Vercel project's environment variables and `wakeup.ge` verified
in Resend. If sending fails, the form shows an error with the business phone instead of a success screen.

## CI/CD

`main` is the deploy branch. `.github/workflows/ci-cd.yml` lints and builds every push and pull
request to `main`. Deploys come from Vercel's Git integration on the `wake-up-marketing` project
(kezeroti2 account): pushes to `main` go to production (https://wake-up-marketing.vercel.app),
other branches and pull requests get preview URLs. No tokens or secrets are needed.
