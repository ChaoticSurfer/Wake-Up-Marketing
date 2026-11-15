import type { BlogPost } from '@/lib/blog'

export const post: BlogPost = {
  locale: 'en',
  slug: 'brand-strategy-framework',
  title: 'Brand strategy framework: the five parts and the order to build them',
  metaTitle: 'Brand Strategy Framework',
  description:
    'A brand strategy framework in five parts - purpose, audience, positioning, messaging and voice - with the order to build them and a one-page template.',
  publishedAt: '2027-02-08T09:00:00+04:00',
  updatedAt: '2027-02-08T09:00:00+04:00',
  service: 'branding',
  reviewState: 'llm_reviewed',
  body: [
    {
      type: 'p',
      text: 'A brand strategy framework is the set of decisions that sit before any logo or colour: why the company exists (purpose), who it serves (audience), where it stands against alternatives (positioning), what it says (messaging) and how it sounds (voice). Build them in that order, because each one depends on the one before. The visual identity comes last and simply expresses the result.',
    },
    { type: 'h2', text: 'What a brand strategy is, and where it sits' },
    {
      type: 'p',
      text: 'Sprout Social defines a brand strategy as [how you approach the work that goes into building and maintaining a positive brand reputation](https://sproutsocial.com/insights/brand-strategy/). Published frameworks differ in how many parts they list. Sprout names purpose and values, voice and personality, visual content and storytelling. Socialinsider\'s [framework](https://www.socialinsider.io/blog/brand-strategy-framework/) goes from purpose and research through audience, positioning, personality and voice and a messaging framework to the visual identity. The shared pattern is: foundations first, expression later.',
    },
    {
      type: 'p',
      text: 'This post covers the foundations. For the vocabulary (brand, branding, identity, logo) see [what is branding](/blog/what-is-branding) and [branding vs brand identity](/blog/branding-vs-brand-identity); for the step after this one, see [how to create brand guidelines](/blog/how-to-create-brand-guidelines).',
    },
    { type: 'h2', text: 'The order and why it matters' },
    {
      type: 'table',
      head: ['Step', 'Component', 'The question it answers', 'It needs'],
      rows: [
        ['1', 'Purpose', 'Why does this company exist beyond making money?', 'The owners\' view'],
        ['2', 'Audience', 'Whom do we serve first, and what are they trying to do?', 'Purpose, and customer conversations'],
        ['3', 'Positioning', 'Why should that audience choose us over the alternatives?', 'Audience and competitor review'],
        ['4', 'Messaging', 'What do we say, and what proof backs it?', 'Positioning'],
        ['5', 'Voice', 'How do we sound when we say it?', 'Messaging and audience'],
        ['6', 'Identity (outside this framework)', 'How does it look?', 'All of the above'],
      ],
    },
    {
      type: 'p',
      text: 'Some published frameworks, such as Socialinsider\'s, put voice before messaging. Either works as long as both come after positioning. Skipping ahead is the usual mistake: designing a logo before positioning means the design has nothing to express, and writing taglines before choosing an audience produces lines that fit nobody in particular.',
    },
    { type: 'h2', text: 'Step 1: purpose' },
    {
      type: 'p',
      text: 'Purpose is a plain statement of what the company does for people and why that matters. It should be specific enough that a competitor could not copy it word for word. Write it in one or two sentences, then test it: if the sentence would still be true after replacing your name with a competitor\'s, it is too generic. Values belong here too, but limit them to three that you can show in behaviour, not a list of adjectives.',
    },
    { type: 'h2', text: 'Step 2: audience' },
    {
      type: 'p',
      text: 'Name the primary audience in terms of the situation they are in, not only age and city: what they need to get done, what they worry about and what they do now. Speak to some real customers if you can; the method is in [how to create a buyer persona](/blog/how-to-create-buyer-persona). Choose one primary audience and one secondary. A strategy that serves "everyone in Georgia" has not made a choice.',
    },
    { type: 'h2', text: 'Step 3: positioning' },
    {
      type: 'p',
      text: 'Positioning is the place you claim in the buyer\'s mind relative to the alternatives, including doing nothing. Michael Porter, writing in Harvard Business Review in 1996, put the underlying logic this way: "The essence of strategy is choosing to perform activities differently than rivals do." ([HBR, What Is Strategy?](https://hbr.org/1996/11/what-is-strategy)). In brand terms, that means choosing what you will be known for and, just as important, what you will not.',
    },
    {
      type: 'p',
      text: 'A usable positioning statement fits in one sentence with four parts:',
    },
    {
      type: 'ul',
      items: [
        'For (the audience from step 2)',
        'who need (the job or problem),',
        'we are (the category you compete in)',
        'that (the one difference that matters), because (the proof you can show).',
      ],
    },
    {
      type: 'p',
      text: 'The proof is the part that is usually missing. A difference with no proof is a slogan. Review three to five competitors before you write it, noting what each claims, so yours does not say the same thing in other words.',
    },
    { type: 'h2', text: 'Step 4: messaging' },
    {
      type: 'p',
      text: 'Messaging turns the positioning into the sentences customers see. Socialinsider recommends three to five messaging pillars, each with two or three supporting messages or proof points. That is a good size: enough to cover your offer, few enough that your team remembers them. Write them as a short document containing the headline promise, three to five supporting points, the proof for each and a version of the promise for each audience. The [value proposition guide](/blog/how-to-write-value-proposition) goes deeper on the headline sentence.',
    },
    { type: 'h2', text: 'Step 5: voice' },
    {
      type: 'p',
      text: 'Voice is how the messages are said: formal or direct, warm or dry, technical or plain. Choose three or four traits and write what each means in practice, with a line of "we say this, not that". The process is in [how to define brand voice](/blog/how-to-define-brand-voice), including how to handle Georgian and English. Test the voice by rewriting one real customer email and one social post in it; if the two sound like the same company, the voice is working.',
    },
    { type: 'h2', text: 'A one-page template' },
    {
      type: 'table',
      head: ['Section', 'Write here'],
      rows: [
        ['Purpose', 'One or two sentences, plus three values with an example behaviour each'],
        ['Audience', 'Primary and secondary, the job they need done, their main worry'],
        ['Competitors', 'Three to five, with what each claims'],
        ['Positioning statement', 'The four-part sentence and the proof behind it'],
        ['Messaging pillars', 'Three to five, with proof points'],
        ['Voice', 'Three or four traits, and "we say this, not that" lines'],
        ['Where it applies first', 'Website, sales deck, social profiles, ads - in the order you will update them'],
      ],
    },
    { type: 'h2', text: 'Check the strategy before design starts' },
    {
      type: 'ul',
      items: [
        'Can a new employee explain the positioning after reading the page once?',
        'Would a customer recognise themselves in the audience description?',
        'Does every claim in the messaging have proof you can show?',
        'Could a competitor sign their name under it? If yes, sharpen the positioning.',
      ],
    },
    {
      type: 'p',
      text: 'Do the checks with people outside the project team. A strategy that has only been read by the people who wrote it has not been tested. WakeUP\'s [branding service](/services/branding) covers market and competitor review, positioning and key messages, then logo, visual identity and guidelines, and the [free audit](/audit) is a way to see how your current website, social pages and ads present the brand before you decide what to change.',
    },
  ],
}
