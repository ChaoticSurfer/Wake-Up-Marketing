import type { BlogPost } from '@/lib/blog'

export const post: BlogPost = {
  locale: 'en',
  slug: 'what-a-good-seo-report-includes',
  title: 'What should an SEO report include? A buyer\'s checklist',
  metaTitle: 'What Should an SEO Report Include?',
  description:
    'What should an SEO report include? A checklist for the monthly report you receive: results tied to enquiries, work done, problems and next steps.',
  publishedAt: '2027-01-02T15:00:00+04:00',
  updatedAt: '2027-01-02T15:00:00+04:00',
  service: 'seo',
  reviewState: 'llm_reviewed',
  body: [
    {
      type: 'p',
      text: 'A good monthly SEO report includes five things: a short summary in plain words, search results from Google data you can check yourself, the business result (enquiries and calls from organic search), a list of the work done with the reason for each item, and what is blocked or planned for next month. If a report you receive lacks the work list or the business result, it is a rank sheet, not a report.',
    },
    {
      type: 'p',
      text: 'This post is for the person who receives the report and pays for it. It does not repeat the general warning signs or the contract advice; it gives you a way to grade the report in front of you. For those, read [SEO agency red flags](/blog/seo-agency-red-flags) and [what an SEO retainer includes](/blog/seo-retainer-what-you-get).',
    },
    { type: 'h2', text: 'Section 1: a summary you can read in a minute' },
    {
      type: 'p',
      text: 'The top of the report should say, in a few sentences, what moved, why, and what happens next. A manager who reads only this should know whether to worry. Reports built around dozens of charts with no conclusion push the reading work onto you. Ask for the summary to name one thing that went well, one that did not, and one decision you need to make.',
    },
    { type: 'h2', text: 'Section 2: search numbers you can check yourself' },
    {
      type: 'p',
      text: 'Google\'s [Performance report in Search Console](https://support.google.com/webmasters/answer/7576553) defines the core numbers. Clicks are "the number of times a user clicked your site from Google Search results", impressions are "how many times your site appeared in Search results", and click-through rate is the click count divided by the impression count. Average position, in the chart, is the average position of the topmost result from your site.',
    },
    {
      type: 'ul',
      items: [
        'Clicks and impressions for the month, compared with the previous month and the same month last year, if the history exists.',
        'Pages and queries that gained or lost clicks, not one list of every tracked keyword.',
        'Brand searches (people typing your company name) separated from other searches. Growth that comes only from your own name is not growth that SEO created.',
        'Georgian and English queries shown separately if your site serves both.',
      ],
    },
    {
      type: 'p',
      text: 'Pick one number from the report and find it yourself in Search Console. Google notes that "the chart totals can sometimes differ from the table totals", so small differences are normal. A large gap is a question to ask. Google also advises giving an SEO provider [read-only access, not write access, for an audit](https://developers.google.com/search/docs/fundamentals/do-i-need-seo), and you should hold the owner role on your own Search Console property, not the agency.',
    },
    { type: 'h2', text: 'Section 3: the business result' },
    {
      type: 'p',
      text: 'Traffic is a means. The report should show what visitors from organic search did: form submissions, calls, messages, bookings or purchases. In Google Analytics 4 this is a key event, defined by Google as "an event that measures an action that\'s particularly important to the success of your business". If the report has no number of this kind, ask how enquiries are counted. If they are not counted, no report can show that SEO is working. [Marketing KPIs](/blog/marketing-kpis) explains how to choose the business numbers worth tracking.',
    },
    {
      type: 'p',
      text: 'Compare the report\'s enquiry count with your own: your CRM, your inbox, your phone log. They will not match exactly, but they should be in the same range and the report should explain the difference.',
    },
    { type: 'h2', text: 'Section 4: work done, with the reason' },
    {
      type: 'p',
      text: 'This is the section rank-only reports leave out, and the one that lets you tell effort from luck. Google\'s own guidance for hiring an SEO suggests asking whether the provider will share their recommendations and the reasoning behind them. A good work list names the page and the change.',
    },
    {
      type: 'table',
      head: ['Weak entry', 'Useful entry'],
      rows: [
        ['Technical optimisation completed', 'Fixed the pages returning errors listed in Search Console; added redirects for a removed service page'],
        ['Content created', 'Published a Georgian guide on the question your sales team hears most, with the target query named'],
        ['Link building ongoing', 'Two mentions from named sites, with links and why they are relevant'],
        ['Keywords optimised', 'Rewrote title and headings on the pricing page because impressions were high and clicks low'],
      ],
    },
    {
      type: 'p',
      text: 'The examples show the level of detail to expect; your own report will list your own pages. [What SEO services include](/blog/what-do-seo-services-include) describes the kinds of work you might see.',
    },
    { type: 'h2', text: 'Section 5: problems, blockers and next month' },
    {
      type: 'p',
      text: 'Real SEO has flat months. A report should say what did not work, what is waiting on your side (an approval, a developer, a product photo), and what will be done next month in order of importance. Google says no one can guarantee a top ranking, and advises being wary of anyone who does. A report that always promises rises next month without a plan is making that guarantee in another form.',
    },
    { type: 'h2', text: 'What can stay out, or at the bottom' },
    {
      type: 'p',
      text: 'Tool scores, such as an "authority" or "health" number, can sit in an appendix. Google states that [third-party tools do not have access to its internal ranking data](https://developers.google.com/search/docs/fundamentals/third-party-seo), and that any predictions they make are their own. A long list of every tracked keyword, or backlink counts without context, also belongs in an appendix. They are inputs, not results.',
    },
    { type: 'h2', text: 'A scorecard for your next report' },
    {
      type: 'table',
      head: ['Question', 'Yes means'],
      rows: [
        ['Can I read the summary in a minute and know what to do?', 'The agency is communicating, not just reporting'],
        ['Do the Search Console numbers match what I see myself?', 'The data is real and you have access'],
        ['Are brand searches separated?', 'Growth is not credited to SEO by mistake'],
        ['Does it show enquiries from organic search?', 'Results are tied to the business'],
        ['Is every piece of work named, with a reason?', 'You can tell effort from luck'],
        ['Does it say what went wrong?', 'The report is honest'],
        ['Is next month\'s plan specific and ordered?', 'You can hold the agency to it'],
      ],
    },
    {
      type: 'p',
      text: 'Six or seven yes answers is a strong report. Four or fewer is worth a conversation. Ask the provider the question Google itself suggests: "How do you measure your success?" A clear answer in terms of enquiries is a good sign, and a vague one is useful information too.',
    },
    { type: 'h2', text: 'If your report falls short' },
    {
      type: 'p',
      text: 'Send the scorecard to your provider and ask for the missing sections in next month\'s report; many gaps are habit, not intent. If you are still choosing, ask for a sample report with the client name removed before signing. WakeUP Marketing offers SEO as a service (see its [SEO service page](/services/seo)) alongside other options you can compare, such as an in-house hire or a consultant; [how much SEO costs](/blog/how-much-does-seo-cost) covers the price ranges. A [free audit](/audit) shows what your site needs before you decide who should do the work.',
    },
  ],
}
