import type { BlogPost } from '@/lib/blog'

export const post: BlogPost = {
  locale: 'en',
  slug: 'keyword-cannibalization',
  title: 'Keyword cannibalization: how to find it in Search Console and what to do',
  metaTitle: 'Keyword Cannibalization: Find and Fix',
  description:
    'Keyword cannibalization means several of your pages compete for one query. Find them in Search Console, then merge, redirect, differentiate or leave them.',
  publishedAt: '2027-02-16T18:00:00+04:00',
  updatedAt: '2027-02-16T18:00:00+04:00',
  service: 'seo',
  reviewState: 'llm_reviewed',
  body: [
    {
      type: 'p',
      text: 'Keyword cannibalization is when two or more pages on your own site target the same search query and the same intent, so they split clicks and rankings instead of one page winning. To fix it, find the queries where several of your pages appear in Search Console, decide whether the pages serve the same need, then merge and redirect them, differentiate them, or leave them alone.',
    },
    {
      type: 'p',
      text: 'The last option matters. Not every overlap is a problem, and a blog that publishes often will always have some. This guide shows how to tell the difference.',
    },
    { type: 'h2', text: 'What it is, and when it is not a problem' },
    {
      type: 'p',
      text: 'Cannibalization is an SEO-industry term, not a Google penalty. Google\'s John Mueller, answering a question in September 2025 that Search Engine Journal [reported](https://www.searchenginejournal.com/google-answers-seo-question-about-keyword-cannibalization/556472/), said: "If you have 3 different pages appearing in the same search result, that doesn\'t seem problematic to me". He also said: "Reduce unnecessary duplication and spend your energy on a fantastic page, sure." And: "But pages aren\'t duplicates just because they happen to appear in the same search results page."',
    },
    {
      type: 'p',
      text: 'Read that carefully. Two pages showing for one query is normal. The problem starts when both pages answer the same question in nearly the same way, so neither becomes the clear best answer, your links and attention are split between them, and the ranking position swaps back and forth from week to week. Duplication without a purpose is the issue; overlap in itself is not.',
    },
    { type: 'h2', text: 'Find the pages in Search Console' },
    {
      type: 'p',
      text: 'Use the Performance report in Search Console (setup is in the [Search Console guide](/blog/google-search-console-guide)). Google\'s [report help](https://support.google.com/webmasters/answer/7576553) lists Queries and Pages as separate tabs, and says data grouped by pages is aggregated per page. That gives you two ways in.',
    },
    {
      type: 'ol',
      items: [
        'Start from a query. Open the Queries tab, click the query you care about, then switch to the Pages tab. If two or more of your pages have impressions for it, write down each page with its clicks, impressions and average position.',
        'Start from a page. Open the Pages tab, click the page, then switch to the Queries tab to see its main queries. If a page you did not expect appears for the head query of another, check that one too.',
        'Set the date range to at least three months so that one-day swaps do not mislead you, and compare it with the previous period to see which page is gaining.',
        'Export the table for the pages you suspect. A spreadsheet with query, page, clicks, impressions and position is enough to decide.',
      ],
    },
    {
      type: 'p',
      text: 'Start with your most important queries (the ones that bring enquiries) rather than with every query on the site. A second signal is on the site itself: search for your target phrase in a site: search in Google and look at the titles of your own pages that come up. If several have nearly the same title, you probably wrote the same post twice.',
    },
    { type: 'h2', text: 'Decide with the intent test' },
    {
      type: 'p',
      text: 'For each pair of pages, ask one question: would a searcher for this query be equally well served by either page? Look at the search results for the query and see what Google shows (guides, lists, service pages) as described in [search intent types](/blog/search-intent-types). Then use the table.',
    },
    {
      type: 'table',
      head: ['What you see', 'What it means', 'What to do'],
      rows: [
        ['Two posts answer the same question; one is older and weaker', 'True duplication', 'Merge the useful parts into the stronger page, then redirect the weaker one'],
        ['A blog post and a service page both show for a commercial phrase, and the results are service pages', 'The post is the wrong format for this intent', 'Point the post to the service page with a link, and retarget the post to a "how to" or "cost" angle'],
        ['Two pages share a topic but answer different questions (cost vs process)', 'Overlap without duplication', 'Make the difference clear in titles and headings, and link them to each other'],
        ['Several short posts on one topic, each thin', 'Split effort', 'Combine into one complete guide and redirect the old URLs'],
        ['Both pages rank, one at position 2 and one at 6, both get clicks', 'Not a problem', 'Leave them and watch'],
      ],
    },
    { type: 'h2', text: 'Merge and redirect' },
    {
      type: 'p',
      text: 'When two pages do the same job, keep the one with the better links, history and content, move whatever is missing from the other into it, and redirect the old URL. Google\'s page on [consolidating duplicate URLs](https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls) lists redirects first, as a strong signal to use when you want to get rid of existing duplicate pages, then rel="canonical" as a strong signal for pages that stay live, and sitemap inclusion as a weak one. Its [redirect guide](https://developers.google.com/search/docs/crawling-indexing/301-redirects) says to use permanent redirects when you are sure they will not be reverted.',
    },
    {
      type: 'ul',
      items: [
        'Redirect with a permanent (301) redirect to the merged page, not to the home page.',
        'Update internal links so that none points to the old URL.',
        'Remove the old URL from the sitemap and keep the merged one.',
        'Update the merged page\'s title, headline and date if its scope has changed.',
        'Use rel="canonical" instead of a redirect only when both pages must stay live for visitors, for example a print version or a filtered view.',
      ],
    },
    { type: 'h2', text: 'Differentiate, when both pages deserve to exist' },
    {
      type: 'p',
      text: 'If both pages serve real needs, make the difference obvious. Give each one its own main query and its own intent: one for "how much does X cost", one for "how does X work". Rewrite the titles, the H1 and the first paragraph so they do not repeat each other, and remove sections that are copies of the other page. Then link them to each other with descriptive anchor text, as in [internal linking for SEO](/blog/internal-linking-seo): the broader page links to the narrower one for detail. Check the result after a few weeks, since changes take time to show.',
    },
    { type: 'h2', text: 'Leave it alone' },
    {
      type: 'p',
      text: 'Leave pages as they are when they have different intents, when both bring traffic, or when the only evidence is a tool\'s warning. SEO tools often flag pages that merely share a keyword; Search Console shows what actually happened. As Mueller put it, Search Console "shows data for when pages were actually shown, it\'s not a theoretical measurement." Merging a page that earns enquiries because a tool flagged it can cost you more than it saves.',
    },
    { type: 'h2', text: 'Prevent it on a growing blog' },
    {
      type: 'p',
      text: 'Cannibalization is mostly a planning problem. Posts pile up and nobody remembers what exists. A one-sheet map prevents most of it.',
    },
    {
      type: 'ul',
      items: [
        'Keep a list of every page with its main query, its intent and its URL. Add a row before you write.',
        'Before a new post, search your own site for the topic. If a post exists, update it instead.',
        'Give each service page the commercial queries, and each blog post the questions that lead to them.',
        'Review the list every quarter against Search Console and fold old, weak posts into stronger ones.',
        'When you move or restructure a site, plan the redirects first; see [website migration and SEO](/blog/website-migration-seo).',
      ],
    },
    {
      type: 'p',
      text: 'For the basics of choosing what a blog should cover, see [how to start a business blog](/blog/how-to-start-a-business-blog). If you would like a second opinion on which of your pages overlap, WakeUP offers [SEO as a service](/services/seo), which includes technical audits and fixes, keyword research and pages written for search intent, and you can ask for the [free marketing audit](/audit) first.',
    },
  ],
}
