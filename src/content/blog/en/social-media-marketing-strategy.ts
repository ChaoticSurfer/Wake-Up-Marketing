import type { BlogPost } from '@/lib/blog'

export const post: BlogPost = {
  locale: 'en',
  slug: 'social-media-marketing-strategy',
  title: 'Social media marketing strategy for a small business in Georgia: 7 steps',
  metaTitle: 'Social Media Marketing Strategy',
  description:
    'Social media marketing strategy for small business: seven steps from one goal to a monthly review, with Georgia platform data and caveats.',
  publishedAt: '2026-12-01T16:00:00+04:00',
  updatedAt: '2026-12-01T16:00:00+04:00',
  service: 'smm',
  reviewState: 'llm_reviewed',
  body: [
    {
      type: 'p',
      text: 'A social media marketing strategy is a written answer to five questions: what business result you want, who you want to reach, which two or three platforms you will use, what you will post and offer there, and how you will measure it each month. For a company of 20 to 250 people the plan fits on one page. Below are the seven steps, in the order that saves the most wasted effort.',
    },
    { type: 'h2', text: 'Step 1: pick one business goal, not "more followers"' },
    {
      type: 'p',
      text: 'Start from a result the company already counts: enquiries, bookings, store visits, qualified applications for a vacancy. Choose one primary goal for the next quarter and at most one supporting goal. Followers and likes are signals on the way, not the goal.',
    },
    {
      type: 'p',
      text: 'Write the goal with a number and a date, for example "40 qualified enquiries a month from social by the end of March, up from 15". The baseline matters: if you do not know today\'s number, the first month\'s job is to find it (see step 6). Companies that already run paid ads can start with the [free marketing audit](/audit), which looks at ads, website and the sales process together.',
    },
    { type: 'h2', text: 'Step 2: audit what you already have' },
    {
      type: 'p',
      text: 'Before planning new content, list every profile your company owns, including old and half-abandoned ones, and check four things on each.',
    },
    {
      type: 'ul',
      items: [
        'Is the name, logo, description and contact information the same everywhere, and does the link go to a page that matches the goal?',
        'Which 10 posts of the last 6 months got the most clicks, saves, shares or messages (not only likes)?',
        'Who replies to comments and messages, and how long does a reply take?',
        'What do 3 to 5 direct competitors post, and how often? Note gaps they leave, not only what they do.',
      ],
    },
    {
      type: 'p',
      text: 'Check reply time early. If people already write to your Page or Instagram and wait hours for an answer, fix that before producing more content. A bot can cover the repetitive questions; the [benefits and limits of an AI chatbot](/blog/ai-chatbot-benefits) are worth reading first.',
    },
    { type: 'h2', text: 'Step 3: define the audience and buying moment' },
    {
      type: 'p',
      text: 'Describe the one or two groups that bring you revenue, in plain terms: who they are, what triggers a purchase, what they worry about before buying, and who else is involved in the decision. For a company that sells to other businesses, the buyer may be a manager who checks your LinkedIn or Facebook page before replying to you. For a consumer brand the decision may take only a few seconds of scrolling. Your sales team can tell you which applies.',
    },
    {
      type: 'p',
      text: 'Use real inputs: the questions your sales team hears most, the objections that lose deals, and the messages your Page already receives. These beat a persona invented in a meeting.',
    },
    { type: 'h2', text: 'Step 4: choose two or three platforms using local audience data' },
    {
      type: 'p',
      text: 'More platforms means thinner content on each. For most small and mid-sized companies, two or three is a workable limit. To choose, start from where people in Georgia can be reached. According to [DataReportal\'s Digital 2026 report for Georgia](https://datareportal.com/reports/digital-2026-georgia), based on figures from October 2025:',
    },
    {
      type: 'table',
      head: ['Platform', 'Reported figure for Georgia', 'What the figure counts'],
      rows: [
        ['Facebook', '3.05 million (80.1% of the population)', 'Advertising reach'],
        ['Instagram', '1.85 million (48.6% of the population)', 'Advertising reach'],
        ['TikTok', '2.57 million (adults aged 18+ only)', 'Advertising reach'],
        ['LinkedIn', '850 thousand (22.3% of the population)', 'Registered members, not active users'],
      ],
    },
    {
      type: 'p',
      text: 'Read these numbers with the report\'s own caveats. Advertising reach is the audience a platform says an ad could reach; it is not a count of monthly or daily active users, and it is not a measure of engagement. Identities may not be unique people, and the report warns that the national social media total can look very similar to the figure for the most popular platform. In Georgia both are 3.05 million. LinkedIn counts members, so it is not comparable with the others. The data is also from October 2025.',
    },
    {
      type: 'p',
      text: 'What the table does support: Facebook and TikTok (adults only) reach very large shares of people in Georgia, Instagram is smaller but still reaches nearly half the population, and LinkedIn is a narrow, professional channel. Whether your buyers are on any of them is a separate question, and your own data answers it: check which platform your current enquiries and website visits come from, and ask new customers where they found you.',
    },
    { type: 'h2', text: 'Step 5: set content pillars and a posting rhythm you can keep' },
    {
      type: 'p',
      text: 'Choose three or four content pillars, each tied to a step in the buyer\'s decision. A workable set for a service company: proof (finished work, results you can document), answers (the questions buyers ask before choosing you), people (the team and how you work), and offers (a clear next step). Every post should have one job and one call to action, such as "send us a message" or "book a visit".',
    },
    {
      type: 'ul',
      items: [
        'Pick a rhythm you can sustain for 90 days, then raise it. A modest rhythm you keep up is better than a daily one you drop after a month. Three posts a week is a reasonable starting point to test.',
        'Use short video where your product or team is visible, since it suits Reels and TikTok.',
        'Reuse one idea across formats: a customer question can become a carousel, a short video and a LinkedIn post.',
        'Keep a calendar with the date, platform, pillar, format and the person responsible for each post.',
      ],
    },
    {
      type: 'p',
      text: 'If paid promotion is part of the plan, set aside a test budget separate from content production, and run campaigns toward the goal from step 1 (leads or messages, not reach). Meta and TikTok costs differ by market and change over time, so get the figures from each platform\'s own ad manager for Georgia rather than from foreign benchmarks.',
    },
    { type: 'h2', text: 'Step 6: set up measurement before you publish' },
    {
      type: 'p',
      text: 'Decide what counts as a result and where it is recorded. Social platforms report reach and engagement, but your goal lives in your website, phone and messages. Tag every link you control so visits can be traced to a post or campaign. Google\'s analytics documentation says:',
    },
    {
      type: 'p',
      text: '"When you add parameters to a URL, you should always use utm_source, utm_medium, and utm_campaign." - [Google Analytics Help, custom campaign URLs](https://support.google.com/analytics/answer/10917952)',
    },
    {
      type: 'p',
      text: 'Then add a simple log for enquiries that do not click anywhere: calls and chats get a "how did you hear about us?" field with social as an answer. Review these metrics in this order each month:',
    },
    {
      type: 'ol',
      items: [
        'Enquiries and sales from social (the goal metric).',
        'Cost per enquiry, if you run paid campaigns.',
        'Reply time to messages and comments.',
        'Clicks, saves, shares and video completion for the posts behind those results.',
        'Reach and followers, last, as context only.',
      ],
    },
    { type: 'h2', text: 'Step 7: review monthly and change one thing at a time' },
    {
      type: 'p',
      text: 'Once a month, compare results with the goal, find the three best and three worst posts, and decide what to repeat, stop and test. Change one variable per test (format, hook, offer, posting time) so you can tell what caused the difference. Re-run the platform choice from step 4 every six months, and the full audit from step 2 once a year.',
    },
    {
      type: 'p',
      text: 'Expect the first quarter to be about learning. Judge it on whether you know which content and platform produce enquiries, not on whether the target is already met.',
    },
    { type: 'h2', text: 'A one-page social media plan' },
    {
      type: 'p',
      text: 'Put the answers to the seven steps on a single page that the whole team can see:',
    },
    {
      type: 'ul',
      items: ['Goal, with number and date', 'Audience and buying moment', 'Platforms (two or three)', 'Content pillars', 'Posting rhythm', 'Reply owner and target reply time', 'Budget for content and paid tests', 'Metrics and monthly review date'],
    },
    { type: 'h2', text: 'In-house or with an agency' },
    {
      type: 'p',
      text: 'This plan can run with one in-house marketer if that person has time for strategy, content production, replies and reporting. These tasks need different skills, so check honestly whether one person can cover them. WakeUP Marketing\'s [social media marketing (SMM) service](/services/smm) covers channel strategy, a monthly content plan, posts and short video, page management, paid social on Meta and TikTok, and a monthly report. If you want a view of your ads, website and sales process before deciding, request the [free marketing audit](/audit).',
    },
  ],
}
