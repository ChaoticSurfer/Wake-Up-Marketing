import type { BlogPost } from '@/lib/blog'

export const post: BlogPost = {
  locale: 'en',
  slug: 'ai-marketing-automation-small-business',
  title: 'Marketing automation with AI for small business: what to automate first',
  metaTitle: 'Marketing Automation With AI: Where to Start',
  description:
    'Marketing automation with AI for small business: automate six repeat tasks with plain rules first, add AI where language is involved, then review by hand.',
  publishedAt: '2027-02-05T15:00:00+04:00',
  updatedAt: '2027-02-05T15:00:00+04:00',
  service: 'automation',
  reviewState: 'llm_reviewed',
  body: [
    {
      type: 'p',
      text: 'Marketing automation with AI for a small business works best in a set order. Automate tasks that repeat, follow clear rules and carry little risk first: welcome emails, enquiry acknowledgement and routing, follow-up reminders, tagging and reporting. Add AI only where the input is messy language or needs a prediction. Keep a person on anything sensitive, new or about price.',
    },
    { type: 'h2', text: 'Rules first, AI second' },
    {
      type: 'p',
      text: 'Most useful automation is not AI at all. Mailchimp\'s help centre breaks an [automation flow](https://mailchimp.com/help/about-customer-journeys/) into three parts: a trigger ("an event or action that adds a contact to a flow"), rules that control routing (such as conditional splits, percentage splits and time delays), and actions such as sending an email or SMS or adding a tag. Whatever tool you use, the structure is similar: if this happens, check these conditions, then do that.',
    },
    {
      type: 'p',
      text: 'Ask one question about each task: can you write the decision as a rule in a sentence? If yes, a rule is cheaper, easier to check and predictable. If the decision depends on reading what a person wrote, or on weighing many signals, AI may help.',
    },
    {
      type: 'table',
      head: ['If the task is...', 'Use', 'Example'],
      rows: [
        ['A fixed trigger and a fixed action', 'A plain rule', 'Form submitted: send acknowledgement and create a CRM task'],
        ['Sorting by a field you already hold', 'A plain rule', 'City or service chosen: route to the right salesperson'],
        ['Reading free text and deciding what it is', 'AI classification', 'Message says "do you ship to Batumi?": tag as delivery question'],
        ['Writing a first draft in your voice', 'AI draft, reviewed by a person', 'Reply to a common question, subject line options'],
        ['Weighing many signals about a lead', 'Scoring, rules or AI', 'See [lead scoring](/blog/lead-scoring-model)'],
        ['Anything that quotes a price or promises a date', 'A person', 'Quotes, discounts, deadlines'],
      ],
    },
    { type: 'h2', text: 'Six tasks to automate, in order' },
    {
      type: 'p',
      text: 'The order below goes from the safest and fastest win to the ones that need more data. Each step should work before you start the next.',
    },
    {
      type: 'ol',
      items: [
        'Welcome series for new subscribers or customers. A fixed trigger, a handful of emails, and a clear stop. The [welcome email series guide](/blog/welcome-email-series) has the five-email plan.',
        'Instant acknowledgement and routing of every enquiry. When a form, message or call-back request arrives, confirm receipt, tell the person when they will hear back, create a task in the CRM and notify the owner. If you do not have a CRM yet, see [how to choose a CRM](/blog/how-to-choose-crm).',
        'Follow-up reminders. A task and a reminder when a lead has had no contact for a set number of days, and a stop as soon as they reply, book or opt out. The cadence is in [how to follow up with leads](/blog/how-to-follow-up-with-leads).',
        'Tagging and segmentation. Tag people by source, service of interest, city and language, so that later emails go to the right group. Start with tags you can fill by rule.',
        'A weekly report. Pull enquiries by source, response time and open follow-ups into one message to the owner every Monday, instead of someone building it by hand.',
        'Re-engagement of quiet leads and customers. Only after the first five work, and only to people who agreed to hear from you.',
      ],
    },
    {
      type: 'p',
      text: 'Notice what is not on the list: a full "AI marketing machine." [One vendor guide on automation with AI](https://stamina.io/blog/marketing-automation-with-ai) states that "AI still doesn\'t replace clear positioning, clean data, or human judgment," and warns that with a messy CRM the system "will automate bad decisions faster." If your enquiries are still recorded in three places, fix that before you automate on top of it.',
    },
    { type: 'h2', text: 'Where AI adds value over plain rules' },
    {
      type: 'p',
      text: 'AI earns its place at the edges of your rules, where the input is human language or the decision weighs many things. The jobs below are good fits, and in each one the AI proposes and your rules or a person decide.',
    },
    {
      type: 'ul',
      items: [
        'Classifying incoming messages. A model reads a message in Georgian, English or Russian and labels it (price question, complaint, booking, spam) so a rule can route it.',
        'Drafting first versions. Reply drafts, email variants and subject lines in your approved voice, saved as drafts for a person to edit. Our post on [ChatGPT for marketing](/blog/chatgpt-for-marketing) covers prompts and where drafts fail.',
        'Summarising. A call, a long email thread or a month of enquiries turned into five lines in the CRM.',
        'Scoring and prioritising. Ranking leads by fit and behaviour, once you have enough closed deals to check the score against. A rules-based score is the sensible place to start.',
        'Timing. Platforms sometimes choose send times from engagement data. Treat it as a feature to test, as the next paragraph shows.',
      ],
    },
    {
      type: 'p',
      text: 'AI features come with limits that the marketing pages do not shout about. Mailchimp\'s [Send Time Optimization](https://mailchimp.com/help/use-send-time-optimization/) uses engagement data to choose when each contact is most likely to open an email, but it needs enough data from your sent emails, a Standard plan or higher, and, in Mailchimp\'s words, "This feature is not available in automated emails." So the welcome series and follow-ups above still need a fixed schedule. Read the limits of any AI feature before you plan around it, and compare its results with a plain schedule on your own list.',
    },
    { type: 'h2', text: 'Human review points' },
    {
      type: 'p',
      text: 'Decide in advance where a person looks, and write it into the workflow, not into a memo.',
    },
    {
      type: 'table',
      head: ['Point in the flow', 'Who checks', 'What they check'],
      rows: [
        ['Before a new automation goes live', 'Marketing owner', 'Triggers, stop conditions and who is excluded (current customers, people in a live sales conversation)'],
        ['AI-drafted customer message', 'The sender, before it goes out', 'Facts, tone, names, anything that sounds like a promise'],
        ['A lead replies or books', 'Sales', 'The automation stops and a person takes over the same day'],
        ['Anything about price, discounts, deadlines or complaints', 'A person only', 'No automatic answers'],
        ['AI classification and scoring', 'Marketing and sales, monthly', 'A sample of 20 items: did the label match what a person would choose?'],
        ['Every automation, each quarter', 'Marketing owner', 'Still needed? Open and reply rates, unsubscribe and complaint counts, broken links'],
      ],
    },
    { type: 'h2', text: 'Consent and records' },
    {
      type: 'p',
      text: 'Automation makes it easy to message many people, so the legal basics matter. Article 12 of Georgia\'s [Law on Personal Data Protection](https://matsne.gov.ge/en/document/view/5827307) says that "data may only be processed for direct marketing purposes with the consent of the data subject," and the controller bears the burden of proving the consent. The person must be told of the right to withdraw consent at any time, before consent is obtained and during the marketing, may request that it stop in the same form in which the marketing is carried out, and the processing must end within a reasonable period and no later than 7 working days after the request.',
    },
    {
      type: 'p',
      text: 'In practice: record when, where and how each person agreed, include a working unsubscribe in every message, and make your tool honour a stop within days. This is a summary of one article, not legal advice; ask a lawyer about your own lists, especially if you also write to people in other countries. Our post on [building an email list](/blog/build-email-list) covers sign-up forms that collect clear consent.',
    },
    { type: 'h2', text: 'A two-week pilot' },
    {
      type: 'ol',
      items: [
        'Pick one task from the list, usually enquiry acknowledgement or the welcome series.',
        'Write the rule on one page: trigger, conditions, action, stop, owner.',
        'Build it in a tool you already pay for before you buy another. Check the plan: some features sit on higher tiers, as the Mailchimp limits above show.',
        'Test with your own address and a colleague\'s, and check what happens when someone replies, unsubscribes or fills the form twice.',
        'Run it for two weeks. Count enquiries, response time and complaints, and compare them with the two weeks before.',
        'Keep it, change it or switch it off. Only then pick the next task.',
      ],
    },
    {
      type: 'p',
      text: 'For tools to compare, see [AI tools for small business marketing](/blog/ai-tools-for-small-business-marketing).',
    },
    { type: 'h2', text: 'Where WakeUP fits' },
    {
      type: 'p',
      text: 'WakeUP\'s [AI automation service](/services/ai-automation) covers chatbots, lead qualification with handover to a person, automatic lead routing to your CRM, email or team chat, and follow-up and reporting automations. If you are unsure which of your repeat tasks to automate first, the [free audit](/audit) is a way to see where leads and hours are lost today.',
    },
  ],
}
