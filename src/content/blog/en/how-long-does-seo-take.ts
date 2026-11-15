import type { BlogPost } from '@/lib/blog'

export const post: BlogPost = {
  locale: 'en',
  slug: 'how-long-does-seo-take',
  title: 'How long does SEO take to work? A realistic timeline by starting point',
  metaTitle: 'How Long Does SEO Take to Work?',
  description:
    'How long does SEO take to work? First signals come in weeks, narrow searches rank in months, competitive terms later. A timeline by starting point.',
  publishedAt: '2027-01-25T15:00:00+04:00',
  updatedAt: '2027-01-25T15:00:00+04:00',
  service: 'seo',
  reviewState: 'llm_reviewed',
  body: [
    {
      type: 'p',
      text: 'How long SEO takes to work depends on where you start and who you compete with. Google says some changes take effect in a few hours and others several months. For most company sites, plan on first signals (indexing, impressions) within weeks, rankings for narrow searches within a few months, and competitive terms in a year or more. Nobody can promise an exact date.',
    },
    { type: 'h2', text: 'Why there is no single number' },
    {
      type: 'p',
      text: 'Google\'s [SEO Starter Guide](https://developers.google.com/search/docs/fundamentals/seo-starter-guide) puts it this way: "Some changes might take effect in a few hours, others could take several months." It suggests waiting a few weeks before judging whether your work had a beneficial effect. Even the first step, being crawled, is slow: Google\'s documentation states that [crawling can take anywhere from a few days to a few weeks](https://developers.google.com/search/docs/crawling-indexing/ask-google-to-recrawl).',
    },
    {
      type: 'p',
      text: 'Published estimates from SEO companies vary widely. SEO.com says [SEO typically takes three to six months to work](https://www.seo.com/blog/why-does-seo-take-so-long/), with some sites needing six to twelve, while Orbit Media passes on [a range of four to twelve months for significant success](https://www.orbitmedia.com/blog/how-long-does-seo-take/) that it attributes to Google, and says its own experience suggests two to three years for highly competitive keywords. None of these is a measurement, which is why the spread is so large.',
    },
    { type: 'h2', text: 'What decides your timeline' },
    {
      type: 'table',
      head: ['Factor', 'Faster', 'Slower'],
      rows: [
        ['Competition for the search', 'Specific, long phrases with few strong pages', 'Short, high-volume phrases where established sites rank'],
        ['Site age and history', 'Existing site with some links and indexed pages', 'New domain with no links'],
        ['Technical state', 'Pages crawlable and indexed', 'Pages blocked, slow or missing from the index'],
        ['Content', 'A page that matches what searchers want', 'Thin or off-target pages'],
        ['Links', 'Relevant sites already mention you', 'None, or only low-quality ones'],
        ['Speed of changes on your side', 'Developers and approvers act within days', 'Recommendations wait for months'],
      ],
    },
    {
      type: 'p',
      text: 'The most useful lever is choosing the right searches. Specific phrases face less competition and are the usual first wins; see [long-tail keywords](/blog/long-tail-keywords).',
    },
    { type: 'h2', text: 'What the data says about new pages' },
    {
      type: 'p',
      text: 'Ahrefs studied how long pages take to reach Google\'s top 10, in an [analysis published in May 2025](https://ahrefs.com/blog/how-long-does-it-take-to-rank/). Of 1 million URLs its crawler first saw in September 2023, only 1.74% reached the top 10 within a year. A second sample of 2 million English-language URLs created in October 2023 gave 6.11%, which the author considers a fairer figure. Ahrefs also found that the average page ranking first is five years old, and that 72.9% of top 10 pages are more than three years old.',
    },
    {
      type: 'p',
      text: 'Read this as a warning against expecting every new page to rank, not as a forecast for your business. These are worldwide samples of pages, including many nobody tried to optimise. Competitive English searches are very different from narrower searches in Georgian. The same study found that 40.82% of the pages that did reach the top 10 got there within a month, so pages that will rank often show it early.',
    },
    { type: 'h2', text: 'What to expect, month by month' },
    {
      type: 'p',
      text: 'This is an illustrative sequence for a company with an existing site, consistent with the ranges above rather than measured from a study. It is not a guarantee; a new site starts slower, and the plan for that case is in [SEO for a new website](/blog/seo-for-a-new-website).',
    },
    {
      type: 'table',
      head: ['Period', 'Usually happening', 'What you can check'],
      rows: [
        ['Month 1', 'Audit, tracking set up, technical fixes, keyword plan', 'Search Console connected, indexing problems listed and being fixed'],
        ['Months 2 to 3', 'New and improved pages published and crawled', 'Impressions grow for specific phrases; few clicks yet'],
        ['Months 4 to 6', 'Pages settle in results; links and content continue', 'Rankings for narrow searches, first enquiries from Google'],
        ['Months 7 to 12', 'Wider keyword set, stronger pages', 'Steady growth in clicks and enquiries; competitive terms start to move'],
        ['After year one', 'Maintain, extend, defend', 'Compounding traffic if the work continues'],
      ],
    },
    { type: 'h2', text: 'Signals that work before traffic does' },
    {
      type: 'ul',
      items: [
        'Pages indexed: new and key pages appear in Search Console\'s indexing reports. See the [Search Console guide](/blog/google-search-console-guide).',
        'Impressions: your pages appear for more searches, even without clicks.',
        'Average position for target searches moving from page five towards page two.',
        'Queries: new relevant phrases that you did not plan for show up in the performance report.',
        'Technical errors falling: fewer pages blocked, redirected wrongly or flagged by the index reports.',
        'Work delivered on schedule: a written list of pages and fixes shipped each month, as described in [what a good SEO report includes](/blog/what-a-good-seo-report-includes).',
      ],
    },
    {
      type: 'p',
      text: 'Judge month three by these signals, not by sales. Revenue from SEO lags behind them, which is why the channel suits companies that can wait. If you need leads this month, paid ads fill the gap; [Google Ads vs SEO](/blog/google-ads-vs-seo) compares the two.',
    },
    { type: 'h2', text: 'How to judge a promise of fast results' },
    {
      type: 'p',
      text: 'A provider who names an exact date for a top ranking is guessing, or using searches so narrow that they bring no business. Ask which searches the timeline covers, what the starting position is, and what you will see in month one, three and six. A fair answer gives ranges and leading indicators. Monthly costs and what they should buy are covered in [how much SEO costs](/blog/how-much-does-seo-cost).',
    },
    {
      type: 'p',
      text: 'WakeUP offers [SEO as a service](/services/seo), alongside other options such as freelancers or an in-house hire. To see where your site starts from, including indexing and technical problems, send it for the [free marketing audit](/audit).',
    },
  ],
}
