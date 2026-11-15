import type { BlogPost } from '@/lib/blog'

export const post: BlogPost = {
  locale: 'en',
  slug: 'track-facebook-ads-utm-parameters',
  title: 'How to track Facebook ads with UTM parameters in GA4',
  metaTitle: 'Track Facebook Ads With UTM Parameters',
  description:
    'How to track Facebook ads with UTM parameters: add a tagged URL at ad level, use dynamic values and read the campaign in GA4 reports.',
  publishedAt: '2027-02-26T15:00:00+04:00',
  updatedAt: '2027-02-26T15:00:00+04:00',
  service: 'advertising',
  reviewState: 'llm_reviewed',
  body: [
    {
      type: 'p',
      text: 'To track Facebook ads with UTM parameters, open the ad in Ads Manager, find the URL parameters field under Tracking, and add utm_source, utm_medium and utm_campaign, ideally with Meta\'s dynamic values so each ad fills its own name. Then open GA4\'s traffic acquisition report and look for your source and medium. Ads Manager never reads these tags: they exist only so that GA4 knows where a visit came from.',
    },
    { type: 'h2', text: 'Why Ads Manager does not do this for you' },
    {
      type: 'p',
      text: 'Ads Manager and GA4 are two separate counters. Ads Manager knows who saw and clicked your ad on Meta. GA4 knows who arrived on your site, and it learns where they came from only from the link they used. If the link carries no tags, a visit from an ad can land under a vague source such as direct or a plain referral, and you cannot say which campaign produced the enquiry. Google\'s [help page on custom campaign URLs](https://support.google.com/analytics/answer/10917952) says missing UTM parameters result in (not set) values in reporting.',
    },
    {
      type: 'p',
      text: 'So the tags are the bridge. They cost nothing, take a few minutes per ad, and are the reason GA4 can later show which campaign brought the calls or form submissions. This post covers the Facebook side. The general naming rules for any channel are in [UTM parameters, explained](/blog/utm-parameters-guide) and are not repeated here.',
    },
    { type: 'h2', text: 'Where the tags go in Ads Manager' },
    {
      type: 'p',
      text: 'Meta\'s [help article on URL parameters](https://www.facebook.com/business/help/1016122818401732) describes the place: while you create or edit an ad, scroll to Tracking and use the URL parameters field below it, or click Build a URL parameter. A parameter is a key and a value joined by an equals sign, and several are joined with an ampersand. The article also says that parameters in the URL parameters field override duplicates in the Website URL field, so keep the tags in one place, not both.',
    },
    {
      type: 'ul',
      items: [
        'Set the tags on each ad. A guide from the tracking vendor Terminus says nothing cascades from campaign or ad set to the ad, so each ad needs its own tags ([Terminus](https://www.terminusapp.com/blog/meta-facebook-ads-utm-tracking-2026/)).',
        'Enter the page address in Website URL without any tags, and put all tags in the URL parameters field. The destination then stays clean and you can change the tags in one place.',
        'If you duplicate an ad, check that the copied tags still say what the new ad is.',
      ],
    },
    { type: 'h2', text: 'A template for the URL parameters field' },
    {
      type: 'p',
      text: 'Meta also supports dynamic parameters: according to the same help article, they provide an automated way to fill in the values of your parameters from information you provide when you set up the ad. In practice the values are placeholders for the campaign, ad set and ad names or IDs, and Ads Manager swaps them for the real ones when the ad is shown. The Build a URL parameter tool shows which placeholders Meta currently offers, so choose from that list rather than from memory or a third-party blog.',
    },
    {
      type: 'table',
      head: ['Parameter', 'What to put', 'Why'],
      rows: [
        ['utm_source', 'facebook (a fixed word, the same every time)', 'GA4 reads this as the source. One spelling means one row in reports'],
        ['utm_medium', 'paid-social', 'Matches GA4\'s Paid Social rule (see below)'],
        ['utm_campaign', 'The dynamic campaign name, or a short code you control', 'Tells you which campaign the visit came from'],
        ['utm_content', 'The dynamic ad name', 'Separates one creative from another inside a campaign'],
        ['utm_id', 'The dynamic campaign ID, if Meta offers it', 'Optional. A campaign ID stays the same when someone renames the campaign, so it is safer to join on'],
      ],
    },
    {
      type: 'p',
      text: 'A pattern would read `utm_source=facebook&utm_medium=paid-social&utm_campaign=` followed by the campaign-name placeholder, then `&utm_content=` followed by the ad-name placeholder. Values are case sensitive in GA4, so Google\'s help page recommends consistent lowercase.',
    },
    { type: 'h2', text: 'Name campaigns and ads before you tag them' },
    {
      type: 'p',
      text: 'A name placeholder copies whatever you typed in Ads Manager into GA4, including capital letters, spaces and mistakes. Terminus makes the same point: renaming a campaign later can break the match between your reports, while an ID stays stable. So decide the naming pattern first, in lowercase Latin letters (Georgian script turns into percent codes in a URL), and name the campaign before you publish the ads.',
    },
    {
      type: 'ul',
      items: [
        'Campaign: goal and offer, plus the month if it repeats, for example consultation-2027-03.',
        'Ad: the idea behind the creative, for example founder-video or price-carousel, not ad3.',
        'Never put names, emails or phone numbers in a name that becomes part of a URL.',
        'Write the pattern once in a shared sheet, and use it for every channel. How to set that up is in the UTM guide linked above.',
      ],
    },
    { type: 'h2', text: 'Find the campaign in GA4' },
    {
      type: 'p',
      text: 'Google\'s documentation of [traffic dimensions](https://support.google.com/analytics/answer/11242841) shows utm_source, utm_medium, utm_campaign, utm_id and utm_content flowing into the source, medium, campaign, ID and content dimensions in reports. Once ads are live with tags, open the traffic acquisition report in GA4 and look at session source and medium. Your clicks should appear as facebook / paid-social.',
    },
    {
      type: 'p',
      text: 'The medium is not arbitrary. Google\'s [default channel group article](https://support.google.com/analytics/answer/9756891) says Paid Social applies when the source matches its list of social sites and the medium matches the pattern `^(.*cp.*|ppc|retargeting|paid.*)$`. A medium of paid-social starts with "paid", so it fits. A medium such as promo or ads fits no paid rule, and Google says Unassigned is the value used when no channel rule matches.',
    },
    {
      type: 'p',
      text: 'The source and medium view cannot go further down to a single campaign. Measure School, a GA4 training company, notes that these acquisition reports cannot drill from source and medium to a specific campaign, so use a campaign dimension or an exploration ([Measure School](https://measureschool.com/tracking-facebook-ads-in-google-analytics-4/)). The simplest way: add a secondary dimension of session campaign to the traffic acquisition report, or filter to facebook / paid-social and read the campaign column.',
    },
    { type: 'h2', text: 'Why Ads Manager and GA4 still disagree' },
    {
      type: 'p',
      text: 'Even with perfect tags the two will not match, and that is normal. Measure School lists the usual reasons:',
    },
    {
      type: 'table',
      head: ['Reason', 'What happens'],
      rows: [
        ['Different clicks', 'Meta counts engagement clicks such as likes and shares; GA4 counts only visits that reach your site'],
        ['Repeat clicks', 'Two clicks on the same ad within one 30-minute session are counted differently by the two tools'],
        ['View-throughs', 'GA4 does not count someone who saw the ad and came back later on their own'],
        ['Blocked tracking', 'Ad blockers and some browser settings keep some visits out of GA4'],
        ['Different credit', 'Meta is more inclined to credit itself for a conversion than GA4 is'],
      ],
    },
    {
      type: 'p',
      text: 'Do not try to make the numbers equal. Use Ads Manager for how the ad performs on Meta, as explained in [Facebook Ads metrics](/blog/facebook-ads-metrics), and use GA4 for what the visits did on your site. For why two tools credit one sale differently, read [marketing attribution models](/blog/marketing-attribution-models).',
    },
    { type: 'h2', text: 'Check it and tie it to leads' },
    {
      type: 'ol',
      items: [
        'Preview the ad and click it from your phone, or use the preview link from Ads Manager, and check that the address in the browser carries the tags.',
        'Open GA4\'s Realtime report within a few minutes and look for the visit under facebook / paid-social.',
        'After a few days, check that the campaign column shows the names you set, with no blanks, capital letters or duplicates.',
        'Make sure the action you care about is a key event. Google defines a key event as "an event that measures an action that\'s particularly important to the success of your business". For forms, see [how to track form submissions in GA4](/blog/track-form-submissions-ga4); for the wider setup, [GA4 for a small business](/blog/ga4-for-small-business).',
        'Read the key events by campaign and ad. Now a campaign with many visits but no enquiries looks different from one with fewer visits and several enquiries.',
      ],
    },
    {
      type: 'p',
      text: 'Tagging is one part of an ad account that can answer for itself. WakeUP\'s [advertising service](/services/advertising) includes an account audit and tracking setup (Meta Pixel, GA4 and conversions) and a monthly report in cost per lead and revenue. If you are not sure whether your campaigns are tagged at all, the [free marketing audit](/audit) is a starting point.',
    },
  ],
}
