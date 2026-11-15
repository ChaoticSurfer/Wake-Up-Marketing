import type { BlogPost } from '@/lib/blog'

export const post: BlogPost = {
  locale: 'en',
  slug: 'ecommerce-seo-checklist',
  title: 'Ecommerce SEO checklist: categories, products, variants, filters and schema',
  metaTitle: 'Ecommerce SEO Checklist',
  description:
    'An ecommerce SEO checklist for online stores: crawlable categories, one URL per variant, product markup, controlled filters and pagination.',
  publishedAt: '2027-01-17T09:00:00+04:00',
  updatedAt: '2027-01-17T09:00:00+04:00',
  service: 'seo',
  reviewState: 'llm_reviewed',
  body: [
    {
      type: 'p',
      text: 'An ecommerce SEO checklist differs from a general one because a store makes thousands of URLs from a few templates. Check that categories and products are reachable through plain links, that every variant has its own URL, that product pages carry structured data, and that filters and pagination do not flood Google with near-duplicates. Most items below follow Google’s own ecommerce documentation.',
    },
    {
      type: 'p',
      text: 'For titles, content and local basics that apply to any website, use the [SEO checklist for small business](/blog/seo-checklist-for-small-business). This one covers what is specific to a store.',
    },
    { type: 'h2', text: 'Categories and site structure' },
    {
      type: 'p',
      text: 'Google’s [site structure guidance for ecommerce](https://developers.google.com/search/docs/specialty/ecommerce/help-google-understand-your-ecommerce-site-structure) asks for a chain of links: from menus to category pages, from category pages to sub-categories, and from categories to the products they contain. Otherwise, Googlebot may miss products reachable only through on-site search.',
    },
    {
      type: 'ul',
      items: [
        'Every category and product is reachable by links, not only by search or filters.',
        'Links are standard <a href> anchors. Google advises against JavaScript-only navigation that relies on events on other elements.',
        'Best sellers get internal links from the home page, blog posts or newsletters. Google says the more internal links a page receives, the more relative importance it may be given.',
        'A sitemap or Merchant Center feed lists pages you cannot link everywhere.',
        'Each category page has its own title, an introduction and a unique heading, not just a grid of thumbnails.',
      ],
    },
    { type: 'h2', text: 'URLs and product variants' },
    {
      type: 'p',
      text: 'Google’s [URL structure guidance](https://developers.google.com/search/docs/specialty/ecommerce/designing-a-url-structure-for-ecommerce-sites) is direct: "To help Google understand your product variants, make sure that each variant can be identified by a separate URL." It also advises you to minimise the number of alternative URLs that return the same content, to include the canonical product URL on all variant pages, and to use ?key=value parameters rather than ?value.',
    },
    {
      type: 'ul',
      items: [
        'One URL per colour or size, each with the canonical product URL set.',
        'No duplicate paths to the same product (for example through different category routes) without a canonical.',
        'Named parameters, in the ?key=value form.',
        'Discontinued products redirect to the nearest replacement or category, or return a proper not-found status.',
      ],
    },
    { type: 'h2', text: 'Product pages' },
    {
      type: 'p',
      text: 'A product page needs content a manufacturer’s copy does not give you. Write a unique description, show clear photos, state price, availability, delivery and returns, and answer the questions buyers ask before buying. Title, heading and image-text details are covered in [product page optimisation](/blog/product-page-optimization). If you also run product ads, the same data feeds [Google Shopping](/blog/google-shopping-ads-setup).',
    },
    { type: 'h2', text: 'Product structured data' },
    {
      type: 'p',
      text: 'Google’s [product structured data page](https://developers.google.com/search/docs/appearance/structured-data/product) separates two uses. Product snippets are for pages where people cannot directly purchase the product. Merchant listings are for pages where customers can purchase products from you, and support extra detail such as apparel sizing, shipping details and return policy. A store wants merchant listings. Google adds that more properties make a page eligible for more enhancements, such as ratings, shipping, availability and returns.',
    },
    {
      type: 'p',
      text: 'Google’s [ecommerce structured data guidance](https://developers.google.com/search/docs/specialty/ecommerce/include-structured-data-relevant-to-ecommerce) says markup can improve the accuracy of its understanding of your content, and names the Product and ProductGroup types for products with variants, Review, and BreadcrumbList. Test every template, not one page. See [schema markup for small business](/blog/schema-markup-for-small-business) for the basics.',
    },
    { type: 'h2', text: 'Filters and faceted navigation' },
    {
      type: 'p',
      text: 'Filters by size, colour, price and brand can create endless URL combinations. Google’s [faceted navigation documentation](https://developers.google.com/search/docs/crawling-indexing/crawling-managing-faceted-navigation) says parameter-based faceted navigation can generate infinite URL spaces, causing overcrawling and slower discovery of new, useful pages. Its options:',
    },
    {
      type: 'table',
      head: ['Option', 'What Google says'],
      rows: [
        ['robots.txt disallow', 'Google says there is often no good reason to allow crawling of filtered items'],
        ['rel="canonical"', 'May, over time, decrease the crawl volume of non-canonical versions; less effective long-term than robots.txt'],
        ['rel="nofollow"', 'Every anchor pointing to a specific URL must carry it, and it is less effective long-term'],
      ],
    },
    {
      type: 'p',
      text: 'Also from that page: use the standard & separator for parameters, keep filter order consistent, and return a 404 for filter combinations with no results rather than redirecting to a generic error page. If a filtered view has real search demand, for example "black leather sofas", it can deserve a proper indexable category page of its own instead.',
    },
    { type: 'h2', text: 'Pagination' },
    {
      type: 'p',
      text: 'Google’s [pagination guidance](https://developers.google.com/search/docs/specialty/ecommerce/pagination-and-incremental-page-loading) has four rules worth checking on any category with more than one page:',
    },
    {
      type: 'ol',
      items: [
        'Give each page a unique URL, such as ?page=2.',
        'Do not mark page numbers with a # fragment: Google ignores fragment identifiers.',
        'Do not point every page’s canonical at page 1. Give each page its own canonical URL.',
        'Link pages with <a href> anchors. Google does not click buttons, so "load more" must have crawlable links behind it.',
      ],
    },
    { type: 'h2', text: 'Speed and languages' },
    {
      type: 'p',
      text: 'Category pages carry many images, which is where load time goes. [Core Web Vitals](/blog/improve-core-web-vitals) explains the targets and fixes. If your store runs in Georgian, English or Russian, each version needs its own URL and links between them: see [multilingual SEO](/blog/multilingual-seo).',
    },
    { type: 'h2', text: 'Where to start' },
    {
      type: 'p',
      text: 'Fix in this order: crawlability and duplicate URLs first, because they limit everything else; then product markup; then page content, starting with the products that sell best. A technical audit of the store templates is the fastest way to find which of these apply to you. WakeUP offers [SEO as a service](/services/seo) that includes technical fixes, or you can begin with the [free marketing audit](/audit).',
    },
  ],
}
