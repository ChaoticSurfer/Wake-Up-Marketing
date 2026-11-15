import type { BlogPost } from '@/lib/blog'

export const post: BlogPost = {
  locale: 'en',
  slug: 'how-to-write-an-about-us-page',
  title: 'How to write an About Us page: sections, tone and examples',
  metaTitle: 'How to Write an About Us Page',
  description:
    'How to write an About Us page: open with what you do and for whom, add your story, people and proof, and finish with a next step. Sections, tone, examples.',
  publishedAt: '2027-02-26T09:00:00+04:00',
  updatedAt: '2027-02-26T09:00:00+04:00',
  service: 'websites',
  reviewState: 'llm_reviewed',
  body: [
    {
      type: 'p',
      text: 'To write an About Us page, start with what your company does and for whom, in two sentences. Then add why you exist, the people behind it, proof that you deliver, and a clear next step. Write in plain, first-person-plural language, and keep every section about what it means for the visitor. An About page is not a company diary: it is where a skeptical buyer decides whether you are real and trustworthy.',
    },
    { type: 'h2', text: 'What visitors come to the page to find out' },
    {
      type: 'p',
      text: 'People often open About pages when they are close to a decision and want to check you out. Nielsen Norman Group\'s research on corporate websites concludes: "Users expect About Us sections to be clear, authentic, and transparent." It also found that users compared what they found on company sites with third-party review sites, and that when the site did not answer them many said they would just Google it ([NN/g, About Us information on corporate websites](https://www.nngroup.com/articles/about-us-information-on-websites/)). The same research warns that companies too often assume people understand their business.',
    },
    {
      type: 'p',
      text: 'Google\'s guidance for creating helpful content points the same way: one of its self-assessment questions is whether content is presented in a way that makes you want to trust it, including "background about the author or the site that publishes it, such as through links to an author page or a site\'s About page" ([Google Search Central](https://developers.google.com/search/docs/fundamentals/creating-helpful-content)). A clear About page serves visitors first, and it gives search engines a page that says who stands behind the site.',
    },
    {
      type: 'p',
      text: 'So the page has four jobs: say what you do, show who you are, prove it, and tell the reader what to do next.',
    },
    { type: 'h2', text: 'The sections, in order' },
    {
      type: 'table',
      head: ['Section', 'What it answers', 'Length'],
      rows: [
        ['Opening statement', 'What do you do, for whom, and where?', '1 to 2 sentences'],
        ['Why we exist (the story)', 'What problem made you start, and what do you believe about solving it?', '2 to 4 short paragraphs'],
        ['What we do differently', 'Why choose you over the next option?', '3 to 5 specific points'],
        ['The people', 'Who will I deal with?', 'Photo, name, role, one line each'],
        ['Proof', 'Can I trust you?', 'Numbers, clients you may name, certifications, press, reviews'],
        ['Next step', 'What do I do now?', 'One button and a contact option'],
      ],
    },
    {
      type: 'p',
      text: 'Keep the order. Visitors who stop reading after the first screen should still know what you do. The story comes second because it works as the reason to believe, not as the headline.',
    },
    { type: 'h2', text: 'Write the opening so it works alone' },
    {
      type: 'p',
      text: 'The first paragraph is the one most people read. Name your service, your customer and your location. Compare:',
    },
    {
      type: 'ul',
      items: [
        'Weak: "We are passionate about excellence and innovation."',
        'Better: "We make [what] for [who] in [where], so that [result]."',
      ],
    },
    {
      type: 'p',
      text: 'The better version can be checked. The weak version could be on any company\'s site. If a sentence could be moved to a competitor\'s About page unchanged, rewrite it.',
    },
    { type: 'h2', text: 'Tell the story in a way a buyer cares about' },
    {
      type: 'p',
      text: 'A useful story answers "why does this company exist", with a problem, a decision and what you built because of it. [Shopify\'s guide to About pages](https://www.shopify.com/in/blog/how-to-write-an-about-us-page) suggests a path from the situation before the business existed, through the problem and the obstacles, to the solution and the milestones reached. [How to write a brand story](/blog/how-to-write-a-brand-story) covers that structure in detail, so keep the About version shorter and tie each point to the customer.',
    },
    {
      type: 'p',
      text: 'One well-known case is [Basecamp\'s About page](https://basecamp.com/about), which is a letter from its co-founder and CEO Jason Fried. It explains that the company began as a web design firm taking on more projects than it could handle well, that existing tools were inadequate, and that it built its own, and sums up the need in a blunt line: "We needed it bad." It works because it is specific, personal and short on slogans. Not every company needs a founder letter, but every About page needs that specificity.',
    },
    {
      type: 'p',
      text: 'If your story is not dramatic, that is fine. A plain line such as "We started because our suppliers could never tell us when an order would arrive" (an illustration; use your own true reason) is a better story than a vague mission statement.',
    },
    { type: 'h2', text: 'Show the people' },
    {
      type: 'p',
      text: 'A company with real faces can look more trustworthy than a logo alone. NN/g lists realistic photography and multiple channels to connect with a real person among the tactics that made organisations seem authentic. For a company of 20 to 250 people, you do not need to show everyone. Show founders or leadership and the roles buyers will deal with: account managers, project leads, specialists.',
    },
    {
      type: 'ul',
      items: [
        'Use real photos taken for the purpose, not stock images.',
        'Give each person a name, a role and one factual line (what they do for customers, or how long they have done it).',
        'Link to LinkedIn profiles where it helps credibility.',
        'Do not invent profiles. Google\'s guidance warns against deceptive authorship information.',
      ],
    },
    { type: 'h2', text: 'Add proof, and keep it checkable' },
    {
      type: 'p',
      text: 'Proof is what turns claims into trust. Use only what you can support: years in operation, number of projects or customers, named clients who agreed to be named, certifications, awards, press mentions, partner status, and real reviews. If you do not have a number yet, leave the line out rather than rounding up. [Website trust signals](/blog/website-trust-signals) lists which signals work best by business type and where to place them.',
    },
    { type: 'h2', text: 'Tone: write like a person, not a brochure' },
    {
      type: 'ul',
      items: [
        'Use "we" for the company and "you" for the reader. Short sentences, concrete nouns.',
        'Cut words like leading, innovative, solutions and world-class. They carry no information.',
        'Match your brand voice. If your company is formal, be formal and clear; if it is warm, be warm and clear.',
        'State values only if they change behaviour. "We reply to enquiries within one working day" is a value you can be held to.',
        'Write the page in each language your customers use, rather than putting a translation of one page behind a flag icon.',
      ],
    },
    { type: 'h2', text: 'End with a next step and check the basics' },
    {
      type: 'p',
      text: 'An About page that ends without a next step wastes the trust it just built. Add one clear action: book a call, request a quote or see the work. Then check the practical details: the company\'s legal name, registration details where relevant, address, phone and email, opening hours, and links to social accounts. Make sure these match your Google Business Profile and other listings, since NN/g reports that users expect a consistent and cohesive About Us story and advises making sure metadata and contact information on third-party sites are accurate and up to date.',
    },
    {
      type: 'p',
      text: 'Where the About page sits in the site and what else a company site needs is covered in [pages a business website needs](/blog/pages-a-business-website-needs). If the page is part of a larger rebuild, WakeUP builds premium, complex websites and landing pages, and the [website development service](/services/website-development) page describes how that work runs. A [free audit](/audit) can also show whether your current site explains who you are clearly.',
    },
  ],
}
