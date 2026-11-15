import type { BlogPost } from '@/lib/blog'

export const post: BlogPost = {
  locale: 'en',
  slug: 'video-thumbnails-and-reel-covers',
  title: 'Video thumbnail best practices: YouTube thumbnails and Instagram Reel covers',
  metaTitle: 'Video Thumbnail Best Practices',
  description:
    'Video thumbnail best practices for YouTube and Instagram Reel covers: sizes, design rules that earn the click, grid fit and how to check what works.',
  publishedAt: '2026-12-27T18:00:00+04:00',
  updatedAt: '2026-12-27T18:00:00+04:00',
  service: 'video',
  reviewState: 'llm_reviewed',
  body: [
    {
      type: 'p',
      text: 'Video thumbnail best practices come down to four things: show one clear subject, keep any text to a few large words, make it readable when small, and promise only what the video delivers. Use the platform\'s recommended size (16:9 for YouTube, 9:16 for Shorts and Reel covers), and check how it looks in the feed and on your profile before publishing.',
    },
    { type: 'h2', text: 'What a thumbnail or cover has to do' },
    {
      type: 'p',
      text: 'A thumbnail is the only part of your video a person sees before deciding to watch. On YouTube it appears in search results, suggested videos and on your channel page. On Instagram the cover shows on your profile grid and in the Reels tab. In both places it competes with many other pictures, so its job is narrow: say what the video is about, fast, to the right person.',
    },
    {
      type: 'p',
      text: 'For a business there is a second job. A row of covers on your profile is also how a visitor judges you quickly. Covers that look like they belong together make the account look more consistent.',
    },
    { type: 'h2', text: 'Specs for YouTube and Reels' },
    {
      type: 'table',
      head: ['Platform', 'Recommended size and ratio', 'Notes'],
      rows: [
        ['YouTube video', '3840 x 2160 px, 16:9, minimum width 640 px, JPG or PNG', 'Custom thumbnails need a verified account'],
        ['YouTube Shorts', '2160 x 3840 px, 9:16, minimum height 640 px, JPG or PNG', 'Custom Shorts thumbnails can only be added in YouTube Studio on a computer'],
        ['Instagram Reels', '9:16 recommended', 'Other ratios are cropped to the middle 9:16 area'],
      ],
    },
    {
      type: 'p',
      text: 'The YouTube figures are from [YouTube Help on custom thumbnails](https://support.google.com/youtube/answer/72431), and the file size limits there differ between mobile and desktop, so check the page when you upload. For Instagram, Meta\'s developer documentation says it recommends 9:16 for cover images "to avoid cropping or blank space", and that for other ratios it uses the [middle-most 9:16 rectangle](https://developers.facebook.com/docs/instagram-platform/instagram-graph-api/reference/ig-user/media). Specs change, so treat these as of November 2026.',
    },
    { type: 'h2', text: 'Design rules that get the click' },
    {
      type: 'ul',
      items: [
        'One subject. A face, a finished product or one object, not a collage. YouTube\'s own thumbnail advice says [your thumbnail should look good either scaled small or large](https://blog.youtube/news-and-events/thumbnails-your-videos-billboard-on), and that faces engage viewers.',
        'Show the result, not the process. The same YouTube post says finished products work better than process shots: show the cake, not the batter.',
        'A few large words at most, high contrast, and not repeating the title word for word. If the video is a Reel, the caption and opening line already carry the detail.',
        'Strong contrast between subject and background, so it still reads as a small square on a phone.',
        'Keep important things away from the edges, because covers are cropped differently in different places.',
        'Use your brand colours and one font consistently, so people recognise your videos before reading them.',
        'Give it a reason to be curious. A question, an unfinished result or a number works better than a logo.',
      ],
    },
    {
      type: 'p',
      text: 'The first seconds of the video and the thumbnail should make one promise together. For the opening lines, see [how to write a hook for short form video](/blog/short-form-video-hooks).',
    },
    { type: 'h2', text: 'Making a Reel cover that works in the grid' },
    {
      type: 'p',
      text: 'The Reel cover has to work twice: full-screen in the Reels tab and cropped on your profile grid. When you edit a cover in Instagram, the app lets you choose a frame or upload an image from your camera roll, add text, and then adjust it in a Profile grid preview ([Hootsuite\'s walkthrough](https://blog.hootsuite.com/instagram-reels-cover/) shows each step). Use that preview every time, because the grid crop can cut text off.',
    },
    {
      type: 'ol',
      items: [
        'Design the cover as a 9:16 image and keep the subject and words in the centre.',
        'Pick a frame from the video where the subject is sharp, or make a still image for the cover.',
        'Open the Profile grid preview and move the image until the key words are fully visible.',
        'Check the cover next to the three covers before and after it. If it looks like it belongs to another account, change it.',
        'On a published Reel you can change the cover later, so a cover that is not working can be replaced.',
      ],
    },
    {
      type: 'p',
      text: 'Pick one layout for the account: for instance, the subject on the left, a short title on the right, and your brand colour as the background. Variety within a layout is good; changing the layout every week is not.',
    },
    { type: 'h2', text: 'Keep the promise' },
    {
      type: 'p',
      text: 'A cover that exaggerates gets clicks and loses viewers within seconds. YouTube warns about this directly: ["Misleading thumbnails lead to poor audience engagement and will hurt your channel’s performance in the long run."](https://blog.youtube/news-and-events/thumbnails-your-videos-billboard-on) (YouTube blog, December 2011.) Show something that actually happens in the video, and use text that the first seconds confirm.',
    },
    { type: 'h2', text: 'Test and review' },
    {
      type: 'p',
      text: 'On YouTube, [YouTube Help suggests](https://support.google.com/youtube/answer/12340300) checking click-through rate in YouTube Analytics, including the rate on Home and Suggested in the first 24 hours after publication, and experimenting with updating the thumbnails of older videos. Change only the thumbnail so you know what caused the difference.',
    },
    {
      type: 'ul',
      items: [
        'Keep a simple sheet with the video, the cover style, and the numbers before and after a change.',
        'Compare with your own earlier videos on the same topic rather than other channels.',
        'On Instagram, compare cover styles by watching views and profile visits across several Reels, not one.',
        'Review a month of covers together. If you cannot tell what each one says in a second, simplify.',
      ],
    },
    {
      type: 'p',
      text: 'Cover design is easier when the video is planned for it, since the frame you need has to be filmed. See [Instagram Reels for business](/blog/instagram-reels-for-business) for the wider Reels basics, and [Instagram Reels editing tips](/blog/instagram-reels-editing-tips) for the cut itself. If you want a team to plan, shoot and edit videos with covers and thumbnails in mind, WakeUP does this for ads, Reels and TikTok: read about [video production](/services/video-production) or ask for a [free marketing audit](/audit).',
    },
  ],
}
