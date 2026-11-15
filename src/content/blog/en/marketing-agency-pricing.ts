import type { BlogPost } from '@/lib/blog'

export const post: BlogPost = {
  locale: 'en',
  slug: 'marketing-agency-pricing',
  title: 'How much do marketing agencies charge? Pricing models, inclusions and red flags',
  metaTitle: 'How Much Do Marketing Agencies Charge?',
  description:
    'How much do marketing agencies charge? Retainer, project, hourly and performance models, dated benchmarks, red flags and how to compare quotes.',
  publishedAt: '2026-12-09T15:00:00+04:00',
  updatedAt: '2026-12-09T15:00:00+04:00',
  service: 'audit',
  reviewState: 'llm_reviewed',
  body: [
    {
      type: 'p',
      text: 'How much do marketing agencies charge? It depends on the pricing model more than on any average. Two US agency guides published in 2026 put monthly retainers at roughly $1,500 to $10,000 and $5,000 to $25,000 respectively, and the gap is the point: scope, team seniority and market move the price. Compare quotes by what is delivered, not by the headline number.',
    },
    { type: 'h2', text: 'The five ways agencies charge' },
    {
      type: 'p',
      text: 'Most agencies mix models. In a 2024 study, the 4As (a US agency trade body) [surveyed 149 member agencies](https://www.aaaa.org/resource/2024-compensation-methodologies/) on eight common compensation models for project and retainer work, such as cost-plus, hourly rate and media commission. Its detailed results are paywalled. A separate survey by SoDa and Productive, reported in [Productive\'s article](https://productive.io/blog/best-agency-pricing-model/), found fixed project fees made up just under 50% of digital agency revenue, retainers 44%, hourly work 30%, value-based pricing 10% and commission 1%. The article does not give the survey year; its report link suggests 2022. The shares add up to more than 100% because agencies use several models.',
    },
    {
      type: 'table',
      head: ['Model', 'How it works', 'Fits when', 'Watch for'],
      rows: [
        ['Monthly retainer', 'A fixed monthly fee for an agreed set of ongoing work', 'Work never really ends: ads, SEO, social media, content', 'Scope that is vague, so the hours shrink while the fee stays'],
        ['Fixed project fee', 'One price for a defined deliverable', 'A website, a brand identity, a campaign launch, an audit', 'Unlimited revisions, or a scope that grows with extra charges'],
        ['Hourly', 'Time billed at a rate', 'Small, unpredictable tasks and consulting', 'No cap, and no link between hours and results'],
        ['Performance-based', 'A base fee plus a share of results, or pay per lead or sale', 'Results that are cleanly measurable', 'Low-quality leads, and disputes over who counts as a lead'],
        ['Percentage of ad spend', 'A share of the monthly ad budget, often with a minimum', 'Paid media management', 'Fee rises when you spend more, even if results do not'],
      ],
    },
    { type: 'h2', text: 'What published benchmarks say, and why they disagree' },
    {
      type: 'p',
      text: 'The figures below come from two agencies\' own guides. They describe the US market, are estimates by the authors rather than audited surveys, and neither reflects Georgia. Use them to see the shape of the market, not as a price for your project.',
    },
    {
      type: 'table',
      head: ['Item', 'HawkSEM guide (updated 1 April 2026)', 'MarketerHire guide (17 June 2026)'],
      rows: [
        ['Monthly retainer', 'Average about $3,500; range about $1,500 to $10,000', '$5,000 to $25,000 or more'],
        ['Hourly rate', 'About $150', '$100 to $300'],
        ['Project', 'SEO projects $5,000 to $30,000', '$2,000 to $50,000 or more'],
        ['Paid media fee on ad spend', '10% to 20% of ad spend', '$2,000 to $15,000 a month plus 10% to 20% of ad spend'],
        ['Performance-based', 'Pay-per-lead and value-based fees described, no price given', '$3,000 to $10,000 base plus a percentage of results'],
      ],
    },
    {
      type: 'p',
      text: 'Sources: [HawkSEM](https://hawksem.com/blog/marketing-agency-pricing) and [MarketerHire](https://marketerhire.com/blog/marketing-agency-pricing). Both sell marketing services, and prices change, so check the current pages. MarketerHire also says agencies in San Francisco, New York and London can charge 30% to 50% more than those in cities such as Austin, Denver or Eastern Europe, which shows how much location alone moves a quote. For channel-specific ranges, see our guides to [Google Ads costs](/blog/google-ads-cost), [SEO costs](/blog/how-much-does-seo-cost) and [social media marketing costs](/blog/social-media-marketing-cost).',
    },
    { type: 'h2', text: 'What a fee usually includes, and what is extra' },
    {
      type: 'p',
      text: 'A fee pays for people\'s time, the agency\'s tools and its overhead. Ask for the scope in writing and check each of these:',
    },
    {
      type: 'ul',
      items: [
        'Deliverables per month: number of posts, ad variants, reports, articles or optimisation rounds.',
        'Strategy and setup: whether the audit, tracking setup and plan are in the retainer or billed once.',
        'Reporting: what you see, how often, and whether you can open the dashboards yourself.',
        'Meetings and support: calls per month and response times.',
        'Production extras: photography, video, design, copywriting in a second language, stock and licences.',
        'Tools and subscriptions: who pays for them, and whether you keep them if you leave.',
      ],
    },
    { type: 'h2', text: 'Ad spend is a separate budget' },
    {
      type: 'p',
      text: 'The agency fee and the money spent on Google, Meta or other platforms are different things. Ad spend normally goes to the platform. A fee set as a percentage of spend only makes sense if you know the base it is calculated on. Ask whether the platform bills your own card or the agency re-bills you, and whether any mark-up applies.',
    },
    {
      type: 'p',
      text: 'Ownership matters too. Google explains that a manager account can be linked to a client account, and that users with administrative access to the client account "can terminate the relationship with the manager account at any time," as stated in [Google Ads Help](https://support.google.com/google-ads/answer/6139186). In practice, create the ad accounts, pixel and analytics yourself, keep admin and billing, and give the agency access. Then your history stays with you if you change agency.',
    },
    { type: 'h2', text: 'Red flags in a quote' },
    {
      type: 'ul',
      items: [
        'No written scope, or a scope phrased as "full digital marketing" with no deliverables.',
        'A guaranteed ranking, follower count or return. Nobody controls search engines or auction prices.',
        'The agency holds the ad accounts, domain or analytics in its own name and will not add you as admin.',
        'A long lock-in with no exit clause, or a notice period longer than the first results can show.',
        'Performance pay with no definition of a qualified lead or sale.',
        'A price far below every other quote. Check what has been left out or who will really do the work.',
        'Case studies with no named client, period or baseline, or no person you can speak to.',
        'Reports that show impressions and clicks but never enquiries, sales or cost per result.',
      ],
    },
    { type: 'h2', text: 'How to compare agency quotes' },
    {
      type: 'ol',
      items: [
        'Give every agency the same brief: goal, budget range, channels, timeline and current results.',
        'Put each quote in one table: monthly fee, one-off fees, ad spend, deliverables, contract length, notice period.',
        'Convert everything to a total cost over the same period, such as six months, including extras you expect.',
        'Ask who does the work: named people, their roles, and how many clients each handles.',
        'Check ownership: accounts, creatives, data and tools after the contract ends.',
        'Agree how success is measured before signing: which numbers, from which tool, reviewed how often.',
        'Start with a short, defined first phase if you are unsure, so you can judge the working relationship before a long commitment.',
      ],
    },
    {
      type: 'p',
      text: 'If you want an outside view before you request quotes, WakeUP offers a [free marketing audit](/audit) of your ads, website and sales process.',
    },
  ],
}
