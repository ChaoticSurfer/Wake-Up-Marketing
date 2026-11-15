import type { BlogPost } from '@/lib/blog'

export const post: BlogPost = {
  locale: 'en',
  slug: 'what-is-marketing-funnel',
  title: 'What is a marketing funnel? Stages, channels and one metric per stage',
  metaTitle: 'Marketing Funnel: Stages and Metrics',
  description:
    'What is a marketing funnel? The stages from awareness to loyalty, which channel fits each stage, and the one metric to watch at every step.',
  publishedAt: '2027-01-19T12:00:00+04:00',
  updatedAt: '2027-01-19T12:00:00+04:00',
  service: 'advertising',
  reviewState: 'llm_reviewed',
  body: [
    {
      type: 'p',
      text: 'A marketing funnel is a model of the steps a person takes from first hearing about your company to buying from you, and sometimes to buying again. It is wide at the top because many people become aware of you, and narrow at the bottom because few buy. Marketers usually split it into awareness, interest, consideration, purchase and loyalty, and give each stage its own channels and its own metric.',
    },
    { type: 'h2', text: 'The stages, in plain terms' },
    {
      type: 'p',
      text: 'Different guides use different names. [Mailchimp](https://mailchimp.com/resources/marketing-funnel/) describes a B2C funnel as awareness, interest or consideration, desire and action, with loyalty after, and notes that a B2B funnel often has more stages. [Ahrefs](https://ahrefs.com/blog/marketing-funnels/) groups the four AIDA stages into top, middle and bottom of the funnel, often shortened to TOFU, MOFU and BOFU. The names matter less than the question each stage answers:',
    },
    {
      type: 'ul',
      items: [
        'Top (TOFU), awareness: the person has a problem or a need and does not know you yet.',
        'Middle (MOFU), interest and consideration: the person knows you exist and is comparing you with others.',
        'Bottom (BOFU), decision and purchase: the person is close to buying and needs a reason or a way to say yes.',
        'After the sale, loyalty: the customer buys again or recommends you.',
      ],
    },
    {
      type: 'p',
      text: 'Treat the funnel as a planning tool, not a map of how everyone behaves. Google\'s consumer insights team, in research with The Behavioural Architects published in July 2020, wrote that [what happens between trigger and purchase "is not linear"](https://business.google.com/en-all/think/consumer-insights/navigating-purchase-behavior-and-decision-making/). People loop between exploring options and evaluating them before they decide. In practice that means a person may see an ad, leave, search for reviews, come back through a Google search and only then enquire. The funnel stages still help, because they tell you what each piece of content has to do, even if the path is messy.',
    },
    { type: 'h2', text: 'Map channels to stages' },
    {
      type: 'p',
      text: 'A channel is not tied to one stage, but each is better at some jobs. Ads on Facebook and Instagram reach people who were not searching, so they suit the top. A Google search ad catches people who are already looking, so it suits the bottom. Your website and reviews carry the middle. The table gives a starting point for a company of 20 to 250 people.',
    },
    {
      type: 'table',
      head: ['Stage', 'Question the person asks', 'Channels that fit', 'Content that fits'],
      rows: [
        ['Awareness', 'Who is this?', 'Meta ads, Reels and TikTok, blog posts and SEO for broad questions, events', 'Short video, explainer articles, a clear page about what you do'],
        ['Interest', 'Is this relevant to me?', 'Website, email sign-up, retargeting on Meta and Google', 'Guides, case-style pages once you have real ones, webinars'],
        ['Consideration', 'Why this company and not another?', 'Google reviews, comparison pages, retargeting, sales calls', 'Comparison pages, reviews, testimonials, FAQs'],
        ['Purchase', 'How do I say yes?', 'Google search ads, landing pages, WhatsApp or phone, email', 'A clear offer, a short form, fast reply'],
        ['Loyalty', 'Was it worth it?', 'Email, messengers, referral asks', 'Follow-up, reminders, a reason to return'],
      ],
    },
    {
      type: 'p',
      text: 'Channel-level comparison is in [Facebook ads vs Google ads](/blog/facebook-ads-vs-google-ads), and the relationship between creating demand and capturing it is covered in [lead generation vs demand generation](/blog/lead-generation-vs-demand-generation). Retargeting, a main tool in the middle of the funnel, is explained in [Facebook retargeting ads](/blog/facebook-retargeting-ads).',
    },
    { type: 'h2', text: 'One metric per stage' },
    {
      type: 'p',
      text: 'The common mistake is to measure every stage with the same number, usually clicks. Pick one metric per stage that answers that stage\'s question. These are suggestions, not industry standards, and you should change them to match your business.',
    },
    {
      type: 'table',
      head: ['Stage', 'One metric to watch', 'Where to read it'],
      rows: [
        ['Awareness', 'Reach: how many different people saw you (impressions where reach is not reported)', 'Ads Manager, Search Console'],
        ['Interest', 'Engaged visits, or sign-ups per visitor', 'Google Analytics 4'],
        ['Consideration', 'Enquiries (leads) and the cost of each', 'Your form or CRM, plus ad platform'],
        ['Purchase', 'Share of leads that become customers', 'CRM or your sales sheet'],
        ['Loyalty', 'Repeat purchases or referrals', 'CRM, sales records'],
      ],
    },
    {
      type: 'p',
      text: 'The metrics need to come from your own records at the lower stages. An ad platform can report leads, but only your CRM or sales sheet knows which of them paid. The full list of metrics and formulas, grouped by the same stages, is in [marketing KPIs](/blog/marketing-kpis).',
    },
    { type: 'h2', text: 'Find the leak before you add budget' },
    {
      type: 'p',
      text: 'A funnel is most useful as a diagnostic. Count the people at each stage for a month, then look for the step where the most people drop out compared with what you would expect. Where you fix depends on where the leak is:',
    },
    {
      type: 'ul',
      items: [
        'Few people at the top: more reach is the problem, so video, ads or content is the lever.',
        'Plenty of visits, few enquiries: the page, offer or form is the problem. See [lead generation landing pages](/blog/lead-generation-landing-pages).',
        'Plenty of enquiries, few sales: the problem is lead quality or follow-up speed, not marketing volume. See [how to qualify leads](/blog/how-to-qualify-leads).',
        'Sales happen once: the problem is after the sale, so look at follow-up and repeat offers.',
      ],
    },
    {
      type: 'p',
      text: 'Spending more at the top while the middle leaks only makes the leak more expensive. If your sales cycle is short, such as a restaurant, a clinic or a one-visit service, the funnel compresses into a few days and the stages still apply, just faster.',
    },
    { type: 'h2', text: 'Build the funnel in four steps' },
    {
      type: 'ol',
      items: [
        'Write down the path your best customers actually took: where they first heard of you, what they checked, and what made them buy. Ask five recent customers.',
        'Name the stage each of your current activities serves. Many companies find that everything sits at one stage.',
        'Fill the empty stages with the cheapest channel that can do the job, and give each a single metric.',
        'Review monthly, find the biggest drop, and fix that step before touching others.',
      ],
    },
    {
      type: 'p',
      text: 'WakeUP plans and runs Meta and Google campaigns against cost per lead and sales; see the [advertising service](/services/advertising). If you would like someone to look at where your current funnel leaks, the [free audit](/audit) reviews your ads, website and sales process.',
    },
  ],
}
