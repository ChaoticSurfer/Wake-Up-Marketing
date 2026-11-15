import type { BlogPost } from '@/lib/blog'

export const post: BlogPost = {
  locale: 'en',
  slug: 'ltv-to-cac-ratio',
  title: 'LTV to CAC ratio: how to calculate it, read 3:1 and use payback',
  metaTitle: 'LTV to CAC Ratio Explained',
  description:
    'The LTV to CAC ratio compares a customer’s lifetime value with the cost of winning them. How to calculate it, read 3:1, use payback and spot underspending.',
  publishedAt: '2027-02-20T09:00:00+04:00',
  updatedAt: '2027-02-20T09:00:00+04:00',
  service: 'audit',
  reviewState: 'llm_reviewed',
  body: [
    {
      type: 'p',
      text: 'The LTV to CAC ratio divides the lifetime value of a customer (LTV) by the cost of acquiring them (CAC). A ratio of 3:1 means each customer returns three lari for every lari spent winning them, and 3:1 is the figure most guides treat as healthy. It is a rule of thumb, not a law: it depends on whether LTV is counted in revenue or gross profit, how fast you recover the cost, and whether you can afford to wait.',
    },
    { type: 'h2', text: 'The calculation, step by step' },
    {
      type: 'p',
      text: 'Shopify’s guide [defines the ratio](https://www.shopify.com/blog/what-is-a-good-ltv-to-cac-ratio) as LTV divided by CAC, with CAC as total ad spend plus sales expenses divided by the number of new customers. The point here is how the two numbers combine, so the inputs are kept to a short list.',
    },
    {
      type: 'ol',
      items: [
        'Pick a period and a customer group, for example customers who first bought in the last 12 months.',
        'Add up everything spent on winning them in that period: ad spend, agency or freelancer fees, sales salaries or commission, creative and tools made for acquisition.',
        'Divide by the number of new customers in the group. That is CAC.',
        'Estimate LTV: average order or monthly fee, times how many orders or months a customer stays, times your gross margin. That is LTV on gross profit.',
        'Divide LTV by CAC for the ratio. Divide CAC by gross profit per month for the payback period.',
      ],
    },
    {
      type: 'p',
      text: 'Step 4 is where guides differ. Shopify’s formula builds LTV from gross revenue, while its [CAC payback guide](https://www.shopify.com/blog/cac-payback-period) uses gross profit, which it defines as revenue minus the cost of goods sold and other direct costs. For a decision about spending, gross profit is the safer base, because revenue includes money you never keep. The [marketing ROI post](/blog/how-to-calculate-marketing-roi) makes the same argument in more detail.',
    },
    { type: 'h2', text: 'A worked example in lari' },
    {
      type: 'p',
      text: 'The figures are invented to show the arithmetic. A company sells a monthly service at 500 lari. Its gross margin is 60%, so each customer produces 300 lari of gross profit a month. Customers stay 18 months on average. Last year it spent 18,000 lari on acquisition and won 10 customers.',
    },
    {
      type: 'table',
      head: ['Measure', 'Calculation', 'Result'],
      rows: [
        ['CAC', '18,000 / 10 customers', '1,800 lari'],
        ['LTV on revenue', '500 x 18 months', '9,000 lari'],
        ['LTV on gross profit', '300 x 18 months', '5,400 lari'],
        ['Ratio on revenue (flattering)', '9,000 / 1,800', '5:1'],
        ['Ratio on gross profit', '5,400 / 1,800', '3:1'],
        ['CAC payback', '1,800 / 300 per month', '6 months'],
      ],
    },
    {
      type: 'p',
      text: 'The same business is 5:1 or 3:1 depending on the base. If you compare your revenue-based ratio with a benchmark that was built on gross profit, you will think you are doing better than you are. Say which base you used whenever you quote the number.',
    },
    { type: 'h2', text: 'What 3:1 does and does not mean' },
    {
      type: 'p',
      text: 'The 3:1 figure is widely repeated. HubSpot’s guide [says](https://blog.hubspot.com/service/ltv-cac-ratio) experts "agree that 3:1 is a good LTV to CAC ratio", and Shopify’s says ecommerce businesses typically see 3:1 to 4:1. Both note that good ratios vary by industry, and HubSpot’s "experts" are named individuals, not a study. David Skok, author of a widely read SaaS metrics guide, [put it](https://www.forentrepreneurs.com/saas-metrics-2/) this way: "The best SaaS businesses have a LTV to CAC ratio that is higher than 3, sometimes as high as 7 or 8." He adds: "I should stress that these are only guidelines, there are always situations where it makes sense to break them."',
    },
    {
      type: 'p',
      text: 'So 3:1 is a reasonable starting target, not proof of health. What it leaves out:',
    },
    {
      type: 'ul',
      items: [
        'Time. A 3:1 ratio over 18 months can still starve you of cash for a year. The ratio says nothing about when the money comes back.',
        'Estimation error. LTV is a forecast. A customer base only a few months old gives you a guess about the future, and a small change in the assumed lifespan moves the ratio a lot.',
        'Averages. One channel at 6:1 and another at 1:1 can average to a comfortable 3:1 and hide a channel that loses money.',
        'Costs outside CAC. If sales salaries, onboarding or discounts are left out, the ratio is inflated.',
      ],
    },
    { type: 'h2', text: 'CAC payback: the number that covers cash' },
    {
      type: 'p',
      text: 'Shopify’s guide gives the formula as customer acquisition cost divided by average monthly gross profit per customer, and describes the result as the time it takes to recover the cost of acquiring a customer. In the example above, that is 1,800 divided by 300, or 6 months. Skok writes that "many of the best SaaS businesses are able to recover their CAC in 5-7 months" and that profitability looks poor when recovery stretches beyond 12 months. Those are subscription benchmarks. A shop with one purchase and a low margin recovers cost on the first order or not at all, and a business with long contracts may reasonably accept a slower payback.',
    },
    {
      type: 'p',
      text: 'Use the two numbers together. The ratio tells you whether the customer is worth the price in the long run; payback tells you how much cash you must fund before it arrives. A company with a 4:1 ratio and a 20-month payback needs a cash buffer a company with 3:1 and 5 months does not.',
    },
    { type: 'h2', text: 'When a high ratio means you are underspending' },
    {
      type: 'p',
      text: 'A very high ratio is not automatically good news. Shopify says a ratio can be too high and that this "suggests you’re not growing as fast as you could be", giving 8:1 or higher as a sign you may be spending too little on marketing. HubSpot flags anything above 4:1 as a possible sign of the same, though elsewhere in the same guide it calls 3:1 to 5:1 healthy, so treat the thresholds as soft. A high ratio can be deliberate, for example when you have a waiting list or capacity limit.',
    },
    {
      type: 'table',
      head: ['Ratio on gross profit', 'Typical reading', 'What to check next'],
      rows: [
        ['Below 1:1', 'Each customer costs more than they return', 'Pause scaling; check LTV inputs, then fix pricing, retention or the channel'],
        ['1:1 to 3:1', 'Thin or uncertain return', 'Look at payback and per-channel ratios before adding budget'],
        ['About 3:1 to 5:1', 'Commonly treated as healthy', 'Keep tracking by channel; test small increases in spend'],
        ['Well above 5:1 to 8:1', 'May be underspending, or LTV is overestimated', 'Check capacity, then raise budget in steps and watch CAC'],
      ],
    },
    {
      type: 'p',
      text: 'The test for underspending is practical: raise budget in a channel in steps and watch what happens to CAC. As you reach less interested audiences, CAC often climbs. If it rises slowly and payback stays acceptable, the original ratio was too high. If CAC jumps at the first increase, the high ratio came from a small pool of easy customers and the channel is near its ceiling. [Scaling Facebook ads](/blog/how-to-scale-facebook-ads) covers how to raise spend without breaking performance.',
    },
    { type: 'h2', text: 'Using the ratio without fooling yourself' },
    {
      type: 'ul',
      items: [
        'Compute it per channel and per customer type, not only overall.',
        'Use cohorts: group customers by the month they arrived and check that actual repeat purchases match the lifespan you assumed.',
        'Keep the cost list fixed so month-to-month comparisons mean something.',
        'Write down the base (revenue or gross profit), the period and the customer group next to the number.',
        'Put the ratio next to other [marketing KPIs](/blog/marketing-kpis), and let it inform the [marketing budget](/blog/how-much-should-marketing-budget-be) rather than set it alone.',
      ],
    },
    {
      type: 'p',
      text: 'If you cannot yet say what a customer costs or how long they stay, the missing piece is usually tracking from ad or enquiry to closed sale. WakeUP’s free [marketing audit](/audit) reviews your ads, website and sales process and points to where the data and the budget leak.',
    },
  ],
}
