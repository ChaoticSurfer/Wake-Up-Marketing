import type { BlogPost } from '@/lib/blog'

export const post: BlogPost = {
  locale: 'en',
  slug: 'b2b-seo-strategy',
  title: 'B2B SEO strategy: how to rank when your buyer is a company',
  metaTitle: 'B2B SEO Strategy for Companies',
  description:
    'A B2B SEO strategy targets few, high-intent searches, serves a buying committee and is judged by pipeline. How to plan it for a Georgian B2B company.',
  publishedAt: '2027-01-09T18:00:00+04:00',
  updatedAt: '2027-01-09T18:00:00+04:00',
  service: 'seo',
  reviewState: 'llm_reviewed',
  body: [
    {
      type: 'p',
      text: 'A B2B SEO strategy aims at a small number of high-intent searches that company buyers use to solve a specific problem, builds pages for each stage of a long decision, and measures success in enquiries and pipeline instead of visits. The basics are the same as any SEO, but the targets, content and measurement change when the buyer is a business with several people involved.',
    },
    { type: 'h2', text: 'What changes when the buyer is a company' },
    {
      type: 'ul',
      items: [
        'Fewer searches. A phrase like "payroll software for 100 employees" is searched far less than a consumer phrase, and that is fine if the right few people find you.',
        'More people. The person who searches is often not the one who signs. A manager researches, a finance lead checks cost, an owner approves. Your site needs answers for each.',
        'Longer decisions. Buyers compare for weeks or months, return several times and read more than one page before they ask for contact.',
        'Higher value per lead. One won client can justify months of work, so ten qualified visits can matter more than ten thousand general ones.',
      ],
    },
    {
      type: 'p',
      text: 'Cycle lengths and committee sizes differ too much between industries to quote a figure. Use your own sales history: ask how many people joined the last five deals and how long they took.',
    },
    { type: 'h2', text: 'Target problem and decision terms, not volume' },
    {
      type: 'p',
      text: 'Start from the problems your buyers have and the words they use for the solution. Sort the phrases by what the searcher wants: learning about a problem, comparing options, or ready to talk to a supplier. Our guide to [search intent types](/blog/search-intent-types) shows how to read this from the results page, and [long tail keywords](/blog/long-tail-keywords) explains why specific phrases suit a small company.',
    },
    {
      type: 'table',
      head: ['Stage', 'Example phrases', 'Page that fits'],
      rows: [
        ['Problem', 'how to reduce invoice processing time', 'Guide or article'],
        ['Solution', 'invoice automation for accounting teams', 'Service or solution page'],
        ['Comparison', 'in-house vs outsourced accounting', 'Comparison page'],
        ['Decision', 'accounting outsourcing Tbilisi', 'Service page with proof and a contact form'],
      ],
    },
    {
      type: 'p',
      text: 'Keep the language question in mind: your buyers may search in Georgian, English or Russian, depending on the industry. Check what appears in each language, as in [keyword research for SEO](/blog/keyword-research-for-seo), before you decide which versions to build. Do not trust tool volume for rare B2B terms; confirm by reading the results and by checking Search Console queries once you have pages.',
    },
    { type: 'h2', text: 'Build pages for the whole committee' },
    {
      type: 'ul',
      items: [
        'A page per service or solution, written for the person who will use it, with who it is for, what is included and how work proceeds.',
        'A page for the person who approves: costs and what drives them, risks, contracts, timelines. Do not publish figures you have not confirmed with your own team.',
        'Proof: named clients you may mention, real project descriptions, certifications, team profiles. Only publish what is true and approved.',
        'Comparison and "how to choose" pages for buyers who are weighing suppliers or in-house options.',
        'A clear next step on every page: a form that asks the few things you need to qualify the enquiry. See [how to qualify leads](/blog/how-to-qualify-leads).',
      ],
    },
    { type: 'h2', text: 'Show real expertise' },
    {
      type: 'p',
      text: 'Company buyers are cautious, so content has to show you know the work. Google\'s [guidance on helpful content](https://developers.google.com/search/docs/fundamentals/creating-helpful-content) asks whether content shows "first-hand expertise and a depth of knowledge", and whether it is clear who created it. For a B2B firm that means articles written or reviewed by the people who do the work, with real details from the job: steps, constraints, what goes wrong. Generic summaries of other sites add nothing.',
    },
    {
      type: 'p',
      text: 'Write for the questions your sales team hears, not for keywords alone. Each repeated question from a prospect is a candidate page.',
    },
    { type: 'h2', text: 'Keep the technical basics in place' },
    {
      type: 'p',
      text: 'Pages that nobody can crawl or that load slowly lose the few visitors you have. Check indexing, page speed and site structure with the [technical SEO guide](/blog/what-is-technical-seo) and the [SEO checklist for small business](/blog/seo-checklist-for-small-business). Links from industry sources help too; see [how to build backlinks](/blog/how-to-build-backlinks).',
    },
    { type: 'h2', text: 'Measure pipeline, not traffic' },
    {
      type: 'p',
      text: 'Traffic is the wrong score when you expect few visits. Search Console\'s [Performance report](https://support.google.com/webmasters/answer/7576553) shows clicks, impressions, click-through rate and average position, with search queries as a way to group the rows. That tells you whether the right searches reach you. To see what visitors do next, mark your enquiry as a [key event in Google Analytics](https://support.google.com/analytics/answer/9267568), which defines one as an event that "measures an action that\'s particularly important to the success of your business."',
    },
    {
      type: 'table',
      head: ['Measure', 'What it tells you', 'Where from'],
      rows: [
        ['Impressions and clicks on target queries', 'Whether you are visible for buyer terms', 'Search Console'],
        ['Enquiries from organic search', 'Whether visitors act', 'Analytics key event, form or call tracking'],
        ['Qualified enquiries', 'Whether they fit your ideal customer', 'Your CRM or sales notes'],
        ['Opportunities and won deals with organic source', 'Pipeline and revenue', 'CRM, with the source recorded'],
      ],
    },
    {
      type: 'p',
      text: 'Ask the sales team to record how each lead found you ("how did you hear about us?" in the first call). Reports built on that answer will show an SEO effect that analytics alone misses. See [what a good SEO report includes](/blog/what-a-good-seo-report-includes) and [lead scoring models](/blog/lead-scoring-model).',
    },
    { type: 'h2', text: 'Be realistic about time' },
    {
      type: 'p',
      text: 'Pages take time to be found, and B2B buyers take time to decide, so expect the first closed deals from organic search to arrive well after launch. Judge the first months by whether the right pages are indexed, impressions are rising on buyer terms and enquiries are qualified.',
    },
    {
      type: 'p',
      text: 'WakeUP offers SEO as a service, covering keyword research, on-page and technical fixes and content; see the [SEO service page](/services/seo). It is one option next to hiring in-house or a consultant, and the comparison in [in-house SEO vs agency](/blog/in-house-seo-vs-agency) can help you decide. For a view of where your site stands, request a [free audit](/audit).',
    },
  ],
}
