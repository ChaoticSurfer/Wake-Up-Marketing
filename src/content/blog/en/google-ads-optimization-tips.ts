import type { BlogPost } from '@/lib/blog'

export const post: BlogPost = {
  locale: 'en',
  slug: 'google-ads-optimization-tips',
  title: 'Google Ads optimization tips: what to fix first',
  metaTitle: 'Google Ads Optimization Tips',
  description:
    'Google Ads optimization tips in order of impact: check conversion tracking, prune search terms, improve ads and assets, then bidding and landing pages.',
  publishedAt: '2026-12-12T15:00:00+04:00',
  updatedAt: '2026-12-12T15:00:00+04:00',
  service: 'advertising',
  reviewState: 'llm_reviewed',
  body: [
    {
      type: 'p',
      text: 'The most useful Google Ads optimization tips, in order: make sure conversion tracking counts real enquiries, remove irrelevant searches with negative keywords, give your responsive search ads more distinct assets, let bidding use your conversion data, then check location, schedule and landing page. Fix them in that order, because each step depends on the one before it.',
    },
    {
      type: 'p',
      text: 'This list assumes a Search campaign is already live. If it is not, start with [how to run Google Ads](/blog/how-to-run-google-ads), and for budget questions see [Google Ads cost](/blog/google-ads-cost).',
    },
    { type: 'h2', text: 'Tip 1: Check that conversions measure what you want' },
    {
      type: 'p',
      text: 'Every later tip relies on conversion data, so audit it first. Google\'s [conversion setup guide](https://support.google.com/google-ads/answer/6095821) says: "Correctly configuring your conversion actions as Primary (biddable) or Secondary (observation-only) is critical." Primary actions are what bidding optimises toward, and the guide warns that misconfiguring them can prevent Smart Bidding from optimizing effectively.',
    },
    {
      type: 'ul',
      items: [
        'Keep form submissions, calls and messaging clicks as primary conversions.',
        'Move softer actions, such as a page view or a scroll, to secondary so bidding does not chase them.',
        'Trigger each action yourself on the live site and confirm it appears in the account.',
        'Where the action has a value, such as a purchase, record it so the account can see which clicks are worth more.',
      ],
    },
    { type: 'h2', text: 'Tip 2: Prune the search terms report every week' },
    {
      type: 'p',
      text: 'The [search terms report](https://support.google.com/google-ads/answer/2472708) shows how your ads performed for actual searches in the Search Network, and which of your keywords matched each one. Google\'s advice is direct: "If a search term isn\'t relevant enough to the products or services you offer, add it as a negative keyword." Its example: a seller of eyeglasses who sees the search term "wine glasses" triggering the ads might add "wine" as a negative keyword.',
    },
    {
      type: 'p',
      text: 'A few details from the [negative keywords guide](https://support.google.com/google-ads/answer/12437241) save you from mistakes:',
    },
    {
      type: 'ul',
      items: [
        'Negative keywords default to broad match, which blocks a search only if it contains all of the negative terms, in any order. Use phrase or exact negatives when you need tighter control.',
        'Negatives do not match close variants. Excluding "flowers" does not block "red flower", so add the variations you want blocked.',
        'Google also notes that too many negative keywords can reduce how many customers you reach, so exclude clear mismatches rather than anything doubtful.',
      ],
    },
    {
      type: 'p',
      text: 'The same report works in the other direction. The "Match type" column shows how closely each search related to your keyword, and Google suggests using it to narrow a broad keyword to more specific terms or to change match types.',
    },
    { type: 'h2', text: 'Tip 3: Give responsive search ads more to work with' },
    {
      type: 'p',
      text: 'Google\'s [ad strength guide](https://support.google.com/google-ads/answer/9921843) rates a responsive search ad as Incomplete, Poor, Average, Good or Excellent and lists what to do about it:',
    },
    {
      type: 'ul',
      items: [
        'Provide up to 15 headlines and 4 descriptions, so Google can build more combinations.',
        'Make each one cover a different selling point instead of repeating words.',
        'Put a keyword entirely inside a single headline.',
        'Add at least 6 sitelinks, and use pinning sparingly because pins limit the combinations that can be tested.',
      ],
    },
    {
      type: 'p',
      text: 'Treat ad strength as a drafting aid. Google states that it "isn\'t used to calculate Ad Rank, Quality Score, or auction wins", does not decide whether an ad can serve, and does not measure landing page quality. It cites internal data suggesting advertisers who move responsive search ads and sitelinks from Poor to Excellent see about 15% more conversions on average, which is Google\'s own internal data from August 2025 and not a promise for your account.',
    },
    {
      type: 'p',
      text: 'Add other [assets](https://support.google.com/google-ads/answer/2375499) too. Google says assets such as sitelinks and images give an ad greater visibility, adding them is free, and you pay normal click charges for clicks on them. It suggests considering 4 or more asset types, such as sitelinks, callouts and images. An asset shows only when it is predicted to improve performance and your Ad Rank is high enough.',
    },
    { type: 'h2', text: 'Tip 4: Let bidding use the data, then judge it over time' },
    {
      type: 'p',
      text: 'Google\'s [Smart Bidding page](https://support.google.com/google-ads/answer/7065882) lists four strategies: Maximize conversions, Target CPA, Target ROAS and Maximize conversion value. Maximize conversions and Target CPA suit growing sales or leads. All of them need conversion tracking enabled.',
    },
    {
      type: 'p',
      text: 'The practical tip is patience. Google recommends evaluating results over longer periods with at least 30 conversions, and says Target ROAS needs 50. A campaign with five conversions a month gives a strategy little to learn from, so judge the strategy on a longer window and avoid changing it every few days. If volume is very low, a tighter campaign on your best keywords will teach the account more than a new bid setting.',
    },
    { type: 'h2', text: 'Tip 5: Check location, schedule and landing page' },
    {
      type: 'p',
      text: '[Ad scheduling](https://support.google.com/google-ads/answer/2404244) lets you limit ads to certain hours or days, or raise and lower bids at particular times. By default campaigns run all day. Google notes that ads will not show if nobody searches your keywords at the scheduled time, and that campaigns with a schedule pace toward a monthly spend of 30.4 times the average daily budget, so change it only after your own conversion data shows which days and hours do not produce enquiries. A business that answers the phone only in office hours may reasonably restrict call-focused ads.',
    },
    {
      type: 'p',
      text: 'For location, review the settings described in [how to run Google Ads](/blog/how-to-run-google-ads) against where your customers really are, and read the search terms report for places you did not intend to reach.',
    },
    {
      type: 'p',
      text: 'Then look at the page the click lands on. [Quality Score](https://support.google.com/google-ads/answer/6167118) is a 1-10 diagnostic at keyword level built from expected CTR, ad relevance and landing page experience, which Google defines as "how relevant and useful your landing page is to people who click your ad." Google says Quality Score is not an input in the auction, but an Average or Below average rating on a component may point to an opportunity to improve. Send each ad group to a page that matches its keywords and offers one clear next step.',
    },
    { type: 'h2', text: 'What not to do automatically' },
    {
      type: 'p',
      text: 'The account will show an [optimization score](https://support.google.com/google-ads/answer/9061546) and a list of recommendations. Google describes the score as an estimate of how well the account is set to perform, and notes that applying some recommendations invalidates others, so the uplifts may not add up. Its own advice is that you can dismiss a recommendation that does not seem relevant. Read each one against your goal, and do not chase 100% for its own sake. Google also states that optimization score is not used by your Quality Score.',
    },
    { type: 'h2', text: 'A weekly routine' },
    {
      type: 'table',
      head: ['Check', 'What to look for', 'Action'],
      rows: [
        ['Conversions', 'Do counts match the real enquiries you received?', 'Fix tracking before anything else'],
        ['Search terms', 'Searches unrelated to what you sell', 'Add negative keywords'],
        ['Ads and assets', 'Few headlines, repeated wording, missing sitelinks', 'Add distinct headlines and assets'],
        ['Bidding', 'Enough conversions to judge the strategy?', 'Wait for data before changing it'],
        ['Schedule and landing page', 'Hours with spend but no enquiries; page that does not match the ad', 'Adjust schedule, fix the page'],
      ],
    },
    {
      type: 'p',
      text: 'Decide in advance what a good result looks like, using numbers such as those in [marketing KPIs](/blog/marketing-kpis), so each change is judged against a target. If you would rather have this done for you, WakeUP\'s [advertising service](/services/advertising) covers tracking, keyword research, Search campaigns and weekly optimisation, and the [free marketing audit](/audit) is a way to have your current account reviewed first.',
    },
  ],
}
