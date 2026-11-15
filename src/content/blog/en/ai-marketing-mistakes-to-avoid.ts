import type { BlogPost } from '@/lib/blog'

export const post: BlogPost = {
  locale: 'en',
  slug: 'ai-marketing-mistakes-to-avoid',
  title: 'AI marketing mistakes: seven errors that waste budget and how to avoid them',
  metaTitle: 'AI Marketing Mistakes to Avoid',
  description:
    'AI marketing mistakes small businesses make: automating a broken process, counting output as results, losing brand voice and weak data. With a checklist.',
  publishedAt: '2027-02-17T12:00:00+04:00',
  updatedAt: '2027-02-17T12:00:00+04:00',
  service: 'automation',
  reviewState: 'llm_reviewed',
  body: [
    {
      type: 'p',
      text: 'The most common AI marketing mistakes are automating a process that does not work yet, measuring output instead of results, publishing without review, losing the brand\'s voice, trusting generic or unchecked answers, feeding the tools poor data, and giving a bot unlimited authority with customers. Each one is avoidable with a check that takes minutes, and the checklist at the end turns them into a go or no-go before launch.',
    },
    {
      type: 'p',
      text: 'This is about errors of judgement, not tool choice. For tools, see [AI tools for small business marketing](/blog/ai-tools-for-small-business-marketing); for the writing workflow, [AI content creation for marketing](/blog/ai-content-creation-for-marketing).',
    },
    { type: 'h2', text: 'Mistake 1: automating a process that does not work yet' },
    {
      type: 'p',
      text: 'If leads are slow to get an answer, the offer is unclear or nobody owns the follow-up, a bot or an automation will do the same thing faster and at a larger scale. AI makes a good process cheaper and a bad one louder.',
    },
    {
      type: 'ul',
      items: [
        'Write the process down by hand first: trigger, steps, owner, the result that counts as success.',
        'Run it manually for a few weeks and fix the gaps you see.',
        'Automate the steps that are stable and repetitive, such as tagging, routing, reminders and first drafts. Leave judgement calls to a person.',
      ],
    },
    { type: 'h2', text: 'Mistake 2: counting output as success' },
    {
      type: 'p',
      text: 'AI makes it easy to produce 50 posts, 20 emails and 10 ad variants in an afternoon. None of those numbers says whether a customer bought anything. Pick the result that matters before you start (qualified enquiries, cost per lead, repeat orders) and compare it with the period before AI. [Marketing KPIs](/blog/marketing-kpis) lists the numbers to watch, and the weekly routine is the same as it was without AI: look at what changed and what it cost.',
    },
    {
      type: 'table',
      head: ['Output metric (easy to inflate)', 'Result metric (what to track instead)'],
      rows: [
        ['Posts published', 'Enquiries or sales that came from those posts'],
        ['Emails sent', 'Replies, bookings and unsubscribes'],
        ['Ad variants created', 'Cost per lead of the variants that won, after a fair test'],
        ['Hours saved', 'Hours saved and what the time was used for'],
      ],
    },
    { type: 'h2', text: 'Mistake 3: publishing at scale without review' },
    {
      type: 'p',
      text: 'Google\'s guidance on [generative AI content](https://developers.google.com/search/docs/fundamentals/using-gen-ai-content) says that using such tools "to generate many pages without adding value for users may violate" its spam policy on scaled content abuse. It also says it is "critical to manually factcheck and review all AI-generated content for accuracy and trustworthiness before publishing", and that the review should include metadata such as titles, descriptions and image alt text. Content made with "little to no effort, little to no originality, and little to no added value" is the thing to avoid.',
    },
    {
      type: 'p',
      text: 'So the limit on how much you publish is how much you can check, not how much the tool can write. Put a person (named, with time in the week) between the draft and the publish button. If the text is in Georgian, the reviewer should be someone who writes Georgian well, because a fluent-sounding draft can still be unnatural to a native reader.',
    },
    { type: 'h2', text: 'Mistake 4: losing the brand\'s voice' },
    {
      type: 'p',
      text: 'An AI draft without guidance sounds like every other AI draft. Customers cannot tell your company from the next one, and the posts say nothing only you could say. Fix it before the first prompt, not after the tenth post: write a one-page voice guide with examples of what you do and do not say ([how to define your brand voice](/blog/how-to-define-brand-voice)), and feed in real material that the tool cannot invent: customer questions, your prices, photos, the founder\'s explanations. The workflow is in the [content creation guide](/blog/ai-content-creation-for-marketing).',
    },
    { type: 'h2', text: 'Mistake 5: trusting generic advice and unchecked facts' },
    {
      type: 'p',
      text: 'A language model predicts plausible text. Google\'s guidance says the same in its own words: these tools predict likely word sequences and do not retrieve facts, so what they write can be wrong. Two problems follow for marketing. First, "best practice" advice is generic: it may be right for a US online shop and wrong for a Georgian company with 40 staff and a market of a few million. Second, specifics (prices, regulations, statistics, quotes, competitor claims) may be invented or out of date.',
    },
    {
      type: 'ul',
      items: [
        'Ask for the source of every number and open the source. If there is none, delete the number.',
        'Treat advice as a hypothesis and test it on a small budget before you change the plan. See [ChatGPT for marketing](/blog/chatgpt-for-marketing) for where it helps and where it fails.',
        'Give the tool your own context (market, audience, price level, past results), and tell it to ask when information is missing.',
        'Never publish legal, medical or financial claims on the strength of an AI answer.',
      ],
    },
    { type: 'h2', text: 'Mistake 6: weak data in, weak output out' },
    {
      type: 'p',
      text: 'Automation that scores leads, segments an email list or picks audiences uses what you give it. A CRM with duplicate contacts, missing sources and no record of which leads became customers produces confident but wrong results. Before you add AI to a system, check that:',
    },
    {
      type: 'ul',
      items: [
        'Each contact has a source, a date and a status that someone updates.',
        'Conversions are tracked at the point of sale or enquiry, not only as page visits.',
        'Duplicates are merged and opted-out contacts are flagged so they never receive a message.',
        'You know who is allowed to put customer data into an outside AI tool, and which data may not go in at all. Do not paste customer lists or personal details into a tool you have not approved.',
      ],
    },
    { type: 'h2', text: 'Mistake 7: giving a bot unlimited authority with customers' },
    {
      type: 'p',
      text: 'In February 2024 the British Columbia Civil Resolution Tribunal decided the case of a man who was told by an airline\'s website chatbot that he could claim a bereavement fare after travelling, when the airline\'s own policy page said otherwise. According to a [law firm summary](https://www.torkin.com/insights/publication/bc-tribunal-confirms-companies-remain-liable-for-ai-chatbot-created-information) of Moffatt v. Air Canada, the tribunal held that the chatbot was part of the airline\'s website, that the airline was responsible for what it said, and awarded about 650 dollars in damages, plus interest and fees. It was a decision of one provincial tribunal, so it is not binding law everywhere, but the practical point is the same for any company: what your bot says is what you said.',
    },
    {
      type: 'ul',
      items: [
        'Limit the bot to approved sources (your price list, FAQs, policies) and tell it to hand over to a person when it is unsure.',
        'Do not let it promise discounts, refunds, delivery dates or legal terms.',
        'Read a sample of real conversations every week during the first month; [AI chatbot benefits](/blog/ai-chatbot-benefits) covers what a chatbot can reasonably take on.',
        'Make the human handover easy to reach and fast.',
      ],
    },
    { type: 'h2', text: 'A pre-launch checklist' },
    {
      type: 'ol',
      items: [
        'The process works by hand, has an owner and a written definition of success.',
        'The result you will measure (not the output) is chosen, with the figure from before AI.',
        'A named person reviews everything before it is published or sent, in the right language.',
        'A voice guide and real source material are in the prompt.',
        'Every fact, number and quote has a source that someone has opened.',
        'The data the tool uses is clean, tracked and allowed to be used.',
        'Customer-facing automation has approved sources, limits on promises, a handover to a person and weekly review.',
        'There is a date, usually 30 days, to compare results and switch it off if it did not help.',
      ],
    },
    {
      type: 'p',
      text: 'WakeUP builds chatbots and lead automations with handover to a person and reporting - see the [AI automation service](/services/ai-automation). To have your current marketing process and tools looked at before adding AI, request the [free marketing audit](/audit).',
    },
  ],
}
