import type { BlogPost } from '@/lib/blog'

export const post: BlogPost = {
  locale: 'en',
  slug: 'is-my-seo-agency-working',
  title: 'How to tell if your SEO agency is doing a good job: four checks every quarter',
  metaTitle: 'Is Your SEO Agency Doing a Good Job?',
  description:
    'How to tell if your SEO agency is doing a good job: four quarterly checks on access, proof of work, outcomes and communication, plus a decision table.',
  publishedAt: '2027-01-31T09:00:00+04:00',
  updatedAt: '2027-01-31T09:00:00+04:00',
  service: 'seo',
  reviewState: 'llm_reviewed',
  body: [
    {
      type: 'p',
      text: 'To tell if your SEO agency is doing a good job, check four things once a quarter: that you still control your own accounts, that the agency can show dated work against the agreed plan, that search visits and enquiries from non-brand queries are rising over several months, and that the agency explains the numbers honestly, including the bad ones. A strong ranking screenshot proves none of these. Do the checks yourself with tools you own.',
    },
    {
      type: 'p',
      text: 'This is the after-hire review. If you have not signed yet, [SEO agency red flags](/blog/seo-agency-red-flags) and [SEO contract terms](/blog/seo-contract-terms) cover the choice. What a monthly report should contain is in [what a good SEO report includes](/blog/what-a-good-seo-report-includes), and how long results take is in [how long SEO takes](/blog/how-long-does-seo-take). This post is the quarterly audit that sits on top of them.',
    },
    { type: 'h2', text: 'Review every quarter, not every week' },
    {
      type: 'p',
      text: 'SEO moves slowly, and weekly numbers are mostly noise. Google Search Console\'s Performance report shows the past three months by default, which makes a quarter a natural unit: write down the same few numbers every three months and compare. Put the review in the calendar when you sign, and tell the agency it exists. A good agency will welcome it.',
    },
    { type: 'h2', text: 'Check 1: access and ownership' },
    {
      type: 'p',
      text: 'This is the one check that can be done in ten minutes and protects you whatever happens next. Everything the agency uses should be in your name.',
    },
    {
      type: 'ul',
      items: [
        'Your domain, hosting and website admin are registered to your company, not the agency.',
        'Google Search Console and Google Analytics are your properties, with you as owner. In Search Console, [only owners can see the user list](https://support.google.com/webmasters/answer/7687615) under Settings, then Users and permissions. Check who is on it and at what level (owner, full or restricted).',
        'The agency has the lowest access it needs. Google\'s advice on hiring an SEO is to [only grant read access to Search Console](https://developers.google.com/search/docs/fundamentals/do-i-need-seo) at the start. Changes to the site itself should go through your own approval or a logged change.',
        'No unknown owners. Google notes that removing a verified owner also means removing their verification token from the site, otherwise they can re-verify. Ask your developer to check for unused tokens.',
      ],
    },
    {
      type: 'p',
      text: 'If the agency refuses to put reporting in properties you control, or reports only from its own tools, treat that as a finding. You cannot judge work you cannot see.',
    },
    { type: 'h2', text: 'Check 2: proof of work' },
    {
      type: 'p',
      text: 'Google\'s own hiring guidance suggests asking an SEO whether they will share all the changes they make to your site, and warns to be careful if a company is secretive or will not clearly explain what it intends to do. Turn that into a quarterly test.',
    },
    {
      type: 'ol',
      items: [
        'Ask for the change log for the quarter: each page created or edited, the date, what changed and why.',
        'Compare it with the plan in your contract or kickoff document. What was promised, what was done, what slipped, and why.',
        'Open five items from the log and confirm they are live. Look at the page, its title and heading, and whether it is indexed.',
        'Look for work that fits your business: pages for services you actually sell, in the languages your buyers use, not generic blog posts that could belong to any company.',
        'Ask what was tried and did not work. Real SEO has dead ends; a quarter with none reported is a quarter someone left out.',
      ],
    },
    {
      type: 'p',
      text: 'Volume is not the test. Ten new pages that target no one are worth less than two that answer a question your customers ask. The [retainer guide](/blog/seo-retainer-what-you-get) lists the kinds of monthly work and the proof each should leave behind.',
    },
    { type: 'h2', text: 'Check 3: outcomes' },
    {
      type: 'p',
      text: 'Outcomes come in layers, and each layer should be read from your own accounts. In Search Console, the [Performance report](https://support.google.com/webmasters/answer/7576553) defines clicks as the number of times a user clicked your site from Google Search results, impressions as how many times your site appeared in Search results, and click-through rate as clicks divided by impressions. The Queries and Pages tabs group the same data by the search typed and by page.',
    },
    {
      type: 'table',
      head: ['Layer', 'Where to look', 'A good sign over a quarter'],
      rows: [
        ['Visibility', 'Search Console: impressions, Pages tab', 'More pages getting impressions, including new ones'],
        ['Visits', 'Search Console clicks; Analytics organic search report', 'Clicks rising on queries that do not contain your company name'],
        ['Right visitors', 'Queries tab; landing pages in Analytics', 'Growth on service and problem queries, not only brand queries'],
        ['Business result', 'Your CRM, calls, forms, orders', 'More enquiries or sales that started in organic search'],
      ],
    },
    {
      type: 'p',
      text: 'Do the same on the same date each quarter and record the numbers in a sheet. If clicks rise but only on your brand name, people who already knew you would have found you anyway. If visits rise and enquiries do not, the cause may be the site or the sales process, not the SEO. [SEO.com\'s guide](https://www.seo.com/blog/how-to-tell-if-your-seo-company-is-working/) makes the same point about traffic without leads, and suggests using the organic search report in GA4 to separate organic from paid traffic. The [Search Console guide](/blog/google-search-console-guide) and the [GA4 guide](/blog/ga4-for-small-business) show where to find these views.',
    },
    {
      type: 'p',
      text: 'Positions on a short list of target keywords are fine as supporting data. They are not an outcome, and they do not show what people in Georgia actually click on.',
    },
    { type: 'h2', text: 'Check 4: how they communicate' },
    {
      type: 'ul',
      items: [
        'They explain what they did and why in plain language, without hiding behind jargon.',
        'They report bad months. A flat or down month with a reason and a plan is a better sign than an unbroken run of good news.',
        'They make no guarantees. Google states: "No one can guarantee a #1 ranking on Google." A provider who promises first place is a reason to look for someone else, in Google\'s words.',
        'They answer questions within a reasonable time and tell you what they need from you: approvals, developer time, content from your experts.',
        'They tell you when something is outside their control, such as a slow site or a missing language version, instead of billing around it.',
      ],
    },
    {
      type: 'p',
      text: 'Also be honest about your side. Many stalled SEO projects stall because recommendations wait weeks for approval or a developer. If the log shows items blocked on you, fix that before judging the agency.',
    },
    { type: 'h2', text: 'What is too early to judge' },
    {
      type: 'p',
      text: 'A new site or a new strategy often shows little in the first quarter. In the first months the useful signals are work done, pages indexed and impressions starting to grow, not sales. Judge the quarter against what the plan said should happen by then, and see [how long SEO takes](/blog/how-long-does-seo-take) for what to expect at different stages. Google\'s guidance tells you to ask an SEO what results they expect and in what timeframe, so ask early and hold them to the answer.',
    },
    { type: 'h2', text: 'The decision after the quarter' },
    {
      type: 'table',
      head: ['What you found', 'What to do'],
      rows: [
        ['Access is yours, work is logged, impressions and non-brand clicks rise', 'Continue; set next quarter\'s targets'],
        ['Work is logged but results are flat, and the plan said they should not be', 'Ask for a written explanation and a changed plan; review again in a month or two'],
        ['Little or no logged work, vague answers, or reports you cannot check', 'Put concerns in writing; give a short deadline to fix; check your exit terms'],
        ['Refusal to share access, or guarantees of rankings', 'Plan an exit: secure your accounts first, then give notice per the contract'],
      ],
    },
    {
      type: 'p',
      text: 'Before you leave, make sure you own the content, the accounts and the data, and know the notice period; [SEO contract terms](/blog/seo-contract-terms) lists what to look for. If you want a neutral second opinion on your site and what has been done so far, request WakeUP\'s [free marketing audit](/audit). WakeUP also offers [SEO as a service](/services/seo), as one option among the ones you may compare.',
    },
  ],
}
