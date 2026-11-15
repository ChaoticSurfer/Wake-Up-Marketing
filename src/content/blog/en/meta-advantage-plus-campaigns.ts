import type { BlogPost } from '@/lib/blog'

export const post: BlogPost = {
  locale: 'en',
  slug: 'meta-advantage-plus-campaigns',
  title: 'What are Advantage+ campaigns? Meta\'s automated ads explained',
  metaTitle: 'What Are Advantage+ Campaigns?',
  description:
    'What are Advantage+ campaigns? Meta\'s automated ads for sales, leads and apps: what they control, when they suit a small budget, and when to stay manual.',
  publishedAt: '2027-02-14T15:00:00+04:00',
  updatedAt: '2027-02-14T15:00:00+04:00',
  service: 'advertising',
  reviewState: 'llm_reviewed',
  body: [
    {
      type: 'p',
      text: 'Advantage+ campaigns are Meta\'s automated campaign types for sales, leads and apps. Instead of you choosing the audience, placements and budget split, Meta\'s system decides them while you supply the goal, creative and tracking. They can save setup time and work well with broad offers, but they give you less control and less visibility into what is working.',
    },
    { type: 'h2', text: 'What Advantage+ is' },
    {
      type: 'p',
      text: 'On its [Advantage+ page](https://www.facebook.com/business/ads/meta-advantage-plus), Meta describes Advantage+ as "a suite of products that can help you enhance and optimize campaign performance" using AI and automation. The suite has two kinds of product. End-to-end campaign types (sales, app and leads) apply the automation across the whole campaign. Single-step tools apply it to one element, such as audience, placements or creative, inside a campaign you build yourself.',
    },
    {
      type: 'p',
      text: 'So "Advantage+" is not one setting. You can run a manual campaign that uses Advantage+ placements, or an end-to-end Advantage+ campaign where most choices are made for you. Much confusion comes from mixing the two.',
    },
    { type: 'h2', text: 'What it automates' },
    {
      type: 'p',
      text: 'For the end-to-end types, Meta says AI is applied "across your campaign\'s audience, placement and budget". In practice:',
    },
    {
      type: 'table',
      head: ['Element', 'In a manual campaign', 'In an Advantage+ campaign'],
      rows: [
        ['Audience', 'You define interests, lookalikes, custom audiences', 'Meta looks for likely buyers; your audiences act as hints (see [lookalike audiences](/blog/facebook-lookalike-audiences))'],
        ['Placements', 'You pick Facebook, Instagram, Reels and so on', 'Meta chooses across all placements'],
        ['Budget', 'You split it across ad sets', 'Meta moves spend within the campaign'],
        ['Creative', 'You upload the ads you want to run', 'You supply the ads; optional creative enhancements are a separate choice'],
        ['Tracking', 'Needed for good optimisation', 'Needed even more, because the system learns from your conversion data'],
      ],
    },
    { type: 'h2', text: 'The campaign types' },
    {
      type: 'ul',
      items: [
        'Advantage+ sales campaigns, for online sales. Meta says on its [sales campaigns page](https://www.facebook.com/business/ads/meta-advantage-plus/sales-campaigns) that the most advanced AI optimisations are enabled when the campaign uses Advantage+ audience, budget, placements and destination features.',
        'Advantage+ leads campaigns, which extend the same approach to lead generation. Social Media Today reported in February 2025 that Advantage+ was [expanding to leads campaigns](https://www.socialmediatoday.com/news/meta-advantage-plus-ad-updates-february-2025/739472/).',
        'Advantage+ app campaigns, for app installs and in-app actions. Most Georgian local businesses will not use these.',
      ],
    },
    {
      type: 'p',
      text: 'The same report says Meta was testing a streamlined setup "so that marketers no longer need to choose between running a manual or ASC+ campaign", and an "on" label that shows when audience, placement and campaign budget all use Advantage+. Meta changes names and menus often, so check Ads Manager for how your account currently presents these options. The basic questions (what goal, what tracking, what creative) stay the same. [How to run Facebook ads](/blog/how-to-run-facebook-ads) covers the standard setup.',
    },
    { type: 'h2', text: 'What Meta claims, and how to read it' },
    {
      type: 'p',
      text: 'Meta\'s Advantage+ page reports a 7% improved cost per acquisition for app campaigns, a 10% lower cost per qualified lead for leads campaigns and a 20% improved cost per acquisition for sales campaigns. The sales page says "Businesses like yours are driving a 20% lower cost per result on average." The page text does not show the footnotes that would state the period, the sample or the comparison group, so these are Meta\'s own figures without a visible method, measured on other advertisers\' accounts and not on Georgian budgets. Use them as a reason to run a test, not as a forecast.',
    },
    { type: 'h2', text: 'When it fits a small Georgian budget' },
    {
      type: 'p',
      text: 'The case for automation is strongest when you have little time and little data to waste. Advantage+ tends to suit you if:',
    },
    {
      type: 'ul',
      items: [
        'You sell to a broad Georgian audience (retail, food, services for consumers) and detailed targeting would add little.',
        'You have working tracking: a Meta pixel, ideally with Conversions API, reporting sales or leads accurately. See [Meta pixel vs Conversions API](/blog/meta-pixel-vs-conversions-api).',
        'You have several creatives to give the system, so it has something to test. [How to test video ad creative on Meta](/blog/how-to-test-video-ad-creative-on-meta) explains how.',
        'Your budget is too small to split into many ad sets, each of which would receive too little spend to learn from.',
      ],
    },
    {
      type: 'p',
      text: 'It fits less well if conversions are rare or not tracked, because the system then has little to learn from. For lead generation, also decide whether the leads should arrive in an instant form or on a page; [Facebook lead ads vs landing page](/blog/facebook-lead-ads-vs-landing-page) compares them. Costs differ by market and by auction, as [what Facebook ads cost](/blog/facebook-ads-cost) explains.',
    },
    { type: 'h2', text: 'Where manual control is still better' },
    {
      type: 'p',
      text: 'Not everyone agrees on automation. The ad agency Lebesgue, in a [2024 article](https://lebesgue.io/facebook-ads/meta-advantage), said it did "not currently recommend" Advantage+ campaigns because they blend prospecting and retargeting and can overspend on retargeting. It also described them as reducing control and transparency, and warned that Meta can apply creative changes that clash with brand guidelines. Those are one agency\'s experience, from 2024, and Meta\'s tools have changed since, so treat them as cautions to check rather than facts about your account.',
    },
    {
      type: 'table',
      head: ['Situation', 'Better choice'],
      rows: [
        ['You need to reach one narrow audience (a specific profession or neighbourhood)', 'Manual targeting'],
        ['You want prospecting and retargeting reported separately', 'Manual campaigns, so each has its own budget'],
        ['Strict brand rules apply to every creative', 'Manual creative, with enhancements switched off'],
        ['You want to know why a result happened', 'Manual structure, one change at a time'],
        ['Little or no conversion data', 'Start simple, build data, then test Advantage+'],
        ['Broad offer, working tracking, several creatives', 'Test an Advantage+ campaign'],
      ],
    },
    { type: 'h2', text: 'How to test it without betting the budget' },
    {
      type: 'ol',
      items: [
        'Confirm tracking is correct by comparing Ads Manager conversions with your CRM or orders for a week.',
        'Keep your current manual campaign running with its budget.',
        'Launch one Advantage+ campaign with the same offer and similar creative, with a budget you can afford to lose.',
        'Compare cost per lead or sale in your own records, not only in Ads Manager, over several weeks.',
        'Keep the one that produces cheaper qualified customers, and change one thing at a time afterwards.',
      ],
    },
    {
      type: 'p',
      text: 'WakeUP sets up and manages Meta and Google campaigns against cost per lead and sales, including tracking and weekly optimisation; see the [advertising service](/services/advertising). If you want to know whether your current ad account and tracking are ready for automation, the [free audit](/audit) is a place to start.',
    },
  ],
}
