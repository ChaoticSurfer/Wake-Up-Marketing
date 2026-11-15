import type { BlogPost } from '@/lib/blog'

export const post: BlogPost = {
  locale: 'en',
  slug: 'performance-max-vs-search',
  title: 'Performance Max vs Search campaigns: which to run, and when to run both',
  metaTitle: 'Performance Max vs Search Campaigns',
  description:
    'Performance Max vs Search campaigns: start with Search when you need control and have little data, add Performance Max once conversions are steady.',
  publishedAt: '2026-12-24T18:00:00+04:00',
  updatedAt: '2026-12-24T18:00:00+04:00',
  service: 'advertising',
  reviewState: 'llm_reviewed',
  body: [
    {
      type: 'p',
      text: 'In the Performance Max vs Search campaigns choice, start with Search if you sell something people actively look for, want to choose the keywords and see the exact queries, and have little conversion history. Add Performance Max once Search is producing steady conversions and you want reach beyond search. Google says Performance Max is [designed to complement your keyword-based Search campaigns](https://support.google.com/google-ads/answer/13676244), not to replace them.',
    },
    {
      type: 'p',
      text: 'This guide is about the decision. For how Performance Max is built, assets and all, read [Performance Max explained](/blog/performance-max-explained). For setting up Search, see [how to run Google Ads](/blog/how-to-run-google-ads).',
    },
    { type: 'h2', text: 'The two campaign types side by side' },
    {
      type: 'table',
      head: ['', 'Search campaign', 'Performance Max'],
      rows: [
        ['Where ads appear', 'Google Search results', 'Google\'s inventory in one campaign: YouTube, Display, Search, Discover, Gmail and Maps'],
        ['How you choose who sees them', 'You pick keywords and match types', 'Google\'s AI finds the audience from your goal, assets and signals'],
        ['What you write', 'Responsive search ads with headlines and descriptions', 'An asset group: text, images, video, and a feed for products'],
        ['What you see', 'Search terms report for the queries that triggered ads', 'Search terms insights and grouped reporting, with less detail on other channels'],
        ['Best when', 'Demand already exists and intent is clear', 'You have a clear conversion goal, good assets and enough data'],
      ],
    },
    {
      type: 'p',
      text: 'The channel list and the keyword-free targeting come from Google\'s [Performance Max overview](https://support.google.com/google-ads/answer/10724817). The rest of this post turns those differences into decision rules.',
    },
    { type: 'h2', text: 'Control: what you can steer' },
    {
      type: 'p',
      text: 'A Search campaign gives you the most direct control. You pick the keywords, the match types, the negative keywords and the ad text, and the search terms report shows what people typed. If a query is wasting money, you block it.',
    },
    {
      type: 'p',
      text: 'Performance Max gives you controls at a different level. Google lists keywordless targeting, final URL expansion, search themes, negative keywords and brand exclusions among them. You steer with goals, assets and audience signals instead of a keyword list. The "Source" column in Google\'s [search terms insights](https://support.google.com/google-ads/answer/14587068) shows whether a query came from your search themes or from keywordless targeting, which helps, but it is not the same as owning the keyword list. Google also notes that its channel performance report is in beta and available through an allowlist, so detail by channel may be limited.',
    },
    {
      type: 'p',
      text: 'Rule of thumb: if you must be able to explain exactly which searches you paid for, for example because brand terms and competitor terms need separate handling, Search is the safer base.',
    },
    { type: 'h2', text: 'Data: what each type needs to work' },
    {
      type: 'p',
      text: 'Both types rely on conversion tracking, but Performance Max depends on it more because the AI chooses where and to whom to show ads. Google says in its [search terms insights guide](https://support.google.com/google-ads/answer/14587068) that "the more conversion data that you have, the faster Google AI is able to deliver the results". It gives no minimum number for Performance Max.',
    },
    {
      type: 'p',
      text: 'The one threshold Google does publish is for Smart Bidding, which both campaign types can use. Google recommends [measuring performance over longer periods with at least 30 conversions](https://support.google.com/google-ads/answer/7065882), and 50 for Target ROAS. Treat that as a floor for judging results, not as proof Performance Max will work at that level.',
    },
    {
      type: 'ul',
      items: [
        'Under about 30 conversions a month in the account: run Search first. It will produce cleaner data and teach you which queries and pages convert.',
        'Steady conversions and a tested landing page: Performance Max becomes a fair test.',
        'Conversion tracking counting the wrong thing (page views, button clicks with no sale): fix that before either type. Both will optimise towards what you tell them to count. See [Google Ads optimization tips](/blog/google-ads-optimization-tips).',
      ],
    },
    { type: 'h2', text: 'Budget, and what happens when both run' },
    {
      type: 'p',
      text: 'Google shows Performance Max budget recommendations in three levels (Low, Medium and High) and says the lower level is the minimum recommended budget for the campaign. It also advises checking that the campaign is not limited by budget. Those amounts depend on your account and market, so read them in your own campaign settings rather than from a blog post. For what ads cost in general, see [Google Ads cost](/blog/google-ads-cost), and for the sense of the spend as a whole, [is Google Ads worth it](/blog/is-google-ads-worth-it).',
    },
    {
      type: 'p',
      text: 'When both run in one account, Google decides which campaign serves a query by a clear rule. Per its page on [how Performance Max interacts with other campaigns](https://support.google.com/google-ads/answer/13810170), a Search campaign with a keyword that matches the query will be preferred over Performance Max, and if no keyword matches exactly, the campaign with the higher Ad Rank serves. The Performance Max overview adds that Search campaigns containing an exact match keyword are prioritised over Performance Max, and that search themes carry the same priority as phrase and broad match keywords.',
    },
    {
      type: 'p',
      text: 'The practical result: your exact-match Search keywords keep priority, so Search protects the queries you care about most, and Performance Max fills in the rest. A small budget split across two campaigns can leave both short of data, so do not run both until each can get enough.',
    },
    { type: 'h2', text: 'A decision guide' },
    {
      type: 'table',
      head: ['Your situation', 'Start with'],
      rows: [
        ['New account, no conversion history, a service people search for', 'Search'],
        ['Small budget and need to see exactly what you paid for', 'Search'],
        ['Strict rules on brand terms or sensitive wording', 'Search, with negative keywords'],
        ['Steady conversions, good images and video, goal of reaching beyond search', 'Search plus Performance Max'],
        ['Online shop with a product feed and a clear sales goal', 'Performance Max alongside brand and top product Search campaigns'],
        ['Long sales cycle with lead quality problems', 'Search first; test Performance Max only after you import lead quality into your conversions'],
      ],
    },
    { type: 'h2', text: 'A Georgian note: language' },
    {
      type: 'p',
      text: 'Google Ads does not list Georgian among the [languages it supports for ads](https://support.google.com/google-ads/answer/6333734), and it states that ads created in an unsupported language are disapproved. Plan Search and Performance Max assets around the languages Google supports, such as English or Russian, and use your site and organic search for Georgian-language reach. Check the page again before you build, as the list can change.',
    },
    { type: 'h2', text: 'How to test Performance Max without guessing' },
    {
      type: 'ol',
      items: [
        'Run Search first and note cost per conversion, conversion volume and the queries that convert.',
        'Launch Performance Max with the same conversion goal and a separate budget you can afford to lose.',
        'Judge it over weeks, using the 30-conversion guidance, not over days.',
        'Compare cost per conversion and lead quality, not only the number of conversions.',
        'Keep what works. If Performance Max adds conversions at a similar cost, keep both. If it only repeats Search results, stop it.',
      ],
    },
    {
      type: 'p',
      text: 'If you would like a second opinion on your account before you spend, WakeUP\'s [advertising service](/services/advertising) covers Google Ads setup and management, and the [free marketing audit](/audit) reviews what you run today.',
    },
  ],
}
