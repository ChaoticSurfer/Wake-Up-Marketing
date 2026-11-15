import type { BlogPost } from '@/lib/blog'

export const post: BlogPost = {
  locale: 'en',
  slug: 'performance-max-explained',
  title: 'Performance Max campaign explained: what it covers, what it needs and what you give up',
  metaTitle: 'Performance Max Campaign Explained',
  description:
    'Performance Max campaign explained: the Google inventory it covers, the assets and goals it needs, and the control a Georgian company gives up.',
  publishedAt: '2026-12-21T18:00:00+04:00',
  updatedAt: '2026-12-21T18:00:00+04:00',
  service: 'advertising',
  reviewState: 'llm_reviewed',
  body: [
    {
      type: 'p',
      text: 'A Performance Max campaign is a Google Ads campaign that runs across Search, YouTube, Display, Discover, Gmail and Maps from one place. You supply creative assets, a conversion goal and optional audience signals; Google’s automation decides where each ad appears and which combination of assets to show. You gain reach from fewer inputs, and you give up control over placements and exact queries.',
    },
    { type: 'h2', text: 'What Performance Max is' },
    {
      type: 'p',
      text: 'Google’s help centre describes it as [“a goal-based campaign type that allows you to access all Google Ads inventory.”](https://support.google.com/google-ads/answer/11605187) Instead of building a Search campaign with keywords and a separate Display or Video campaign, you build one campaign around a goal, such as leads or sales. Bidding is automatic: per Google, [“Using Smart Bidding, real-time auctions bid based on your conversion probability,”](https://support.google.com/google-ads/answer/11605187) and you can add an optional target for return on ad spend (ROAS) or cost per action (CPA).',
    },
    {
      type: 'p',
      text: 'The practical consequence is that the campaign is only as good as the conversion data you feed it. A Search campaign shows you the words people typed. Performance Max shows you a result and leaves most of the route to the system.',
    },
    { type: 'h2', text: 'Which inventory it covers' },
    {
      type: 'p',
      text: 'Google’s documentation lists these channels for Performance Max, and its channel performance report breaks results out by the same list.',
    },
    {
      type: 'table',
      head: ['Channel', 'What it means for an ad'],
      rows: [
        ['Google Search and Search partners', 'Ads on search results, matched by Google rather than to a keyword list you write'],
        ['YouTube', 'Video inventory, so video assets matter'],
        ['Google Display Network', 'Image-based inventory on partner sites and apps'],
        ['Discover', 'Google’s content feed'],
        ['Gmail', 'Ads inside Gmail'],
        ['Maps', 'Ads in Google Maps'],
      ],
    },
    {
      type: 'p',
      text: 'Sources: the [Performance Max overview](https://support.google.com/google-ads/answer/11605187) and the [channel performance report page](https://support.google.com/google-ads/answer/16260130?hl=en). The channel list is the list of what you cannot switch off one by one. You see how each channel performed afterwards in the report, which currently covers Performance Max and Demand Gen.',
    },
    { type: 'h2', text: 'What you have to give it' },
    {
      type: 'p',
      text: 'Performance Max assembles ads from the parts you supply, so the parts decide the result. Google’s Ads API documentation gives the numbers per asset group:',
    },
    {
      type: 'table',
      head: ['Asset', 'Minimum', 'Maximum'],
      rows: [
        ['Headlines', '3', '15'],
        ['Long headlines', '1', '5'],
        ['Descriptions', '2', '5'],
        ['Landscape images (1.91:1)', '1', '20'],
        ['Square images (1:1)', '1', '20'],
        ['Logos (1:1) and business name', '1 each, when brand guidelines are off', '5 logos, 1 name'],
        ['Videos', 'None, optional', '15'],
      ],
    },
    {
      type: 'p',
      text: 'These figures come from the [Google Ads API asset requirements](https://developers.google.com/google-ads/api/performance-max/asset-requirements); the interface can differ slightly, so check your account. Google’s [best-practice page](https://support.google.com/google-ads/answer/11189316?hl=en) goes further than the minimums: “Add as many versions of text, image, and video assets as possible (including different image sizes),” and it recommends a video of at least 10 seconds. Meeting the minimum gets the campaign running; it does not give the system much to learn from.',
    },
    {
      type: 'ul',
      items: [
        'A conversion goal that matters. Google says to [“Pick conversion goals that matter to your business”](https://support.google.com/google-ads/answer/11189316?hl=en), generally the same ones you use in other performance campaigns. A form submit, a call or a purchase works; a page view does not.',
        'A final URL and a landing page that matches the offer. Performance Max can send people to other pages on your domain (see below), so every page it might use should be fit to receive paid traffic.',
        'Audience signals. Google describes them as a way to “Share customer intent preferences to guide learning” and says they help the campaign learn faster.',
        'Enough budget to produce conversions. The system learns from results, so it needs conversions to learn from. For how the budget and the price per click relate, see [how much Google Ads costs](/blog/google-ads-cost).',
      ],
    },
    { type: 'h2', text: 'What you give up, and the controls you keep' },
    {
      type: 'p',
      text: 'The trade is simple: less control over where and to whom, in return for more reach from fewer inputs. Three things change compared with a Search campaign you build yourself.',
    },
    {
      type: 'ol',
      items: [
        'You do not choose channels or placements one by one. The system decides how delivery is spread across the channels in the table above.',
        'You do not write the keyword list. Google matches your ads to searches itself.',
        'Your landing page can change. [“Final URL expansion is turned on by default for Performance Max campaigns,”](https://support.google.com/google-ads/answer/14337539?hl=en) which lets Google replace your final URL with a more relevant page from the same domain. You can list URLs to exclude in the campaign settings.',
      ],
    },
    {
      type: 'p',
      text: 'What you can still control, per Google’s best-practice guidance: [“Use campaign-level brand exclusions while leaving Final URL expansion ON,”](https://support.google.com/google-ads/answer/11189316?hl=en) and use account-level or campaign-level negative keywords. You also keep the goal, the budget, the assets, the audience signals and the URL exclusions. In effect you steer through inputs and exclusions rather than through settings that act directly.',
    },
    {
      type: 'p',
      text: 'Judge it over a longer window than you would a single Search ad group. Google’s guidance on evaluating results warns that [“looking at the average return from one channel especially over short timeframes doesn’t tell the full story,”](https://support.google.com/google-ads/answer/16279166?hl=en) and tells advertisers to account for conversion delays when evaluating results.',
    },
    { type: 'h2', text: 'Georgia: language and data limits' },
    {
      type: 'p',
      text: 'Two catches matter more here than in larger markets. First, language. Google’s [list of languages for ads](https://support.google.com/google-ads/answer/6333734) includes English and Russian but not Georgian, and it says: “Ads created in a language that isn’t supported for ads language targeting will be disapproved.” That page has no Performance Max-specific note, so check your own account before you build, and plan the text assets in English or Russian. The same issue for Search is covered in [Google Ads: the language catch](/blog/is-google-ads-worth-it) and in [how to run Google Ads](/blog/how-to-run-google-ads).',
    },
    {
      type: 'p',
      text: 'Second, volume. A small domestic market with a narrow offer may not produce the number of conversions an automated system needs. Before you start, check that conversions are measured correctly ([Google Ads optimization tips](/blog/google-ads-optimization-tips) start there), and expect to wait for enough data before judging the result.',
    },
    { type: 'h2', text: 'When it fits and when to start with Search' },
    {
      type: 'table',
      head: ['Situation', 'Better starting point'],
      rows: [
        ['You are testing Google Ads for the first time with a modest budget', 'Search, so you see the actual queries and control spend'],
        ['Buyers search in English or Russian and you want to find new ones beyond those searches', 'Performance Max, once conversions are tracked'],
        ['You have a consistent flow of conversions and a stock of images and video', 'Performance Max alongside Search'],
        ['You must keep tight control of wording and where the ad appears', 'Search, and extra care with any automated type'],
        ['You need to compare Google with social channels first', 'Read [Facebook Ads vs Google Ads](/blog/facebook-ads-vs-google-ads) first'],
      ],
    },
    {
      type: 'p',
      text: 'None of this is a case against Performance Max. It is a tool that rewards good inputs and punishes missing data. WakeUP plans, launches and optimises ads on Meta and Google; see the [advertising service page](/services/advertising). If you want an outside view of your tracking and your current campaigns before adding an automated campaign type, the [free marketing audit](/audit) is the place to start.',
    },
  ],
}
