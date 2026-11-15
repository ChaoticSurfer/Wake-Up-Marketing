import type { BlogPost } from '@/lib/blog'

export const post: BlogPost = {
  locale: 'en',
  slug: 'keyword-research-for-seo',
  title: 'How to do keyword research for SEO in Georgia: free tools, three languages, search intent',
  metaTitle: 'How to Do Keyword Research for SEO',
  description:
    'How to do keyword research for SEO in Georgia: build a list from what you sell, check Georgian, English and Russian phrases, sort by intent, pick pages.',
  publishedAt: '2026-12-18T15:00:00+04:00',
  updatedAt: '2026-12-18T15:00:00+04:00',
  service: 'seo',
  reviewState: 'llm_reviewed',
  body: [
    {
      type: 'p',
      text: 'To do keyword research for SEO, list what you sell in your customers\' words, write each idea in Georgian, English and Russian, check which phrases people really use in free sources such as Search Console and Google autocomplete, sort them by search intent, look at the results page for each, and give every group of keywords one page. In a small market, judge phrases by the customers they bring, not by volume figures.',
    },
    { type: 'h2', text: 'Start from what you sell, not from a tool' },
    {
      type: 'p',
      text: 'A keyword tool shows what exists. It does not know which searches lead to a sale for you. So begin with a plain list and fill the tool in afterwards.',
    },
    {
      type: 'ul',
      items: [
        'Each service or product, named the way a customer would say it, not the way your price list does.',
        'The problems customers describe on the phone and in messages ("my site is slow", "how much does it cost to...").',
        'The questions sales hears before every deal, and the objections it hears at the end.',
        'The names of competitors and of alternatives people compare you with.',
      ],
    },
    {
      type: 'p',
      text: 'Ask the people who talk to customers for ten minutes. Their list is closer to real search behaviour than a brainstorm in a meeting room.',
    },
    { type: 'h2', text: 'Write every idea in Georgian, English and Russian' },
    {
      type: 'p',
      text: 'Buyers in Georgia search in more than one language, and the words are not translations of each other. Someone looking for a website might type a Georgian phrase such as "ვებსაიტის დამზადება", the English "website development Tbilisi" or the Russian "создание сайта Тбилиси". Those are three separate searches with separate results pages, and the English term may be used by a different kind of buyer than the Georgian one. The examples are illustrations, not measured volumes.',
    },
    {
      type: 'p',
      text: 'Make a sheet with one row per idea and three columns, one per language, plus a note on who searches that way: a local owner, an expat manager, a foreign buyer. Write the Georgian wording by hand, in the way people speak, and avoid machine translation of English phrases. Keep brand and product names in Latin script.',
    },
    { type: 'h2', text: 'Collect real phrases from free sources' },
    {
      type: 'p',
      text: 'None of the sources below gives a complete picture. Use them together.',
    },
    {
      type: 'table',
      head: ['Source', 'What it gives you', 'Limit'],
      rows: [
        ['[Search Console Performance report](https://support.google.com/webmasters/answer/7576553)', 'The queries people used before reaching your site, with clicks, impressions, click-through rate and average position. The default view is the past three months.', 'Only shows searches where you already appeared'],
        ['[Google autocomplete](https://support.google.com/websearch/answer/7368877)', 'Suggestions that reflect real searches, shaped by language and location', 'No volumes; signed-in users may see personalised suggestions, so use a private window'],
        ['[Google Trends](https://support.google.com/trends/answer/4365533)', 'Which of two phrases is searched more, and when interest peaks', 'Values are relative (0 to 100), not search counts; low-volume terms often show as 0'],
        ['[Keyword Planner](https://support.google.com/google-ads/answer/7337243)', 'Keyword ideas and volume estimates', 'Needs a Google Ads account with billing setup; Google says keywords with very low search volumes cannot be forecast'],
        ['Your own data', 'Site search, chat, email and call notes', 'Small sample, but it is your real buyers'],
      ],
    },
    {
      type: 'p',
      text: 'Treat Keyword Planner with care for Georgian phrases. Google Ads does not support Georgian as an ad language (see its [supported languages](https://support.google.com/google-ads/answer/6333734) page), so check what the tool actually returns in your account before relying on it, and expect gaps. Russian and English are both on that supported list. A missing number does not mean nobody searches: compare the autocomplete suggestions and the results page instead.',
    },
    { type: 'h2', text: 'Sort the list by search intent' },
    {
      type: 'p',
      text: 'The same topic can be searched for different reasons. Keyword guides such as [Ahrefs\'](https://ahrefs.com/seo/keyword-research) split intent into informational, commercial (or transactional) and navigational. For a company, three groups are enough:',
    },
    {
      type: 'ul',
      items: [
        'Learning ("what is", "how to", "difference between"). These suit blog posts and guides. Visitors are early and rarely buy on the first visit.',
        'Choosing and buying ("price", "company", "in Tbilisi", "best", "vs"). These suit service pages, comparison pages and landing pages. They bring the fewest visits and the most enquiries.',
        'Looking for you (your company name). These are for your home page and reviews.',
      ],
    },
    {
      type: 'p',
      text: 'Put each phrase in one group. A service page should target a buying phrase, and a guide should target a learning phrase. When a phrase is mixed, the results page tells you which it is.',
    },
    { type: 'h2', text: 'Check the results page before you choose' },
    {
      type: 'p',
      text: 'Search each shortlisted phrase in a private window, from Georgia if you can. Note what kind of page ranks: service pages, guides, directories, video, maps. If every result is a guide and you plan a service page, the match is wrong. If every result is a big international site, the phrase is hard to win and a narrower variation (a city, a sector, a use case) may be a better start. If the page has no good result in Georgian, that is often an opening for a well-made page, but only if people do search that way: check autocomplete and your own data.',
    },
    {
      type: 'p',
      text: 'Then score each candidate on three plain questions: would a buyer search this, can we make the best answer for it, and does the page lead to an enquiry? A phrase with a few searches a month that brings one good client is worth more than a popular phrase that brings none. For the same reason, [SEO and Google Ads](/blog/google-ads-vs-seo) can share a keyword list, but Google Ads does not support Georgian as an ad language, so a Georgian phrase list is mainly an SEO tool.',
    },
    { type: 'h2', text: 'Give every group one page, then track' },
    {
      type: 'ol',
      items: [
        'Group phrases that mean the same thing (for example the three-language versions of one service) and give each group one page, in the language of the searcher.',
        'Write the page title and main heading around the main phrase, then cover the related phrases in the text. Do not make several pages for near-identical phrases; they compete with each other. [SEO for small business](/blog/seo-for-small-business) covers page structure and language versions.',
        'Record the date, the page and the target phrase in a sheet.',
        'After a few weeks, return to Search Console. Look at the queries the page actually appears for, and add the ones you did not predict.',
        'Judge success by enquiries from the page, not only by position. The [SEO checklist for small business](/blog/seo-checklist-for-small-business) shows the technical and on-page checks that go with it.',
      ],
    },
    {
      type: 'p',
      text: 'If you would rather have keyword research done in Georgian and English by a team, WakeUP offers it as part of its [SEO service](/services/seo); other providers offer SEO too, so compare what each one delivers. A [free audit](/audit) of your current marketing is a lower-commitment way to see where your site stands before you invest.',
    },
  ],
}
