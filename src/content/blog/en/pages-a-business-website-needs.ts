import type { BlogPost } from '@/lib/blog'

export const post: BlogPost = {
  locale: 'en',
  slug: 'pages-a-business-website-needs',
  title: 'What pages should a business website have?',
  metaTitle: 'What Pages Should a Business Website Have',
  description:
    'What pages should a business website have? Five core pages every company needs, extra pages by business type, and how to structure them for buyers.',
  publishedAt: '2026-12-22T12:00:00+04:00',
  updatedAt: '2026-12-22T12:00:00+04:00',
  service: 'websites',
  reviewState: 'llm_reviewed',
  body: [
    {
      type: 'p',
      text: 'A business website needs a homepage, an About page, one page for each service or product, a Contact page and proof that you deliver, such as testimonials or case studies. Beyond that, the pages depend on how you sell: a clinic needs booking, a shop needs product and policy pages, a B2B company needs a page for each solution. Start with the buyer\'s questions, then give each one a page.',
    },
    { type: 'h2', text: 'The pages almost every company site needs' },
    {
      type: 'p',
      text: 'The US Small Business Administration, in a [short guide by Anita Campbell published on 11 April 2018](https://www.sba.gov/blog/5-essential-pages-your-small-business-website), names five essential pages: homepage, About Us, products or services, contact, and testimonials. The advice is older, but the list has held up because each page answers a question every buyer has.',
    },
    {
      type: 'table',
      head: ['Page', 'The buyer\'s question', 'What it has to do'],
      rows: [
        ['Homepage', 'What do you do, and is it for me?', 'State the offer in a line, show who it is for, point to the next step'],
        ['About', 'Who am I dealing with?', 'Show the company, the people and what you stand for'],
        ['Services or products', 'What exactly can I buy?', 'One page per service or product category, with detail and a way to enquire'],
        ['Contact', 'How do I reach you?', 'Phone, email, address, hours and a short form'],
        ['Proof', 'Can I trust you?', 'Named testimonials, client logos you have permission to use, results you can stand behind'],
      ],
    },
    { type: 'h2', text: 'What each core page has to do' },
    {
      type: 'p',
      text: 'The SBA guide says that on the homepage you "have less than 10 seconds to convey your value proposition". Treat the homepage as a signpost, not a brochure: one clear promise, three or four routes into the site, one obvious action.',
    },
    {
      type: 'p',
      text: 'On the About page, the guide notes that "Customers like to know a bit about a business, its experiences, ethos and goals." It also matters for search: Google\'s guidance on [helpful content](https://developers.google.com/search/docs/fundamentals/creating-helpful-content) says it is helpful when it is clear who created content, and mentions links to an author page or a site\'s About page as a way to show it. A real About page with real names does two jobs.',
    },
    {
      type: 'p',
      text: 'Keep services separate. A single "Services" page that lists everything with two lines each rarely answers a specific search or a specific question. The SBA advises you to "List what you sell in an organized way, so that it\'s clear to people", and to link to a detailed page for each item. On Contact, the SBA asks: "Why bother with a website if your visitors don\'t know how to get in contact with you?" Put a phone number and an email in text, not only in an image, and add directions and opening hours if people visit you.',
    },
    { type: 'h2', text: 'Pages to add by business type' },
    {
      type: 'p',
      text: 'The core five are a floor. [Squarespace\'s guide to website pages](https://www.squarespace.com/blog/website-pages) lists extra pages for service businesses (booking, cancellation and payment policies), online stores (shop, product, cart, checkout, shipping and returns) and portfolios (a page of recent work). The B2B and venue rows below extend that pattern and are suggestions, not that guide\'s list:',
    },
    {
      type: 'table',
      head: ['Business type', 'Pages to add', 'Why'],
      rows: [
        ['Service company (consulting, agency, clinic, repair)', 'Page per service, booking or enquiry page, cancellation terms, FAQ', 'Buyers compare services and want to know how to start and what happens if plans change'],
        ['Online shop', 'Shop and category pages, product pages, cart, checkout, shipping, returns and privacy pages', 'Policies answer purchase doubts before they reach your inbox'],
        ['B2B company', 'Page per solution or industry, case studies, a "how we work" page, a request-a-quote page', 'Company buyers need to justify the choice to colleagues'],
        ['Portfolio-led business (design, photography, video)', 'Portfolio of recent work, short bio, testimonials', 'The work is the proof'],
        ['Venue with visitors (restaurant, salon, showroom)', 'Location and hours, menu or price list, photos, directions', 'Most visits start with "where and when"'],
      ],
    },
    { type: 'h2', text: 'Pages that earn their place later' },
    {
      type: 'ul',
      items: [
        'FAQ. The SBA suggests answering common questions to save time and deal with objections. Build it from questions your sales team really hears.',
        'Blog or resources. Useful when you have something to say about the questions buyers search. [SEO for a small business](/blog/seo-for-small-business) covers how to decide what to write.',
        'Landing pages for campaigns. A page built for one ad or one offer keeps the message consistent from ad to enquiry; see [lead generation landing pages](/blog/lead-generation-landing-pages).',
        'Careers. Worth a page if hiring is regular.',
      ],
    },
    { type: 'h2', text: 'Structure: one page for each thing buyers look for' },
    {
      type: 'p',
      text: 'Google\'s [SEO Starter Guide](https://developers.google.com/search/docs/fundamentals/seo-starter-guide) says: "When you\'re setting up or redoing your site, it can be good to organize it in a logical way." It also advises to "Try to include words in the URL that may be useful for users", and that a URL made only of random identifiers is less helpful.',
    },
    {
      type: 'ul',
      items: [
        'Group related pages under one section, for example /services/ with one page per service.',
        'Use readable URLs, in the language of the page.',
        'Give each service its own page so it can answer its own search. If you serve Georgian and English buyers, each language version is a complete page, not a translated header on top of the same text.',
        'Link every page from the menu or from related pages, so nothing is reachable only by search.',
        'End each page with one next step, not five.',
      ],
    },
    { type: 'h2', text: 'Pages people forget' },
    {
      type: 'ul',
      items: [
        'A privacy policy, if your forms collect names, phone numbers or emails. Check what rules apply to your business and keep the text consistent with what you really do with the data.',
        'A thank-you page after a form, so you can measure enquiries and tell the visitor what happens next.',
        'A custom "page not found" page that points back to the main sections.',
        'Terms for bookings, delivery or returns, if money changes hands online.',
      ],
    },
    {
      type: 'p',
      text: 'The cost of all this depends on how many pages and features you need; [how much a website costs](/blog/how-much-does-a-website-cost) explains how to compare quotes.',
    },
    { type: 'h2', text: 'From page list to a site' },
    {
      type: 'p',
      text: 'Write the page list before choosing design or platform. Under each page, note the buyer\'s question, the proof you will show and the one action you want. WakeUP builds premium, complex websites and landing pages, and the [website development service](/services/website-development) page describes what the work includes. If you already have a site, the [free marketing audit](/audit) reviews it and the path from visit to enquiry, so you can see which of these pages are missing or weak.',
    },
  ],
}
