import type { BlogPost } from '@/lib/blog'

export const post: BlogPost = {
  locale: 'en',
  slug: 'similartours-seo-case-study',
  title: 'SimilarTours SEO case study: head tags fixed, 145 articles rewritten plus 1 new and 14 languages by 15 November 2026',
  metaTitle: 'SimilarTours SEO Case Study: Tech SEO',
  description:
    'By 15 November 2026 similartours.com had head tags for every crawler, a fixed sitemap, 145 rewritten articles plus 1 new and 14 language versions.',
  publishedAt: '2026-11-15T21:00:00+04:00',
  updatedAt: '2026-11-15T21:00:00+04:00',
  service: 'seo',
  reviewState: 'llm_reviewed',
  body: [
    {
      type: 'p',
      text: 'By 15 November 2026, the work on [similartours.com](https://similartours.com) had changed what crawlers receive: the title, robots, canonical and hreflang tags now sit in the head of every page for every crawler, the sitemap no longer drops a quarter of indexable pages at random, 145 English articles are rewritten plus 1 new, and 14 language versions are live. SimilarTours puts similar tours, attraction tickets and day trips from several booking sites side by side, with each site\'s price.',
    },
    { type: 'h2', text: 'Results so far' },
    {
      type: 'p',
      text: 'There are no search results from after the work yet. The table lists what was delivered, and one Search Console baseline from before the work, clearly labelled.',
    },
    {
      type: 'table',
      head: ['Figure', 'Period', 'Source'],
      rows: [
        ['English articles rewritten from scratch: 145, plus 1 new article', 'As of 15 November 2026', 'Site repository, counted 15 November 2026'],
        ['Language versions live: 14 (English and 13 more)', '15 November 2026', 'Hreflang tags on the live pages and in the live sitemap'],
        ['Sitemap: 3 files, 2,949 URLs, 2,449 of them with hreflang alternates', '15 November 2026', 'Live sitemap, counted 15 November 2026'],
        ['City intros and FAQs replaced: 130; country intros and FAQs replaced: 30', 'By 14 November 2026', 'SEO work log and site repository'],
        ['English interface strings rewritten: 84', 'By 14 November 2026', 'SEO work log and site repository'],
        ['Ticket articles written natively in all 13 other languages: 9', 'By 14 November 2026', 'Site repository'],
        ['Site audit: 1,723 pages crawled across 18 sections', '10 November 2026', 'SEO audit report'],
        ['Pre-work baseline: 121 clicks, 41.6K impressions, CTR 0.3%, average position 20.1 (web search)', '28 November 2025 to 10 November 2026', 'Google Search Console, read 12 November 2026'],
      ],
    },
    {
      type: 'p',
      text: 'The baseline was read on 12 November 2026, before the rewritten articles shipped, and most of its volume comes from a spike in June 2026. It is the line the next reads will be measured against, not a result of the work.',
    },
    { type: 'h2', text: 'Technical SEO: what crawlers receive now' },
    {
      type: 'p',
      text: 'An audit on 10 November 2026 crawled 1,723 pages across 18 sections and sorted its findings from P0 to P3. Among them: for Googlebot, the title, robots, canonical and hreflang tags were being sent in the body instead of the head. They are now sent in the head to every user agent. A check as Googlebot on 15 November 2026 found the title of /destinations/rome at byte 5,050 and its canonical at byte 5,934, both before the end of the head at byte 9,299, with the H1 at byte 48,145.',
    },
    {
      type: 'ul',
      items: [
        'Loading skeletons were removed above pages that render on request, so the page content is no longer preceded by a placeholder.',
        'Tour products that are no longer available answer 200 with noindex, and old or unknown product URLs answer 308 or 404.',
        'Wrong-case URLs redirect to the canonical case: on 15 November 2026, /Destinations/Rome returned 308 to /destinations/rome. One-segment dotted URLs such as /a.b return 404 instead of 500.',
        'Page weight was cut for the 2 MB crawler cut-off. The 10 November 2026 audit had found 44 of 95 sampled city pages over 2 MB. On /destinations each city card now renders once, with slim links, from a static index.',
        'The sitemap is split into files of about 1.5 MB, and the bug that dropped a quarter of indexable pages at random is fixed. On 15 November 2026 the index listed 3 files with 2,949 URLs.',
        'robots.txt names AdsBot so crawl blocks reach it, no longer blocks the files Google needs to render pages, and agrees with the sitemap and on-page tags for each crawler.',
        'Meta descriptions on city and country pages are capped, long blog titles get a short search title, and the England, Scotland, Wales and Northern Ireland pages carry their own titles instead of "United Kingdom".',
        'Sitemap lastmod dates no longer mark large numbers of URLs as changed on the same day, and same-name cities in different countries no longer share products.',
        'A Next.js major-version upgrade shipped with contract tests that check the canonical in the head, the locale links and the /a.b case.',
      ],
    },
    { type: 'h2', text: 'Content: 145 articles rewritten plus 1 new' },
    {
      type: 'p',
      text: 'As of 15 November 2026, 145 English articles have been rewritten from scratch and 1 new article added, covering ticket guides, itineraries, day trips and seasonal guides. The rewrites were written from keyword briefs, and every article has a facts log with its sources. The process record dated 14 November 2026 shows no eight-word run shared with the old text.',
    },
    {
      type: 'p',
      text: 'Beyond the blog, by 14 November 2026, 130 city intros and 30 country intros were replaced together with their FAQs, and 84 English interface strings were rewritten. City and country text now goes through a manual workflow with backup and rollback, and the page generators no longer overwrite hand-edited copy. Article pages link to tag pages and to the method page, and wide tables scroll on phones.',
    },
    { type: 'h2', text: 'Languages: 14 versions with hreflang' },
    {
      type: 'p',
      text: 'On 15 November 2026, 14 language versions were live: en, es, fr, de, it, pt, nl, da, no, sv, ja, ko, zh-cn and zh-tw. Article pages print hreflang links for all 14 plus x-default in the head, and the sitemap carries the same alternates, with English as x-default. By 14 November 2026, 9 ticket articles had been written natively in all 13 other languages, and the new article in all 14.',
    },
    {
      type: 'p',
      text: 'A language\'s blog is linked only once its translation exists. robots.txt keeps non-blog language pages such as /es/ and /fr/ out of the crawl while allowing /{locale}/blog, so non-English indexing is limited to the blog on purpose.',
    },
    { type: 'h2', text: 'Structured data' },
    {
      type: 'p',
      text: 'Checked on the live pages on 15 November 2026: article pages carry BlogPosting, BreadcrumbList, Organization, WebSite with SearchAction, and ImageObject. City pages carry BreadcrumbList, FAQPage and ItemList.',
    },
    { type: 'h2', text: 'Keyword research' },
    {
      type: 'p',
      text: 'From 12 to 15 November 2026 the research ran 22 Semrush bulk volume lookups covering 572 cities and 97 countries, and on 15 November 2026 it looked up 960 queries for a planned /guide section. One finding recorded on 12 November 2026: on the cities tested, "things to do in {city}" and "{city} tours" share 0 top-10 URLs.',
    },
    { type: 'h2', text: 'What we measure next' },
    {
      type: 'p',
      text: 'The first Search Console re-check is on 14 December 2026. It is compared with the pre-work baseline (28 November 2025 to 10 November 2026) and looks at:',
    },
    {
      type: 'ul',
      items: [
        'Whether Google has indexed and ranked the rewritten articles.',
        'Clicks, impressions, CTR and average position, set against the baseline.',
        'Core Web Vitals field data, which is not recorded yet.',
      ],
    },
    {
      type: 'p',
      text: 'Each re-check will be added to this page with its date. For the same technical and content work, see the [SEO service](/services/seo), or start with a [free audit](/audit).',
    },
  ],
}
