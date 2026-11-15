import type { BlogPost } from '@/lib/blog'

export const post: BlogPost = {
  locale: 'en',
  slug: 'google-ads-account-structure',
  title: 'Google Ads account structure for a small account: campaigns and ad groups',
  metaTitle: 'Google Ads Account Structure',
  description:
    'Google Ads account structure for small budgets: few campaigns, one goal each, themed ad groups and brand kept apart so Smart Bidding gets enough data.',
  publishedAt: '2027-02-19T09:00:00+04:00',
  updatedAt: '2027-02-19T09:00:00+04:00',
  service: 'advertising',
  reviewState: 'llm_reviewed',
  body: [
    {
      type: 'p',
      text: 'A good Google Ads account structure for a small account is simple: a few campaigns, each with one goal and its own budget, brand searches kept in a separate campaign, and ad groups built around themes rather than single keywords. Google\'s own guidance now favours consolidation, because automated bidding works better when conversions are not split across many small campaigns. The sections below show how to lay it out.',
    },
    { type: 'h2', text: 'How the levels fit together' },
    {
      type: 'p',
      text: 'An account holds campaigns, and campaigns hold ad groups, which hold keywords and ads. Each level has a different job:',
    },
    {
      type: 'table',
      head: ['Level', 'What you decide here', 'Rule of thumb for a small account'],
      rows: [
        ['Campaign', 'Budget, goal, location, bidding strategy', 'A new campaign only when budget, goal or target differs'],
        ['Ad group', 'Which keywords share which ads and landing page', 'One ad group per theme, not per keyword'],
        ['Keywords and ads', 'What you match and what you say', 'Few keywords per theme; ads written for that theme'],
      ],
    },
    {
      type: 'p',
      text: 'Google\'s [help page on account structure](https://support.google.com/google-ads/answer/14752782) gives a short test for both levels in a diagram: "If keywords share a budget/target, use the same campaign," and "If they share the same LP/creative themes, use the same ad group." Use that test every time you are tempted to add another campaign.',
    },
    { type: 'h2', text: 'Why consolidating beats splitting' },
    {
      type: 'p',
      text: 'Smart Bidding sets bids from your conversion history. Google\'s [Smart Bidding help](https://support.google.com/google-ads/answer/7065882) recommends measuring performance over periods with at least 30 conversions (50 for Target ROAS) and says some strategies rely on a minimum volume of historical conversion data. A small account that spreads 40 conversions a month across ten campaigns leaves each one with a handful. The structure page makes the same point: segmented traffic "forces Smart Bidding to optimize for multiple targets separately, potentially reducing efficiency."',
    },
    {
      type: 'p',
      text: 'That is why the old habit of one keyword per ad group, or a separate campaign for each device, match type or small variation, no longer pays off at small volumes. Google says Smart Bidding already takes device into account, and that duplicating keywords across match types segments the data Smart Bidding has to work with. [Match types](/blog/google-ads-match-types) are covered in their own post; for structure, the point is not to build separate ad groups only to hold each match type.',
    },
    { type: 'h2', text: 'One goal per campaign' },
    {
      type: 'p',
      text: 'Google says to segment campaigns based on business objectives. For a small advertiser that usually means a campaign per business goal, and the goal is the thing that gets its own budget and bidding. Typical splits:',
    },
    {
      type: 'ul',
      items: [
        'Lead or sales campaign per service or product line when the services have different margins or different landing pages. A clinic with implants and whitening would run two.',
        'Location campaign only if you want a different budget for a different area. For one city, use one campaign.',
        'Remarketing as its own campaign, because it is judged against a different cost per conversion. See [Google Ads remarketing](/blog/google-ads-remarketing).',
        'Shopping or Performance Max for a store with a product feed, kept apart from search. See [Performance Max explained](/blog/performance-max-explained) and [Google Shopping ads setup](/blog/google-shopping-ads-setup).',
      ],
    },
    {
      type: 'p',
      text: 'Do not give one campaign two jobs, such as selling and collecting newsletter sign-ups, because bidding will optimise toward whichever conversion is easier to get. Set the primary conversion actions per campaign goal before launch; [how to run Google Ads](/blog/how-to-run-google-ads) covers the tracking step.',
    },
    { type: 'h2', text: 'Keep brand searches in their own campaign' },
    {
      type: 'p',
      text: 'People who search your company name are a different audience from people searching for what you sell. They already know you, so they behave differently and need to be tracked on their own. Mixed into one campaign, their results can make a search campaign look better than it is. The agency Portent notes in its [campaign structure guide](https://portent.com/blog/ppc/build-google-ads-campaign-ad-group-structure.htm) that branded keywords are typically housed in their own campaign. A separate brand campaign also lets you set a small, fixed budget for it.',
    },
    {
      type: 'p',
      text: 'Google also has brand settings that let you steer which brands a Search campaign serves on. Its [guidance on steering branded traffic](https://support.google.com/google-ads/answer/14996208) recommends implementing them only on campaigns that really need them, to avoid constraining conversion opportunities, so treat them as a refinement rather than a default.',
    },
    { type: 'h2', text: 'Build ad groups around themes and landing pages' },
    {
      type: 'p',
      text: 'Group keywords that a single ad and a single landing page can answer well. For a dental clinic, "teeth whitening price" and "teeth whitening cost" are one theme and one ad group; "dental implants" is another. If a keyword would need a different landing page or a different promise in the ad, it is a different ad group. Cleaning out duplicate and non-serving keywords belongs here too; Google\'s structure page lists it as a step.',
    },
    {
      type: 'p',
      text: 'The agency PPC Hero advises to "Aim for 7-10 or fewer ad groups per campaign" ([PPC Hero](https://www.ppchero.com/?p=28189)). Treat that as one practitioner\'s rule of thumb, not a Google limit: use it as a prompt to review the structure, not a target. Negative keywords can be set at account, campaign or ad group level; see [negative keywords](/blog/google-ads-negative-keywords).',
    },
    {
      type: 'p',
      text: 'One Georgia-specific limit applies to the ads in each group. Google\'s [supported languages list](https://support.google.com/google-ads/answer/6333734) does not include Georgian, and it says ads in a language that is not supported for ads language targeting are disapproved. Plan ad groups and their ad text in a language the list does include, such as English or Russian, according to who you want to reach.',
    },
    { type: 'h2', text: 'A starter layout' },
    {
      type: 'p',
      text: 'An example for a service business with two services and a modest budget (illustrative, adapt to your own offer):',
    },
    {
      type: 'ol',
      items: [
        'Campaign 1: Brand. Your company name. Small fixed budget.',
        'Campaign 2: Service A, non-brand search. Two or three themed ad groups, each with its own landing page.',
        'Campaign 3: Service B, non-brand search. Same pattern.',
        'Campaign 4 (later): Remarketing for site visitors, once your lists are large enough.',
      ],
    },
    {
      type: 'p',
      text: 'Start with the first three and wait until each has enough conversions before adding anything. If your account already has dozens of campaigns and you are not sure which to merge, the [free audit](/audit) is a place to start, and WakeUP\'s [advertising service](/services/advertising) covers Google Ads set-up and weekly optimisation. For ongoing tuning once the structure is right, use [Google Ads optimization tips](/blog/google-ads-optimization-tips).',
    },
  ],
}
