import type { BlogPost } from '@/lib/blog'

export const post: BlogPost = {
  locale: 'en',
  slug: 'improve-core-web-vitals',
  title: 'How to improve Core Web Vitals: what LCP, INP and CLS mean and which fixes move them',
  metaTitle: 'How to Improve Core Web Vitals',
  description:
    'How to improve Core Web Vitals: what LCP, INP and CLS measure, the good thresholds, and the fixes to ask your developer for, in plain language.',
  publishedAt: '2026-12-31T18:00:00+04:00',
  updatedAt: '2026-12-31T18:00:00+04:00',
  service: 'websites',
  reviewState: 'llm_reviewed',
  body: [
    {
      type: 'p',
      text: 'To improve Core Web Vitals, work on three measurements: Largest Contentful Paint (LCP) for loading, Interaction to Next Paint (INP) for responsiveness and Cumulative Layout Shift (CLS) for visual stability. Google\'s "good" targets are an LCP within 2.5 seconds, an INP of 200 milliseconds or less and a CLS of 0.1 or less. Measure with real-user data first, then fix the metric that fails, usually images, scripts or unsized elements.',
    },
    { type: 'h2', text: 'What the three metrics measure' },
    {
      type: 'p',
      text: 'Google\'s [web.dev guidance on Core Web Vitals](https://web.dev/articles/vitals) defines the three metrics and the targets. A page passes when it meets the targets at the 75th percentile of page loads, measured separately for mobile and desktop, for all three.',
    },
    {
      type: 'table',
      head: ['Metric', 'In plain words', 'Good', 'Typical cause of a bad score'],
      rows: [
        ['LCP, Largest Contentful Paint', 'How long until the main content (usually the top image or heading) appears', 'Within 2.5 seconds', 'Heavy hero image, slow server, content that loads late'],
        ['INP, Interaction to Next Paint', 'How quickly the page reacts after a click, tap or key press', '200 milliseconds or less', 'Too much JavaScript, long tasks, heavy third-party scripts'],
        ['CLS, Cumulative Layout Shift', 'How much the page jumps while loading', '0.1 or less', 'Images, banners and embeds without reserved space, late-loading fonts or ads'],
      ],
    },
    {
      type: 'p',
      text: 'INP replaced First Input Delay. According to [web.dev\'s INP page](https://web.dev/articles/inp), FID measured only the input delay of the first interaction, while INP observes the latency of all clicks, taps and key presses during a visit and reports roughly the worst one. It gives three bands: good at 200 milliseconds or below, needs improvement up to 500 milliseconds, and poor above 500.',
    },
    { type: 'h2', text: 'Measure first: field data and lab data' },
    {
      type: 'p',
      text: 'Two kinds of measurement exist, and they disagree. Per [web.dev](https://web.dev/articles/lab-and-field-data-differences), lab data is collected by loading a page in a controlled environment with predefined network and device conditions, and field data comes from monitoring all users who visit a page. Chrome tools reporting lab data generally run Lighthouse, and those reporting field data generally use the Chrome User Experience Report. PageSpeed Insights shows both.',
    },
    {
      type: 'p',
      text: 'Use field data to decide whether you have a problem, because it reflects your real visitors on their real phones and networks. Use lab data to find the cause and test a fix, because it is repeatable. Google Search Console has a Core Web Vitals report that [shows how your pages perform](https://developers.google.com/search/docs/appearance/core-web-vitals). Compare templates (product page, article, home) to see which one is the problem. Low-traffic pages may not have field data at all; judge those by the template they share with larger pages.',
    },
    { type: 'h2', text: 'Improve LCP: make the main content arrive sooner' },
    {
      type: 'p',
      text: 'Google\'s [top Core Web Vitals recommendations](https://web.dev/articles/top-cwv) for LCP are to make sure the LCP resource is discoverable from the HTML source and prioritised, to aim for instant navigations using the back/forward cache and prerendering, and to use a CDN to reduce Time to First Byte. In practice, give the developer these checks:',
    },
    {
      type: 'ul',
      items: [
        'Which element is the LCP on the home page and on the main landing pages? It is usually a hero image or a large heading.',
        'Is that image in the HTML from the start, or added later by a script or slider? It should be in the HTML and loaded with high priority, not lazy-loaded.',
        'Is the image the right size and a modern format for the space it fills, rather than a camera original?',
        'How long does the server take to answer? Slow hosting or uncached pages will cap what front-end work can achieve.',
      ],
    },
    { type: 'h2', text: 'Improve INP: make the page react quickly' },
    {
      type: 'p',
      text: 'The same Google guidance lists three INP fixes: yield often to break up long tasks, avoid unnecessary JavaScript, and avoid large rendering updates by keeping the DOM small. Business owners meet this problem as a menu that opens late, a filter that lags or a button that seems not to work, usually on mid-range phones. Ask the developer which third-party scripts run on the page (chat widgets, tag managers, heatmaps, pop-ups) and whether each one earns its place. Google\'s guidance lists pruning old tag manager tags, so removing a script can be a quick INP win.',
    },
    { type: 'h2', text: 'Improve CLS: stop the page from jumping' },
    {
      type: 'p',
      text: 'For layout shifts, the Google guidance advises setting explicit sizes on content loaded into the page, such as width and height or aspect ratios for images, embeds and ads, making pages eligible for the back/forward cache, and avoiding animations that use layout-inducing CSS properties such as top, left or margin in favour of transform. For a business site, the common offenders are cookie banners that push content down, images without dimensions, and a font that changes size when it loads. Reserve space for each of them.',
    },
    { type: 'h2', text: 'What to ask your developer for' },
    {
      type: 'ol',
      items: [
        'The current Core Web Vitals for your five most important templates, from field data where it exists, on mobile.',
        'The element causing each failing metric, named, not a generic "performance score".',
        'A short list of fixes ranked by effect and effort, with the metric each should move.',
        'Re-measurement after the change, on the same pages, once field data has had time to update.',
        'A rule for the future: new scripts, images and banners are checked against the three targets before they go live.',
      ],
    },
    {
      type: 'p',
      text: 'The broader checklist of speed work, beyond these three metrics, is in [how to improve website speed](/blog/how-to-improve-website-speed). How speed fits into the technical side of search is covered in [what is technical SEO](/blog/what-is-technical-seo), and keeping scores from slipping back is part of the [website maintenance checklist](/blog/website-maintenance-checklist).',
    },
    { type: 'h2', text: 'Does it affect search rankings?' },
    {
      type: 'p',
      text: 'Google says it highly recommends that site owners achieve good Core Web Vitals for success with Search, and that they align, with other page experience aspects, with what its core ranking systems seek to reward. It gives no ranking weight. Treat them as a quality floor and a conversion issue: a page that is slow to appear or react loses visitors whatever Google does.',
    },
    {
      type: 'p',
      text: 'WakeUP builds premium, complex websites and landing pages with speed and SEO basics built in; see the [website development service](/services/website-development). To find out what is slowing your current site down, send it for the [free marketing audit](/audit).',
    },
  ],
}
