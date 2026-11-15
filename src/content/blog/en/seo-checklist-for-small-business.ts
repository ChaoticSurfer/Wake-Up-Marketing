import type { BlogPost } from '@/lib/blog'

export const post: BlogPost = {
  locale: 'en',
  slug: 'seo-checklist-for-small-business',
  title: 'SEO checklist for small businesses: 5 groups of checks from Google\'s own docs',
  metaTitle: 'SEO Checklist for Small Businesses',
  description:
    'An SEO checklist for small businesses: technical, on-page, content, local and measurement checks, each tied to what Google\'s documentation says.',
  publishedAt: '2026-12-11T12:00:00+04:00',
  updatedAt: '2026-12-11T12:00:00+04:00',
  service: 'seo',
  reviewState: 'llm_reviewed',
  body: [
    {
      type: 'p',
      text: 'This SEO checklist for small businesses has five groups: technical, on-page, content, local and measurement. Work through them in that order, because a page Google cannot crawl cannot benefit from good copy. Where an item rests on Google\'s documentation, it links to the page, so you can skip tactics that Google does not mention. For the reasoning behind the order, read [SEO for small business](/blog/seo-for-small-business).',
    },
    { type: 'h2', text: '1. Technical checks: can Google reach and read your pages?' },
    {
      type: 'ol',
      items: [
        'Set up [Search Console](https://support.google.com/webmasters/answer/9128668). Google calls it a free service, and it shows whether Google can find and crawl your site, which queries show it and which indexing problems exist.',
        'Link every important page from another page. Google can generally only crawl a link that is an <a> element with an href attribute, per its [crawlable links guidance](https://developers.google.com/search/docs/crawling-indexing/links-crawlable). Buttons that run script, with no href, may not be followed.',
        'Check that robots.txt does not block pages you want found. Google\'s [robots.txt introduction](https://developers.google.com/search/docs/crawling-indexing/robots/intro) says the file "is not a mechanism for keeping a web page out of Google". To keep a page out, use noindex or a login.',
        'Make the mobile version complete. Google uses the mobile version of a site\'s content for indexing and ranking, and says to [make sure the mobile site has the same content as the desktop site](https://developers.google.com/search/docs/crawling-indexing/mobile/mobile-sites-mobile-first-indexing).',
        'Serve the site over HTTPS and test Core Web Vitals (table below). Google\'s [page experience page](https://developers.google.com/search/docs/appearance/page-experience) lists HTTPS and mobile display as page experience aspects, but says only Core Web Vitals are used by its ranking systems directly.',
        'Return a real 404 for pages that no longer exist. Google\'s [HTTP status guidance](https://developers.google.com/search/docs/crawling-indexing/http-network-errors) says a previously indexed URL that returns 404 is removed from the index, and a page that looks like an error but returns a normal status is flagged as a soft 404.',
      ],
    },
    {
      type: 'table',
      head: ['Core Web Vital', 'Measures', 'Good, per Google'],
      rows: [
        ['Largest Contentful Paint (LCP)', 'Loading', 'Within 2.5 seconds of the page starting to load'],
        ['Interaction to Next Paint (INP)', 'Responsiveness', 'Under 200 milliseconds'],
        ['Cumulative Layout Shift (CLS)', 'Visual stability', 'Under 0.1'],
      ],
    },
    {
      type: 'p',
      text: 'Thresholds are from Google\'s [Core Web Vitals page](https://developers.google.com/search/docs/appearance/core-web-vitals). A sitemap is not on the must-do list for most small sites: Google says [you might need one](https://developers.google.com/search/docs/crawling-indexing/sitemaps/overview) if your site is large, new with few external links, or heavy on video, image or news content, and it defines small as about 500 pages or fewer. Many content management systems create one automatically.',
    },
    { type: 'h2', text: '2. On-page checks: does each page say what it is?' },
    {
      type: 'table',
      head: ['Check', 'What Google\'s Starter Guide says', 'Pass test'],
      rows: [
        [
          'Title',
          '"a good title is unique to the page, clear and concise, and accurately describes the contents of the page"',
          'No two pages share a title; it names the service',
        ],
        [
          'Meta description',
          '"A good meta description is short, unique to one particular page, and includes the most relevant points of the page."',
          'Written for a reader deciding to click',
        ],
        [
          'Headings',
          'Provide headings to help users navigate your pages',
          'A visitor can scan the page by headings alone',
        ],
        [
          'Image alt text',
          '"a short, but descriptive piece of text that explains the relationship between the image and your content"',
          'Every meaningful image has one',
        ],
        [
          'Link text',
          '"This text tells users and Google something about the page you\'re linking to."',
          'No "click here" links',
        ],
      ],
    },
    {
      type: 'p',
      text: 'All five rows come from the [SEO Starter Guide](https://developers.google.com/search/docs/fundamentals/seo-starter-guide). For anchor text, Google\'s [crawlable links page](https://developers.google.com/search/docs/crawling-indexing/links-crawlable) adds that it should be descriptive, reasonably concise and relevant to both the page it sits on and the page it links to.',
    },
    { type: 'h2', text: '3. Content checks: is it worth reading?' },
    {
      type: 'ol',
      items: [
        'One page per service or product, answering the question a buyer would type. Start from the queries in the Search Console performance report.',
        'Ask Google\'s "Why" question. Its [helpful content guidance](https://developers.google.com/search/docs/fundamentals/creating-helpful-content) calls it "perhaps the most important question to answer about your content": is the page made mainly to help visitors, or to attract search traffic?',
        'Show who is behind it. The same guidance asks whether it is self-evident to visitors who wrote the content, and whether it was written or reviewed by someone who demonstrably knows the topic.',
        'Remove easily verified factual errors. Google lists them among the questions to ask about your own content.',
        'If AI helped write a page, say so where readers would reasonably wonder how it was made, and have a person check the facts before publishing.',
      ],
    },
    { type: 'h2', text: '4. Local checks: can nearby customers find and trust you?' },
    {
      type: 'ol',
      items: [
        'Claim and verify your Business Profile. Google says verification tells it you are authorised to represent the business, so it is more likely to show up in search results ([Business Profile help](https://support.google.com/business/answer/7091)).',
        'Keep hours, including special hours, accurate.',
        'Ask for reviews and reply to them. Google says more reviews and positive ratings can help local ranking, and replying shows you value feedback.',
        'Optional: add [LocalBusiness structured data](https://developers.google.com/search/docs/appearance/structured-data/local-business) with the required name and address. Google does not guarantee that any feature using structured data will appear.',
      ],
    },
    {
      type: 'p',
      text: 'The checklist stops there on purpose. For a fuller local plan, see [local SEO tips](/blog/local-seo-tips).',
    },
    { type: 'h2', text: '5. Measurement checks: did it work?' },
    {
      type: 'ol',
      items: [
        'Record a baseline in Search Console before you change anything: clicks, impressions and top queries.',
        'Wait. Google\'s [SEO Starter Guide](https://developers.google.com/search/docs/fundamentals/seo-starter-guide) says some changes take effect in a few hours and others several months, and suggests waiting a few weeks to assess whether your work helped.',
        'Review monthly. Improve pages that appear for a query but get few clicks (often a title or description problem), and write a page for each service that has none.',
        'Watch the alerts. Search Console warns you about indexing and spam issues.',
      ],
    },
    { type: 'h2', text: 'When to use a checklist and when to get help' },
    {
      type: 'p',
      text: 'A checklist finds problems. It does not tell you which matter most for your market, or how to fix a site built on a platform you cannot edit. If you would rather have someone else run it, the [SEO service](/services/seo) covers a technical SEO audit and fixes, keyword research in Georgian and English, service and landing pages written for search intent, local SEO and Google Business Profile work, and a monthly report in rankings, organic traffic and leads. A [free audit](/audit) of your current marketing is a lower-commitment start, and [what SEO costs](/blog/how-much-does-seo-cost) explains how to compare quotes.',
    },
  ],
}
