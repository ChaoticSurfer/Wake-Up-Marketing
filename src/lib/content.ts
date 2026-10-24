// All site copy lives here so it can be edited without touching components.
// Audience: mid-sized businesses (roughly 20–500 employees) where a CEO, founder or head of
// marketing owns growth, usually with a small in-house team.
// NOTE: figures, prices, case studies, testimonials and contact details are placeholders —
// replace with real data before launch.

export const nav = [
  { label: 'Services', href: '#services' },
  { label: 'Process', href: '#process' },
  { label: 'Results', href: '#work' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Contact', href: '#contact' },
]

export const hero = {
  eyebrow: 'Growth partner for mid-sized businesses',
  headline: 'Marketing that shows up in your revenue.',
  sub: 'A senior marketing team for companies with 20–500 people: strategy, creative and paid media in one plan, reported in revenue, not likes.',
  primaryCta: 'Get a free growth audit',
  secondaryCta: 'Ask WakeUP AI',
  // short qualifier shown under the hero instead of vanity numbers
  fit: ['20–500 employees', '$2M–$100M revenue', 'Live in 30 days'],
}

export const marquee = [
  'Brand strategy',
  'Paid media',
  'Social & content',
  'Websites & landing pages',
  'SEO',
  'Analytics & CRM',
  'Marketing automation',
]

// words prefixed with * are highlighted in red
export const manifesto =
  'Mid-sized companies get stuck in the middle: *too *big for freelancers, too small for the big agencies. So they juggle five vendors and still cannot say what marketing earned. We fix that with *one *accountable *team.'

// who we are for / the problems we solve
export const pains = [
  { problem: 'Five vendors, no owner', fix: 'One team runs brand, ads, content and web against one plan.' },
  { problem: 'Reports full of vanity metrics', fix: 'Monthly reporting in leads, pipeline and revenue your CFO can check.' },
  { problem: 'In-house team stretched thin', fix: 'We plug in next to your marketers and take execution off their desk.' },
  { problem: 'Spend grows, results do not', fix: 'Weekly testing moves budget to what actually converts.' },
]

export const services = [
  {
    code: 'S-01',
    title: 'Paid Media',
    text: 'Google, Meta and LinkedIn campaigns run against pipeline and cost per acquisition.',
    tags: ['Google Ads', 'Meta', 'LinkedIn'],
  },
  {
    code: 'S-02',
    title: 'Brand & Positioning',
    text: 'Messaging and visual identity that make you the obvious choice in your category.',
    tags: ['Positioning', 'Identity', 'Messaging'],
  },
  {
    code: 'S-03',
    title: 'Content & Social',
    text: 'Always-on content, video and social for the channels your buyers actually use.',
    tags: ['Video', 'Social', 'Thought leadership'],
  },
  {
    code: 'S-04',
    title: 'Websites & Landing Pages',
    text: 'Fast sites and landing pages built to turn visits into qualified enquiries.',
    tags: ['Web design', 'CRO', 'Landing pages'],
  },
  {
    code: 'S-05',
    title: 'SEO & Content Marketing',
    text: 'Technical SEO and expert content that bring in demand month after month.',
    tags: ['Technical SEO', 'Content', 'Links'],
  },
  {
    code: 'S-06',
    title: 'Analytics, CRM & Automation',
    text: 'Tracking, dashboards and CRM flows so every lead is measured and followed up.',
    tags: ['GA4', 'HubSpot', 'Email'],
  },
]

export const stats = [
  { value: 60, suffix: '+', label: 'Mid-sized clients served' },
  { value: 4.8, suffix: 'x', label: 'Average return on ad spend', decimals: 1 },
  { value: 38, suffix: '%', label: 'Lower cost per lead in 90 days' },
  { value: 94, suffix: '%', label: 'Clients renew after year one' },
]

export const process = [
  {
    step: '01',
    title: 'Audit',
    text: 'Week 1–2. We review your ads, site, CRM and numbers, then show you where money leaks.',
  },
  {
    step: '02',
    title: 'Plan',
    text: 'Week 3. A 90-day plan with channels, budget split, owners and target KPIs.',
  },
  {
    step: '03',
    title: 'Launch',
    text: 'Week 4. Campaigns, content and pages go live, with tracking in place from day one.',
  },
  {
    step: '04',
    title: 'Scale',
    text: 'Every month. Weekly tests, a monthly review with leadership, budget moved to what works.',
  },
]

export const cases = [
  {
    id: 'CASE_01',
    client: 'Regional retailer · 180 employees',
    title: 'Online sales overtook the stores',
    metric: '+212%',
    metricLabel: 'online revenue in 12 months',
    tags: ['Paid media', 'Web'],
  },
  {
    id: 'CASE_02',
    client: 'Hospitality group · 6 venues',
    title: 'Direct bookings instead of platform fees',
    metric: '6.2x',
    metricLabel: 'return on ad spend',
    tags: ['Social', 'Local ads'],
  },
  {
    id: 'CASE_03',
    client: 'B2B services firm · 90 employees',
    title: 'A sales pipeline that no longer depends on referrals',
    metric: '−41%',
    metricLabel: 'cost per qualified lead',
    tags: ['LinkedIn', 'Automation'],
  },
]

export const testimonials = [
  {
    quote: 'We replaced three agencies with WakeUP and finally get one report that ties spend to revenue.',
    name: 'CEO',
    company: 'Retail company, 180 employees',
  },
  {
    quote: 'They work like part of our team. My two marketers now spend their time on strategy, not on chasing vendors.',
    name: 'Head of Marketing',
    company: 'Hospitality group',
  },
  {
    quote: 'Within a quarter our pipeline stopped depending on referrals.',
    name: 'Managing Director',
    company: 'B2B services firm, 90 employees',
  },
]

export const tiers = [
  {
    name: 'Launch',
    price: 'from $4k',
    note: 'one-off project, 4–6 weeks',
    items: ['Growth audit and 90-day plan', 'Campaign or website launch', 'Tracking and dashboard set-up', 'Handover to your team'],
  },
  {
    name: 'Growth',
    price: '$6k–15k / mo',
    note: 'most mid-sized clients',
    items: ['Paid media across 2–3 channels', 'Creative and content every week', 'Landing pages and CRO', 'Monthly review with leadership'],
    featured: true,
  },
  {
    name: 'Partner',
    price: 'from $15k / mo',
    note: 'multi-market or multi-brand',
    items: ['Dedicated senior team', 'Brand, content and performance', 'CRM and marketing automation', 'Quarterly board-ready reporting'],
  },
]

export const faq = [
  {
    q: 'Who do you usually work with?',
    a: 'Companies with roughly 20–500 employees, often with a small in-house marketing team and a CEO or head of marketing who owns growth.',
  },
  {
    q: 'How long is the contract?',
    a: 'Monthly plans run on a 3-month minimum, then month to month. Projects are fixed scope and fixed price.',
  },
  {
    q: 'Who owns the ad accounts and data?',
    a: 'You do. Ad accounts, analytics and creative stay in your name, so you can leave any time with everything intact.',
  },
  {
    q: 'How do you report results?',
    a: 'A live dashboard plus a monthly review in leads, pipeline, cost per acquisition and revenue, not impressions.',
  },
  {
    q: 'How fast can we start?',
    a: 'The audit starts within a week of the first call, and most clients are live within 30 days.',
  },
]

export const serviceOptions = [
  'Paid media',
  'Brand',
  'Content & social',
  'Website',
  'SEO',
  'Analytics & CRM',
  'Not sure yet',
]

export const budgetOptions = ['< $5k / mo', '$5k – $10k', '$10k – $25k', '$25k+']

export const companySizeOptions = ['1–19', '20–99', '100–249', '250–500', '500+']

export const contact = {
  email: 'info@wakeup.ge',
  phone: '+995 598 770 543',
  socials: [
    { label: 'LinkedIn', href: '#' },
    { label: 'Instagram', href: 'https://www.instagram.com/wake.up.marketing/' },
    { label: 'Facebook', href: '#' },
    { label: 'TikTok', href: '#' },
  ],
}
