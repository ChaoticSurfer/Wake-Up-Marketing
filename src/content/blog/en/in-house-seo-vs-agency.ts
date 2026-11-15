import type { BlogPost } from '@/lib/blog'

export const post: BlogPost = {
  locale: 'en',
  slug: 'in-house-seo-vs-agency',
  title: 'In-house SEO vs agency: hire one person, buy an agency, or split the work',
  metaTitle: 'In-House SEO vs Agency',
  description:
    'In-house SEO vs agency for a company of 20-250 people: what one hire can and cannot cover, when an agency fits, and how a hybrid splits the work.',
  publishedAt: '2026-12-26T18:00:00+04:00',
  updatedAt: '2026-12-26T18:00:00+04:00',
  service: 'seo',
  reviewState: 'llm_reviewed',
  body: [
    {
      type: 'p',
      text: 'In-house SEO vs agency usually ends in a split. One person inside the company cannot cover technical SEO, content and links alone, and an agency does not know your product as you do. For a company of 20 to 250 people, the common best fit is an in-house owner who sets priorities and approves work, plus an agency or specialists for the parts you cannot staff.',
    },
    {
      type: 'p',
      text: 'This post is only about SEO staffing. For the wider question across all marketing channels, read [marketing agency vs in-house](/blog/marketing-agency-vs-in-house).',
    },
    { type: 'h2', text: 'What the SEO work consists of' },
    {
      type: 'p',
      text: 'Before you choose who does it, list the jobs. SEO needs different skills, and few people are strong at all of them.',
    },
    {
      type: 'table',
      head: ['Job', 'Skill needed', 'How often'],
      rows: [
        ['Technical: crawling, indexing, speed, redirects, site structure', 'Developer-level knowledge, access to the website code', 'Heavy at the start, then as the site changes'],
        ['Keyword research and page planning', 'Analytical, knows the market and the buyer', 'Quarterly, with regular updates'],
        ['Content: new pages and updates', 'Writing, subject knowledge, editing; in Georgian and English if you serve both', 'Weekly or monthly'],
        ['Local SEO and Google Business Profile', 'Attention to detail, local knowledge', 'Monthly'],
        ['Links and mentions', 'Outreach and judgement about what is safe', 'Ongoing'],
        ['Reporting and analysis', 'Analytics and Search Console skills, ties SEO to enquiries', 'Monthly'],
      ],
    },
    {
      type: 'p',
      text: 'The full list of tasks, and what to ask for in a proposal, is in [what SEO services include](/blog/what-do-seo-services-include).',
    },
    { type: 'h2', text: 'Option 1: one in-house SEO' },
    {
      type: 'p',
      text: 'A single hire can give you steady attention, deep knowledge of your products and customers, and fast answers when sales or the web team need something. For a company with a large catalogue, many pages or a complex product, that depth is valuable.',
    },
    {
      type: 'ul',
      items: [
        'Cost beyond salary. Budget for employer contributions, a computer, SEO tools, training and the months it takes a new hire to become productive. For scale only: Geostat reports [average monthly nominal earnings of employees of 2,389.3 GEL in the second quarter of 2026](https://www.geostat.ge/en/modules/categories/39/wages) across all sectors. That is not an SEO salary, so get real offers before you plan.',
        'Skill gaps. One person is usually an analyst and content planner, not also a developer and a writer. Technical fixes still need your developer, and content still needs writers.',
        'Single point of failure. If they resign, the knowledge, logins and plans leave too, unless they are documented.',
        'Isolation. One person sees only your site. Nobody tells them when a method is outdated or risky.',
      ],
    },
    {
      type: 'p',
      text: 'It fits best when SEO is a major source of enquiries, the site is large or changes weekly, and you can give the person developer and writer time.',
    },
    { type: 'h2', text: 'Option 2: an SEO agency' },
    {
      type: 'p',
      text: 'An agency brings several skills at once, existing tools and a process, and can often start sooner than a hiring round allows. You pay a fee, and the contract sets the notice period, so read it before you sign.',
    },
    {
      type: 'ul',
      items: [
        'Less product depth. The agency has to learn your business, and the first months go on that. Give it access to sales and product people.',
        'Variable quality. Check the work, not the pitch. [SEO agency red flags](/blog/seo-agency-red-flags) lists what to look for in the proposal, the contract and the report.',
        'You are still responsible. Google\'s [guidance on hiring an SEO](https://developers.google.com/search/docs/fundamentals/do-i-need-seo) says "Ultimately, you are responsible for the actions of any companies you hire", and that no one can guarantee a number one ranking.',
        'Access and ownership. Keep Search Console, analytics, the domain and the CMS in your own name, with the agency as a user you can remove.',
      ],
    },
    {
      type: 'p',
      text: 'It fits best when you have no SEO owner, need several skills but not full-time, or want to test SEO before committing to a salary. What a monthly engagement should contain is in [SEO retainer: what you get](/blog/seo-retainer-what-you-get), and prices in [how much SEO costs](/blog/how-much-does-seo-cost).',
    },
    { type: 'h2', text: 'Option 3: hybrid' },
    {
      type: 'p',
      text: 'In a hybrid, your employee owns the priorities, the budget, the relationship with sales and the approval of everything published. The agency or freelancers carry out the specialist and high-volume work. A workable split:',
    },
    {
      type: 'table',
      head: ['Done in-house', 'Done by the agency or specialists'],
      rows: [
        ['Goals, priorities and the page plan', 'Technical audit and fixes with your developer'],
        ['Product facts, prices and claims checked before publishing', 'Keyword research and content drafts'],
        ['Approval of every page and change', 'Local SEO upkeep and links'],
        ['Owner of Search Console, analytics and logins', 'Monthly report with next actions'],
        ['Conversations with sales about lead quality', 'Testing and suggestions from work on other sites'],
      ],
    },
    {
      type: 'p',
      text: 'The risk of a hybrid is blurred responsibility. Write down who does what, who approves, and how quickly each side answers.',
    },
    { type: 'h2', text: 'Do you need either?' },
    {
      type: 'p',
      text: 'Maybe not yet. Google says that if you run a small local business, [you can probably do much of the work yourself](https://developers.google.com/search/docs/fundamentals/do-i-need-seo). If your site is small and the basics are missing, start with the [SEO for small business](/blog/seo-for-small-business) checklist before you hire anyone.',
    },
    { type: 'h2', text: 'Decision table' },
    {
      type: 'table',
      head: ['Your situation', 'Lean towards'],
      rows: [
        ['Small site, local customers, basics missing', 'Do it yourself or a one-off audit'],
        ['No SEO knowledge in the team and a need for results started soon', 'Agency'],
        ['SEO is a main channel, large site or product catalogue, changes every week', 'In-house owner, with outside help for technical and content peaks'],
        ['Marketing manager exists but is stretched across channels', 'Hybrid: keep them as owner, outsource SEO execution'],
        ['Unsure whether SEO suits your market', 'Agency or specialist on a limited scope first'],
        ['Regulated or highly technical product', 'In-house owner for accuracy, plus an agency for process'],
      ],
    },
    { type: 'h2', text: 'Plan for the time it takes' },
    {
      type: 'p',
      text: 'Whichever route you choose, results are slow, and that affects staffing. An Ahrefs study published in May 2025 on data from 2023 found that only [1.74% of about one million random URLs reached the top 10 within a year, and 6.11% of about two million new, non-empty English pages](https://ahrefs.com/blog/how-long-does-it-take-to-rank/), the figure the author says might be a fairer one. It measured English-language pages, not Georgian ones, so use it as a reminder to budget a runway of several months before judging, not as a forecast. A new hire who is judged after eight weeks, or an agency fired after two months, will rarely show the benefit.',
    },
    {
      type: 'p',
      text: 'Agree the measures first: qualified enquiries from search, rankings for the pages that matter and the work completed each month.',
    },
    { type: 'h2', text: 'Where WakeUP fits' },
    {
      type: 'p',
      text: 'WakeUP offers SEO as a service: technical fixes, keyword research in Georgian and English, content and local SEO, with a monthly report. It is one option beside hiring and other agencies; compare it using the questions above. See [SEO services](/services/seo), or request the [free audit](/audit) to see what your site needs before you decide on a model.',
    },
  ],
}
