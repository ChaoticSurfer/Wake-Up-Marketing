import type { BlogPost } from '@/lib/blog'

export const post: BlogPost = {
  locale: 'en',
  slug: 'facebook-ad-library-competitor-research',
  title: 'Facebook Ad Library: how to research your competitors\' ads and turn them into tests',
  metaTitle: 'Facebook Ad Library for Competitors',
  description:
    'Use the Facebook Ad Library to see competitors\' ads for free, read what the signals mean, build a swipe file and turn it into ad tests.',
  publishedAt: '2027-02-28T15:00:00+04:00',
  updatedAt: '2027-02-28T15:00:00+04:00',
  service: 'advertising',
  reviewState: 'llm_reviewed',
  body: [
    {
      type: 'p',
      text: 'The Facebook Ad Library (officially the Meta Ad Library) is a free, public database where you can search the ads that businesses are running on Facebook and Instagram. Search a competitor\'s name, open their ads, and note the offers, formats and wording. It will not show you results or spend for ordinary ads, so use it to generate test ideas, not to copy what you assume is working.',
    },
    { type: 'h2', text: 'What the Ad Library shows' },
    {
      type: 'p',
      text: 'Meta describes it as "a comprehensive, searchable database for ads transparency" on its [Ad Library tools page](https://transparency.meta.com/researchtools/ad-library-tools). For a business researching competitors, three points from that documentation and from independent guides such as [Buffer\'s walkthrough](https://buffer.com/resources/meta-ad-library/) matter most:',
    },
    {
      type: 'ul',
      items: [
        'By default it shows ads that are running now. Inactive ads are kept only for certain categories: ads about social issues, elections or politics are stored for seven years, and ads delivered in the EU for one year after their last impression.',
        'Spend, reach and the paying organisation are shown for ads about social issues, elections or politics, with some reach information for EU ads. An ordinary ad from a Georgian company shows the creative, wording and dates, not what it cost or how it performed.',
        'You can search without logging in, according to [Metricool\'s guide](https://metricool.com/competitor-facebook-ads/), and filter by country, platform and other options.',
      ],
    },
    { type: 'h2', text: 'How to find a competitor\'s ads' },
    {
      type: 'ol',
      items: [
        'Open the Ad Library and choose the country you sell in and the "All ads" category.',
        'Type the competitor\'s brand name and pick their Page from the suggestions. Open their Page\'s ads to see the activity as a whole.',
        'Search keywords too: the product, the problem and the offer, in Georgian, Russian and English as your market uses them. This finds advertisers you had not thought of.',
        'Narrow with the filters for platform, media type, language and date. Buffer notes that exact phrases go in quotation marks and the "|" sign matches several terms.',
        'Save the search so you can rerun it every month. Buffer also notes that you can save searches but not individual ads, so keep your own record (below).',
      ],
    },
    {
      type: 'p',
      text: 'A competitor with no ads in the library may be running none, may be running them under a different Page name (an agency or a sister brand), or may simply be advertising on other channels. Absence is a clue, not proof. The wider method for choosing which competitors to study is in [how to do a competitor analysis](/blog/how-to-do-competitor-analysis).',
    },
    { type: 'h2', text: 'Signals worth reading' },
    {
      type: 'table',
      head: ['What you see', 'A reasonable reading', 'Caution'],
      rows: [
        ['Start date and how long it has run', 'An ad that has run for months may be paying back', 'Some advertisers leave weak ads on; it is a hint'],
        ['Many versions of one message', 'The advertiser is testing that angle', 'Could also be automatic variations'],
        ['The same offer in many ads', 'The offer is central to their sales', 'May be a promotion with a deadline'],
        ['Format mix: video, carousel, image', 'What they believe works for this audience', 'Your audience may differ'],
        ['Call-to-action button and landing page', 'What action they want and how they close it', 'Click through, and check the page matches the ad'],
        ['Platforms and placements', 'Where they put the budget', 'Estimate only'],
        ['What nobody says', 'A gap you can fill: price clarity, proof, delivery', 'May be there for a reason, such as regulation'],
      ],
    },
    {
      type: 'p',
      text: 'Treat "long-running" with care. You are reading what the advertiser chose to publish, not what it earned. The same applies to anything labelled engagement in third-party tools: it is directional.',
    },
    { type: 'h2', text: 'Build a swipe file' },
    {
      type: 'p',
      text: 'Since individual ads cannot be saved in the library, keep a sheet or board with one row per ad. Screenshot the ad and record the link to the Page.',
    },
    {
      type: 'ul',
      items: [
        'Advertiser, date seen, start date and platform.',
        'Offer in one line, and the audience it seems to address.',
        'Hook: the first line or first three seconds of a video.',
        'Format and length.',
        'Proof used: reviews, numbers, before/after, a named person.',
        'Call to action and landing page destination.',
        'Your note: what is strong, weak or missing.',
      ],
    },
    {
      type: 'p',
      text: 'Add a few ads from outside your industry whose structure you admire. Take the structure and use your own wording. Do not copy a competitor\'s text; the aim is to learn which angles exist.',
    },
    { type: 'h2', text: 'Turn the swipe file into tests' },
    {
      type: 'p',
      text: 'After ten to twenty ads you will see patterns: the same three offers, the same two hooks, the same missing proof. Write each as a hypothesis, in the form "If we lead with price clarity instead of a discount, enquiries per click will rise, because nobody else does it."',
    },
    {
      type: 'ol',
      items: [
        'Pick the two or three hypotheses with the clearest gap or the strongest pattern.',
        'Make one ad per hypothesis, changing only the hook or offer. Wording structures such as those in the [copywriting formulas guide](/blog/copywriting-formulas) help.',
        'Run them side by side in your own account with equal budgets, using the set-up in [how to run Facebook ads](/blog/how-to-run-facebook-ads).',
        'Judge by cost per enquiry or sale, not by likes, and read the result after enough conversions to mean something.',
        'Keep the winner, retire the loser, write the next hypothesis. The landing page can be tested the same way; see [landing page A/B testing](/blog/landing-page-ab-testing).',
      ],
    },
    { type: 'h2', text: 'What the Ad Library cannot tell you' },
    {
      type: 'ul',
      items: [
        'Budget, results or conversion rates for ordinary ads.',
        'Targeting: you can infer an audience from the wording, but the settings are not shown for an ordinary ad.',
        'Ads that ended before you looked.',
        'Whether a competitor\'s offer is profitable for them. A discount that works for a company with high margins may sink yours.',
        'Anything outside Meta: Google, TikTok, email, offline.',
      ],
    },
    {
      type: 'p',
      text: 'Use the library for ideas and a reality check, and your own numbers for decisions. If you want help turning this research into a campaign, WakeUP\'s [advertising service](/services/advertising) covers Meta and Google campaign set-up and testing. To see how your current ads and tracking compare, ask for the [free marketing audit](/audit).',
    },
  ],
}
