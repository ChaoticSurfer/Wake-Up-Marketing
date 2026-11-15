import type { BlogPost } from '@/lib/blog'

export const post: BlogPost = {
  locale: 'en',
  slug: 'website-ux-ui-design-process',
  title: 'Website UX/UI design process: five stages and what you approve',
  metaTitle: 'Website UX UI Design Process',
  description:
    'The website UX UI design process in five stages: research, wireframes, UI design, testing and developer handoff, and what you approve at each one.',
  publishedAt: '2026-12-29T18:00:00+04:00',
  updatedAt: '2026-12-29T18:00:00+04:00',
  service: 'websites',
  reviewState: 'llm_reviewed',
  body: [
    {
      type: 'p',
      text: 'The website UX UI design process runs in five stages: research, structure and wireframes, UI design, testing, and handoff to developers. UX decides how the site works for visitors; UI decides how it looks. Each stage ends with something you can approve - a set of findings, a page structure, a visual design, a test result, a build specification - so decisions are made once and in order.',
    },
    { type: 'h2', text: 'UX and UI: what each one covers' },
    {
      type: 'p',
      text: 'UX (user experience) covers who visits, what they want, how they move through the site and where they get stuck. UI (user interface) covers the visible layer: layout, colour, type, buttons, images. A site can look polished and still lose visitors because the path to the enquiry is unclear, and a well-structured site can feel cheap because the interface is not finished. The process below deals with both, in an order where each stage feeds the next.',
    },
    {
      type: 'p',
      text: 'This is the design half of a project. For the whole build, including development and launch, see the [custom web development process](/blog/custom-web-development-process).',
    },
    { type: 'h2', text: 'Stage 1: research' },
    {
      type: 'p',
      text: 'Research asks who the site is for and what they need to decide. [Baymard Institute\'s overview of the UX process](https://baymard.com/learn/ux-design-process) describes research as learning about users\' needs, goals, motivations and behaviours, using methods such as interviews, surveys, usability testing and card sorting, followed by analysis that turns the findings into user personas and journey maps.',
    },
    {
      type: 'p',
      text: 'For a company site, this usually means three inputs: your goals (what counts as a good enquiry), your buyers (who they are and what they ask before they call) and your current site (analytics, search queries, sales team feedback). The existing numbers are often the quickest source; the [conversion rate guide](/blog/website-conversion-rate-optimization) shows what to measure.',
    },
    {
      type: 'p',
      text: 'What you provide: access to analytics, a conversation with sales or support, and a clear statement of the main action you want visitors to take. What you approve: a short summary of goals, audiences and priorities, so everything later can be checked against it.',
    },
    { type: 'h2', text: 'Stage 2: structure and wireframes' },
    {
      type: 'p',
      text: 'Structure comes before looks. The designer lists the pages the site needs ([which pages a business website needs](/blog/pages-a-business-website-needs) covers the usual set), arranges the navigation and sketches each key page as a wireframe: a greyscale layout showing what goes where and in what order. Baymard describes wireframes as setting content priorities and page structure, and prototypes as interactive mockups used to test usability and present to stakeholders.',
    },
    {
      type: 'p',
      text: 'Because the wireframes have no colour, photos or brand styling, the discussion stays on content and flow: is the offer clear in the first screen, where does the form sit, what does a visitor see before they have to decide. Baymard calls a wireframe "cheap and quick to execute", so this is the cheapest point to change your mind.',
    },
    {
      type: 'p',
      text: 'What you approve: the sitemap and the wireframes of the main page types (home, service, contact, and any complex template such as a catalogue or calculator). This is the right moment for real content questions, such as which services lead and which proof you can show.',
    },
    { type: 'h2', text: 'Stage 3: UI design' },
    {
      type: 'p',
      text: 'UI design applies your brand to the approved structure: typography, colour, imagery, spacing, buttons and form styles, first for mobile and desktop versions of the key pages. Baymard lists design systems - reusable components and standards that keep a product consistent - as part of this work, which matters on larger sites where dozens of pages must look like one product.',
    },
    {
      type: 'p',
      text: 'Accessibility is decided here, not at the end. WCAG success criterion 1.4.3 [requires a contrast ratio](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html) of at least 4.5:1 for standard text and 3:1 for large-scale text at Level AA, so pale grey text on white can fail the requirement, whatever the style intended.',
    },
    {
      type: 'p',
      text: 'What you approve: the visual design of the key pages and the component set. Ask to see the design at phone width as well as on a desktop screen, and ask how the design will behave with longer Georgian headlines or text in two languages.',
    },
    { type: 'h2', text: 'Stage 4: testing' },
    {
      type: 'p',
      text: 'Testing puts the prototype in front of people who are not on the project team and watches where they hesitate. Jakob Nielsen of Nielsen Norman Group wrote in March 2000 that ["The best results come from testing no more than 5 users and running as many small tests as you can afford."](https://www.nngroup.com/articles/why-you-only-need-to-test-with-5-users/) His suggestion was to spend the budget on three studies with five users each rather than one large study, fixing problems between rounds.',
    },
    {
      type: 'p',
      text: 'Give testers tasks, not questions about taste: find the price of a service, work out how to book a call, locate the delivery terms. What you approve: a list of the problems found and what will be changed, with anything left out agreed deliberately. Baymard also notes that the process is iterative, so some findings will send the designer back to an earlier stage; that is the process working.',
    },
    { type: 'h2', text: 'Stage 5: handoff to developers' },
    {
      type: 'p',
      text: 'Handoff turns approved designs into a build specification: layouts for each breakpoint, styles, components, states (hover, error, empty), image sizes and notes on animation. Baymard calls these design specifications. Good handoff removes guesswork, so developers do not invent spacing or behaviour that was never decided.',
    },
    {
      type: 'p',
      text: 'It should also carry performance and quality targets into the build. Google\'s [Core Web Vitals guidance](https://web.dev/articles/vitals) sets "good" at a Largest Contentful Paint of 2.5 seconds or less, Interaction to Next Paint of 200 milliseconds or less and Cumulative Layout Shift of 0.1 or less, measured at the 75th percentile of page loads. Heavy images and effects chosen at the design stage can cause misses, which is why developers should be involved before this point. See [how to improve website speed](/blog/how-to-improve-website-speed) for fixes.',
    },
    {
      type: 'p',
      text: 'What you approve: the handoff package and the build plan. Afterwards you review the staged site against the design rather than redesigning it on screen.',
    },
    { type: 'h2', text: 'What you approve at each stage' },
    {
      type: 'table',
      head: ['Stage', 'What the designer delivers', 'What you give', 'What you approve'],
      rows: [
        ['Research', 'Goals, audiences, findings', 'Analytics access, sales input', 'Priorities and the main action'],
        ['Structure', 'Sitemap, wireframes', 'Content and proof points', 'Page list and layouts'],
        ['UI design', 'Visual design, components', 'Brand assets, photos', 'Look at phone and desktop width'],
        ['Testing', 'Test tasks, findings', 'Target visitors to test with', 'What changes after testing'],
        ['Handoff', 'Specifications, assets', 'Final copy and languages', 'Build plan, then the staged site'],
      ],
    },
    {
      type: 'p',
      text: 'WakeUP builds premium, complex websites and landing pages; the [website development service](/services/website-development) describes what is included. If you want to know where your current site loses visitors before you commission a redesign, start with the [free marketing audit](/audit) and use the [website redesign checklist](/blog/website-redesign-checklist) to plan the project.',
    },
  ],
}
