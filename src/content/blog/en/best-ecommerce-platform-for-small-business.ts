import type { BlogPost } from '@/lib/blog'

export const post: BlogPost = {
  locale: 'en',
  slug: 'best-ecommerce-platform-for-small-business',
  title: 'Best ecommerce platform for small business: choose by what you sell, not by a ranking',
  metaTitle: 'Best Ecommerce Platform: Small Business',
  description:
    'The best ecommerce platform for small business depends on catalogue, payments and delivery. Four platform types compared, with a Georgia payments check.',
  publishedAt: '2027-01-03T15:00:00+04:00',
  updatedAt: '2027-01-03T15:00:00+04:00',
  service: 'websites',
  reviewState: 'llm_reviewed',
  body: [
    {
      type: 'p',
      text: 'The best ecommerce platform for a small business is the one that fits your catalogue size, can take payments from customers in your country, and handles your delivery rules without custom work. A hosted store builder suits most small catalogues, a plugin on your own WordPress site suits owners who want control, and a custom build suits unusual products or processes. Check payments first: it is the step that can rule a platform out.',
    },
    { type: 'h2', text: 'Start with four questions, not a product list' },
    {
      type: 'p',
      text: 'Rankings of "top ecommerce platforms" compare features that most small shops never use. Answer these four questions first, and the shortlist shrinks to one or two options:',
    },
    {
      type: 'ol',
      items: [
        'How many products and variants do you sell, and how often does the catalogue change? Ten products with sizes is a different job from 5,000 spare parts with compatibility rules.',
        'Which payment methods will your customers actually use, and which providers can you open an account with locally?',
        'How do you deliver? Courier price by city, pickup points, same-day in Tbilisi, cash on delivery, or digital goods?',
        'Who will run the store day to day, and how much developer time can you pay for after launch?',
      ],
    },
    { type: 'h2', text: 'Four kinds of platform' },
    {
      type: 'table',
      head: ['Type', 'Examples', 'Good for', 'Watch out for'],
      rows: [
        ['Hosted store builder', 'Shopify, Wix, Squarespace', 'Small to mid catalogues, fast launch, no server upkeep', 'Monthly subscription, transaction fees, limits on checkout changes'],
        ['Plugin on your own site', 'WooCommerce on WordPress', 'Owners who want control and a content-heavy site next to the shop', 'You or your developer handle hosting, updates and security'],
        ['Custom-built store', 'Built on a framework with your own checkout and integrations', 'Unusual pricing, B2B rules, links to ERP or warehouse systems', 'Highest build cost; needs a developer for every change'],
        ['Marketplace listing', 'Local and global marketplaces', 'Testing demand before building anything', 'You rent traffic: the customer relationship and margins belong partly to the marketplace'],
      ],
    },
    {
      type: 'p',
      text: 'The first two cover most small businesses. [WooCommerce](https://wordpress.org/plugins/woocommerce/) is an open-source plugin for WordPress and its core is free, but paid extensions, themes and support are sold separately, and hosting is yours to arrange. Hosted builders bundle hosting and updates into a subscription. For the general trade-off between renting and owning a site, see our comparison of [Wix and WordPress](/blog/wix-vs-wordpress), and for when a custom build is justified, [custom website vs template](/blog/custom-website-vs-template).',
    },
    { type: 'h2', text: 'Check payments for Georgia before anything else' },
    {
      type: 'p',
      text: 'Payment support differs by country, and a platform that looks perfect can be unusable if you cannot collect money through it. As one example, Shopify\'s own help page on [supported countries for Shopify Payments](https://help.shopify.com/en/manual/payments/shopify-payments/supported-countries) lists 41 countries and regions, and Georgia is not among them. A merchant in an unlisted country must connect a third-party payment provider instead.',
    },
    {
      type: 'p',
      text: 'That is not a reason to rule Shopify out, but it changes the cost. Shopify\'s [pricing page](https://www.shopify.com/pricing), checked in November 2026, shows an extra fee on every order paid through a third-party provider: 2% on the Basic plan, 1% on Grow, 0.6% on Advanced and 0.2% on Plus. That fee is on top of whatever your payment provider charges. Prices change, so confirm on the vendor page before you decide.',
    },
    {
      type: 'p',
      text: 'Before committing to any platform, ask your bank or payment provider which shop platforms they have a ready integration for, and request a test account. Then confirm the integration is maintained and supports your currency (GEL) and the payment methods your buyers expect. Integrations for local providers vary by platform and change over time, so treat that confirmation as a required step, not a formality.',
    },
    { type: 'h2', text: 'Catalogue and delivery: where small shops outgrow tools' },
    {
      type: 'ul',
      items: [
        'Variants. Size and colour combinations are supported everywhere; complex rules (compatibility, made-to-order options, volume pricing) usually need extensions or custom work.',
        'Delivery pricing. Flat rate or weight-based tables are standard. Pricing by Tbilisi district, pickup points or courier-API quotes often needs a plugin or integration. List your delivery rules on paper and test each against the platform with a demo order.',
        'Languages. If you sell in Georgian and English, check that product pages, checkout, emails and URLs can all be translated, not only the menu.',
        'Stock and accounting. If stock lives in a warehouse or accounting system, check whether the platform can sync with it. Manual double entry becomes error-prone as order volume grows.',
        'Content and search. A shop that also publishes guides or category pages benefits from a platform whose pages you can shape freely.',
      ],
    },
    { type: 'h2', text: 'Costs beyond the subscription' },
    {
      type: 'p',
      text: 'Compare total monthly cost, not the headline plan price. Include the plan, payment fees (provider plus any platform surcharge), paid apps or extensions, hosting if you self-host, a domain, design and setup, and developer time for changes. A cheap plan with three paid add-ons and a surcharge on each order can cost more than a higher plan that includes them. For site costs in general, see [how much a website costs](/blog/how-much-does-a-website-cost).',
    },
    {
      type: 'p',
      text: 'Once the store is live, the money is made or lost at checkout. Our guide to [reducing cart abandonment](/blog/how-to-reduce-cart-abandonment) covers what to fix first, and it is worth checking the platform lets you make those changes.',
    },
    { type: 'h2', text: 'A simple way to decide' },
    {
      type: 'table',
      head: ['If this describes you', 'Start by looking at'],
      rows: [
        ['A small catalogue, want to launch quickly, little technical help', 'A hosted builder, after confirming payments work in Georgia'],
        ['Already on WordPress, content matters, a developer is available', 'WooCommerce'],
        ['Unusual pricing, B2B accounts, integrations with ERP or warehouse', 'A custom build, possibly with a headless setup (see our note on a [headless CMS](/blog/headless-cms-for-business-website))'],
        ['No proof yet that people will buy online', 'A marketplace listing or a single landing page with an order form'],
      ],
    },
    {
      type: 'p',
      text: 'WakeUP builds premium, complex websites and landing pages, including stores with custom requirements; see our [website development service](/services/website-development). If you are unsure which route fits, send your site and catalogue details through the [free audit](/audit) and we will tell you what we would check first.',
    },
  ],
}
