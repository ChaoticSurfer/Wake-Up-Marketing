import type { BlogPost } from '@/lib/blog'

export const post: BlogPost = {
  locale: 'en',
  slug: 'how-to-create-ai-chatbot-for-business',
  title: 'How to Create an AI Chatbot for a Business: Step by Step',
  metaTitle: 'How to Create an AI Chatbot for a Business',
  description:
    'How to create an AI chatbot for a business in eight steps: pick its jobs, gather answers, choose a build route and channels, add a human hand-off, test.',
  publishedAt: '2026-11-13T17:00:00+04:00',
  updatedAt: '2026-11-13T17:00:00+04:00',
  service: 'automation',
  reviewState: 'llm_reviewed',
  body: [
    {
      type: 'p',
      text: 'How to create an AI chatbot for a business, in short: decide the few jobs it should do, collect the answers it needs (FAQs, prices, policies), choose how to build it (yourself, a no-code platform or an agency), connect it to the channels your customers already use, and add a hand-off to a person. Test it on real questions before launch. For a basic bot you do not need to write code.',
    },
    { type: 'h2', text: 'The steps at a glance' },
    {
      type: 'ol',
      items: [
        'Pick two or three jobs for the bot, such as answering price questions, booking appointments or collecting lead details.',
        'Gather the knowledge it will answer from: FAQs, price lists, opening hours, delivery and refund policies.',
        'Choose a build route: a no-code platform, a custom build by a developer, or an agency.',
        'Choose channels: website widget, Facebook Messenger, Instagram, WhatsApp.',
        'Decide which languages it answers in and how it sounds.',
        'Set the hand-off to a human, and decide what customer data it may touch.',
        'Test it on real questions from your inbox before any customer sees it.',
        'Launch to one channel, read the conversations every week, and fix what it gets wrong.',
      ],
    },
    { type: 'h2', text: 'Steps 1 and 2: decide the jobs and collect the answers' },
    {
      type: 'p',
      text: 'Most failed chatbots try to do everything. Start from your inbox instead. Open the last 100 messages customers sent you and group them: how much does it cost, are you open, where are you, can I book, where is my order. The groups that repeat are the bot\'s jobs. Anything rare or sensitive, such as complaints or custom quotes, stays with your team.',
    },
    {
      type: 'p',
      text: 'An AI chatbot is only as good as the material it answers from. Put the facts in one document: services and prices, working hours, addresses, delivery and refund rules, and the answers you already give by hand. Write the "we do not do this" cases too. If a price or policy is missing from the document, the bot has nothing reliable to say, and a bot that fills the gap with a guess is worse than no bot.',
    },
    { type: 'h2', text: 'Step 3: build it yourself, use a platform, or hire an agency' },
    {
      type: 'table',
      head: ['Route', 'Suits you if', 'Watch out for'],
      rows: [
        [
          'Do it yourself with a no-code platform',
          'One channel, simple questions, and someone on your team has time to maintain it',
          'Connecting several channels and your CRM, and checking that Georgian is supported well enough (test it)',
        ],
        [
          'Custom build by a developer',
          'You have unusual systems to connect and an in-house technical team',
          'Long delivery and the cost of maintaining it afterwards',
        ],
        [
          'Agency',
          'You want several channels, hand-off and CRM links working without managing the project',
          'Agree in writing who owns the accounts and conversation data',
        ],
      ],
    },
    {
      type: 'p',
      text: 'Whatever you choose, the work in steps 1, 2 and 7 is the same, and it decides the result more than the tool does. If you want to compare the cost of each route, see [what an AI chatbot costs](/blog/ai-chatbot-cost). If you would rather have it built and tested for you, WakeUP\'s [AI chatbot and automation service](/services/ai-automation) covers Messenger, Instagram, WhatsApp and website bots.',
    },
    { type: 'h2', text: 'Step 4: choose the channels, and know Meta\'s rules' },
    {
      type: 'p',
      text: 'Put the bot where customers already write to you. A website widget is the easiest to start with. For Facebook and Instagram, Meta\'s [Messenger Platform](https://developers.facebook.com/docs/messenger-platform/overview) lets a business respond to people who message its Facebook Page or Instagram Professional account, with replies that are automated, handled by a live representative, or both. Per Meta\'s documentation, conversations must be started by the person, and the standard messaging window is 24 hours for most user actions.',
    },
    {
      type: 'p',
      text: 'WhatsApp has stricter rules. Meta\'s [WhatsApp Business Platform overview](https://developers.facebook.com/docs/whatsapp/overview) says message templates are the only type of message that can be sent outside a customer service window, and that you must get the user\'s opt-in before sending templates. Meta\'s [send messages guide](https://developers.facebook.com/docs/whatsapp/cloud-api/guides/send-messages) explains that the 24-hour customer service window starts when a user messages you. In practice, a bot can reply while the customer service window is open, but it cannot start cold conversations. Check Meta\'s current documentation before you plan campaigns, because these rules change.',
    },
    { type: 'h2', text: 'Step 5: handle Georgian and English' },
    {
      type: 'p',
      text: 'For a business in Georgia, customers switch between Georgian and English, and some may write Georgian in Latin letters. Do not assume the bot copes: test it. Write 20 or 30 questions in each style, including slang and typos, and check that it answers in the language the customer used, with the right prices and tone. Keep the knowledge document in both languages so the bot is not translating your policies on the fly. Platforms may differ in how well they handle Georgian, so this test belongs in your selection process, not after launch.',
    },
    { type: 'h2', text: 'Step 6: hand-off to a human, and what the bot may know' },
    {
      type: 'p',
      text: 'Decide in advance when the bot stops and a person takes over: the customer asks for a human, the bot is unsure twice in a row, the topic is a complaint, a refund or a large order, or the customer is clearly upset. The hand-off should pass the whole conversation to your team, so the customer does not repeat themselves, and it should tell the customer when someone will reply, including outside working hours.',
    },
    {
      type: 'p',
      text: 'Privacy deserves a short, written decision. Connect the bot only to the data it needs, tell customers they are talking to an automated assistant, do not let it collect more personal details than the job requires, and know where the conversations are stored and who can read them. Rules on personal data differ by country, so confirm your obligations with a lawyer or the Personal Data Protection Service of Georgia before you launch.',
    },
    { type: 'h2', text: 'Steps 7 and 8: test, launch, measure' },
    {
      type: 'ul',
      items: [
        'Test with real questions copied from your inbox, not questions you invent. Include the awkward ones: out-of-stock items, price disputes, questions outside your business.',
        'Try to break it: ask for discounts it cannot give, ask for something that is not on your menu, ask it to ignore its instructions. A good bot declines politely and hands over.',
        'Launch to one channel first, with a person watching the live conversations for the first week.',
        'Track a few numbers: share of conversations solved without a person, share handed off, leads or bookings collected, and how many customers say the answer was wrong.',
        'Read a sample of conversations every week and update the knowledge document. The bot improves when the document does.',
      ],
    },
    {
      type: 'p',
      text: 'If you are not sure which jobs are worth automating, the [free marketing audit](/audit) reviews your ads, website and sales process, including what happens to a lead after it arrives. For voice instead of chat, see [what an AI voice agent costs](/blog/ai-voice-agent-cost).',
    },
  ],
}
