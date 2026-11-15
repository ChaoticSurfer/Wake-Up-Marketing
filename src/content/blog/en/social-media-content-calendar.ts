import type { BlogPost } from '@/lib/blog'

export const post: BlogPost = {
  locale: 'en',
  slug: 'social-media-content-calendar',
  title: 'Social media content calendar: how to build and run a monthly one',
  metaTitle: 'Social Media Content Calendar',
  description:
    'A social media content calendar for one month: what to track, how to split the content mix, batch the work and review the results each month.',
  publishedAt: '2026-12-30T12:00:00+04:00',
  updatedAt: '2026-12-30T12:00:00+04:00',
  service: 'smm',
  reviewState: 'llm_reviewed',
  body: [
    {
      type: 'p',
      text: 'A social media content calendar is a dated plan of what you will post, where, in which format and who is responsible, usually for one month at a time. Build it as a table with a row per post, plan the next month before the current one ends, produce content in batches, and review results at the end of each month. A good one takes the daily question "what do we post today?" away.',
    },
    {
      type: 'p',
      text: 'This post is about the calendar itself. The decisions behind it - goal, audience, platforms - are covered in [how to build a social media marketing strategy](/blog/social-media-marketing-strategy). Settle those first, then use the calendar to carry them out.',
    },
    { type: 'h2', text: 'What a content calendar should hold' },
    {
      type: 'p',
      text: 'Loomly, a social media scheduling tool, [describes the calendar](https://www.loomly.com/blog/social-media-calendar) as both a roadmap and a record of what was published, typically shown as a month view. Its calendar view shows the platform, the scheduled date and time, the post status and custom labels for pillars and post types, which makes a good minimum for each entry alongside the topic. It also recommends marking campaigns, brand dates and holidays on the same view.',
    },
    { type: 'p', text: 'For a team of a few people, one table in a shared spreadsheet is enough. These columns cover it:' },
    {
      type: 'table',
      head: ['Column', 'Example', 'Why it is there'],
      rows: [
        ['Date and time', 'Tue 12:00', 'Shows gaps and clusters across the month'],
        ['Platform and format', 'Instagram Reel', 'One idea often needs a different cut per platform'],
        ['Pillar', 'Proof', 'Stops one type of content taking over'],
        ['Idea and hook', 'Before and after of a finished project', 'The actual content decision'],
        ['Call to action', 'Message us for a quote', 'Ties the post to the goal'],
        ['Owner', 'Name of the person', 'Someone is accountable for each post'],
        ['Status', 'Idea, in production, approved, scheduled, published', 'Shows what is stuck'],
        ['Result', 'Link clicks, messages, saves', 'Filled in after publishing, used in the review'],
      ],
    },
    { type: 'h2', text: 'Choose the content mix before filling the dates' },
    {
      type: 'p',
      text: 'A calendar with every slot filled by promotions tires an audience quickly. The tool vendor SocialPilot [suggests an 80/20 split](https://www.socialpilot.co/blog/social-media-content-calendar): about 80% of content informative, educational or entertaining, and about 20% promoting your product. It also mentions a "rule of thirds" that splits content between audience-created content, product promotion and interaction. These are vendor rules of thumb, not measured laws, so treat them as starting points and adjust to your results.',
    },
    {
      type: 'p',
      text: 'Loomly recommends concentrating on about two value types (educational, inspirational, entertaining or relatable) and defining a few specific content pillars within them, so the brand voice stays consistent. In practice, a service company might use four pillars - proof, answers to customer questions, behind the scenes and offers - and assign each a rough share of the month\'s slots. For ideas to fill the pillars, see [Instagram post ideas for business](/blog/instagram-post-ideas-for-business).',
    },
    { type: 'p', text: 'Decide the format per slot, not per day. A monthly set might look like this:' },
    {
      type: 'ul',
      items: [
        'Two to three short videos a week, because video can need the most production time, so it helps to plan it first. See [Instagram Reels for business](/blog/instagram-reels-for-business) and [short-form video hooks](/blog/short-form-video-hooks).',
        'One or two carousels or text-and-image posts a week for answers and explainers.',
        'Stories or short updates for the day-to-day, kept out of the main calendar if they are unplanned.',
        'One slot a week left empty for something timely.',
      ],
    },
    { type: 'h2', text: 'Anchor the month with fixed dates' },
    {
      type: 'p',
      text: 'Mark the dates that will happen regardless of your plan: your own launches, sales and events, plus public holidays that change opening hours and audience attention. Georgia\'s fixed-date holidays include [New Year on 1 and 2 January, Orthodox Christmas on 7 January, International Women\'s Day on 8 March, Independence Day on 26 May, St. Mary\'s Day on 28 August and St. George\'s Day on 23 November](https://en.wikipedia.org/wiki/Public_holidays_in_Georgia_(country)), with Orthodox Easter holidays moving each year. Check the official calendar for the year you are planning, and decide in advance which holidays suit your brand and which you will stay quiet on.',
    },
    { type: 'p', text: 'Fill the remaining gaps with evergreen content that stays useful whenever it is seen. Loomly also advises leaving room for repurposing instead of filling every slot with new production.' },
    { type: 'h2', text: 'A monthly cycle that keeps you ahead' },
    {
      type: 'p',
      text: 'Loomly\'s guide breaks the monthly routine into brainstorming, planning, creating, approving, scheduling, community moderation and analysis, with different weeks of content at different stages at once. For a small team, a workable version is:',
    },
    {
      type: 'ol',
      items: [
        'Week 1 of the month: review last month\'s results, then brainstorm and place next month\'s ideas on the calendar.',
        'Week 2: write copy and briefs, and book any filming or photography.',
        'Week 3: produce in batches - film several videos in one session, design several carousels in a row.',
        'Week 4: send for approval, make changes, schedule, and keep a handful of slots flexible.',
        'Throughout: reply to comments and messages, and log what happened in the Result column.',
      ],
    },
    {
      type: 'p',
      text: 'SocialPilot likewise advises preparing content in batches in advance and sharing the calendar with teammates and clients for approval. Batching matters most for video: one shoot day can supply many clips, covers and cut-downs. If you do not have the people or equipment, [WakeUP\'s video production service](/services/video-production) scripts, shoots and edits short videos for Reels and TikTok.',
    },
    {
      type: 'p',
      text: 'Name one approver and a deadline. A common way for a calendar to stall is a post waiting for a decision from someone who is out of the office. Whatever tool you use to schedule, check its maximum scheduling window and its limits for each format before you plan more than a few weeks ahead.',
    },
    { type: 'h2', text: 'Review it every month' },
    {
      type: 'p',
      text: 'At the end of the month, fill in the Result column, sort posts by the number that matches your goal (enquiries, messages, link clicks), and look at the best three and worst three. Ask what they share: format, hook, pillar, time. Then change one thing in next month\'s calendar and see what happens. Loomly suggests frequent quick checks of post performance for small changes to the following week\'s content, plus routine audits at longer intervals to see trends month over month or quarter over quarter.',
    },
    {
      type: 'p',
      text: 'Keep what you measure tied to the goal from your strategy. [Marketing KPIs](/blog/marketing-kpis) explains how to choose the numbers; likes alone rarely tell you whether the plan works.',
    },
    { type: 'h2', text: 'Common mistakes' },
    {
      type: 'ul',
      items: [
        'Planning more posts than the team can produce well. Start with a frequency you can keep for three months.',
        'Filling the calendar with promotions and nothing the audience asked for.',
        'No owner or status per post, so nobody knows what is late.',
        'Treating the calendar as fixed. Keep a few flexible slots and move content when something changes.',
        'Never reviewing, so the same low performers return every month.',
      ],
    },
    {
      type: 'p',
      text: 'If you would rather hand this over, WakeUP Marketing\'s [social media management service](/services/smm) includes a channel strategy, a monthly content plan, posts and short video, and a monthly report. A [free marketing audit](/audit) is a way to see how your current pages compare before you decide.',
    },
  ],
}
