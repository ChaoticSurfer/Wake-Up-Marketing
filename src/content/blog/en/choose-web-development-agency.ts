import type { BlogPost } from '@/lib/blog'

export const post: BlogPost = {
  locale: 'en',
  slug: 'choose-web-development-agency',
  title: 'How to choose a web development agency for a complex build',
  metaTitle: 'How to Choose a Web Development Agency',
  description:
    'How to choose a web development agency: criteria, questions to ask, how to check a portfolio, and red flags before you sign for a complex build.',
  publishedAt: '2027-01-10T18:00:00+04:00',
  updatedAt: '2027-01-10T18:00:00+04:00',
  service: 'websites',
  reviewState: 'llm_reviewed',
  body: [
    {
      type: 'p',
      text: 'To choose a web development agency for a complex build, write a brief first, shortlist three agencies, and judge them on evidence rather than presentations: similar projects you can open and test, named people who will do the work, a written process, clear ownership of code and accounts, and answers to technical questions about speed and accessibility. Compare like-for-like proposals, then run a paid discovery step before the full contract.',
    },
    { type: 'h2', text: 'Decide what "complex" means for you first' },
    {
      type: 'p',
      text: 'Agencies differ most on hard projects: custom booking or pricing logic, integrations with a CRM or ERP, multiple languages, large catalogues, member areas, or strict performance targets. List yours. If the project is mainly a few pages of information, the comparison is simpler and cost is the main factor; see [how much a website costs](/blog/how-much-does-a-website-cost). If it has real logic, you are buying engineering and planning, and the questions below matter more. A written brief helps every step: use the [website RFP and brief](/blog/website-rfp-and-brief) guide.',
    },
    { type: 'h2', text: 'Criteria that separate agencies' },
    {
      type: 'table',
      head: ['Criterion', 'What good looks like', 'How to check'],
      rows: [
        ['Relevant work', 'Projects with similar logic, scale or integrations, not only attractive designs', 'Open the live sites; ask what the agency built on each one'],
        ['Named team', 'You know who designs, who builds and who manages the project', 'Ask for names and roles, and who you meet weekly'],
        ['Process', 'A written sequence: discovery, structure, design, build, testing, launch, handover', 'Ask to see a sample plan; compare with the [custom web development process](/blog/custom-web-development-process)'],
        ['Technical depth', 'Can explain why a framework or CMS fits your case, and its trade-offs', 'Ask for the reasoning, not a brand name'],
        ['Quality targets', 'Performance and accessibility are measured, not promised', 'Ask which numbers go in the contract'],
        ['Ownership', 'You own the code, design files, domain and hosting accounts', 'Read the contract clause on intellectual property and credentials'],
        ['After launch', 'Written terms for fixes, updates and support', 'Ask what is included; see the [website maintenance checklist](/blog/website-maintenance-checklist)'],
      ],
    },
    { type: 'h2', text: 'How to check a portfolio properly' },
    {
      type: 'ol',
      items: [
        'Open the sites on your phone, not the screenshots. Click through menus, forms and the slowest-looking pages.',
        'Run a free page speed test on two or three of them. Google\'s [web.dev guidance](https://web.dev/articles/vitals) sets "good" thresholds of 2.5 seconds for Largest Contentful Paint, 200 milliseconds or less for Interaction to Next Paint, and 0.1 or less for Cumulative Layout Shift, measured at the 75th percentile of page loads. A site that fails them is a data point, though the client\'s own content and ads can also cause it.',
        'Ask what role the agency played: full build, design only, or a redesign of an existing platform.',
        'Ask for a reference you can call, ideally a client with a similar project and one whose project had difficulties. How an agency handled a problem tells you more than a success story.',
        'Be careful with results claims. Ask who measured them, over what period, and whether the agency can show the source.',
      ],
    },
    { type: 'h2', text: 'Questions to ask in the first call' },
    {
      type: 'ul',
      items: [
        'Who will actually work on our project, and what else are they working on at the same time?',
        'What do you need from us in the first month, and what happens to the schedule if we are late with content or feedback?',
        'How do you handle changes after the scope is agreed? Is there a change process and a written price?',
        'What do you do for accessibility? The W3C says its [WCAG documents](https://www.w3.org/WAI/standards-guidelines/wcag/) "explain how to make web content more accessible to people with disabilities". Ask which level you are aiming for and how it will be tested.',
        'How will the site be tested on phones, older browsers and slow connections before launch?',
        'How is the content managed afterwards, and can our team edit pages without a developer?',
        'What happens to search rankings if we replace an existing site? Ask about redirects and keeping the current URL structure where it makes sense.',
        'What does handover include: source code, documentation, admin access, a training session?',
      ],
    },
    { type: 'h2', text: 'Red flags' },
    {
      type: 'ul',
      items: [
        'A fixed price with no discovery step for a project with integrations or custom logic. Unknowns do not disappear; they come back as change requests.',
        'A proposal that is a template with your name inserted, or that does not mention your goals.',
        'Vague answers about who does the work, or a sales team that disappears after signing.',
        'The agency owns the code or holds the hosting and domain in its own name with no handover terms.',
        'No testing plan, no mention of performance or accessibility, and no post-launch terms.',
        'Case studies with no client names, no links and only large percentages.',
        'Pressure to sign quickly for a limited-time price.',
      ],
    },
    { type: 'h2', text: 'Compare proposals and start small' },
    {
      type: 'p',
      text: 'Ask all shortlisted agencies to quote against the same written brief. Compare scope line by line rather than only the total: pages and templates, integrations, languages, testing, training, support. The cheapest proposal is often the one that left something out. Then ask for a discovery or planning phase as a separate paid step; it shows how the team works and gives you a plan you could in principle take elsewhere. The [website discovery phase](/blog/website-discovery-phase) explains what that step contains.',
    },
    {
      type: 'p',
      text: 'If you are also deciding between an agency and an individual, read [marketing agency vs freelancer](/blog/marketing-agency-vs-freelancer); the same trade-offs of continuity and breadth apply to web work.',
    },
    { type: 'h2', text: 'Where WakeUP fits' },
    {
      type: 'p',
      text: 'WakeUP builds premium, complex websites and landing pages. Use the questions above on us as well: see the [website development service](/services/website-development) for what is included, and request the [free audit](/audit) if you want an outside review of your current site before you write the brief.',
    },
  ],
}
