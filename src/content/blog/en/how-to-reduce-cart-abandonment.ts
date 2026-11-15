import type { BlogPost } from '@/lib/blog'

export const post: BlogPost = {
  locale: 'en',
  slug: 'how-to-reduce-cart-abandonment',
  title: 'How to reduce cart abandonment: find where carts die, then fix them in order',
  metaTitle: 'How to Reduce Cart Abandonment',
  description:
    'How to reduce cart abandonment: measure your rate, find the checkout step where shoppers leave, then fix costs, accounts, payments, trust and speed.',
  publishedAt: '2026-12-31T15:00:00+04:00',
  updatedAt: '2026-12-31T15:00:00+04:00',
  service: 'websites',
  reviewState: 'llm_reviewed',
  body: [
    {
      type: 'p',
      text: 'To reduce cart abandonment, first measure it, then find the checkout step where shoppers leave, then fix the causes in order of how often they occur: surprise costs at the end, forced account creation, too few payment options, missing trust signals, and slow or broken pages. Baymard\'s research on why shoppers abandon carts lists a short set of recurring causes, so a fix list is a better start than a redesign.',
    },
    { type: 'h2', text: 'Calculate your abandonment rate' },
    {
      type: 'p',
      text: 'Cart abandonment rate is the share of started carts that never become a purchase:',
    },
    {
      type: 'p',
      text: 'Abandonment rate = 1 - (completed purchases / carts created), per period, expressed as a percentage. If 400 carts were created in a month and 100 became orders, the rate is 75%.',
    },
    {
      type: 'p',
      text: 'The Baymard Institute, a research organisation that studies checkout usability, keeps a [list of cart abandonment statistics](https://baymard.com/lists/cart-abandonment-rate). It reports an average rate of 70.22%, calculated as the unweighted average of 50 studies published between 2006 and 2025. Use that as context only. The page does not break the studies down by country, so it is not a Georgian benchmark, and your own rate depends on what you sell, how people reach the site and how often browsers add items just to see the total. The number to beat is your own rate from last quarter.',
    },
    { type: 'h2', text: 'Why shoppers leave' },
    {
      type: 'p',
      text: 'Baymard\'s page says 42% of US online shoppers who abandoned a cart gave "just browsing / not ready to buy" as the reason, and no checkout fix will remove that cause. It then lists the other reasons as shares of the remaining abandoners. The page does not state the survey size, date or country for these shares, and does not say whether shoppers could give more than one reason, so treat them as indicative and do not add them up:',
    },
    {
      type: 'table',
      head: ['Reason for abandoning', 'Share of other abandoners (Baymard)', 'Where to fix it'],
      rows: [
        ['Extra costs too high (shipping, tax, fees)', '40%', 'Show total cost early'],
        ['Delivery was too slow', '20%', 'State delivery times on the product page'],
        ['Did not trust the site with card details', '19%', 'Trust signals, known payment methods'],
        ['Site wanted me to create an account', '18%', 'Offer guest checkout'],
        ['Too long or complicated checkout', '17%', 'Fewer steps and fields'],
        ['Website had errors or crashed', '17%', 'Testing and speed'],
        ['Returns policy not satisfactory', '13%', 'Clear, visible policy'],
        ['Could not see total order cost up front', '12%', 'Cart summary from the first step'],
        ['Credit card declined', '10%', 'Payment setup and alternatives'],
        ['Not enough payment methods', '9%', 'Add the methods customers use'],
      ],
    },
    { type: 'h2', text: 'Find the step where carts die' },
    {
      type: 'p',
      text: 'Before fixing anything, find which step loses the most people. Google Analytics 4 lists the online-sales events you need in its [recommended events](https://support.google.com/analytics/answer/9267735): add_to_cart, begin_checkout, add_shipping_info, add_payment_info and purchase. Ask your developer to confirm each one fires, then compare the number of users at each step. The biggest drop between two neighbouring steps tells you where to look:',
    },
    {
      type: 'ul',
      items: [
        'Large drop before begin_checkout: the cart page. Check costs, delivery information and the "continue" button.',
        'Large drop between begin_checkout and add_shipping_info: forced account creation or a long form.',
        'Large drop between add_shipping_info and add_payment_info: delivery options or total cost shown at that step.',
        'Large drop between add_payment_info and purchase: payment failures, card declines or a lack of trust at the last moment.',
      ],
    },
    {
      type: 'p',
      text: 'Also run the whole path yourself on a phone, with a real card, a declined card and a slow connection. This often exposes a broken step.',
    },
    { type: 'h2', text: 'Fix 1: Show the full cost early' },
    {
      type: 'p',
      text: 'Unexpected costs head Baymard\'s list at 40%. Show delivery fees and any other charges on the product page or in the cart, before the shopper enters any details. If delivery depends on the city, a short selector that shows the price is better than a footnote. If you offer free delivery above an order value, say so in the cart and show the remaining amount.',
    },
    { type: 'h2', text: 'Fix 2: Remove forced accounts and cut the form' },
    {
      type: 'p',
      text: 'Baymard\'s article on [reducing cart abandonment](https://baymard.com/learn/reduce-cart-abandonment) says 18% of users abandon checkout when forced to create an account, and that a guest option is easily missed if it is visually weak. Make guest checkout the obvious path and offer account creation after the order. Edward Scott, Research Lead at Baymard Institute, says many sites are still including "too many form fields in their checkouts". Keep only what you need to deliver and contact: name, phone, delivery address, and email if you send receipts.',
    },
    { type: 'h2', text: 'Fix 3: Offer the payment methods your customers use' },
    {
      type: 'p',
      text: 'Which methods matter depends on your customers, not on a global list. Check what your current buyers use and what the bank or payment provider you work with supports. Cash on delivery is one option for customers who do not want to pay a new store by card, though it needs its own handling for refusals. Declined cards (10% in Baymard\'s list) are partly a setup question: ask your provider for the decline reasons and make sure the checkout shows a clear message and a second way to pay.',
    },
    { type: 'h2', text: 'Fix 4: Build trust where the card is entered' },
    {
      type: 'p',
      text: '19% of the shoppers in Baymard\'s list did not trust the site with their card information. Trust is built from visible, specific things: a company name and address, a working phone number, clear return and delivery policies, recognisable payment provider logos, a secure connection, and real product photos and reviews. Put a short reassurance beside the pay button, such as the return window, instead of a pile of badges.',
    },
    { type: 'h2', text: 'Fix 5: Speed and errors' },
    {
      type: 'p',
      text: 'Errors and crashes cost 17% in the same list. Test the checkout on mid-range phones, not only a developer\'s laptop, and keep third-party scripts off checkout pages unless they are needed. For the general speed work, see [how to improve website speed](/blog/how-to-improve-website-speed), and for the wider view of turning visits into orders, [website conversion rate optimization](/blog/website-conversion-rate-optimization). Common site-level faults that hurt shops are listed in [small business website mistakes](/blog/small-business-website-mistakes).',
    },
    { type: 'h2', text: 'What to expect, and what comes after' },
    {
      type: 'p',
      text: 'Change one thing at a time where you can, wait for enough orders to see the effect, and compare against your own earlier rate, not the 70% average. Part of the abandonment is browsing and will not come back. For the people who left and are still interested, [Facebook retargeting ads](/blog/facebook-retargeting-ads) can bring visitors back, and recovery emails are a separate topic.',
    },
    {
      type: 'p',
      text: 'WakeUP builds premium, complex websites and landing pages with analytics and conversion tracking from day one; see the [website development service](/services/website-development). To have your current checkout path, tracking and ads looked at together, send your site for the [free marketing audit](/audit).',
    },
  ],
}
