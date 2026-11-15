import type { BlogPost } from '@/lib/blog'

export const post: BlogPost = {
  locale: 'en',
  slug: 'b2b-website-design-complex-products',
  title: 'B2B website design for a long sales cycle and a buying committee',
  metaTitle: 'B2B Website Design for Long Sales Cycles',
  description:
    'B2B website design for complex products: how to serve a buying committee with proof, self-serve content, guided paths and CRM links.',
  publishedAt: '2027-02-15T09:00:00+04:00',
  updatedAt: '2027-02-15T09:00:00+04:00',
  service: 'websites',
  reviewState: 'llm_reviewed',
  body: [
    {
      type: 'p',
      text: 'Good B2B website design for complex products works as a sales aid for a group of people who each need different answers, over weeks or months. Build it around four things: proof that a sceptical colleague can check, content buyers can use without talking to sales, clear paths for each role, and a link from every enquiry into your CRM so the long process stays traceable.',
    },
    {
      type: 'p',
      text: 'This post is about designing for that committee and that timeline. For the pages themselves, see [pages a business website needs](/blog/pages-a-business-website-needs), and for the proof elements in detail, [website trust signals](/blog/website-trust-signals).',
    },
    { type: 'h2', text: 'Design for several readers, not one visitor' },
    {
      type: 'p',
      text: 'A complex purchase is rarely made by one person. A technical lead checks whether the product fits, a finance person asks what it costs and what could go wrong, and a manager has to defend the decision internally. Each opens your site with a different question, and often at different times. A homepage written for a single imagined buyer answers one of them and loses the rest.',
    },
    {
      type: 'p',
      text: 'Gartner\'s survey of 632 B2B buyers, run in August and September 2024 and published in June 2025, [found that 61% prefer an overall rep-free buying experience](https://gcom.pdo.aws.gartner.com/en/newsroom/press-releases/2025-06-25-gartner-sales-survey-finds-61-percent-of-b2b-buyers-prefer-a-rep-free-buying-experience), and that buyers favour online self-service over sellers when searching for general information and learning new things. The same survey reports that 69% of buyers see inconsistencies between a company\'s website and what sellers tell them. Gartner adds that buyers still want seller input for judgement calls such as whether a product fits their company, so read the figures as a direction: much of the evaluation happens on your site before anyone contacts you, and what the site says must match what sales says.',
    },
    { type: 'h2', text: 'Put proof where a doubter will look for it' },
    {
      type: 'p',
      text: 'In a long sales cycle the person who worries most about risk is often not the one who found you. Give that person evidence they can pass on without you in the room.',
    },
    {
      type: 'ul',
      items: [
        'Named clients with a short statement of what you did and what changed, rather than a logo wall alone. Ask permission first; see [how to write a case study](/blog/how-to-write-a-case-study).',
        'Case studies sorted by industry or problem, so each role finds a case that looks like their situation.',
        'Process and delivery detail: who works on the project, what the first month looks like, what the client has to provide.',
        'Certifications, partnerships and the people behind the company, with real names and roles.',
        'Plain contact details and a real person to ask, so a doubtful reader sees a way to check you.',
      ],
    },
    {
      type: 'p',
      text: 'Third-party proof carries more weight than your own claims, so link to a public review, a published project or a partner profile where one exists. The placement logic is covered in [website trust signals](/blog/website-trust-signals).',
    },
    { type: 'h2', text: 'Let buyers research on their own' },
    {
      type: 'p',
      text: 'Self-serve content is what lets a committee member do their homework at 10 pm without asking for a call. Think in questions rather than page types:',
    },
    {
      type: 'ul',
      items: [
        'How does it work, in plain language, with a diagram or short video? A product walkthrough often does this better than text; see [how to make a product demo video](/blog/how-to-make-a-product-demo-video).',
        'Who is it for, and who is it not for?',
        'What does it integrate with, and what does a typical implementation involve?',
        'What does it cost, or what drives the cost?',
        'What are the risks, and what happens if something goes wrong?',
      ],
    },
    {
      type: 'p',
      text: 'On price, Nielsen Norman Group\'s research is blunt. It reports that business customers rank pricing as the most needed piece of information online, and that in its studies [people view companies that hide costs as evasive and untrustworthy](https://www.nngroup.com/articles/show-price/). When exact prices are impractical, it suggests [showing prices for a few typical cases](https://www.nngroup.com/articles/show-prices-for-common-scenarios/). For a complex product that can mean a worked example of a typical project and the factors that move the price up or down.',
    },
    { type: 'h2', text: 'Give each role a guided path' },
    {
      type: 'p',
      text: 'Navigation by company structure ("Solutions", "Services", "About") makes every visitor translate your categories into their problem. A better approach is to add routes by question or role next to the standard menu.',
    },
    {
      type: 'table',
      head: ['Reader', 'Question they bring', 'What the path should show'],
      rows: [
        ['Technical evaluator', 'Will this work with our systems?', 'Specifications, integrations, implementation steps'],
        ['Finance or procurement', 'What does it cost and what are the terms?', 'Pricing logic, example scenarios, contract and support terms'],
        ['Senior sponsor', 'Why this, and can we defend it?', 'Outcomes, comparable clients, risks and how they are handled'],
        ['End user', 'Will this make my work easier?', 'Walkthrough, screenshots, onboarding and support'],
      ],
    },
    {
      type: 'p',
      text: 'Keep the paths short: a landing page per role with the three or four most relevant items, each linking onward. The aim is that a buyer can hand a colleague one link and say "read this one".',
    },
    { type: 'h2', text: 'Offer more than one next step' },
    {
      type: 'p',
      text: 'A single "Book a demo" button asks for a big commitment from someone who is still two stages from deciding. Offer steps of different sizes: a downloadable guide or checklist, a short product video, a pricing example, a call, a proposal request. Each step should say what happens next and who will contact them. [Contact form best practices](/blog/contact-form-best-practices) covers the form itself, and [lead generation landing pages](/blog/lead-generation-landing-pages) covers the pages that lead to it.',
    },
    { type: 'h2', text: 'Connect the site to your CRM from the first visit' },
    {
      type: 'p',
      text: 'A long cycle means one company may visit a dozen times and several people may submit forms across months. If those enquiries land in a shared inbox, nobody can see the pattern. Send every form to the CRM with the page it came from and the campaign source, link people to one company record, and let sales see which content a prospect has used. [Website CRM integration](/blog/website-crm-integration) explains the options and what to test, and [UTM parameters guide](/blog/utm-parameters-guide) covers the source tagging.',
    },
    {
      type: 'p',
      text: 'The practical benefit is feedback: when sales can see that deals that closed all used the same three pages, you know which pages to improve and which to build next. See also [marketing and sales alignment](/blog/marketing-and-sales-alignment).',
    },
    { type: 'h2', text: 'What to check on your own site' },
    {
      type: 'ol',
      items: [
        'Can a technical reader find specifications and integrations within two clicks of the homepage?',
        'Can a finance reader find some pricing information without contacting you?',
        'Is there proof from a named client on the pages where a decision is made?',
        'Does the site say the same thing as your sales deck and proposals?',
        'Does every form send the lead, the page and the source into your CRM?',
      ],
    },
    {
      type: 'p',
      text: 'WakeUP builds premium, complex websites and landing pages. See the [website development service](/services/website-development), or request a [free audit](/audit) of your current site to see which of these gaps apply.',
    },
  ],
}
