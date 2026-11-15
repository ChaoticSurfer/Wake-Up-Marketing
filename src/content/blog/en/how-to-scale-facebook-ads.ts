import type { BlogPost } from '@/lib/blog'

export const post: BlogPost = {
  locale: 'en',
  slug: 'how-to-scale-facebook-ads',
  title: 'How to scale Facebook ads: vertical vs horizontal, budget steps and creative supply',
  metaTitle: 'How to Scale Facebook Ads',
  description:
    'How to scale Facebook ads once a campaign works: raise budget in small steps, add audiences and placements sideways, and keep new creative coming.',
  publishedAt: '2027-01-18T18:00:00+04:00',
  updatedAt: '2027-01-18T18:00:00+04:00',
  service: 'advertising',
  reviewState: 'llm_reviewed',
  body: [
    {
      type: 'p',
      text: 'To scale Facebook ads, first confirm that the campaign is profitable at its current spend, then grow in two directions: vertically, by raising the budget of ads that work in steps small enough not to destabilise delivery, and horizontally, by adding new audiences, placements and creative around them. Often the limit on scaling is not the budget but the supply of fresh creative and the number of conversions each ad set can collect.',
    },
    { type: 'h2', text: 'Scale only what is already proven' },
    {
      type: 'p',
      text: 'Scaling multiplies whatever you have. If cost per lead is above what a customer is worth once you count the leads that never close, more budget loses money faster. Before raising anything, check three things: the cost per result has held for at least a full week, the leads or sales are real in your own records and not only in Ads Manager, and the ad set has finished its learning phase. How long to wait and what counts as a result is covered in [how long to run Facebook ads](/blog/how-long-to-run-facebook-ads) and [Facebook ads metrics](/blog/facebook-ads-metrics). If you are still building the first campaign, start with [how to run Facebook ads](/blog/how-to-run-facebook-ads).',
    },
    { type: 'h2', text: 'Vertical scaling: raise the budget in steps' },
    {
      type: 'p',
      text: 'Vertical scaling means spending more on the ad sets that already work. The question everyone asks is how big a single increase can be. Meta does not publish a fixed safe percentage. Its guidance, as quoted by the advertising analyst Jon Loomer, is that an increase [is not likely to cause ad sets to re-enter the learning phase](https://www.jonloomer.com/updates-to-meta-ads-budgeting/) when it is small (Meta’s example is $100 to $101), while going from $100 to $1000 may. Loomer himself writes that [we have no idea what increase is safe](https://www.jonloomer.com/do-not-touch-a-facebook-ad-thats-working/) and notes that some advertisers use a slow rise of 15% to 25%.',
    },
    {
      type: 'p',
      text: 'The "20% every few days" rule you see in many guides is therefore a habit of practitioners, not a Meta limit. Treat it as a cautious starting point and let your own results set the pace:',
    },
    {
      type: 'ol',
      items: [
        'Raise the daily budget by about 20% on the ad set that is performing best, not on the whole account.',
        'Wait two to three days and compare cost per result with the week before. Daily numbers swing, so look at the average.',
        'If cost per result holds, take the next step. If it climbs by more than you can afford, hold the budget where it is for a week or step back.',
        'Write down the date and size of each change, so a cost jump can be traced to a cause.',
      ],
    },
    {
      type: 'p',
      text: 'Meta says an ad set usually leaves learning after [about 50 results in the week after its last significant edit](https://www.facebook.com/business/help/112167992830700). That sets a ceiling on how thinly you can spread a budget. In a peak-season post on 21 October 2026, Meta wrote that ad sets below roughly fifty conversions a week [ran about 28% more expensive per purchase](https://ppc.land/meta-says-ad-sets-under-50-weekly-conversions-cost-28-more-per-purchase/), as reported by PPC Land, which also notes that Meta did not describe the sample or method of that analysis. Read it as a direction, not a law. The practical point: a budget that buys 20 leads a week fits one ad set, not four.',
    },
    { type: 'h2', text: 'Horizontal scaling: widen the reach' },
    {
      type: 'p',
      text: 'Horizontal scaling means leaving the winning ad set alone and adding new ones beside it. There are four common ways, and each has a different risk.',
    },
    {
      type: 'table',
      head: ['Move', 'What you add', 'Main risk'],
      rows: [
        ['New audience', 'A lookalike or interest audience the account has not reached', 'The new audience may convert worse than the proven one'],
        ['New placement or platform', 'Instagram Reels, Stories or Facebook feed variants of the same ad', 'Creative cropped badly for the format'],
        ['New geography', 'Another city or region in Georgia', 'Smaller audience, so frequency rises faster'],
        ['New offer', 'A second product or service with its own ad set', 'Splits the weekly conversions between more ad sets'],
      ],
    },
    {
      type: 'p',
      text: 'For the audience route, see [lookalike audiences](/blog/facebook-lookalike-audiences). Duplicating a winning ad set into a new audience is a form of horizontal scaling, and it keeps the original untouched. Overlap is the catch. Two ad sets aimed at much the same people compete against each other in the same auction, so give each a clearly different audience. In a small market like Georgia, where audiences are limited, you may hit overlap and rising frequency sooner. Retargeting people who already visited, covered in [Facebook retargeting ads](/blog/facebook-retargeting-ads), is a place to add budget early, but the pool is small, so it saturates quickly.',
    },
    { type: 'h2', text: 'Creative supply decides how far you can go' },
    {
      type: 'p',
      text: 'When spend rises, the same people see the same ad more often, and results fall. So many scaling plateaus are creative problems. A workable rhythm for a company that has found a winner:',
    },
    {
      type: 'ul',
      items: [
        'Keep the winning ad running and add new ads next to it instead of replacing it.',
        'Take the angle that won and make new versions: a different opening line, a different person speaking, a different length. Short video hooks are covered in [short-form video hooks](/blog/short-form-video-hooks).',
        'Test one change at a time, as described in [Facebook video ad creative](/blog/facebook-video-ad-creative), so you know what moved the result.',
        'Plan production ahead. If a campaign needs a fresh batch every few weeks, the shoot has to be scheduled before the old ads tire, not after.',
      ],
    },
    {
      type: 'p',
      text: 'Video is the format most likely to run out first, because it takes time to make. WakeUP scripts, shoots and edits short videos for ads and tests them in campaigns; see the [video production service](/services/video-production).',
    },
    { type: 'h2', text: 'Signs you are scaling too fast' },
    {
      type: 'ul',
      items: [
        'Cost per result rises for several days in a row after a budget change, not just one bad day.',
        'Frequency climbs while reach flattens: you are showing the same ad to the same people.',
        'Leads keep arriving but fewer turn into sales. Check lead quality, not just volume.',
        'Ad sets show Learning limited because the budget is split across too many of them.',
      ],
    },
    {
      type: 'p',
      text: 'When any of these show up, stop adding budget, merge thin ad sets, or add fresh creative before spending more. Scaling is not a straight line, and a week of holding steady is normal. If you want a second opinion on how your account is structured, WakeUP runs Meta and Google campaigns as an [advertising service](/services/advertising), and the [free audit](/audit) is a way to have the account looked at first.',
    },
  ],
}
