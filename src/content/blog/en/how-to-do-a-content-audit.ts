import type { BlogPost } from '@/lib/blog'

export const post: BlogPost = {
  locale: 'en',
  slug: 'how-to-do-a-content-audit',
  title: 'How to do a content audit: a spreadsheet method for a small site',
  metaTitle: 'How to Do a Content Audit',
  description:
    'How to do a content audit on a small site: list every page, add traffic data, score it, then keep, update, merge or delete. Spreadsheet columns included.',
  publishedAt: '2027-02-24T12:00:00+04:00',
  updatedAt: '2027-02-24T12:00:00+04:00',
  service: 'content',
  reviewState: 'llm_reviewed',
  body: [
    {
      type: 'p',
      text: 'To do a content audit, list every page and post in a spreadsheet, add traffic and conversion numbers for each, score each page against a few simple questions, and then give it one verdict: keep, update, merge or delete. For a site under a few hundred pages this is a manageable job that ends with a ranked to-do list, not a report nobody reads.',
    },
    { type: 'h2', text: 'Decide what the audit is for' },
    {
      type: 'p',
      text: 'An audit without a question produces a very large spreadsheet. Pick one question before you open a tool. Typical ones: which posts bring enquiries, which pages are out of date and risky, or which pages compete with each other. This post is about the content itself. For technical problems such as indexing and speed, use the [SEO audit guide](/blog/how-to-do-seo-audit); for the whole site experience, use the [website audit checklist](/blog/website-audit-checklist).',
    },
    {
      type: 'p',
      text: 'Write the goal at the top of the sheet, for example "More enquiries from the blog". Every later decision is checked against it.',
    },
    { type: 'h2', text: 'Step 1: Build the inventory' },
    {
      type: 'p',
      text: 'One row per URL. Get the list from your sitemap, from your CMS export or from a crawler; on a small site you can copy it by hand. Include blog posts, service pages, landing pages and old campaign pages. Add these columns first, since they need no data tools:',
    },
    {
      type: 'table',
      head: ['Column', 'What to enter'],
      rows: [
        ['URL', 'The full address'],
        ['Title', 'The page title as shown in the browser tab'],
        ['Type', 'Service page, blog post, landing page, other'],
        ['Topic', 'The one subject or question the page answers'],
        ['Published / last real update', 'Dates of creation and of the last substantial change'],
        ['Owner', 'The person who would update or approve it'],
      ],
    },
    { type: 'h2', text: 'Step 2: Add the numbers' },
    {
      type: 'p',
      text: 'Now add performance columns. Use the same period for every page, for example the last 12 months, so the figures can be compared. Be aware that the default view of the Search Console Performance report shows [the past three months](https://support.google.com/webmasters/answer/7576553), so change the date range before you copy anything. The [Search Console guide](/blog/google-search-console-guide) shows where each report lives.',
    },
    {
      type: 'ul',
      items: [
        'From Search Console: clicks, impressions, average position and the main query for the page.',
        'From GA4 (see the [GA4 setup post](/blog/ga4-for-small-business)): sessions, engagement and key events such as form submissions or calls.',
        'From your CRM or inbox: enquiries that started on this page, if you can trace them.',
        'Optional: number of backlinks, if you use a link tool. A page with good links deserves care even when its traffic is low.',
      ],
    },
    { type: 'h2', text: 'Step 3: Score each page' },
    {
      type: 'p',
      text: 'Add four score columns and fill each with 0, 1 or 2. Scoring turns opinion into something you can sort. Keep the questions short and the same for every page.',
    },
    {
      type: 'table',
      head: ['Score column', '0', '1', '2'],
      rows: [
        ['Accuracy', 'Wrong or out of date', 'Mostly right, a few old facts', 'Correct today'],
        ['Usefulness', 'Thin, generic, or answers nothing', 'Useful but partial', 'Answers the question fully, with something original'],
        ['Results', 'No traffic and no enquiries', 'Some traffic or some enquiries', 'Steady traffic or enquiries'],
        ['Fit with the goal', 'Off-topic for the business', 'Related', 'Directly supports what you sell'],
      ],
    },
    {
      type: 'p',
      text: 'For the usefulness column, Google\'s own [self-assessment questions](https://developers.google.com/search/docs/fundamentals/creating-helpful-content) are a good test: does the page provide original information, reporting, research or analysis, and is it the sort of page you would bookmark, share with a friend or recommend? Total the four scores. A page with 7 or 8 points is a strength. One with 0 to 3 is a candidate for change.',
    },
    { type: 'h2', text: 'Step 4: Give each page one verdict' },
    {
      type: 'table',
      head: ['Verdict', 'When it applies', 'What you do'],
      rows: [
        ['Keep', 'High score, nothing wrong', 'Leave it. Add an internal link if it has none.'],
        ['Update', 'Good topic, weak accuracy or results, especially a page that used to perform', 'Rewrite the stale parts, add what is missing, and change the date only when the content really changed.'],
        ['Merge', 'Two or more pages answer the same question', 'Fold the best parts into one page and redirect the others to it. See [keyword cannibalization](/blog/keyword-cannibalization).'],
        ['Delete', 'Off-topic, wrong, no traffic, no links, nothing worth saving', 'Remove it, or redirect it to the closest relevant page if one exists.'],
        ['Repurpose', 'Good material in the wrong format', 'Turn it into a video, a post series or a short guide. See [how to repurpose content](/blog/how-to-repurpose-content).'],
      ],
    },
    {
      type: 'p',
      text: 'Be slow with the delete verdict. Google\'s guidance lists "removing a lot of older content primarily because you believe it will help your search rankings" among its warning signs and answers "(No, it won\'t)". Delete because a page is wrong, off-topic or useless to readers, not to chase a ranking. The same page warns against changing dates to look fresh when the content has not substantially changed.',
    },
    { type: 'h2', text: 'Step 5: Carry out the plan' },
    {
      type: 'ol',
      items: [
        'Sort the sheet by verdict, then by potential: updates of pages that already get impressions come first, because they need the least effort for the most return.',
        'Do merges and deletions in one batch. When a page moves or is merged, use a permanent redirect; Google explains that [301 and 308 status codes](https://developers.google.com/search/docs/crawling-indexing/301-redirects) mean a page has permanently moved to a new location.',
        'Fix internal links that pointed at removed or merged pages.',
        'Record each change in a "done on" column so you can compare numbers three months later.',
        'Feed gaps into your plan. Topics customers ask about that no page covers belong in the next quarter of your [content strategy](/blog/content-strategy-for-small-business).',
      ],
    },
    { type: 'h2', text: 'Repeat it on a schedule' },
    {
      type: 'p',
      text: 'A small site needs a full audit once a year and a light check each quarter: re-sort the sheet by clicks and look for pages that dropped. If you would rather have someone else run the inventory, rewrite the weak pages and produce the missing ones, see how WakeUP handles [content creation](/services/content-creation). If you want a quick outside view of the whole marketing picture first, the [free marketing audit](/audit) covers ads, website and sales process.',
    },
  ],
}
