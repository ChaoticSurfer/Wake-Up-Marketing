import type { BlogPost } from '@/lib/blog'

export const post: BlogPost = {
  locale: 'en',
  slug: 'how-to-calculate-customer-lifetime-value',
  title: 'How to calculate customer lifetime value: a margin-adjusted formula and an example',
  metaTitle: 'How to Calculate Customer Lifetime Value',
  description:
    'How to calculate customer lifetime value: average order value x orders per year x years as a customer x gross margin, with a worked example in lari.',
  publishedAt: '2027-02-17T09:00:00+04:00',
  updatedAt: '2027-02-17T09:00:00+04:00',
  service: 'audit',
  reviewState: 'llm_reviewed',
  body: [
    {
      type: 'p',
      text: 'To calculate customer lifetime value (CLV or LTV), multiply the average order value by the number of orders a customer places per year, by the number of years they stay a customer, and then by your gross margin. The result is the gross profit a typical customer brings you over the whole relationship, which is the number to compare with what it costs to win them.',
    },
    {
      type: 'p',
      text: 'Revenue-based formulas overstate what a customer is worth. This guide adds the margin step and shows when to use a historical number and when a predicted one, with a worked example in lari. Use the result alongside [your customer acquisition cost](/blog/how-to-calculate-customer-acquisition-cost) and [marketing ROI](/blog/how-to-calculate-marketing-roi).',
    },
    { type: 'h2', text: 'The simple formula' },
    {
      type: 'p',
      text: 'HubSpot\'s [guide to customer lifetime value](https://blog.hubspot.com/service/how-to-calculate-customer-lifetime-value) builds the number in steps: average purchase value is total revenue in a period divided by the number of purchases; the average number of purchases is purchases divided by unique customers; multiplying the two gives customer value; and customer value times average customer lifespan gives CLV. The same guide gives lifespan, when you cannot measure it directly, as 1 divided by the churn rate.',
    },
    {
      type: 'table',
      head: ['Input', 'How to get it', 'Where the data lives'],
      rows: [
        ['Average order value', 'Revenue in a period / number of orders', 'Online store, invoicing or POS'],
        ['Orders per customer per year', 'Orders / unique customers in the same period', 'Same system, grouped by customer'],
        ['Customer lifespan in years', 'Average time between first and last order, or 1 / yearly churn rate', 'Customer list with first and last purchase dates'],
        ['Gross margin', '(Revenue - cost of goods or delivery) / revenue', 'Accounting'],
      ],
    },
    { type: 'h2', text: 'Use gross profit, not revenue' },
    {
      type: 'p',
      text: 'Revenue-only CLV overstates what a customer is worth, because you do not keep the whole sale. Harvard Business School Online defines lifetime value as "the value a customer contributes over the time they\'re engaged with a company\'s offering", and builds it from the customer\'s margin, not from sales: its formula is LTV = m x T, where m is the revenue from an average customer minus the cost of serving them for a year, and T is the number of years they stay. Its [LTV and CAC article](https://online.hbs.edu/blog/post/ltv-cac) gives an example of a 115 dollar annual margin over three years, which makes an LTV of 345 dollars.',
    },
    {
      type: 'p',
      text: 'Put in the same terms as the table above:',
    },
    {
      type: 'ul',
      items: [
        'Revenue CLV = average order value x orders per year x years as a customer.',
        'Margin-adjusted CLV = revenue CLV x gross margin.',
        'If you can, subtract the cost of keeping the customer (service, delivery, discounts, retention marketing) as well. That makes it closer to HBS\'s contribution margin.',
      ],
    },
    { type: 'h2', text: 'Work out lifespan without guessing' },
    {
      type: 'p',
      text: 'Lifespan is the shakiest input, especially for a young business that has not yet seen customers leave. Three practical ways to estimate it:',
    },
    {
      type: 'ol',
      items: [
        'Observed: for customers who have clearly stopped buying (no order for longer than your normal buying cycle), average the time between their first and last order.',
        'Churn based: if about a third of customers do not come back each year (33 percent yearly churn), the lifespan is 1 / 0.33, which is about three years. HubSpot offers this shortcut of 1 divided by churn for when you cannot measure lifespan directly.',
        'Capped: for a new business, use a conservative fixed horizon such as one or two years and say so, instead of an optimistic average.',
      ],
    },
    { type: 'h2', text: 'A worked example in lari (illustrative numbers)' },
    {
      type: 'p',
      text: 'The figures below are made up to show the arithmetic. Replace them with yours. Imagine a Tbilisi online shop selling skin care, looking at its last twelve months:',
    },
    {
      type: 'table',
      head: ['Step', 'Calculation', 'Result'],
      rows: [
        ['Average order value', '2,400 GEL revenue / 20 orders', '120 GEL'],
        ['Orders per customer per year', '20 orders / 8 customers', '2.5 orders'],
        ['Customer value per year', '120 GEL x 2.5', '300 GEL'],
        ['Lifespan', '1 / 0.33 yearly churn', 'about 3 years'],
        ['Revenue CLV', '300 GEL x 3', '900 GEL'],
        ['Gross margin', 'Assumed 40 percent', '40 percent'],
        ['Margin-adjusted CLV', '900 GEL x 0.40', '360 GEL'],
      ],
    },
    {
      type: 'p',
      text: 'If winning one such customer through ads costs 90 GEL, 360 divided by 90 is 4. HBS says that "in most industries, the benchmark for a healthy LTV/CAC ratio is generally considered at least three", so this shop has room to spend more to win customers, provided the lifespan estimate holds. If the shop has operated for only a year, its three-year lifespan is a prediction, so the next section applies.',
    },
    { type: 'h2', text: 'Historical versus predictive CLV' },
    {
      type: 'p',
      text: 'HubSpot separates [historical CLV](https://blog.hubspot.com/service/how-to-calculate-customer-lifetime-value), which uses past purchase data without predicting future buying, from predictive CLV, which adds forward-looking inputs to estimate what a customer will spend. Both have a use. The table is a simplified version for a small business.',
    },
    {
      type: 'table',
      head: ['', 'Historical CLV', 'Predictive CLV'],
      rows: [
        ['Method', 'Add up the gross profit each customer has produced to date', 'Estimate future spend from past data plus an assumed lifespan or churn rate (full models also use behavioural signals and statistics)'],
        ['Strength', 'Facts, no assumptions', 'Works for new customers and recent cohorts'],
        ['Weakness', 'Looks low for recent customers who have not finished buying', 'Only as good as the lifespan estimate'],
        ['Use it for', 'Comparing customer groups (by channel, product, first order)', 'Setting a maximum acquisition cost today'],
      ],
    },
    {
      type: 'p',
      text: 'The best use of a historical number is to compare groups: customers from Instagram versus Google, or those who bought product A first versus product B. A predicted number is the one to use when you decide how much you can pay to get a new customer.',
    },
    { type: 'h2', text: 'What to do with the number' },
    {
      type: 'ul',
      items: [
        'Set the ceiling for customer acquisition cost: what you can pay for a customer and still stay profitable. [ROAS vs ROI](/blog/roas-vs-roi) explains why a good-looking return on ad spend can still lose money.',
        'Compare channels by the lifetime value of the customers they bring, not only the first order.',
        'Find where customers drop off and work on repeat purchases; see [customer retention strategies](/blog/customer-retention-strategies).',
        'Store first and last purchase dates, source and order value in one place, ideally a CRM ([how to choose a CRM](/blog/how-to-choose-crm)), so the next calculation takes minutes.',
      ],
    },
    { type: 'h2', text: 'Mistakes to avoid' },
    {
      type: 'ul',
      items: [
        'Using revenue and calling it profit. A 900 GEL revenue CLV on a 40 percent margin is a 360 GEL one.',
        'Averaging everyone together. A few large customers can hide that most customers buy once. Look at the median and at groups.',
        'Using an optimistic lifespan from a business that is only a year old.',
        'Counting discounts, returns and delivery as zero cost.',
        'Calculating it once. Recalculate every quarter, because prices, margins and repeat behaviour change.',
      ],
    },
    {
      type: 'p',
      text: 'If you want a second pair of eyes on where your marketing money goes and what comes back, request the [free marketing audit](/audit): it reviews your ads, website and sales process and returns the three changes that would help most.',
    },
  ],
}
