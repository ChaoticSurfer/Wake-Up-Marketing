import type { BlogPost } from '@/lib/blog'

export const post: BlogPost = {
  locale: 'en',
  slug: 'good-social-media-engagement-rate',
  title: 'What is a good social media engagement rate? Formulas and benchmarks',
  metaTitle: 'Good Social Media Engagement Rate',
  description:
    'What is a good social media engagement rate? The formulas, why one page scores 0.06% or 0.6%, typical ranges by platform and how to set a baseline.',
  publishedAt: '2027-02-17T18:00:00+04:00',
  updatedAt: '2027-02-17T18:00:00+04:00',
  service: 'smm',
  reviewState: 'llm_reviewed',
  body: [
    {
      type: 'p',
      text: 'A good social media engagement rate depends on the formula and the platform: studies that divide by followers report medians below 1% for Facebook and Instagram, while studies that divide by reach report several times more for the same kind of page. The useful target is your own median over the last 20 to 30 posts, measured one way, and beaten over time.',
    },
    { type: 'h2', text: 'The formulas, and why they give different answers' },
    {
      type: 'p',
      text: 'Engagement rate is interactions divided by an audience number. Interactions usually mean reactions, comments, shares and saves, and sometimes link clicks. The disagreement is about the denominator:',
    },
    {
      type: 'table',
      head: ['Formula', 'Divides by', 'Best for', 'Weakness'],
      rows: [
        ['Engagement rate by followers', 'Total followers', 'Comparing accounts of the same size on a platform that shows followers', 'Penalises large accounts and ignores that most followers never see a post'],
        ['Engagement rate by reach', 'Unique accounts that saw the post', 'Judging how well a post worked for the people who saw it', 'Reach can be estimated, and boosted posts inflate it'],
        ['Engagement rate by impressions', 'Total views, including repeats', 'Video and paid content', 'One person viewing twice counts twice'],
      ],
    },
    {
      type: 'p',
      text: 'Instagram\'s own developer documentation defines [reach as the "total number of unique accounts that have seen the media object"](https://developers.facebook.com/docs/instagram-platform/insights/) and impressions as the total number of times it has been seen, so the two are not interchangeable. It also says some metrics are not available on Instagram accounts with fewer than 100 followers, which matters for a new account.',
    },
    {
      type: 'p',
      text: 'The practical rule: pick one formula, write it down, and never compare a number you calculated by followers with a benchmark calculated by reach. Most of the confusion in articles on this topic comes from mixing them.',
    },
    { type: 'h2', text: 'What the published benchmarks say' },
    {
      type: 'p',
      text: 'Benchmarks come from tool vendors who measure their own sample, so read each one with the formula and the date next to it. Rival IQ, in its [2025 benchmark report](https://www.rivaliq.com/blog/social-media-industry-benchmark-report/), says: "Engagement rate is calculated based on all these interactions divided by total follower count." Its sample is 150 companies picked at random from each of 14 industries, drawn from pages with between 25,000 and 1,000,000 Facebook fans, and the report uses the median. In an earlier [Rival IQ analysis of its 2024 report](https://www.rivaliq.com/blog/social-media-engagement-rate/), the medians were:',
    },
    {
      type: 'table',
      head: ['Platform', 'Median engagement rate (by followers)', 'Source and year'],
      rows: [
        ['TikTok', '2.63%', 'Rival IQ, 2024 report'],
        ['Instagram', '0.43%', 'Rival IQ, 2024 report'],
        ['Facebook', '0.063%', 'Rival IQ, 2024 report'],
        ['X (Twitter)', '0.029%', 'Rival IQ, 2024 report'],
      ],
    },
    {
      type: 'p',
      text: 'Now the same platforms by reach. Brandwatch\'s [2024 benchmark article](https://www.brandwatch.com/blog/social-media-industry-benchmarks/) used first-quarter 2024 data on more than 600 brands across 12 industries and divided Facebook and Instagram interactions by estimated reach and X interactions by followers. For professional services it reports 0.72% on Facebook and 5.86% on Instagram, and for retail 0.61% on Facebook and 6.40% on Instagram. Brandwatch picked influential brands in each industry, so its sample leans towards larger and more active accounts.',
    },
    {
      type: 'p',
      text: 'Put the two side by side: Facebook at 0.063% by followers in one study and 0.6% to 0.7% by reach in the other, for retail and professional services. Neither is wrong. They measure different things on different samples. That gap is the reason a single "good engagement rate" number on a blog is of little use to you.',
    },
    { type: 'h2', text: 'Typical ranges and what to read into them' },
    {
      type: 'p',
      text: 'With that caution, a rough reading of the two studies for company accounts:',
    },
    {
      type: 'ul',
      items: [
        'By followers: under 1% on Facebook and Instagram is normal. TikTok runs higher in the Rival IQ data. X is lowest.',
        'By reach: in the Brandwatch data Facebook runs from 0.57% (pharmaceuticals and healthcare) to 3.19% (government), and Instagram from 5.86% (professional services) to 35.28% (entertainment), so industry changes the answer a lot.',
        'Formats differ inside one account, so compare reels with reels and carousels with carousels. Format choices are covered in [Instagram Reels for business](/blog/instagram-reels-for-business) and [Instagram carousel vs Reels](/blog/instagram-carousel-vs-reels).',
      ],
    },
    {
      type: 'p',
      text: 'None of these numbers measures Georgian accounts specifically. A page that posts in Georgian to a Georgian audience is not the same as a global brand, and the studies above do not publish a Georgia-only benchmark. Use the tables as a sanity check on the order of magnitude, not as a pass mark.',
    },
    { type: 'h2', text: 'Set your own baseline in an afternoon' },
    {
      type: 'ol',
      items: [
        'Choose the formula. Reach is usually the best choice for a company page because it measures the posts against people who actually saw them.',
        'Export the last 20 to 30 organic posts from Meta Business Suite or the platform\'s analytics, with reactions, comments, shares, saves and reach for each.',
        'Calculate each post\'s rate and take the median, not the average, so one viral post does not set the standard.',
        'Split by format (video, image, carousel, text) and by topic. The median per format is the number you try to beat.',
        'Leave out boosted posts or calculate them separately, since paid reach changes the denominator.',
        'Recalculate every month on the same posts-per-sample basis and write the result next to the content you ran.',
      ],
    },
    {
      type: 'p',
      text: 'A made-up example for illustration: if your last 25 posts have a median reach engagement rate of 1.8% and your reels median is 3.1%, the target is not "above the industry average". It is to move the reels median toward 3.5% while keeping the rest steady.',
    },
    { type: 'h2', text: 'When engagement rate is the wrong number' },
    {
      type: 'p',
      text: 'Engagement is a signal that people reacted. It does not show that anyone bought. A comment giveaway can push the rate up while bringing no customers, and a quiet post that sends ten qualified visitors to a contact form can look weak. Judge social media against business outcomes too. Which outcome measures to pair with it, such as cost per lead and conversion by channel, is in [marketing KPIs](/blog/marketing-kpis), and [how to run a social media audit](/blog/social-media-audit) shows how to review the whole account rather than one ratio.',
    },
    {
      type: 'p',
      text: 'Engagement works best as a diagnostic: it tells you which formats and topics the audience responds to, so the next month\'s plan in your [social media marketing strategy](/blog/social-media-marketing-strategy) can lean on them. WakeUP\'s [social media management service](/services/smm) covers content planning, posting and monthly reporting, and a [free marketing audit](/audit) is a way to see where your accounts stand before deciding what to change.',
    },
  ],
}
