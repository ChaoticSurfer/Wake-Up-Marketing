import type { BlogPost } from '@/lib/blog'

export const post: BlogPost = {
  locale: 'en',
  slug: 'ga4-for-small-business',
  title: 'GA4 for small business: what to set up and which five reports to read each month',
  metaTitle: 'GA4 for Small Business: Setup & Reports',
  description:
    'GA4 for small business: five things to set up once and five reports to read monthly, so Google Analytics 4 answers where enquiries come from.',
  publishedAt: '2027-01-03T18:00:00+04:00',
  updatedAt: '2027-01-03T18:00:00+04:00',
  service: 'audit',
  reviewState: 'llm_reviewed',
  body: [
    {
      type: 'p',
      text: 'GA4 for a small business comes down to two jobs: set it up once so it counts the right things, then read about five reports a month. Mark your enquiry actions as key events, connect Search Console and your ad accounts, check how long data is kept, and ignore the rest of the menu. The goal is one answer: which sources bring the enquiries and sales.',
    },
    { type: 'h2', text: 'Set up five things once' },
    {
      type: 'ol',
      items: [
        'Make sure the tag is on every page, including the thank-you page and any checkout or booking subdomain.',
        'Leave enhanced measurement on, and check what it covers (below).',
        'Mark your real business actions as key events.',
        'Link Google Search Console, and Google Ads if you run it.',
        'Set data retention and give the right people access.',
      ],
    },
    {
      type: 'p',
      text: 'Google\'s help page on [enhanced measurement](https://support.google.com/analytics/answer/9234069) lists what GA4 collects without extra code on a website: page views, scrolls to 90% of the page, outbound clicks, site searches, form starts and submits, file downloads and embedded YouTube video plays. That is a good base, but a form event is not the same as a lead. Automatic form events depend on how your form is built, so test by submitting a real enquiry from a phone and checking it shows up in the Realtime report.',
    },
    { type: 'h2', text: 'Mark key events: tell GA4 what counts as success' },
    {
      type: 'p',
      text: 'Google defines a [key event](https://support.google.com/analytics/answer/9267568) as "an event that measures an action that\'s particularly important to the success of your business." Any event GA4 collects can be marked as one. For a company site that usually means a handful of events:',
    },
    {
      type: 'ul',
      items: [
        'Contact or quote form submitted',
        'Phone number or WhatsApp button clicked',
        'Booking or demo request completed',
        'Purchase, if you sell online',
      ],
    },
    {
      type: 'p',
      text: 'Keep the list short. If everything is a key event, the conversion numbers stop meaning anything. Pick the actions that your sales team would call an enquiry, and agree on that list before you read any report. For how these numbers fit into a wider scorecard, see our post on [marketing KPIs](/blog/marketing-kpis).',
    },
    { type: 'h2', text: 'Connect Search Console and your ad accounts' },
    {
      type: 'p',
      text: 'Linking [Search Console](https://support.google.com/analytics/answer/10737381) adds two reports to GA4, one on search queries and one on landing pages for organic Google traffic. Per Google\'s help page, you need the Editor role on the Analytics property and must be a verified owner of the Search Console property. The collection is unpublished by default, so open Library and publish it. Google states the data covers up to 16 months. If you run Google Ads, link that account too so cost and campaign data sit beside your site behaviour. For Meta ads, GA4 relies on tagged links (UTM parameters), covered below.',
    },
    { type: 'h2', text: 'Five reports to read each month' },
    {
      type: 'table',
      head: ['Report question', 'Where to look', 'What you decide'],
      rows: [
        ['Where do visitors come from?', 'Reports, Acquisition, Traffic acquisition (default channel group)', 'Which channels to feed or cut'],
        ['Which channels produce key events?', 'Same report, switch the columns to key events', 'Which channel is worth its budget'],
        ['Which pages bring people in?', 'Reports, Engagement, Landing page', 'Which pages to improve or copy'],
        ['Do organic searches lead anywhere?', 'Search Console reports (after linking)', 'Which queries and pages need work'],
        ['Where do users drop off?', 'Explore, Funnel exploration, on your key steps', 'Which step of the journey to fix'],
      ],
    },
    {
      type: 'p',
      text: 'Reading channels needs one piece of knowledge: how GA4 sorts traffic. Google\'s [default channel group](https://support.google.com/analytics/answer/9756891) puts a visit in Direct only when the source is "(direct)" and the medium is "(not set)" or "(none)", and uses Unassigned as the fallback when no rule matches. A large Unassigned or Direct share can point to missing campaign tags rather than loyal visitors.',
    },
    { type: 'h2', text: 'Tag your links, or ads will look like noise' },
    {
      type: 'p',
      text: 'Every link you control and place elsewhere (Meta ads, email, bio links, partner banners) should carry UTM parameters with a consistent naming scheme: source, medium and campaign in lower case, written down in a shared sheet. Without it, paid social visits blend into Referral or Direct and you cannot compare channels. Pair the monthly report with the platform\'s own numbers, as the ad platform and GA4 will not agree exactly: different attribution rules, different counting.',
    },
    { type: 'h2', text: 'Retention and access: two settings people forget' },
    {
      type: 'p',
      text: 'Google\'s page on [data retention](https://support.google.com/analytics/answer/7667196) says standard properties can keep event data for 2 months or 14 months, and that the setting affects only explorations and funnel reports; standard reports are not affected. If you use explorations for year-on-year comparisons, check your property is on 14 months. Also keep admin access with the company, not only with a freelancer or agency, so you do not lose your history when suppliers change.',
    },
    { type: 'h2', text: 'What to ignore for now' },
    {
      type: 'ul',
      items: [
        'Custom dimensions and audiences, until a question needs them.',
        'Demographic reports on small traffic: small samples are hard to act on.',
        'Daily dashboard checking. A monthly look at the five reports, compared with the previous month, is enough.',
        'Vanity totals such as raw page views, unless they change a decision.',
      ],
    },
    {
      type: 'p',
      text: 'If the numbers look wrong, or you cannot say which channel produces enquiries, start by checking the tracking setup. Our [free marketing audit](/audit) reviews your ads, website and the path from visit to enquiry, and sends the three changes that would help most. To turn the data into changes on the site, continue with [conversion rate optimisation](/blog/website-conversion-rate-optimization), and to see how organic search fits in, read [SEO for small business](/blog/seo-for-small-business).',
    },
  ],
}
