import type { BlogPost } from '@/lib/blog'

export const post: BlogPost = {
  locale: 'en',
  slug: 'facebook-retargeting-ads',
  title: 'Facebook retargeting ads: how to set them up on Meta',
  metaTitle: 'Facebook Retargeting Ads: Setup Guide',
  description:
    'Facebook retargeting ads show your ads to people who already visited your site. Set up the pixel, website audiences and exclusions step by step.',
  publishedAt: '2026-12-23T12:00:00+04:00',
  updatedAt: '2026-12-23T12:00:00+04:00',
  service: 'advertising',
  reviewState: 'llm_reviewed',
  body: [
    {
      type: 'p',
      text: 'Facebook retargeting ads show your ads to people who have already visited your website or interacted with your business. To set them up, install the Meta Pixel on your site, check that its events arrive in Events Manager, build website custom audiences from those events, exclude people who have already converted, and run a separate campaign to those audiences.',
    },
    { type: 'h2', text: 'What you need before retargeting works' },
    {
      type: 'p',
      text: 'Retargeting has no targeting of its own. It reuses data from your site, so it only works if the site sends that data to Meta. Meta\'s developer documentation says that if you are tracking conversions, you can [segment your website visitors into groups](https://developers.facebook.com/documentation/meta-pixel/implementation/custom-audiences.md) based on their actions, and that the pixel must already be tracking standard events, custom events or custom conversions before you can select them.',
    },
    {
      type: 'p',
      text: 'That gives you a simple order of work. Retargeting needs traffic first (see [how to run Facebook ads](/blog/how-to-run-facebook-ads) for the cold campaign that fills the audience), then tracking, then audiences, then a campaign. If you are not sure the first two are in place, the [free marketing audit](/audit) is a quick way to check.',
    },
    { type: 'h2', text: 'Step 1: Install the Meta Pixel and confirm it fires' },
    {
      type: 'p',
      text: 'Meta describes the pixel as [a snippet of JavaScript code](https://developers.facebook.com/docs/meta-pixel/get-started) that tracks visitor activity on your site. You copy the base code from Events Manager and place it on every page. It contains your pixel ID and calls a PageView event automatically; Meta recommends leaving that call intact. Your developer or website builder can add it through the site header or a tag manager.',
    },
    {
      type: 'p',
      text: 'To test, load a page that carries the pixel and look for a new PageView in Events Manager. Meta says to wait a few minutes and refresh if it does not appear. Then add the events that matter to your business, such as a form sent, a call button tapped or a purchase, so that you can build audiences from actions and not only from page views.',
    },
    { type: 'h2', text: 'Step 2: Build website custom audiences by intent' },
    {
      type: 'p',
      text: 'In Ads Manager, choose Audiences, create a custom audience, pick Website as the source and select your pixel. You can include all visitors, people who visited specific pages, or people who fired a chosen event. A rule on the page address works with a "contains" match: Meta\'s [audience documentation](https://developers.facebook.com/docs/marketing-api/audiences/guides/website-custom-audiences) shows a rule where the URL contains a keyword such as "shoes", so one rule can capture every page in a section. Name each audience for its rule and window, for example "Pricing page, 30 days".',
    },
    {
      type: 'p',
      text: 'Split visitors by how close they are to enquiring. A person who read one blog post and a person who opened your pricing page should not see the same ad.',
    },
    {
      type: 'table',
      head: ['Audience', 'Rule', 'Suggested window', 'What the ad should do'],
      rows: [
        ['Warm readers', 'All visitors, or URL contains /blog', '30 days', 'Show proof or a useful guide, not a hard sell'],
        ['High intent', 'Visited services, pricing or contact pages', '14 to 30 days', 'Show a clear offer and one next step'],
        ['Started, did not finish', 'Opened the form or cart event but no completed event', '7 to 14 days', 'Remove the obstacle: answer the usual question, offer a call'],
        ['Social engagers', 'People who engaged with your Page or video', '30 to 60 days', 'Invite them to the site or to message you'],
      ],
    },
    {
      type: 'p',
      text: 'The windows in the table are starting points, not Meta rules. How long to keep someone depends on your sales cycle: a restaurant booking is decided in days, a software or construction purchase in weeks. Meta\'s documentation sets the retention for the API as "between 1 and 180 days", while the same guide says the longest duration that can be set is 365 days, so check the maximum offered in your own Ads Manager and do not build a plan around the longest setting.',
    },
    { type: 'h2', text: 'Step 3: Add exclusions before you launch' },
    {
      type: 'p',
      text: 'Exclusions are what keep retargeting from being wasteful. Meta\'s guide states that [exclusion targeting](https://developers.facebook.com/docs/marketing-api/audiences/guides/website-custom-audiences) "prevents a particular audience from seeing your ad", and lists excluding "people who have already converted" among the ways to make existing ads more efficient.',
    },
    {
      type: 'ul',
      items: [
        'Exclude everyone who completed your main event (enquiry sent, purchase) from every retargeting ad set that asks for it.',
        'Exclude the higher-intent audiences from the broader ones, so a pricing-page visitor sits in one ad set only.',
        'Exclude your retargeting audiences from your cold prospecting ad sets, so you do not pay to reach the same people twice.',
        'Exclude current customers and staff if you can build a list of them, so they do not see offers meant for new buyers.',
      ],
    },
    { type: 'h2', text: 'Step 4: Create the retargeting campaign' },
    {
      type: 'p',
      text: 'Make retargeting its own campaign, with the objective matching the action you want, usually leads or sales, and one ad set per audience from the table. Keep creative short and specific to the step the person reached. Reels and short videos work as retargeting creative too: a short answer to the main objection, or a walk through the service, gives a returning visitor something new instead of repeating the original ad. WakeUP scripts, shoots and edits short videos for ads, Reels and TikTok and tests them in campaigns; see the [video production service](/services/video-production).',
    },
    {
      type: 'p',
      text: 'Set a frequency you can live with and watch it. If the same few people see the ad many times a week, they are likely to tire of it, so check whether results fall as frequency rises. The metrics to read are covered in [Facebook ads metrics explained](/blog/facebook-ads-metrics).',
    },
    { type: 'h2', text: 'What to do when your audience is small' },
    {
      type: 'p',
      text: 'Many company sites in Georgia get a few hundred or a few thousand visitors a month, and not every one of them is reachable on Meta. Meta\'s FAQ says only that you can target an audience [once it reaches "a certain size"](https://developers.facebook.com/docs/marketing-api/audiences/guides/website-custom-audiences) and gives no number, so you find out when Ads Manager lets you use it. With a small site:',
    },
    {
      type: 'ul',
      items: [
        'Combine audiences into one ad set with a longer window instead of running four thin ones.',
        'Add people who engaged with your Page, video or Instagram profile, which grow even when site traffic is low.',
        'Keep the budget modest. A small audience can be saturated quickly, and spending more does not create more people.',
        'Send more people to the site first with a prospecting campaign, then retarget. Expect costs per result to vary by market, and check [what Facebook ads cost](/blog/facebook-ads-cost) before setting the budget.',
      ],
    },
    { type: 'h2', text: 'Consent and the Georgian personal data law' },
    {
      type: 'p',
      text: 'Retargeting uses data about people\'s behaviour on your site, so tell visitors in your privacy notice and cookie banner that you use the Meta Pixel for advertising. The Law of Georgia on Personal Data Protection ([English text on matsne.gov.ge](https://matsne.gov.ge/en/document/view/5827307)) defines direct marketing in Article 3 as the direct and immediate delivery of information "by telephone, mail, email or other electronic means" and in Article 12 allows processing for it only with the person\'s consent. Whether a website custom audience counts as direct marketing in a given case is a question for your lawyer. Uploading a customer list to Meta is the clearer case: do it only for people who agreed to marketing. The same rule is explained in [lead generation vs lead nurturing](/blog/lead-generation-vs-lead-nurturing). This is not legal advice, and the law may have been amended since the version you read, so check the current text.',
    },
    {
      type: 'p',
      text: 'If you want the pixel, events, audiences and exclusions set up and checked each week against cost per lead, that is part of the [advertising service](/services/advertising).',
    },
  ],
}
