import type { BlogPost } from '@/lib/blog'

export const post: BlogPost = {
  locale: 'en',
  slug: 'what-is-technical-seo',
  title: 'What is technical SEO? A plain guide for business owners',
  metaTitle: 'What Is Technical SEO?',
  description:
    'What is technical SEO? A plain explanation of crawling, indexing, canonicals, redirects and speed, with the questions to ask your developer.',
  publishedAt: '2026-12-28T09:00:00+04:00',
  updatedAt: '2026-12-28T09:00:00+04:00',
  service: 'seo',
  reviewState: 'llm_reviewed',
  body: [
    {
      type: 'p',
      text: 'Technical SEO is the work that makes sure search engines can find, read and store your pages, and that each page is available at one clear address. It covers crawling, indexing, canonical URLs, redirects and page speed. It does not decide what you write, but a page with a technical fault may never be shown, however good it is.',
    },
    { type: 'h2', text: 'Crawling, indexing and serving' },
    {
      type: 'p',
      text: 'Google says its Search ["works in three stages, and not all pages make it through each stage"](https://developers.google.com/search/docs/fundamentals/how-search-works). The first is crawling: automated programs download text, images and videos from pages they found. The second is indexing: Google analyses what is on the page and stores it in its index. The third is serving: when someone searches, Google returns what is relevant.',
    },
    {
      type: 'p',
      text: 'A fault at any stage ends the journey. If a page cannot be crawled, it cannot be indexed. If it is not indexed, it cannot appear in results. And the same page also says that "indexing isn\'t guaranteed; not every page that Google processes will be indexed." So technical SEO is mostly about removing the reasons a good page would drop out.',
    },
    {
      type: 'p',
      text: 'Rendering is part of this too. Google\'s JavaScript guidance says that [server-side or pre-rendering is a great idea](https://developers.google.com/search/docs/crawling-indexing/javascript/javascript-seo-basics) because it makes a site faster for users and crawlers, and not all bots can run JavaScript. If your site shows content only after scripts run, ask your developer how the page looks to a crawler.',
    },
    { type: 'h2', text: 'Canonical URLs and duplicate pages' },
    {
      type: 'p',
      text: 'The same page can often be reached at several addresses: with and without "www", with a tracking parameter, or with a trailing slash. The canonical URL is the one address you want shown. If you do not choose, Google picks the version it considers the best one to show to users, and it may not be the one you want.',
    },
    {
      type: 'p',
      text: 'Google\'s [guidance on duplicate URLs](https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls) ranks the ways to signal your choice:',
    },
    {
      type: 'table',
      head: ['Method', 'Strength Google describes', 'What it means in practice'],
      rows: [
        ['Redirect', 'A strong signal', 'Old duplicate addresses send visitors and crawlers to the preferred address'],
        ['rel="canonical" tag', 'A strong signal', 'Each duplicate page names the preferred address in its head, and the preferred page names itself'],
        ['Sitemap', 'A weak signal', 'List only the preferred addresses'],
      ],
    },
    {
      type: 'p',
      text: 'The same page adds that the methods should all name the same canonical URL, because conflicting signals make the result harder to predict. A common fault is a sitemap listing one version while the canonical tag names another.',
    },
    { type: 'h2', text: 'Redirects' },
    {
      type: 'p',
      text: 'A redirect sends a visitor from one address to another. After a redesign or a change of address, redirects keep old links and old rankings from leading to an error page. Google separates two kinds in its [redirect guidance](https://developers.google.com/search/docs/crawling-indexing/301-redirects):',
    },
    {
      type: 'ul',
      items: [
        'Permanent redirects (301 or 308) tell Google the new address should be the one shown in results. Google advises using them when you are sure the redirect will not be reverted.',
        'Temporary redirects (302, 303 or 307) leave the original address as the one shown. Use them for changes that may be undone, such as a short promotion page.',
        'JavaScript redirects are a last resort. Google says it may never see them if rendering fails.',
      ],
    },
    {
      type: 'p',
      text: 'The usual mistakes are using a temporary redirect for a permanent move, and forgetting redirects entirely when the website is rebuilt. Both are cheap to prevent if someone checks before launch.',
    },
    { type: 'h2', text: 'noindex and robots.txt' },
    {
      type: 'p',
      text: 'Two instructions control what search engines may do, and they are often confused. A robots.txt file tells crawlers which parts of the site they should not fetch. A noindex tag tells search engines not to show a page in results. Google\'s [documentation on blocking indexing](https://developers.google.com/search/docs/crawling-indexing/block-indexing) warns that for noindex to work, the page must not be blocked by robots.txt; otherwise Googlebot never reads the noindex, and the page can still appear in results, for example when other pages link to it.',
    },
    {
      type: 'p',
      text: 'The risk for a business runs the other way, too. A noindex tag left on a page after testing, or a robots.txt that blocks the whole site, can remove pages from Google entirely. It is one of the first things to check after a site launch or redesign.',
    },
    { type: 'h2', text: 'Speed' },
    {
      type: 'p',
      text: 'Speed is the part of technical SEO owners can feel. Google\'s [Core Web Vitals guidance](https://developers.google.com/search/docs/appearance/core-web-vitals) sets three targets: the largest content should load within 2.5 seconds, interaction response should be under 200 milliseconds, and layout shift should be under 0.1. Google says it highly recommends good Core Web Vitals for success with Search, though it does not state a specific ranking weight for them.',
    },
    {
      type: 'p',
      text: 'Treat speed as a user problem first. A slow page loses visitors before search is involved. The fixes, from images to scripts to hosting, are in [how to improve website speed](/blog/how-to-improve-website-speed).',
    },
    { type: 'h2', text: 'What to ask your developer to check' },
    {
      type: 'ol',
      items: [
        'Is every important page reachable by a normal link, and is anything we want found blocked in robots.txt?',
        'Which pages carry a noindex tag, and is each one meant to?',
        'Does each page have one canonical address, and do the redirects, canonical tags and sitemap all agree?',
        'Do all old addresses redirect permanently to the right new page, with no redirect to an error page?',
        'Do deleted pages return a real "not found" response rather than a blank page that looks fine?',
        'How does a page look to a crawler that does not run scripts, and what do the Core Web Vitals show in Search Console?',
        'Who checks all this again after each redesign or big change?',
      ],
    },
    {
      type: 'p',
      text: 'Ask for answers you can verify, such as a list of the pages and what each returned, not a general "it\'s fine". For the wider set of checks on content, local search and measurement, use the [SEO checklist for small businesses](/blog/seo-checklist-for-small-business), and see [what SEO services include](/blog/what-do-seo-services-include) to know what work to expect from a provider. WakeUP offers [SEO as a service](/services/seo), and a [free marketing audit](/audit) is a way to have your site looked at first.',
    },
  ],
}
