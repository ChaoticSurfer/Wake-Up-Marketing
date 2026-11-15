import type { BlogPost } from '@/lib/blog'

export const post: BlogPost = {
  locale: 'en',
  slug: 'corporate-website-requirements',
  title: 'Enterprise website vs small business website: what changes when you outgrow a brochure site',
  metaTitle: 'Enterprise Website vs Small Business',
  description:
    'Enterprise website vs small business website: five things that change as a company grows - audiences, governance, integrations, compliance and scale.',
  publishedAt: '2027-02-10T09:00:00+04:00',
  updatedAt: '2027-02-10T09:00:00+04:00',
  service: 'websites',
  reviewState: 'llm_reviewed',
  body: [
    {
      type: 'p',
      text: 'The difference in an enterprise website vs small business website comparison is not size or looks. A small business site has one owner, one audience and a few forms. A corporate site serves several audiences, is edited by many people under approval rules, connects to other systems, must meet legal and accessibility standards, and has to stay fast and consistent across languages and hundreds of pages. A company of 20 to 250 people can reach this point sooner than its site was planned for.',
    },
    {
      type: 'p',
      text: 'This post is about the requirements that change, not the price. For cost, read [how much a website costs](/blog/how-much-does-a-website-cost); for the basics a small site needs, see [pages a business website needs](/blog/pages-a-business-website-needs).',
    },
    { type: 'h2', text: 'The five changes side by side' },
    {
      type: 'table',
      head: ['Area', 'Small business site', 'Corporate site'],
      rows: [
        ['Audiences', 'Customers, mostly one journey', 'Customers, partners, candidates, investors, press, each with its own path'],
        ['Editing', 'One or two people change anything', 'Many editors, roles, drafts, approvals and an audit trail'],
        ['Systems', 'A contact form to an inbox', 'CRM, marketing tools, HR, booking, product data, single sign-on'],
        ['Risk', 'Basic hygiene', 'Data-protection duties, accessibility, security reviews, uptime commitments'],
        ['Scale', 'Tens of pages, one language', 'Hundreds of pages, several languages and markets, shared templates'],
      ],
    },
    { type: 'h2', text: 'Change 1: Several audiences, not one visitor' },
    {
      type: 'p',
      text: 'A small site can say everything on the home page. A corporate site has buyers who want proof, existing customers who want support, candidates who want to see the team, and partners or journalists who want facts. Mixing them on one navigation makes each group work harder.',
    },
    {
      type: 'ul',
      items: [
        'List the audiences and the one job each must be able to finish: request a quote, find a document, apply, contact the press office.',
        'Give each a clear entry point in the navigation and its own landing pages, with shared content kept in one place.',
        'Decide who owns each section. A careers page with no owner tends to go stale.',
        'Plan search on the site once the page count passes what a menu can hold.',
      ],
    },
    { type: 'h2', text: 'Change 2: Governance - who may change what' },
    {
      type: 'p',
      text: 'On a small site, access is a password. On a corporate site, it is a policy. The requirements to write down are roles (who can edit, who can publish, who can only view), an approval step for pages that carry legal, pricing or brand claims, version history so a mistake can be reversed, and a named person who owns each content area.',
    },
    {
      type: 'p',
      text: 'Governance also covers the design itself: a documented set of components, colours and tone so that a new page built by a new team still looks like the same company. Without it, every campaign adds a one-off page and the site drifts. The choice of content system follows from these needs; [headless CMS for a business website](/blog/headless-cms-for-business-website) explains when a separated back end is worth it, and [website maintenance](/blog/website-maintenance-checklist) covers who keeps it running.',
    },
    { type: 'h2', text: 'Change 3: Integrations are part of the site' },
    {
      type: 'p',
      text: 'A corporate website rarely stands alone. Leads should land in the sales system with their source, job applications go to the HR tool, bookings to a calendar, product or price data from the system that holds it. Each connection needs an owner, a failure plan (what happens when the other system is down) and a test before launch. The patterns are covered in [website and CRM integration](/blog/website-crm-integration).',
    },
    {
      type: 'p',
      text: 'When integrations and logged-in features dominate, you may be describing a web application with a public site in front; [web application vs website](/blog/web-application-vs-website) helps you tell which one you need.',
    },
    { type: 'h2', text: 'Change 4: Compliance, accessibility and security' },
    {
      type: 'p',
      text: 'These are requirements to write into the brief from day one, because they are expensive to retrofit.',
    },
    {
      type: 'ul',
      items: [
        'Personal data. Georgia\'s Law on Personal Data Protection was adopted on 14 June 2023 and its main provisions took effect on 1 March 2024; it requires controllers to notify the regulator of an incident within 72 hours unless the incident is unlikely to cause significant harm, according to [DLA Piper\'s country summary](https://www.dlapiperdataprotection.com/?t=law&c=GE). That summary also reports that the State Audit Office took over the regulator\'s functions on 2 March 2026. Forms, cookies, analytics and chatbots all collect data, so ask your lawyer to review what the site collects and why. If you serve visitors in other countries, other regimes may apply as well.',
        'Accessibility. The W3C recommends the latest version of its guidelines, [WCAG 2.2](https://www.w3.org/WAI/standards-guidelines/wcag/), which added nine success criteria to WCAG 2.1. Conformance has three levels, and [Level AA](https://www.w3.org/WAI/WCAG22/Understanding/conformance) means the page meets all Level A and Level AA criteria. Name the level you require in the contract. The practical steps are in [website accessibility basics](/blog/website-accessibility-basics).',
        'Security. The [OWASP Top 10](https://owasp.org/www-project-top-ten/) describes itself as the reference standard for the most critical web application security risks; asking a supplier how they address it is a fair requirement. Day-to-day controls are in [website security basics](/blog/website-security-basics).',
      ],
    },
    { type: 'h2', text: 'Change 5: Scale across pages, languages and markets' },
    {
      type: 'p',
      text: 'At scale, pages come from templates, so one mistake repeats hundreds of times. Plan for fast templates, reusable components and a performance budget that is checked, not hoped for. Languages need a rule as well: Google recommends [different URLs for each language version](https://developers.google.com/search/docs/specialty/international/managing-multi-regional-sites) of a page, and the language versions must be kept in step by someone. See [multilingual website best practices](/blog/multilingual-website-best-practices).',
    },
    {
      type: 'p',
      text: 'Search also changes shape at scale: template-level fixes, approvals and risk matter more than single-page tweaks, which [enterprise SEO vs small business SEO](/blog/enterprise-seo-vs-small-business-seo) explains for companies in your size range.',
    },
    { type: 'h2', text: 'Turn this into a requirements list' },
    {
      type: 'p',
      text: 'Before you ask any agency for a proposal, answer these in writing. Short answers are enough; the aim is to make requirements checkable.',
    },
    {
      type: 'ol',
      items: [
        'Who are the audiences, and what is the one job each must finish?',
        'Who edits, who approves and who owns each section?',
        'Which systems must connect, and who owns each connection?',
        'Which legal, accessibility and security standards apply, and at what level?',
        'Which languages and markets at launch, and which later?',
        'What are the measurable targets: speed, uptime, enquiries, or tasks completed?',
        'Who maintains the site after launch, and how are changes requested?',
      ],
    },
    {
      type: 'p',
      text: 'Then use [a discovery phase](/blog/website-discovery-phase) to test the answers and [a brief or RFP](/blog/website-rfp-and-brief) to compare suppliers. [Choosing a web development agency](/blog/choose-web-development-agency) covers the selection itself.',
    },
    { type: 'h2', text: 'Where WakeUP fits' },
    {
      type: 'p',
      text: 'WakeUP builds premium, complex websites and landing pages; see [website development](/services/website-development). If your current site already carries some of these needs, the [free audit](/audit) is a way to see what it handles today and what the gaps are before you write the brief.',
    },
  ],
}
