import type { BlogPost } from '@/lib/blog'

export const post: BlogPost = {
  locale: 'en',
  slug: 'seo-roi',
  title: 'SEO ROI: how to calculate it and when SEO pays back',
  metaTitle: 'SEO ROI: Formula and Payback Period',
  description:
    'SEO ROI is gross profit from organic leads minus SEO cost, divided by that cost. How to value a lead, find the payback month and judge if SEO is worth it.',
  publishedAt: '2027-02-03T15:00:00+04:00',
  updatedAt: '2027-02-03T15:00:00+04:00',
  service: 'seo',
  reviewState: 'llm_reviewed',
  body: [
    {
      type: 'p',
      text: 'SEO ROI is the gross profit from customers that organic search brought in, minus what you spent on SEO, divided by what you spent on SEO. For a company that sells through enquiries, the missing piece is the value of one lead: your close rate multiplied by the gross profit of an average customer. SEO costs come first and leads come later, so judge it by payback month and cumulative profit, not by any single month.',
    },
    { type: 'h2', text: 'The formula, adapted to a lead-gen company' },
    {
      type: 'p',
      text: 'The general ROI formula is the same as in our guide to [calculating marketing ROI](/blog/how-to-calculate-marketing-roi): gain minus cost, divided by cost. For SEO the gain is rarely a sale you can see in one click, so build it in three steps.',
    },
    {
      type: 'ol',
      items: [
        'Lead value = close rate x average gross profit per new customer. If 1 in 10 enquiries becomes a customer and a customer leaves you 6,000 GEL of gross profit, one lead is worth 600 GEL.',
        'Organic gain = number of organic leads x lead value, counted over the same period as the cost.',
        'SEO ROI = (organic gain - SEO cost) / SEO cost x 100.',
      ],
    },
    {
      type: 'p',
      text: 'Use gross profit, not revenue, and count customers you actually won, not enquiries. If you sell repeat work, add the repeat gross profit you expect over a fixed horizon, for example 12 or 24 months, and say which horizon you used.',
    },
    { type: 'h2', text: 'What counts as SEO cost' },
    {
      type: 'ul',
      items: [
        'Agency, consultant or freelancer fees, or the salary share of an in-house person.',
        'Content: writing, translation, photos and video made for the pages you want to rank.',
        'Development time to fix technical problems or build new pages.',
        'Tools you pay for only because of SEO.',
      ],
    },
    {
      type: 'p',
      text: 'Keep the same list every month so the trend means something. [What SEO costs](/blog/how-much-does-seo-cost) depends on scope and on how competitive your searches are, so use your real quotes rather than an average from another market.',
    },
    { type: 'h2', text: 'Count the leads that SEO really produced' },
    {
      type: 'p',
      text: 'In Google Search Console, a click is counted when a user is sent from Google to a page outside Google, according to [Google\'s Performance report documentation](https://support.google.com/webmasters/answer/7042828). That tells you how many people arrived, not how many enquired. For the enquiries, mark your form submissions, calls and WhatsApp clicks as [key events in Google Analytics](https://support.google.com/analytics/answer/9267568), then read them for the organic channel.',
    },
    {
      type: 'p',
      text: 'Three things distort the count. First, searches for your own company name would have brought visitors without SEO work, so report them separately from searches for your services. Second, [attribution models](https://support.google.com/analytics/answer/10596866) decide which channel gets credit, and Google notes that all of them exclude direct visits from credit unless the whole path was direct, so a buyer who read your article, then typed your address later, may be filed elsewhere. Third, phone and chat enquiries vanish unless you track them, which makes SEO look weaker than it is. Ask every new customer how they found you and write it in your CRM.',
    },
    { type: 'h2', text: 'A payback example in GEL' },
    {
      type: 'p',
      text: 'The numbers below are invented to show the method, not a forecast. A company spends 3,000 GEL a month on SEO. One lead is worth 600 GEL (a 10% close rate on a customer worth 6,000 GEL of gross profit). Organic leads start with 2 in month 3 and rise by 2 more each month after that.',
    },
    {
      type: 'table',
      head: ['Month', 'Cumulative SEO cost', 'Cumulative organic leads', 'Cumulative gross profit', 'Net position'],
      rows: [
        ['3', '9,000 GEL', '2', '1,200 GEL', '-7,800 GEL'],
        ['6', '18,000 GEL', '20', '12,000 GEL', '-6,000 GEL'],
        ['8', '24,000 GEL', '42', '25,200 GEL', '+1,200 GEL'],
        ['12', '36,000 GEL', '110', '66,000 GEL', '+30,000 GEL'],
      ],
    },
    {
      type: 'p',
      text: 'Payback comes in month 8, when the net position turns positive. After 12 months the ROI is (66,000 - 36,000) / 36,000, about 83%. The shape matters more than the final figure: the company is 8,400 GEL behind at its lowest point, in month 4, before it recovers.',
    },
    {
      type: 'p',
      text: 'Now change one input. If only 1 in 20 enquiries closes, a lead is worth 300 GEL, the same 110 leads produce 33,000 GEL, and the 12-month ROI is about -8%. The lead volume did not change; the close rate did. Before judging SEO, check what happens to enquiries after they arrive, a problem covered in our post on [following up with leads](/blog/how-to-follow-up-with-leads).',
    },
    { type: 'h2', text: 'How long before it pays back' },
    {
      type: 'p',
      text: 'Google\'s SEO Starter Guide says: "Some changes might take effect in a few hours, others could take several months." It is published by [Google Search Central](https://developers.google.com/search/docs/fundamentals/seo-starter-guide). Competition adds to the wait: an [Ahrefs study published in May 2025](https://ahrefs.com/blog/how-long-does-it-take-to-rank/) of 1 million random URLs found that only 1.74% of newly published pages ranked in the top 10 within a year, and a second sample of 2 million English pages put it at 6.11%. Those are global figures, and a narrower Georgian-language market can behave differently, so treat them as a reminder that new pages seldom win quickly. More on this in [how long SEO takes](/blog/how-long-does-seo-take).',
    },
    {
      type: 'p',
      text: 'So set the expectation in writing before you start: the ROI you will see in the first quarter is negative by design. Agree on leading signs (pages indexed, impressions and clicks growing in Search Console, rankings for your service searches) and on a review date, such as month 6, when leads should be visible.',
    },
    { type: 'h2', text: 'Is SEO worth it for you?' },
    {
      type: 'p',
      text: 'Run your own numbers through the table above before deciding. SEO tends to make sense when:',
    },
    {
      type: 'ul',
      items: [
        'Customers search for what you sell, and the searches are specific enough to bring buyers rather than readers.',
        'One customer is worth enough that a handful of extra leads a month covers the cost.',
        'You can wait 6 to 12 months for payback and keep going afterwards, because pages that rank can keep bringing enquiries after the heaviest work is done.',
        'Someone follows up enquiries quickly, since lead value falls if they are ignored.',
      ],
    },
    {
      type: 'p',
      text: 'It makes less sense when demand for your service is tiny, when you need customers next month, or when you do not know your close rate. In that case paid ads give faster signals, and [SEO versus Google Ads](/blog/google-ads-vs-seo) compares the two. If you want an outside view of where your site stands before you commit money, [WakeUP offers SEO as a service](/services/seo) and a [free audit](/audit) that you can use to compare quotes from any provider.',
    },
  ],
}
