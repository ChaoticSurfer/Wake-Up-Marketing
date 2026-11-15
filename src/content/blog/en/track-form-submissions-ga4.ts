import type { BlogPost } from '@/lib/blog'

export const post: BlogPost = {
  locale: 'en',
  slug: 'track-form-submissions-ga4',
  title: 'How to track form submissions in GA4: three methods and how to check the counts',
  metaTitle: 'How to Track Form Submissions in GA4',
  description:
    'How to track form submissions in GA4 with enhanced measurement, a thank-you page or Google Tag Manager, plus how to check that the lead counts are real.',
  publishedAt: '2027-02-22T12:00:00+04:00',
  updatedAt: '2027-02-22T12:00:00+04:00',
  service: 'websites',
  reviewState: 'llm_reviewed',
  body: [
    {
      type: 'p',
      text: 'To track form submissions in GA4 you have three options: turn on enhanced measurement, which can record a form_submit event; count visits to a thank-you page by creating an event from page_view; or fire your own event with Google Tag Manager when the form is sent. Whichever you use, mark the resulting event as a key event and test it with a real submission before you trust the numbers.',
    },
    { type: 'h2', text: 'Which method to use' },
    {
      type: 'table',
      head: ['Method', 'Works best when', 'Main risk'],
      rows: [
        ['Enhanced measurement (form_submit)', 'You want a quick start and the form is a standard one', 'May count attempts that fail, and may miss forms that do not submit in the usual way'],
        ['Thank-you page', 'The form sends visitors to its own confirmation URL', 'Counts reloads and people who open the page directly'],
        ['Google Tag Manager trigger', 'The form shows a message on the same page, or you need to check success', 'More setup; a wrong trigger fires on every attempt'],
      ],
    },
    {
      type: 'p',
      text: 'For a company site, the thank-you page is often the most dependable of the three, because the page normally loads only after the form is accepted. Before choosing, check what your form does after it is sent. If you are building or rebuilding the form, [contact form best practices](/blog/contact-form-best-practices) recommends a separate thank-you address for exactly this reason.',
    },
    { type: 'h2', text: 'Method 1: enhanced measurement' },
    {
      type: 'p',
      text: 'GA4 can collect form events without code. According to Google\'s page on [enhanced measurement events](https://support.google.com/analytics/answer/9216061), form_start fires "the first time a user interacts with a form in a session" and form_submit fires "when the user submits a form". Both carry the parameters form_id, form_name and form_destination, and form_submit adds form_submit_text with the submit button\'s text. To report on those parameters you first have to create custom dimensions for them.',
    },
    {
      type: 'ol',
      items: [
        'In GA4, open Admin, then Data streams, choose your web stream and make sure enhanced measurement is on, including form interactions.',
        'Submit a test form on your site and look for form_submit in DebugView (see the checking section below).',
        'If it appears, mark it as a key event.',
      ],
    },
    {
      type: 'p',
      text: 'Google\'s page does not describe edge cases, such as forms that submit in the background without a standard submit action. Some site builders and form plugins work that way, so a missing form_submit is a reason to move to method 2 or 3, not a sign that nobody enquired. Also test what happens when you submit a form with an error: if the event still fires, it is counting attempts, not leads.',
    },
    { type: 'h2', text: 'Method 2: count the thank-you page' },
    {
      type: 'p',
      text: 'If a successful submission sends the visitor to its own URL, such as /thank-you, you can create a GA4 event from page_view for that page. Google\'s [key event tutorial](https://support.google.com/analytics/answer/12966437) shows the steps for a confirmation page:',
    },
    {
      type: 'ol',
      items: [
        'In Admin, under Data display, open Events and click Create event.',
        'Name the event generate_lead and turn on Mark as key event.',
        'Choose Create without code, set page_view as the existing event and enter the page\'s URL.',
        'Save, then visit the page and check the Realtime report for the event. Google says key event changes can take from a few minutes to a few hours to apply.',
      ],
    },
    {
      type: 'p',
      text: 'The same tutorial warns against the shortcut: marking page_view itself as a key event "would mark all pageviews as key events". The condition on the page URL is what makes the event specific. Two things go wrong with this method. First, anyone who reloads the page or bookmarks it adds a count. Second, if your form shows a message on the same page instead of redirecting, there is no page to count. The thank-you page must also carry the GA4 tag, a point covered in [GA4 for small business](/blog/ga4-for-small-business).',
    },
    { type: 'h2', text: 'Method 3: Google Tag Manager' },
    {
      type: 'p',
      text: 'Tag Manager gives you the most control and the best way to check success. The built-in Form Submission trigger has two options worth knowing, described in Google\'s [trigger help](https://support.google.com/tagmanager/answer/7679217). Check Validation sets the trigger "to fire only if the form is successfully sent"; without it, the trigger fires whenever a user tries to submit the form, even if submission fails. Wait for Tags delays the submission until the tags that depend on the trigger have fired, because otherwise "slow tags may not fire before the form submit causes the next page to load". Google also advises specifying a condition such as a specific URL where you expect the form submission to take place.',
    },
    {
      type: 'ol',
      items: [
        'In Tag Manager, create a Form Submission trigger with Check Validation on, limited to the page the form lives on.',
        'Create a GA4 event tag that fires on it, named generate_lead or another clear name.',
        'Preview the container, submit a real test form and confirm the trigger fires once.',
        'Publish, then mark the event as a key event in GA4.',
      ],
    },
    {
      type: 'p',
      text: 'If the form is built with JavaScript, a site builder or a plugin that does not use a normal submit, the built-in trigger may not detect it. In that case the form needs to push its own event when the server accepts the enquiry, and a developer should add it. Google\'s help page does not say which form types are not detected, so test your own form before relying on the trigger.',
    },
    { type: 'h2', text: 'Check that the counts are real' },
    {
      type: 'p',
      text: 'A tracked number that nobody has compared with the inbox is a guess. Run these checks after every setup and after every website change.',
    },
    {
      type: 'ul',
      items: [
        'Use DebugView. Google describes [DebugView](https://support.google.com/analytics/answer/7201382) as showing "the events and user properties that Analytics collects from a user in real time". Tag Assistant or Tag Manager preview turns debug mode on for your own device. Google notes events may not appear in debug mode if you use consent mode and the visitor has not consented to Analytics cookies.',
        'Submit once and count once. One test submission should produce one generate_lead. Two means a duplicate tag, for example the same event from both enhanced measurement and Tag Manager.',
        'Submit a bad form. An empty or invalid form should not create a lead event.',
        'Reconcile with the real inbox or CRM. At the end of the first month, compare GA4\'s count with the number of enquiries your team actually received. Small gaps can come from spam, blocked scripts or visitors who decline cookies; a large gap means the tracking needs fixing. If enquiries go into a CRM, [website CRM integration](/blog/website-crm-integration) covers passing the source along.',
        'Exclude your own traffic when testing live, so your tests do not inflate the numbers.',
      ],
    },
    { type: 'h2', text: 'What to do with the number once it is right' },
    {
      type: 'p',
      text: 'Once the event is trustworthy, you can read leads by source, import the key event into Google Ads as covered in [Google Ads conversion tracking](/blog/google-ads-conversion-tracking), and tag campaign links with the method in the [UTM parameters guide](/blog/utm-parameters-guide) so the source is not lost. The next step is working out what the rate means; see [website conversion rate optimization](/blog/website-conversion-rate-optimization).',
    },
    {
      type: 'p',
      text: 'WakeUP builds premium, complex websites and landing pages, and the tracking of forms and enquiries is part of the build; see the [website development service](/services/website-development). If you already have a site and want to know whether its enquiries are being counted correctly, the [free marketing audit](/audit) includes a check of the path from visit to enquiry.',
    },
  ],
}
