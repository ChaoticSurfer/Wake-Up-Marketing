import type { BlogPost } from '@/lib/blog'

export const post: BlogPost = {
  locale: 'en',
  slug: 'website-conversion-rate-optimization',
  title: 'Conversion rate optimization tips for a small business website',
  metaTitle: 'Conversion Rate Optimization Tips',
  description:
    'Conversion rate optimization tips for small business website owners with little traffic: what to fix first and how to measure it without A/B tests.',
  publishedAt: '2026-12-24T09:00:00+04:00',
  updatedAt: '2026-12-24T09:00:00+04:00',
  service: 'websites',
  reviewState: 'llm_reviewed',
  body: [
    {
      type: 'p',
      text: 'Conversion rate optimization (CRO) means getting more of your website visitors to take the action you want, such as sending an enquiry or calling. For a small business site the tips that work are: count enquiries properly, watch real visitors using your site, fix the biggest obstacle first (unclear offer, slow phone page, hard contact route), and judge each change by enquiries over the same period before and after, not by large A/B tests.',
    },
    { type: 'h2', text: 'Start by counting the right thing' },
    {
      type: 'p',
      text: 'The conversion rate is the number of people who took the action divided by the number of visitors. It only works if "took the action" is defined and recorded. For most company sites the action is an enquiry form sent, a click on the phone number or WhatsApp button, or a booking. Google Analytics 4 calls these [key events](https://support.google.com/analytics/answer/9267568), which it defines as "an event that measures an action that\'s particularly important to the success of your business." Any event you collect can be marked as a key event.',
    },
    {
      type: 'p',
      text: 'Set up two or three key events and write down this month\'s numbers: visitors, enquiries and the rate. Split by source if you can (search, ads, social, direct), because a site can convert well for people who searched for you and badly for cold social traffic, and the fix differs. If you have not yet defined one main goal for the site, the [small business website mistakes](/blog/small-business-website-mistakes) post starts there.',
    },
    { type: 'h2', text: 'Why A/B testing is the wrong tool at low traffic' },
    {
      type: 'p',
      text: 'An A/B test splits visitors between two versions and waits until the difference is bigger than chance. With a few hundred visits a month and a handful of enquiries, a test would run for months and still give a noisy answer. Search Engine Journal\'s guide to [CRO without much traffic](https://www.searchenginejournal.com/cro-without-traffic/435040/) takes the same view: usability testing "only requires a handful of people", and it says that "going for drastic changes in your variation can lead to an increased lift in your primary variable", which makes a winner easier to spot.',
    },
    {
      type: 'p',
      text: 'So with a small site, change your approach. Skip button colour tests. Find the one or two large obstacles that real people hit, fix them, and measure the result over a few weeks.',
    },
    { type: 'h2', text: 'Watch real visitors, for free' },
    {
      type: 'p',
      text: 'Microsoft Clarity records how visitors use your pages. Microsoft\'s documentation says it offers [session recordings and heatmaps](https://learn.microsoft.com/en-us/clarity/about-clarity), and that "Clarity is a free service forever." Install it, let it collect for one to two weeks, then watch about 20 recordings of visitors on your main page and your contact page. Look for:',
    },
    {
      type: 'ul',
      items: [
        'People who scroll to the bottom looking for something that is not there (prices, address, a phone number).',
        'Taps on things that are not links, or repeated taps on a button that is slow to respond.',
        'Visitors who open the form, type a little and leave: usually too many fields, or a field they do not want to fill in.',
        'Mobile visitors pinching to zoom or hunting for the menu.',
      ],
    },
    {
      type: 'p',
      text: 'You can also sit five customers or colleagues in front of the site and ask them to do one task, for example "find out how to book a consultation", while you stay quiet and take notes. Because Clarity records visitors, tell them in your privacy notice that you use it, and keep forms out of recordings as its masking settings allow. Clarity says it should not be used on sites aimed at people under 18.',
    },
    { type: 'h2', text: 'What to fix first' },
    {
      type: 'p',
      text: 'Fix in this order. The earlier items affect every visitor; the later ones only some of them.',
    },
    {
      type: 'table',
      head: ['Order', 'What to check', 'Typical fix'],
      rows: [
        ['1', 'The first screen: can a stranger tell what you do and for whom in five seconds?', 'Rewrite the headline in the customer\'s words, add one proof point (a number, a client type, a certification you really hold)'],
        ['2', 'One clear next step: is there one main button, visible without scrolling on a phone?', 'Pick one primary action per page; make the others visually quieter'],
        ['3', 'Contact routes: phone, WhatsApp, form and address easy to find?', 'Click-to-call and WhatsApp buttons on mobile; contact details in the header and footer'],
        ['4', 'The form: how many fields, and does each one earn its place?', 'Cut to what you need to reply (name, contact, short message); explain what happens after sending'],
        ['5', 'Trust: reviews, client names, case descriptions, team photos', 'Add only real, permitted material; remove stock photos of smiling strangers'],
        ['6', 'Speed and phone layout', 'Compress images, remove unused scripts, fix text that is too small to read'],
        ['7', 'Pages that bring traffic but no enquiries', 'Add a relevant next step to each, such as a link to the service page or a short form'],
      ],
    },
    {
      type: 'p',
      text: 'Landing pages for ads have extra rules on offer, form length and thank-you pages, which are covered in [lead generation landing pages](/blog/lead-generation-landing-pages). The pages a company site needs overall are listed in [pages a business website needs](/blog/pages-a-business-website-needs).',
    },
    { type: 'h2', text: 'Speed: the fix that helps every visitor' },
    {
      type: 'p',
      text: 'Slow pages make visitors wait before they see your offer. Google\'s [Core Web Vitals guidance](https://web.dev/articles/vitals) sets "good" at a Largest Contentful Paint within 2.5 seconds, an Interaction to Next Paint of 200 milliseconds or less and a Cumulative Layout Shift of 0.1 or less, measured at the 75th percentile of page loads, separately for mobile and desktop. Run your key pages through PageSpeed Insights, fix the largest image first, and test on a mid-range phone on mobile data and not only on office wifi.',
    },
    { type: 'h2', text: 'Measure a change without an A/B test' },
    {
      type: 'p',
      text: 'A simple protocol that a small team can keep:',
    },
    {
      type: 'ol',
      items: [
        'Record the baseline: enquiries and visitors for the last four weeks, by source.',
        'Change one significant thing at a time and write down the date and what changed.',
        'Wait at least as long as the baseline period, and longer if enquiries are few.',
        'Compare enquiries and the conversion rate with the baseline, and note anything else that changed, such as a new ad campaign, a holiday or a price change.',
        'Read the enquiries themselves: more messages is only a win if they are from the right people. Ask sales whether the quality moved.',
        'Keep the change if enquiries rose or stayed the same with better quality, and revert it if they fell.',
      ],
    },
    {
      type: 'p',
      text: 'This is weaker evidence than a controlled test, because other things move at the same time. It is still enough to catch big mistakes and big wins, which are the ones that matter on a small site. With 10 to 20 enquiries a month, treat a swing of one or two as noise, and judge by the direction over several months. For metrics that sit alongside the conversion rate, see [marketing KPIs](/blog/marketing-kpis).',
    },
    { type: 'h2', text: 'When the site itself is the limit' },
    {
      type: 'p',
      text: 'Some problems cannot be fixed with edits: a structure that hides the services, a platform that cannot be made fast, or a design that works against the offer. Then a rebuild can cost less than another year of patches. The [website redesign checklist](/blog/website-redesign-checklist) lists what to keep and what to change. WakeUP builds premium, complex websites and landing pages, with analytics and conversion tracking included from the start; see the [website and landing page service](/services/website-development). If you want a second opinion on what is stopping visitors from enquiring, request the [free marketing audit](/audit).',
    },
  ],
}
