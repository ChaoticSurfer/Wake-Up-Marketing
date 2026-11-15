import type { BlogPost } from '@/lib/blog'

export const post: BlogPost = {
  locale: 'en',
  slug: 'how-to-write-a-call-to-action',
  title: 'How to write a call to action: wording, placement and testing, with before and after examples',
  metaTitle: 'How to Write a Call to Action',
  description:
    'How to write a call to action that gets clicked: verb-plus-outcome wording, where to place it, and before and after CTA examples you can test.',
  publishedAt: '2027-02-27T18:00:00+04:00',
  updatedAt: '2027-02-27T18:00:00+04:00',
  service: 'content',
  reviewState: 'llm_reviewed',
  body: [
    {
      type: 'p',
      text: 'To write a call to action, name one next step and what the reader gets from it: start with a verb, add the outcome, and keep it short. "Get your free price estimate" beats "Submit" because it tells people what happens after the click. Then place it where the reader has just been given a reason to act, make it easy to hit, and test one change at a time.',
    },
    { type: 'h2', text: 'What a call to action has to do' },
    {
      type: 'p',
      text: 'A call to action (CTA) is the button, link or line that asks for the next step. It fails in two ways: the reader does not see it, or the reader sees it and does not know what will happen. Wording fixes the second problem, placement the first.',
    },
    {
      type: 'p',
      text: 'The cost of vagueness is documented. Nielsen Norman Group watched users meet a generic "Get Started" button on homepages and found that some stopped looking for information and ended up in sign-up flows they did not expect. Its advice: "avoid a generic call-to-action and increase the information scent by stating precisely what users should expect" ([Nielsen Norman Group](https://nngroup.com/articles/get-started/)). Information scent is simply how well a label predicts what is behind it.',
    },
    { type: 'h2', text: 'Wording: a verb, an outcome, and no surprises' },
    {
      type: 'p',
      text: 'Nielsen Norman Group\'s Kate Moran sums up good link and button labels as [four qualities](https://www.nngroup.com/articles/better-link-labels/): specific, sincere, substantial and succinct. In practice that gives you a short checklist.',
    },
    {
      type: 'ul',
      items: [
        'Start with a verb the reader would use: get, book, compare, download, call, see.',
        'Name the outcome or the object: "Book a 15-minute call", not "Contact us".',
        'Say what it costs when the answer is free, or what it commits them to when it is not.',
        'Keep it to roughly two to five words on a button. Put the longer promise in the line above it.',
        'Make the promise true. If the button says "Get a quote" and leads to a 12-field form, the reader feels tricked.',
        'Use the first person only if it reads naturally ("Show my options"). Do not force it.',
      ],
    },
    {
      type: 'p',
      text: 'One CTA per decision. If a page asks for a call, a download, a newsletter sign-up and a follow, readers pick none. Choose the primary action and demote the others to plain links.',
    },
    { type: 'h2', text: 'Before and after examples' },
    {
      type: 'p',
      text: 'These rewrites are illustrations for imagined businesses, not results from real campaigns. They show the pattern: replace the generic label with a verb and an outcome, and put a reason or reassurance next to it.',
    },
    {
      type: 'table',
      head: ['Situation', 'Before', 'After', 'What changed'],
      rows: [
        ['Dental clinic, appointment page', 'Submit', 'Book my check-up', 'Names the outcome, speaks for the reader'],
        ['B2B supplier, quote form', 'Contact us', 'Get a quote within one working day', 'States the result and the response time (only if you can keep it)'],
        ['Furniture shop, product page', 'Buy now', 'Add to cart, with free delivery in Tbilisi', 'Lowers risk at the moment of doubt (only if true)'],
        ['Consultancy, homepage', 'Get started', 'See how the free audit works', 'Matches what a first-time visitor actually wants'],
        ['Newsletter box', 'Subscribe', 'Send me the monthly price report', 'Says what arrives and how often'],
        ['Event page', 'Learn more', 'Reserve a seat for 14 March', 'Specific action, a date, a reason to decide now'],
      ],
    },
    {
      type: 'p',
      text: 'More on turning a promise into a persuasive line, with structures such as AIDA and PAS, is in the [copywriting formulas guide](/blog/copywriting-formulas).',
    },
    { type: 'h2', text: 'Placement: after the reason, not before it' },
    {
      type: 'p',
      text: 'The right position depends on how much thinking the decision needs. This is common practice rather than a law, so treat it as a starting hypothesis.',
    },
    {
      type: 'ul',
      items: [
        'Simple, low-risk offers (a free download, a booking for a known service): put the CTA in the first screen and repeat it at the end.',
        'Considered purchases (a website, a B2B service, a high price): put the first CTA after the proof, such as results, reviews, pricing logic or a process, and repeat it at the end of the page.',
        'Long articles: add a short, relevant CTA near the end of the section that created the need, plus one at the bottom. A button right under the first paragraph, before any value, is usually too early.',
        'Mobile: the CTA should be reachable without hunting. A sticky button works if it does not cover the content.',
      ],
    },
    { type: 'h2', text: 'Make it easy to see and to tap' },
    {
      type: 'p',
      text: 'Design carries the words. Give the primary button a colour that contrasts with the page, spacing around it, and a size people can hit with a thumb. The accessibility standard WCAG 2.2 sets a floor: pointer targets should be [at least 24 by 24 CSS pixels](https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html), with some exceptions. A usable button is normally larger than that.',
    },
    {
      type: 'p',
      text: 'Keep the surrounding friction low as well. Ask only for what you need on the next step, and put a short reassurance beside the button ("No payment needed", "We reply within a day" if it is true). The landing-page side of this, including form length, is covered in [lead generation landing pages](/blog/lead-generation-landing-pages).',
    },
    { type: 'h2', text: 'CTAs outside the website' },
    {
      type: 'ul',
      items: [
        'Ads: the platform often gives you a fixed button list, so the wording of the main text and headline does the specific work. Make the line before the button state the offer, and keep button and landing page consistent.',
        'Email: one primary link, in plain wording that matches the subject line. Repeat the same ask near the end.',
        'Social posts and Reels: say the action out loud or on screen, once, at the end ("Message us for the price list"), rather than three times.',
        'Print and QR codes: tell people why to scan ("Scan to see the menu"), not just "Scan me".',
      ],
    },
    { type: 'h2', text: 'Test one change at a time' },
    {
      type: 'p',
      text: 'You will not know which CTA works until visitors choose. Change the wording, or the placement, or the colour, but not all three at once. Run the test long enough on enough visitors, and count the action you care about, such as enquiries, not just clicks. Traffic needs, hypotheses and common mistakes are in the [landing page A/B testing guide](/blog/landing-page-ab-testing). If traffic is too low for a test, make the change, record the date and compare the same weeks before and after, knowing that other things moved too.',
    },
    {
      type: 'p',
      text: 'WakeUP writes and designs the copy, photos and short videos that go around the button; see [content creation](/services/content-creation). If you want a second pair of eyes on the CTAs and the path from visit to enquiry on your site, ask for the [free marketing audit](/audit).',
    },
  ],
}
