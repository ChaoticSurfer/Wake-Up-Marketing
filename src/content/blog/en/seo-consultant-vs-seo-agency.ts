import type { BlogPost } from '@/lib/blog'

export const post: BlogPost = {
  locale: 'en',
  slug: 'seo-consultant-vs-seo-agency',
  title: 'SEO consultant vs agency: which do you need?',
  metaTitle: 'SEO Consultant vs Agency',
  description:
    'SEO consultant vs agency: a consultant advises, an agency also does the work. See what each costs, where each fits and what to ask before you hire.',
  publishedAt: '2026-12-29T15:00:00+04:00',
  updatedAt: '2026-12-29T15:00:00+04:00',
  service: 'seo',
  reviewState: 'llm_reviewed',
  body: [
    {
      type: 'p',
      text: 'The SEO consultant vs agency choice comes down to one question: who will do the work? A consultant audits, sets priorities and coaches, and your own team or developer carries the changes out. An agency does both the advice and the execution. If you have people with spare hours, a consultant can be enough. If you do not, the best plan will sit unused.',
    },
    { type: 'h2', text: 'What each one actually sells' },
    {
      type: 'p',
      text: 'An SEO consultant, often a freelancer, sells expertise: a technical audit, a keyword and content plan, a review of what your developers have built, and regular calls. The output is mostly decisions and instructions. Someone on your side has to publish the pages, fix the code and chase the approvals.',
    },
    {
      type: 'p',
      text: 'An SEO agency sells a team on a retainer. It usually brings several people (for example a strategist, a writer and a technical specialist) plus a reporting routine, and it makes the changes itself or works directly in your CMS. For the contents of such a retainer, see [what SEO services include](/blog/what-do-seo-services-include) and [what you get from an SEO retainer](/blog/seo-retainer-what-you-get).',
    },
    { type: 'h2', text: 'Consultant vs agency at a glance' },
    {
      type: 'table',
      head: ['', 'SEO consultant', 'SEO agency'],
      rows: [
        ['Main output', 'Audit, roadmap, advice, reviews', 'Roadmap plus the work itself: fixes, content, links, reports'],
        ['Who executes', 'Your team or developer', 'The agency team'],
        ['Capacity', 'One person with limited hours', 'Several people, cover for absences'],
        ['Depth', 'Often one senior specialist', 'Mixed seniority, broader range of skills'],
        ['Typical billing', 'Hourly, per project or small retainer', 'Monthly retainer with defined deliverables'],
        ['Main risk', 'A plan nobody carries out', 'Scope drift, or a junior doing the work you were sold a senior for'],
      ],
    },
    { type: 'h2', text: 'What the price gap looks like' },
    {
      type: 'p',
      text: 'In [Ahrefs\' survey of 439 SEO providers](https://ahrefs.com/blog/seo-pricing/), last updated on 15 August 2024, the average monthly retainer was $3,209 for agencies, $3,250 for consultancies and $1,348.63 for freelancers. Hourly averages were $98.90 for agencies, $171.18 for consultancies and $71.59 for freelancers. Ahrefs assumes each provider charges the top of the band it chose, so real averages are likely lower.',
    },
    {
      type: 'p',
      text: 'Read this as a US-dollar market guide, not a Georgian price list; costs in Georgia depend on the local market and on whether you need Georgian, English or both. The useful lesson is that a consultant is not automatically the cheap choice: in that survey, consultancies charged more per hour than agencies, and the monthly retainers were about the same. Add the cost of your own people carrying out the plan. More on the spread in [how much SEO costs](/blog/how-much-does-seo-cost).',
    },
    { type: 'h2', text: 'When a consultant is enough' },
    {
      type: 'ul',
      items: [
        'You have a developer and a content person with free hours each week, but no one who knows what to prioritise.',
        'You need a one-off job: an audit before a redesign, a migration check or a second opinion on an agency proposal.',
        'Your site is small and the work is a short list of fixes, not a continuous programme.',
        'You want to train your own team to run SEO in-house. [In-house SEO vs agency](/blog/in-house-seo-vs-agency) covers that route.',
      ],
    },
    { type: 'h2', text: 'When you need an agency' },
    {
      type: 'ul',
      items: [
        'Nobody on your team has the hours to write pages, edit templates or run outreach, and hiring will take months.',
        'The work spans several skills at once: technical fixes, Georgian and English content, local SEO and reporting.',
        'You want one party accountable for the result, and for cover when someone is ill or leaves.',
        'The site is large enough that the backlog never ends, so a continuous team is cheaper than repeated projects.',
      ],
    },
    {
      type: 'p',
      text: 'The two are not exclusive. Some companies hire a consultant to write the strategy and an execution team to carry it out, or a consultant to check an agency\'s work. That works when it is clear who decides and who is accountable; split responsibility with no owner is the usual way it fails.',
    },
    { type: 'h2', text: 'Questions to ask whoever you hire' },
    {
      type: 'p',
      text: 'The same checks apply to both. [Google\'s own guidance on hiring an SEO](https://developers.google.com/search/docs/fundamentals/do-i-need-seo) advises you to interview candidates, check business references and ask for examples of previous work. It suggests asking what results they expect and in what timeframe, and how they measure success. It also states: "No one can guarantee a #1 ranking on Google." If someone does, "find someone else". For more warning signs, see [SEO agency red flags](/blog/seo-agency-red-flags).',
    },
    {
      type: 'p',
      text: 'Think about access as well. Google advises granting only read access to Search Console at first, and adds: "Ultimately, you are responsible for the actions of any companies you hire." In Search Console, an [owner](https://support.google.com/webmasters/answer/7687615) "has full control over properties", a full user "has view rights to all data and can take some actions" and a restricted user "has simple view rights on most data". Your company should stay the owner of the property, the analytics account and the domain, with the supplier given the lowest level that lets them work.',
    },
    { type: 'h2', text: 'Where WakeUP fits' },
    {
      type: 'p',
      text: 'WakeUP Marketing offers [SEO as a service](/services/seo): technical SEO, keyword research in Georgian and English, service pages written for search intent, local SEO and a monthly report. That is one option among those above, and the right one only if you need an outside team to do the work. If you are unsure which model suits you, the [free marketing audit](/audit) shows what is holding your site back, and you can take its findings to a consultant or an agency.',
    },
  ],
}
