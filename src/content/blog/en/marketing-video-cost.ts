import type { BlogPost } from '@/lib/blog'

export const post: BlogPost = {
  locale: 'en',
  slug: 'marketing-video-cost',
  title: 'How much does a marketing video cost? What drives the price and how to scope a brief',
  metaTitle: 'Marketing Video Cost: What Drives Price',
  description:
    'How much does a marketing video cost? Price follows crew, shoot days, locations, talent, editing, music and versions. How to scope a brief.',
  publishedAt: '2026-12-12T09:00:00+04:00',
  updatedAt: '2026-12-12T09:00:00+04:00',
  service: 'video',
  reviewState: 'llm_reviewed',
  body: [
    {
      type: 'p',
      text: 'How much does a marketing video cost? It depends less on length than on how many people, days, places and versions the video needs. Published US guides put outsourced marketing video anywhere from about $1,200 to $50,000, a spread that mostly reflects crew size, shoot days, locations, editing and effects. Your price comes from scope, so define scope before you ask for quotes.',
    },
    { type: 'h2', text: 'What published price ranges say, and what they do not' },
    {
      type: 'p',
      text: 'Most public figures come from production companies, who have an interest in how budgets look. Treat them as orders of magnitude from the US market, not as quotes for Georgia. A [guide by the production company Vidico, dated 27 May 2026](https://vidico.com/news/how-much-does-a-marketing-video-cost/), lists $1,000 to $3,000 per finished minute for a freelancer and $3,000 to $20,000 or more per finished minute for an agency (its FAQ gives up to $10,000 for professional agency work). A [guide by the marketing agency Lean Labs](https://www.leanlabs.com/blog/how-much-does-marketing-video-production-cost), published in 2022 and updated in 2026, gives $1,200 (basic) to $50,000 (premium) for outsourced video and a typical project of four to five days under $10,000. Neither dates its individual prices, and the two do not agree. Prices change, so use these only to tell whether a quote is in a plausible range.',
    },
    {
      type: 'p',
      text: 'Per-minute rates also mislead. A 30-second ad shot on two locations with actors can cost more than a three-minute talking-head interview in one room. What you pay for is the work behind the footage.',
    },
    { type: 'h2', text: 'The line items behind the price' },
    {
      type: 'p',
      text: 'Vidico splits a budget into three phases: pre-production at 20 to 25 percent, filming at 40 to 50 percent and post-production at 25 to 35 percent. That is one company\'s rule of thumb, but it shows where the money goes. Hourly and daily rates it lists for the US market:',
    },
    {
      type: 'table',
      head: ['Phase', 'Item', 'Range listed by Vidico (US, 2026)'],
      rows: [
        ['Pre-production', 'Script writing', '$50 to $150 per hour'],
        ['Pre-production', 'Concept development and storyboarding', '$500 to $3,000'],
        ['Pre-production', 'Location scouting and permits', '$100 to $2,000 or more'],
        ['Pre-production', 'On-screen actors', '$50 to $500 per day'],
        ['Filming', 'Camera operators and crew', '$25 to $75 per hour per person'],
        ['Filming', 'Camera and lighting package', '$500 to $3,000 per day'],
        ['Post-production', 'Video editing', '$30 to $150 per hour'],
        ['Post-production', 'Motion graphics and titles', '$250 to $1,500 per day'],
        ['Post-production', 'Licensed or royalty-free music', '$50 to $500 per track'],
      ],
    },
    {
      type: 'p',
      text: 'For a sense of what skilled labour costs in one market, the US Bureau of Labor Statistics reports [a median annual wage of $74,990 for television, video and film camera operators and $75,420 for film and video editors in May 2025](https://www.bls.gov/ooh/media-and-communication/film-and-video-editors-and-camera-operators.htm). That is employment pay in the US, not a freelance rate, and not a Georgian figure.',
    },
    { type: 'h2', text: 'Crew, days, locations and talent' },
    {
      type: 'p',
      text: 'On set, cost is time multiplied by people. Vidico puts it this way: "A single-location shoot with one camera operator costs a fraction of a multi-location production with a full crew." Four things move the number most:',
    },
    {
      type: 'ul',
      items: [
        'Shoot days. Every extra day adds crew, equipment and often travel. Lean Labs\' example is a $1,200 studio day over five days, which already makes $6,000 before editing.',
        'Locations. Each new place adds travel time, setup, permits and fees. Shooting several short videos in one location on one day is usually a cheaper way to get more finished videos.',
        'Crew size. A camera operator and a sound person is a different budget from a director, producer, lighting team and make-up. Ask which roles the quote actually includes.',
        'Talent. Your own employees cost nothing extra but need time and direction. Actors, voice-over and presenters add casting, fees and sometimes usage terms.',
      ],
    },
    { type: 'h2', text: 'Editing, motion graphics and music' },
    {
      type: 'p',
      text: 'Post-production is where a simple shoot becomes an expensive video. A straight cut of an interview is quick. Animated titles, charts, product animation, colour grading and sound mixing each add hours. Ask whether grading and audio are in the editing price or charged separately, and how many rounds of revisions are included. Lean Labs also lists stock footage by the second and transcription by the minute as extras.',
    },
    {
      type: 'p',
      text: 'Music is easy to overlook. A track that is fine for a personal video may not cover an advertisement. The pricing page of the music service Epidemic Sound states in November 2026 that its music can be used for ad campaigns on its Pro or Enterprise plans, and does not list its Creator plan for ads. Check the licence for every track and platform before you publish, and ask the producer to put in writing who holds it.',
    },
    { type: 'h2', text: 'Versions: one shoot, many formats' },
    {
      type: 'p',
      text: 'One film rarely fits every place it will run. A vertical 9:16 ad, a 16:9 version for the website and a short cut-down for a feed need different framing and edits. [TikTok\'s ad specifications](https://ads.tiktok.com/help/article/video-ads-specifications) list vertical 9:16 as recommended for non-Spark video ads, at least 540 x 960 px, up to 500 MB and up to 10 minutes. Other platforms set their own rules, and they change. Decide before the shoot which versions you need, so the camera operator frames for the crop. Adding Georgian and English subtitles or a second language track is a separate editing cost. For formats and captions, see the [video marketing guide for small businesses](/blog/video-marketing-for-small-business).',
    },
    { type: 'h2', text: 'How to scope a brief that gets comparable quotes' },
    {
      type: 'p',
      text: 'Vidico writes: "A clear project scope definition before filming starts is the single best cost-control measure." In practice, send every producer the same short brief. A vague request produces quotes you cannot compare.',
    },
    {
      type: 'ol',
      items: [
        'Goal and one action. What should a viewer do after watching: call, book, apply, buy?',
        'Audience and where it runs: website, paid ads, organic social, a sales meeting.',
        'Deliverables. How many videos, how long each, which formats and which languages of subtitles or voice.',
        'Shoot plan. Number of locations and days, who appears on camera, whether you supply the people and the place.',
        'Post-production. Animation or graphics needed, music, revision rounds included, who owns the project files.',
        'Rights. Where and how long the video and music may be used, and whether paid ads are covered.',
        'Budget and date. Say your range. A producer can then propose what fits instead of guessing, and you can see what each cut costs.',
      ],
    },
    {
      type: 'p',
      text: 'Ask each producer to price the same brief by phase, so you can see which items differ. Changes after filming starts are a common way for bills to grow; the cheapest edit is the one decided on paper.',
    },
    { type: 'h2', text: 'Start with a smaller scope' },
    {
      type: 'p',
      text: 'If the budget is limited, cut days, locations and versions before quality. One day on one location can produce several short videos, which is also a cheaper way to learn what your audience responds to. Whether to build a team or buy this as a service is covered in [marketing agency vs in-house](/blog/marketing-agency-vs-in-house), and how agencies structure fees in [marketing agency pricing](/blog/marketing-agency-pricing). WakeUP Marketing\'s [video production service](/services/video-production) covers concepts and scripts, filming and editing, ad and Reels formats, Georgian and English subtitles and testing in campaigns. If you are unsure what video you need, the [free marketing audit](/audit) is a way to start.',
    },
  ],
}
