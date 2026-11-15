import type { BlogPost } from '@/lib/blog'

export const post: BlogPost = {
  locale: 'en',
  slug: 'marketplace-vs-own-online-store',
  title: 'Selling on marketplaces vs own online store: how to decide, and how to start on both',
  metaTitle: 'Marketplace vs Own Online Store',
  description:
    'Selling on marketplaces vs own online store: compare fees, customer data, brand control and traffic, and see a simple path to start on both.',
  publishedAt: '2027-02-01T18:00:00+04:00',
  updatedAt: '2027-02-01T18:00:00+04:00',
  service: 'websites',
  reviewState: 'llm_reviewed',
  body: [
    {
      type: 'p',
      text: 'Selling on marketplaces vs your own online store comes down to a trade. A marketplace gives you shoppers on day one but takes a commission, owns the customer relationship and sets the rules. Your own store gives you margin, customer data and brand control, but you must bring the traffic. For most new sellers the answer is both, in a set order.',
    },
    {
      type: 'p',
      text: 'This is a decision guide, not a how-to for any one marketplace. The fees below are examples from named platforms; they change, and the marketplaces available to you depend on where you sell and ship, so check each current rulebook before you commit.',
    },
    { type: 'h2', text: 'The four differences that matter' },
    {
      type: 'table',
      head: ['', 'Marketplace', 'Own online store'],
      rows: [
        ['Traffic', 'Shoppers already there; you compete on the same results page as other sellers', 'None at first; you earn it with search, ads, email and social'],
        ['Fees', 'Commission on each sale, often plus a subscription or listing fee', 'Platform subscription and payment fees; no commission to a third party'],
        ['Customer data', 'The marketplace owns the relationship and limits how you contact buyers', 'You own names, emails and order history'],
        ['Brand control', 'Standard listing format; your brand is a name on a product page', 'You control design, messaging, pricing and the whole experience'],
        ['Risk', 'The marketplace can change rules, fees or suspend your account', 'You carry the technical and marketing work yourself'],
      ],
    },
    { type: 'h2', text: 'Fees: what you pay on each side' },
    {
      type: 'p',
      text: 'Marketplace fees are a share of every sale. As listed on [Amazon\'s seller pricing page](https://sell.amazon.com/pricing) in November 2026, the Individual plan costs $0.99 per item sold, the Professional plan $39.99 a month, and referral fees depend on category and price: Amazon\'s page shows most categories between 8% and 15%, with outliers from 3% (the part of a watch price above $1,500) to 45% (device accessories), and many categories carry a $0.30 minimum per item. Sendcloud\'s [guide to marketplaces](https://www.sendcloud.com/blog/selling-on-online-marketplaces/) puts typical commissions at around 6.5% to 12.5% by category, and notes sellers often pay a fixed monthly fee too (the article was last updated June 2023, so treat that range as indicative).',
    },
    {
      type: 'p',
      text: 'An own store has a platform cost instead. On [Shopify\'s pricing page](https://www.shopify.com/pricing) in November 2026, Basic was listed at $27 a month billed monthly, or $19 a month billed yearly, with Grow at $72 and $54, and Advanced at $399 and $299. Payment processing and any apps come on top. What you do not pay is a percentage to the marketplace, but you do pay for the traffic. If you compare platforms, [best ecommerce platform for small business](/blog/best-ecommerce-platform-for-small-business) and [Shopify vs WooCommerce](/blog/shopify-vs-woocommerce) go into it.',
    },
    {
      type: 'p',
      text: 'Do the margin sum per product before choosing: price, minus cost, minus commission, minus shipping and returns, minus your marketing cost. A product with thin margins may not survive a 10% commission; a high-margin one may not need the marketplace.',
    },
    { type: 'h2', text: 'Customer data and repeat sales' },
    {
      type: 'p',
      text: 'This is the biggest long-term difference. ShipBob says marketplaces [don\'t let sellers communicate with buyers outside of the site](https://www.shipbob.com/uk/blog/online-store-vs-marketplace-ecommerce-website-sell/), so you cannot build a customer list for future promotions, while the marketplace itself can still contact your customers. Sendcloud makes the same point: you may not send marketplace buyers offers or messages that are not directly related to the order.',
    },
    {
      type: 'p',
      text: 'On your own store, a customer who buys once can be invited back by email, retargeted with ads and asked for a review. If your product is repeat-purchase (consumables, parts, refills), that is where most of the value is. If it is a one-time purchase, the data matters less.',
    },
    { type: 'h2', text: 'Brand control' },
    {
      type: 'p',
      text: 'On a marketplace, shoppers often think they are buying from the marketplace, not from you. The listing format is fixed, the photos sit among competitors\' photos, and the buyer is unlikely to remember who the seller was. Zentail, an ecommerce software company, [warns that](https://www.zentail.com/blog/ecommerce-website-versus-marketplace) "Marketplaces ultimately hold the power to revoke your selling privileges at any time."',
    },
    {
      type: 'p',
      text: 'Your own store lets you tell the brand story, show proof, set bundles and prices, and design the whole path from first visit to checkout. That is worth most when you sell something people compare on more than price: quality, service, design or expertise.',
    },
    { type: 'h2', text: 'Traffic: the honest weakness of an own store' },
    {
      type: 'p',
      text: 'A new store has no visitors. A marketplace has them already: Zentail, citing a Chain Store Age study, says roughly three in four US shoppers start product searches on Amazon instead of Google. That is a US figure; shopping habits in Georgia differ, so use it only as a sign of how strong the pull of large marketplaces can be.',
    },
    {
      type: 'p',
      text: 'To fill your own store you need at least one steady source of visits: search (see the [ecommerce SEO checklist](/blog/ecommerce-seo-checklist)), paid ads, email, or social media. Each takes time or budget before it pays back. Plan for that cost, not just the build.',
    },
    { type: 'h2', text: 'A way to start on both' },
    {
      type: 'ol',
      items: [
        'List your best-selling or easiest-to-ship products on one marketplace that accepts sellers from your country and ships to your buyers. This tests demand without building anything.',
        'Build the own store at the same time, with clear product pages, honest delivery and returns information, and a way to collect emails. Do not link buyers out of the marketplace in ways its rules forbid.',
        'Put your brand name and website on packaging and inserts where the rules allow, and invite buyers to follow you or order direct next time.',
        'Send paid and organic traffic to the own store, not the marketplace, so you build your own audience and data.',
        'Track margin per channel after commissions and ads. Move volume to the channel that earns more.',
      ],
    },
    { type: 'h2', text: 'Which one first' },
    {
      type: 'ul',
      items: [
        'Start with a marketplace if you have a product you can ship now, little budget, and need proof of demand.',
        'Start with your own store if you have a brand story, repeat purchases, high margins, or an existing audience or email list.',
        'Start on both if you have both stock and time to run each one properly.',
      ],
    },
    {
      type: 'p',
      text: 'WakeUP builds premium, complex websites and landing pages, with lead forms, analytics and conversion tracking from day one. See the [website and landing page service](/services/website-development), or run your current site or listing through the [free audit](/audit) before you choose.',
    },
  ],
}
