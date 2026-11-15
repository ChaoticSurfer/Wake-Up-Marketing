import type { BlogPost } from '@/lib/blog'

export const post: BlogPost = {
  locale: 'en',
  slug: 'how-to-do-competitor-analysis',
  title: 'How to do competitor analysis in marketing, using free tools',
  metaTitle: 'How to Do Competitor Analysis (Free)',
  description:
    'How to do competitor analysis in marketing with free tools: who to compare in Georgia, which channels to check and a one-page output to act on.',
  publishedAt: '2027-01-27T12:00:00+04:00',
  updatedAt: '2027-01-27T12:00:00+04:00',
  service: 'audit',
  reviewState: 'llm_reviewed',
  body: [
    {
      type: 'p',
      text: 'To do competitor analysis in marketing, pick five companies your customers actually compare you with, check the same channels for each - website, search results, ads, social media and reviews - using free tools, and record what you find in one table. End with a one-page summary: where they are stronger, where you are, and the two or three things you will change.',
    },
    { type: 'h2', text: 'Choose who to compare: three kinds of competitor' },
    {
      type: 'p',
      text: 'Most lists stop at the companies you already know. Customers compare more widely, so include three groups and aim for about five names in total.',
    },
    {
      type: 'ul',
      items: [
        'Direct competitors: companies that sell the same thing to the same customer in Georgia. Ask your sales team who the customer mentioned last time.',
        'Search competitors: the companies that appear when you search your own services in Georgian and in English. They may not be rivals in the real world, but they take the click.',
        'Substitutes: what the customer does instead of buying from anyone, such as doing it in-house, using a foreign website or using a Facebook seller. These rarely appear on competitor lists and often decide the sale.',
      ],
    },
    {
      type: 'p',
      text: 'Keep the list short. Five companies checked properly are more useful than twenty checked quickly. If you have not described your customer yet, do that first with [how to create a buyer persona](/blog/how-to-create-buyer-persona), because "better" only means something to a specific buyer.',
    },
    { type: 'h2', text: 'Check each channel with free tools' },
    {
      type: 'p',
      text: 'Use the same short list of questions for every competitor, so the results can be compared. Set aside about 20 to 30 minutes per company.',
    },
    {
      type: 'table',
      head: ['Channel', 'Free tool', 'What to write down'],
      rows: [
        ['Website', 'The site itself, on a phone and a laptop', 'The headline, the main offer, whether prices are shown, languages offered, how to contact them, any proof (clients, reviews)'],
        ['Search results', 'Google, in a private window', 'Which of your key searches they appear for, in Georgian and in English, and whether they have a map listing or an ad'],
        ['Paid ads on Meta', 'Meta Ad Library', 'Which ads are running, the offers, formats (video, image)'],
        ['Paid ads on Google', 'Google Ads Transparency Center', 'Whether they advertise on Google at all, and the ad text and format'],
        ['Social media', 'Their public pages', 'Platforms used, posting rhythm, the post types that get replies, how they answer comments'],
        ['Reviews', 'Google Maps, Facebook, industry sites', 'Rating, number of reviews, recurring praise and complaints, whether the owner replies'],
      ],
    },
    { type: 'h2', text: 'Ads: see what competitors are paying to say' },
    {
      type: 'p',
      text: 'Meta describes its Ad Library as [a searchable database in which people can look up all active ads running across Meta products](https://transparency.meta.com/researchtools/ad-library-tools). Search for each competitor\'s page name and filter by country. Note the offers, the creative style, whether they use video, and how many different ads are live, which hints at how much they test.',
    },
    {
      type: 'p',
      text: 'Google\'s [Ads Transparency Center](https://blog.google/innovation-and-ai/technology/ads/announcing-the-launch-of-the-new-Ads-Transparency-Center/), announced in March 2023, is described as a searchable hub of ads served from verified advertisers. Google says you can see which ads were shown in a certain region, the last date an ad ran and its format. Neither tool shows what a competitor spends or how well an ad performs, so do not guess budgets from what you see. Compare messages and offers, not money. Ad costs on your own side are covered in [Facebook ads cost](/blog/facebook-ads-cost).',
    },
    { type: 'h2', text: 'Search: who shows up for the searches that matter' },
    {
      type: 'p',
      text: 'Write ten searches a customer might type, in Georgian and in English if both apply: a service plus the city, a problem, a comparison. Search each in a private window and record the first page. Look at who owns the top spots, whether they are ads, map listings or normal results, and what kind of page ranks (a service page, a blog post, a directory).',
    },
    {
      type: 'p',
      text: 'The pattern matters more than any single position. If directories and map listings fill the page, you need a good map profile before a good blog; see [local SEO tips](/blog/local-seo-tips). If competitors are missing from your Georgian searches, that is an opening. [Keyword research for SEO](/blog/keyword-research-for-seo) covers turning these searches into a plan, and the [Google Search Console guide](/blog/google-search-console-guide) shows which searches already bring you visitors.',
    },
    { type: 'h2', text: 'Social media and reviews: the quiet signals' },
    {
      type: 'p',
      text: 'On social media, look for a pattern, not a count of followers. Which platform do they use most? Do posts show real work or only stock images? Which posts attract comments from customers rather than friends? How fast do they reply? Your own accounts can be reviewed the same way with the [social media audit](/blog/social-media-audit).',
    },
    {
      type: 'p',
      text: 'Reviews show what customers value and what annoys them, in their own words. Read the five most recent negative reviews of each competitor. If three of them mention slow answers, speed of reply is a way to stand out, and it costs nothing to promise and keep.',
    },
    { type: 'h2', text: 'Write the one-page output' },
    {
      type: 'p',
      text: 'The analysis is only worth doing if it changes a decision. Put it on one page with these parts.',
    },
    {
      type: 'ol',
      items: [
        'The five competitors, one line each: who they are and which group they belong to.',
        'A comparison grid: rows are the channels above, columns are you and the five companies, cells are short facts ("runs video ads", "no prices shown", "4.8 on Google, 120 reviews").',
        'Where they are stronger than you, in order of how much it could cost you.',
        'Where you are stronger, and whether customers can see it on your site and in your ads.',
        'Gaps nobody fills: a question no site answers, a language no one serves, a channel nobody uses.',
        'Two or three actions with an owner and a date, and the number that will show whether they worked ([marketing KPIs](/blog/marketing-kpis) lists options).',
      ],
    },
    {
      type: 'p',
      text: 'Feed the result into your plan ([marketing strategy for small business](/blog/marketing-strategy-for-small-business)), then repeat the check every six months. A competitor\'s offer or price page can change in a week, so date every note.',
    },
    { type: 'h2', text: 'Limits of a free-tools analysis' },
    {
      type: 'ul',
      items: [
        'You can see what competitors publish, not what they earn or spend. Treat third-party traffic estimates and budget guesses as rough.',
        'Public pages show the marketing, not the sales process behind it. Calling or messaging a competitor as a customer is a legitimate way to see how they answer, but do not misrepresent who you are.',
        'Copying a competitor is rarely the answer. Use the analysis to find what you do better and say it clearly.',
      ],
    },
    {
      type: 'p',
      text: 'If you would like an outside view of your own ads, website and sales process to put next to this, WakeUP offers a [free marketing audit](/audit).',
    },
  ],
}
