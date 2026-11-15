import type { BlogPost } from '@/lib/blog'

export const post: BlogPost = {
  locale: 'en',
  slug: 'website-discovery-phase',
  title: 'The website discovery phase: what happens before any design',
  metaTitle: 'Website Discovery Phase Explained',
  description:
    'The website discovery phase is the research and planning before design: goals, audience, content and technical needs, how long it takes and what you get.',
  publishedAt: '2027-01-01T15:00:00+04:00',
  updatedAt: '2027-01-01T15:00:00+04:00',
  service: 'websites',
  reviewState: 'llm_reviewed',
  body: [
    {
      type: 'p',
      text: 'The website discovery phase is the research and planning stage before any design or code. The team works out what the site is for, who it serves, what content exists, what technology it must connect to and how success will be measured. You should leave it with a written brief, a page structure and a scope that both sides agree on. It is the cheapest point in a project to change your mind.',
    },
    { type: 'h2', text: 'What discovery is, and what it is not' },
    {
      type: 'p',
      text: 'Nielsen Norman Group defines discovery as [“a preliminary phase in the UX-design process that involves researching the problem space”](https://www.nngroup.com/articles/discovery-phase/), and says that [“all discoveries strive to achieve consensus on a problem to be solved and its desired outcomes.”](https://www.nngroup.com/articles/discovery-phase/) For a website this means agreeing on the problem before drawing the solution. Discovery is not a design round with a few sketches, and it is not a questionnaire you fill in once. It produces decisions, and it can end with the decision not to build something you first asked for.',
    },
    {
      type: 'p',
      text: 'It also differs from the later stages of a build. The overview of [how a custom web development process runs](/blog/custom-web-development-process) shows where discovery sits among design, build and testing, and [the UX and UI design process](/blog/website-ux-ui-design-process) covers what follows it. This article stays inside the first stage.',
    },
    { type: 'h2', text: 'What happens inside discovery' },
    {
      type: 'table',
      head: ['Workstream', 'Questions it answers', 'What it needs from you'],
      rows: [
        ['Goals and stakeholders', 'What must the site achieve, how will you measure it, and who decides?', 'A short interview with each person who has a say, and one named decision-maker'],
        ['Audience', 'Who visits, what are they trying to do, what stops them?', 'Customer calls, sales team notes, enquiry history, access to analytics'],
        ['Current site and competitors', 'What works today, which pages bring enquiries, how do rivals present themselves?', 'Analytics access and a list of competitors you watch'],
        ['Content', 'What exists, what can be reused, what must be written or shot, and who maintains it?', 'Existing texts, photos, videos, price lists and case material'],
        ['Technical requirements', 'Which systems must connect (CRM, booking, payments, email), which languages, what hosting and security?', 'Access to the tools in use and the person who manages them'],
        ['Structure and scope', 'Which pages, in what hierarchy, with which features, and what is left out for now?', 'Decisions on priorities and a budget range'],
      ],
    },
    {
      type: 'p',
      text: 'Agency descriptions of this stage are broadly alike. William Alexander, a web agency, lists stakeholder research plus [user research, a content assessment, technical discovery and competitive analysis](https://williamalexander.co/articles/website-discovery-process/), and ITMonks lays out a similar [ten-step process](https://itmonks.com/website-discovery-phase) from stakeholder sessions to a technical specification. The detail below is what to ask for in each area.',
    },
    { type: 'h2', text: 'Goals and audience: put numbers on them' },
    {
      type: 'p',
      text: '“More enquiries” is not a goal until it has a baseline. Ask the team to agree on a few numbers before design starts: monthly visits, enquiries from the site, the share that become customers, and the target for a stated period. If you do not have them, setting up measurement is itself a discovery result. The [marketing KPIs](/blog/marketing-kpis) guide lists which figures are worth tracking.',
    },
    {
      type: 'p',
      text: 'For the audience, the strongest material is already in your company: the questions customers ask on the phone, the objections salespeople hear, the pages visitors leave from. Nielsen Norman Group notes that discovery commonly uses [stakeholder interviews and exploratory user research such as interviews and surveys](https://www.nngroup.com/articles/discovery-phase/). For a company in Georgia, include a question that is easy to skip: which language does each audience use when it searches and when it buys, Georgian, English or Russian, and does the site need all of them at launch?',
    },
    { type: 'h2', text: 'Content and technical requirements: the hidden schedule risks' },
    {
      type: 'p',
      text: 'Content is a frequent cause of delay, because a page cannot be finished until its text, photos and proof exist. A content inventory lists every page on the current site, what to keep, rewrite, merge or delete, and what is missing. If you are replacing an existing site, use the [website redesign checklist](/blog/website-redesign-checklist) for the URL inventory that protects your search traffic. Decide in discovery who writes the new text, who approves it and by when.',
    },
    {
      type: 'p',
      text: 'The technical side covers integrations, hosting, security and the platform choice. Write the integrations down by name: the CRM that must receive leads, the booking or payment tool, the email platform, the analytics setup. A platform recommendation belongs here too, since it depends on those requirements; see [custom website vs template](/blog/custom-website-vs-template) for the trade-offs. Ask which pages are really needed first, using [the pages a business website needs](/blog/pages-a-business-website-needs) as a starting list.',
    },
    { type: 'h2', text: 'How long discovery takes' },
    {
      type: 'p',
      text: 'There is no standard length. The UK Government Service Manual, which governs public services rather than company websites, says that [“around 4 to 8 weeks is typical”](https://www.gov.uk/service-manual/agile-delivery/how-the-discovery-phase-works) for a discovery and that unfamiliar problems may take longer and well-understood ones less. Agency estimates for websites are shorter: William Alexander puts a simple brochure site at about [1 to 2 weeks and a complex project at 4 to 8 weeks or more](https://williamalexander.co/articles/website-discovery-process/), and says discovery typically costs 10 to 20 percent of the project budget; these are the agency\'s own estimates and it names no source for them.',
    },
    {
      type: 'p',
      text: 'What moves the time is rarely the agency. It is how fast you can book the interviews, hand over access and decide. A named decision-maker, a shared folder for existing materials and a fixed weekly slot shorten discovery more than any method.',
    },
    { type: 'h2', text: 'What you should receive' },
    {
      type: 'p',
      text: 'The deliverables are documents you can keep and give to any other supplier. Ask that they are written down, not only presented:',
    },
    {
      type: 'ul',
      items: [
        'A project brief: goals, measures, audience, constraints and what is out of scope.',
        'Audience profiles or journeys, showing how each type of visitor gets to an enquiry.',
        'A sitemap with page types and the content each needs.',
        'A content inventory and plan with owners and dates.',
        'Technical requirements and a platform recommendation, with the integrations listed.',
        'A scope, phase plan, timeline estimate and a budget the scope fits into.',
        'Early wireframes for the key pages, if the agency includes them. Some descriptions place [a clickable wireframe and a roadmap](https://itmonks.com/website-discovery-phase) among the outputs.',
      ],
    },
    {
      type: 'p',
      text: 'The GOV.UK guidance adds a useful test for the end of any discovery: you should [know how you will measure success](https://www.gov.uk/service-manual/agile-delivery/how-the-discovery-phase-works) and have a list of ideas to test first. If you cannot say how the site will be judged, discovery is not finished.',
    },
    { type: 'h2', text: 'How to get more from discovery' },
    {
      type: 'ol',
      items: [
        'Name one decision-maker before it starts and let the others advise.',
        'Share real data: analytics access, enquiry counts, sales feedback, competitor names.',
        'Collect existing content early, even if it is rough.',
        'Be honest about budget; a scope can be fitted to a range, but not to silence.',
        'Ask what the agency would cut first. The answer shows how it thinks about priorities.',
        'Read the brief and sign it off before design begins. Later changes cost more.',
      ],
    },
    {
      type: 'p',
      text: 'WakeUP builds premium, complex websites and landing pages; see the [website development service](/services/website-development). To see what discovery would need to cover for your site, the [free marketing audit](/audit) is a good first step, and [how much a website costs](/blog/how-much-does-a-website-cost) explains what drives project cost.',
    },
  ],
}
