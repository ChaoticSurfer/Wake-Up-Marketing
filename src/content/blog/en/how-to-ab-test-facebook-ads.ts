import type { BlogPost } from '@/lib/blog'

export const post: BlogPost = {
  locale: 'en',
  slug: 'how-to-ab-test-facebook-ads',
  title: 'How to A/B test Facebook ads: one variable, a rule for the winner, enough budget',
  metaTitle: 'How to A/B Test Facebook Ads',
  description:
    'How to A/B test Facebook ads in Ads Manager: pick one variable, set the win rule first, give it enough time and budget, then act on the result.',
  publishedAt: '2027-02-10T15:00:00+04:00',
  updatedAt: '2027-02-10T15:00:00+04:00',
  service: 'advertising',
  reviewState: 'llm_reviewed',
  body: [
    {
      type: 'p',
      text: 'To A/B test Facebook ads, change one variable between two or more versions, run them at the same time on separate audiences using the A/B test tool in Ads Manager, decide the winning metric and the decision rule before you launch, and let the test finish before judging it. A test that changes several things, or that you stop after two days, tells you nothing you can use.',
    },
    {
      type: 'p',
      text: 'This guide covers any Meta test: creative, audience, placement or optimisation. If your question is specifically about video, [how to test video ad creative on Meta](/blog/how-to-test-video-ad-creative-on-meta) goes deeper on hooks; for pages after the click, see [landing page A/B testing](/blog/landing-page-ab-testing).',
    },
    { type: 'h2', text: 'Step 1: Pick the one variable worth testing' },
    {
      type: 'p',
      text: 'Meta\'s developer documentation on split testing says to "select only one variable per test", and that it lets you "test different advertising strategies on mutually exclusive audiences" ([Meta for Developers, Split Testing](https://developers.facebook.com/docs/marketing-api/guides/split-testing/)). Jon Loomer, a well-known Meta ads educator, lists the variables the Ads Manager tool can isolate as optimization, targeting, placements and creative ([Jon Loomer Digital](https://www.jonloomer.com/how-to-create-an-a-b-test-in-meta-experiments/)). Meta\'s own advice for beginners is to start with a creative variable ([Meta, A/B testing](https://www.facebook.com/business/ads/ab-testing-advanced)).',
    },
    {
      type: 'table',
      head: ['Variable', 'Example test', 'Use it when'],
      rows: [
        ['Creative', 'Image against video; short against long; offer in the first line or the last', 'Almost always the first test; it is the cheapest to change'],
        ['Audience', 'Broad against interest-based; a lookalike against a custom list', 'Results are steady but cost per lead is high (see [lookalike audiences](/blog/facebook-lookalike-audiences))'],
        ['Placement', 'Automatic placements against Feed and Reels only', 'You suspect one placement is eating budget'],
        ['Optimisation', 'Optimise for leads against optimise for link clicks', 'Clicks are cheap but leads are poor'],
        ['Copy or call to action', 'Same creative, two headlines', 'The creative is settled and you refine it'],
      ],
    },
    {
      type: 'p',
      text: 'Pick the variable that your worst number points to. Low click-through points to creative; clicks without leads points to the landing page or offer, which is not a Facebook test at all. Write one sentence: "We believe that changing X will lower cost per lead because Y."',
    },
    { type: 'h2', text: 'Step 2: Decide how the winner will be chosen' },
    {
      type: 'p',
      text: 'Do this before the test starts, in writing. Otherwise you will choose the version you like and call it data.',
    },
    {
      type: 'ul',
      items: [
        'Key metric: the number that ends the argument, usually cost per lead or cost per purchase. Loomer advises picking the metric that reflects your overall success for the campaigns being tested. Clicks and likes are context, not the decision.',
        'Minimum evidence: Meta says results start appearing once at least 100 events have been observed for the cost per result you are testing, and still advises waiting until the test has ended before judging. If your key metric is rare, such as sales, test an event that happens more often.',
        'Confidence rule: the Meta developer guide says to decide the confidence level before creating a test. Agree what you will accept before you see the numbers.',
        'Action for each outcome: what you will do if A wins, if B wins, and if there is no clear winner.',
      ],
    },
    { type: 'h2', text: 'Step 3: Set up the test in Ads Manager' },
    {
      type: 'p',
      text: 'Menus change, so check the names in your account. As Loomer describes the current flow, you open Experiments under the Ads Manager Tools menu (Analyze and Report), choose to create a test, pick A/B test, then choose what to compare (campaigns or ad sets) and select two to five versions. Keep the versions identical except for the single variable. You then set the key metric, with optional additional metrics that give context but do not decide the winner, and the schedule.',
    },
    {
      type: 'ol',
      items: [
        'Duplicate the campaign or ad set that holds your best ad, so the versions start from the same settings.',
        'Change only the chosen variable in the copy.',
        'Name each version after its variable ("Audience-lookalike-1pct", "Creative-video-A") so the report is readable later.',
        'In the A/B test setup, choose the key metric you wrote down.',
        'Set the schedule, then check delivery after the first day: both versions should be spending.',
      ],
    },
    {
      type: 'p',
      text: 'Do not use the test audience in another campaign at the same time; Meta warns that this can distort the result. Do not edit the versions while the test runs. Loomer notes that an A/B test eliminates overlap to help isolate the value of one variable, which only holds if the setup stays unchanged.',
    },
    { type: 'h2', text: 'Step 4: Give it enough time and budget' },
    {
      type: 'p',
      text: 'Meta\'s guidance is to run an A/B test for at least 2 weeks and up to 30 days. Its developer guide adds that larger reach, longer schedules and higher budgets tend to give more significant results. A budget is enough when each version can reach the 100-event mark. Work it out for your account:',
    },
    {
      type: 'table',
      head: ['Input', 'Illustration only'],
      rows: [
        ['Your recent cost per lead', '10 (any currency)'],
        ['Events needed per version', '100'],
        ['Number of versions', '2'],
        ['Minimum test spend', '10 x 100 x 2 = 2,000'],
      ],
    },
    {
      type: 'p',
      text: 'The figures are only an illustration of the method; costs vary by market and industry, and Georgian costs are not US costs, so use your own recent cost per result. If the total is more than you can spend, reduce the number of versions or test an event that happens more often. See [Facebook ads cost](/blog/facebook-ads-cost) for the factors behind it. Do not expect a tiny budget to give a clean answer; [how long to run Facebook ads](/blog/how-long-to-run-facebook-ads) explains the learning phase that small budgets struggle to leave.',
    },
    { type: 'h2', text: 'Step 5: Read the result honestly' },
    {
      type: 'p',
      text: 'When the test ends, look at the key metric first and the confidence figure second. Loomer describes confidence as the percentage chance you would get the same result if you ran the test again, and notes that with low confidence you may not want to act. Meta\'s own advice is to wait for the final results before assuming a winner.',
    },
    {
      type: 'table',
      head: ['What you see', 'What it means', 'What to do'],
      rows: [
        ['One version clearly cheaper, confidence high, enough results', 'A real difference, at least for this audience and period', 'Move budget to the winner and write down the lesson'],
        ['A small gap, low confidence', 'Could be chance, especially with few results per version', 'Call it a tie; test something bigger'],
        ['Winner on clicks, loser on leads', 'The ad attracts curiosity, not buyers', 'Trust the key metric you chose'],
        ['Both versions poor', 'The variable is not the problem', 'Check the offer, the landing page and the tracking; see [Meta Pixel vs Conversions API](/blog/meta-pixel-vs-conversions-api)'],
      ],
    },
    {
      type: 'p',
      text: 'An inconclusive test is still a result: it tells you this variable is not the lever, so you can stop spending on it. For the meaning of the numbers themselves, read [Facebook ads metrics](/blog/facebook-ads-metrics).',
    },
    { type: 'h2', text: 'Step 6: Act on the result and keep a log' },
    {
      type: 'ul',
      items: [
        'Roll the winner into your main campaign, then test the next variable against it. A winning ad can tire as the same people see it repeatedly, so plan new versions; see [how to scale Facebook ads](/blog/how-to-scale-facebook-ads).',
        'Retest a surprising winner once before building a campaign around it.',
        'Keep a one-row log per test: date, hypothesis, variable, versions, key metric, result, decision.',
        'Do not mix lessons across audiences. A creative that wins with a cold audience may lose with a retargeting audience.',
      ],
    },
    { type: 'h2', text: 'Mistakes that ruin a test' },
    {
      type: 'ul',
      items: [
        'Changing several things between versions.',
        'Stopping after two or three days because one version looks ahead.',
        'Running too many versions on a small budget, so none reaches enough results.',
        'Editing budgets, audiences or ads in the middle of the test.',
        'Choosing the key metric after seeing the results.',
        'Testing details such as a button colour before the offer and the first line are right.',
      ],
    },
    {
      type: 'p',
      text: 'WakeUP runs Facebook, Instagram and Google ads with creative tested weekly, tracked to cost per lead; see [advertising services](/services/advertising). If you are already spending and are unsure what to test first, the [free audit](/audit) looks at your tracking and campaign setup.',
    },
  ],
}
