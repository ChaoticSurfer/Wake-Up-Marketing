import type { BlogPost } from '@/lib/blog'

export const post: BlogPost = {
  locale: 'en',
  slug: 'landing-page-vs-website',
  title: 'Landing page vs website: the difference and when a campaign needs its own page',
  metaTitle: 'Landing Page vs Website',
  description:
    'Landing page vs website: a landing page is one focused page for one action, a website is the whole site. Use the decision rule to pick for each campaign.',
  publishedAt: '2027-01-19T15:00:00+04:00',
  updatedAt: '2027-01-19T15:00:00+04:00',
  service: 'websites',
  reviewState: 'llm_reviewed',
  body: [
    {
      type: 'p',
      text: 'A landing page is a single standalone page built for one campaign and one action, such as requesting a quote. A website is the full set of connected pages that represents your business: services, about, contact, blog. A campaign needs its own landing page when its visitors arrive with one specific promise in mind and a menu full of other options would only distract them.',
    },
    { type: 'h2', text: 'The difference in one table' },
    {
      type: 'p',
      text: 'The two terms overlap, because a landing page is technically a page that lives on a website, or on a separate domain. What differs is the job. HubSpot defines a landing page as [a single, standalone web page created for a specific marketing or advertising purpose](https://blog.hubspot.com/website/landing-page-vs-website), and describes a website as linked pages under one domain that cover many purposes. Unbounce makes the same split: a landing page is built around one campaign or offer, and a website is the permanent hub of pages connected to a brand.',
    },
    {
      type: 'table',
      head: ['', 'Landing page', 'Website'],
      rows: [
        ['Job', 'Get one action from one kind of visitor', 'Inform, build trust, serve many visitors'],
        ['Pages', 'One, sometimes with a thank-you page', 'Many, linked by a menu'],
        ['Navigation', 'Minimal or none, so the visitor stays on the offer', 'Full menu, footer, internal links'],
        ['Message', 'Matches one ad or campaign', 'Covers the whole company'],
        ['Lifespan', 'Often tied to a campaign, offer or event', 'Permanent, updated over time'],
        ['Success measure', 'Conversion rate of the single action', 'Several: enquiries, visits, search traffic'],
      ],
    },
    {
      type: 'p',
      text: 'Homepage is a third term people mix in. It is the front door of the website: it introduces the company and sends visitors to other sections. That is the opposite of a landing page\'s job, which is to keep the visitor on one path.',
    },
    { type: 'h2', text: 'A decision rule for each campaign' },
    {
      type: 'p',
      text: 'Ask three questions about the campaign, in this order.',
    },
    {
      type: 'ol',
      items: [
        'Does the ad make one specific promise? If the ad says "free consultation for office fit-out", the click should land on a page about exactly that, not on a homepage that also sells ten other things.',
        'Is the visitor cold? People who have never heard of you, such as those clicking a Facebook or Instagram ad, need the offer, the proof and the form on one screen. People who already know you, such as those who typed your brand into Google, are fine on a regular page.',
        'Do you need to measure this campaign alone? A dedicated page gives you one conversion rate for one campaign. A shared page mixes visitors from every source.',
      ],
    },
    {
      type: 'p',
      text: 'Three yes answers mean a standalone landing page. Mixed answers mean a focused page inside your site, such as a service page with the menu and the form kept close. Three no answers mean the existing website is enough.',
    },
    { type: 'h2', text: 'When to send traffic to a landing page' },
    {
      type: 'ul',
      items: [
        'Paid ads with a single offer, on Meta or Google.',
        'A product or service launch with a date.',
        'Event or webinar registration.',
        'A seasonal or time-limited offer.',
        'A lead magnet, such as a checklist or a price guide, offered in exchange for contact details.',
        'An A/B test where you want to compare two versions of the same message.',
      ],
    },
    {
      type: 'p',
      text: 'Google\'s own guidance for advertisers points the same way. Google Ads Help tells advertisers to [choose a landing page that closely matches the ad and keywords](https://support.google.com/google-ads/answer/6238826?hl=en), to let customers find on the page what the ad promised, and to make it quick and easy to perform the action. Matching the page to the ad also feeds into the landing page experience part of Quality Score. Note that Georgian is not in the [list of languages Google Ads supports](https://support.google.com/google-ads/answer/6333734), so check the language options of each ad platform before you decide which language versions of the page you need.',
    },
    { type: 'h2', text: 'When the website itself is the right destination' },
    {
      type: 'ul',
      items: [
        'Visitors came from search because they asked a broad question, and your service or blog page answers it.',
        'The visitor is comparing several services and needs the menu.',
        'You are building trust for a high-stakes or complex purchase, where people read About, case pages and FAQs before enquiring.',
        'The page will be needed long after the campaign ends.',
      ],
    },
    {
      type: 'p',
      text: 'Which pages the permanent site needs is covered in [pages a business website needs](/blog/pages-a-business-website-needs). What belongs on the landing page itself, from headline to form, is in [lead generation landing pages](/blog/lead-generation-landing-pages), so this post does not repeat it.',
    },
    { type: 'h2', text: 'Standalone, or a page inside the site?' },
    {
      type: 'p',
      text: 'Even once you decide a campaign deserves a landing page, you choose where it lives. There are two options, each with a trade-off.',
    },
    {
      type: 'table',
      head: ['Option', 'Good for', 'Watch out for'],
      rows: [
        ['Page on your main domain', 'Brand trust, shared analytics, reuse of site design', 'Menu and footer may need hiding; keep the page out of the main navigation'],
        ['Separate domain or subdomain', 'Short-lived experiments and heavy testing', 'Separate analytics to set up; less trust if the brand looks different'],
      ],
    },
    {
      type: 'p',
      text: 'For most companies with 20 to 250 people, a page on the main domain is simpler: one set of analytics, one brand and no new accounts. Measure it by enquiries, not visits, and keep it fast on mobile; the ideas in [website conversion rate optimization](/blog/website-conversion-rate-optimization) apply to both.',
    },
    { type: 'h2', text: 'What a good landing page needs from the site behind it' },
    {
      type: 'p',
      text: 'A landing page cannot fix a weak website, and a weak landing page can waste good traffic. Visitors who like the offer often open the website next to check the company is real, so the two need to agree: same name, same claims, same contact details. Retargeting visitors who left without enquiring is one follow-up option; see [Facebook retargeting ads](/blog/facebook-retargeting-ads).',
    },
    {
      type: 'p',
      text: 'WakeUP builds premium, complex websites and landing pages, with tracking set up so each page can be judged on the enquiries it produces. See the [website and landing page service](/services/website-development), or send your current site and campaigns for a [free audit](/audit) of where visitors leave.',
    },
  ],
}
