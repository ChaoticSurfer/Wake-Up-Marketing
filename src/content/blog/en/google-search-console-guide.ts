import type { BlogPost } from '@/lib/blog'

export const post: BlogPost = {
  locale: 'en',
  slug: 'google-search-console-guide',
  title: 'How to Use Google Search Console: Setup and the Four Reports to Check Monthly',
  metaTitle: 'How to Use Google Search Console',
  description:
    'How to use Google Search Console: set it up and verify your site, then check four reports each month and know what to do when something looks wrong.',
  publishedAt: '2027-01-18T15:00:00+04:00',
  updatedAt: '2027-01-18T15:00:00+04:00',
  service: 'seo',
  reviewState: 'llm_reviewed',
  body: [
    {
      type: 'p',
      text: 'How to use Google Search Console: add your website as a property, verify that you own it, and then check four reports once a month: Performance (what people searched and clicked), Page indexing (which pages Google can show), Core Web Vitals (how fast and stable pages feel) and Manual actions (penalties from a human reviewer). The tool is free, and it is where Google reports directly on how your site performs in Search.',
    },
    { type: 'h2', text: 'What Search Console is for' },
    {
      type: 'p',
      text: 'Search Console shows how your site appears in Google Search. It is not the same as Google Analytics: Analytics counts what visitors do on your site, while Search Console reports what happens before they arrive - searches, impressions, clicks and any problems that stop pages from showing. If you have not set up Analytics yet, see [GA4 for small business](/blog/ga4-for-small-business). Use both.',
    },
    { type: 'h2', text: 'Set up and verify your site' },
    {
      type: 'p',
      text: 'Google\'s help page on verification lists several ways to prove ownership: [an HTML file upload, an HTML tag, your Google Analytics tracking code, Google Tag Manager, a Google Sites or Blogger account, or your domain name provider](https://support.google.com/webmasters/answer/9008080). Which one you can use depends on the type of property you add.',
    },
    {
      type: 'table',
      head: ['Property type', 'What it covers', 'How you can verify it'],
      rows: [
        ['Domain property', 'All protocol (http and https) and subdomain variations of the domain', 'Only through your domain name provider (a DNS record)'],
        ['URL-prefix property', 'Only the exact address you enter, such as https://www.example.ge/', 'HTML file, HTML tag, Google Analytics, Google Tag Manager, or DNS'],
      ],
    },
    {
      type: 'p',
      text: 'Per Google, the domain name provider method is the only way to verify a Domain property, while the other methods work for URL-prefix properties. If you can add a DNS record, or ask the person who manages your domain to, choose the Domain property: it keeps www, non-www and any subdomain in one view. Otherwise a URL-prefix property verified with the HTML tag is the quickest. Keep the verification in place afterwards: Google says that if it can no longer confirm the token, your permissions expire after a grace period.',
    },
    {
      type: 'ol',
      items: [
        'Sign in to Search Console with a Google account that your company controls, not a freelancer\'s personal one.',
        'Add the property and verify it with the method above.',
        'Submit your sitemap in the Sitemaps section. Google\'s help page notes that you cannot upload a sitemap to Google; submitting tells it where the file is, and it gives [no guarantee that a URL discovered in a sitemap will be crawled or indexed](https://support.google.com/webmasters/answer/7451001).',
        'Add the second owner or your SEO partner as a user so access does not depend on one person.',
        'Give it time: reports fill gradually, so do not judge the first days.',
      ],
    },
    { type: 'h2', text: 'Report 1: Performance' },
    {
      type: 'p',
      text: 'This is the report you will open most. Google defines its main numbers in plain terms: clicks are [the number of times a user clicked your site from Google Search results](https://support.google.com/webmasters/answer/7576553), impressions are how many times your site appeared in Search results, CTR is clicks divided by impressions, and average position is the position of the topmost result from your site. The default view covers the past three months, and you can change the date range and the search type (web, image, video or news).',
    },
    {
      type: 'ul',
      items: [
        'Open the Queries tab and sort by impressions. Queries with many impressions and a low CTR are chances to improve the page title and description.',
        'Open the Pages tab to see which pages bring clicks. Compare this month with the previous period to catch a page that has dropped.',
        'Add a filter for your brand name to separate people who already know you from people who found you through a topic.',
        'Check clicks by country and device if you serve a specific market.',
      ],
    },
    {
      type: 'p',
      text: 'If clicks fall: first check whether impressions fell too. If impressions are flat but CTR dropped, the issue is your result\'s appearance or a competitor above you. If impressions fell, check the Page indexing report and recent changes to the site (a redesign, new URLs, a removed page). Do not judge on a few days: seasonality in your market can move numbers more than your work does.',
    },
    { type: 'h2', text: 'Report 2: Page indexing' },
    {
      type: 'p',
      text: 'A page that is not indexed cannot appear in results. Google\'s report on page indexing sorts URLs into two groups: [indexed, and not indexed](https://support.google.com/webmasters/answer/7440203) - either because of an indexing error or for a legitimate reason. Google itself says that "Not indexed is not necessarily bad", so read the reason for each group before you act.',
    },
    {
      type: 'ul',
      items: [
        'An important page, such as a service page, is in the not-indexed list: use the URL Inspection tool to test that page, check it is not blocked by robots.txt or a noindex tag, and make sure it links from other pages.',
        'Pages you do not want in search (login pages, internal search results, thank-you pages) are not indexed: this is fine.',
        'A reason has many URLs and a Source of "Website": this is something you can usually fix on the site, per Google.',
        'After you fix every instance of an issue, select "Validate fix" on its details page and do not press it again until validation ends. Google says validation typically takes up to about two weeks.',
      ],
    },
    {
      type: 'p',
      text: 'The technical background is in [what is technical SEO](/blog/what-is-technical-seo).',
    },
    { type: 'h2', text: 'Report 3: Core Web Vitals' },
    {
      type: 'p',
      text: 'Core Web Vitals measure loading, responsiveness and visual stability. Google\'s web.dev gives the targets: [LCP within 2.5 seconds, INP of 200 milliseconds or less, and CLS of 0.1 or less](https://web.dev/articles/vitals), measured at the 75th percentile of page loads, segmented across mobile and desktop. The Search Console report groups the pages that fall short, so you can see where to start.',
    },
    {
      type: 'ul',
      items: [
        'Look at mobile first and compare it with desktop; the two can differ a lot.',
        'Open the issue, then the example URLs, and fix the template they share rather than one page at a time.',
        'Typical causes are heavy hero images, unoptimised fonts, third-party scripts and layout that jumps as it loads.',
      ],
    },
    {
      type: 'p',
      text: 'The fixes are covered in [improve Core Web Vitals](/blog/improve-core-web-vitals).',
    },
    { type: 'h2', text: 'Report 4: Manual actions' },
    {
      type: 'p',
      text: 'Most sites never see an entry here, which is why it is worth a thirty-second look each month. Per Google, the Manual actions report shows whether a human reviewer found pages that do not comply with its spam policies; such pages [may rank lower or be left out of results](https://support.google.com/webmasters/answer/9044175). If there is an entry:',
    },
    {
      type: 'ol',
      items: [
        'Expand it to see which pages are affected and follow the "Learn more" link for the fix steps.',
        'Fix the problem on every affected page. Google states that fixing only some pages will not earn a partial return to search results.',
        'Make sure Google can reach those pages (no login, no robots.txt block, no noindex).',
        'Select "Request Review", explain what was wrong, what you did and the result. Reviews can take days or weeks, so do not resubmit while one is pending.',
      ],
    },
    { type: 'h2', text: 'A 20-minute monthly routine' },
    {
      type: 'ol',
      items: [
        'Performance: compare the last 28 days with the previous period for clicks, impressions and top pages. Note one winner and one loser.',
        'Page indexing: check that your key pages are indexed and that no new error group has appeared.',
        'Core Web Vitals: see whether any group moved from good to poor after a site change.',
        'Manual actions: confirm there is nothing listed.',
        'Write down one action for the month and who does it.',
      ],
    },
    {
      type: 'p',
      text: 'If this raises questions you cannot answer in-house, a monthly report should explain them for you; [what a good SEO report includes](/blog/what-a-good-seo-report-includes) shows what to expect, and the [SEO checklist for small business](/blog/seo-checklist-for-small-business) lists what to fix first. WakeUP offers SEO as a service - see the [SEO service page](/services/seo) - and you can start with a [free marketing audit](/audit).',
    },
  ],
}
