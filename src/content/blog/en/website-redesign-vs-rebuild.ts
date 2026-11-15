import type { BlogPost } from '@/lib/blog'

export const post: BlogPost = {
  locale: 'en',
  slug: 'website-redesign-vs-rebuild',
  title: 'Website redesign vs rebuild: how to decide which one your site needs',
  metaTitle: 'Website Redesign vs Rebuild',
  description:
    'Website redesign vs rebuild: restyle if structure and platform work; rebuild or replatform if speed, editing or structure are the limit. A decision test.',
  publishedAt: '2027-02-11T12:00:00+04:00',
  updatedAt: '2027-02-11T12:00:00+04:00',
  service: 'websites',
  reviewState: 'llm_reviewed',
  body: [
    {
      type: 'p',
      text: 'Website redesign vs rebuild comes down to where the problem sits. If the structure, the platform and the speed are sound and only the look or the messaging is weak, redesign: restyle the pages you have. If the limit is technical (slow pages you cannot fix, a platform your team cannot edit, a page structure that cannot carry what you now sell), rebuild, and sometimes change platform as well.',
    },
    { type: 'h2', text: 'Three options, not two' },
    {
      type: 'p',
      text: '"Redesign" is usually set against "rebuild", but a company really chooses among three jobs with different cost and risk.',
    },
    {
      type: 'table',
      head: ['Option', 'What changes', 'What stays', 'Main risk'],
      rows: [
        ['Restyle (redesign)', 'Layout, visuals, copy, calls to action on existing pages', 'URLs, page structure, platform, hosting', 'Low: mostly a conversion and brand question'],
        ['Rebuild', 'Page structure, templates and code; often the information architecture', 'Domain, usually the platform or the content', 'Medium: URLs and internal links move, so redirects matter'],
        ['Replatform', 'The system underneath: CMS, shop engine or framework', 'Content and brand, if migrated well', 'High: everything can change at once, including how Google sees the site'],
      ],
    },
    {
      type: 'p',
      text: 'A restyle can look like a new website. A replatform can look identical to visitors. Judge the options by what changes underneath, not by how different the screenshots are. For the task list once you have decided, see the [website redesign checklist](/blog/website-redesign-checklist); this article is only about the decision.',
    },
    { type: 'h2', text: 'What your own data says' },
    {
      type: 'p',
      text: 'Start with evidence you already have. Three reports answer most of the question.',
    },
    {
      type: 'ul',
      items: [
        'Search Console: which pages get impressions and clicks, and which queries bring them. Pages that earn traffic must survive any option. If you have not set it up, [this guide](/blog/google-search-console-guide) walks through it.',
        'Analytics: where visitors leave and which pages lead to an enquiry. If enquiries are weak on pages that have good traffic, the problem is the page (a restyle may fix it). If traffic itself is thin, design is rarely the cause. See [GA4 for small business](/blog/ga4-for-small-business).',
        'A speed and mobile test of your five most important pages, on a phone.',
      ],
    },
    {
      type: 'p',
      text: 'Write the result as one line per page: keeps traffic, keeps enquiries, or neither. If most pages that matter are in the first two groups, you are looking at a restyle. If the pages fail for reasons built into the structure, keep reading.',
    },
    { type: 'h2', text: 'Technical limits that point to a rebuild' },
    {
      type: 'p',
      text: 'Some faults sit below the design layer, and a new coat of paint will not move them.',
    },
    {
      type: 'ul',
      items: [
        'Speed that stays poor after the easy fixes. Google\'s [Core Web Vitals guidance](https://web.dev/articles/vitals) says Largest Contentful Paint should occur within 2.5 seconds, INP should be 200 milliseconds or less and CLS 0.1 or less, with a good threshold to measure being the 75th percentile of page loads, segmented across mobile and desktop devices. Try the fixes in [how to improve website speed](/blog/how-to-improve-website-speed) first. If images, scripts and caching are already handled and the template itself is heavy, that points to a rebuild.',
        'Mobile content that differs from desktop. Google\'s [mobile-first indexing documentation](https://developers.google.com/search/docs/crawling-indexing/mobile/mobile-sites-mobile-first-indexing) says: "Make sure that your mobile site contains the same content as your desktop site." A site that hides content on phones, and cannot be changed without rewriting its templates, has a structural problem.',
        'A structure that cannot carry your offer. You added services, markets or a second language and the navigation, URLs and templates cannot hold them without hacks.',
        'Editing that needs a developer. If a simple text or page change takes weeks, the platform is working against you; that is a replatform question.',
        'Software that is no longer maintained or patched, which is a security and cost problem, not a design one.',
      ],
    },
    {
      type: 'p',
      text: 'Not every platform change needs custom code. The trade-offs between a template and a custom build are covered in [custom website vs template](/blog/custom-website-vs-template), and between WordPress and Wix in [Wix vs WordPress](/blog/wix-vs-wordpress).',
    },
    { type: 'h2', text: 'A decision test' },
    {
      type: 'ol',
      items: [
        'Do your key pages earn traffic and enquiries, and is the site fast and editable? If yes, restyle: change the look and messaging and keep URLs and platform.',
        'Do pages earn traffic but convert badly because of layout, copy or trust? Restyle those pages first, then measure.',
        'Is the template, structure or code the cause of slow pages, broken mobile or blocked editing? Rebuild on a platform that fixes that cause.',
        'Is the platform itself the limit (cannot be edited, extended, secured or kept fast)? Replatform, and treat it as a project with a migration plan.',
        'Is the business itself different now (new offer, new brand, new markets)? Rebuild, because the structure has to follow the offer.',
      ],
    },
    {
      type: 'p',
      text: 'If you hold two answers at once, take the more invasive one only when the cause is technical. A restyle on a broken foundation will look better and perform the same.',
    },
    { type: 'h2', text: 'Protect what already ranks, whichever you choose' },
    {
      type: 'p',
      text: 'Rebuilds and replatforms usually change URLs. Google\'s guidance on [site moves with URL changes](https://developers.google.com/search/docs/crawling-indexing/site-move-with-url-changes) recommends server-side permanent redirects from old to new addresses and says to "Plan your changes to your site one after the other, not everything at the same time". Its example is to move to a new domain first, then change the layout. In practice, when you can keep the domain and the URLs of pages that rank, do so; every address that changes is a page you must redirect and watch. Its guidance on [redirects](https://developers.google.com/search/docs/crawling-indexing/301-redirects) says to use permanent ones when you are sure the redirect will not be reverted.',
    },
    {
      type: 'p',
      text: 'Before launch, export the list of pages that earn traffic from Search Console, map each old URL to a new one, and compare after launch. A rebuild that loses a large share of organic traffic has not saved money, whatever the new site looks like.',
    },
    { type: 'h2', text: 'Getting a second opinion' },
    {
      type: 'p',
      text: 'The decision depends on facts that are easy to misread from inside the company. WakeUP builds premium, complex websites and landing pages; if you are deciding between a restyle and a rebuild, the [website development service](/services/website-development) page shows what that work covers, and the [free marketing audit](/audit) reviews your site and the path from visit to enquiry, so you can base the choice on evidence rather than on taste.',
    },
  ],
}
