import type { BlogPost } from '@/lib/blog'

export const post: BlogPost = {
  locale: 'en',
  slug: 'google-ads-match-types',
  title: 'Google Ads match types: broad, phrase and exact explained',
  metaTitle: 'Google Ads Match Types Explained',
  description:
    'Google Ads match types explained: broad, phrase and exact now match on meaning and intent. See how they work with Smart Bidding and a safe order to start.',
  publishedAt: '2027-01-21T09:00:00+04:00',
  updatedAt: '2027-01-21T09:00:00+04:00',
  service: 'advertising',
  reviewState: 'llm_reviewed',
  body: [
    {
      type: 'p',
      text: 'Google Ads match types tell Google how closely a search must relate to your keyword before your ad can show. Exact match covers searches with the same meaning or intent, phrase match covers searches that include the meaning of your keyword, and broad match covers related searches. Exact gives the most control and the fewest searches; broad reaches the most, and Google says it should be used with Smart Bidding. On a small budget, start narrow.',
    },
    {
      type: 'h2',
      text: 'What the three types mean now',
    },
    {
      type: 'p',
      text: 'Older guides describe match types by word order and "close variants". Google\'s own [match types page](https://support.google.com/google-ads/answer/7478529) now defines them by meaning and intent:',
    },
    {
      type: 'table',
      head: ['Match type', 'Syntax', 'Google\'s definition (shortened)', 'Reach and control'],
      rows: [
        ['Broad', 'low carb diet plan', 'Ads may show on searches that are related to your keyword', 'Widest reach, least control; the default'],
        ['Phrase', '"tennis shoes"', 'Ads may show on searches that include the meaning of your keyword', 'Middle'],
        ['Exact', '[red shoe]', 'Ads may show on searches that have the same meaning or same intent as the keyword', 'Narrowest, most control'],
      ],
    },
    {
      type: 'p',
      text: 'Google adds that broader match types capture all the queries of the narrower ones, plus more. That means the safest way to think about the three is as a dial of reach, not as three different tools. "Exact" no longer means the identical words: a search with the same meaning can match. To see what your keywords actually match, check the search terms report; [Google Ads optimisation tips](/blog/google-ads-optimization-tips) covers how to use it. For the punctuation and set-up steps, see [how to run Google Ads](/blog/how-to-run-google-ads).',
    },
    {
      type: 'h2',
      text: 'Broad match and Smart Bidding',
    },
    {
      type: 'p',
      text: 'Broad match is more than a loose keyword. Google\'s [broad match page](https://support.google.com/google-ads/answer/2497836) says it may consider the user\'s recent search activity, the content of your landing pages and assets, and the other keywords in the ad group to work out intent. The same page is unusually direct: "It’s critical to use Smart Bidding with broad match." Reason given: each query is different, so bids should reflect the signals present at auction time.',
    },
    {
      type: 'p',
      text: '[Smart Bidding](https://support.google.com/google-ads/answer/7065882) is Google\'s set of automated strategies (such as Target CPA, Target ROAS, Maximize conversions and Maximize conversion value) that set a bid in every auction using signals such as device, location, time of day and the actual search query. It requires conversion tracking to be enabled. Put together: broad match widens the net, and Smart Bidding decides which of the extra auctions are worth bidding on, but only if it has conversion data to learn from.',
    },
    {
      type: 'p',
      text: 'What this means for a small account: broad match with manual bids and no conversion tracking is the setup where budget disappears into loose searches. Broad match with Smart Bidding, tracked conversions and a good negative keyword list is how Google intends it to be used. Before you try it, check that your campaign counts real enquiries, and judge it by cost per enquiry rather than per click; the [Google Ads cost](/blog/google-ads-cost) guide shows how those numbers connect.',
    },
    {
      type: 'h2',
      text: 'What decides which keyword wins',
    },
    {
      type: 'p',
      text: 'Google\'s [priority rules](https://support.google.com/google-ads/answer/7478529) for when Performance Max and Search campaigns could serve the same search puts exact match keywords that are identical to the search term first, ahead of phrase and broad keywords, which share priority with identical Performance Max search themes. In practice, an exact keyword for your core term protects the best-converting searches from being absorbed by a loose campaign. For how the two campaign types compare, see [Performance Max vs Search](/blog/performance-max-vs-search).',
    },
    {
      type: 'h2',
      text: 'Negative keywords have their own match behaviour',
    },
    {
      type: 'p',
      text: 'Match types also apply to [negative keywords](https://support.google.com/google-ads/answer/12437241), but they behave differently. A broad-match negative blocks a search only if it contains all of the negative terms, in any order, so "running shoes" blocks "blue running shoes" but not "running shoe". Phrase negatives block searches that include the terms in the same order, and exact negatives block only that exact search. Negatives do not match close variants, so add the singular and plural forms you want blocked. The more you widen your positive keywords, the more your negative list matters.',
    },
    {
      type: 'h2',
      text: 'A safe order to start with a small budget',
    },
    {
      type: 'p',
      text: 'The Google pages above do not set out a starting sequence, so the order below is practical judgment, not an official rule. Its logic: buy control first, then add reach once the account has proof of what converts.',
    },
    {
      type: 'ol',
      items: [
        'Set up conversion tracking for one real action (call, form or message) and check that it counts correctly.',
        'Start with 5 to 15 keywords that describe what you sell, as exact match and phrase match, in the supported language of your buyers.',
        'Review the search terms report weekly. Add irrelevant searches as negatives and move good searches into exact keywords.',
        'When conversions arrive steadily, move the campaign to a Smart Bidding strategy that matches your goal.',
        'Only then test one broad keyword per ad group, preferably in a separate campaign with its own budget cap, so you can see what it adds without risking the proven keywords.',
        'Compare cost per qualified enquiry for the broad test against your exact and phrase keywords after a few weeks. Keep it only if the enquiries are as good, not just cheaper or more numerous.',
      ],
    },
    {
      type: 'p',
      text: 'The cases for each type, once you have data:',
    },
    {
      type: 'table',
      head: ['Situation', 'Lean on', 'Why'],
      rows: [
        ['New account, no conversion history', 'Exact and phrase', 'Most control over who sees the ad'],
        ['Brand name and top converting terms', 'Exact', 'Highest priority and tightest control'],
        ['Several close terms with the same intent', 'Phrase', 'Covers variations without the widest reach'],
        ['Steady conversions and Smart Bidding in place', 'Test broad', 'Google intends broad to run with Smart Bidding'],
        ['Many irrelevant clicks in the search terms report', 'Narrow the type, add negatives', 'Reach exceeded relevance'],
      ],
    },
    {
      type: 'h2',
      text: 'Georgia: language and keywords',
    },
    {
      type: 'p',
      text: 'Match types do not solve the language limit. Google\'s [language targeting page](https://support.google.com/google-ads/answer/6333734) lists English and Russian for ads language targeting but not Georgian, and says ads created in an unsupported language will be disapproved. Choose the language of your ads and keywords first, then the match type. For how searcher intent should shape the keywords you pick, see [search intent types](/blog/search-intent-types).',
    },
    {
      type: 'h2',
      text: 'Where WakeUP fits',
    },
    {
      type: 'p',
      text: 'WakeUP Marketing\'s [advertising service](/services/advertising) covers Google and Meta campaigns with account audit and tracking set-up, and reporting against leads and sales. If you already run Google Ads and want to know whether your match types and tracking are working together, request the [free audit](/audit).',
    },
  ],
}
