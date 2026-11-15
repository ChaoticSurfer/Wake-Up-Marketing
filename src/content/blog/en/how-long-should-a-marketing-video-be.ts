import type { BlogPost } from '@/lib/blog'

export const post: BlogPost = {
  locale: 'en',
  slug: 'how-long-should-a-marketing-video-be',
  title: 'How long should a marketing video be? Length by goal and platform',
  metaTitle: 'How Long Should a Marketing Video Be',
  description:
    'How long should a marketing video be? Aim for 15 to 60 seconds for reach and ads, 1 to 3 minutes to build trust. Platform limits and a test plan inside.',
  publishedAt: '2026-12-15T18:00:00+04:00',
  updatedAt: '2026-12-15T18:00:00+04:00',
  service: 'video',
  reviewState: 'llm_reviewed',
  body: [
    {
      type: 'p',
      text: 'A marketing video should be as long as it takes to do one job and no longer. As a working range, use 15 to 60 seconds for videos meant to reach new people and for most ads, 1 to 3 minutes for videos that build trust or explain a service, and longer only for viewers who already want the detail. Platform maximums are far higher than that, so they tell you what is allowed, not what works.',
    },
    { type: 'h2', text: 'Decide by goal first, then check the platform' },
    {
      type: 'p',
      text: 'Ask what the viewer must do after the last second: remember you, trust you, or send an enquiry. Then choose the length that gets them there. The ranges below are our working guidance, not platform rules, and the right number for your audience comes from testing (see the last section).',
    },
    {
      type: 'table',
      head: ['Goal', 'Working length', 'Why'],
      rows: [
        ['Reach new people', '15 to 45 seconds', 'The viewer does not know you yet, so one idea and a fast start'],
        ['Get an enquiry from an ad', '10 to 30 seconds', 'Problem, offer and one call to action, nothing else'],
        ['Explain a service', '30 to 90 seconds', 'Enough room for what it is, who it is for and the next step'],
        ['Build trust before a purchase', '1 to 3 minutes', 'A customer story or how the work is delivered needs time to feel real'],
        ['Train or onboard', 'As long as the task needs', 'The viewer chose to watch, so completeness matters more than speed'],
      ],
    },
    {
      type: 'p',
      text: 'If the video cannot be summed up in one sentence, it is probably two videos. For what each video type should show, see the guide to [video marketing for small business](/blog/video-marketing-for-small-business).',
    },
    { type: 'h2', text: 'Short-form: YouTube Shorts and Instagram Reels' },
    {
      type: 'p',
      text: 'YouTube Help says videos uploaded on or after 15 October 2024 count as Shorts if they have a square or vertical aspect ratio and are up to three minutes long ([YouTube Help](https://support.google.com/youtube/answer/15424877?hl=en-GB)). Instagram states that Reels can run from 3 seconds to 3 minutes, and suggests that anyone just getting started try a 15-second Reel ([Instagram](https://about.instagram.com/blog/tips-and-tricks/how-to-make-instagram-reels)).',
    },
    {
      type: 'p',
      text: 'Both platforms now allow three minutes, but the pages above do not present longer as better. A sensible default is 15 to 45 seconds with the point in the opening seconds. Use the extra time only when a story needs it, such as a full customer story. Instagram also publishes length bands by purpose, which the Reels guide walks through, along with what to post and which numbers to read: see [Instagram Reels for business](/blog/instagram-reels-for-business).',
    },
    { type: 'h2', text: 'Paid video: YouTube ads, TikTok ads and Facebook' },
    {
      type: 'p',
      text: 'In paid placements the viewer did not choose your video, so the opening matters most. The platforms document these limits:',
    },
    {
      type: 'table',
      head: ['Placement', 'What the platform documents', 'Source'],
      rows: [
        [
          'YouTube skippable in-stream',
          'Viewers can skip after 5 seconds; no maximum length, under 3 minutes recommended.',
          '[Google Ads Help](https://support.google.com/google-ads/answer/2375464?hl=en)',
        ],
        [
          'YouTube bumper',
          'Non-skippable, 5 to 6 seconds.',
          '[Google Ads Help](https://support.google.com/google-ads/answer/2375464?hl=en)',
        ],
        [
          'YouTube non-skippable in-stream',
          '60 seconds or shorter; viewers cannot skip.',
          '[Google Ads Help](https://support.google.com/google-ads/answer/2375464?hl=en)',
        ],
        [
          'TikTok ads (non-Spark)',
          'Up to 10 minutes; vertical 9:16 recommended. Spark Ads have no duration restriction.',
          '[TikTok Ads Help](https://ads.tiktok.com/help/article/video-ads-specifications)',
        ],
        [
          'Facebook feed ads',
          '1 second to 241 minutes; 4:5 ratio listed. No recommended length is stated on that page.',
          '[Meta ads guide](https://www.facebook.com/business/ads-guide/video)',
        ],
      ],
    },
    {
      type: 'p',
      text: 'The 5-second skip rule has a practical meaning: on a skippable YouTube ad, everything the viewer needs to decide whether to stay must happen before the skip button appears. State the problem or the offer first and put the brand name early, rather than saving it for the end. The same logic applies on TikTok and Facebook, where the documented limits are so wide that they give no guidance on the length that works. Choose the length from the goal, and expect a short ad to need a clear call to action in the final seconds. Ad costs are a separate question; see [what Facebook ads cost](/blog/facebook-ads-cost) before you set a budget.',
    },
    { type: 'h2', text: 'Website and longer videos' },
    {
      type: 'p',
      text: 'A video on your own website or landing page is watched by someone already interested, so it can be longer than a social clip. A 1 to 3 minute video that shows how the service is delivered, or a customer in their own words, suits this place. Put it next to an enquiry form, and do not autoplay with sound. If a video runs past three minutes, give viewers a reason to continue, such as chapters in the description, and consider whether it should be cut into several short videos, each answering one question.',
    },
    { type: 'h2', text: 'Cut it down, then test it' },
    {
      type: 'p',
      text: 'Most first drafts are too long. Remove the greeting, the company history and anything the viewer would not miss. Then test rather than guess:',
    },
    {
      type: 'ol',
      items: [
        'Make two or three versions of the same message at different lengths, for example 15, 30 and 60 seconds.',
        'Publish or run them under the same conditions: same audience, same week, same call to action.',
        'Compare how long people watch and where they leave, then compare the business result: messages, calls, bookings or applications.',
        'Keep the length that produced results for that goal and platform, and use it as your starting point for the next video.',
      ],
    },
    {
      type: 'p',
      text: 'The best length for a Georgian audience may differ from a general rule, so your own numbers outweigh any average. Production cost grows with length and with the number of versions, so see [how much marketing video costs](/blog/marketing-video-cost) before you plan a batch. WakeUP Marketing\'s [video production service](/services/video-production) covers scripts, filming and editing of short ad videos, Reels and TikTok content and testing them in campaigns, and the [free audit](/audit) is a way to check where video fits in your current marketing.',
    },
  ],
}
