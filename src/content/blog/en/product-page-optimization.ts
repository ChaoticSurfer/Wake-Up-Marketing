import type { BlogPost } from '@/lib/blog'

export const post: BlogPost = {
  locale: 'en',
  slug: 'product-page-optimization',
  title: 'Product page optimization: what a small store should fix first',
  metaTitle: 'Product Page Optimization Checklist',
  description:
    'Product page optimization for small stores: what a product page must include, in priority order - price, photos, delivery, copy, reviews and markup.',
  publishedAt: '2027-01-08T18:00:00+04:00',
  updatedAt: '2027-01-08T18:00:00+04:00',
  service: 'websites',
  reviewState: 'llm_reviewed',
  body: [
    {
      type: 'p',
      text: 'Product page optimization means making each product page answer a buyer\'s questions in the order they ask them: what does it cost in total, what does it look like, when does it arrive, can I return it, and can I trust this shop. For a small store, fix them in that order before touching button colours or layout tests.',
    },
    { type: 'h2', text: 'Fix in this order' },
    {
      type: 'p',
      text: 'Most advice on product pages is a long list of equal items. With a small team and limited traffic you cannot do everything at once, so rank the work by what makes a shopper leave. The table is the order used in the rest of this post.',
    },
    {
      type: 'table',
      head: ['Priority', 'Element', 'The question it answers'],
      rows: [
        ['1', 'Price, stock and total cost', 'What will I actually pay?'],
        ['2', 'Photos', 'What exactly am I getting?'],
        ['3', 'Delivery and returns', 'When does it arrive, and what if it is wrong?'],
        ['4', 'Description and specifications', 'Is it the right one for me?'],
        ['5', 'Reviews and trust signals', 'Do others, and this shop, deliver?'],
        ['6', 'Buy button and speed', 'How do I order, and does the page load?'],
        ['7', 'Structured data', 'Can Google read the page?'],
      ],
    },
    { type: 'h2', text: '1. Price, stock and total cost' },
    {
      type: 'p',
      text: 'Show the price in lari near the product name, show whether the item is in stock, and do not hide extra costs until checkout. The Baymard Institute, a research organisation that studies checkout usability, [lists reasons shoppers abandon](https://baymard.com/learn/reduce-cart-abandonment): it reports that 40% abandoned because of additional costs such as shipping, taxes and fees, and 20% because delivery was too slow. Baymard\'s page does not break those figures down by country, so read them as direction, not as a Georgian benchmark.',
    },
    {
      type: 'ul',
      items: [
        'Put the final price, with any discount shown against the old price, above the fold on mobile.',
        'State "in stock", "made to order" or "out of stock" in words. If an item is out of stock, say when it returns or offer a notify option.',
        'If delivery has a fee, show it or its rule on this page, not first at checkout.',
      ],
    },
    { type: 'h2', text: '2. Photos that answer questions' },
    {
      type: 'p',
      text: 'Photos replace picking the product up. Show the product from several angles, one image with a size reference, and the details a buyer would check in a shop: seams, ports, labels, texture. Use your own photos where you can; a supplier\'s catalogue image appears on every competing page.',
    },
    {
      type: 'p',
      text: 'Google\'s [image guidance](https://developers.google.com/search/docs/appearance/google-images) says to write informative alt text in the context of the page, to use short but descriptive filenames instead of names like image1.jpg, and to serve responsive images with srcset or the picture element. That helps shoppers using screen readers and helps Google understand the page. It does not replace good photography.',
    },
    { type: 'h2', text: '3. Delivery and returns on the page' },
    {
      type: 'p',
      text: 'Do not send shoppers to a separate policy page to learn the basics. Write two or three plain lines on each product page: delivery areas (Tbilisi and the regions), how long each takes, what it costs, and whether returns are accepted and for how many days. If the rules differ by product, say so on that product.',
    },
    {
      type: 'p',
      text: 'The cost and speed rules are your decision as the seller; do not promise what your couriers cannot keep. A short honest delivery line beats a fast promise you miss.',
    },
    { type: 'h2', text: '4. Description and specifications' },
    {
      type: 'p',
      text: 'Write the description for a person deciding, not for a search engine. Open with what the product is for and who it suits, then give specifications in a table or list: size, material, capacity, compatibility, what is in the box, care. Answer the questions customers already send you on Instagram or by phone; each repeated question is a gap on the page.',
    },
    {
      type: 'ul',
      items: [
        'A unique product name that includes what a buyer would type (brand, type, model, key attribute).',
        'Specifications in the same order on every product, so shoppers can compare.',
        'Variants (size, colour) selectable on the page, with stock shown per variant.',
        'Copy that is yours, not pasted from the supplier, since the same text appears on every shop that sells the product.',
      ],
    },
    { type: 'h2', text: '5. Reviews and trust signals' },
    {
      type: 'p',
      text: 'Reviews from real buyers help only if they are real. Ask recent customers after delivery, show them with the date, and do not write or buy your own. Where you have no reviews yet, trust comes from other signals: a company name and address, a phone number that is answered, a visible returns line, and payment methods shoppers recognise.',
    },
    {
      type: 'p',
      text: 'If you mark reviews up with structured data, Google\'s [product snippet documentation](https://developers.google.com/search/docs/appearance/structured-data/product-snippet) says the page must focus on a single product or its variants, not a category or list, and that snippets require a name plus a review, an aggregate rating or offers.',
    },
    { type: 'h2', text: '6. One clear button, and a page that loads' },
    {
      type: 'p',
      text: 'There should be one primary action: add to cart or order. Keep it visible on mobile while the shopper scrolls, and say what happens next (for example, "Order - pay on delivery" if that is how you work). Secondary actions such as wishlist should not compete with it.',
    },
    {
      type: 'p',
      text: 'Speed matters most on the largest image, which is usually the main product photo. web.dev says to aim for a Largest Contentful Paint of [2.5 seconds or less](https://web.dev/articles/optimize-lcp) for at least 75% of visits, and warns: "Never lazy-load your LCP image." Our guide on [how to improve website speed](/blog/how-to-improve-website-speed) covers measuring and fixing it.',
    },
    { type: 'h2', text: '7. Structured data so Google can read the page' },
    {
      type: 'p',
      text: 'Product markup tells Google the facts you already show. For merchant listings, Google\'s [documentation](https://developers.google.com/search/docs/appearance/structured-data/merchant-listing) requires name, image and an offer with a price and currency, and recommends availability, a return policy and shipping details. Google\'s [structured data policies](https://developers.google.com/search/docs/appearance/structured-data/sd-policies) say not to mark up content that is not visible to readers of the page. Ask your developer or platform to generate it from the same product data that fills the page.',
    },
    { type: 'h2', text: 'Check one page, then roll it out' },
    {
      type: 'p',
      text: 'Pick your best-selling product and walk through the seven items as a stranger on a phone. Fix what is missing, then copy the pattern to the other products. To find which products lose shoppers, look at where visitors leave; our posts on [reducing cart abandonment](/blog/how-to-reduce-cart-abandonment) and [website conversion rate optimization](/blog/website-conversion-rate-optimization) show how to measure that without a large audience.',
    },
    {
      type: 'p',
      text: 'WakeUP builds premium, complex websites and landing pages; see [website development](/services/website-development) for what that includes. If you want an outside review of your product pages first, request the [free audit](/audit).',
    },
  ],
}
