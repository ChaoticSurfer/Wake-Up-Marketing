import type { BlogPost } from '@/lib/blog'

export const post: BlogPost = {
  locale: 'en',
  slug: 'animated-website-performance',
  title: 'Animated website performance: how to keep a motion-rich site fast',
  metaTitle: 'Animated Website Performance Guide',
  description:
    'Animated website performance comes down to what you animate and when: transform and opacity, scroll triggers, reduced motion and Core Web Vitals.',
  publishedAt: '2027-01-25T12:00:00+04:00',
  updatedAt: '2027-01-25T12:00:00+04:00',
  service: 'websites',
  reviewState: 'llm_reviewed',
  body: [
    {
      type: 'p',
      text: 'Animated website performance depends less on how much motion a page has than on how it is built. Animate only transform and opacity, trigger scroll effects without running code on every scroll tick, never hide the main content behind a fade-in, keep animation scripts from blocking taps, and switch motion down for people who ask for it. Done that way, a premium, animated site can still pass Core Web Vitals.',
    },
    { type: 'h2', text: 'Animate transform and opacity, nothing else' },
    {
      type: 'p',
      text: 'Browsers can move, scale, rotate and fade an element on the compositing stage without recalculating the layout of the page. Google\'s [web.dev guide to high-performance animations](https://web.dev/articles/animations-guide) recommends sticking to transform and opacity and says: "Avoid any property that triggers layout or paint unless it\'s absolutely necessary." In its own test of moving an element, the version that animated top and left dropped 50% of frames, while the version using transform dropped 1%.',
    },
    {
      type: 'table',
      head: ['You want to', 'Avoid animating', 'Animate instead'],
      rows: [
        ['Slide a panel or image', 'top, left, right, bottom, margin', 'transform: translate()'],
        ['Grow or shrink an element', 'width, height', 'transform: scale()'],
        ['Fade something in or out', 'visibility tricks, display', 'opacity'],
      ],
    },
    {
      type: 'p',
      text: 'The same rule protects layout stability. web.dev\'s [guidance on Cumulative Layout Shift](https://web.dev/articles/cls) says that for position changes you should avoid changing top, right, bottom or left and use transform: translate() instead, and that transform lets you animate elements without triggering layout shifts.',
    },
    { type: 'h2', text: 'Trigger scroll effects without a scroll handler' },
    {
      type: 'p',
      text: 'The usual premium-site effect is something that appears or moves as the visitor scrolls. The weak way to build it is a script that measures every element on every scroll event. MDN notes that older approaches using event handlers and loops over getBoundingClientRect() all run on the main thread, "even one of these can cause performance problems". The [Intersection Observer API](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API) is the lighter way to ask "has this element entered the screen?": the browser reports it, and the page adds a class that starts a transform or opacity transition.',
    },
    {
      type: 'p',
      text: 'For effects that must follow scroll position, such as a progress bar or parallax, CSS now has scroll-driven animations. Chrome\'s documentation describes them as [animations driven by scroll, running off the main thread](https://developer.chrome.com/docs/css-ui/scroll-driven-animations), available from Chrome 115 and listed there for later versions of Firefox and Safari. Check the current support table before relying on it, and keep a plain fallback for browsers without it.',
    },
    { type: 'h2', text: 'Motion and the three Core Web Vitals' },
    {
      type: 'ul',
      items: [
        'LCP (loading): do not hide the biggest element behind a reveal. web.dev\'s [LCP guide](https://web.dev/articles/lcp) says Chromium-based browsers exclude elements with an opacity of 0 from LCP candidates. A hero headline or image that starts transparent and fades in after a script runs can push LCP past the 2.5 second target. Let the first screen render in its final state.',
        'INP (responsiveness): [INP](https://web.dev/articles/inp) times the clicks, taps and key presses, from the moment the visitor acts to the next painted frame; 200 milliseconds or less is good and above 500 is poor. Scrolling is not counted, but an animation script that keeps the main thread busy delays the response to a tap on the menu. Google defines a [long task](https://web.dev/articles/optimize-long-tasks) as anything over 50 milliseconds and advises splitting long work into smaller pieces.',
        'CLS (stability): animate with transform, as above, and reserve space for anything that appears so surrounding content does not jump.',
      ],
    },
    {
      type: 'p',
      text: 'The general measurement routine and fixes for these metrics are in [how to improve Core Web Vitals](/blog/improve-core-web-vitals) and the wider checklist in [how to improve website speed](/blog/how-to-improve-website-speed); this post covers only what motion adds.',
    },
    { type: 'h2', text: 'Respect reduced motion, and test on a mid-range phone' },
    {
      type: 'p',
      text: 'Some visitors set their device to reduce motion. MDN\'s page on [prefers-reduced-motion](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion) explains that the setting tells the browser the user prefers an interface that removes, reduces or replaces motion, and that animations such as scaling or panning large objects can trigger discomfort for people with vestibular motion disorders. In practice, wrap large movements, parallax and autoplaying effects in a reduce rule that swaps them for a simple fade or nothing. It also saves work on weaker devices. The accessibility side is in [website accessibility basics](/blog/website-accessibility-basics), and the design side, with motion that is quiet and optional, in [luxury brand website design](/blog/luxury-brand-website-design).',
    },
    {
      type: 'p',
      text: 'Test on a mid-range Android phone, not only on a developer laptop. Core Web Vitals are judged at the 75th percentile of real visits on mobile and desktop separately, so the slow phones count.',
    },
    { type: 'h2', text: 'Use will-change sparingly' },
    {
      type: 'p',
      text: 'The will-change property tells the browser an element is about to animate. MDN calls it a last resort: "Use the will-change property as a last resort to try to deal with existing performance problems. Don\'t use it to anticipate performance problems." It warns that overuse causes excessive memory use and worse performance, and recommends switching it on and off with script around the change. A site where every element carries will-change has been tuned by guesswork.',
    },
    { type: 'h2', text: 'What to ask your developer' },
    {
      type: 'ol',
      items: [
        'Which properties does each animation change? Only transform and opacity, unless there is a stated reason.',
        'How are scroll effects triggered: Intersection Observer or CSS scroll-driven animations, not a scroll listener doing measurements?',
        'Is the LCP element visible in the first render, with no fade-in from opacity 0?',
        'What does the page do under prefers-reduced-motion?',
        'What are LCP, INP and CLS on mobile before and after the motion is added, measured on the same pages?',
      ],
    },
    {
      type: 'p',
      text: 'WakeUP builds premium, complex websites and landing pages, including interactive and animated ones; see [website and landing page development](/services/website-development). To see how your current site performs, send it for the [free marketing audit](/audit).',
    },
  ],
}
