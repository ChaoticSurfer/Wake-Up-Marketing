import type { BlogPost } from '@/lib/blog'

export const post: BlogPost = {
  locale: 'en',
  slug: 'facebook-ads-metrics',
  title: 'Facebook ads metrics: which ones matter for your goal',
  metaTitle: 'Facebook Ads Metrics That Matter',
  description:
    'Facebook ads metrics explained by goal: which of reach, frequency, CPM, CTR, CPC, cost per result and ROAS to watch, using Meta\'s own definitions.',
  publishedAt: '2026-12-08T18:00:00+04:00',
  updatedAt: '2026-12-08T18:00:00+04:00',
  service: 'advertising',
  reviewState: 'llm_reviewed',
  body: [
    {
      type: 'p',
      text: 'The Facebook ads metrics that matter depend on the goal of the campaign. For awareness, watch reach, frequency and CPM. For traffic, watch CTR and cost per link click. For leads and sales, watch results, cost per result and, if you sell online, purchase ROAS. The rest of the columns in Ads Manager are there to explain why one of those numbers moved.',
    },
    { type: 'h2', text: 'Start from the goal, then pick the metric' },
    {
      type: 'p',
      text: 'Ads Manager offers dozens of columns, and most of them are fine to ignore on any given campaign. Decide what a good week looks like in business terms first, then choose one headline metric and two or three supporting ones.',
    },
    {
      type: 'table',
      head: ['Campaign goal', 'Headline metric', 'Supporting metrics', 'Easy to over-read'],
      rows: [
        ['Awareness', 'Reach', 'Frequency, CPM', 'CTR'],
        ['Traffic', 'Cost per link click', 'CTR, CPM', 'Reach'],
        ['Leads', 'Cost per result (a lead)', 'Results, CTR, frequency', 'CPM on its own'],
        ['Online sales', 'Purchase ROAS', 'Cost per result, results', 'CTR and clicks'],
      ],
    },
    {
      type: 'p',
      text: 'For what drives CPM and CPC, and for dated price benchmarks, see [how much Facebook ads cost](/blog/facebook-ads-cost). This article is about reading the numbers once the ads are running. If you have not launched yet, start with [how to run Facebook ads](/blog/how-to-run-facebook-ads).',
    },
    { type: 'h2', text: 'Awareness: reach, frequency and CPM' },
    {
      type: 'p',
      text: 'Three metrics describe an awareness campaign, and Meta defines all of them in its [glossary of reach and frequency terms](https://www.facebook.com/business/help/230299314945919):',
    },
    {
      type: 'ul',
      items: [
        'Reach: the number of people who saw your ads at least once. It differs from impressions, which can include several views by the same person. Meta notes that reach is calculated using sampled data.',
        'Frequency: the average number of times each person saw your ad, calculated as impressions divided by reach.',
        'CPM: the average cost of 1,000 impressions. Meta\'s example: spend $50 and get 10,000 impressions, and your CPM is $5.',
      ],
    },
    {
      type: 'p',
      text: 'Reach is the headline here because the goal is to be seen by as many different people as the budget allows. Frequency is the check on it. Meta says that if performance drops as frequency rises, the audience "may be experiencing ad fatigue", and that it may be wise to change the creative or the targeting. A small audience with a large budget pushes frequency up quickly, so a rising frequency can be a sign the audience is too narrow for the spend.',
    },
    {
      type: 'p',
      text: 'CPM is useful for comparing campaigns and audiences, but it is a price, not a result. A campaign with a higher CPM can still deliver a cheaper result, so judge the ad by the cost of the result you care about.',
    },
    { type: 'h2', text: 'Traffic: CTR and cost per link click' },
    {
      type: 'p',
      text: 'For a traffic campaign the question is how cheaply you get the right people to your website, and how many of them find the ad interesting enough to click.',
    },
    {
      type: 'ul',
      items: [
        'CTR (link click-through rate): per [Meta](https://www.facebook.com/business/help/877711998984611), the percentage of impressions that received a link click, calculated as link clicks divided by impressions. A low CTR on a healthy reach usually points at the creative or the offer rather than the budget.',
        'Cost per link click (CPC): the amount spent divided by link clicks. In Ads Manager the column is named CPC (cost per link click), and Meta lists it next to cost per unique link click in its [cost per unique click definition](https://www.facebook.com/business/help/1654277868148371).',
      ],
    },
    {
      type: 'p',
      text: 'Check which version of each metric you are looking at. Ads Manager also shows "clicks (all)" and "CTR (all)", which count more kinds of clicks than link clicks. Those numbers can look better, but they include clicks that do not take anyone to your site. Also remember that a click is not a visit: if the page is slow, some people leave before it loads, so compare link clicks with the sessions in your website analytics.',
    },
    { type: 'h2', text: 'Leads and sales: results, cost per result and ROAS' },
    {
      type: 'p',
      text: 'These are the metrics that connect ads to money, and the ones most often misread.',
    },
    {
      type: 'p',
      text: '[Results](https://www.facebook.com/business/help/611432918970668) is the number of times your ad achieved an outcome, based on the objective and settings you selected. That could be leads, purchases or something else, so always read which event the column is counting. Two details from Meta matter. First, results may not reflect how you are billed: an ad can count purchases while being billed on impressions. Second, Meta uses a default attribution setting of 7-day click, 1-day view and 1-day engagement, so a result can be credited to an ad that the person only saw or engaged with, not just clicked.',
    },
    {
      type: 'p',
      text: '[Cost per result](https://www.facebook.com/business/help/762109693832964) is the amount spent divided by results. Meta says it shows how cost-efficiently you achieved the objective you set, and that it is affected by your bid, target audience, optimisation type, creative and messaging, and schedule. This is the headline number for lead campaigns. Because it depends on what the result is, compare it only between campaigns that count the same event: a cost per landing page view and a cost per lead are different things.',
    },
    {
      type: 'p',
      text: '[Purchase ROAS](https://www.facebook.com/business/help/274294333328345) is purchase conversion value divided by amount spent. Meta notes that the figure is based on conversions attributed to your ads, can be estimated, and in some cases, such as results for ads delivered to iOS 14+ devices, may not be calculated. It relies on purchases being reported to Meta with a value through your connected Meta Business Tools, so check that tracking before you trust the number.',
    },
    {
      type: 'p',
      text: 'ROAS is revenue over ad spend, not profit. An illustrative example: if you spend 500 and the purchases credited to the ads are worth 1,500, ROAS is 3.0. Whether that is good depends on your margin. If you keep 25% of each sale after product costs, the revenue only breaks even on the ad spend at a ROAS of 4.0 (1 divided by 0.25), so a ROAS of 3.0 would lose money. These numbers are made up to show the method; use your own margin.',
    },
    { type: 'h2', text: 'Reading the metrics together' },
    {
      type: 'p',
      text: 'One metric rarely explains a problem, but a pair often does. Work from the headline metric backwards:',
    },
    {
      type: 'table',
      head: ['What you see', 'Look at next', 'Likely area to test'],
      rows: [
        ['Cost per result rising', 'Frequency and CTR', 'Fatigued creative or a saturated audience'],
        ['Good CTR, few results', 'What happens after the click', 'Landing page, form or the follow-up speed'],
        ['Low CTR, normal CPM', 'The ad itself', 'Image, hook, offer or call to action'],
        ['High CPM, normal CTR', 'Audience and placements', 'Audience size and competition for that audience'],
        ['Good cost per result, weak sales', 'Lead quality', 'Targeting, form questions, qualification'],
      ],
    },
    {
      type: 'p',
      text: 'The right-hand column lists places to test, not proven causes. Change one thing at a time and give it enough days to compare, otherwise you will not know which change did the work. Meta\'s own cost per result page makes the same point in different words: many factors affect the number.',
    },
    { type: 'h2', text: 'What Ads Manager cannot tell you' },
    {
      type: 'p',
      text: 'Ads Manager counts what happens inside the ad system. It does not know whether a lead picked up the phone, turned out to be a student looking for free information, or signed a contract three weeks later. Many companies sell through calls, WhatsApp and meetings, so the number that settles the question sits in your sales records, not in a dashboard.',
    },
    {
      type: 'ul',
      items: [
        'Record where every enquiry came from, and count leads the same way for every channel, as described in [lead generation strategies](/blog/lead-generation-strategies).',
        'Once a month, match cost per result in Ads Manager with the number of leads that became customers, then calculate cost per customer.',
        'Use the same attribution window when you compare periods, so that changes in the metric come from the ads and not from the settings.',
        'If you also run Google Ads, do not compare the two platforms\' conversion numbers directly; see [Facebook Ads vs Google Ads](/blog/facebook-ads-vs-google-ads) for how their measurement differs.',
      ],
    },
    {
      type: 'p',
      text: 'WakeUP runs Meta and Google campaigns against cost per lead and sales, with tracking set up first and a monthly report in those terms; the details are on the [advertising service page](/services/advertising). If you already spend on ads and are not sure which of these numbers to trust, the [free marketing audit](/audit) includes a look at your paid ads and where the budget goes.',
    },
  ],
}
