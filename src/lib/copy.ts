// Per-language copy for the live site (homepage v2 Awaken, contact page and the shared sections).
// English reuses content.ts so the design-lab versions and the live site stay in step.
import { budgetOptions, contact, faq, homepageHeadline, nav, pains, services, testimonials, tiers } from '@/lib/content'
import { LEAD_FAILED_MESSAGE } from '@/lib/leads'

export type Locale = 'en' | 'ka'

export type SiteCopy = {
  /** Path of this language's homepage; in-page anchors are resolved against it. */
  home: string
  contactPath: string
  nav: { label: string; href: string }[]
  navCta: string
  /** Link to the same page in the other language. */
  languageSwitch: { label: string; hrefLang: Locale; name: string }
  menu: { open: string; close: string }
  /** The scripted chat only speaks English; without it the hero offers a call instead. */
  chatEnabled: boolean
  hero: {
    brand: string
    asleepLead: string
    asleepTail: string
    scrollHint: string
    /** Small line above the headline, inside the h1, so the page's main heading names the service and city. */
    kicker: string
    headlineLead: string
    headlineAccent: string
    sub: string
    primaryCta: string
    askAi: string
    callUs: string
  }
  fit: { label: string; titleLead: string; titleAccent: string; pains: { problem: string; fix: string }[] }
  engine: {
    label: string
    title: string
    steps: { k: string; t: string }[]
    dashboardTitle: string
    sample: string
    kpis: { reach: string; ctr: string; leads: string; revenue: string }
    funnel: { impressions: string; clicks: string; leads: string; customers: string }
    revenueChart: string
  }
  services: { label: string; title: string; items: { code: string; title: string; text: string }[] }
  results: {
    label: string
    title: string
    dragHint: string
    note: string
    before: string
    after: string
    beforeTitle: string
    compareLabel: string
    rows: [string, string, string][]
  }
  proof: { label: string; industries: string[]; testimonials: { quote: string; name: string; company: string }[] }
  pricing: {
    label: string
    titleLead: string
    titleAccent: string
    mostChosen: string
    discuss: (plan: string) => string
    note: string
    tiers: { name: string; price: string; note: string; items: string[]; featured?: boolean }[]
  }
  faq: { label: string; title: string; items: { q: string; a: string }[] }
  contact: {
    label: string
    title: string
    body: string
    budgetLabel: string
    budgetOptions: string[]
    name: string
    email: string
    company: string
    submit: string
    sending: string
    invalid: string
    failed: string
    receivedTitle: string
    received: (ref: string, email: string) => string
  }
  footer: { contact: string; privacy: string }
  homeMeta: { title: string; description: string }
  contactPage: { metaTitle: string; metaDescription: string; label: string; title: string; intro: string }
}

// Example before/after figures for a mid-sized Georgian business, in lari.
// "After" monthly leads match the example dashboard: 120 leads over 90 days = 40 a month.
const resultFigures: [string, string][] = [
  ['₾38', '₾19'],
  ['15', '40'],
  ['1.8x', '3.9x'],
  ['1.2%', '2.9%'],
]

/** Pairs translated metric names with the shared example figures. */
export const resultRows = (labels: string[]): [string, string, string][] =>
  labels.map((label, i) => [label, resultFigures[i][0], resultFigures[i][1]])

export const enCopy: SiteCopy = {
  home: '/',
  contactPath: '/contact',
  nav,
  navCta: 'Free audit',
  languageSwitch: { label: 'კა', hrefLang: 'ka', name: 'ქართული' },
  menu: { open: 'Open menu', close: 'Close menu' },
  chatEnabled: true,
  hero: {
    brand: 'WakeUP Marketing',
    asleepLead: 'Your market',
    asleepTail: 'is asleep.',
    scrollHint: 'Scroll to wake it up ↓',
    kicker: 'Marketing agency in Tbilisi',
    headlineLead: homepageHeadline.lead,
    headlineAccent: homepageHeadline.accent,
    sub: 'SMM, Facebook and Google Ads, SEO and websites from one senior team, for Georgian companies with 20–250 people. We report in leads and sales, not likes.',
    primaryCta: 'Get a free marketing audit',
    askAi: 'Ask WakeUP AI',
    callUs: 'Call us',
  },
  fit: { label: 'Built for mid-sized businesses', titleLead: 'Too big for freelancers.', titleAccent: 'Tired of agency theatre.', pains },
  engine: {
    label: 'The growth engine',
    title: 'One system. Four gears.',
    steps: [
      { k: 'Attract', t: 'We put your brand in front of the right buyers with targeted ads, content and SEO.' },
      { k: 'Engage', t: 'Creative that stops the scroll and makes them care, tested every week.' },
      { k: 'Convert', t: 'Landing pages and funnels built to turn attention into qualified leads.' },
      { k: 'Grow', t: 'Automation and reporting that compound results month after month.' },
    ],
    dashboardTitle: 'Example client dashboard · 90 days',
    sample: 'Sample',
    kpis: { reach: 'Reach', ctr: 'CTR', leads: 'Leads', revenue: 'Revenue' },
    funnel: { impressions: 'Impressions', clicks: 'Clicks', leads: 'Leads', customers: 'Customers' },
    revenueChart: 'Revenue from marketing',
  },
  services: { label: 'Marketing services', title: 'Everything your growth needs, under one roof.', items: services },
  results: {
    label: 'Results',
    title: 'Before and after 90 days.',
    dragHint: 'Drag the handle. ',
    note: 'Typical results from a performance engagement (example figures).',
    before: 'Before',
    after: 'After 90 days',
    beforeTitle: 'Before WakeUP',
    compareLabel: 'Compare before and after',
    rows: resultRows(['Cost per lead', 'Monthly qualified leads', 'Return on ad spend', 'Website conversion rate']),
  },
  proof: {
    label: 'Trusted by mid-sized teams across industries',
    industries: ['E-commerce', 'Hospitality', 'Real estate', 'SaaS', 'Healthcare', 'Education', 'Retail', 'Finance'],
    testimonials,
  },
  pricing: {
    label: 'Pricing',
    titleLead: 'Clear scope. Clear price.',
    titleAccent: 'No lock-in.',
    mostChosen: 'Most chosen',
    discuss: (plan) => `Discuss the ${plan} plan`,
    note: 'Prices exclude ad spend. Ad accounts, data and creative always stay in your name.',
    tiers,
  },
  faq: {
    label: 'FAQ',
    title: 'Questions we hear on every first call.',
    items: [
      {
        q: 'How much do your marketing services cost?',
        a: 'One-off projects (a website, branding or a campaign launch) start from ₾5k. Monthly plans run ₾4k–10k for most clients. Ad spend is separate and paid directly to Meta and Google. You get a fixed quote after the free audit.',
      },
      ...faq,
      {
        q: 'What does the free audit include?',
        a: 'We review your ads, website and sales process and, within one business day, send a short summary: where budget leaks and the three changes that would improve results fastest. There is no obligation.',
      },
    ],
  },
  contact: {
    label: 'Free marketing audit',
    title: 'See where your marketing budget leaks.',
    body: 'Tell us about your business. Within one business day you get a short audit of your ads, site and funnel, plus three quick wins. Free, with no obligation.',
    budgetLabel: 'Monthly marketing budget',
    budgetOptions,
    name: 'Your name',
    email: 'Work email',
    company: 'Company website',
    submit: 'Get my free audit →',
    sending: 'Sending…',
    invalid: 'Add your name and a valid work email.',
    failed: LEAD_FAILED_MESSAGE,
    receivedTitle: 'Request received',
    received: (ref, email) => `Reference ${ref}. We’ll email ${email} within one business day.`,
  },
  footer: { contact: 'Contact', privacy: 'Privacy' },
  homeMeta: {
    // "Georgia" alone matches the US state in English search; Tbilisi makes the market unambiguous.
    title: 'Marketing Agency in Tbilisi: SMM, Ads, SEO | WakeUP Marketing',
    description:
      'Marketing agency in Tbilisi: SMM, Facebook and Google Ads, SEO, websites, branding and video for mid-sized companies. Published prices, free audit.',
  },
  contactPage: {
    metaTitle: 'Contact a marketing agency in Tbilisi',
    metaDescription: `Call ${contact.phone} or email ${contact.email}, or send a short brief for a free growth audit. WakeUP Marketing works with mid-sized businesses across Georgia.`,
    label: 'Contact',
    title: 'Talk to WakeUP Marketing',
    intro: 'We work with mid-sized businesses across Georgia. Call or email us, or send the short form below and we reply within one business day.',
  },
}

