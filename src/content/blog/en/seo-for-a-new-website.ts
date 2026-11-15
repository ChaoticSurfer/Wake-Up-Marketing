import type { BlogPost } from '@/lib/blog'

export const post: BlogPost = {
  locale: 'en',
  slug: 'seo-for-a-new-website',
  title: 'SEO for a new website: the order of work and the first 90 days',
  metaTitle: 'SEO for a New Website',
  description:
    'SEO for a new website starts with letting Google index it, then Search Console, keywords and a few strong pages. The order, and what to expect in 90 days.',
  publishedAt: '2027-01-16T18:00:00+04:00',
  updatedAt: '2027-01-16T18:00:00+04:00',
  service: 'seo',
  reviewState: 'llm_reviewed',
  body: [
    {
      type: 'p',
      text: 'SEO for a new website follows a fixed order: make sure Google is allowed to index the site, connect Search Console, confirm your pages are indexed, choose keywords for a small set of pages, and only then build links and more content. A new site has no history, so the first 90 days are about getting found and measured, not about outranking established competitors. Google itself says changes can take hours or several months.',
    },
    { type: 'h2', text: 'Before launch: remove what blocks Google' },
    {
      type: 'p',
      text: 'New sites are usually built on a staging copy that is hidden from search. The mistake to avoid is carrying the hiding over to the live site. Google documents two ways to keep a page out of Search: a [noindex meta tag or an X-Robots-Tag header](https://developers.google.com/search/docs/crawling-indexing/block-indexing). It also warns that if robots.txt blocks a page, the crawler never sees the noindex rule. On launch day, open your live pages and check three things:',
    },
    {
      type: 'ul',
      items: [
        'No noindex tag in the page head or in the HTTP headers.',
        'robots.txt does not disallow the whole site or the folders you want found.',
        'Each page has one working address, and the old staging address redirects or is shut off.',
      ],
    },
    {
      type: 'p',
      text: 'The longer technical background is in [what technical SEO is](/blog/what-is-technical-seo).',
    },
    { type: 'h2', text: 'Week 1: Search Console and a sitemap' },
    {
      type: 'p',
      text: 'Add the site to Google Search Console. Google explains that [ownership verification](https://support.google.com/webmasters/answer/9008080) proves you own the site. A Domain property covers all protocol and subdomain variations, and DNS verification is the only way to verify one. URL-prefix properties can use methods such as an HTML file or tag.',
    },
    {
      type: 'p',
      text: 'Then submit a sitemap. Google’s [starter guide](https://developers.google.com/search/docs/fundamentals/seo-starter-guide) describes a sitemap as a file containing all the URLs on your site that you care about, and says it is not required. For a new site with no links pointing to it, it is still the cheapest way to hand Google your list of pages. The same guide says Google primarily finds pages through links from pages it already crawled, so a site nobody links to depends on the sitemap even more.',
    },
    { type: 'h2', text: 'Weeks 1 to 4: confirm you are indexed' },
    {
      type: 'p',
      text: 'Search Google for site:yourdomain.ge. Google says that if you see results pointing to your site, you are in the index. In Search Console, the URL Inspection tool shows the status of each page and lets an owner or full user request indexing. Do not expect speed: Google states that [crawling can take anywhere from a few days to a few weeks](https://developers.google.com/search/docs/crawling-indexing/ask-google-to-recrawl), that requesting a crawl does not guarantee indexing "instantly or even at all", and that individual URL submissions have a quota, so resubmitting the same URL does not help.',
    },
    {
      type: 'p',
      text: 'If key pages are still missing after a few weeks, work through the Page indexing report rather than resubmitting. [How to do an SEO audit](/blog/how-to-do-seo-audit) shows how to read it.',
    },
    { type: 'h2', text: 'Weeks 2 to 6: choose keywords for few pages' },
    {
      type: 'p',
      text: 'A new site cannot cover everything. Pick the one product or service that brings revenue, find the phrases buyers use, and give each group of phrases one page. The method is in [keyword research for SEO](/blog/keyword-research-for-seo), and long, specific phrases are the realistic first targets, as [long-tail keywords](/blog/long-tail-keywords) explains. Write the page for the person searching: Google lists content that is "helpful, reliable, and people-first" among the qualities that matter, and advises that a good title is unique to the page, clear and concise, and accurately describes it.',
    },
    {
      type: 'p',
      text: 'For a company in Georgia, check the same query in Georgian, English and Russian before deciding which language the page needs. The rest of the on-page work is in the [SEO checklist for small business](/blog/seo-checklist-for-small-business).',
    },
    { type: 'h2', text: 'Months 2 to 3: links and steady content' },
    {
      type: 'p',
      text: 'With the first pages indexed, links start to matter because new sites have none. Start with the ones you can legitimately get: your own social profiles, directory and partner listings, local business sites. [How to build backlinks](/blog/how-to-build-backlinks) covers tactics that fit a company in Georgia. After that, add pages on a schedule you can keep. One useful page a fortnight beats ten pages in a week followed by silence.',
    },
    { type: 'h2', text: 'A realistic first 90 days' },
    {
      type: 'table',
      head: ['When', 'What you do', 'What to expect'],
      rows: [
        ['Launch day', 'Remove noindex and robots blocks, fix addresses', 'Pages can be crawled'],
        ['Week 1', 'Search Console, sitemap, tracking', 'Data starts to appear'],
        ['Weeks 1 to 4', 'Check indexing, fix errors', 'Core pages appear in the index; days to weeks, no guarantee'],
        ['Weeks 2 to 6', 'Keywords, write and refine the first service pages', 'Impressions for specific phrases, few clicks'],
        ['Months 2 to 3', 'First links, regular new pages', 'Early rankings for narrow queries; competitive terms usually later'],
      ],
    },
    {
      type: 'p',
      text: 'Google’s starter guide says some changes "might take effect in a few hours, others could take several months" and suggests waiting a few weeks before judging whether a change had an effect. Judge month three by impressions and indexed pages, not by traffic. The broader plan for a company with an existing site is in [SEO for small business](/blog/seo-for-small-business).',
    },
    { type: 'h2', text: 'When to get help' },
    {
      type: 'p',
      text: 'The launch-day and Search Console steps are cheap to do right and expensive to fix after months of lost indexing, so have a developer check them. For the strategy and the content, WakeUP offers [SEO as a service](/services/seo), alongside freelancers and in-house hires. If you want an outside view of a new site before you invest, request the [free marketing audit](/audit).',
    },
  ],
}
