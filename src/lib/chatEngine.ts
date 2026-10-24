import { isEmail } from './leads'

/**
 * Scripted, frontend-only assistant. Swap `reply` for a real API call later —
 * the Chat UI only depends on the BotTurn shape.
 */

export type Stage = 'idle' | 'ask_name' | 'ask_email' | 'ask_goal' | 'done'

export type LeadDraft = { name?: string; email?: string; goal?: string }

export type BotTurn = {
  messages: string[]
  chips?: string[]
  stage: Stage
  lead?: LeadDraft
  submit?: boolean
}

export const MAIN_CHIPS = ['Start a project', 'Services', 'Pricing', 'How it works', 'Results']

export const GREETING: BotTurn = {
  messages: [
    'Hey, I’m WakeUP AI — the agency’s always-on assistant.',
    'I can walk you through our services, pricing and process, or get your project in front of a strategist. What’s on your mind?',
  ],
  chips: MAIN_CHIPS,
  stage: 'idle',
}

const esc = (w: string) => w.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
// matches words (or word prefixes) starting at a word boundary, so "ads" doesn't fire on "leads"
const has = (t: string, ...words: string[]) => words.some((w) => new RegExp(`\\b${esc(w)}`).test(t))
const hasWord = (t: string, ...words: string[]) => words.some((w) => new RegExp(`\\b${esc(w)}\\b`).test(t))

export function reply(input: string, stage: Stage, lead: LeadDraft): BotTurn {
  const text = input.trim()
  const t = text.toLowerCase()

  if (has(t, 'cancel', 'stop', 'never mind', 'nevermind') && stage !== 'idle' && stage !== 'done') {
    return { messages: ['No problem — cancelled. Anything else I can help with?'], chips: MAIN_CHIPS, stage: 'idle', lead: {} }
  }

  // lead capture flow
  if (stage === 'ask_name') {
    const name = text.replace(/^(i am|i'm|my name is|it's|this is)\s+/i, '').slice(0, 60)
    if (name.length < 2) return { messages: ['What should I call you?'], stage, lead }
    return {
      messages: [`Nice to meet you, ${name.split(' ')[0]}. What’s the best email to reach you?`],
      stage: 'ask_email',
      lead: { ...lead, name },
    }
  }
  if (stage === 'ask_email') {
    if (!isEmail(text)) {
      return { messages: ['Hmm, that doesn’t look like an email. Could you double-check it?'], stage, lead }
    }
    return {
      messages: ['Got it. Last one: in a sentence, what do you want marketing to do for you?'],
      chips: ['More sales online', 'More leads', 'Brand awareness', 'New website'],
      stage: 'ask_goal',
      lead: { ...lead, email: text },
    }
  }
  if (stage === 'ask_goal') {
    return {
      messages: ['Transmitting your request to the team…'],
      stage: 'done',
      lead: { ...lead, goal: text },
      submit: true,
    }
  }

  if (has(t, 'start', 'project', 'quote', 'audit', 'hire', 'work with', 'proposal', 'get started')) {
    return {
      messages: [
        'Let’s do it. Three quick questions and a strategist will reach out within one business day — with a free mini-audit.',
        'First — what’s your name?',
      ],
      stage: 'ask_name',
      lead: {},
    }
  }
  if (has(t, 'price', 'pricing', 'cost', 'budget', 'how much', 'expensive', 'rate')) {
    return {
      messages: [
        'As a guide: one-off launch projects start from ₾5k, and most mid-sized clients are on a monthly plan of ₾4k–10k plus ad spend. Minimum term is 3 months, then month to month.',
        'The free audit tells you exactly what you’d need — want one?',
      ],
      chips: ['Start a project', 'What’s included?', 'How it works'],
      stage: 'idle',
    }
  }
  if (has(t, 'service', 'what do you do', 'offer', 'included', 'help with')) {
    return {
      messages: [
        'Six things under one plan: paid media · brand & positioning · content & social · websites & landing pages · SEO · analytics, CRM & automation. Built for companies with roughly 20–250 people.',
        'Most clients combine 2–3 of them. Which one matters most to you right now?',
      ],
      chips: ['Performance ads', 'Social media', 'Website', 'SEO'],
      stage: 'idle',
    }
  }
  if (has(t, 'ads', 'meta', 'facebook', 'instagram', 'google', 'tiktok', 'performance', 'ppc')) {
    return {
      messages: [
        'Performance is our core. We build creative + targeting + landing page as one system, test weekly, and report on revenue — not likes.',
        'Typical first-90-day focus: fix tracking, find winning creatives, then scale spend on what’s profitable.',
      ],
      chips: ['Start a project', 'Results', 'Pricing'],
      stage: 'idle',
    }
  }
  if (has(t, 'social', 'content', 'reels', 'smm', 'creator', 'influenc')) {
    return {
      messages: [
        'We plan, shoot and publish scroll-stopping content, manage your community and work with creators — all tied to clear growth goals.',
      ],
      chips: ['Start a project', 'Pricing', 'Services'],
      stage: 'idle',
    }
  }
  if (has(t, 'web', 'site', 'landing', 'page', 'shop', 'store')) {
    return {
      messages: [
        'We design and build fast, conversion-focused websites and landing pages — usually live in 3–6 weeks, fully tracked from day one.',
      ],
      chips: ['Start a project', 'Pricing', 'How it works'],
      stage: 'idle',
    }
  }
  if (has(t, 'seo', 'google ranking', 'organic', 'search')) {
    return {
      messages: [
        'SEO is our long game: technical fixes first, then content that targets what your customers actually search. Expect momentum within 3–4 months.',
      ],
      chips: ['Start a project', 'Services'],
      stage: 'idle',
    }
  }
  if (has(t, 'how it works', 'process', 'timeline', 'how long', 'steps', 'onboard')) {
    return {
      messages: [
        '01 Scan — we audit your brand, funnel and competitors.\n02 Strategy — channels, messaging, budget and KPIs.\n03 Launch — creative and campaigns go live, fast.\n04 Scale — double down on what works, weekly reports.',
        'Most clients are live within 2–3 weeks of kickoff.',
      ],
      chips: ['Start a project', 'Pricing'],
      stage: 'idle',
    }
  }
  if (has(t, 'result', 'case', 'portfolio', 'example', 'client', 'proof', 'roas')) {
    return {
      messages: [
        'A few recent outcomes: +212% online revenue for a 180-person retailer, 6.2x ROAS for a hospitality group, and −41% cost per qualified lead for a 90-person B2B firm.',
        'Want to see what’s realistic for your business?',
      ],
      chips: ['Start a project', 'How it works'],
      stage: 'idle',
    }
  }
  if (has(t, 'human', 'person', 'call', 'meeting', 'talk', 'contact', 'email', 'phone', 'reach')) {
    return {
      messages: ['Happy to put you in touch with a strategist. I just need a couple of details.', 'What’s your name?'],
      stage: 'ask_name',
      lead: {},
    }
  }
  if (hasWord(t, 'hi', 'hello', 'hey', 'yo', 'good morning', 'good evening')) {
    return { messages: ['Hey! What can I help you with today?'], chips: MAIN_CHIPS, stage: 'idle' }
  }
  if (has(t, 'thank', 'thx', 'cheers', 'great', 'cool', 'awesome')) {
    return { messages: ['Anytime. Stay awake ✕'], chips: MAIN_CHIPS, stage: 'idle' }
  }

  return {
    messages: [
      'Good question — that’s one a strategist can answer precisely for your business.',
      'Want me to connect you, or explore something else?',
    ],
    chips: ['Start a project', 'Services', 'Pricing'],
    stage: 'idle',
  }
}
