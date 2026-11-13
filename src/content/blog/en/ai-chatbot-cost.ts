import type { BlogPost } from '@/lib/blog'

export const post: BlogPost = {
  locale: 'en',
  slug: 'ai-chatbot-cost',
  title: 'How much does an AI chatbot cost? A sourced breakdown for Georgian businesses',
  metaTitle: 'How Much Does an AI Chatbot Cost?',
  description:
    'How much does an AI chatbot cost? Published vendor prices from November 2026, what drives the price in Georgia, and how to estimate your own monthly bill.',
  publishedAt: '2026-11-13T17:00:00+04:00',
  updatedAt: '2026-11-13T17:00:00+04:00',
  service: 'automation',
  reviewState: 'llm_reviewed',
  body: [
    {
      type: 'p',
      text: 'How much does an AI chatbot cost? It depends on the pricing model. Ready-made tools publish prices from about $24 a month to $300 or more, per-resolution tools charge about $1 for each solved conversation, and the AI model behind a custom bot costs about one cent per conversation in the example further down. A custom build adds a one-off set-up fee. All prices below are in USD, as the vendors list them.',
    },
    { type: 'h2', text: 'The five ways chatbot cost is built up' },
    {
      type: 'ul',
      items: [
        'Subscription: a monthly fee for a chatbot product, often with a set number of AI conversations included.',
        'Per resolution: you pay only when the bot solves a conversation.',
        'AI model usage: if the bot is custom, you pay the model provider per token of text read and written.',
        'Channel fees: WhatsApp charges per message in some cases, other channels are free to use.',
        'Set-up and maintenance: building the bot, loading your prices and policies, connecting your CRM, then keeping the answers current.',
      ],
    },
    {
      type: 'p',
      text: 'Most quotes mix two or three of these. When you compare offers, ask which of the five are inside the price and which are billed separately.',
    },
    { type: 'h2', text: 'How much does an AI chatbot cost in 2026? Published vendor prices' },
    {
      type: 'p',
      text: 'The table shows prices read from each vendor\'s own page on 13 November 2026. Vendors change plans and prices often, so check the linked page before you decide.',
    },
    {
      type: 'table',
      head: ['Vendor and model', 'Price as listed (USD)', 'Notes'],
      rows: [
        [
          '[Intercom Fin](https://fin.ai/pricing): per resolution',
          '$0.99 per outcome',
          'Charged once per conversation. With Intercom\'s helpdesk, $19 per helpdesk seat per month on top. With another helpdesk the page lists a minimum of 50 outcomes per month.',
        ],
        [
          '[Tidio](https://www.tidio.com/pricing/): Starter',
          '$24.17 per month',
          'The page also offers annual billing, so check which billing period the listed price applies to. The first 50 Lyro AI conversations are listed as free (lifetime).',
        ],
        [
          '[Tidio](https://www.tidio.com/pricing/): Growth',
          'From $49.17 per month',
          'Lyro conversation limit can be raised, with a range of 50 to 1,000 in the compare table.',
        ],
        [
          '[Tidio](https://www.tidio.com/pricing/): Plus',
          'From $300 per month, plus usage',
          'Premium is quoted on request. The Lyro AI add-on starts at $32.50 per month for 50 conversations.',
        ],
        [
          '[OpenAI API](https://developers.openai.com/api/docs/pricing): gpt-5.4-mini',
          '$0.75 input / $4.50 output per 1M tokens',
          'Standard tier. For a custom bot, this is the model bill.',
        ],
        [
          '[OpenAI API](https://developers.openai.com/api/docs/pricing): gpt-5-mini',
          '$0.25 input / $2.00 output per 1M tokens',
          'Standard tier.',
        ],
        [
          '[OpenAI API](https://developers.openai.com/api/docs/pricing): gpt-4o-mini',
          '$0.15 input / $0.60 output per 1M tokens',
          'Standard tier.',
        ],
      ],
    },
    { type: 'h2', text: 'What the AI model costs per conversation' },
    {
      type: 'p',
      text: 'Model prices look tiny because they are per million tokens, and a token is a few characters. To see what that means for one chat, assume an example conversation that sends 10,000 tokens to the model (your instructions, the product information it looks up, and the chat so far, re-sent on every turn) and receives 1,000 tokens back. These numbers are an assumption for illustration, not a measurement.',
    },
    {
      type: 'table',
      head: ['Model (OpenAI list price)', 'Cost of one example conversation', 'Cost of 1,000 conversations'],
      rows: [
        ['gpt-5.4-mini', '$0.012', 'about $12'],
        ['gpt-5-mini', '$0.0045', 'about $4.50'],
        ['gpt-4o-mini', '$0.0021', 'about $2.10'],
      ],
    },
    {
      type: 'p',
      text: 'Compare that with a per-resolution price of $0.99. If 1,000 conversations a month are all handled and billed by Fin, that is up to $990. The gap is the cost of a finished product with a dashboard, handover tools and support, against the raw model you would have to wrap in your own software. Neither is wrong, they answer different needs.',
    },
    { type: 'h2', text: 'What pushes the price up for a company in Georgia' },
    {
      type: 'ul',
      items: [
        'Georgian language. The pricing pages we read do not say how well each tool handles Georgian. Ask for a demo in Georgian on your own questions before paying, because a cheaper plan that answers badly costs you leads.',
        'Channels. A website widget is the simplest. Messenger, Instagram and WhatsApp each need their own connection, and WhatsApp has its own fees.',
        'WhatsApp message fees. Meta [charges per message](https://developers.facebook.com/docs/whatsapp/pricing/), with the rate set by message category and the recipient\'s country code. Georgia (+995) falls in the "Rest of Central & Eastern Europe" region. Meta also gives each business number 1,000 free service messages a month, and since 1 October 2026 has charged for service messages beyond that. Replies after a customer taps a Click to WhatsApp ad get a free window of up to 7 days. The exact amounts are in Meta\'s rate cards, which are published as separate downloads, so check them for your volume.',
        'Integrations. Writing leads into your CRM, checking stock or booking calendars is custom work and adds to the set-up quote.',
        'Volume. Subscription tiers and per-resolution fees both rise with the number of conversations. Model costs rise with every conversation too, in a straight line, but from a much lower cost per chat.',
        'Human handover. If the bot must pass chats to your team with full context, the helpdesk or inbox it connects to may add seat fees, as in the Intercom example above.',
      ],
    },
    { type: 'h2', text: 'How to estimate your own monthly cost' },
    {
      type: 'ol',
      items: [
        'Count conversations. Take the number of chats and messages your team handled last month across all channels.',
        'Decide how many the bot should solve. Be cautious: start with the repetitive questions such as prices, hours and booking.',
        'Pick the pricing model and multiply. Per resolution: solved chats times the listed price. Subscription: the plan that includes that many AI conversations. Custom: conversations times the model cost per chat from the table above.',
        'Add channel fees. For WhatsApp, count how many messages you send first (reminders, confirmations) versus replies inside the free windows, then price them from Meta\'s rate card.',
        'Add set-up and upkeep. Ask for a one-off figure for building and a monthly figure for fixing answers and adding new products.',
        'Compare with the cost of the work being replaced, including the leads you lose when nobody answers after hours.',
      ],
    },
    { type: 'h2', text: 'Subscribe, build or hire a team' },
    {
      type: 'p',
      text: 'A subscription tool is the fastest start and a simple choice for a single website widget. A custom bot makes sense when you need Georgian answers in your own wording, several channels and a CRM connection. Our guide on [how to create an AI chatbot for business](/blog/how-to-create-ai-chatbot-for-business) walks through the steps. Voice is priced differently, see [AI voice agent cost](/blog/ai-voice-agent-cost) and [AI call center cost](/blog/ai-call-center-cost).',
    },
    {
      type: 'p',
      text: 'WakeUP builds chatbots for Messenger, Instagram, WhatsApp and websites with CRM routing, as described on the [AI automation and chatbots](/services/ai-automation) page. If you want a second opinion on where your marketing and lead handling stand before you spend, ask for the [free marketing audit](/audit).',
    },
  ],
}
