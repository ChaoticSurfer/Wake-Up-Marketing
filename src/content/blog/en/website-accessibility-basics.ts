import type { BlogPost } from '@/lib/blog'

export const post: BlogPost = {
  locale: 'en',
  slug: 'website-accessibility-basics',
  title: 'Website accessibility basics for small business: fixes you can make yourself',
  metaTitle: 'Website Accessibility Basics',
  description:
    'Website accessibility basics for small business: alt text, contrast, keyboard use, captions and labels. Low-cost WCAG fixes you can make yourself.',
  publishedAt: '2027-01-20T18:00:00+04:00',
  updatedAt: '2027-01-20T18:00:00+04:00',
  service: 'websites',
  reviewState: 'llm_reviewed',
  body: [
    {
      type: 'p',
      text: 'Website accessibility basics for a small business come down to six low-cost fixes: describe meaningful images with alt text, make text readable against its background, let every control work with the keyboard, caption your videos, give every form field a label, and write headings and links that make sense out of context. Most of them need no developer (keyboard fixes are the usual exception), and they target the failures the web is most often measured to have.',
    },
    {
      type: 'h2',
      text: 'What accessibility means for a company website',
    },
    {
      type: 'p',
      text: 'An accessible site can be used by people who are blind, have low vision, are deaf or hard of hearing, cannot use a mouse, or have a temporary limit such as a broken arm or a bright screen. The standard most checks refer to is the Web Content Accessibility Guidelines (WCAG). The W3C\'s [WCAG overview](https://www.w3.org/WAI/standards-guidelines/wcag/) lists versions 2.0, 2.1 and 2.2, encourages you to use the latest version, and groups its criteria into levels A, AA and AAA.',
    },
    {
      type: 'p',
      text: 'The business reason is practical: a visitor who cannot read your price list, press your enquiry button or follow your video does not buy. The same fixes also help people on phones in sunlight and viewers with the sound off. If you sell to customers in the EU, note that the European Commission lists e-commerce among the services covered by the [European Accessibility Act](https://commission.europa.eu/strategy-and-policy/policies/justice-and-fundamental-rights/disability/union-equality-strategy-rights-persons-disabilities-2021-2030/european-accessibility-act_en); check with a lawyer whether your sales are in scope. This article is not legal advice.',
    },
    {
      type: 'h2',
      text: 'Where sites usually fail',
    },
    {
      type: 'p',
      text: 'The [WebAIM Million](https://webaim.org/projects/million/) analysis of the top one million home pages (February 2026) found detectable WCAG 2 failures on 95.9 percent of them, an average of 56.1 errors per page. That count covers only failures an automated tool can detect. The most common failures are also the cheapest to fix:',
    },
    {
      type: 'table',
      head: ['Failure (share of home pages, WebAIM 2026)', 'Plain-language fix'],
      rows: [
        ['Text with low contrast (83.9%)', 'Darken the text or lighten the background until it meets the ratio'],
        ['Images without alt text (53.1%)', 'Add a short description, or an empty alt for decoration'],
        ['Form inputs without labels (51%)', 'Add a visible label to every field'],
        ['Links with no text (46.3%)', 'Give icon-only links a name that says where they go'],
        ['Buttons with no text (30.6%)', 'Give icon-only buttons a name that says what they do'],
        ['No page language set (13.5%)', 'Set the language of the page in the site settings'],
      ],
    },
    {
      type: 'h2',
      text: 'Fixes you can make yourself',
    },
    {
      type: 'p',
      text: 'Alt text. The W3C\'s [alt text decision tree](https://www.w3.org/WAI/tutorials/images/decision-tree/) gives four rules. If an image carries meaning, write a short description of that meaning. If it is purely decorative or repeats nearby text, leave the alt empty so screen readers skip it. If it is an icon in a link or button, describe the destination or action. If it contains text that appears nowhere else, put that text in the alt. For graphs and dense information, do not rely on alt alone: give the same information in the page text. Write "Two technicians installing a ceiling unit", not "image123" or "photo of company".',
    },
    {
      type: 'p',
      text: 'Colour contrast. WCAG\'s [contrast requirement](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html) asks for a ratio of at least 4.5:1 for normal text and 3:1 for large-scale text, defined as at least 18 point, or 14 point bold. Light grey text on white and white text on a pale brand colour are the usual offenders. Paste your text and background colours into any contrast checker, then adjust the lighter one. This is also a design decision, so fix it once in the brand colours rather than page by page.',
    },
    {
      type: 'p',
      text: 'Keyboard use and visible focus. Put the mouse aside and press Tab through your key pages. The W3C\'s [Easy Checks](https://www.w3.org/WAI/test-evaluate/preliminary/) ask that everything works with the Tab key, that you can see where focus is, that the order is logical and that focus never gets trapped, for example inside a pop-up you cannot close. Menus that open only on hover and custom buttons built from plain elements are the common causes. A fix usually belongs to whoever built the site, so write down the page and the control and send it as a ticket.',
    },
    {
      type: 'p',
      text: 'Captions. WCAG\'s [captions criterion](https://www.w3.org/WAI/WCAG22/Understanding/captions-prerecorded.html) (Level A) requires captions for prerecorded audio in synchronised media, and its stated intent is to let people who are deaf or hard of hearing watch. Generate captions with your video platform or editor, then correct names, brand terms and Georgian words by hand. The same file helps anyone watching without sound. The guide to [captions and subtitles for social videos](/blog/captions-subtitles-for-social-videos) covers the workflow.',
    },
    {
      type: 'p',
      text: 'Headings, links, forms and the rest of the page structure need a few more habits:',
    },
    {
      type: 'ul',
      items: [
        'Headings: use real heading styles in order (one H1, then H2 and H3 under it), not bold text made large. Screen-reader users navigate by them.',
        'Links: the [link purpose criterion](https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context.html) (Level A) asks that a link\'s purpose can be told from its text or its context. Replace "click here" and "read more" with the destination.',
        'Forms: label every field, mark required fields in words and not by colour alone, and write error messages that say what to fix. See [contact form best practices](/blog/contact-form-best-practices) for the conversion side.',
        'Page titles and language: give each page its own title and set the page language.',
        'Text size: enlarge the text in your browser; nothing should overlap or force sideways scrolling.',
      ],
    },
    {
      type: 'h2',
      text: 'A one-hour self-check',
    },
    {
      type: 'ol',
      items: [
        'Pick five pages: home, your main service page, a form page, a page with video, and one with a table or long text.',
        'For each, run through the W3C Easy Checks: title, images, headings, contrast, text resize, keyboard, forms, moving content, video and basic structure.',
        'Write the failures in a sheet with page, problem, who fixes it (you or the developer) and how long it takes.',
        'Fix the ones you control today: alt text, headings, link text, captions, brand colours in the page builder.',
        'Send the rest to your developer as specific tickets, and re-check after the fix.',
      ],
    },
    {
      type: 'h2',
      text: 'What a self-check cannot tell you',
    },
    {
      type: 'p',
      text: 'The W3C is direct about the limit: "A web page could seem to pass these checks, yet still have significant accessibility barriers." Automatic tools and a first review find the visible problems; they do not replace testing with a screen reader or review by someone experienced, particularly for checkout, booking and account areas. Add accessibility to your regular upkeep, as in the [website maintenance checklist](/blog/website-maintenance-checklist), and avoid the mistakes in [small business website mistakes](/blog/small-business-website-mistakes).',
    },
    {
      type: 'h2',
      text: 'Where WakeUP fits',
    },
    {
      type: 'p',
      text: 'WakeUP builds premium, complex websites and landing pages; see the [website development service](/services/website-development). If you plan a new site or a redesign, put these checks into the brief so that contrast, labels, keyboard use and captions are decided before design starts. To see how your current site performs overall, request the [free audit](/audit).',
    },
  ],
}
