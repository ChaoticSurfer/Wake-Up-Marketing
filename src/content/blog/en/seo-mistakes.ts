import type { BlogPost } from '@/lib/blog'

export const post: BlogPost = {
  locale: 'en',
  slug: 'seo-mistakes',
  title: 'Common SEO mistakes on small-business sites, and how to spot each one',
  metaTitle: 'Common SEO Mistakes to Avoid',
  description:
    'Common SEO mistakes on small-business websites: noindex left on, wrong keywords, thin pages, no tracking and more, each with a quick way to check it.',
  publishedAt: '2027-01-22T09:00:00+04:00',
  updatedAt: '2027-01-22T09:00:00+04:00',
  service: 'seo',
  reviewState: 'llm_reviewed',
  body: [
    {
      type: 'p',
      text: 'The most common SEO mistakes on small-business websites are not clever tricks gone wrong. They are basics left undone: the wrong keywords, a noindex tag left on after launch, duplicate or empty page titles, thin pages, redirects forgotten in a redesign and no tracking to show whether anything works. Below are ten, each with how to spot it in a few minutes and what to do.',
    },
    {
      type: 'p',
      text: 'This post is about errors, not a full to-do list. If you want the positive version, use the [SEO checklist for small business](/blog/seo-checklist-for-small-business); for a structured review, see [how to do an SEO audit](/blog/how-to-do-seo-audit).',
    },
    { type: 'h2', text: '1. Leaving noindex on after the site goes live' },
    {
      type: 'p',
      text: 'Developers often block search engines while a site is being built. If the block stays on at launch, the site does not appear in Google at all. Google\'s documentation defines the rule simply: noindex means "Do not show this page, media, or resource in search results" ([Google Search Central](https://developers.google.com/search/docs/crawling-indexing/robots-meta-tag)). It can sit in a meta tag in the page head or in an HTTP header.',
    },
    {
      type: 'ul',
      items: [
        'Spot it: view the page source and search for "noindex", or check the page in the URL Inspection tool in Search Console.',
        'Fix it: remove the tag or header on every page you want found, then ask Google to re-crawl the key pages.',
      ],
    },
    { type: 'h2', text: '2. Using robots.txt to hide pages' },
    {
      type: 'p',
      text: 'Google states that robots.txt is ["not a mechanism for keeping a web page out of Google"](https://developers.google.com/search/docs/crawling-indexing/robots/intro); to keep a page out, use noindex or a password. The two also conflict: a noindex tag on a page that robots.txt blocks is never seen, because the rules [can be read and followed only if crawlers are allowed to access the page](https://developers.google.com/search/docs/crawling-indexing/robots-meta-tag). The opposite error is also common: a leftover "Disallow: /" line that blocks the whole site.',
    },
    {
      type: 'ul',
      items: [
        'Spot it: open yourdomain.ge/robots.txt and read it line by line. Any disallowed folder should be one you truly do not want crawled.',
        'Fix it: use noindex for pages that must stay out of results, and leave them crawlable so the tag is read.',
      ],
    },
    { type: 'h2', text: '3. Targeting keywords nobody uses, or the wrong intent' },
    {
      type: 'p',
      text: 'Companies often optimise for the words they use internally, or for a broad term that is far too competitive, and miss the phrases customers type. A second form of the mistake is intent: putting a service page against a query where Google shows guides, or the other way round. The cure is to look at what already ranks for the query before you write.',
    },
    {
      type: 'ul',
      items: [
        'Spot it: search your target phrase and see what kinds of pages rank. If all ten are articles and yours is a sales page, the intent does not match. Read [search intent types](/blog/search-intent-types).',
        'Fix it: choose phrases your buyers actually search, including narrower ones; start with [keyword research for SEO](/blog/keyword-research-for-seo) and [long-tail keywords](/blog/long-tail-keywords).',
      ],
    },
    { type: 'h2', text: '4. Missing, vague or duplicated page titles' },
    {
      type: 'p',
      text: 'Google\'s guidance says to make sure "every page on your site has a title specified in the title element", to avoid vague labels such as "Home", and to avoid giving many pages the same template wording ([title links documentation](https://developers.google.com/search/docs/appearance/title-link)). Its SEO starter guide adds that a good title is "unique to the page, clear and concise, and accurately describes the contents of the page". A site where every page is called "Company name - Home" gives searchers no reason to choose one page over another.',
    },
    {
      type: 'ul',
      items: [
        'Spot it: open a few service pages and look at the browser tab; or search "site:yourdomain.ge" and read the titles Google shows.',
        'Fix it: write a distinct title per page, starting with the topic the page answers, and put the brand at the end.',
      ],
    },
    { type: 'h2', text: '5. Thin, copied or mass-produced pages' },
    {
      type: 'p',
      text: 'A page with two sentences and a form, or fifty near-identical city pages, adds little for a visitor. Google\'s spam policies describe scaled content abuse as ["creating large amounts of unoriginal content that provides little to no value to users"](https://developers.google.com/search/docs/essentials/spam-policies), and say it applies regardless of how the pages are produced, including mass-producing pages with generative AI without adding value for users. Copying a supplier\'s product descriptions word for word is a milder version of the same problem.',
    },
    {
      type: 'ul',
      items: [
        'Spot it: list your pages with their word counts and ask of each, what does this page give a visitor that no other page gives?',
        'Fix it: merge weak pages into one stronger page, or add real material to them such as specifics, examples and answers to questions customers ask. Delete pages that have no purpose.',
      ],
    },
    { type: 'h2', text: '6. Stuffing keywords into the text' },
    {
      type: 'p',
      text: 'Repeating a phrase in every sentence reads badly and is named in Google\'s spam policies: keyword stuffing is "filling a web page with keywords or numbers in an attempt to manipulate rankings". Write for the reader, use the main phrase where it is natural, and cover the subtopics a person needs. [SEO copywriting](/blog/seo-copywriting) shows how.',
    },
    {
      type: 'ul',
      items: [
        'Spot it: read the page aloud. If a phrase sounds repeated, it is.',
        'Fix it: rewrite it as if explaining the service to a customer on the phone.',
      ],
    },
    { type: 'h2', text: '7. No tracking, so nobody knows what works' },
    {
      type: 'p',
      text: 'Without data, SEO becomes opinion. Google\'s starter guide says that setting up Search Console "helps you monitor and optimize how your website performs on Google Search". It shows which queries bring impressions and clicks, and which pages have indexing problems. Pair it with an analytics tool that records enquiries as events, not only visits.',
    },
    {
      type: 'ul',
      items: [
        'Spot it: can you say how many enquiries came from Google last month? If not, tracking is incomplete.',
        'Fix it: verify the site in Search Console ([Search Console guide](/blog/google-search-console-guide)), set up form and call events ([GA4 for small business](/blog/ga4-for-small-business)), and tag campaign links ([UTM parameters](/blog/utm-parameters-guide)).',
      ],
    },
    { type: 'h2', text: '8. Redesigning or moving the site without redirects' },
    {
      type: 'p',
      text: 'When page addresses change and old ones are not redirected, every link and every ranking that pointed to the old address is lost. Google recommends "a permanent server-side redirect whenever possible" for pages that moved ([redirects documentation](https://developers.google.com/search/docs/crawling-indexing/301-redirects)).',
    },
    {
      type: 'ul',
      items: [
        'Spot it: before the launch, export the old URLs and test that each one lands on its new equivalent. After launch, look for a rise in "not found" pages in Search Console.',
        'Fix it: map old to new addresses and redirect each. The [website redesign checklist](/blog/website-redesign-checklist) has the full list.',
      ],
    },
    { type: 'h2', text: '9. Weak links inside the site' },
    {
      type: 'p',
      text: 'Pages that nothing links to are hard to find, and link text such as "click here" tells nobody what is behind it. Google\'s starter guide has a section called "Write good link text": it "tells users and Google something about the page you\'re linking to". Link your service pages from the home page and from related articles, with descriptive words.',
    },
    {
      type: 'ul',
      items: [
        'Spot it: pick an important service page and count which pages link to it.',
        'Fix it: add links from relevant pages with anchors that name the topic.',
      ],
    },
    { type: 'h2', text: '10. Expecting results in days, then changing everything' },
    {
      type: 'p',
      text: 'Google says: "Every change you make will take some time to be reflected on Google\'s end", with some changes visible within hours and others taking months; it suggests waiting a few weeks before judging whether a change had an effect. The mistake is to alter the titles, the structure and the text again each week, so that nothing can be measured.',
    },
    {
      type: 'ul',
      items: [
        'Spot it: do you have a change log with dates? If not, you cannot tell which change caused which result.',
        'Fix it: make changes in batches, write down the date and the page, and compare after several weeks. For what long-term work involves, see [what SEO services include](/blog/what-do-seo-services-include).',
      ],
    },
    { type: 'h2', text: 'What to fix first' },
    {
      type: 'p',
      text: 'Order the work by damage. Anything that stops pages being indexed (mistakes 1, 2 and 8) comes first because no other work counts until pages can appear. Next fix tracking (7), so you can see the effect of what follows. Then work on titles, intent and content quality (3 to 6). If you hire help, the [SEO agency red flags](/blog/seo-agency-red-flags) post lists what to watch for.',
    },
    {
      type: 'p',
      text: 'WakeUP offers [SEO services](/services/seo) in Georgian and English, covering technical fixes, keyword research and content. If you want a second pair of eyes on your site first, the [free marketing audit](/audit) is a no-obligation way to get one.',
    },
  ],
}
