import type { BlogPost } from '@/lib/blog'

export const post: BlogPost = {
  locale: 'en',
  slug: 'how-to-calculate-marketing-roi',
  title: 'How to calculate marketing ROI with gross profit, not revenue',
  metaTitle: 'How to Calculate Marketing ROI',
  description:
    'How to calculate marketing ROI: the formula, why to use gross profit instead of revenue, which costs to count, and a worked example in GEL.',
  publishedAt: '2027-01-28T09:00:00+04:00',
  updatedAt: '2027-01-28T09:00:00+04:00',
  service: 'audit',
  reviewState: 'llm_reviewed',
  body: [
    {
      type: 'p',
      text: 'To calculate marketing ROI, subtract your total marketing cost from the gross profit the marketing produced, divide by that same cost, and multiply by 100. Use gross profit, meaning revenue minus the direct cost of delivering the sale, not revenue, because revenue ignores what each sale costs you. Count every marketing cost, not only ad spend, and measure over a period long enough for the sales to close.',
    },
    { type: 'h2', text: 'The formula' },
    {
      type: 'p',
      text: 'IE Business School [gives the formula](https://www.ie.edu/uncover-ie/what-is-roi-ie-business-school/) as ROI (%) = ((Gain from investment - Cost of investment) / Cost of investment) x 100, and notes it is equivalent to net profit divided by cost of investment, times 100. Harvard Business School Online [writes it the same way](https://online.hbs.edu/blog/post/how-to-calculate-roi-for-a-project). For marketing, the choices that matter are what you put in as the gain and what you put in as the cost.',
    },
    {
      type: 'ul',
      items: [
        'Gain: gross profit from customers the marketing brought in, not revenue.',
        'Cost: everything you paid to produce that result, not only the ad platform bill.',
        'ROI of 0% means you got your money back. Below 0% means you lost money on the campaign.',
      ],
    },
    { type: 'h2', text: 'Use gross profit, not revenue' },
    {
      type: 'p',
      text: 'Revenue counts money in. Gross profit counts money you keep after the direct cost of the sale: the product, delivery, the staff time or subcontractor fees needed to fulfil it. A campaign that brings in 36,000 lari of sales at a 45% gross margin has produced 16,200 lari of gross profit, and that is the number that pays for the marketing.',
    },
    {
      type: 'p',
      text: 'Revenue-based ROI flatters every campaign, and it flatters low-margin products most. If you sell something with a 20% margin and something with a 60% margin, the same revenue means three times the profit on one. Your accountant or finance lead can give you the gross margin per product line; if you only know a rough average, use it and say so in the report. The same logic is why [margin matters more than a percentage rule](/blog/how-much-should-marketing-budget-be) when setting the budget in the first place.',
    },
    { type: 'h2', text: 'Which costs to include' },
    {
      type: 'p',
      text: 'HBS Online notes that real projects usually carry extra costs, such as overhead and taxes, that a simple calculation misses. For marketing, decide a cost list once and keep it the same every month, so the trend means something:',
    },
    {
      type: 'ul',
      items: [
        'Media: ad spend on Facebook, Instagram, Google, TikTok or others.',
        'Agency or freelancer fees for managing the campaign.',
        'Creative: video shoots, design, copywriting, landing page work made for this campaign.',
        'Tools that exist for the campaign: tracking, CRM seats, call tracking.',
        'Staff time, if a person works on it for a meaningful share of their week. Many small companies leave this out; if you do, say that your ROI excludes salaries.',
      ],
    },
    { type: 'h2', text: 'A worked example in GEL' },
    {
      type: 'p',
      text: 'The figures below are invented for illustration. A company sells a service, ran a three-month lead campaign, and the CRM shows 36,000 lari of sales from customers that came through it. Its gross margin on that service is 45%.',
    },
    {
      type: 'table',
      head: ['Line', 'GEL'],
      rows: [
        ['Ad spend', '6,000'],
        ['Agency fee', '3,000'],
        ['Video and landing page creative', '1,000'],
        ['Tracking tools', '200'],
        ['Total marketing cost', '10,200'],
        ['Revenue from campaign customers', '36,000'],
        ['Gross profit at 45%', '16,200'],
      ],
    },
    {
      type: 'table',
      head: ['Method', 'Calculation', 'Result'],
      rows: [
        ['ROI on revenue, ad spend only (misleading)', '(36,000 - 6,000) / 6,000', '500%'],
        ['ROI on revenue, all costs', '(36,000 - 10,200) / 10,200', 'about 253%'],
        ['ROI on gross profit, all costs (the number to use)', '(16,200 - 10,200) / 10,200', 'about 59%'],
      ],
    },
    {
      type: 'p',
      text: 'The same campaign looks like a 500% success or a 59% return depending on the method. Both can be arithmetically right, but only the last compares what you kept with what you spent. Break-even is also easy to read off: with all costs at 10,200 lari and a 45% margin, the campaign needed about 22,700 lari of revenue to cover itself.',
    },
    { type: 'h2', text: 'ROI is not ROAS' },
    {
      type: 'p',
      text: 'Return on ad spend divides revenue by ad spend. Google Ads Help [describes it as](https://support.google.com/google-ads/answer/6268637) the average conversion value, for example revenue, you get for each dollar you spend on ads, and gives the example of $5 in sales for $1 of spend as a 500% return. In the example above, the ROAS is 36,000 / 6,000, or 6.0 (600%), while the ROI on gross profit is 59%. ROAS is useful for judging ad optimisation inside the platform. It leaves out fees, creative and margin, so do not report it as ROI. The [marketing KPIs post](/blog/marketing-kpis) shows where ROAS and cost per lead sit among the other numbers.',
    },
    { type: 'h2', text: 'Timing and attribution change the answer' },
    {
      type: 'p',
      text: 'IE Business School lists the limits of ROI, including: “Attribution choices, cost allocation, and forecast quality can materially change ROI results.” Three practical consequences for a company with a sales cycle:',
    },
    {
      type: 'ul',
      items: [
        'Match the period to the sales cycle. If a lead takes two months to close, a campaign measured after four weeks will look worse than it is. Track leads by the month they arrived and revisit that group later.',
        'Use CRM outcomes, not form fills. Leads that never buy inflate nothing but cost. A [CRM](/blog/how-to-choose-crm) that records source and closed value makes the revenue line honest.',
        'Tag your links so the source survives. [UTM parameters](/blog/utm-parameters-guide) let you tie a sale back to a campaign, and different [attribution models](/blog/marketing-attribution-models) will split credit differently, so pick one and keep it.',
      ],
    },
    {
      type: 'p',
      text: 'Basic ROI also ignores when cash arrives and does not adjust for risk. For a repeat-purchase business, you can add the gross profit from later orders to the gain once you have enough history to trust it, as a second line next to the first-order figure.',
    },
    { type: 'h2', text: 'What to do with the number' },
    {
      type: 'ol',
      items: [
        'Calculate ROI per channel, not only overall. An average hides a strong channel carrying a weak one.',
        'Compare the result with your break-even revenue, and with what you could earn by spending the same money elsewhere.',
        'Cut or fix the channels below break-even after a fair test period, and move budget toward those above it gradually.',
        'Record the method, cost list and margin you used, so next quarter’s figure is comparable.',
      ],
    },
    {
      type: 'p',
      text: 'If you cannot yet connect sales to marketing source, that gap is the first thing to fix. WakeUP’s free [marketing audit](/audit) reviews your ads, website and sales process and tells you where budget leaks.',
    },
  ],
}
