import type { BlogPost } from '@/lib/blog'

export const post: BlogPost = {
  locale: 'en',
  slug: 'broad-vs-interest-targeting-facebook-ads',
  title: 'Broad targeting vs interest targeting on Facebook ads: which to use',
  metaTitle: 'Broad vs Interest Targeting on Facebook',
  description:
    'Broad targeting vs interest targeting on Facebook ads: when each works, where lookalikes fit, and how to choose in a small market like Georgia.',
  publishedAt: '2027-02-17T15:00:00+04:00',
  updatedAt: '2027-02-17T15:00:00+04:00',
  service: 'advertising',
  reviewState: 'llm_reviewed',
  body: [
    {
      type: 'p',
      text: 'In broad targeting vs interest targeting on Facebook ads, the practical rule is this: go broad when your creative is strong and your budget can feed the system enough results, and use interests or a lookalike when budget, tracking data or audience size is thin. In a small market like Georgia, the choice matters less than the ad itself, so test it rather than assume it.',
    },
    { type: 'h2', text: 'What the three options actually are' },
    {
      type: 'p',
      text: 'Under the old habit, you chose a box and Meta stayed inside it. With Advantage+ audience, the box is a suggestion. Here is how the three approaches differ in what you control.',
    },
    {
      type: 'table',
      head: ['Approach', 'What you set', 'What Meta does', 'Typical use'],
      rows: [
        ['Broad', 'Location, minimum age, language, exclusions', 'Finds likely buyers across the whole eligible audience', 'Strong creative, enough budget, a product many people could buy'],
        ['Interest (detailed targeting)', 'Interests, behaviours or demographics you pick', 'Prioritises people matching them', 'A niche product, little or no tracking data, a very small budget'],
        ['Lookalike', 'A source audience (customers, leads) and a percentage', 'Finds people who resemble the source', 'You already have a customer or lead list of real size'],
      ],
    },
    {
      type: 'p',
      text: 'The details of building the third option are in [Facebook lookalike audiences](/blog/facebook-lookalike-audiences), and the custom audiences that feed it are covered in [Facebook custom audiences: the types and when to use each](/blog/facebook-custom-audiences-types). This article is about choosing between the three.',
    },
    { type: 'h2', text: 'What Meta says about going broad' },
    {
      type: 'p',
      text: 'Meta\'s [Advantage+ audience page](https://www.facebook.com/business/ads/meta-advantage-plus/audience) says that the system starts from your usual selections, such as a customer list, a gender or an interest, and then looks beyond them. On the same page: "When you add audience suggestions, the system prioritizes audiences matching this profile before searching more widely." The limits you can still set include minimum age, location, language and custom audience exclusions.',
    },
    {
      type: 'p',
      text: 'The reading for an advertiser is that interests and lookalikes are no longer walls. They are a starting point, and ads can go to other people "when it\'s likely to improve performance", in Meta\'s words. So the real question is not broad or not broad, but how much to constrain the system at the start and how much to trust it.',
    },
    {
      type: 'p',
      text: 'Meta publishes median cost-per-acquisition improvements for Advantage+ audiences on that page. They are Meta\'s own figures for its own product, and they say nothing about what a Georgian budget will do. Treat them as a reason to test, not as a result you will get.',
    },
    { type: 'h2', text: 'What independent data shows' },
    {
      type: 'p',
      text: 'Public comparisons are rare and mostly from tool vendors. One example: in an article dated April 2026, the analytics company Lebesgue [pulled one month of prospecting campaign data through the Marketing API](https://lebesgue.io/facebook-ads/which-facebook-ads-audience-works-best-for-prospecting) and compared audience types by conversion rate, cost per click and cost to acquire a customer. It reports that lookalikes had the highest conversion rate and lowest cost per click, and that broad beat interest targeting by a wide margin, with a 65% difference in conversion rate and 42% in acquisition cost in broad\'s favour. Interest audiences ended up with the highest cost to acquire a customer.',
    },
    {
      type: 'p',
      text: 'Read that with care. The article does not state how many ad sets, clicks or conversions it covers, so you cannot judge how reliable the percentages are. It is one vendor\'s data and says nothing about Georgia. Its own recommendation is the useful part: test all three audience types instead of relying on one.',
    },
    { type: 'h2', text: 'Why Georgia changes the maths' },
    {
      type: 'p',
      text: 'Most advice online is written for the US, where an audience is tens of millions of people. DataReportal\'s [Digital 2026: Georgia report](https://datareportal.com/reports/digital-2026-georgia) puts Facebook\'s ad reach in Georgia at 3.05 million people at the end of 2025 and Instagram\'s at 1.85 million, noting that these are Meta\'s estimated audience sizes and not a count of active users. Three things follow.',
    },
    {
      type: 'ul',
      items: [
        'Broad is already small. A broad audience in Georgia is about three million people before you add any filters. Every filter you add shrinks it further, and a smaller audience means frequency rises faster for the same spend.',
        'Lookalikes get tiny. Meta\'s [developer documentation](https://developers.facebook.com/docs/marketing-api/audiences/guides/lookalike-audiences/) says a 1% lookalike covers the top 1% of people in the selected country most similar to your source. Measured against the 3.05 million ad reach, that is roughly 30,000 people (simple arithmetic, not a Meta figure). The same page requires a source of at least 100 people and recommends 200 or more conversions for a conversion-based source.',
        'Overlap is possible. In a small country, two interest groups you picked as different can contain many of the same people, so several ad sets may end up competing for the same audience.',
      ],
    },
    {
      type: 'p',
      text: 'If you advertise to Georgian-speaking consumers inside Georgia, a narrow targeting stack can saturate in days. If your product sells nationwide or you target Tbilisi only, check the audience size estimate in Ads Manager before you decide. The estimate is not a promise, but it tells you quickly how large the audience is.',
    },
    { type: 'h2', text: 'How to choose: budget, creative and data' },
    {
      type: 'p',
      text: 'Three inputs decide it. Budget determines how many results the system can learn from. Creative determines whether the ad itself tells the system and the viewer who it is for. Data determines whether a lookalike is possible at all.',
    },
    {
      type: 'table',
      head: ['Your situation', 'Start with', 'Why'],
      rows: [
        ['Very small budget, new pixel, little data', 'A few interests close to the buyer, a wide age range', 'There are too few results for the system to learn from, so a hint helps it start'],
        ['Steady budget, strong creative in several angles', 'Broad, with exclusions for existing customers', 'The creative does the targeting and the system has room to learn'],
        ['A real customer or lead list (100+ people, ideally many more)', 'A 1% to 3% lookalike, tested against broad', 'The source adds information, but the audience is small in Georgia'],
        ['Niche B2B product, a few thousand possible buyers in the country', 'Interests plus job-related options, or LinkedIn', 'Broad wastes impressions on people who can never buy'],
        ['Seasonal offer with a short window', 'Broad plus a retargeting set', 'There is no time for a narrow test to find its feet'],
      ],
    },
    {
      type: 'p',
      text: 'The budget input has a number behind it. In an October 2026 post Meta said ad sets need roughly 50 conversions a week, and that ad sets below that [ran about 28% more expensive per purchase](https://ppc.land/meta-says-ad-sets-under-50-weekly-conversions-cost-28-more-per-purchase/), as reported by PPC Land, which notes Meta gave no sample or method. A small budget split across three audiences may give none of them enough results. One ad set with a clear angle is often better than three starved ones.',
    },
    {
      type: 'p',
      text: 'The creative input is easy to overlook. With a broad audience, nothing in the targeting says who the ad is for, so the ad has to say it: the first seconds of a video and the headline should name the buyer, the problem and the offer. That is reasoning, not a Meta statement, but it matches how the system works: it learns from who responds. Ideas for strong video angles are in [Facebook video ad creative](/blog/facebook-video-ad-creative), and WakeUP scripts, shoots and edits short videos for ads and tests them in campaigns on the [video production page](/services/video-production).',
    },
    { type: 'h2', text: 'How to test it without fooling yourself' },
    {
      type: 'ol',
      items: [
        'Use the same creative, the same budget and the same optimisation goal in each ad set. Change only the audience.',
        'Keep to two or three ad sets at most. In a small market, more than that splits the spend too thin.',
        'Exclude existing customers and retargeting audiences from the prospecting sets so the groups do not overlap with warm traffic.',
        'Wait for enough results before judging. How long that takes is in [how long to run Facebook ads](/blog/how-long-to-run-facebook-ads).',
        'Compare on cost per lead or sale you can verify in your own records, not on click-through rate. The metrics worth watching for each goal are in [Facebook ads metrics](/blog/facebook-ads-metrics).',
        'Keep the winner and test a new audience against it later. When it works, [scaling Facebook ads](/blog/how-to-scale-facebook-ads) covers how to raise spend without breaking it.',
      ],
    },
    {
      type: 'p',
      text: 'If you are setting up the account for the first time, [how to run Facebook ads](/blog/how-to-run-facebook-ads) walks through the structure. WakeUP runs Meta campaigns as part of its [advertising service](/services/advertising), and a [free marketing audit](/audit) shows how your current audiences and creative compare before you commit more budget.',
    },
  ],
}
