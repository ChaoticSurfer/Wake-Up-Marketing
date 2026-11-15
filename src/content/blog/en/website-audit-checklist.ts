import type { BlogPost } from '@/lib/blog'

export const post: BlogPost = {
  locale: 'en',
  slug: 'website-audit-checklist',
  title: 'Website audit checklist: a visitor-first audit you can do yourself',
  metaTitle: 'Website Audit Checklist for Your Site',
  description:
    'A website audit checklist you can run yourself: analytics, messaging, mobile, speed and security in the order visitors meet them, plus when to get help.',
  publishedAt: '2027-01-27T09:00:00+04:00',
  updatedAt: '2027-01-27T09:00:00+04:00',
  service: 'audit',
  reviewState: 'llm_reviewed',
  body: [
    {
      type: 'p',
      text: 'A website audit checklist should follow what a visitor meets, not what a crawler reports. Check in this order: can you measure visits and enquiries, does the first screen say what you do, does the site work on a phone, is it fast, is it secure, and is it easy to contact you. Free tools are enough for a first pass.',
    },
    { type: 'h2', text: 'Before you start: pick one goal and one page set' },
    {
      type: 'p',
      text: 'Decide what the website must do: bring enquiries, bookings, orders or calls. Then list the five to ten pages that carry that goal: the home page, your main service or product pages, the contact page and the page where the enquiry is sent. Audit those first. An audit of every page produces a long list that nobody finishes.',
    },
    {
      type: 'p',
      text: 'This checklist is about the visitor\'s experience. If you want the search-engine side (indexing, titles, links), use [how to do an SEO audit](/blog/how-to-do-seo-audit) afterwards.',
    },
    { type: 'h2', text: '1. Analytics: can you see what visitors do?' },
    {
      type: 'p',
      text: 'Start here, because every later finding needs numbers. Open Google Analytics 4 and check three things.',
    },
    {
      type: 'ul',
      items: [
        'Data is arriving: today\'s visits show up in the real-time report.',
        'Your goal is recorded: Google Analytics lets you [mark an event as a key event](https://support.google.com/analytics/answer/13128484) once it has been received. A form submission, a call click or a purchase should each be one. If none is marked, you cannot say what the site achieves. [GA4 for small business](/blog/ga4-for-small-business) shows the setup.',
        'You know where visits come from: search, social, ads, email, direct. Tagged links help ([UTM parameters guide](/blog/utm-parameters-guide)).',
      ],
    },
    {
      type: 'p',
      text: 'Then test the thing the numbers claim. Submit your own contact form, click the phone number, and confirm the enquiry arrives in the inbox or CRM that someone actually reads. A form that silently fails costs you every enquiry it swallows. See [contact form best practices](/blog/contact-form-best-practices).',
    },
    { type: 'h2', text: '2. Messaging: does the first screen say what you do?' },
    {
      type: 'p',
      text: 'Nielsen Norman Group summarised page-visit data from Microsoft Research covering 205,873 web pages and concluded that [the first 10 seconds of a visit are critical to whether users stay](https://www.nngroup.com/articles/how-long-do-users-stay-on-web-pages/). The study is from 2011, so read it as a reminder that first impressions are short, not as a fixed number.',
    },
    {
      type: 'p',
      text: 'Run a five-second test. Show the home page to someone who does not know your company for five seconds, then ask three questions: what does this company do, who is it for, and what would you do next. If the answers are wrong, vague or different from each other, fix the headline and the first button before anything else.',
    },
    {
      type: 'ul',
      items: [
        'The headline names what you sell and to whom, in the visitor\'s words, not a slogan.',
        'One main action is obvious (call, request a quote, book), repeated further down the page.',
        'Proof is near the claim: client names you may use, reviews, certificates, numbers you can support. See [website trust signals](/blog/website-trust-signals).',
        'The pages in your menu match what people ask on the phone. If sales hear the same question every week, the site should answer it.',
      ],
    },
    { type: 'h2', text: '3. Mobile: use the site as your customer does' },
    {
      type: 'p',
      text: 'Google indexes and ranks the phone version of a page, and its documentation says: [make sure that your mobile site contains the same content as your desktop site](https://developers.google.com/search/docs/crawling-indexing/mobile/mobile-sites-mobile-first-indexing). Beyond that rule, the check is human: open the site on your own phone, on mobile data, and try to do the main task.',
    },
    {
      type: 'ul',
      items: [
        'Can you read the text without pinching to zoom?',
        'Can your thumb hit the buttons and menu without touching the wrong thing?',
        'Does the form work with the phone keyboard, and is the phone number tappable?',
        'Do pop-ups, cookie banners or chat widgets cover the content?',
        'Is any content, a table or a price list, missing or cut off compared with desktop?',
      ],
    },
    { type: 'h2', text: '4. Speed: measure it, do not feel it' },
    {
      type: 'p',
      text: 'Run your main pages through PageSpeed Insights and look at the field data if it is shown, which comes from real visitors. Google\'s web.dev guidance sets the "good" targets at [Largest Contentful Paint of 2.5 seconds or less, Interaction to Next Paint of 200 milliseconds or less and Cumulative Layout Shift of 0.1 or less](https://web.dev/articles/vitals), measured at the 75th percentile of page loads.',
    },
    {
      type: 'p',
      text: 'Write the three numbers for each key page in a table and mark which fail. Do not try to fix them yourself unless you are comfortable with image formats and scripts; the fixes and what to ask your developer are in [improve Core Web Vitals](/blog/improve-core-web-vitals) and [how to improve website speed](/blog/how-to-improve-website-speed).',
    },
    { type: 'h2', text: '5. Security and housekeeping' },
    {
      type: 'p',
      text: 'Visitors see the browser\'s security warnings before they see your design. Check the basics.',
    },
    {
      type: 'ul',
      items: [
        'Every page loads over HTTPS, and the HTTP address redirects to it. Google lists HTTPS as one of its page experience signals: "The HTTPS component ensures the safety and security of users on the web", it says in [its announcement of the Search Console HTTPS report](https://developers.google.com/search/blog/2022/09/https-search-console-report?hl=en).',
        'The certificate is not about to expire. Put the date in a calendar.',
        'Software, plugins and themes are up to date, and old admin accounts are removed. See the [website maintenance checklist](/blog/website-maintenance-checklist).',
        'Someone has a recent backup that you have seen restore, not only one that exists.',
        'A privacy notice and cookie banner match what the site actually collects.',
        'Pages are usable with a keyboard and have readable contrast and image descriptions; see [website accessibility basics](/blog/website-accessibility-basics).',
      ],
    },
    { type: 'h2', text: '6. Turn the notes into a ranked list' },
    {
      type: 'p',
      text: 'Put every finding in a table with three columns: what is wrong, how much it affects enquiries, and how hard it is to fix. Work through the items that touch the main action first: a broken form, a vague headline or a slow first screen outweighs a missing alt text. Then re-check the analytics goal a month later, and use [conversion rate optimisation without A/B testing](/blog/website-conversion-rate-optimization) to judge whether a change helped.',
    },
    {
      type: 'table',
      head: ['Finding', 'Effect on enquiries', 'Effort', 'Do'],
      rows: [
        ['Contact form does not deliver', 'Very high', 'Low', 'This week'],
        ['First screen unclear', 'High', 'Low to medium', 'This month'],
        ['LCP over 2.5 seconds on the home page', 'Medium to high', 'Medium', 'This quarter, with a developer'],
        ['Plugins out of date', 'Medium (security)', 'Low', 'This week'],
      ],
    },
    { type: 'h2', text: 'When to call a specialist' },
    {
      type: 'p',
      text: 'A self-audit finds the visible problems. Bring in a specialist when the numbers are bad but the cause is not visible, when the same fault keeps coming back, when the site is a custom build that you cannot change yourself, or when the audit points to ads, tracking or the sales process rather than the page. A second pair of eyes also helps because you are too close to your own wording.',
    },
    {
      type: 'p',
      text: 'WakeUP offers a [free marketing audit](/audit): send your website and a few details, and within one business day you get a short summary of your ads, website and sales process with the three changes that would help most.',
    },
  ],
}
