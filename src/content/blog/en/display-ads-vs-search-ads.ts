import type { BlogPost } from '@/lib/blog'

export const post: BlogPost = {
  locale: 'en',
  slug: 'display-ads-vs-search-ads',
  title: 'Display ads vs search ads: which Google campaign to run first',
  metaTitle: 'Display Ads vs Search Ads',
  description:
    'Display ads vs search ads: search ads answer a request, display ads interrupt. How each is priced and judged, and why display wastes small budgets.',
  publishedAt: '2027-01-11T18:00:00+04:00',
  updatedAt: '2027-01-11T18:00:00+04:00',
  service: 'advertising',
  reviewState: 'llm_reviewed',
  body: [
    {
      type: 'p',
      text: 'Display ads vs search ads comes down to pull versus push. Search ads are pull: they appear when someone types a phrase that shows they want what you sell. Display ads are push: they appear as image or text ads on websites, apps, YouTube and Gmail to people who are not looking for you right now. With a small budget, run Search first. Use Display later, for reminding people who already visited your site.',
    },
    { type: 'h2', text: 'Pull and push: what each network is for' },
    {
      type: 'p',
      text: 'Google\'s own help pages draw the line. It says the Display Network can [capture someone\'s attention earlier in the buying cycle](https://support.google.com/google-ads/answer/2404190), before they start searching, and that data segments let you reach people who have previously visited your website or app. So the two networks do different jobs, and comparing their click prices alone misleads.',
    },
    {
      type: 'table',
      head: ['', 'Search ads', 'Display ads'],
      rows: [
        ['Trigger', 'A search the person typed', 'Targeting by audience, topic or site; the person is doing something else'],
        ['Intent', 'High: they asked for it', 'Low: you interrupt'],
        ['Where it appears', 'Google results (and search partners if enabled)', 'Websites, apps, YouTube and Gmail; Google says Display reaches people across 35 million websites and apps'],
        ['Format', 'Text', 'Responsive display ads that adjust to any available space, or uploaded images and HTML5'],
        ['Job', 'Capture existing demand', 'Create awareness, remind past visitors'],
        ['Judge it by', 'Cost per lead or sale', 'Reach, assisted conversions, and view-through carefully'],
      ],
    },
    { type: 'h2', text: 'How each is priced and judged' },
    {
      type: 'p',
      text: 'Search is normally bought per click. Google defines a maximum CPC bid as [the highest amount you are willing to pay for a click on your ad](https://support.google.com/google-ads/answer/6326). Display campaigns can be bought the same way, but a Display-only campaign can also pay by impressions: Google describes [viewable CPM (vCPM) bidding](https://support.google.com/google-ads/answer/2459326) as cost per thousand viewable impressions, so you pay for visibility instead of for the click.',
    },
    {
      type: 'p',
      text: 'That difference decides how you judge them. A Search click comes from someone who typed a request, so cost per lead and cost per sale are fair tests. A Display impression is shown to someone who did not ask, so many impressions end in no click, and many clicks end in a quick exit. Judge Display by what happens after: do the people it reaches come back and enquire later, and does the cost per lead stay in a range you accept? If you cannot see that in your analytics, you are paying for exposure you cannot measure. The cost side of Search is covered in [Google Ads cost](/blog/google-ads-cost); how to set up a first campaign is in [how to run Google Ads](/blog/how-to-run-google-ads).',
    },
    { type: 'h2', text: 'Why Display wastes money on small budgets' },
    {
      type: 'p',
      text: 'This is a judgement drawn from how the systems work, not a Google statistic. Three things combine.',
    },
    {
      type: 'ul',
      items: [
        'Low intent means a low share of viewers act. To find out whether Display brings leads, you need enough impressions and clicks to see a pattern, and a small daily budget buys too few.',
        'Judging results needs data. Google recommends evaluating Smart Bidding over periods with [at least 30 conversions](https://support.google.com/google-ads/answer/7065882), and 50 for Target ROAS. A small Display campaign rarely records that many, so any verdict on it rests on thin numbers.',
        'Wide targeting spreads the money. Google says optimized targeting is the default for Display campaigns and uses information such as keywords on your landing page to find relevant audiences. That can help at scale, but it leaves you less control over who sees the ad.',
      ],
    },
    {
      type: 'p',
      text: 'Search has the opposite profile: a narrow, high-intent audience that you can reach with a handful of well-chosen phrases. That is why a small company should capture the demand that already exists before it pays to create more. If the budget is large enough for both, remarketing to site visitors is the Display use that most often makes sense; see [Google Ads remarketing](/blog/google-ads-remarketing), including its audience-size limits.',
    },
    { type: 'h2', text: 'Placement exclusions: the control that saves budget' },
    {
      type: 'p',
      text: 'On Display your ads can appear on sites and apps you would never choose. You cannot inspect each one in advance, but you can block the bad ones after the fact. Google lets you set exclusions at campaign, ad group or [account level](https://support.google.com/google-ads/answer/2454012), and says account-level exclusions also apply to the Search partner network.',
    },
    {
      type: 'ol',
      items: [
        'In the first week, open the placements report for each Display campaign and sort by spend.',
        'Exclude placements that spend money and bring no engagement, such as games, junk apps and sites unrelated to your offer.',
        'Add the same exclusions at account level so they protect every campaign, not only this one.',
        'Repeat every week for the first month, then monthly.',
      ],
    },
    {
      type: 'p',
      text: 'The same habit applies to Search: a review of the search terms report to add negative keywords. Both are part of the weekly work described in [Google Ads optimization tips](/blog/google-ads-optimization-tips) and in the Performance Max comparison in [Performance Max vs Search](/blog/performance-max-vs-search), where Google decides placement for you.',
    },
    { type: 'h2', text: 'What to run first in Georgia' },
    {
      type: 'ol',
      items: [
        'Search for your three to five most profitable services, with a conversion tracked in your analytics.',
        'Fix the landing page and the follow-up speed before adding any new network.',
        'Add Display remarketing only when the site has enough visitors to fill an audience, and keep the frequency modest.',
        'Test cold Display as a separate, capped experiment with its own cost-per-lead target and a stop date.',
      ],
    },
    {
      type: 'p',
      text: 'Check language before you plan creative. Google Ads does not support Georgian as an ad language ([Google Ads Help, supported languages](https://support.google.com/google-ads/answer/6333734)), so Georgian-language text ads cannot run on Google, and whether Georgian image creative is accepted is something to test in your own account before you budget for it. Buyers who search in Russian or English can be reached in those languages. For where else to spend, see [Facebook Ads vs Google Ads](/blog/facebook-ads-vs-google-ads).',
    },
    {
      type: 'p',
      text: 'WakeUP\'s [advertising service](/services/advertising) includes Search, Display and remarketing campaigns on Google alongside Meta ads, with tracking set up first. To see where your current budget goes, send your account details for the [free marketing audit](/audit).',
    },
  ],
}
