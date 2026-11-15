import type { BlogPost } from '@/lib/blog'

export const post: BlogPost = {
  locale: 'en',
  slug: 'looker-studio-marketing-dashboard',
  title: 'Looker Studio dashboard: build a one-page marketing dashboard in an hour',
  metaTitle: 'Looker Studio Marketing Dashboard',
  description:
    'Build a free Looker Studio dashboard from GA4, Google Ads and Search Console in about an hour: what goes on one page, the steps, and what to leave off.',
  publishedAt: '2027-02-25T18:00:00+04:00',
  updatedAt: '2027-02-25T18:00:00+04:00',
  service: 'audit',
  reviewState: 'llm_reviewed',
  body: [
    {
      type: 'p',
      text: 'A Looker Studio dashboard for marketing can be built in about an hour if you keep it to one page: connect GA4, Google Ads and Search Console as data sources, put five or six scorecards at the top, add one trend chart and one table per channel, and add a date-range control. Everything that does not help someone decide what to do next stays off. The tool is free, so the real cost is the time you spend choosing what the page shows.',
    },
    { type: 'h2', text: 'What a one-page dashboard is for' },
    {
      type: 'p',
      text: 'A dashboard answers one question every week: is marketing bringing in enquiries and sales at a cost we accept, and where should the next lari go? If a chart does not change an answer to that, it is decoration. Deciding the question first also tells you which numbers to show. [Marketing KPIs](/blog/marketing-kpis) explains how to choose them; this post is about turning the choice into a page.',
    },
    {
      type: 'p',
      text: 'A quick note on names. The tool has gone by Google Data Studio, Data Studio and Looker Studio, and you will see all three in guides and menus. They refer to the same reporting tool from Google, which [Google\'s documentation](https://docs.cloud.google.com/looker/docs/studio) calls a "no-cost tool".',
    },
    { type: 'h2', text: 'What goes on the page' },
    {
      type: 'table',
      head: ['Block', 'What it shows', 'Source'],
      rows: [
        ['Scorecards (top row)', 'Sessions, key events (leads or purchases), conversion rate, ad spend, cost per lead or purchase', 'GA4 and Google Ads'],
        ['Trend chart', 'Key events and ad spend by week, so a rise in spend without a rise in results is visible at once', 'GA4 and Google Ads'],
        ['Channel table', 'Sessions, key events and conversion rate by channel (organic, paid, direct, social, email)', 'GA4'],
        ['Campaign table', 'Spend, clicks, conversions and cost per conversion by campaign', 'Google Ads'],
        ['Search table', 'Top queries (or, from a second source, top landing pages) by clicks, impressions and average position', 'Search Console'],
      ],
    },
    {
      type: 'p',
      text: 'Meta (Facebook and Instagram) results are not covered by Google\'s own connectors. If you run Meta ads, either add a third-party connector, or paste the weekly spend and leads into a Google Sheet and connect that sheet as a fourth data source. For Meta metrics worth watching, see [Facebook ads metrics](/blog/facebook-ads-metrics).',
    },
    { type: 'h2', text: 'Build it in six steps' },
    {
      type: 'ol',
      items: [
        'Define the page in five minutes: who reads it, how often, and the one decision it supports. Sketch the layout on paper with the scorecards on top.',
        'Check that the numbers behind it are trustworthy. A dashboard built on broken tracking is a nicely formatted mistake. [GA4 for small business](/blog/ga4-for-small-business) covers the key-event setup.',
        'Create a report and add your data sources. GA4 needs at least Read & Analyze permission on the property, [Google\'s connector page](https://docs.cloud.google.com/looker/docs/studio/connect-to-google-analytics) says. Then add Google Ads and Search Console.',
        'Add the Search Console source with care: choose either the Site Impression or the URL Impression table. [Google explains](https://docs.cloud.google.com/looker/docs/studio/connect-to-search-console) that "a single data source can only use one of these". Google says that to see both side by side you create two data sources and add both to one report. Site Impression is the natural pick for site-wide query rows and URL Impression for page-level rows, going by the table names.',
        'Add the scorecards, then the trend chart, then the tables. Compare with the previous period on the scorecards so each number has context.',
        'Add one date-range control for the whole page, set the default to the last 28 days, and share the report with named viewers instead of an open link.',
      ],
    },
    {
      type: 'p',
      text: 'Our [Google Search Console guide](/blog/google-search-console-guide) explains what the query and landing-page figures mean before you put them on a page.',
    },
    { type: 'h2', text: 'What to leave off' },
    {
      type: 'p',
      text: 'The first version of most dashboards is too full. Leave these off, or move them to a second page for the person who needs them:',
    },
    {
      type: 'ul',
      items: [
        'Vanity totals such as impressions, page views and follower counts, unless a decision depends on them.',
        'Every metric a connector offers. Pick the five or six you will act on.',
        'More than one trend chart. Two lines (results and spend) tell the story.',
        'Pie charts and gauges, which are harder to compare than bars or lines.',
        'Data you do not trust. A blank space is better than a figure nobody can explain.',
        'Cumulative numbers with no date range. They hide the last month.',
      ],
    },
    { type: 'h2', text: 'Limits to know before you rely on it' },
    {
      type: 'ul',
      items: [
        'Freshness: Google\'s [data freshness page](https://docs.cloud.google.com/looker/docs/studio/manage-data-freshness) says Google\'s ad and analytics products "refresh every 12 hours" and that "That rate can\'t be changed". Today\'s figures may be missing from the dashboard, and it is a weekly view, not a live one.',
        'Totals can differ from the source. GA4 numbers in the dashboard and in the GA4 interface may not match exactly, and Google Ads figures reflect its own attribution. Note the source of each number in a footnote.',
        'GA4 limits: reports that connect to GA4 are subject to [Google Analytics Data API quotas](https://docs.cloud.google.com/looker/docs/studio/connect-to-google-analytics), so a crowded report can run into those limits. Fewer charts means fewer requests.',
        'Campaign tagging: if your links carry no UTM parameters, the channel table will lump traffic into broad groups. [UTM parameters](/blog/utm-parameters-guide) are the fix.',
      ],
    },
    { type: 'h2', text: 'When a dashboard is not the problem' },
    {
      type: 'p',
      text: 'If the page shows numbers nobody trusts, the fault is usually upstream: key events that do not fire, ad accounts that track the wrong thing, or no way to connect enquiries to sales. Building the dashboard will not fix that and can make it look official. A short review of tracking, accounts and reporting finds those gaps first. WakeUP offers a [free marketing audit](/audit) that covers exactly this, before anyone spends time on charts.',
    },
  ],
}
