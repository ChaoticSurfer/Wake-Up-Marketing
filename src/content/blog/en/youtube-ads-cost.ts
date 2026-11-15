import type { BlogPost } from '@/lib/blog'

export const post: BlogPost = {
  locale: 'en',
  slug: 'youtube-ads-cost',
  title: 'How much do YouTube ads cost? Pricing by ad format and a first test budget',
  metaTitle: 'How Much Do YouTube Ads Cost?',
  description:
    'How much do YouTube ads cost? Skippable ads bill per view, bumpers and non-skippable ads per 1,000 impressions. Price ranges, cost drivers, a test budget.',
  publishedAt: '2027-01-02T09:00:00+04:00',
  updatedAt: '2027-01-02T09:00:00+04:00',
  service: 'advertising',
  reviewState: 'llm_reviewed',
  body: [
    {
      type: 'p',
      text: 'YouTube ads have no fixed price. You set a budget and a bid, and what you pay depends on the format: skippable in-stream ads usually bill per view (CPV), while bumper, non-skippable and many other formats bill per 1,000 impressions (CPM). Published estimates run from about one to forty US cents per view and from about $3 to $20 per 1,000 impressions depending on the source, but they are agency samples, not Google figures, and mostly reflect other markets than Georgia.',
    },
    { type: 'h2', text: 'How YouTube charges: view or impression' },
    {
      type: 'p',
      text: 'Google Ads Help lists each video format with its billing basis. On a skippable in-stream ad, [viewers can skip the ad after 5 seconds](https://support.google.com/google-ads/answer/2375464), and under CPV bidding you pay when a viewer watches 30 seconds (or the whole video if it is shorter) or interacts with it. Under Target CPM, Target CPA or Maximize conversions bidding you pay per impression instead. The main formats compare as follows.',
    },
    {
      type: 'table',
      head: ['Format', 'What you are charged for (Google Ads Help)', 'Typical use'],
      rows: [
        ['Skippable in-stream', 'CPV: 30 seconds watched or an interaction. With CPM, CPA or conversion bidding: impressions', 'Reach and consideration with a story that works after the skip button appears'],
        ['Non-skippable in-stream', 'Impressions (Target CPM); the video can run 15 to 60 seconds depending on campaign subtype', 'A short message that must be seen in full'],
        ['Bumper', 'Impressions (Target CPM), 5 to 6 seconds', 'Brand recall, a reminder after a longer ad'],
        ['In-feed', 'A click to watch; in video view campaigns also an autoplay of at least 10 seconds', 'Reaching people searching or browsing YouTube'],
        ['YouTube Shorts ads', 'CPV: 10 seconds watched or a call-to-action click; or impressions under Target CPM', 'Vertical, short clips'],
        ['Masthead', 'Reservation through a Google sales representative, priced by CPM or per hour', 'Large launches with big budgets'],
      ],
    },
    {
      type: 'p',
      text: 'Google also states that a CPV view is not the same across formats: [for Shorts, a view counts after 10 seconds of watching](https://support.google.com/google-ads/answer/2472735), for in-feed ads when someone clicks to watch, and for in-stream ads after 30 seconds. Compare CPV figures only within one format.',
    },
    { type: 'h2', text: 'What the published price ranges say' },
    {
      type: 'p',
      text: 'Google Ads Help gives no average prices, so every number comes from agencies and ad platforms that watched their own accounts. They disagree, which is itself useful: it shows you should not budget from an average.',
    },
    {
      type: 'table',
      head: ['Format', 'Influencer Marketing Hub (September 2024)', 'AdWave 2026 compilation of two sources'],
      rows: [
        ['Skippable in-stream (CPV)', '$0.010 to $0.030 per view overall', '$0.03 to $0.12, and $0.05 to $0.10, per view'],
        ['In-feed', 'About $0.10 per view (one section says as low as $0.03)', '$0.10 to $0.40 per click, or $3 to $8 per 1,000 impressions'],
        ['Non-skippable in-stream', 'About $6 per 1,000 impressions', '$8 to $18, and $6 to $10, per 1,000 impressions'],
        ['Bumper', 'About $10 to $20 per 1,000 impressions', '$6 to $15, and $3.24 to $4.37, per 1,000 impressions'],
        ['Shorts', 'Not listed', '$4 to $12 CPM, or $0.10 to $0.30 per view'],
      ],
    },
    {
      type: 'p',
      text: 'Sources: [Influencer Marketing Hub, September 2024](https://influencermarketinghub.com/how-much-do-youtube-ads-cost/), whose article is itself inconsistent on in-feed and CPM figures, and [AdWave\'s 2026 compilation](https://adwave.com/resources/youtube-ad-costs), which cites two sources and notes they disagree widely, especially for bumpers. A third guide, WebFX, reports a [survey of 270 marketers](https://www.webfx.com/blog/social-media/how-much-does-youtube-advertising-cost) with $0.11 to $0.40 per view as the range 43 percent of respondents gave. Prices are quoted in US dollars, and costs vary by country and audience: Georgia is not the US, so treat these as ceilings to test against, not a forecast.',
    },
    { type: 'h2', text: 'What moves your cost' },
    {
      type: 'ul',
      items: [
        'Bid. Google warns that [“Using a bid that is too low will inhibit your campaign from effectively participating in the auction.”](https://support.google.com/google-ads/answer/2472735) A cheap bid does not buy cheap views; it may buy none.',
        'Audience. The more advertisers compete for the same people, the higher the price. AdWave reports that sources put legal and financial categories well above broad consumer ones.',
        'Season. Peaks such as holidays and the fourth quarter raise demand; Influencer Marketing Hub lists seasonality among its drivers, and AdWave attributes Q4 as the most expensive period to one of its sources.',
        'Objective. Influencer Marketing Hub notes that sales and lead goals typically cost more than awareness goals.',
        'Creative. Under CPV a viewer who skips before 30 seconds is not billed unless they interact, so the first five seconds decide whether an impression becomes a billable view. The video itself is also a cost, and Influencer Marketing Hub says production can be the largest expense.',
      ],
    },
    {
      type: 'p',
      text: 'The general mechanics of bids, quality and budgets are the same as in other Google campaigns, and [what Google Ads costs](/blog/google-ads-cost) and [how to optimize Google Ads](/blog/google-ads-optimization-tips) explain them without repeating them here.',
    },
    { type: 'h2', text: 'How to budget a first YouTube test' },
    {
      type: 'p',
      text: 'There is no minimum. Influencer Marketing Hub suggests starting with about $10 a day to test formats and audiences, and WebFX reports $10 a day as a typical daily budget. A test should answer a question, so work out the budget from the answer you need.',
    },
    {
      type: 'ol',
      items: [
        'Choose one goal for the test: views of a brand video, visits to a landing page, or leads.',
        'Pick one format. For a first test a skippable in-stream ad or a Shorts ad is the simplest to read, because you pay for engaged views.',
        'Set the number of views you need to judge it, for example 5,000. Multiply by the CPV you can afford: at $0.05 that is $250, at $0.10 it is $500. These are examples of arithmetic, not forecasts.',
        'Spread the spend over two to four weeks so that the account has time to learn and weekdays are compared with weekends.',
        'Run two or three videos against each other with the same audience, so that the cost per view tells you about the video, not the audience.',
        'Judge the result by what happens after the view: visits, enquiries, calls. A cheap view that nobody acts on is not cheap.',
      ],
    },
    {
      type: 'p',
      text: 'Add the production cost to the media budget. Influencer Marketing Hub gives a ballpark of $1,000 to $2,000 for the entire process, though it is unclear whether that includes production. For what a finished video costs in Georgia, read [marketing video cost](/blog/marketing-video-cost), and for scripts and openings, [short-form video hooks](/blog/short-form-video-hooks). Retargeting people who watched your video can be set up later; see [Google Ads remarketing](/blog/google-ads-remarketing).',
    },
    { type: 'h2', text: 'Check the language before you plan the creative' },
    {
      type: 'p',
      text: 'Georgian is not in the language table of Google Ads Help; its page on [supported languages](https://support.google.com/google-ads/answer/6333734) says ads created in a language that is not supported for language targeting will be disapproved, and that some formats have different language restrictions. Location targeting for Georgia is a separate setting, but confirm with Google or a specialist how a Georgian-language video and its text fields will be treated before you commit budget. A test with a small spend is the cheapest way to find out. If your goal is to reach Georgian speakers, compare YouTube with other channels, starting with [Facebook ads cost](/blog/facebook-ads-cost).',
    },
    {
      type: 'p',
      text: 'WakeUP plans, launches and optimises ads on Facebook, Instagram and Google; see the [advertising service](/services/advertising). To check whether YouTube suits your goals, send your details through the [free marketing audit](/audit).',
    },
  ],
}
