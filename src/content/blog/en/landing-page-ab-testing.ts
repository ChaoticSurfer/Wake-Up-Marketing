import type { BlogPost } from '@/lib/blog'

export const post: BlogPost = {
  locale: 'en',
  slug: 'landing-page-ab-testing',
  title: 'Landing page A/B testing: what to test first and how long to run it',
  metaTitle: 'Landing Page A/B Testing Guide',
  description:
    'Landing page A/B testing in practice: what to test first, how to write a hypothesis, how long to run a test and the mistakes that give false winners.',
  publishedAt: '2027-01-22T15:00:00+04:00',
  updatedAt: '2027-01-22T15:00:00+04:00',
  service: 'websites',
  reviewState: 'llm_reviewed',
  body: [
    {
      type: 'p',
      text: 'Landing page A/B testing means showing two versions of a page to similar visitors at the same time and keeping the one that produces more of your goal action. Test one change that follows from a written hypothesis, usually the headline, the offer or the form. Decide the number of visitors in advance, run the test for at least one full week, and do not stop when the result first looks good.',
    },
    { type: 'h2', text: 'Check first that the page has enough traffic' },
    {
      type: 'p',
      text: 'A test only works when enough people reach the page and enough of them convert. Optimizely, a testing vendor, builds its planning around inputs that include a baseline conversion rate and a [minimum detectable effect](https://docs.optimizely.com/experimentation-strategy/docs/use-minimum-detectable-effect-when-you-design-an-experiment), which it defines as "a calculation that estimates the smallest improvement you are willing to detect." It adds that a low minimum detectable effect needs a larger amount of traffic. In plain terms: the smaller the lift you want to prove, the more visitors you need.',
    },
    {
      type: 'p',
      text: 'You can plan this before touching the page. Evan Miller\'s free [sample size calculator](https://www.evanmiller.org/ab-testing/sample-size.html) asks for the baseline rate, the smallest effect you care about, statistical power and significance level. With the example it loads (a 10.2% baseline, looking for a rise to 13.2%) it reports 2,545 visitors per variation. Two versions therefore need about 5,090 visitors in total. Optimizely\'s guidance on [how long to run an experiment](https://docs.optimizely.com/experimentation-strategy/docs/how-long-to-run-an-experiment) explains that the time a test needs depends on those inputs and on your weekly traffic. As simple arithmetic, divide the total sample you need by the visitors you get. At 1,000 visits a week that example takes about five weeks; at 200 visits a week it takes half a year, and a different approach is better.',
    },
    {
      type: 'p',
      text: 'If your page cannot reach the numbers in a reasonable time, do not run a test that will never finish. Fix the obvious problems and compare before and after, as described in [conversion rate optimization tips for a small business website](/blog/website-conversion-rate-optimization). Come back to A/B testing when traffic grows, for example after a paid campaign has started to send steady visitors.',
    },
    { type: 'h2', text: 'Write the hypothesis before you build the variant' },
    {
      type: 'p',
      text: 'A test without a hypothesis is a guess you cannot learn from. Use one sentence in this shape:',
    },
    {
      type: 'ul',
      items: [
        'Because [what you observed], we believe [this change] will make [this group of visitors] do [this action]. We will know because [this one metric] moves by at least [this much].',
        'Example: because most paid visitors leave before the form and the headline talks about our company rather than their problem, we believe a headline that names the problem will raise form submissions from paid search visitors.',
      ],
    },
    {
      type: 'p',
      text: 'The "because" part is what separates a test from a coin toss. It should come from something you saw: where visitors drop off in your analytics, what they type in the enquiry form, what the sales team hears on the first call. Pick one primary metric (for a lead page, submitted enquiries) and write it down before the test starts, so that a better-looking secondary number cannot talk you into a winner afterwards. Setting up that primary metric as a tracked event is covered in [GA4 for small business](/blog/ga4-for-small-business).',
    },
    { type: 'h2', text: 'What to test first' },
    {
      type: 'p',
      text: 'Start with the elements that every visitor sees and that change the decision, not with button colours. A rough order of priority:',
    },
    {
      type: 'table',
      head: ['Test', 'Why it comes early', 'Example of a real difference'],
      rows: [
        ['Headline and first screen', 'Everyone reads it, and it decides whether they stay', 'Name the problem the visitor has instead of your company'],
        ['The offer', 'It changes what the visitor gets for acting', 'Free audit versus a call; a sample versus a quote'],
        ['Form length and fields', 'It is the last step before the conversion', 'Name and phone only versus six fields (see [contact form best practices](/blog/contact-form-best-practices))'],
        ['Call to action wording and position', 'Cheap to change and affects every visit', '"Get a quote" versus "See how it works"'],
        ['Proof and trust elements', 'They answer the doubt that stops people', 'Client names or a short testimonial above the form (see [website trust signals](/blog/website-trust-signals))'],
        ['Layout and imagery', 'Usually a smaller effect', 'Short page versus long page; video versus static image'],
      ],
    },
    {
      type: 'p',
      text: 'Make the variant different enough that a visitor would notice. A small edit such as one word in a headline is a small difference, and the smaller the lift you are looking for, the more visitors you need; a change in the offer or the structure of the page is easier to measure. The longer list of page elements is in [lead generation landing pages](/blog/lead-generation-landing-pages).',
    },
    { type: 'h2', text: 'How long to run a test' },
    {
      type: 'p',
      text: 'Two rules decide the length. First, reach the visitor number you calculated. Second, run for whole weeks, because behaviour differs between a Monday morning and a Saturday night. Optimizely\'s documentation says: "You should run tests for a minimum of one business cycle (seven days)."',
    },
    {
      type: 'p',
      text: 'Avoid starting a test during an unusual period such as a sale, a holiday or a change in your ad spend, because the visitors are not the same people you will have next month. If the traffic mix changes mid-test (a new campaign switches on, for example), note it and consider restarting. Keep the split between versions steady, and change nothing on either version while it runs.',
    },
    { type: 'h2', text: 'Mistakes that produce false winners' },
    {
      type: 'ul',
      items: [
        'Stopping when the result first looks significant. Evan Miller\'s article [How Not To Run An A/B Test](https://www.evanmiller.org/how-not-to-run-an-ab-test.html) explains that repeated checking inflates false positives: "The more you peek, the more your significance levels will be off." His advice is to "Decide on a sample size in advance and wait until the experiment is over" before trusting the figures your testing software shows. Some testing tools use methods built to allow ongoing monitoring; if yours does, follow its documentation, not this rule of thumb.',
        'Changing several things at once. If the new version has a different headline, form and image, a win tells you nothing about which change mattered. Test the headline first, then the form.',
        'Mixing audiences. Visitors from search, social and email behave differently. If one source dominates the traffic, the result mostly describes that source. Check the result by source before applying it to all.',
        'Testing with no tracking you trust. If form submissions are double-counted or missing on one version, the winner is an artefact. Submit a test enquiry on each version and confirm it is counted once.',
        'Judging by clicks instead of enquiries. A button that gets more clicks but produces fewer completed forms did not win.',
        'Treating one result as permanent. Write down what you tested, the numbers and what you learned, and retest after large changes to your traffic sources.',
      ],
    },
    {
      type: 'p',
      text: 'A test can end with no clear winner, and that is a valid outcome. A flat result still tells you that the element you changed is not what holds the page back.',
    },
    { type: 'h2', text: 'Tools: what changed after Google Optimize' },
    {
      type: 'p',
      text: 'Google\'s support page states that Google Optimize and Optimize 360 are "no longer available as of September 30, 2023." Google says it is working on [third-party A/B testing integrations](https://support.google.com/optimize/answer/12979939) for Google Analytics with AB Tasty, Optimizely and VWO, and that anyone can integrate a testing tool through its public APIs. In practice you choose a testing tool, or have the variants built into the site, and send the results to your analytics so you read them in one place. Pricing and features of these tools change often, so check each vendor\'s current page before you commit.',
    },
    { type: 'h2', text: 'Where WakeUP fits' },
    {
      type: 'p',
      text: 'Testing is easier on a page that was built to be tested: clean structure, one clear goal and conversion tracking from the first day. WakeUP builds premium, complex websites and landing pages, and the [website and landing page service](/services/website-development) covers the tracking that makes tests readable. If you want an outside view of what your current page should test first, request the [free audit](/audit).',
    },
  ],
}
