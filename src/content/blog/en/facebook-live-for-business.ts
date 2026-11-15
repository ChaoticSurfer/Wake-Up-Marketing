import type { BlogPost } from '@/lib/blog'

export const post: BlogPost = {
  locale: 'en',
  slug: 'facebook-live-for-business',
  title: 'Facebook Live for business: how to plan, run and reuse a live stream',
  metaTitle: 'Facebook Live for Business',
  description:
    'Facebook Live for business: what your Page needs to go live, how to pick a topic, announce it, run it with a clear call to action and reuse the replay.',
  publishedAt: '2027-01-10T15:00:00+04:00',
  updatedAt: '2027-01-10T15:00:00+04:00',
  service: 'smm',
  reviewState: 'llm_reviewed',
  body: [
    {
      type: 'p',
      text: 'Facebook Live for business works when each stream has one topic, one announcement before it starts, one call to action during it and a plan for the replay. Check first that your Page can go live: Meta\'s developer documentation says the account must be at least 60 days old and the Page must have at least 100 followers. Then plan a stream of at least 10 minutes around something your customers already ask about.',
    },
    { type: 'h2', text: 'What you need before you can go live' },
    {
      type: 'p',
      text: 'Meta\'s [Live Video API reference](https://developers.facebook.com/docs/live-video-api/reference) lists the rules: the Facebook account must be at least 60 days old, the Page must have at least 100 followers, and a broadcast should not exceed 8 hours. Meta can change these rules, so if the Live option is missing on your Page, that is the first thing to check.',
    },
    {
      type: 'p',
      text: 'Meta\'s [best-practices page](https://developers.facebook.com/docs/live-video-api/best-practices) gives the practical setup advice: use a wired internet connection where you can, because wireless may drop the stream, and go live for at least 10 minutes. It also says your followers get a notification when your Page goes live. A phone on a tripod, a second phone or a microphone that picks up the speaker clearly, and a quiet room cover most business streams.',
    },
    { type: 'h2', text: 'Choose a topic that justifies a live format' },
    {
      type: 'p',
      text: 'Live is for things that gain from real-time questions. A pre-recorded Reel is better for a polished message; live is better when viewers can influence what happens. Strong formats for a business:',
    },
    {
      type: 'ul',
      items: [
        'Questions and answers on one subject: your most common customer questions, collected from messages and comments beforehand.',
        'A demonstration: a product in use, a service step shown start to finish, a before and after.',
        'A launch or event: a new item, a sale opening, an opening-day tour.',
        'A guest conversation: a supplier, a client who agrees to appear, or an expert in your field.',
        'A walkthrough of the place: a kitchen, a workshop, a showroom, with questions answered as you move.',
      ],
    },
    {
      type: 'p',
      text: 'Pick one theme and write three to five talking points, not a full script. If you need ideas for content that works as a stream topic, see [behind-the-scenes video ideas](/blog/behind-the-scenes-video-ideas), and for scripted video use the [marketing video script template](/blog/marketing-video-script-template).',
    },
    { type: 'h2', text: 'Announce it before you start' },
    {
      type: 'p',
      text: 'Do not rely on followers happening to be online. Post an announcement two or three days ahead with the topic, the date and time, and a reason to attend, such as "send your question in advance". Post a reminder on the day, and repeat it in your Stories and, if you have one, your email list. Choose the time from your own audience: check when your followers are usually online in your Page insights, and prefer a time when your buyers are free over a generic best time. Add the stream to your [social media content calendar](/blog/social-media-content-calendar) so it does not clash with other posts.',
    },
    { type: 'h2', text: 'Run the stream' },
    {
      type: 'ol',
      items: [
        'Open with who you are, what the stream covers and what viewers will get by staying. People join late, so repeat this every few minutes.',
        'Say your call to action early and again near the end: message the Page, visit a link, book a place, send a question. One action, not four.',
        'Read comments aloud and answer by name. Ask a team member to watch comments and reply, so the speaker does not have to look at the phone.',
        'Post the link or contact detail as a comment so people can act at once.',
        'Close by summarising the answer to the main question and what happens next.',
      ],
    },
    {
      type: 'p',
      text: 'Do not worry about small errors; a stream that is clear and answers real questions beats one that is flawless but empty. Test sound and lighting with a short private run first.',
    },
    { type: 'h2', text: 'After: reuse the replay and read the results' },
    {
      type: 'p',
      text: 'A live stream is a source of content. Check in your Page\'s video section what is saved for your recording and decide what to keep, since the exact options in the app change. Then cut the best answer into a short clip for Reels or a post, and reply to questions you did not reach. If you plan to edit the recording, [video editing basics for business](/blog/video-editing-basics-for-business) covers the first steps.',
    },
    {
      type: 'p',
      text: 'Judge the stream by what it was for. If the call to action was to message you, count conversations. If it was a launch, count orders or enquiries in the following days. Peak viewers alone is a weak measure; see [marketing KPIs](/blog/marketing-kpis) for how to tie social activity to results.',
    },
    { type: 'h2', text: 'How often to go live' },
    {
      type: 'p',
      text: 'Start with one stream a month on a fixed subject, and keep going only if it brings questions, messages or sales. Live is time-heavy, so it should earn its place next to your posts and short videos. For the wider plan, read the [social media marketing strategy](/blog/social-media-marketing-strategy) and [how to grow your Facebook business page](/blog/grow-facebook-business-page).',
    },
    {
      type: 'p',
      text: 'WakeUP\'s [social media management](/services/smm) covers Facebook and Instagram planning and paid social, and its [video production service](/services/video-production) scripts, shoots and edits short videos. If you want a review of your Page before you plan a stream, request the [free audit](/audit). Platform requirements are as of November 2026.',
    },
  ],
}
