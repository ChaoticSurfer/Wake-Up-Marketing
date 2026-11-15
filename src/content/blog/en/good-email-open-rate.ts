import type { BlogPost } from '@/lib/blog'

export const post: BlogPost = {
  locale: 'en',
  slug: 'good-email-open-rate',
  title: 'What is a good email open rate? Benchmarks, and why clicks tell you more',
  metaTitle: 'Good Email Open Rate: Benchmarks',
  description:
    'A good email open rate is roughly 30-40% on Mailchimp\'s data, but Apple privacy inflates opens. See benchmarks and the clicks and revenue to track instead.',
  publishedAt: '2027-01-09T15:00:00+04:00',
  updatedAt: '2027-01-09T15:00:00+04:00',
  service: 'automation',
  reviewState: 'llm_reviewed',
  body: [
    {
      type: 'p',
      text: 'A good email open rate depends on your industry and list, but Mailchimp\'s published averages, last updated in December 2023, sit between about 30% and 40% for most industries. Treat any such number with care: Apple\'s Mail Privacy Protection loads emails automatically, which inflates opens. Use open rate only to compare your own sends over time, and judge results by clicks and revenue.',
    },
    { type: 'h2', text: 'Benchmarks: what the numbers say' },
    {
      type: 'p',
      text: 'Mailchimp publishes [email marketing benchmarks](https://mailchimp.com/resources/email-marketing-benchmarks/) by industry. Its page says the data is as of December 2023, covers emails delivered by its system with tracking on, and counts only campaigns sent to at least 1,000 subscribers. These are averages across its own users, and the page does not say where the senders are based, so they are context, not a target.',
    },
    {
      type: 'table',
      head: ['Industry (Mailchimp)', 'Average open rate', 'Average click rate', 'Unsubscribe rate'],
      rows: [
        ['Business and finance', '31.35%', '2.78%', '0.15%'],
        ['Ecommerce', '29.81%', '1.74%', '0.19%'],
        ['Education and training', '35.64%', '3.02%', '0.18%'],
        ['Non-profits', '40.04%', '3.27%', '0.18%'],
        ['All users', '35.63%', '2.62%', '0.22%'],
      ],
    },
    {
      type: 'p',
      text: 'The same page warns: "The accuracy of email open rates may be impacted by Apple\'s privacy changes." Other vendors publish their own ranges, and they differ because each measures a different set of senders. A number from a vendor\'s own customers is not a universal standard.',
    },
    { type: 'h2', text: 'Why open rate is inflated' },
    {
      type: 'p',
      text: 'An open is normally counted when a tiny invisible image in the email loads. [Mailchimp explains](https://mailchimp.com/help/about-open-tracking/) that this tracker loads from its server when a recipient opens the email with images enabled. Apple changed this with Mail Privacy Protection. In its [announcement](https://www.apple.com/newsroom/2021/06/apple-advances-its-privacy-leadership-with-ios-15-ipados-15-macos-monterey-and-watchos-8/), Apple said the feature "stops senders from using invisible pixels to collect information about the user" and helps users prevent senders from knowing when they open an email.',
    },
    {
      type: 'p',
      text: 'The result is that an Apple user can be counted as an opener whether or not they read anything. Mailchimp says bot activity such as Apple\'s protection "can falsely inflate open and click metrics" and recommends excluding it from reports. How big is the effect on your list? [Litmus](https://www.litmus.com/email-client-market-share/), an email analytics company, reports that Apple clients accounted for 75.84% of the more than 1.7 billion opens in its Email Analytics tool, as of 1 October 2026. That figure includes Mail Privacy Protection opens, and it describes Litmus\'s own sample, not your list. If many of your subscribers use Apple Mail or an iPhone, your open rate overstates real reading.',
    },
    { type: 'h2', text: 'What to measure instead' },
    {
      type: 'p',
      text: 'Move the judgment from "did the email load" to "did the reader do something".',
    },
    {
      type: 'ul',
      items: [
        'Click-through rate on unique recipients: the share who clicked a link. Clicks can also be inflated by bots and security scanners, so look at trends, not single sends.',
        'Conversions: enquiries, bookings or orders that start from the email, tracked with UTM parameters and your analytics.',
        'Revenue or pipeline per email: the value of sales attributed to the send, divided by the number sent.',
        'Unsubscribe and complaint rates: they show whether the list wants what you send.',
        'Replies, where the email invites one: they are hard to fake and the best sign of interest in B2B.',
      ],
    },
    {
      type: 'p',
      text: 'For more on picking a few numbers that track business results, see [marketing KPIs](/blog/marketing-kpis).',
    },
    { type: 'h2', text: 'How to improve results without trusting opens' },
    {
      type: 'ol',
      items: [
        'Clean the list. Remove addresses that have not clicked or replied in a long time, so your results reflect people who care.',
        'Test subject lines by clicks, not opens: send two versions and compare how many people clicked through.',
        'Send one clear call to action per email, near the top.',
        'Segment by what people signed up for or bought, and send relevant messages to each group.',
        'Choose a steady sending rhythm you can keep, and note which days produce clicks for your audience.',
        'Grow the list with consent; see [how to build an email list](/blog/build-email-list).',
      ],
    },
    { type: 'h2', text: 'Set your own benchmark' },
    {
      type: 'p',
      text: 'Take your last ten sends and write down click rate, conversions and unsubscribes. That is your baseline; the goal is to beat it, not to match an industry table. Compare like with like: newsletters against newsletters, offers against offers. Keep open rate in the sheet as a rough signal that subject lines and sender names are working, but do not set targets on it.',
    },
    {
      type: 'p',
      text: 'Once the numbers are clear, follow-ups and reporting can be automated so every enquiry gets a prompt reply. WakeUP\'s [AI automation service](/services/ai-automation) covers lead routing to your CRM, email or team chat and follow-up automations. If you want a view of your current setup first, request a [free audit](/audit).',
    },
  ],
}
