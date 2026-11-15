import type { BlogPost } from '@/lib/blog'

export const post: BlogPost = {
  locale: 'en',
  slug: 'google-ads-bidding-strategies',
  title: 'Google Ads bidding strategies: how to choose by goal and conversion volume',
  metaTitle: 'Google Ads Bidding Strategies Explained',
  description:
    'Google Ads bidding strategies compared by goal: Maximize clicks, Maximize conversions, Target CPA and Manual CPC, and why tracking must come first.',
  publishedAt: '2027-02-12T18:00:00+04:00',
  updatedAt: '2027-02-12T18:00:00+04:00',
  service: 'advertising',
  reviewState: 'llm_reviewed',
  body: [
    {
      type: 'p',
      text: 'Choose a Google Ads bidding strategy by what you want from the click and how many conversions the campaign records. Want visits and have no conversion data: Maximize clicks or Manual CPC. Want enquiries or sales and tracking works: Maximize conversions, then Target CPA once you know a cost per conversion you can afford. All automated strategies depend on accurate conversion tracking.',
    },
    { type: 'h2', text: 'The strategies, grouped by goal' },
    {
      type: 'p',
      text: 'Google\'s [list of bid strategies](https://support.google.com/google-ads/answer/2472725) sorts them by what they aim for. For a company that wants leads or sales, three groups matter.',
    },
    {
      type: 'table',
      head: ['Goal', 'Strategy', 'What Google says it does', 'Best when'],
      rows: [
        ['Traffic', 'Maximize clicks', 'Gets "the most clicks possible within your budget"', 'You have no conversion tracking yet, or want visits to a new page'],
        ['Traffic', 'Manual CPC', 'You set maximum CPC bids yourself, per ad group, keyword or placement', 'You want full control, or the account is too small for automation to learn'],
        ['Leads or sales', 'Maximize conversions', 'Uses your full budget to get the most conversions, with no fixed cost-per-action goal', 'Tracking works and you want volume before you set a cost limit'],
        ['Leads or sales', 'Target CPA', 'Gets as many conversions as possible at a cost per action you set', 'You know what a lead is worth and have steady conversion history'],
        ['Sales value', 'Target ROAS / Maximize conversion value', 'Optimises for revenue rather than the number of conversions', 'You sell online and report different values per order'],
        ['Visibility', 'Target impression share', 'Sets bids with the goal of showing your ad at the absolute top of the page', 'Brand defence on your own name; rarely a first choice'],
      ],
    },
    {
      type: 'p',
      text: 'Google calls the conversion-based group Smart Bidding. Its [Smart Bidding page](https://support.google.com/google-ads/answer/7065882) defines it as "bidding strategies that use Google AI to optimize for conversions or conversion value in every auction" and lists Maximize conversions, Target CPA, Maximize conversion value and Target ROAS as the four.',
    },
    { type: 'h2', text: 'Tracking comes before the strategy' },
    {
      type: 'p',
      text: 'The same page states the condition plainly: "To use Google Ads Smart Bidding, you need to have conversion tracking enabled." This is more than a setup box to tick. The strategy optimises for whatever you count as a conversion. If a page view or a button click counts, the system will find more of those, and they may have nothing to do with real enquiries.',
    },
    {
      type: 'p',
      text: 'Before you pick Target CPA, check that the conversion is a lead you would phone back or a sale you would invoice, that it fires once per enquiry and that spam form fills are excluded. Our guide to [Google Ads optimization tips](/blog/google-ads-optimization-tips) covers the audit, and [how to run Google Ads](/blog/how-to-run-google-ads) covers the initial setup.',
    },
    { type: 'h2', text: 'Maximize conversions or Target CPA' },
    {
      type: 'p',
      text: 'This is the choice most advertisers get stuck on, and the difference is small to state. Maximize conversions spends the whole budget to get as many conversions as it can and has no cost-per-conversion goal. Target CPA adds a goal: as many conversions as possible at an average cost per conversion near your target.',
    },
    {
      type: 'p',
      text: 'Google\'s [Target CPA page](https://support.google.com/google-ads/answer/6268632) notes that Google is renaming "Maximize conversions with a Target CPA" to "Target CPA" from June 2026, and that the bidding behaviour stays the same. So if an older guide tells you to set a target on Maximize conversions, it describes the same thing.',
    },
    {
      type: 'ol',
      items: [
        'Start with Maximize conversions while the campaign collects data. With no cost limit set, the campaign can spend its budget and gather data.',
        'Read your real cost per conversion over a few weeks, not days.',
        'Switch to Target CPA at a figure near that average, or slightly below it if your margin allows. Google recommends a target based on the average CPA of the last 30 days, adjusted for conversion delays, so a target far from your recent average is a guess.',
        'Review again after a month, adjusting the target in small steps.',
      ],
    },
    {
      type: 'p',
      text: 'Treat the target as an average, not a guarantee. Google says the aim is an average cost per conversion near the target: "Some conversions may cost more than your target and some may cost less."',
    },
    { type: 'h2', text: 'How much conversion data is enough' },
    {
      type: 'p',
      text: 'Google\'s [Target CPA page](https://support.google.com/google-ads/answer/6268632) says that for evaluation it recommends measuring the last 30 days, including at least 30 conversions, and its [Smart Bidding page](https://support.google.com/google-ads/answer/7065882) gives 50 conversions for Target ROAS. It also says you can turn on Smart Bidding without prior data, so the numbers are a guide for judging results, not a hard entry gate.',
    },
    {
      type: 'p',
      text: 'A campaign for a specialist service in a small market can record fewer than 30 conversions a month. In that case, you have options: widen what you count (for example, a call click and a form), use Maximize clicks or Manual CPC on a tight list of keywords while you gather evidence, or run fewer, larger campaigns so data is not split thin. Avoid changing the strategy every week: frequent changes make results hard to compare.',
    },
    { type: 'h2', text: 'When Maximize clicks or Manual CPC still makes sense' },
    {
      type: 'ul',
      items: [
        'A new account with no tracking yet. Maximize clicks gets traffic, but fix tracking before you judge it. Clicks are not results.',
        'A very small budget where a handful of keywords matter. Manual CPC lets you see and set the price for each.',
        'A test of a new landing page where you want volume to compare designs, not an optimised cost.',
      ],
    },
    {
      type: 'p',
      text: 'Maximize clicks is built to get clicks within your budget, not conversions, so it has no reason to favour the clicks that turn into enquiries. Use it as a stage, not as the long-term setting for a lead campaign. If you compare formats later, [Performance Max](/blog/performance-max-explained) works with conversion-based bidding as well.',
    },
    { type: 'h2', text: 'A short decision path' },
    {
      type: 'ol',
      items: [
        'Is conversion tracking counting real enquiries? If not, fix that first.',
        'Do you need visits only? Maximize clicks or Manual CPC.',
        'Do you need leads or sales? Maximize conversions.',
        'Do you have weeks of steady results and a cost per lead you can afford? Target CPA.',
        'Do you sell products with different values? Maximize conversion value or Target ROAS, once value tracking is correct.',
      ],
    },
    {
      type: 'p',
      text: 'Prices per click vary a lot by market and keyword, so see [how much Google Ads costs](/blog/google-ads-cost) before you set a target. WakeUP runs paid campaigns as part of its [advertising service](/services/advertising), and the [free audit](/audit) is a way to have an existing account\'s tracking and bidding looked at.',
    },
  ],
}
