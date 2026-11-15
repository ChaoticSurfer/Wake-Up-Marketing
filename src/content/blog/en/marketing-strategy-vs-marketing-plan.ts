import type { BlogPost } from '@/lib/blog'

export const post: BlogPost = {
  locale: 'en',
  slug: 'marketing-strategy-vs-marketing-plan',
  title: 'Marketing strategy vs marketing plan: the difference, with two one-page templates',
  metaTitle: 'Marketing Strategy vs Marketing Plan',
  description:
    'Marketing strategy vs marketing plan: the strategy sets the why and what, the plan sets the how and when. Differences, contents and two one-page templates.',
  publishedAt: '2026-12-13T12:00:00+04:00',
  updatedAt: '2026-12-13T12:00:00+04:00',
  service: 'audit',
  reviewState: 'llm_reviewed',
  body: [
    {
      type: 'p',
      text: 'In marketing strategy vs marketing plan, the strategy decides why you market and what you will and will not do: the goal, the audience, the positioning and the channels worth your money. The plan decides how and when: the campaigns, tasks, owners, dates and budget lines that carry the strategy out. The strategy changes rarely; the plan is rewritten every quarter or for each campaign.',
    },
    { type: 'h2', text: 'The difference in one test' },
    {
      type: 'p',
      text: 'Aha! co-founder Brian de Haaff puts it simply: ["Think of the marketing strategy as the why behind the work"](https://www.aha.io/blog/the-marketing-strategy-vs-the-marketing-plan), with the plan as the when and the what of the work. A practical way to apply that is to ask of any marketing decision: would it still be true if we changed the channel, the month and the person doing it? If yes, it belongs in the strategy. If it names a channel, a date, an owner or an amount, it belongs in the plan.',
    },
    {
      type: 'table',
      head: ['', 'Marketing strategy', 'Marketing plan'],
      rows: [
        ['Question it answers', 'Why, for whom, and what do we choose to do', 'How, when, by whom and for how much'],
        ['Horizon', 'Long-term direction, reviewed every quarter', 'A quarter, a season or one campaign'],
        ['Who signs it off', 'Owner or management', 'Marketing lead, with sales and finance'],
        ['Example line', '"Win mid-sized logistics firms in Tbilisi on speed of quotation"', '"Run the quotation-speed LinkedIn campaign from 5 to 30 March, 1 post and 1 email a week"'],
        ['What changes it', 'A new market, offer or competitor', 'Last month\'s results'],
        ['Failure if missing', 'Busy marketing with no direction', 'Good direction that never turns into work'],
      ],
    },
    {
      type: 'p',
      text: 'The numbers and company in the example lines are illustrative. For the full process of building a first strategy, including the 90-day action table, read [marketing strategy for small business](/blog/marketing-strategy-for-small-business). This article is about keeping the two documents separate and linked.',
    },
    { type: 'h2', text: 'What a marketing strategy contains' },
    {
      type: 'p',
      text: 'The U.S. Small Business Administration notes that [there is no single way to approach a marketing strategy](https://www.sba.gov/business-guide/plan-your-business/market-research-competitive-analysis) and that it should evolve to fit your needs. A working strategy usually covers the five parts below.',
    },
    {
      type: 'ul',
      items: [
        'Business goal: the result marketing is accountable for, with a number and a date.',
        'Audience: the one or two customer groups that matter most, and what makes them buy.',
        'Positioning: the one line saying why they should pick you over the alternatives, and the proof behind it.',
        'Channel choices: which channels do which job, and which you deliberately skip.',
        'Success measures: the few numbers that show the strategy is working. [Marketing KPIs](/blog/marketing-kpis) explains how to choose them.',
      ],
    },
    {
      type: 'p',
      text: 'Notice what is missing: post schedules, ad copy, tool names and monthly amounts. Those change too often to live in a document that is supposed to stay stable.',
    },
    { type: 'h2', text: 'What a marketing plan contains' },
    {
      type: 'p',
      text: 'The plan turns each strategic choice into work someone can start on Monday. It usually holds:',
    },
    {
      type: 'ul',
      items: [
        'Campaigns: each with its own goal, offer, audience segment and channel.',
        'Calendar: start and end dates, milestones and the dates of results reviews.',
        'Owners: one named person per task, including who in sales follows up leads.',
        'Budget: a line per campaign, with media spend separate from production and fees.',
        'Targets and tracking: what each campaign must deliver and where the result is recorded.',
        'Dependencies: what must be ready first, such as a landing page or a tracking fix.',
      ],
    },
    { type: 'h2', text: 'One-page strategy template' },
    {
      type: 'p',
      text: 'Copy these headings into a single page and answer each in one to three sentences. If a line needs a date or an amount, move it to the plan.',
    },
    {
      type: 'table',
      head: ['Heading', 'Fill in'],
      rows: [
        ['1. Business goal', 'Result, number, deadline, and today\'s starting figure'],
        ['2. Who we win', 'Customer group, the person who decides, and why they buy'],
        ['3. Why us', 'Positioning line and the proof you can show'],
        ['4. Where we compete', 'Channels chosen, each with its job, plus the channels we are skipping and why'],
        ['5. What we will not do', 'Offers, segments or tactics that are out of scope'],
        ['6. How we know it works', 'Three or four measures and the level that counts as success'],
        ['7. Review rhythm', 'Who reviews the strategy, how often, and what would trigger a change'],
      ],
    },
    { type: 'h2', text: 'One-page plan template' },
    {
      type: 'p',
      text: 'Write one plan per quarter, or one per large campaign. Each row of the table is a campaign, and each campaign must trace back to a numbered line of the strategy.',
    },
    {
      type: 'table',
      head: ['Field', 'Fill in'],
      rows: [
        ['Strategy line served', 'Which of the strategy headings this campaign supports'],
        ['Campaign goal', 'One result, such as qualified enquiries, with a number and dates'],
        ['Audience and offer', 'Who sees it and what they are asked to do'],
        ['Channel and activities', 'What is produced and published, and how often'],
        ['Owner', 'One name for delivery and one for lead follow-up'],
        ['Budget', 'Media, production and fees as separate amounts'],
        ['Tracking', 'The key event that counts as a result and where it is logged'],
        ['Review date and rule', 'When you look, and the rule for stopping, changing or scaling'],
      ],
    },
    { type: 'h2', text: 'How they connect to campaigns and budgets' },
    {
      type: 'p',
      text: 'Think of a chain: strategy, then plan, then campaigns, then budget lines, then results, and back to the strategy. Each link should be traceable in both directions.',
    },
    {
      type: 'ol',
      items: [
        'The strategy picks a goal and a few channels. It does not give campaign amounts, but it fixes the priorities that the money follows.',
        'The plan turns the priorities into campaigns. Every campaign names the strategy line it serves; a campaign that serves none is a candidate to cut.',
        'Budget is allocated per campaign in the plan, so spending can be compared with each campaign\'s result. The total comes from what the goal requires and the company can afford, not from copying a percentage of revenue.',
        'Results flow back. A monthly review compares each campaign with its target. Campaign-level changes go into the plan; only repeated evidence that a whole channel or audience is wrong should change the strategy.',
      ],
    },
    {
      type: 'p',
      text: 'The reviews run at different speeds. Aha! recommends reevaluating the strategy quarterly, which fits a company that checks the plan monthly. For a worked example of a channel plan built on a strategy, see [social media marketing strategy](/blog/social-media-marketing-strategy) or [lead generation strategies](/blog/lead-generation-strategies).',
    },
    { type: 'h2', text: 'Common mistakes' },
    {
      type: 'ul',
      items: [
        'A plan with no strategy: a busy calendar of posts and ads, no stated goal and no basis for dropping anything.',
        'A strategy with no plan: a good presentation that nobody owns, with no dates or budget lines.',
        'Budget in the strategy: amounts fixed in the strategic document make it go stale every month.',
        'One document for both: a single file that mixes direction and tasks gets rewritten in full every time one task changes.',
        'No link between them: campaigns that cannot say which strategy line they support.',
      ],
    },
    {
      type: 'p',
      text: 'If you are not sure whether your current marketing has a strategy behind it or only a plan, WakeUP Marketing\'s [free marketing audit](/audit) is a quick way to check. Send your website and a few details, and within one business day you get a short summary of your ads, website and sales process with the three changes that would improve results fastest. There is no obligation.',
    },
  ],
}
