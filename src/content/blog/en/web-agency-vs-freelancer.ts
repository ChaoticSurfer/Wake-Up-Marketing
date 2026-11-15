import type { BlogPost } from '@/lib/blog'

export const post: BlogPost = {
  locale: 'en',
  slug: 'web-agency-vs-freelancer',
  title: 'Web design agency vs freelancer: which fits your website?',
  metaTitle: 'Web Design Agency vs Freelancer',
  description:
    'Web design agency vs freelancer: compare scope, team skills, risk and post-launch support to see which fits your website project.',
  publishedAt: '2027-01-13T18:00:00+04:00',
  updatedAt: '2027-01-13T18:00:00+04:00',
  service: 'websites',
  reviewState: 'llm_reviewed',
  body: [
    {
      type: 'p',
      text: 'Web design agency vs freelancer comes down to how big and how risky the website is. A freelancer fits a small, clearly defined site or a single page, and you work with one person directly. An agency fits a site that needs design, development, content, tracking and later support from several people, and that the business cannot afford to see stall. Neither is better in general.',
    },
    { type: 'h2', text: 'Scope: what a website project really contains' },
    {
      type: 'p',
      text: 'A website is more than screens. The work includes structure, copy, design, development, forms and integrations, speed, search basics, tracking, testing on real phones and a launch plan. For a five-page company profile, one capable person can cover all of it. For a site with a product catalogue, several languages, a booking flow or a link to your CRM, the number of skills grows quickly. That is the first test: list what the site must do, then count how many different specialists that takes. The stages are laid out in [how a custom web development project runs](/blog/custom-web-development-process).',
    },
    { type: 'h2', text: 'Team skills: one person or a team' },
    {
      type: 'p',
      text: 'Many freelancers are strong in one side of the work, either design or code. Many are good at both on a small scale, but depth in every area at once is rare. Ask which parts they would do themselves and which they would hand to someone else, and who that someone is.',
    },
    {
      type: 'p',
      text: 'An agency puts a designer, a developer, a project manager and often a copywriter and a tester on the same job, and they review each other. The cost of that is real, and you pay for coordination as well as for hours. In return you get a plan that does not depend on one person’s calendar. Three skills are easy to miss on a freelancer’s list and worth asking about directly:',
    },
    {
      type: 'ul',
      items: [
        'Accessibility. The W3C’s [WCAG 2.2](https://www.w3.org/WAI/standards-guidelines/wcag/) was published in October 2023 and is also approved as the international standard ISO/IEC 40500:2025. Ask whether the work follows it, and how it is tested.',
        'Search basics. Titles, headings, URLs, redirects from the old site and a sitemap are cheap to build in and expensive to fix after launch.',
        'Tracking. Forms, calls and purchases should be counted from the first day, or you cannot judge the site afterwards.',
      ],
    },
    { type: 'h2', text: 'Risk: availability, handover and ownership' },
    {
      type: 'p',
      text: 'With a freelancer, the main risk is concentration. If they fall ill, take a full-time job or simply stop answering, the project and the knowledge of how the site works go with them. The risk with an agency is different: a large firm may put a junior team on a small budget, and the person who sold the project may not be the one building it. Ask for named people and their roles in writing.',
    },
    {
      type: 'p',
      text: 'The same ownership rules apply to both. The domain, the hosting account, the analytics property and the source code should be registered to your company. Google’s own help page for Search Console puts the stakes plainly:',
    },
    {
      type: 'p',
      text: '“If all verified owners lose access to a property, all users will lose access to the Search Console property.” (Google [Search Console Help](https://support.google.com/webmasters/answer/9008080)) The page also says a verified owner has the highest degree of permissions, so give that role to someone in your company, and give your supplier a lower one.',
    },
    {
      type: 'p',
      text: 'Also decide the platform together. WordPress is used by 57.6% of the websites whose content management system is known, according to [W3Techs](https://w3techs.com/technologies/details/cm-wordpress) on 15 November 2026. That means plenty of people can maintain it, which lowers the risk of being tied to one builder. A custom build can still be the right call, but then ask for documentation and a second person who can read the code. The trade-off is covered in [custom website vs template](/blog/custom-website-vs-template).',
    },
    { type: 'h2', text: 'After launch: who fixes it' },
    {
      type: 'p',
      text: 'Launch is the start of the upkeep. Software needs updates, forms stop delivering after a change elsewhere, and pages get heavier over time. A freelancer may offer a monthly hour package or only fix things when you write to them, and the response time depends on what else they have on. An agency more often sells a maintenance plan with agreed response times, and its staff can cover for each other. Whichever you choose, ask in advance what is included, how quickly urgent problems are handled and what a request outside the plan costs. [A website maintenance checklist](/blog/website-maintenance-checklist) shows the work to be covered, so you can check a proposal against it.',
    },
    { type: 'h2', text: 'Side by side' },
    {
      type: 'table',
      head: ['Question', 'Freelancer usually fits when', 'Agency usually fits when'],
      rows: [
        ['Size of the site', 'A small site or one landing page with a clear brief', 'Many page types, languages, integrations or a custom function'],
        ['Skills needed', 'One or two skills, and you can supply the rest', 'Design, development, content, tracking and testing must fit together'],
        ['Who coordinates', 'You or a marketing lead on your side', 'A project manager on the supplier’s side'],
        ['If the person is unavailable', 'You can wait, or the site is not urgent', 'A delay would hold up a launch or a campaign'],
        ['After launch', 'You are happy with fixes on request', 'You want agreed response times and regular upkeep'],
        ['Contract', 'A short written agreement that covers ownership and handover', 'A fuller contract with milestones, acceptance and notice'],
      ],
    },
    {
      type: 'p',
      text: 'Compare quotes for the same scope and the same support period, not just the headline figure. [How much a website costs](/blog/how-much-does-a-website-cost) explains what moves the price.',
    },
    { type: 'h2', text: 'Questions to ask either one' },
    {
      type: 'ol',
      items: [
        'Who exactly will design and build this, and who will test it?',
        'What happens to the project if that person is unavailable for two weeks?',
        'Which accounts will be registered in my company’s name, and when do I receive the logins?',
        'What do I receive at handover: source files, credentials, a short written guide?',
        'What does support cost after launch, and how fast do you answer urgent problems?',
        'How will you measure whether the site works, and what will you track from day one?',
      ],
    },
    {
      type: 'p',
      text: 'More questions for the hiring decision are in [how to choose a web development agency](/blog/choose-web-development-agency), and the general version of this comparison is in [marketing agency vs freelancer](/blog/marketing-agency-vs-freelancer).',
    },
    {
      type: 'p',
      text: 'WakeUP is an agency, so the comparison above lists the cases where a freelancer is the better choice. WakeUP builds premium, complex websites and landing pages, and the [website development service](/services/website-development) page lists what is included. If you would rather see the gaps first, the [free audit](/audit) reviews your current site and how it brings enquiries.',
    },
  ],
}
