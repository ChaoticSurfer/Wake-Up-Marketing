import type { BlogPost } from '@/lib/blog'

export const post: BlogPost = {
  locale: 'en',
  slug: 'seo-retainer-what-you-get',
  title: 'SEO retainer: what you should get every month',
  metaTitle: 'SEO Retainer: What You Get Monthly',
  description:
    'An SEO retainer should give you visible monthly work, a report tied to enquiries and an exit. What to expect, how to ask for proof, and when to skip it.',
  publishedAt: '2026-12-22T09:00:00+04:00',
  updatedAt: '2026-12-22T09:00:00+04:00',
  service: 'seo',
  reviewState: 'llm_reviewed',
  body: [
    {
      type: 'p',
      text: 'An SEO retainer is a fixed monthly fee for ongoing SEO work. Each month you should be able to point to specific things that were done on your site, a report that connects them to clicks and enquiries, and a way to leave if it is not working. If you cannot name the work, you are paying for access, not for SEO.',
    },
    { type: 'h2', text: 'What an SEO retainer is, and when it fits' },
    {
      type: 'p',
      text: 'A retainer pays for time and attention, not for a result. That suits SEO because the work never really ends: pages need writing, technical problems come back, and competitors keep publishing. Google says that [some changes take effect in a few hours and others several months](https://developers.google.com/search/docs/fundamentals/seo-starter-guide), and that you will likely want to wait a few weeks before judging whether your work helped. A retainer fits when there is a steady stream of work and you want one team to own it.',
    },
    {
      type: 'p',
      text: 'This guide is about what the monthly work should contain and how to check it. For what retainers cost, see [how much SEO costs](/blog/how-much-does-seo-cost). For the full menu of SEO tasks, see [what SEO services include](/blog/what-do-seo-services-include).',
    },
    { type: 'h2', text: 'What should happen every month' },
    {
      type: 'p',
      text: 'The first month or two usually go on an audit, analytics setup and a plan. After that, a healthy retainer settles into a rhythm. These are the parts to look for, with the proof you can ask to see.',
    },
    {
      type: 'table',
      head: ['Monthly work', 'What it means', 'Proof to ask for'],
      rows: [
        ['Technical upkeep', 'Fix pages Google cannot crawl or index, broken links, slow or broken templates', 'A list of issues found and fixed, with URLs'],
        ['Content', 'New pages for things buyers search, and updates to pages that already exist', 'The new or changed URLs and the query each one targets'],
        ['On-page changes', 'Titles, headings, internal links and page copy aligned to search intent', 'A before and after of each edited page'],
        ['Local and language setup', 'Google Business Profile, and correct Georgian and English versions', 'The profile updates and the language tags in place'],
        ['Links and mentions', 'Earned mentions and relevant partner links, not bought ones', 'The pages that link to you and how they were obtained'],
        ['Reporting and next steps', 'What moved, what did not, what happens next month', 'A written report and a short call'],
      ],
    },
    {
      type: 'p',
      text: 'Not every month will contain every row. A month spent on a large content batch may have little technical work. What matters is that the mix matches the plan you agreed, and that the plan is written down.',
    },
    { type: 'h2', text: 'How to ask for proof of work' },
    {
      type: 'p',
      text: 'Google\'s guidance on [hiring an SEO](https://developers.google.com/search/docs/fundamentals/do-i-need-seo) gives questions to ask a prospective provider, including "Can you show me examples of your previous work and share some success stories?" and "How do you measure your success?". It also lists a question about whether they will share all the changes they make to your site, and warns: "Be careful if a company is secretive or won\'t clearly explain what they intend to do."',
    },
    {
      type: 'p',
      text: 'Turn that into a monthly habit:',
    },
    {
      type: 'ul',
      items: [
        'Ask for a change log: every page edited or created, the date, and the reason.',
        'Keep your own access. Google advises that if you grant someone [access to Search Console](https://developers.google.com/search/docs/fundamentals/do-i-need-seo), you should only grant read access at this stage. Keep your domain, hosting and analytics accounts in your own name.',
        'Check a sample yourself. Open three pages from the change log and confirm the change is live.',
        'Ask what was planned and not done, and why.',
      ],
    },
    { type: 'h2', text: 'What the report should show' },
    {
      type: 'p',
      text: 'A report that lists only keyword positions is thin. Google\'s [Performance report in Search Console](https://support.google.com/webmasters/answer/7576553) gives four numbers you can check yourself: clicks (times a user clicked your site from Google Search results), impressions (how many times your site appeared in search results), click-through rate, and average position. Ask for those, plus the number that matters to a business: enquiries from organic search, such as form submissions and calls.',
    },
    {
      type: 'ul',
      items: [
        'Trend over several months, not one month in isolation.',
        'Which pages and queries brought the clicks, in Georgian and English separately if you have both.',
        'Work completed against the plan.',
        'What is blocked, and whether the block is on your side (for example, approvals or developer time).',
      ],
    },
    { type: 'h2', text: 'What to put in the contract' },
    {
      type: 'ol',
      items: [
        'The scope in plain words: what is done monthly, and what costs extra.',
        'The reports you receive and when.',
        'How long the minimum term is and how much notice ending needs. Shorter, rolling terms are easier to leave.',
        'Who owns the content, accounts and data when the contract ends.',
        'How links are obtained. Google\'s [spam policies](https://developers.google.com/search/docs/essentials/spam-policies) list "Buying or selling links for ranking purposes" and excessive link exchanges as link spam, so a provider promising a set number of paid links each month is a risk to your site.',
        'No ranking guarantees. Google says: "If they guarantee you that their changes will give you first place in search results, find someone else."',
      ],
    },
    { type: 'h2', text: 'When a retainer is the wrong model' },
    {
      type: 'ul',
      items: [
        'You need one defined job, such as an audit, a site migration or a set of new service pages. A fixed-scope project fits better.',
        'You cannot make changes. If pages, developers or approvals sit with people who will not act on recommendations, monthly advice just piles up.',
        'You run a small local business. Google says that [you can probably do much of the work yourself](https://developers.google.com/search/docs/fundamentals/do-i-need-seo); the [SEO guide for small business](/blog/seo-for-small-business) lists the steps.',
        'You need leads this month. SEO takes time, as Google\'s own guidance above notes. See [Google Ads vs SEO](/blog/google-ads-vs-seo).',
        'The offer has no named work and no way out: a vague scope, a long minimum term and a guarantee.',
      ],
    },
    { type: 'h2', text: 'Where to start' },
    {
      type: 'p',
      text: 'Before any retainer, find out what your site needs. WakeUP Marketing offers a [free marketing audit](/audit) of your website and the path from visit to enquiry. Its [SEO service](/services/seo) lists a technical audit and fixes, keyword research in Georgian and English, pages written for search intent, local SEO and a monthly report in rankings, organic traffic and leads. Compare it with other providers using the questions above, and ask each one the same ones.',
    },
  ],
}
