import type { BlogPost } from '@/lib/blog'

export const post: BlogPost = {
  locale: 'en',
  slug: 'good-bounce-rate',
  title: 'What is a good bounce rate? Benchmarks by page type and what to fix',
  metaTitle: 'What Is a Good Bounce Rate in GA4?',
  description:
    'What is a good bounce rate? There is no single number: published medians run from 44% to 61%. See how GA4 counts it and what to fix on your pages.',
  publishedAt: '2027-02-04T18:00:00+04:00',
  updatedAt: '2027-02-04T18:00:00+04:00',
  service: 'websites',
  reviewState: 'llm_reviewed',
  body: [
    {
      type: 'p',
      text: 'A good bounce rate depends on the page, the traffic source and which Google Analytics you use. Published medians for whole websites range from about 44% to 61%, and a rate above 60% is worth a look when a page is meant to lead somewhere. In GA4, bounce rate simply means the share of sessions that were not engaged, so judge each page against its own job, not against one site-wide number.',
    },
    { type: 'h2', text: 'Bounce rate in GA4 is not the old bounce rate' },
    {
      type: 'p',
      text: 'Most benchmarks you find online were built on Universal Analytics. Google\'s legacy help article defines [a bounce as "a single-page session on your site"](https://support.google.com/analytics/answer/1009409): someone who read one page for three minutes still counted as a bounce.',
    },
    {
      type: 'p',
      text: 'GA4 works the other way round. Per Google\'s [engagement metrics help page](https://support.google.com/analytics/answer/12195621), an engaged session lasts longer than 10 seconds, has a key event, or has two or more page or screen views. Engagement rate is the percentage of engaged sessions, and the page states: "The bounce rate is the percentage of sessions that were not engaged." Because every session is either engaged or not, the two add up to 100%.',
    },
    {
      type: 'p',
      text: 'So a one-page visit that lasts 40 seconds is a bounce in the old definition and an engaged session in GA4. A GA4 bounce rate can come out lower than the same page measured the old way, and comparing it with a benchmark from the Universal Analytics years is comparing two different measurements.',
    },
    { type: 'h2', text: 'What the benchmarks say, and why they disagree' },
    {
      type: 'table',
      head: ['Source', 'Figure', 'What it covers'],
      rows: [
        [
          'Orbit Media (Andy Crestodina)',
          '61% overall; organic search 55.6%, paid search 62.6%, email 61.5%, direct 66.5%, social 67.6%',
          '501 Analytics accounts, over 250 million visits, collected February 2020. About 95% of sites are US companies',
        ],
        [
          'Databox',
          '60.15% median',
          'Anonymised data from 2,000+ companies for this metric; the article was updated July 2025 and does not say which Analytics version',
        ],
        [
          'Semrush, citing Databox (September 2024)',
          '44.04% median; industries from about 36% (apparel) to 48% (SaaS, IT services)',
          'Cross-industry medians as reported in Semrush\'s January 2026 article',
        ],
      ],
    },
    {
      type: 'p',
      text: 'The gap between 44% and 61% is mostly method: different years, different samples, different definitions. Treat any of these as a rough range, not a target. Orbit Media\'s [study](https://www.orbitmedia.com/blog/whats-a-good-bounce-rate/) is useful for something else: the order of the channels. Organic search was the lowest of the five sources it listed, and its author wrote that the paid search figure "represents the failure rate of advertising." Semrush\'s [guide](https://www.semrush.com/blog/bounce-rate/) says a rate of 60% or higher can indicate that a page isn\'t meeting user expectations. None of these sets is a Georgian sample, so your own history, by page and by channel, is the benchmark that counts.',
    },
    { type: 'h2', text: 'Read it by page type, not as one site number' },
    {
      type: 'p',
      text: 'A site-wide average mixes pages with very different jobs. The same Semrush article notes that a high rate can be acceptable on a single-question page, such as a glossary entry, when the visitor\'s need is met quickly. Use that logic page by page. The ranges below are a way of reading the number, not published benchmarks.',
    },
    {
      type: 'table',
      head: ['Page type', 'What a visitor should do', 'How to read a high bounce rate'],
      rows: [
        ['Homepage', 'Pick a path: service, product or contact', 'Worrying. The page is meant to send people onward'],
        ['Service or product page', 'Read, compare, then enquire or visit another page', 'Worrying, unless the key event rate is healthy'],
        ['Landing page for ads', 'Submit the form or call', 'Judge by the key event rate first. High bounce with a good key event rate is acceptable'],
        ['Blog post', 'Read the answer, perhaps follow a link', 'Often high and not a problem if the post answers the question. Check scroll depth and next-page clicks'],
        ['Contact page', 'Find a number, an address or a form', 'Fine if the visit ends in a call or a form. Check key events'],
        ['Thank-you page', 'Nothing more', 'Ignore it'],
      ],
    },
    {
      type: 'p',
      text: 'Bounce rate also says nothing on its own about whether a visitor was served. For a business that gets most enquiries by phone, a visitor who lands on the contact page, copies the number and leaves is a success. Count the phone click or WhatsApp click as a key event so GA4 sees it; our guide to [GA4 for small business](/blog/ga4-for-small-business) shows how.',
    },
    { type: 'h2', text: 'Find it in GA4' },
    {
      type: 'p',
      text: 'Google states that most GA4 reports do not include engagement rate and bounce rate by default. An Editor or Administrator can add the bounce rate metric to a detail report through Customize report; overview reports do not accept new metrics. Then:',
    },
    {
      type: 'ol',
      items: [
        'Open Reports, Engagement, Landing page, and add bounce rate as a column so you see it for the pages people enter on.',
        'Sort by sessions, then read the 10 busiest pages. Pages with few sessions swing wildly and are not worth acting on.',
        'Open Traffic acquisition and compare bounce rate across channels. A page can be fine for search and poor for paid social.',
        'Add a device comparison (mobile and desktop). A large gap can point to a layout or speed problem on phones.',
        'Look at the key event rate beside bounce rate. A page with a high bounce rate and a good key event rate is doing its job.',
      ],
    },
    { type: 'h2', text: 'Diagnose a high rate by cause' },
    {
      type: 'p',
      text: 'Before changing a page, decide which of four causes you are looking at. Each leaves a different trace in the data.',
    },
    {
      type: 'table',
      head: ['Cause', 'Trace in the data', 'First fix'],
      rows: [
        [
          'The page promised something else',
          'High bounce from one channel or one ad or search query, normal from others',
          'Make the title, ad or snippet match the first screen of the page',
        ],
        [
          'The page is slow or jumpy',
          'Much worse on mobile; Core Web Vitals report shows failures',
          'Fix speed first (see below)',
        ],
        [
          'The page does not show a next step',
          'Visitors stay 10+ seconds on average but few click or enquire',
          'Add one clear button or contact option above the fold and link to related pages',
        ],
        [
          'The visitors were wrong',
          'High bounce from a new campaign or a broad keyword',
          'Tighten the targeting or the keywords; the page is not at fault',
        ],
      ],
    },
    { type: 'h2', text: 'What to fix, in order' },
    {
      type: 'p',
      text: 'Speed comes first because it affects every visitor and is measurable. Google\'s [web.dev](https://web.dev/articles/vitals) lists the "good" thresholds as Largest Contentful Paint at 2.5 seconds or less, Interaction to Next Paint at 200 milliseconds or less and Cumulative Layout Shift at 0.1 or less, assessed at the 75th percentile of page loads and split by mobile and desktop. Our post on [improving Core Web Vitals](/blog/improve-core-web-vitals) cover how to measure and fix each one.',
    },
    {
      type: 'ul',
      items: [
        'Match the promise: rewrite the title tag, meta description or ad so a visitor knows what the page delivers before clicking. Then make the H1 and the first screen say the same thing.',
        'Make the first screen useful on a phone: the answer or offer, proof such as a client logo or review, and one action. An expert quoted in the Semrush guide advises keeping confirmation, credibility and clear instructions visible above the fold.',
        'Make the text scannable: plain language, short paragraphs, descriptive subheadings, lists where steps are listed.',
        'Add internal links with descriptive anchor text, and fix broken links, so a visitor who is not ready to act has somewhere sensible to go.',
        'On ad landing pages, remove distractions and use one action. See [landing pages for lead generation](/blog/lead-generation-landing-pages) for the layout.',
        'Then measure the outcome that matters. If bounce rate falls but enquiries do not move, the change did not help; our post on [website conversion rate optimization](/blog/website-conversion-rate-optimization) explains how to test changes without heavy traffic.',
      ],
    },
    {
      type: 'p',
      text: 'Do not "fix" bounce rate by tricks such as firing an event on every page load. That raises engagement in the report and changes nothing for the visitor, and it breaks the one signal that helps you find pages that need work.',
    },
    { type: 'h2', text: 'Where WakeUP fits' },
    {
      type: 'p',
      text: 'WakeUP builds premium, complex websites and landing pages, and the [website development service](/services/website-development) page lists what a project includes. If you want a second pair of eyes on the pages that lose visitors first, the [free audit](/audit) is the place to start.',
    },
  ],
}
