import type { BlogPost } from '@/lib/blog'

export const post: BlogPost = {
  locale: 'en',
  slug: 'schema-markup-for-small-business',
  title: 'Schema markup for small business: which types you need, how to add them and what to expect',
  metaTitle: 'Schema Markup for Small Business',
  description:
    'Schema markup for small business: the few types worth adding, how to add JSON-LD, how to test it, and which rich results you can honestly expect.',
  publishedAt: '2027-01-04T09:00:00+04:00',
  updatedAt: '2027-01-04T09:00:00+04:00',
  service: 'seo',
  reviewState: 'llm_reviewed',
  body: [
    {
      type: 'p',
      text: 'Schema markup for a small business means a short block of structured data, written in JSON-LD, that tells search engines who you are and what a page is about. Most small companies need only three or four types: Organization or LocalBusiness on the home and contact pages, BreadcrumbList on inner pages, Article on blog posts, and Product if you sell online. It helps Google understand your pages. It does not guarantee a rich result or a ranking boost.',
    },
    { type: 'h2', text: 'What structured data does and does not do' },
    {
      type: 'p',
      text: 'Google\'s [introduction to structured data](https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data) says it can "enable search results that are more engaging", and that you must include all the required properties for an object to be eligible for enhanced display. Note the wording: valid markup makes a page eligible, it does not promise a result. Google supports three formats (JSON-LD, Microdata and RDFa), treats them as equally fine when valid, and recommends JSON-LD "if your site\'s setup allows it." JSON-LD is also the easiest to maintain, because it sits in one block instead of being threaded through your HTML.',
    },
    { type: 'h2', text: 'The types a small business actually needs' },
    {
      type: 'table',
      head: ['Type', 'Put it on', 'What it describes', 'Who needs it'],
      rows: [
        ['Organization', 'Home page', 'Name, logo, contact details, official profiles', 'Every company'],
        ['LocalBusiness (or a more specific subtype)', 'Home or contact page, location pages', 'Address, phone, opening hours, area served', 'Businesses with a physical location customers visit or are served from'],
        ['BreadcrumbList', 'Inner pages', 'Where the page sits in the site', 'Any site with a hierarchy'],
        ['Article or BlogPosting', 'Blog posts', 'Headline, dates, author', 'Companies that publish content'],
        ['Product (with Offer)', 'Product pages', 'Price, availability, reviews if you hold real ones', 'Online shops'],
        ['Event', 'Event pages', 'Time, place, ticket link', 'Businesses running events'],
      ],
    },
    {
      type: 'p',
      text: 'Google\'s [search gallery](https://developers.google.com/search/docs/appearance/structured-data/search-gallery) lists these features, with Local business, Product, Review snippet, Breadcrumb, Article and Event among them. If a type is not in the gallery, adding it is harmless but gets you no special display in Google, so do not spend budget on exotic types.',
    },
    { type: 'h2', text: 'LocalBusiness: what to include' },
    {
      type: 'p',
      text: 'According to Google\'s [LocalBusiness documentation](https://developers.google.com/search/docs/appearance/structured-data/local-business), the required properties are name and address. Recommended ones include telephone (with country and area code), url, openingHoursSpecification, geo coordinates (at least five decimal places) and priceRange. The same page says aggregateRating and review are for sites that collect reviews about other local businesses, so do not paste your own testimonials into it as star ratings.',
    },
    {
      type: 'p',
      text: 'A minimal example. Replace every value with your real details, and keep them identical to your Google Business Profile and your footer:',
    },
    {
      type: 'p',
      text: '{ "@context": "https://schema.org", "@type": "LocalBusiness", "name": "Your Company LLC", "url": "https://example.ge", "telephone": "+995 32 000 0000", "address": { "@type": "PostalAddress", "streetAddress": "Street and number", "addressLocality": "Tbilisi", "addressCountry": "GE" }, "openingHoursSpecification": [ { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], "opens": "09:00:00", "closes": "18:00:00" } ] }',
    },
    {
      type: 'p',
      text: 'The phone number and address above are placeholders, not real details. For the wider local setup, including your Business Profile, see our [local SEO tips](/blog/local-seo-tips).',
    },
    { type: 'h2', text: 'How to add it' },
    {
      type: 'ol',
      items: [
        'Write the JSON-LD for one page type, starting with the home page.',
        'Place it inside a script tag of type application/ld+json in the page head or body. WordPress SEO plugins and most site builders generate Organization and Article markup from settings; check the output rather than trusting the toggle.',
        'Make sure the markup matches what visitors can see on the page. Data that is not on the page is a quality problem, not a shortcut.',
        'Generate the same markup from your templates, so new pages get it automatically and edits stay consistent.',
        'Test, publish, and re-test after redesigns, which often break markup silently.',
      ],
    },
    { type: 'h2', text: 'How to test it' },
    {
      type: 'p',
      text: 'Google\'s [structured data introduction](https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data) names the tools. Use the Rich Results Test while building to validate the markup. After launch, use the Rich result status reports in Search Console to monitor validity across the site, the URL Inspection tool to confirm Google has found the structured data on a page, and the Performance report to compare marked-up pages with unmarked ones. Fix errors first; warnings on optional properties can wait.',
    },
    { type: 'h2', text: 'Rich results to expect, honestly' },
    {
      type: 'p',
      text: 'Do not plan around FAQ markup. The page in Google\'s documentation for [FAQ structured data](https://developers.google.com/search/docs/appearance/structured-data/faqpage) carries a May 2026 note that the feature "will no longer appear in Google Search starting May 7, 2026", and a June 2026 note that the FAQ rich result is no longer shown and its documentation was removed. FAQ markup will no longer produce the expandable answers you may remember in Google Search. Answer the question in clear text on the page instead.',
    },
    {
      type: 'ul',
      items: [
        'Organization and LocalBusiness: both appear in Google\'s gallery as ways to give Google details such as your logo, name, address and contact information. Treat them as clarity, not a ranking lever.',
        'Breadcrumb: can show your page\'s position in the site hierarchy under the result.',
        'Product and review snippets: can show price, availability and ratings, but only with accurate data you are entitled to show.',
        'Article: listed in the gallery; for a small company blog, the practical value is accurate headline, dates and author.',
      ],
    },
    { type: 'h2', text: 'Mistakes that waste the effort' },
    {
      type: 'ul',
      items: [
        'Marking up content that is not visible on the page.',
        'Different phone numbers, addresses or company names in the markup, the footer and your Business Profile.',
        'Copying a plugin\'s default output without checking it, including a wrong logo or an old address.',
        'Treating markup as a substitute for useful content. It describes a page; it does not make a thin one good.',
      ],
    },
    {
      type: 'p',
      text: 'Schema is one item on the technical checklist, alongside speed, crawling and indexing; see our [SEO checklist for small business](/blog/seo-checklist-for-small-business) and the guide to [technical SEO](/blog/what-is-technical-seo). WakeUP offers [SEO as a service](/services/seo), including technical fixes, and the [free audit](/audit) is a quick way to see whether your markup and tracking are in order.',
    },
  ],
}
