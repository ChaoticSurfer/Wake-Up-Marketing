import type { BlogPost } from '@/lib/blog'

export const post: BlogPost = {
  locale: 'en',
  slug: 'what-is-eeat',
  title: 'What is E-E-A-T in SEO? How a company website shows it',
  metaTitle: 'What Is E-E-A-T in SEO?',
  description:
    'What is E-E-A-T in SEO: Experience, Expertise, Authoritativeness and Trust, why it is not a direct ranking factor, and how a company site can show it.',
  publishedAt: '2027-02-18T09:00:00+04:00',
  updatedAt: '2027-02-18T09:00:00+04:00',
  service: 'seo',
  reviewState: 'llm_reviewed',
  body: [
    {
      type: 'p',
      text: 'E-E-A-T in SEO stands for Experience, Expertise, Authoritativeness and Trust. It is Google\'s framework for describing content that people can rely on, and it comes from the guidelines Google gives its human quality raters. It is not a score or a single ranking factor, so you cannot optimise it with a tag. You show it with evidence on your site: real authors, real experience, real contact details.',
    },
    { type: 'h2', text: 'What E-E-A-T is, and what it is not' },
    {
      type: 'p',
      text: 'Google\'s guide to [creating helpful, reliable, people-first content](https://developers.google.com/search/docs/fundamentals/creating-helpful-content) describes content that demonstrates "experience, expertise, authoritativeness, and trustworthiness, or what we call E-E-A-T". It adds: "Of these aspects, trust is most important." The same page says: "While E-E-A-T itself isn\'t a specific ranking factor, using a mix of factors that can identify content with good E-E-A-T is useful."',
    },
    {
      type: 'p',
      text: 'The origin matters. The concept lives in the [Search Quality Rater Guidelines](https://static.googleusercontent.com/media/guidelines.raterhub.com/en//searchqualityevaluatorguidelines.pdf), the document the people who evaluate search results work from. When Google added the first "E" in 2022, it wrote that the guidelines are used by its raters to help evaluate the performance of its ranking systems, and that they [don\'t directly influence ranking](https://developers.google.com/search/blog/2022/12/google-raters-guidelines-e-e-a-t). So E-E-A-T is a lens for judging a page, not a lever you can pull.',
    },
    {
      type: 'p',
      text: 'That does not make it irrelevant. If your pages are written by identifiable people with real knowledge, and the site is open about who runs it, you are doing what the guidance describes, and readers and raters have more evidence to judge you by. It also overlaps with ordinary conversion work, covered in [website trust signals](/blog/website-trust-signals).',
    },
    { type: 'h2', text: 'The four parts in plain terms' },
    {
      type: 'p',
      text: 'The September 2025 edition of the rater guidelines defines each part as the extent to which the content creator has a certain quality. The wording below is a paraphrase of it.',
    },
    {
      type: 'table',
      head: ['Part', 'The question it asks', 'Example from the guidelines'],
      rows: [
        ['Experience', 'Has the author used the product, been to the place or lived the situation?', 'Whose review would you trust: someone who has personally used the product, or someone who has not?'],
        ['Expertise', 'Does the author have the knowledge or skill the topic needs?', 'Rewiring advice from a skilled electrician versus an enthusiast with no wiring knowledge'],
        ['Authoritativeness', 'Is the author or site known as a go-to source on the topic?', 'A government page is the authoritative source for passport renewal; a local business profile can be the authority on what is on sale now'],
        ['Trust', 'Can the reader rely on the page being honest, accurate and safe?', 'Online stores need secure payment and reliable customer service; informational pages on health, money and similar topics must be accurate'],
      ],
    },
    {
      type: 'p',
      text: 'The guidelines put trust at the centre: "Trust is the most important member of the E-E-A-T family because untrustworthy pages have low E-E-A-T no matter how Experienced, Expert, or Authoritative they may seem." Experience, expertise and authoritativeness are there to support the judgement of trust, and the right mix depends on the topic. A restaurant review needs first-hand experience; tax advice needs credentials.',
    },
    { type: 'h2', text: 'How raters look for evidence' },
    {
      type: 'p',
      text: 'The guidelines say a rater\'s view of E-E-A-T should be informed by what the website or creator says about themselves (the "About us" page or profile is the starting point), what others say about them (independent reviews, references, news articles) and what is visible on the page itself. They also note that most websites have contact, about or similar pages that say who owns the site. For a company, that means three places to put effort: your own pages, third-party mentions, and the content itself.',
    },
    { type: 'h2', text: 'What a company site can show' },
    {
      type: 'ul',
      items: [
        'Author pages. Google "strongly" encourages accurate authorship information, such as bylines, where readers might expect it. Give each author a page with a real name, role, relevant experience and links to where they are known. Do not invent profiles: the same Google guide warns that fabricated creator names or AI-generated headshots are a form of deception.',
        'An About page and clear contact details. Say who the company is, where it is based, who runs it and how to reach a person. Add a registered address and phone number that work.',
        'Case studies with real detail. First-hand work is the clearest proof of experience: the problem, what was done, the result and, if the client agrees, their name. If you have no case study yet, do not write a fake one; publish a process or a project walkthrough instead.',
        'Original material. Photos from your own work, your own data, your own numbers. The guide asks whether content gives "original information, reporting, research, or analysis" and not just a rewrite of what is already ranking.',
        'Sources for factual claims. Link to the primary source (an official document, a standard, a study) and say who measured it and when.',
        'Reviews and third-party mentions. A Google Business Profile with real reviews, mentions in trade media and listings in professional directories are what raters call "what others say". See [how to get more Google reviews](/blog/how-to-get-more-google-reviews).',
        'Policies and security. A visible privacy policy, terms, working HTTPS, and for shops clear delivery and returns pages.',
      ],
    },
    {
      type: 'p',
      text: 'Google\'s "Who, How and Why" questions are a short test for any page. Who created it, and is that clear to the reader? How was it produced, including any use of automation or AI, where readers would expect to be told? Why does it exist: to help people, or mainly to attract search visits? The guide calls the "why" perhaps the most important question to answer.',
    },
    { type: 'h2', text: 'Does it matter more for some topics?' },
    {
      type: 'p',
      text: 'Yes. The rater guidelines call topics that could significantly affect health, financial stability or safety "Your Money or Your Life" (YMYL) topics, and Google\'s helpful content guide says its systems give even more weight to content that aligns with strong E-E-A-T on topics like these. A clinic, a law firm, a bank or a loan broker should invest more in credentials and expert review of content than a bakery. For most marketing and B2B service sites the practical bar is: a named author, a real company behind the site, and claims you can support.',
    },
    { type: 'h2', text: 'What not to do' },
    {
      type: 'ul',
      items: [
        'Do not add schema markup or a "reviewed by" label that is not true. Markup describes what is on the page; it does not create expertise.',
        'Do not use a stock photo and a made-up name as an author.',
        'Do not hide the company behind a form with no address.',
        'Do not publish many thin posts to look like an authority. A few strong pages with real substance serve readers and any quality assessment better. Structuring the pages is covered in [SEO copywriting](/blog/seo-copywriting) and [content strategy for small business](/blog/content-strategy-for-small-business).',
      ],
    },
    { type: 'h2', text: 'A one-hour check for your own site' },
    {
      type: 'ol',
      items: [
        'Open your five most important pages. Can a visitor see who wrote or reviewed each one, and who the company is?',
        'Check that the About and Contact pages are one click from the header or footer and contain real, current details.',
        'List the claims on those pages and find a source or proof for each. Add the link or the evidence, or remove the claim.',
        'Search for your company name and check what appears on the first page: reviews, directory listings, news. Fill the obvious gaps.',
        'Add the findings to your wider checklist, for example [the SEO checklist for small business](/blog/seo-checklist-for-small-business).',
      ],
    },
    {
      type: 'p',
      text: 'E-E-A-T is slow to build because it rests on facts about your company, not on a setting. WakeUP offers SEO as a service, including content and on-page work, on the [SEO service page](/services/seo), and a [free marketing audit](/audit) can show which of the trust gaps above apply to your site.',
    },
  ],
}
