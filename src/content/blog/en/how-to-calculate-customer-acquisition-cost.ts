import type { BlogPost } from '@/lib/blog'

export const post: BlogPost = {
  locale: 'en',
  slug: 'how-to-calculate-customer-acquisition-cost',
  title: 'How to calculate customer acquisition cost: blended vs paid CAC, with a worked example',
  metaTitle: 'Calculate Customer Acquisition Cost',
  description:
    'How to calculate customer acquisition cost: the formula, blended vs paid CAC, the costs people forget, and a worked example in lari for a service business.',
  publishedAt: '2027-02-12T09:00:00+04:00',
  updatedAt: '2027-02-12T09:00:00+04:00',
  service: 'audit',
  reviewState: 'llm_reviewed',
  body: [
    {
      type: 'p',
      text: 'To calculate customer acquisition cost (CAC), add up everything you spent on sales and marketing in a period and divide it by the number of new customers you won in the same period. Use the same dates for both numbers. The result is the average cost of one new customer, and it is only useful if you include all the costs, not just the ad spend.',
    },
    { type: 'h2', text: 'The formula' },
    {
      type: 'p',
      text: 'Harvard Business School Online defines it this way: "Customer acquisition cost (CAC) refers to the amount a company spends to acquire each new customer", with the formula "Customer Acquisition Cost = Marketing Cost ($) / Number of Customers" ([Darwin Janes, HBS Online, "LTV/CAC Ratio: What It Is & How to Calculate It"](https://online.hbs.edu/blog/post/ltv-cac)). That is the simple version, and it counts marketing cost only.',
    },
    {
      type: 'p',
      text: 'TechTarget describes a [more complete version](https://www.techtarget.com/enterprise-software/definition/Customer-acquisition-cost-CAC-How-to-calculate-and-reduce-it) that adds sales and marketing wages, software, professional services such as consultants and agencies, and overheads before dividing by customers acquired. Which one you use matters less than using the same one every month and saying which it is.',
    },
    { type: 'h2', text: 'Blended CAC and paid CAC' },
    {
      type: 'p',
      text: 'There are two numbers worth tracking, and they answer different questions.',
    },
    {
      type: 'table',
      head: ['Measure', 'Costs counted', 'Customers counted', 'Answers'],
      rows: [
        ['Blended CAC', 'All sales and marketing costs', 'All new customers, from any source (including referrals and repeat introductions)', 'What does growth cost the business overall?'],
        ['Paid CAC', 'Ad spend plus the costs of running the ads (agency fee, creative, tools used for them)', 'Only new customers traced to paid ads', 'Is this ad channel worth its money?'],
      ],
    },
    {
      type: 'p',
      text: 'Blended CAC is steadier and needs no tracking by source, but it hides weak channels behind strong ones, such as referrals. Paid CAC is sharper but depends on tracking. If you cannot trace customers to ads, fix that first: see [UTM parameters](/blog/utm-parameters-guide), [GA4 for small business](/blog/ga4-for-small-business) and [attribution models](/blog/marketing-attribution-models). Attribution is never perfect, so read paid CAC as an estimate with a range.',
    },
    { type: 'h2', text: 'Costs people forget' },
    {
      type: 'ul',
      items: [
        'Salaries: the share of a marketer\'s and a salesperson\'s monthly pay spent on winning new customers. If someone spends half their time on lead follow-up, count half.',
        'Agency or freelancer fees, even when ad spend is paid separately.',
        'Tools: CRM, email platform, analytics, design and video software used for acquisition.',
        'Creative production: photos, video, copywriting for campaigns.',
        'Discounts and free first sessions given only to win the customer.',
        'Overhead you can reasonably attribute, such as the share of rent for a showroom used for sales meetings.',
      ],
    },
    {
      type: 'p',
      text: 'Leaving these out is the usual reason a CAC looks healthy while the business feels short of money. You do not need perfect allocation. A consistent, written rule is better than none.',
    },
    { type: 'h2', text: 'A worked example in lari' },
    {
      type: 'p',
      text: 'The numbers below are invented to show the method, for a hypothetical Tbilisi service business. They are not benchmarks. In one month the business wins 40 new customers, 15 of them traced to paid ads.',
    },
    {
      type: 'table',
      head: ['Cost line (month)', 'Amount (GEL)'],
      rows: [
        ['Ad spend (Meta and Google)', '6,000'],
        ['Agency fee for running the ads', '3,000'],
        ['Share of in-house marketer\'s salary spent on acquisition', '2,000'],
        ['Tools (CRM, analytics, email)', '400'],
        ['Share of salesperson\'s time on new leads', '2,500'],
        ['Total', '13,900'],
      ],
    },
    {
      type: 'ul',
      items: [
        'Simple CAC from ad spend alone: 6,000 / 15 paid customers = 400 GEL.',
        'Paid CAC with the agency fee: (6,000 + 3,000) / 15 = 600 GEL.',
        'Blended CAC, marketing spend only: (6,000 + 3,000) / 40 = 225 GEL.',
        'Fully loaded blended CAC: 13,900 / 40 = 347.50 GEL.',
      ],
    },
    {
      type: 'p',
      text: 'The four figures describe the same month. Adding the agency fee lifts paid CAC from 400 to 600 GEL, and loading in salaries and tools lifts blended CAC from 225 to 347.50 GEL, more than 50 percent higher. Leaving costs out makes acquisition look cheaper than it was. Paid customers cost more than the blended average (600 against 347.50) because the other 25 customers arrived with fewer costs attached, for example from referrals. That gap is the information: it tells you the ads are not the cheapest source, but it does not by itself say they are not worth it.',
    },
    { type: 'h2', text: 'What to compare CAC with' },
    {
      type: 'p',
      text: 'A CAC alone has no verdict. Compare it with the gross profit one customer brings. If the hypothetical customer above yields 900 GEL of gross profit in the first year, paying 347.50 to win them is comfortable, and 600 for a paid customer is still positive but leaves less room. If a customer returns only 400, the paid channel loses money. [How to calculate marketing ROI](/blog/how-to-calculate-marketing-roi) shows how to use gross profit instead of revenue. If customers buy repeatedly, count their value over a longer window, and put the cost per enquiry from [marketing KPIs](/blog/marketing-kpis) next to it.',
    },
    { type: 'h2', text: 'Common mistakes' },
    {
      type: 'ul',
      items: [
        'Mismatched periods: spend this month divided by customers who arrived from last month\'s campaigns. For long sales cycles, use a quarter.',
        'Counting leads instead of customers.',
        'Dividing by all customers when some are repeat buyers; count new customers only.',
        'Comparing your CAC with a foreign benchmark. Costs and prices differ by market, so your own trend and your own margins matter more.',
      ],
    },
    {
      type: 'p',
      text: 'If the figures come out worse than expected, the [free marketing audit](/audit) reviews your ads, website and sales process, so you can see where the budget goes. To set a spending level once you know your CAC, see [how much a marketing budget should be](/blog/how-much-should-marketing-budget-be).',
    },
  ],
}
