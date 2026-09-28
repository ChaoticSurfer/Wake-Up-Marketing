# WakeUP Marketing — website frontend

Futuristic, brand-driven marketing site for **WakeUP Marketing**. Frontend only (English).

Stack: **Vite + React 19 + TypeScript**, hand-written CSS (no UI framework), zero runtime dependencies beyond React.

## Run

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # production build → dist/
npm run preview   # serve the build
npm run lint
```

## What's inside

| Section | Notes |
| --- | --- |
| Boot preloader | Glitching logo + progress bar, once per session, skipped for reduced motion |
| Hero | Live canvas **QR-eye** (brand mark rebuilt in code): pupil tracks the cursor, data modules flicker, scan beam, blinks on click |
| Marquee / Manifesto | Red service ticker; manifesto words light up on scroll |
| Services, Stats, Process, Work, Testimonials | Scroll reveals, spotlight hover cards, animated counters, scroll-driven process rail |
| **Lead form** (`#contact`) | Validated form with service/budget chips, progress meter, sending + success states |
| **Chat** (WakeUP AI) | Floating launcher, teaser bubble, typing indicator, quick replies, in-chat lead capture |

## Brand

Assets come from the brand kit (Google Drive):

- Colors: red `#E40613`, black `#111111`, white `#FFFFFF`, graphite `#313231`, amber `#FFA800` (rare accent — only the "online" status dots)
- Display font: Swiss 721 Heavy (`public/fonts`, subset to WOFF2). Body: Space Grotesk, mono: JetBrains Mono (Google Fonts)
- Logos: `public/brand`

Design tokens live at the top of `src/index.css`.

## Editing content

All copy is in `src/content.ts`. **Stats, case studies, testimonials, email and phone are placeholders** — replace before launch.

## Hooking up a backend

- **Leads** — `src/lib/leads.ts`. Set `VITE_LEAD_ENDPOINT` (e.g. in `.env.local`) and both the form and the chat POST JSON there:
  `{ name, email, phone?, company?, services?, budget?, message?, source: "form" | "chat", createdAt, page }`.
  Without it, submissions are simulated and stored in `localStorage` (`wu_leads`) for testing.
- **Chat** — `src/lib/chatEngine.ts` is a scripted, keyword-based assistant. Replace `reply()` with a call to your AI/chat API; the UI only depends on the `BotTurn` shape.

## Project structure

```
src/
  App.tsx              page composition
  content.ts           all copy
  index.css            design system + all styles
  components/
    QrEye.tsx          animated canvas eye
    Hero.tsx, Nav.tsx, Sections.tsx, LeadForm.tsx, Chat.tsx, Footer.tsx, Preloader.tsx
  lib/
    leads.ts           lead submission
    chatEngine.ts      chat bot logic
    hooks.ts           reveal / in-view / scroll-progress hooks
```
