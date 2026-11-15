import type { BlogPost } from '@/lib/blog'

export const post: BlogPost = {
  locale: 'en',
  slug: 'increase-average-order-value',
  title: 'How to Increase Average Order Value: Bundles, Cross-Sell, Upsell and Add-Ons',
  metaTitle: 'How to Increase Average Order Value',
  description:
    'How to increase average order value: bundles, cross-sell, upsell and checkout add-ons, plus how to test them so higher AOV does not cost you conversions.',
  publishedAt: '2027-02-23T09:00:00+04:00',
  updatedAt: '2027-02-23T09:00:00+04:00',
  service: 'advertising',
  reviewState: 'llm_reviewed',
  body: [
    {
      type: 'p',
      text: 'To increase average order value, give shoppers a reason to add one more relevant item: bundles at a small saving, cross-sell suggestions of products that go with what is in the cart, an upgrade offer on the product page, and a small add-on at checkout. Test each one by revenue per visitor, not only by order size, because a bigger basket that lowers conversion can earn you less.',
    },
    { type: 'h2', text: 'Know your baseline first' },
    {
      type: 'p',
      text: 'Average order value (AOV) is [total sales revenue divided by the number of orders](https://www.lightspeedhq.com/blog/how-to-increase-average-order-value/). Calculate it for the last three months, and split it by traffic source if you can: shoppers from Instagram ads, Google search and email often behave differently. Also note your conversion rate and your margin per product. A tactic that raises AOV by selling low-margin items may not raise profit.',
    },
    {
      type: 'table',
      head: ['Tactic', 'Where it appears', 'What the shopper sees', 'Risk to watch'],
      rows: [
        ['Bundle', 'Product page, collection page', 'Two or three items sold together at a small saving', 'Too many bundle choices slow the decision'],
        ['Cross-sell', 'Product page, cart', 'An item that goes with the one they chose', 'Unrelated suggestions look like noise'],
        ['Upsell', 'Product page', 'A larger size or better version of the same product', 'Pushing a much higher price loses the sale'],
        ['Checkout add-on', 'Cart or checkout', 'A cheap extra: gift wrap, care kit, extended warranty', 'Anything that adds steps or surprises the total'],
        ['Free-shipping threshold', 'Header bar, cart', 'A progress message toward free delivery', 'Setting the bar far above a normal basket'],
      ],
    },
    { type: 'h2', text: 'Bundles' },
    {
      type: 'p',
      text: 'A bundle works when the products are naturally used together: a skin-care routine, a camera and a memory card, a set of coffee beans and a filter. Name the bundle after the job it does ("Starter routine"), show what each item would cost separately, and keep the saving modest enough to protect your margin. Start with two or three bundles built from your best sellers rather than a bundle for everything. Lightspeed lists bundle deals and bulk options among its [eleven suggested ways to raise AOV](https://www.lightspeedhq.com/blog/how-to-increase-average-order-value/); the right discount is something you have to test in your own store.',
    },
    { type: 'h2', text: 'Cross-sell: suggest what completes the purchase' },
    {
      type: 'p',
      text: 'Cross-selling offers a different product that goes with the one being bought. The test is simple: would a good shop assistant say it? A phone case on a phone page passes; a random bestseller does not. Put two to four suggestions on the product page and in the cart, and choose them by hand for your top 20 products before using any automatic recommendation tool. Reviews of the suggested item help here. Ask buyers for them (see [how to get more product reviews](/blog/how-to-get-more-product-reviews)).',
    },
    { type: 'h2', text: 'Upsell: offer a better version, not a bigger bill' },
    {
      type: 'p',
      text: 'An upsell offers a larger size, a multi-pack or a higher model of the product the shopper is already looking at. Keep the step up small, around the next tier rather than double the price, and say plainly what the shopper gets for it. Place it on the product page, before the decision to buy, rather than as a pop-up after they click pay. Skip it when the cheaper item is clearly the right fit: a wrong upsell causes returns and bad reviews.',
    },
    { type: 'h2', text: 'Checkout add-ons' },
    {
      type: 'p',
      text: 'Small optional extras are easy to accept because they are cheap next to the main purchase: gift wrapping, a protection plan, a refill, a sample. Show them with a single tick box that updates the total at once. The cart is where shoppers are most sensitive to surprises. Baymard Institute, in its list of reasons for abandonment, reports that [40% of shoppers cited extra costs that were too high, 18% were put off by being asked to create an account and 17% by a long or complicated checkout](https://baymard.com/lists/cart-abandonment-rate) (US online shoppers; Baymard does not state the sample size). So keep add-ons optional, never pre-ticked, and never add a step. For checkout fixes, see [how to reduce cart abandonment](/blog/how-to-reduce-cart-abandonment).',
    },
    { type: 'h2', text: 'Free-shipping threshold: one short rule' },
    {
      type: 'p',
      text: 'A free-shipping threshold, [listed first by Lightspeed](https://www.lightspeedhq.com/blog/how-to-increase-average-order-value/), encourages shoppers to add an item to qualify. Set it a little above your current AOV, test a few levels, show progress in the cart, and check that your shipping cost still leaves a margin. If it is far above a normal basket, shoppers will simply leave.',
    },
    { type: 'h2', text: 'The trade-off: AOV against conversion' },
    {
      type: 'p',
      text: 'Every extra offer adds a decision, and decisions slow people down. If AOV rises and conversion falls by a similar share, you have gained nothing. Judge each change by revenue per visitor (revenue divided by sessions) and by profit per order, over at least two full weeks so that weekday and payday effects even out. Change one thing at a time and run it long enough to see a difference; the method is described in [landing page A/B testing](/blog/landing-page-ab-testing) and applies to product and cart pages too.',
    },
    {
      type: 'ol',
      items: [
        'Record AOV, conversion rate and revenue per visitor for the last 90 days.',
        'Pick one tactic and one page (for example, cross-sell on your top ten product pages).',
        'Run it for two to four weeks against the old version, or compare to the same weeks before.',
        'Keep it only if revenue per visitor rose and returns did not.',
        'Then move to the next tactic.',
      ],
    },
    {
      type: 'p',
      text: 'AOV also moves with who you attract. Ads aimed at buyers of larger baskets, and email to past customers, lift it without changing the store. WakeUP runs this as part of its [Meta and Google Ads service](/services/advertising), and the [free audit](/audit) reviews your current ads, website and sales process. For the wider picture, see [ecommerce marketing strategy](/blog/ecommerce-marketing-strategy) and [ecommerce email flows](/blog/ecommerce-email-flows).',
    },
  ],
}
