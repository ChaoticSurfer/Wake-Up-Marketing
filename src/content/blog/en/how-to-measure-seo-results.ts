import type { BlogPost } from '@/lib/blog'

export const post: BlogPost = {
  locale: 'en',
  slug: 'how-to-measure-seo-results',
  title: 'How to measure SEO results: six numbers to track every month',
  metaTitle: 'How to Measure SEO Results',
  description:
    'How to measure SEO results with six numbers from Search Console and Google Analytics, read monthly and tied to leads, so you know if SEO is working.',
  publishedAt: '2027-02-15T18:00:00+04:00',
  updatedAt: '2027-02-15T18:00:00+04:00',
  service: 'seo',
  reviewState: 'llm_reviewed',
  body: [
    {
      type: 'p',
      text: 'To measure SEO results, track six numbers each month: non-branded clicks, impressions, click-through rate on your key pages, average position for your priority searches, organic sessions, and the leads that organic visitors produce. The first four come from Google Search Console, the last two from Google Analytics. Read them as trends over three months or more, not as a single month\'s score.',
    },
    {
      type: 'p',
      text: 'This is the SEO-only slice of measurement. For the wider set of marketing metrics, see [marketing KPIs](/blog/marketing-kpis); for how Search Console itself works, [the Google Search Console guide](/blog/google-search-console-guide).',
    },
    { type: 'h2', text: 'The six numbers at a glance' },
    {
      type: 'table',
      head: ['Number', 'Where', 'What it tells you', 'What to compare'],
      rows: [
        ['1. Non-branded clicks', 'Search Console', 'Are new people finding you?', 'This month vs the last 3 months'],
        ['2. Impressions', 'Search Console', 'Are you appearing for more searches?', 'Same period, for the key pages'],
        ['3. Click-through rate', 'Search Console', 'Do your titles earn the click?', 'Per page, not site-wide'],
        ['4. Average position', 'Search Console', 'Are priority searches moving up?', 'Per query, not site-wide'],
        ['5. Organic sessions', 'Google Analytics', 'Do visitors arrive and engage?', 'Organic Search channel only'],
        ['6. Leads from organic', 'Analytics and CRM', 'Does it produce enquiries?', 'Count and cost per lead'],
      ],
    },
    { type: 'h2', text: '1. Non-branded clicks: the number that shows growth' },
    {
      type: 'p',
      text: 'Google defines clicks as [how often someone clicked a link from Google to your site](https://support.google.com/webmasters/answer/7042828). Split them in two. Branded clicks come from people who already know your name and mostly reflect your reputation and your other marketing. Non-branded clicks come from people who searched for what you do and found you, which is what SEO is for. Search Console has a [branded queries filter](https://developers.google.com/search/blog/2025/11/search-console-branded-filter) that separates the two; Google says the classification is made by an AI-assisted system and that some queries may occasionally be misidentified, and that the filter is available to all eligible sites. If your site does not have the filter, use the "queries containing" filter with your brand name instead.',
    },
    { type: 'h2', text: '2. Impressions: the early signal' },
    {
      type: 'p',
      text: 'Impressions are, in Google\'s words, how often someone saw, or potentially saw, a link to your site in Search, Discover or News. They rise before clicks do. For a new or recently improved page, a rising impression count means Google has started showing it, even if the position is still low. Watch impressions for the pages you care about, and the number of different queries that produce them. [How long does SEO take](/blog/how-long-does-seo-take) explains why this lead time is normal.',
    },
    { type: 'h2', text: '3. Click-through rate: check it per page' },
    {
      type: 'p',
      text: 'Click-through rate is clicks divided by impressions, according to Google\'s definition. A site-wide average hides everything useful, because brand searches have a high rate and broad searches a low one. Look instead at your ten most important pages. A page with many impressions and a low rate is a cheap fix: rewrite the title and description to say what the page answers. A page with a high rate but few impressions needs better rankings, not better wording.',
    },
    { type: 'h2', text: '4. Average position: for chosen searches, not the whole site' },
    {
      type: 'p',
      text: 'Google describes average position as a relative ranking of your link where 1 is the topmost position, averaged across all queries where your site appeared. The site-wide average is close to meaningless, since one page ranking for a thousand rare searches will drag it down. Pick five to ten searches that matter to the business and record their position each month. Rankings also vary by place and time, so use the movement over months, not a daily figure.',
    },
    { type: 'h2', text: '5. Organic sessions, in the right channel' },
    {
      type: 'p',
      text: 'In Google Analytics, use the Organic Search channel, which Google defines as visits arriving through non-ad links in organic search results, including those from AI Overviews and AI Mode, in its [channel group documentation](https://support.google.com/analytics/answer/9756891). Look at sessions, but add the quality of those sessions: do they reach the service pages and the contact page, or leave after one blog post? Sessions that go nowhere are traffic, not results. [GA4 for small business](/blog/ga4-for-small-business) covers the setup, and tagging your links, covered in the [UTM parameters guide](/blog/utm-parameters-guide), keeps other channels from being mixed in.',
    },
    { type: 'h2', text: '6. Leads from organic: the number that matters' },
    {
      type: 'p',
      text: 'Traffic is a means; leads are the result. In GA4, [a key event is an event that measures an action that is particularly important to the success of your business](https://support.google.com/analytics/answer/9267568), so mark a form submission, a call click and a booking as key events, then read them for the Organic Search channel. To go further, pass the source into your CRM with each enquiry (see [website CRM integration](/blog/website-crm-integration)) so that sales can say which of those leads became customers. Then divide the cost of SEO by the leads it produced to get a cost per lead; [SEO ROI](/blog/seo-roi) shows the sums.',
    },
    { type: 'h2', text: 'How to read the numbers each month' },
    {
      type: 'ol',
      items: [
        'Set the date range to the last full month and compare it with the previous three months, not just the month before, so seasonality does not mislead you.',
        'Check non-branded clicks and impressions first: are they up, flat or down?',
        'List the pages with the biggest change in clicks and open each to see why: new content, a lost ranking, a seasonal topic.',
        'Check the position of your five to ten priority searches and note movements of more than a few places.',
        'Look at organic leads and which pages they started on.',
        'Write down one action for next month: a title to rewrite, a page to improve, a technical fix.',
      ],
    },
    {
      type: 'p',
      text: 'Search Console notes that the newest data can be preliminary and might change, so leave a few days after the month ends before you review it. Whoever reports to you should be able to show these numbers; [what a good SEO report includes](/blog/what-a-good-seo-report-includes) and [is my SEO agency working](/blog/is-my-seo-agency-working) explain how to judge a report.',
    },
    { type: 'h2', text: 'What to leave out of the monthly review' },
    {
      type: 'ul',
      items: [
        'Domain authority and other third-party scores: they are estimates made by tool vendors, not measurements from Google.',
        'Total keyword counts: a longer list of low-value searches is not progress.',
        'Daily ranking checks: they create worry without information.',
        'Traffic without a lead goal: it can grow while sales stay flat.',
      ],
    },
    {
      type: 'p',
      text: 'WakeUP offers [SEO as a service](/services/seo), reported in rankings, organic traffic and leads. If you want an outside view of where your site stands before you decide on anything, request a [free audit](/audit).',
    },
  ],
}
