// All site copy lives here so it can be edited without touching components.
// NOTE: stats, cases, testimonials and contact details are placeholders — replace with real data before launch.

export const nav = [
  { label: 'Services', href: '#services' },
  { label: 'Process', href: '#process' },
  { label: 'Work', href: '#work' },
  { label: 'Contact', href: '#contact' },
]

export const marquee = [
  'Brand strategy',
  'Performance ads',
  'Social media',
  'Content production',
  'Web & landing pages',
  'SEO',
  'Analytics',
  'Growth automation',
]

// words prefixed with * are highlighted in red
export const manifesto =
  'Most brands are invisible. Not because they are bad — because they are quiet. We build *loud, *precise, *data-driven marketing that cuts through the scroll and turns sleepy audiences into *paying *customers.'

export const services = [
  {
    code: 'S-01',
    title: 'Brand Strategy & Identity',
    text: 'Positioning, naming, visual systems and tone of voice that make you impossible to ignore.',
    tags: ['Positioning', 'Identity', 'Guidelines'],
  },
  {
    code: 'S-02',
    title: 'Performance Marketing',
    text: 'Meta, Google and TikTok campaigns engineered around one metric: profitable growth.',
    tags: ['Meta Ads', 'Google Ads', 'TikTok'],
  },
  {
    code: 'S-03',
    title: 'Social Media & Content',
    text: 'Scroll-stopping content, community management and creator partnerships on autopilot.',
    tags: ['Reels', 'Creators', 'Community'],
  },
  {
    code: 'S-04',
    title: 'Web & Landing Pages',
    text: 'Fast, conversion-obsessed websites and funnels that turn clicks into leads.',
    tags: ['UX / UI', 'CRO', 'Funnels'],
  },
  {
    code: 'S-05',
    title: 'SEO & Content Marketing',
    text: 'Technical SEO and editorial content that compounds traffic month after month.',
    tags: ['Technical SEO', 'Editorial', 'Links'],
  },
  {
    code: 'S-06',
    title: 'Analytics & Automation',
    text: 'Tracking, dashboards, CRM and email flows so every lead is measured and nurtured.',
    tags: ['GA4', 'CRM', 'Email flows'],
  },
]

export const stats = [
  { value: 120, suffix: '+', label: 'Campaigns launched' },
  { value: 4.8, suffix: 'x', label: 'Average ROAS', decimals: 1 },
  { value: 35, suffix: 'M', label: 'Impressions per year' },
  { value: 98, suffix: '%', label: 'Client retention' },
]

export const process = [
  {
    step: '01',
    title: 'Scan',
    text: 'Audit your brand, market, competitors and funnel. We find where attention is leaking.',
  },
  {
    step: '02',
    title: 'Strategy',
    text: 'A clear plan: audiences, channels, messaging, budget split and the KPIs that matter.',
  },
  {
    step: '03',
    title: 'Launch',
    text: 'Creative, campaigns and pages go live fast — then we test everything, constantly.',
  },
  {
    step: '04',
    title: 'Scale',
    text: 'Double down on what works, cut what does not, and report in plain language every week.',
  },
]

export const cases = [
  {
    id: 'CASE_01',
    client: 'E-commerce fashion brand',
    title: 'From 0 to sold-out drops',
    metric: '+312%',
    metricLabel: 'online revenue',
    tags: ['Performance', 'Content'],
  },
  {
    id: 'CASE_02',
    client: 'Restaurant group',
    title: 'Fully booked, every weekend',
    metric: '6.2x',
    metricLabel: 'return on ad spend',
    tags: ['Social', 'Local ads'],
  },
  {
    id: 'CASE_03',
    client: 'B2B SaaS startup',
    title: 'A pipeline that fills itself',
    metric: '-48%',
    metricLabel: 'cost per lead',
    tags: ['Funnels', 'Automation'],
  },
]

export const testimonials = [
  {
    quote: 'They didn’t just run our ads — they rebuilt how we think about growth. Our best quarter, by far.',
    name: 'Founder',
    company: 'E-commerce brand',
  },
  {
    quote: 'Fast, sharp and brutally honest with data. Exactly the partner we needed.',
    name: 'Marketing Director',
    company: 'Hospitality group',
  },
  {
    quote: 'The new site and campaigns paid for themselves in the first month.',
    name: 'CEO',
    company: 'SaaS startup',
  },
]

export const serviceOptions = [
  'Branding',
  'Performance ads',
  'Social media',
  'Website',
  'SEO',
  'Analytics',
  'Not sure yet',
]

export const budgetOptions = ['< $2k / mo', '$2k – $5k', '$5k – $15k', '$15k+']

export const contact = {
  email: 'hello@wakeup.marketing',
  phone: '+000 000 000 000',
  socials: [
    { label: 'Instagram', href: '#' },
    { label: 'Facebook', href: '#' },
    { label: 'LinkedIn', href: '#' },
    { label: 'TikTok', href: '#' },
  ],
}
