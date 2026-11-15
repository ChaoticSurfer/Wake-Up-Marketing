import type { BlogPost } from '@/lib/blog'

export const post: BlogPost = {
  locale: 'en',
  slug: 'ai-email-marketing-automation',
  title: 'AI email marketing automation: how to set it up without hurting your sender reputation',
  metaTitle: 'AI Email Marketing Automation Setup',
  description:
    'AI email marketing automation in four jobs: list cleaning, welcome and cart flows, subject-line tests and send time, with a human-approval rule.',
  publishedAt: '2027-02-13T09:00:00+04:00',
  updatedAt: '2027-02-13T09:00:00+04:00',
  service: 'automation',
  reviewState: 'llm_reviewed',
  body: [
    {
      type: 'p',
      text: 'AI email marketing automation works best on four narrow jobs: cleaning the list, running welcome and abandoned-cart flows, testing subject lines, and choosing send times. Let the tool draft, segment and schedule, but keep a person approving what goes to customers. A badly aimed automated send can raise spam complaints, and Gmail\'s sender guidelines set firm limits on them.',
    },
    {
      type: 'p',
      text: 'This guide covers email only. For the wider picture of automating marketing tasks, see [AI marketing automation for a small business](/blog/ai-marketing-automation-small-business).',
    },
    { type: 'h2', text: 'Set the guardrails before the tools' },
    {
      type: 'p',
      text: 'Automation multiplies whatever you send, good or bad. So agree the limits first. Google\'s [email sender guidelines](https://support.google.com/a/answer/81126) apply to anyone sending more than 5,000 messages a day to Gmail accounts: set up SPF, DKIM and DMARC, support one-click unsubscribe in marketing messages, and keep the spam rate low. The guidelines say to stay below 0.10% and avoid ever reaching 0.30%, measured in Postmaster Tools.',
    },
    {
      type: 'p',
      text: 'Many companies send fewer messages than that threshold, but the habits are the same ones that protect smaller senders: authenticate your domain, make leaving easy, and do not send to people who did not ask. Google\'s [sender FAQ](https://support.google.com/a/answer/14229414) adds that unwanted messages without one-click unsubscribe "are more likely to be reported as spam", and recommends honouring unsubscribe requests within 48 hours.',
    },
    { type: 'h2', text: 'Job 1: clean the list with rules, not guesses' },
    {
      type: 'p',
      text: 'An AI tool can score who is engaged, but the action it takes should be a rule you wrote. Mailchimp\'s help centre says that [the most successful re-engagement emails will typically re-engage about 10 percent of inactive subscribers](https://mailchimp.com/help/re-engage-inactive-subscribers/), so expect most of that segment to stay silent. It also offers a setting to unsubscribe contacts who do not open the re-engagement series. A sound routine is to segment the inactive contacts, send them a re-engagement message, then stop sending to those who stay silent.',
    },
    {
      type: 'ul',
      items: [
        'Define "inactive" in writing, for example no click in the last five emails.',
        'Send one or two re-engagement messages, then move non-responders out of the regular sends.',
        'Archive rather than delete where your platform allows it, so the history is recoverable.',
        'Never add a bought or scraped list. If you are building an audience from scratch, see [how to build an email list](/blog/build-email-list).',
      ],
    },
    { type: 'h2', text: 'Job 2: welcome and abandoned-cart flows' },
    {
      type: 'p',
      text: 'These are triggered emails: a person does something and a message follows. They are the safest place to start because they go to people who just showed interest. AI helps with the first draft and with variants, while the trigger and timing stay yours. Our [welcome email series](/blog/welcome-email-series) guide covers what to write in each message.',
    },
    {
      type: 'p',
      text: 'For shops, Mailchimp\'s documentation shows how an abandoned-cart flow is built: you pick an "Abandons cart" trigger, set a wait time in hours, days or weeks, and the email automatically includes a block showing the contact\'s cart [with a button linking back to it](https://mailchimp.com/help/create-abandoned-cart-customer-journey/). It also notes that only subscribed contacts receive the email steps, which is the consent rule working as intended. Fixing the reasons people leave the cart is a separate job, covered in [how to reduce cart abandonment](/blog/how-to-reduce-cart-abandonment).',
    },
    { type: 'h2', text: 'Job 3: subject-line tests' },
    {
      type: 'p',
      text: 'Ask an AI tool for ten subject lines, then choose two or three to test. Mailchimp\'s guide to [A/B testing campaigns](https://mailchimp.com/help/about-ab-testing-campaigns/) lets you test one variable at a time: "subject line, From name, content, or send time", and pick the winner by open rate, click rate or revenue. Change only one thing per test, or you will not know what made the difference.',
    },
    {
      type: 'p',
      text: 'Be careful with open rate as the judge. Mail privacy features inflate it, which we explain in [what a good email open rate is](/blog/good-email-open-rate). Where you can, let clicks or enquiries decide the winner.',
    },
    { type: 'h2', text: 'Job 4: send-time optimisation' },
    {
      type: 'p',
      text: 'Send-time tools pick a moment for each recipient. Mailchimp\'s [Send Time Optimization](https://mailchimp.com/help/use-send-time-optimization/) finds a time within a day of your chosen send date when each recipient is most likely to open, and needs enough data from your earlier campaigns. The help page says it does not work with automated emails, so it suits newsletters and one-off campaigns, not welcome or cart flows. Other platforms differ, so check what yours supports.',
    },
    { type: 'h2', text: 'The human-approval rule' },
    {
      type: 'p',
      text: 'The rule that protects your sender reputation is simple: AI proposes, a person approves, and nothing new goes to the full list untested. In practice:',
    },
    {
      type: 'ol',
      items: [
        'A person reads every AI-drafted email in full before it is saved to a flow, checking names, prices, dates, claims and tone.',
        'New flows and new segments go to a small internal or test group first.',
        'The first weeks of a flow are reviewed against complaints, unsubscribes and bounces, not only clicks.',
        'Someone owns a stop button: if complaints rise, the flow is paused the same day.',
        'No AI tool decides who is added to the list or who is emailed without a prior opt-in.',
      ],
    },
    {
      type: 'p',
      text: 'AI drafting tools can repeat the same stock phrases across your emails and invent details such as offers or deadlines, which is why the read-through matters. A general-purpose assistant can help with drafts; see [ChatGPT for marketing](/blog/chatgpt-for-marketing) for how to prompt one safely.',
    },
    { type: 'h2', text: 'Where to start' },
    {
      type: 'p',
      text: 'Pick one flow, usually the welcome email, connect it to your sign-up form and run it for a month before adding another. If you want help connecting forms, your email platform and your CRM so leads flow into the right sequences, that is the kind of work WakeUP\'s [AI automation service](/services/ai-automation) covers under follow-up automations. The [free audit](/audit) can also show where your marketing currently loses people between a click and a reply.',
    },
  ],
}
