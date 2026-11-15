import type { BlogPost } from '@/lib/blog'

export const post: BlogPost = {
  locale: 'en',
  slug: 'website-information-architecture',
  title: 'Website information architecture: how to plan structure and navigation',
  metaTitle: 'Website Information Architecture',
  description:
    'Website information architecture is how pages are grouped, labelled and linked. A six-step method for a larger site: goals, inventory, sitemap, navigation.',
  publishedAt: '2027-02-13T18:00:00+04:00',
  updatedAt: '2027-02-13T18:00:00+04:00',
  service: 'websites',
  reviewState: 'llm_reviewed',
  body: [
    {
      type: 'p',
      text: 'Website information architecture is the way a site\'s pages are grouped, labelled and linked, so visitors find what they came for. On a larger site you plan it before design: set goals, inventory the content, group it the way visitors think, draw a sitemap, set URL and navigation rules, then test the structure with real people before anyone draws a wireframe.',
    },
    { type: 'h2', text: 'What information architecture is, and what it is not' },
    {
      type: 'p',
      text: 'Andy Crestodina of Orbit Media calls it "a fancy word for all this" and adds that "we don\'t need to get fancy" (from [How to Plan a Website: Part I](https://www.orbitmedia.com/blog/how-to-plan-a-website-part-i/)). The plain version: decide which pages exist, which sit under which, and how they link to each other.',
    },
    {
      type: 'p',
      text: 'It is not visual design and it is not the list of pages itself. [Which pages a business website needs](/blog/pages-a-business-website-needs) answers "what should exist". Architecture answers "where does each of them live, what is it called, and how does a visitor get there". On a ten-page site this is a short job. On a site with several services, industries, locations or languages, it is the part of the project that decides whether the site can grow without becoming a maze.',
    },
    { type: 'h2', text: 'Start from goals and visitor tasks' },
    {
      type: 'p',
      text: 'Write down what the site must achieve in terms you can count (enquiries, bookings, applications) and then list the tasks each audience comes to do. A buyer comparing suppliers, a candidate looking for a vacancy and a journalist looking for a logo have different tasks, and a menu built around the company\'s org chart serves none of them. The goals and audience work usually belongs to [the discovery phase](/blog/website-discovery-phase); if it was skipped, do it now, because every later choice is judged against it.',
    },
    {
      type: 'ul',
      items: [
        'Primary goal: the one action the site exists to produce.',
        'Audiences: two to four groups, each with their top three tasks.',
        'Constraints: languages, legal pages, systems the site must connect to.',
        'Growth: the page types you expect to add in the next two years (case studies, locations, products).',
      ],
    },
    { type: 'h2', text: 'Inventory the content you have and the content you need' },
    {
      type: 'p',
      text: 'For an existing site, export every URL into a spreadsheet and give each page an owner, a purpose and a verdict: keep, merge, rewrite or remove. For a new site, list the pages you will need and mark who will supply the content. This is also where redirects are planned if you are replacing a live site; the [website redesign checklist](/blog/website-redesign-checklist) covers URL mapping and 301 redirects in detail.',
    },
    {
      type: 'table',
      head: ['Column in the inventory', 'What goes in it'],
      rows: [
        ['URL or planned URL', 'The current address, or the one you intend to use'],
        ['Page purpose', 'The visitor task or business goal it serves'],
        ['Audience', 'Which group it is for'],
        ['Verdict', 'Keep, merge, rewrite, remove or create'],
        ['Content owner', 'The person who supplies or approves the text'],
      ],
    },
    { type: 'h2', text: 'Group and label the pages with visitors, not colleagues' },
    {
      type: 'p',
      text: 'Teams group pages by how the company is organised. Visitors group them by what they want to do. Card sorting is the cheap way to find out. Samhita Tankala and Katie Sherwin of Nielsen Norman Group define it as "a research method in which study participants place individually labeled cards into groups" ([Card Sorting, 2 February 2024](https://www.nngroup.com/articles/card-sorting-definition/)). In an open sort participants create their own groups; in a closed sort they are given categories to place the cards into.',
    },
    {
      type: 'p',
      text: 'For a first pass, write each page or content type on a card, ask five to ten people from your real audience to sort them and name the piles, and look for pages that most people put together and for names they repeat. Those names are candidates for your menu labels. Use words your buyers use, not internal product names.',
    },
    { type: 'h2', text: 'Draw the sitemap and fix the URL rules' },
    {
      type: 'p',
      text: 'Crestodina\'s method is to list the pages, arrange them into an outline, then draw lines between pages that link to each other: "And voilà: you have a sitemap." Slickplan\'s guide describes the common formats, which serve different jobs:',
    },
    {
      type: 'table',
      head: ['Sitemap type', 'Used for', 'Who reads it'],
      rows: [
        ['Visual sitemap (a diagram)', 'Planning page hierarchy and navigation during the project', 'Your team and the agency'],
        ['HTML sitemap (an outline of the site)', 'A table of contents for the site', 'Visitors, and the team as a planning list'],
        ['XML sitemap (a file)', 'Telling search engines which URLs you care about', 'Search engines'],
      ],
    },
    {
      type: 'p',
      text: 'Number the sections so everyone can refer to "3.2" in feedback, and start with main pages before adding the sub pages, as [Slickplan\'s guide](https://slickplan.com/blog/site-mapping-a-comprehensive-guide) advises. Then write down URL rules once, before pages are built. Google\'s [URL structure guidance](https://developers.google.com/search/docs/crawling-indexing/url-structure) says to use readable words rather than long ID numbers, to separate words with hyphens rather than underscores, and to keep one case if your server treats upper and lower case the same. If the site has several languages, give each its own folder as described in [multilingual website best practices](/blog/multilingual-website-best-practices).',
    },
    {
      type: 'p',
      text: 'One note on search: Google\'s [SEO starter guide](https://developers.google.com/search/docs/fundamentals/seo-starter-guide) says a sitemap file is not required, and that search engines will likely understand your pages as they are. Plan the structure for visitors first. A clear hierarchy helps search anyway, because it produces sensible URLs and internal links.',
    },
    { type: 'h2', text: 'Turn the sitemap into navigation rules' },
    {
      type: 'ul',
      items: [
        'Main menu: only the routes that serve the primary goal and the top audience tasks. Everything else goes to the footer or a section\'s own sub-menu.',
        'Labels: the words from your card sort, in the language of the page. Avoid labels that only insiders understand.',
        'Links in the menu must be real links. Google can generally crawl a link only if it is an `<a>` element with an `href`, according to its [crawlable links documentation](https://developers.google.com/search/docs/crawling-indexing/links-crawlable), so a menu built from clickable elements without one can hide whole sections from search.',
        'Anchor text: descriptive and short. The same documentation advises against "click here" and "read more".',
        'Cross-links: related services, case studies and articles link to each other inside the content, not only through the menu.',
        'Breadcrumbs on deep pages, so a visitor can step back up the hierarchy. Google notes it can show parts of the URL as breadcrumbs in results, another reason to keep URL folders meaningful.',
      ],
    },
    { type: 'h2', text: 'Test the structure before wireframes' },
    {
      type: 'p',
      text: 'Once the sitemap exists, check it with a tree test. Page Laubheimer of Nielsen Norman Group describes it as "an evaluation of a hierarchical category structure, or tree" in which users find the locations where specific resources can be found ([Tree Testing, 6 August 2023](https://www.nngroup.com/articles/tree-testing/)). You give participants a plain text version of your menu hierarchy, ask them to find, for example, where they would look for a price list, and see whether they pick the right branch and how directly they get there.',
    },
    {
      type: 'ol',
      items: [
        'Write six to ten tasks taken from your audience task list.',
        'Show the text-only tree, with no design and no search box.',
        'Record the first branch chosen for each task and whether it was correct.',
        'Rename or move any branch where several people go wrong, then retest.',
        'Only then hand the approved sitemap to the person drawing wireframes.',
      ],
    },
    {
      type: 'p',
      text: 'The wireframe stage that follows is described in [the UX and UI design process](/blog/website-ux-ui-design-process). If you would rather have the structure planned and built by a team, WakeUP builds premium, complex websites and landing pages; see the [website development service](/services/website-development). To see how your current structure performs for search and visitors before you plan changes, request the [free audit](/audit).',
    },
  ],
}
