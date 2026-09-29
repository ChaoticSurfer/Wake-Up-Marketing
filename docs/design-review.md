# Design review — gstack method (29 Sept 2026)

Method: [gstack](https://github.com/garrytan/gstack) `/plan-design-review` for positioning, then the
`/design-review` audit (first impression, design-system extraction, 10-category checklist, AI-slop
check, hard rules). gstack's own browser was not installed, so its probes were run with Playwright
against all four versions at 1440px and 375px.

Classifier: **PERSUADE** (marketing site). Landing-page rules apply.

## Audience decision

Mid-sized businesses, roughly 20–500 employees and $2M–$100M revenue. The buyer is a CEO, founder or
head of marketing with a small in-house team. They are too big for freelancers and too small for
big-agency retainers, juggle several vendors, and cannot tie spend to revenue.

What this buyer needs to see, and where the site now shows it:

| Need | Where |
| --- | --- |
| "Is this for a company like mine?" | Hero eyebrow and fit line (20–500 employees · $2M–$100M · live in 30 days), "Built for mid-sized businesses" section |
| What it costs | Pricing section with three plans and prices, "Pricing" in the nav |
| How onboarding works | Process rewritten as a week-by-week timeline (audit → plan → launch → scale) |
| Proof from companies their size | Case studies and quotes labelled with company type and headcount |
| Risk questions | FAQ: contract length, who owns ad accounts and data, reporting, start date |
| Qualification | Company-size field in the v1 form, budgets rescaled to $5k–$25k+ |

## Findings and fixes

| # | Finding | Impact | Status |
| --- | --- | --- | --- |
| 1 | Copy spoke to no one in particular ("your audience is asleep"); no audience qualifier | High | Fixed: all copy rewritten for mid-sized buyers (`src/lib/content.ts`) |
| 2 | Pricing hidden in v1, v3, v4 (goodwill −15) | High | Fixed: shared Pricing section on every version |
| 3 | Placeholder used as the only label in v2, v3, v4 forms (hard rule) | High | Fixed: visible labels via `LabeledInput` |
| 4 | Up to 100 text elements under 12px (HUD labels at 9–11px) | High | Fixed: 0 remaining; `hud-label` is now 12px |
| 5 | Touch targets under 44px (nav, chips, footer, CTAs), up to 30 per page | Medium | Fixed: only the Lab review pill remains, which is not part of the site |
| 6 | v2 hero h1 at 115px, over the 6rem display cap | Medium | Fixed: 92px |
| 7 | v3 gradient-text headline (AI-slop pattern) | Medium | Fixed: solid brand red |
| 8 | v1 "monospace as costume": fake UTC clock, "SYS://WAKEUP — ONLINE", "Focus 98.2%" | Medium | Fixed: removed |
| 9 | Three vanity numbers under the v1 and v4 heroes (judgment tell) | Medium | Fixed: replaced with the audience fit line |
| 10 | Testimonials with no names | Medium | Open: now labelled with company type and size; need real names before launch |
| 11 | Glass surfaces everywhere in v3 | Polish | Kept on purpose for that direction |

## Grades

| Version | Before | After | Notes |
| --- | --- | --- | --- |
| v1 Signal | C+ | B+ | Strongest brand; HUD costume removed |
| v2 Awaken | B− | B+ | Best story for a CEO; engine dashboard is the hero moment |
| v3 Spatial | C+ | B | Gradient text removed; heavy glass is a deliberate style |
| v4 Pulse | B− | B+ | Particle shapes carry the narrative without clutter |

AI-slop score moved from C to B across the set. It stays short of A until placeholder
testimonials and figures are replaced with real ones.
