import type { BlogPost } from '@/lib/blog'

export const post: BlogPost = {
  locale: 'en',
  slug: 'seo-agency-red-flags',
  title: 'SEO agency red flags: what to spot in a pitch, a contract and a report',
  metaTitle: 'SEO Agency Red Flags',
  description:
    'SEO agency red flags to spot before you sign: ranking guarantees, secret methods, rank-only reports and locked-in data, with a Georgian buyer\'s checks.',
  publishedAt: '2026-12-24T15:00:00+04:00',
  updatedAt: '2026-12-24T15:00:00+04:00',
  service: 'seo',
  reviewState: 'llm_reviewed',
  body: [
    {
      type: 'p',
      text: 'The clearest SEO agency red flags show up in three places: a pitch that promises a ranking, a contract that keeps your accounts or data with the agency, and a monthly report that lists keyword positions but no work done and no enquiries. Google\'s own guidance is blunt on the first one: [no one can guarantee a #1 ranking](https://developers.google.com/search/docs/fundamentals/do-i-need-seo). The rest of this guide goes through each place in turn.',
    },
    { type: 'h2', text: 'Red flags in the pitch' },
    {
      type: 'p',
      text: 'The pitch is where a weak agency is easiest to spot, because it has to sell before it has to deliver.',
    },
    {
      type: 'ul',
      items: [
        'A guaranteed ranking or a guaranteed date. Google\'s hiring guidance says: "If they guarantee you that their changes will give you first place in search results, find someone else." A serious agency gives estimates of the work and the likely improvement, not a promise about a result nobody controls.',
        'A "special relationship" with Google, or a "priority submit". The same Google page tells you to avoid SEOs who allege either one.',
        'A secret method. Google says an SEO with FTP access to your site "should be willing to explain all the changes they are making to your site". If the answer to "what exactly will you change?" is "proprietary", walk away.',
        'No examples. Google suggests asking to see previous work and speaking to past clients. A pitch with no names you can verify and no willingness to arrange a call deserves caution.',
        'Ranking for terms you did not choose. Being first for the agency\'s own name or for a phrase nobody searches proves nothing about your sales.',
        'Pressure to sign this week, or a price that has no link to the size of your site.',
      ],
    },
    {
      type: 'p',
      text: 'Pricing questions belong in the same meeting. Our guides to [how much SEO costs](/blog/how-much-does-seo-cost) and [how agencies price their work](/blog/marketing-agency-pricing) show what a normal range and a normal quote look like.',
    },
    { type: 'h2', text: 'Red flags in the contract' },
    {
      type: 'p',
      text: 'A contract tells you what happens if the relationship ends, which is the moment a bad agency makes itself expensive.',
    },
    {
      type: 'ul',
      items: [
        'Accounts registered to the agency. Your Google Search Console property, Google Analytics, Google Business Profile, domain and website hosting should belong to your company, with the agency added as a user. In Search Console, [only a property owner can grant permissions to others](https://support.google.com/webmasters/answer/7687615), so if the agency is the sole owner, you cannot manage who has access.',
        'Write access on day one. Google advises granting read access to Search Console at first and not write access. Widen it only for a task that needs it.',
        'Content or links the agency owns. Articles, pages and design files you pay for should be yours when the contract ends. Ask directly.',
        'A long minimum term with no exit and no deliverables list. SEO takes months, so a 6-month term can be reasonable, but it should name what is delivered each month and how you can leave if it is not.',
        'Link buying or "guaranteed backlinks". Google\'s spam policies list "buying or selling links for ranking purposes" as link spam, and say sites that violate its policies [may rank lower in results or not appear in results at all](https://developers.google.com/search/docs/essentials/spam-policies). Ask where links come from and what happens to them if you stop paying.',
        'Deceptive or misleading content written for you. Google warns that if an SEO creates it, your site could be removed entirely from Google\'s index.',
      ],
    },
    {
      type: 'p',
      text: 'The same ownership rule applies to paid ads. In Google Ads, an agency works through a manager account, and [users with administrative access to the client account can end that link at any time](https://support.google.com/google-ads/answer/6139186). Ownership of your digital assets should never depend on goodwill. For a list of what a fair SEO scope contains, see [what SEO services include](/blog/what-do-seo-services-include).',
    },
    { type: 'h2', text: 'Red flags in the monthly report' },
    {
      type: 'p',
      text: 'A report should let you judge the agency without having to trust it. Compare what you receive with this table.',
    },
    {
      type: 'table',
      head: ['In the report', 'Why it is a flag', 'What a useful report shows instead'],
      rows: [
        [
          'Keyword positions only',
          'Positions say nothing about visits, calls or sales',
          'Organic visits, enquiries and calls from organic search, plus positions as supporting data',
        ],
        [
          'Screenshots and PDFs with no data access',
          'You cannot check the numbers, and the history leaves with the agency',
          'Live access to Search Console and Analytics that you own',
        ],
        [
          'No list of work done',
          'You cannot tell effort from luck',
          'Each change made, each page published or fixed, and the reason',
        ],
        [
          'Only branded terms improving',
          'People already searching for your name would have found you anyway',
          'Non-branded queries and new pages gaining impressions and clicks',
        ],
        [
          'Tool scores as the headline',
          'A third-party "authority" or "health" score comes from a tool, not from Google; [Google says](https://developers.google.com/search/docs/fundamentals/third-party-seo) such tools do not have its internal ranking data',
          'Results tied to business goals, as in our guide to [marketing KPIs](/blog/marketing-kpis)',
        ],
        [
          'Every month is good news',
          'Real SEO has flat and bad months; a report with none is hiding something',
          'Plain notes on what did not work and what changes next month',
        ],
      ],
    },
    { type: 'h2', text: 'Checks for a buyer in Georgia' },
    {
      type: 'p',
      text: 'A few points matter more when your customers search in Georgian, Russian and English from Tbilisi or Batumi.',
    },
    {
      type: 'ul',
      items: [
        'Ask which languages the agency can write and review in. Search terms in Georgian are different words from the English ones, not a translation of a keyword list, so a report that only tracks English phrases may miss your real customers.',
        'Check that keywords in the report are ones your buyers type. In a small market, a handful of searches can make a position look impressive; ask which terms brought enquiries.',
        'Ask who does the work. An agency abroad that resells the work to a freelancer, with no one who knows your market, gives you a middleman, not a team.',
        'Check the Google Business Profile for local work: if the profile is registered to the agency or an unknown person, ask to move it to your company.',
        'Ask how enquiries from the site are counted. If calls and messages are not tracked, no report can show that SEO works.',
      ],
    },
    { type: 'h2', text: 'Questions to ask before you sign' },
    {
      type: 'ol',
      items: [
        'Which accounts will be in my company\'s name, and who will be the owner?',
        'What exactly will you change in the first 90 days, and can I see the list?',
        'How do you build links, and what happens to them if we part?',
        'What will the monthly report contain, and can I see a sample with the client name removed?',
        'Who will do the daily work, and can I speak to them?',
        'Which past client can I call?',
        'What is the notice period, and what do I take with me when we stop?',
      ],
    },
    {
      type: 'p',
      text: 'Good answers are specific and match your business. Vague answers, or answers that change when you push, are the red flag itself.',
    },
    { type: 'h2', text: 'When a flag is not a flag' },
    {
      type: 'p',
      text: 'Not every oddity means bad faith. A 6-month minimum is normal for SEO because results take time. Slow early months are normal too, as the first work is often technical fixes that readers never see. Refusing to promise a date is a good sign, not a bad one. What is not normal is secrecy, ownership on the agency\'s side and results you cannot check.',
    },
    {
      type: 'p',
      text: 'WakeUP offers SEO as a [service](/services/seo) among others. As an agency we gain when you hire one, so use the questions above on us as well, and on any other firm you consider. If you want a baseline before you talk to anyone, the [free marketing audit](/audit) shows where your site and search presence stand today.',
    },
  ],
}
