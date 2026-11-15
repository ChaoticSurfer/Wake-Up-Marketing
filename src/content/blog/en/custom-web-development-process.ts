import type { BlogPost } from '@/lib/blog'

export const post: BlogPost = {
  locale: 'en',
  slug: 'custom-web-development-process',
  title: 'Custom web development process: the stages, what you provide and what you should see',
  metaTitle: 'Custom Web Development Process',
  description:
    'The custom web development process in six stages: what you provide at each stage, what you should see in return, and where projects stall.',
  publishedAt: '2026-12-21T09:00:00+04:00',
  updatedAt: '2026-12-21T09:00:00+04:00',
  service: 'websites',
  reviewState: 'llm_reviewed',
  body: [
    {
      type: 'p',
      text: 'A custom web development process runs through six stages: discovery, structure and wireframes, design, content and build, testing, and launch with support. At each stage you owe the team specific inputs (goals, access, content, decisions) and should receive something you can review. If a stage ends with nothing to look at, the project is running on trust rather than evidence.',
    },
    { type: 'h2', text: 'The stages at a glance' },
    {
      type: 'p',
      text: 'Published guides split the same work into different numbers of stages: [Marcel Digital](https://www.marceldigital.com/blog/website-development-process-a-step-by-step-guide) lists eight, [Marketeam](https://marketeam.com.au/resources/articles/web-design/the-custom-web-design-process-step-by-step-from-concept-to-launch) nine and [Pop Web Design](https://popwebdesign.net/popart_blog/en/2024/12/the-custom-web-development-process) six. The names differ; the order does not. Here is the six-stage version from the client’s side.',
    },
    {
      type: 'table',
      head: ['Stage', 'What you provide', 'What you should see'],
      rows: [
        ['1. Discovery', 'Goals, audience, current analytics, site access, named decision-maker', 'A written brief and scope you can sign'],
        ['2. Structure and wireframes', 'Page priorities, stakeholder input, feedback on layouts', 'A sitemap and grey-box page layouts'],
        ['3. Design', 'Brand assets, approval of style and key pages', 'Designed mockups for the main page types'],
        ['4. Content and build', 'Text, photos, video, integration details, content owners', 'A staging site you can click through'],
        ['5. Testing', 'Review of content accuracy, forms and messaging', 'A test report and a list of fixed issues'],
        ['6. Launch and support', 'Final sign-off, access handover, a named site owner', 'A live site, tracking, a handover session and a support arrangement'],
      ],
    },
    { type: 'h2', text: 'Stage 1: discovery' },
    {
      type: 'p',
      text: 'Discovery decides what the website is for. Expect questions about your buyers, your offer, what the current site does well, which pages bring enquiries and what a successful month looks like. Bring the numbers if you have them (traffic, enquiries, sales from the web), plus access to analytics, the domain and hosting.',
    },
    {
      type: 'p',
      text: 'The most useful thing you can provide here is a single decision-maker. A project with six people who can each veto a page loops back on itself. The output is a brief: goals, audience, the list of page types, required integrations (CRM, booking, payments, languages) and what is out of scope. If you are weighing a custom build against a template, the comparison is in [custom website vs template](/blog/custom-website-vs-template); if you are replacing an existing site, the [website redesign checklist](/blog/website-redesign-checklist) covers what to inventory first.',
    },
    { type: 'h2', text: 'Stages 2 and 3: structure, wireframes and design' },
    {
      type: 'p',
      text: 'Structure comes before looks. The team maps the pages and how a visitor moves between them, then draws wireframes: plain layouts that show what goes where on each page type, without colour or imagery. Wireframes are the cheapest moment to change your mind. Moving a section in a wireframe takes minutes; moving it after development does not.',
    },
    {
      type: 'p',
      text: 'Design then applies your brand to the approved structure. You supply logo files, fonts, colours, photography and any brand guidelines, and you approve a style direction and the key pages. Expect mockups of the main page types at desktop and mobile widths, not every page of the site. Give feedback in terms of the goal (“the enquiry button is lost on this page”) rather than taste (“make it pop”), and send it consolidated from one person.',
    },
    { type: 'h2', text: 'Stage 4: content and build' },
    {
      type: 'p',
      text: 'Content is where most client-side delay happens, so treat it as its own workstream with named owners, as the Marcel Digital process does. Write or approve text for every page, collect photos and video, and settle details for each integration: where form submissions go, which CRM fields they fill, which languages the site needs. Real text matters because layouts designed around placeholder copy often break when the real words arrive.',
    },
    {
      type: 'p',
      text: 'During the build you should see a staging site, a private copy of the website that is not open to search engines or the public, and be able to click through working pages rather than look at pictures. Review in rounds: the team shows a set of finished pages, you reply once with consolidated notes. Ask how the site will be built (framework, content management, hosting) and who owns the code and accounts when it is done.',
    },
    { type: 'h2', text: 'Stage 5: testing before launch' },
    {
      type: 'p',
      text: 'Testing checks that the site works, not that it was built. Your part is reading every page for accuracy and submitting every form as a customer would. The team’s part should include performance, accessibility, devices and forms. Ask to see results against named standards.',
    },
    {
      type: 'ul',
      items: [
        'Speed. Google’s Core Web Vitals give targets measured at the 75th percentile of page loads: [Largest Contentful Paint within 2.5 seconds, Interaction to Next Paint of 200 milliseconds or less and Cumulative Layout Shift of 0.1 or less](https://web.dev/articles/vitals). The HTTP Archive’s Web Almanac reports that in 2025 [48% of mobile websites and 56% of desktop websites had good Core Web Vitals](https://almanac.httparchive.org/en/2025/performance), measured from Chrome user data, so a custom site that meets all three is not a given.',
        'Accessibility. The W3C says [“The WCAG documents explain how to make web content more accessible to people with disabilities.”](https://www.w3.org/WAI/standards-guidelines/wcag/) WCAG 2.2 has levels A, AA and AAA; agree with the team which level you are targeting before testing starts.',
        'Devices and browsers. The main page types on a small phone, a tablet and a laptop, in the browsers your visitors use.',
        'Forms and tracking. Every form sends to the right place, the confirmation works, and conversions appear in analytics.',
      ],
    },
    { type: 'h2', text: 'Stage 6: launch and support' },
    {
      type: 'p',
      text: 'Launch is a sequence, not an instant. The team switches the domain to the new site, checks that old addresses redirect where they should, confirms the site can be indexed, and watches analytics for errors. If the new site replaces an old one, redirects and indexing are the part that most affects search traffic; they are covered in the [website redesign checklist](/blog/website-redesign-checklist). You give final sign-off, so do it from a written list of what was agreed in stage 1.',
    },
    {
      type: 'p',
      text: 'Before the project closes, expect a handover: logins, documentation, a session showing your team how to edit content (Marketeam’s process lists client training as a stage of its own), and a clear answer to who looks after updates, backups and fixes afterwards. Maintenance is a separate arrangement from the build, so agree it before launch. For what a site costs to build and run, see [how much a website costs](/blog/how-much-does-a-website-cost).',
    },
    { type: 'h2', text: 'Where custom projects stall' },
    {
      type: 'ul',
      items: [
        'Content arrives late or in pieces. Set a content deadline for each stage and name who owns each page.',
        'Too many approvers. Agree one person who can say yes for the company.',
        'Scope grows quietly. Ask for new requests to be written down with their effect on the plan before work starts.',
        'Feedback arrives as taste, not goals. Tie comments to the goal set in discovery.',
        'No one owns the site afterwards. Name the site owner before launch.',
      ],
    },
    {
      type: 'p',
      text: 'WakeUP builds premium, complex websites and landing pages. Details are on the [website development service page](/services/website-development). If you are not sure where your current site stands before starting a project, the [free marketing audit](/audit) is a place to begin.',
    },
  ],
}
