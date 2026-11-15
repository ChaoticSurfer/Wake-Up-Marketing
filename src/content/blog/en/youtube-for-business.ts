import type { BlogPost } from '@/lib/blog'

export const post: BlogPost = {
  locale: 'en',
  slug: 'youtube-for-business',
  title: 'YouTube marketing for small business: do you need a channel?',
  metaTitle: 'YouTube Marketing for Small Business',
  description:
    'YouTube marketing for small business: decide if a channel pays off, set it up so the company owns it, and plan what to publish in the first 90 days.',
  publishedAt: '2027-02-02T15:00:00+04:00',
  updatedAt: '2027-02-02T15:00:00+04:00',
  service: 'video',
  reviewState: 'llm_reviewed',
  body: [
    {
      type: 'p',
      text: 'YouTube marketing for small business works when your customers ask questions that a video can answer and you can keep publishing for months. It is a slow channel: videos build a library that people find through search and links, not a quick source of leads. If you can only make one or two videos, put them on your website and social channels instead, and open a channel when you have a plan for ten.',
    },
    { type: 'h2', text: 'Do you need a YouTube channel?' },
    {
      type: 'p',
      text: 'Go through these questions before you create anything. Three or more yeses mean a channel is worth planning.',
    },
    {
      type: 'ul',
      items: [
        'Do buyers ask the same questions before they choose you: how it works, what it looks like, how to use it, how it compares? Those are video topics.',
        'Is your product or service something people want to see before they trust it: a venue, a process, a machine, a method, a team?',
        'Are your sales cycles long enough that a video is watched between the first contact and the decision?',
        'Do you already film for Reels or TikTok, so a longer cut costs little extra?',
        'Can someone in your company be named as the owner of the channel for a year?',
      ],
    },
    {
      type: 'p',
      text: 'Also look at what already exists. Search in Georgian and in English for the questions your customers ask. If the results are thin or old, there is room; if they are crowded with strong videos from larger brands, you will need a sharper angle. Georgia had about 3.12 million internet users in January 2025, 81.9% of the population, according to [DataReportal](https://datareportal.com/reports/digital-2025-georgia). That page does not give a YouTube figure, so check your own customers and your website analytics before assuming they are on the platform.',
    },
    {
      type: 'p',
      text: 'For the wider question of which platforms to use for video at all, see our guide to [video marketing for small business](/blog/video-marketing-for-small-business). This post is only about YouTube.',
    },
    { type: 'h2', text: 'Set the channel up so the company owns it' },
    {
      type: 'p',
      text: 'The most common mistake is to start the channel from an employee\'s or agency\'s personal account. Create it so the company holds it. YouTube\'s help page on [creating a channel with a business name](https://support.google.com/youtube/answer/1646861) says that choosing a new channel creates a new Brand Account, and you pick the profile picture, name and handle.',
    },
    {
      type: 'p',
      text: 'Brand Accounts have roles. According to YouTube Help on [Brand Account permissions](https://support.google.com/youtube/answer/4628007), owners have the broadest control and an account must have one primary owner, while managers can use Google services that support Brand Accounts, including posting videos on YouTube. A sensible setup follows from that:',
    },
    {
      type: 'ul',
      items: [
        'Make a company-controlled Google account the primary owner, not a personal one.',
        'Give the person who uploads, and any agency, the manager role, so you can remove access when the work ends.',
        'Use the company name as the channel name and keep the handle close to your brand and website domain.',
        'Write a short channel description that says who you help, where, and in which languages, and link to your website and contact page.',
      ],
    },
    { type: 'h2', text: 'What to publish' },
    {
      type: 'p',
      text: 'Pick formats by the job they do for a buyer, not by what is popular. A company channel usually needs a small set of repeatable types.',
    },
    {
      type: 'table',
      head: ['Video type', 'Job it does', 'Start with'],
      rows: [
        ['Question answers', 'Meets the buyer while they are researching', 'The five questions your sales team hears most'],
        ['Product or service demo', 'Shows how it works and removes doubt', 'A real walk-through of one common use'],
        ['Customer story', 'Gives proof from someone like the buyer', 'One willing customer, filmed on location'],
        ['Process or behind-the-scenes', 'Builds trust in how you work', 'A day of one team or one job from start to finish'],
        ['Comparison or choosing guide', 'Helps the buyer decide between options', 'A "how to choose" video for your category'],
      ],
    },
    {
      type: 'p',
      text: 'Each of these has its own guide: [how to make a product demo video](/blog/how-to-make-a-product-demo-video) covers the demo, [how to make a testimonial video](/blog/how-to-make-a-testimonial-video) and [behind-the-scenes video ideas](/blog/behind-the-scenes-video-ideas) cover two more. Short vertical clips are a separate decision, covered in [YouTube Shorts for business](/blog/youtube-shorts-for-business). Search optimisation of titles, descriptions and thumbnails is in [YouTube SEO for business](/blog/youtube-seo), so we will not repeat it here.',
    },
    { type: 'h2', text: 'Captions and language' },
    {
      type: 'p',
      text: 'If your customers speak more than one language, decide the main language of the channel and keep it consistent, then add captions for the rest. YouTube\'s help page on [automatic captioning](https://support.google.com/youtube/answer/6373554) lists Georgian among the languages for automatic captions on long-form videos and Shorts. Automatic captions still make mistakes with names, places and product terms, so read and correct them before you rely on them. For live streams the same page says automatic captions are available in English only.',
    },
    { type: 'h2', text: 'What to expect in the first months' },
    {
      type: 'p',
      text: 'Treat the channel as a long project with a modest start. A useful scale check is one of YouTube\'s own thresholds for monetisation. Its [Partner Program help page](https://support.google.com/youtube/answer/72851) lists 1,000 subscribers plus either 4,000 qualified public watch hours in the last 12 months from long-form videos, or 10 million qualified public Shorts views in the last 90 days. Watch hours from Shorts feed views do not count towards the first path. Georgia is also on YouTube\'s [list of Partner Program locations](https://support.google.com/youtube/answer/7101720).',
    },
    {
      type: 'p',
      text: 'You do not need to reach those numbers for a company channel to work. Ad revenue is rarely the goal. What counts is whether the right viewers watch, then call, message or visit. A niche B2B channel with a few hundred viewers per video can still be useful if they are the people who buy from you.',
    },
    {
      type: 'p',
      text: 'Measure with the reports YouTube gives you. Its help page on [audience retention](https://support.google.com/youtube/answer/9314415) describes watch time (the amount of time viewers watched your video), average view duration, and the retention report, which shows how well parts of a video held attention. Use them to find where viewers drop off and fix the next video, and use links with UTM tags in descriptions to see which videos send visitors to your website.',
    },
    { type: 'h2', text: 'A 90-day plan' },
    {
      type: 'ol',
      items: [
        'Weeks 1 to 2: decide the owner, write the channel description, list 10 questions and pick the 6 you can answer best.',
        'Weeks 3 to 6: film and publish the first 4 to 6 videos, in one language, with the same opening and the same closing call to action.',
        'Weeks 7 to 10: check watch time and retention, and add links from the website and email signatures to the videos that perform best.',
        'Weeks 11 to 13: decide, with numbers, whether to continue, change the topics, or stop. Add captions in the second language if viewers ask for it.',
      ],
    },
    {
      type: 'p',
      text: 'Paid promotion is a separate step and not needed to start. When you want it, our guide to [how to advertise on YouTube](/blog/how-to-advertise-on-youtube) explains the formats and setup.',
    },
    { type: 'h2', text: 'Doing it yourself or with a partner' },
    {
      type: 'p',
      text: 'A channel stalls most often because filming and editing take longer than planned. Decide who owns the schedule before you begin. If you want a partner, [WakeUP\'s video production](/services/video-production) covers concepts and scripts, filming and editing, formats in every size, and subtitles in Georgian and English, with testing in paid campaigns. A [free marketing audit](/audit) is a way to check first whether video is the right next step for your marketing.',
    },
  ],
}
