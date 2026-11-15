import type { BlogPost } from '@/lib/blog'

export const post: BlogPost = {
  locale: 'en',
  slug: 'how-to-improve-lead-quality',
  title: 'How to improve lead quality from ads and forms',
  metaTitle: 'How to Improve Lead Quality from Ads',
  description:
    'How to improve lead quality: tighten keywords and offer wording, add forms that filter, and feed sales results back into your ad targeting.',
  publishedAt: '2027-02-13T15:00:00+04:00',
  updatedAt: '2027-02-13T15:00:00+04:00',
  service: 'advertising',
  reviewState: 'llm_reviewed',
  body: [
    {
      type: 'p',
      text: 'To improve lead quality, change what happens before the enquiry: exclude the wrong searches, state who the offer is for and what it costs to be a fit, add form questions or a review step that filter casual submissions, and send sales outcomes back to the ad platform so it learns what a good lead looks like. Chasing a lower cost per lead without these steps can lower quality too.',
    },
    {
      type: 'p',
      text: 'This guide covers the capture side: ads, offers and forms. What to do with a lead once it arrives is in [how to qualify leads](/blog/how-to-qualify-leads) and the [lead scoring model](/blog/lead-scoring-model).',
    },
    { type: 'h2', text: 'Define a bad lead before you try to fix it' },
    {
      type: 'p',
      text: 'Ask the people who answer the phone to sort the last 30 leads into good, unclear and bad, and write one reason next to every bad one. Typical reasons are outside your area, budget far below your prices, a student or competitor, wrong service, and no intention to buy. Each reason points to a fix in a different place.',
    },
    {
      type: 'table',
      head: ['Reason the lead was bad', 'Where it started', 'Fix'],
      rows: [
        ['Wanted something you do not sell', 'Broad keywords or audiences', 'Negative keywords, tighter targeting'],
        ['Expected a free or very cheap service', 'Offer wording', 'State what the service is and who it suits'],
        ['Not ready to buy', 'Low-effort form', 'Extra question or review step'],
        ['Outside your market or size', 'Location and targeting', 'Tighter geography, a qualifying question'],
        ['Fake or mistyped contact details', 'Open form, no validation', 'Field validation, a confirm step'],
        ['Good lead, bad outcome', 'Slow or weak follow-up', 'Reply speed, not capture (see the contact form guide)'],
      ],
    },
    { type: 'h2', text: 'Search ads: keep the wrong searches out' },
    {
      type: 'p',
      text: 'Google\'s help page says [negative keywords let you exclude search terms from your campaigns](https://support.google.com/google-ads/answer/2453972), so your ads stop showing for terms that do not match what you offer. For lead quality, the search terms report is your evidence: read the actual queries that produced enquiries and mark the ones your sales team rejected. Our [negative keywords guide](/blog/google-ads-negative-keywords) shows the routine, including match types.',
    },
    {
      type: 'p',
      text: 'Do not stop at exclusion. Words such as "free", "jobs", "course" or "how to" often bring people who want information, not a supplier. Terms that include a location, a service name or a word like "quote" or "agency" often come from people who are choosing. Check both against your own search terms report rather than assuming.',
    },
    { type: 'h2', text: 'Offer wording: say who it is not for' },
    {
      type: 'p',
      text: 'A vague offer attracts everyone. A specific one lets the wrong people drop out before they fill in the form. Compare these two lines for the same service.',
    },
    {
      type: 'ul',
      items: [
        'Vague: "Get a free marketing consultation." Anyone with a question will take it.',
        'Specific: "Free ad account review for companies with 20 to 250 staff. We check your ads, site and tracking and send a written summary."',
      ],
    },
    {
      type: 'p',
      text: 'Add the facts that screen: who the service is for, a minimum size or budget range if you can state one, the city or region you serve, and what happens after the request. A line like "projects usually start at X" will discourage some people, and that is the point, provided the number is one you have confirmed and can stand behind. Landing-page structure is covered in [lead generation landing pages](/blog/lead-generation-landing-pages).',
    },
    { type: 'h2', text: 'Forms: friction that filters' },
    {
      type: 'p',
      text: 'The conventional advice is to shorten forms. That can raise the number of leads and lower their quality, because it removes the small effort that separates the curious from the serious. The aim is the right amount of friction: enough to filter, not enough to scare off a real buyer. [Contact form best practices](/blog/contact-form-best-practices) covers field counts and layout, and these are the quality-specific options.',
    },
    {
      type: 'ul',
      items: [
        'One qualifying question with fixed answers, for example company size, timeline or the service wanted. A dropdown is easy to answer and easy to filter.',
        'A budget or range question only if your sales team uses it; otherwise it adds friction for nothing.',
        'Required business email instead of a free-mail address, if your customers are companies.',
        'A short free-text "what do you need?" field. The answers show you intent, and empty or nonsense text is a quick signal.',
        'A clear statement of the next step, so the person knows a call follows.',
      ],
    },
    { type: 'h2', text: 'Lead ads on Facebook and Instagram' },
    {
      type: 'p',
      text: 'Meta\'s lead ads have built-in options for this. Meta\'s developer documentation says you can ["get higher quality leads by adding one or more of the following form settings"](https://developers.facebook.com/documentation/ads-commerce/marketing-api/guides/lead-ads/create): performance tracking, higher-intent forms, organic-lead filtering and gated content. It explains that by default lead ads are optimised for the volume of leads, and that a higher-intent form adds a step where people review their answers before they submit.',
    },
    {
      type: 'p',
      text: 'The same page lists custom questions, including dropdowns, and an optimisation goal called QUALITY_LEAD; with a CRM data source set up, further quality optimisation is possible. In practice, use a higher-intent form and at least one custom question, then compare lead quality with a volume form in a small test. Whether a lead ad or a landing page gives better leads is covered in [Facebook lead ads vs landing page](/blog/facebook-lead-ads-vs-landing-page).',
    },
    { type: 'h2', text: 'Close the loop: send sales results back to the ad platform' },
    {
      type: 'p',
      text: 'Ad platforms optimise for the action you tell them about. If a form submission is the only signal, they find more form submissions. Google\'s help on [offline conversion imports](https://support.google.com/google-ads/answer/2998031) describes measuring what happens "in the offline world after your ad results in a click or call", by matching the click ID saved with each lead to a later outcome such as a qualified lead or a sale. Google also reports that advertisers who combined first-party data with these click IDs saw a median 10% increase in conversions over standard imports; that is Google\'s own figure, and your result will vary. Google also says offline conversion uploads were migrated to its Data Manager API from 15 June 2026, so check how your setup sends them.',
    },
    {
      type: 'ol',
      items: [
        'Store the click ID or lead ID with every enquiry in your CRM or spreadsheet.',
        'Have sales mark each lead as qualified, won or rejected, with a reason.',
        'Send those statuses back to the platform, or at minimum review them against campaigns every two weeks.',
        'Move bidding towards the qualified status once there is enough volume; our [Google Ads bidding strategies](/blog/google-ads-bidding-strategies) guide explains how much data helps.',
        'Cut the campaigns, keywords and audiences with many rejected leads, even if their cost per lead looks good.',
      ],
    },
    {
      type: 'p',
      text: 'This works only if marketing and sales agree on the definition of a good lead; see [marketing and sales alignment](/blog/marketing-and-sales-alignment).',
    },
    { type: 'h2', text: 'Judge by cost per qualified lead' },
    {
      type: 'p',
      text: 'After the changes, expect fewer leads. Judge them by cost per qualified lead and by cost per customer, not by cost per lead. A campaign that produces ten leads of which four are qualified can be worth more than one that produces fifty of which two are, because sales time goes to the right people. WakeUP runs and reviews paid campaigns through its [advertising service](/services/advertising), and the [free audit](/audit) is a way to see whether your tracking and targeting are set up to separate good leads from bad.',
    },
  ],
}
