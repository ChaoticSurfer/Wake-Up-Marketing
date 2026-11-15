import type { BlogPost } from '@/lib/blog'

export const post: BlogPost = {
  locale: 'en',
  slug: 'increase-repeat-purchases',
  title: 'How to increase repeat purchases in a small online store',
  metaTitle: 'How to Increase Repeat Purchases',
  description:
    'How to increase repeat purchases: define a repeat customer for your buying cycle, then use post-purchase email, reorder reminders and a loyalty offer.',
  publishedAt: '2027-02-24T18:00:00+04:00',
  updatedAt: '2027-02-24T18:00:00+04:00',
  service: 'automation',
  reviewState: 'llm_reviewed',
  body: [
    {
      type: 'p',
      text: 'To increase repeat purchases, first work out how long your customers normally wait between orders, then contact them just before that point. Send a useful post-purchase email, a reminder to reorder products that run out, and a small reason to come back such as early access or a points offer. Measure the share of buyers who order again within your own buying cycle.',
    },
    { type: 'h2', text: 'Define a "repeat customer" for your buying cycle' },
    {
      type: 'p',
      text: 'Shopify describes repeat purchase rate as [a core retention metric measuring how many buyers return within a given timeframe](https://www.shopify.com/nl/enterprise/repeat-purchases-increase). The timeframe is the part most stores skip. A shop selling coffee beans should expect a second order in weeks. A shop selling furniture may wait years, and a rate measured over 30 days would look terrible and mean nothing.',
    },
    {
      type: 'p',
      text: 'Find your own cycle in your order export:',
    },
    {
      type: 'ol',
      items: [
        'List customers who have ordered at least twice.',
        'For each, calculate the days between the first and second order.',
        'Take the median (the middle value), not the average, because a few very late returns skew the average.',
        'Round it to a window you can act on, for example 45 days. This is the window in which a second order counts as "repeat".',
        'Repeat purchase rate = customers who ordered again within that window / customers whose first order is older than the window.',
      ],
    },
    {
      type: 'p',
      text: 'If very few customers order twice at all, there is no cycle to find yet. Then the problem is earlier: check delivery, product quality and the first-order experience before adding campaigns.',
    },
    { type: 'h2', text: 'Why a small store should care: the economics' },
    {
      type: 'p',
      text: 'Amy Gallo wrote in Harvard Business Review that [acquiring a new customer can cost five to 25 times more](https://hbr.org/2014/10/the-value-of-keeping-the-right-customers) than retaining an existing one. That is a broad range from an article published in 2014, and your own ratio will differ, so test it with your numbers.',
    },
    {
      type: 'p',
      text: 'Here is an illustration, not a benchmark. Say a customer costs 20 in advertising to win and the first order leaves 15 in gross profit. You lose 5 on that order. If 30 of every 100 customers order again and each repeat order leaves 15, those 30 repeat orders earn 450, which recovers most of the 500 lost on the first orders of the 100 customers and leaves the group close to break-even before any third order. That is the difference between a shop that must keep raising its ad budget and one that grows on its own base. The [LTV to CAC ratio post](/blog/ltv-to-cac-ratio) shows how to run the same calculation with your data.',
    },
    { type: 'h2', text: 'Post-purchase email: the first 30 days' },
    {
      type: 'p',
      text: 'The welcome sequence is covered in the [welcome email series guide](/blog/welcome-email-series). After a purchase, use a short flow that is about the product, not the next sale:',
    },
    {
      type: 'table',
      head: ['When', 'Email', 'Purpose'],
      rows: [
        ['At order', 'Confirmation with delivery time and contact', 'Remove doubt and cut support questions'],
        ['On delivery', 'How to use or care for the product', 'Fewer returns, better first experience'],
        ['A few days after delivery', 'Ask for a review or feedback', 'Proof for other buyers and a signal if something went wrong'],
        ['About two thirds through your cycle', 'Related products or a reminder', 'Prompt the second order before the customer looks elsewhere'],
      ],
    },
    {
      type: 'p',
      text: 'Segment by what was bought, so a customer who bought a printer gets ink advice and not a general newsletter. The [segmentation guide](/blog/email-list-segmentation) shows how to do it with tags. For the full set of store flows, see the [ecommerce email flows post](/blog/ecommerce-email-flows).',
    },
    { type: 'h2', text: 'Replenishment reminders for products that run out' },
    {
      type: 'p',
      text: 'Consumables such as cosmetics, supplements, pet food, coffee and printer ink have a natural end date. Estimate it from pack size and typical use, and schedule a reminder somewhat before it, for example at around 80 percent of the expected use time (a rule of thumb, adjust it with your data). Make the email one-tap: a link to the same product in the same size, already in the cart. Add a subscription option only if you can deliver on a schedule without mistakes.',
    },
    { type: 'h2', text: 'Loyalty, kept simple' },
    {
      type: 'p',
      text: '[Shopify lists](https://www.shopify.com/nl/enterprise/repeat-purchases-increase) points programmes, VIP tiers, referral rewards and subscriptions among its repeat-purchase tactics. For a small store, the rule is to start with the lightest version that fits:',
    },
    {
      type: 'ul',
      items: [
        'A second-order incentive that is not a discount on everything: early access to new products, a free gift at the next order, or free delivery over a threshold. Pair it with ideas from the [average order value guide](/blog/increase-average-order-value).',
        'A points or stamp card, only if you can show the balance to the customer in email and on the account page.',
        'A win-back message to customers who passed twice your normal cycle without ordering, with a plain question about what happened before an offer. The [customer retention strategies post](/blog/customer-retention-strategies) covers win-back in more detail.',
      ],
    },
    { type: 'h2', text: 'Make the second order easy' },
    {
      type: 'ul',
      items: [
        'Remember the address and let returning customers pay in one or two steps.',
        'Offer the payment methods your customers use, and keep stock levels honest on products people reorder.',
        'Answer questions fast. If customers message you on Instagram or WhatsApp, a slow reply costs the second order.',
      ],
    },
    { type: 'h2', text: 'Measure, then automate' },
    {
      type: 'p',
      text: 'Track three numbers each month: repeat purchase rate within your window, average days to second order, and revenue from customers with two or more orders. Change one thing at a time so you know what moved them.',
    },
    {
      type: 'p',
      text: 'Reminders, post-purchase flows and win-back messages are repetitive and well suited to automation. WakeUP builds automations that connect forms, messages and your CRM or store data; see the [AI automation and chatbots](/services/ai-automation) service. If you are unsure where customers drop off after the first order, the [free marketing audit](/audit) is a place to start.',
    },
  ],
}
