import type { BlogPost } from '@/lib/blog'

export const post: BlogPost = {
  locale: 'en',
  slug: 'long-tail-keywords',
  title: 'Long tail keywords: what they are and how a small company finds them',
  metaTitle: 'Long Tail Keywords: How to Find Them',
  description:
    'Long tail keywords are specific, low-volume searches. Find them free with Google autocomplete, Search Console and your customers\' own questions.',
  publishedAt: '2026-12-20T15:00:00+04:00',
  updatedAt: '2026-12-20T15:00:00+04:00',
  service: 'seo',
  reviewState: 'llm_reviewed',
  body: [
    {
      type: 'p',
      text: 'Long tail keywords are specific search phrases with low search volume, such as "accounting software for a 40-person company in Tbilisi" instead of "accounting software". A small company can find them for free in three places: Google\'s autocomplete, the Queries report in Search Console, and the questions customers already ask your sales and support team. Each one shows real wording, which is what you want to write for.',
    },
    { type: 'h2', text: 'What long tail keywords are, and are not' },
    {
      type: 'p',
      text: 'The name suggests long phrases, but length is not the test. Ahrefs, an SEO software vendor, [defines them by search volume](https://ahrefs.com/blog/long-tail-keywords/): they are low-volume queries, usually more specific than the broad head term, and what counts as low depends on the head term you compare them to. A short phrase with few searches can be long tail; a long phrase with many searches is not.',
    },
    {
      type: 'p',
      text: 'Ahrefs also reports how common low-volume searches are: keywords with fewer than 10 searches a month make up almost 93% of its U.S. keyword database (a figure for its U.S. database, on the page as updated 27 May 2026; Georgian volumes are not covered). The practical point is that most of what people type is specific, and no single phrase looks impressive in a tool.',
    },
    { type: 'h2', text: 'Why a small company should look for them' },
    {
      type: 'ul',
      items: [
        'Competition: broad terms are dominated by big sites. Specific phrases often have fewer strong pages answering them, though Ahrefs itself notes the answer is "it depends" and some long-tail terms are no easier to rank for.',
        'Fit: a person who types exactly what you sell is closer to a decision than one who types a single broad word. Ahrefs says long-tail keywords "often" convert better but cites no data, so treat this as a reason to test, not a promise.',
        'Cost of content: a narrow question can often be answered fully in one focused page, rather than a guide that tries to cover everything.',
      ],
    },
    {
      type: 'p',
      text: 'None of this replaces the larger plan. The [keyword research guide](/blog/keyword-research-for-seo) covers how to choose which topics deserve a page at all; this post is about finding the specific phrases inside them.',
    },
    { type: 'h2', text: 'Method 1: Google autocomplete' },
    {
      type: 'p',
      text: 'Start typing a topic into Google and read the predictions. Google says that [autocomplete predictions "reflect real searches that have been done on Google"](https://support.google.com/websearch/answer/7368877) and are shaped by the language of the query, the location it comes from and trending interest. It also says autocomplete does not simply display the most common queries on a topic, so it is a source of ideas, not a ranking of volume.',
    },
    {
      type: 'ol',
      items: [
        'Type your core service or product, then add a space and each letter of the alphabet in turn, noting the suggestions.',
        'Add question words in front (how, what, can, is) and modifiers after (for small business, in Tbilisi, price, vs).',
        'Repeat in Georgian, in a separate window, and in English if your buyers search in both. Predictions follow the language of the query, so the lists differ.',
        'Copy the phrases into a sheet. Do not judge them yet.',
      ],
    },
    { type: 'h2', text: 'Method 2: Search Console' },
    {
      type: 'p',
      text: 'If your site is verified in Search Console, the [Performance report](https://support.google.com/webmasters/answer/7576553) shows clicks, impressions, click-through rate and average position, and its Queries tab groups the table by the search terms people used. These are phrases you already appear for, often at the bottom of page one or on page two, which makes them the cheapest wins.',
    },
    {
      type: 'ol',
      items: [
        'Open Performance and choose Queries. Keep the date range at the default of the last three months.',
        'Add a query filter that uses a regular expression (regex) and enter question words, for example what|how|when|why. Google\'s [Search Central blog](https://developers.google.com/search/blog/2021/06/regex-negative-match) (2 June 2021) says a filter like this might show results that indicate your content should easily answer questions.',
        'Sort by impressions. Pick phrases with many impressions and few clicks: people see you, but your page is not the answer yet.',
        'Check which page ranks. If it is a general page, a new focused page or a new section may serve the phrase better.',
      ],
    },
    {
      type: 'p',
      text: 'Search Console shows only searches where your site already appeared, so it finds improvements, not new territory. A new site has little data; start with the other two methods.',
    },
    { type: 'h2', text: 'Method 3: customer questions' },
    {
      type: 'p',
      text: 'Your own team hears the exact wording buyers use before any tool does. Ahrefs lists communities, forums and video titles among the places to find questions in people\'s own words; for a company, the nearest source is internal.',
    },
    {
      type: 'ul',
      items: [
        'Sales calls and enquiry emails: what do prospects ask first, and which objections come up?',
        'Support messages, WhatsApp chats and chatbot logs: which questions repeat?',
        'On-site search and the forms people fill in.',
        'Reviews of you and your competitors: which words do customers use for the problem?',
      ],
    },
    {
      type: 'p',
      text: 'Write each question exactly as the customer said it. Then check the phrase in autocomplete and search for it yourself to see what currently answers it.',
    },
    { type: 'h2', text: 'Turning a phrase into a page' },
    {
      type: 'table',
      head: ['Phrase type', 'Example (illustrative)', 'What to build'],
      rows: [
        ['Question', 'how long does a website redesign take', 'A short answer first, then the factors'],
        ['Comparison', 'custom website vs template', 'A decision guide with a table'],
        ['Cost', 'how much does a branding project cost', 'Ranges, drivers, questions to ask'],
        ['Local', 'seo agency in Tbilisi', 'A service page with location details'],
        ['Problem', 'website not showing on Google', 'A diagnostic checklist'],
      ],
    },
    {
      type: 'p',
      text: 'Group phrases that mean the same thing under one page rather than writing a page for each wording. Look at what already ranks first: if every result is a product page and you are writing a guide, the search wants something else. After publishing, watch the page in Search Console for a few weeks before changing it.',
    },
    { type: 'h2', text: 'Mistakes to avoid' },
    {
      type: 'ul',
      items: [
        'Chasing volume. A phrase with 10 searches a month that your sales team hears weekly is worth more than a popular phrase you cannot serve.',
        'Many thin pages. One page per near-identical wording competes with itself and says little.',
        'Skipping Georgian. If your buyers search in Georgian, research Georgian phrases; do not translate English ones.',
        'Stopping at the list. A list of phrases helps only when each one leads to a page that answers it.',
      ],
    },
    {
      type: 'p',
      text: 'For a wider view of small-company SEO, read [SEO for small business](/blog/seo-for-small-business), and for what an agency should deliver, [what SEO services include](/blog/what-do-seo-services-include). WakeUP offers keyword research in Georgian and English as part of its [SEO service](/services/seo). To see which phrases your site already earns impressions for and where it falls short, the [free audit](/audit) is a place to start.',
    },
  ],
}
