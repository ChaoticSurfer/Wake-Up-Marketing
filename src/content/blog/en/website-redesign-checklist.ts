import type { BlogPost } from '@/lib/blog'

export const post: BlogPost = {
  locale: 'en',
  slug: 'website-redesign-checklist',
  title: 'Website redesign checklist: the signs you need one and what to check before launch',
  metaTitle: 'Website Redesign Checklist',
  description:
    'A website redesign checklist: signs your site needs a rebuild, then staging, 301 redirects, mobile content, speed and tracking to check before you launch.',
  publishedAt: '2026-12-18T12:00:00+04:00',
  updatedAt: '2026-12-18T12:00:00+04:00',
  service: 'websites',
  reviewState: 'llm_reviewed',
  body: [
    {
      type: 'p',
      text: 'A website redesign checklist has two halves. First, decide whether a redesign is the fix: the site fails on mobile, loads slowly, cannot be edited, or no longer matches what you sell. Then protect what already works before launch: list your pages, keep a staging copy out of Google, map every old URL to a new one with a 301 redirect, and test speed and tracking.',
    },
    { type: 'h2', text: 'Signs your site needs a redesign' },
    {
      type: 'p',
      text: 'A site that looks dated is not enough reason by itself. Look for problems that cost you enquiries or make the site hard to run.',
    },
    {
      type: 'ul',
      items: [
        'It is hard to use on a phone: text too small, buttons too close, menus that do not open.',
        'Pages load slowly. Google calls a page "good" on loading when its Largest Contentful Paint is 2.5 seconds or less, measured for most visits (see the thresholds below).',
        'Visitors do not know what to do next: no clear enquiry button, forms that fail, phone numbers that cannot be tapped.',
        'Your offer has changed (new services, new markets, new brand) and the site still describes the old business.',
        'Editing is slow or needs a developer for every change, so the site is never updated.',
        'The site is built on software that is no longer maintained, or security fixes are not being applied.',
        'Traffic arrives but enquiries do not. Check this first with your analytics: sometimes the fault is the offer or the ads, not the design. A [landing page check](/blog/lead-generation-landing-pages) shows whether the page itself is the problem.',
      ],
    },
    {
      type: 'p',
      text: 'If only one page or one section is failing, fix that page. A full redesign is justified when the structure, the platform or the brand has to change as a whole.',
    },
    { type: 'h2', text: 'Before you design: inventory and goals' },
    {
      type: 'ol',
      items: [
        'Write down one goal in numbers, for example enquiries per month from the site. Without it nobody can say whether the new site worked.',
        'Export a list of every current page with its URL, title, monthly visits and enquiries. Search Console, your analytics and a crawl of the site give you this.',
        'Mark each page: keep, improve, merge or remove. Pages that bring visits or links from other sites are the ones to protect.',
        'Save the current titles, meta descriptions and headings of the keepers, so the new design does not lose the wording that earns clicks.',
        'Record today\'s baseline: visits, enquiries, and the pages that rank. You will compare against it after launch.',
      ],
    },
    {
      type: 'p',
      text: 'Google\'s [guidance on moving a site](https://developers.google.com/search/docs/crawling-indexing/site-move-with-url-changes) gives a rule worth applying to redesigns: change only one thing at a time. If you can keep your URLs, domain and hosting the same while the design changes, there is less that can go wrong. Cost belongs to a separate decision; see [how much a website costs](/blog/how-much-does-a-website-cost).',
    },
    { type: 'h2', text: 'Staging: build the new site without it appearing in Google' },
    {
      type: 'p',
      text: 'Build and test on a staging copy at a separate address. Keep it out of search results. Google documents two ways to do that in its [guide to blocking indexing](https://developers.google.com/search/docs/crawling-indexing/block-indexing): a noindex meta tag, or an X-Robots-Tag noindex response header. Google also warns that robots.txt does not prevent indexing, because if robots.txt blocks a page, Googlebot never sees its noindex rule. A password on the staging site is another way to keep people and crawlers out.',
    },
    {
      type: 'p',
      text: 'The step that is easy to forget is the other direction. Google\'s [site move guide](https://developers.google.com/search/docs/crawling-indexing/site-move-with-url-changes) tells you to remove any noindex or robots.txt blocks that were only needed during the migration. A staging setting copied to the live site can keep the new pages out of search.',
    },
    { type: 'h2', text: 'URL mapping and 301 redirects' },
    {
      type: 'p',
      text: 'If any URL changes in the redesign, every old URL needs a destination. The same Google guide calls it important to map your old site\'s URLs to the URLs for the new site, and to use server-side permanent redirects (301 or 308) from each old URL.',
    },
    {
      type: 'ul',
      items: [
        'Build a table with two columns: old URL, new URL. Start with the pages that get traffic or links.',
        'Send each old URL straight to its final page. Google advises keeping chains short, ideally no more than three hops.',
        'Redirect to the page that replaces the old one. Sending many old pages to the home page is the pattern Google advises against.',
        'Test the redirects after launch with a crawler, and watch for "Not found" errors.',
        'Keep redirects in place for as long as possible; Google says generally at least one year.',
        'Update the XML sitemap so it lists only the new URLs, and submit it in Search Console.',
      ],
    },
    { type: 'h2', text: 'Mobile content and speed' },
    {
      type: 'p',
      text: 'Google indexes the mobile version of a page, so a lean mobile layout can cost you rankings. Its [mobile-first indexing guide](https://developers.google.com/search/docs/crawling-indexing/mobile/mobile-sites-mobile-first-indexing) says: "Make sure that your mobile site contains the same content as your desktop site." Compare headings, main text, structured data, titles, meta descriptions and image alt text on both versions. Content inside tabs or accordions is acceptable if it is the same content.',
    },
    {
      type: 'p',
      text: 'For speed, [web.dev](https://web.dev/articles/vitals) lists the Core Web Vitals targets, which a page passes when it meets all three for at least 75% of visits:',
    },
    {
      type: 'table',
      head: ['Metric', 'What it measures', 'Good'],
      rows: [
        ['Largest Contentful Paint (LCP)', 'Loading', '2.5 seconds or less'],
        ['Interaction to Next Paint (INP)', 'Response to taps and clicks', '200 milliseconds or less'],
        ['Cumulative Layout Shift (CLS)', 'Content jumping while loading', '0.1 or less'],
      ],
    },
    {
      type: 'p',
      text: 'Test the new pages on a phone with a mobile connection, not only on a fast office computer. Large images and heavy sliders are the usual causes of a slow new design.',
    },
    { type: 'h2', text: 'Pre-launch and launch checklist' },
    {
      type: 'ol',
      items: [
        'Titles, descriptions and one H1 on every kept page match or improve the old ones.',
        'Every form sends to the right inbox or CRM, and a test enquiry arrives. Phone and email links work.',
        'Analytics and conversion events fire on the new pages, so the baseline carries over.',
        'The 404 page is useful and links to the main sections.',
        'The noindex tag and password on staging are not copied to the live site.',
        'robots.txt on the live site does not block the pages you want indexed.',
        'Search Console is verified for the live site; the new sitemap is submitted.',
        'After launch, check the Page Indexing report and redirects daily for the first two weeks, and compare enquiries to your baseline. Expect the move to the new URLs to take time.',
      ],
    },
    {
      type: 'p',
      text: 'WakeUP builds premium, complex websites and landing pages; see the [website development service](/services/website-development). If you want a second opinion on whether your current site needs a redesign or a fix, the [free marketing audit](/audit) is a starting point, and the [SEO checklist for small business](/blog/seo-checklist-for-small-business) covers what to keep working after launch.',
    },
  ],
}
