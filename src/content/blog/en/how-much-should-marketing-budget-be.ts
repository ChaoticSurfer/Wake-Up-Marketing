import type { BlogPost } from '@/lib/blog'

export const post: BlogPost = {
  locale: 'en',
  slug: 'how-much-should-marketing-budget-be',
  title: 'How much should a marketing budget be? Benchmarks and a method',
  metaTitle: 'How Much Should a Marketing Budget Be?',
  description:
    'How much should a marketing budget be? Published benchmarks sit near 7 to 8 percent of revenue; here is how to set yours from margin and goals.',
  publishedAt: '2027-01-03T09:00:00+04:00',
  updatedAt: '2027-01-03T09:00:00+04:00',
  service: 'advertising',
  reviewState: 'llm_reviewed',
  body: [
    {
      type: 'p',
      text: 'How much a marketing budget should be depends on your margin and your goal, but the published benchmarks put the average at roughly 7 to 8 percent of revenue, with higher figures for startups and consumer businesses. Treat that as a sanity check, not a target. A company with thin margins cannot spend like one with wide margins, and a company that needs fast growth spends more than one that only needs to keep its customers.',
    },
    {
      type: 'p',
      text: 'This post helps you pick the number. How to divide it into foundation, proven channels and tests is in [marketing strategy for small business](/blog/marketing-strategy-for-small-business); here the focus is how big the total should be and how to split it across channels for a company in Georgia.',
    },
    { type: 'h2', text: 'What the published benchmarks say' },
    {
      type: 'p',
      text: 'Two sources are worth knowing, and both come with limits. [Gartner\'s 2025 CMO Spend Survey](https://finance.yahoo.com/news/gartner-2025-cmo-spend-survey-165900130.html), run from February to March 2025 among 402 marketing leaders in North America, the UK and Europe, found budgets flat at 7.7 percent of overall company revenue. Gartner notes that the vast majority of respondents reported annual revenue above $1 billion, so this describes very large firms.',
    },
    {
      type: 'p',
      text: 'The US Small Business Administration\'s [2019 marketing budget article](https://www.sba.gov/blog/how-get-most-your-marketing-budget) cites an average of 7.9 percent of revenue in 2018 (from Web Strategies), split by business type:',
    },
    {
      type: 'table',
      head: ['Business type', 'Average marketing spend, share of revenue (2018)'],
      rows: [
        ['B2B product companies', '6.3%'],
        ['B2B services', '6.9%'],
        ['B2C product companies', '9.6%'],
        ['B2C services', '11.8%'],
      ],
    },
    {
      type: 'p',
      text: 'The SBA page adds that B2C companies generally need larger marketing budgets than B2B companies, and that startups generally need more than established businesses. It also says: "Marketing isn\'t an expense - it\'s an investment, one that drives your sales." These are US figures, the SBA data is several years old, and neither source says anything about Georgia. Use them to see whether your plan is far outside a normal range, not to decide the number.',
    },
    { type: 'h2', text: 'Why your margin matters more than the percentage' },
    {
      type: 'p',
      text: 'A percentage of revenue ignores how much of each sale you keep. Compare two companies with 1,000,000 in yearly revenue, using round numbers for illustration only:',
    },
    {
      type: 'table',
      head: ['', 'Company A', 'Company B'],
      rows: [
        ['Gross margin', '70%', '25%'],
        ['Gross profit', '700,000', '250,000'],
        ['Marketing at 8% of revenue', '80,000', '80,000'],
        ['Marketing as a share of gross profit', 'About 11%', '32%'],
      ],
    },
    {
      type: 'p',
      text: 'The same 8 percent is comfortable for Company A and heavy for Company B. A simple test: marketing plus every other overhead must fit inside gross profit and still leave the profit you need. Work backwards from that, then compare the result with the benchmark.',
    },
    { type: 'h2', text: 'Cross-check from the customers you want' },
    {
      type: 'p',
      text: 'The second method works from the goal instead of revenue:',
    },
    {
      type: 'ol',
      items: [
        'Decide how many new customers you want this year.',
        'Divide by your close rate to get the number of qualified leads needed.',
        'Multiply by what you can afford to pay per lead. A safe ceiling is the gross profit from a new customer, over their first year, divided by the leads it takes to win one.',
        'Add fixed costs: tools, content and production, and any agency or freelancer fee.',
      ],
    },
    {
      type: 'p',
      text: 'If this number is far below the benchmark, check that your goal is not too small. If it is far above, either the goal is ambitious or the cost per lead you assumed is too low. If you do not have a measured close rate or cost per lead yet, start with an amount you can lose without harm and treat the first quarter as the way to measure them. [Marketing KPIs](/blog/marketing-kpis) lists what to track so the next budget is based on data.',
    },
    { type: 'h2', text: 'When to spend more or less than the benchmark' },
    {
      type: 'ul',
      items: [
        'More: you are new and nobody knows you, you are entering a new market or launching a product, or competitors are growing faster than you.',
        'Less: most sales come from referrals and repeat customers, your capacity is full, or your margin is thin.',
        'Hold steady: a channel is working and its cost per customer is stable. Raise spend while the cost per customer holds, and stop when it climbs.',
      ],
    },
    { type: 'h2', text: 'How to split the budget across channels in Georgia' },
    {
      type: 'p',
      text: 'No reliable published channel split for Georgian companies exists, so split by the job each channel does instead of copying a percentage from abroad:',
    },
    {
      type: 'table',
      head: ['Job', 'Typical channels', 'How to size it'],
      rows: [
        ['Capture people already looking', 'Google Search ads, SEO, Google Business Profile', 'From search volume and cost per click; see [Google Ads cost](/blog/google-ads-cost)'],
        ['Create demand', 'Facebook and Instagram ads, TikTok, short video', 'From a test budget and cost per lead; see [Facebook Ads cost](/blog/facebook-ads-cost)'],
        ['Keep customers', 'Email, WhatsApp, loyalty offers', 'Small fixed monthly amount'],
        ['Foundation', 'Website, tracking, content, production', 'Quotes for specific work'],
        ['Help', 'Agency, freelancer or in-house hire', 'See [marketing agency pricing](/blog/marketing-agency-pricing)'],
      ],
    },
    {
      type: 'p',
      text: 'One local point matters for the Google row: Google Ads does not support Georgian as an ad language ([Google Ads Help](https://support.google.com/google-ads/answer/6333734)), so a Georgian-language campaign usually leans on Meta, TikTok and search through SEO, while Google Ads suits English or Russian-language audiences if that is who you want. Keep ad spend separate from fees in your accounts, so you can see what each part buys.',
    },
    { type: 'h2', text: 'Review the budget every quarter' },
    {
      type: 'p',
      text: 'A budget is a hypothesis. Every quarter, compare cost per customer by channel, move money toward the channel with the lower cost, end tests that missed the threshold you wrote down before they began, and re-check the margin test. Do not cut everything in a slow month: channels such as SEO and brand work pay back over longer periods, and stopping them resets that progress.',
    },
    {
      type: 'p',
      text: 'If you want a second view of where your current spend goes, WakeUP Marketing offers a [free audit](/audit), and its [advertising service](/services/advertising) covers Meta and Google Ads management with ad spend paid directly to the platforms.',
    },
  ],
}
