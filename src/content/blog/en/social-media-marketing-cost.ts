import type { BlogPost } from '@/lib/blog'

export const post: BlogPost = {
  locale: 'en',
  slug: 'social-media-marketing-cost',
  title: 'How much does social media marketing cost? What you pay for and how to budget',
  metaTitle: 'Social Media Marketing Cost Guide',
  description:
    'How much does social media marketing cost? Four cost lines: management, content, ad spend and tools. Dated benchmarks, pricing models and a budget method.',
  publishedAt: '2026-12-08T15:00:00+04:00',
  updatedAt: '2026-12-08T15:00:00+04:00',
  service: 'smm',
  reviewState: 'llm_reviewed',
  body: [
    {
      type: 'p',
      text: 'How much does social media marketing cost? There is no single price, because the bill has four separate parts: the fee for managing your accounts, content production, ad spend paid to the platforms, and software tools. A 2024 survey of agency and freelance managers put the average monthly retainer at about $2,100, but that is a US-dollar survey average, not a Georgia price. Budget each of the four parts on its own.',
    },
    { type: 'h2', text: 'The four parts of a social media marketing bill' },
    {
      type: 'table',
      head: ['Cost line', 'What it pays for', 'How it is usually charged'],
      rows: [
        ['Management fee', 'Strategy, content calendar, publishing, replies to comments and messages, reporting', 'Monthly retainer, hourly rate or per project'],
        ['Content production', 'Photos, Reels and short video, graphics, copywriting', 'Inside the retainer up to a set volume, or as a separate line'],
        ['Ad spend', 'The money paid to Meta, TikTok or LinkedIn to show posts and ads', 'Paid to the platform, set by you, not the agency\'s fee'],
        ['Tools', 'Scheduling, design and analytics software', 'Monthly subscription per channel, seat or account'],
      ],
    },
    {
      type: 'p',
      text: 'The third line matters most when you compare quotes. Clutch states in its [social media marketing pricing guide](https://www.clutch.co/agencies/social-media-marketing/pricing) that campaign money is "separate from fees given to the agency for their work". A quote that says "from X a month" usually means the management and content lines only. Ask whether ad spend, tools and extra video shoots are in or out.',
    },
    { type: 'h2', text: 'What agencies and freelancers charge: one dated survey' },
    {
      type: 'p',
      text: 'Public price data is mostly in US dollars and ages quickly. One transparent source is the [HeyOrca social media pricing report](https://heyorca.com/blog/social-media-agency-pricing), published on 28 May 2024, which surveyed more than 100 agency and freelance social media managers. It names no region, and the figures are in USD.',
    },
    {
      type: 'ul',
      items: [
        'Average monthly retainer: $2,107.14. HeyOrca describes the typical retainer scope as managing LinkedIn, Instagram and Facebook for one client, with three approved posts per platform each week, 5 to 10 hours of community management and in-depth reporting.',
        'Average hourly rate: $66.96.',
        'Average one-time Instagram project: $1,509.62, covering account setup, a content strategy and 10 client-approved posts.',
        'Experience moves the price: freelancers with 7 or more years of experience averaged $2,764.71 a month on retainer, against $1,750 for those with 1 to 3 years.',
      ],
    },
    {
      type: 'p',
      text: 'Respondents named what drives their price: scope of work (93%), number of platforms (68%) and experience level (52%). A second benchmark, the [Clutch pricing guide](https://www.clutch.co/agencies/social-media-marketing/pricing), reports an average monthly cost of $5,107.28 for social media marketing projects, without explaining how the figure was calculated. Its page also carries two different update dates, so treat the figure as a rough marker. The two averages differ by more than double, which shows how much the method, the sample and the scope change the answer. Neither is a price for a company in Georgia.',
    },
    { type: 'h2', text: 'Pricing models: retainer, hourly or project' },
    {
      type: 'table',
      head: ['Model', 'How it works', 'Best for', 'Watch out for'],
      rows: [
        ['Monthly retainer', 'A fixed fee for an agreed list of deliverables each month', 'Ongoing presence on 2-3 channels', 'Unclear limits on revisions, video and message handling'],
        ['Hourly', 'You pay for time used', 'Small, irregular tasks and advice', 'Costs are hard to forecast; no reason to work faster'],
        ['Per project', 'One price for a defined piece, such as account setup and a launch batch of posts', 'A launch, a rebrand or a one-off campaign', 'Nothing happens after the project ends unless you buy more'],
      ],
    },
    {
      type: 'p',
      text: 'In the HeyOrca survey, 72% of agencies used only one pricing method, usually a retainer, while freelancers were more likely to charge hourly and 48% of them offered several options. For continuous work, a retainer with a written list of deliverables is the easiest to budget. Clutch advises asking an agency how it charges, whether a sliding scale or a flat fee.',
    },
    { type: 'h2', text: 'Tool prices from the vendors, November 2026' },
    {
      type: 'p',
      text: 'Software is the smallest line, and some of it can be skipped. These are the prices listed on each vendor\'s pricing page in November 2026, in US dollars. Prices change, so check the page before you buy. Agencies often carry their own tool subscriptions, so ask whether yours is covered.',
    },
    {
      type: 'table',
      head: ['Tool', 'Plan and price as listed', 'What the plan covers'],
      rows: [
        ['[Buffer](https://buffer.com/pricing)', 'Free: $0. Essentials: $5 a month per channel, billed yearly at $60. Team: $10 a month per channel, billed yearly at $120', 'The free plan allows up to 3 channels and 10 scheduled posts per channel; paid plans are priced per channel'],
        ['[Hootsuite](https://www.hootsuite.com/plans)', 'Standard: $99 a month. Professional: $199 a month. Advanced: up to $399 a month. Enterprise: custom. Prices are per user on annual billing, before tax', 'Standard covers up to 10 social accounts; Professional and Advanced list unlimited accounts'],
        ['[Later](https://later.com/pricing/)', 'Starter: $18.75 a month. Growth: $37.50. Scale: $82.50. All billed yearly, before tax', 'Starter has 1 social set with 8 profiles and 1 user; Scale has 6 sets, 48 profiles and 4 users'],
      ],
    },
    {
      type: 'p',
      text: 'By simple arithmetic, three channels on Buffer Essentials come to $15 a month on yearly billing. A small company can run scheduling for far less than one hour of a freelancer\'s time. Design tools are a separate subscription, and a quality camera or a day with a videographer is a content cost, not a tool cost.',
    },
    { type: 'h2', text: 'Ad spend: the line you control' },
    {
      type: 'p',
      text: 'Ad spend is not a fee for service. It is the amount you choose to send to the platform, and the platform\'s auction decides what each click or lead costs. Because that price depends on your audience, industry and country, no global average tells you what to expect in Georgia. Read [what Facebook ads cost](/blog/facebook-ads-cost) for how Meta\'s auction and budgets work, and test with a small budget before you scale.',
    },
    { type: 'h2', text: 'How to build your own social media budget' },
    {
      type: 'ol',
      items: [
        'Choose the goal first: enquiries, bookings, store visits or brand awareness. The goal decides whether you need paid posts at all. Our guide to a [social media marketing strategy](/blog/social-media-marketing-strategy) covers goals and channels.',
        'Pick two or three channels where your buyers are. Channel count is the second biggest price driver in the HeyOrca survey.',
        'Decide who does the daily work. If you only need publishing and replies, you are buying management; if you also want campaigns, you are buying marketing. The [difference between social media marketing and management](/blog/social-media-marketing-vs-management) is worth settling before you ask for quotes.',
        'List content needs per month: how many posts, Reels and videos, and whether you can supply raw material yourself.',
        'Add a tools line, then set an ad budget separately and start small.',
        'Include your own time. Someone in your company must approve posts and answer questions about products and prices.',
      ],
    },
    {
      type: 'p',
      text: 'Your total is the management and content fee, plus ad spend, plus tools, plus internal time. Keep the first three on separate lines in a spreadsheet so you can see which one moves when you change scope.',
    },
    { type: 'h2', text: 'What to ask for in a quote' },
    {
      type: 'ul',
      items: [
        'Which channels, how many posts and videos a month, and who produces them.',
        'Whether ad management is included, and whether ad spend is billed through you or the agency.',
        'Who owns the accounts and the ad account (it should be you).',
        'How messages and comments are handled, and in what hours.',
        'What the monthly report contains: leads and enquiries, not only likes.',
        'The notice period and what happens to the content you paid for.',
      ],
    },
    {
      type: 'p',
      text: 'WakeUP Marketing\'s [social media marketing service in Tbilisi](/services/smm) lists what it includes: channel strategy and a monthly content plan, posts, Reels and short video, page management with replies to messages, paid social on Meta and TikTok, and a monthly report. To get a fixed quote based on your situation, start with the [free marketing audit](/audit).',
    },
  ],
}
