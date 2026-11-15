import type { BlogPost } from '@/lib/blog'

export const post: BlogPost = {
  locale: 'en',
  slug: 'crm-setup-checklist',
  title: 'CRM implementation checklist: from goals to launch day',
  metaTitle: 'CRM Implementation Checklist',
  description:
    'A CRM implementation checklist for teams that have chosen a tool: goals, process map, data clean-up, stages, training and a launch date, in order.',
  publishedAt: '2027-02-25T09:00:00+04:00',
  updatedAt: '2027-02-25T09:00:00+04:00',
  service: 'automation',
  reviewState: 'llm_reviewed',
  body: [
    {
      type: 'p',
      text: 'A CRM implementation checklist has six parts, in this order: set measurable goals, map how a lead becomes a customer, clean the data you will import, build stages and fields, train the people who will use it, and fix a launch date with a review 30 days later. Start with goals and process, not with the software settings.',
    },
    {
      type: 'p',
      text: 'This list is for setting up a CRM you have already picked. If you are still comparing tools, read [how to choose a CRM](/blog/how-to-choose-crm) first.',
    },
    { type: 'h2', text: '1. Write three to five goals you can measure' },
    {
      type: 'p',
      text: 'A CRM does nothing by itself; it records what your team does. Decide what you want the record to improve. Bitrix24\'s implementation guide, a vendor document worth treating as one viewpoint, suggests [three to five measurable objectives](https://www.bitrix24.com/tools/crm/getting-started/crm-implementation-guide.php) that everyone can state, with examples such as a first response to inbound leads in under 10 minutes. Use goals like these:',
    },
    {
      type: 'ul',
      items: [
        'Every enquiry gets a first reply within a set time.',
        'Every lead has an owner and a next step with a date.',
        'You can see how many leads each channel produced and how many became customers.',
        'The manager can read the pipeline without asking each person.',
      ],
    },
    { type: 'h2', text: '2. Map the process before you configure it' },
    {
      type: 'p',
      text: 'Draw the path of one customer on paper: where the enquiry arrives (website form, phone, Instagram, WhatsApp, referral), who answers, what is checked, when a quote is sent, and what ends the deal. Mark the places where leads get lost today. The CRM should copy the process you want, not the one you have by accident.',
    },
    {
      type: 'p',
      text: 'Involve the people who will use it. Ask each role what slows them down now. A tool that adds typing without helping the person who types is likely to be ignored. The [sales and marketing alignment post](/blog/marketing-and-sales-alignment) covers agreeing on what counts as a ready lead.',
    },
    { type: 'h2', text: '3. Clean the data before you import it' },
    {
      type: 'p',
      text: '[Close\'s CRM checklist](https://close.com/guides-content/crm-implementation-checklist) puts data preparation first: clean up lead and customer data, and merge or remove duplicates. Do this in a spreadsheet before the import, not after.',
    },
    {
      type: 'ul',
      items: [
        'Gather every source: the old CRM, spreadsheets, email contacts, messenger chats and forms.',
        'Standardise names, phone number format (one international format), company names and dates.',
        'Remove duplicates by email and phone first, then by company name.',
        'Decide what not to import: contacts with no activity for years, and anyone who asked to be removed.',
        'Save the file as UTF-8 if names contain Georgian letters. HubSpot\'s import guide states the file should be [UTF-8 encoded if it includes foreign language characters](https://knowledge.hubspot.com/import-and-export/set-up-your-import-file); check the import rules of your own CRM.',
        'Give each record a unique identifier. HubSpot notes that, to avoid duplicates, import files need a unique identifier such as the record ID or, for contacts, the email.',
      ],
    },
    {
      type: 'p',
      text: 'Run a small test import first. Bitrix24 suggests a test of 100 to 500 records; if names break or columns land in the wrong field, you find out cheaply.',
    },
    { type: 'h2', text: '4. Build the stages, fields and permissions' },
    {
      type: 'p',
      text: 'Keep the first version small. Too many stages and required fields make people click through without thinking. A pipeline around real milestones, with short stage names, an exit rule for each stage and a "lost reason" is enough to start.',
    },
    {
      type: 'table',
      head: ['Stage', 'Exit rule: move on only when', 'Typical required field'],
      rows: [
        ['New enquiry', 'Someone has replied to the person', 'Source (channel or campaign)'],
        ['Qualified', 'Need, budget range and decision maker are known', 'Service or product of interest'],
        ['Proposal sent', 'A quote or offer has been delivered', 'Value and send date'],
        ['Won', 'Payment or signed agreement received', 'Final value and date'],
        ['Lost', 'The customer declined or went silent after set follow-ups', 'Lost reason'],
      ],
    },
    {
      type: 'p',
      text: 'The [lead qualification guide](/blog/how-to-qualify-leads) can help define the second stage. Then set who sees what: a salesperson needs their own leads, a manager needs all of them, and finance may only need won deals. Keep the field "Source" mandatory from day one, since you cannot recover it later.',
    },
    { type: 'h2', text: '5. Connect the sources of leads' },
    {
      type: 'p',
      text: 'A CRM that depends on manual entry tends to fall out of date. Before launch, connect at least the website forms, the main inbox or messenger channel, and calendar or phone if you use them. The [website and CRM integration guide](/blog/website-crm-integration) explains the options and what to test. Send a test enquiry from each channel and confirm it arrives in the right stage with the right source.',
    },
    {
      type: 'p',
      text: 'Add the routines that remove manual work: assign new leads to an owner, create a follow-up task, alert the manager when a lead is untouched for a set time. The [follow-up guide](/blog/how-to-follow-up-with-leads) has a routine you can copy.',
    },
    { type: 'h2', text: '6. Train, then set a launch date' },
    {
      type: 'p',
      text: 'Train by role, not by feature. Give each person a short session on the five actions they will do every day, on a test copy of the pipeline, and a one-page cheat sheet. Name one person as the CRM owner who answers questions and changes fields; without an owner the setup drifts.',
    },
    {
      type: 'ol',
      items: [
        'Pick a launch date and tell everyone that from that day the CRM is the only place deals live.',
        'Import the cleaned data the day before, and freeze the old spreadsheet (read only).',
        'In the first week, review each person\'s records with them for ten minutes.',
        'After 30 days, check the measures from step 1, and remove fields nobody uses.',
      ],
    },
    {
      type: 'p',
      text: 'Bitrix24\'s guide suggests tracking adoption with simple signals such as active users by role, how often activity is logged, the time from lead creation to first contact, and the share of deals with a next step scheduled. Those are easy to read from any CRM.',
    },
    { type: 'h2', text: 'When to get help' },
    {
      type: 'p',
      text: 'A single team with one pipeline can set up a CRM in-house by following the list. Help pays off when leads come from several channels, when a chatbot or website must write into the CRM, or when the team has tried and abandoned a tool before. WakeUP builds CRM and lead automations and connects them to forms and messengers; see the [AI automation and chatbots](/services/ai-automation) service. To see where leads get lost before you invest, request the [free marketing audit](/audit).',
    },
  ],
}
