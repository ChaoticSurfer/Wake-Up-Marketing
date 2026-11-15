import type { BlogPost } from '@/lib/blog'

export const post: BlogPost = {
  locale: 'en',
  slug: 'how-to-follow-up-with-leads',
  title: 'How to follow up with a lead: a 4-week cadence, plus what to do when they go quiet',
  metaTitle: 'How to Follow Up With a Lead',
  description:
    'How to follow up with a lead: a four-week cadence across phone, WhatsApp and email, how to re-engage a lead that went quiet, and what to automate.',
  publishedAt: '2027-01-29T18:00:00+04:00',
  updatedAt: '2027-01-29T18:00:00+04:00',
  service: 'automation',
  reviewState: 'llm_reviewed',
  body: [
    {
      type: 'p',
      text: 'To follow up with a lead, reply as fast as you can in working hours, then make a planned series of five to seven contacts over about four weeks. Mix phone, WhatsApp and email, give each message a new reason to reply, and stop politely after the last one. Record every contact in one place, and let software handle the reminders so no lead is forgotten.',
    },
    { type: 'h2', text: 'Why a plan beats "I will call them later"' },
    {
      type: 'p',
      text: 'Most lost leads are not refusals. They are enquiries that nobody answered properly. A Harvard Business Review study of how companies handle online enquiries concluded: ["Our research shows that most companies are not responding nearly fast enough."](https://scholarsarchive.byu.edu/facpub/9711/) (Oldroyd, McElheran and Elkington, "The Short Life of Online Sales Leads".) The study looked at the first reply, which is covered by the first step below. What comes after that depends on whether you have a written cadence or rely on memory.',
    },
    {
      type: 'p',
      text: 'Before any follow-up, decide whether the lead deserves one. A short qualification step saves your sales team from chasing poor fits; see [how to qualify leads](/blog/how-to-qualify-leads). Good scoring helps too: [lead scoring model](/blog/lead-scoring-model).',
    },
    { type: 'h2', text: 'A four-week cadence you can copy' },
    {
      type: 'p',
      text: 'The timings below are a starting point based on common sales practice, not a law. Shorten them for urgent purchases such as a booking, and lengthen them for decisions that take months. Adjust after you see your own reply rates.',
    },
    {
      type: 'table',
      head: ['When', 'Channel', 'What to send or say'],
      rows: [
        ['Within the first hour of working time', 'The channel they used (form, WhatsApp, call)', 'Answer their actual question. Ask one qualifying question. Say what happens next.'],
        ['Day 1 to 2', 'Phone call', 'If you have a number and permission to call, ask whether now is a good time and offer two meeting slots. Leave a short voicemail or message with your name and reason.'],
        ['Day 3 to 4', 'Email', 'One useful item that fits their question: a price explanation, a checklist, a short example. No brochure.'],
        ['Day 7', 'WhatsApp or phone', 'A short check: "Did the material answer your question? Shall I hold a time on Thursday?"'],
        ['Day 12 to 14', 'Email', 'A different angle: the most common objection and how it is handled, or a comparison of options.'],
        ['Day 21', 'Phone', 'A last call. Ask what has changed and whether the project is still planned.'],
        ['Day 28', 'Email or WhatsApp', 'A closing note: say you will stop writing, leave the door open, and name one thing they can reply with.'],
      ],
    },
    {
      type: 'p',
      text: 'Each message should add something new. "Just checking in" repeated three times is the fastest way to be ignored. Keep every message short enough to read on a phone, with one question or one next step.',
    },
    { type: 'h2', text: 'Pick the channel by what the lead gave you' },
    {
      type: 'ul',
      items: [
        'Phone suits high-value deals, quotes and anything that needs a conversation. It takes more effort than a message, so use it where the deal justifies it.',
        'WhatsApp suits people who wrote to you there or gave their number for it. Its rules are strict: Meta\'s [WhatsApp Business Messaging Policy](https://whatsappbusiness.com/policy/) requires "opt-in permission from the recipient confirming that they wish to receive subsequent messages", and says "You may only initiate conversations using an approved Message Template" outside the 24-hour customer service window, which "opens and resets with each user message".',
        'Email suits documents, longer explanations and B2B decisions with several people involved. Keep a clear unsubscribe.',
      ],
    },
    {
      type: 'p',
      text: 'Consent matters in every channel. A marketing call, email or message to someone who did not agree to it is direct marketing under Georgia\'s personal data law. The details, with a plain-language reading of the law and a consent checklist, are in [lead generation vs lead nurturing](/blog/lead-generation-vs-lead-nurturing). A prompt answer to an enquiry is different from a promotional message; if in doubt, ask a lawyer.',
    },
    { type: 'h2', text: 'How to re-engage a lead who went quiet' },
    {
      type: 'p',
      text: 'Silence usually has a dull cause: the person was busy, the budget is not approved, someone else is deciding, or your message got buried. Do not take it personally and do not scold them for not replying. Try these in order:',
    },
    {
      type: 'ol',
      items: [
        'Change the channel. If three emails got nothing, try a short WhatsApp message (if permitted) or a call.',
        'Change the angle. Send something that helps them decide: an answer to a question they asked, a comparison, a short example from a similar company that you are free to share.',
        'Make replying easy. End with a question that needs one word: "Is this still planned for this quarter, yes or no?"',
        'Ask about timing. "Would it be better to talk in March?" turns a cold lead into a dated follow-up.',
        'Send the closing note. Saying you will stop writing can prompt a reply that polite nudges did not.',
        'Then pause. Move the lead to a long-term list, but only if they agreed to hear from you. A short monthly note or a retargeting ad keeps you visible without chasing.',
      ],
    },
    {
      type: 'p',
      text: 'Lead lists that have been inactive for months need care. Check that the details are still correct and remove anyone who has opted out before sending anything.',
    },
    { type: 'h2', text: 'What to automate and what to keep personal' },
    {
      type: 'table',
      head: ['Automate', 'Keep with a person'],
      rows: [
        ['Instant acknowledgment of a form or message', 'The first real answer to a specific question'],
        ['Creating a task in the CRM with a due date for every touch', 'Phone calls and voice notes'],
        ['Reminders when a lead has had no contact for a set number of days', 'Handling objections and pricing talks'],
        ['Stopping the sequence when the lead replies, books or opts out', 'Deciding whether to keep chasing a high-value lead'],
        ['Sending approved WhatsApp templates and email sequences to people who agreed', 'Any message that quotes a price or promises a date'],
      ],
    },
    {
      type: 'p',
      text: 'The rule that matters most is that the sequence stops the moment the person answers. A reply that is followed by an automated message looks careless. If you do not yet have a CRM that can do this, [how to choose a CRM](/blog/how-to-choose-crm) lists what to look for.',
    },
    {
      type: 'p',
      text: 'WakeUP\'s [AI automation](/services/ai-automation) service covers chatbots for Messenger, Instagram, WhatsApp and your website, with lead qualification, handover to a person, and automatic lead routing to your CRM, email or team chat, along with follow-up and reporting automations. If you first want to see where your leads are being lost, the [free marketing audit](/audit) is a way to start.',
    },
    { type: 'h2', text: 'Measure the follow-up' },
    {
      type: 'ul',
      items: [
        'Time to first reply, measured in working hours.',
        'Share of leads that get every planned touch, not only the first.',
        'Replies by channel and by touch number, so you can drop the steps that never work.',
        'Leads that become meetings, and meetings that become customers. See [marketing and sales alignment](/blog/marketing-and-sales-alignment) for agreeing these definitions with your sales team.',
      ],
    },
  ],
}
