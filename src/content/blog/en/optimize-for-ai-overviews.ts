import type { BlogPost } from '@/lib/blog'

export const post: BlogPost = {
  locale: 'en',
  slug: 'optimize-for-ai-overviews',
  title: 'How to optimize for Google AI Overviews: what Google says and what is worth doing',
  metaTitle: 'How to Optimize for AI Overviews',
  description:
    'How to optimize for Google AI Overviews: what Google says about inclusion, the few changes worth making, and the vendor claims that are still unproven.',
  publishedAt: '2027-01-29T09:00:00+04:00',
  updatedAt: '2027-01-29T09:00:00+04:00',
  service: 'seo',
  reviewState: 'llm_reviewed',
  body: [
    {
      type: 'p',
      text: 'To optimize for Google AI Overviews, do ordinary SEO well: keep the page crawlable and indexed with a snippet allowed, and publish content that is original and useful. Google\'s own documentation says there is no separate checklist, no special markup and no extra file. What you can control is eligibility and quality, not whether Google chooses to show you.',
    },
    { type: 'h2', text: 'What AI Overviews are' },
    {
      type: 'p',
      text: 'AI Overviews are AI-generated summaries that Google places above some search results, with links to pages it drew on. Google\'s documentation, [AI features and your website](https://developers.google.com/search/docs/appearance/ai-features), explains that AI Overviews and AI Mode can use "query fan-out": they run several related searches to build one answer. It adds that these features can show "a wider and more diverse set of helpful links" than classic search, and that an AI Overview appears only when Google\'s systems judge it "additive to classic Search".',
    },
    {
      type: 'p',
      text: 'That last point matters for planning. Many searches show no overview at all, so you cannot assume that every keyword you target will have one.',
    },
    { type: 'h2', text: 'What Google says about being included' },
    {
      type: 'p',
      text: 'The same Google page sets out the eligibility rule: a page must be indexed and eligible to be shown in Google Search with a snippet, and it states that "there are no additional technical requirements". It also says: "There are no additional requirements to appear in AI Overviews or AI Mode" (Google Search Central). Being indexed does not guarantee that a page is shown.',
    },
    {
      type: 'p',
      text: 'Google\'s guide to [optimizing for generative AI search](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide) goes further. It treats this as SEO, because these features rely on the same core ranking and quality systems. It points to original content that adds a first-hand perspective, not a restatement of what is already online. It also says: "You don\'t need to create new machine readable files, AI text files, markup, or Markdown to appear in Google Search."',
    },
    { type: 'h2', text: 'Changes worth making' },
    {
      type: 'p',
      text: 'Everything below comes from Google\'s two pages above or from fundamentals they point to. None of it guarantees an appearance.',
    },
    {
      type: 'ol',
      items: [
        'Check that Google can crawl and index the pages that matter. Google lists "ensuring that crawling is allowed in robots.txt, and by any CDN or hosting infrastructure" among its best practices. A firewall that blocks Googlebot hides you from every Google feature. [What is technical SEO](/blog/what-is-technical-seo) covers the checks.',
        'Do not block snippets on pages you want cited. The controls Google names for limiting what appears are nosnippet, data-nosnippet, max-snippet and noindex. If someone added one of them to a service page years ago, remove it.',
        'Keep important content in text. Google asks that important content is "available in textual form", so do not leave prices, specifications or answers only inside images, video or a script-rendered widget.',
        'Write the page only you can write. Add your own process, data, photos, examples and people. A page that restates the top five results gives a system with query fan-out nothing new to pick.',
        'Answer the question near the top, then add depth. This is good writing for readers and also easy to quote. Google says there is no ideal length and no need to chop content into tiny pieces.',
        'Make structured data match the visible page. Google says structured data "isn\'t required for generative AI search". If you use it, keep it consistent with what the page shows. See [schema markup for small business](/blog/schema-markup-for-small-business).',
        'Keep your business data current. Google names Merchant Center for products and Google Business Profile for local business details as ways to be visible in Search.',
      ],
    },
    {
      type: 'p',
      text: 'If this reads like the basics, it is because it is. The [SEO checklist for small business](/blog/seo-checklist-for-small-business) covers the same ground in more detail.',
    },
    { type: 'h2', text: 'Claims to treat as unproven' },
    {
      type: 'p',
      text: 'Much advice sold under names like AEO and GEO (answer or generative engine optimization) is vendor opinion. Google\'s guide addresses several tactics directly:',
    },
    {
      type: 'table',
      head: ['Claim you will hear', 'What Google\'s guide says'],
      rows: [
        ['Add an llms.txt file', 'Not needed: "You don\'t need to create new machine readable files, AI text files, markup, or Markdown to appear in Google Search"'],
        ['Add special schema for AI', '"There\'s no special schema.org markup you need to add"'],
        ['Break content into small chunks', '"There\'s no requirement to break your content into tiny pieces for AI to better understand it"; no ideal page length'],
        ['Rewrite pages for AI and chase every wording variant', '"AI systems can understand synonyms and general meanings of what someone is seeking"'],
        ['Publish many pages for every fan-out question', 'Creating pages mainly to manipulate rankings or AI responses violates the scaled content abuse policy'],
        ['Buy a tool that scores your AI visibility', '"No third-party tool has access to our internal ranking or AI systems"'],
      ],
    },
    {
      type: 'p',
      text: 'Third-party tools can still be useful for watching which answers mention your brand. Treat their scores as estimates, not as Google data.',
    },
    { type: 'h2', text: 'What it means for traffic' },
    {
      type: 'p',
      text: 'The effect on clicks is real but measured mostly outside Google. Pew Research Center tracked the browsing of 900 U.S. adults in March 2025. Users who met an AI summary clicked a traditional result link in 8% of visits, against 15% for visits with no summary, and clicked a link inside the summary in 1% of visits ([Pew Research Center, July 2025](https://www.pewresearch.org/short-reads/2025/07/22/google-users-are-less-likely-to-click-on-links-when-an-ai-summary-appears-in-the-results/)). About 18% of the searches in that sample produced a summary. This is a U.S. study from that period, so it says little about the exact effect on Georgian-language searches.',
    },
    {
      type: 'p',
      text: 'Google says appearances in AI features are reported in the Performance report in Search Console, within the "Web" search type. Set up the account first with our [Google Search Console guide](/blog/google-search-console-guide), then watch for pages whose impressions rise while clicks stay flat.',
    },
    { type: 'h2', text: 'Where to start' },
    {
      type: 'p',
      text: 'Pick ten pages that bring leads, run through the list above, and fix what is broken before writing anything new. The [free audit](/audit) is one way to get a list of crawl, indexing and content problems on your own site. WakeUP offers this kind of work as part of its [SEO service](/services/seo), which includes technical SEO, keyword research and content. If you prefer to do it in-house or with another agency, the same list applies.',
    },
  ],
}
