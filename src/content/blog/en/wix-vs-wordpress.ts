import type { BlogPost } from '@/lib/blog'

export const post: BlogPost = {
  locale: 'en',
  slug: 'wix-vs-wordpress',
  title: 'Wix vs WordPress: which one suits a company website?',
  metaTitle: 'Wix vs WordPress for a Company Site',
  description:
    'Wix vs WordPress compared for a company website: who owns hosting, how easy it is to leave, SEO control, upkeep and the real cost of ownership.',
  publishedAt: '2026-12-28T18:00:00+04:00',
  updatedAt: '2026-12-28T18:00:00+04:00',
  service: 'websites',
  reviewState: 'llm_reviewed',
  body: [
    {
      type: 'p',
      text: 'Wix vs WordPress comes down to who runs the site. Wix is a hosted builder: it provides the tools, hosting and upkeep, and your site stays on its servers. WordPress is free, open source software that you host yourself (or buy as a managed service), which gives more control and more maintenance. Wix suits a simple site you want running quickly; WordPress suits a site that must grow, integrate and be moved freely.',
    },
    { type: 'h2', text: 'The real difference: renting versus owning' },
    {
      type: 'p',
      text: 'Wix is software as a service. You subscribe, build inside its editor and publish to its infrastructure. WordPress is, in its own words, "open source software", [licensed under the General Public License](https://wordpress.org/about/), which includes the freedom to change the program to do what you wish.',
    },
    {
      type: 'p',
      text: 'One naming trap: WordPress.com and WordPress.org are different offers of the same software. [WordPress.com](https://wordpress.com/support/com-vs-org/) "includes managed hosting" and handles updates and backups. With self-hosted WordPress.org, the same page says "You must find and pay for a hosting provider yourself." When someone compares Wix with WordPress, check which of the two they mean. This post mostly means self-hosted WordPress, since that is where the two differ most. For plan prices on both, see [how much a website costs](/blog/how-much-does-a-website-cost).',
    },
    { type: 'h2', text: 'Control, and what leaving costs' },
    {
      type: 'p',
      text: 'The clearest difference appears when you want to move. Wix\'s help centre says a site "needs to be hosted and operated on Wix\'s servers" and you can keep a domain bought elsewhere and connect it, but the site itself stays on Wix\'s servers. Moving to another platform therefore means rebuilding the site there.',
    },
    {
      type: 'p',
      text: 'A WordPress site lives in files and a database that you can back up and move between hosts or developers. That matters if you later outgrow the platform, change agencies or want custom functionality. The same freedom is why WordPress needs someone to look after it.',
    },
    { type: 'h2', text: 'SEO: both can rank, the work is the same' },
    {
      type: 'p',
      text: 'Nothing in Google\'s guidance favours either platform. Google\'s [SEO starter guide](https://developers.google.com/search/docs/fundamentals/seo-starter-guide) says titles should be "unique to the page, clear and concise," that URLs should use words people understand, and that your CMS may generate the title element for you. It describes what a page should do, not which platform to use.',
    },
    {
      type: 'p',
      text: 'What differs is how easily you can reach those basics and go beyond them:',
    },
    {
      type: 'ul',
      items: [
        'Titles, descriptions, URLs and redirects: both platforms let you set them; check that you can edit each one per page, and how redirects are handled when you change a URL.',
        'Structured data, custom templates and unusual page types: usually easier to add on WordPress through plugins or custom code; on Wix you work within what the editor and its apps allow.',
        'Multilingual sites: if you need Georgian and English versions, check how each platform handles separate URLs per language before choosing, rather than after.',
        'Speed: depends on the template, images and add-ons on either platform, so test the actual site rather than trusting the platform name.',
      ],
    },
    {
      type: 'p',
      text: 'For the fundamentals either way, use the [small business website mistakes](/blog/small-business-website-mistakes) list and the [website redesign checklist](/blog/website-redesign-checklist).',
    },
    { type: 'h2', text: 'Maintenance: who patches what' },
    {
      type: 'p',
      text: 'On Wix, hosting, security updates and platform upkeep are part of the subscription. On self-hosted WordPress, they are your job or your host\'s. WordPress\'s [upgrade documentation](https://developer.wordpress.org/advanced-administration/upgrade/upgrading/) says minor core releases, which include security fixes, install automatically on most sites, but major releases on existing sites do not, and plugins and themes update automatically only in special cases such as critical security patches. The same page warns: "Verify the backups you created are there and usable. This is essential."',
    },
    {
      type: 'p',
      text: 'The [hosting requirements](https://wordpress.org/about/requirements/) also move over time: the recommendation is currently PHP 8.3 or greater, MariaDB 10.11 or greater or MySQL 8.4 or greater, and HTTPS. A site on an old host can end up running unsupported software. Budget for someone to apply updates, test them and restore from a backup if one goes wrong.',
    },
    { type: 'h2', text: 'Cost of ownership' },
    {
      type: 'p',
      text: 'The listed price is only part of it. Compare these over three years rather than the first month:',
    },
    {
      type: 'table',
      head: ['Cost item', 'Wix', 'Self-hosted WordPress'],
      rows: [
        ['Software or plan', 'Subscription, renewed for as long as the site runs', 'Software is free; paid themes and plugins may apply'],
        ['Hosting and security', 'Included in the plan', 'Paid separately, quality varies by host'],
        ['Updates and backups', 'Handled by Wix', 'You or a developer; allow time or a retainer'],
        ['Design and build', 'Mostly your time, within the editor', 'Theme setup or custom development'],
        ['Changing platform later', 'Rebuild the site', 'Move files and database, possibly redesign'],
      ],
    },
    { type: 'h2', text: 'Which one for whom' },
    {
      type: 'ul',
      items: [
        'Choose Wix if the site is a few pages, you will edit it yourself, nobody will maintain servers, and you accept staying on the platform.',
        'Choose WordPress if you need custom features, integrations with your CRM or booking system, several languages, a large blog or the option to change developers.',
        'Choose a managed WordPress.com plan if you want WordPress\'s editor and ecosystem but do not want to run hosting.',
      ],
    },
    { type: 'h2', text: 'When neither fits' },
    {
      type: 'p',
      text: 'A company with complex requirements, such as custom workflows, a premium design system or tight performance targets, often outgrows both. In that case the useful comparison is custom against template, covered in [custom website vs template](/blog/custom-website-vs-template). WakeUP builds premium, complex websites and landing pages, and its [website development service](/services/website-development) is one option when the brief is beyond a template. If you already have a site and are unsure whether to keep its platform, the [free marketing audit](/audit) is a way to get an outside view.',
    },
  ],
}
