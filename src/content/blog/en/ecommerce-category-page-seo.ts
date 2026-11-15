import type { BlogPost } from '@/lib/blog'

export const post: BlogPost = {
  locale: 'en',
  slug: 'ecommerce-category-page-seo',
  title: 'Ecommerce category page SEO: keywords, titles, filters and internal links',
  metaTitle: 'Ecommerce Category Page SEO',
  description:
    'Ecommerce category page SEO in six steps: pick one keyword, write a unique title and intro, control filter URLs, handle pagination and link categories.',
  publishedAt: '2027-02-21T09:00:00+04:00',
  updatedAt: '2027-02-21T09:00:00+04:00',
  service: 'seo',
  reviewState: 'llm_reviewed',
  body: [
    {
      type: 'p',
      text: 'Ecommerce category page SEO means treating each category as a landing page for a shopping search such as "women’s running shoes". Give every category one target keyword, a unique title and heading, a short helpful intro, and a clear product grid. Then control the URLs that filters and pagination create, and link categories to each other and to their products with ordinary links. Broad product-type searches are where category pages compete.',
    },
    { type: 'h2', text: 'Why category pages deserve their own work' },
    {
      type: 'p',
      text: 'Shoppers who search a product type, not a model name, are looking for a list to browse. That is what a category page is. It is also the page that connects your menu to your products. Google’s guidance on [ecommerce site structure](https://developers.google.com/search/docs/specialty/ecommerce/help-google-understand-your-ecommerce-site-structure) asks for links from menus to category pages, from categories to subcategories, and from subcategories to product pages, and warns that products reachable only through a site search box may go undiscovered. If you have already worked through the whole-store [ecommerce SEO checklist](/blog/ecommerce-seo-checklist), this post is the closer look at one page type, and [product page optimization](/blog/product-page-optimization) is its counterpart one level down.',
    },
    { type: 'h2', text: '1. Give each category its own keyword' },
    {
      type: 'p',
      text: 'Choose one primary keyword per category and a few close variations, and make sure no two categories chase the same phrase. Lumar’s guide on category pages recommends putting each page in its own keyword bucket to avoid cannibalisation, where pages compete with each other. Check [search intent](/blog/search-intent-types) first: open the results for the phrase and see whether Google shows category pages, product pages or guides. If it shows guides, a category page is the wrong target for that phrase.',
    },
    {
      type: 'ul',
      items: [
        'Use the words shoppers type, not internal names. "Sofas" beats "Seating solutions".',
        'Run the research in each language you sell in; Georgian and English terms differ in volume and wording, so they cannot simply be translated. See [multilingual SEO](/blog/multilingual-seo) and [keyword research for SEO](/blog/keyword-research-for-seo).',
        'Keep the structure shallow where the catalogue allows it, so every category is a few clicks from the home page.',
      ],
    },
    { type: 'h2', text: '2. Write the title, heading and meta description' },
    {
      type: 'p',
      text: 'Google’s documentation on [title links](https://developers.google.com/search/docs/appearance/title-link) asks for "distinct text that describes the content of the page", concise wording, no repeated words or phrases, and a short brand name at the beginning or end. For a category, that gives a simple pattern:',
    },
    {
      type: 'table',
      head: ['Element', 'Pattern', 'Example'],
      rows: [
        ['Title', 'Category keyword + one differentiator + brand', 'Leather sofas - free delivery in Tbilisi | Brand'],
        ['H1', 'The category keyword, nothing else', 'Leather sofas'],
        ['Meta description', 'What is in the category and why buy here', 'Browse leather sofas in three sizes, with delivery and assembly. Compare prices and materials.'],
      ],
    },
    {
      type: 'p',
      text: 'Do not let a template stamp "Category name - Brand" on a thousand pages with nothing else, because then every result looks the same. If you can only write by hand for part of the catalogue, start with the categories that bring the most revenue.',
    },
    { type: 'h2', text: '3. Add an intro that helps, then the products' },
    {
      type: 'p',
      text: 'A category page with only a grid of thumbnails gives Google little to read, and gives shoppers no help choosing. Add a short introduction in your own words: what is in the category, how to choose between the options, and what you offer around delivery, returns or fitting. Mangools’ guide to category pages suggests adding focused copy at the end of the page, below the products, and warns against turning it into a 2000-word blog post, which could confuse search engines about the page’s intent. One screen of copy is usually enough.',
    },
    {
      type: 'ul',
      items: [
        'Put the products first on mobile; place the intro text either in a short paragraph above the grid or below it (Mangools suggests below), and test which converts better.',
        'Answer two or three buying questions (size, material, price range) and link to the buying guide if you have one.',
        'Make the subheadings say something about the category. Lumar notes that H2 and H3 headings on templates are often set for design, not meaning, and are worth fixing at the template level.',
        'Show enough products. A page with two or three items feels empty to a visitor.',
      ],
    },
    { type: 'h2', text: '4. Control the URLs that filters create' },
    {
      type: 'p',
      text: 'Filters (colour, size, price, brand) can turn one category into thousands of near-duplicate URLs. Google’s [faceted navigation guidance](https://developers.google.com/search/docs/crawling-indexing/crawling-managing-faceted-navigation) separates two cases. If filtered URLs do not need to appear in search, it recommends using robots.txt to disallow crawling of them, and notes that a canonical pointing to the unfiltered page may reduce crawling of the variants over time. If they should be crawled and indexed, use the standard "&" separator and, in its words, "Return an HTTP 404 status code when a filter combination doesn’t return results."',
    },
    {
      type: 'p',
      text: 'A practical rule: a filter combination earns its own indexable page only when people search for it, such as "black leather sofas". Build that as a proper landing page with its own title and intro, linked from the parent. Leave the rest, like "sort by price" and "in stock only", out of search. The [technical SEO overview](/blog/what-is-technical-seo) explains the crawling side in more depth.',
    },
    { type: 'h2', text: '5. Paginate in a way Google can follow' },
    {
      type: 'p',
      text: 'Google’s page on [pagination](https://developers.google.com/search/docs/specialty/ecommerce/pagination-and-incremental-page-loading) says to give each page in a sequence its own URL, such as with a "?page=n" parameter, and not to make page 1 the canonical for the whole sequence. Each page should have its own canonical. Link to the next page with a standard anchor tag, since Google does not click buttons or run script that needs an action, and avoid "#" fragments for page numbers because it ignores text after the "#". The same page says Google no longer uses the rel="next" and rel="prev" link elements, though other search engines may. If you use "load more" or infinite scroll, check that the underlying pages still exist as normal links.',
    },
    { type: 'h2', text: '6. Link categories to each other and to products' },
    {
      type: 'p',
      text: 'Google’s ecommerce page states that linking more often to a page signals that it is more important, and says to link to every product you want indexed or, if that is not possible, to use a sitemap or a Merchant Center feed. For categories:',
    },
    {
      type: 'ul',
      items: [
        'Link parent and child categories to each other, and avoid linking unrelated ones.',
        'Show a breadcrumb trail. Google’s [breadcrumb documentation](https://developers.google.com/search/docs/appearance/structured-data/breadcrumb) says BreadcrumbList markup indicates "the page’s position in the site hierarchy", and the visible trail is itself a set of internal links. Add the markup if your platform does not.',
        'Link to categories from your homepage, menu and guides. A blog post comparing options can link to the categories it describes.',
        'Use descriptive anchors, such as "leather sofas", not "click here" or "view all".',
        'Check that important categories are not reachable only through the sitemap.',
      ],
    },
    { type: 'h2', text: 'A short audit you can run today' },
    {
      type: 'ol',
      items: [
        'List your top ten categories by revenue and write the target keyword next to each. Any duplicates?',
        'Open each in a private window. Does it have its own title, H1 and intro?',
        'Click every filter and note the URL. Which combinations are indexable, and should they be?',
        'Go to page 2 and 3. Do they have their own URLs and canonicals?',
        'Count the links into each category. Which ones have almost none?',
      ],
    },
    {
      type: 'p',
      text: 'If the answers show a pattern across many pages, the fix is usually in the template rather than in single pages. WakeUP’s [SEO service](/services/seo) covers technical SEO audits and fixes, and keyword research in Georgian and English. It is one option among others; the free [marketing audit](/audit) is a way to see where your site stands first.',
    },
  ],
}
