import type { BlogPost } from '@/lib/blog'

export const post: BlogPost = {
  locale: 'en',
  slug: 'cbo-vs-abo-facebook-ads',
  title: 'CBO vs ABO Facebook ads: which budget to use for testing and for scaling',
  metaTitle: 'CBO vs ABO Facebook Ads',
  description:
    'CBO vs ABO Facebook ads: ABO sets a budget per ad set and suits testing, CBO sets one campaign budget and suits scaling. A rule for small budgets included.',
  publishedAt: '2027-02-20T12:00:00+04:00',
  updatedAt: '2027-02-20T12:00:00+04:00',
  service: 'advertising',
  reviewState: 'llm_reviewed',
  body: [
    {
      type: 'p',
      text: 'CBO vs ABO is a choice about where the budget sits. With CBO (campaign budget optimization, which Meta’s tools may also label Advantage+ campaign budget), you set one budget on the campaign and Meta divides it between the ad sets. With ABO (ad set budget optimization), you set a budget on each ad set yourself. A common rule: test with ABO so every audience or creative gets a fair share, then scale winners with CBO. On a small budget, the number of ad sets matters more than the label.',
    },
    { type: 'h2', text: 'What each one does' },
    {
      type: 'p',
      text: 'Meta’s Marketing API documentation [describes the campaign budget fields](https://developers.facebook.com/docs/marketing-api/reference/ad-campaign-group) as the daily or lifetime budget "of the campaign", and says that if you do not enable campaign budget optimization, the bid strategy is set at the ad set level. In practice the choice is made when you create the campaign: with CBO the budget sits on the campaign, and without it each ad set has its own budget field.',
    },
    {
      type: 'table',
      head: ['', 'ABO (ad set budget)', 'CBO (campaign budget)'],
      rows: [
        ['Who splits the money', 'You, per ad set', 'Meta, across ad sets, as results come in'],
        ['Spend per ad set', 'Fixed by you, roughly equal if you set it so', 'Uneven by design; stronger ad sets get more'],
        ['Control', 'High', 'Lower; spend limits give some control but leave the system less room to optimise'],
        ['Workload', 'Higher; you check and move budget by hand', 'Lower; one number to change'],
        ['Main risk', 'Money stays in a weak ad set until you notice', 'A new or slow ad set may get almost nothing'],
      ],
    },
    {
      type: 'p',
      text: 'HubSpot’s explainer [puts the trade-off](https://blog.hubspot.com/marketing/facebook-cbo-ads) plainly. Under ABO, "it’s not an automated process, so you need to track performance and make necessary adjustments on your own." For CBO, it notes that setting too many spend limits means "the algorithm has less flexibility, and your budgets will be less optimized."',
    },
    { type: 'h2', text: 'Test with ABO' },
    {
      type: 'p',
      text: 'A test is only useful if each option gets a fair chance. Megadigital’s comparison [makes the same point](https://megadigital.ai/en/blog/cbo-vs-abo-facebook-ads/): fixed budgets stop the algorithm from favouring one option too early, so audiences or creatives can be compared on equal footing. Under CBO the split is uneven by design, so a test can end with some ad sets holding so little spend that you cannot tell whether they were worse or just under-funded.',
    },
    {
      type: 'p',
      text: 'Use ABO when you are:',
    },
    {
      type: 'ul',
      items: [
        'Comparing audiences, for example a broad audience against a [lookalike](/blog/facebook-lookalike-audiences) or an interest group.',
        'Comparing creatives or offers, one per ad set, when you want a clean read.',
        'Running a retargeting ad set that must keep a fixed daily amount whatever the prospecting ad sets do. [Retargeting](/blog/facebook-retargeting-ads) pools are small and a fixed budget keeps their spend predictable.',
        'Running with a total budget so small that one ad set is all you can afford.',
      ],
    },
    { type: 'h2', text: 'Scale with CBO' },
    {
      type: 'p',
      text: 'Once you know which ad sets work, raising budgets one ad set at a time is tedious. With CBO you change one number and let Meta route the extra money to what is converting. Megadigital treats CBO as the better fit for scaling and for campaigns with several ad sets, and HubSpot presents it as the option for automated, performance-based distribution. Keep the ad sets in a CBO campaign alike in audience size and purpose, so the comparison the system makes between them is fair.',
    },
    {
      type: 'p',
      text: 'Scaling has its own rules whichever structure you pick: wait for stable results, raise in steps and watch cost per result. They are covered in [how to scale Facebook ads](/blog/how-to-scale-facebook-ads). Before you decide a test has failed, read [how long to run Facebook ads](/blog/how-long-to-run-facebook-ads), which explains the learning phase.',
    },
    { type: 'h2', text: 'A rule for small budgets' },
    {
      type: 'p',
      text: 'The guides above are written for accounts with room to spread spend. A smaller company has the opposite problem: too many ad sets, each with too little money to leave the learning phase. This is practical arithmetic rather than a Meta rule. [How long to run Facebook ads](/blog/how-long-to-run-facebook-ads) covers Meta’s statement that an ad set usually needs about 50 results to leave learning. Work backwards from that:',
    },
    {
      type: 'ol',
      items: [
        'Take your realistic cost per result. If you do not know it yet, use what [Facebook ads metrics](/blog/facebook-ads-metrics) shows for your last campaigns.',
        'Multiply by 50 to get the spend one ad set needs to learn, then divide by 7 for the daily amount over a week.',
        'Divide your total daily budget by that figure. The answer is the number of ad sets you can afford. Round down.',
        'If it comes out at one or two, use ABO or a single-ad-set CBO and test creatives inside the ad set instead of splitting into many.',
      ],
    },
    {
      type: 'p',
      text: 'An invented example: if a result costs 10 lari, one ad set needs about 500 lari a week, or roughly 70 lari a day, to reach 50 results. A daily budget of 150 lari supports two ad sets, not six. Spreading it across six would leave each one too thin to learn under either structure. Prices vary widely by market, so use your own cost per result, and see [Facebook ads cost](/blog/facebook-ads-cost) for how costs are set.',
    },
    { type: 'h2', text: 'A simple path from test to scale' },
    {
      type: 'ol',
      items: [
        'Start an ABO campaign with a few ad sets or a few ads in one ad set, each with a budget that clears the arithmetic above.',
        'Let it run to a verdict on cost per lead or sale, not clicks, and avoid edits while it learns.',
        'Move the winning ad set or ad into a CBO campaign with other proven ad sets of similar audience size.',
        'Raise the campaign budget in steps. Keep an ABO test campaign running beside it so new ideas never compete with proven ones for the same money.',
        'If CBO keeps starving an ad set you need, take that ad set out and run it under ABO, or use a minimum spend limit on it, knowing limits reduce optimisation.',
      ],
    },
    { type: 'h2', text: 'Limits worth knowing' },
    {
      type: 'p',
      text: 'Meta’s API documentation [states](https://developers.facebook.com/docs/marketing-api/reference/ad-campaign-group) that a campaign with more than 70 ad sets using campaign budget optimization cannot have its bid strategy edited or CBO turned off. For most companies that is far above a sensible setup, but it is a reason not to stack ad sets without limit. Also remember that the budget structure is one lever among several: creative, offer and tracking often matter as much. If you want a second pair of eyes on an account that spends without clear returns, WakeUP’s [advertising service](/services/advertising) covers campaign setup, creative testing and weekly optimisation, and the free [marketing audit](/audit) is a way to start.',
    },
  ],
}
