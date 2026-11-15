import type { BlogPost } from '@/lib/blog'

export const post: BlogPost = {
  locale: 'en',
  slug: 'how-the-tiktok-algorithm-works',
  title: 'How the TikTok algorithm works for business: signals, edits and myths',
  metaTitle: 'How the TikTok Algorithm Works',
  description:
    'How the TikTok algorithm works for business: the signals TikTok says it uses, what they mean for how you edit and post, and the myths to ignore.',
  publishedAt: '2027-01-22T18:00:00+04:00',
  updatedAt: '2027-01-22T18:00:00+04:00',
  service: 'smm',
  reviewState: 'llm_reviewed',
  body: [
    {
      type: 'p',
      text: 'How the TikTok algorithm works for business starts with one fact: it is a recommendation system that gives each video a prediction score for each viewer, from viewer and video signals, and fills the For You feed with the highest-scoring ones. For a business this means the video is judged by viewer behaviour and video details, and a big follower count is not a shortcut. You improve your odds by making videos people finish and by being clear about the topic.',
    },
    { type: 'h2', text: 'What TikTok says it uses' },
    {
      type: 'p',
      text: 'TikTok\'s [recommendation system page](https://www.tiktok.com/transparency/en/recommendation-system) says it uses signals "to create a prediction score for different videos", and that the highest-scoring videos are chosen for your feed. It lists two groups of signals:',
    },
    {
      type: 'ul',
      items: [
        'Viewer-related: the viewer\'s region, device language, operating system, recent interactions and follow relationships. Recent interactions include videos the viewer "watched, finished, liked, or skipped".',
        'Video-related: when the video was posted, where it was posted from, the author\'s language setting, the soundtrack, the video length and the hashtags.',
      ],
    },
    {
      type: 'p',
      text: 'An earlier TikTok newsroom post, [How TikTok recommends videos #ForYou](https://newsroom.tiktok.com/en-us/how-tiktok-recommends-videos-for-you) (published 18 June 2020), groups the same ideas as user interactions, video information such as captions, sounds and hashtags, and device and account settings. It states that these factors are "weighted based on their value to a user", and that settings such as language and country carry lower weight than the other signals. TikTok does not publish the weights themselves, so any article that gives exact percentages is guessing.',
    },
    { type: 'h2', text: 'What this means for how you edit' },
    {
      type: 'p',
      text: 'Because finishing or skipping a video is one of the behaviours the system predicts, editing decisions matter more than any posting trick. The newsroom post gives the example of a viewer finishing a longer video from beginning to end as "a strong indicator of interest". Practical consequences:',
    },
    {
      type: 'ul',
      items: [
        'Open on the answer or the result, not a logo or a greeting. A viewer can skip at any moment, and skipped videos are one of the interactions TikTok lists. [Short-form video hooks](/blog/short-form-video-hooks) covers openings in detail.',
        'Cut anything that does not carry the point, since a video that viewers finish is the outcome you want. Length guidance is in [how long should a marketing video be](/blog/how-long-should-a-marketing-video-be).',
        'Show one idea per video, so viewers and the system both know what it is about.',
        'Add captions, so the video can be followed with the sound off. See [captions and subtitles for social videos](/blog/captions-subtitles-for-social-videos).',
        'End with a reason to watch again or move on (a question, a next step), not a long outro.',
      ],
    },
    { type: 'h2', text: 'What this means for how you post' },
    {
      type: 'p',
      text: 'The video-related signals are things you control when you publish: the caption, hashtags, sound and language. Use them to describe the video accurately, not to chase reach.',
    },
    {
      type: 'table',
      head: ['Signal you control', 'What to do'],
      rows: [
        ['Hashtags and caption', 'Name the topic in plain words your customer would use; a few specific hashtags beat a long list (see [hashtags for business](/blog/hashtags-for-business))'],
        ['Soundtrack', 'Pick sound that suits the video; check which sounds your account type may use, as covered in the [TikTok for business guide](/blog/tiktok-for-business-guide)'],
        ['Language', 'The author\'s language setting and the viewer\'s device language are both listed signals, so post in the language of the viewers you want'],
        ['Video length', 'Match length to the idea; do not pad to reach a number'],
        ['Posting regularly', 'Consistency gives you more videos to learn from; it is not a ranking factor TikTok lists in these pages']
      ],
    },
    { type: 'h2', text: 'Myths to ignore' },
    {
      type: 'ul',
      items: [
        '"You need followers first." The newsroom post says "neither follower count nor whether the account has had previous high-performing videos are direct factors" in recommendations. A new account can reach people on the For You feed, although follow relationships do appear in the viewer-related signals.',
        '"There is a perfect time to post." Posting time appears in TikTok\'s list only as when the video was posted, one of many signals. Test your own audience, and treat any universal time as a guess.',
        '"Go viral and the business problem is solved." Views from people who are not your customers do not produce enquiries. The For You feed also deliberately varies what a viewer sees: the recommendation page says that videos too similar to the ones around them are replaced "to ensure a greater variety in the content you see". Aim at the right viewer, not the largest crowd.',
        '"Hashtags decide everything." They are one video-related signal among several, and TikTok does not say how much weight they carry. Describe the video accurately and do not rely on tags alone.',
      ],
    },
    { type: 'h2', text: 'How to read your results' },
    {
      type: 'p',
      text: 'Use the analytics your TikTok account gives you for views, and your own tools for what happens next. Compare videos by what happens after the view: profile visits, link clicks, messages and enquiries. A video with fewer views that brings a message is worth more than one with many views and none. When a video does well, make the next one on the same question in a different format, and when it fails, change the opening before changing the topic. For topic ideas that fit a business account, see [TikTok content ideas for business](/blog/tiktok-content-ideas-for-business).',
    },
    {
      type: 'p',
      text: 'Whether TikTok is worth your time at all depends on where your customers are. [Should your business be on TikTok](/blog/should-your-business-be-on-tiktok) helps with that decision, and [TikTok vs Instagram Reels for business](/blog/tiktok-vs-instagram-reels-for-business) compares the two.',
    },
    { type: 'h2', text: 'Where WakeUP fits' },
    {
      type: 'p',
      text: 'The algorithm rewards videos people watch to the end, which comes down to script, shooting and editing. WakeUP scripts, shoots and edits short videos for ads, Reels and TikTok and tests them in campaigns; see the [video production service](/services/video-production). The [social media service](/services/smm) covers running the channels around them. If you want an outside view of your current TikTok or Instagram presence, request the [free audit](/audit).',
    },
  ],
}
