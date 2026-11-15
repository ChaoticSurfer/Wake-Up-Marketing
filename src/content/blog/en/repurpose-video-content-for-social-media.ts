import type { BlogPost } from '@/lib/blog'

export const post: BlogPost = {
  locale: 'en',
  slug: 'repurpose-video-content-for-social-media',
  title: 'How to repurpose video content for social media: one shoot, a month of posts',
  metaTitle: 'Repurpose Video Content for Social Media',
  description:
    'How to repurpose video content for social media: turn one long video or shoot into Reels, TikToks, Stories, Facebook posts and carousels.',
  publishedAt: '2027-02-05T18:00:00+04:00',
  updatedAt: '2027-02-05T18:00:00+04:00',
  service: 'content',
  reviewState: 'llm_reviewed',
  body: [
    {
      type: 'p',
      text: 'To repurpose video content for social media, transcribe the long video, mark each idea that can stand alone, and cut every idea as its own short clip with a new opening, captions and the right frame for its channel. One ten to twenty minute recording can give you several Reels or TikToks, a Stories sequence, a Facebook post, a carousel and quote graphics.',
    },
    { type: 'h2', text: 'Pick a source worth cutting' },
    {
      type: 'p',
      text: 'Not every video has several clips inside it. Good sources hold many separate points and have clear sound:',
    },
    {
      type: 'ul',
      items: [
        'An interview or talk with a founder, an expert or a customer, where each answer is a point on its own.',
        'A product demo or tour that shows several features or spaces.',
        'A shoot day (a restaurant, a factory, an event, a team) with a lot of footage beyond the main video.',
        'A webinar or recorded call with real questions from real people.',
      ],
    },
    {
      type: 'p',
      text: 'Avoid sources that rely on a single story told from start to finish, because cutting them in pieces breaks the story. If your source is an article rather than a video, use [how to repurpose content](/blog/how-to-repurpose-content), which works from text.',
    },
    { type: 'h2', text: 'The cut-down map' },
    {
      type: 'p',
      text: 'Decide the outputs before you edit. The table shows what to take from the source for each format and what to change. Lengths here are working targets; the platform limits and file settings are in our post on [video sizes and export settings](/blog/social-media-video-sizes-and-export-settings).',
    },
    {
      type: 'table',
      head: ['Output', 'Length target', 'What to take from the source', 'What changes in the edit'],
      rows: [
        ['Reel or TikTok', '20 to 45 seconds', 'One point: a claim, a mistake, a step, a customer question with its answer', 'New hook, tighter cuts, burned-in captions, 9:16 reframe'],
        ['YouTube Short', 'Same cut as the Reel', 'Your best-performing Reel cut', 'Check for stray logos and caption placement'],
        ['Stories sequence', '3 to 5 frames of 5 to 15 seconds', 'Behind-the-scenes moments and one poll or question sticker', 'Rough and informal; a link or question at the end'],
        ['Facebook video post', '1 to 3 minutes', 'A fuller version of one answer', 'Caption in text above, captions in video, upload natively'],
        ['Carousel', '5 to 8 slides', 'A numbered process or list said in the video', 'Pull the lines from the transcript, one point per slide'],
        ['Quote graphic', 'Single image', 'The strongest sentence, word for word', 'Name, role and brand mark; short enough to read in two seconds'],
        ['Audio or text post', 'A paragraph', 'The most useful answer, from the transcript', 'Rewrite for reading, do not paste speech'],
        ['Long cut', 'The whole video', 'The full recording, trimmed', 'Keep it wide (16:9) and host it where people look for depth'],
      ],
    },
    {
      type: 'p',
      text: 'The last row matters on YouTube. Google\'s help page says that [square or vertical videos up to three minutes are categorized as Shorts](https://support.google.com/youtube/answer/15424877) for videos uploaded on or after 15 October 2024, and that to keep a video from being classified that way you should use a wider aspect ratio such as 16:9. If you export a vertical cut of your long video and upload it there, expect it to be treated as a Short.',
    },
    { type: 'h2', text: 'From one recording to the clip list' },
    {
      type: 'ol',
      items: [
        'Get a transcript. Automatic transcription is fine for a first pass; correct names, numbers and Georgian words by hand.',
        'Read it and highlight every passage that makes sense without the rest. A usable clip starts with a claim or a question and ends when the point ends.',
        'Give each passage a one-line label and a job: attract new people, teach something, answer an objection, or invite an enquiry.',
        'Match each passage to an output from the map. Put your best three for short video, the numbered ones for a carousel, the sharpest sentence for a quote graphic.',
        'Cut the short clips first, each as a separate project, and add captions and a new opening line. See [short-form video hooks](/blog/short-form-video-hooks) for openings and [captions and subtitles](/blog/captions-subtitles-for-social-videos) for Georgian and English text.',
        'Name each file by idea and format, such as "price-mistake_reel_v1", so you can find it later.',
      ],
    },
    { type: 'h2', text: 'Cut each clip as its own post, not a crop' },
    {
      type: 'p',
      text: 'Resizing a long video to 9:16 and posting it is not repurposing. Wistia, a video hosting company, makes a similar point in its [guide to repurposing video](https://wistia.com/blog/repurposing-video-for-social-media): match each platform, hook viewers immediately, resize to the platform\'s frame, burn in captions, keep key elements in the safe zones and upload natively. Its author, Lisa Marinelli, puts the reason this way: "Viewers won\'t wait around for messages that take too long to land." A clip cut from the middle of a conversation often starts with "so" or "and then", which is why the opening needs rewriting.',
    },
    {
      type: 'ul',
      items: [
        'Start on the point. If the best line comes in the middle of the passage, begin there and move the set-up later or drop it.',
        'Reframe for the phone. A wide interview shot needs a closer crop on the speaker; if two people sit far apart, cut between them, or use a split screen. Keep faces away from the zones the app interface covers.',
        'Add B-roll to hide cuts and keep eyes moving. Our post on [B-roll](/blog/what-is-b-roll) lists shots you can film in one visit.',
        'Burn captions into the video, so the clip still works when it plays without sound.',
        'End on one next step, such as a question, a follow or a link. Do not copy the same call to action to every platform.',
        'Export a clean file. Instagram head Adam Mosseri said in October 2024 that Instagram tries to "not recommend Reels with logos from other apps" and that your own logo is fine ([Social Media Today](https://www.socialmediatoday.com/news/instagram-clarifies-including-your-own-logo-on-a-reel-is-ok/730852/)). So export from your editor, not from another app\'s download, and keep your own brand mark if you want one.',
      ],
    },
    {
      type: 'p',
      text: 'Choosing between a carousel and a Reel for a given idea? Our comparison of [Instagram carousels and Reels](/blog/instagram-carousel-vs-reels) goes through when each one fits.',
    },
    { type: 'h2', text: 'Release over weeks, not in one day' },
    {
      type: 'p',
      text: 'Posting all the cuts at once makes your feed repeat itself and uses your best material in a day. Spread them, and give each platform a version it has not shown yet. A simple three-week pattern for one source:',
    },
    {
      type: 'table',
      head: ['When', 'Post', 'Purpose'],
      rows: [
        ['Week 1, early', 'The strongest Reel or TikTok', 'Reach people who do not know you'],
        ['Week 1, late', 'Stories sequence and a quote graphic', 'Keep followers engaged'],
        ['Week 2, early', 'Second short clip on a different idea', 'Test a second hook'],
        ['Week 2, late', 'Carousel from the same video', 'Give people something to save'],
        ['Week 3, early', 'Facebook video post with a fuller answer', 'Reach people who follow your Page'],
        ['Week 3, late', 'Third clip, or the best clip with a new opening', 'Reuse what worked'],
      ],
    },
    {
      type: 'p',
      text: 'Put these into your calendar when you plan the shoot, not afterwards. The month-ahead method is in [batch content creation for social media](/blog/batch-content-creation-for-social-media). Change the hook and the first frame when you post the same idea again, so the repeat does not look like a repeat.',
    },
    { type: 'h2', text: 'Shoot with the cuts in mind' },
    {
      type: 'p',
      text: 'Repurposing is far easier when the recording was made for it. Before the next shoot day, check:',
    },
    {
      type: 'ul',
      items: [
        'Clean audio is the first priority. Bad sound ruins every clip cut from the video.',
        'Frame the speaker so that a vertical crop still works: centred, with space around the head, and no important text at the edges.',
        'Ask for answers in short, complete sentences, and for the speaker to restate the question in the answer. Each answer then works alone.',
        'Add a few pick-up lines: one-sentence summaries to camera that make good openings.',
        'Film B-roll and detail shots of the place, hands, product and people. Our [plan for a video shoot](/blog/how-to-plan-a-video-shoot) has a checklist.',
        'Get written permission from anyone who appears, and say you may cut the footage into short clips.',
      ],
    },
    { type: 'h2', text: 'Measure and repeat' },
    {
      type: 'p',
      text: 'After a month, list every clip with its channel, hook, views, and the actions that matter for your business: enquiries, messages, saves, and clicks. Compare the cuts that came from the same source. Often the winner is the clip with the clearest opening or the most specific point, which tells you what to look for in the next transcript. If one clip is clearly ahead and you want to put money behind it, see [how to test video ad creative on Meta](/blog/how-to-test-video-ad-creative-on-meta).',
    },
    { type: 'h2', text: 'Where WakeUP fits' },
    {
      type: 'p',
      text: 'WakeUP\'s [content creation service](/services/content-creation) covers planning, filming and editing short videos, photos, design and copy in Georgian and English. For ads, Reels and TikTok built around video, see the [video production service](/services/video-production), which scripts, shoots and edits short videos and tests them in campaigns. If you want an outside view of what you already have on hand to repurpose, the [free audit](/audit) is the place to start.',
    },
  ],
}
