import type { BlogPost } from '@/lib/blog'

export const post: BlogPost = {
  locale: 'en',
  slug: 'mobile-friendly-website-checklist',
  title: 'Mobile friendly website checklist: phone-first checks for layout, tap targets, pop-ups and speed',
  metaTitle: 'Mobile Friendly Website Checklist',
  description:
    'A mobile friendly website checklist with pass marks: viewport, text, tap targets, pop-ups, speed and forms, plus a 15-minute test on a real phone.',
  publishedAt: '2027-02-07T18:00:00+04:00',
  updatedAt: '2027-02-07T18:00:00+04:00',
  service: 'websites',
  reviewState: 'llm_reviewed',
  body: [
    {
      type: 'p',
      text: 'A mobile friendly website checklist comes down to six areas, checked on a real phone: the page fits the screen with no sideways scrolling, text is readable without zooming, buttons are big enough to tap, nothing covers the content, the first screen loads fast, and the phone version holds everything the desktop version does. The sections below give a pass mark for each.',
    },
    { type: 'h2', text: 'Why check on a phone first' },
    {
      type: 'p',
      text: 'Two reasons. First, Google indexes the phone version: its guide says that [Google uses the mobile version of a site\'s content, crawled with the smartphone agent, for indexing and ranking](https://developers.google.com/search/docs/crawling-indexing/mobile/mobile-sites-mobile-first-indexing). What is missing on the phone is missing for search.',
    },
    {
      type: 'p',
      text: 'Second, your visitors are on phones. DataReportal\'s Digital 2026 report for Georgia lists [6.46 million cellular mobile connections, equal to 170 percent of the population](https://datareportal.com/reports/digital-2026-georgia), against 3.12 million internet users in October 2025. Connections are not web traffic, so look at the device split in your own analytics, but the report shows how widespread phones are. Check the device split in your own analytics, and if phones are a large share, treat the phone layout as the main design and the desktop view as the secondary one.',
    },
    { type: 'h2', text: 'Set-up: viewport and content parity' },
    {
      type: 'ul',
      items: [
        'Viewport tag present. MDN recommends a viewport meta tag with width=device-width, which sets the viewport to match the device\'s width.',
        'Zoom not disabled. MDN warns that setting user-scalable to no [prevents people with low vision from reading the page](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/meta/name/viewport). Leave zoom on.',
        'Same primary content on phone and desktop. Google asks that the phone site carries the same content, structured data and meta title and description, and uses the same robots meta tags on both. Content hidden in accordions or tabs on mobile is acceptable if it is still there.',
        'Primary content loads without a tap or swipe. Google says not to lazy-load primary content upon user interaction, because it will not swipe or click to reveal it.',
      ],
    },
    { type: 'h2', text: 'Layout and text' },
    {
      type: 'ul',
      items: [
        'No horizontal scroll on any page. Open the longest pages and the widest tables; wide tables need to scroll inside their own box or be restructured.',
        'One column of content on narrow screens. Side-by-side blocks should stack in a sensible order: headline, proof, call to action.',
        'Text readable without pinch-zoom. If you have to zoom to read a paragraph, the type is too small or the line too long.',
        'Images fit the width and do not push text out of place. Check logos, banners and any text baked into images.',
        'Georgian text checked on the phone itself. Georgian renders wide and wraps differently from English, so headlines that fit in English can break buttons and menus.',
        'The first screen says what you do and gives one action, as covered in the [website audit checklist](/blog/website-audit-checklist).',
      ],
    },
    { type: 'h2', text: 'Tap targets' },
    {
      type: 'p',
      text: 'Fingers are less precise than a mouse pointer. Two published numbers help you judge. web.dev recommends a [minimum touch target of around 48 device independent pixels, spaced about 8 pixels apart](https://web.dev/articles/accessible-tap-targets). The accessibility standard WCAG 2.2 sets a lower floor at level AA: [pointer targets at least 24 by 24 CSS pixels](https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html), with exceptions such as links within a sentence or targets with enough spacing around them.',
    },
    {
      type: 'ul',
      items: [
        'Buttons, menu items and the phone number are tappable with a thumb without hitting a neighbour.',
        'Menu icon, close buttons and cookie choices are not tiny.',
        'The phone number and email are links: tapping calls or opens mail.',
        'Links in lists or footers have space between them, not stacked closely line after line.',
        'The main call to action is reachable without scrolling back to the top.',
      ],
    },
    { type: 'h2', text: 'Pop-ups and banners' },
    {
      type: 'p',
      text: 'On a small screen a pop-up can hide the whole page. Google\'s guidance on intrusive interstitials says that [intrusive interstitials and dialogs obstruct users\' view of the content](https://developers.google.com/search/docs/appearance/avoid-intrusive-interstitials) and suggests banners that take up only a small fraction of the screen instead of full page overlays. Google exempts interstitials a site is legally required to show, such as an age gate, from that guidance, but keep any such notice as compact as the law allows.',
    },
    {
      type: 'ul',
      items: [
        'No full-screen pop-up appears on the first visit before the visitor has read anything.',
        'Every pop-up has a close button that is easy to hit.',
        'The cookie notice leaves the page usable and does not cover the main button.',
        'Chat widgets and sticky bars do not cover the form fields or the call to action.',
      ],
    },
    { type: 'h2', text: 'Speed on a phone' },
    {
      type: 'p',
      text: 'Phone speed is not the same as the speed on your office computer. Test on a mobile connection, not Wi-Fi. Google\'s Core Web Vitals give targets: [LCP of 2.5 seconds or less, INP of 200 milliseconds or less and CLS of 0.1 or less](https://web.dev/articles/vitals), measured at the 75th percentile of page loads and segmented across mobile and desktop.',
    },
    {
      type: 'ul',
      items: [
        'The main image or heading appears within about 2.5 seconds on a mobile connection. Do not lazy-load that main image: web.dev says to never lazy-load your LCP image.',
        'Menus and buttons react at once when tapped (INP).',
        'Nothing jumps while loading: ad slots, images and cookie bars have reserved space (CLS).',
        'Images are sized for the phone, not delivered at desktop size.',
      ],
    },
    {
      type: 'p',
      text: 'The fixes are in the [website speed guide](/blog/how-to-improve-website-speed) and the [Core Web Vitals guide](/blog/improve-core-web-vitals); this checklist only tells you whether you pass.',
    },
    { type: 'h2', text: 'Forms and contact' },
    {
      type: 'ul',
      items: [
        'Few fields: name and phone or email is enough for a first enquiry.',
        'The right keyboard appears for each field (number pad for phone, email keyboard for email).',
        'Labels stay visible while typing and error messages are next to the field that failed.',
        'The submit button is not hidden behind the keyboard.',
        'A thank-you message or page confirms that the message went through.',
      ],
    },
    {
      type: 'p',
      text: 'More on form design is in [contact form best practices](/blog/contact-form-best-practices).',
    },
    { type: 'h2', text: 'A 15-minute test on a real phone' },
    {
      type: 'ol',
      items: [
        'Take the phone of someone who is not on the project team, on mobile data, in a normal environment.',
        'Open the home page, a service page and the contact page. Time the first screen.',
        'Try to do the thing a customer would: find the price or service, then call or send an enquiry.',
        'Rotate the phone and zoom in once. Note anything that breaks.',
        'Write each problem on the list with the page and the device, then fix the ones that block the enquiry first.',
      ],
    },
    {
      type: 'p',
      text: 'If the list is long, the cause is often a layout built for desktop and squeezed down afterwards. WakeUP builds premium, complex websites and landing pages; see [website development](/services/website-development), or start with the [free audit](/audit) to see how your current site performs on a phone.',
    },
  ],
}
