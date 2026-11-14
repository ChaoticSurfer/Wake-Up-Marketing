import type { BlogPost } from '@/lib/blog'

export const post: BlogPost = {
  locale: 'en',
  slug: 'video-marketing-for-small-business',
  title: 'Video marketing for small business in Georgia: what to shoot, where to post, how to measure',
  metaTitle: 'Video Marketing for Small Business',
  description:
    'Video marketing for small business: which video fits which goal, platform formats, Georgian and English captions, in-house or agency, and what to measure.',
  publishedAt: '2026-12-09T16:00:00+04:00',
  updatedAt: '2026-12-09T16:00:00+04:00',
  service: 'video',
  reviewState: 'llm_reviewed',
  body: [
    {
      type: 'p',
      text: 'Video marketing for a small business works when each video has one job. Pick the goal first (be found, be trusted, get an enquiry), choose the video type that does that job, shoot it vertically in the format your platform accepts, add Georgian or English captions, and judge it by enquiries and bookings, not views. Start with the number of videos you can make every month without cutting corners, and keep what works.',
    },
    { type: 'h2', text: 'Match the video to the goal' },
    {
      type: 'p',
      text: 'The common mistake is to film "something for social media". A company of 20 to 250 people usually needs video for four different jobs, and each one calls for a different video.',
    },
    {
      type: 'table',
      head: ['Goal', 'Video type', 'Typical length', 'Where it works'],
      rows: [
        ['Be found by new people', 'A short answer to a common customer question; a quick look behind the scenes', '15-45 seconds', 'Reels, TikTok, YouTube Shorts'],
        ['Build trust before a purchase', 'Customer story, team introduction, how a service is delivered', '1-3 minutes', 'Website, Facebook, YouTube'],
        ['Explain a product or service', 'Explainer or demo with one clear next step', '30-90 seconds', 'Website landing page, paid ads'],
        ['Get an enquiry now', 'Short ad: problem, offer, one call to action', '10-30 seconds', 'Facebook and Instagram ads, TikTok ads'],
        ['Hire staff', 'A day in the team, an honest look at the work', '30-60 seconds', 'Instagram, TikTok, LinkedIn'],
      ],
    },
    {
      type: 'p',
      text: 'The lengths are working ranges, not platform rules. Start from the question a buyer asks before they contact you, and answer it on camera. Your sales and support staff already know these questions; ask them for the ten most common ones and you have your first ten videos.',
    },
    { type: 'h2', text: 'Where your audience can be reached in Georgia' },
    {
      type: 'p',
      text: 'Pick platforms using local data. According to [DataReportal\'s Digital 2026 report for Georgia](https://datareportal.com/reports/digital-2026-georgia), TikTok ads reached 89.5 percent of adults aged 18 and above in Georgia in late 2025 (data current to October 2025), while Facebook\'s ad reach was equivalent to 80.1 percent of the total population and Instagram\'s to 48.6 percent. The bases differ (adults only versus everyone), so the percentages are not directly comparable. They are also advertising reach, the audience a platform says an ad could reach, not counts of active users, and they do not show whether your buyers are among them. Check which platform your current enquiries come from before you choose; the [social media marketing strategy guide](/blog/social-media-marketing-strategy) has the full table and caveats.',
    },
    {
      type: 'p',
      text: 'For most companies two platforms are enough: one where your buyers already spend time, and your own website, where a video can sit next to an enquiry form.',
    },
    { type: 'h2', text: 'Formats and specs per platform' },
    {
      type: 'p',
      text: 'Shoot vertical (9:16) by default. TikTok recommends it for ads and YouTube counts vertical or square videos up to three minutes as Shorts (both in the table below). A vertical master is also easier to adapt for other places than the other way round. Platform rules change, so confirm the numbers in the upload screen or ads tool before you commission a batch.',
    },
    {
      type: 'table',
      head: ['Platform', 'What the platform documents', 'Source'],
      rows: [
        [
          'YouTube Shorts',
          'Square or vertical videos up to three minutes are Shorts; use a wider ratio such as 16:9 for long-form videos.',
          '[YouTube Help](https://support.google.com/youtube/answer/15424877?hl=en-GB)',
        ],
        [
          'TikTok ads (non-Spark)',
          'Vertical 9:16 recommended, at least 540 x 960 px; up to 10 minutes; 500 MB or less; .mp4, .mov, .mpeg, .3gp or .avi.',
          '[TikTok Ads Help](https://ads.tiktok.com/help/article/video-ads-specifications)',
        ],
        [
          'Instagram Reels',
          'Reels can be anywhere from 3 seconds to 3 minutes long.',
          '[Instagram](https://about.instagram.com/blog/tips-and-tricks/how-to-make-instagram-reels)',
        ],
        [
          'Facebook and Instagram ads',
          'Meta ad specifications depend on placement. Check the requirements and previews in Meta Ads Manager before you finalise a video.',
          'Check in Ads Manager (not verified here)',
        ],
      ],
    },
    {
      type: 'p',
      text: 'Two rules of thumb, not platform rules: keep the important action and any text away from the top and bottom edges, where platform buttons and captions can cover it, and do not make a video longer because a platform allows it. A clear 30-second video usually beats a padded two-minute one. If you plan to put these videos behind ads, see what [Facebook ads cost](/blog/facebook-ads-cost) before you set a budget.',
    },
    { type: 'h2', text: 'Captions in Georgian and English' },
    {
      type: 'p',
      text: 'Some viewers watch with the sound off, so make each video understandable from the picture and captions alone wherever you can. Decide the language per audience, not per video:',
    },
    {
      type: 'ul',
      items: [
        'Georgian captions for customers in Georgia, burned into the video so they appear on every platform.',
        'English captions or a second version for foreign clients, tourists, expats and international hiring.',
        'Keep captions to one or two short lines, high contrast, placed clear of the platform interface.',
        'Have a Georgian speaker proofread automatic captions. Auto-generated Georgian text can contain errors, and a misspelled word in a company video reads as carelessness.',
      ],
    },
    {
      type: 'p',
      text: 'If you speak Georgian on camera, add English captions rather than filming twice. If the speaker uses English, the Georgian captions do the same work in reverse.',
    },
    { type: 'h2', text: 'Shooting in-house or hiring a production team' },
    {
      type: 'p',
      text: 'Most companies end up with a mix. The split below is a guide, not a rule.',
    },
    {
      type: 'table',
      head: ['', 'In-house', 'Production team'],
      rows: [
        ['Best for', 'Frequent, informal videos: answers to questions, team and behind-the-scenes clips', 'Ad creative, brand and customer stories, product films, anything that will be paid for and reused'],
        ['Equipment', 'A recent smartphone, a tripod, a cheap clip-on microphone, daylight or one soft light', 'Cameras, lighting, audio and an editor'],
        ['Main risk', 'Poor sound and an overworked employee who stops after a month', 'A beautiful video that does not answer a customer question'],
        ['What you need to supply', 'A weekly slot, a list of questions, one person who owns it', 'A clear goal, the offer, access to people and places, timely feedback'],
      ],
    },
    {
      type: 'p',
      text: 'Sound matters more than image: viewers forgive a plain picture but leave when they cannot hear the speaker. If you do one thing in-house, buy a microphone. Cost depends on the number of videos, locations and editing, so ask any production team for a written quote per video type. For paid campaigns, it helps to test several short variants before investing in one polished film, since you only learn which message works from results. [WakeUP Marketing\'s video production service](/services/video-production) covers scripts, filming and editing, Reels, TikTok and ad formats, Georgian and English subtitles and testing in paid campaigns, for companies without an in-house team.',
    },
    { type: 'h2', text: 'What to measure' },
    {
      type: 'p',
      text: 'Views are the easiest number and the weakest evidence. Measure in the order in which video affects the business:',
    },
    {
      type: 'ol',
      items: [
        'Business result: enquiries, calls, messages, bookings or applications that came from the video. Put a distinct link or phone number on each campaign, and ask new customers how they found you.',
        'Action: clicks to your website, saves and shares, and replies to the video.',
        'Attention: how much of the video people watch, and where they leave. If most leave in the first seconds, change the opening, not the topic.',
        'Reach: views and followers, last, as context only.',
      ],
    },
    {
      type: 'p',
      text: 'Review once a month. Keep the two or three videos that produced results, make more of the same type, and stop the types that did not. Video supports other channels as well: the same clip can be reused in an ad, on a landing page or in an outreach message. For how those channels fit together, see the [lead generation strategies guide](/blog/lead-generation-strategies). If you are not sure where video fits in your current marketing, WakeUP Marketing offers a [free audit](/audit).',
    },
  ],
}
