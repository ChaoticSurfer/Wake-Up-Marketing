import type { BlogPost } from '@/lib/blog'

export const post: BlogPost = {
  locale: 'en',
  slug: 'how-long-to-run-facebook-ads',
  title: 'How long should a Facebook ad campaign run? Learning phase, fatigue and when to stop',
  metaTitle: 'How Long Should a Facebook Ad Run?',
  description:
    'How long should a Facebook ad campaign run? At least one uninterrupted week or about 50 results, then judge on the full week. See when to refresh or stop.',
  publishedAt: '2026-12-11T18:00:00+04:00',
  updatedAt: '2026-12-11T18:00:00+04:00',
  service: 'advertising',
  reviewState: 'llm_reviewed',
  body: [
    {
      type: 'p',
      text: 'A Facebook ad campaign should run for at least one uninterrupted week, or until each ad set has about 50 results, before you judge it. Meta says an ad set [usually exits its learning phase after about 50 results](https://www.facebook.com/business/help/112167992830700) in the week after its last significant edit. There is no fixed end date after that: you keep a campaign running while its cost per result holds, and change the creative when it stops holding.',
    },
    { type: 'h2', text: 'The learning phase sets your minimum' },
    {
      type: 'p',
      text: 'When you launch an ad set, Meta\'s delivery system has to find out how to deliver it. Meta calls this the learning phase and says that during it ad sets are less stable and usually have a higher cost per acquisition, so early numbers are [not necessarily indicative of future performance](https://www.facebook.com/business/help/112167992830700). Stopping a campaign after two days therefore tells you little about your offer.',
    },
    {
      type: 'p',
      text: 'The practical minimum is the time your budget needs to produce about 50 results. If your budget buys 10 leads a week, the ad set will not leave learning in seven days. Meta labels this [Learning limited](https://www.facebook.com/business/help/269269737396981) and lists the usual causes: a small audience, low budget, low bid or cost control, high auction overlap, an infrequent optimisation event, or too many ads at once. Its fixes are to combine ad sets, widen the audience, raise the budget or choose an event that happens more often, for example add to cart instead of purchase. For what that budget costs, see [how much Facebook ads cost](/blog/facebook-ads-cost).',
    },
    { type: 'h2', text: 'When to judge the results' },
    {
      type: 'p',
      text: 'Judge on a full week, at campaign level, against the one result you chose. Meta cautions against narrow breakdowns: an hourly view can show swings that [average out over time](https://www.facebook.com/business/help/1364841787225722), and it suggests campaign-level results over a full week, or no breakdown at all.',
    },
    {
      type: 'p',
      text: 'Daily spend also moves on purpose. On some accounts Meta may spend up to 75% over your daily budget on a good day and less on others, and it says it will not spend more than 7 times the daily budget in a week. A day that looks overspent or underspent is usually normal, so do not react to it.',
    },
    {
      type: 'table',
      head: ['Stage', 'What to look at', 'Action'],
      rows: [
        ['Days 1 to 3', 'Delivery status, spend, tracking fires', 'Fix broken tracking or disapproved ads only. Do not judge cost.'],
        ['End of week 1', 'Results since the last significant edit, cost per result for the full week', 'If out of learning, compare the cost to your target. If Learning limited, widen audience, merge ad sets or lift budget.'],
        ['Weeks 2 to 4', 'Weekly cost per result, lead quality, status of each ad', 'Keep what holds, add one new ad against a weak one.'],
        ['Ongoing', 'Creative limited or Creative fatigue status', 'Refresh creative before cost per result doubles.'],
      ],
    },
    {
      type: 'p',
      text: 'If leads take weeks to become customers, add that lag to your timeline: judge ad delivery weekly, but judge profitability once the leads have had time to close. Which numbers to read is covered in [Facebook ads metrics](/blog/facebook-ads-metrics).',
    },
    { type: 'h2', text: 'What resets the clock' },
    {
      type: 'p',
      text: 'Meta states that editing during the learning phase [resets learning](https://www.facebook.com/business/help/112167992830700) and delays optimisation. Its list of [significant edits](https://www.facebook.com/business/help/316478108955072) is the part to remember:',
    },
    {
      type: 'ul',
      items: [
        'Any change to targeting.',
        'Any change to ad creative.',
        'Any change to the optimisation event.',
        'Adding a new ad to the ad set.',
        'Changing the bid strategy.',
        'Pausing the ad set for 7 days or longer (it re-enters learning when you unpause it).',
        'Large budget changes: Meta says $100 to $101 is unlikely to matter, while $100 to $1000 may.',
      ],
    },
    {
      type: 'p',
      text: 'This is why a run is judged in blocks. Each significant edit starts a new block, and the results of the old one are not directly comparable. Make one change, wait for the next full week, and record the date. Meta also says you should not try to avoid learning altogether: [testing new creative is essential](https://www.facebook.com/business/help/112167992830700) for improving over time.',
    },
    { type: 'h2', text: 'Ad fatigue: when a running campaign should change' },
    {
      type: 'p',
      text: 'Meta defines creative fatigue as an audience seeing the same creative too many times, so people engage less and cost per result rises. In Ads Manager it shows as a status in the Delivery column. Per [Meta\'s documentation](https://www.facebook.com/business/help/1346816142327858), the status reads Creative limited when your cost per result is higher than past ads but under twice as much, and Creative fatigue when it is twice as much or more. Meta also warns before publishing if fatigue may occur in the first 7 days. These statuses apply only to ad sets with a single creative and exclude some formats, such as dynamic creative.',
    },
    {
      type: 'p',
      text: 'For your own tracking, use the same logic: watch how often the same people see the ad and whether the weekly cost per result climbs while the audience stays the same. A small audience will see your ads more often, so check it first. Meta\'s suggested fixes are to create another ad with a materially different image or video, expand the audience, or try Advantage+ creative where available. It notes that keeping the original ad active may maximise results, so add rather than replace.',
    },
    { type: 'h2', text: 'Always-on or flighted' },
    {
      type: 'p',
      text: 'Always-on means a steady budget with creative refreshed as needed. Flighted means ads run in bursts around a launch, season or sale. Both are valid, but with flights it is worth planning for learning time.',
    },
    {
      type: 'table',
      head: ['', 'Always-on', 'Flighted'],
      rows: [
        ['Best for', 'Steady lead generation, services with year-round demand', 'Launches, events, seasonal offers with a clear end date'],
        ['Learning phase', 'Happens once if you avoid significant edits', 'Likely again after a pause of 7 days or longer'],
        ['Main risk', 'Creative fatigue if nothing changes', 'Short flights spent mostly in learning'],
        ['Judge by', 'Weekly cost per result trend', 'Total results against the whole flight budget'],
      ],
    },
    {
      type: 'p',
      text: 'The 7-day rule matters here: Meta counts pausing an ad set for 7 days or longer as a significant edit. Its list names only a pause of 7 days or longer, so a shorter pause is not listed as a significant edit. If you plan a flight, make it long enough that most of it is not spent learning, or consider keeping a small ad set running between flights to avoid a long pause, bearing in mind that a low budget can leave it Learning limited. Meta describes a lifetime budget as the total you will spend over the run-time of the campaign, which suits a fixed flight.',
    },
    { type: 'h2', text: 'When to stop a campaign' },
    {
      type: 'ul',
      items: [
        'The ad set has left learning, ran a full week, and cost per result is above what the sale can pay for. Test one change before stopping.',
        'Tracking shows ad clicks but your own records show no real leads. Fix measurement first.',
        'A Creative fatigue status appears and a fresh ad does not bring the cost back.',
        'The offer, price or stock changed, so the old ad no longer describes what you sell.',
      ],
    },
    {
      type: 'p',
      text: 'Stopping a campaign because day two looked expensive is an avoidable mistake, since Meta says early results are not necessarily indicative of future performance. If you are setting up from scratch, [how to run Facebook ads](/blog/how-to-run-facebook-ads) covers the build. If you would rather have the weekly reading and the refreshes handled, WakeUP\'s [advertising service](/services/advertising) covers Meta and Google campaigns, and the [free audit](/audit) is a place to start with your current account.',
    },
  ],
}
