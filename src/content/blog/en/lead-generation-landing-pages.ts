import type { BlogPost } from '@/lib/blog'

export const post: BlogPost = {
  locale: 'en',
  slug: 'lead-generation-landing-pages',
  title: 'Lead generation landing page examples: the parts that matter and how they look by business type',
  metaTitle: 'Lead Generation Landing Page Examples',
  description:
    'Lead generation landing page examples by business type: one offer, headline, proof, short form, speed, mobile, thank-you page and tracking.',
  publishedAt: '2026-12-15T12:00:00+04:00',
  updatedAt: '2026-12-15T12:00:00+04:00',
  service: 'websites',
  reviewState: 'llm_reviewed',
  body: [
    {
      type: 'p',
      text: 'Every good lead generation landing page example shares the same eight parts: one offer, a headline that names it, proof, a short form, fast loading, a layout that works on a phone, a thank-you page and tracking that counts real enquiries. The examples below are illustrative layouts by business type, not screenshots of real companies.',
    },
    {
      type: 'p',
      text: 'A landing page is built for one action, unlike a home page. If you are still choosing channels, start with [lead generation strategies for a small business](/blog/lead-generation-strategies); this post covers the page that your ads, emails or search traffic land on.',
    },
    { type: 'h2', text: 'One offer, one action' },
    {
      type: 'p',
      text: 'The page should ask for one thing. A visitor who arrives from an ad for a free quote should not also be offered a newsletter, a careers link and three other services. Remove the main navigation menu, or cut it down to a logo and a phone number, so the only way forward is the form.',
    },
    {
      type: 'p',
      text: 'Pick the offer by how ready the visitor is. A buyer comparing suppliers will accept "get a quote" or "book a call". A buyer still researching needs a lower-commitment offer: a checklist, a price guide, a short audit. This is the same trade-off covered in [lead generation vs demand generation](/blog/lead-generation-vs-demand-generation): the page should match the stage of the person arriving.',
    },
    { type: 'h2', text: 'Headline, proof and the first screen' },
    {
      type: 'p',
      text: 'The first screen should answer three questions without scrolling: what is this, who is it for, and what happens if I fill in the form. A headline that repeats the words of the ad or search query that brought the visitor keeps the promise consistent. "Office cleaning in Tbilisi, quote within one working day" says more than "Welcome to our company".',
    },
    {
      type: 'p',
      text: 'Proof goes close to the form. Use only proof you can show: real client names with permission, real numbers you have measured, certifications, years in business, a named person who answers the enquiry. If you have none yet, say so by being specific about the process instead ("we reply the same day, and you get a written quote") and leave out invented testimonials. Invented reviews are worse than none.',
    },
    { type: 'h2', text: 'Form length and what to ask' },
    {
      type: 'p',
      text: 'Every field is a small cost to the visitor. A practical rule is to ask only what you need to make the first reply useful. For most B2B services that is name, phone or email, and one qualifying question. Ask the rest on the call. This is a working rule, not a law: a mortgage broker or a medical clinic may need more detail before a call is worthwhile, and a longer form can screen out people who were never going to buy.',
    },
    {
      type: 'ul',
      items: [
        'Name and one contact method: almost always needed.',
        'A qualifying question (budget range, company size, preferred date): add one if the answer changes what you say first.',
        'Consent line: if you collect personal data, state what you will use it for and link your privacy notice.',
      ],
    },
    {
      type: 'p',
      text: 'Test form length with your own data. Run two versions for a few weeks and compare not only the number of enquiries but the number that turn into conversations. A shorter form may raise volume; whether it raises sales depends on your follow-up. Our post on [marketing KPIs](/blog/marketing-kpis) explains how to track enquiries through to revenue.',
    },
    { type: 'h2', text: 'Speed and mobile' },
    {
      type: 'p',
      text: 'Google publishes thresholds for page experience in its Core Web Vitals. On [web.dev](https://web.dev/articles/vitals), the guidance for a good experience is that Largest Contentful Paint (LCP) should occur within 2.5 seconds of when the page first starts loading, Interaction to Next Paint (INP) should be 200 milliseconds or less, and Cumulative Layout Shift (CLS) should be 0.1 or less. It recommends measuring the 75th percentile of page loads, segmented across mobile and desktop.',
    },
    {
      type: 'p',
      text: 'On a landing page the LCP element is usually the hero image or the headline. The [web.dev guide to optimizing LCP](https://web.dev/articles/optimize-lcp) splits load time into four parts: time to first byte, resource load delay, resource load duration and element render delay. It also states: "Never lazy-load your LCP image, as that will always lead to unnecessary resource load delay". In practice: size the hero image for the screen, do not lazy-load it, and avoid layout jumps by reserving space for images and the form.',
    },
    {
      type: 'ul',
      items: [
        'Check the page on a mid-range phone on mobile data, not only on an office laptop.',
        'Make the call button and the form fields large enough to tap without zooming.',
        'Use the right keyboard for each field (phone number pad, email keyboard).',
        'Keep the form within one scroll, or add a button that jumps to it.',
      ],
    },
    { type: 'h2', text: 'Layouts by business type (illustrative)' },
    {
      type: 'p',
      text: 'The three layouts below show how the same parts can be arranged for different offers. They are illustrative, not taken from any real company or campaign.',
    },
    {
      type: 'table',
      head: ['Business type (illustrative)', 'Offer', 'Top of page', 'Proof', 'Form'],
      rows: [
        [
          'B2B service company, e.g. accounting or IT support',
          'Free 30-minute review of current setup',
          'Headline naming the service and city, one line on who it is for, "Book a review" button',
          'Client logos shown with permission, a named contact person, a short process in three steps',
          'Name, work email, phone, one question about company size',
        ],
        [
          'Clinic or local service, e.g. dental or beauty',
          'Booking request for a first visit',
          'Headline with the treatment and area, phone button, opening hours',
          'Photos of the real premises and team, certifications, review excerpts the business holds',
          'Name, phone, preferred day, treatment',
        ],
        [
          'Course or event organiser',
          'Seat or waiting-list registration',
          'Headline with date and place, what attendees learn, "Reserve a seat" button',
          'Programme, speaker names, what past attendees received',
          'Name, email, phone, consent line',
        ],
      ],
    },
    { type: 'h2', text: 'The thank-you page' },
    {
      type: 'p',
      text: 'After the form is sent, send the visitor to a separate thank-you page rather than showing a message on the same URL. It does three jobs. It confirms what happens next and when ("We will call you within one working day from this number"). It gives a safe next step, such as a link to a useful guide. And it gives your analytics a distinct page and a clear completion point to count.',
    },
    {
      type: 'p',
      text: 'Then keep the promise: a fast reply matters more than a clever page, as the speed to lead section of [lead generation strategies](/blog/lead-generation-strategies) explains.',
    },
    { type: 'h2', text: 'Tracking: count enquiries, not visits' },
    {
      type: 'p',
      text: 'Google Analytics 4 can measure form activity. The [enhanced measurement help page](https://support.google.com/analytics/answer/9216061) lists two form events: form_start, "the first time a user interacts with a form in a session", and form_submit, "when the user submits a form". For lead generation, Google also lists a recommended event called generate_lead in its [recommended events documentation](https://support.google.com/analytics/answer/9267735), described as when a user "submits a form online or submits information offline".',
    },
    {
      type: 'p',
      text: 'Collecting an event is not the same as counting it as a goal. Google describes a [key event](https://support.google.com/analytics/answer/9267568) as "an event that measures an action that\'s particularly important to the success of your business", and says "Any event you collect can become a key event". Mark your lead event as a key event, and check it counts one enquiry per real submission, not one per page view of the thank-you page.',
    },
    {
      type: 'ol',
      items: [
        'Decide what counts as a lead (a submitted form, a click on the phone number, a booked call).',
        'Send one event for each, with a clear name.',
        'Mark the lead event as a key event in Google Analytics.',
        'Test: submit the form yourself with obviously fake details that go to an inbox you control, and confirm one event appears.',
        'Pass the source of each lead (ad campaign, search, referral) into your CRM or sheet, so you can compare cost per lead by channel.',
      ],
    },
    {
      type: 'p',
      text: 'If you run paid ads to the page, the same enquiry event is what ad platforms optimise on. Our posts on [Google Ads optimization tips](/blog/google-ads-optimization-tips) and [Facebook ads metrics](/blog/facebook-ads-metrics) cover conversion tracking and the numbers to watch once ads send traffic to the page.',
    },
    { type: 'h2', text: 'Build it, or check the one you have' },
    {
      type: 'p',
      text: 'If you already have a landing page, review it against the eight parts above before changing the ad budget. If you need a new one, WakeUP Marketing builds [websites and landing pages](/services/website-development) with tracking set up from the start. For a first look at your current pages, you can request the [free audit](/audit). For pricing context, see [how much a website costs](/blog/how-much-does-a-website-cost).',
    },
  ],
}
