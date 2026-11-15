import type { BlogPost } from '@/lib/blog'

export const post: BlogPost = {
  locale: 'en',
  slug: 'ecommerce-email-flows',
  title: 'Ecommerce email marketing flows: the three to build first and the ones to add later',
  metaTitle: 'Ecommerce Email Marketing Flows',
  description:
    'Ecommerce email marketing flows in setup order: welcome, abandoned cart and post-purchase first, then browse, win-back and replenishment, with timing.',
  publishedAt: '2027-02-09T15:00:00+04:00',
  updatedAt: '2027-02-09T15:00:00+04:00',
  service: 'automation',
  reviewState: 'llm_reviewed',
  body: [
    {
      type: 'p',
      text: 'Build ecommerce email marketing flows in this order: a welcome flow for new subscribers, an abandoned-cart flow for people who left a basket, and a post-purchase flow for new customers. Add browse abandonment, win-back and replenishment reminders once those three run and are checked. A flow is a set of automatic emails triggered by what a person did, so each one sends without anyone writing it again.',
    },
    { type: 'h2', text: 'Why flows come before campaigns' },
    {
      type: 'p',
      text: 'A campaign is one email sent to a list on a date you pick. A flow waits for a behaviour and answers it, so it reaches the right person at the right moment every day. In its [September 2026 guide](https://www.omnisend.com/blog/ecommerce-email-marketing/), the email platform Omnisend reports from its own merchant data that automations produced 30% of email revenue from 2% of sends. That is a vendor figure and not an independent study, so treat it as a pointer, not a promise. The reasoning holds regardless: a message sent because someone just did something is more relevant than a weekly newsletter. This post is a setup order, not a comparison of email tools; whichever platform your shop uses, the flows are the same.',
    },
    { type: 'h2', text: 'Before you build anything: the foundation' },
    {
      type: 'ul',
      items: [
        'Connect the shop and the email platform, and check that events arrive: signup, product viewed, cart started, order placed, order shipped.',
        'Collect addresses with clear consent. [How to build an email list](/blog/build-email-list) covers the forms and the consent wording.',
        'Authenticate the sending domain. Google\'s [sender requirements](https://support.google.com/a/answer/81126) say bulk senders to Gmail (more than 5,000 messages a day) must set up SPF, DKIM and DMARC, keep the spam rate in Postmaster Tools below 0.30%, and support one-click unsubscribe. Google\'s page lists lighter baseline rules for smaller senders (SPF or DKIM, spam rate below 0.3%, TLS), and the same hygiene helps any shop.',
        'Suppress people who bought, unsubscribed or are already in another flow, so nobody gets two emails about the same thing.',
      ],
    },
    { type: 'h2', text: 'The three flows to build first' },
    {
      type: 'table',
      head: ['Order', 'Flow', 'Trigger', 'Goal'],
      rows: [
        ['1', 'Welcome', 'Signs up or subscribes', 'Turn a first look into a first purchase'],
        ['2', 'Abandoned cart', 'Starts a basket or checkout, then leaves', 'Recover a purchase that was nearly made'],
        ['3', 'Post-purchase', 'Places an order', 'Confirm, reassure, and bring the customer back'],
      ],
    },
    {
      type: 'p',
      text: 'Welcome comes first because every other flow depends on having subscribers, and because a new subscriber is the most attentive they will ever be. Abandoned cart comes second because it deals with people who already chose a product. Post-purchase comes third because it protects the sale you just made and prepares the next one.',
    },
    { type: 'h2', text: 'Flow 1: welcome' },
    {
      type: 'p',
      text: 'Send the first email immediately, with whatever you promised at signup (a discount code, a guide, a confirmation). Then add two or three emails over the following days: who you are and why customers choose you, your best-selling or most-reviewed products, and the answers to the doubts that stop people buying, such as delivery, returns and payment. Omnisend\'s guide suggests the first email within 30 minutes and two more in the same week. The full copy plan, with subject lines and timing, is in [the welcome email series](/blog/welcome-email-series), so it is not repeated here.',
    },
    { type: 'p', text: 'Check before launch:' },
    {
      type: 'ul',
      items: [
        'The discount code works, expires, and cannot be used twice.',
        'Someone who buys after email one does not receive the rest of the "buy now" emails.',
        'The unsubscribe link works in every email.',
      ],
    },
    { type: 'h2', text: 'Flow 2: abandoned cart' },
    {
      type: 'p',
      text: 'People leave baskets constantly. The Baymard Institute\'s [cart abandonment research](https://baymard.com/lists/cart-abandonment-rate) puts the average documented rate at 70.22%, the mean of 50 studies published between 2006 and 2025, with individual studies ranging from 55% to 84%. Its list of reasons for abandoning a cart shows why an email can help or can fail: 42% of US online shoppers said they had left because they were just browsing, 40% because of extra costs such as shipping, tax or fees, and others named slow delivery (20%), no trust in the site with card details (19%), a forced account (18%) or a long checkout (17%). The percentages overlap, so shoppers could give more than one reason. An email can fix a distraction or a doubt; it cannot fix a surprise cost, so remove that cause too, as [reducing cart abandonment](/blog/how-to-reduce-cart-abandonment) describes.',
    },
    {
      type: 'table',
      head: ['Email', 'When', 'What it does'],
      rows: [
        ['1. Reminder', 'A few hours after leaving (Omnisend suggests 1-3 hours)', 'Shows the items, a clear button back to the basket, no pressure'],
        ['2. Answer the doubt', 'About 24 hours later', 'Delivery time, returns, payment options, reviews'],
        ['3. Last nudge', 'About 72 hours after leaving', 'A small incentive only if margins allow, or stock and delivery information'],
      ],
    },
    {
      type: 'p',
      text: 'Timing is a starting point and the only proof is your own results, so test one change at a time. Email works only for people you can identify: someone who gave their address before leaving, or who is logged in. Make sure the flow stops when the order is placed. Think carefully before offering a discount in email one, since you teach customers to abandon on purpose.',
    },
    { type: 'h2', text: 'Flow 3: post-purchase' },
    {
      type: 'p',
      text: 'After the order, the customer is waiting to see if you keep your promises. The flow has four parts:',
    },
    {
      type: 'ol',
      items: [
        'Order confirmation, sent at once. This is a transactional email, so make it clear and complete before you make it pretty.',
        'Shipping and delivery update, with tracking and the courier\'s contact details.',
        'A usage or care email a few days after delivery, with how to get the most from the product, and who to contact with a problem.',
        'A review request, sent when the customer has had time to use the item. Ask once, make it one click, and send unhappy customers to support first.',
      ],
    },
    {
      type: 'p',
      text: 'Keep selling in this flow gentle. A "you may also need" email after delivery is welcome; a coupon in the confirmation is not. For items that a person buys together, such as accessories, suggest them after delivery, not before it.',
    },
    { type: 'h2', text: 'The flows to add later' },
    {
      type: 'table',
      head: ['Flow', 'Trigger', 'When it makes sense', 'Typical shape'],
      rows: [
        ['Browse abandonment', 'Viewed a product or category, no basket', 'Enough traffic and a good product feed; after cart flow works', '1-2 emails soon after the visit, showing the viewed product'],
        ['Replenishment', 'Time since purchase of a consumable', 'Products that run out: cosmetics, supplements, pet food, coffee', 'One email just before the product runs out'],
        ['Win-back', 'No purchase for a long time (Omnisend suggests 60-90 days)', 'A repeat-purchase business with a real customer base', '2-3 emails: "we miss you", a reason to return, last chance'],
        ['Back in stock', 'Asked to be told when an item returns', 'Stock that sells out', 'One email as soon as it is available'],
        ['VIP and loyalty', 'Milestone, such as the fifth order', 'Stable repeat customers', 'A thank-you or early access'],
      ],
    },
    {
      type: 'p',
      text: 'Browse abandonment is later than cart abandonment because the signal is weaker: looking is not buying. Win-back should use your own purchase cycle, not a number from a guide: if customers normally reorder every two months, 90 days of silence is late. For shops that also message through WhatsApp, [WhatsApp marketing](/blog/whatsapp-marketing) covers when that channel is the better reminder.',
    },
    { type: 'h2', text: 'Check results without fooling yourself' },
    {
      type: 'ul',
      items: [
        'Judge flows by orders and revenue per recipient, not by open rate. Mail privacy features inflate opens; see [what is a good email open rate](/blog/good-email-open-rate).',
        'Compare against a holdout where possible: keep a small share of eligible people out of the flow, and see how many buy anyway.',
        'Look at unsubscribe and spam complaint rates for each flow, and fix any that stand out.',
        'Review each flow every quarter: prices, delivery times, return rules and the products shown change.',
      ],
    },
    {
      type: 'p',
      text: 'WakeUP\'s [AI automation service](/services/ai-automation) covers automations that pass leads to a CRM, email or team chat, as the service page describes; ask what is included before you brief flow work. If you want a view of your shop\'s funnel before you build flows, ask for the [free audit](/audit).',
    },
  ],
}
