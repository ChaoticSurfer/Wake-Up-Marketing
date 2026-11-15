import type { BlogPost } from '@/lib/blog'

export const post: BlogPost = {
  locale: 'en',
  slug: 'google-ads-remarketing',
  title: 'Google Ads remarketing: how it works and which audiences to build first',
  metaTitle: 'Google Ads Remarketing Explained',
  description:
    'Google Ads remarketing shows ads to people who already visited your site. How lists and the Google tag work, what to build first, and how to test it.',
  publishedAt: '2026-12-28T12:00:00+04:00',
  updatedAt: '2026-12-28T12:00:00+04:00',
  service: 'advertising',
  reviewState: 'llm_reviewed',
  body: [
    {
      type: 'p',
      text: 'Google Ads remarketing shows your ads to people who have already interacted with your business, for example visitors to your website. A tag on your site adds each visitor to a list according to rules you set, and a campaign aimed at that list shows ads as those people browse Google or partner sites. A list needs more than 100 active users before it is eligible to run ads, which is the main limit for a site with modest traffic.',
    },
    { type: 'h2', text: 'What Google Ads remarketing is today' },
    {
      type: 'p',
      text: 'In Google Ads the feature is now called "your data" and the lists are "your data segments". Google [describes it](https://support.google.com/google-ads/answer/2453998) as a way to "re-engage people who have previously interacted with your brand or services on mobile or desktop." The segments can be built from website visits, app use, YouTube engagement, lead form submissions or an uploaded customer contact list (Customer Match).',
    },
    {
      type: 'p',
      text: 'The ads reach people "as they browse Google or partner websites" on the Display Network, and can also reach them when they search on Google after leaving your site. Dynamic remarketing goes a step further and shows the specific products or services someone viewed. This post covers the mechanics and the order to build things in. For campaign setup in general, see [how to run Google Ads](/blog/how-to-run-google-ads), and for tuning an account that is already live, [Google Ads optimization tips](/blog/google-ads-optimization-tips).',
    },
    { type: 'h2', text: 'How the Google tag fills your lists' },
    {
      type: 'p',
      text: 'Lists fill themselves once your site is tagged. Google\'s [segment setup page](https://support.google.com/google-ads/answer/2476688) says visitors are added to your segments "based on the rules you\'ve set". The Google tag is the block of code that does this, and the page says you need one Google tag per Google Ads account, installed on every page of your site. Optional event snippets go on the specific pages where you want to track actions such as purchases or form submissions.',
    },
    {
      type: 'p',
      text: 'Two settings decide who is in a list:',
    },
    {
      type: 'ul',
      items: [
        'The rule: which pages or actions put someone on the list, such as visited the pricing page, or submitted a form.',
        'The membership duration: according to Google\'s [membership duration page](https://support.google.com/google-ads/answer/2472738), the default is 30 days on Display and Search and the maximum is 540 days. A return visit resets the clock to the full duration. Choose the duration to fit how long your own buyers take to decide.',
      ],
    },
    {
      type: 'p',
      text: 'A company that sells a service with a six-week decision cycle needs a longer window than a shop selling a low-price item. Changing the duration also applies to current members, so change it deliberately.',
    },
    { type: 'h2', text: 'The 100-user rule, and what it means for a smaller site' },
    {
      type: 'p',
      text: 'Google\'s [segment requirements page](https://support.google.com/google-ads/answer/2454000) says "only segments with more than 100 active users will be eligible to run ads" and warns that "granular segments may not be eligible to run as they may not meet the minimum requirements." According to the duration page, customer lists uploaded or refreshed after 1 February 2024 need 100 active users, while older lists still need the earlier minimum of 1,000 matched users.',
    },
    {
      type: 'p',
      text: 'For a site with a few hundred visits a month, this shapes the plan:',
    },
    {
      type: 'ul',
      items: [
        'Start with one broad list, such as all visitors, rather than five narrow ones that never reach 100.',
        'Lengthen the duration so people stay on the list longer, if your sales cycle justifies it.',
        'Check the audience size in the account before building a campaign around a list. A list under the minimum will not run ads.',
        'If visits are too low, grow traffic first with search ads or content; remarketing multiplies existing traffic, it does not create it.',
      ],
    },
    { type: 'h2', text: 'Which audiences to build first' },
    {
      type: 'p',
      text: 'Build in order of how close the person is to buying, and only split once the broad list is healthy.',
    },
    {
      type: 'table',
      head: ['Audience', 'Rule', 'Why it comes in this order'],
      rows: [
        ['All visitors', 'Anyone who loaded a page, 30 to 90 days', 'Largest, so it reaches the 100-user minimum first'],
        ['Key page viewers', 'Pricing, service or contact page', 'Shows real interest; build once volume allows'],
        ['Started but did not finish', 'Opened the form or cart but no conversion', 'Closest to buying, usually small'],
        ['Customer list', 'Uploaded contacts of existing clients', 'Use to exclude buyers, or for a separate offer'],
      ],
    },
    {
      type: 'p',
      text: 'Exclude people who have already converted. Google\'s [exclusions page](https://support.google.com/google-ads/answer/2549058) explains that you can exclude your data segments from Search, Display, Demand Gen, Standard Shopping, Video and Performance Max campaigns, but only after the campaign exists: "Audience exclusions aren\'t available during campaign creation". Without the exclusion, a client who has just booked can keep seeing your ads. Google also notes exclusions may not apply to users who opted out of ad personalisation.',
    },
    { type: 'h2', text: 'Consent and policy limits' },
    {
      type: 'p',
      text: 'Remarketing depends on cookies or app identifiers, so what the visitor agreed to matters. Google\'s [consent mode](https://support.google.com/google-ads/answer/10000067) lets you pass the visitor\'s consent status to Google. It does not provide a banner: it works with the cookie banner you already have. In basic mode, tags are blocked until consent is given, and "when the user doesn\'t consent, no data is transferred to Google at all." In advanced mode, tags load and send cookieless pings when consent is denied. Google notes regional behaviour differences for the EEA, Switzerland and the UK. If your audience includes visitors from those areas, set consent mode up; for local legal requirements, ask a lawyer.',
    },
    {
      type: 'p',
      text: 'Google also restricts what you may remarket. Its [personalised advertising policy](https://support.google.com/adspolicy/answer/143465) says your data segments "cannot be used if promoting in sensitive interest categories", which include health, gambling and religious beliefs. Predefined Google audiences remain available there.',
    },
    { type: 'h2', text: 'Checking that remarketing is incremental' },
    {
      type: 'p',
      text: 'Remarketing targets people who were already interested, so it can take credit for sales that would have happened anyway. The reported conversion count alone cannot tell you otherwise. The question to ask is how many conversions happened because of the ads.',
    },
    {
      type: 'p',
      text: 'Google\'s own answer is [Conversion Lift](https://support.google.com/google-ads/answer/12003020), a controlled experiment that splits an audience into a group that sees your ads and a group that does not. The difference in conversions between them is "the \'lift,\' or the increase in conversions that are caused by the presence of the ad." Google says it is not available for all accounts and you must contact your account representative to get access, so a small advertiser should expect to use a simpler check:',
    },
    {
      type: 'ol',
      items: [
        'Pause remarketing for a set period, for example four weeks, or hold back one region or product line.',
        'Compare total enquiries or sales for that period against a comparable one with remarketing on, using your own CRM or sales records, not only the ad platform.',
        'Look at cost per enquiry across the whole business, not just the remarketing campaign.',
        'Keep remarketing only if total results fall when it is off, or if it clearly costs less than the alternatives.',
      ],
    },
    {
      type: 'p',
      text: 'This is a rough test, since seasons and other campaigns also move results, but it protects you from paying for visits that were coming back anyway. Track the figures with the measures in [marketing KPIs](/blog/marketing-kpis), and make sure the landing page itself converts, which [website conversion rate optimization](/blog/website-conversion-rate-optimization) covers.',
    },
    { type: 'h2', text: 'Where it fits' },
    {
      type: 'p',
      text: 'Remarketing is a second step. Search and other campaigns bring people in; remarketing follows up with the ones who left without enquiring. If you want help with the tag, lists, exclusions and testing, WakeUP\'s [advertising service](/services/advertising) includes remarketing campaigns on Google among its listed deliverables, and the [free marketing audit](/audit) is a way to find out whether your tracking is ready for it.',
    },
  ],
}
