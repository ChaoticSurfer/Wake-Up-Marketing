import type { BlogPost } from '@/lib/blog'

export const post: BlogPost = {
  locale: 'en',
  slug: 'ai-video-for-marketing',
  title: 'AI video generator for marketing: where it fits in your workflow and where it does not',
  metaTitle: 'AI Video Generator for Marketing',
  description:
    'An AI video generator for marketing speeds up drafts, explainers and variants. See the workflow, its limits, and when filmed footage or a crew is better.',
  publishedAt: '2026-12-18T09:00:00+04:00',
  updatedAt: '2026-12-18T09:00:00+04:00',
  service: 'video',
  reviewState: 'llm_reviewed',
  body: [
    {
      type: 'p',
      text: 'An AI video generator for marketing is best used for the parts of video work that are repetitive: draft cuts, explainers with a presenter avatar, b-roll, and format variants of one idea. It is weaker where viewers need to believe a real person, product or place. Use it inside a clear workflow (brief, script, generate, edit), and film the moments that carry trust.',
    },
    { type: 'h2', text: 'The workflow: brief, script, generate, edit' },
    {
      type: 'p',
      text: 'Guides on AI video from [Coursera](https://www.coursera.org/articles/how-to-use-ai-to-create-videos) and [Panopto](https://www.panopto.com/blog/how-to-use-an-ai-marketing-video-generator/) follow a similar order: set the goal, write the script, pick a tool, generate and refine, then export. The useful question for a company is which of those steps a tool should do and which a person should keep.',
    },
    {
      type: 'ol',
      items: [
        'Brief (person). One audience, one offer, one next step. A tool cannot know which of your services is worth promoting this month, or what your customers keep asking.',
        'Script (person, with AI help). A text assistant can produce a first draft, but someone who knows the product should cut it to one idea and check every claim. Keep it short: see [how long a marketing video should be](/blog/how-long-should-a-marketing-video-be).',
        'Generate (tool). Avatar presenters, stock-style b-roll, animated text, background music and voiceover are where the time saving is.',
        'Edit (person). Trim, fix the first three seconds, add captions, check names, prices and spelling, and export each size you need. Subtitles in Georgian are worth testing before you pay for a plan: try one real sentence and read the result.',
      ],
    },
    { type: 'h2', text: 'What AI video does well' },
    {
      type: 'ul',
      items: [
        'Explainers and tutorials. Coursera calls AI video "a solid option for quick summaries and tutorials".',
        'Drafts and storyboards. A rough generated version shows a team what the finished video could be before anyone books a shoot.',
        'Variants. One approved script can become several lengths, languages or hooks to test in ads.',
        'Internal and training video, where a plain presenter is acceptable and speed matters more than polish.',
      ],
    },
    { type: 'h2', text: 'Where filmed footage still wins' },
    {
      type: 'table',
      head: ['Need', 'AI-generated video', 'Filmed video'],
      rows: [
        ['Show your real product, premises or team', 'Cannot show what it has not seen; results may look generic', 'Shows the actual thing'],
        ['Customer stories and testimonials', 'Not credible if the speaker is synthetic', 'A real customer on camera'],
        ['Founder or expert credibility', 'An avatar is not a person viewers can check', 'A named person speaking'],
        ['Quick explainer or how-to', 'Fast to redo', 'Slower to reshoot if the offer changes'],
        ['Many sizes and language versions', 'Easy to regenerate', 'Needs planned framing and editing'],
        ['Brand look and feel', 'Depends on the tool; hard to keep consistent', 'Controlled by direction, lighting and edit'],
      ],
    },
    {
      type: 'p',
      text: 'Coursera also says AI is not considered to produce the same level of content as a professional documentary filmmaker, and that generative AI may not produce exactly the images or videos you want. Treat that as a reason to check each output rather than publish it as it comes.',
    },
    { type: 'h2', text: 'What the tools list for plans' },
    {
      type: 'p',
      text: 'Tools differ in what they make. HeyGen centres on presenter avatars; Runway centres on generating and editing clips from prompts. Plans below are as listed on each vendor\'s pricing page in November 2026, in USD, billed monthly unless noted. Prices and limits change, so check the page before you buy.',
    },
    {
      type: 'table',
      head: ['Tool', 'Plan', 'Monthly price', 'What the page lists'],
      rows: [
        ['[HeyGen](https://heygen.com/pricing)', 'Free', '$0', 'Videos up to 1 minute, watermarked'],
        ['HeyGen', 'Creator', '$29', 'Videos up to 30 minutes, 600 credits a month, branding removed'],
        ['HeyGen', 'Business', '$149 plus $20 per seat', 'Videos up to 60 minutes, 1,500 credits a month'],
        ['[Runway](https://runway.com/pricing)', 'Free', '$0', '125 one-time credits'],
        ['Runway', 'Standard', '$15 ($12 billed annually)', '625 credits a month, no watermarks'],
        ['Runway', 'Pro', '$35 ($28 billed annually)', '2,250 credits a month'],
      ],
    },
    {
      type: 'p',
      text: 'Credits run out faster than a monthly price suggests, because every retry uses some. Test with one real piece of work on a free plan before choosing, and read the vendor\'s terms on commercial use, which the pricing pages above do not cover.',
    },
    { type: 'h2', text: 'Disclosure before you publish' },
    {
      type: 'p',
      text: 'Platforms are setting rules for synthetic media. YouTube says: "We require creators to disclose AI-generated or altered content that seems realistic." Its [help page on altered or synthetic content](https://support.google.com/youtube/answer/14328491) lists what needs a label, such as a real person shown saying something they did not say, or a realistic scene that never happened. It does not require a label for minor edits such as captions, upscaling or audio repair.',
    },
    {
      type: 'p',
      text: 'For marketing the practical rule is simple: never put a realistic synthetic person in a testimonial or a claim about results, and check the current rules of each platform where you run the video before you publish.',
    },
    { type: 'h2', text: 'When to hire a production crew' },
    {
      type: 'ul',
      items: [
        'The video must show your real product, site or people, as in a brand film, a customer story or a service walk-through.',
        'It will run as paid advertising where the first seconds decide the result, and you want hooks written and tested rather than generated once.',
        'You need a steady monthly flow of Reels and TikTok that look like one brand, not like separate tool outputs.',
        'The cost of a weak video (a lost tender, a poor first impression with a large client) is higher than the cost of a shoot. For the price side, see [what marketing video costs](/blog/marketing-video-cost).',
      ],
    },
    {
      type: 'p',
      text: 'The two work well together: AI for drafts, variants and explainers, and filmed footage for the moments that carry trust. WakeUP scripts, shoots and edits short videos for ads, Reels and TikTok and tests them in campaigns; see the [video production service](/services/video-production). If you already have videos and are unsure what to change, a [free marketing audit](/audit) is a place to start, and [Instagram Reels for business](/blog/instagram-reels-for-business) covers what to post once they are made.',
    },
  ],
}
