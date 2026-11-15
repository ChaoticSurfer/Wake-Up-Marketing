import type { BlogPost } from '@/lib/blog'

export const post: BlogPost = {
  locale: 'en',
  slug: 'website-trust-signals',
  title: 'Website trust signals: which proof to show, and where to put it',
  metaTitle: 'Website Trust Signals',
  description:
    'Website trust signals for B2B and local firms: which proof (reviews, contact details, policies, case studies) to show, and where on the page to place it.',
  publishedAt: '2027-01-15T15:00:00+04:00',
  updatedAt: '2027-01-15T15:00:00+04:00',
  service: 'websites',
  reviewState: 'llm_reviewed',
  body: [
    {
      type: 'p',
      text: 'Website trust signals are the pieces of proof that tell a visitor you are real, competent and safe to contact: reviews, named clients, case studies, clear contact details, visible policies and credentials. Place each one next to the decision it supports - proof of results beside the offer, contact details beside the form, policies beside the price - rather than collecting them in one corner of the site.',
    },
    {
      type: 'p',
      text: 'This post is about which signals to use and where they belong. For the wider work of improving conversions, see [website conversion rate optimization](/blog/website-conversion-rate-optimization), and for the pages themselves, [pages a business website needs](/blog/pages-a-business-website-needs).',
    },
    { type: 'h2', text: 'What makes visitors trust a site' },
    {
      type: 'p',
      text: 'Nielsen Norman Group describes four factors of trustworthiness, listed by Jakob Nielsen in 1999: design quality, up-front disclosure, comprehensive and current content, and connection to the rest of the web. In its words, the factors [have remained stable for decades](https://www.nngroup.com/articles/trustworthy-design/). Up-front disclosure means showing contact details, base costs, additional fees and return policies, for example revealing shipping charges before asking for billing information. Connection to the rest of the web matters because, according to the same article, people trust testimonials from external sites more than those on the website itself.',
    },
    {
      type: 'p',
      text: 'That gives a useful test for every signal: is it independent of you, specific, and easy to check? A named client with a link beats "trusted by many companies". A review on a public profile beats a quote you typed.',
    },
    { type: 'h2', text: 'Trust signals by type, and where to put them' },
    {
      type: 'p',
      text: 'The conversion-optimisation site Crazy Egg groups [trust signals](https://www.crazyegg.com/blog/trust-signals/) into security and privacy, social proof, third-party validation, customer-service access, and authority and transparency. The table below uses a similar split, with placement for a company website.',
    },
    {
      type: 'table',
      head: ['Signal', 'Best placement', 'B2B or local?'],
      rows: [
        ['Customer reviews with names and dates', 'Next to the contact button, on service pages and on the home page', 'Both; local firms lean on them most'],
        ['Client names or logos (with permission)', 'Directly under the main headline or the first offer', 'B2B'],
        ['Case studies with a result and a named client', 'On the service page they relate to, linked from the home page', 'B2B'],
        ['Phone, email, address and opening hours', 'Header, footer, contact page and beside every form', 'Local first, but B2B too'],
        ['Real photos of the team and premises', 'About page, contact page, service pages', 'Local first'],
        ['Pricing or "from" prices, process steps, what is included', 'On the service page, before the enquiry form', 'Both'],
        ['Policies: privacy, refunds, terms, delivery', 'Linked in the footer and next to forms and checkout', 'Both'],
        ['Certifications, awards, memberships', 'Footer or an "about" strip, with the issuer named', 'Both, where relevant'],
        ['Security seals and payment logos', 'Inside the payment area, one or two only', 'Online sales'],
        ['Founder or expert bios', 'About page and on articles they wrote', 'B2B'],
      ],
    },
    { type: 'h2', text: 'Reviews: the signal most visitors look for' },
    {
      type: 'p',
      text: 'BrightLocal\'s Local Consumer Review Survey 2026, which asked 1,002 US adults, [found that 97% of consumers read reviews online before choosing a business](https://www.brightlocal.com/research/local-consumer-review-survey/), and that nearly half trust strangers\' online opinions about as much as recommendations from people they know. Those are US consumers, so treat the numbers as a pointer to behaviour rather than a Georgian figure. The direction is still useful: for a local firm, reviews on a public profile are often the first thing a stranger checks.',
    },
    {
      type: 'ul',
      items: [
        'Show the reviewer\'s name, the date and what they bought. Anonymous five-star lines look made up.',
        'Link to the profile where the review lives so a visitor can check it. See [local SEO tips](/blog/local-seo-tips) for collecting reviews on Google.',
        'Show a few average or critical reviews too, with your reply. A wall of perfect scores can look edited.',
        'Never write, buy or selectively delete reviews. Once found, it destroys the trust you were building.',
      ],
    },
    { type: 'h2', text: 'B2B: proof that reduces the buyer\'s risk' },
    {
      type: 'p',
      text: 'A business buyer is spending a budget and putting their own judgement on the line. They look for evidence that you have done this before and that you will be there afterwards.',
    },
    {
      type: 'ul',
      items: [
        'Case studies: the problem, what you did, the measured result, and the client\'s name. Only publish what a client has approved and what you can support with numbers.',
        'Client names: even a short list of real companies, with permission, does more than a slogan.',
        'Process and deliverables: show what the first month looks like. Nielsen Norman Group advises service sites to show photos from all stages of the service, not merely the end result.',
        'People: a team page with names, roles and short bios. Buyers want to know who they will deal with.',
        'Written terms: clear contract basics, response times and a named contact point for support.',
      ],
    },
    {
      type: 'p',
      text: 'Do not use a case study you do not have. If you are starting out, show the process, the team and a clear free first step - such as an audit or a call - instead of invented results. Testimonial videos work well when real; see [how to make a testimonial video](/blog/how-to-make-a-testimonial-video).',
    },
    { type: 'h2', text: 'Local firms: proof that you exist and are easy to reach' },
    {
      type: 'ul',
      items: [
        'The same name, address and phone number on the site and on your Google profile.',
        'A map, opening hours and directions on the contact page, plus real photos of the entrance and the team.',
        'Reviews from nearby customers, with the neighbourhood or service mentioned.',
        'A messaging option (phone, WhatsApp or a form) that is easy to find on mobile, and a promise about when you reply.',
        'Prices or price ranges where the service allows it. Nielsen Norman Group advises documenting base costs and additional fees, and warns that asking for information before providing any value is a breach of trust.',
      ],
    },
    { type: 'h2', text: 'Security seals and badges: use them sparingly' },
    {
      type: 'p',
      text: 'Badges help only where money or personal data changes hands. Baymard Institute reports that [19% of users abandoned a checkout in the previous three months](https://baymard.com/blog/perceived-security-of-payment-form) because they did not trust the site with their card details (a 2025 study of 1,026 respondents). Its seal tests found that some visible seal or icon near the card fields matters more than which brand you choose, and that 1 to 2 icons inside the card area perform well. Baymard also notes that trust seals indicate little to no actual technical security, so a badge does not replace working HTTPS and a real payment provider. Baymard recommends A/B testing, because results vary by audience.',
    },
    {
      type: 'p',
      text: 'On a B2B or service site with no payments, a row of random badges adds clutter. Prefer certifications and memberships you really hold, with the issuer named. Basic fixes also count as trust signals: working links, no typos, clear navigation, and a site that loads quickly, as covered in [how to improve website speed](/blog/how-to-improve-website-speed).',
    },
    { type: 'h2', text: 'A short audit you can do today' },
    {
      type: 'ol',
      items: [
        'Open your home page on a phone. Within one screen, can you see what you do, who for, and one piece of proof?',
        'Find your phone number and email in two taps from any page.',
        'Check every review, client name and award: is it real, current and linked?',
        'Look next to each form or call to action. What doubt would a visitor have here, and does a signal answer it?',
        'Read your privacy policy and terms. Are they current, written in plain language, and linked in the footer?',
        'Delete anything that cannot be backed up.',
      ],
    },
    {
      type: 'p',
      text: 'WakeUP builds premium, complex websites and landing pages, and its [website development service](/services/website-development) plans structure, design, forms and tracking together, so proof sits where it helps. To see how your current site and enquiry path look to a visitor, request the [free marketing audit](/audit).',
    },
  ],
}
