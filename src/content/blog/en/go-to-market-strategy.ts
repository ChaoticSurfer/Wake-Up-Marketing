import type { BlogPost } from '@/lib/blog'

export const post: BlogPost = {
  locale: 'en',
  slug: 'go-to-market-strategy',
  title: 'Go-to-market strategy: a plan for launching a product or service in Georgia',
  metaTitle: 'Go-to-Market Strategy',
  description:
    'A go-to-market strategy for launching a new product or service in Georgia: customer, positioning, price, channels and the first 90 days of tests.',
  publishedAt: '2027-02-11T18:00:00+04:00',
  updatedAt: '2027-02-11T18:00:00+04:00',
  service: 'advertising',
  reviewState: 'llm_reviewed',
  body: [
    {
      type: 'p',
      text: 'A go-to-market strategy is the plan for how a new product or service reaches its first customers: who they are, how you position the offer, what it costs, which channels you use to reach them, and how you will know it is working. For a launch in Georgia, keep it short, decide the five parts in order, and treat the first 90 days as a set of tests.',
    },
    { type: 'h2', text: 'What a go-to-market strategy covers' },
    {
      type: 'p',
      text: 'PayPal\'s business guide describes it as "a roadmap designed to help a business bring new products or services to market and position them competitively", and lists core components that include market research, positioning, pricing, channels and an execution plan ([PayPal, go-to-market strategy guide](https://www.paypal.com/us/brc/article/create-go-to-market-strategy)). That is a good skeleton. It differs from a general [marketing strategy](/blog/marketing-strategy-for-small-business), which covers a whole business, and from a [marketing plan](/blog/marketing-strategy-vs-marketing-plan), which schedules activity. A go-to-market plan is about one launch.',
    },
    { type: 'h2', text: '1. Choose the first customer' },
    {
      type: 'p',
      text: 'Launches fail when the target is "everyone in Georgia". Pick one segment you can describe in a sentence, such as clinics in Tbilisi with more than 20 staff, or online shops that ship across the country. Then write down:',
    },
    {
      type: 'ul',
      items: [
        'The job they hire this product to do, and what they do today instead.',
        'Who decides and who pays (often two different people in a company).',
        'Where they spend time: which social networks, which search queries, which events or associations.',
        'What would make them say no: price, trust, switching effort, language.',
      ],
    },
    {
      type: 'p',
      text: 'Talk to five to ten of them before building anything else. Interview notes beat guesses, and a [buyer persona](/blog/how-to-create-buyer-persona) is just those notes tidied up.',
    },
    { type: 'h2', text: '2. Position against what they use now' },
    {
      type: 'p',
      text: 'Positioning is the answer to "why this, instead of what I do today?" Look at the real alternatives: a local competitor, an international tool, a freelancer, doing nothing. The method in [how to do competitor analysis](/blog/how-to-do-competitor-analysis) works here. Write one positioning sentence in this shape and test it with your interviewees:',
    },
    {
      type: 'p',
      text: 'For [segment] who [problem], [product] is a [category] that [main benefit], unlike [alternative] which [weakness].',
    },
    {
      type: 'p',
      text: 'Decide the language of the launch too: Georgian, English or Russian, depending on what your buyers read and search in. Choose based on your interviews, not preference.',
    },
    { type: 'h2', text: '3. Set a price you can defend' },
    {
      type: 'p',
      text: 'Price from three directions: what the customer saves or earns, what comparable alternatives cost in your market, and your own cost plus the margin you need. Decide whether you launch with an introductory offer, a pilot, or a full price. Whatever you choose, work out how much you can afford to spend to win one customer before you start promoting, and check that the price leaves room for it.',
    },
    { type: 'h2', text: '4. Pick two channels, not eight' },
    {
      type: 'p',
      text: 'Choose channels by the job each does for this segment, and start with the fewest that can reach them.',
    },
    {
      type: 'table',
      head: ['Channel', 'Good for', 'Watch out for'],
      rows: [
        ['Direct outreach and referrals', 'B2B offers with few, high-value buyers', 'Needs a named list and someone who follows up'],
        ['Search ads and SEO', 'Products people already search for', 'Little demand if the category is new'],
        ['Meta ads (Facebook, Instagram)', 'Creating awareness and testing messages with a defined audience', 'Needs tracking and creative testing before spend grows'],
        ['Content and video', 'Explaining something new, building trust', 'Slow without a distribution plan'],
        ['Partnerships and events', 'Reaching an established community', 'Dependent on the partner\'s calendar'],
      ],
    },
    {
      type: 'p',
      text: 'The [comparison of Facebook ads and Google ads](/blog/facebook-ads-vs-google-ads) explains how the two differ: search mostly reaches people who are already looking, social mostly reaches people who are not yet. If you do not yet know how much to spend, [how much a marketing budget should be](/blog/how-much-should-marketing-budget-be) gives a way to size it.',
    },
    { type: 'h2', text: '5. Run the first 90 days as tests' },
    {
      type: 'p',
      text: 'Treat the launch as experiments with a pass mark set in advance. A simple structure:',
    },
    {
      type: 'ol',
      items: [
        'Days 1 to 14: set up tracking, the landing page and the enquiry path. Test the message in five to ten interviews or a small outreach list.',
        'Days 15 to 45: run one test per channel with a small budget. Record cost per enquiry and, more importantly, how many enquiries become customers.',
        'Days 46 to 75: stop what failed, double down on the best channel, rewrite the message using the objections you heard.',
        'Days 76 to 90: review the numbers against the goal, set the next quarter\'s budget and decide what to stop.',
      ],
    },
    {
      type: 'p',
      text: 'Choose three to five measures before you start; the list in [marketing KPIs](/blog/marketing-kpis) helps, and [how to calculate marketing ROI](/blog/how-to-calculate-marketing-roi) turns spend and revenue into one number. Agree with sales who follows up each lead and how fast, so the numbers reflect the product, not slow replies.',
    },
    { type: 'h2', text: 'Common ways a launch goes wrong' },
    {
      type: 'ul',
      items: [
        'Starting with ads before the message has been tested with real buyers.',
        'Spreading a small budget thinly across many channels, so none produces enough data to judge.',
        'Counting enquiries without counting customers.',
        'Setting no stop rule, so a failing channel keeps spending.',
      ],
    },
    {
      type: 'p',
      text: 'If you want a second view before committing budget, the [free marketing audit](/audit) looks at your current ads, website and sales process. For the paid channels in a launch, WakeUP\'s [advertising service](/services/advertising) covers Meta and Google campaign setup, creative testing and reporting.',
    },
  ],
}
