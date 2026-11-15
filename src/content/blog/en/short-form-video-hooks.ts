import type { BlogPost } from '@/lib/blog'

export const post: BlogPost = {
  locale: 'en',
  slug: 'short-form-video-hooks',
  title: 'How to write a hook for short form video: 6 types with examples',
  metaTitle: 'How to Write a Hook for Short Video',
  description:
    'How to write a hook for short form video: six hook types, examples for different businesses and a simple test to see which opening holds viewers.',
  publishedAt: '2026-12-27T09:00:00+04:00',
  updatedAt: '2026-12-27T09:00:00+04:00',
  service: 'video',
  reviewState: 'llm_reviewed',
  body: [
    {
      type: 'p',
      text: 'To write a hook for short form video, state the one thing the viewer gets from staying, in the first one to three seconds, in words and in the picture at the same time. Pick a hook type (a result, a question, a mistake, a surprise), write it before the rest of the video, and test two versions of the opening against each other.',
    },
    { type: 'h2', text: 'What a hook has to do in the first seconds' },
    {
      type: 'p',
      text: 'A hook has one job: to give a stranger a reason not to swipe. TikTok\'s advertiser guidance says: ["Prioritize your hook in the first 6 seconds to boost engagement and increase watch time."](https://ads.tiktok.com/resources/help/article/creative-best-practices) The same page adds that you can do it "by creating suspense, surprise, or other emotions" and that you should introduce your content proposition in the first 3 seconds for better recall and awareness.',
    },
    {
      type: 'p',
      text: 'Instagram measures the same moment directly. It describes skip rate as ["the percentage of views from people who decided to skip your reel during those first 3 seconds"](https://www.socialmediatoday.com/news/instagram-adds-retention-insights-reels/758464/) (Instagram, announced August 2025). So the opening is not a matter of taste: it is a number you can look at for every video.',
    },
    {
      type: 'p',
      text: 'A good hook does three things at once. It names who the video is for or what it is about, it makes a promise the video keeps, and it shows something on screen rather than a logo or a title card. The picture and the first sentence should say the same thing.',
    },
    { type: 'h2', text: 'Six hook types you can reuse' },
    {
      type: 'table',
      head: ['Hook type', 'How it opens', 'Works best for'],
      rows: [
        ['Result first', 'Show the finished outcome, then say how it was done', 'Before and after, renovations, treatments, design work'],
        ['Question', 'Ask the exact question your customer types or says out loud', 'Services people research before buying'],
        ['Mistake or warning', '"Do not do this before you..." followed by the cost of doing it', 'Advice, B2B services, anything with a common error'],
        ['Surprising fact', 'A specific, true fact the viewer did not expect', 'Industries with myths or hidden costs'],
        ['Relatable moment', 'A short scene the viewer recognises as their own day', 'Consumer services, hospitality, retail'],
        ['Expert or insider', 'Someone who does the work says what they see every day', 'Clinics, workshops, studios, professional services'],
      ],
    },
    {
      type: 'p',
      text: 'None of these is better in general. A hook is good when it fits the offer and the audience, so keep two or three types in rotation and let the numbers decide, as the testing section below shows.',
    },
    { type: 'h2', text: 'Hook examples by type of business' },
    {
      type: 'p',
      text: 'The lines below are illustrations of how each type sounds for different businesses. They are not results from real campaigns; replace the details with true facts from your own business.',
    },
    {
      type: 'ul',
      items: [
        'Dental clinic (result first): the new smile on screen, then "This took two visits. Here is what happened in each."',
        'Restaurant (relatable moment): a group deciding where to eat for ten seconds, cut to a table, then "Next time, just book this one."',
        'Accounting or legal firm (mistake): "Three things companies get wrong when hiring their first employee," with the first mistake spoken straight away.',
        'Furniture or fit-out workshop (expert): a craftsperson holding two joints: "One of these breaks in a year. Here is how I tell."',
        'Software or IT provider (question): "Why does your team still copy data between two systems by hand?" over a screen recording.',
        'Real estate (surprising fact): a floor plan with one number circled: "This flat gains a room without a single wall moving."',
      ],
    },
    {
      type: 'p',
      text: 'Notice what they share: a concrete detail in the first sentence, no greeting and no "hi, we are". If you cannot make the first line concrete, the idea for the video is probably not ready yet.',
    },
    { type: 'h2', text: 'Write the hook before the rest' },
    {
      type: 'ol',
      items: [
        'Write the one-sentence promise of the video: what does a viewer know or have at the end that they did not have at the start?',
        'Turn it into three different openings, one each from three hook types in the table above.',
        'Pick the opening whose first frame is already interesting without sound, and put the hook on screen as text too, so it works when the sound is off.',
        'Write one bridge line that connects the hook to the body, so the video does not drop into a slow explanation after a strong start.',
        'Record the hook last if you can, with the energy of someone who knows how the video ends.',
      ],
    },
    {
      type: 'p',
      text: 'For the rest of the video, use the structure in the [marketing video script template](/blog/marketing-video-script-template), and see [how long a marketing video should be](/blog/how-long-should-a-marketing-video-be) for length by platform. For cutting the opening tighter, [Instagram Reels editing tips](/blog/instagram-reels-editing-tips) covers the editing side.',
    },
    { type: 'h2', text: 'How to test which hook holds viewers' },
    {
      type: 'p',
      text: 'Change only the opening and keep everything else the same. Film one body, then record two or three different first three seconds and publish them as separate videos a few days apart, at the same time of day. If you change the music, the length and the hook together, you will not know which one caused the difference.',
    },
    {
      type: 'p',
      text: 'Then compare the numbers that describe the opening. On Instagram, skip rate shows how many views were lost in the first 3 seconds, and the Retention chart, in Instagram\'s words, ["shows you the moments in your Reel that keep or lose your viewers\' interest"](https://www.socialmediatoday.com/news/instagram-adds-retention-insights-reels/758464/). Instagram\'s Edits app lets you [compare up to three Reels side by side](https://edits.instagram.com/blog/video-insights/) on views, watch time, follows and interactions (Instagram, 19 August 2026). The full list of Reels numbers is in [Instagram Reels for business](/blog/instagram-reels-for-business).',
    },
    {
      type: 'ul',
      items: [
        'Keep a simple sheet: date, hook type, exact first sentence, skip rate, watch time, follows or enquiries.',
        'One test is a hint, not proof. Wait until a hook type has won across several videos before you make it your default.',
        'Judge hooks against your own earlier videos, not against another account.',
        'For paid video, run the hooks as separate ads with the same audience and budget, and compare them on the platform\'s own results.',
      ],
    },
    { type: 'h2', text: 'Common ways hooks fail' },
    {
      type: 'ul',
      items: [
        'A slow start: a logo, a greeting or "so today I want to talk about" before anything useful.',
        'A hook that promises more than the video delivers. Viewers may stay for the first seconds, but the video then loses them, and the next hook you write is trusted less.',
        'Text and voice that say different things, so the viewer has to choose which one to follow.',
        'Hooks for the wrong person: a broad, clever line that attracts viewers who will never buy.',
        'Copying a format that works for a creator account when you sell a service that needs a specific buyer.',
      ],
    },
    {
      type: 'p',
      text: 'If you want a team to do this for you, WakeUP scripts, shoots and edits short videos for ads, Reels and TikTok and tests them in campaigns. Read about [video production for ads and social media](/services/video-production), or ask for a [free marketing audit](/audit) and WakeUP will look at your current videos and ads.',
    },
  ],
}
