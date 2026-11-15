import type { BlogPost } from '@/lib/blog'

export const post: BlogPost = {
  locale: 'en',
  slug: 'tiktok-spark-ads',
  title: 'TikTok Spark Ads: what they are and how to run them',
  metaTitle: 'TikTok Spark Ads: How They Work',
  description:
    'TikTok Spark Ads turn an organic post or a creator video into an ad. How they work, how to set one up and when they beat a standard in-feed ad.',
  publishedAt: '2027-01-02T18:00:00+04:00',
  updatedAt: '2027-01-02T18:00:00+04:00',
  service: 'smm',
  reviewState: 'llm_reviewed',
  body: [
    {
      type: 'p',
      text: 'TikTok Spark Ads are ads built from an existing TikTok post, either one on your own account or one from a creator who gives you permission. TikTok describes them as "a native ad format that allows you to leverage organic TikTok posts and their features in your advertising." The ad shows the original post, so likes, comments and follows from the paid reach are credited to it.',
    },
    {
      type: 'p',
      text: 'This guide covers the mechanics and the decision. For whether TikTok deserves budget at all, see [Facebook Ads vs TikTok Ads](/blog/facebook-ads-vs-tiktok-ads).',
    },
    { type: 'h2', text: 'Spark Ads vs a standard TikTok ad' },
    {
      type: 'p',
      text: 'A standard in-feed ad is created inside Ads Manager and runs under your ad identity. A Spark Ad starts as a normal post. You publish it, see how people react, and then put budget behind the ones that earned attention.',
    },
    {
      type: 'table',
      head: ['', 'Spark Ad', 'Standard in-feed ad'],
      rows: [
        ['Starting point', 'An organic post, yours or a creator\'s (with authorization)', 'A video uploaded in Ads Manager'],
        ['Where engagement goes', 'To the original post', 'Stays with the ad'],
        ['Text and display name', 'Taken from the post (TikTok\'s help pages differ on whether it can be edited, so check in Ads Manager)', 'Written in Ads Manager'],
        ['Best use', 'Scaling proven content, creator content', 'Ad-only creative, tightly controlled messages'],
      ],
    },
    {
      type: 'p',
      text: 'The engagement row comes from TikTok\'s [Spark Ads help page](https://ads.tiktok.com/help/article/spark-ads), which says views, comments, shares, likes and follows gained from boosting are credited to the organic post. The page also lists the objectives available: for the auction buying type these include reach, traffic, video views, conversions and lead generation.',
    },
    { type: 'h2', text: 'How to boost your own post' },
    {
      type: 'p',
      text: 'The cleanest route is to link your TikTok account to your ad account in Business Center. TikTok\'s [Business Center guide](https://ads.tiktok.com/help/article/promote-spark-ads-via-tiktok-business-center?lang=en) says the point is to make the account "automatically appear during the Spark Ads setup". It requires admin access to Business Center, and TikTok recommends verifying accounts because unverified ones may be restricted from linking.',
    },
    {
      type: 'ol',
      items: [
        'In Business Center, open the TikTok account and link it to your advertiser account.',
        'In Ads Manager, go to Campaign and click Create, choose an objective and complete the campaign and ad group settings.',
        'In the ad creatives section, click Add videos or images and open the TikTok posts tab.',
        'Choose the post from your linked account, review the ad settings and publish.',
      ],
    },
    {
      type: 'p',
      text: 'These steps follow TikTok\'s [guide to creating Spark Ads](https://ads.tiktok.com/help/article/spark-ads-creation-guide). Menu names change, so check them against the live page.',
    },
    { type: 'h2', text: 'How to use a creator\'s post' },
    {
      type: 'p',
      text: 'TikTok\'s [FAQ](https://ads.tiktok.com/help/article/spark-ads-faq) confirms you can run ads from "organic posts made by other creators (with their authorization)". The creator generates a code for the post in the TikTok app; per the creation guide, they open the video, tap the three dots, then Ad settings, then Generate. You paste the code in Ads Manager with Add post, and you can authorize up to 20 codes at once.',
    },
    {
      type: 'ul',
      items: [
        'Agree the usage in writing before you ask for the code: where the post can run, for how long and at what fee. TikTok handles the technical permission, not the commercial terms.',
        'Check the authorization period beneath each post. If it ends before your campaign, TikTok shows an error that [authorization expired or ends before the ad\'s end time](https://ads.tiktok.com/help/article/about-spark-ads-code-error-notifications-in-tiktok-ads-manager), and the fix is to ask the creator to extend it.',
        'Ask the creator not to delete the post while it runs. A video must be un-authorized as a Spark Ad before it can be deleted from the organic account.',
      ],
    },
    { type: 'h2', text: 'Limits to know before you plan' },
    {
      type: 'ul',
      items: [
        'Videos up to 10 minutes can be sparked.',
        'One Ads Manager account supports up to 10,000 Spark Ads.',
        'The caption comes from the post, so write it with the ad in mind.',
        'Banned organic posts are rejected in Ads Manager.',
      ],
    },
    {
      type: 'p',
      text: 'All of these are from TikTok\'s Spark Ads help page; limits can change, so confirm them when you set up.',
    },
    { type: 'h2', text: 'When Spark Ads beat a standard ad' },
    {
      type: 'ul',
      items: [
        'You already have a post with strong watch time or comments. Boost what worked rather than guessing with new creative. The same logic is behind [Facebook ads versus boosted posts](/blog/facebook-ads-vs-boosted-posts), with the difference that on TikTok the boost keeps the post\'s engagement.',
        'The content looks native: a person talking, a product in use, a behind-the-scenes clip. Polished spots can feel out of place in the feed.',
        'You want creator content as proof. A creator video with comments from real viewers is harder to fake than a branded ad.',
      ],
    },
    {
      type: 'p',
      text: 'A standard ad is better when the message must be exact, for example a regulated offer, a fixed date or a campaign that must not show unrelated comments under it. Nothing stops you from running both: standard ads for controlled messages, Spark Ads for proven posts.',
    },
    { type: 'h2', text: 'What to do before you spend' },
    {
      type: 'ol',
      items: [
        'Publish at least a handful of organic videos first, so you have something with proven attention to boost.',
        'Pick one clear objective and give the ad a call to action; on a Spark Ad the CTA button leads to the destination page you set.',
        'Keep spend small until you see cost per result for the objective you chose, and judge by enquiries, not views.',
        'Review comments on the post. They are part of the ad.',
      ],
    },
    {
      type: 'p',
      text: 'Good Spark Ads start with good short video. Video content is king, and WakeUP scripts, shoots and edits short videos for ads, Reels and TikTok and tests them in campaigns; see the [video production service](/services/video-production). For channel strategy and paid social, see [social media management](/services/smm), and a [free audit](/audit) can show whether your current posts are worth boosting.',
    },
  ],
}
