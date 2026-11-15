import type { BlogPost } from '@/lib/blog'

export const post: BlogPost = {
  locale: 'en',
  slug: 'how-to-choose-a-domain-name',
  title: 'How to choose a domain name for your business: naming rules, .ge or .com, and what to check first',
  metaTitle: 'How to Choose a Domain Name',
  description:
    'How to choose a domain name for your business: naming rules, .ge vs .com, and the trademark and social handle checks to make before you register.',
  publishedAt: '2027-01-06T15:00:00+04:00',
  updatedAt: '2027-01-06T15:00:00+04:00',
  service: 'websites',
  reviewState: 'llm_reviewed',
  body: [
    {
      type: 'p',
      text: 'To choose a domain name for your business, pick a short name that people can spell after hearing it once, make it match your brand, choose an extension that fits who you serve (.ge for Georgian customers, .com for an international audience, or both), and check that the name is free as a trademark and as a social media handle before you register it.',
    },
    { type: 'h2', text: 'Naming rules that save you trouble later' },
    {
      type: 'p',
      text: 'The domain is the one part of your online presence that appears in every email address, business card and ad. A few plain rules cover most cases.',
    },
    {
      type: 'ul',
      items: [
        'Short and easy to say. Say it aloud on a phone call and see whether the other person can type it without asking you to spell it. If you have to say "with two Ls and a hyphen", the name is costing you visitors.',
        'Your brand name first. People look for your company by name, so the domain should match it. A domain made of keywords but unrelated to your name is hard to remember and hard to put on a vehicle or a shop sign.',
        'Latin letters, no numbers, ideally no hyphens. Numbers and hyphens are often lost when the address is spoken or written down. Georgian company names need a decision here: choose one consistent Latin spelling and use it everywhere.',
        'Avoid look-alikes. If one letter changes the name of a competitor or a well-known brand, you invite confusion and possible complaints.',
        'Think about growth. A name tied to one product or one street becomes a problem when the company adds a service or moves.',
      ],
    },
    {
      type: 'p',
      text: 'Do not pick a domain for keywords alone; the name should work for people first. Google\'s documentation on [URL structure](https://developers.google.com/search/docs/crawling-indexing/url-structure) is about the page address after the domain, but its principle carries over: use readable words that people and search engines can understand, rather than codes or strings of numbers.',
    },
    { type: 'h2', text: '.ge or .com: how to choose the extension' },
    {
      type: 'p',
      text: 'The extension (top-level domain) tells visitors and search engines something about who you serve. Google states that country-code domains such as .ge are "a strong signal to both users and search engines that your site is explicitly intended for a certain country," in its guidance on [managing multi-regional sites](https://developers.google.com/search/docs/specialty/international/managing-multi-regional-sites). A generic domain such as .com is not tied to a country, so, as the same guide explains, a site on one should set its country target explicitly by other methods.',
    },
    {
      type: 'table',
      head: ['Choice', 'Fits when', 'Watch out for'],
      rows: [
        ['.ge', 'Your customers are mainly in Georgia and you want a local signal', 'Less familiar to foreign visitors; check the registry\'s rules before you plan the registration'],
        ['.com', 'You sell abroad, export, or want one address for several countries', 'Short names are mostly taken, which can push you to hyphens or awkward spellings'],
        ['Both', 'You want to protect the name and serve both audiences', 'Pick one as the main address and redirect the other to it, so you do not split your site into two'],
      ],
    },
    {
      type: 'p',
      text: 'The .ge registry publishes its own regulations at [nic.ge](https://nic.ge), and domains are registered through accredited registrars. Read those rules and your registrar\'s terms for eligibility, prices and renewal conditions rather than relying on this guide, because they can change. Avoid unusual new extensions for a main business address: customers may type .com or .ge by habit, and an unfamiliar extension is harder to say and to remember.',
    },
    { type: 'h2', text: 'Check the trademark before you fall for a name' },
    {
      type: 'p',
      text: 'A free domain does not mean a free name. The World Intellectual Property Organization explains that [a trademark is a sign capable of distinguishing the goods or services of one enterprise from those of other enterprises](https://www.wipo.int/trademarks/en/), and that protection is territorial: it is obtained through the trademark office of each country or region. In Georgia that office is [Sakpatenti, the National Intellectual Property Center](https://www.sakpatenti.gov.ge/en/), whose site has a trademark search.',
    },
    {
      type: 'ol',
      items: [
        'Search the name in the Georgian trademark register, and in the registers of any country you plan to sell in.',
        'Check names that sound or look similar, not only identical ones, in the same line of business.',
        'If the name will be central to the brand, ask a trademark attorney before you spend money on a logo, signage and a website built around it.',
        'Register the trademark for the name you plan to keep, if it is clear.',
      ],
    },
    {
      type: 'p',
      text: 'This guide is not legal advice. It tells you what to look at; an attorney decides whether a name is safe to use.',
    },
    { type: 'h2', text: 'Check the social handles and the name in search' },
    {
      type: 'p',
      text: 'Customers will meet you on Facebook, Instagram, TikTok and LinkedIn as well as on your site. Before you register, look for the same name on each platform you may use. If the exact name is taken, a small consistent addition (for example a short word for the city or the service) is better than a different spelling on every platform. Then search the name in Google: if the first results are an unrelated company, your own site will have to work harder to be found, and the [branding basics](/blog/what-is-branding) apply before you commit to a name.',
    },
    { type: 'h2', text: 'Before you register: a short checklist' },
    {
      type: 'ul',
      items: [
        'Say it aloud, spell it, type it on a phone. Does it survive?',
        'Does it match your company name and your social handles?',
        'Is the extension right for who you serve?',
        'Is the name clear in the trademark registers of the countries where you operate?',
        'Is the domain registered in the company\'s name, with a company email address as the contact, and not a freelancer\'s or an employee\'s personal account?',
        'Is the renewal date in a shared calendar, and is automatic renewal on? A lapsed domain stops your website and your email at once.',
      ],
    },
    { type: 'h2', text: 'After the name: build a site worth the address' },
    {
      type: 'p',
      text: 'A good domain only helps when the website behind it earns trust. See which [pages a business website needs](/blog/pages-a-business-website-needs) and what the [website discovery phase](/blog/website-discovery-phase) covers before design starts. WakeUP builds premium, complex websites and landing pages: you can read about the [website development service](/services/website-development), or request the [free marketing audit](/audit) to have your current site and ads reviewed.',
    },
  ],
}
