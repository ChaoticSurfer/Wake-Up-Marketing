import type { BlogPost } from '@/lib/blog'

export const post: BlogPost = {
  locale: 'en',
  slug: 'how-to-advertise-on-youtube',
  title: 'How to advertise on YouTube: formats, campaign goal, targeting and what the video must do',
  metaTitle: 'How to Advertise on YouTube',
  description:
    'How to advertise on YouTube step by step: pick a format (skippable, bumper, Shorts), a campaign goal and targeting, then make a video that earns the view.',
  publishedAt: '2027-01-07T09:00:00+04:00',
  updatedAt: '2027-01-07T09:00:00+04:00',
  service: 'video',
  reviewState: 'llm_reviewed',
  body: [
    {
      type: 'p',
      text: 'To advertise on YouTube, upload your video, create a video campaign in Google Ads, choose a goal and an ad format (skippable in-stream, bumper, in-feed or Shorts), target the audience by interests, intent or your own data, set a budget and bid, and publish. The video matters as much as the settings: the first seconds decide whether anyone keeps watching.',
    },
    { type: 'h2', text: 'Step 1: decide what the video ad is for' },
    {
      type: 'p',
      text: 'Start with the one action you want. Google Ads asks you to pick a campaign goal, and its options include sales, leads, website traffic, product and brand consideration, and brand awareness and reach (the goals Google lists in its [help page on video partners](https://support.google.com/google-ads/answer/7166933)). A company selling to other companies usually wants leads: a form completed or a call booked. A shop wants sales or traffic. Awareness is a fair goal for a new brand, but you need a way to see what it does afterwards, such as branded searches.',
    },
    {
      type: 'p',
      text: 'If you have not yet worked out what a video must achieve, the structure in the [marketing video script template](/blog/marketing-video-script-template) helps, and [video marketing for small business](/blog/video-marketing-for-small-business) covers where video fits in the wider plan.',
    },
    { type: 'h2', text: 'Step 2: choose the format' },
    {
      type: 'p',
      text: 'The format sets the length of the video and how you pay. These are the formats described in [Google\'s YouTube ad formats help page](https://support.google.com/youtube/answer/2375464):',
    },
    {
      type: 'table',
      head: ['Format', 'Length', 'How you are charged'],
      rows: [
        ['Skippable in-stream', 'No maximum; Google recommends under 3 minutes. Viewers can skip after 5 seconds', 'Cost per view (30 seconds watched, or the full video if shorter, or an interaction), or per impression with some bidding strategies'],
        ['Non-skippable in-stream', '15 to 60 seconds, depending on the campaign subtype', 'Per impression (target CPM)'],
        ['Bumper', '5 to 6 seconds, non-skippable', 'Per impression (target CPM)'],
        ['In-feed', 'No maximum', 'Per click to watch; in Video view campaigns, when autoplay runs for at least 10 seconds'],
        ['YouTube Shorts', 'Under 60 seconds recommended', 'Cost per view (10 seconds watched, a call-to-action click, or a like, comment or share) or per impression'],
      ],
    },
    {
      type: 'p',
      text: 'A sensible first choice for a company with a clear offer is skippable in-stream, because you pay for a view only after the viewer has watched enough, and you can tell a longer story. Bumpers suit a single message to remind people who already know you. Shorts reach people in the vertical feed, so a vertical video made for that feed fits; see [YouTube Shorts for business](/blog/youtube-shorts-for-business). For what each format costs, see [YouTube ads cost](/blog/youtube-ads-cost).',
    },
    { type: 'h2', text: 'Step 3: set up the campaign and targeting' },
    {
      type: 'ol',
      items: [
        'Upload the video to your YouTube channel. A clean channel with a name, logo and a few real videos supports the ad, because some viewers will click through to it.',
        'In Google Ads, create a campaign, pick the goal and the video campaign type, and choose the format.',
        'Set the budget, the bid strategy, the locations (for example Georgia, or Tbilisi only) and the schedule.',
        'Choose the audience, as below, and the landing page the ad sends people to.',
        'Add a clear headline and call to action, and submit the ad for review.',
      ],
    },
    {
      type: 'p',
      text: 'On targeting, [Google\'s Video campaign targeting help](https://support.google.com/google-ads/answer/2454017) lists audience options (demographic groups, detailed demographics, affinity and in-market segments, life events, custom segments, your data segments and Customer Match) and content options (placements, topics, keywords and devices). In practice:',
    },
    {
      type: 'ul',
      items: [
        'Start with in-market and custom segments if people are actively looking for what you sell.',
        'Use your data segments, such as people who watched your videos or visited your site, to run a second ad to warm viewers.',
        'Use Customer Match only with data you have the right to use.',
        'Use topics, keywords and placements when you can name the channels or subjects your buyers watch. Google\'s help page notes that content targeting can no longer be added to video campaigns that drive conversions, so check which options your campaign type still offers. Narrow targeting limits reach, so widen it if the campaign barely spends.',
      ],
    },
    {
      type: 'p',
      text: 'One language point for Georgia: Georgian is not on the list of languages in [Google Ads language targeting](https://support.google.com/google-ads/answer/6333734), so you cannot set the campaign language to Georgian, and that page says ads in an unsupported language are disapproved. Plan the targeting with locations and audiences instead, and test how it behaves with a small budget before you scale.',
    },
    { type: 'h2', text: 'Step 4: make a video that earns the view' },
    {
      type: 'p',
      text: 'Targeting finds the people; the video holds them. Google\'s creative framework for YouTube ads, the ABCDs, sets out four things to do: [attract, brand, connect and direct](https://business.google.com/ca-en/think/future-of-marketing/creative-best-practices-youtube-ads/). Written as plain rules:',
    },
    {
      type: 'ul',
      items: [
        'Attract: open with the point of the video, not a logo animation. On a skippable ad the viewer decides within seconds, so the first shot should be the problem, the result or a question.',
        'Brand: show who you are early and naturally, in the product, the speaker or the setting.',
        'Connect: tell it through a person or a situation the buyer recognises, not a list of features.',
        'Direct: say exactly what to do next, once, and make it match the landing page.',
      ],
    },
    {
      type: 'p',
      text: 'Make versions for the way people watch: a horizontal one for in-stream and a vertical one for Shorts. Short-form openings are covered in [short form video hooks](/blog/short-form-video-hooks). Do not hide the message in the part of the video that plays after the skip button appears.',
    },
    { type: 'h2', text: 'Step 5: check results and improve' },
    {
      type: 'ul',
      items: [
        'View rate and cost per view tell you whether the opening works.',
        'Clicks and conversions on the landing page tell you whether the offer and the page work. Send viewers to a page built for the video, not the home page.',
        'Compare two openings of the same video against each other, changing one thing at a time.',
        'Judge the campaign by enquiries and sales, not views alone. Qualified leads are the point, not the view count.',
      ],
    },
    { type: 'h2', text: 'Where WakeUP fits' },
    {
      type: 'p',
      text: 'WakeUP scripts, shoots and edits short videos for ads, Reels and TikTok and tests them in campaigns; see the [video production service](/services/video-production). If you already run ads and want to know whether the money is working, request the [free marketing audit](/audit).',
    },
  ],
}
