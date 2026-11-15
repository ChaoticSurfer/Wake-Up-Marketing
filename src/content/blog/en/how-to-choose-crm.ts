import type { BlogPost } from '@/lib/blog'

export const post: BlogPost = {
  locale: 'en',
  slug: 'how-to-choose-crm',
  title: 'How to choose a CRM for a small business: problem first, price last',
  metaTitle: 'How to Choose a CRM for Small Business',
  description:
    'How to choose a CRM for a small business: define the problem, list must-have features, check WhatsApp and Georgian-language fit, and add up the true cost.',
  publishedAt: '2027-01-26T09:00:00+04:00',
  updatedAt: '2027-01-26T09:00:00+04:00',
  service: 'automation',
  reviewState: 'llm_reviewed',
  body: [
    {
      type: 'p',
      text: 'To choose a CRM for a small business, start with the problem it must solve, such as leads lost in chats or no view of the pipeline. Then list the few features you must have, check that it connects to the channels your customers use (WhatsApp, forms, email, phone), confirm the language and add up the full cost, not the price per seat. Finish with a two-week trial using real leads.',
    },
    { type: 'h2', text: 'Step 1: write down the problem, not the features' },
    {
      type: 'p',
      text: 'CRMs differ less than their feature lists suggest. What differs is how well each fits one specific job. Before looking at any product, answer in a few sentences:',
    },
    {
      type: 'ul',
      items: [
        'Where do enquiries arrive today (website form, Facebook and Instagram messages, WhatsApp, calls, email)?',
        'Where do they get lost or delayed? Which step is slow or invisible?',
        'Who needs to see what: sales, the owner, marketing?',
        'What would you want to know on Monday morning that you cannot find out now?',
      ],
    },
    {
      type: 'p',
      text: 'If the honest answer is "we do not follow up consistently", software will not fix it alone; a process will. Agree how a lead is qualified first (see [how to qualify leads](/blog/how-to-qualify-leads)) and who owns each stage; [marketing and sales alignment](/blog/marketing-and-sales-alignment) covers that agreement.',
    },
    { type: 'h2', text: 'Step 2: separate must-haves from nice-to-haves' },
    {
      type: 'p',
      text: 'The US Chamber of Commerce names these among the core features for a small business: [contact management, lead and pipeline tracking, tasks with shared calendars and recurring task features, reporting, and mobile apps for field teams](https://www.uschamber.com/co/grow/customers/choosing-the-best-crm-software). Treat those as the baseline and spend your effort on what is specific to you.',
    },
    {
      type: 'table',
      head: ['Must have (decide before demos)', 'Nice to have (ignore until the basics work)'],
      rows: [
        ['One record per customer with the full history of messages and calls', 'Advanced forecasting and dashboards'],
        ['A pipeline with stages you can rename', 'Built-in AI writing assistants'],
        ['Tasks and reminders that tell a person to follow up', 'Complex automation chains'],
        ['Import and export of your data in a standard file', 'Marketing email suite inside the CRM'],
        ['Mobile app your team will actually open', 'Lead scoring, once volume justifies it'],
        ['Permissions: who sees which records', 'Custom reports for every team'],
      ],
    },
    { type: 'h2', text: 'Step 3: check the channels your customers use' },
    {
      type: 'p',
      text: 'A CRM is only as good as the data entering it. If most of your leads come by WhatsApp, Instagram or Messenger, a CRM that only takes manual entry or website forms will be empty. For each channel, ask the vendor to show, not describe, how a new message becomes a contact and how the reply is logged.',
    },
    {
      type: 'ul',
      items: [
        'Website and landing page forms: do they create contacts automatically, with the source recorded?',
        'WhatsApp: is there a native connection, or does it need a third-party tool, and who pays for it?',
        'Facebook and Instagram messages and lead ads.',
        'Phone calls: logged and linked to the right contact?',
        'Email: both directions, without copying by hand.',
        'Your accounting or booking system, if you need invoices or appointments tied to customers.',
      ],
    },
    {
      type: 'p',
      text: 'For WhatsApp there is a cost on the messaging side too. Meta\'s documentation says it [charges on a per-message basis](https://developers.facebook.com/docs/whatsapp/pricing), with rates that vary by message category and by the recipient\'s country calling code, and that it does not charge for messages from users to businesses. These fees come on top of the CRM subscription, so ask which messages your use case would trigger. A chatbot that answers first and hands over to a person is covered in [the benefits of an AI chatbot](/blog/ai-chatbot-benefits).',
    },
    { type: 'h2', text: 'Step 4: check Georgian-language support' },
    {
      type: 'p',
      text: 'Customers will write in Georgian, and staff may prefer a Georgian interface. These are separate questions. Whether a CRM stores and displays Georgian text in notes and messages is something to test in a trial by pasting real conversations. A translated interface is rarer. As of November 2026, Zoho lists Georgian only among its [partially supported languages](https://help.zoho.com/portal/en/kb/crm/customize-crm-account/translations/articles/languages-supported-in-zoho-crm), meaning only the translated interface elements appear in Georgian and setup components and default buttons stay in the system language. HubSpot\'s [language page](https://knowledge.hubspot.com/help-and-resources/hubspot-language-offerings) lists 17 languages for its software, and Georgian is not among them.',
    },
    {
      type: 'p',
      text: 'Test in the trial: create a contact with a Georgian name, search for it, send an email template with Georgian text, and export the data to a spreadsheet to see that characters survive. If your team works in English, a missing Georgian interface may not matter; if it does, it narrows the shortlist fast.',
    },
    { type: 'h2', text: 'Step 5: add up the true cost' },
    {
      type: 'p',
      text: 'The price per user per month is the smallest part of a CRM that fails to fit. The US Chamber lists the extras to ask about: [AI features sold as add-ons, usage limits on storage and automation, implementation fees, data migration, training, and integrations that need Zapier or API work](https://www.uschamber.com/co/grow/customers/choosing-the-best-crm-software).',
    },
    {
      type: 'p',
      text: 'Entry prices also shift. As listed on [HubSpot\'s CRM pricing page](https://www.hubspot.com/pricing/crm) in November 2026, the free plan covers up to 2 users, and the Starter plan starts at $7 per seat per month with annual payment or $10 month-to-month, against a standard $20 per seat, with the discount for new customers only. Zoho\'s pricing page lists a [free plan for up to 3 users](https://www.zoho.com/crm/zohocrm-pricing.html). Prices change and these are US dollar list prices, not Georgian quotes, so use them as a pointer and ask for a written quote for your team size.',
    },
    {
      type: 'table',
      head: ['Cost line', 'Ask the vendor or yourself'],
      rows: [
        ['Subscription', 'Price per seat after any first-year discount; monthly vs annual terms; minimum seats'],
        ['Plan limits', 'Which features are on the plan you need; contact, storage and automation caps'],
        ['Add-ons', 'AI, extra pipelines, WhatsApp or telephony connectors'],
        ['Messaging fees', 'Per-message charges for WhatsApp and SMS'],
        ['Set-up and migration', 'Who imports your spreadsheets and sets the pipeline, and what it costs'],
        ['Training and time', 'Hours your team spends learning and re-entering data'],
        ['Exit', 'Can you export everything in a usable file if you leave?'],
      ],
    },
    { type: 'h2', text: 'Step 6: shortlist two or three and run a pilot' },
    {
      type: 'ol',
      items: [
        'Pick two or three products that pass steps 3 and 4 for your channels and language.',
        'Load 50 to 100 real leads, anonymised if you need to, and build your actual pipeline stages.',
        'Give two salespeople two weeks to use it for real work, and have the owner read the reports.',
        'Count what was missed: leads that did not arrive, tasks nobody saw, fields nobody filled in.',
        'Choose the one your team opens without being asked. Adoption beats features.',
      ],
    },
    {
      type: 'p',
      text: 'Once leads flow in, score them only when volume justifies it (see the [lead scoring model](/blog/lead-scoring-model)) and keep the source on every contact; [UTM parameters](/blog/utm-parameters-guide) and [marketing attribution models](/blog/marketing-attribution-models) explain how to tie sales back to campaigns.',
    },
    { type: 'h2', text: 'When to get help connecting it' },
    {
      type: 'p',
      text: 'The hard part is rarely buying the CRM; it is making every channel feed it and every lead reach the right person. WakeUP\'s [AI automation and chatbots](/services/ai-automation) service includes automatic lead routing to your CRM, email or team chat. If you are unsure whether the problem is the tool or the sales process, send your site and a few details for the [free marketing audit](/audit), which reviews your ads, website and sales process.',
    },
  ],
}
