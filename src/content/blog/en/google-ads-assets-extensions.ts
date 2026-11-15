import type { BlogPost } from '@/lib/blog'

export const post: BlogPost = {
  locale: 'en',
  slug: 'google-ads-assets-extensions',
  title: 'Google Ads Assets (Formerly Extensions): Which to Add First and Why',
  metaTitle: 'Google Ads Assets: What to Add First',
  description:
    'Google Ads assets (formerly extensions): add sitelinks, callouts, structured snippets and call assets first. See what each does and when it shows.',
  publishedAt: '2027-02-23T15:00:00+04:00',
  updatedAt: '2027-02-23T15:00:00+04:00',
  service: 'advertising',
  reviewState: 'llm_reviewed',
  body: [
    {
      type: 'p',
      text: 'Google Ads assets are the extra pieces added to your ad beyond the headline and description, and they replaced what used to be called ad extensions. Add them in this order: sitelinks, callouts, structured snippets, then a call asset if phone enquiries matter. They make the ad larger and more useful, which often earns more clicks, and they are free to add.',
    },
    { type: 'h2', text: 'What assets are and what happened to extensions' },
    {
      type: 'p',
      text: 'Google\'s help page defines assets as [content pieces that make up your ad with useful business information](https://support.google.com/google-ads/answer/7331111). Headlines and descriptions are required assets for responsive search ads; the rest are optional. If an older guide talks about "ad extensions", "sitelink extensions" or "call extensions", it means the same things Google now calls sitelink assets, call assets and so on.',
    },
    {
      type: 'p',
      text: 'Two rules shape everything below. Assets are free to add and only show when Google predicts they will improve the ad\'s performance. Google also requires a minimum Ad Rank before it shows additional assets, and ads in lower positions usually get fewer assets than ads in higher positions (all from the same [Google Ads Help page](https://support.google.com/google-ads/answer/7331111)). So a poor ad with weak quality will not be saved by assets, and a good one will not always show them.',
    },
    { type: 'h2', text: 'Why assets can raise click-through rate' },
    {
      type: 'p',
      text: 'An ad with assets takes more space on the results page and gives the searcher more specific reasons to click: a direct link to the page they want, a delivery promise, a phone button. Google says [ads with multiple types of assets often perform better](https://support.google.com/google-ads/answer/12073962), and that the best combination is chosen automatically in each auction. Google does not publish a general click-through rate (CTR) lift for assets as a whole, so test it on your own account instead of expecting a fixed number.',
    },
    {
      type: 'p',
      text: 'Google does give some figures for specific features, all from its own data. It reports that advertisers who raise Ad strength for responsive search ads and sitelinks from Poor to Excellent [see 15% more conversions on average](https://support.google.com/google-ads/answer/2375416) (Google internal data, August 2025), and that showing a business logo and name with Search ads brings [8% more conversions at a similar cost per conversion](https://support.google.com/google-ads/answer/12073962) (Google internal data, global, March 2023). These are vendor numbers about conversions, not CTR, so treat them as direction, not a promise.',
    },
    { type: 'h2', text: 'Priority order at a glance' },
    {
      type: 'table',
      head: ['Order', 'Asset', 'What it adds', 'Add it when'],
      rows: [
        ['1', 'Sitelinks', 'Extra links to specific pages under the ad', 'Always, for every search campaign'],
        ['2', 'Callouts', 'Short phrases such as "free delivery"', 'You have real selling points to state'],
        ['3', 'Structured snippets', 'A header with a list of examples (Brands, Service catalog, Types)', 'You offer several products or services'],
        ['4', 'Call', 'A phone number or call button', 'Phone calls turn into customers'],
        ['5', 'Others (location, lead form, price, promotion, image, logo)', 'Business-specific details', 'The goal or business type fits'],
      ],
    },
    { type: 'h2', text: '1. Sitelinks: send people to the right page' },
    {
      type: 'p',
      text: 'Sitelinks are the clickable links under your ad that go to specific pages: prices, a contact form, a category. Google recommends [at least 6 sitelinks with descriptions for high-volume ad groups and at least 4 at account level](https://support.google.com/google-ads/answer/2375416). Link text is limited to 25 characters in most languages, and the desktop ad can show up to 6 sitelinks and mobile up to 8. Google also warns that sitelinks may not show if it predicts low performance, and that it picks the best ones from the eligible pool.',
    },
    {
      type: 'p',
      text: 'Choose sitelinks that match what searchers want to do next, not your menu: "Book a visit", "Prices", "Delivery", "Reviews". Each destination must work on mobile and match the words on the link. See [Google Ads landing page best practices](/blog/google-ads-landing-page-best-practices).',
    },
    { type: 'h2', text: '2. Callouts: short facts that remove doubt' },
    {
      type: 'p',
      text: 'Callouts add a line of text to the ad; Google\'s example is [phrases like "free delivery" or "24/7 customer support"](https://support.google.com/google-ads/answer/2375499). Use them for facts the customer cares about and that are true: warranty length, working hours, free consultation, same-day dispatch. Do not repeat the headline, and do not claim "best" or "number one" without proof. Write several, because Google chooses which to show.',
    },
    { type: 'h2', text: '3. Structured snippets: list what you sell' },
    {
      type: 'p',
      text: 'A structured snippet pairs a predefined header with a list of values. Google\'s help page gives the headers: Amenities, Brands, Courses, Degree programs, Destinations, Featured hotels, Insurance coverage, Models, Neighborhoods, Service catalog, Shows, Styles and Types. It recommends [at least 4 values per header](https://support.google.com/google-ads/answer/6280012) and says that a mismatch between header and values is the most likely reason a snippet is disapproved. On a computer up to two headers can show; on mobile only one. A clinic would use "Service catalog" with its main treatments; a shop would use "Brands".',
    },
    { type: 'h2', text: '4. Call: only if calls are worth more than clicks' },
    {
      type: 'p',
      text: 'Google advises you to [start by deciding whether receiving a call can be more valuable to you than a regular website click](https://support.google.com/google-ads/answer/12073962), and to use call assets if calls convert at a higher rate. Check this before adding a number: if nobody answers during working hours, a call asset wastes the click. Track calls as conversions so you can compare them with form fills.',
    },
    { type: 'h2', text: 'A note for advertisers in Georgia' },
    {
      type: 'p',
      text: 'Google Ads does not offer Georgian as an ad language: its [language list](https://support.google.com/google-ads/answer/6333734) does not include it, and ads written in a language that is not supported for ads language targeting are disapproved. Plan your asset text in a language that is supported, and check the list again before launch, as it can change.',
    },
    { type: 'h2', text: 'Checklist before you save' },
    {
      type: 'ul',
      items: [
        'At least 4 sitelinks at account level, and 6 with descriptions in high-volume ad groups.',
        'At least 4 callouts with real facts, and no repeats of your headlines.',
        'One or two structured snippet headers with 4 or more values each.',
        'A call asset only if the phone is answered when the ad runs.',
        'Assets are reviewed for approval status in the assets report, and wrong ones are edited and resubmitted.',
        'You compare CTR and conversions before and after, over several weeks.',
      ],
    },
    {
      type: 'p',
      text: 'Assets are one of several levers in an account; the others are covered in [Google Ads optimization tips](/blog/google-ads-optimization-tips), [Quality Score](/blog/google-ads-quality-score) and [how to run Google Ads](/blog/how-to-run-google-ads). WakeUP sets up and manages these within its [Meta and Google Ads service](/services/advertising), and a [free audit](/audit) can check whether your account uses them.',
    },
  ],
}
