import type { BlogPost } from '@/lib/blog'

export const post: BlogPost = {
  locale: 'en',
  slug: 'seo-strategy-example',
  title: 'SEO strategy example: a 12-month plan for a Georgian service company',
  metaTitle: 'SEO Strategy Example: 12-Month Plan',
  description:
    'An SEO strategy example for a Georgian service company: goal, keyword list, content map, 12-month timeline and how to forecast results honestly.',
  publishedAt: '2027-01-23T15:00:00+04:00',
  updatedAt: '2027-01-23T15:00:00+04:00',
  service: 'seo',
  reviewState: 'llm_reviewed',
  body: [
    {
      type: 'p',
      text: 'An SEO strategy example worth copying has five parts: one business goal measured in enquiries, a keyword list grouped by search intent, a content map that gives each group one page, a quarter-by-quarter timeline, and a forecast built from your own Search Console data. Below is a 12-month plan for an imaginary Tbilisi commercial cleaning company. The company is invented for illustration, and every number marked as an example is a placeholder, not Georgian market data.',
    },
    {
      type: 'p',
      text: 'The general method is in [SEO for small business](/blog/seo-for-small-business) and the [SEO checklist for small business](/blog/seo-checklist-for-small-business); this post shows how the pieces fit into one plan over a year. If you want the reasoning behind choosing keywords, read [keyword research for SEO](/blog/keyword-research-for-seo).',
    },
    { type: 'h2', text: 'The example company and the goal' },
    {
      type: 'p',
      text: 'Imagine a company of about 40 people in Tbilisi that cleans offices, shops and building common areas. It has a five-page website in Georgian only, gets most work from referrals, and wants more enquiries from companies that do not know it yet. The decision-makers are office managers and administrators; some of them search in English or Russian because they work for foreign-owned firms.',
    },
    {
      type: 'p',
      text: 'The goal is not "rank higher". It is: "Increase enquiries from organic search from the current monthly number to a target we set after the baseline in month 1." Everything below serves that sentence. Enquiries means form submissions, calls and messages that are logged, as described in [GA4 for small business](/blog/ga4-for-small-business).',
    },
    { type: 'h2', text: 'Keyword list: groups, not single words' },
    {
      type: 'p',
      text: 'Group searches by the job the searcher wants done. These examples are candidate phrases to check against the results page and Search Console, not confirmed high-volume terms; Georgian search volumes can be missing from keyword tools, so autocomplete and the results page are the evidence. [Search intent types](/blog/search-intent-types) explains the grouping.',
    },
    {
      type: 'table',
      head: ['Group', 'Candidate phrases (Georgian / English / Russian)', 'Intent', 'Page that answers it'],
      rows: [
        ['Office cleaning service', 'ოფისის დასუფთავება / office cleaning Tbilisi / уборка офисов Тбилиси', 'Commercial: ready to compare suppliers', 'Service page per language'],
        ['Other cleaning services', 'მაღაზიის დასუფთავება, შენობის საერთო სივრცეების დასუფთავება and equivalents', 'Commercial', 'One service page each, only if the company really offers it'],
        ['Price questions', 'ოფისის დასუფთავების ფასი / office cleaning cost Georgia', 'Commercial, early research', 'A page explaining what drives the price, without invented figures'],
        ['How-to and checklist', 'how often should an office be cleaned', 'Informational', 'Short guide with a link to the service'],
        ['Choosing a supplier', 'how to choose a cleaning company, what to put in a cleaning contract', 'Informational, near purchase', 'Guide plus contract checklist'],
        ['Brand', 'the company name', 'Navigational', 'Home page and Google Business Profile'],
      ],
    },
    {
      type: 'p',
      text: 'One page per group is the rule. Two pages aiming at the same phrase compete with each other. Also resist adding a page for every district of Tbilisi unless each page has something genuinely different to say; thin near-copies help nobody.',
    },
    { type: 'h2', text: 'Content map: what gets built, in which language' },
    {
      type: 'p',
      text: 'The company serves Georgian-, English- and Russian-speaking buyers, so the map decides which pages exist in which language. Georgian first, because the company\'s current site and referrals are Georgian; English and Russian versions of the main service page next. Give each language version its own URL, and [tell Google about the localized versions](https://developers.google.com/search/docs/specialty/international/localized-versions) with hreflang: its documentation says "Each language version must list itself as well as all other language versions." The detail is in [multilingual SEO](/blog/multilingual-seo) and [multilingual website best practices](/blog/multilingual-website-best-practices).',
    },
    {
      type: 'table',
      head: ['Page', 'Languages', 'Quarter'],
      rows: [
        ['Fix existing pages: titles, headings, internal links, speed', 'Georgian', 'Q1'],
        ['Office cleaning service page, rewritten for the buyer\'s questions', 'Georgian, then English', 'Q1 to Q2'],
        ['Google Business Profile completed and kept up to date', 'Georgian and English', 'Q1'],
        ['Price explainer page', 'Georgian', 'Q2'],
        ['How often should an office be cleaned (guide)', 'Georgian', 'Q2'],
        ['Choosing a cleaning company and contract checklist', 'Georgian', 'Q3'],
        ['Service pages for other cleaning types the company offers', 'Georgian', 'Q3'],
        ['Russian version of the main service page', 'Russian', 'Q3'],
        ['Refresh the pages that appear in search but get few clicks', 'All', 'Q4'],
      ],
    },
    { type: 'h2', text: 'The 12-month timeline' },
    {
      type: 'ol',
      items: [
        'Month 1 - baseline. Connect Search Console and analytics, log enquiries by source, record current clicks, impressions and enquiries. Run the checks in [how to do an SEO audit](/blog/how-to-do-seo-audit). Set the target now, not later.',
        'Months 2 to 3 - foundations. Fix crawl and indexing problems, speed and mobile layout ([what is technical SEO](/blog/what-is-technical-seo)); rewrite title tags and headings; complete the Business Profile as in [local SEO tips](/blog/local-seo-tips).',
        'Months 4 to 6 - core pages. Publish the rewritten service page, the price explainer and the first guide. Add internal links from every guide to the service page. Review the first Search Console data after the pages are indexed.',
        'Months 7 to 9 - breadth. Add the contract checklist and other service pages, plus the Russian page. Begin sourcing relevant links through real relationships, such as an industry association or a client who will mention you; see [how to build backlinks](/blog/how-to-build-backlinks).',
        'Months 10 to 12 - refine. Find pages with many impressions and few clicks and improve their titles and openings, merge pages that compete with each other, and update the oldest guide. Compare the year against the month 1 baseline and write the plan for year two.',
      ],
    },
    { type: 'h2', text: 'How to forecast without making numbers up' },
    {
      type: 'p',
      text: 'Nobody can promise a ranking, and timing is uncertain too: in its [SEO Starter Guide](https://developers.google.com/search/docs/fundamentals/seo-starter-guide), "Some changes might take effect in a few hours, others could take several months." So build the forecast from your own data, in three steps:',
    },
    {
      type: 'ol',
      items: [
        'Take the queries and pages in Search Console. Its [Performance report](https://support.google.com/webmasters/answer/7042828) gives impressions, clicks and click-through rate (clicks divided by impressions) for each query and page.',
        'For each target page, estimate monthly visits you could gain from the impressions you already see plus the new ones you expect, using a click-through rate you have actually measured on similar pages.',
        'Multiply visits by your enquiry rate from analytics. Report a low, middle and high case, and say which assumptions differ.',
      ],
    },
    {
      type: 'table',
      head: ['Case', 'Monthly organic visits to target pages (example input)', 'Enquiry rate (example input)', 'Enquiries per month'],
      rows: [
        ['Low', '200', '1%', '2'],
        ['Middle', '400', '2%', '8'],
        ['High', '800', '3%', '24'],
      ],
    },
    {
      type: 'p',
      text: 'The numbers in this table are arithmetic on made-up inputs, there to show the method. Replace the visits with your own Search Console figures and the rate with your measured one. The most useful thing the forecast does is show which assumption matters most: if enquiries are low because the page converts badly, more visits will not fix it, and [website conversion rate optimization](/blog/website-conversion-rate-optimization) comes first.',
    },
    { type: 'h2', text: 'What to review at months 3, 6 and 12' },
    {
      type: 'ul',
      items: [
        'Month 3: are the key pages indexed, is anything blocked, is tracking counting enquiries correctly?',
        'Month 6: do the new pages appear in Search Console for the intended group of phrases? If not, check intent and competition on the results page before writing more pages.',
        'Month 12: enquiries from organic search against the baseline, and cost against the alternative of paid ads ([Google Ads vs SEO](/blog/google-ads-vs-seo)).',
        'Every month: write down what was done, what changed and what you will do next. [What a good SEO report includes](/blog/what-a-good-seo-report-includes) lists the sections.',
      ],
    },
    {
      type: 'p',
      text: 'If a supplier carries out this plan for you, read the contract terms first; [SEO contract terms](/blog/seo-contract-terms) and [SEO agency red flags](/blog/seo-agency-red-flags) help you compare offers fairly, and [in-house SEO vs agency](/blog/in-house-seo-vs-agency) covers who should do the work.',
    },
    { type: 'h2', text: 'Where WakeUP fits' },
    {
      type: 'p',
      text: 'WakeUP offers SEO as a service, covering technical audit and fixes, keyword research in Georgian and English, pages written for search intent, local SEO and a monthly report; see the [SEO service](/services/seo). It is one option next to doing the plan in-house or with another supplier. To see where your own site stands before choosing, request the [free audit](/audit).',
    },
  ],
}
