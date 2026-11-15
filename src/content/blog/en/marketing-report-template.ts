import type { BlogPost } from '@/lib/blog'

export const post: BlogPost = {
  locale: 'en',
  slug: 'marketing-report-template',
  title: 'Marketing report template: a one-page monthly report owners read in five minutes',
  metaTitle: 'Marketing Report Template (One Page)',
  description:
    'A marketing report template for owners: one page with a summary, 6 to 9 numbers, short channel notes and next steps. Copy it and fill it monthly.',
  publishedAt: '2027-02-26T18:00:00+04:00',
  updatedAt: '2027-02-26T18:00:00+04:00',
  service: 'audit',
  reviewState: 'llm_reviewed',
  body: [
    {
      type: 'p',
      text: 'A good marketing report template fits on one page and has five blocks: a three-sentence summary, six to nine numbers compared with last month, a few lines per channel, the problems, and the decisions or next steps for the coming month. An owner should be able to read it in five minutes and know what to do. Keep the detailed data in a separate sheet and out of the report.',
    },
    { type: 'h2', text: 'Decide who reads it and what they decide' },
    {
      type: 'p',
      text: 'Start with the audience. Column Five Media notes that a report serves the marketing team, who use it to stay aligned, and people outside it, whose decisions about the team the results influence. The report for the second group should be shorter and should end in a decision. Column Five suggests keeping detailed data in a separate spreadsheet and giving the reader a one-page highlights section ([Column Five Media](https://www.columnfivemedia.com/how-to-create-a-marketing-report/)). That is the model here: one page for the owner, one sheet behind it for the marketer.',
    },
    {
      type: 'p',
      text: 'Before the first report, agree what each number means. DashThis, a reporting-tool vendor, recommends defining goals and KPIs up front so everyone reads them the same way ([DashThis](https://dashthis.com/blog/monthly-marketing-reports-for-clients/)). "Lead" can mean a form submission to one person and a qualified buyer to another. Write the definition in one line under each number.',
    },
    { type: 'h2', text: 'The one-page template (five blocks)' },
    {
      type: 'p',
      text: 'Copy this structure into a document or a slide. The middle column says what goes in each block.',
    },
    {
      type: 'table',
      head: ['Block', 'What goes in', 'Length'],
      rows: [
        ['1. Summary', 'What moved, why, and the one thing you need from the reader. Name one thing that went well and one that did not', '3 sentences'],
        ['2. Numbers', 'Six to nine numbers: this month, last month, change, and one short note on any big move', 'One table'],
        ['3. Channel notes', 'For each active channel: what ran, what the result was, what changes next', '2 to 3 lines each'],
        ['4. Problems', 'What did not work, what is blocked and by whom (an approval, a developer, a missing photo)', '2 to 4 bullets'],
        ['5. Next month', 'The three most important actions in order, plus any decision or budget change you propose', '3 bullets'],
      ],
    },
    {
      type: 'p',
      text: 'DashThis lists a similar sequence for monthly reports: goals, channel performance, top wins, problem areas with proposed fixes and next steps. G2 calls the monthly report the most common type and puts lead counts, conversions by source and upcoming plans in it ([G2](https://learn.g2.com/marketing-report)). The difference here is the limit: five blocks, one page, and every block ends in an action.',
    },
    { type: 'h2', text: 'Choose 6 to 9 numbers' },
    {
      type: 'p',
      text: 'More than nine numbers and the reader skims. Pick from the money side down to the activity side, and drop anything that does not change a decision. The reasoning behind each choice is in [marketing KPIs](/blog/marketing-kpis); the table below is a starting list that you trim to your business.',
    },
    {
      type: 'table',
      head: ['Number', 'Why it is there', 'Where to read it'],
      rows: [
        ['Marketing spend (ads and tools)', 'Everything else is read against it', 'Ads Manager, Google Ads, invoices'],
        ['Enquiries (form, call, message)', 'The result of marketing in one number', 'GA4 key events plus your inbox and phone log'],
        ['Cost per enquiry', 'Spend divided by enquiries', 'Calculated'],
        ['Qualified enquiries or deals', 'Separates real buyers from noise', 'Your CRM or sales sheet'],
        ['Revenue from marketing sources', 'Ties marketing to sales', 'CRM or invoices, tagged by source'],
        ['Website visits by channel', 'Shows where the visitors come from', 'GA4 traffic acquisition'],
        ['Visit-to-enquiry rate', 'Shows whether the site converts', 'GA4 key events divided by sessions'],
        ['Best and worst campaign', 'Tells you where to move budget', 'Ads Manager plus GA4 campaign report'],
        ['One channel-specific number (optional)', 'For example email click rate or Reel views, only if you act on it', 'The platform'],
      ],
    },
    {
      type: 'p',
      text: 'For enquiries, use a defined event. Google describes a key event in GA4 as "an event that measures an action that\'s particularly important to the success of your business". If that is not set up, the report cannot count enquiries; [GA4 for a small business](/blog/ga4-for-small-business) shows how to mark them. Compare each number with last month, and with the same month last year if you have the history, because seasonality can look like success or failure; DashThis also suggests year-over-year comparisons for this reason.',
    },
    { type: 'h2', text: 'Channel notes: three lines each' },
    {
      type: 'p',
      text: 'Under the numbers, give each channel a short note in the same shape. A fixed shape makes the report quick to write and quick to read.',
    },
    {
      type: 'ul',
      items: [
        'What ran: the campaign, post series or page work, in one line.',
        'What happened: the result in one or two numbers from the table, with the reason if you know it.',
        'What changes next: stop, keep, or test something specific.',
      ],
    },
    {
      type: 'p',
      text: 'A channel that did nothing this month still gets a line: "paused, reason, restart date". A missing channel looks like a forgotten channel. For an SEO retainer, ask for the longer structure in [what a good SEO report includes](/blog/what-a-good-seo-report-includes); this page is the owner\'s summary on top of it.',
    },
    { type: 'h2', text: 'Where each number comes from' },
    {
      type: 'p',
      text: 'A report is only as good as the tagging behind it. Google\'s [help page on campaign URLs](https://support.google.com/analytics/answer/10917952) says missing UTM parameters result in (not set) values in reporting, so a channel table full of "(not set)" means the links are not tagged. Fix that first with [UTM parameters, explained](/blog/utm-parameters-guide). If many of your sales happen on the phone or in the shop, online reports will miss them; [tracking offline sales from online marketing](/blog/track-offline-sales-from-online-marketing) covers that gap.',
    },
    {
      type: 'ol',
      items: [
        'Pull the same numbers from the same place every month. Changing the source changes the trend.',
        'Take enquiries from GA4 and check them against your inbox, phone log or CRM. They should be in the same range, and the report should explain the difference.',
        'Write each number down on the first working day of the month, before anyone has had time to reinterpret it.',
      ],
    },
    { type: 'h2', text: 'What to leave out' },
    {
      type: 'ul',
      items: [
        'Vanity numbers with no decision attached: total followers, impressions on their own, page views of the whole site.',
        'Screenshots of platform dashboards. Copy the number into your table.',
        'Explanations of how a metric is calculated, which belong in the definition line once.',
        'Ten charts when one table says the same. Charts are for a trend that the reader cannot see in the table.',
      ],
    },
    { type: 'h2', text: 'Make it monthly without making it a project' },
    {
      type: 'p',
      text: 'Once the numbers and sources are fixed, filling the page becomes a routine job. If you want the numbers to refresh by themselves, a dashboard can feed the table; [a Looker Studio marketing dashboard](/blog/looker-studio-marketing-dashboard) covers one way to build it. Keep the written summary by hand: tools can collect numbers, but they cannot tell the owner what to do next.',
    },
    {
      type: 'p',
      text: 'If your current reports do not show enquiries by channel, or you are not sure which numbers to trust, WakeUP\'s [free marketing audit](/audit) reviews your ads, website and sales process and replies with the three changes that would help most.',
    },
  ],
}
