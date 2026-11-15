import type { BlogPost } from '@/lib/blog'

export const post: BlogPost = {
  locale: 'en',
  slug: 'facebook-video-ad-creative',
  title: 'Facebook video ads creative best practices: hook, sound and format',
  metaTitle: 'Facebook Video Ads Creative Tips',
  description:
    'Facebook video ads creative best practices: open with the point, make it work without sound, fit each placement and test one change at a time.',
  publishedAt: '2026-12-25T09:00:00+04:00',
  updatedAt: '2026-12-25T09:00:00+04:00',
  service: 'video',
  reviewState: 'llm_reviewed',
  body: [
    {
      type: 'p',
      text: 'The best practices for Facebook video ads creative come down to four things: say the point in the first three seconds, make the video clear with the sound off, shape it for the placement where it will run, and keep it as short as the message allows. Meta\'s advice on mobile video ads is that they should "communicate clearly without sound" and get better with sound on. The rest of this guide shows how to apply that.',
    },
    {
      type: 'p',
      text: 'This post covers the video itself. For campaign setup, see [how to run Facebook ads](/blog/how-to-run-facebook-ads), and for the numbers to read afterwards, [Facebook ads metrics](/blog/facebook-ads-metrics).',
    },
    { type: 'h2', text: 'Open with the point' },
    {
      type: 'p',
      text: 'Nobody chose to watch your ad, so the first seconds decide whether they see the rest. Meta states that [65% of people who watch the first three seconds of a video will watch for at least ten seconds](https://www.facebook.com/business/news/updated-features-for-video-ads). That figure is Meta\'s own, from a page that does not say who measured it or when, so read it as direction, not as a benchmark.',
    },
    {
      type: 'p',
      text: 'What goes into those three seconds:',
    },
    {
      type: 'ul',
      items: [
        'The problem or the result, shown or said at once. "Your deliveries arrive a day late" beats a logo animation.',
        'A person or a product in motion, not a still title card.',
        'The brand visible early, in a way that does not feel like a bumper.',
        'One idea. If the video cannot be summed up in a sentence, split it into two ads.',
      ],
    },
    {
      type: 'p',
      text: 'Write the opening before the rest. The structure in the [marketing video script template](/blog/marketing-video-script-template) works well here: hook, one benefit, proof, one action.',
    },
    { type: 'h2', text: 'Design for sound off, improve with sound on' },
    {
      type: 'p',
      text: 'Many people watch with the sound off, and a video that depends on speech will fail them. Meta reports that in one study of Facebook video ads, [41% of videos were basically meaningless without sound](https://www.facebook.com/business/news/updated-features-for-video-ads). The page does not name the study or give a date, so treat the number as an alert, not as a rule.',
    },
    {
      type: 'ul',
      items: [
        'Add captions. Meta says that in internal tests, [adding captions increased video view duration by an average of 12%](https://www.facebook.com/business/news/want-to-better-video-ads-for-mobile-well-show-you-how). The Feed specification in the [Meta ads guide](https://www.facebook.com/business/ads-guide/video) lists captions as "optional, but recommended".',
        'Put the key words on screen, large enough to read on a phone, and write them in the language your viewers read.',
        'Show the product doing something, so the picture tells the story.',
        'Then add sound that helps: music with a beat, a clear voice, a sound that marks the action.',
      ],
    },
    { type: 'h2', text: 'One video, several placements' },
    {
      type: 'p',
      text: 'A Facebook video ad can run in Feed, Stories, Reels, in-stream and more, and the frame is different in each. Meta\'s ads guide lists placements across Facebook, Instagram, Messenger and Audience Network. For Feed it lists a 4:5 ratio at 1440 x 1800 pixels, and Meta\'s Reels guidance favours vertical video. Start from the placement that will take most of your budget.',
    },
    {
      type: 'table',
      head: ['Placement', 'What Meta documents', 'What it means for the creative'],
      rows: [
        [
          'Feed',
          '4:5 ratio, 1440 x 1800 pixels, 1 second to 241 minutes, captions optional but recommended',
          'Frame for a vertical phone screen; captions on; the point in the first seconds',
        ],
        [
          'Reels',
          'Key messages in the safe zone, clear audio and vertical video',
          'Shoot vertical (9:16), keep text away from the edges where the interface covers it, record clean audio',
        ],
        [
          'In-stream',
          'Plays within publisher and creator videos on Facebook, mainly as mid-roll',
          'Viewers are mid-video: lead with the benefit, expect distraction',
        ],
      ],
    },
    {
      type: 'p',
      text: 'On Reels, Meta published a result worth knowing, with a caveat. Campaigns that used 9:16 video with audio and key messages in the safe zone had [34.5% lower cost per result compared to image ads](https://www.facebook.com/business/ads/facebook-instagram-reels-ads), in what Meta describes as a global meta-analysis of 15 split tests of Reels-only campaigns. That is Meta\'s test, run in Meta\'s auctions, and it does not promise the same gap for your account. It does suggest that a proper vertical video is worth the effort over a repurposed image.',
    },
    {
      type: 'p',
      text: 'If you plan to use one cut everywhere, shoot wide enough that you can crop to both 4:5 and 9:16, and keep titles inside a central area. For vertical editing habits see [Instagram Reels editing tips](/blog/instagram-reels-editing-tips) and [Instagram Reels for business](/blog/instagram-reels-for-business), since the Reels placement is shared.',
    },
    { type: 'h2', text: 'How long should the video be' },
    {
      type: 'p',
      text: 'Meta\'s [video ad format page](https://www.facebook.com/business/ads/video-ad-format) says, about its in-stream ads, "we generally recommend a 15 second maximum", while noting that in-stream ads can run from five seconds to ten minutes. Its Feed specification gives only the technical limit and no recommended length. So the platform\'s pointer for in-stream ads is short, and the right length for you is the shortest one that delivers the hook, the benefit and the action.',
    },
    {
      type: 'ul',
      items: [
        'Cold audience, one simple offer: aim near Meta\'s 15 seconds.',
        'A service that needs explaining, or a customer story: longer may work, if the first seconds earn it.',
        'Always cut anything that does not change what the viewer does next.',
      ],
    },
    {
      type: 'p',
      text: 'Our guide on [how long a marketing video should be](/blog/how-long-should-a-marketing-video-be) covers other platforms and goals.',
    },
    { type: 'h2', text: 'Test one change at a time' },
    {
      type: 'p',
      text: 'Creative that works for one company may fall flat for another, so build a small test. Keep the offer and audience the same and change one element per version.',
    },
    {
      type: 'ol',
      items: [
        'Make two or three versions that differ only in the first three seconds.',
        'Run them together in the same ad set, with the same budget, for long enough to compare.',
        'Compare how many people stay and act: the share who watch past the opening, the cost per lead or sale, not likes.',
        'Keep the winner, then test the next element: captions, length or the closing call to action.',
        'Retire a video when results fall, and replace it with a variation, not a copy.',
      ],
    },
    {
      type: 'p',
      text: 'Check mistakes that are cheap to avoid in [video editing mistakes to avoid](/blog/video-editing-mistakes-to-avoid) before you publish. If you would rather not produce the videos yourself, WakeUP\'s [video production](/services/video-production) service scripts, shoots and edits short videos for ads, Reels and TikTok and tests them in campaigns. The [free marketing audit](/audit) is a good starting point if you are not sure what your ads need.',
    },
  ],
}
