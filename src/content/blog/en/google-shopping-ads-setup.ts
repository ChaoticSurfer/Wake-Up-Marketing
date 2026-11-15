import type { BlogPost } from '@/lib/blog'

export const post: BlogPost = {
  locale: 'en',
  slug: 'google-shopping-ads-setup',
  title: 'Google Shopping ads: how to set them up for your online store',
  metaTitle: 'Google Shopping Ads Set-Up Guide',
  description:
    'Google Shopping ads need a Merchant Center account, a clean product feed and a linked Google Ads account. The order of work, and what to check in Georgia.',
  publishedAt: '2027-01-16T12:00:00+04:00',
  updatedAt: '2027-01-16T12:00:00+04:00',
  service: 'advertising',
  reviewState: 'llm_reviewed',
  body: [
    {
      type: 'p',
      text: 'Google Shopping ads run on your product data, not on keywords you write. To set them up you add your products to Google Merchant Center, create a campaign in Google Ads, and link the two accounts. [Google lists exactly these three steps](https://support.google.com/google-ads/answer/13975266). Most of the result is decided by the first one: how complete and accurate your product feed is.',
    },
    { type: 'h2', text: 'Check availability for Georgia first' },
    {
      type: 'p',
      text: 'Before you build anything, read Google’s [supported languages and currencies page](https://support.google.com/merchants/answer/160637). Georgia appears in its country table with the Georgian lari (GEL) as a currency. The same page lists the languages in which Shopping ads and free listings are supported, and Georgian is not among them. The table also marks countries where the Shopping tab is available to users, and Georgia carries no such mark.',
    },
    {
      type: 'p',
      text: 'What this means in practice: write your product titles and descriptions in a listed language, usually English or Russian, if you want to target Georgia, and test with a small budget before you plan around Shopping. Rules change, so confirm the current state in your own Merchant Center account. Google Ads also does not support Georgian as an ad language ([Google Ads Help](https://support.google.com/google-ads/answer/6333734)), so do not plan Georgian-language ad text either.',
    },
    { type: 'h2', text: 'Step 1: create and verify the Merchant Center account' },
    {
      type: 'p',
      text: 'Merchant Center is where your products live. After you create the account, you verify and claim your website. Google explains the difference: [verifying lets Google know you are the owner, and claiming creates a link between your store address and the Merchant Center account](https://support.google.com/merchants/answer/176793). A single URL can only be claimed by one account. If your site is already verified in Search Console, you can skip to the claiming step.',
    },
    { type: 'h2', text: 'Step 2: build the product feed' },
    {
      type: 'p',
      text: 'The feed is a list of your products with attributes. Google’s [product data specification](https://support.google.com/merchants/answer/7052112) sets the rules. These are the core attributes it marks as required:',
    },
    {
      type: 'table',
      head: ['Attribute', 'What Google asks for'],
      rows: [
        ['id', 'A unique identifier for each product'],
        ['title', 'Plain text, up to 150 characters'],
        ['description', 'Plain text, up to 5,000 characters'],
        ['link', 'The landing page, on your verified domain'],
        ['image_link', 'The main image, with no promotional text, watermarks or borders; at least 500 x 500 pixels, enforced from 31 January 2027'],
        ['availability', 'in_stock, out_of_stock, preorder or backorder'],
        ['price', 'A number plus an ISO currency code, for example 15.00 USD'],
        ['brand', 'Required for new products, except movies, books and music'],
        ['gtin or mpn', 'GTIN when your product has one; MPN only if it has no manufacturer GTIN'],
      ],
    },
    {
      type: 'p',
      text: 'Most store platforms can produce this feed for you or connect to Merchant Center. If you are still choosing a platform, see [how to choose an ecommerce platform](/blog/best-ecommerce-platform-for-small-business). Whatever produces the feed, open it and read it: the platform’s defaults are rarely your best titles.',
    },
    { type: 'h2', text: 'Feed quality is the main lever' },
    {
      type: 'p',
      text: 'In a search campaign you tune keywords. In Shopping, Google matches your products to searches using the feed, so the feed is the keyword list. Google’s [title guidance](https://support.google.com/merchants/answer/6324415) gives specific rules:',
    },
    {
      type: 'ul',
      items: [
        'Put the important words first: "Users will usually notice only the first 70 or fewer characters of your title, depending on screen size."',
        'Name what the product is, with brand, material, use or other defining features, because keywords in the title connect it with a person’s search.',
        'Give each variant its own distinguishing detail, such as size or colour, in its title.',
        'Keep promotions out of titles. Prices, sale dates, shipping and your company name belong in other attributes.',
      ],
    },
    {
      type: 'p',
      text: 'Two more checks matter. Give every variant of a product the same item_group_id, so sizes and colours are grouped; the specification requires it for variants in several countries and for all variants in free listings. And submit a GTIN only when you are sure it is correct: Google says "When in doubt don’t provide this attribute." A wrong identifier causes more trouble than a missing one.',
    },
    { type: 'h2', text: 'Step 3: link Google Ads and choose the campaign type' },
    {
      type: 'p',
      text: 'Link your Google Ads account to Merchant Center. Google states there is [no waiting period after linking](https://support.google.com/google-ads/answer/13975266), although products can take a few hours or days to appear because Google must crawl and index them, and a new campaign can take one to two days to be reviewed.',
    },
    {
      type: 'p',
      text: 'Then pick the campaign type. Both Performance Max and standard Shopping campaigns can serve Shopping ads. Google calls Performance Max "the best way to maximize your online sales" on that page, but the two differ in control. Performance Max does not support campaign-level negative keywords, while standard Shopping does. You can run both on the same products; where targeting overlaps, Ad Rank decides which serves. Google’s Experiments tool lets you compare them. For the trade-offs, read [Performance Max explained](/blog/performance-max-explained) and [Performance Max vs Search campaigns](/blog/performance-max-vs-search).',
    },
    {
      type: 'p',
      text: 'Set up conversion tracking before you spend. Google warns: "If conversion tracking is not active, Google Ads may limit your campaign spend." Budget and bidding basics are in [how to run Google Ads](/blog/how-to-run-google-ads) and [Google Ads cost](/blog/google-ads-cost).',
    },
    { type: 'h2', text: 'Free listings come with the same feed' },
    {
      type: 'p',
      text: 'The same product data can also appear in [free listings](https://support.google.com/merchants/answer/9199328), which show products at no cost on Google surfaces such as Search and Images. Google says they are turned on by default for most accounts and that showing is not guaranteed. They work alongside paid campaigns, so a clean feed pays off twice.',
    },
    { type: 'h2', text: 'Before you launch' },
    {
      type: 'ol',
      items: [
        'Website verified and claimed in Merchant Center.',
        'Feed read through: titles lead with the product, images are clean, prices and availability match the product pages.',
        'Variants grouped with one item_group_id; identifiers correct or left out.',
        'Google Ads linked and conversion tracking active.',
        'A modest starting budget, with the campaign type chosen on purpose.',
      ],
    },
    {
      type: 'p',
      text: 'If you would rather have the account, feed and tracking set up and managed together, see WakeUP’s [advertising service](/services/advertising), or start with the [free marketing audit](/audit).',
    },
  ],
}
