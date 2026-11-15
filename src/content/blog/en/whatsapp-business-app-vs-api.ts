import type { BlogPost } from '@/lib/blog'

export const post: BlogPost = {
  locale: 'en',
  slug: 'whatsapp-business-app-vs-api',
  title: 'WhatsApp Business app vs API: which one fits your company',
  metaTitle: 'WhatsApp Business App vs API',
  description:
    'WhatsApp Business app vs API: who each is for, device limits, per-message costs, template approval and what you need to connect a CRM or chatbot.',
  publishedAt: '2027-02-19T12:00:00+04:00',
  updatedAt: '2027-02-19T12:00:00+04:00',
  service: 'automation',
  reviewState: 'llm_reviewed',
  body: [
    {
      type: 'p',
      text: 'The WhatsApp Business app is an app that people on your team use by hand, on a phone and a few linked devices. The WhatsApp Business API, which Meta calls the WhatsApp Business Platform, is a programming interface that software uses to send and receive messages, so it is what a CRM, shared inbox or chatbot connects to. If staff answer chats themselves and volume is small, the app is enough. If you need automation or system integration, you need the API.',
    },
    { type: 'h2', text: 'The difference in one table' },
    {
      type: 'table',
      head: ['', 'WhatsApp Business app', 'WhatsApp Business Platform (API)'],
      rows: [
        ['How it is used', 'People read and reply in the app', 'Software sends and receives messages; staff work in a connected inbox or CRM'],
        ['Devices', 'One phone plus up to four linked devices', 'Access is through the software you connect'],
        ['Cost', 'Messages sent from the app are not billed per message', 'Charged per delivered message, by category and market'],
        ['Chatbot and CRM', 'Staff reply by hand', 'The interface software uses to read and send messages'],
        ['Messages after 24 hours', 'You reply by hand', 'Pre-approved templates only, outside the 24-hour window'],
        ['Set-up', 'A number and the app', 'Business portfolio, phone number, access tokens and a provider or developer'],
      ],
    },
    {
      type: 'p',
      text: 'Each row is explained below, with the source for the claim.',
    },
    { type: 'h2', text: 'Limits: who can answer, and how many at once' },
    {
      type: 'p',
      text: 'WhatsApp\'s help centre says that on the Business app you can [use up to four linked devices and one phone at a time](https://faq.whatsapp.com/647349420360876). That suits an owner and a couple of colleagues sharing one number. It does not suit a ten-person sales or support team that needs assignment, notes and a record of who replied.',
    },
    {
      type: 'p',
      text: 'The API has no inbox of its own. Meta\'s [Cloud API overview](https://developers.facebook.com/docs/whatsapp/cloud-api/overview) describes it as a way to "programmatically message and call on WhatsApp", and says its documentation is intended for developers. Your team works in whatever tool you connect: a shared inbox, a CRM, or a bot with a handover to people.',
    },
    { type: 'h2', text: 'Cost' },
    {
      type: 'p',
      text: 'The platform charges per message. As [WhatsApp\'s platform pricing page](https://whatsappbusiness.com/products/platform-pricing/) read in November 2026, you are charged when a message is delivered, and rates vary by market and category (marketing, utility, authentication and service). Service messages are not charged, nor are utility messages sent in response to users. After a user contacts you from a click-to-WhatsApp ad or a Facebook Page button, all your messages are free for 72 hours.',
    },
    {
      type: 'p',
      text: 'Meta changes these rules and rate cards, so check the page before budgeting. Costs also include the software or provider you connect, which charges separately from Meta. If you plan a bot, [what an AI chatbot costs](/blog/ai-chatbot-cost) shows how to total the pieces.',
    },
    { type: 'h2', text: 'Approval and set-up' },
    {
      type: 'p',
      text: 'The platform has more set-up than the app. Meta\'s documentation says you must have a business portfolio, and that business phone numbers, real or virtual, are used to send and receive messages. Authentication needs access tokens. Verifying the business portfolio is described as optional, though it brings benefits such as higher throughput.',
    },
    {
      type: 'p',
      text: 'The other approval is for message content. Meta\'s [send messages guide](https://developers.facebook.com/documentation/business-messaging/whatsapp/messages/send-messages) says that when a user messages you, a 24-hour customer service window starts, and after it closes you can only send pre-approved template messages. So a reminder or follow-up sent a day later has to be a template that Meta has approved. For template categories, opt-in and campaigns, see [WhatsApp marketing](/blog/whatsapp-marketing); for how this affects a bot, see [how to create an AI chatbot for business](/blog/how-to-create-ai-chatbot-for-business).',
    },
    { type: 'h2', text: 'Connecting a CRM or chatbot' },
    {
      type: 'p',
      text: 'This is usually the deciding question. A chatbot that answers common questions, qualifies a lead and passes the chat to a person needs the API, because software must read incoming messages and send replies. The same goes for pushing every new enquiry into a CRM. Before choosing a CRM, [how to choose a CRM](/blog/how-to-choose-crm) lists what to compare, and [chatbot vs AI agent](/blog/chatbot-vs-ai-agent) explains how much a bot should do on its own.',
    },
    {
      type: 'p',
      text: 'If your team already uses the app on a number customers know, you do not have to give it up. Meta\'s documentation on [onboarding Business app users](https://developers.facebook.com/documentation/business-messaging/whatsapp/embedded-signup/onboarding-business-app-users/) describes a mode where the same number works in the app and through the Cloud API, and says messages sent from the app remain free while API messages are billed at Cloud API rates. It has limits: group chats are not synchronised, broadcast lists are disabled, and the feature is offered through Solution Partners and Tech Providers, so you set it up with one. Ask your provider whether it applies to you, because the rules change.',
    },
    { type: 'h2', text: 'Which one fits' },
    {
      type: 'ul',
      items: [
        'Stay on the app if one to three people reply by hand, you send few messages a day, and you do not need a bot or a CRM link.',
        'Move to the API if several people share the number, replies take too long, you want a bot for questions outside working hours, or enquiries must land in a CRM with an owner.',
        'Plan for templates and per-message costs before you move, and keep a person ready to take over from the bot.',
      ],
    },
    {
      type: 'p',
      text: 'WakeUP builds chatbots for WhatsApp, Messenger, Instagram and websites, and connects leads to a CRM; see the [AI automation and chatbots](/services/ai-automation) service page. The [free audit](/audit) is the place to start if you are not sure how your enquiries are handled today.',
    },
  ],
}
