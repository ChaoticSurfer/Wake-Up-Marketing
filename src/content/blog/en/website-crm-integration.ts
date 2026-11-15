import type { BlogPost } from '@/lib/blog'

export const post: BlogPost = {
  locale: 'en',
  slug: 'website-crm-integration',
  title: 'Website CRM Integration: How Forms and Site Events Reach Your CRM',
  metaTitle: 'Website CRM Integration Guide',
  description:
    'Website CRM integration explained: the four ways to connect a CRM to your site, which fields to send, and what to test so no lead is lost.',
  publishedAt: '2027-01-31T15:00:00+04:00',
  updatedAt: '2027-01-31T15:00:00+04:00',
  service: 'automation',
  reviewState: 'llm_reviewed',
  body: [
    {
      type: 'p',
      text: 'A website CRM integration sends every enquiry from your site into your CRM automatically, with the details your sales team needs to act on it. There are four ways to do it: the CRM\'s own form or plugin, a connector tool, a webhook, or a direct API call from the site. Pick by who maintains it, then plan the fields and test failures, not only the happy path.',
    },
    { type: 'h2', text: 'Four ways a website can talk to a CRM' },
    {
      type: 'p',
      text: 'Guides on this topic, including [Zapier\'s overview of CRM integration](https://zapier.com/blog/how-to-integrate-crm/), group the options into native integrations, custom APIs, connector tools and third-party services. In practice, for a company website, it comes down to this:',
    },
    {
      type: 'table',
      head: ['Method', 'How it works', 'Good when', 'Watch out for'],
      rows: [
        ['CRM form or plugin', 'You embed the CRM vendor\'s form, or a plugin for your site platform, and submissions land in the CRM', 'You have one simple form and a standard site', 'Form styling and tracking are limited to what the vendor allows'],
        ['Connector tool', 'A tool such as Zapier receives the form data and passes it to the CRM', 'You want it running quickly and a non-developer will maintain it', 'Plan usage limits, one more account to own and monitor'],
        ['Webhook', 'Your form sends a message to a URL when someone submits; the receiver creates the CRM record', 'You need control over the form design and want to route data to more than one place', 'Duplicates, retries and security need handling (see below)'],
        ['Direct API', 'Your site\'s server calls the CRM\'s API and creates or updates the contact', 'Your site is custom-built and the data is complex (several forms, accounts, products)', 'Needs a developer; the CRM\'s keys must stay on the server, never in the page'],
      ],
    },
    {
      type: 'p',
      text: 'None of these is the best in general. A site with one contact form and a small sales team is well served by a connector or the CRM\'s own form. A site with a quote calculator, several languages and a booking step usually needs a webhook or direct API so the data arrives structured. If you are still choosing the CRM itself, start with [how to choose a CRM](/blog/how-to-choose-crm).',
    },
    { type: 'h2', text: 'Decide what data travels with each lead' },
    {
      type: 'p',
      text: 'The integration is only as useful as the fields it fills. Before anything is built, write down what the person in sales needs on the first call, and map each item to a field on the form and a field in the CRM.',
    },
    {
      type: 'ul',
      items: [
        'Contact basics: name, phone, email and the message, kept as separate fields rather than one text blob.',
        'Which form and which page: "Contact page", "Pricing page - quote request" and "Newsletter" are different leads and should not look the same in the CRM.',
        'Language: if the site is in Georgian and English, record which version the visitor used, so the reply comes in the same language.',
        'Source: UTM parameters and the referrer, stored in hidden form fields. How to tag links is covered in the [UTM parameters guide](/blog/utm-parameters-guide).',
        'Consent: a record of what the person agreed to and when, if you will email them beyond answering this enquiry.',
        'An owner: the CRM should assign each lead to one person or queue at creation, so nothing waits unclaimed.',
      ],
    },
    {
      type: 'p',
      text: 'Keep the form itself short; the fields above are mostly invisible to the visitor. For what to ask on the form and how to confirm the submission, see [contact form best practices](/blog/contact-form-best-practices). Once leads arrive with a source and a form name, you can start ranking them with a [lead scoring model](/blog/lead-scoring-model).',
    },
    { type: 'h2', text: 'What to expect when a webhook carries your leads' },
    {
      type: 'p',
      text: 'Webhooks are the most flexible route, and they have behaviours that surprise teams the first time. Stripe\'s [webhook documentation](https://docs.stripe.com/webhooks) is written for payments, but its engineering guidance applies to any system that pushes events to a URL, and a form-to-CRM webhook is one. Check the equivalent behaviour in whichever sender you use.',
    },
    {
      type: 'ul',
      items: [
        'Duplicates happen. Stripe states: "Webhook endpoints might occasionally receive the same event more than once." It advises logging the IDs of events you have processed. For leads, the same idea means matching on email or phone before creating a second contact.',
        'Answer fast, work later. Stripe says an endpoint must return a success status quickly, before any complex logic that could time out. Receive the lead, confirm receipt, then do the CRM work.',
        'Retries exist, so failures can arrive late. Stripe retries a failed delivery for up to three days in live mode. Other senders differ, so check whether yours retries at all. If it does not, a lead can disappear silently while your endpoint is down.',
        'Order is not guaranteed. Stripe says it does not guarantee events arrive in the order they were generated. If a visitor submits twice, do not assume the newest message is the last one processed.',
        'Verify the sender. Stripe signs each event so you can confirm it was not forged. A public URL that creates CRM records without any check invites spam and fake leads.',
      ],
    },
    {
      type: 'p',
      text: 'If you use a connector tool, read its own limits too. Zapier\'s documentation for [catch hook webhooks](https://help.zapier.com/hc/en-us/articles/8496288690317-Trigger-Zaps-from-webhooks) gives a unique URL that accepts POST requests, sets a 10MB payload limit for triggers, and notes that if a Zap is switched off or deleted the URL can keep returning a success response for up to several hours before returning an error. In that window, a form would believe it had delivered a lead that nobody receives.',
    },
    { type: 'h2', text: 'What to test before launch' },
    {
      type: 'p',
      text: 'Most integration problems appear at the edges. Run these tests on the live site, with obviously fake contact details that belong to your own team, and check the result in the CRM each time.',
    },
    {
      type: 'ol',
      items: [
        'Submit every form once and confirm the record, the field mapping, the owner and the source in the CRM.',
        'Submit the same details twice and see whether you get one contact or two.',
        'Submit in each site language, with Georgian characters in the name and message, and check nothing turns into question marks.',
        'Submit with a blank optional field, a very long message and an email with a plus sign, to see how the CRM handles them.',
        'Break it on purpose in a test setup: disable the connector or point the webhook at a wrong URL, submit, and see what the visitor sees and whether anyone is alerted.',
        'Open the site through a tagged link and confirm the UTM values reach the CRM record.',
        'Check the notification: the assigned person should receive an alert in the channel they actually watch.',
        'Confirm a visitor who has not agreed to marketing is not added to a newsletter list.',
      ],
    },
    {
      type: 'p',
      text: 'The failure test is the one teams skip, and it matters most. Decide how a broken integration announces itself: an error email to a named person, a daily check that counts form submissions on the site against new CRM records, or both. A lead that fails silently costs more than one that fails loudly.',
    },
    { type: 'h2', text: 'Who owns it after launch' },
    {
      type: 'p',
      text: 'An integration touches three groups: whoever maintains the website, whoever administers the CRM, and the sales people who work the leads. Name one owner for the connection itself. Changes to either side - a new form field, a renamed CRM property, a site redesign, a new API key - are the usual causes of breakage, so put "check the CRM connection" on the website release checklist. The [website maintenance checklist](/blog/website-maintenance-checklist) is a good place to add it.',
    },
    {
      type: 'p',
      text: 'The other half is what happens once the lead is in the CRM. Fast first contact and a clear handover from marketing to sales decide whether the integration pays off; see [how to follow up with leads](/blog/how-to-follow-up-with-leads).',
    },
    {
      type: 'p',
      text: 'WakeUP builds AI automation that routes each lead to your CRM, email or team chat and handles follow-up, as described on the [AI automation page](/services/ai-automation). If you want an outside view of how your site currently passes leads to your team, request a [free marketing audit](/audit).',
    },
  ],
}
