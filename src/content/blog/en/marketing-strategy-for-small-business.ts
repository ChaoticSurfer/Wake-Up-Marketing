import type { BlogPost } from '@/lib/blog'

export const post: BlogPost = {
  locale: 'en',
  slug: 'marketing-strategy-for-small-business',
  title: 'Marketing strategy for small business in Georgia: a 90-day plan',
  metaTitle: 'Marketing Strategy for Small Business',
  description:
    'Marketing strategy for small business: goal, audience, positioning, channels, budget split, measurement and a 90-day plan for Georgian firms.',
  publishedAt: '2026-12-07T16:00:00+04:00',
  updatedAt: '2026-12-07T16:00:00+04:00',
  service: 'audit',
  reviewState: 'llm_reviewed',
  body: [
    {
      type: 'p',
      text: 'A marketing strategy for small business is a short written plan that answers six questions: what business result you want, who buys and why they pick you, which channels will reach them, how much you will spend and where, how you will measure it, and who does what in the next 90 days. For a company of 20 to 250 people it can fit on two pages. The sections below follow that order.',
    },
    { type: 'h2', text: 'Start with one business goal and its baseline' },
    {
      type: 'p',
      text: 'Pick one result for the next quarter that the company already counts: qualified enquiries, signed contracts, bookings, store visits. Write it with a number, a date and today\'s starting point, for example (illustrative numbers) "from 25 qualified enquiries a month to 45 by the end of March". If you do not know the starting point, finding it is your first task, because every later decision compares against it.',
    },
    {
      type: 'p',
      text: 'Add one supporting number that explains the goal, such as the share of enquiries that become customers. A strategy with five equal goals is a wish list; the channel and budget choices below only work when one goal ranks first.',
    },
    { type: 'h2', text: 'Define who buys and why they choose you' },
    {
      type: 'p',
      text: 'The U.S. Small Business Administration describes the purpose of competitive analysis plainly: it "helps you learn from businesses competing for your potential customers" ([SBA, market research and competitive analysis](https://www.sba.gov/business-guide/plan-your-business/market-research-competitive-analysis)). In practice that means three short pieces of work.',
    },
    {
      type: 'ol',
      items: [
        'Audience: describe the one or two customer groups that bring most of your revenue. For a business customer, name the job title of the person who decides and the person who has to approve. Use real inputs: the questions your sales team hears, the reasons deals were lost, the messages your page already receives.',
        'Competitors: list three to five firms a buyer in Georgia would compare you with. Note their offer, price signals, how they get found, and what they do not say.',
        'Positioning: finish this sentence in one line. "For [audience] who [need], we are the [category] that [main benefit], unlike [alternative], because [reason to believe]." The reason to believe must be something you can show: a delivery time, a guarantee, a process, finished work.',
      ],
    },
    {
      type: 'p',
      text: 'Positioning is the filter for everything after this. A channel or campaign that cannot carry that one line is probably the wrong one.',
    },
    { type: 'h2', text: 'Choose the channel mix by the job each channel does' },
    {
      type: 'p',
      text: 'Choose channels by the job they do for your goal, not by what competitors seem to be doing. People in Georgia are reachable online: DataReportal\'s [Digital 2026 report for Georgia](https://datareportal.com/reports/digital-2026-georgia) counts 3.12 million internet users in October 2025, 81.9 percent of the population. Whether your particular buyers are there, and where, is something your own enquiry data answers.',
    },
    {
      type: 'table',
      head: ['Channel', 'Job it does', 'Fits when', 'Read next'],
      rows: [
        ['Search (SEO)', 'Captures people already looking for what you sell, and keeps working after the work is done', 'Buyers search before they contact anyone, and you can wait months for results', '[SEO for a small business](/blog/seo-for-small-business)'],
        ['Google Ads', 'Puts you in front of people searching now, with results in days', 'You have a clear offer, a landing page that converts, and a budget you can test', '[What Google Ads costs](/blog/google-ads-cost)'],
        ['Meta ads (Facebook, Instagram)', 'Reaches people who did not search, and retargets visitors', 'The product is visual or impulse-led, or you need to build awareness first', '[What Facebook ads cost](/blog/facebook-ads-cost)'],
        ['Organic social', 'Builds trust and gives buyers proof before they message you', 'You can post consistently and reply fast', '[Social media marketing strategy](/blog/social-media-marketing-strategy)'],
        ['Website', 'Turns visits into enquiries; every other channel sends people here', 'Always. It is the foundation, not an option', '[What a website costs](/blog/how-much-does-a-website-cost)'],
        ['Direct and outbound', 'Reaches named accounts through email, calls and meetings', 'You sell to a limited number of business customers at a high order value', '[Lead generation strategies](/blog/lead-generation-strategies)'],
      ],
    },
    {
      type: 'p',
      text: 'Most companies of this size should run the website plus one or two channels well rather than six badly. If you are torn between paid search and paid social, [Facebook ads vs Google ads](/blog/facebook-ads-vs-google-ads) compares them. Whichever you pick, check what happens after a lead arrives: a slow reply wastes the budget you already spent to get the lead. An [AI chatbot](/blog/ai-chatbot-benefits) can answer first-line questions at any hour, but only after the sales team knows who follows up.',
    },
    { type: 'h2', text: 'Split the budget between foundation, proven channels and tests' },
    {
      type: 'p',
      text: 'Public benchmarks for marketing spend come mostly from large companies, so use them for orientation only. Gartner\'s 2025 CMO Spend Survey, run in February and March 2025 among 402 marketing leaders in North America, the UK and Europe (most at companies above $1 billion in revenue), found budgets flat at 7.7 percent of company revenue, with paid media taking 30.6 percent of the budget ([Gartner press release of 12 May 2025, as republished on Yahoo Finance](https://finance.yahoo.com/news/gartner-2025-cmo-spend-survey-165900130.html)). Ewan McIntyre, VP Analyst and Chief of Research in Gartner Marketing Practice, said:',
    },
    {
      type: 'p',
      text: '"While marketing budgets have stabilized, marketing spending has stalled at a level that falls short for many CMOs".',
    },
    {
      type: 'p',
      text: 'That tells you what big companies in other markets do, not what a firm in Tbilisi should spend. Set your own number from what the goal needs: take the enquiries you want, divide by the conversion rate you measured, and multiply by the cost per enquiry you can afford. If you have no measurements yet, start with an amount you can lose without harm and treat the first quarter as the way to get them. Then divide it into three buckets.',
    },
    {
      type: 'table',
      head: ['Bucket', 'What goes in it', 'How to size it'],
      rows: [
        ['Foundation', 'Website fixes, tracking, CRM or lead log, reply process, photos and proof', 'Get quotes for the specific fixes from your days 1 to 30 list. It is a one-off cost that should shrink after the first quarter'],
        ['Proven channels', 'The one or two channels where you can already point to enquiries', 'What is left after foundation and tests. Raise it only while cost per customer holds'],
        ['Tests', 'A new channel or offer with a fixed budget and end date', 'A fixed amount you are ready to lose, with the success threshold written down before launch'],
      ],
    },
    {
      type: 'p',
      text: 'The buckets set the order of priority, not a formula. Size each from real quotes and your own measured cost per customer, move money toward whichever bucket shows the lower cost per customer, and keep ad spend separate from agency or freelancer fees so you can see each cost clearly.',
    },
    { type: 'h2', text: 'Measure on one page, monthly' },
    {
      type: 'p',
      text: 'Decide before launch what counts as a result and where it is recorded. Google Analytics defines the idea this way: "A key event is an event that measures an action that\'s particularly important to the success of your business" ([Google Analytics Help](https://support.google.com/analytics/answer/9267568)). For most companies the key events are form submissions, clicks on phone and WhatsApp buttons, and bookings. Calls and chat messages that leave no click need a manual log with a "how did you hear about us" field.',
    },
    {
      type: 'p',
      text: 'Then keep a one-page scorecard that the owner reads each month, in this order:',
    },
    {
      type: 'ol',
      items: [
        'Enquiries and customers by source (the goal metric).',
        'Cost per enquiry and cost per customer, by channel.',
        'Share of enquiries answered within an hour in working time.',
        'The leading signals behind them: visits, ad click-through rate, search impressions.',
        'Decisions: what you will repeat, stop and test next month.',
      ],
    },
    { type: 'h2', text: 'The 90-day plan' },
    {
      type: 'p',
      text: 'Ninety days is long enough to see a trend and short enough to change course. Give every line an owner and a date.',
    },
    {
      type: 'table',
      head: ['Days', 'Focus', 'Output'],
      rows: [
        ['1 to 30', 'Baseline and foundation', 'Goal with a number, audience and competitor notes, positioning line, tracking live, reply process agreed, current spend and results by channel written down'],
        ['31 to 60', 'Launch the mix', 'One or two proven channels running against the goal, one test with a fixed budget, first monthly scorecard reviewed with the owner'],
        ['61 to 90', 'Decide', 'Cut what does not produce, move budget to what does, write the next quarter\'s goal and budget from real cost per customer'],
      ],
    },
    {
      type: 'p',
      text: 'Change one thing at a time inside each channel so you can tell what caused a difference. Revisit the full strategy every quarter and the audience and positioning work once a year.',
    },
    { type: 'h2', text: 'Doing it yourself or with help' },
    {
      type: 'p',
      text: 'One in-house marketer can run this if they have time for planning, production, reporting and follow-up with sales. The first 30 days are the hardest to do alone, because that is where an outside view of your ads, website and sales process is most useful. WakeUP Marketing\'s [free marketing audit](/audit) covers exactly that: send your website and a few details, and within one business day you get a short summary of your ads, website and sales process with the three changes that would improve results fastest. There is no obligation. If you then want help with the work, paid engagements start with a fuller audit and a 90-day plan with channels, budget split, owners and target KPIs.',
    },
  ],
}
