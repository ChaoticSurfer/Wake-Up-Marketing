import type { BlogPost } from '@/lib/blog'

export const post: BlogPost = {
  locale: 'en',
  slug: 'static-vs-dynamic-website',
  title: 'Static vs dynamic website: which one suits a company site?',
  metaTitle: 'Static vs Dynamic Website Explained',
  description:
    'Static vs dynamic website in plain terms: how each works, where Jamstack fits, and which suits a company site based on speed and editing needs.',
  publishedAt: '2027-02-12T15:00:00+04:00',
  updatedAt: '2027-02-12T15:00:00+04:00',
  service: 'websites',
  reviewState: 'llm_reviewed',
  body: [
    {
      type: 'p',
      text: 'A static website serves the same ready-made files to every visitor. A dynamic website builds each page when it is requested, usually from a database. For most company sites the real choice is a mix: pages that rarely change are prepared in advance for speed, and only the parts that need live data or logins run on a server. Pick by how often content changes and who edits it.',
    },
    { type: 'h2', text: 'What static and dynamic mean' },
    {
      type: 'p',
      text: 'MDN, the web documentation project, describes [a static site as one that "returns the same hard-coded content from the server whenever a particular resource is requested"](https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Server-side/First_steps/Introduction). On a dynamic site, in its words, "some of the response content is generated dynamically, only when needed", and the HTML pages are normally created by inserting data from a database into templates.',
    },
    {
      type: 'p',
      text: 'A practical test: if two visitors request the same page and always get identical content, the page can be static. If the page shows a basket, a logged-in account, live stock or search results, something has to be computed per visitor, so that part is dynamic.',
    },
    { type: 'h2', text: 'Static and dynamic side by side' },
    {
      type: 'table',
      head: ['', 'Static', 'Dynamic'],
      rows: [
        ['How a page is made', 'Built once, before anyone visits', 'Assembled on each request, or cached after the first one'],
        ['Needs a database at visit time', 'No', 'Usually yes'],
        ['Typical speed', 'Very fast: files can be served from a CDN', 'Depends on server, database and caching'],
        ['Content editing', 'Through files or a separate CMS, then a rebuild', 'Edit and publish instantly in the CMS'],
        ['Logins, baskets, bookings', 'Need an added service or API', 'Built in'],
        ['Attack surface', 'Small: no server logic to exploit', 'Larger: server, database and plugins need updates'],
        ['Good fit', 'Brochure sites, landing pages, documentation, blogs', 'Shops, portals, member areas, large frequently edited sites'],
      ],
    },
    {
      type: 'p',
      text: 'MDN\'s glossary says static sites are fast, secure and easy to deploy [because they can be served from a CDN](https://developer.mozilla.org/en-US/docs/Glossary/SSG) and have no server-side logic. That describes the main advantage and the main limit in one sentence: nothing runs per visitor, so nothing per visitor can be shown.',
    },
    { type: 'h2', text: 'Where Jamstack fits' },
    {
      type: 'p',
      text: 'Jamstack is the name for a way of combining the two. Its own site defines it as [an architectural approach "that decouples the web experience layer from data and business logic"](https://jamstack.org/), with custom logic and third-party services reached through APIs. In practice: the pages are prepared in advance, and anything live (a form, search, payments, a booking widget) is a call to an outside service.',
    },
    {
      type: 'p',
      text: 'This is how many modern frameworks work. Next.js, for example, can [generate an HTML file for each route at build time](https://nextjs.org/docs/app/guides/static-exports) and host the result on any server that can serve static files. The same documentation lists what that mode cannot do: server actions, cookies, redirects and rewrites, and incremental regeneration among them. If you need those, you run the site on a server, and it becomes a hybrid.',
    },
    {
      type: 'p',
      text: 'So Jamstack is not a third kind of site. It is a static front end that borrows dynamic features from APIs. For how the editing side of this works, see our explanation of a [headless CMS for a business website](/blog/headless-cms-for-business-website), and for one framework that supports all of these modes, [Next.js for business websites](/blog/nextjs-for-business-websites).',
    },
    { type: 'h2', text: 'Speed: what is true and what is not' },
    {
      type: 'p',
      text: 'Static pages tend to start loading sooner because no server work happens before the response. Google\'s web.dev gives a rough guide that [a good time to first byte is 0.8 seconds or less](https://web.dev/articles/ttfb) and poor is above 1.8 seconds. A page served from a CDN edge is well placed to meet that; a dynamic page with a slow database query or no caching may not be.',
    },
    {
      type: 'p',
      text: 'But a fast first byte is not a fast site. Heavy images, third-party scripts and large JavaScript bundles slow down static sites as much as dynamic ones, and a well-cached dynamic site can match a static one for visitors. Treat static as a head start, not a guarantee. Our guides to [improving website speed](/blog/how-to-improve-website-speed) and [Core Web Vitals](/blog/improve-core-web-vitals) cover the rest.',
    },
    { type: 'h2', text: 'Content editing decides more than speed does' },
    {
      type: 'p',
      text: 'The question that most often decides the choice is who changes the content and how quickly. A marketing team that publishes news, offers or case studies weekly needs a simple editor and instant publishing. Pure static files edited by a developer are a poor fit. A static front end with a CMS behind it works, but publishing triggers a rebuild, so a change appears after the build finishes rather than instantly.',
    },
    {
      type: 'ul',
      items: [
        'Content changes a few times a year: static (or static with a light CMS) is the simplest to keep running.',
        'Content changes weekly by non-developers: a CMS is essential, either a traditional one or a headless one feeding a static or hybrid front end.',
        'Users log in, buy, book or see personalised data: you need dynamic features, so plan for a server or a hybrid.',
        'The same content must reach a website and an app: a headless setup is worth discussing.',
      ],
    },
    { type: 'h2', text: 'Which one for a company site' },
    {
      type: 'p',
      text: 'A typical company site (services, about, contact, a blog, a few landing pages) is mostly static content with a few dynamic touches such as forms. That pattern suits a hybrid: prepare the pages in advance, run the forms and any customer area as dynamic features. If the site is a shop or a portal, start from dynamic and cache aggressively. The line between a site and an application matters here too; see [web application vs website](/blog/web-application-vs-website).',
    },
    {
      type: 'p',
      text: 'Be wary of anyone who says one approach is always better. The right answer comes from your editing routine, your features and who will maintain it. WakeUP builds premium, complex websites and landing pages; see its [website development](/services/website-development) service. If you already have a site and wonder whether its structure is holding you back, the [free audit](/audit) is a place to start.',
    },
  ],
}
