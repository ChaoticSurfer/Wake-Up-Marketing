import type { BlogPost } from '@/lib/blog'

export const post: BlogPost = {
  locale: 'en',
  slug: 'internal-linking-seo',
  title: 'Internal linking for SEO: practical rules for a small site',
  metaTitle: 'Internal Linking SEO',
  description:
    'Internal linking SEO for a small site: build hubs, write descriptive anchor text, find orphan pages and decide where blog posts link. Practical rules.',
  publishedAt: '2027-02-11T15:00:00+04:00',
  updatedAt: '2027-02-11T15:00:00+04:00',
  service: 'seo',
  reviewState: 'llm_reviewed',
  body: [
    {
      type: 'p',
      text: 'Internal linking for SEO means linking your own pages to each other so that people and search engines can find them and understand how they relate. On a small site, five rules cover most of it: plan hubs around your services, use descriptive anchor text, give every page at least one link in, link from blog posts to the pages that earn enquiries, and use normal links that Google can crawl.',
    },
    { type: 'h2', text: 'Why internal links matter' },
    {
      type: 'p',
      text: 'Google\'s [SEO starter guide](https://developers.google.com/search/docs/fundamentals/seo-starter-guide) says: "Google primarily finds pages through links from other pages it already crawled." A page that no other page links to is hard to discover and gives visitors no path to it. Google\'s [guide to links](https://developers.google.com/search/docs/crawling-indexing/links-crawlable) adds that internal links "can help both people and Google make sense of your site more easily".',
    },
    {
      type: 'p',
      text: 'So the job is simple to state: every page you want found should be reachable by a sensible click path, and the links should say what is on the other side.',
    },
    { type: 'h2', text: 'Step 1: Draw your hubs' },
    {
      type: 'p',
      text: 'A hub is a page that sits at the centre of one topic and links out to the detailed pages about it. For a company with a handful of services, the hubs are usually the service pages. Each service page links to the guides that support it, and each guide links back.',
    },
    {
      type: 'ul',
      items: [
        'List your 3 to 6 money pages: the service or product pages where an enquiry happens.',
        'Under each, list the articles, case pages or FAQs that explain the same topic.',
        'Link both ways: hub to supporting pages, and supporting pages back to the hub.',
        'Link between supporting pages only where a reader would genuinely want the next one.',
      ],
    },
    {
      type: 'p',
      text: 'The result is a small tree you can keep in a one-page spreadsheet. A blog that covers many services needs one hub per service, not one big pile of posts; the same idea shapes [a content strategy for a small business](/blog/content-strategy-for-small-business).',
    },
    { type: 'h2', text: 'Step 2: Write anchor text that describes the target' },
    {
      type: 'p',
      text: 'Google\'s [guidance on links](https://developers.google.com/search/docs/crawling-indexing/links-crawlable) says: "Good anchor text is descriptive, reasonably concise, and relevant to the page that it\'s on and to the page it links to." The [starter guide](https://developers.google.com/search/docs/fundamentals/seo-starter-guide) explains why: anchor text "tells users and Google something about the page you\'re linking to."',
    },
    {
      type: 'table',
      head: ['Weak anchor', 'Better anchor', 'Why'],
      rows: [
        ['click here', 'our SEO services', 'Says what the page is'],
        ['read more', 'how to do an SEO audit', 'Matches the target\'s topic'],
        ['this article', 'checklist for small-business SEO', 'Useful to a reader scanning the page'],
        ['https://example.com/page', 'the free marketing audit', 'A bare address tells no one anything'],
      ],
    },
    {
      type: 'p',
      text: 'Vary the wording naturally. If every link to a page uses the same exact phrase, the text starts to read like it was written for a robot. Write the sentence for a person and link the words that name the destination.',
    },
    { type: 'h2', text: 'Step 3: Use links Google can follow' },
    {
      type: 'p',
      text: 'The same Google guide states: "Generally, Google can only crawl your link if it\'s an <a> HTML element". A button or menu item that runs a script to change the page, without a real link behind it, may never be followed. If your site is built with a framework, check that navigation and in-text links render as ordinary links with an address. The basics of crawling and indexing are covered in [what technical SEO is](/blog/what-is-technical-seo).',
    },
    { type: 'h2', text: 'Step 4: Find and fix orphan pages' },
    {
      type: 'p',
      text: 'An orphan page is one with no internal links pointing to it. Common causes are old campaign pages, posts that were published but never added to a category, and pages left out of the menu.',
    },
    {
      type: 'ol',
      items: [
        'Export all your page addresses from your sitemap or CMS.',
        'Crawl the site from the home page with any crawler tool that lists the pages it finds by following links.',
        'Compare the two lists. Pages in the sitemap but missing from the crawl are orphans.',
        'For each orphan, decide: link it from a relevant hub, merge it into a better page, or remove it (and redirect if it had visits).',
      ],
    },
    {
      type: 'p',
      text: '[Search Console](/blog/google-search-console-guide) shows which pages Google has found and indexed, a useful cross-check against your crawl. The wider routine is in the [SEO audit guide](/blog/how-to-do-seo-audit).',
    },
    { type: 'h2', text: 'Step 5: Decide where blog posts should link' },
    {
      type: 'p',
      text: 'Blog posts attract readers at the research stage. Links are how those readers move toward the page where a decision can be made.',
    },
    {
      type: 'ul',
      items: [
        'Every post links to one relevant service page where it fits the sentence, not stuffed in a footer.',
        'Every post links to one or two sibling posts on the same topic, so readers can go deeper.',
        'Older posts get a link to newer ones on the same topic when you publish them. Without that, new posts stay thinly linked.',
        'Put the most important links early in the text, where readers still are, and avoid adding twenty links to a short post.',
        'Keep the call to action separate: one clear next step such as a free audit, not a link every paragraph.',
      ],
    },
    {
      type: 'p',
      text: 'If you are starting a blog, [how to start a business blog](/blog/how-to-start-a-business-blog) covers planning it, and the [small-business SEO checklist](/blog/seo-checklist-for-small-business) shows where internal links fit in the wider routine.',
    },
    { type: 'h2', text: 'A short monthly routine' },
    {
      type: 'ol',
      items: [
        'After each new post, add links from two older, related pages to it.',
        'Once a month, check the sitemap against a crawl for orphans.',
        'Once a quarter, review the five most important service pages: do they link to the supporting guides, and do those guides link back?',
        'After any redesign or URL change, fix internal links to point to final addresses instead of relying on redirects.',
      ],
    },
    {
      type: 'p',
      text: 'WakeUP offers [SEO as a service](/services/seo), including technical fixes and content, and one option is to have the link structure reviewed as part of that work. A neutral first step is the [free marketing audit](/audit), which reviews how a visitor gets from your website to an enquiry.',
    },
  ],
}
