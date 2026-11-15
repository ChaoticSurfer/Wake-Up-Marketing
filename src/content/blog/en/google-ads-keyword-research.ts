import type { BlogPost } from '@/lib/blog'

export const post: BlogPost = {
  locale: 'en',
  slug: 'google-ads-keyword-research',
  title: 'Google Ads keyword research: build a keyword list by intent with Keyword Planner and search terms',
  metaTitle: 'Google Ads Keyword Research',
  description:
    'Google Ads keyword research step by step: collect seeds, use Keyword Planner, sort by intent and refine with the search terms report for Georgia.',
  publishedAt: '2027-02-27T15:00:00+04:00',
  updatedAt: '2027-02-27T15:00:00+04:00',
  service: 'advertising',
  reviewState: 'llm_reviewed',
  body: [
    {
      type: 'p',
      text: 'Google Ads keyword research has two halves. Before launch, you collect seed phrases from how buyers talk, expand them in Keyword Planner, and sort them by intent so you bid on searches that sound like buying. After launch, the search terms report shows what people really typed, and that becomes your second, better list. For a company in Georgia, one extra step is to look at Georgian script, Latin spellings and the language limit of Google Ads.',
    },
    { type: 'h2', text: 'Start with how buyers say it' },
    {
      type: 'p',
      text: 'Keyword Planner expands ideas; it does not produce them. Google\'s guide for businesses suggests brainstorming seed keywords from your core services, sales calls, support tickets and online reviews ([Google for Business](https://business.google.com/uk/resources/articles/how-to-find-keywords/)). Those sources contain the words customers use, not the words your brochure uses.',
    },
    {
      type: 'ul',
      items: [
        'The service or product, as a customer names it ("office cleaning", not "facility solutions").',
        'The problem that makes them search ("website not bringing enquiries").',
        'The place and the buyer type ("Tbilisi", "for restaurants", "for companies").',
        'Words that signal a purchase: price, cost, quote, order, near me, hire.',
      ],
    },
    {
      type: 'p',
      text: 'Write a handful of seeds for each service. A short list from real customer language beats a long list from a tool, and the tool will fill in the rest.',
    },
    { type: 'h2', text: 'Discover keywords in Keyword Planner' },
    {
      type: 'p',
      text: 'Keyword Planner is Google\'s [research tool for Search campaigns](https://support.google.com/google-ads/answer/7337243). It has two main tools. Discover new keywords returns ideas from words or a website you enter; Google says that if you enter a site, it looks for keywords related to its content. Get search volume and forecasts shows search volume and expected performance for a list you already have. To use the basic features you must first complete account setup, including billing information, according to the same help page.',
    },
    {
      type: 'ol',
      items: [
        'Open Keyword Planner under Tools in your Google Ads account and choose Discover new keywords.',
        'Enter your seeds, or a page of your own site or a competitor\'s, and choose the location and language you want to reach.',
        'Filter out brand names you do not want and sort by relevance, not by volume.',
        'Add the good ideas to a plan, then run Get search volume and forecasts on the plan to see ranges and expected clicks.',
        'Export the list to a sheet and add your own columns: intent, landing page, notes.',
      ],
    },
    {
      type: 'p',
      text: 'Read the numbers with care. Google notes that keywords with very low search volumes, or considered sensitive, are not discoverable or forecastable, and its guide for businesses says that new accounts may see broad ranges rather than exact numbers. Ahrefs, a rival tool vendor, says Keyword Planner often shows broad search volume ranges and does not provide data on your competitors ([Ahrefs](https://ahrefs.com/blog/ppc-keyword-research)). In a market as small as Georgia, a phrase that Keyword Planner hides or rounds can still bring a client, so volume is a hint, not a rule. Forecasts are refreshed daily from the last 7 to 10 days, adjusted for seasonality, per Google, so treat them as a rough guide to cost and clicks and not a promise.',
    },
    { type: 'h2', text: 'Sort the list by intent' },
    {
      type: 'p',
      text: 'A keyword list is not a shopping list; each phrase needs a job. Sort by what the searcher wants, then pay for the groups close to buying. Ahrefs puts terms signalling purchase readiness, such as buying, pricing or hiring, at the top and research-stage phrases such as "what is" lower. The general model is in [search intent types](/blog/search-intent-types).',
    },
    {
      type: 'table',
      head: ['Intent', 'Looks like', 'What to do in Google Ads'],
      rows: [
        ['Ready to buy or enquire', 'service + city, "price", "quote", "hire", "order"', 'Bid first. These get their own ad groups and the best landing page'],
        ['Comparing options', '"best", "vs", "alternatives", "reviews"', 'Test with a smaller budget and a page that compares'],
        ['Researching', '"what is", "how to", "guide"', 'Usually skip for ads; cover with content and SEO'],
        ['Not a buyer', '"jobs", "free", "course", "DIY"', 'Add as negative keywords'],
        ['Your own brand and competitors', 'Your company name; rivals\' names', 'Keep brand in its own campaign; be careful with rival names'],
      ],
    },
    { type: 'h2', text: 'Georgian script, Latin spellings and the ad-language limit' },
    {
      type: 'p',
      text: 'Buyers in Georgia type the same wish in several ways: in Georgian script, in English, in Russian, and in Georgian words spelled with Latin letters. The Georgian script version of "website development" is "ვებსაიტის დამზადება"; the English one is "website development Tbilisi"; a Latin-letter spelling of the Georgian words is a different string again. These examples are illustrations, not measured volumes. Each is a separate search with its own results.',
    },
    {
      type: 'p',
      text: 'The constraint is the ad language. Google Ads does not list Georgian among the languages you can select for language targeting, and ads created in a language not supported for ads language targeting will be disapproved ([Google Ads Help](https://support.google.com/google-ads/answer/6333734)). The page speaks about ads, not about what people may type. So do not plan Georgian-language ads on Google. Do plan to find out how Georgian speakers search:',
    },
    {
      type: 'ul',
      items: [
        'Run your seeds in Keyword Planner in English and Russian, and also try the Georgian-script and Latin-letter versions. Check what your own account returns. Georgian queries may come back with gaps or no data, and a blank does not mean "no demand".',
        'Use Google autocomplete and Search Console (if you have a site) to see which spellings real people use. The method is in [keyword research for SEO](/blog/keyword-research-for-seo) and [long tail keywords](/blog/long-tail-keywords).',
        'After launch, read the search terms report for Georgian-script and Latin-letter queries that matched your English or Russian keywords, and decide for each one whether to keep it, add a keyword, or block it.',
        'Ask a Georgian speaker to read the list. A phrase that looks irrelevant in translation may be an ordinary buying search.',
      ],
    },
    {
      type: 'p',
      text: 'Because ads cannot be written in Georgian, the Georgian phrase list is useful mainly for SEO, for negatives, and for spotting demand, as [Google Ads vs SEO](/blog/google-ads-vs-seo) discusses. For whether advertising on Google suits your case at all, see [is Google Ads worth it?](/blog/is-google-ads-worth-it)',
    },
    { type: 'h2', text: 'Group the list and choose match types' },
    {
      type: 'p',
      text: 'Group keywords by theme and by the page that answers them, so that each ad group has one intent and one landing page. The structure is covered in [Google Ads account structure](/blog/google-ads-account-structure). Then choose match types according to how much control you want over variations, as [Google Ads match types](/blog/google-ads-match-types) explains. For a small budget, start with narrower matches on the ready-to-buy group and widen only when the search terms report shows that the variations are relevant. Ads and landing pages that match the keyword can also help your Quality Score, which [Google Ads Quality Score](/blog/google-ads-quality-score) explains.',
    },
    { type: 'h2', text: 'Let the search terms report finish the job' },
    {
      type: 'p',
      text: 'Google defines a search term as the words a person enters when searching, and a keyword as what an advertiser adds to an ad group. The [search terms report](https://support.google.com/google-ads/answer/2472708) shows the actual searches that triggered your ads on the Search Network. Google says that if a search term isn\'t relevant enough to your products or services, you should add it as a negative keyword, and that you can\'t add keywords or negative keywords directly from the report: you make the change in your keyword settings. It is the most honest keyword research tool you have, because it shows real money spent on real words.',
    },
    {
      type: 'ol',
      items: [
        'Check the report weekly for the first month, then every two weeks.',
        'Mark terms that produced enquiries and add them as keywords in the right ad group.',
        'Mark terms that spent without any enquiry and add them as negatives. The lists and match types are in [Google Ads negative keywords](/blog/google-ads-negative-keywords).',
        'Note new wording from customers: it feeds your ad text and landing pages.',
        'Re-run Keyword Planner on the phrases that worked, to find close variations.',
      ],
    },
    { type: 'h2', text: 'Mistakes to avoid' },
    {
      type: 'ul',
      items: [
        'Choosing keywords by volume alone. A phrase with few searches and clear intent often beats a popular vague one.',
        'Putting hundreds of keywords into one ad group. It makes ads and pages generic.',
        'Bidding on research phrases ("what is...") with a sales landing page.',
        'Never opening the search terms report, and paying for irrelevant clicks for months.',
        'Using the same list for every campaign. Brand, services and competitors behave differently.',
      ],
    },
    {
      type: 'p',
      text: 'For the full setup after the list is ready, read [how to run Google Ads](/blog/how-to-run-google-ads). WakeUP\'s [advertising service](/services/advertising) includes audience and keyword research and weekly budget moves toward what converts. If you would like a second opinion on your current keywords and search terms, the [free marketing audit](/audit) covers your ads, website and sales process.',
    },
  ],
}
