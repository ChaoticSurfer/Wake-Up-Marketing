import type { BlogPost } from '@/lib/blog'

export const post: BlogPost = {
  locale: 'en',
  slug: 'seo-contract-terms',
  title: 'SEO contract terms: the clauses to check before you sign',
  metaTitle: 'SEO Contract Terms to Check',
  description:
    'SEO contract terms to check before you sign: scope, contract length and exit, KPIs, ownership of content and accounts, and payment timing.',
  publishedAt: '2027-01-06T09:00:00+04:00',
  updatedAt: '2027-01-06T09:00:00+04:00',
  service: 'seo',
  reviewState: 'llm_reviewed',
  body: [
    {
      type: 'p',
      text: 'Before you sign an SEO contract, check five things: the scope (what is done each month and what costs extra), the term and how you can leave, the measures the work is judged by, who owns the content, accounts and data, and when you pay. If any of these is vague or missing, ask for it in writing. This guide is general information, not legal advice; have a lawyer read the final contract.',
    },
    { type: 'h2', text: 'Scope: what is actually included' },
    {
      type: 'p',
      text: 'A frequent source of disagreement is not results but what the fee covers. "SEO services" can mean a one-off audit, monthly content, link work, or only reports. Ask for a scope that lists work by name and by quantity per month, for example "up to four new or updated pages", "technical fixes found in the audit, up to X hours" and "monthly report within five working days". Compare it with [what SEO services include](/blog/what-do-seo-services-include) and [what you get from an SEO retainer](/blog/seo-retainer-what-you-get).',
    },
    {
      type: 'ul',
      items: [
        'Named deliverables per month, not "ongoing optimisation".',
        'What is excluded and charged separately: copywriting, translation, development time, paid tools, photography.',
        'What the agency needs from you (access, approvals, a developer) and what happens to the timeline if you are late.',
        'How a change request is raised, priced and agreed.',
        'Who does the work: the agency\'s own team, or subcontractors, and whether you are told which.',
      ],
    },
    { type: 'h2', text: 'Term and exit: how long, and how to leave' },
    {
      type: 'p',
      text: 'SEO results take time, and a short trial may not show them, so a minimum term of three to six months can be reasonable if the monthly deliverables are clear. What matters more is how you leave. Look for these points:',
    },
    {
      type: 'table',
      head: ['Clause', 'Fair', 'Check twice'],
      rows: [
        ['Minimum term', 'Three to six months with a named deliverable each month', '12 months or more with no exit if deliverables are missed'],
        ['Notice period', '30 days after the minimum term', 'Notice only at fixed dates, or "auto-renews unless cancelled 90 days before"'],
        ['Renewal', 'Rolling month to month, or renewed in writing', 'Automatic renewal for the full original term'],
        ['Exit for cause', 'You may end the contract if agreed work is not delivered, after written notice and a short chance to fix it', 'No right to end early for missed work'],
        ['After the end', 'Handover of files, accounts and reports within a set time', 'Nothing said, or fees for the handover'],
      ],
    },
    {
      type: 'p',
      text: 'Ask what you keep if you stop: the content, the audits, the keyword research and the work log. If the agency stops working but the contract continues, you pay for nothing, so the exit clause should be one you can use.',
    },
    { type: 'h2', text: 'KPIs: what the work is judged by' },
    {
      type: 'p',
      text: 'Do not accept a promised ranking. Google\'s guidance on hiring an SEO is plain: ["If they guarantee you that their changes will give you first place in search results, find someone else."](https://developers.google.com/search/docs/fundamentals/do-i-need-seo) No contract can honestly promise a position, because the results are set by Google and not by the agency. What a contract can promise is the work and the measurement.',
    },
    {
      type: 'ul',
      items: [
        'Activity measures the agency controls: pages published, issues fixed, reports delivered on time.',
        'Outcome measures both sides watch: impressions and clicks in Search Console, organic enquiries, and calls or form submissions tracked in analytics.',
        'A baseline written into the contract: today\'s numbers, and the date and tool they came from.',
        'A review date, such as month three, to look at the trend and agree what changes if it is flat.',
      ],
    },
    {
      type: 'p',
      text: 'Google also lists questions to ask any SEO, including: "What kind of results do you expect to see, and in what timeframe?" and whether they will share all the changes they make to your site. Put the answers into the contract. For what the report should show, see [what a good SEO report includes](/blog/what-a-good-seo-report-includes).',
    },
    { type: 'h2', text: 'Ownership: content, accounts and data' },
    {
      type: 'p',
      text: 'The contract should say, in one clear sentence each, that you own what you paid for. Three things are worth naming.',
    },
    {
      type: 'ol',
      items: [
        'Content: articles, page text, images and design files become yours on payment, and you may use them anywhere. If the agency keeps ownership until the contract has run its full term, you lose the work when you leave.',
        'Accounts: your Search Console, analytics, Business Profile, domain and hosting should be registered to your company. In Search Console, Google states that ["You can grant permissions to other users only if you are a property owner."](https://support.google.com/webmasters/answer/7687615) If the agency is the only owner, you cannot manage access yourself. Make yourself the owner and add the agency as a user.',
        'Data and reports: the raw exports and the historic reports are yours, in an open format.',
      ],
    },
    {
      type: 'p',
      text: 'Add a clause on methods too. Google defines link spam as ["creating links to or from a site primarily for the purpose of manipulating search rankings"](https://developers.google.com/search/docs/essentials/spam-policies) and says sites that break its policies may rank lower or not appear at all. The contract should say that the agency will follow Google\'s published guidelines, will tell you where any links come from, and will help to fix what it caused if a penalty follows. The signs of poor practice are listed in [SEO agency red flags](/blog/seo-agency-red-flags), and link building done properly is in [how to build backlinks](/blog/how-to-build-backlinks).',
    },
    { type: 'h2', text: 'Payment: amount, timing and what happens if work stops' },
    {
      type: 'table',
      head: ['Term', 'What to agree'],
      rows: [
        ['Fee', 'A fixed monthly fee for the stated scope, with the currency and whether VAT is included'],
        ['When you pay', 'Monthly in arrears is safest; if in advance, no more than one month, so a bad month costs you one month'],
        ['Large upfront payments', 'Only against a specific deliverable, such as an audit, handed over before the next payment'],
        ['Extras', 'Written approval before any work or tool that costs more than the agreed fee'],
        ['Late payment', 'What fee or pause applies, and a notice period before work is paused'],
        ['Pass-through costs', 'Who pays for tools, content or links, and whether the agency adds a margin'],
        ['Refunds', 'What happens to a prepaid month if the contract ends for cause'],
      ],
    },
    {
      type: 'p',
      text: 'Fees vary a lot by scope, so use a benchmark to judge a quote: [how much SEO costs](/blog/how-much-does-seo-cost) and [marketing agency pricing](/blog/marketing-agency-pricing) show what drives the price.',
    },
    { type: 'h2', text: 'Other clauses worth a line' },
    {
      type: 'ul',
      items: [
        'Confidentiality: your customer data, sales figures and plans are not shared or reused.',
        'Conflicts: the agency tells you if it works for a direct competitor in the same market.',
        'Liability: what the agency is responsible for if its work damages your site, and the cap on that amount.',
        'Access: start with the least access that does the job, and remove it when the contract ends.',
        'Governing law and language: which law applies and which language version of the contract prevails.',
      ],
    },
    { type: 'h2', text: 'A checklist to take to the signing' },
    {
      type: 'ol',
      items: [
        'Can I list, in my own words, what will be done in month one?',
        'Do I know the minimum term, the notice period and the renewal rule?',
        'Is there a baseline and a review date, with no ranking promise?',
        'Do I own the content, the accounts and the data?',
        'Do I pay monthly, and can I stop paying if work stops?',
        'Has a lawyer read it?',
      ],
    },
    {
      type: 'p',
      text: 'The same questions apply whether you hire a freelancer, a consultant or an agency; if you are still choosing, see [SEO consultant vs SEO agency](/blog/seo-consultant-vs-seo-agency) and [in-house SEO vs agency](/blog/in-house-seo-vs-agency). WakeUP offers [SEO as a service](/services/seo) and is one option among them; whoever you choose, ask for these terms in writing. If you want a view of your site\'s starting point before you negotiate, a [free marketing audit](/audit) can give you a baseline.',
    },
  ],
}
