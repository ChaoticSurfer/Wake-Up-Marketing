import type { BlogPost } from '@/lib/blog'

export const post: BlogPost = {
  locale: 'en',
  slug: 'marketing-attribution-models',
  title: 'Marketing attribution models: first touch, last touch and multi-touch, and which to read',
  metaTitle: 'Marketing Attribution Models Explained',
  description:
    'Marketing attribution models explained: what first-touch, last-touch and multi-touch credit, and which one suits a small company with a short sales cycle.',
  publishedAt: '2027-01-19T18:00:00+04:00',
  updatedAt: '2027-01-19T18:00:00+04:00',
  service: 'audit',
  reviewState: 'llm_reviewed',
  body: [
    {
      type: 'p',
      text: 'A marketing attribution model is a rule for deciding which marketing touchpoint gets credit for a sale or enquiry. First-touch gives all the credit to the first interaction, last-touch to the final one, and multi-touch splits it across several. A small company with a short sales cycle can usually rely on last-touch in GA4 and Meta\'s default click window, then check both against its own sales records.',
    },
    { type: 'h2', text: 'What each model credits' },
    {
      type: 'p',
      text: 'Take one customer. She sees your Instagram ad on Monday, searches your name on Google on Wednesday, clicks a Google ad on Friday and fills in the form. Each model tells a different story about the same person.',
    },
    {
      type: 'table',
      head: ['Model', 'Who gets the credit', 'In the example', 'Good for answering'],
      rows: [
        ['First touch', '100% to the first interaction', 'Instagram ad', 'Which channels create new interest?'],
        ['Last touch', '100% to the final interaction', 'Google ad', 'Which channels close the enquiry?'],
        ['Linear (multi-touch)', 'Equal share to every touch', 'About one third each', 'Which channels take part at all?'],
        ['Position-based (multi-touch)', 'More to the first and last, the rest shared', 'Mostly Instagram and Google', 'How do opening and closing channels compare?'],
        ['Data-driven (multi-touch)', 'Share estimated from your account\'s own data', 'Varies by account', 'Which touches changed the outcome?'],
      ],
    },
    {
      type: 'p',
      text: 'RedTrack, an attribution software vendor, puts the trade-off this way: first-touch shows [which channels create awareness](https://www.redtrack.io/blog/first-touch-vs-last-touch-attribution/) while last-touch shows which channels close sales but gives no credit to awareness channels such as content and social. Treat vendor advice as a viewpoint.',
    },
    { type: 'h2', text: 'The problem with any single model' },
    {
      type: 'p',
      text: 'First-touch makes awareness channels look like heroes and ignores everything that came after. Last-touch rewards the final click, which is often a branded search or a retargeting ad that only collected someone another channel had already convinced. Google\'s consumer research found that the path between trigger and purchase [is not linear](https://business.google.com/en-all/think/consumer-insights/navigating-purchase-behavior-and-decision-making/), with people looping between exploring and evaluating options. No model can fully reproduce that loop, so models are lenses, not truth.',
    },
    {
      type: 'p',
      text: 'There is also a measurement gap that no model fixes. Tracking only sees the touches it can see: a click, a tagged link, a logged-in visit. A recommendation from a friend, a billboard or a chat in a messenger leaves no trace. That is why the most useful attribution question in a small company is often the one nobody tracks automatically: "How did you hear about us?" on the enquiry form or in the first call.',
    },
    { type: 'h2', text: 'What GA4 gives you' },
    {
      type: 'p',
      text: 'GA4 no longer offers the old rule-based multi-touch models. Google\'s Analytics Help says the first click, linear, time decay and position-based models [are no longer available as of November 2023](https://support.google.com/analytics/answer/10596866). The attribution reports offer three models:',
    },
    {
      type: 'ul',
      items: [
        'Data-driven: credit is distributed using your account\'s own data on how touches contributed to a key event.',
        'Paid and organic last click: all credit goes to the last channel clicked, ignoring direct visits (also called last non-direct click).',
        'Google paid channels last click: all credit goes to the last Google Ads click, and falls back to paid and organic last click when there is none.',
      ],
    },
    {
      type: 'p',
      text: 'For a small company, paid and organic last click is the easiest to explain to a boss or a finance colleague, and data-driven is worth trying when you have enough conversions for Google to model. Read the same report under each model once and note which channels move up or down; that difference is more informative than either number alone. Setting up the events behind these reports is covered in [GA4 for small business](/blog/ga4-for-small-business).',
    },
    { type: 'h2', text: 'What Meta gives you' },
    {
      type: 'p',
      text: 'Meta works differently, because it counts conversions inside its own platform and also credits people who saw an ad but never clicked. Jon Loomer, in a March 2026 write-up, says the default for website-conversion ad sets is [7-day click-through, 1-day engage-through and 1-day view-through](https://www.jonloomer.com/meta-ads-attribution-2026/). A click-through conversion counts if it happens within seven days of the click, and a view-through conversion counts when someone converts within a day of being served the impression and without clicking. Meta changed its attribution setup in 2026, so check the window shown in your own ad set rather than relying on any article, including this one.',
    },
    {
      type: 'p',
      text: 'This is why Meta and GA4 almost never agree. Meta may claim a lead that GA4 credits to Google search, because the person saw an ad, did not click, and searched later. Both numbers are honest within their own rules. The tracking side of this is explained in [Meta Pixel vs Conversions API](/blog/meta-pixel-vs-conversions-api).',
    },
    { type: 'h2', text: 'Which model a small company should read' },
    {
      type: 'p',
      text: 'If your customers decide in days, not months, the gap between first and last touch is small, and simple works. A practical default:',
    },
    {
      type: 'ol',
      items: [
        'Use last click in GA4 (paid and organic) to see which channels bring the final visit, and the 7-day click numbers in Meta to judge ad sets.',
        'Once a quarter, compare against data-driven in GA4 and against Meta\'s view-through numbers, to spot channels that open more than they close.',
        'Add "how did you hear about us?" to forms and calls, and write the answer in your CRM.',
        'Judge the real result by your own sales records: enquiries that became paying customers, by source. Ad platform numbers are claims, and your CRM is the check.',
        'Do not move budget on one model alone. If last-touch says cut a channel that first-touch says opens most journeys, test the cut for a few weeks before making it permanent.',
      ],
    },
    {
      type: 'p',
      text: 'Multi-touch tools make sense when journeys are long and cross many channels, such as high-ticket B2B. For most Georgian companies with 20 to 250 people, the effort is better spent on clean tracking and an honest CRM than on a more complex model. Which numbers to report on are in [marketing KPIs](/blog/marketing-kpis), and how the channels split the work is in [lead generation strategies](/blog/lead-generation-strategies).',
    },
    {
      type: 'p',
      text: 'If your GA4, Meta and CRM numbers disagree and you cannot tell why, that is exactly what a measurement review sorts out. WakeUP\'s [free marketing audit](/audit) looks at your ads, website and sales process.',
    },
  ],
}
