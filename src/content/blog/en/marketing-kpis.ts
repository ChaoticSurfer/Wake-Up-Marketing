import type { BlogPost } from '@/lib/blog'

export const post: BlogPost = {
  locale: 'en',
  slug: 'marketing-kpis',
  title: 'Digital marketing KPIs and metrics: what to track at each funnel stage',
  metaTitle: 'Digital Marketing KPIs and Metrics',
  description:
    'Digital marketing KPIs and metrics by funnel stage, with formulas, where to find each one, and how to pick the 5 to 7 a small company needs.',
  publishedAt: '2026-12-10T12:00:00+04:00',
  updatedAt: '2026-12-10T12:00:00+04:00',
  service: 'audit',
  reviewState: 'llm_reviewed',
  body: [
    {
      type: 'p',
      text: 'The digital marketing KPIs and metrics that matter are the few numbers that show whether people move from seeing you to buying from you. Group them by funnel stage (awareness, consideration, conversion, revenue), take one or two per stage, and read them where they are measured: Google Analytics, Search Console, your ad platform and your CRM. Five to seven KPIs are enough for a company of 20 to 250 people.',
    },
    { type: 'h2', text: 'Metrics, KPIs and the funnel stage they belong to' },
    {
      type: 'p',
      text: 'A metric is any number you can measure. A KPI is a metric you have chosen because it tracks a business goal and someone owns it. Impressions are a metric. "Enquiries from Google at a cost under a set limit" is a KPI. Most dashboards show dozens of metrics; a useful scorecard shows a handful of KPIs.',
    },
    {
      type: 'p',
      text: 'The funnel keeps them organised, because each stage asks a different question. The table lists the usual KPIs, their formulas and where to read them.',
    },
    {
      type: 'table',
      head: ['Stage', 'KPI', 'Formula', 'Where to find it'],
      rows: [
        ['Awareness', 'Impressions and clicks from search', 'Counted by Google', 'Search Console, Performance report'],
        ['Awareness', 'Click-through rate (CTR)', 'Clicks / impressions', 'Search Console, or your ad platform for ads'],
        ['Awareness', 'New users by channel', 'Counted by GA4', 'GA4, User acquisition report'],
        ['Consideration', 'Engagement rate', 'Engaged sessions / sessions', 'GA4, added as a column to a detail report'],
        ['Consideration', 'Key event rate by channel', 'Sessions with a key event / sessions', 'GA4, Explorations (Session key event rate)'],
        ['Conversion', 'Leads and qualified leads', 'Count by source', 'CRM (or a sheet)'],
        ['Conversion', 'Conversion rate', 'Conversions / ad interactions or sessions', 'Google Ads, GA4'],
        ['Conversion', 'Cost per lead / cost per conversion', 'Spend / leads (or conversions)', 'Ad platform, plus your spend sheet'],
        ['Revenue', 'Customer acquisition cost (CAC)', 'Sales and marketing spend / new customers', 'CRM plus accounting'],
        ['Revenue', 'Return on ad spend (ROAS)', 'Revenue from ads / ad spend', 'CRM revenue by source, ad platform'],
        ['Revenue', 'Lead-to-customer rate', 'Customers / leads', 'CRM'],
      ],
    },
    { type: 'h2', text: 'Awareness: are the right people finding you?' },
    {
      type: 'p',
      text: 'These numbers show reach and visibility. They move before enquiries do, but they never pay a bill on their own.',
    },
    {
      type: 'ul',
      items: [
        'Impressions and clicks. In Search Console, [Google defines them](https://support.google.com/webmasters/answer/7042828) as "How often someone saw a link to your site on Google" and "How often someone clicked a link from Google to your site". They cover Google results only, so they say nothing about paid ads or social media.',
        'Click-through rate. For search results, Search Console states it as "(clicks ÷ impressions)". A page with many impressions and a low rate usually has a weak title or description. In your ad platform, the same formula tells you whether an ad is relevant to the people shown it.',
        'New users by channel. GA4 splits [user-scoped data into the User acquisition report and session-scoped data into the Traffic acquisition report](https://support.google.com/analytics/answer/11080067). Use User acquisition to see which channels bring first-time visitors.',
      ],
    },
    {
      type: 'p',
      text: 'Skip average position as a headline KPI. It is averaged across every query your site appeared for, so it can drop when your pages begin to show for new, low-ranking searches even if nothing got worse.',
    },
    { type: 'h2', text: 'Consideration: do visitors engage?' },
    {
      type: 'p',
      text: 'GA4 [defines an engaged session](https://support.google.com/analytics/answer/12195621) as one that lasts longer than 10 seconds, has a key event, or has two or more page or screen views. Its engagement rate is "the percentage of engaged sessions on your website or mobile app", and bounce rate is "the percentage of sessions that were not engaged", the opposite of engagement rate.',
    },
    {
      type: 'p',
      text: 'Most GA4 reports do not show these two metrics by default. Someone with the Editor or Administrator role can add them through Customize report, but only to detail reports, not overview reports.',
    },
    {
      type: 'p',
      text: 'Compare engagement rate across channels rather than reading the overall figure: if paid social visitors leave in seconds while search visitors read three pages, the audience or the ad promise is off. The second KPI here is the key event rate by channel. A [key event](https://support.google.com/analytics/answer/9267568) is an event you mark as important to the business, such as a form submission or a click on a call button, and GA4 shows a Key events column in reports such as Landing pages and User acquisition, along with a Session key event rate metric in explorations.',
    },
    { type: 'h2', text: 'Conversion: enquiries and what they cost' },
    {
      type: 'p',
      text: 'Count leads by source when they arrive, then separate qualified leads, the ones sales agrees are real buyers. Both counts belong in the CRM, because ad platforms only see the clicks they can track. The [lead generation guide](/blog/lead-generation-strategies) shows how to compute cost per lead the same way for every channel.',
    },
    {
      type: 'p',
      text: 'Two ad-platform definitions are worth knowing exactly. Google Ads describes conversion rate as "The average number of conversions per ad interaction, shown as a percentage": 50 conversions from 1,000 interactions is 5%, and the figure [can exceed 100%](https://support.google.com/google-ads/answer/2684489) if you track more than one conversion action. Cost per conversion, shown as Cost / conv., is [total cost divided by the number of conversions](https://support.google.com/google-ads/answer/6270625). The prices behind these numbers are covered in the guides to [Google Ads cost](/blog/google-ads-cost) and [Facebook Ads cost](/blog/facebook-ads-cost).',
    },
    {
      type: 'p',
      text: 'Check which actions the platform counts as a conversion. If a thank-you page view, a phone click and a submitted form all count equally, cost per conversion looks better than cost per real enquiry.',
    },
    { type: 'h2', text: 'Revenue: what the money says' },
    {
      type: 'p',
      text: 'Everything above is a proxy for this stage, which needs revenue by source from your CRM or invoicing.',
    },
    {
      type: 'ul',
      items: [
        'Lead-to-customer rate: customers divided by leads, per channel. It reveals channels that bring cheap leads who never buy.',
        'Customer acquisition cost: total sales and marketing spend in a period divided by new customers won in it. State what you include (ad spend, fees, tools, salaries) and keep it the same each month.',
        'Return on ad spend: revenue attributed to ads divided by ad spend. A ROAS of 4 means 4 units of revenue for each unit spent. Compare it with your margin, not only with other channels, because revenue is not profit.',
      ],
    },
    {
      type: 'p',
      text: 'For long sales cycles, such as B2B services, a lead from October may only close in January. Review revenue KPIs quarterly and the earlier stages monthly.',
    },
    { type: 'h2', text: 'How to pick 5 to 7 KPIs for a small company' },
    {
      type: 'ol',
      items: [
        'Start from one business goal, for example "40 qualified enquiries a month at a set cost per customer". Every KPI should explain progress towards it. The [small business marketing strategy guide](/blog/marketing-strategy-for-small-business) covers choosing that goal and a baseline.',
        'Take one result KPI from the revenue or conversion stage. This is the number the owner cares about.',
        'Add one cost KPI, such as cost per qualified lead or CAC, so growth is not bought at any price.',
        'Add one or two quality KPIs from the consideration stage, such as engagement rate by channel or lead-to-customer rate.',
        'Add one or two leading KPIs from awareness, such as Search Console clicks or new users, so you see changes before they reach enquiries.',
        'Drop any KPI where you cannot say who owns it, where it comes from, and what you would do if it fell by a third.',
      ],
    },
    {
      type: 'p',
      text: 'A set for a service company selling through search and Facebook might be: qualified leads per month by source, cost per qualified lead, lead-to-customer rate, engagement rate by channel, Search Console clicks to service pages, and share of enquiries answered within an hour. An online shop would swap in ROAS, conversion rate and repeat purchase rate. Review the set every quarter; goals change and a KPI that has stopped driving decisions should go.',
    },
    { type: 'h2', text: 'Traps that distort the numbers' },
    {
      type: 'ul',
      items: [
        'Three systems, three counts. The ad platform, GA4 and the CRM measure conversions differently, so their totals will not match. Pick one source of truth per KPI (usually the CRM for leads and revenue) and write it down.',
        'Averages that hide channels. A blended conversion rate can look stable while one channel improves and another collapses. Split by channel first.',
        'No baseline. A KPI without a starting value and a target is only a number.',
        'Changing definitions. If you move what counts as a key event or a qualified lead, mark the date on the chart, or the trend will mislead.',
      ],
    },
    {
      type: 'p',
      text: 'If you are not sure which numbers your accounts can already give you, [a free marketing audit](/audit) from WakeUP Marketing reviews your ads, website and sales process and returns the three changes that would help most, within one business day.',
    },
  ],
}
