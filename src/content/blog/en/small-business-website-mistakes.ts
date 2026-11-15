import type { BlogPost } from '@/lib/blog'

export const post: BlogPost = {
  locale: 'en',
  slug: 'small-business-website-mistakes',
  title: 'Common website mistakes small business owners make, and the fix for each',
  metaTitle: 'Common Website Mistakes Small Business',
  description:
    'Common website mistakes small business sites make: no goal, an unclear message, slow pages, weak mobile use and no trust signals - with a fix for each.',
  publishedAt: '2026-12-20T12:00:00+04:00',
  updatedAt: '2026-12-20T12:00:00+04:00',
  service: 'websites',
  reviewState: 'llm_reviewed',
  body: [
    {
      type: 'p',
      text: 'The common website mistakes small business sites make are rarely about colours or logos. They are six problems that cost enquiries: no single goal for the site, a message that is unclear in the first seconds, slow pages, a poor phone experience, missing trust signals and no measurement. Each has a practical fix, and most can be checked in an afternoon.',
    },
    { type: 'h2', text: '1. No single goal for the site' },
    {
      type: 'p',
      text: 'A site that tries to inform, sell, recruit and impress at once does none of them well. Visitors reach a page and are left to guess what you want them to do.',
    },
    {
      type: 'p',
      text: 'Fix: pick the one action that matters most (call, request a quote, book a demo) and make it the clearest thing on every main page: one visible button, the same wording, a short form. Secondary actions can exist, but they should look secondary. For pages built around a single campaign, see [lead generation landing pages](/blog/lead-generation-landing-pages).',
    },
    { type: 'h2', text: '2. An unclear message in the first seconds' },
    {
      type: 'p',
      text: 'Nielsen Norman Group, reporting on Microsoft Research\'s analysis of dwell times on 205,873 pages, [says the first 10 seconds are critical](https://www.nngroup.com/articles/how-long-do-users-stay-on-web-pages/) because visitors are very likely to leave in that window, and that to earn longer attention you should communicate your value proposition within 10 seconds. A headline such as "Welcome to our website" or a slogan with no detail wastes it.',
    },
    {
      type: 'p',
      text: 'Fix: the top of the home page and each service page should say, in plain words, what you do, for whom, and what happens next. Test it by showing the page to someone outside your company for five seconds and asking what you sell.',
    },
    { type: 'h2', text: '3. A slow site' },
    {
      type: 'p',
      text: 'Large photos, heavy plugins and many scripts add up. Google\'s guidance on Core Web Vitals sets these targets, measured at the 75th percentile of page loads, on [web.dev](https://web.dev/articles/vitals): the main content should load within 2.5 seconds (LCP), the page should respond to input in 200 milliseconds or less (INP), and layout shifts should stay at 0.1 or below (CLS). Google also [recommends good Core Web Vitals](https://developers.google.com/search/docs/appearance/core-web-vitals) for success in Search.',
    },
    {
      type: 'p',
      text: 'Fix: test your key pages with PageSpeed Insights or the Core Web Vitals report in Search Console. The usual causes are oversized images, too many third-party scripts and slow hosting. One specific trap from web.dev: [never lazy-load the image that makes up your main content](https://web.dev/articles/optimize-lcp), since it delays that very image. If speed problems come from the platform or theme, our comparison of a [custom website vs a template](/blog/custom-website-vs-template) explains when changing the build is worth it.',
    },
    { type: 'h2', text: '4. A poor phone experience' },
    {
      type: 'p',
      text: 'Visitors open sites on phones, and Google also reads your site that way. Google states that it uses [the mobile version of a site\'s content for indexing and ranking](https://developers.google.com/search/docs/crawling-indexing/mobile/mobile-sites-mobile-first-indexing), and advises that the mobile site contains the same content as the desktop site. Only the content shown on the mobile site is used for indexing.',
    },
    {
      type: 'p',
      text: 'Fix: open your own site on a phone and try to do the main action with one thumb: read the text without zooming, tap the buttons, fill in the form. Check that the service descriptions, contact details and other content on desktop also appear on mobile.',
    },
    { type: 'h2', text: '5. No trust signals' },
    {
      type: 'p',
      text: 'A buyer deciding between you and two competitors is looking for reasons to believe you. Nielsen Norman Group\'s research gives specifics. On contact details: [hiding the contact link or giving it another label can make a company seem "evasive and unreliable"](https://www.nngroup.com/articles/contact-us-pages/), and a contact page should offer at least a phone number and email address (Anna Kaley, NN/g, 18 August 2019). On imagery: participants [liked to see photos of real employees and products](https://www.nngroup.com/articles/about-us-information-on-websites/), the authors noted that users are tired of sites full of "corporate speak and stock photography," and reviews and recommendations from trusted peers were among the most important criteria (Kaley and Nielsen, NN/g, 26 May 2019).',
    },
    {
      type: 'ul',
      items: [
        'Put your phone number, email and address where people look for them.',
        'Replace stock photos with pictures of your team, premises, product and work.',
        'Show real customer names, logos or reviews, with permission.',
        'Name the people behind the company on an About page.',
        'State what you do and do not do, and how enquiries are handled.',
      ],
    },
    { type: 'h2', text: '6. No measurement' },
    {
      type: 'p',
      text: 'If you cannot see how many people send an enquiry, from which page and from which channel, you cannot tell which of the problems above to fix first.',
    },
    {
      type: 'p',
      text: 'Fix: track form submissions, calls and clicks on the contact button as conversions, and review them monthly next to your Search Console data. Make sure every enquiry reaches a named person who replies the same day.',
    },
    { type: 'h2', text: 'Quick check' },
    {
      type: 'table',
      head: ['Mistake', 'How to spot it', 'First fix'],
      rows: [
        ['No goal', 'Several equal buttons on one page', 'One main action per page'],
        ['Unclear message', 'A stranger cannot say what you sell after five seconds', 'Rewrite the top of each page'],
        ['Slow site', 'Core Web Vitals targets missed', 'Compress images, remove unused scripts'],
        ['Poor mobile use', 'Tiny text, awkward form, missing content', 'Test on a real phone and fix'],
        ['No trust signals', 'Stock photos, hidden contact details', 'Real photos, visible contact, reviews'],
        ['No measurement', 'You cannot name last month\'s enquiries', 'Track forms and calls as conversions'],
      ],
    },
    {
      type: 'p',
      text: 'If several of these apply and the fixes touch design and structure, a rebuild may be more efficient than patching; the [website redesign checklist](/blog/website-redesign-checklist) shows what to protect when you do it. WakeUP builds premium, complex websites and landing pages; see the [website and landing page development](/services/website-development) page. To see where your current site stands first, use the [free audit](/audit).',
    },
  ],
}
