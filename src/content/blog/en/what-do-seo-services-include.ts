import type { BlogPost } from '@/lib/blog'

export const post: BlogPost = {
  locale: 'en',
  slug: 'what-do-seo-services-include',
  title: 'What do SEO services include? Deliverables to ask for in writing',
  metaTitle: 'What Do SEO Services Include?',
  description:
    'What do SEO services include? Technical fixes, on-page work, content, links and reporting - and the deliverables to get in writing before you sign.',
  publishedAt: '2026-12-19T15:00:00+04:00',
  updatedAt: '2026-12-19T15:00:00+04:00',
  service: 'seo',
  reviewState: 'llm_reviewed',
  body: [
    {
      type: 'p',
      text: 'What do SEO services include? Five areas: technical SEO (can Google crawl and read your site), on-page SEO (does each page say what it is), content (pages worth ranking), links (other sites that point to yours) and reporting. A good proposal names the deliverables in each area. If an offer lists only "SEO optimisation" with no detail, ask what you actually get.',
    },
    { type: 'h2', text: 'What Google says SEO providers do' },
    {
      type: 'p',
      text: 'Google\'s own guidance [lists services SEOs may provide](https://developers.google.com/search/docs/fundamentals/do-i-need-seo): reviews of site content or structure, technical advice on website development, content development, keyword research and training. That matches the structure of this post. Prices are covered separately in [how much SEO costs](/blog/how-much-does-seo-cost).',
    },
    { type: 'h2', text: 'Technical SEO' },
    {
      type: 'p',
      text: 'This is the base. If Google cannot reach or understand your pages, nothing else counts. Expect an audit first, then fixes. Typical items:',
    },
    {
      type: 'ul',
      items: [
        'Crawling and indexing: robots.txt, XML sitemaps, pages blocked by mistake, duplicate pages and canonical tags, redirects and error pages.',
        'Speed and mobile use: loading, layout stability and responsiveness on phones.',
        'Structured data where it fits the page, such as organisation or local business details.',
        'Language versions, if you publish in Georgian and English: each version needs to point to the other correctly.',
        'Set-up of [Search Console](https://support.google.com/webmasters/answer/9128668), which shows how often your site appears in Google, which queries trigger it, and indexing problems.',
      ],
    },
    {
      type: 'p',
      text: 'Ask whether the provider fixes issues or only lists them. A report of 200 warnings is not a deliverable; a prioritised list with owners and dates is. The [SEO checklist for small business](/blog/seo-checklist-for-small-business) shows what you can check yourself first.',
    },
    { type: 'h2', text: 'On-page SEO and content' },
    {
      type: 'p',
      text: 'On-page work shapes each page around what a buyer searches. Google\'s [SEO starter guide](https://developers.google.com/search/docs/fundamentals/seo-starter-guide) covers the elements: unique and clear page titles, relevant descriptions, headings, descriptive link text, images with alt text, and a sensible URL structure.',
    },
    {
      type: 'ul',
      items: [
        'Keyword research that maps queries to pages, with the intent behind each. See [keyword research for SEO](/blog/keyword-research-for-seo).',
        'Titles, descriptions and headings written for existing pages.',
        'New or rewritten service pages, guides and comparison pages, each aimed at one need.',
        'Internal links between related pages.',
        'Local SEO and a complete Google Business Profile, if you serve a city or region. See [local SEO tips](/blog/local-seo-tips).',
      ],
    },
    {
      type: 'p',
      text: 'Content is where scope varies most. Find out how many pages are included each month, who writes them, who checks facts, and whether you approve before publishing.',
    },
    { type: 'h2', text: 'Links' },
    {
      type: 'p',
      text: 'Links from other sites are a signal that your pages are worth citing. Legitimate work includes getting listed in relevant directories and associations, earning mentions through useful content or PR, and recovering mentions that name you without linking. Google\'s [spam policies](https://developers.google.com/search/docs/essentials/spam-policies) treat buying or selling links that pass ranking credit as link spam, with an exception for paid links that are marked with rel="nofollow" or rel="sponsored". Ask the provider to explain, in plain language, how it will earn links and to show you each one.',
    },
    { type: 'h2', text: 'Reporting' },
    {
      type: 'p',
      text: 'Reports should answer one question: is more of the right traffic arriving, and is it turning into enquiries? Rankings and clicks come from Search Console; enquiries come from your analytics, forms and CRM. A monthly report should show:',
    },
    {
      type: 'ul',
      items: [
        'What was done this month, page by page.',
        'Organic clicks and impressions for the queries you agreed to target.',
        'Enquiries or sales from organic search, not only visits.',
        'What is planned next month and what needs your input.',
      ],
    },
    { type: 'h2', text: 'Deliverables to ask for in writing' },
    {
      type: 'table',
      head: ['Area', 'Ask for', 'Check'],
      rows: [
        ['Technical', 'Audit with prioritised fixes; confirmation each fix was made', 'Search Console shows the fixed pages indexed'],
        ['Keywords', 'Target list mapped to pages, with intent', 'Each page has one clear purpose'],
        ['On-page', 'Titles, descriptions and headings for named pages', 'Changes listed in the monthly report'],
        ['Content', 'Number of pages per month, who writes, approval step', 'You approve before publishing'],
        ['Links', 'Method described; list of links gained', 'No paid links without nofollow or sponsored'],
        ['Reporting', 'Monthly report in agreed metrics, with enquiries', 'You have read access to the data'],
        ['Access and ownership', 'You own the accounts; read access to Search Console', 'Nothing hidden behind the provider'],
      ],
    },
    { type: 'h2', text: 'Red flags in a proposal' },
    {
      type: 'p',
      text: 'Google\'s guidance on hiring an SEO is direct: "No one can guarantee a #1 ranking on Google." It also tells owners to be careful if a company is secretive or will not clearly explain what it intends to do, to ask how success will be measured, and to ask whether the SEO will share all the changes made to the site. It reminds owners that they are responsible for the actions of any company they hire. Google\'s starter guide adds that a change can take from a few hours to several months to show up, and suggests waiting a few weeks before judging it.',
    },
    {
      type: 'p',
      text: 'WakeUP offers SEO as a service: technical audit and fixes, keyword research in Georgian and English, service and landing pages, local SEO and a monthly report, as described on the [SEO service page](/services/seo). It is one option; compare any proposal, including WakeUP\'s, against the table above. If you want an outside view of your site first, the [free audit](/audit) is available.',
    },
  ],
}
