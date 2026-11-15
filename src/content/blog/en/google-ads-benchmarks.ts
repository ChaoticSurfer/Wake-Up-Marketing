import type { BlogPost } from '@/lib/blog'

export const post: BlogPost = {
  locale: 'en',
  slug: 'google-ads-benchmarks',
  title: 'Google Ads benchmarks: what a good CTR, CPC and conversion rate look like',
  metaTitle: 'Google Ads Benchmarks: CTR, CPC, CVR',
  description:
    'Google Ads benchmarks for CTR, CPC and conversion rate from a 2026 US study, and why they mislead in Georgia. How to set your own targets instead.',
  publishedAt: '2027-02-21T12:00:00+04:00',
  updatedAt: '2027-02-21T12:00:00+04:00',
  service: 'advertising',
  reviewState: 'llm_reviewed',
  body: [
    {
      type: 'p',
      text: 'Google Ads benchmarks are averages of click-through rate (CTR), cost per click (CPC) and conversion rate across many advertisers. One widely cited set, WordStream\'s 2026 study of US search campaigns, reports a median CTR of 6.64%, a CPC of $5.42 and a conversion rate of 8.18%. Those are US figures. Use them to learn which metrics to watch, then set your own targets from your own account.',
    },
    { type: 'h2', text: 'The 2026 benchmark numbers, and who measured them' },
    {
      type: 'p',
      text: 'The best-known annual benchmark comes from WordStream (LocaliQ). As summarised by [PPC Land](https://ppc.land/google-ads-cpl-drops-for-first-time-since-2020-as-cpc-hits-5-42/), the report was published on 19 May 2026 and covers 13,474 US-based search campaigns on Google Ads and Microsoft Ads between April 2025 and March 2026, in US dollars. The figures are medians that account for outliers at the extremes of spend, and the campaigns were managed through the LocaliQ platform, so they may not represent every US advertiser.',
    },
    {
      type: 'table',
      head: ['Metric', 'Cross-industry figure, 2026', 'What it measures'],
      rows: [
        ['Click-through rate', '6.64%', 'Clicks divided by impressions'],
        ['Cost per click', '$5.42', 'Average price paid for one click'],
        ['Conversion rate', '8.18%', 'Conversions per ad interaction'],
        ['Cost per lead', '$66.69', 'Spend divided by leads'],
      ],
    },
    {
      type: 'p',
      text: 'The spread between industries is wide, which is the first sign that one "average" says little. In the same report, as summarised by PPC Land, the CPC runs from $1.63 for arts and entertainment and $2.05 for restaurants and food to $8.00 for dentists and $9.87 for attorneys. Conversion rate runs from 16.22% for animals and pets to 2.64% for finance and insurance. This article is about those rates. For what budget to plan and how the auction sets prices, see [how much Google Ads cost](/blog/google-ads-cost).',
    },
    { type: 'h2', text: 'What each metric means before you compare it' },
    {
      type: 'p',
      text: 'Google defines [click-through rate](https://support.google.com/google-ads/answer/2615875) as "A ratio showing how often people who see your ad or free product listing end up clicking it", calculated as clicks divided by impressions. The same page says "a good CTR is relative to what you\'re advertising and on which networks". That is Google\'s own warning against a single target number.',
    },
    {
      type: 'p',
      text: 'Conversion rate has a catch too. Google describes [conversion rate](https://support.google.com/google-ads/answer/2684489) as "The average number of conversions per ad interaction, shown as a percentage", so 50 conversions from 1,000 interactions is 5%. Because it depends on what you count as a conversion, two accounts can report very different rates for the same business. An account that counts a phone click and a page view as conversions will look better than one that counts only a qualified enquiry. Before comparing yourself with any benchmark, check that your conversion actions mean the same thing. [Conversion tracking](/blog/google-ads-conversion-tracking) is the first thing to get right.',
    },
    { type: 'h2', text: 'Why foreign benchmarks mislead in Georgia' },
    {
      type: 'ul',
      items: [
        'Different market. The data above is from US campaigns in US dollars. Click prices come from an auction, and the auction depends on how many advertisers bid on the same searches in the same place. A figure from a large market is not a forecast for a small one.',
        'Different mix of campaigns. The sample is campaigns run through one platform by US businesses, blended across Google and Microsoft and across 23 industries. Your campaign is one account in one industry.',
        'Different conversion meaning. A "lead" in the study is whatever each advertiser chose to count. If your sales cycle is long or your product is expensive, a conversion rate that looks low may still be profitable.',
        'Different language setup. Google Ads does not [support Georgian](https://support.google.com/google-ads/answer/6333734) as an ad language, so ads for Georgian audiences are written in a supported language such as English or Russian. That changes who sees the ads and how they respond, and no US benchmark reflects it.',
        'Different goal. A brand with a small local audience and a national online shop have different reasons to run ads, so a good rate for one can be a bad rate for the other.',
      ],
    },
    {
      type: 'p',
      text: 'No Georgian benchmark is quoted here because there is no large, dated, publicly documented study of Georgian Google Ads rates to cite. If you see a Georgian figure in an article, ask who measured it, over what period and with how many campaigns.',
    },
    { type: 'h2', text: 'How to build a benchmark for your own business' },
    {
      type: 'ol',
      items: [
        'Start from the money, not from the rate. Work out what an enquiry is worth: your profit per customer times the share of enquiries that close. That number tells you the most you can pay per conversion. The same arithmetic is in [is Google Ads worth it](/blog/is-google-ads-worth-it).',
        'Get your own CPC range. In Keyword Planner, set the location to Georgia or to the cities you serve and check whether it shows a cost range for the searches a buyer would type. It is an estimate, not a quote, and may show little data for a small market.',
        'Run a small test and record your own CTR, CPC and conversion rate by campaign. Two to four weeks of data on a few well-matched keywords is a baseline you can improve on. Do not compare a branded campaign with a generic one: they attract different searchers.',
        'Use the auction insights report to see competitors. Google says it [compares your performance with other advertisers](https://support.google.com/google-ads/answer/2579754) in the same auctions, with impression share, overlap rate and outranking share. It shows nothing when your impression share is below 10%, and a competitor may see different numbers in their own report.',
        'Judge changes against your own baseline. A CTR that rises while conversion rate falls can mean the ads promise something the landing page does not deliver. [Quality Score](/blog/google-ads-quality-score) and [landing page practice](/blog/google-ads-landing-page-best-practices) are where to look.',
      ],
    },
    { type: 'h2', text: 'What to do with the benchmark numbers' },
    {
      type: 'p',
      text: 'Use public benchmarks for three things: to learn which metrics exist, to see how widely they vary between industries, and to sense-check an agency or freelancer who promises a number. If someone guarantees a CTR or conversion rate before seeing your account, that promise is not based on your data. Everything else, such as budget, targets and what counts as good, should come from your own cost per lead and customer value. For a wider view of which numbers to track, see [marketing KPIs](/blog/marketing-kpis).',
    },
    {
      type: 'p',
      text: 'If you want a second pair of eyes on your numbers, WakeUP runs Google and Meta campaigns as part of its [advertising service](/services/advertising), and the [free marketing audit](/audit) reviews where your current ad budget goes and what your tracking actually counts.',
    },
  ],
}
