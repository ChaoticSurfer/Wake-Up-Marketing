import type { BlogPost } from '@/lib/blog'

export const post: BlogPost = {
  locale: 'en',
  slug: 'whatsapp-marketing',
  title: 'WhatsApp marketing for small business: a permission-first plan',
  metaTitle: 'WhatsApp Marketing for Small Business',
  description:
    'WhatsApp marketing for small business: collect opt-ins, send welcome and order messages, use a catalogue and decide what stays on email.',
  publishedAt: '2027-02-02T18:00:00+04:00',
  updatedAt: '2027-02-02T18:00:00+04:00',
  service: 'automation',
  reviewState: 'llm_reviewed',
  body: [
    {
      type: 'p',
      text: 'WhatsApp marketing for small business works when people have asked to hear from you and the messages are useful on arrival. Build a list through opt-ins, welcome new contacts in the first conversation, send order updates as approved templates, show products in a catalogue, and keep long content on email. Send only what each person agreed to receive.',
    },
    { type: 'h2', text: 'Start with permission' },
    {
      type: 'p',
      text: 'WhatsApp is stricter than email about who you may message. The [WhatsApp Business Messaging Policy](https://whatsappbusiness.com/policy/) says businesses may contact people only if they have shared their phone number and given permission to receive later messages, that the business is responsible for its opt-in method, and that opt-out requests must be respected. In the policy\'s words, "Users should expect the messages and calls they receive." Buying a phone list or adding numbers from a business card does not meet that rule and invites reports and blocks.',
    },
    {
      type: 'p',
      text: 'Write the opt-in so a person can read what they are agreeing to. The policy recommends separate opt-ins for different message categories, so ask separately for order updates and for offers. If you already collect email addresses, the consent rules in [how to build an email list](/blog/build-email-list) apply here too.',
    },
    { type: 'h2', text: 'Where opt-ins come from' },
    {
      type: 'ul',
      items: [
        'A click-to-chat link or QR code. WhatsApp\'s [click to chat guide](https://faq.whatsapp.com/5913398998672934) gives the format https://wa.me/ followed by the full number in international format, and a link can carry a pre-filled message such as "Send me the price list". The person starts the chat, which is a clear signal of interest.',
        'A checkbox at checkout or on a booking or contact form, worded as permission for WhatsApp messages about the order.',
        'In-store or event sign-up, where the person writes their number next to a sentence that says what they will receive.',
        'Click to WhatsApp ads, where the person taps an ad and lands in a chat with your business.',
        'Your own customer database, only where the customer already agreed to WhatsApp contact, not just to a phone call.',
      ],
    },
    {
      type: 'p',
      text: 'Keep a record of when and how each person opted in. You will need it when someone asks why they are receiving messages.',
    },
    { type: 'h2', text: 'What you can send, and when' },
    {
      type: 'p',
      text: 'Meta\'s [pricing documentation](https://developers.facebook.com/docs/whatsapp/pricing/), as of November 2026, sets the main rule for the WhatsApp Business Platform. A 24-hour customer service window opens when a person messages you and resets with each new message from them. Inside it you can reply with free-form messages. Outside it you can send only approved message templates. Messages are priced per delivered message, with the price depending on the category and the recipient\'s country calling code. The page says its pricing updates took effect on 1 October 2026, and that Meta now charges for some messages that were previously free, including service messages beyond a monthly free tier and utility messages sent inside an open service window, so check the current rate card before you budget.',
    },
    {
      type: 'table',
      head: ['Message type', 'What it is for', 'Example'],
      rows: [
        ['Service (free-form, in the 24-hour window)', 'Answering what the person just asked', 'Price, availability, opening hours'],
        ['Utility template', 'Following up on something they did', 'Order confirmation, delivery update, booking reminder'],
        ['Marketing template', 'Offers, launches, re-engagement', 'A new collection, a seasonal offer, a back-in-stock alert'],
      ],
    },
    {
      type: 'p',
      text: 'Meta\'s [template categorisation guide](https://developers.facebook.com/documentation/business-messaging/whatsapp/templates/template-categorization) draws the line between the last two. A utility template "must be non-promotional, not containing any promotional or persuasive intent" and has to relate to the person\'s own order, account or transaction. Adding a discount to an order update turns it into marketing, which is classified and priced differently. Templates are reviewed automatically when created, and Meta\'s [template guidelines](https://developers.facebook.com/docs/whatsapp/message-templates/guidelines/) say an in-review template can take up to 24 hours, so write and submit them before a campaign starts.',
    },
    {
      type: 'p',
      text: 'There is one exception worth planning for. If a person messages you from a Click to WhatsApp ad (on the Android or iOS app, not desktop or web) and you reply within the service window with a marketing, utility, authentication or service message, the pricing page says that reply is not charged and opens a free entry point window of up to seven days, during which marketing, utility, authentication and service messages are free. That makes ads that open a chat a cheaper way to start a conversation than a template sent cold.',
    },
    { type: 'h2', text: 'A welcome sequence' },
    {
      type: 'p',
      text: 'A welcome sequence on WhatsApp is shorter than one by email, because every message lands on a phone in someone\'s main inbox. Keep it to three or four messages in the first two weeks. Here is a pattern that fits the rules above.',
    },
    {
      type: 'ol',
      items: [
        'Minute one, when the person starts the chat: a short greeting, what you can help with, and two or three buttons or numbered options. This is a free-form reply inside the window.',
        'Same conversation: a useful answer to what they asked, with a link to a catalogue item, a booking page or a price list.',
        'Day two or three, as an approved template if the window has closed: one tip or one story from a customer, with a single call to action.',
        'Day seven to ten, as a template: ask what they still need and offer a person to talk to. Include a clear way to stop messages.',
      ],
    },
    {
      type: 'p',
      text: 'The email version of the same idea is in [how to write a welcome email series](/blog/welcome-email-series). Use the two together: WhatsApp for the quick, personal steps and email for anything long.',
    },
    { type: 'h2', text: 'Use the catalogue' },
    {
      type: 'p',
      text: 'WhatsApp\'s help page on [catalogues](https://faq.whatsapp.com/405903568419894) says businesses on the WhatsApp Business app can share products and services with customers, and the catalogue appears on the business profile. Each item needs a unique title, at least one image and a country of origin. Check in the app how your listing displays before you promise a price in the catalogue.',
    },
    {
      type: 'p',
      text: 'A catalogue is most useful as an answer. When a customer asks "what do you have for X?", send the item or the catalogue link instead of typing a list. Keep the photos clear and consistent, name items the way customers search for them, and remove what you no longer sell.',
    },
    { type: 'h2', text: 'Order updates are the safest start' },
    {
      type: 'p',
      text: 'If you are unsure where to begin, begin with utility messages: order received, order confirmed, out for delivery, booking reminder, receipt. They are expected, they are useful, and the person asked for the order in the first place. The same channel then makes later offers easier to accept, because the number is already trusted. Once updates are running, add one marketing template a month and watch opt-out requests before you send more.',
    },
    {
      type: 'p',
      text: 'The Business app also has broadcast lists. WhatsApp\'s [broadcast list help page](https://faq.whatsapp.com/861663048350950/) says a list holds up to 256 contacts and that people receive your message only if they have saved your number. For a few hundred regulars that may be enough. Beyond that, or when you want automation and a shared team inbox, look at the Business Platform, which is where the templates and per-message pricing described above apply.',
    },
    { type: 'h2', text: 'WhatsApp or email: split the jobs' },
    {
      type: 'table',
      head: ['Job', 'Better on', 'Why'],
      rows: [
        ['Order and booking updates', 'WhatsApp', 'Short, time-sensitive, read on a phone'],
        ['Quick questions before buying', 'WhatsApp', 'A person can answer in the same conversation'],
        ['Back-in-stock alerts and limited offers', 'WhatsApp', 'Timing matters and the message is one line'],
        ['Newsletters, long guides, case studies', 'Email', 'More space, easy to scan and file'],
        ['Invoices, contracts, documents', 'Email', 'Needs a lasting, searchable record'],
        ['People who never gave you a phone number', 'Email', 'WhatsApp needs the number and the permission'],
      ],
    },
    { type: 'h2', text: 'Where a chatbot fits' },
    {
      type: 'p',
      text: 'Once customers message you, the limit is how fast someone replies. A chatbot can answer the common questions, collect name and request, and pass the chat to a person with the history. The setup choices are in [how to create an AI chatbot for your business](/blog/how-to-create-ai-chatbot-for-business), including the WhatsApp rules on templates and opt-in. WakeUP\'s [AI automation and chatbots](/services/ai-automation) service builds chatbots for WhatsApp, Messenger, Instagram and websites that answer in Georgian and English, send leads to your CRM and hand over to a person when needed. If you want an outside view on how your messaging, follow-up and lead handling fit together, ask for the [free marketing audit](/audit).',
    },
    { type: 'h2', text: 'Measure the right things' },
    {
      type: 'ul',
      items: [
        'Opt-ins per week, and the source of each.',
        'Opt-out and block requests after each campaign. If they rise, send less or send more relevant messages.',
        'Replies and conversations started, not only messages delivered.',
        'Leads, bookings or orders that began in a chat. Tag the source with a link parameter or a label so you can count them.',
      ],
    },
  ],
}
