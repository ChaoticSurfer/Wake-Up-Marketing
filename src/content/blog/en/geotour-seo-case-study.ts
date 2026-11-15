import type { BlogPost } from '@/lib/blog'

export const post: BlogPost = {
  locale: 'en',
  slug: 'geotour-seo-case-study',
  title: 'Geotour SEO case study: 402 Google clicks from 5 October to 3 November 2026',
  metaTitle: 'Geotour SEO Case Study: Travel Site',
  description:
    'From 5 October to 3 November 2026, geotour.ge earned 402 clicks and 32.6K impressions in Google Search. The SEO work behind it, figure by figure.',
  publishedAt: '2026-11-15T21:00:00+04:00',
  updatedAt: '2026-11-15T21:00:00+04:00',
  service: 'seo',
  reviewState: 'llm_reviewed',
  body: [
    {
      type: 'p',
      text: 'From 5 October to 3 November 2026, [geotour.ge](https://www.geotour.ge) earned 402 clicks and 32.6K impressions in Google web search, with a click-through rate of 1.2% and an average position of 11.1, according to Google Search Console. In Bing, the site had 640 impressions and 15 clicks from 26 October to 6 November 2026. Geotour.ge publishes tours, destination guides and transfer pages for Georgia, in 7 languages as of 15 November 2026.',
    },
    { type: 'h2', text: 'Results so far' },
    {
      type: 'table',
      head: ['Figure', 'Period', 'Source'],
      rows: [
        ['402 clicks, 32.6K impressions, CTR 1.2%, average position 11.1 (web search)', '5 October to 3 November 2026', 'Google Search Console'],
        ['Clicks from Georgia: 246, from 18,741 impressions', '5 October to 3 November 2026', 'Google Search Console'],
        ['Clicks from Israel: 49, from 2,662 impressions', '5 October to 3 November 2026', 'Google Search Console'],
        ['Countries in the performance report: 162', '5 October to 3 November 2026', 'Google Search Console'],
        ['Pages indexed: 408', 'Data as of 16 October 2026', 'Google Search Console'],
        ['Pages indexed: 505', 'Report dated 23 October 2026', 'Google Search Console'],
        ['All 8 sitemaps read "Success", 1,729 pages discovered', 'Read 4 to 5 November 2026', 'Google Search Console'],
        ['Core Web Vitals: 108 good URLs, 0 poor', '25 October 2026', 'Google Search Console'],
        ['640 impressions, 15 clicks, CTR 2.34%', '26 October to 6 November 2026', 'Bing Webmaster Tools'],
        ['Daily impressions: about 30 at the start of the window, about 95 at the end', '26 October to 6 November 2026', 'Bing Webmaster Tools'],
        ['8 of 8 sitemaps "Success", 3.3K URLs', 'Read 9 November 2026', 'Bing Webmaster Tools'],
        ['2,168 URLs in 7 language sitemaps, including 1,029 blog post URLs', '15 November 2026', 'Live sitemap, counted 15 November 2026'],
      ],
    },
    {
      type: 'p',
      text: 'Search Console data for the site starts on 5 October 2026, so there is no earlier period to compare with yet. The two indexing figures come from different report dates and are listed as separate reads, not as a trend. The sitemap count is what the site lists for crawlers, not a count of indexed pages.',
    },
    { type: 'h2', text: 'Technical SEO: a check on every change' },
    {
      type: 'p',
      text: 'An automated SEO audit runs on every pull request and every push to the main branch, and it fails the build when it finds errors. Its recorded result on main on 5 November 2026: errors cut from 428 to 14, blocking errors from 391 to 0 and warnings from 8,867 to 3,888.',
    },
    {
      type: 'ul',
      items: [
        'One host. On 15 November 2026 the bare domain without www answered with a 308 redirect to the www version, so each page has a single address.',
        'Redirects from the previous site. Old URLs that had backlinks redirect with a 308 to the closest live page, checked live on 31 October 2026.',
        'robots.txt, read on 15 November 2026, allows the site, blocks /api, /admin and the filter parameters on tour and destination lists (such as ?sort= and ?page=), and points to the sitemap index.',
        'Every destination and tour page carries server-rendered "This page in other languages" links, so crawlers reach each language version from the others.',
        'Since 13 November 2026, noindex planner and booking pages no longer print a canonical, the links to them carry no parameters in the HTML, and the /blog index is prerendered and cached.',
      ],
    },
    { type: 'h2', text: 'Indexing: per-language sitemaps, IndexNow and daily requests' },
    {
      type: 'p',
      text: 'The file /sitemap.xml is an index with one sitemap per language, so Search Console reports indexing for each language on its own. On 15 November 2026 the 7 sitemaps listed 2,168 URLs: en 325, ka 321, ru 304, he 305, de 305, es 304 and ar 304. Every entry carries hreflang alternates for en, ka, ru, he, de, es and ar, plus x-default.',
    },
    {
      type: 'p',
      text: 'On 25 October 2026 a single IndexNow send submitted 1,190 URLs: 329 tour URLs, 567 destination URLs and 294 blog URLs. Another 141 live URLs were accepted on 5 November 2026. Alongside that, a scheduled task sends Search Console indexing requests each day from a queue. On 15 November 2026 the queue had 123 rows, 72 marked indexed and 51 requested. That is a status of the request queue, not a Search Console count.',
    },
    {
      type: 'p',
      text: 'Bing Webmaster Tools was set up by importing the site from Search Console, and on 9 November 2026 Bing read 8 of 8 sitemaps as "Success". A Yandex Webmaster verification tag is also in place.',
    },
    { type: 'h2', text: 'Content and landing pages' },
    {
      type: 'p',
      text: 'On 15 November 2026 each language had 147 blog posts, 47 tour pages, 81 destination pages and 10 region pages. Across the 7 languages that is 1,029 blog post URLs, 329 tour URLs and 567 destination URLs. Posts go live on a publishing schedule, so the blog count keeps rising.',
    },
    {
      type: 'p',
      text: 'New landing pages target specific trip searches:transfers, car rental, a private driver, day trips from Tbilisi, Kutaisi and Batumi, hiking tours, Georgia tour packages, a page for tour operators, conference venues and a regions hub. All of them are in the English sitemap on 15 November 2026.',
    },
    {
      type: 'p',
      text: 'Service, tour and destination pages were retargeted to researched keywords. On 7 November 2026, 23 destination pages that sat near page one of Google got specific search titles and descriptions. The keyword research behind this covers 7 languages; rebuilt on 4 November 2026, it holds 579 keywords in 376 groups, with 551 saved search result snapshots.',
    },
    { type: 'h2', text: 'Structured data' },
    {
      type: 'p',
      text: 'Checked on the live pages on 15 November 2026: the home page carries TravelAgency, WebSite, FAQPage (9 questions with answers), Country and ItemList. Tour pages carry Product with AggregateOffer, TouristTrip, TravelAgency, Organization, BreadcrumbList and Place. Blog posts carry BlogPosting, Blog, Person, Organization, BreadcrumbList and ImageObject.',
    },
    { type: 'h2', text: 'What we measure next' },
    {
      type: 'ul',
      items: [
        'After 3 December 2026: the first like-for-like Search Console comparison, the last 28 days against the previous 28 days.',
        'From 10 January 2027: a 3-month Search Console view.',
        'A fresh Page indexing read, set against the 2,168 URLs in the sitemaps on 15 November 2026.',
        'Clicks on the 23 destination pages retitled on 7 November 2026, before and after the change.',
        'Queries already near the top with few clicks from 5 October to 3 November 2026: "georgia weather october" at average position 2.3 with 449 impressions and 0 clicks, and "georgia itinerary 5 days" at position 7.8 with 654 impressions and 0 clicks.',
      ],
    },
    {
      type: 'p',
      text: 'Each new read will be added to this page with its date. For the same kind of work, see the [SEO service](/services/seo) or request a [free audit](/audit) to find out where you stand.',
    },
  ],
}
