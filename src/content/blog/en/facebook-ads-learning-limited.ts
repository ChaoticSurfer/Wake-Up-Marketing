import type { BlogPost } from '@/lib/blog'

export const post: BlogPost = {
  locale: 'en',
  slug: 'facebook-ads-learning-limited',
  title: 'Facebook ads "Learning limited": why it happens, how to fix it and when to ignore it',
  metaTitle: 'Facebook Ads Learning Limited: Fixes',
  description:
    'Facebook ads learning limited means an ad set is unlikely to get about 50 results a week. See why it happens, how to fix it and when to ignore it.',
  publishedAt: '2027-02-22T15:00:00+04:00',
  updatedAt: '2027-02-22T15:00:00+04:00',
  service: 'advertising',
  reviewState: 'llm_reviewed',
  body: [
    {
      type: 'p',
      text: 'Facebook ads show "Learning limited" when an ad set is unlikely to get about 50 optimization events in the week after its last significant edit. It is not a penalty: Meta says it signals that the delivery system cannot optimise well with your current setup. Fix it by combining ad sets, widening the audience, raising the budget or bid, or optimising for an event that happens more often.',
    },
    { type: 'h2', text: 'What Learning limited means, in Meta\'s words' },
    {
      type: 'p',
      text: 'Meta\'s Help Center page on [Learning limited](https://www.facebook.com/business/help/269269737396981) says: "Learning limited isn\'t a penalty - it\'s an indication that your budget isn\'t being spent effectively because the ad delivery system can\'t optimize performance with your current setup." An ad set gets the label "when it is unlikely to receive about 50 optimization events in the week after your last significant edit", and the diagnosis can come at any time after you create an ad set or edit one. The basics of the learning phase, and why you should wait about a week before judging a campaign, are covered in [how long to run Facebook ads](/blog/how-long-to-run-facebook-ads); this article is about the stuck state and how to leave it.',
    },
    {
      type: 'p',
      text: 'One detail from the same page: for Shops ads the rule is different. An ad set becomes learning limited there when it has not generated at least 17 purchases through your website and 5 through Meta after 7 days.',
    },
    { type: 'h2', text: 'Do the arithmetic first' },
    {
      type: 'p',
      text: 'A learning-limited ad set is often a budget problem you can calculate. Divide your weekly spend on the ad set by your cost per result. That is roughly how many results it gets in a week. The numbers below are made up to show the method, not benchmarks for Georgia.',
    },
    {
      type: 'table',
      head: ['Weekly budget', 'Cost per result', 'Results a week', 'Against about 50'],
      rows: [
        ['700', '35', '20', 'Short by 30: likely learning limited'],
        ['700', '14', '50', 'Meets the line'],
        ['350 per ad set, two ad sets', '14', '25 each', 'Each ad set is short; one ad set would meet it'],
      ],
    },
    {
      type: 'p',
      text: 'The third row is the common case. Splitting one budget over several ad sets divides the results too, so each ad set may fall under 50. Your own cost per result is in Ads Manager; [Facebook ads cost](/blog/facebook-ads-cost) explains what drives it and [Facebook ads metrics](/blog/facebook-ads-metrics) explains how to read it by goal.',
    },
    { type: 'h2', text: 'The causes Meta lists, and a fix for each' },
    {
      type: 'p',
      text: 'The same Meta page names six general causes: a small audience, low budget, low bid or cost control, high auction overlap, an infrequent optimization event, and other issues such as too many ads running at once. It lists five fixes. This table pairs them. The pairing and the order are practical judgement, not Meta\'s wording.',
    },
    {
      type: 'table',
      head: ['Cause', 'How to spot it', 'Fix from Meta\'s list'],
      rows: [
        ['Budget too low for the cost per result', 'Weekly spend divided by cost per result is far below 50', 'Raise the budget, or lower your cost per result first'],
        ['Budget split across too many ad sets', 'Several ad sets with similar audiences, all learning limited', 'Combine ad sets and campaigns, so results arrive faster (Meta\'s learning-phase page adds that combining similar ad sets also combines learnings)'],
        ['Audience too small or overlapping', 'Narrow targeting, or ad sets reaching the same people', 'Expand the audience; the larger it is, the more chances people have to complete your event'],
        ['Bid or cost control set too low', 'A tooltip appears when you hover over the status', 'Raise the bid or cost control'],
        ['Event happens too rarely', 'Optimising for a purchase or a qualified lead that few people complete', 'Change the optimization event to one that occurs more often, for example add to cart instead of purchase'],
      ],
    },
    {
      type: 'p',
      text: 'Meta also suggests adding "Optimization events" as a column in Ads Manager (Columns, Customize columns, then tick Optimization events) so you can see how close an ad set is. If a learning-limited ad set gets enough events since the last significant edit, it moves from Learning limited to Active.',
    },
    { type: 'h2', text: 'What to change first, for a small account' },
    {
      type: 'ol',
      items: [
        'Merge before you raise the budget. If you run several ad sets with similar audiences, one ad set with the same total budget gets more results than each of them did. For structure choices, see [CBO vs ABO](/blog/cbo-vs-abo-facebook-ads) and [broad vs interest targeting](/blog/broad-vs-interest-targeting-facebook-ads).',
        'Move the optimization event up the funnel if you must. A lead, a form submission or a chat started happens more often than a sale. The trade-off is quality: cheap, frequent events can bring cheap, low-quality enquiries, so check what happens to the leads afterwards. See [how to improve Facebook lead ads quality](/blog/improve-facebook-lead-ads-quality).',
        'Make sure the event is actually recorded. An event that is lost in tracking is an event the system never sees. [Meta Pixel vs Conversions API](/blog/meta-pixel-vs-conversions-api) covers the setup.',
        'Pause the tests. Running many creatives at once is one of the causes Meta lists. Test fewer versions at a time; [how to test video ad creative on Meta](/blog/how-to-test-video-ad-creative-on-meta) shows how to budget a test.',
        'Raise the budget last, and by a size you can sustain. Meta\'s [significant edits](https://www.facebook.com/business/help/316478108955072) page says a budget change may or may not reset learning depending on its size: $100 to $101 is not likely to, but $100 to $1000 may.',
      ],
    },
    {
      type: 'p',
      text: 'Do not fix it by editing every day. On the same page, Meta lists any change to targeting, creative or optimization event, adding a new ad, changing bid strategy and pausing for 7 days or longer as significant edits that make an ad set re-enter the learning phase. Make the changes in one batch, note the date and then wait a week.',
    },
    { type: 'h2', text: 'When you can ignore Learning limited' },
    {
      type: 'p',
      text: 'Meta calls the label a diagnosis, not an error, and its learning-phase page says the delivery system "never stops learning". That leaves room for judgement. This is a judgement call, not a Meta rule: if an ad set is delivering at or below the cost per result you can afford, and the leads or sales are real in your own records, the status is a warning about stability and not a reason to rebuild a working campaign. Leave it and check again after a week.',
    },
    {
      type: 'p',
      text: 'It is more worth acting on when cost per result swings from day to day, when results are fewer than your sales team needs, or when you are about to scale. Meta wrote in October 2026 that ad sets under roughly fifty conversions a week ran [about 28% more expensive per purchase](https://ppc.land/meta-says-ad-sets-under-50-weekly-conversions-cost-28-more-per-purchase/), as reported by PPC Land, though Meta published no method or sample, as discussed in [how to scale Facebook ads](/blog/how-to-scale-facebook-ads). Treat that as direction, not proof.',
    },
    { type: 'h2', text: 'Learning limited versus a bad campaign' },
    {
      type: 'p',
      text: 'The label says nothing about whether the ad is good. A weak offer, a poor landing page or the wrong audience can sit in an ad set that is Active, and a good ad can sit in one that is Learning limited. Check cost per result and lead quality before the status. If you want an outside review of an account where spend is not converting into enquiries, the [free marketing audit](/audit) looks at your ads, site and sales process, and WakeUP\'s [advertising service](/services/advertising) covers running Meta and Google campaigns.',
    },
  ],
}
