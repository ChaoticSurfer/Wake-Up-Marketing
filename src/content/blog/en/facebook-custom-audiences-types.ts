import type { BlogPost } from '@/lib/blog'

export const post: BlogPost = {
  locale: 'en',
  slug: 'facebook-custom-audiences-types',
  title: 'Facebook custom audiences: the four types and which to build first',
  metaTitle: 'Facebook Custom Audiences: Types',
  description:
    'Facebook custom audiences come in four main types: customer list, website, engagement and app. What each needs and which one to build first.',
  publishedAt: '2026-12-30T18:00:00+04:00',
  updatedAt: '2026-12-30T18:00:00+04:00',
  service: 'advertising',
  reviewState: 'llm_reviewed',
  body: [
    {
      type: 'p',
      text: 'Facebook custom audiences are groups of people you build from data you already have, so you can show ads to people who know your business instead of strangers. The four types you will use most are customer list, website, engagement and app activity. Each needs a different source: a file of customer details, the Meta Pixel, activity on Facebook and Instagram, or events from a mobile app. Most companies should start with website and customer list audiences.',
    },
    { type: 'h2', text: 'The four types at a glance' },
    {
      type: 'p',
      text: 'Meta\'s [Marketing API documentation](https://developers.facebook.com/docs/marketing-api/audiences/overview) lists more types than four (offline, dynamic and lookalike audiences as well), but the four below are the ones that start from your own contacts and your own traffic. Lookalike audiences are built on top of them and have their own guide: [Facebook lookalike audiences](/blog/facebook-lookalike-audiences).',
    },
    {
      type: 'table',
      head: ['Type', 'Built from', 'Needs', 'Longest look-back'],
      rows: [
        ['Customer list', 'Emails, phone numbers and other details you hold', 'A clean file and the right to use the data', 'Not a look-back: it reflects the file you uploaded, so refresh it'],
        ['Website', 'People who visited pages or triggered events', 'Meta Pixel installed and firing', '180 days'],
        ['Engagement', 'People who interacted with your Page, Instagram profile, lead forms or Instant Experiences', 'Accepted audience terms in Ads Manager and activity on the source', '90 to 730 days, depending on the source'],
        ['App activity', 'People who did something in your mobile app', 'Meta SDK or App Events API logging named events', '180 days'],
      ],
    },
    {
      type: 'p',
      text: 'The look-back figures come from the documentation pages cited in each section below. Meta can change them, so check the current page before you plan around a number.',
    },
    { type: 'h2', text: 'Customer list audiences' },
    {
      type: 'p',
      text: 'A customer list audience turns your own contacts into an ad audience. Meta\'s [customer file documentation](https://developers.facebook.com/docs/marketing-api/audiences/guides/custom-audiences) says you share the data in a hashed format and Meta compares it with its own hashed data to find matches. Supported identifiers include email addresses, phone numbers, names, dates of birth, gender and locations. The page says to provide several identifiers per record to raise the match rate.',
    },
    {
      type: 'p',
      text: 'The same page puts responsibility for the file on you: "As the owner of your business\'s data, you are responsible for creating and managing this data." Two practical consequences follow. First, only upload people you are entitled to advertise to, and keep a record of where the permission came from. Second, a CRM export is only as good as its formatting: Meta requires SHA256 hashing and normalised values (emails trimmed and lower-cased, phone numbers without symbols or leading zeroes). Whoever prepares the export needs to know this before the upload.',
    },
    {
      type: 'p',
      text: 'Use customer lists to speak to existing buyers (upsell, renewal, new product), to exclude them from acquisition ads, and as a common seed for a lookalike audience. In a Georgian company, the useful lists are usually past buyers, quote requests that did not close, and newsletter subscribers.',
    },
    { type: 'h2', text: 'Website audiences' },
    {
      type: 'p',
      text: 'A website audience is the one most companies should build first, because it needs no list and it keeps filling itself. According to Meta\'s [website custom audience guide](https://developers.facebook.com/docs/marketing-api/audiences/guides/website-custom-audiences), you must accept the Terms of Service for Custom Audiences in Ads Manager, and the rules use the Meta Pixel. You can create rules based on URLs visited or on custom events from the Pixel, and the retention setting accepts between 1 and 180 days.',
    },
    {
      type: 'p',
      text: 'The guide says you can only target an audience once it reaches a certain size, without giving a number. A site with little traffic may need a wide rule (all visitors, 90 days) before the audience can be used. Narrower rules come later:',
    },
    {
      type: 'ul',
      items: [
        'Everyone who visited any page in the last 30 days: the broad retargeting pool.',
        'People who viewed a pricing, service or contact page but did not send an enquiry: the warmest group.',
        'People who completed the enquiry event: use them as an exclusion, or as a seed for lookalikes.',
      ],
    },
    {
      type: 'p',
      text: 'None of this works if the Pixel is missing or fires on the wrong pages. Setup is covered step by step in [how to run Facebook ads](/blog/how-to-run-facebook-ads), and the campaigns you can run on these audiences are in [Facebook retargeting ads](/blog/facebook-retargeting-ads).',
    },
    { type: 'h2', text: 'Engagement audiences' },
    {
      type: 'p',
      text: 'Engagement audiences are made of people who interacted with your content on Meta\'s own platforms, so no website or file is needed. The [engagement documentation](https://developers.facebook.com/docs/marketing-api/audiences/guides/engagement-custom-audiences) lists Page, Instagram business profile, lead ads and Instant Experience ads among the supported sources. The maximum look-back differs by source: 90 days for lead ads, 365 for shopping and augmented reality, and 730 for Page, Instagram business profile and Instant Experiences.',
    },
    {
      type: 'p',
      text: 'These audiences suit companies whose main presence is a Page or Instagram profile, or that run lead ads. The signal is weaker than a pricing page visit, so treat it as the top of the funnel, with softer offers such as a guide or a call-to-action to message you. Short video is the usual way to fill this pool, and WakeUP\'s [video production service](/services/video-production) covers short video for ads and Reels.',
    },
    { type: 'h2', text: 'App audiences' },
    {
      type: 'p',
      text: 'App audiences only apply if you have a mobile app. Per Meta\'s [mobile app documentation](https://developers.facebook.com/docs/marketing-api/audiences/guides/mobile-app-custom-audiences), they are built from named events logged through the Facebook SDKs, the App Events API or a Mobile Measurement Partner, and the maximum look-back is 180 days. A rule is a JSON object and can reference several app events, for example people who registered but never made a first purchase.',
    },
    {
      type: 'p',
      text: 'If you have no app, skip this type. If you do, the work is on the developer side: the events must be logged before any audience can be built from them.',
    },
    { type: 'h2', text: 'Which to build first' },
    {
      type: 'ol',
      items: [
        'Website audience, widest rule first. Check the Pixel is firing, then build "all visitors, 30 to 90 days". It starts collecting people the day it exists, so the earlier you create it, the more it holds.',
        'Customer list of past buyers. Use it to exclude buyers from acquisition ads and, once it is large enough, as a seed for a lookalike audience.',
        'Narrow website audiences by page and event (pricing viewers, form starters, enquiry completed).',
        'Engagement audiences, if you publish video or run lead forms regularly.',
        'App audiences, only if you have an app with logged events.',
      ],
    },
    { type: 'h2', text: 'Mistakes that waste a custom audience' },
    {
      type: 'ul',
      items: [
        'Building audiences that are too small to deliver. Meta says an audience can only be targeted once it reaches a certain size, so start broad and narrow later.',
        'Forgetting exclusions. Without excluding people who already enquired or bought, you pay to show them acquisition ads.',
        'Uploading data you may not use. The file is your responsibility, not Meta\'s.',
        'Leaving audiences idle. The [overview documentation](https://developers.facebook.com/docs/marketing-api/audiences/overview) says audiences unused in an active ad set for over two years move to an expiring stage and are deleted 90 days after flagging unless used again.',
        'Building an audience that signals sensitive status. From 2 September 2025, [Meta flags audiences](https://developers.facebook.com/docs/marketing-api/audiences/overview) that suggest certain health conditions or financial status and prevents them from being used in new campaigns.',
      ],
    },
    {
      type: 'p',
      text: 'WakeUP\'s [advertising service](/services/advertising) covers audience setup, tracking and weekly optimisation on Meta and Google. If you want a second opinion on how your Pixel, audiences and exclusions are set up now, the [free marketing audit](/audit) looks at your ads and website together.',
    },
  ],
}
