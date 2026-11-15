import type { BlogPost } from '@/lib/blog'

export const post: BlogPost = {
  locale: 'en',
  slug: 'shopify-vs-woocommerce',
  title: 'Shopify vs WooCommerce for a store in Georgia: hosting, payments, SEO and running cost',
  metaTitle: 'Shopify vs WooCommerce in Georgia',
  description:
    'Shopify vs WooCommerce for a Georgian store: how hosting, payments, SEO and running costs differ, and which suits a company of 20 to 250 people.',
  publishedAt: '2027-01-30T09:00:00+04:00',
  updatedAt: '2027-01-30T09:00:00+04:00',
  service: 'websites',
  reviewState: 'llm_reviewed',
  body: [
    {
      type: 'p',
      text: 'Shopify vs WooCommerce comes down to who looks after the store. Shopify is a paid, hosted service: hosting and updates are included, but a Georgian merchant pays an extra fee on every order paid through a third-party gateway. WooCommerce is a free WordPress plugin: you choose the hosting, payment gateway and developer. For most Georgian stores, payments and who maintains the shop decide the choice.',
    },
    { type: 'h2', text: 'The difference in one table' },
    {
      type: 'table',
      head: ['', 'Shopify', 'WooCommerce'],
      rows: [
        ['What it is', 'A hosted subscription service', 'A plugin for WordPress that you install on your own hosting'],
        ['Hosting and updates', 'Included in the plan', 'Your hosting provider and your developer'],
        ['Payments in Georgia', 'Shopify Payments is not available; you connect a third-party provider and pay a platform fee on top', 'WooPayments is not available either; you connect a gateway your bank or provider supports, with no platform fee on top'],
        ['Design and changes', 'Themes and apps within the platform\'s rules', 'Open code; almost anything can be changed by a developer'],
        ['Main running costs', 'Plan, apps, per-order fee on third-party payments', 'Hosting, paid extensions, maintenance and developer time'],
        ['Best when', 'You want to launch with little technical upkeep', 'You want control, a content-heavy site or custom logic next to the shop'],
      ],
    },
    {
      type: 'p',
      text: 'The rest of this post explains each row for a company in Georgia. For a wider look that also covers Wix, custom builds and marketplaces, see [the best ecommerce platform for a small business](/blog/best-ecommerce-platform-for-small-business).',
    },
    { type: 'h2', text: 'Hosting and who maintains it' },
    {
      type: 'p',
      text: 'With Shopify, the servers, security updates and checkout are the platform\'s job. You work in an admin panel and choose a plan. That suits a team with no developer on staff.',
    },
    {
      type: 'p',
      text: 'WooCommerce is, in its own description on [WordPress.org](https://wordpress.org/plugins/woocommerce/), an open-source platform for WordPress, and the page adds: "This plugin is free but offers additional paid commercial upgrades or support." It lists PHP 7.4 or greater (8.0 or greater recommended) and MySQL 5.5.5 or MariaDB 10.1 or greater as requirements, and a 256 MB memory limit and HTTPS support as recommendations. Choosing a host that meets them, keeping WordPress, the theme and plugins updated, taking backups and watching security all become your responsibility. The checklists in [website maintenance](/blog/website-maintenance-checklist) and [website security basics](/blog/website-security-basics) show what that involves. Ask who will do it before you pick WooCommerce, because an unmaintained shop becomes a risk.',
    },
    { type: 'h2', text: 'Payments: the deciding factor in Georgia' },
    {
      type: 'p',
      text: 'Check this first, because it can end the discussion. Shopify\'s [list of supported countries for Shopify Payments](https://help.shopify.com/en/manual/payments/shopify-payments/supported-countries) does not include Georgia, so a Georgian store connects a third-party provider. Shopify states that "third-party transaction fees apply to all transactions processed through third-party and alternate payment gateways". On its [pricing page](https://www.shopify.com/pricing), checked in November 2026, that fee is 2% on Basic, 1% on Grow, 0.6% on Advanced and 0.2% on Plus, on top of whatever the provider charges. As an illustration with round numbers: a shop selling 100,000 in a month (in any currency) on Basic pays 2,000 in that platform fee alone.',
    },
    {
      type: 'p',
      text: 'WooCommerce does not add a platform fee of its own, and the plugin page cites "100+ payment gateways". But its own payments product, WooPayments, is listed only for the US, UK, Ireland, Australia, New Zealand, Canada, Spain, France, Germany and Italy. So a Georgian store depends on a gateway that a bank or payment provider supplies for WooCommerce. Whether your bank has one, and who supports it, is a question to ask them in writing before any build starts. The same applies to Shopify: ask which third-party provider works with it and in GEL.',
    },
    { type: 'h2', text: 'SEO: both can rank, the work is similar' },
    {
      type: 'p',
      text: 'Neither platform ranks a store for you. What matters is the same on both: a crawlable site, unique product and category pages, fast loading and clear titles. Google\'s [SEO starter guide](https://developers.google.com/search/docs/fundamentals/seo-starter-guide) is platform-neutral. Shopify\'s [SEO help pages](https://help.shopify.com/en/manual/promoting-marketing/seo/seo-faqs) link to guides on editing robots.txt.liquid and on finding and submitting your sitemap. WooCommerce sits on WordPress, where your developer works with the theme and plugin code directly.',
    },
    {
      type: 'ul',
      items: [
        'Languages. A store in Georgian and English needs translated product pages, checkout, emails and URLs, not only a menu. Test how each platform handles it with a demo; see [multilingual website best practices](/blog/multilingual-website-best-practices).',
        'Speed. Themes, apps and plugins all add weight on either platform. See [how to improve website speed](/blog/how-to-improve-website-speed).',
        'Pages that sell. Product pages decide conversion; see [product page optimization](/blog/product-page-optimization) and the [ecommerce SEO checklist](/blog/ecommerce-seo-checklist).',
      ],
    },
    { type: 'h2', text: 'Running cost' },
    {
      type: 'p',
      text: 'As listed on Shopify\'s pricing page in November 2026, Basic is $27 a month billed monthly or $19 a month billed yearly, Grow $72 or $54, Advanced $399 or $299, and Plus starts at $2,300 a month. Prices change, so check the vendor page. Apps are extra, and so is the per-order fee above.',
    },
    {
      type: 'p',
      text: 'For WooCommerce the plugin is free, but you pay for hosting, a domain, any paid extensions or themes, setup, and ongoing maintenance. Hosting prices vary widely by provider, so get quotes. The honest comparison is total monthly cost over a year, including your developer\'s hours:',
    },
    {
      type: 'ol',
      items: [
        'List the plan or hosting, domain, theme, extensions or apps.',
        'Add payment fees: provider fees plus, for Shopify, the platform fee on your expected sales.',
        'Add maintenance: who updates, backs up and fixes things, and what they charge.',
        'Add the one-off build and design cost, spread over 12 to 24 months.',
      ],
    },
    {
      type: 'p',
      text: 'For site costs in general, see [how much a website costs](/blog/how-much-does-a-website-cost).',
    },
    { type: 'h2', text: 'Which to choose' },
    {
      type: 'table',
      head: ['If this is you', 'Lean towards'],
      rows: [
        ['Small to mid catalogue, no developer, want to launch quickly, and a provider that works with Shopify in Georgia', 'Shopify'],
        ['Already on WordPress, publish a lot of content, have a developer or agency to maintain it', 'WooCommerce'],
        ['Heavy order volume on Shopify\'s lower plans, where the per-order fee grows', 'Run the numbers; WooCommerce or a higher plan may cost less'],
        ['Unusual pricing, B2B accounts or ERP and warehouse links', 'WooCommerce or a custom build; see [custom website vs template](/blog/custom-website-vs-template)'],
      ],
    },
    {
      type: 'p',
      text: 'WakeUP builds premium, complex websites and landing pages, including stores with custom requirements; see the [website development service](/services/website-development). If you are unsure which platform fits, the [free audit](/audit) is a way to start the conversation.',
    },
  ],
}
