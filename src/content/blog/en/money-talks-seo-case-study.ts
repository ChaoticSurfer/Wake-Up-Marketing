import type { BlogPost } from '@/lib/blog'

export const post: BlogPost = {
  locale: 'en',
  slug: 'money-talks-seo-case-study',
  title: 'Money Talks SEO case study: 15 gift guides in 3 languages and early Search Console reads, November 2026',
  metaTitle: 'Money Talks SEO Case Study: Gift Shop',
  description:
    'In the 28 days to 10 November 2026, moneytalks.studio had 31 clicks and 192 impressions in Google Search. The SEO work in English, Georgian and Russian.',
  publishedAt: '2026-11-15T21:00:00+04:00',
  updatedAt: '2026-11-15T21:00:00+04:00',
  service: 'seo',
  reviewState: 'llm_reviewed',
  body: [
    {
      type: 'p',
      text: 'In the 28 days to 10 November 2026, moneytalks.studio had 31 clicks and 192 impressions in Google Search, at an average position of 6.5, according to Google Search Console. These are small, early numbers. Money Talks sells [original gifts handmade in Tbilisi](https://moneytalks.studio): premium gifts for men set with prop money and scale models, with the shop in English, Georgian and Russian.',
    },
    { type: 'h2', text: 'Results so far' },
    {
      type: 'table',
      head: ['Figure', 'Period', 'Source'],
      rows: [
        ['5 clicks, 54 impressions', '5 October to about 25 October 2026', 'Google Search Console'],
        ['10 clicks, 103 impressions', '28 days to about 1 November 2026', 'Google Search Console'],
        ['27 clicks, 169 impressions, CTR 16%, average position 7', '28 days to 8 November 2026', 'Google Search Console'],
        ['31 clicks, 192 impressions, average position 6.5', '28 days to 10 November 2026', 'Google Search Console'],
        ['Page indexing: 110 indexed, 118 discovered but not indexed, 10 crawled but not indexed', '13 November 2026', 'Google Search Console'],
        ['Position 1 for "moneytalks studio", 2 for "money talks tbilisi", 4 for "wolf of wall street frame"', '10 November 2026', 'google.ge search, logged out'],
        ['Sitemap URLs: 252, 84 per language', '15 November 2026, 17:26 UTC', 'Live sitemap, counted 15 November 2026'],
        ['Hreflang alternates in the sitemap: 1,008; product image entries: 441', '15 November 2026, 17:26 UTC', 'Live sitemap, counted 15 November 2026'],
        ['Gift guide URLs: 48, that is 15 guides and 1 index page per language', '15 November 2026', 'Live sitemap, counted 15 November 2026'],
        ['Products in the product feed: 49', '15 November 2026', 'Live product feed, counted 15 November 2026'],
      ],
    },
    {
      type: 'p',
      text: 'Each Search Console row is a separate read, and the windows overlap, so the rows are not a growth series and no single change can be named as their cause. The gift guides launched from 8 to 14 November 2026, and on 10 November 2026 no guide impressions were visible yet. Of the 118 discovered pages on 13 November 2026, 40 were archived products already removed (404). The positions logged on 10 November 2026 are for brand and long-tail searches; no page-one position for a generic gift search was recorded. The sitemap is built from the product database, so its count changes whenever products or collections are added or hidden.',
    },
    { type: 'h2', text: 'Languages: English, Georgian and Russian with hreflang' },
    {
      type: 'ul',
      items: [
        'On 6 September 2026 the storefront moved under language routes, Georgian pages were created, the shop was translated and hreflang was turned on. Russian followed on 7 September 2026.',
        'Page titles and meta tags have their own dictionary per language, so the Georgian pages are not titled in English.',
        'Since 9 September 2026, noindex pages no longer claim hreflang clusters, and the order receipt no longer points its canonical at a 404.',
        'Since 25 October 2026 the footer links every page to its Georgian and Russian versions. In the crawl audit that day, orphan pages went from 147 to 0.',
        'On 15 November 2026 product and guide pages carry the hreflang set en-GB, ka-GE, ru and x-default.',
      ],
    },
    { type: 'h2', text: 'Technical SEO and indexing' },
    {
      type: 'ul',
      items: [
        'Since 25 October 2026 robots.txt blocks ?_rsc= prefetch payloads; from 6 to 21 October 2026, requests of the "other file type" kind were 80% of 8,870 Googlebot requests. It also blocks the ?collection= and ?tag= facet URLs, which were 95 of 168 crawled URLs before that change on 25 October 2026.',
        'Since 13 November 2026 the sitemap is built per request, so new products appear in it; the host had been serving a frozen 219-URL snapshot. Empty collections render noindex, follow and drop out of the sitemap from the same date.',
        'Search Console was verified, the sitemap submitted and the property linked to Google Analytics on 7 October 2026. Since 10 October 2026 every push and pull request runs the site checks, and a meta check fails any description that would be clipped.',
        'IndexNow accepted all 219 sitemap URLs on 25 October 2026 and 213 on 13 November 2026, then each batch of new guide URLs. Search Console indexing was requested for single URLs: 6 on 25 October, 10 on 10 November and 6 on 13 November 2026.',
        'Home page font preloads went from 28 to 1, and on a local build the English product page went from 32 font files and 1.34 MB to 4 files and 197 KB (measured 25 October 2026).',
      ],
    },
    { type: 'h2', text: 'Structured data and product feed' },
    {
      type: 'p',
      text: 'Product pages carry Product, Offer and OfferShippingDetails, with a delivery time taken from the shipping policy. On 25 October 2026 that cleared the Merchant listings warning "Missing deliveryTime" on 8 of 8 items, and missing required schema fields in the crawl went from 51 to 0. On 15 November 2026 a product page also carries ShippingDeliveryTime, MerchantReturnPolicy, Brand and BreadcrumbList, and guide pages carry BlogPosting and BreadcrumbList. The product feed for Meta and Google listed 49 items that day.',
    },
    { type: 'h2', text: 'Gift guides and product copy' },
    {
      type: 'p',
      text: 'The /guides hub and its first 3 guides went live in all 3 languages on 8 November 2026. By 14 November 2026 there were 15 guides in each language, among them Secret Santa gifts, gifts for a man who has everything, gifts for car lovers and gifts for film lovers. On 15 November 2026 all 15 were in the live sitemap in English, Georgian and Russian, and the 12 guide and index URLs checked that day answered 200. Each guide is written from the searches people make in that language, not translated, with the title matching the H1, prices filled from the product database, a self-canonical and the full hreflang set.',
    },
    {
      type: 'ul',
      items: [
        'Product meta descriptions now lead with the gift line: it appeared in full in 153 of 153 snippets on 1 November 2026, up from 0.',
        'By 10 November 2026 all 43 published product descriptions were rewritten in English, Georgian and Russian, from about 254 characters on average to about 1,040 to 1,095.',
        'From 10 November 2026 the home and key page titles were reworded: Georgian gifts, Russian cash gifts, and the Russian and English home pages.',
        'On 14 November 2026 the "shadow box" wording left the shop: it had been on 88 of 252 URLs and was on 0 afterwards.',
      ],
    },
    { type: 'h2', text: 'What we measure next' },
    {
      type: 'p',
      text: 'The next Search Console read will be added to this page with its date. It covers:',
    },
    {
      type: 'ul',
      items: [
        'Impressions and clicks for the gift guide pages, which had none visible on 10 November 2026.',
        'Page indexing, set against the 110 indexed and 118 discovered pages of 13 November 2026.',
        'Clicks, impressions and average position in a fresh Performance window.',
        'Core Web Vitals field data, which Search Console did not have enough usage data for on 25 October 2026.',
      ],
    },
    {
      type: 'p',
      text: 'For this kind of work on an online shop, see the [SEO service](/services/seo) or ask for a [free audit](/audit) to find out where you stand.',
    },
  ],
}
