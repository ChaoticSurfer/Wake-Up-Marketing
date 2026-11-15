import type { BlogPost } from '@/lib/blog'

export const post: BlogPost = {
  locale: 'en',
  slug: 'how-to-build-a-content-calendar',
  title: 'How to build a content calendar: a quarterly plan for a small team',
  metaTitle: 'How to Build a Content Calendar',
  description:
    'How to build a content calendar for a small team: a quarterly plan with the fields to track, the tool to use, a realistic cadence and a monthly review.',
  publishedAt: '2027-01-15T18:00:00+04:00',
  updatedAt: '2027-01-15T18:00:00+04:00',
  service: 'content',
  reviewState: 'llm_reviewed',
  body: [
    {
      type: 'p',
      text: 'To build a content calendar, list every piece of content you will make over the next quarter in one table, with a date, a topic, a format, an owner, a status and the goal it supports. Start from your goals and a publishing rhythm you can sustain, choose a tool your team already uses, fix a monthly review, and keep a few empty slots for things you cannot predict.',
    },
    {
      type: 'p',
      text: 'This guide covers a quarterly calendar for the whole content programme of a small team: articles, video, email, case studies and campaigns. For a month-by-month plan for social posts, read the [social media content calendar guide](/blog/social-media-content-calendar). The decisions the calendar carries out - audience, topics, goals - are in [content strategy for small business](/blog/content-strategy-for-small-business).',
    },
    { type: 'h2', text: 'Why plan by quarter' },
    {
      type: 'p',
      text: 'A week is too short to see whether a topic area works, and a year is too long to predict. Three months is long enough to run a campaign from idea to results and short enough to change course. Foleon notes that content marketing [builds slowly over time](https://www.foleon.com/blog/build-content-calendar), and advises setting quantitative goals early and revisiting them regularly. A quarter gives you a natural review point.',
    },
    {
      type: 'p',
      text: 'Treat the quarter as three layers. Fix the big items first (launches, events, campaigns), then the recurring formats (a weekly article, a monthly case study, a fortnightly email), then fill the remaining gaps from your topic list.',
    },
    { type: 'h2', text: 'Step 1: Set the goal and the rhythm' },
    {
      type: 'ol',
      items: [
        'Write one goal for the quarter in numbers you can check, such as enquiries from the website, newsletter sign-ups or demo requests. [Marketing KPIs](/blog/marketing-kpis) explains how to choose them.',
        'Count the people. A realistic output is what the team can produce while doing the rest of their jobs. Ghost, the publishing platform, advises estimating how often you will publish and who helps, before choosing tools.',
        'Pick a cadence you can keep for the full quarter, such as one article and one email every week, plus one short video. Cut it in half if in doubt: missing dates is worse than a lighter plan.',
        'List the fixed dates: product launches, trade events, sales periods and public holidays that change opening hours.',
      ],
    },
    { type: 'h2', text: 'Step 2: Choose the fields' },
    {
      type: 'p',
      text: 'Keep the list short. Ghost\'s guide recommends [starting with a short set of fields](https://ghost.org/resources/how-to-create-a-content-calendar/) such as title, keywords, audience, target date, research notes and a distribution plan. Foleon\'s spreadsheet adds status, owner, content type, associated campaign, business goal, buyer\'s journey stage and persona. For a small team, this combination works:',
    },
    {
      type: 'table',
      head: ['Field', 'What goes in it', 'Why you need it'],
      rows: [
        ['Publish date', 'The date it goes live', 'Shows gaps and clusters across the quarter'],
        ['Working title and topic', 'The question it answers', 'Prevents two pieces on the same topic'],
        ['Target query or angle', 'The search or customer question it serves', 'Ties content to real demand'],
        ['Format and channel', 'Article, video, email, case study; where it is published', 'One idea can become several formats'],
        ['Audience and funnel stage', 'Who it is for and what they should do next', 'Keeps the mix from drifting to one stage'],
        ['Campaign or goal', 'Which quarterly goal it supports', 'Lets you cut work that supports nothing'],
        ['Owner and reviewer', 'Named people', 'Everyone knows who is waiting for whom'],
        ['Status and due dates', 'Idea, brief, draft, review, ready, live', 'Shows what is stuck'],
        ['Distribution', 'Newsletter, social, sales team, partners', 'A published piece is not yet a promoted piece'],
        ['Result', 'The number you chose, filled in after publishing', 'Feeds the monthly review'],
      ],
    },
    { type: 'p', text: 'Add fields only when a question comes up that the calendar cannot answer. Every extra column is a column someone has to fill in.' },
    { type: 'h2', text: 'Step 3: Pick the tool' },
    {
      type: 'p',
      text: 'Ghost\'s guide lists free options such as Google Sheets and Google Calendar, paid scheduling tools such as CoSchedule and Loomly, and project-management boards like Trello and Monday, and advises starting with whichever tool you already know. The same advice holds for a small team: a shared spreadsheet with one tab per month and a calendar view is enough to start with. Move to a board when you have more than one person reviewing each piece, or to a dedicated tool when you publish across many channels.',
    },
    {
      type: 'ul',
      items: [
        'One calendar, one place. If articles, video and email live in three documents, nobody sees the whole programme.',
        'Give everyone who contributes edit access, and one person ownership of the file.',
        'Use colours or filters for format, so you can see at a glance if the quarter is all articles and no video.',
      ],
    },
    { type: 'h2', text: 'Step 4: Fill the quarter' },
    {
      type: 'ol',
      items: [
        'Place anchors: the big campaign pieces and fixed dates. Foleon suggests organising around campaigns, with one major anchor piece supported by shorter ones.',
        'Place the recurring formats at the same weekday, so the team builds a habit.',
        'Fill the rest from a topic backlog: customer questions, sales objections and search queries. [Keyword research for SEO](/blog/keyword-research-for-seo) shows how to find the queries, and [search intent types](/blog/search-intent-types) helps match format to query.',
        'Spread the heavy pieces. Foleon advises spacing out large, labour-intensive projects so only smaller ones run at the same time.',
        'Leave one or two open slots a month for news, replies to competitors or a good idea that appears mid-quarter.',
        'Plan the reuse: an article can become an email, a short video and a sales one-pager. See [how to start a business blog](/blog/how-to-start-a-business-blog) for the blog side and [how to build an email list](/blog/build-email-list) for newsletters.',
      ],
    },
    { type: 'h2', text: 'Step 5: Run it with a weekly and monthly rhythm' },
    {
      type: 'ul',
      items: [
        'Weekly, 15 minutes: check what is late, move what is blocked, confirm next week\'s pieces have an owner and a brief.',
        'Monthly, 60 minutes: fill in the Result column, rank pieces by the number tied to your goal, look at the best and worst three, and decide one change for the next month.',
        'End of quarter: compare results with the goal, archive the sheet, and start the next quarter\'s calendar from what you learned.',
      ],
    },
    {
      type: 'p',
      text: 'Production is where small teams stall: writers wait for photos, designers wait for text, and a video needs a shoot day. Plan briefs and shoots two to three weeks ahead of publish dates, and batch similar work. If you need photos, video, design or copy in Georgian and English and lack the people to make them, WakeUP Marketing\'s [content creation service](/services/content-creation) covers a monthly content plan, photo shoots, short video, design and copywriting. A [free marketing audit](/audit) shows where your current content stands.',
    },
    { type: 'h2', text: 'Common mistakes' },
    {
      type: 'ul',
      items: [
        'Copying a template with twenty columns that nobody maintains.',
        'Planning more than the team can make, then dropping dates quietly.',
        'Filling every slot with topics you like and none with questions customers ask.',
        'No owner or status, so work stalls in review.',
        'Never recording results, so the next quarter repeats the same mistakes.',
        'Treating the calendar as fixed. Foleon advises tracking progress and adjusting the calendar as you go.',
      ],
    },
  ],
}
