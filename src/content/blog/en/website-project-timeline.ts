import type { BlogPost } from '@/lib/blog'

export const post: BlogPost = {
  locale: 'en',
  slug: 'website-project-timeline',
  title: 'How long does it take to build a website? A phase-by-phase timeline',
  metaTitle: 'How Long Does It Take to Build a Website',
  description:
    'How long does it take to build a website? Published estimates run from 14 weeks to six months or more. See the weeks per phase and common delays.',
  publishedAt: '2027-01-08T09:00:00+04:00',
  updatedAt: '2027-01-08T09:00:00+04:00',
  service: 'websites',
  reviewState: 'llm_reviewed',
  body: [
    {
      type: 'p',
      text: 'How long it takes to build a website depends on its size and on how fast your team answers. One published estimate puts a simple site at two to three months. A custom or premium business site with its own design, integrations and content takes longer: published estimates run from about three and a half months at the minimum to six months or more. Published estimates agree on the phases and differ on the weeks, so plan with ranges and add a buffer for feedback and content.',
    },
    { type: 'h2', text: 'The short answer by type of site' },
    {
      type: 'p',
      text: 'Two published guides give a sense of the spread. Web developer Bill Erickson [lays out a project of discovery, design, development and a modification period that adds up to about 14 weeks at the minimum](https://www.billerickson.net/how-long-does-it-take-to-build-a-website/). The freelance platform Twine estimates [about two to three months for a simple website and six months or more for a complex one](https://www.twine.net/blog/how-long-does-it-take-to-build-a-website-a-step-by-step-timeline). These are the authors’ own estimates, not an industry standard, but they point the same way: a site that is designed for your company takes longer than one that fits a theme.',
    },
    {
      type: 'table',
      head: ['Type of site', 'Planning range', 'What drives it'],
      rows: [
        ['Simple site on a template', '2 to 3 months, per Twine', 'Content and approvals, not code'],
        ['Custom business site, 8 to 20 pages', 'About 3 to 5 months', 'Custom design, content, forms and tracking'],
        ['Premium or complex site (integrations, many page types, several languages)', '5 to 6 months or more', 'Integrations, content volume, number of approvers'],
      ],
    },
    {
      type: 'p',
      text: 'The middle and bottom rows are a planning range built from the two estimates above, not a promise: your own timeline comes from a written plan with dates, which any serious team can give you after discovery.',
    },
    { type: 'h2', text: 'The phases and how long each takes' },
    {
      type: 'p',
      text: 'Erickson’s example allows about three weeks for discovery, six for design, three for development and at least two for a modification period before launch. Twine gives wider ranges: wireframes take a week or two, mockups several weeks, CMS setup a week or two, testing a week or two and launch a few days. Combined into planning ranges (an editorial estimate built from both, not a figure either author gives), the stages look like this for a custom site:',
    },
    {
      type: 'table',
      head: ['Phase', 'Typical length', 'Who must act'],
      rows: [
        ['Discovery: goals, audience, sitemap, scope', '2 to 3 weeks', 'Decision maker, sales and marketing leads'],
        ['Design: wireframes, then visual design', '4 to 8 weeks', 'One approver, with feedback on a fixed schedule'],
        ['Content: copy, photos, video, product data', 'Runs alongside design and build, 4 weeks or more', 'Your team (or a named copywriter)'],
        ['Development: build, CMS, forms, integrations', '3 to 8 weeks', 'Developers, plus access to your tools'],
        ['Testing and modification', '2 to 3 weeks', 'Your team: check pages, send one consolidated list'],
        ['Launch: redirects, tracking, go-live', 'A few days', 'Developers, plus someone who can approve'],
      ],
    },
    {
      type: 'p',
      text: 'What happens in each stage is in [the custom web development process](/blog/custom-web-development-process), and the first stage is covered in [the website discovery phase](/blog/website-discovery-phase). The two phases that cause the most movement in the calendar are design and content, because both wait on your team.',
    },
    { type: 'h2', text: 'What decides your date before the project starts' },
    {
      type: 'ul',
      items: [
        'Choosing the team. Erickson notes that good developers are often booked one to three months ahead, and suggests starting to choose a developer four to six months before the launch you want. A written brief shortens this stage; see [the website RFP and brief](/blog/website-rfp-and-brief).',
        'Scope. More page types, languages and integrations lengthen both design and build. Twine lists custom features and third-party integrations as reasons the back-end work grows.',
        'Template or custom. Twine also notes that adapting themes and plugins can take longer than using them as they are. For the trade-off, see [custom website vs template](/blog/custom-website-vs-template).',
        'A redesign adds work. If you already have a site with traffic, the move needs a URL map and redirects; see the [website redesign checklist](/blog/website-redesign-checklist).',
      ],
    },
    {
      type: 'p',
      text: 'This post is about time. For what a site costs, see [how much a website costs](/blog/how-much-does-a-website-cost).',
    },
    { type: 'h2', text: 'Client-side delays that cause slippage' },
    {
      type: 'p',
      text: 'Most missed launch dates are not caused by code. Both guides name delays that sit on the client side:',
    },
    {
      type: 'ul',
      items: [
        'Late or incomplete content. Erickson calls missing content the most common reason a launch slips. Pages cannot be finished without real text and images, so they wait.',
        'Slow feedback. Erickson advises blocking time to review and test, and answering by the feedback dates the team sets, because faster rounds of changes get the site live sooner.',
        'Absences. Holidays and leave push review dates back when nobody warned the team.',
        'Many design revisions. Twine lists stakeholder feedback on mockups as a reason design runs long.',
        'Several contributors writing. Coordinating writers and editors makes content slower.',
        'Bugs found late. Problems found in testing extend that phase, and fixing slow load times can add more adjustments.',
      ],
    },
    { type: 'h2', text: 'How to protect the date' },
    {
      type: 'ol',
      items: [
        'Name one person who can say yes for the company and give them time in the calendar for each review.',
        'Agree feedback windows in advance (for example, comments within three working days) and send one consolidated list, not a stream of messages.',
        'Set a content deadline for every page and name who owns each. Treat missing content like a missing payment.',
        'Put leave and company events in the plan on day one.',
        'Freeze scope after design is approved. Collect new ideas in a list for a second phase after launch.',
        'Start the launch checklist early: redirects, analytics, forms and access to domain and hosting.',
      ],
    },
    { type: 'h2', text: 'Plan backwards from the launch date' },
    {
      type: 'p',
      text: 'If a campaign, trade show or season sets your date, count backwards. Subtract the launch week, two to three weeks of testing, the build and the design, then discovery, then the weeks it takes to choose a team. If the answer lands in the past, cut scope (fewer page types or one language first) instead of cutting testing or discovery.',
    },
    {
      type: 'p',
      text: 'WakeUP builds premium, complex websites and landing pages; the [website development service page](/services/website-development) describes what that includes. If you are not sure what your current site is doing before you start planning, the [free marketing audit](/audit) is a place to begin.',
    },
  ],
}
