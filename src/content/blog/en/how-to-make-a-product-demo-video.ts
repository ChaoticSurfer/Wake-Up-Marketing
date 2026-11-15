import type { BlogPost } from '@/lib/blog'

export const post: BlogPost = {
  locale: 'en',
  slug: 'how-to-make-a-product-demo-video',
  title: 'How to make a product demo video: plan, record, edit, close',
  metaTitle: 'How to Make a Product Demo Video',
  description:
    'How to make a product demo video in five steps: plan, script, record the real product, edit it down and close with one call to action.',
  publishedAt: '2027-01-01T09:00:00+04:00',
  updatedAt: '2027-01-01T09:00:00+04:00',
  service: 'video',
  reviewState: 'llm_reviewed',
  body: [
    {
      type: 'p',
      text: 'To make a product demo video, decide what one viewer should be able to do or decide after watching, script the three or four tasks that prove it, record the real product doing them with clean audio, then cut everything that is setup, add captions and end on one next step. The whole job is subtraction: a demo works when it shows the result fast and stops. The steps below follow that order.',
    },
    { type: 'h2', text: 'What a demo has to do' },
    {
      type: 'p',
      text: 'Wistia separates the two formats clearly. Writing for Wistia, Meisha Bochicchio says that [“Explainer videos are great for helping viewers understand the purpose of a product”](https://wistia.com/learn/marketing/product-video-best-practices), while a demo answers a two-part question: [“What does the product do, and how does the product work?”](https://wistia.com/learn/marketing/product-video-best-practices) A demo is therefore for someone who already knows why the product exists. If your viewers do not, start with the comparison in [explainer video vs product demo](/blog/explainer-video-vs-product-demo) and come back here.',
    },
    { type: 'h2', text: 'Step 1: plan the video before opening the recorder' },
    {
      type: 'p',
      text: 'Planning is where most weak demos are lost. Settle four things in writing:',
    },
    {
      type: 'ul',
      items: [
        'The viewer: a buyer comparing options, a new customer being onboarded, or a colleague who will forward the video inside their company. Each needs different tasks.',
        'The tasks: pick the three or four jobs the viewer most wants to see done, in the order they would do them. Leave out settings and edge cases.',
        'The result: for each task, the moment that proves it worked (the report appears, the order is confirmed, the part fits).',
        'The next step: one action, such as booking a call or starting a trial.',
      ],
    },
    {
      type: 'p',
      text: 'Length follows from the number of tasks. Wistia’s State of Video data, based on [over 13 million videos uploaded to Wistia](https://wistia.com/learn/marketing/optimal-video-length), puts how-tos and product demos in a 1 to 5 minute range, which Wistia calls the sweet spot for breaking down a concept or showing how something works. The same page says that [most viewers usually drop off around the halfway point](https://wistia.com/learn/marketing/optimal-video-length), so show the result you are selling in the first half. A product with many modules is better served by one short demo per use case than one long tour. For length by platform, see [how long a marketing video should be](/blog/how-long-should-a-marketing-video-be).',
    },
    { type: 'h2', text: 'Step 2: write the script and shot list' },
    {
      type: 'p',
      text: 'Write the narration first and record the screen to fit it, not the reverse. A workable structure is an opening line that names the task the viewer will see done, the walkthrough of each task, and a close. Wistia advises making sure [the product appears early on in the video so that viewers know exactly what to expect](https://wistia.com/learn/marketing/product-video-best-practices): do not spend the first twenty seconds on a logo animation or company history.',
    },
    {
      type: 'table',
      head: ['Part', 'What goes in it', 'Rough share of the video'],
      rows: [
        ['Opening', 'The task or question, with the product already on screen', 'A few seconds'],
        ['Task 1 to 3 or 4', 'Narration of the step, the action on screen, the result that proves it', 'Most of the video'],
        ['Close', 'One sentence summing up, then the single next step', 'A few seconds'],
      ],
    },
    {
      type: 'p',
      text: 'Write in the words your customers use rather than the names of your menus. The format for a two-column script (what is said, what is shown) and spoken-length limits are in the [marketing video script template](/blog/marketing-video-script-template), so they are not repeated here. Read the narration aloud with a timer before recording; lines that look fine on paper are often too long to say.',
    },
    { type: 'h2', text: 'Step 3: record the real product' },
    {
      type: 'p',
      text: 'Show the product as customers will meet it. Wistia’s guidance on software videos warns: [“be careful not to reimagine your product too far.”](https://wistia.com/blog/software-product-video-tips) It adds that you do not want users to feel confused when the product does not match the experience shown in the video. Backdrops and callouts around the recording are fine; a stylised interface that does not exist is not.',
    },
    {
      type: 'ul',
      items: [
        'Prepare sample data first. Use a clean test account with realistic names and numbers, and never show real customer records, phone numbers or emails on screen.',
        'Close what is not part of the story: notifications, other tabs, bookmarks and chat windows. Set the screen to a size that reads on a phone.',
        'Rehearse the click path once. Every hesitation you record is a cut you will have to make.',
        'Record the voice-over in a quiet room with a plain microphone, either live while clicking or as a separate track afterwards. Muffled or noisy audio makes a demo hard to follow.',
        'For physical products or services, shoot in good light, show the product in use and keep the camera still on the moment that proves the result.',
        'Record each task as its own clip. It is easier to edit, and each clip can later stand alone.',
      ],
    },
    { type: 'h2', text: 'Step 4: edit down to the result' },
    {
      type: 'p',
      text: 'Editing a demo means removing waiting, loading and wandering. Trim the start and end of each clip, cut dead time, and speed up or jump past anything slow while keeping the result on screen at normal speed so viewers can read it. Add a zoom or a highlight where a small control matters. Keep music quiet enough that the narration is clear, or leave it out. The cut-by-cut basics are in [video editing basics for business](/blog/video-editing-basics-for-business), and the usual slips are listed in [video editing mistakes to avoid](/blog/video-editing-mistakes-to-avoid).',
    },
    {
      type: 'p',
      text: 'Add captions last. Meta’s ads guide marks video captions as [“Optional, but recommended”](https://www.facebook.com/business/ads-guide/video), and a demo that is forwarded or watched in a meeting often plays without sound. In Georgia the audience may need Georgian and English captions, so decide the languages before you edit the text.',
    },
    { type: 'h2', text: 'Step 5: close with one call to action' },
    {
      type: 'p',
      text: 'A demo that ends with a logo wastes the moment of highest interest. Say the next step in words and show it on screen: a link, a button or a phone number. One action per video; a second one splits the viewer. Match it to the stage: a viewer watching on a pricing page may be ready to book a call, while one watching in onboarding needs the next tutorial.',
    },
    { type: 'h2', text: 'Where to put the demo and how to judge it' },
    {
      type: 'p',
      text: 'Place the finished video beside the decision it supports: the product or pricing page, the sales follow-up email, the onboarding sequence. Cut a 15 to 30 second version for ads and Reels using the hooks in [short-form video hooks](/blog/short-form-video-hooks). To judge it, compare against the goal you wrote in step 1 rather than views alone: enquiries or trials after the video, the share of the video watched, and where viewers stop. If most leave before the result, move the result earlier. Re-record when the product interface changes, since a demo that no longer matches the product does harm.',
    },
    {
      type: 'p',
      text: 'WakeUP scripts, shoots and edits short videos for ads, Reels and TikTok and tests them in campaigns; see the [video production service](/services/video-production). If you are unsure which video your buyers need, start with the [free marketing audit](/audit).',
    },
  ],
}
