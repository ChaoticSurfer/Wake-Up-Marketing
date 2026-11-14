import type { BlogPost } from '@/lib/blog'

export const post: BlogPost = {
  locale: 'en',
  slug: 'what-is-ai-voice-agent',
  title: 'What is an AI voice agent? How it works and where it fits',
  metaTitle: 'What Is an AI Voice Agent? How It Works',
  description:
    'What is an AI voice agent? Software that holds spoken phone calls, understands requests and takes actions. How it works, what it handles and the rules.',
  publishedAt: '2026-11-14T13:00:00+04:00',
  updatedAt: '2026-11-14T13:00:00+04:00',
  service: 'calling',
  reviewState: 'llm_reviewed',
  body: [
    {
      type: 'p',
      text: 'What is an AI voice agent? It is software that holds a spoken conversation, usually over the phone. It listens to the caller, works out what they want, and answers in a synthetic voice. Unlike a phone menu where you press 1 or 2, it understands free speech, and it can also act during the call, for example by checking a calendar or booking an appointment.',
    },
    { type: 'h2', text: 'How an AI voice agent works' },
    {
      type: 'p',
      text: 'ElevenLabs\' agent documentation says its platform [coordinates four core components](https://elevenlabs.io/docs/agents-platform/overview): speech recognition, a language model, speech output and a turn-taking model. Most voice agents follow the same pattern, whatever the vendor.',
    },
    {
      type: 'ol',
      items: [
        'Speech-to-text turns the caller\'s audio into words as they speak.',
        'The language model reads those words plus the conversation so far and your business information, then decides what to say or which tool to call, such as a booking system.',
        'Text-to-speech turns the reply into audio and plays it to the caller.',
        'Turn-taking decides when the caller has finished, when a pause is just a pause, and what to do if the caller interrupts.',
      ],
    },
    {
      type: 'p',
      text: 'Turn-taking and speed are what make a call feel natural or awkward. ElevenLabs says in its own [guide](https://elevenlabs.io/blog/what-is-an-ai-voice-agent) that time to first audio is typically under one second across the full pipeline. That is a vendor claim about its own product, so listen to a test call on a real phone line before you trust any number.',
    },
    { type: 'h2', text: 'AI voice agent vs IVR phone menu' },
    {
      type: 'table',
      head: ['', 'IVR phone menu', 'AI voice agent'],
      rows: [
        ['What the caller does', 'Presses keys or says fixed phrases', 'Speaks freely, in their own words'],
        ['What it can do', 'Routes the call to a queue or plays a message', 'Answers questions and can act, for example check a calendar or book'],
        ['How it fails', 'Dead ends when the caller\'s need is not on the menu', 'Can mishear or give a wrong answer, so it needs a clear handover to a person'],
      ],
    },
    { type: 'h2', text: 'Two ways to build one' },
    {
      type: 'p',
      text: 'OpenAI\'s [voice agents guide](https://developers.openai.com/api/docs/guides/voice-agents) describes two designs. In the first, speech-to-speech, you "use one model to interpret audio, decide what to do, and respond in speech". In the second, a chained pipeline, your application runs speech-to-text, the agent logic and text-to-speech as separate stages.',
    },
    {
      type: 'table',
      head: ['', 'Speech-to-speech', 'Chained pipeline'],
      rows: [
        ['How it works', 'One model handles audio in and audio out', 'Three stages: transcribe, think, speak'],
        ['Main advantage', 'One integrated loop that handles turns and interruptions', 'You can inspect the text at each stage and swap any component'],
        ['Main cost', 'You cannot look at the intermediate text', 'You run and tune the orchestration'],
      ],
    },
    {
      type: 'p',
      text: 'The chained design lets you, in OpenAI\'s example, store the transcript, run policy checks before the agent answers and generate speech only after an approved answer. For a business that wants recordings and written transcripts in its CRM, that visibility matters. For what each part costs per minute, see our [AI voice agent cost breakdown](/blog/ai-voice-agent-cost).',
    },
    { type: 'h2', text: 'What it does on inbound and outbound calls' },
    {
      type: 'p',
      text: 'Vendor guides ([Aircall](https://aircall.io/blog/what-is-an-ai-voice-agent/), [OnceHub](https://www.oncehub.com/blog/what-is-an-ai-voice-agent-the-complete-business-guide)) list the same everyday jobs:',
    },
    {
      type: 'ul',
      items: [
        'Inbound: answering common questions, routing callers by what they ask for instead of menu options, taking bookings and handling out-of-hours calls.',
        'Outbound: calling a new enquiry to qualify it, sending reminders, running short feedback surveys.',
        'After the call: writing a summary or updating the CRM, and passing a ready buyer to a person.',
      ],
    },
    {
      type: 'p',
      text: 'This is also how [WakeUP\'s AI calling service](/services/ai-calling) is described: an agent that answers inbound calls, calls new leads within minutes of an enquiry, qualifies them and books meetings for your sales team. For how it compares with a human team, read [AI call center cost](/blog/ai-call-center-cost). A voice agent is a close relative of a chatbot but works differently in practice; see [chatbot vs AI agent](/blog/chatbot-vs-ai-agent).',
    },
    { type: 'h2', text: 'What it does well and what it does badly' },
    {
      type: 'p',
      text: 'It suits high volumes of repetitive, predictable calls. Aircall says AI is best suited to repetitive, straightforward tasks and cannot replace all human agents. OnceHub names the weak spots:',
    },
    {
      type: 'ul',
      items: [
        'Slang, confusing phrasing or sudden topic changes can make it misread the request.',
        'It handles angry or distressed callers poorly, so those calls need a route to a person.',
        'Generative models can invent facts. OnceHub recommends grounding the agent in approved business documents.',
        'Slow replies and missed interruptions quickly frustrate callers.',
      ],
    },
    {
      type: 'p',
      text: 'The practical rule: let the agent do the routine part of the call, and make handing over to a person easy at any point.',
    },
    { type: 'h2', text: 'Georgian language and Georgian numbers: test before you commit' },
    {
      type: 'p',
      text: 'Whether an agent speaks good Georgian depends on the speech-to-text, language model and voice it uses, and vendors differ. Support can differ from one platform or voice model to the next, so do not accept a vendor\'s language count as proof. Ask for a live test call in Georgian, with place names, phone numbers and mixed Georgian-English sentences, on a Georgian mobile number. For the cost of calling Georgian numbers, see [AI voice agent cost](/blog/ai-voice-agent-cost).',
    },
    { type: 'h2', text: 'Consent, recording and telling callers it is a machine' },
    {
      type: 'p',
      text: 'Outbound calls are where the rules bite. Georgia\'s [Law on Personal Data Protection](https://matsne.gov.ge/en/document/view/5827307) defines consent as freely and unambiguously expressed after receiving the relevant information, given by an active action (Article 3). For direct marketing, Article 12 says personal data may be processed only with the person\'s consent. It also requires that people are told they can withdraw at any time, that marketing processing stops within a reasonable period and no later than 7 working days after a request, and that the company can prove it had consent and keeps a record of it. Article 19 gives people the right not to be subject to a decision based solely on automated processing where it has legal or similarly significant effects, with some exceptions. Routine call handling is unlikely to qualify, but if the agent ever approves, refuses or prices anything, ask a lawyer whether this applies. This is a plain-language summary, not legal advice. Call recording, data transfers and how long you keep data also need checking, so have a Georgian lawyer look at your set-up before you launch.',
    },
    {
      type: 'p',
      text: 'If you call people in the United States: in an [8 February 2024 announcement](https://docs.fcc.gov/public/attachments/DOC-400393A1.txt), the FCC said that calls using AI-generated voices count as "artificial" voices under the TCPA, so the same standards apply, including prior express written consent for telemarketing. Check the full ruling and your state\'s rules with a US lawyer before calling. Whatever the country, the safe practice is to call only people who agreed to hear from you and to tell them at the start that the caller is an automated assistant.',
    },
    { type: 'h2', text: 'How to start' },
    {
      type: 'ol',
      items: [
        'Pick one narrow job, such as answering after-hours calls or calling new form leads.',
        'List the questions and actions it must handle, and the cases where it must pass the call to a person.',
        'Run test calls in the language and on the number types your customers use.',
        'Check consent, recording and disclosure with a lawyer.',
        'Review recordings and transcripts every week and fix what it gets wrong.',
      ],
    },
    {
      type: 'p',
      text: 'If you are not sure whether your calls suit automation, our [free audit](/audit) looks at your sales process, including what happens to a lead after it arrives.',
    },
  ],
}
