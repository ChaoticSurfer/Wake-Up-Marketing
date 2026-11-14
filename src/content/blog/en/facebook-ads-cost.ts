import type { BlogPost } from '@/lib/blog'

export const post: BlogPost = {
  locale: 'en',
  slug: 'facebook-ads-cost',
  title: 'How much do Facebook ads cost? How Meta pricing works and how to find your own number',
  metaTitle: 'How Much Do Facebook Ads Cost?',
  description:
    'How much do Facebook ads cost? Meta sets no fixed price: an auction does. See how bids, budgets and CPM work, and how to test your own cost.',
  publishedAt: '2026-12-03T16:00:00+04:00',
  updatedAt: '2026-12-03T16:00:00+04:00',
  service: 'advertising',
  reviewState: 'llm_reviewed',
  body: [
    {
      type: 'p',
      text: 'How much do Facebook ads cost? There is no price list. You set a budget, and an auction decides what each impression, click or lead costs, so the same ad can cost more or less depending on your audience, your offer and who else is bidding. Costs also differ by country. For scale only, a 2025 US benchmark puts the median cost per click at $0.70 on traffic campaigns and the median cost per lead at $27.66 (USD, not Georgia). The reliable way to learn your own cost is a small, structured test, described at the end of this article.',
    },
    { type: 'h2', text: 'How Meta decides what you pay: the ad auction' },
    {
      type: 'p',
      text: 'Each time there is a chance to show an ad to someone, Meta runs an auction among the ads whose target audience includes that person. According to the [Meta Business Help Center](https://www.facebook.com/business/help/430291176997542), "the winner of the auction is the ad with the highest total value", subject to a price floor (a minimum price). Total value combines three factors:',
    },
    {
      type: 'ul',
      items: [
        'Bid: what you are willing to pay to get your desired outcome.',
        'Estimated action rates: Meta\'s estimate of how likely this particular person is to engage with or convert from your ad.',
        'Ad quality: a measure built from sources such as feedback from people who view or hide the ad, and checks for low-quality traits like withholding information, sensationalised language and engagement bait.',
      ],
    },
    {
      type: 'p',
      text: 'Meta states that estimated action rates and ad quality together measure ad relevance, and that a more relevant ad can win against ads with higher bids. In practice this means money alone does not decide who is shown: an ad that is more relevant to the person can beat ads with higher bids. Meta also says its auction adjustments will not make it charge you more than your bid.',
    },
    { type: 'h2', text: 'Bid strategies: how much control you give Meta' },
    {
      type: 'p',
      text: 'The [bid strategy](https://www.facebook.com/business/help/1619591734742116) tells Meta how to bid for you. Meta groups the options into three types:',
    },
    {
      type: 'table',
      head: ['Type', 'Option', 'What it does, per Meta'],
      rows: [
        ['Spend-based', 'Highest volume', 'Maximises the delivery and conversions you can get from your budget, without a cost target'],
        ['Spend-based', 'Highest value', 'Spends the budget with a focus on the highest value purchases'],
        ['Goal-based', 'Cost per result goal', 'Sets an average cost and maximises conversions near it; staying within the limit is not guaranteed'],
        ['Goal-based', 'ROAS goal', 'Aims to keep return on ad spend near a target average; adherence is not guaranteed'],
        ['Manual', 'Bid cap', 'Sets the maximum bid in every auction; meant for advertisers who can calculate the right bid so delivery is not constrained'],
      ],
    },
    {
      type: 'p',
      text: 'For a first campaign, the practical difference is risk. Highest volume gets you results fastest but gives you no price protection. A cost goal or bid cap protects your cost per result but can limit how much you spend if the target is set too low. Meta recommends 50 to 100 or more conversions a week for goal-based strategies to work well.',
    },
    { type: 'h2', text: 'Budget: what you set and how spend moves' },
    {
      type: 'p',
      text: 'A budget is the amount you want to spend, and Meta describes it as a cost control tool alongside the bid strategy. On [Meta\'s budgets page](https://www.facebook.com/business/help/214319341922580) there are two kinds:',
    },
    {
      type: 'ul',
      items: [
        'Daily budget: an average, not a hard cap. On some days Meta may spend up to 75% more than the daily figure and less on others, but over a calendar week it will not spend more than 7 times the daily budget.',
        'Lifetime budget: the total for the whole run, and a hard cap.',
      ],
    },
    {
      type: 'p',
      text: 'You can also set a campaign or account spending limit, as described on Meta\'s [ad cost overview](https://www.facebook.com/business/help/201828586525529). Minimum budgets exist and [vary by country and objective](https://www.facebook.com/business/help/203183363050448); Ads Manager shows an alert if yours is too low. If you use a cost per result goal, Meta advises a daily budget of at least 5 times that goal. Meta\'s own example is a $5 goal needing a daily budget of at least $25.',
    },
    { type: 'h2', text: 'What pushes CPM and CPC up or down' },
    {
      type: 'p',
      text: 'CPM is the cost per 1,000 impressions; CPC is the cost per click. Both are outcomes of the auction, not settings you choose. The factors Meta documents are:',
    },
    {
      type: 'ul',
      items: [
        'Relevance: higher estimated action rates and better ad quality help you win auctions at lower prices.',
        'Competition: other advertisers targeting the same people compete in the same auctions, and Meta applies a price floor.',
        'What you optimise for: Meta notes that some events need more budget than others. Optimising for purchases usually needs more budget than optimising for landing page views, because purchases are harder to achieve.',
        'The learning phase: new or significantly edited ad sets are less stable and [usually have a higher cost per result](https://www.facebook.com/business/help/112167992830700) until they reach about 50 results in a week.',
        'Region and other business costs: Meta says its auction adjustments can account for regional and other unique business costs, so prices can differ between countries.',
      ],
    },
    {
      type: 'p',
      text: 'One caution from Meta: if you optimise for conversions, [CPM may not be a good indicator of performance](https://www.facebook.com/business/help/1364841787225722), because the system may buy pricier impressions when that gets cheaper conversions. Judge the ad by the cost of the result you care about, such as a lead or a sale, not by CPM alone.',
    },
    { type: 'h2', text: 'Benchmarks: one dated study, and not about Georgia' },
    {
      type: 'p',
      text: 'Published benchmarks are mostly US-based and age quickly, so treat them as a rough sense of scale only. A public set of US benchmarks is the [WordStream (LocaliQ) Facebook Ads Benchmarks 2025](https://www.wordstream.com/blog/facebook-ads-benchmarks-2025). It reports median figures, in US dollars, from 554 traffic campaigns and 726 leads campaigns that ran between 1 April 2024 and 30 June 2025. It is not specific to Georgia, and its data is older than this article.',
    },
    {
      type: 'table',
      head: ['Metric (WordStream 2025, medians, USD)', 'Result'],
      rows: [
        ['Cost per click, traffic campaigns', '$0.70 (down from $0.77 the year before)'],
        ['Cost per click, leads campaigns', '$1.92 (up from $1.88)'],
        ['Conversion rate, leads campaigns', '7.72% (down from 8.67%)'],
        ['Cost per lead, leads campaigns', '$27.66 (up from $22.87)'],
        ['Cost per lead, Restaurants & Food', '$3.16'],
        ['Cost per lead, Dentists & Dental Services', '$76.71'],
      ],
    },
    {
      type: 'p',
      text: 'The spread matters more than the average: in the same study, the cost per lead for dentists and dental services was about 24 times that for restaurants and food ($76.71 vs $3.16). A Georgian company will not match any of these numbers, because audience size, competition, language, currency and the value of a lead all differ. Use them to sanity-check your own results, not to forecast them.',
    },
    { type: 'h2', text: 'How to find your own cost with a small test budget' },
    {
      type: 'p',
      text: 'Run a deliberately small test, then read the real numbers from your own account. A structure that follows Meta\'s documented thresholds:',
    },
    {
      type: 'ol',
      items: [
        'Define one result that matters: a lead form, a WhatsApp enquiry or a purchase. Make sure it is tracked before you spend anything.',
        'Start with one campaign and a small number of ad sets and ads. Meta says that many ads and ad sets teach the system less about each one.',
        'Choose a bid strategy of highest volume for the test, so the system is not held back by a cost target you have not measured yet.',
        'Set a daily budget you can afford to lose and run it until it has about 50 results or a full week, whichever your budget allows, without editing. Meta warns that edits can reset the learning phase.',
        'Check the cost per result in Ads Manager over the whole week, not by hour or day. Meta says hourly breakdowns show swings that average out.',
        'Do the arithmetic: if you want about 50 results in the first week, multiply your expected cost per result by 50. If that number is too high, optimise for an easier event first, such as landing page views, to learn your CPM and CPC cheaply.',
        'Only then add a cost per result goal, set from your measured average rather than a guess.',
      ],
    },
    {
      type: 'p',
      text: 'One account rule is worth knowing: Meta states that a new ad account must first spend at least $10 USD being [charged for impressions](https://www.facebook.com/business/help/146070805942156) before it can switch to other charge choices.',
    },
    {
      type: 'p',
      text: 'Cost per lead is only half the picture. What matters is what a lead is worth once your sales team follows up, which is covered in [lead generation strategies](/blog/lead-generation-strategies) and in the guide to a [social media marketing strategy](/blog/social-media-marketing-strategy). WakeUP\'s [Meta and Google Ads service](/services/advertising) covers campaign setup, tracking, creative testing and weekly optimisation, and the [free marketing audit](/audit) reviews where your current ad budget goes. Meta\'s rules and the figures above change, so check the linked pages before you set a budget.',
    },
  ],
}
