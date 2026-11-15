import type { BlogPost } from '@/lib/blog'

export const post: BlogPost = {
  locale: 'en',
  slug: 'nextjs-for-business-websites',
  title: 'Next.js for business websites: what you gain, what it costs, when it is overkill',
  metaTitle: 'Next.js for Business Websites',
  description:
    'Next.js for business websites: what it gives you in speed, SEO control and integrations, what it costs in developer dependence, and when it is overkill.',
  publishedAt: '2026-12-27T12:00:00+04:00',
  updatedAt: '2026-12-27T12:00:00+04:00',
  service: 'websites',
  reviewState: 'llm_reviewed',
  body: [
    {
      type: 'p',
      text: 'Next.js is a good fit for a business website when the site is central to how you win customers: it gives developers tight control over speed, search metadata and integrations with your other systems. The price is that changes need a developer or a content system built for the purpose. For a simple brochure site that rarely changes, it is usually more than you need.',
    },
    { type: 'h2', text: 'What Next.js is, in plain terms' },
    {
      type: 'p',
      text: 'Next.js is a framework for building websites with React. Instead of choosing a theme and plugins, developers write the site in code, and the framework handles the repetitive parts: turning pages into HTML, loading images sensibly, and generating the tags search engines read. You get a site built for your business rather than configured from a generic product.',
    },
    {
      type: 'p',
      text: 'That is the same trade you make when you choose custom over a template, covered in [custom website vs template](/blog/custom-website-vs-template). This article is about the framework choice that comes after it.',
    },
    { type: 'h2', text: 'What a business site gains' },
    {
      type: 'ul',
      items: [
        'Pages served as ready HTML. A static build produces [an HTML file per route](https://nextjs.org/docs/app/guides/static-exports), so visitors and crawlers receive finished pages instead of waiting for scripts to assemble them.',
        'Image handling built in. Next.js documents that its Image component serves [correctly sized images for each device in modern formats like WebP, prevents layout shift and loads images only when they enter the viewport](https://nextjs.org/docs/app/getting-started/images).',
        'Search metadata under your control. Titles and descriptions can be set per page or generated from data, and sitemap and robots files can be produced by code, as described in the [Next.js metadata documentation](https://nextjs.org/docs/app/getting-started/metadata-and-og-images).',
        'Freedom to connect other systems. A CRM, a booking tool, a payment provider or a content system can be wired in directly, instead of through whatever plugins exist.',
        'Design without template limits. Complex layouts, interactive calculators and animation are built to your brief.',
      ],
    },
    {
      type: 'p',
      text: 'Pre-rendering matters for search. Google\'s JavaScript guidance says: ["server-side or pre-rendering is still a great idea because it makes your website faster for users and crawlers, and not all bots can run JavaScript."](https://developers.google.com/search/docs/crawling-indexing/javascript/javascript-seo-basics) A site that is pre-rendered avoids the problem of depending on crawlers to run scripts.',
    },
    {
      type: 'p',
      text: 'Speed is not automatic, though. Google\'s Core Web Vitals call a page good when, at the 75th percentile of visits, the largest content paints within 2.5 seconds, interactions respond within 200 milliseconds and layout shift stays at 0.1 or below ([web.dev](https://web.dev/articles/vitals)). Using Next.js does not guarantee a pass: heavy scripts, huge images and slow third-party tags can still fail it. See [how to improve website speed](/blog/how-to-improve-website-speed) for the checks that apply to any stack.',
    },
    { type: 'h2', text: 'What it costs: dependence on developers' },
    {
      type: 'p',
      text: 'The honest cost of a code-built site is not the framework, it is who can change the site afterwards. Be clear about these points before you sign.',
    },
    {
      type: 'ul',
      items: [
        'Content edits. Without a content system, changing a headline means a developer changes code. With a headless content system your team can edit text and images, but that is a second tool to set up and pay for. See [headless CMS for a business website](/blog/headless-cms-for-business-website).',
        'Maintenance. Frameworks and their libraries release updates, and security fixes need applying. Someone has to own that, whether it is the builder, a retainer or your own developer.',
        'Hosting. Next.js can export a static site that runs on [any web server that can serve HTML, CSS and JavaScript](https://nextjs.org/docs/app/guides/static-exports), but features such as redirects, headers and incremental regeneration are not supported in a static export, so many sites use a host that runs Next.js.',
        'Hiring. If you part ways with the builder, the next developer must know React and Next.js, not only general web skills.',
        'Ownership. Ask that the source code is in a repository your company owns and that deployment is documented.',
      ],
    },
    { type: 'h2', text: 'Next.js or WordPress' },
    {
      type: 'table',
      head: ['Question', 'Next.js', 'WordPress'],
      rows: [
        ['Who edits content day to day', 'A developer, or an editor in a connected content system', 'Your team, in the built-in editor'],
        ['Design freedom', 'Full: built to your brief', 'Wide, but within the theme and plugin structure unless heavily customised'],
        ['Integrations with your systems', 'Written directly, so exactly as needed', 'Through plugins or custom code'],
        ['Ongoing upkeep', 'Framework updates and deployment', 'Core, theme and plugin updates'],
        ['Fits best', 'Complex, design-led or integration-heavy sites', 'Content-heavy sites edited by non-technical staff'],
      ],
    },
    {
      type: 'p',
      text: 'Neither is better in general. WordPress can be fast and well optimised, and Next.js can be slow if built carelessly. The decision is about who edits, how complex the site is and what it must connect to.',
    },
    { type: 'h2', text: 'When Next.js is overkill' },
    {
      type: 'ul',
      items: [
        'A five-page brochure site that changes twice a year and has a contact form.',
        'A team that wants to edit everything themselves, with no developer on call and no budget for a content system.',
        'A short campaign that will be taken down in a month.',
        'A project where nobody has decided what the site must do. Settle the goal and pages first, as in [pages a business website needs](/blog/pages-a-business-website-needs).',
      ],
    },
    { type: 'h2', text: 'Questions to ask before you commit' },
    {
      type: 'ol',
      items: [
        'Who will change text, prices and images after launch, and how?',
        'Where does the code live, and who owns the repository and the hosting account?',
        'What is the plan for updates and security fixes, and who pays for them?',
        'How will you check speed after launch, and against which targets?',
        'What does it connect to now, and what might you connect later?',
      ],
    },
    {
      type: 'p',
      text: 'WakeUP builds premium, complex websites and landing pages. If your site needs custom design, integrations or interactive features, read about [website and landing page development](/services/website-development), or send your site for a [free marketing audit](/audit) and ask whether a rebuild is worth it.',
    },
  ],
}
