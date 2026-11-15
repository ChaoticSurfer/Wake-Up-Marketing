import type { BlogPost } from '@/lib/blog'

export const post: BlogPost = {
  locale: 'en',
  slug: 'how-to-measure-brand-awareness',
  title: 'How to measure brand awareness: four low-cost methods and a before and after check',
  metaTitle: 'How to Measure Brand Awareness',
  description:
    'How to measure brand awareness without a research budget: an unaided-recall survey, branded search, direct traffic and mentions, tracked before and after.',
  publishedAt: '2027-02-28T18:00:00+04:00',
  updatedAt: '2027-02-28T18:00:00+04:00',
  service: 'branding',
  reviewState: 'llm_reviewed',
  body: [
    {
      type: 'p',
      text: 'To measure brand awareness on a small budget, combine four things: a short survey asking your target customers which brands they can name (unaided recall), the trend in searches for your brand name, the share of direct website visits, and the number of times people mention you. No single one is exact. Taken together, and compared before and after a campaign, they show whether more of the right people know you.',
    },
    { type: 'h2', text: 'Unaided and aided awareness: the distinction that matters' },
    {
      type: 'p',
      text: 'Awareness comes in two strengths. Unaided (or spontaneous) awareness asks people to name brands in your category with no prompt. Aided awareness shows a list and asks which they recognise. [Qualtrics](https://www.qualtrics.com/experience-management/brand/how-to-measure-brand-awareness/) describes the first as recall "completely unprompted" and the second as recognition "among a list of competitors". Unaided is the harder test, and the more valuable one, because people who cannot name you are less likely to think of you when they need what you sell.',
    },
    { type: 'h2', text: 'Method 1: a short recall survey' },
    {
      type: 'p',
      text: 'Surveys are the only direct way to measure awareness, because the other three methods measure behaviour that awareness causes. You can run one for the price of a form tool and some ad budget or an email list.',
    },
    {
      type: 'ol',
      items: [
        'Define who you want to be known to: your target customers, not everyone. Reach them through your email list, a social audience or a paid panel, and keep that source the same each time.',
        'Ask the unaided question first: "When you think of [category] in [city or country], which companies come to mind?" Leave an open text box.',
        'Then ask aided recall with a list of your brand and competitors, in random order: "Which of these have you heard of?"',
        'Optionally add one consideration question: "Which would you consider first?"',
        'Keep the wording identical every wave, and repeat on a schedule. Qualtrics advises regular pulse surveys with consistent questions so results can be benchmarked over time.',
      ],
    },
    {
      type: 'p',
      text: 'Report the share of respondents who named you unaided, and the share who recognised you from the list. A small sample is noisy, so treat a change of a few points as inconclusive; look for movement that repeats across waves. Do not survey only your own customers, or the number will be inflated.',
    },
    { type: 'h2', text: 'Method 2: branded search' },
    {
      type: 'p',
      text: 'When people hear of you, some of them search your name. Two free tools show it.',
    },
    {
      type: 'ul',
      items: [
        'Google Search Console. Its Performance report has a [branded queries filter](https://developers.google.com/search/blog/2025/11/search-console-branded-filter) that splits queries containing your brand name, variations, misspellings or related products from the rest. It is available to top-level properties with enough query volume, and Google warns that "some queries may occasionally be misidentified". Track branded impressions and clicks monthly.',
        'Google Trends. Compare your brand name with two competitors over a year. Google scales the numbers from [0 to 100 "based on a topic\'s proportion to all searches on all topics"](https://support.google.com/trends/answer/4365533), so they show relative interest, not search counts. Small brands may show too little data; if so, rely on Search Console.',
      ],
    },
    {
      type: 'p',
      text: 'Cautions: search the brand in every spelling people use, including Georgian and Latin script if you have both. A name that is also a common word will mix in unrelated searches. And a branded-search rise can come from an offer, a news story or a competitor\'s ad as well as awareness, so read it with the other methods.',
    },
    { type: 'h2', text: 'Method 3: direct traffic' },
    {
      type: 'p',
      text: 'In GA4, Google defines Direct as the channel by which users arrive "via a saved link or by entering your URL" ([GA4 default channel group](https://support.google.com/analytics/answer/9756891)). People who type your address have usually heard of you. A rising number of Direct sessions, or of new users arriving that way, supports growing awareness.',
    },
    {
      type: 'p',
      text: 'The catch is that Direct also collects untagged links and tracking gaps, so it overstates. Clean up tagging first, as described in [GA4 direct and Unassigned traffic](/blog/ga4-direct-and-unassigned-traffic), and compare only the same weeks across years or the same period before and after a campaign.',
    },
    { type: 'h2', text: 'Method 4: mentions' },
    {
      type: 'p',
      text: 'Count how often your brand is named where you do not control the page: social posts, comments, reviews, press, forums, and the sales call question "how did you hear about us?". Free alerts for your brand name, a manual weekly search on the platforms you use, and a tally in a sheet are enough for a small company.',
    },
    {
      type: 'ul',
      items: [
        'Volume: the number of mentions per month.',
        'Share of voice: your mentions divided by your mentions plus those of two or three competitors.',
        'Quality: the share that are positive, neutral or negative, judged by a person.',
        'Unprompted source: how many new leads say they found you through a friend, an article or a post.',
      ],
    },
    { type: 'h2', text: 'Compare before and after a campaign' },
    {
      type: 'p',
      text: 'Awareness is relative, so one number means little. Take a baseline before the campaign, then measure again afterwards using the same methods and the same people.',
    },
    {
      type: 'table',
      head: ['Measure', 'Before (4 weeks)', 'During', 'After (4 weeks)', 'How to read it'],
      rows: [
        ['Unaided recall (survey)', 'Baseline %', 'Not measured', 'Repeat %', 'Same audience and wording'],
        ['Aided recall (survey)', 'Baseline %', 'Not measured', 'Repeat %', 'Same list, random order'],
        ['Branded clicks (Search Console)', 'Weekly average', 'Weekly average', 'Weekly average', 'Compare with the same weeks last year if you can'],
        ['Direct sessions (GA4)', 'Weekly average', 'Weekly average', 'Weekly average', 'Only after tagging is clean'],
        ['Mentions and share of voice', 'Monthly count', 'Monthly count', 'Monthly count', 'Same keyword set, same platforms'],
        ['"How did you hear about us?"', 'Share by answer', 'Share by answer', 'Share by answer', 'Look for new answers such as "saw your video"'],
      ],
    },
    {
      type: 'p',
      text: 'Allow for time. Awareness builds slowly and the effect of a campaign can outlast it, so the "after" window should begin when the campaign ends and run long enough to show whether the lift fades. Note anything else that changed: seasonality, a sale, press coverage, a competitor\'s exit. If several measures move the same way and the survey agrees, you can say awareness grew. If only one moves, you cannot.',
    },
    { type: 'h2', text: 'What to report, and what not to' },
    {
      type: 'ul',
      items: [
        'Report three to five numbers from the table, with the baseline beside each, and say what you could not control.',
        'Do not report reach or impressions as awareness. They count exposure, not memory.',
        'Do not treat social followers as awareness; they are one slice of it.',
        'Link awareness to the funnel: the [marketing KPIs guide](/blog/marketing-kpis) shows where awareness numbers sit next to leads and revenue.',
      ],
    },
    {
      type: 'p',
      text: 'If the numbers show that people in your market cannot name you, the question becomes what you stand for and how clearly you say it. [What is branding](/blog/what-is-branding) covers the basics, and the [brand audit guide](/blog/how-to-do-a-brand-audit) shows how to check your brand from the inside and the outside. WakeUP\'s [branding service](/services/branding) covers positioning, messaging and identity, and the [free marketing audit](/audit) is a way to see how your current marketing and tracking read from outside.',
    },
  ],
}
