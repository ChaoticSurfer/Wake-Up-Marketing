import type { BlogPost } from '@/lib/blog'

export const post: BlogPost = {
  locale: 'en',
  slug: 'responsive-search-ads-copy',
  title: 'Responsive search ads best practices: 15 headlines, 4 descriptions, pinning',
  metaTitle: 'Responsive Search Ads Best Practices',
  description:
    'Responsive search ads best practices: how to write the 15 headlines and 4 descriptions, what to pin, and how to read asset ratings, with notes for Georgia.',
  publishedAt: '2027-02-04T12:00:00+04:00',
  updatedAt: '2027-02-04T12:00:00+04:00',
  service: 'advertising',
  reviewState: 'llm_reviewed',
  body: [
    {
      type: 'p',
      text: 'Responsive search ads best practices come down to four habits: fill all 15 headlines and 4 descriptions with different messages, put the searcher\'s keyword inside a single headline, pin as little as possible, and judge assets by conversions and asset ratings rather than by clicks alone. In Georgia there is a fifth point: Google Ads does not list Georgian as an ad language, so write the copy in English or Russian.',
    },
    { type: 'h2', text: 'How Google builds the ad from your pieces' },
    {
      type: 'p',
      text: 'Google Ads Help says that, [unlike older text ads](https://support.google.com/google-ads/answer/7684791), you can enter up to 15 headlines and 4 descriptions for one responsive search ad, with a minimum of 3 headlines and 2 descriptions. Headlines can be up to 30 characters, descriptions up to 90 and each path field up to 15. By default the pieces can appear in any order, and Google Ads tests combinations to learn which perform best.',
    },
    {
      type: 'p',
      text: 'So you are not writing one ad. You are writing a bank of lines that must read sensibly in any combination, which changes how to write them. For setup, tracking and budgets see [how to run Google Ads](/blog/how-to-run-google-ads); this post covers the words.',
    },
    { type: 'h2', text: 'Write the 15 headlines in groups' },
    {
      type: 'p',
      text: 'Google\'s guidance on [ad strength](https://support.google.com/google-ads/answer/9921843) tells advertisers to provide as many unique assets as possible, up to 15 headlines and 4 descriptions, to build in keywords naturally, and to avoid repeating the same content across assets. It also says a keyword must sit entirely inside a single headline, and that a keyword longer than 30 characters belongs in a description. A planning table helps you reach 15 without repeating yourself. The examples are for an imaginary office cleaning company in Tbilisi and are not tested copy.',
    },
    {
      type: 'table',
      head: ['Group', 'How many', 'Example headline', 'Job'],
      rows: [
        ['Keyword and service', '3 to 4', 'Office Cleaning in Tbilisi', 'Matches the search so the ad looks relevant'],
        ['Benefit', '3', 'Done Before Your Team Arrives', 'Says what changes for the customer'],
        ['Proof', '2', 'Same Crew Every Week', 'Gives a reason to believe, only if true'],
        ['Offer and action', '3', 'Get a Quote Today', 'Tells the searcher what to do next'],
        ['Location', '1 to 2', 'Serving All Tbilisi Districts', 'Confirms you serve their area'],
        ['Objection', '1 to 2', 'No Long Contract Required', 'Answers the worry that stops enquiries'],
      ],
    },
    {
      type: 'p',
      text: 'Check each headline on its own and next to any other headline. "Free Quote" followed by "Get a Quote Today" wastes a slot; "Free Quote" followed by "Office Cleaning in Tbilisi" reads fine. Do not promise a price, discount or response time that the landing page and your team cannot honour.',
    },
    { type: 'h2', text: 'The four descriptions' },
    {
      type: 'p',
      text: 'Give each description a different job instead of rewording one sentence four times:',
    },
    {
      type: 'ol',
      items: [
        'Benefit plus action: what the customer gets, then the next step.',
        'Proof: the detail that makes the promise credible.',
        'Process: how it works in one sentence, so the first step feels easy.',
        'Objection: price, risk or time, answered directly.',
      ],
    },
    { type: 'h2', text: 'What to pin, and what not to' },
    {
      type: 'p',
      text: 'Pinning fixes a headline or description to one position. Google\'s [responsive search ads guide](https://services.google.com/fh/files/misc/responsive_search_ads_a_guide_to_writing_ads_that_perform_2023.pdf) says that "pinning constrains the ability to generate unique combinations", which may reduce performance, and suggests pinning 2 or 3 headlines or descriptions to each position when you must pin. Its example reason to pin is a legal or regulatory line that has to appear in every ad. Google Ads Help adds that text that must appear in every ad must be pinned to headline position 1, headline position 2 or description position 1.',
    },
    {
      type: 'table',
      head: ['Situation', 'What to do'],
      rows: [
        ['A legal disclaimer or required wording', 'Pin it, ideally with one or two alternatives in the same position'],
        ['You want the brand name always visible', 'Pin 2 or 3 variations of it to headline position 1'],
        ['You prefer a certain headline order', 'Do not pin; write headlines that work in any order'],
        ['You have two similar headlines', 'Do not pin them to the same position, since Google warns it lowers ad strength'],
      ],
    },
    { type: 'h2', text: 'Read asset ratings before you change anything' },
    {
      type: 'p',
      text: 'The same guide explains that each asset gets a performance rating of Learning, Low, Good or Best, based on how it performed on the searches your ad served on, relative to the other assets in that ad. Learning means there is not yet enough data to rate it. The guide suggests revisiting an asset once it has over 500 impressions and the ad has over 2,000 impressions in the "Google Search: Top" segment over 30 days. That figure comes from a 2023 document, so check the current help pages before relying on it. Low assets should be replaced, and the guide warns that simply removing them reduces the number of combinations the ad can generate.',
    },
    {
      type: 'ul',
      items: [
        'Replace Low-rated assets with a different message, not a rewording of the same one.',
        'Think twice before deleting Best-rated assets to "clean up"; they are the ones that performed well.',
        'Remember ratings compare assets inside one ad. A Good rating does not mean the ad makes you money.',
        'Judge the ad by leads and cost per lead; Google\'s own guide says conversions matter more than clicks. [Optimization tips](/blog/google-ads-optimization-tips) covers ad strength and the weekly routine.',
      ],
    },
    { type: 'h2', text: 'Copy notes for English and Georgian' },
    {
      type: 'p',
      text: 'Google Ads\' [language list](https://support.google.com/google-ads/answer/6333734) does not include Georgian, and it says ads created in a language that is not supported for ads language targeting will be disapproved. English (Australia, United Kingdom and United States) and Russian are on the list. So the realistic options are English or Russian copy, with a landing page in the same language, and Georgian-language buyers reached through other channels. Check the list again before building a campaign, as it can change.',
    },
    {
      type: 'ul',
      items: [
        'Write English the way your buyer reads it: short, concrete words rather than idioms, since the reader may not be a native speaker.',
        'Pick one English spelling and keep it across every headline, since both British and American forms are supported.',
        'Put the same price format and currency in the ad as on the landing page.',
        'Count characters in the ad editor, since 30 characters per headline is a hard limit and a line adapted from another language may not fit.',
        'Name the Georgian places people search for, such as Tbilisi or Batumi, in a location headline if you serve there.',
      ],
    },
    {
      type: 'p',
      text: 'If you want a second pair of eyes on an account, [WakeUP manages Google and Meta advertising](/services/advertising), and the [free audit](/audit) is a place to start.',
    },
  ],
}
