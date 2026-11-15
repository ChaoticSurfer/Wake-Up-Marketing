import type { BlogPost } from '@/lib/blog'

export const post: BlogPost = {
  locale: 'en',
  slug: 'marketing-and-sales-alignment',
  title: 'How marketing and sales work together: a practical setup for a 20-250 person company',
  metaTitle: 'How Marketing and Sales Work Together',
  description:
    'How marketing and sales work together: one lead definition, a fast handover, shared CRM fields, a feedback loop and a weekly meeting.',
  publishedAt: '2026-12-16T18:00:00+04:00',
  updatedAt: '2026-12-16T18:00:00+04:00',
  service: 'audit',
  reviewState: 'llm_reviewed',
  body: [
    {
      type: 'p',
      text: 'Marketing and sales work together when both teams agree in writing on what a qualified lead is, how fast sales must respond, what gets recorded in the CRM, and which numbers they share. Then they check those numbers in one short weekly meeting. In a company of 20 to 250 people this takes five agreements, not a reorganisation, and the sections below set them out in order.',
    },
    { type: 'h2', text: 'Why the two teams drift apart' },
    {
      type: 'p',
      text: 'Marketing is usually judged on leads, sales on closed deals. Each side can hit its target while the company misses its own: marketing sends 200 enquiries, sales calls the 30 that look easy and calls the rest "bad leads". Neither side is lying. They are using different definitions and different data.',
    },
    {
      type: 'p',
      text: 'The fix is not a motivational workshop. It is a short set of shared rules, owned by one named person on each side, and written where both teams can read them. If you are still deciding which channels feed the pipeline, start with the [lead generation strategies](/blog/lead-generation-strategies) guide; this post covers what happens once the enquiries arrive.',
    },
    { type: 'h2', text: '1. Agree one definition of a qualified lead' },
    {
      type: 'p',
      text: 'Most CRMs separate a raw lead from a lead that has been vetted. HubSpot\'s documentation defines a [marketing qualified lead](https://knowledge.hubspot.com/records/use-lifecycle-stages) as "a contact or company that your marketing team has qualified as ready for the sales team", and a sales qualified lead as one "that your sales team has qualified as a potential customer". The names are a convention, but the idea is useful in any tool: there is a point where marketing hands over, and a point where sales accepts.',
    },
    {
      type: 'p',
      text: 'Write the criteria for both points in a page of plain language. Sit marketing and sales together and agree on:',
    },
    {
      type: 'ul',
      items: [
        'Who the buyer is: company size, industry, role of the person who enquires, and the cities or countries you serve.',
        'What is enough to hand over: for example a phone number that works, a stated need, and a rough timing or budget.',
        'What is not a lead: job seekers, suppliers, existing customers with support questions, and duplicates.',
        'Who decides in a dispute. Pick a person; do not leave it to argument every week.',
      ],
    },
    {
      type: 'p',
      text: 'Revisit the definition every quarter. It should change when your offer, prices or target customers change, not after one bad week.',
    },
    { type: 'h2', text: '2. Hand over fast, and measure the speed' },
    {
      type: 'p',
      text: 'Handover is where most leads are lost. In the Harvard Business Review article [The Short Life of Online Sales Leads](https://scholarsarchive.byu.edu/facpub/9711), Oldroyd, McElheran and Elkington write: "Our research shows that most companies are not responding nearly fast enough." It is a 2011 study, so treat it as a reason to time your own replies rather than as a benchmark to copy. The post on [AI chatbot benefits](/blog/ai-chatbot-benefits) covers one way to speed up the first reply.',
    },
    {
      type: 'p',
      text: 'Agree a service level between the teams, like an internal contract:',
    },
    {
      type: 'ul',
      items: [
        'Marketing: every lead arrives in the CRM automatically, with source, campaign, the form answers and a timestamp. No spreadsheets and no forwarded emails.',
        'Sales: every new lead gets a first call or message within a set time in working hours (choose a number you can really keep, such as 15 or 30 minutes), and at least one more attempt on another day.',
        'Both: one owner per lead from the moment it is created, shown in a field, not remembered.',
      ],
    },
    {
      type: 'p',
      text: 'Report the median minutes from form to first contact each week. If it is long, the fix usually lies in routing and coverage rules, not in buying more leads.',
    },
    { type: 'h2', text: '3. Put the same fields in the CRM' },
    {
      type: 'p',
      text: 'Alignment lives or dies in the CRM, because it is the only place both teams see the same record. HubSpot distinguishes the broad lifecycle stage from [lead status](https://knowledge.hubspot.com/records/use-lifecycle-stages), which "describes the sub-stages within a Sales Qualified Lead lifecycle stage". You do not need that exact structure, but you need a few fields that every record carries:',
    },
    {
      type: 'table',
      head: ['Field', 'Filled by', 'Why it matters'],
      rows: [
        ['Source and campaign', 'Marketing, automatically', 'Shows which channel and ad produced the enquiry, not only the form fill'],
        ['Stage (new, contacted, qualified, proposal, won, lost)', 'Sales', 'Gives both teams the same view of the pipeline'],
        ['Owner', 'Routing rule or manager', 'A lead with no owner is a lead nobody calls'],
        ['First contact time', 'CRM automatically', 'Makes response speed measurable'],
        ['Lost reason (from a short fixed list)', 'Sales, required', 'The raw material for the feedback loop below'],
        ['Deal value and close date', 'Sales', 'Lets marketing see revenue by source'],
      ],
    },
    {
      type: 'p',
      text: 'Keep the lost-reason list short: no budget, no response, chose a competitor, not the right fit, bad timing, duplicate. Make the field required before a deal can be closed as lost, otherwise it stays empty.',
    },
    { type: 'h2', text: '4. Close the feedback loop' },
    {
      type: 'p',
      text: 'Marketing needs to hear which leads became customers, and sales needs to hear what promise brought each lead in. Without this, marketing keeps optimising for the cheapest form fill.',
    },
    {
      type: 'ul',
      items: [
        'Sales to marketing: once a month, review the lost reasons and a sample of 10 to 20 leads together. If many leads are "not the right fit", the ad or landing page is attracting the wrong people, which is a marketing fix.',
        'Marketing to sales: share what the lead saw before enquiring (the ad, the page, the offer), so the first call can start from it. Share upcoming campaigns before they launch so sales can staff for the replies.',
        'Sales to marketing again: tell them which objections come up repeatedly. These often become the best content, because they are the questions buyers really have.',
      ],
    },
    {
      type: 'p',
      text: 'If many leads arrive but few are fit, the issue may be demand rather than volume; [lead generation vs demand generation](/blog/lead-generation-vs-demand-generation) explains the difference.',
    },
    { type: 'h2', text: '5. Share the metrics and meet weekly' },
    {
      type: 'p',
      text: 'Each team may keep its own working numbers, but both should be judged on a few shared ones that run from the first click to revenue. Pick from this list rather than adding more:',
    },
    {
      type: 'table',
      head: ['Shared metric', 'How to calculate it', 'Who moves it most'],
      rows: [
        ['Qualified leads per month', 'Leads that meet the agreed definition', 'Marketing'],
        ['Time to first contact', 'Median minutes from enquiry to first reply', 'Sales'],
        ['Lead-to-customer rate', 'Customers divided by leads, by source', 'Both'],
        ['Cost per customer', 'Marketing and sales spend divided by new customers', 'Both'],
        ['Revenue by source', 'Closed deal value grouped by source', 'Both'],
      ],
    },
    {
      type: 'p',
      text: 'The [marketing KPIs guide](/blog/marketing-kpis) covers how to calculate most of these and where to read them from. For long sales cycles, a lead from this month may close in a few months, so review early-stage numbers weekly and revenue numbers quarterly.',
    },
    {
      type: 'p',
      text: 'A weekly meeting of 30 minutes keeps the rest alive. Use the same agenda each time:',
    },
    {
      type: 'ol',
      items: [
        'Last week\'s numbers: qualified leads, time to first contact, deals won and lost.',
        'Leads stuck or unowned: assign each one to a name before the meeting ends.',
        'Two or three lost deals: read the reason and decide whether it points to a marketing or a sales fix.',
        'Next week\'s campaigns and any change in offers or prices.',
        'One change to test, with an owner and a date.',
      ],
    },
    { type: 'h2', text: 'Where to start' },
    {
      type: 'p',
      text: 'Do not try all five at once. Write the lead definition this week, add the lost-reason field next week, and start the weekly meeting the week after. If you want an outside view of where leads are lost between the ad and the sale, WakeUP\'s [free marketing audit](/audit) reviews your ads, website and sales process and returns the three changes that would help most, within one business day.',
    },
  ],
}
