import type { BlogPost } from '@/lib/blog'

export const post: BlogPost = {
  locale: 'en',
  slug: 'chatgpt-for-marketing',
  title: 'How to use ChatGPT for marketing: uses, prompts and limits',
  metaTitle: 'How to Use ChatGPT for Marketing',
  description:
    'How to use ChatGPT for marketing: where it saves time (research, copy, email, content calendars), a prompt structure that works, and where it fails.',
  publishedAt: '2027-01-04T18:00:00+04:00',
  updatedAt: '2027-01-04T18:00:00+04:00',
  service: 'content',
  reviewState: 'llm_reviewed',
  body: [
    {
      type: 'p',
      text: 'To use ChatGPT for marketing, give it a narrow job and the facts it needs: who the audience is, what you sell, and what the text should achieve. It works well for first drafts, variations, outlines and summaries of material you supply. It is unreliable for facts, numbers and your brand voice, so a person must check and edit everything before it is published.',
    },
    { type: 'h2', text: 'Where ChatGPT saves time in marketing' },
    {
      type: 'p',
      text: 'The pattern is the same everywhere: the tool is fast at producing a rough version and at reshaping text you already have. It is weak at knowing things about your company that you have not told it. Use it for the jobs below and keep the decisions with your team.',
    },
    {
      type: 'table',
      head: ['Job', 'Good use', 'Keep with a person'],
      rows: [
        ['Research', 'Summarise a report or competitor page you paste in; list questions customers may ask', 'Checking every figure and claim against the original source'],
        ['Copy', 'Five headline options; a caption cut to 100 words; one message rewritten for three audiences', 'The offer, the price, the final wording'],
        ['Email', 'A draft welcome sequence; subject-line variants to test', 'Who receives it and what you promise'],
        ['Content calendar', 'Turning a list of offers and dates into post ideas for each week', 'Which ideas fit your brand and are actually shootable'],
        ['Repurposing', 'A long article turned into a short outline for a video or carousel', 'Whether the result still says something original'],
      ],
    },
    { type: 'h2', text: 'A prompt structure that works' },
    {
      type: 'p',
      text: 'Vague prompts give generic text. OpenAI\'s own [prompt engineering guide](https://developers.openai.com/api/docs/guides/prompt-engineering) advises giving the model any additional information it might need, showing examples of the output you want, and marking the sections of a prompt clearly. For marketing, that becomes a short checklist you can reuse:',
    },
    {
      type: 'ol',
      items: [
        'Role and task: "You are a copywriter for a B2B software company. Write three subject lines for an email."',
        'Audience: who reads it, what they already know, what worries them.',
        'Product and facts: what you sell, the real offer, the details the text may use. Say "use only these facts".',
        'Goal: one action you want the reader to take, such as booking a demo.',
        'Tone and length: for example, plain and direct, under 120 words, no exclamation marks.',
        'An example: paste one email or post you like and ask for the same style.',
        'Format: a table, a numbered list, or three versions labelled A, B and C.',
      ],
    },
    {
      type: 'p',
      text: 'A weak prompt: "Write a post about our new service." A stronger one: "Audience: HR managers at companies with 50 to 200 employees in Tbilisi. Product: a one-day team workshop (details below). Goal: get a reply asking for dates. Tone: calm, practical, no hype. Write three LinkedIn post drafts of under 100 words each, using only the details below." The second prompt does the thinking a copywriter would otherwise ask you for.',
    },
    { type: 'h2', text: 'Prompts to start with' },
    {
      type: 'ul',
      items: [
        'Research: "Here is a customer survey export. Group the open answers into themes and give two example quotes per theme."',
        'Copy: "Rewrite this product description for a buyer who is comparing three suppliers. Keep every fact, change only the order and tone."',
        'Email: "Draft a three-email sequence for people who downloaded our guide. Email 1 delivers the guide, email 2 answers the most common question, email 3 offers a call."',
        'Calendar: "Here are our offers and dates for February. Suggest four post ideas per week, each tagged as education, proof or offer, and say what we would need to shoot."',
        'Review: "Read this draft as the target reader. List the three places where you would stop reading and why."',
      ],
    },
    {
      type: 'p',
      text: 'For the calendar itself, including the content mix and a monthly cycle, see [how to build a social media content calendar](/blog/social-media-content-calendar). For list building and what to send, see [how to build an email list](/blog/build-email-list).',
    },
    { type: 'h2', text: 'Where ChatGPT fails' },
    {
      type: 'p',
      text: 'Facts are the first problem. A language model produces fluent text, and fluent text can contain a wrong number, a made-up source or an outdated claim without any warning. Google\'s guidance on generative AI content is direct: ["It is critical to manually factcheck and review all AI-generated content for accuracy and trustworthiness before publishing."](https://developers.google.com/search/docs/fundamentals/using-gen-ai-content) Treat every statistic, price, date, law and quotation in a draft as unverified until you have opened the original source.',
    },
    {
      type: 'p',
      text: 'Brand voice is the second problem. Left alone, the tool tends to write in a generic, average style. Counter it with a short voice guide (words you use, words you avoid, two sample paragraphs) pasted into the prompt, then edit the result by hand. It also needs your context: it does not know your customers, your margins or what was promised on last week\'s call.',
    },
    {
      type: 'p',
      text: 'Language is the third. If you publish in Georgian, test the output on a real piece of text and have a native reader review it before it goes out. Fluent-looking Georgian can still be unnatural or wrong, and only a reader can tell.',
    },
    { type: 'h2', text: 'What it means for search and trust' },
    {
      type: 'p',
      text: 'Using AI is not a problem for Google in itself, but publishing text with nothing behind it is. [Google says](https://developers.google.com/search/docs/fundamentals/using-gen-ai-content) that using generative AI tools to generate many pages without adding value for users may violate its spam policy on scaled content abuse. Its [helpful content guidance](https://developers.google.com/search/docs/fundamentals/creating-helpful-content) asks whether content provides original information, reporting, research or analysis. What a model cannot add is your own: your data, your customers\' questions, photos and video of real work. That is where a draft becomes a post worth reading. If you are planning topics for search, start with real data, as described in [keyword research for SEO](/blog/keyword-research-for-seo).',
    },
    { type: 'h2', text: 'A workflow for one piece of content' },
    {
      type: 'ol',
      items: [
        'Decide the audience, the goal and the one point of the piece before opening ChatGPT.',
        'Collect your own material: facts, a customer question, a number from your own records, a photo.',
        'Prompt with the structure above and ask for two or three versions, not one.',
        'Pick the best version, then rewrite it in your voice and cut anything generic.',
        'Check every fact against its source and delete what you cannot confirm.',
        'Publish, look at the results, and put what worked into your next prompt.',
      ],
    },
    {
      type: 'p',
      text: 'If you want to compare ChatGPT with other tools by job, read [AI tools for small business marketing](/blog/ai-tools-for-small-business-marketing). If your team is short on the parts a model cannot do, such as shooting photos and short videos or writing in Georgian and English, WakeUP\'s [content creation](/services/content-creation) service plans, shoots and writes that content. You can also start with a [free marketing audit](/audit) to see which content your business needs first.',
    },
  ],
}
