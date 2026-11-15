import type { BlogPost } from '@/lib/blog'

export const post: BlogPost = {
  locale: 'en',
  slug: 'how-to-write-a-brand-story',
  title: 'How to write a brand story for your About page and sales deck',
  metaTitle: 'How to Write a Brand Story',
  description:
    'How to write a brand story: a short origin-plus-purpose structure for your About page and sales decks, with a template and a three-person test.',
  publishedAt: '2027-02-20T15:00:00+04:00',
  updatedAt: '2027-02-20T15:00:00+04:00',
  service: 'branding',
  reviewState: 'llm_reviewed',
  body: [
    {
      type: 'p',
      text: 'To write a brand story, keep it short and build it from two parts: where the company came from (the origin) and what it stands for today (the purpose). Name a real problem, say what you did about it, say who it is for and what changes for them. Aim for 150 to 250 words that can sit on your About page and be told aloud in a sales meeting, then test it on three people before you publish it.',
    },
    { type: 'h2', text: 'What a brand story is, and what it is not' },
    {
      type: 'p',
      text: 'A brand story is the short account of why your company exists and why a customer should care. It is not a company history with every date, not a list of awards, and not a mission statement made of abstract words. It is what you would say if a stranger at an event asked "so how did this start?" and you had a minute.',
    },
    {
      type: 'p',
      text: 'It is also separate from your [brand voice](/blog/how-to-define-brand-voice), which is how you sound, and from your [brand guidelines](/blog/how-to-create-brand-guidelines), which are the rules for using the logo, colours and wording. The story is the content those rules help you present. For the wider picture, see [what is branding](/blog/what-is-branding).',
    },
    { type: 'h2', text: 'Why a story and not a list of facts' },
    {
      type: 'p',
      text: 'Jennifer Aaker, a Stanford marketing professor, is quoted on a Stanford resource page with the line: ["Stories are remembered up to 22 times more than facts alone."](https://womensleadership.stanford.edu/tools-resources/voice-influence/harnessing-power-stories) The page gives no study behind the figure, so read it as a strong claim rather than a measured result. The direction is the useful part: a buyer who meets five suppliers will remember the one whose reason for existing was easy to retell.',
    },
    { type: 'h2', text: 'The structure: five short beats' },
    {
      type: 'p',
      text: 'Stanford’s advice on building a story, from the same page, includes giving it a protagonist, a clear challenge with something at stake, and an arc showing what the protagonist goes through. Applied to a company, that gives five beats:',
    },
    {
      type: 'ol',
      items: [
        'The moment. One specific situation that started it: a problem you ran into as a customer, an employee or a founder. Concrete beats general.',
        'The problem. What was wrong with how things were done, and who suffered because of it.',
        'What you did. The thing you started doing differently, in plain words and without product jargon.',
        'Who it is for. The customer you are now serving and what changes for them.',
        'Where it is going. One sentence that commits the company to something it will keep doing.',
      ],
    },
    {
      type: 'p',
      text: 'The customer should be the one who wins at the end, not the company. Printful’s [guide to brand stories](https://www.printful.com/blog/brand-story) makes a similar point when it advises thinking about benefits, not features, and making sure your behaviour matches the story, since "the truth always comes out in the end".',
    },
    { type: 'h2', text: 'A fill-in template and an invented example' },
    {
      type: 'p',
      text: 'Use this frame and delete anything that does not help the reader:',
    },
    {
      type: 'ul',
      items: [
        'In [year/situation], [who] noticed that [specific problem].',
        'Most [companies/people] handled it by [usual way], which meant [cost to the customer].',
        'So we started [what you do differently].',
        'Today we work with [customer type], so that they can [outcome].',
        'We keep doing it because [belief or promise].',
      ],
    },
    {
      type: 'p',
      text: 'An invented example for a fictional furniture workshop in Tbilisi: "Nino spent six years fitting offices and kept seeing the same thing: desks arrived late, in the wrong size, and nobody picked up the phone afterwards. Most suppliers treat the delivery as the end of the job. We treat it as the start. Today we make office furniture for companies of 20 to 250 people and stay on site until everything fits. We do it because a workplace should be ready on the first Monday, not the third." That is under 80 words, and the first sentence is specific enough to be remembered. Replace the details with your own true ones; never invent a founder moment you do not have.',
    },
    { type: 'h2', text: 'Where to use it' },
    {
      type: 'p',
      text: 'The About page is the obvious home for the full story, but Printful warns that if it is the only place the story appears, you are in trouble; it suggests carrying the values into product descriptions, marketing copy, social media and newsletters. For a business that sells to other companies, add two more places:',
    },
    {
      type: 'ul',
      items: [
        'The sales deck: put a short version (two or three sentences) on the slide after the title, before any service list. It tells the buyer why you are not interchangeable.',
        'The proposal and email signature page: one line that reuses the purpose beat, so the story is present even when no one reads the About page.',
        'Short video: a story told by the founder to camera lets buyers hear the tone as well as read the words. WakeUP scripts, shoots and edits short videos, as described on its [video production page](/services/video-production).',
      ],
    },
    {
      type: 'p',
      text: 'Keep the wording stable across these places. If the About page says one thing and the deck says another, buyers notice the gap.',
    },
    { type: 'h2', text: 'Test it with three people' },
    {
      type: 'p',
      text: 'The Stanford page above also suggests testing the story: tell it to others and ask whether it changed their view, where their "ah ha" moments came and what did not make sense. Do that with three people before you publish, and pick them to differ:',
    },
    {
      type: 'ol',
      items: [
        'A customer or a person from your target audience. Ask: what would you say this company does, and for whom?',
        'Someone who does not know your industry. Ask: which part lost you?',
        'A colleague who was there from the start. Ask: is anything here untrue or exaggerated?',
      ],
    },
    {
      type: 'p',
      text: 'Do not explain while you test; read it or tell it once, then ask. If all three repeat the same core idea back in their own words, the story works. If they remember different things, you have too many points: cut until one idea is left. If the customer cannot say who it is for, rewrite the fourth beat first.',
    },
    { type: 'h2', text: 'Mistakes to avoid' },
    {
      type: 'ul',
      items: [
        'Starting with "Founded in" and a date. Start with the situation instead.',
        'Adjectives in place of events: "passionate", "innovative", "customer-first". Replace each with something that happened.',
        'Making the founder the hero when the customer should be.',
        'Claims you cannot support. A story that sounds invented is worse than none.',
        'Writing it once and never revisiting it after the company changes direction.',
      ],
    },
    {
      type: 'p',
      text: 'If the story is hard to write because the company’s positioning is unclear, that is a branding question rather than a writing one. WakeUP’s [branding and positioning service](/services/branding) covers positioning, messaging and guidelines, and the free [marketing audit](/audit) is a low-commitment place to start.',
    },
  ],
}
