import type { BlogPost } from '@/lib/blog'

export const post: BlogPost = {
  locale: 'en',
  slug: 'facebook-lookalike-audiences',
  title: 'Facebook lookalike audience: how it works, which source and size to pick, and whether broad targeting beats it',
  metaTitle: 'Facebook Lookalike Audience Guide',
  description:
    'A Facebook lookalike audience finds people like your best customers. Source size, percentage choices, and whether it beats broad targeting in Georgia.',
  publishedAt: '2026-12-26T12:00:00+04:00',
  updatedAt: '2026-12-26T12:00:00+04:00',
  service: 'advertising',
  reviewState: 'llm_reviewed',
  body: [
    {
      type: 'p',
      text: 'A Facebook lookalike audience is a group of people Meta selects because they resemble a source audience you give it, such as your customers or leads. You choose the source and a percentage; a smaller percentage means a closer match and a smaller group. In a small market like Georgia, a lookalike is worth testing against broad targeting, not assuming it wins.',
    },
    { type: 'h2', text: 'What a lookalike audience is' },
    {
      type: 'p',
      text: 'You give Meta a source audience, usually a custom audience built from a customer list, website visitors or people who completed an event. Meta finds people in the country you select who share traits with that group. Its Marketing API documentation defines the percentage as the [top x% of people in a selected country](https://developers.facebook.com/docs/marketing-api/audiences/guides/lookalike-audiences/) who most resemble the source. You do not see who is in it, and it is not a list of your competitors\' customers.',
    },
    {
      type: 'p',
      text: 'It is a cold-audience tool: it reaches people who have not met you yet. For people who already know you, retargeting is the better fit; see [Facebook retargeting ads](/blog/facebook-retargeting-ads).',
    },
    { type: 'h2', text: 'Choosing the source audience' },
    {
      type: 'p',
      text: 'The source matters more than any setting after it. Meta\'s documentation sets a floor: [a custom audience of at least 100 people](https://developers.facebook.com/docs/marketing-api/audiences/guides/lookalike-audiences/), and for a source built from a campaign or ad set, at least 100 unique conversions, with 200 or more recommended. Meta\'s floor is a technical minimum, not a promise of quality.',
    },
    {
      type: 'p',
      text: 'Meta ads trainer Jon Loomer [relays a Meta recommendation of a source between 1,000 and 5,000 people](https://www.jonloomer.com/meta-ads-lookalike-audiences/) and adds that the closer the source is aligned with your goals, the more likely the lookalike is to be valuable. That is a recommendation, not a requirement. Most Georgian companies in the 20 to 250 range will not have thousands of customers, so choose carefully from what you do have.',
    },
    {
      type: 'table',
      head: ['Source', 'Quality', 'Notes'],
      rows: [
        ['Customers who paid, ideally the best ones', 'Highest', 'Export the list with email or phone as the match keys. Remove test and junk rows first'],
        ['Qualified leads (accepted by sales)', 'High', 'Better than all leads; it teaches Meta what a good lead looks like'],
        ['People who completed your enquiry event on the site', 'Medium to high', 'Needs the Pixel firing correctly. Setup is in [how to run Facebook ads](/blog/how-to-run-facebook-ads)'],
        ['All website visitors', 'Low', 'Includes people who bounced in seconds'],
        ['Page followers or video viewers', 'Low', 'Shows interest in content, not in buying'],
      ],
    },
    {
      type: 'p',
      text: 'Handle customer data lawfully. Only upload people who agreed to be contacted or whose data you may use for advertising under the rules that apply to your company, and keep the list to what you need.',
    },
    { type: 'h2', text: 'Choosing the percentage' },
    {
      type: 'p',
      text: 'The percentage sets the size of the audience. The Marketing API accepts values from 1% to 20% in steps of 1%, and 1% is the closest match to your source.',
    },
    {
      type: 'p',
      text: 'Scale matters in a small country. DataReportal\'s [Digital 2026 report for Georgia](https://datareportal.com/reports/digital-2026-georgia) gives Facebook ad reach of 3.05 million people in late 2025, 80.1 percent of the population. That is the audience Meta says its ads could reach, not active users. As a rough illustration only, if the percentage applied to that pool, 1% would be about 30,000 people and 5% about 150,000. In a much larger country the same 1% is far bigger, so advice written for such markets ("start at 1%") can leave a Georgian ad set too small to learn from and quick to saturate. Check the audience size Ads Manager shows before you commit budget.',
    },
    { type: 'h2', text: 'How to create one in Ads Manager' },
    {
      type: 'ol',
      items: [
        'Build the source first: Audiences, Create audience, Custom audience, then customer list or website. Name it clearly, for example "Customers paid 2026".',
        'Wait until the source is ready and large enough. A list can take a while to process.',
        'Go to Create audience, Lookalike audience. Pick the source and the country where your buyers live.',
        'Choose the audience size. Create one at a small percentage and, to test, one at a larger one.',
        'Attach it to an ad set. Set the objective to the real result, such as leads or purchases, not clicks. Cost and reporting are covered in [Facebook ads metrics](/blog/facebook-ads-metrics).',
        'Exclude your existing customers from the ad set so you do not pay to show acquisition ads to them.',
      ],
    },
    { type: 'h2', text: 'Lookalike or broad targeting in a small market?' },
    {
      type: 'p',
      text: 'Meta has moved towards letting its system find buyers. Its [Advantage+ audience page](https://www.facebook.com/business/ads/meta-advantage-plus/audience) says: "By targeting the broadest possible audience, you enable our system to find more potential customers." On the same page, lookalike audiences are listed among the audience suggestions you can give the system. So a lookalike no longer has to be a hard boundary; it can be a hint.',
    },
    {
      type: 'p',
      text: 'Does the hint still help? There is no universal answer. Jon Loomer asks the same question, whether lookalikes still add value over removing targeting filters, and leaves it open: "Always experiment and find what works for you." Meta also reports cost improvements for Advantage+ audiences, but those are its own figures for its own system and do not tell you what happens with a Georgian ad budget.',
    },
    {
      type: 'ul',
      items: [
        'A lookalike is more likely to help when you have a good source (paying customers), a clear product, and a small daily budget with little data of its own. It narrows the search to a plausible pool.',
        'Broad targeting is more likely to work when the pixel records real conversions every week, the creative is strong, and the market is small. A lookalike in a small country can fence in the same people twice.',
        'In both cases, the creative and the offer move results more than the audience setting. What results cost is covered in [Facebook ads cost](/blog/facebook-ads-cost).',
      ],
    },
    { type: 'h2', text: 'A simple test plan' },
    {
      type: 'ol',
      items: [
        'Run two or three ad sets with the same ad, budget, schedule and placements. Change only the audience: a 1% lookalike from customers, a larger lookalike, and a broad audience with only location, age and language limits.',
        'Use the same optimisation event in each. Judge by cost per qualified lead or sale, not by click-through rate.',
        'Give it time. Do not decide on two days of data; each ad set needs enough results before the comparison means anything.',
        'Keep the winner and test one new thing: another source or a fresh creative. Record the result in your marketing log.',
        'Refresh the source every few months as you win more customers, because an old list describes old buyers.',
      ],
    },
    { type: 'h2', text: 'Next step' },
    {
      type: 'p',
      text: 'If you want the audience, tracking and creative tests set up and checked against leads and sales, WakeUP plans and runs Meta and Google campaigns; see [advertising](/services/advertising). To review your current account first, request the [free marketing audit](/audit).',
    },
  ],
}
