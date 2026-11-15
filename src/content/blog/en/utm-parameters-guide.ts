import type { BlogPost } from '@/lib/blog'

export const post: BlogPost = {
  locale: 'en',
  slug: 'utm-parameters-guide',
  title: 'How to use UTM parameters so every click shows up correctly in GA4',
  metaTitle: 'How to Use UTM Parameters in GA4',
  description:
    'How to use UTM parameters: add source, medium and campaign to every link, follow one lowercase naming convention and check the result in GA4.',
  publishedAt: '2027-01-12T09:00:00+04:00',
  updatedAt: '2027-01-12T09:00:00+04:00',
  service: 'audit',
  reviewState: 'llm_reviewed',
  body: [
    {
      type: 'p',
      text: 'To use UTM parameters, add them to the end of every link you share outside your own site: at least utm_source (where the click comes from), utm_medium (the type of channel) and utm_campaign (which campaign). Use lowercase, keep the same spelling every time, and check in GA4 that the visits land under the right channel. The tagging is simple. The hard part is keeping the team consistent.',
    },
    { type: 'h2', text: 'What UTM parameters are' },
    {
      type: 'p',
      text: 'UTM parameters are short labels added to a URL after a question mark, for example `https://example.ge/offer?utm_source=newsletter&utm_medium=email&utm_campaign=spring-offer`. When someone clicks, Google Analytics reads the labels and files the visit under that source, medium and campaign. Without them, a click from a WhatsApp message, an email or a Facebook ad often shows up as direct traffic or as a vague referral, and you cannot tell what produced the enquiry.',
    },
    { type: 'h2', text: 'The three you must use, and the rest' },
    {
      type: 'p',
      text: 'Google\'s help page on [custom campaign URLs](https://support.google.com/analytics/answer/10917952) says that when you add parameters you should always use utm_source, utm_medium and utm_campaign. It lists the others as optional or situational.',
    },
    {
      type: 'table',
      head: ['Parameter', 'What it holds', 'Example'],
      rows: [
        ['utm_source', 'The referrer: the site or list that sends the click', 'facebook, instagram, newsletter, linkedin'],
        ['utm_medium', 'The marketing medium', 'paid-social, email, cpc, social'],
        ['utm_campaign', 'The product, slogan or promotion', 'spring-offer'],
        ['utm_content', 'Tells creatives apart', 'video-a, carousel-b'],
        ['utm_term', 'The paid keyword', 'office-furniture-tbilisi'],
        ['utm_id', 'A campaign ID; Google strongly recommends setting it, together with utm_source_platform, whenever you use UTMs', 'a short code from your sheet'],
      ],
    },
    {
      type: 'p',
      text: 'The same page warns that missing parameters cause (not set) values in reports, and that values are case sensitive: utm_source=google and utm_source=Google are different, so lowercase is the recommended standard. That one rule prevents the most common mess.',
    },
    { type: 'h2', text: 'A naming convention a team can keep' },
    {
      type: 'p',
      text: 'GA4 sorts traffic into default channels using rules on source and medium. Google\'s [default channel group](https://support.google.com/analytics/answer/9756891) article says a medium of email puts the visit in Email, that paid mediums such as cpc, ppc, retargeting or anything starting with "paid" count as paid when the source is a social or search site, and that social mediums such as social or social-media count as Organic Social. Visits that match no rule fall into Unassigned. So pick mediums that match those rules, and your tagged links land in the right channel without any extra work.',
    },
    {
      type: 'table',
      head: ['Field', 'Rule', 'Good', 'Bad'],
      rows: [
        ['Case', 'Lowercase only', 'facebook', 'Facebook, FB, fb_ads'],
        ['Separator', 'Hyphen, no spaces', 'spring-offer', 'Spring Offer, spring_offer'],
        ['Script', 'Latin letters, no Georgian script', 'ghvinis-dgheebi', 'ღვინის დღეები (becomes unreadable percent codes in the URL)'],
        ['Source', 'One name per platform, from a fixed list', 'facebook, instagram, google, newsletter, linkedin, viber', 'three spellings of Instagram'],
        ['Medium', 'One of a short fixed list', 'paid-social, cpc, email, social, referral', 'banner, ads, promo'],
        ['Campaign', 'Goal and offer, plus month if it repeats', 'consultation-2027-02', 'campaign1, new'],
        ['Content', 'The creative or variation', 'video-founder, carousel-prices', 'ad3'],
      ],
    },
    {
      type: 'p',
      text: 'Write the lists down in one shared spreadsheet and make it the only place anyone builds a link. A sheet with columns for the destination page, source, medium, campaign, content and the finished URL, with the finished URL built by a formula, removes most typing errors. Anyone who needs a new source adds it to the list first. This is the part a team has to enforce; the parameters themselves are not hard. Where your reports then feed decisions, see [marketing KPIs](/blog/marketing-kpis).',
    },
    { type: 'h2', text: 'How to tag Facebook, Google and email links' },
    {
      type: 'p',
      text: 'Facebook and Instagram ads. In Ads Manager you do not need to type a different tag on each ad. Meta supports dynamic URL parameters, placeholders that Ads Manager fills in with the campaign, ad set or ad name when the ad is shown; Meta\'s [help page on URL parameters](https://www.facebook.com/business/help/1016122818401732) is the place to check the current list. A common pattern is `utm_source=facebook&utm_medium=paid-social&utm_campaign={{campaign.name}}&utm_content={{ad.name}}`. Because those names come from Ads Manager, name your campaigns and ads by the same convention, in lowercase Latin letters. The ad metrics themselves are explained in [Facebook Ads metrics](/blog/facebook-ads-metrics).',
    },
    {
      type: 'p',
      text: 'Google Ads. Google Ads has its own tagging that links ad clicks to your account. Google\'s [Analytics help](https://support.google.com/analytics/answer/11242841) says that when a Google Ads account is not linked but auto-tagging is on, its campaigns still appear in reports by default as google / cpc, but no campaign data is included for them. So link your Google Ads and Analytics accounts first, and do not hand-tag your Google Ads links on top unless you know why you need to; check one real click in the reports afterwards.',
    },
    {
      type: 'p',
      text: 'Email. Tag every link in a newsletter with the same source and medium (`utm_source=newsletter&utm_medium=email`), and put the send in utm_campaign. Because GA4 treats a medium of email as the Email channel, you get a clean channel report with no extra setup. If you are building the list itself, see [how to build an email list](/blog/build-email-list).',
    },
    {
      type: 'p',
      text: 'Messaging, QR codes and print. WhatsApp, Viber and Telegram messages, QR codes and printed material often pass no referrer, so without tags they tend to land in direct traffic. Tag them: `utm_source=whatsapp&utm_medium=social`, or `utm_source=flyer&utm_medium=qr` for a code on paper. Note that a medium such as qr matches no default rule, so it will appear in Unassigned; that is acceptable if you know it, and you can still read it by source and medium.',
    },
    {
      type: 'p',
      text: 'Organic social posts and your bio link. Tag the link in your Instagram bio and in posts with `utm_medium=social`, so organic social is separated from paid.',
    },
    { type: 'h2', text: 'Mistakes that put traffic in the wrong place' },
    {
      type: 'ul',
      items: [
        'Mixed case or spellings, so one campaign appears as several rows.',
        'A medium that matches no GA4 channel rule, such as banner or promo, which sends the visit to Unassigned.',
        'Tagging links between your own pages. UTM tags are for links that bring people from outside; tags on internal links only add noise to your campaign report.',
        'Leaving out utm_campaign, which produces (not set) in the campaign column.',
        'Naming Meta campaigns one way and typing UTMs another, so reports in Ads Manager and GA4 cannot be matched.',
        'Putting personal data in a tag. Never include names, emails or phone numbers in a URL.',
        'Shortening or changing a link after tagging without testing that the parameters survive the redirect.',
      ],
    },
    { type: 'h2', text: 'Check the tags in GA4' },
    {
      type: 'p',
      text: 'After you publish a tagged link, click it yourself and open GA4\'s real-time report to see the visit appear with the source and medium you set. Google\'s documentation of [traffic dimensions](https://support.google.com/analytics/answer/11242841) shows utm_source, utm_medium and utm_campaign feeding the source, medium and campaign dimensions in reports. A week later, look at the traffic acquisition report: if Unassigned or (not set) is large, the tags or conventions need fixing. The wider setup, including conversions, is in [GA4 for a small business](/blog/ga4-for-small-business).',
    },
    {
      type: 'p',
      text: 'If your reports already show a lot of direct or unassigned traffic and you cannot tell which campaigns bring enquiries, WakeUP\'s [free marketing audit](/audit) looks at your tracking, ads and the path from visit to enquiry.',
    },
  ],
}
