import type { BlogPost } from '@/lib/blog'

export const post: BlogPost = {
  locale: 'en',
  slug: 'ai-customer-service-beyond-chatbots',
  title: 'AI customer service beyond chatbots: what is realistic for a Georgian company',
  metaTitle: 'AI Customer Service Beyond Chatbots',
  description:
    'AI customer service beyond chatbots: reply drafting, routing, summaries, translation, sentiment and proactive messages, and which fit a Georgian company.',
  publishedAt: '2027-01-28T18:00:00+04:00',
  updatedAt: '2027-01-28T18:00:00+04:00',
  service: 'automation',
  reviewState: 'llm_reviewed',
  body: [
    {
      type: 'p',
      text: 'AI customer service beyond chatbots means using AI behind the scenes to help your team: drafting replies, routing and tagging incoming messages, summarising long threads, translating, flagging unhappy customers and sending timely proactive messages. For a company with 20 to 250 people in Georgia, reply drafting, routing and summaries are the most realistic starting points, because a person still checks the output and the Georgian-language risk stays contained.',
    },
    { type: 'h2', text: 'Six uses, and how realistic each is' },
    {
      type: 'p',
      text: 'The ratings below are a judgement for a mid-size Georgian company with a shared inbox or helpdesk, not a measurement. Effort and risk depend on your volume and data. The bot-versus-agent question is covered in [chatbot vs AI agent](/blog/chatbot-vs-ai-agent), so this post stays with everything else.',
    },
    {
      type: 'table',
      head: ['Use', 'What it does', 'Realistic in Georgia?', 'Main risk'],
      rows: [
        ['Reply drafting', 'Suggests an answer for a person to edit and send', 'Yes, start here', 'Wrong facts or tone; needs your own content'],
        ['Routing and tagging', 'Reads a message and assigns topic, priority and owner', 'Yes', 'Misrouted urgent cases'],
        ['Summaries and notes', 'Condenses a long thread or call into a few lines', 'Yes', 'Missing a detail'],
        ['Translation', 'Lets staff handle English, Russian or Georgian messages', 'Yes, with a check', 'Meaning errors in Georgian'],
        ['Sentiment flags', 'Marks angry or at-risk customers', 'Test first', 'Weak Georgian support in some tools'],
        ['Proactive messages', 'Sends order, delay or renewal updates before the customer asks', 'Yes, for simple events', 'Consent and annoying customers'],
      ],
    },
    { type: 'h2', text: 'Reply drafting: the one with evidence' },
    {
      type: 'p',
      text: 'An AI assistant that suggests replies to a human agent is the best studied use. A National Bureau of Economic Research paper on 5,179 customer support agents reports that “Access to the tool increases productivity, as measured by issues resolved per hour, by 14% on average”, including a 34% improvement for novice and low-skilled workers, with minimal impact on experienced and highly skilled workers ([NBER working paper 31161](https://www.nber.org/papers/w31161)). That is one study of one setting, so do not expect the same figure in your team. It does suggest where the gain is likeliest: new staff, and teams with a lot of repeated questions.',
    },
    {
      type: 'ul',
      items: [
        'Feed it your real material: price lists, policies, past good answers and a style note. Without that it guesses.',
        'Keep a person sending every reply at first. Track how often agents change the draft, and what they change.',
        'Write down topics it must never answer alone: refunds, complaints, legal and medical questions, anything involving a price exception.',
      ],
    },
    { type: 'h2', text: 'Routing and tagging' },
    {
      type: 'p',
      text: 'If messages arrive by phone, Facebook, Instagram, WhatsApp and email, someone spends the first hour of the day sorting them. AI can read each message, tag the topic (order status, price enquiry, complaint), set a priority and assign it to the right person or queue. This removes a boring job without changing what the customer experiences, so the downside of a mistake is a message in the wrong queue, which is easy to see and fix. Start with three to five tags, review a sample every week and add tags only when the sample is accurate.',
    },
    {
      type: 'p',
      text: 'Routing works best when the tags end up in a system your team already uses. A [CRM](/blog/how-to-choose-crm) or helpdesk with clear fields makes it possible; a pile of unlabeled chats does not.',
    },
    { type: 'h2', text: 'Summaries and quality notes' },
    {
      type: 'p',
      text: 'A summary of a long email thread or a call transcript saves the next agent from rereading everything, and gives a manager something quick to scan. Use it for handovers between shifts, for escalations and for notes saved against a customer record. If your phone calls are transcribed, check that the transcription handles Georgian speech and numbers well before building on it; the same caution applies to [voice agents](/blog/what-is-ai-voice-agent). For summaries, check ten examples against the original and look for what was left out.',
    },
    { type: 'h2', text: 'Translation: useful, with a human check' },
    {
      type: 'p',
      text: 'If you serve customers in Georgian, English and Russian, your staff are often not equally strong in all three. Machine translation helps a colleague read and answer a message in a language they do not write well. Google lists Georgian (ka) among the languages supported by [Cloud Translation](https://docs.cloud.google.com/translate/docs/languages), so tools built on it can handle the pair. Support is not the same as quality: contract terms, medical and technical wording need a person who knows the language. Treat translation as a draft for a bilingual employee to confirm for anything binding.',
    },
    { type: 'h2', text: 'Sentiment flags: check Georgian before you buy' },
    {
      type: 'p',
      text: 'Sentiment analysis marks messages that sound angry, anxious or about to cancel, so a manager can step in. The catch is language. Google’s [Cloud Natural Language documentation](https://docs.cloud.google.com/natural-language/docs/languages) lists 16 languages for sentiment analysis, and Georgian is not among them. Other providers may differ, including large language models that can be asked to classify tone. Whatever you choose, test it on 100 of your own Georgian messages, written the way customers write, with spelling variants and Latin-letter Georgian, and compare its labels with a person’s. If it disagrees with the person often, use simple rules instead, such as flagging the word “cancel” or a third message in one day.',
    },
    { type: 'h2', text: 'Proactive messages' },
    {
      type: 'p',
      text: 'The cheapest support message is the one that stops a call: your order has shipped, your appointment is tomorrow, your delivery is delayed by a day. These are mostly simple automations triggered by an event in your system, with AI used to write or personalise the text. They suit businesses with orders, bookings or renewals. Keep the list of triggers short, send through channels customers agreed to receive messages on, and let people reply to a real person. For where a chatbot also helps with fast first replies, see [chatbot benefits](/blog/ai-chatbot-benefits).',
    },
    { type: 'h2', text: 'Personal data and automated decisions' },
    {
      type: 'p',
      text: 'Customer messages contain personal data, so the Georgian [Law on Personal Data Protection](https://matsne.gov.ge/en/document/download/5827307/0/en/pdf) applies to how AI tools handle them. Article 19 gives people the right not to be subject to a decision based solely on automated processing, including profiling, which produces legal or other similarly significant effects, with exceptions such as explicit consent or necessity for a contract. Drafting a reply that a person reviews is not a decision of that kind. Automatically refusing a refund or denying service on a score might be, so keep a person in those decisions and take legal advice for your case. Also ask each vendor where data is stored, whether it is used to train models and how it can be deleted.',
    },
    { type: 'h2', text: 'How to choose the first one' },
    {
      type: 'ol',
      items: [
        'Count your incoming messages by type for two weeks. The biggest repeated group is your first target.',
        'Pick one use from the table, with a person reviewing the output.',
        'Define one measure before you start: time to first reply, handling time per ticket or share of drafts sent unchanged.',
        'Run it with a few agents for a month, then compare with the same measure from before.',
        'Add the next use only when the first one is stable. To turn time saved into money, see [how to calculate marketing ROI](/blog/how-to-calculate-marketing-roi) for the same cost-and-gain method.',
      ],
    },
    {
      type: 'p',
      text: 'WakeUP’s [AI automation](/services/ai-automation) service covers chatbots for Messenger, Instagram, WhatsApp and your website, lead qualification with handover to a person, and automatic routing of leads to your CRM, email or team chat. If you are not sure where AI would save your team the most time, the free [marketing audit](/audit) looks at the sales process and what happens to a lead after it arrives.',
    },
  ],
}
