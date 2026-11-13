import type { BlogPost } from '@/lib/blog'

export const post: BlogPost = {
  locale: 'en',
  slug: 'ai-voice-agent-cost',
  title: 'AI voice agent cost: what one minute of a call really costs',
  metaTitle: 'AI Voice Agent Cost per Minute',
  description:
    'AI voice agent cost per minute: Retell lists $0.07-$0.31, Vapi about $0.08-$0.13. See the parts, a monthly example and Georgia call rates.',
  publishedAt: '2026-11-13T17:00:00+04:00',
  updatedAt: '2026-11-13T17:00:00+04:00',
  service: 'calling',
  reviewState: 'llm_reviewed',
  body: [
    {
      type: 'p',
      text: 'AI voice agent cost is mostly a per-minute price. In November 2026, [Retell AI lists $0.07-$0.31 per minute](https://www.retellai.com/pricing) and [Vapi\'s own example](https://vapi.ai/pricing) works out to roughly $0.08-$0.13 per minute before phone-carrier charges. The spread comes from the language model and voice you pick. Set-up, phone numbers and the cost of the call itself come on top.',
    },
    { type: 'h2', text: 'What makes up AI voice agent cost per minute' },
    {
      type: 'p',
      text: 'A voice agent is several services chained together, and each one bills by the minute or by usage. Most platforms show them as separate lines:',
    },
    {
      type: 'ul',
      items: [
        'Speech-to-text (transcriber): turns the caller\'s speech into text.',
        'The language model (LLM): decides what to say. This is the most variable line.',
        'Text-to-speech (voice): speaks the answer. Premium voices cost several times more than basic ones.',
        'Telephony: the carrier that connects the call to a real phone number.',
        'Platform fee: what the orchestration platform charges to run it all.',
      ],
    },
    { type: 'h2', text: 'What vendors list, November 2026' },
    {
      type: 'p',
      text: 'The figures below were read from each vendor\'s public pricing page on 13 November 2026. Prices change, so check the page before you budget. The amounts are in US dollars per minute unless noted.',
    },
    {
      type: 'table',
      head: ['Part', 'Vapi', 'Retell AI'],
      rows: [
        ['Platform / voice infrastructure', '$0.05 hosting fee', '$0.055 voice engine'],
        ['Speech-to-text', '$0.0095-$0.0099 (Deepgram)', 'Not listed separately'],
        ['LLM', '$0.0077-$0.0452 (OpenAI), at cost', '$0.0016-$0.32 at standard speed, up to $0.64 on fast tiers, depending on model; for example $0.008 for GPT 5 mini'],
        ['Text-to-speech', '$0.0146-$0.0238 (ElevenLabs)', '$0.015 for Retell and several other voices; ElevenLabs $0.040-$0.10'],
        ['Telephony', 'Free over Vapi SIP; Twilio $0.008 in, $0.014 out; Telnyx $0.0055', '$0.015, varies by country; custom telephony has no call charge'],
        ['Headline range', 'About $0.08-$0.13 in Vapi\'s 1,000-minute example', '$0.07-$0.31'],
      ],
    },
    {
      type: 'p',
      text: '[ElevenLabs](https://elevenlabs.io/pricing/api) takes a different approach for its Speech Engine, a single agent pipeline at $0.08 per minute. Its page does not say how the LLM is billed in that product, and it lists no telephony pricing, so you cannot total a phone call from that page alone.',
    },
    { type: 'h2', text: 'Phone numbers, concurrency and add-ons' },
    {
      type: 'p',
      text: 'The per-minute line is not the whole bill. The same pricing pages list fixed and optional charges:',
    },
    {
      type: 'ul',
      items: [
        'Phone numbers: Retell lists $2.00 a month per number and $10.00 for a verified number. Vapi bundles numbers into plans: 1 on the no-subscription tier and 5 on Core at $29 a month.',
        'Concurrency, meaning calls at the same time: Retell includes 20 and charges $8.00 per extra call per month. Vapi includes 4 on its entry tier and sells extra lines at $10 a month.',
        'Add-ons on Retell, per minute: knowledge base $0.005, safety guardrails $0.005, PII removal $0.01. Batch outbound calling adds $0.005 per dial.',
        'Compliance: Vapi lists HIPAA compliance at $2,000 a month. Most businesses will not need it.',
      ],
    },
    { type: 'h2', text: 'Calls to Georgian numbers can cost more than the AI' },
    {
      type: 'p',
      text: 'If the agent will call people in Georgia, look at the carrier rate. [Twilio\'s Georgia voice pricing page](https://www.twilio.com/en-us/voice/pricing/ge) listed on 13 November 2026 outbound calls at $0.3662 per minute to Georgian local numbers and $0.4727 per minute to Georgian mobiles. That is about six times the $0.078 low-cost AI stack in the worked example below, and more than the top of Retell\'s $0.07-$0.31 range. The same page does not state an inbound rate for Georgian local or mobile numbers, and its Georgia-specific monthly number prices sit in a downloadable file, so ask for those before you plan inbound volume.',
    },
    {
      type: 'p',
      text: 'Other carriers price differently, and some platforms bundle telephony. Whichever route you take, get the per-minute rate to Georgian mobiles in writing.',
    },
    { type: 'h2', text: 'A worked monthly estimate' },
    {
      type: 'p',
      text: 'This is an example of arithmetic, not a quote. It uses the rates above, assumes 1,000 minutes a month, and picks Retell\'s low-cost combination: voice engine $0.055, Retell voice $0.015 and GPT 5 mini at $0.008 per minute.',
    },
    {
      type: 'table',
      head: ['Line', 'Per minute', 'For 1,000 minutes'],
      rows: [
        ['Voice engine', '$0.055', '$55.00'],
        ['Text-to-speech (Retell voice)', '$0.015', '$15.00'],
        ['LLM (GPT 5 mini)', '$0.008', '$8.00'],
        ['AI stack subtotal', '$0.078', '$78.00'],
        ['Inbound telephony at Retell\'s $0.015 (varies by country)', '$0.015', '$15.00'],
        ['One Retell phone number', 'n/a', '$2.00'],
        ['Total, inbound example', 'n/a', '$95.00'],
        ['Outbound to Georgian mobiles via Twilio at $0.4727 instead of Retell telephony', '$0.4727', '$472.70'],
        ['Total, outbound example (AI stack plus Twilio rate plus number)', 'n/a', '$552.70'],
      ],
    },
    {
      type: 'p',
      text: 'The outbound row assumes custom telephony brought from your own carrier, which Retell\'s page lists without a call charge. The total keeps the $2.00 Retell number to stay on the safe side, although the page also lists custom phone numbers at no charge, so check which applies to you. Whether other carrier fees apply in that setup depends on the carrier, and the pages above do not say. Scale the figures linearly: 3,000 minutes triples each line except the number. Choose a premium voice or a larger model and the AI stack alone moves toward the top of the $0.07-$0.31 range.',
    },
    { type: 'h2', text: 'Languages and set-up cost' },
    {
      type: 'p',
      text: 'Language support depends on the voice model, not only the platform. Vapi\'s documentation for ElevenLabs voices lists [Georgian only for the Eleven v3 model](https://docs.vapi.ai/providers/voice/elevenlabs), not for Flash v2, Flash v2.5 or Multilingual v2. Retell prices ElevenLabs voices higher ($0.040-$0.10 per minute) than its own. We did not verify Georgian speech-to-text support or call-quality results for any provider, so listen to test calls in Georgian before you commit to a vendor.',
    },
    {
      type: 'p',
      text: 'The pricing pages describe platforms, not finished agents. Writing the script, connecting a calendar or CRM, handling transfers to a person and testing all take work, and that work is a separate cost whether you do it in-house or hire it. If you also want to compare the agent against staffing a team, see [AI call center cost](/blog/ai-call-center-cost). For text-based assistants, see [AI chatbot cost](/blog/ai-chatbot-cost).',
    },
    { type: 'h2', text: 'What to ask before you buy' },
    {
      type: 'ol',
      items: [
        'Which voice and LLM does the quoted per-minute price assume, and what does a better one cost?',
        'What is the carrier rate per minute to Georgian mobiles and landlines, in and out?',
        'How many calls will run at once at your busiest hour, and what does that concurrency cost?',
        'Who builds, tests and updates the call script, and is that priced separately?',
        'Are recordings, transcripts and CRM sync included?',
      ],
    },
    {
      type: 'p',
      text: 'On consent and disclosure: calling only people who agreed to be contacted, and having the agent say at the start that it is automated, is good practice. WakeUP\'s [AI calling service](/services/ai-calling) page commits to both. Check the rules in Georgia and in each country you call before you launch. If you want a view on where voice automation would pay off in your sales process, the [free marketing audit](/audit) covers it.',
    },
  ],
}
