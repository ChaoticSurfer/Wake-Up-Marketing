import type { BlogPost } from '@/lib/blog'

export const post: BlogPost = {
  locale: 'en',
  slug: 'multilingual-seo',
  title: 'Multilingual SEO for a Georgian, English and Russian website',
  metaTitle: 'Multilingual SEO: Georgian, English, RU',
  description:
    'Multilingual SEO for a Georgian, English and Russian site: choose a URL structure, set hreflang, keep translations useful and track each language.',
  publishedAt: '2027-01-11T15:00:00+04:00',
  updatedAt: '2027-01-11T15:00:00+04:00',
  service: 'seo',
  reviewState: 'llm_reviewed',
  body: [
    {
      type: 'p',
      text: 'Multilingual SEO means setting up a site so that Google can find, tell apart and show each language version to the right searchers. For a Georgian, English and Russian site the work is: one URL folder per language, hreflang links between matching pages, real translations rather than machine copies, a separate view of each language in Search Console, and a decision about which language to build out first.',
    },
    { type: 'h2', text: 'What Google looks at to tell languages apart' },
    {
      type: 'p',
      text: 'It helps to know what does not work. Google\'s documentation on [localized versions](https://developers.google.com/search/docs/specialty/international/localized-versions) states that Google does not use hreflang or the HTML lang attribute to detect the language of a page. It works out the language from the visible content. Hreflang then tells it which pages are versions of each other, so it can show the right one.',
    },
    {
      type: 'p',
      text: 'Two consequences follow. A Georgian page needs real Georgian text in the body, not only in the menu. And the basic hreflang rules (list every version, link back, use correct codes) are covered in [SEO for a small business](/blog/seo-for-small-business), so this post concentrates on the decisions around them.',
    },
    { type: 'h2', text: 'Choose a URL structure once' },
    {
      type: 'p',
      text: 'Google\'s guide to [managing multilingual and multi-regional sites](https://developers.google.com/search/docs/specialty/international/managing-multi-regional-sites) compares the options. Its country-domain option is framed around targeting a single country, so a site that only offers several languages has no obvious reason to buy separate country domains.',
    },
    {
      type: 'table',
      head: ['Structure', 'Example', 'Google\'s listed upside', 'Google\'s listed downside', 'Fit for Georgia'],
      rows: [
        ['Subdirectory', 'example.ge/ka/, /en/, /ru/', 'Low maintenance, same host', 'Single server location; separation of sites is harder', 'The usual choice: one site, one domain, one set of links to build'],
        ['Subdomain', 'ru.example.ge', 'Easy to set up', 'Users may not recognise geotargeting from the URL alone', 'Only if the languages are run by different teams or systems'],
        ['Country domain', 'example.ru', 'Clear geotargeting', 'Expensive, limited availability', 'Only for a genuine second market with its own business'],
        ['URL parameter', 'example.ge?lang=ru', 'None listed', 'Google marks it "Not recommended"', 'Avoid'],
      ],
    },
    {
      type: 'p',
      text: 'Pick one structure and keep it. Changing it later means redirecting every URL. Decide too which language sits at the root. Some Georgian companies keep Georgian at the root (example.ge/) and use /en/ and /ru/; others put every language in a folder and use the root only as a language selector. Either works if each page has one stable URL.',
    },
    { type: 'p', text: 'Google also advises against switching languages for the visitor. Its guide says to avoid automatically redirecting users from one language version to another, and to offer links so people can choose. A visitor with an English browser who lands on a Georgian page you wanted them to see should find a visible link, not a forced redirect that a crawler may never get past.' },
    { type: 'h2', text: 'Hreflang: the decisions that go wrong' },
    {
      type: 'p',
      text: 'The mechanics (self-reference, return links, the three equivalent methods) are in Google\'s [localized versions guide](https://developers.google.com/search/docs/specialty/international/localized-versions) and summarised in [SEO for a small business](/blog/seo-for-small-business). The real decision is how to generate the tags from one source.',
    },
    {
      type: 'ul',
      items: [
        'Generate hreflang from the same data that builds the language switcher. If a page has no Russian version, neither the link nor the tag should exist. Partial clusters are fine as long as the pages that do exist point to each other.',
        'Avoid pointing hreflang at a redirect, a noindex page or a URL that is not the canonical one.',
        'Use x-default for the page that serves visitors none of your languages fit, often the language selector or the English version. Google describes x-default as the value used when no other language or region matches the user\'s browser setting.',
        'Keep the canonical of each page in its own language. A Russian page canonicalised to the Georgian one tells Google to treat the Georgian URL as the main one, so the Russian page may not show in Russian results.',
      ],
    },
    {
      type: 'p',
      text: 'On a Next.js site, the Metadata API takes an `alternates.languages` map per page, and the sitemap file convention accepts the same `alternates.languages` entries for each URL, as the [Next.js documentation](https://nextjs.org/docs/app/api-reference/functions/generate-metadata) shows. Build the map from your content data, not by hand per page, so a new post cannot ship without its links. What a technical check of canonicals and indexing involves is in [what is technical SEO](/blog/what-is-technical-seo).',
    },
    { type: 'h2', text: 'Translation quality: publish less, publish better' },
    {
      type: 'p',
      text: 'Google\'s guide advises against translating only the boilerplate while the main content stays in one language, and against side-by-side translations on one page, because they make it harder to tell each page\'s language. Its [spam policy](https://developers.google.com/search/docs/essentials/spam-policies) names translating among the automated transformations that, applied to scraped content to generate many pages, count as scaled content abuse where little value is provided to users. The risk is volume without value, so translate the pages that matter and edit them by hand.',
    },
    {
      type: 'p',
      text: 'In practice, for a Georgian company:',
    },
    {
      type: 'ul',
      items: [
        'Have a native speaker write or edit each priority page. Georgian grammar and the way people actually search differ from English, so a literal translation reads wrongly and misses the phrases buyers type.',
        'Research keywords per language instead of translating the English ones. The three languages have separate searches and separate results pages; the method is in [keyword research for SEO](/blog/keyword-research-for-seo).',
        'Localise, not just translate: currency, phone format, address, delivery area, examples and references that the reader recognises.',
        'Do not publish a language version of a page until it is ready. A missing page is better than a thin one. Start with the pages that earn enquiries (services, pricing logic, contact) and add blog posts per language only when each one has a reason to exist in that language.',
        'Keep brand and product names in Latin script, and translate titles and meta descriptions too, not just the body.',
      ],
    },
    { type: 'h2', text: 'Track each language separately' },
    {
      type: 'p',
      text: 'One combined report hides which language works. The simplest setup in Search Console is a [URL-prefix property](https://support.google.com/webmasters/answer/34592) for each language folder: Google says a URL-prefix property includes only URLs that begin with that prefix, so a property for https://example.ge/ru/ reports Russian pages alone. Keep the Domain property as well for the whole picture. Inside the [Performance report](https://support.google.com/webmasters/answer/7576553) you can group data by query, page or country.',
    },
    {
      type: 'p',
      text: 'Then review each language on its own: impressions, clicks and the queries that bring them, plus enquiries from the same language folder in your analytics. The questions to ask: Is the Russian folder getting impressions but few clicks, which suggests titles that do not match the query? Do Georgian queries land on the English page, which suggests a missing or weak Georgian version? Is the country a surprise? Setting up the analytics side is in [GA4 for a small business](/blog/ga4-for-small-business).',
    },
    { type: 'h2', text: 'Which language first in Georgia' },
    {
      type: 'p',
      text: 'There is no universal answer. Keyword tools may cover Georgian less well than English or Russian (Google Ads, for one, does not list Georgian among its [supported languages](https://support.google.com/google-ads/answer/6333734)), so check what any tool returns before trusting a gap in the numbers. Decide from your own evidence instead.',
    },
    {
      type: 'ol',
      items: [
        'Start from who buys. Use your CRM and chats to list which language each customer wrote in. This is the same exercise as in [how to create a buyer persona](/blog/how-to-create-buyer-persona).',
        'Check the results page for your three or four main phrases in each language. Where the top results are weak, thin or absent, one good page can win; where strong international sites dominate, the same page may not.',
        'Build the language of your main buyers first, then add the next one for the pages that earn money, not for the whole site.',
        'Re-check after three months using the per-language Search Console views above, and decide whether the next language is worth the cost of a native editor.',
      ],
    },
    {
      type: 'p',
      text: 'WakeUP\'s [SEO service](/services/seo) covers keyword research and pages in Georgian and English; if you want a view of how your current language setup performs, request the [free marketing audit](/audit). Ask for Russian specifically if your buyers use it, and confirm what is included before you commit.',
    },
  ],
}
