import type { BlogPost } from '@/lib/blog'

export const post: BlogPost = {
  locale: 'en',
  slug: 'ecommerce-marketing-strategy',
  title: 'Ecommerce marketing strategy: goals, channels, budget and a 90-day plan',
  metaTitle: 'Ecommerce Marketing Strategy',
  description:
    'Ecommerce marketing strategy for an online store: set margin-based goals, pick channels in order, split the budget and follow a 90-day plan.',
  publishedAt: '2027-02-18T18:00:00+04:00',
  updatedAt: '2027-02-18T18:00:00+04:00',
  service: 'advertising',
  reviewState: 'llm_reviewed',
  body: [
    {
      type: 'p',
      text: 'An ecommerce marketing strategy is a written plan for how an online store turns visitors into orders at a profit. It has five parts: a revenue goal worked out from your margin, a clear buyer, channels added in a fixed order, a budget split between proven spend and tests, and a short list of numbers you review every week. The order matters more than the channel list: fix tracking and the store first, then add traffic.',
    },
    { type: 'h2', text: 'Start with a goal your margin can pay for' },
    {
      type: 'p',
      text: 'A store lives on contribution margin, not on revenue. Take the average order value, subtract the product cost, delivery, payment fees and returns, and what remains is the money available to pay for marketing and still leave a profit. Divide the average order value by that margin per order and you get the highest cost per order you can accept. That figure, not a generic benchmark, decides how hard you can push ads.',
    },
    {
      type: 'p',
      text: 'Write the goal as a number, a date and a starting point, using figures from your own store (the numbers here are illustrative): "from 120 orders a month at 22 GEL margin each to 200 orders by the end of May". Then add the two numbers behind it: how many visitors the store gets, and what share of them order. If you do not know either, installing proper measurement is your first task, covered in the 90-day plan below. For the wider planning method, the [marketing strategy for a small business](/blog/marketing-strategy-for-small-business) post gives the general version; this one is built around a shop.',
    },
    { type: 'h2', text: 'Know who buys, and why they buy from you' },
    {
      type: 'p',
      text: 'Online stores usually have two buyer groups that need different messages: first-time buyers who need a reason to trust you, and repeat buyers who need a reason to come back. Describe each in a few lines using real inputs: the questions customers send in chat, the reasons for returns, the products that sell together, and the cities orders ship to. [How to create a buyer persona](/blog/how-to-create-buyer-persona) walks through gathering that evidence.',
    },
    {
      type: 'p',
      text: 'Then write one line on why a buyer should choose your store over a marketplace listing or a competitor: range, delivery time, price on a specific category, authenticity, service. Every ad and product page should be able to carry that line.',
    },
    { type: 'h2', text: 'Fix the store before you buy traffic' },
    {
      type: 'p',
      text: 'Paid traffic into a leaky store only makes the leak more expensive. Baymard Institute, which collects published checkout studies, puts the [average documented cart abandonment rate of 70.22 percent](https://baymard.com/lists/cart-abandonment-rate) across 50 studies. Excluding people who were just browsing, the top reasons it lists are extra costs that were too high (40 percent), delivery that was too slow (20 percent), distrust of the site with card details (19 percent) and a required account (18 percent). All four are things a store can change before spending on ads. [How to reduce cart abandonment](/blog/how-to-reduce-cart-abandonment) covers the fixes.',
    },
    {
      type: 'p',
      text: 'Check three more things: product pages that answer the buyer\'s questions ([product page optimization](/blog/product-page-optimization)), photos that show the product honestly ([ecommerce product photography](/blog/ecommerce-product-photography-tips)), and tracking. Google documents the standard purchase-funnel events for Google Analytics 4: [view_item, add_to_cart, begin_checkout and purchase](https://developers.google.com/analytics/devguides/collection/ga4/ecommerce). With those four firing and the Meta Pixel installed, you can see where shoppers drop out. The [GA4 setup for small businesses](/blog/ga4-for-small-business) post covers the basics.',
    },
    { type: 'h2', text: 'Add channels in this order' },
    {
      type: 'p',
      text: 'A small store cannot run every channel at once. Add them in the order in which each one is cheapest to prove.',
    },
    {
      type: 'table',
      head: ['Step', 'Channel', 'Why in this order', 'Read next'],
      rows: [
        ['1', 'Product feed and free listings on Google', 'Free listings cost nothing to show in, and the same feed later powers paid shopping campaigns. Google lists the required feed attributes in its [free listings help page](https://support.google.com/merchants/answer/9199328), which does not mention Georgia, so confirm availability for your country first', '[Google Shopping ads setup](/blog/google-shopping-ads-setup)'],
        ['2', 'Search ads on products people already look for', 'Reaches buyers who are already searching, so you get readable data sooner than from broad targeting', '[How to run Google Ads](/blog/how-to-run-google-ads)'],
        ['3', 'Retargeting on Meta and Google', 'Only works once the store has visitors; recovers browsers who did not buy', '[Facebook retargeting ads](/blog/facebook-retargeting-ads)'],
        ['4', 'Meta prospecting with video and product creative', 'Builds demand for products people do not search for', '[Facebook ads cost](/blog/facebook-ads-cost)'],
        ['5', 'Email to buyers and subscribers', 'Often the lowest-cost route to repeat orders, but it needs a list', '[Build an email list](/blog/build-email-list)'],
        ['6', 'SEO on categories and products', 'Slow to show results, but organic traffic keeps working without per-click fees', '[Ecommerce SEO checklist](/blog/ecommerce-seo-checklist)'],
      ],
    },
    {
      type: 'p',
      text: 'The order is a default, not a rule. A store with a very visual product may start on Meta, and a store in a category nobody searches for should. Choose what you can measure first, and give each channel enough time to produce a readable result before judging it.',
    },
    { type: 'h2', text: 'Split the budget' },
    {
      type: 'p',
      text: 'Set the total from your margin (see the goal above) and the overall guidance in [how much your marketing budget should be](/blog/how-much-should-marketing-budget-be). Then split it in three parts so that experiments cannot eat the budget that already pays back:',
    },
    {
      type: 'ul',
      items: [
        'Proven spend: channels whose cost per order is below your limit. This is where most of the money goes.',
        'Tests: a fixed slice for one new channel or creative idea at a time, with a stop rule written in advance.',
        'Foundation: tracking, photography, product copy and email set-up. This is a one-off cost that makes the other two cheaper.',
      ],
    },
    {
      type: 'p',
      text: 'Ad costs vary by market and by season, and Georgia is not the US, so take your own first month of data over any published average. Ad spend is paid to the platform; the [Facebook ads](/blog/facebook-ads-cost) and [Google Ads](/blog/google-ads-cost) cost posts explain what drives each.',
    },
    { type: 'h2', text: 'Track a short list of numbers' },
    {
      type: 'p',
      text: 'Review these weekly, for the store as a whole and then per channel:',
    },
    {
      type: 'ul',
      items: [
        'Orders and revenue, with the share that came from repeat customers.',
        'Conversion rate: orders divided by sessions.',
        'Average order value.',
        'Cost per order by channel, compared with the highest cost you set in the goal.',
        'Return on ad spend: revenue from ads divided by ad spend, read next to margin because a high figure can still lose money.',
        'Cart abandonment and checkout drop-off.',
      ],
    },
    {
      type: 'p',
      text: 'Platforms report their own conversions, and their totals often add up to more than the orders you actually had. Use your store\'s order data as the reference and the platform data as a guide. The [marketing KPIs](/blog/marketing-kpis) post explains how to pick a short list.',
    },
    { type: 'h2', text: 'The 90-day order of work' },
    {
      type: 'ol',
      items: [
        'Days 1 to 14: write the goal and the highest acceptable cost per order. Set up GA4 purchase-funnel events and the Meta Pixel. Fix the biggest checkout problem. Upload the product feed.',
        'Days 15 to 30: launch Google search ads on your best-selling and best-margin products with a small budget. Start the weekly numbers review.',
        'Days 31 to 60: add retargeting for product viewers and abandoned carts. Test two or three product videos or image sets on Meta. Start collecting emails at checkout and on the site.',
        'Days 61 to 90: move budget from channels above the cost limit to channels below it. Send a first post-purchase email. Choose one test for the next quarter and fix SEO issues on your top categories.',
      ],
    },
    {
      type: 'p',
      text: 'WakeUP runs this kind of ad work for companies, including account audit, tracking, creative testing and weekly optimisation, on the [advertising service](/services/advertising) page. The [free audit](/audit) is the way to see where your store stands before you spend.',
    },
  ],
}
