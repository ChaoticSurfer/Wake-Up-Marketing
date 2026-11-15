import type { BlogPost } from '@/lib/blog'

export const post: BlogPost = {
  locale: 'en',
  slug: 'captions-subtitles-for-social-videos',
  title: 'Why add subtitles to social media videos (and how to get them right)',
  metaTitle: 'Why Add Subtitles to Social Videos',
  description:
    'Why add subtitles to social media videos: many people watch with the sound off. How to caption in Georgian or English, plus the style rules to follow.',
  publishedAt: '2027-01-07T15:00:00+04:00',
  updatedAt: '2027-01-07T15:00:00+04:00',
  service: 'video',
  reviewState: 'llm_reviewed',
  body: [
    {
      type: 'p',
      text: 'Add subtitles to social media videos because many people watch with the sound off, and a video they cannot follow is a video they scroll past. Meta says ad videos "should communicate clearly without sound," and that in its internal tests adding captions raised average view duration by 12%. Captions also make your video accessible. The work is small: generate them automatically, then proofread every line.',
    },
    { type: 'h2', text: 'Why viewers need captions' },
    {
      type: 'p',
      text: 'There are three practical reasons, and only the first one is about the feed.',
    },
    {
      type: 'ul',
      items: [
        'Sound is often off, for example in a queue, on public transport or at work. Meta’s advice to advertisers is that [video ads should communicate clearly without sound, but get better or funnier with it on](https://www.facebook.com/business/news/want-to-better-video-ads-for-mobile-well-show-you-how). Its internal tests, it says, showed captions increasing video view duration by an average of 12%. That is Meta’s own figure from its own tests, so treat it as a direction, not a promise.',
        'Some viewers cannot hear the audio at all. The W3C defines captions as a synchronized visual or text alternative for both speech and non-speech audio information, and [its accessibility guidance on captions](https://www.w3.org/WAI/WCAG22/Understanding/captions-prerecorded.html) requires them for prerecorded video with sound at the basic conformance level (Level A). If your company website or campaign page has to meet accessibility standards, the same expectation applies to the video you embed there.',
        'Some people understand text better than speech. The W3C notes that [captions also help people who process written information better than audio](https://www.w3.org/WAI/media/av/captions/), which includes people watching in a second language.',
      ],
    },
    {
      type: 'p',
      text: 'For a company in Georgia there is a fourth point. Your audience may speak Georgian, Russian or English, and a caption in the language of the viewer lets one video reach more of them without filming twice.',
    },
    { type: 'h2', text: 'Captions or subtitles?' },
    {
      type: 'p',
      text: 'On social platforms the two words are used loosely. Strictly, subtitles translate or transcribe the speech, while captions also describe meaningful sounds such as music or a doorbell. For a talking-head or product video, you will mostly need the spoken words, so the difference rarely matters. What matters is the choice that follows: text that is part of the picture, or a separate file the viewer can switch off (see the last section).',
    },
    { type: 'h2', text: 'How to add captions: generate, then fix' },
    {
      type: 'ol',
      items: [
        'Record clean audio first. Automatic captions depend on how clearly the voice is recorded. A microphone near the speaker helps more than any later fix.',
        'Generate captions in the tool you edit in. Instagram’s Captions sticker, for example, [generates subtitles from the audio in your reel, lets you tap any word to edit it, and lets you choose the style and position](https://about.instagram.com/blog/tips-and-tricks/how-to-make-instagram-reels). Editing apps such as CapCut have an equivalent; see [the best video editing apps for business](/blog/best-video-editing-apps-for-business).',
        'Proofread every line against the audio. The W3C is blunt about this: automatic captions [usually need significant editing](https://www.w3.org/WAI/media/av/captions/). Check names, numbers, prices, product terms and every Georgian word.',
        'Fix the line breaks. Break lines at natural pauses, not in the middle of a phrase.',
        'Watch the finished video once on a phone with the sound off. If you can follow it, it works.',
      ],
    },
    { type: 'h2', text: 'Georgian and English: pick a language per audience' },
    {
      type: 'p',
      text: 'Support for Georgian is not the same on every tool. YouTube’s help page says [automatic captions are available for long-form videos and Shorts in Georgian](https://support.google.com/youtube/answer/6373554), and advises creators to always review automatic captions and edit any parts that were not transcribed properly. For other apps, do not assume: record one real Georgian sentence with a company name and a number in it, generate the captions and read the result before you commit to a workflow. If the tool gets Georgian wrong, type the captions yourself or have a Georgian speaker do it.',
    },
    {
      type: 'table',
      head: ['Situation', 'Caption language', 'Note'],
      rows: [
        ['Georgian speaker, customers in Georgia', 'Georgian', 'The default for local offers and services'],
        ['Georgian speaker, foreign clients or hiring', 'English', 'Add English captions rather than filming a second version'],
        ['English speaker, customers in Georgia', 'Georgian', 'Proofread by a Georgian speaker before posting'],
        ['Mixed audience', 'Two versions, tested', 'Run both and keep the one with more watch time and enquiries'],
      ],
    },
    { type: 'h2', text: 'Style and placement rules' },
    {
      type: 'p',
      text: 'These are rules of thumb from editing practice, not platform requirements. Each platform covers the bottom and the top of the screen with its own interface, which is why the exact positions differ. Captions should support the picture, not hide it. For more on safe areas and sizes, see [social media video sizes and export settings](/blog/social-media-video-sizes-and-export-settings).',
    },
    {
      type: 'ul',
      items: [
        'One or two short lines at a time, a few words each, so the eye does not leave the speaker.',
        'High contrast: light text on a dark outline or box, never on a busy background.',
        'A readable size on a small phone screen. If you have to squint, it is too small.',
        'Keep captions clear of faces, products and the interface at the top and bottom.',
        'Time each line to the speech. A line that appears late or stays too long breaks the rhythm.',
        'Use one style across your videos so your account looks consistent.',
        'Spell brand and product names exactly as you write them elsewhere.',
        'Do not caption what the picture already says in huge letters. Use on-screen text for the one phrase that matters.',
      ],
    },
    { type: 'h2', text: 'Open or closed captions' },
    {
      type: 'p',
      text: 'Open (burned-in) captions are part of the video file and show everywhere, including in messengers and on other sites where you share the file. Closed captions are a separate track the viewer can switch on and off; they are searchable and easy to correct later, but they depend on the platform supporting them. A common approach for short social videos is to burn in captions for feed platforms and upload a caption file where the platform supports one, such as on YouTube. Burned-in text cannot be corrected without re-exporting, so proofread before you export.',
    },
    { type: 'h2', text: 'Check before you post' },
    {
      type: 'ul',
      items: [
        'Does the video make sense with the sound off?',
        'Are all names, numbers and Georgian words spelled correctly?',
        'Do the captions stay clear of the platform buttons on the format you export? See [Reels editing tips](/blog/instagram-reels-editing-tips) and [Facebook video ad creative](/blog/facebook-video-ad-creative) for the same check on those formats.',
        'Does the opening still grab attention in text? Open on the point, as in [short-form video hooks](/blog/short-form-video-hooks).',
      ],
    },
    {
      type: 'p',
      text: 'If you want scripted, shot and captioned videos without building the process yourself, see WakeUP’s [video production service](/services/video-production), which covers short videos for ads, Reels and TikTok. To see how your current channels are doing before you invest in video, request the [free marketing audit](/audit).',
    },
  ],
}
