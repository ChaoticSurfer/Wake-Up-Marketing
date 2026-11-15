import type { BlogPost } from '@/lib/blog'

export const post: BlogPost = {
  locale: 'en',
  slug: 'roas-vs-roi',
  title: 'ROAS vs ROI: why a 5x ROAS can still lose money',
  metaTitle: 'ROAS vs ROI: Which to Use and When',
  description:
    'ROAS vs ROI: ROAS is revenue per unit of ad spend, ROI is profit against all costs. See why 5x ROAS can lose money and which metric to use when.',
  publishedAt: '2027-02-05T09:00:00+04:00',
  updatedAt: '2027-02-05T09:00:00+04:00',
  service: 'advertising',
  reviewState: 'llm_reviewed',
  body: [
    {
      type: 'p',
      text: 'ROAS vs ROI comes down to one difference. ROAS (return on ad spend) divides the revenue your ads were credited with by what you spent on those ads. ROI (return on investment) compares profit with all the costs of getting it. ROAS is a quick signal for tuning campaigns. ROI tells you whether the business made money. A 5x ROAS can still lose money if your margin is thin.',
    },
    { type: 'h2', text: 'The two formulas side by side' },
    {
      type: 'table',
      head: ['', 'ROAS', 'ROI'],
      rows: [
        ['Formula', 'Revenue from ads / ad spend', 'Net profit / total cost'],
        ['Counts', 'Revenue, the ad bill only', 'Profit, every cost of the activity'],
        ['Answers', 'How hard is each unit of ad budget working?', 'Did this make money after everything?'],
        ['Reported as', 'A ratio (5.0, or 5:1) or a percentage (500%)', 'A percentage'],
        ['Typical level', 'Campaign, ad set, ad', 'Channel, project, business'],
      ],
    },
    {
      type: 'p',
      text: 'Google Ads Help [gives the ROAS arithmetic](https://support.google.com/google-ads/answer/6268637) as $5 in sales divided by $1 of ad spend, times 100%, which equals 500%. The ratio and the percentage are the same number written two ways, so check which one a report uses before comparing. For the full ROI method, with gross profit, the cost list and a worked example in lari, see [how to calculate marketing ROI](/blog/how-to-calculate-marketing-roi).',
    },
    { type: 'h2', text: 'Why a 5x ROAS can still lose money' },
    {
      type: 'p',
      text: 'ROAS ignores everything between the sale and the profit. The AppsFlyer guide to the two metrics [explains](https://www.appsflyer.com/blog/measurement-analytics/roi-vs-roas/) that ROAS looks only at the cost of the ad itself, while ROI counts the full investment, including extras such as software, design and distribution. A GoCardless guide [shows the extreme case](https://gocardless.com/en-us/guides/posts/roas-vs-roi) with hypothetical numbers: $100,000 of revenue on $25,000 of ad spend is a ROAS of 400%, but with roughly $80,000 of other costs the ROI is about minus 4.8%.',
    },
    {
      type: 'p',
      text: 'Here is the same effect on a smaller scale, with made-up numbers. You spend 1,000 on ads and the platform credits them with 5,000 of sales, a ROAS of 5.0. If you keep 15% of each sale after product costs, the gross profit is 750. You paid 1,000 to earn 750, so you lost 250 before counting creative, agency fees or staff time. Nothing in the ROAS figure warned you.',
    },
    {
      type: 'p',
      text: 'Costs that ROAS leaves out:',
    },
    {
      type: 'ul',
      items: [
        'The cost of what you sold: product, ingredients, delivery, payment fees.',
        'Returns, cancellations and discounts that come off the revenue after the ad platform logged the sale.',
        'Creative, agency or freelancer fees, and the time your own team spends on the campaign.',
        'Tools and software used for the campaign, such as tracking and landing page builders.',
      ],
    },
    { type: 'h2', text: 'Break-even ROAS by margin' },
    {
      type: 'p',
      text: 'Break-even ROAS is 1 divided by your gross margin after the cost of the sale. Below that figure each ad lari loses money on a first purchase; above it, there is something left to cover the other costs. The table is arithmetic, not a benchmark, and the margins are illustrative.',
    },
    {
      type: 'table',
      head: ['Gross margin on the sale', 'Break-even ROAS (ratio)', 'Break-even ROAS (%)'],
      rows: [
        ['80%', '1.25', '125%'],
        ['50%', '2.0', '200%'],
        ['30%', '3.3', '333%'],
        ['20%', '5.0', '500%'],
        ['15%', '6.7', '667%'],
      ],
    },
    {
      type: 'p',
      text: 'Treat the break-even line as the floor, not the target. At break-even, the ads pay for themselves and nothing else does: your fees, creative and staff time are still unpaid. A sensible target ROAS sits above break-even by enough to cover those costs and leave a profit. This also explains why two businesses can both be happy with very different ROAS numbers.',
    },
    {
      type: 'p',
      text: 'If your ads are on Google, you can set a target ROAS for automated bidding. Google [defines it](https://support.google.com/google-ads/answer/6268637) as "the average conversion value (for example, revenue) you\'d like to get for each dollar you spend on ads." Set it from your break-even figure plus a cushion, not from an industry average. Our post on [Google Ads optimization tips](/blog/google-ads-optimization-tips) covers how much conversion data bidding needs.',
    },
    { type: 'h2', text: 'What ROAS credits to ads that ads did not cause' },
    {
      type: 'p',
      text: 'The second weakness sits in the numerator. ROAS counts the revenue the platform attributed to your ads, and some of those customers would have bought anyway: people who already knew your brand, or repeat customers who were retargeted. Google calls the question of what the ads caused incrementality. Its [Conversion Lift help page](https://support.google.com/google-ads/answer/12003020) describes a controlled experiment that "separate[s] your audience into 2 groups", where one group sees your ads and the other does not, and the gap between them shows the conversions the ads caused. The same page says Conversion Lift is not available for all Google Ads accounts.',
    },
    {
      type: 'p',
      text: 'Most small advertisers will not run a formal test, but the idea helps. Check the revenue behind a high ROAS: how much is new customers and how much is people already in your CRM? A retargeting campaign with a ROAS of 10 may look better than a prospecting campaign at 3 and still bring in fewer new customers. How credit is split between channels is a topic of its own; see [marketing attribution models](/blog/marketing-attribution-models).',
    },
    {
      type: 'p',
      text: 'There is also a timing gap in the other direction. If a customer buys again three times in a year, ROAS on the first order understates what the ads earned. If your business has repeat purchases, track revenue per customer over a fixed period (for example 6 months) beside first-order ROAS, and decide what that second line means for your break-even.',
    },
    { type: 'h2', text: 'Which one to use for what' },
    {
      type: 'table',
      head: ['Decision', 'Use', 'Why'],
      rows: [
        ['Which ad or ad set to scale or pause', 'ROAS, next to cost per result', 'Fast, available inside the platform, comparable across ads with the same margin'],
        ['Setting a bidding target', 'ROAS target above your break-even', 'Platforms optimise toward a value you give them'],
        ['Which campaigns deserve more budget', 'ROAS with margin by product, checked for new customers', 'Products with different margins need different targets'],
        ['Whether a channel is worth running', 'ROI per channel, over a period that fits your sales cycle', 'Includes fees, creative and staff time'],
        ['Whether marketing as a whole pays off', 'ROI on gross profit, from CRM or accounting data', 'Not attributed by a platform, so it checks the platforms'],
        ['Reporting to owners or a board', 'ROI, with ROAS as supporting detail', 'The business cares about profit, not the platform ratio'],
      ],
    },
    {
      type: 'p',
      text: 'The AppsFlyer guide warns that "relying on just one could be misleading and cause a bleed in your marketing budget." The reverse also holds: ROI alone is too slow and too blunt for week-to-week campaign decisions, and it needs sales data that the ad platform does not hold. Use ROAS to steer and ROI to check.',
    },
    { type: 'h2', text: 'A simple routine' },
    {
      type: 'ol',
      items: [
        'Work out your gross margin per product or service line, after the direct cost of the sale. Ask finance for the figure rather than estimating.',
        'Write down break-even ROAS for each line (1 divided by the margin) and set the target above it.',
        'Make sure sale values reach the ad platform. For Google Ads, gross profit reporting needs cart data and cost of goods sold; per [Google\'s help page](https://support.google.com/google-ads/answer/16564103), it requires "cart data from your purchase conversions and COGS data from your product feed."',
        'Review ROAS by campaign each week or two, and ROI by channel each month or quarter, using CRM outcomes rather than form fills.',
        'Once a quarter, compare platform-reported revenue with what the CRM or accounts show. Large gaps mean the platform number cannot be trusted as it stands. For the metrics that sit around ROAS on Meta, see [Facebook ads metrics explained](/blog/facebook-ads-metrics).',
      ],
    },
    { type: 'h2', text: 'Where WakeUP fits' },
    {
      type: 'p',
      text: 'WakeUP\'s [advertising service](/services/advertising) covers paid campaigns on Meta and Google. If you are not sure whether your current ROAS is profitable, the [free audit](/audit) is the quickest way to have your tracking, margins and campaign setup looked over.',
    },
  ],
}
