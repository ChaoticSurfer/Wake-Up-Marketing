import type { BlogPost } from '@/lib/blog'

export const post: BlogPost = {
  locale: 'en',
  slug: 'how-to-write-value-proposition',
  title: 'How to write a value proposition in your customers\' own words',
  metaTitle: 'How to Write a Value Proposition',
  description:
    'How to write a value proposition: collect your customers\' words, fill a one-sentence template, check it with a simple test, plus before and after examples.',
  publishedAt: '2027-02-04T09:00:00+04:00',
  updatedAt: '2027-02-04T09:00:00+04:00',
  service: 'branding',
  reviewState: 'llm_reviewed',
  body: [
    {
      type: 'p',
      text: 'To write a value proposition, name one customer, the problem they are trying to solve, and the result you deliver, in one or two sentences using words that customers have actually used. Take those words from reviews, sales calls and messages, not from brainstorming. Then test the sentence on someone outside your company: if they cannot say who it is for and what you do, rewrite it.',
    },
    { type: 'h2', text: 'What a value proposition is, and what it is not' },
    {
      type: 'p',
      text: 'A value proposition is the sentence that tells a visitor why they should choose you for a particular job. It is not your mission statement, your slogan or the full story of your brand. Positioning for the whole company is a bigger piece of work, covered in [what branding is](/blog/what-is-branding); this post is about the sentence itself.',
    },
    {
      type: 'p',
      text: 'The Nielsen Norman Group, writing about homepages, advises: "Treat your homepage as an elevator pitch to prospective customers." The same article, by Huei-Hsin Wang in [March 2024](https://www.nngroup.com/articles/homepage-design-principles/), adds that, according to studies it refers to, a site which does not communicate its purpose at a glance causes potential customers to leave. Your value proposition is that glance.',
    },
    { type: 'h2', text: 'Step 1: collect the words customers use' },
    {
      type: 'p',
      text: 'Strategyzer\'s value proposition canvas starts from [one customer segment](https://www.strategyzer.com/library/the-value-proposition-canvas): the jobs they are trying to get done, the pains they hit along the way, and the gains they are after. Pick one segment, for example "office managers at companies with 20 to 100 staff", not "all businesses". Then collect real phrases from:',
    },
    {
      type: 'ul',
      items: [
        'Google and Facebook reviews that say why people chose you or what they were worried about.',
        'WhatsApp and Instagram messages from new enquiries, and the first questions asked on a sales call.',
        'Notes from your own team on why customers left a competitor.',
        'The exact search words in your Search Console report, if people find you on Google.',
      ],
    },
    {
      type: 'p',
      text: 'Underline phrases that repeat. "I did not want to chase invoices" is better material than "comprehensive financial services", because it is what the customer says to a friend.',
    },
    { type: 'h2', text: 'Step 2: fill a simple template' },
    {
      type: 'p',
      text: 'Help Scout\'s guide [lists several methods](https://helpscout.com/blog/value-proposition), among them the formula it credits to Steve Blank: "We help (X) do (Y) by doing (Z)." It is a good first draft because it forces three decisions. Put them in your own words:',
    },
    {
      type: 'ol',
      items: [
        'X: who exactly you help, in the way they would describe themselves.',
        'Y: the job or the problem, in their words, with the result they want.',
        'Z: how you do it, only if it is a reason to believe you and not a list of features.',
      ],
    },
    {
      type: 'p',
      text: 'Write it three ways, then cut every word that would still be true for your competitor.',
    },
    { type: 'h2', text: 'Before and after examples for service businesses' },
    {
      type: 'p',
      text: 'The companies below are imaginary and the "after" lines assume that the claim is true for the business. Never publish a promise you cannot keep, such as a response time you do not meet.',
    },
    {
      type: 'table',
      head: ['Business', 'Before', 'After', 'What changed'],
      rows: [
        [
          'Accounting firm',
          'Comprehensive accounting solutions tailored to your needs.',
          'We keep the books and tax filings of small companies on time, so deadlines stop landing on you.',
          'Names who it serves and the worry it removes.',
        ],
        [
          'Dental clinic',
          'Quality dental care for the whole family.',
          'A fixed price quoted before any treatment starts, and appointments within the same week.',
          'Replaces "quality" with two things a patient can check.',
        ],
        [
          'IT support',
          'Innovative IT solutions for modern businesses.',
          'We keep your office computers, email and network running, and a real person answers when something breaks.',
          'Describes the job done, not the category.',
        ],
        [
          'Office cleaning',
          'Professional cleaning at competitive prices.',
          'The same crew cleans your office before your team arrives, every week.',
          'Offers a concrete detail instead of "professional" and "competitive".',
        ],
      ],
    },
    { type: 'h2', text: 'Step 3: test the sentence' },
    {
      type: 'ul',
      items: [
        'The stranger test: show it for five seconds to someone outside the company and ask who it is for and what you do.',
        'The swap test: put a competitor\'s name in. If the sentence still works, it says nothing about you.',
        'The proof test: can you point to a review, a number, a process or a guarantee that backs each part?',
        'The wording test: would a customer say it this way, in the language they use for your service?',
      ],
    },
    { type: 'h2', text: 'Where the sentence goes' },
    {
      type: 'p',
      text: 'Put it at the top of your homepage, in the headline of each landing page, and in the first line of your ads and social profiles. Adjust the wording to the segment each place serves, but keep the promise the same, so a person who sees an ad and then your page finds the same offer. A landing page built for [lead generation](/blog/lead-generation-landing-pages) lives or dies on this sentence. How the message sounds in longer text is a separate job, described in [how to define a brand voice](/blog/how-to-define-brand-voice).',
    },
    {
      type: 'p',
      text: 'If you write your site in Georgian and English, draft each version separately from the same customer words. A literal translation of an English line often loses the phrase that made it sound natural. WakeUP\'s [branding and positioning service](/services/branding) covers positioning and key messages, and the [free audit](/audit) is a way to see how your current website says it today.',
    },
  ],
}
