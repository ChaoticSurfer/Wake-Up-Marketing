import type { BlogPost } from '@/lib/blog'

export const post: BlogPost = {
  locale: 'en',
  slug: 'seo-for-small-business',
  title: 'SEO for small business: a simple plan for companies in Georgia',
  metaTitle: 'SEO for Small Business: A Simple Plan',
  description:
    'SEO for small business in Georgia: a practical plan from Google\'s own guidance, covering site basics, Georgian and English versions, and local search.',
  publishedAt: '2026-12-06T10:00:00+04:00',
  updatedAt: '2026-12-06T10:00:00+04:00',
  service: 'seo',
  reviewState: 'llm_reviewed',
  body: [
    {
      type: 'p',
      text: 'SEO for small business comes down to five jobs, in this order: let Google find and read your pages, write one clear page for each thing buyers search for, set up your Georgian and English versions correctly, complete your Google Business Profile, and track results in Search Console. Google says that if you run a small local business, you can probably do much of the work yourself.',
    },
    { type: 'h2', text: 'What Google says about SEO for a company your size' },
    {
      type: 'p',
      text: 'Google\'s own guidance on [whether you need an SEO](https://developers.google.com/search/docs/fundamentals/do-i-need-seo) states: "If you run a small local business, you can probably do much of the work yourself." It also says a great time to hire is when you\'re considering a site redesign or planning to launch a new site. So the question is not whether SEO is only for specialists. It is how much of the plan below your team has time for.',
    },
    {
      type: 'p',
      text: 'The facts below come from Google\'s documentation: the [SEO Starter Guide](https://developers.google.com/search/docs/fundamentals/seo-starter-guide), the pages on [localized versions](https://developers.google.com/search/docs/specialty/international/localized-versions) and [multilingual sites](https://developers.google.com/search/docs/specialty/international/managing-multi-regional-sites), and the Business Profile help ([how local ranking works](https://support.google.com/business/answer/7091), [adding or claiming a business](https://support.google.com/business/answer/2911778)). Nothing here is a ranking trick, and none of it promises a position.',
    },
    { type: 'h2', text: 'Step 1: make sure Google can find and read your pages' },
    {
      type: 'p',
      text: 'Google\'s [SEO Starter Guide](https://developers.google.com/search/docs/fundamentals/seo-starter-guide) says "Google primarily finds pages through links from other pages it already crawled." That has two practical meanings. First, because Google finds pages mainly through links, every important page on your site should be linked from another page (for example from your navigation or a related page). Second, new content is discovered faster when people know about it, so the guide suggests promoting it through social media, community engagement and word of mouth, without overdoing it.',
    },
    {
      type: 'p',
      text: 'Set up [Search Console](https://support.google.com/webmasters/answer/9128668) now, before changing anything. Google describes it as a free service. It lets you confirm that Google can find and crawl your site, fix indexing problems, request re-indexing of new or updated content, see how often your site appears in results and gets clicked, and receive alerts about indexing or spam problems. It is also where you will see whether the later steps worked.',
    },
    { type: 'h2', text: 'Step 2: write one clear page for each thing buyers search for' },
    {
      type: 'p',
      text: 'Google\'s [SEO Starter Guide](https://developers.google.com/search/docs/fundamentals/seo-starter-guide) gives short, specific on-page advice. Apply it page by page, starting with your service pages and your homepage. The Search Console performance report shows the Georgian and English queries people already use to find you, which helps you pick what each page should say.',
    },
    {
      type: 'table',
      head: ['Element', 'What Google\'s Starter Guide says', 'What to do'],
      rows: [
        [
          'Title',
          'Google\'s Starter Guide: "a good title is unique to the page, clear and concise, and accurately describes the contents of the page."',
          'One title per page, naming the service and the city or audience if relevant.',
        ],
        [
          'Meta description',
          'Google\'s Starter Guide: "A good meta description is short, unique to one particular page, and includes the most relevant points of the page."',
          'Write it for a person deciding whether to click. Do not reuse one across pages.',
        ],
        [
          'URL',
          'Include words in the URL that may be useful for users.',
          'Use readable paths such as /services/seo, not number codes.',
        ],
        [
          'Content',
          'Content that people find compelling and useful will likely influence your presence in search.',
          'Keep it original and readable, and update or remove outdated pages.',
        ],
        [
          'Images',
          'Sharp, clear images placed near relevant text, with descriptive alt text.',
          'Describe what the image shows and how it relates to the page.',
        ],
      ],
    },
    {
      type: 'p',
      text: 'A useful way to choose pages: list the services you sell, then write down how a buyer would phrase the search. Each service gets its own page that answers that search directly. If your site is old or hard to edit, a rebuild may be the cheaper path; see [how much a website costs](/blog/how-much-does-a-website-cost) before you decide. For other ways to bring in enquiries while SEO builds, see [lead generation strategies](/blog/lead-generation-strategies).',
    },
    { type: 'h2', text: 'Step 3: set up Georgian and English versions correctly' },
    {
      type: 'p',
      text: 'Many companies in Georgia run the site in both languages. Google\'s guidance on [managing multilingual sites](https://developers.google.com/search/docs/specialty/international/managing-multi-regional-sites) gives rules that are easy to follow if you set them up at the start.',
    },
    {
      type: 'ul',
      items: [
        'Use a separate URL for each language version. Google recommends "using different URLs for each language version of a page rather than using cookies or browser settings to adjust the content language on the page." A subdirectory such as example.com/ka/ is described as low maintenance because it stays on the same host.',
        'Translate the main content, not only the menu and footer. Google recommends a single language for content and navigation on each page, and says that translating only the boilerplate "can create a bad user experience."',
        'Do not automatically redirect visitors by language. Google warns this could prevent users and search engines from viewing all versions of your site.',
        'Tell Google how the versions relate with hreflang. You can use HTML link elements, HTTP headers or an XML sitemap, and Google treats the three as equivalent, so choose the one easiest to maintain.',
      ],
    },
    {
      type: 'p',
      text: 'The [hreflang rules](https://developers.google.com/search/docs/specialty/international/localized-versions) are strict. Each version must list itself and every other version, and if two pages do not point to each other, the tags are ignored. URLs must be fully qualified, including https. Language codes are ISO 639-1 (ka for Georgian, en for English), optionally followed by a region, and you cannot give a country code alone. Add an x-default entry for a fallback page, such as a language selector, for visitors whose language you do not serve. Google lists missing return links and wrong language or region codes as the most frequent errors.',
    },
    {
      type: 'p',
      text: 'On duplicates, the same page says localized versions are only considered duplicates if the main content of the page remains untranslated. So a Georgian page whose main content is translated is not treated as a duplicate of its English version.',
    },
    { type: 'h2', text: 'Step 4: local search and Google Business Profile' },
    {
      type: 'p',
      text: 'If customers come to a location, or you serve a specific area, your Business Profile is part of SEO. Google says that adding or claiming a business is free, and that the address must be correct and meet its guidelines. Only businesses eligible for a Business Profile can add or claim a location.',
    },
    {
      type: 'p',
      text: 'Google explains [local ranking](https://support.google.com/business/answer/7091) with three factors:',
    },
    {
      type: 'ul',
      items: [
        'Relevance: how well a profile matches what someone is searching for. Complete and detailed business information helps.',
        'Distance: how far the business is from the person searching. You cannot change this.',
        'Prominence: how well-known the business is. Google notes that more reviews and positive ratings can help local ranking.',
      ],
    },
    {
      type: 'p',
      text: 'Google\'s Business Profile help is blunt about one thing: "There\'s no way to request or pay for a better local ranking on Google." Paid ads are a separate channel; if you want to compare them with SEO, read [what Google Ads cost](/blog/google-ads-cost).',
    },
    { type: 'h2', text: 'Step 5: measure in Search Console, then wait' },
    {
      type: 'p',
      text: 'Google\'s Starter Guide says "Every change you make will take some time to be reflected on Google\'s end," and suggests waiting a few weeks before judging a change. Use [Search Console\'s performance data](https://support.google.com/webmasters/answer/9128668) to see which searches show your pages and which get clicks, and its indexing reports to confirm new pages are in. Then repeat: improve the pages that appear but get few clicks, and add a page for each service that has none.',
    },
    { type: 'h2', text: 'Should you hire help?' },
    {
      type: 'p',
      text: 'Google lists content review, technical advice, keyword research and training among the services SEOs provide, and says a great time to hire is when you\'re considering a site redesign or planning to launch a new site. Google\'s [guidance on hiring an SEO](https://developers.google.com/search/docs/fundamentals/do-i-need-seo) gives a warning worth keeping: "No one can guarantee a #1 ranking on Google." If someone guarantees first place, Google says to find someone else, and it notes that poor SEO work can risk damage to your site and reputation. When you talk to a provider, ask what results they expect and in what timeframe, as Google suggests.',
    },
    {
      type: 'p',
      text: 'If you want a second opinion before you commit, WakeUP Marketing offers a [free audit](/audit) of your current marketing, and the [SEO service page](/services/seo) lists what the work includes: a technical audit and fixes, keyword research in Georgian and English, pages written for search intent, local SEO and Google Business Profile, and a monthly report.',
    },
  ],
}
