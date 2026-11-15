import type { BlogPost } from '@/lib/blog'

export const post: BlogPost = {
  locale: 'en',
  slug: 'marketing-automation-workflows',
  title: 'Marketing Automation Workflows: 5 Starter Examples With Triggers and Actions',
  metaTitle: 'Marketing Automation Workflows Examples',
  description:
    'Marketing automation workflows examples for small business: welcome, abandoned cart, lead follow-up, event and reactivation, each with its trigger map.',
  publishedAt: '2027-02-23T12:00:00+04:00',
  updatedAt: '2027-02-23T12:00:00+04:00',
  service: 'automation',
  reviewState: 'llm_reviewed',
  body: [
    {
      type: 'p',
      text: 'Five marketing automation workflows cover most of what a small business needs: a welcome sequence for new contacts, an abandoned-cart reminder, a follow-up for new leads, an event sequence and a reactivation workflow for quiet customers. Each one is a trigger (what starts it), conditions (who qualifies), actions (what is sent or done) and an exit rule (when it stops).',
    },
    { type: 'h2', text: 'The four parts of any workflow' },
    {
      type: 'p',
      text: 'ActiveCampaign breaks a workflow into [triggers, actions, conditions and time controls](https://www.activecampaign.com/blog/marketing-automation-workflow). Use the same four parts to write each workflow on paper before you build it in a tool. Add a fifth: an exit rule. A contact who buys, replies or unsubscribes must leave the workflow at once, otherwise people get a reminder for something they already bought.',
    },
    {
      type: 'table',
      head: ['Workflow', 'Trigger', 'Main action', 'Exit when'],
      rows: [
        ['1. Welcome', 'Signs up or makes a first purchase', 'Short email series, then a tag', 'Series ends or they buy'],
        ['2. Abandoned cart', 'Cart created, no order after a set time', 'Reminder with the cart contents', 'Order placed'],
        ['3. Lead follow-up', 'Form, message or call request received', 'Alert to a person plus a first reply', 'A human has replied or the lead is booked'],
        ['4. Event', 'Registers for an event', 'Reminders, then different follow-up for attendees and no-shows', 'Follow-up sent'],
        ['5. Reactivation', 'No purchase or reply for a set period', 'One to three emails with a reason to return', 'Any click or purchase'],
      ],
    },
    { type: 'h2', text: 'Workflow 1: welcome' },
    {
      type: 'ul',
      items: [
        'Trigger: a person joins the list or places a first order.',
        'Condition: they gave consent for marketing email.',
        'Actions: confirm and deliver what was promised straight away, introduce the company, show one proof point, then make one offer. Tag the contact by source.',
        'Exit: they buy, or the last email is sent.',
      ],
    },
    {
      type: 'p',
      text: 'Square suggests sending a welcome email [within 24 hours of a first purchase](https://squareup.com/us/en/the-bottom-line/reaching-customers/5-marketing-automation-examples-for-small-businesses-2). The email-by-email plan is in [welcome email series](/blog/welcome-email-series).',
    },
    { type: 'h2', text: 'Workflow 2: abandoned cart' },
    {
      type: 'ul',
      items: [
        'Trigger: a shopper adds an item and starts checkout but does not complete an order.',
        'Condition: you know their email (they are logged in or typed it) and have consent to email them.',
        'Actions: one reminder a few hours later showing the items; one more the next day that answers the common doubt (delivery, returns). Offer a discount only in the last message, if at all.',
        'Exit: an order is placed.',
      ],
    },
    {
      type: 'p',
      text: 'Reminders fix only part of the problem. If shoppers leave because of extra costs or a long form, fix the checkout first: see [how to reduce cart abandonment](/blog/how-to-reduce-cart-abandonment).',
    },
    { type: 'h2', text: 'Workflow 3: lead follow-up' },
    {
      type: 'ul',
      items: [
        'Trigger: a form, chat message, call request or booking enquiry arrives.',
        'Actions: create the lead in your CRM, notify the person responsible in chat or email, send an immediate confirmation that says when they will hear back, and create a task for a human reply.',
        'Condition: no reply logged after a set time (for example next working day) creates a reminder for the owner.',
        'Exit: a person has replied, or the lead is marked booked or lost.',
      ],
    },
    {
      type: 'p',
      text: 'Automate the routing and reminders, not the relationship. The human steps and a four-week cadence are in [how to follow up with leads](/blog/how-to-follow-up-with-leads), and the tool choice in [how to choose a CRM](/blog/how-to-choose-crm).',
    },
    { type: 'h2', text: 'Workflow 4: event' },
    {
      type: 'ul',
      items: [
        'Trigger: a person registers for a webinar, open day or launch.',
        'Actions: confirmation with calendar link; a reminder the day before and an hour before; after the event, a thank-you with the recording or offer for attendees.',
        'Condition: attended or not. Zoho describes the same split: [different follow-up for those who sign up, attend or miss the event](https://www.zoho.com/academy/marketing/multichannel-marketing/marketing-automation-examples-workflows.html), such as discounts for attendees and recordings for no-shows.',
        'Exit: the follow-up has been sent, or they book a call.',
      ],
    },
    { type: 'h2', text: 'Workflow 5: reactivation' },
    {
      type: 'ul',
      items: [
        'Trigger: no purchase, visit or reply for a period that suits your sales cycle (a coffee shop and a B2B supplier will choose very different gaps).',
        'Actions: one email that acknowledges the gap and says what is new; a second with a useful resource or a modest offer; a final "should we stop emailing you?" message.',
        'Exit: any click or purchase. If there is no reaction at the end, stop sending to that contact.',
      ],
    },
    {
      type: 'p',
      text: 'Square reports from its own merchant data that [14% of lapsed customers return among merchants who send winback emails](https://squareup.com/us/en/the-bottom-line/reaching-customers/5-marketing-automation-examples-for-small-businesses-2). That is vendor data from one platform, so treat it as an example of the possible effect, not a forecast for your list.',
    },
    { type: 'h2', text: 'Rules before you switch anything on' },
    {
      type: 'ul',
      items: [
        'Consent: only email people who agreed, and keep an unsubscribe link in every message.',
        'Deliverability: Google\'s requirements for bulk senders include [one-click unsubscribe and a spam rate below 0.30%](https://support.google.com/a/answer/81126) (they apply to senders of more than 5,000 messages a day to Gmail, but they are a good standard for everyone). See [why emails go to spam](/blog/emails-going-to-spam).',
        'Segments: send the workflow only to the right group. [Email list segmentation](/blog/email-list-segmentation) explains how.',
        'Frequency: a person can be in only one marketing workflow at a time, or your messages will collide.',
        'Test: enrol your own address, walk through every branch, and check the exit rule before you go live.',
      ],
    },
    { type: 'h2', text: 'Which to build first' },
    {
      type: 'p',
      text: 'Build the workflow that protects revenue you already earn. An online shop starts with abandoned cart and welcome; a service company starts with lead follow-up, because a slow reply loses enquiries. Add one workflow a month and review its results before the next. If you want chat, CRM routing and follow-up automations connected, WakeUP\'s [AI automation service](/services/ai-automation) builds them, and the [free audit](/audit) shows where leads are being lost today.',
    },
  ],
}
