import type { BlogPost } from '@/lib/blog'

export const post: BlogPost = {
  locale: 'en',
  slug: 'search-intent-types',
  title: 'Search intent in SEO: the four types and how to match a page to each',
  metaTitle: 'Search Intent in SEO: 4 Types',
  description:
    'Search intent in SEO means what a searcher wants to do. The four types, how to read the results page, and examples for Georgian service businesses.',
  publishedAt: '2026-12-22T18:00:00+04:00',
  updatedAt: '2026-12-22T18:00:00+04:00',
  service: 'seo',
  reviewState: 'llm_reviewed',
  body: [
    {
      type: 'p',
      text: 'Search intent in SEO is the reason behind a search: what the person wants to learn, find, compare or buy. The four common types are informational, navigational, commercial and transactional. To match a page to intent, search the phrase in Google and look at what ranks. The kind of page on the first screen tells you what searchers are shown, and your page has to be that kind.',
    },
    { type: 'h2', text: 'The four types of search intent' },
    {
      type: 'p',
      text: 'The labels come from SEO practice, as laid out in guides such as [Clearscope\'s overview of search intent](https://www.clearscope.io/blog/types-of-search-intent). The examples below are illustrative queries for service businesses in Georgia, not search-volume data.',
    },
    {
      type: 'table',
      head: ['Intent', 'The searcher wants to', 'Typical wording', 'Example (service business)', 'Page that fits'],
      rows: [
        ['Informational', 'Learn something', '"what is", "how to", "why"', 'რა არის SEO; how to register a company in Georgia', 'Guide, article, FAQ'],
        ['Navigational', 'Reach a particular site', 'A brand name, "login"', 'A competitor\'s name; your own company name', 'Your homepage, your contact page'],
        ['Commercial', 'Compare options before choosing', '"best", "vs", "reviews", "price"', 'SEO კომპანია თბილისში; website agency Tbilisi reviews', 'Comparison page, service page with proof, buyer\'s guide'],
        ['Transactional', 'Act now: buy, book, request', '"buy", "book", "order", "quote"', 'Book an accountant consultation; request a quote for a website', 'Service page with a form, booking page, landing page'],
      ],
    },
    {
      type: 'p',
      text: 'Wording is a clue, not proof. "Price" can mean someone is almost ready to buy or someone is only gathering numbers. The results page settles it.',
    },
    { type: 'h2', text: 'How Google describes intent' },
    {
      type: 'p',
      text: 'Google says that to return relevant results, "we first need to establish what you\'re looking for - the intent behind your query" (from [How Search works: ranking results](https://www.google.com/search/howsearchworks/how-search-works/ranking-results/)). The same page says Google\'s systems "can also recognize many queries have a local intent".',
    },
    {
      type: 'p',
      text: 'Google\'s [Search Quality Rater Guidelines](https://static.googleusercontent.com/media/guidelines.raterhub.com/en//searchqualityevaluatorguidelines.pdf), the document it gives to people who rate search results (version dated 11 September 2025), uses a different set of labels: "It can be helpful to think of queries as having one or more of the following intents." They are Know (the user wants information), Do ("when the user is trying to accomplish a goal or engage in an activity"), Website ("when the user is looking for a specific website or webpage") and Visit-in-person. The guidelines train raters and are not a list of ranking factors, but they show how Google thinks about queries. The two sets of labels map roughly like this:',
    },
    {
      type: 'table',
      head: ['Industry label', 'Closest Google label'],
      rows: [
        ['Informational', 'Know'],
        ['Navigational', 'Website'],
        ['Transactional', 'Do'],
        ['Commercial', 'Between Know and Do: the searcher is still researching'],
        ['Local ("near me", a district or city)', 'Visit-in-person'],
      ],
    },
    {
      type: 'p',
      text: 'Local intent matters for a Georgian service business. A query for a clinic, a repair shop or a notary is often a visit-in-person query, and the page that answers it is a location page and a complete Google Business Profile rather than a blog article. See [local SEO tips](/blog/local-seo-tips) for that work.',
    },
    { type: 'h2', text: 'Read the results page in five checks' },
    {
      type: 'p',
      text: 'The [keyword research guide](/blog/keyword-research-for-seo) tells you to glance at the results before choosing a phrase. This is the longer routine. Search the phrase in a private window, ideally from Georgia, and note:',
    },
    {
      type: 'ol',
      items: [
        'Page types. Are the top results guides, service pages, product pages, directories or comparison lists? Count them. If eight of ten are guides, the intent is informational.',
        'Format. Are there videos, images, a map or a list of businesses? A map block points to local intent. A row of videos points to a how-to.',
        'Answer boxes. If Google shows a direct answer or an AI summary, a short factual question may be answered before anyone clicks.',
        'Language. Which language are the results in? A Georgian phrase can show Georgian and English pages. If the results are all in English, a Georgian page may still be wanted, but check with autocomplete and your own Search Console data.',
        'Who ranks. Large publishers and marketplaces rank for broad informational phrases. Local companies rank for service phrases. If your page is not the kind that ranks, you are in the wrong contest.',
      ],
    },
    { type: 'h2', text: 'Match the page to the intent' },
    {
      type: 'p',
      text: 'Most intent problems come from putting the right words on the wrong kind of page. [Clearscope](https://www.clearscope.io/blog/types-of-search-intent) says some intents suit a long-form article and others a short landing page, a video or a product page. The fixes are mostly about format.',
    },
    {
      type: 'table',
      head: ['Problem', 'Why it fails', 'Fix'],
      rows: [
        ['A blog post targets "SEO კომპანია თბილისში"', 'The searcher is choosing a provider and wants a service page with proof', 'Create a service page; link the blog post to it'],
        ['A service page targets "what is SEO"', 'The searcher wants an explanation, not a sales page', 'Write a guide, link to the service page at the end'],
        ['Your homepage is the only page for six services', 'One page cannot match six different searches', 'One page per service, each with its own enquiry route'],
        ['A guide has no next step', 'The reader learns and leaves', 'Add a related service or a free audit link where it fits'],
        ['Navigational brand queries land on a weak page', 'People who know your name still need a clear first impression', 'Check what shows for your own name and fix the homepage, contact and profile pages'],
      ],
    },
    {
      type: 'p',
      text: 'Do not optimise for navigational queries that belong to someone else. Clearscope\'s advice on navigational queries is that if the searcher needs a specific website and yours is not it, you should pass on optimising for them.',
    },
    { type: 'h2', text: 'When a phrase has mixed intent' },
    {
      type: 'p',
      text: 'Google\'s own guidelines note that the line between Do and Know "is sometimes blurry", with some queries fitting both. If the results are mixed, you have three options: pick the intent you can serve best, make one page that serves both with a clear structure (the answer first, the offer second), or split it into two pages and link them. Long, specific phrases usually have clearer intent; [long-tail keywords](/blog/long-tail-keywords) explains why they suit smaller sites.',
    },
    { type: 'h2', text: 'Turning this into a page plan' },
    {
      type: 'p',
      text: 'List your target phrases, label each by intent, check the results page, and assign one page type to each. Informational phrases become guides; commercial and transactional ones become service pages and landing pages. [SEO for a small business](/blog/seo-for-small-business) shows where to start. If you would like a second pair of eyes, WakeUP Marketing\'s [free marketing audit](/audit) reviews your site, and the [SEO service](/services/seo) covers keyword research in Georgian and English and pages written for search intent.',
    },
  ],
}
