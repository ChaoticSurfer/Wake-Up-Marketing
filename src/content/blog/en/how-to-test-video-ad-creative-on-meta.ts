import type { BlogPost } from '@/lib/blog'

export const post: BlogPost = {
  locale: 'en',
  slug: 'how-to-test-video-ad-creative-on-meta',
  title: 'Meta ad creative testing: a repeatable way to test video ads on Facebook and Instagram',
  metaTitle: 'Meta Ad Creative Testing for Video',
  description:
    'Meta ad creative testing for video: change one variable, read hook rate before cost per lead, and set the duration and budget before you launch.',
  publishedAt: '2027-01-29T12:00:00+04:00',
  updatedAt: '2027-01-29T12:00:00+04:00',
  service: 'video',
  reviewState: 'llm_reviewed',
  body: [
    {
      type: 'p',
      text: 'Meta ad creative testing works when each test changes one thing, runs long enough to collect a real number of results, and is judged on a metric chosen before launch. For video, test the opening first, because it decides who keeps watching. Use Meta\'s own A/B test tool where you can, and keep a log so each winner informs the next brief.',
    },
    { type: 'h2', text: 'Test one variable at a time' },
    {
      type: 'p',
      text: 'Meta\'s [guide to A/B testing ads](https://www.facebook.com/business/ads/ab-testing-advanced) says plainly: "Test only one variable at a time." Among the video variables it lists are aspect ratio (1:1 against 9:16), video content (the product or service against a person on screen), audio (no sound against royalty-free audio) and length (30 seconds against 5 seconds). If a new version changes the opening, the music and the length together, a better result tells you nothing about why.',
    },
    {
      type: 'p',
      text: 'For most companies the first variable should be the hook: the first three seconds. It is cheap to change, because you can film one body and record several openings, and it affects everything that follows. The ideas for those openings are in [short-form video hooks](/blog/short-form-video-hooks). This post covers how to run the comparison.',
    },
    { type: 'h2', text: 'Write the test down before you launch' },
    {
      type: 'p',
      text: 'A one-line plan stops you picking a winner by taste afterwards. Fill in these five items for every test:',
    },
    {
      type: 'ol',
      items: [
        'Hypothesis: "A question opening will hold more viewers than a product shot, because our audience does not yet know the problem."',
        'The one variable: the first three seconds. Everything else is identical, including audience, placements, optimisation event and caption.',
        'Decision metric: cost per lead (or per purchase), with a hook metric as the early signal.',
        'Duration and minimum results: how many days, and how many results per version before you read the outcome.',
        'Rule for the winner: what you will do next, for example "scale the winner and test the call to action".',
      ],
    },
    { type: 'h2', text: 'Read the hook before the cost' },
    {
      type: 'p',
      text: 'Cost per lead needs conversions, which take time. The opening shows its effect earlier, in how many people keep watching. Agencies commonly use two ratios for this. Hook rate is the share of impressions that reach a short mark such as 3 seconds. Hold rate is the share of those viewers who stay to a later point, or to the end. These are industry conventions, not Meta-defined metrics, and the exact column names in Ads Manager can differ, so write down the definition you use and keep it the same across tests.',
    },
    {
      type: 'table',
      head: ['Symptom', 'What it points to', 'Next test'],
      rows: [
        ['Low hook rate', 'The opening does not stop the scroll', 'A different first three seconds'],
        ['Good hook rate, low hold rate', 'The opening promises something the middle does not deliver', 'Change the structure or the length'],
        ['Good hold rate, few clicks', 'People watch but the call to action is weak', 'Change the closing line and button'],
        ['Many clicks, few leads', 'The problem may be the landing page or the offer, not the video', 'Fix the page first; see [lead generation landing pages](/blog/lead-generation-landing-pages)'],
      ],
    },
    {
      type: 'p',
      text: 'A strong hook rate does not mean a strong ad. The final decision should still use the cost of the result you are paying for. The [Facebook ads metrics](/blog/facebook-ads-metrics) guide explains how to read those numbers together.',
    },
    { type: 'h2', text: 'Duration and budget' },
    {
      type: 'p',
      text: 'On duration, the same Meta page advises running a test for at least 2 weeks and no longer than 30 days. It adds that results start to appear once at least 100 events have been recorded for the cost per result being tested, but that you should wait until the test has ended before judging the final results. The page does not give a budget figure.',
    },
    {
      type: 'p',
      text: 'So set budget by arithmetic, not by a rule from the internet. Take your recent cost per result, multiply by 100, and multiply by the number of versions. That is roughly what a test needs to reach the 100-event mark for each version. If that number is more than you can spend, test fewer versions, or use a result that happens more often, such as a lead form submission instead of a sale. To understand why very small budgets stall, read [how long to run Facebook ads](/blog/how-long-to-run-facebook-ads), which covers the learning phase.',
    },
    {
      type: 'p',
      text: 'What share of the total ad budget goes to testing is a judgement call, not a Meta rule. A sensible approach is to keep most of the spend on the current best ad and give testing a smaller, fixed portion, so a failed test does not hurt the month.',
    },
    { type: 'h2', text: 'Setting up the test in Ads Manager' },
    {
      type: 'ul',
      items: [
        'Use Meta\'s A/B test tool where the setup allows it, so Meta splits the audience and the versions do not compete against each other. Meta advises not using the test audience in any other campaign running at the same time, because overlapping audiences can skew results.',
        'If you test by hand with separate ads in one ad set, nothing guarantees an even split of spend between the ads, so one ad may get more budget than another. Treat the result as a hint, and confirm the winner in a second run.',
        'Do not edit a running test. A changed headline or budget midway means the versions no longer ran under the same conditions.',
        'Name each version after its variable, for example "Hook-question-v1", so the result is readable months later.',
      ],
    },
    { type: 'h2', text: 'Keep a log and turn winners into briefs' },
    {
      type: 'p',
      text: 'A test only pays off if the result changes what you film next. Keep one sheet with the date, hypothesis, variable, versions, results, decision and the next test. After three or four tests, patterns appear: which kind of opening works for your audience, which length holds attention, which offers pull. Retire a winner when results fall as people see it repeatedly, and replace it with a new variation, not a copy.',
    },
    {
      type: 'p',
      text: 'A single test is a hint, not proof, especially with small numbers. Retest a surprising winner before building a campaign on it.',
    },
    {
      type: 'p',
      text: 'Testing needs a steady supply of new openings and versions. WakeUP\'s [video production](/services/video-production) service scripts, shoots and edits short videos for ads, Reels and TikTok and tests them in campaigns, so one filming day can produce several test versions. If you want to check what is holding your ads back before you produce more video, start with the [free marketing audit](/audit).',
    },
  ],
}
