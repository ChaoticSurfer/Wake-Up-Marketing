import type { BlogPost } from '@/lib/blog'

export const post: BlogPost = {
  locale: 'en',
  slug: 'google-demand-gen-campaigns',
  title: 'Demand Gen campaigns in Google Ads: what they are and who should test them',
  metaTitle: 'Demand Gen Campaigns in Google Ads',
  description:
    'Demand Gen campaigns in Google Ads show image and video ads on YouTube, Discover and Gmail. How they differ from Display and Meta, and who should test it.',
  publishedAt: '2027-02-25T15:00:00+04:00',
  updatedAt: '2027-02-25T15:00:00+04:00',
  service: 'advertising',
  reviewState: 'llm_reviewed',
  body: [
    {
      type: 'p',
      text: 'Demand Gen campaigns in Google Ads are image and video campaigns that show your ads to people who are not searching for you yet. According to [Google\'s help page](https://support.google.com/google-ads/answer/13695777), they run across YouTube (including Shorts), Discover, Gmail, Maps and the Google Display Network. They work like Meta ads, built on Google\'s audiences and surfaces. They are worth testing if you have strong visual creative, tracked conversions and a product people do not search for by name.',
    },
    { type: 'h2', text: 'What Demand Gen is, and where the ads appear' },
    {
      type: 'p',
      text: 'Google describes Demand Gen as "a tool that integrates video and image assets into a single campaign." You upload videos, images, headlines and descriptions, and Google decides which combination to show to which person on which surface. Supported assets include landscape, square and portrait images, horizontal, square and vertical video, and carousels of 2 to 10 image cards. Google notes that a campaign can be image-only or video-only, but that using both usually performs better.',
    },
    {
      type: 'ul',
      items: [
        'YouTube, including Shorts and in-feed placements: where most video budgets go.',
        'Discover: Google\'s personalised content feed.',
        'Gmail: ads shown inside the inbox.',
        'Google Display Network: extra reach beyond Google\'s own channels. Google\'s overview also lists Maps among the places Demand Gen runs.',
      ],
    },
    {
      type: 'p',
      text: 'Google says you can use Channel Prioritization controls to prioritise Google\'s own channels or the Google Display Network, and you can choose which Demand Gen channels your ads show on, which matters if your creative is vertical video made for YouTube Shorts.',
    },
    { type: 'h2', text: 'Demand Gen vs Display, Video Action and Performance Max' },
    {
      type: 'p',
      text: 'Demand Gen is the newer home for several older formats. Google\'s help page states that "Google Display Ads campaigns are moving to Demand Gen", and says that from June 2026 eligible advertisers can start moving existing campaigns with a migration tool, with new campaigns to be created only as Demand Gen at a later date it does not give. Google\'s help also says that [Demand Gen is replacing Video Action campaigns](https://support.google.com/google-ads/answer/15110871). If you have run Display or Video Action campaigns, you are already close to Demand Gen. The comparison with the campaign types you are more likely to run now:',
    },
    {
      type: 'table',
      head: ['', 'Search', 'Performance Max', 'Demand Gen'],
      rows: [
        ['Who sees it', 'People typing a query', 'People across all Google channels, chosen by Google', 'People who fit audiences you choose, browsing visual surfaces'],
        ['Main inputs', 'Keywords and ad text', 'Assets and audience signals', 'Videos, images and audiences'],
        ['Control', 'High (keywords, match types)', 'Low (automation decides)', 'Medium (you choose audiences and channels)'],
        ['Best for', 'Demand that already exists', 'Sales and leads across channels', 'Creating demand, then converting it'],
      ],
    },
    {
      type: 'p',
      text: 'The table is a practical summary rather than Google\'s wording. Google\'s help page describes the purpose of Demand Gen this way: "Generate demand and deliver business results on Google\'s most visual, entertaining surfaces." For Performance Max in depth, see [Performance Max explained](/blog/performance-max-explained) and [Performance Max vs Search](/blog/performance-max-vs-search). For the older text-ad side, [display ads vs search ads](/blog/display-ads-vs-search-ads) covers why the two behave differently.',
    },
    { type: 'h2', text: 'How it differs from Meta ads' },
    {
      type: 'p',
      text: 'Google itself pitches Demand Gen to social advertisers, saying the campaigns "can help social advertisers reach up to 3 billion monthly active users." The mechanics are similar: a feed, a creative-led format and audience-based targeting. The differences that matter in practice:',
    },
    {
      type: 'ul',
      items: [
        'Audience data: Meta knows what people do on Facebook and Instagram. Google knows what people search, watch on YouTube and read in Gmail and Discover. Neither is better in general; they see different behaviour.',
        'Placements: Demand Gen runs on Google surfaces, so there are no Instagram Stories or Reels placements. Its vertical video placement is YouTube Shorts.',
        'Language: Google Ads does not support Georgian as an ad language, and its [language page](https://support.google.com/google-ads/answer/6333734) says ads in an unsupported language are disapproved. Demand Gen ads for a Georgian audience must be written in a supported language such as English or Russian. Georgian-language copy therefore belongs on Meta and your own site.',
        'Intent: neither platform shows you people who typed your service name. Both depend on the creative to stop the scroll.',
      ],
    },
    {
      type: 'p',
      text: 'Because of the language limit, Demand Gen is rarely the first test for a company whose customers read mostly Georgian. It suits advertisers with English-speaking or Russian-speaking audiences, and video-led creative where the picture carries the message. Our guide to [Facebook ads vs Google ads](/blog/facebook-ads-vs-google-ads) explains the broader split between the two platforms.',
    },
    { type: 'h2', text: 'Setting it up without wasting the learning period' },
    {
      type: 'p',
      text: 'Google gives several concrete rules in its help pages. They turn into a short checklist:',
    },
    {
      type: 'ol',
      items: [
        'Set up conversion tracking first. Google recommends confirming that conversion tracking and the Google tag work before you launch. [GA4 for small business](/blog/ga4-for-small-business) covers the basics.',
        'Start with Maximize Conversions if you have no target cost. The [Demand Gen FAQ](https://support.google.com/google-ads/answer/14509385) suggests moving to target CPA or target ROAS "after your campaign received at least 50 conversions".',
        'Set a budget that lets the system learn. For target CPA bidding, Google\'s [Demand Gen help page](https://support.google.com/google-ads/answer/13695777) recommends a budget "at least 10 times your target CPA".',
        'Combine similar audiences in fewer ad groups. The FAQ says this "can help broaden audience targeting without diluting the relevancy of your ads."',
        'Change bids gradually. After you switch to target ROAS, the FAQ says to wait for the learning period to pass and then make bid changes of +/-10% based on your results.',
        'Give it video and images together, in several aspect ratios.',
      ],
    },
    {
      type: 'p',
      text: 'On results, Google reported in February 2026 that [advertisers who adopted at least three of its four Demand Gen best practices](https://blog.google/products/ads-commerce/demand-gen-drop-february-2026/) "saw on average over 40% more conversions". Google\'s article groups its advice into audiences, bid and budget, creative, and data strength. The footnote cites Google internal data for April 2024 to December 2025, with no baseline or method given, so treat the figure as direction, not a promise for your account.',
    },
    { type: 'h2', text: 'Which businesses should test Demand Gen' },
    {
      type: 'p',
      text: 'Demand Gen is a test, not a default. It tends to make sense when most of these are true:',
    },
    {
      type: 'ul',
      items: [
        'You can produce short video and photo creative regularly. Without it, the campaign has nothing to optimise. See [Facebook video ad creative](/blog/facebook-video-ad-creative) for what makes a video hold attention in a feed; the same rules apply on YouTube Shorts.',
        'Your Search campaigns already capture most of the demand that exists and you want to reach more people.',
        'Conversions are tracked and you have enough of them for bidding to learn from.',
        'Your product benefits from being seen before it is searched: a new brand, an unfamiliar category, a visual product, an event or an offer with a date.',
        'You can write ads in a language Google Ads supports, and your audience can read it.',
      ],
    },
    {
      type: 'p',
      text: 'It is a poor fit if you have no tracking, one video and a small budget, or customers who all search for you by name already. In that case, fix the Google Ads basics first (see [how to run Google Ads](/blog/how-to-run-google-ads)) and revisit Demand Gen once Search and remarketing are working.',
    },
    { type: 'h2', text: 'How to judge a test' },
    {
      type: 'p',
      text: 'A Demand Gen campaign may not match a Search campaign on cost per lead, because it meets people earlier. Judge it on a mix: conversions it records, new customers or new visitors it brings, and whether branded searches or direct traffic rise during the test. Run it for a defined period, for example four to six weeks, with a budget set in advance. Do not compare day-one results with a mature account. If you want an outside view of your current tracking and account structure before adding a new campaign type, WakeUP\'s [advertising service](/services/advertising) covers Meta and Google campaigns, and the [free audit](/audit) is the first step.',
    },
  ],
}
