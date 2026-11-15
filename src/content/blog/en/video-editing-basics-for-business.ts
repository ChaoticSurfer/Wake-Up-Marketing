import type { BlogPost } from '@/lib/blog'

export const post: BlogPost = {
  locale: 'en',
  slug: 'video-editing-basics-for-business',
  title: 'Video editing basics for beginners: the six edits business video needs',
  metaTitle: 'Video Editing Basics for Beginners',
  description:
    'Video editing basics for beginners in business: six core edits (trim, cut, pace, sound, text, colour) and a one-hour checklist for short videos.',
  publishedAt: '2026-12-21T15:00:00+04:00',
  updatedAt: '2026-12-21T15:00:00+04:00',
  service: 'video',
  reviewState: 'llm_reviewed',
  body: [
    {
      type: 'p',
      text: 'Video editing basics for beginners come down to six edits, done in this order: trim every clip, cut on action and cover jump cuts, set the pace, balance the sound, add text and captions, and fix exposure and colour. For a 30 to 60 second business video, a person who has never edited can do all six in about an hour with any editing app.',
    },
    {
      type: 'p',
      text: 'This guide covers only the editing step. For writing the video before it is filmed, see the [video script template](/blog/marketing-video-script-template); for choosing an app, see [the best video editing apps for business](/blog/best-video-editing-apps-for-business).',
    },
    { type: 'h2', text: 'Set up before the first cut' },
    {
      type: 'p',
      text: 'Ten minutes of tidiness saves an hour of searching. Wistia’s guide to editing business video suggests a project folder with a separate [“Footage” subfolder for raw clips](https://wistia.com/blog/editing-your-business-video), and not moving or deleting the original files until the project is finished, because the editing software links to them. Copy the clips from the phone or card, rename the ones you plan to use, and keep a second copy.',
    },
    {
      type: 'p',
      text: 'Then watch all the footage once without editing. Mark the best take of each line or shot. Assembling the video from those takes in script order is your rough cut, and every edit below happens on top of it.',
    },
    { type: 'h2', text: 'Edit 1: trim the head and tail of every clip' },
    {
      type: 'p',
      text: 'Wistia’s advice is plain: [“you’ll want to trim the beginning and end of each of the clips you arranged in the timeline.”](https://wistia.com/blog/editing-your-business-video) People pause before they speak and after they finish, and a camera records both. Remove the lead-in (“okay, ready”), the silence at the end and any false start. Trim each clip so it starts a hair before the first word and ends right after the last.',
    },
    {
      type: 'p',
      text: 'This single edit makes most beginner videos feel more professional, because the video then sounds like a conversation instead of a recording.',
    },
    { type: 'h2', text: 'Edit 2: cut on action and cover jump cuts' },
    {
      type: 'p',
      text: 'When you remove a mistake from the middle of a talking clip, the picture jumps. That is called a jump cut, and a few are fine in short business video. To make them less obvious, cut when something moves (a hand raised, a door opening, a product turned) or between sentences, not in the middle of a word.',
    },
    {
      type: 'p',
      text: 'The other fix is cover footage. Wistia recommends that you [“Use B-roll to help tell your story visually and hide any jump cuts or voiceover sections in your video.”](https://wistia.com/blog/editing-your-business-video) B-roll is any extra footage: the product, the workplace, the hands doing the work. Put it on the track above the main clip and let the speaker’s voice carry on underneath.',
    },
    {
      type: 'p',
      text: 'That overlap has names. Adobe defines a J cut as [“the next scene’s audio plays before the image changes”](https://www.adobe.com/creativecloud/video/discover/j-cut-and-l-cut.html) and an L cut as one where [“the audio from the preceding scene carries over, and then the visuals shift.”](https://www.adobe.com/creativecloud/video/discover/j-cut-and-l-cut.html) You do not need the terms to use the trick: letting sound start slightly before or end slightly after the picture changes makes the cut feel smooth.',
    },
    { type: 'h2', text: 'Edit 3: set the pace' },
    {
      type: 'p',
      text: 'Pace is how long each shot stays on screen. Film-school guidance such as the [Los Angeles Film School’s editing tips](https://www.lafilm.edu/blog/editing-tips-for-beginners/) describes shorter cuts for tension and longer ones for calm moments. For business video that translates to a simple rule: speed up where the viewer only needs to understand something, slow down where they need to look at the result.',
    },
    {
      type: 'ul',
      items: [
        'Tighten every pause until the speech sounds natural but never breathless.',
        'Show the product or result for long enough to see it clearly, usually a few seconds.',
        'End on the point. If the video has a call to action, the last shot is that call to action, not a fade-out.',
        'Watch the cut once on a phone at normal size. If you lose interest at any moment, cut or cover it.',
      ],
    },
    {
      type: 'p',
      text: 'The order of passes and the first-seconds rule for Instagram are in [Instagram Reels editing tips](/blog/instagram-reels-editing-tips), so they are not repeated here.',
    },
    { type: 'h2', text: 'Edit 4: balance the sound' },
    {
      type: 'p',
      text: 'Viewers forgive an ordinary picture and leave when they cannot hear the speaker. Wistia’s rule for music is to [“adjust the volume of the music track according to the volume of your narrative.”](https://wistia.com/blog/editing-your-business-video) In practice: voice first, music clearly below it, no sudden jumps between clips recorded on different days.',
    },
    {
      type: 'ul',
      items: [
        'Level the clips: if one is louder than the next, bring them close, then listen back to back.',
        'Lower the music under speech and let it rise only when nobody is talking.',
        'Cut out coughs, loud clicks and noise between sentences.',
        'Listen on earphones and on the phone speaker before you export.',
      ],
    },
    {
      type: 'p',
      text: 'Loudness targets differ by platform and by app, and the figures that circulate disagree, so check the publishing platform’s own export guidance rather than relying on a number from a blog. A better fix for poor sound is often better recording; if that is your problem, a microphone is the first purchase.',
    },
    { type: 'h2', text: 'Edit 5: add text and captions' },
    {
      type: 'p',
      text: 'Add text last, after the cut is final, so it never has to be moved. Meta’s ads guide lists video captions as [“Optional, but recommended”](https://www.facebook.com/business/ads-guide/video) for Facebook Feed video ads, and the same habit helps wherever a viewer may watch without sound. Use text for three things only: the opening line, the key point or number, and the next step.',
    },
    {
      type: 'ul',
      items: [
        'Keep each line short enough to read once in the time it is on screen.',
        'Proofread names, numbers, brands and any Georgian text, because automatic captions make mistakes there.',
        'Keep text clear of the edges and of faces.',
        'Use one font and one style across the whole video.',
      ],
    },
    {
      type: 'p',
      text: 'Language choices for captions are discussed in [video marketing for small business](/blog/video-marketing-for-small-business).',
    },
    { type: 'h2', text: 'Edit 6: fix exposure and colour' },
    {
      type: 'p',
      text: 'Colour work for a beginner is correction, not style. Brighten clips that are dark, and tone down any that are too bright. Make sure white surfaces look white and skin looks natural. Then match the clips so a shot filmed in the morning does not look different from one filmed in the afternoon. Most editing apps have a one-tap auto-fix; use it as a starting point and check the result by eye. Add a look or filter only after the footage is consistent, and apply the same look to every clip.',
    },
    { type: 'h2', text: 'The one-hour edit checklist' },
    {
      type: 'table',
      head: ['Step', 'Suggested time', 'Pass if'],
      rows: [
        ['Organise and review footage', '10 minutes', 'Originals backed up, best takes marked'],
        ['Rough cut and trim', '15 minutes', 'No dead air at the start or end of any clip'],
        ['Cover jump cuts, set pace', '15 minutes', 'Nothing on screen feels stalled'],
        ['Balance sound', '10 minutes', 'Voice clear over music on earphones and speaker'],
        ['Text, captions, colour', '10 minutes', 'Text correct and readable, clips match in look'],
      ],
    },
    {
      type: 'p',
      text: 'Before exporting, make a proof and show it to someone who has not seen the video. Wistia suggests showing your video to a friend or colleague before release and watching and listening to it on different devices with different speakers. If they cannot say in one sentence what the video wants them to do, fix the first and last ten seconds.',
    },
    { type: 'h2', text: 'When editing should leave your desk' },
    {
      type: 'p',
      text: 'An hour is realistic for one short video. It is not realistic for a weekly stream of ads, Reels and cut-downs in several formats. WakeUP scripts, shoots and edits short videos for ads, Reels and TikTok and tests them in campaigns; see the [video production service](/services/video-production), and [how much a marketing video costs](/blog/marketing-video-cost) for how production is priced. If you are not sure what is holding your current videos back, the [free marketing audit](/audit) is a place to start.',
    },
  ],
}
