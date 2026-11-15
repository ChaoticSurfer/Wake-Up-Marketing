import type { BlogPost } from '@/lib/blog'

export const post: BlogPost = {
  locale: 'en',
  slug: 'how-to-define-brand-voice',
  title: 'How to define brand voice and tone: a step-by-step method with example rewrites',
  metaTitle: 'How to Define Brand Voice and Tone',
  description:
    'How to define brand voice and tone: pick three or four traits, write "we are X, not Y" lines, test them on rewrites and set how tone shifts by situation.',
  publishedAt: '2027-01-31T12:00:00+04:00',
  updatedAt: '2027-01-31T12:00:00+04:00',
  service: 'branding',
  reviewState: 'llm_reviewed',
  body: [
    {
      type: 'p',
      text: 'To define brand voice and tone, choose three or four personality traits that describe how your company writes, turn each into a "we are X, but not Y" line, and test them by rewriting real sentences from your website and messages. Voice is the constant personality. Tone is how it adjusts to the moment: a product launch sounds different from an apology, but both should sound like the same company.',
    },
    {
      type: 'p',
      text: 'Most companies skip this and end up with a website in one style, social media in another and invoices in a third. This guide is the working method. It sits inside the wider job of [creating brand guidelines](/blog/how-to-create-brand-guidelines), and the voice definition you write here is the section that goes into them.',
    },
    { type: 'h2', text: 'Voice and tone: the difference' },
    {
      type: 'p',
      text: '[Mailchimp\'s public style guide](https://styleguide.mailchimp.com/voice-and-tone/) puts it briefly: "You have the same voice all the time, but your tone changes." It also says tone changes with the emotional state of the person you are addressing, so you first think about how the reader feels and then adjust. Voice is who you are; tone is how that comes across in this moment.',
    },
    {
      type: 'table',
      head: ['', 'Voice', 'Tone'],
      rows: [
        ['What it is', 'The personality behind everything you write', 'The mood of one message'],
        ['How often it changes', 'Rarely, when the brand changes', 'Every message, depending on reader and situation'],
        ['Example', 'Plain, warm, precise', 'Upbeat in a launch post; calm and careful in a reply to a complaint'],
        ['Who sets it', 'The company, once, in writing', 'The writer, within the voice, each time'],
      ],
    },
    { type: 'h2', text: 'Step 1: collect how you already sound' },
    {
      type: 'p',
      text: 'Start from evidence, not from adjectives you wish were true. Gather ten to twenty real pieces: homepage text, a proposal, a few replies to customers, social captions, an email you were proud of and one you were not. Highlight the lines that sound like the best version of your company and cross out the ones that could belong to anybody.',
    },
    {
      type: 'p',
      text: 'Then ask two or three customers and colleagues how they would describe the company in three words. [Frontify\'s guide on brand tone](https://www.frontify.com/en/blog/brand-tone-of-voice/) suggests the same groundwork: talk to the people who know the brand, research the audience and review competitors\' voices to find the gaps. If every competitor sounds formal and distant, that is room for a different voice, as long as it is true to you.',
    },
    { type: 'h2', text: 'Step 2: choose three or four traits' },
    {
      type: 'p',
      text: 'Pick three or four traits, no more. Longer lists blur and nobody remembers them. A useful way to find them is the [four dimensions of tone of voice](https://www.nngroup.com/articles/tone-of-voice-dimensions/) described by Kate Moran of the Nielsen Norman Group. Each dimension is a scale, not a switch:',
    },
    {
      type: 'ul',
      items: [
        'Formal vs. casual',
        'Serious vs. funny',
        'Respectful vs. irreverent',
        'Matter-of-fact vs. enthusiastic',
      ],
    },
    {
      type: 'p',
      text: 'Mark where you sit on each scale today and where you want to sit. A law firm and a street-food brand will land in very different places, and both can be right. Then name the traits in words your team will use: for example "direct", "warm", "precise", "dry". Trait names should be things a writer can act on, so "innovative" and "passionate" fail because nobody can tell how to write them.',
    },
    { type: 'h2', text: 'Step 3: write "we are X, but not Y" lines' },
    {
      type: 'p',
      text: 'A trait alone gets misread. "Friendly" can mean warm or it can mean jokey. Pair each trait with its limit so the line says what to do and what to avoid.',
    },
    {
      type: 'table',
      head: ['Trait', 'We are...', '...but not...', 'In practice'],
      rows: [
        ['Direct', 'Clear about price, scope and next step', 'Blunt or cold', 'Say what it costs and when; skip filler openers'],
        ['Warm', 'Friendly and human', 'Chatty or overfamiliar', 'Use the customer\'s name; no slang or forced jokes'],
        ['Precise', 'Specific, with numbers and examples', 'Technical for its own sake', 'Explain a term once, in plain words, and move on'],
        ['Confident', 'Sure of what we do well', 'Boastful', 'Show the result instead of calling ourselves the best'],
      ],
    },
    {
      type: 'p',
      text: 'This is an illustration, not a template to copy. Your Y matters as much as your X: it is where you rule out the mistakes you actually make.',
    },
    { type: 'h2', text: 'Step 4: test with rewrites' },
    {
      type: 'p',
      text: 'A voice is only defined when someone can apply it. Take real sentences and rewrite them. Here are three examples for an invented design studio whose voice is direct, warm and precise. They are for illustration only.',
    },
    {
      type: 'table',
      head: ['Before', 'After', 'What changed'],
      rows: [
        [
          'We are a leading full-service creative solutions provider offering a wide range of innovative services.',
          'We design brand identities and websites for companies with 20 to 250 people.',
          'Vague claims became a specific offer to a specific reader',
        ],
        [
          'Unfortunately, your request cannot be processed at this time.',
          'We cannot start your project this month. The earliest start is 3 March - shall I book it?',
          'Cold refusal became a clear fact plus a next step',
        ],
        [
          'OMG!!! Best deal ever, you\'ll LOVE it!!!',
          'Book a brand audit this month. Here is what it covers.',
          'Hype became a plain offer and a reason to read on',
        ],
      ],
    },
    {
      type: 'p',
      text: 'Do this with ten of your own sentences. If two people rewrite the same line and the results sound like the same company, the voice is defined. If they come out different, the traits are too loose; tighten the "not Y".',
    },
    { type: 'h2', text: 'Step 5: set how tone shifts by situation' },
    {
      type: 'p',
      text: 'Now give the writer room to move. List the situations where your people write most often and say, in a line each, how the tone adjusts while the voice stays. Mailchimp\'s guide notes that clarity matters more than entertainment and that, when in doubt about humour, you should keep a straight face. That rule is worth copying.',
    },
    {
      type: 'table',
      head: ['Situation', 'Reader feels', 'Tone'],
      rows: [
        ['Sales proposal', 'Weighing risk', 'Confident, specific, no pressure'],
        ['Social post', 'Browsing, half attentive', 'Lighter, shorter, one idea; humour only if it fits the voice'],
        ['Customer complaint', 'Annoyed or worried', 'Calm, take responsibility, state the fix and when'],
        ['Error or delay notice', 'Inconvenienced', 'Plain and apologetic, no jargon, say what happens next'],
        ['Good news or launch', 'Curious', 'Warmer and more energetic, still precise'],
      ],
    },
    { type: 'h2', text: 'Writing for Georgian and English audiences' },
    {
      type: 'p',
      text: 'If you write in both Georgian and English, the voice should be one, but the words cannot be a translation. A line that sounds crisp in English can sound abrupt or stiff when moved word for word into Georgian, and the reverse is also true. Write each version natively, from the same traits and the same facts.',
    },
    {
      type: 'ul',
      items: [
        'Decide the form of address once. Georgian has a formal "you" (თქვენ) and an informal one (შენ). Pick the one that matches your voice and audience and use it everywhere, including ads, replies and the website, so the brand does not switch between them. For B2B and first contact, the formal form is the usual safe choice.',
        'Decide which language leads. If one version is written first and the other adapted, the adapted one often feels second-hand. Brief the writer on the traits, not only on the text to translate.',
        'Write the "not Y" lines in both languages. "Warm but not chatty" may need different examples in each, because the signs of chattiness differ.',
        'Keep product and platform names in the form customers know, usually Latin script, and settle spellings once in the guide.',
        'Have a native reader check each language. The [multilingual website best practices](/blog/multilingual-website-best-practices) post covers keeping versions consistent.',
      ],
    },
    { type: 'h2', text: 'What to put in the one-page guide' },
    {
      type: 'ol',
      items: [
        'Three or four traits, each with its "we are X, but not Y" line.',
        'A scale chart: where you sit on formal-casual, serious-funny, respectful-irreverent and matter-of-fact-enthusiastic.',
        'Six to ten before-and-after rewrites from your own material.',
        'A tone-by-situation table like the one above.',
        'Words to use and words to avoid, including the form of address and how to spell your own name.',
        'Language notes for Georgian and English.',
        'An owner, and a review date six months out.',
      ],
    },
    {
      type: 'p',
      text: 'Put it where writers work, and give it to freelancers, agencies and any AI writing tool as part of the brief. Voice that lives only in one person\'s head disappears when that person is busy. For the rest of the brand system it belongs to, see [what is branding](/blog/what-is-branding) and [branding vs brand identity](/blog/branding-vs-brand-identity).',
    },
    {
      type: 'p',
      text: 'If you want help turning your positioning into a voice and applying it across your website, social media and ads, WakeUP\'s [branding and positioning](/services/branding) service covers positioning and key messages, brand guidelines and rollout. To see how your current messaging reads to a new visitor, request the [free marketing audit](/audit).',
    },
  ],
}
