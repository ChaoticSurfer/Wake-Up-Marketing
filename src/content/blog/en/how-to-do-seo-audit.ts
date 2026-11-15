import type { BlogPost } from '@/lib/blog'

export const post: BlogPost = {
  locale: 'en',
  slug: 'how-to-do-seo-audit',
  title: 'How to do an SEO audit: a step-by-step process with free tools',
  metaTitle: 'How to Do an SEO Audit',
  description:
    'How to do an SEO audit yourself: check indexing, speed, on-page basics, content and links in order with free tools, then rank the fixes.',
  publishedAt: '2027-01-07T18:00:00+04:00',
  updatedAt: '2027-01-07T18:00:00+04:00',
  service: 'audit',
  reviewState: 'llm_reviewed',
  body: [
    {
      type: 'p',
      text: 'To do an SEO audit, work in this order: confirm Google can index your important pages, check page speed, review titles and on-page basics, look at which pages and queries bring clicks, check links, then rank every finding by impact and effort. Google Search Console and a free crawler are enough for a small site. The audit is only useful if it ends in a short, ordered list of fixes.',
    },
    { type: 'h2', text: 'Before you start: set the goal and open the tools' },
    {
      type: 'p',
      text: 'Decide what the site is supposed to do: sell, collect enquiries, bring bookings. An audit of "everything" produces a list nobody finishes. Write down the five to ten pages that matter most (home, main service or product pages, contact) and keep that list beside you. You need three things:',
    },
    {
      type: 'ul',
      items: [
        'Google Search Console, verified for your site. It is free and shows what Google has indexed and how people find you.',
        'A crawler that follows your links the way a search engine does and lists status codes, titles and headings. Free versions of desktop crawlers exist and cover small sites.',
        'A spreadsheet with one row per finding: page, problem, impact (high, medium, low), effort (small, medium, large).',
      ],
    },
    {
      type: 'p',
      text: 'This guide is a process. For the full list of items to tick in each area, use the [SEO checklist for small businesses](/blog/seo-checklist-for-small-business); for the crawling and indexing details behind step 1, read [what technical SEO is](/blog/what-is-technical-seo).',
    },
    { type: 'h2', text: 'Step 1: Can Google index your important pages?' },
    {
      type: 'p',
      text: 'Start here, because nothing else matters for a page that is not in the index. Open Search Console and read the Page indexing report. Google describes it as showing [the indexing status of all URLs it knows about in your property](https://support.google.com/webmasters/answer/7440203), with a table of reasons why pages are not indexed. Not every "not indexed" line is a problem: duplicate pages and redirects are supposed to be there. What you are looking for is an important page on the list.',
    },
    {
      type: 'p',
      text: 'The reasons Google lists include server errors, pages blocked by robots.txt, pages marked noindex, soft 404s, and "Crawled - currently not indexed". Then take each important page through the URL Inspection tool. It shows [the most recently indexed version of the page](https://support.google.com/webmasters/answer/9012289), which may differ from the live page, and has a live test that fetches the URL in real time. Google is clear that no test guarantees a page will be indexed, so treat a pass as "nothing blocks it", not as a promise.',
    },
    {
      type: 'ul',
      items: [
        'Are all ten important pages indexed? If not, find the reason in the report.',
        'Does the crawler find pages that return errors (4xx, 5xx) or long redirect chains?',
        'Does each page have one address, or can it be reached at several (with and without www, with parameters)?',
        'Is there an accidental noindex tag or a robots.txt rule left over from the site build?',
      ],
    },
    {
      type: 'p',
      text: 'After you fix a problem, use the "Validate fix" button in the report. Google says validation can take up to about two weeks, so do not expect an instant answer.',
    },
    { type: 'h2', text: 'Step 2: Speed and page experience' },
    {
      type: 'p',
      text: 'Check speed on a phone as well as on a computer. Google’s [Core Web Vitals guidance](https://developers.google.com/search/docs/appearance/core-web-vitals) gives three targets: the main content loads within 2.5 seconds (LCP), the page responds to input in under 200 milliseconds (INP), and layout shifts stay under 0.1 (CLS). The Core Web Vitals report in Search Console groups your pages by these results. Test your home page and your top service pages, not every URL.',
    },
    {
      type: 'p',
      text: 'Note which metric fails and on which template (for example, all service pages share the same slow hero image). One fix to a template often repairs many pages. The causes and fixes are in [improving Core Web Vitals](/blog/improve-core-web-vitals).',
    },
    { type: 'h2', text: 'Step 3: On-page basics' },
    {
      type: 'p',
      text: 'Now look at what each important page says. Google’s SEO Starter Guide says [a good title is unique to the page, clear and concise, and accurately describes its contents](https://developers.google.com/search/docs/fundamentals/seo-starter-guide), and that a good meta description is short and unique to one page. Export titles and descriptions from your crawler and sort them to find the problems quickly:',
    },
    {
      type: 'ul',
      items: [
        'Missing, duplicated or default titles (for example, the same title on every page).',
        'Pages without exactly one clear main heading that names the topic.',
        'Important pages that no other page links to, or links with vague anchors such as "click here".',
        'Images without useful alt text, and pages with almost no text.',
      ],
    },
    { type: 'h2', text: 'Step 4: Content and search performance' },
    {
      type: 'p',
      text: 'Open the Performance report in Search Console. It reports [clicks, impressions, click-through rate (clicks divided by impressions) and average position](https://support.google.com/webmasters/answer/7576553), and by default shows the past three months. Use it to answer three questions:',
    },
    {
      type: 'ol',
      items: [
        'Which pages bring clicks? Protect these; do not "improve" them without a reason.',
        'Which pages and queries have many impressions but few clicks? The title or the match to the query may be weak.',
        'Which important pages get no impressions? They may not be indexed, or there is no content for the query people use.',
      ],
    },
    {
      type: 'p',
      text: 'Then compare your pages with what search results show for your main queries. If the top results answer a question your page ignores, add the answer. If two of your pages target the same query, merge or differentiate them. To find the queries in the first place, see [keyword research for SEO](/blog/keyword-research-for-seo).',
    },
    { type: 'h2', text: 'Step 5: Links' },
    {
      type: 'p',
      text: 'Links are the last check, not the first. Internally, make sure your key pages are reachable from the menu and linked from related pages. Externally, list who links to you and whether those links come from real businesses, directories or media. Do not chase a link count. If you have almost none, read [how to build backlinks](/blog/how-to-build-backlinks) before spending money.',
    },
    { type: 'h2', text: 'Step 6: Turn findings into a ranked plan' },
    {
      type: 'p',
      text: 'An audit that stops at a list is not finished. Score each finding and sort the sheet:',
    },
    {
      type: 'table',
      head: ['Priority', 'Impact', 'Effort', 'Example'],
      rows: [
        ['1 - do now', 'High', 'Small', 'A noindex tag on a service page; a robots.txt rule blocking the site'],
        ['2 - plan this month', 'High', 'Medium or large', 'A slow template shared by all service pages'],
        ['3 - quick wins', 'Medium', 'Small', 'Duplicate titles; missing internal links to key pages'],
        ['4 - later', 'Low', 'Any', 'Minor alt text gaps on old pages'],
      ],
    },
    {
      type: 'p',
      text: 'Fix the first group, then wait before judging the result. Google’s own guide says [some changes take effect in a few hours and others could take several months](https://developers.google.com/search/docs/fundamentals/seo-starter-guide), and suggests waiting a few weeks to see whether a change helped. Record the date of each change and compare Search Console numbers before and after. A useful audit report also shows how its numbers were measured; see [what a good SEO report includes](/blog/what-a-good-seo-report-includes).',
    },
    { type: 'h2', text: 'When to ask for a professional audit' },
    {
      type: 'p',
      text: 'A self-audit finds the visible problems. A specialist is worth considering if:',
    },
    {
      type: 'ul',
      items: [
        'Important pages are not indexed and the report does not explain why.',
        'Your site runs on a framework that renders content with JavaScript and you cannot tell what Google sees.',
        'You recently redesigned or moved the site and traffic dropped.',
        'You cannot edit the template, hosting or CMS yourself, so findings sit unfixed.',
        'You need the audit tied to leads and sales, not only to technical items.',
      ],
    },
    {
      type: 'p',
      text: 'WakeUP offers [SEO as a service](/services/seo) as one option, and also a free review of your website, ads and sales process through the [free marketing audit](/audit). Whoever you choose, ask for a ranked list with the evidence for each item, not a score from a tool.',
    },
  ],
}
