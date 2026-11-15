import type { BlogPost } from '@/lib/blog'

export const post: BlogPost = {
  locale: 'en',
  slug: 'website-rfp-and-brief',
  title: 'Website RFP template: how to write a brief agencies can compare',
  metaTitle: 'Website RFP Template and Brief Guide',
  description:
    'A website RFP template: the sections to include, how to state requirements and budget, and a scoring table so agency proposals can be compared fairly.',
  publishedAt: '2027-01-05T12:00:00+04:00',
  updatedAt: '2027-01-05T12:00:00+04:00',
  service: 'websites',
  reviewState: 'llm_reviewed',
  body: [
    {
      type: 'p',
      text: 'A website RFP (request for proposal) is a short document that tells agencies what you need, what you can spend and how you will choose, so every proposal answers the same questions. A good template has ten parts: company, goals, audience, scope, requirements, content, timeline, budget, response format and scoring. Send the same document to every agency, and compare the answers side by side.',
    },
    { type: 'h2', text: 'RFP or brief: which one do you need?' },
    {
      type: 'p',
      text: 'The two words are used loosely. A brief is a short statement of the project that you give to one or two agencies you already trust. An RFP is the longer, formal version you send to several agencies when you want to compare prices, plans and teams. The sections are nearly the same; the RFP adds response rules and a scoring method.',
    },
    {
      type: 'p',
      text: 'If you are unsure whether you need a custom site at all, read [custom website vs template](/blog/custom-website-vs-template) first, because the answer changes what you ask for. What the agency does after it is chosen, such as workshops and research, is covered in [the website discovery phase](/blog/website-discovery-phase). This post is the step before: the document that gets you to a fair choice.',
    },
    { type: 'h2', text: 'The sections to include' },
    {
      type: 'table',
      head: ['Section', 'What to write', 'Why it matters'],
      rows: [
        ['Company and context', 'What you sell, to whom, in which markets and languages; the current site, if any', 'Lets agencies judge fit without a call'],
        ['Goals', 'One to three measurable outcomes, such as enquiries per month or bookings', 'Proposals aim at your result, not at a page count'],
        ['Audience', 'Who visits, what they want to do, which devices they use', 'Shapes structure and design'],
        ['Scope', 'Pages or page types, features, integrations (CRM, forms, payments), languages', 'The basis for comparable prices'],
        ['Requirements', 'Technical, content, speed, accessibility and tracking needs (see below)', 'Turns preferences into checkable items'],
        ['Content', 'Who writes the text and supplies photos and video; what already exists', 'Missing content often holds a launch up'],
        ['Timeline', 'Your target launch date and any fixed deadline, such as a campaign', 'Shows whether the plan is realistic'],
        ['Budget', 'A figure or range (see below)', 'Lets agencies propose the right solution'],
        ['Response format', 'What to send, in what order, by when, and who answers questions', 'Makes proposals easy to compare'],
        ['Scoring', 'The criteria and their weights', 'Keeps the decision defensible'],
      ],
    },
    { type: 'h2', text: 'Write requirements that can be checked' },
    {
      type: 'p',
      text: '"A fast, modern, accessible site" cannot be checked. Name a standard or a measure so each agency can say yes or no to it. Examples that are easy to verify:',
    },
    {
      type: 'ul',
      items: [
        'Speed: Google\'s [Core Web Vitals](https://web.dev/articles/vitals) set "good" thresholds, assessed at the 75th percentile of page loads: Largest Contentful Paint of 2.5 seconds or less, Interaction to Next Paint of 200 milliseconds or less and Cumulative Layout Shift of 0.1 or less. Ask how the agency will meet them and measure them after launch. See [how to improve website speed](/blog/how-to-improve-website-speed).',
        'Accessibility: the W3C published [WCAG 2.2](https://www.w3.org/TR/WCAG22/) as a Recommendation on 12 December 2024, with conformance levels A, AA and AAA. Say which level you want (AA is a common target) and ask how it will be tested.',
        'Search: ask for crawlable pages, a sitemap, and a redirect plan if you replace an existing site, as in the [website redesign checklist](/blog/website-redesign-checklist).',
        'Content management: say who will edit the site and what they must be able to change without a developer.',
        'Tracking: list the events you need, for example form submissions and phone clicks, and where you will see them.',
        'Ownership: you own the design files, the code and the domain at handover.',
        'Hosting and support: what is included after launch, for how long, and what a change request costs.',
      ],
    },
    { type: 'h2', text: 'Budget: say something' },
    {
      type: 'p',
      text: 'Many buyers hide the budget to get lower quotes. It usually backfires: prices come back far apart and cannot be compared. Writing for Progress, Suzanne Scacca advises: ["So it\'s a good idea to include your own timeline and working budget."](https://www.progress.com/blogs/how-write-perfect-rfp-website-app-rfp-template-included) A range or a ceiling works if you do not want to give one number.',
    },
    {
      type: 'p',
      text: 'If you do not know what a project like yours costs, find out before you send the RFP: [how much a website costs](/blog/how-much-does-a-website-cost) lists what moves the price. Then rank your scope items as must have, should have and later, so an agency can fit the work to the money instead of guessing. List separately anything you will buy yourself, such as photography, stock images or licences.',
    },
    { type: 'h2', text: 'Ask for answers you can line up' },
    {
      type: 'p',
      text: 'Give the response format in the RFP and ask every agency to follow it. A short list is enough:',
    },
    {
      type: 'ol',
      items: [
        'Their understanding of your goal, in their own words.',
        'The approach and the stages, with what you receive at each.',
        'Two or three relevant projects, with the role of the team on each, and a reference you can call.',
        'The named people who will work on yours.',
        'The price split by stage or deliverable, what is not included and how extra work is charged.',
        'The timeline with milestones and what they need from you at each.',
        'Support after launch and who owns what at the end.',
      ],
    },
    {
      type: 'p',
      text: 'Allow a window for written questions and send every question and answer to all agencies. It is fairer, and it shows you how each agency thinks before you spend an hour in a meeting.',
    },
    { type: 'h2', text: 'Score the proposals' },
    {
      type: 'p',
      text: 'Decide the criteria before the proposals arrive, so a polished pitch does not rewrite them. The weights below are an example; set your own and share the criteria in the RFP.',
    },
    {
      type: 'table',
      head: ['Criterion', 'Example weight', 'What to look for'],
      rows: [
        ['Understanding of the goal', '20%', 'Do they restate your problem, or sell a generic site?'],
        ['Relevant experience and references', '20%', 'Similar complexity, and references who confirm it'],
        ['Approach and quality of the plan', '20%', 'Clear stages, testing, measurable requirements met'],
        ['Price and what is included', '20%', 'Complete, itemised, no hidden extras'],
        ['Team and communication', '10%', 'Named people, a single contact, clear cadence'],
        ['Support and ownership', '10%', 'Handover terms, maintenance, who owns what'],
      ],
    },
    {
      type: 'p',
      text: 'Score each proposal separately, ideally by two people, then compare. The lowest price is only one line of the table. A proposal that leaves out content, testing or support will look cheaper than one that includes them, which is why the price criterion says "what is included".',
    },
    { type: 'h2', text: 'Mistakes that make proposals useless' },
    {
      type: 'ul',
      items: [
        'Asking for a price with only "we need a website": no two agencies will quote the same thing.',
        'Listing features but no goal, so nobody can say whether a feature is needed.',
        'Sending the RFP to ten agencies. Three to five is enough to compare, and respects their time.',
        'Changing the scope after the proposals arrive without letting everyone requote.',
        'Not saying who supplies the content, then discovering it is a large part of the work.',
      ],
    },
    {
      type: 'p',
      text: 'WakeUP builds premium, complex websites and landing pages, and you are welcome to send your brief to the [website and landing page development](/services/website-development) team as one of the agencies you compare. If you are not sure what to put in the goals and scope sections yet, a [free marketing audit](/audit) is a way to find out what your current site is doing before you write them.',
    },
  ],
}
