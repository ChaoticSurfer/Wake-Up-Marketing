import type { BlogPost } from '@/lib/blog'

export const post: BlogPost = {
  locale: 'en',
  slug: 'website-migration-seo',
  title: 'Website migration SEO checklist: from baseline to day 90',
  metaTitle: 'Website Migration SEO Checklist',
  description:
    'Website migration SEO checklist for a new platform or domain: capture a baseline, test before launch, redirect and monitor for 90 days to protect traffic.',
  publishedAt: '2027-02-06T12:00:00+04:00',
  updatedAt: '2027-02-06T12:00:00+04:00',
  service: 'seo',
  reviewState: 'llm_reviewed',
  body: [
    {
      type: 'p',
      text: 'A website migration SEO checklist has four stages: record a baseline of your traffic, rankings and URLs before anything changes; test the new site and the redirects before launch; switch carefully on launch day; and watch Search Console, logs and enquiries for about 90 days. Do these in order and change only one thing at a time, and you give a move to a new platform or domain the best chance of limiting any loss of search traffic.',
    },
    { type: 'h2', text: 'Know which kind of move you are making' },
    {
      type: 'p',
      text: 'The work depends on what changes. Google\'s [guide to site moves](https://developers.google.com/search/docs/crawling-indexing/site-move-with-url-changes) names three kinds that change URLs: HTTP to HTTPS, a new domain name, and new URL paths. It also warns that with any significant change you may see ranking fluctuations while Google recrawls and reindexes the site, and it advises you to "change only one thing at a time". So do not combine a new platform, a new domain and a new design in one weekend if you can avoid it.',
    },
    {
      type: 'table',
      head: ['Type of move', 'URLs change?', 'What Google says to do'],
      rows: [
        [
          'New hosting or CDN, same site',
          'No',
          'Follow the [no-URL-change guide](https://developers.google.com/search/docs/crawling-indexing/site-move-no-url-changes): test the new server, lower the DNS TTL at least a week ahead, remove temporary blocks, switch DNS, then monitor. No redirect project is needed.',
        ],
        [
          'New platform or CMS, URLs kept identical',
          'No',
          'Treat it like the hosting case for DNS, but crawl old and new to prove every URL, title and canonical matches before you switch.',
        ],
        [
          'New platform with new URL structure, or HTTPS or www change',
          'Yes',
          'Map every old URL to a new one, use permanent server-side redirects, update canonicals and internal links, resubmit the sitemap.',
        ],
        [
          'New domain or subdomain',
          'Yes',
          'All of the above, plus the [Change of Address tool](https://support.google.com/webmasters/answer/9370220) in Search Console. Google says it is not for hosting or CDN changes, or for path-only changes.',
        ],
      ],
    },
    {
      type: 'p',
      text: 'Redesigns often become URL moves without anyone saying so. If yours is one, read the [website redesign checklist](/blog/website-redesign-checklist) for staging and redirect mapping in detail. This post is the timeline around it.',
    },
    { type: 'h2', text: 'Before anything changes: capture a baseline' },
    {
      type: 'p',
      text: 'After the move you will need to answer "did we lose traffic, and where?" You can only answer it if you saved the before picture. Do this at least two to three weeks before launch, while the old site is still live.',
    },
    {
      type: 'ul',
      items: [
        'A full crawl of the old site: every URL, status code, title, H1, canonical, and internal links count. This is also your list of URLs to redirect. Google suggests building that list from sitemaps, analytics, server logs and the CMS, and including images, videos, JavaScript and CSS files.',
        'Search Console exports: clicks, impressions and position by page and by query, plus the Page indexing report. Export them; do not rely on being able to look them up later. The [Search Console guide](/blog/google-search-console-guide) covers the reports.',
        'Analytics: organic sessions and, more important, enquiries, calls and orders by landing page, so the comparison is in leads and not only visits.',
        'Your top 20 to 50 pages by clicks and by enquiries, marked as protected. Anything on this list gets checked by hand after launch.',
        'A list of sites that link to you, because those links point at old URLs. Google also recommends keeping that list so you can ask sites to update their links.',
        'Rankings for the 20 or so queries that matter commercially, in Georgian and English if you target both.',
      ],
    },
    { type: 'h2', text: 'Two to four weeks before launch' },
    {
      type: 'ol',
      items: [
        'Verify both the old and new properties in Search Console, including all variants, and check the verification method will survive the move. For a new domain you need to own both properties in the same Google account to use Change of Address.',
        'Build the redirect map: one old URL to the closest equivalent new URL. Google advises against sending many old URLs to one unrelated page such as the new home page, and against long redirect chains.',
        'Test on a staging copy that is kept out of search. Crawl it and compare with the baseline crawl: missing pages, changed titles and H1s, lost canonicals, broken internal links, missing structured data, and noindex tags.',
        'Return 404 or 410 for old content you are deliberately not moving, and check the 404 page itself works for visitors.',
        'Check that your firewall or bot protection does not block Googlebot, and that the new server can take the extra crawling. For a host change, lower the DNS TTL at least a week ahead, as Google advises.',
        'Fix page speed and rendering on the new templates before launch, not after. The [technical SEO overview](/blog/what-is-technical-seo) lists what to test.',
        'Choose a launch day that is not your busiest sales day, with the person who can change DNS and redirects available the whole day.',
      ],
    },
    { type: 'h2', text: 'Launch day' },
    {
      type: 'ol',
      items: [
        'Remove every noindex tag and robots.txt block that was only needed during the build. Google names this step explicitly, because a staging setting copied to the live site can keep a new site out of search. Confirm the live robots.txt allows what you want crawled.',
        'Switch DNS or turn on the redirects, then test them straight away on your protected pages and a sample of the rest, using the URL Inspection tool for single URLs and a crawler or script for bulk checks.',
        'Check that canonical tags and the sitemap use the new URLs. Submit the new sitemap in Search Console and remove the old one.',
        'For a domain or subdomain change, submit Change of Address for the old property. Google\'s page requires that you first redirect the old homepage to the new one.',
        'Confirm analytics and conversion tracking fire on the new site. A move that "lost" half the leads is sometimes a form that stopped sending.',
        'Update what you control: Google Business Profile website link, social profiles, email signatures, ad destination URLs and campaign links.',
      ],
    },
    { type: 'h2', text: 'Days 1 to 14: daily checks' },
    {
      type: 'p',
      text: 'Google\'s own advice is to [monitor traffic on both the new and the old site](https://developers.google.com/search/docs/crawling-indexing/site-move-with-url-changes): ideally the old site\'s traffic goes down while the new site\'s goes up, and you should keep an eye on server access and error logs. In practice, this means a short routine every day for two weeks:',
    },
    {
      type: 'ul',
      items: [
        'Search Console Page indexing: are new URLs being discovered and indexed, and are old ones dropping out? Look for "Not found", "Blocked by robots.txt" and "Excluded by noindex" rising.',
        'Crawl stats and server logs: Googlebot should be requesting the new URLs and following your redirects. For a host change, Google notes the crawl rate may dip right after launch and then rise over several days if the new server performs well.',
        'A fresh crawl of the live site against your redirect map, to catch chains, loops and redirects to the wrong page.',
        'The protected pages list: open each one, check it loads, shows the right content and is indexable.',
        'Enquiries per day against your baseline. Traffic can wobble, but if forms or calls drop sharply on day one, look for a technical cause before blaming Google.',
      ],
    },
    { type: 'h2', text: 'Weeks 3 to 12: compare and fix' },
    {
      type: 'p',
      text: 'Google says that for a small to medium-sized website it can take a few weeks for most pages to move, and that larger sites take longer, because Googlebot has to visit every old and new URL. So the second phase is a weekly comparison, not daily panic.',
    },
    {
      type: 'table',
      head: ['When', 'Check', 'Action if it looks wrong'],
      rows: [
        ['Week 3 to 4', 'Clicks and impressions by page against the baseline; indexed page count against the old count', 'List pages that lost the most, check redirect, canonical, content and internal links for each'],
        ['Week 5 to 8', 'Rankings for your 20 commercial queries; organic enquiries against baseline', 'Restore content that was cut but ranked; fix titles and headings that changed without reason'],
        ['Week 9 to 12', 'Backlinks still pointing at old URLs; any old URLs still receiving search traffic', 'Ask the best linking sites to update links; keep redirects for those URLs'],
        ['Month 3 onward', 'A normal monthly SEO report, with the baseline as the reference line', 'Treat the migration as closed once the main pages are back at or above baseline'],
      ],
    },
    {
      type: 'p',
      text: 'Do not remove redirects when the dashboard looks calm. Google\'s site move guide says to keep redirects for [at least one year](https://developers.google.com/search/docs/crawling-indexing/site-move-with-url-changes), and its Change of Address page says to maintain them for at least 180 days, and longer if you still see traffic to them from Google Search.',
    },
    { type: 'h2', text: 'A drop: normal, or time to roll back?' },
    {
      type: 'p',
      text: 'Some fluctuation is expected, as Google says. What is not normal is a steady fall with a cause you can name. These are common causes, in the order to check them:',
    },
    {
      type: 'ul',
      items: [
        'The site is blocked: noindex or robots.txt left over from staging, or Googlebot blocked by a firewall.',
        'Redirects are missing, chained, or send many pages to the home page.',
        'Content or titles were thinned during the move, so the new page no longer answers the query the old one ranked for.',
        'The new pages are slower or render content only after JavaScript, and the tested template does not behave the same on live data.',
        'Tracking broke, so the "drop" is a measurement problem.',
      ],
    },
    {
      type: 'p',
      text: 'Decide in advance who can call a rollback and what triggers it, such as key pages returning errors or indexing blocked. Rolling back a DNS change early is much cheaper than a month of lost enquiries, and keeping the old host running until the logs show it receives no traffic, which Google advises for host changes, keeps that option open.',
    },
    { type: 'h2', text: 'When to get help' },
    {
      type: 'p',
      text: 'A small brochure site with unchanged URLs can be moved by a careful in-house team following this list. Get an SEO specialist involved if you are changing domain, merging several sites, have thousands of URLs, rely on organic search for most enquiries, or run Georgian and English versions that must keep their language pairs. A [website audit](/blog/how-to-do-seo-audit) before the move is useful whoever does the work. WakeUP\'s [SEO service](/services/seo) includes a technical audit and fixes, and the [free audit](/audit) is the way to ask for a first look at your current site.',
    },
  ],
}
