import type { BlogPost } from '@/lib/blog'

export const post: BlogPost = {
  locale: 'en',
  slug: 'google-ads-cost',
  title: 'Google Ads cost: how the pricing works and how to estimate yours',
  metaTitle: 'Google Ads Cost: How Pricing Works',
  description:
    'Google Ads cost depends on an auction, not a price list. See how bids, Quality Score and daily budget work, and how to estimate your own spend.',
  publishedAt: '2026-12-04T16:00:00+04:00',
  updatedAt: '2026-12-04T16:00:00+04:00',
  service: 'advertising',
  reviewState: 'llm_reviewed',
  body: [
    {
      type: 'p',
      text: 'Google Ads cost has no fixed price. Search ads are bid on a cost-per-click basis, and the price of a click is set in an auction each time someone searches. You choose a maximum bid and a daily budget, and Google charges you what the auction requires, which is often less than your maximum. To estimate your own cost, multiply the clicks you need by the price per click Keyword Planner shows for your keywords.',
    },
    { type: 'h2', text: 'What you actually pay for' },
    {
      type: 'p',
      text: 'On Search you set a maximum cost per click, so the charge is tied to clicks, not to how often the ad is shown. Two numbers are yours to set: the most you will pay for a click, and the amount you are willing to spend per day. Everything else, including the real price of each click, comes from the auction. That is why the same keyword can cost different advertisers different amounts. For the Meta side of the same question, see [how much Facebook ads cost](/blog/facebook-ads-cost).',
    },
    { type: 'h2', text: 'What decides the price of a click' },
    {
      type: 'p',
      text: 'Google runs an auction for each ad location on each search. According to [Google Ads Help](https://support.google.com/google-ads/answer/6366577), six main factors decide which ads appear and in what order:',
    },
    {
      type: 'ul',
      items: [
        'Your bid.',
        'The quality of your ads and landing page.',
        'The expected impact of your ad assets and other ad formats.',
        'Your Ad Rank thresholds, the minimum quality an ad must reach to show in a position.',
        'The context of the search: search terms, location, device, time of search and the other results on the page.',
        'How competitive the auction is.',
      ],
    },
    {
      type: 'p',
      text: 'The bid you set is your maximum cost per click (max CPC). Google states that by setting it, "you\'re telling Google Ads the maximum amount you\'re willing to pay for a click on your ad", and that "how much you actually end up paying is often less". A higher bid alone does not win: a competitor with a better ad and landing page can beat a larger bid.',
    },
    {
      type: 'p',
      text: 'Quality Score is the number most people look at. Google [describes it](https://support.google.com/google-ads/answer/6167118) as "a diagnostic tool meant to give you a sense of how well your ad quality compares to other advertisers" and adds that "Quality Score is not an input in the ad auction". It is built from three parts, each rated above average, average or below average: expected clickthrough rate, ad relevance and landing page experience. In practice, an ad that matches the search and sends people to a page that delivers what it promised is what Google\'s quality factors reward.',
    },
    { type: 'h2', text: 'How the daily budget works' },
    {
      type: 'p',
      text: 'Your campaign budget is an average, not a hard daily limit. [Google Ads Help](https://support.google.com/google-ads/answer/6385083) defines the average daily budget as "the average amount that you set for each ad campaign on a per-day basis", with a daily spending limit of "two times your average daily budget for most campaigns" on any single day, and a monthly limit of "30.4 times your average daily budget for most campaigns".',
    },
    { type: 'p', text: 'Here is what that means with a round example. These numbers are for illustration only.' },
    {
      type: 'table',
      head: ['Setting', 'Example', 'Rule'],
      rows: [
        ['Average daily budget', '100', 'The figure you set for the campaign'],
        ['Most you can be charged on one day', '200', 'Two times the daily budget, for most campaigns'],
        ['Most you can be charged in a month', '3,040', '30.4 times the daily budget, for most campaigns'],
      ],
    },
    {
      type: 'p',
      text: 'So a busy day can cost double your daily budget, but over the month you should not be charged more than 30.4 times the daily figure. Plan your monthly spend as daily budget times 30.4, not times 30, and remember the rule says "for most campaigns", so check the wording on your own account.',
    },
    { type: 'h2', text: 'How to estimate your cost with Keyword Planner' },
    {
      type: 'p',
      text: '[Keyword Planner](https://support.google.com/google-ads/answer/7337243) is a tool inside Google Ads. Google says you need to finish account setup, including billing information, to use basic features. It shows monthly search estimates for keywords and a plan forecast of how many clicks, impressions or conversions a budget is likely to bring. Google notes that forecasts are "refreshed daily and based on the last 7-10 days, adjusted for seasonality", that very low-volume keywords cannot be forecast, and that "campaign performance depends on a variety of factors". Treat the output as a starting estimate, not a quote.',
    },
    {
      type: 'ol',
      items: [
        'List a short set of the searches a buyer would type, in the language they use. For Georgia that often means both Georgian and English.',
        'Enter them in Keyword Planner and set the location to Georgia, or to the cities you serve.',
        'Note the monthly searches and the average cost Google shows for each keyword.',
        'Multiply: clicks you want per month times the average cost per click gives your monthly ad spend.',
        'Work backwards from your sales: if 1 in 20 clicks becomes an enquiry and 1 in 5 enquiries becomes a customer, 100 clicks produce about 5 enquiries and 1 customer. Compare the spend on those 100 clicks with what one customer is worth to you.',
      ],
    },
    {
      type: 'p',
      text: 'The conversion rates in step 5 are examples. Use your own, or start with a small test budget and measure them before scaling.',
    },
    { type: 'h2', text: 'A benchmark, and why it is not Georgia' },
    {
      type: 'p',
      text: 'Published benchmarks come from other markets, so treat them as context, not as a forecast for Georgia. WordStream published its search advertising benchmarks on 19 May 2026. As reported by [PPC Land](https://ppc.land/google-ads-cpl-drops-for-first-time-since-2020-as-cpc-hits-5-42/), the study covered 13,474 US-based search campaigns, managed through the LocaliQ platform, run between April 2025 and March 2026 on Google Ads and Microsoft Ads, and reported a cross-industry cost per click of $5.42, in US dollars. These are WordStream\'s figures as reported by PPC Land.',
    },
    {
      type: 'p',
      text: 'This is not a Georgia figure. Click prices depend on the country, the industry and how many advertisers bid on the same keywords, and a US figure may say little about the Georgian market. Do not use it to set a Georgian budget. Check your own keywords in Keyword Planner instead.',
    },
    { type: 'h2', text: 'What else adds to the total' },
    {
      type: 'ul',
      items: [
        'Ad spend: the amount Google charges, covered above.',
        'Management: someone to build campaigns, write ads, track conversions and adjust bids. This is separate from what you pay Google.',
        'Tracking and landing pages: conversion tracking and a page that turns clicks into enquiries decide how much each click is worth.',
      ],
    },
    {
      type: 'p',
      text: 'If you would like a second opinion on a budget before you commit, WakeUP runs Google and Meta campaigns as part of its [advertising service](/services/advertising), and the [free marketing audit](/audit) reviews where your current ad budget goes.',
    },
  ],
}
