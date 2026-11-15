import type { BlogPost } from '@/lib/blog'

export const post: BlogPost = {
  locale: 'en',
  slug: 'google-ads-quality-score',
  title: 'Google Ads Quality Score: what it is, how to read it and what actually moves it',
  metaTitle: 'Google Ads Quality Score Explained',
  description:
    'Google Ads Quality Score is a 1-10 diagnostic, not a KPI. See its three parts, how to read them in your account and the few fixes that improve them.',
  publishedAt: '2027-01-30T18:00:00+04:00',
  updatedAt: '2027-01-30T18:00:00+04:00',
  service: 'advertising',
  reviewState: 'llm_reviewed',
  body: [
    {
      type: 'p',
      text: 'Google Ads Quality Score is a 1 to 10 rating, shown per keyword, that tells you how your ad quality compares with other advertisers. It is built from three parts - expected clickthrough rate, ad relevance and landing page experience - and Google calls it a diagnostic tool. Use it to find which keyword or ad is weak. Do not use it as a goal: Google itself says it should not be optimized.',
    },
    {
      type: 'p',
      text: 'People often chase a 10 and rewrite whole accounts for a number. This guide shows what the score is made of, where to see it, how to read it, and which fixes tend to move it. For how the click price is set, see [Google Ads cost](/blog/google-ads-cost); for the wider tune-up routine, see [Google Ads optimization tips](/blog/google-ads-optimization-tips).',
    },
    { type: 'h2', text: 'What Quality Score is, and what it is not' },
    {
      type: 'p',
      text: 'Google\'s help page says: "Quality Score is a diagnostic tool meant to give you a sense of how well your ad quality compares to other advertisers." The [same page](https://support.google.com/google-ads/answer/6167118) says it is measured on a scale from 1 to 10 and is available at the keyword level, and adds: "Quality Score is not an input in the ad auction."',
    },
    {
      type: 'p',
      text: 'That last point is easy to misread. The number you see in the keyword table is a summary for you. The auction uses its own measurements made at the time of each search. Google\'s [Ad Rank explanation](https://support.google.com/google-ads/answer/1722122) says Ad Rank incorporates auction-time measurements like expected CTR, ad relevance and landing page experience, and that higher quality ads can often lead to lower costs per click. So the three parts matter for what you pay and where you show, while the 1 to 10 figure is only a readout of them.',
    },
    {
      type: 'p',
      text: 'The help page is also direct about how to treat it: Quality Score "is not a key performance indicator and should not be optimized or aggregated with the rest of your data." Revenue, cost per lead and lead quality are the results. Quality Score is a clue to why those results are what they are.',
    },
    { type: 'h2', text: 'The three parts' },
    {
      type: 'table',
      head: ['Part', 'What Google says it is', 'What a weak rating usually means'],
      rows: [
        ['Expected clickthrough rate', 'The likelihood that your ad will be clicked when shown', 'The ad does not look like an answer to this search'],
        ['Ad relevance', 'How closely your ad matches the intent behind a user\'s search', 'The keyword and the ad text talk about different things, or one ad group serves too many topics'],
        ['Landing page experience', 'How relevant and useful your landing page is to people who click your ad', 'The page does not deliver what the ad promised, or is hard to use'],
      ],
    },
    {
      type: 'p',
      text: 'Each part is rated Above average, Average or Below average. These are relative ratings: the help page says they compare you with advertisers whose ads showed for the same search over the last 90 days, so a rating can change when competitors change.',
    },
    { type: 'h2', text: 'Where to see it and how to read it' },
    {
      type: 'ol',
      items: [
        'In Google Ads, open Keywords in the Campaigns menu.',
        'Select the columns icon in the upper right corner of the table and add the Quality Score columns: the score and the three component ratings.',
        'Sort by cost or clicks, not by score, so you look at keywords that spend money first.',
        'For each costly keyword with a low score, find the one component rated Below average. That is where to work.',
        'Do not chase keywords that show a dash instead of a score. Google\'s tip for those is to use Keyword Planner to find higher-volume keywords, or to broaden match types so the keyword enters more auctions and collects enough data for a score.',
      ],
    },
    {
      type: 'p',
      text: 'A low score on a keyword that spends nothing is not a problem. A low score on the keyword that takes a third of your budget is. Read the score together with cost per conversion: a keyword with a middling score that brings customers at a good price needs no fixing.',
    },
    { type: 'h2', text: 'Fixes that move each part' },
    {
      type: 'p',
      text: 'Google\'s [Quality Score guidance](https://support.google.com/google-ads/answer/13738235) lists one lever per part: match the language of your ad text more directly to user search terms and group keywords by theme (ad relevance), make your offer more compelling in the ad text (expected CTR), and make sure the landing page matches users\' expectations (landing page experience). In practice that becomes the following.',
    },
    {
      type: 'ul',
      items: [
        'Split ad groups by theme. One group for one intent, with ads that speak to it. A group that covers "emergency plumber" and "plumbing courses" cannot have an ad that fits both.',
        'Put the searcher\'s words in the ad. If the keyword is "office cleaning", a headline that says so should be in the ad, not only a general brand line. Avoid stuffing other topics into it just to cover more keywords; that dilutes the group.',
        'Cut irrelevant traffic with negative keywords. Sort the search terms report by impressions and exclude queries with many impressions and no clicks: they only lower your clickthrough rate. [Negative keywords](/blog/google-ads-negative-keywords) shows the method and [match types](/blog/google-ads-match-types) explains how queries are matched.',
        'Make the offer concrete in the ad: what you do, for whom, and one reason to click, such as a clear next step. Test two or three versions of the text rather than rewriting everything.',
        'Send each ad group to the page that answers it. A page about the exact service, with the same promise as the ad, a clear action and a fast load, beats the home page. See [how to improve website speed](/blog/how-to-improve-website-speed) if the page is slow.',
      ],
    },
    {
      type: 'p',
      text: 'Changes take time to show. Give a change enough clicks to be judged, change one thing per ad group at a time, and note the date so you know what caused any move.',
    },
    { type: 'h2', text: 'What to ignore' },
    {
      type: 'ul',
      items: [
        'A target score. Google says not to optimize it, and there is no score that guarantees a result.',
        'An account-wide average. The score exists per keyword, and Google advises against aggregating it.',
        'Tricks aimed only at the number, such as adding many unrelated keywords or filler text. If it does not help the searcher, it will not help the account.',
        'The score when there is no data. Judge new keywords on their conversions once they have enough traffic.',
      ],
    },
    {
      type: 'p',
      text: 'Google\'s page also notes that Quality Score may not capture factors such as device, user location and time of day, so judge the account on clickthrough rate, conversion rate and cost per conversion, not on the score alone.',
    },
    { type: 'h2', text: 'A note for advertisers in Georgia' },
    {
      type: 'p',
      text: 'Ad relevance depends on the language of the ad matching the search, but Georgian is not on Google\'s [list of supported ad languages](https://support.google.com/google-ads/answer/6333734), and ads in an unsupported language are disapproved. So Georgian-language text ads are not an option on Google, and relevance work for a Georgian business is done in the supported languages that buyers actually search in. [Is Google Ads worth it?](/blog/is-google-ads-worth-it) explains what this means for the decision to advertise there at all.',
    },
    { type: 'h2', text: 'Getting a second opinion' },
    {
      type: 'p',
      text: 'If scores are low and costs high but you cannot see why, an account review usually finds the mismatch between keywords, ads and pages quickly. WakeUP\'s [advertising service](/services/advertising) covers Meta and Google Ads management, including search campaigns, weekly creative tests and reporting in cost per lead. To have your current setup looked at first, request the [free marketing audit](/audit).',
    },
  ],
}
