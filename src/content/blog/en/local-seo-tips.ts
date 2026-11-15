import type { BlogPost } from '@/lib/blog'

export const post: BlogPost = {
  locale: 'en',
  slug: 'local-seo-tips',
  title: 'Local SEO tips for small business in Georgia',
  metaTitle: 'Local SEO Tips for Small Business',
  description:
    'Local SEO tips for small business in Georgia: complete your Google Business Profile, earn reviews within Google\'s rules and keep your details consistent.',
  publishedAt: '2026-12-09T12:00:00+04:00',
  updatedAt: '2026-12-09T12:00:00+04:00',
  service: 'seo',
  reviewState: 'llm_reviewed',
  body: [
    {
      type: 'p',
      text: 'The local SEO tips for small business that matter most are these: claim and verify your Google Business Profile, fill in every detail accurately, ask real customers for reviews and answer them, keep your name, address and phone number identical everywhere, and give each location or service area a useful page on your website. Google says [adding or claiming a business is free](https://support.google.com/business/answer/2911778).',
    },
    {
      type: 'p',
      text: 'This post is the practical checklist. For the three factors Google uses to rank local results and how local search fits into a wider plan, read [SEO for small business](/blog/seo-for-small-business) first.',
    },
    { type: 'h2', text: 'Check that your business is eligible' },
    {
      type: 'p',
      text: 'Google\'s help page states that "Only businesses eligible for a Business Profile can add or claim their location on Google." The [guidelines for representing your business](https://support.google.com/business/answer/3038177) spell out who does not qualify, and several rules catch companies by surprise:',
    },
    {
      type: 'ul',
      items: [
        'A business that rents a mailing address or virtual office but does not operate there is not eligible. Co-working offices need clear signage and staff during business hours.',
        'P.O. boxes and mailboxes at remote locations are not acceptable addresses.',
        'If you travel to customers instead of receiving them, you are a service-area business. Google says such a business should have one profile for its central office with a designated service area, and should hide its address from customers.',
        'Sales and lead-generation staff are not individual practitioners and are not eligible for their own profile.',
      ],
    },
    { type: 'h2', text: 'Fill in the Profile details Google checks' },
    {
      type: 'p',
      text: 'Google\'s [local ranking help](https://support.google.com/business/answer/7091) lists what to do: verify your business so Google knows you are authorised to represent it, keep your address, hours, category and attributes accurate and complete, reply to reviews, and add photos and videos that show what you offer. The guidelines add specifics that are easy to get wrong:',
    },
    {
      type: 'table',
      head: ['Field', 'What Google\'s guidelines say', 'What to do'],
      rows: [
        [
          'Name',
          'It should reflect your real-world name "as used consistently on your storefront, website, stationery, and as known to customers." Unnecessary information in the name is not permitted.',
          'Use the name on your sign and invoices. Do not add services or slogans.',
        ],
        [
          'Category',
          'Use as few categories as possible, and pick ones that complete the statement "This business IS a".',
          'Choose the single most specific core category first.',
        ],
        [
          'Phone',
          'Use a number that connects to your individual location, under the business\'s direct control. A local number is preferred over a central call-centre helpline.',
          'Give each branch its own direct line.',
        ],
        [
          'Hours',
          'Provide your regular customer-facing hours.',
          'Update them before public holidays and when your schedule changes.',
        ],
      ],
    },
    { type: 'h2', text: 'Earn reviews the way Google allows' },
    {
      type: 'p',
      text: 'Google states that "more reviews and positive ratings can help your business\'s local ranking." It also gives you a legitimate tool: according to its [review help page](https://support.google.com/business/answer/3474050), you can share a review request link or QR code to encourage customers to leave reviews. A QR code on a receipt, a table card or a follow-up message after a job is done is a simple way to use it.',
    },
    {
      type: 'p',
      text: 'The limits matter. Google\'s [content policy on fake engagement](https://support.google.com/contributionpolicy/answer/7400114) says merchants may not offer incentives, "such as payment, discounts, free goods and/or services," in exchange for posting a review. It also says merchants may not "discourage or prohibit negative reviews, or selectively solicit positive reviews from customers." So ask everyone, not only the customers you expect to be happy.',
    },
    {
      type: 'p',
      text: 'Reply to reviews, good and bad. Google says [helpful and positive replies](https://support.google.com/business/answer/3474050) can show that you are responsive to customers, and the customer is notified when you reply. Keep replies short, specific and written in the language the reviewer used.',
    },
    { type: 'h2', text: 'Keep your name, address and phone number identical everywhere' },
    {
      type: 'p',
      text: 'Google\'s guidelines ask for a name used consistently and an accurate address. The same discipline applies beyond the Profile: your website footer, contact page, social profiles and any business directory should show the same details. This is a practical habit rather than a ranking rule Google has published, and it also stops customers from calling an old number.',
    },
    {
      type: 'ul',
      items: [
        'Write down one approved version of your name, address and phone number, including how you spell the street in Georgian and in Latin letters.',
        'Check every place you are listed against that version, and fix the ones that differ.',
        'When you move or change a number, update the Profile and the website the same day.',
      ],
    },
    { type: 'h2', text: 'Give your website a local page and local markup' },
    {
      type: 'p',
      text: 'Your Profile points people to your website, so the website should confirm what the Profile says. Put your address, hours, phone number and a map on a contact page, and if you serve several districts or run several branches, give each real location its own page with details that apply only to it: its address, its team, its services. Do not copy one page and swap the city name; that adds nothing for a reader.',
    },
    {
      type: 'p',
      text: 'You can also describe the business in structured data. Google\'s [LocalBusiness documentation](https://developers.google.com/search/docs/appearance/structured-data/local-business) lets you tell Google about business hours and departments, and lists name and address as required and telephone and opening hours as recommended properties. Google does not guarantee that any feature will appear in results, so treat the markup as a clear statement of facts, not a shortcut. If you publish both Georgian and English pages, see the language setup in the [small business SEO plan](/blog/seo-for-small-business).',
    },
    { type: 'h2', text: 'Local rankings cannot be bought' },
    {
      type: 'p',
      text: 'Google is direct about one point: "There\'s no way to request or pay for a better local ranking on Google." Ads are a separate channel with their own results; [Google Ads vs SEO](/blog/google-ads-vs-seo) explains when each makes sense. Treat the steps above as maintenance: check the Profile monthly, collect reviews continuously, and re-check your listed details whenever something changes.',
    },
    {
      type: 'p',
      text: 'If you want someone to review your Profile and website against this list, WakeUP Marketing offers a [free audit](/audit), and its [SEO service](/services/seo) includes local SEO and Google Business Profile work.',
    },
  ],
}
