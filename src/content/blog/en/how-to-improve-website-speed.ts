import type { BlogPost } from '@/lib/blog'

export const post: BlogPost = {
  locale: 'en',
  slug: 'how-to-improve-website-speed',
  title: 'How to improve website loading speed: measure first, then fix in order of payoff',
  metaTitle: 'How to Improve Website Loading Speed',
  description:
    'How to improve website loading speed: measure with PageSpeed Insights, then fix images, plugins and scripts, caching and hosting in order of payoff.',
  publishedAt: '2026-12-26T09:00:00+04:00',
  updatedAt: '2026-12-26T09:00:00+04:00',
  service: 'websites',
  reviewState: 'llm_reviewed',
  body: [
    {
      type: 'p',
      text: 'To improve website loading speed, test your key pages in PageSpeed Insights, find the slowest part, and fix in this order: heavy images first, then plugins and third-party scripts, then caching, then hosting. Re-test after each change. Images and scripts usually give the biggest gains for the least work, while hosting is worth changing only if the server itself is slow.',
    },
    { type: 'h2', text: 'Measure first: what PageSpeed Insights tells you' },
    {
      type: 'p',
      text: 'Open [PageSpeed Insights](https://pagespeed.web.dev/), enter the address of your home page and of the page that brings you the most enquiries, and read the mobile result first. The report has two kinds of data, and mixing them up is the most common mistake.',
    },
    {
      type: 'ul',
      items: [
        'Field data comes from real visitors. Google describes it as [real-world experiences over the previous 28-day collection period](https://developers.google.com/speed/docs/insights/v5/about), so a fix will take weeks to show up fully. Small sites may have none.',
        'Lab data is a simulated load in a controlled environment. The 0-100 performance score comes from the lab run, and Google calls the lab data useful for debugging. Use it to check each change right away.',
      ],
    },
    {
      type: 'p',
      text: 'Run the lab test three times and compare the middle result; single runs vary. Write down the score, the Largest Contentful Paint (LCP) time and the list of "Opportunities" and "Diagnostics" before you touch anything. That is your baseline.',
    },
    { type: 'h2', text: 'What fast enough means' },
    {
      type: 'p',
      text: 'Google\'s [Core Web Vitals guidance](https://web.dev/articles/vitals) sets "good" at the 75th percentile of page loads: LCP within 2.5 seconds, Interaction to Next Paint (INP) of 200 milliseconds or less, and Cumulative Layout Shift (CLS) of 0.1 or less. The [SEO checklist for small business](/blog/seo-checklist-for-small-business) puts these in context; here they are your targets.',
    },
    {
      type: 'p',
      text: 'Speed also affects sales, not only rankings. A Google-commissioned study by 55 and Deloitte followed 37 European and American brand sites over 30 days at the end of 2019 and [found that a 0.1 second mobile speed improvement increased conversion rates by 8.4% for retail sites](https://web.dev/case-studies/milliseconds-make-millions). The 0.1 second gain was measured across several speed metrics at once, on retail sites in Europe and the US in 2019, so treat it as direction, not a forecast for your site. The page-level view of conversions is in [website conversion rate optimization](/blog/website-conversion-rate-optimization).',
    },
    { type: 'h2', text: 'Fix 1: images' },
    {
      type: 'p',
      text: 'The element that sets LCP is often an image. Google\'s guide to [optimizing LCP](https://web.dev/articles/optimize-lcp) describes the LCP element as the largest image or text block in view, and splits LCP time into four parts: time to first byte, resource load delay, resource load duration and element render delay. The image work below attacks the two middle ones.',
    },
    {
      type: 'ul',
      items: [
        'Resize first. Do not upload a 4000 pixel photo for a slot that shows 800 pixels. Export at the largest size the layout actually displays, and give high-density screens a 2x version if needed.',
        'Use a modern format. Google says [WebP images are smaller than JPEG and PNG, usually by about 25-35% in file size](https://web.dev/articles/serve-images-webp). Most image tools and CMS plugins can convert automatically.',
        'Lazy-load only what is below the first screen. The [lazy-loading guide](https://web.dev/articles/browser-level-image-lazy-loading) says not to lazy-load images likely to be in view when the page loads, especially the LCP image.',
        'Prioritise the hero image. For the likely LCP image, the LCP guide suggests fetchpriority="high", and warns that it helps less if you set it on more than one or two images.',
        'Set width and height on every image so the browser reserves space and the page does not jump, which protects CLS.',
        'Replace autoplay background video on the home page with a still image and a play button, unless the video is the point of the page.',
      ],
    },
    { type: 'h2', text: 'Fix 2: plugins and third-party scripts' },
    {
      type: 'p',
      text: 'Every chat widget, tracker, pop-up, slider and social feed adds code the visitor\'s phone has to download and run. Google notes that [you often do not control which third-party scripts your site loads](https://web.dev/articles/identify-slow-third-party-javascript), so you have to look for them. In the Lighthouse report behind PageSpeed Insights, open the audits "Reduce JavaScript execution time" and "Avoid enormous network payloads".',
    },
    {
      type: 'ol',
      items: [
        'List everything installed: plugins, apps, tag manager tags, embedded widgets.',
        'Remove what nobody uses. Delete it rather than only deactivating it, and test again.',
        'For each remaining item, ask what enquiry or sale it supports. Cut anything that cannot answer.',
        'To measure a suspect script, block its address in browser DevTools, reload and compare load times over several runs, as Google suggests.',
        'Load the rest later: scripts for chat or analytics rarely need to block the first screen. Ask your developer to defer them.',
        'Replace several plugins that do small jobs with one lighter solution or a few lines of code.',
      ],
    },
    {
      type: 'p',
      text: 'This step is where a heavily customised template or page builder shows its cost. The trade-offs between template and custom builds are covered in [custom website vs template](/blog/custom-website-vs-template), and the habits that slow small business sites down in [small business website mistakes](/blog/small-business-website-mistakes).',
    },
    { type: 'h2', text: 'Fix 3: caching' },
    {
      type: 'p',
      text: 'Caching lets a visitor\'s browser, or a server in between, reuse files instead of fetching them again. It helps returning visitors and every page after the first. Two kinds matter:',
    },
    {
      type: 'ul',
      items: [
        'Browser caching of static files (images, CSS, JavaScript). Google\'s [HTTP caching guide](https://web.dev/articles/http-cache) recommends Cache-Control: max-age=31536000, one year, for files whose address changes whenever the content changes (versioned or fingerprinted file names). Unversioned addresses need a shorter or revalidating setting, otherwise visitors get stale files.',
        'Page caching on the server or a CDN, so a page that is the same for everybody is not rebuilt on every request. On WordPress this is usually a caching plugin or a host feature; on other platforms it is a setting at the hosting or CDN level.',
      ],
    },
    {
      type: 'p',
      text: 'After enabling caching, test the pages that must stay live: forms, carts and logged-in areas. Make sure a submitted form or a changed price does not show an old version.',
    },
    { type: 'h2', text: 'Fix 4: hosting and server response' },
    {
      type: 'p',
      text: 'Hosting comes last because it is the most disruptive change and is only the answer when the server is slow even after the first three fixes. The number to look at is time to first byte (TTFB). Google\'s [TTFB guide](https://web.dev/articles/ttfb) gives 0.8 seconds or less as a rough guide for good, and values above 1.8 seconds as poor. In PageSpeed Insights, a "Reduce initial server response time" opportunity is the signal.',
    },
    {
      type: 'ul',
      items: [
        'If TTFB is high with caching on, check what the server does for each page: slow database queries, many plugins that run on every request, no page cache.',
        'Check where the server is. A host far from your visitors adds delay on every connection; a CDN serves files from closer locations.',
        'Compare plans before moving. Shared hosting on a crowded server can be slow at busy hours; a better plan or a different provider may fix it. Test the new host with a copy of your site before switching the domain.',
      ],
    },
    { type: 'h2', text: 'Re-test and keep it fast' },
    {
      type: 'p',
      text: 'After each fix, run PageSpeed Insights again and compare with your baseline. Keep a small table: date, change, LCP, score. If a change made things worse, undo it. Then look at the field data after 28 days to see whether real visitors noticed.',
    },
    {
      type: 'p',
      text: 'Speed decays. Each new plugin, banner or tracking tag undoes some of the work, so make "what does it add to load time" part of how anything new reaches the site. If your site is slow because of how it was built, a redesign may be the better route than patching; use the [website redesign checklist](/blog/website-redesign-checklist) to decide.',
    },
    { type: 'h2', text: 'When to bring in help' },
    {
      type: 'p',
      text: 'Images, plugins and caching can be done by a careful site owner. Structural problems, such as a bloated theme, heavy page builder or slow back end, need a developer. WakeUP builds premium, complex websites and landing pages with speed and tracking in mind; see [website and landing page development](/services/website-development). If you want an outside view of what is slowing your current site and your marketing, start with the [free audit](/audit).',
    },
  ],
}
