import type { BlogPost } from '@/lib/blog'

export const post: BlogPost = {
  locale: 'en',
  slug: 'website-not-showing-on-google',
  title: 'Why is my website not showing up on Google? Six checks, in the order to run them',
  metaTitle: 'Website Not Showing Up on Google',
  description:
    'Why is my website not showing up on Google? Check whether it is indexed, blocked, new, filtered or just ranking low - six checks, each with its fix.',
  publishedAt: '2027-02-08T12:00:00+04:00',
  updatedAt: '2027-02-08T12:00:00+04:00',
  service: 'seo',
  reviewState: 'llm_reviewed',
  body: [
    {
      type: 'p',
      text: 'If your website is not showing up on Google, the cause is usually one of these: something blocks it (a noindex tag or robots.txt), it is new and Google has not found it, Google found it but chose not to index it, a manual action applies, or it is indexed but ranks too low to be seen. Check them in that order, starting by confirming whether the page is indexed at all. The first five are technical checks you can run in an afternoon; the last takes sustained work.',
    },
    { type: 'h2', text: 'Check 1: is the page indexed at all?' },
    {
      type: 'p',
      text: 'Search Google for site:yourdomain.com, replacing the domain with your own. Google\'s guide to getting on Google says to [search for your site with a query like this](https://developers.google.com/search/docs/fundamentals/get-on-google), though it adds that the search may not list every indexed URL. For one specific page, open Search Console, paste the address into the URL Inspection tool, and read the verdict. If you have not set up Search Console, the [Search Console guide](/blog/google-search-console-guide) walks through it.',
    },
    {
      type: 'ul',
      items: [
        'Your pages appear in site: results: the site is indexed. Go to check 6, because your problem is ranking, not indexing.',
        'Only the home page appears: other pages may be hard to reach or blocked. Continue with checks 2 and 4.',
        'Nothing appears: continue with checks 2 and 3.',
      ],
    },
    { type: 'h2', text: 'Check 2: is something blocking Google?' },
    {
      type: 'p',
      text: 'This is worth checking first on a site that was just launched or rebuilt, because a setting that hid a test copy from search can be carried over to the live site. There are two mechanisms.',
    },
    {
      type: 'ul',
      items: [
        'A noindex tag or header. Google\'s documentation says that once Googlebot crawls the page and reads a [noindex meta tag or header](https://developers.google.com/search/docs/crawling-indexing/block-indexing), it removes the page from Search results, even if other sites link to it. View the page source and search for noindex, or read the verdict in URL Inspection.',
        'A robots.txt rule. Open yourdomain.com/robots.txt. A line such as Disallow: / blocks the whole site from being crawled.',
      ],
    },
    {
      type: 'p',
      text: 'Fix the noindex by removing it from the page or, if a plugin or CMS setting adds it, by switching that setting off. One trap: if robots.txt blocks a page that also carries noindex, the crawler cannot read the tag, so Google says it will never see the noindex rule and the page can still appear in results. To remove a block, change robots.txt so Google can crawl the page. For the difference between the two, see [what is technical SEO](/blog/what-is-technical-seo).',
    },
    { type: 'h2', text: 'Check 3: is the site new or undiscovered?' },
    {
      type: 'p',
      text: 'Google\'s guide notes that although it crawls billions of pages, [it is inevitable that some sites will be missed](https://developers.google.com/search/docs/fundamentals/get-on-google), and small sites are especially likely to be overlooked. A brand-new site with no links from other sites may simply not have been found.',
    },
    {
      type: 'ol',
      items: [
        'Verify the site in Search Console.',
        'Submit your sitemap. Google\'s [sitemap overview](https://developers.google.com/search/docs/crawling-indexing/sitemaps/overview) lists new sites with few external links among the cases where a sitemap helps, while noting it does not guarantee that every URL is crawled and indexed.',
        'Use URL Inspection to request indexing for your most important pages (home, main service pages). Google says this is subject to a quota and that requesting the same URL repeatedly will not make it crawled any faster.',
        'Link to the new site from places you control, such as your Facebook page, Google Business Profile and email signature.',
        'Wait. Google says crawling can take [anywhere from a few days to a few weeks](https://developers.google.com/search/docs/crawling-indexing/ask-google-to-recrawl).',
      ],
    },
    {
      type: 'p',
      text: 'The first-90-days plan for a new site is in [SEO for a new website](/blog/seo-for-a-new-website).',
    },
    { type: 'h2', text: 'Check 4: found but not indexed' },
    {
      type: 'p',
      text: 'The Page indexing report in Search Console lists why pages are not indexed. [Google\'s definitions](https://support.google.com/webmasters/answer/7440203) of the statuses you are most likely to see:',
    },
    {
      type: 'table',
      head: ['Status', 'What it means', 'What to do'],
      rows: [
        ['Crawled - currently not indexed', 'Google crawled the page but did not index it; Google says this is not necessarily a problem because it does not index every page', 'For an important page, improve it (unique content, clear purpose, internal links to it) and inspect it for issues'],
        ['Discovered - currently not indexed', 'Google found the URL but has not crawled it yet; the crawl was likely postponed to avoid overloading the site', 'Make sure the server is fast and stable; link to the page from important pages'],
        ['Blocked by robots.txt', 'Your robots.txt blocks the page', 'Remove the block if you want it indexed'],
        ['noindex tag', 'The page has a noindex tag, which prevents Google from indexing it', 'Remove it if you want the page indexed'],
        ['Duplicate without user-selected canonical', 'The page duplicates another and Google picked a different one as canonical', 'Set the canonical to the page you prefer, or merge the pages'],
        ['Page with redirect', 'The URL redirects elsewhere, so it is not indexed itself', 'Expected if the redirect is intended; check the target is indexed'],
      ],
    },
    {
      type: 'p',
      text: 'Two patterns deserve attention. Many pages in "Crawled - currently not indexed" can point to thin or repetitive pages, so ask whether each page gives a searcher something the others do not. And a service page that is only reachable through a search box or a script, with no ordinary link to it, may never be found, because Google discovers URLs by following links.',
    },
    { type: 'h2', text: 'Check 5: is there a manual action?' },
    {
      type: 'p',
      text: 'Rare, but severe. In Search Console, the Manual Actions report shows whether a human reviewer at Google has decided that pages on the site are not compliant with Google\'s spam policies. Google says most issues reported there result in [pages or sites being ranked lower or omitted from search results](https://support.google.com/webmasters/answer/9044175). If the report lists one, fix every affected page, then select Request Review and describe what you fixed; reviews can take several days or weeks, and you should not resubmit while one is pending. If the report is empty, this is not your problem.',
    },
    { type: 'h2', text: 'Check 6: indexed, but ranking too low to be seen' },
    {
      type: 'p',
      text: 'If the page is indexed and URL Inspection shows no problem, it is not "missing": it is competing. Meeting Google\'s requirements [does not mean Google will crawl, index or serve](https://developers.google.com/search/docs/essentials) a page, and ranking depends on how well the page answers the search against other pages.',
    },
    {
      type: 'ul',
      items: [
        'Search the exact words a customer would type, in Georgian and in English if both apply, and look at who ranks. Are they the same type of page as yours?',
        'In the Search Console Performance report, check whether the page gets impressions. Impressions with few clicks point to the title and description; no impressions point to relevance or competition.',
        'Check you are not looking for your brand name only: your own name usually ranks first, but a service search takes more.',
        'Give each target search its own page with one clear purpose, and link to it from your menu and related pages.',
      ],
    },
    {
      type: 'p',
      text: 'Ranking is where the time goes. [How long SEO takes](/blog/how-long-does-seo-take) sets realistic expectations, and the [SEO audit guide](/blog/how-to-do-seo-audit) gives a structured way to find what holds a site back.',
    },
    { type: 'h2', text: 'When to ask for help' },
    {
      type: 'p',
      text: 'Ask for help if checks 1 to 4 show a pattern you cannot explain, if a rebuilt site lost its pages, or if the site is indexed but never appears for the searches that matter. WakeUP\'s [SEO service](/services/seo) includes a technical audit and fixes plus keyword research in Georgian and English, though it is one option among several; a freelancer or an in-house specialist can also run these checks. The [free audit](/audit) is a way to get a first look at how your website performs.',
    },
  ],
}
