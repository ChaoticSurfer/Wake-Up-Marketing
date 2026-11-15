import type { BlogPost } from '@/lib/blog'

export const post: BlogPost = {
  locale: 'en',
  slug: 'how-to-run-google-ads',
  title: 'How to run Google Ads: a Search campaign step by step',
  metaTitle: 'How to Run Google Ads Step by Step',
  description:
    'How to run Google Ads: set up conversion tracking, a Search campaign, keywords, ads and budget in order, and what to know about Georgian.',
  publishedAt: '2026-12-08T12:00:00+04:00',
  updatedAt: '2026-12-08T12:00:00+04:00',
  service: 'advertising',
  reviewState: 'llm_reviewed',
  body: [
    {
      type: 'p',
      text: 'To run Google Ads, create an account, set up conversion tracking, then build a Search campaign: pick a goal, set bidding, choose locations and languages, set a daily budget, add keyword-themed ad groups and write the ads. Do the tracking before you spend anything, because it is what tells you which clicks turned into enquiries. This guide follows that order for a first Search campaign.',
    },
    { type: 'h2', text: 'Before you start: account and goal' },
    {
      type: 'p',
      text: 'New advertisers go through [three setup steps](https://support.google.com/google-ads/answer/6324971): add business information, set a campaign goal and budget, and enter payment details. Google then points you to the campaign type that suits the goal you picked.',
    },
    {
      type: 'p',
      text: 'Decide the goal in business terms before you open the account. For most companies that is enquiries: calls, form submissions or WhatsApp messages. Write down what one enquiry is worth, because every later choice, from keywords to budget, is judged against it. If you are still choosing between channels, see [Facebook Ads vs Google Ads](/blog/facebook-ads-vs-google-ads) and [Google Ads vs SEO](/blog/google-ads-vs-seo).',
    },
    { type: 'h2', text: 'Set up conversion tracking first' },
    {
      type: 'p',
      text: 'Without conversion tracking, Google Ads can report clicks but not results. Google\'s [conversion setup guide](https://support.google.com/google-ads/answer/6095821) has three steps: connect a data source by scanning your domain, create the conversion actions you want to count, then finish setup and confirm measurement.',
    },
    {
      type: 'p',
      text: 'There are two sources to choose from:',
    },
    {
      type: 'ul',
      items: [
        'The Google tag, which creates conversions straight from page loads or clicks on your site. Google says a URL-based method is best for simple page-load tracking, while a code-based method is required for button clicks, dynamic values or transaction IDs.',
        'Google Analytics events, which reuse what you already track in GA4. Only events marked as key events can be imported.',
      ],
    },
    {
      type: 'p',
      text: 'A typical first set is a thank-you page after a form, a click on the phone number and a click on a messaging button. Open the site yourself, trigger each action and check that it registers before you launch.',
    },
    { type: 'h2', text: 'Create the campaign and set bidding' },
    {
      type: 'p',
      text: 'The steps below follow Google\'s [Create a Search campaign](https://support.google.com/google-ads/answer/9510373) guide. Create a new campaign, choose an objective (Sales, Leads or Website traffic), then select Search as the campaign type.',
    },
    {
      type: 'p',
      text: 'Next comes bidding. Google puts it plainly: "While targeting determines who views your ads, bidding determines what you want those people to do." Pick the strategy that matches your objective. A campaign aimed at enquiries should optimise for conversions, which only works if the tracking above is in place.',
    },
    {
      type: 'p',
      text: 'You also choose networks: whether ads can appear on search partner sites, and whether to add the Display Network. For a first Search campaign, keeping the Display Network off keeps the results easier to read.',
    },
    { type: 'h2', text: 'Set location and language for Georgia' },
    {
      type: 'p',
      text: 'Locations can be [countries, areas within a country, or a radius](https://support.google.com/google-ads/answer/1722043) around a point such as your office, with a minimum radius of 1 km. When you pick a city, add the country to the name, as Google advises, so you do not target a same-named place elsewhere. A Tbilisi shop might target Tbilisi only; a service company might target the whole of Georgia.',
    },
    {
      type: 'p',
      text: 'Google recommends the default [Presence or interest](https://support.google.com/google-ads/answer/1722038) option, which reaches people in your locations and people who have shown interest in them. The narrower Presence option limits ads to people likely to be in the area. Exclusions work on presence by default.',
    },
    {
      type: 'p',
      text: 'Language needs more care in Georgia. Google\'s [list of languages available for ads](https://support.google.com/google-ads/answer/6333734) includes English and Russian but, as of November 2026, not Georgian. Google\'s [advertising policy](https://support.google.com/adspolicy/answer/15576420) lists ad or destination content in an unsupported targeting language as not allowed, and the language list page adds that ads created in a language that is not supported for targeting will be disapproved. Google also says that from September 2026 the [campaign-level language setting is removed](https://support.google.com/google-ads/answer/1722078) for Search campaigns, and ads are matched by the language of the ads themselves.',
    },
    {
      type: 'p',
      text: 'In practice, plan your first campaign in English or Russian, depending on who you want to reach, and send clicks to a landing page in the same language. Before you build a Georgian-language campaign, check the current language list and policy pages above and your own account, since both can change.',
    },
    { type: 'h2', text: 'Build ad groups, keywords and match types' },
    {
      type: 'p',
      text: 'Set a daily budget in the campaign, then create ad groups. Give each ad group one theme and enter its keywords one per line. Google [stresses relevance](https://support.google.com/google-ads/answer/9510373) between keywords and ads, so "wedding photographer Tbilisi" and "corporate photography Tbilisi" belong in separate groups.',
    },
    {
      type: 'p',
      text: 'To find searches people actually type, use [Keyword Planner](https://support.google.com/google-ads/answer/7337243), where you enter words or a website related to your business to get keyword ideas. Google notes that keywords with very low search volumes are not discoverable or forecastable, so a niche Georgian term may show no data even when people search for it.',
    },
    {
      type: 'p',
      text: 'Each keyword has a [match type](https://support.google.com/google-ads/answer/7478529), set with punctuation:',
    },
    {
      type: 'table',
      head: ['Match type', 'How you write it', 'What Google says'],
      rows: [
        ['Broad', 'tennis shoes', 'The default for all keywords and the most comprehensive; reaches the most searches'],
        ['Phrase', '"tennis shoes"', 'Ads may show on searches that include the meaning of your keyword'],
        ['Exact', '[tennis shoes]', 'Ads may show on searches with the same meaning or intent as the keyword; the most control, the fewest searches'],
      ],
    },
    {
      type: 'p',
      text: 'Starting with phrase and exact keywords keeps a small budget on searches close to what you sell. Then add [negative keywords](https://support.google.com/google-ads/answer/12437241), which exclude search terms from your campaigns. Google\'s example is an eyeglasses seller excluding "wine glasses". Negative keywords do not match close variants, so add the variations you want blocked. After launch, review the search terms report and add the irrelevant ones.',
    },
    { type: 'h2', text: 'Write the ads' },
    {
      type: 'p',
      text: 'Search ads are built as [responsive search ads](https://support.google.com/google-ads/answer/7510328): you enter several headlines and descriptions and Google assembles them at query time. Google says every ad group should have at least one, and that the more unique headlines and descriptions you enter, the more chances it has to match a search.',
    },
    {
      type: 'ul',
      items: [
        'Enter the final URL of a landing page that matches the keywords, not just the home page.',
        'Use headlines that repeat the searcher\'s words, state what you offer and name one clear action.',
        'Write descriptions that add a fact: delivery time, coverage area, a guarantee you can actually keep.',
        'Create at least three ads per ad group, as Google recommends in the campaign guide.',
      ],
    },
    {
      type: 'p',
      text: 'Fix any alerts on the review page and click Publish. Google says ads are typically approved within one business day.',
    },
    { type: 'h2', text: 'Budget, launch and the first weeks' },
    {
      type: 'p',
      text: 'In the campaign guide, Google describes the daily budget as "the average you want to spend each day". How much to set, and how a day can exceed it, is covered in [Google Ads cost](/blog/google-ads-cost). Start small enough that a wrong keyword list is cheap to fix.',
    },
    {
      type: 'ol',
      items: [
        'Check conversions are recording on day one.',
        'Read the search terms report weekly and add negative keywords.',
        'Pause keywords that spend without producing enquiries, and give the ones that work more budget.',
        'Test a new headline set against the old one rather than rewriting everything.',
        'Compare cost per enquiry with what an enquiry is worth, using the number you wrote down at the start.',
      ],
    },
    {
      type: 'p',
      text: 'If you would rather have this set up and managed for you, WakeUP\'s [advertising service](/services/advertising) covers tracking setup, keyword research, Search campaigns and weekly optimisation, and the [free marketing audit](/audit) is a way to have your current setup reviewed first.',
    },
  ],
}
