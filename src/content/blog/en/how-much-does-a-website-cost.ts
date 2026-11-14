import type { BlogPost } from '@/lib/blog'

export const post: BlogPost = {
  locale: 'en',
  slug: 'how-much-does-a-website-cost',
  title: 'How much does a website cost? Platform prices and what drives the total',
  metaTitle: 'How Much Does a Website Cost?',
  description:
    'How much does a website cost? Plan prices from Wix, Squarespace, Shopify and WordPress.com in November 2026, plus the costs a plan price leaves out.',
  publishedAt: '2026-12-02T16:00:00+04:00',
  updatedAt: '2026-12-02T16:00:00+04:00',
  service: 'websites',
  reviewState: 'llm_reviewed',
  body: [
    {
      type: 'p',
      text: 'How much does a website cost? It depends on how you build it. Builder and hosted platform plans are listed from $4 a month (WordPress.com Personal, billed annually) to $299 a month (Shopify Advanced, billed annually) in November 2026, with most small-business plans between about $12 and $54 a month. A domain costs extra after the first year. Agencies price custom work per project, so no range is quoted here.',
    },
    { type: 'h2', text: 'Three ways to build a site, three shapes of cost' },
    {
      type: 'ul',
      items: [
        'Website builder or hosted platform (Wix, Squarespace, Shopify, WordPress.com): you rent the tool. The cost is a monthly or yearly plan, and hosting is included. You do most of the design and writing yourself.',
        'CMS site, often WordPress: the software can be free, but you pay for hosting, a theme or custom design, plugins and someone to set it up and keep it updated. WordPress is used by about 38.7% of all websites and about 57.6% of sites with a known CMS, according to [W3Techs, 14 November 2026](https://w3techs.com/technologies/details/cm-wordpress).',
        'Custom build: a designer and developer make the structure, look and features to your brief. The cost is a project fee, then hosting and maintenance. It is the only route that has no price list to read, so the quote is the price.',
      ],
    },
    {
      type: 'p',
      text: 'The first two have visible prices. The third is where most of the confusion comes from, because two quotes can describe very different amounts of work. The sections below show what to ask about.',
    },
    { type: 'h2', text: 'What website builders list on their pricing pages' },
    {
      type: 'p',
      text: 'The table shows entry and mid-range plans as listed on each vendor\'s pricing page in November 2026, per month, in dollars as shown on each page (Squarespace does not name the currency). Vendors change plans and prices often, and some show different prices by country, so open the linked page before you decide.',
    },
    {
      type: 'table',
      head: ['Platform', 'Plans and price per month (annual plans are paid upfront for the year unless noted)', 'Domain', 'Source'],
      rows: [
        [
          'Wix',
          'Light $17.77, Core $29.77, Business $39.77, Business Elite $159.77. A Free plan also exists. Wix says "Prices and currency vary by location. USD prices displayed for reference only," and shows prices excluding taxes (each plan displays "Price includes GST").',
          'Free voucher for a new domain, first Premium plan purchase only, redeemable within 60 days',
          '[Wix plans](https://www.wix.com/plans)',
        ],
        [
          'Squarespace',
          'Basic $12, Core $17, Advanced $25 (monthly billing is listed higher: $19, $27, $36). The page shows two prices per plan and says annual billing saves up to 36%. Free for 14 days.',
          'Free for 1 year on annual plans',
          '[Squarespace pricing](https://www.squarespace.com/pricing)',
        ],
        [
          'Shopify (online store)',
          'Basic $19, Grow $54, Advanced $299 on annual billing; $27, $72 and $399 billed monthly. Plus starts at $2,300 a month.',
          'No free domain listed on the pricing page',
          '[Shopify pricing](https://www.shopify.com/pricing)',
        ],
        [
          'WordPress.com',
          'Personal $4, Premium $8, Business $25, Commerce $45 on annual billing; $9, $18, $40 and $70 billed monthly. A Free plan also exists.',
          'Free for 1 year on annual and multi-year plans; none on monthly plans',
          '[WordPress.com pricing](https://wordpress.com/pricing/)',
        ],
      ],
    },
    {
      type: 'p',
      text: 'Read the plan details, not only the headline number. Some platforms also charge transaction fees on sales. [Squarespace](https://www.squarespace.com/pricing) lists a 2% online store transaction fee on Basic and none on Core and Advanced. [Shopify](https://www.shopify.com/pricing) offers a 3-day free trial, then $1 a month for 3 months, as its pricing page puts it (check which plans qualify at checkout).',
    },
    {
      type: 'p',
      text: 'The free domain is a first-year offer. Squarespace says domains registered through it "will renew at our standard rate, plus applicable taxes, after the first year". Put the renewal date in your calendar.',
    },
    { type: 'h2', text: 'The costs outside the plan price' },
    {
      type: 'p',
      text: 'A plan price covers the tool. Most of what makes a business site work is not in it.',
    },
    {
      type: 'ul',
      items: [
        'Domain: a name you own, renewed every year. For a .ge name, one registrar, Netim, lists €24 a year excluding VAT on its [.ge page](https://www.netim.com/en/domain-name/ge-domain), in November 2026. Another, Gandi, lists €40 for the first year and €80 on renewal, excluding tax, on its [.ge page](https://www.gandi.net/en/domain/tld/ge), (prices shown for France; its terms page also describes .ge as open to everyone, so confirm eligibility with the registrar), and says the extension is available only to customers with a corporate services contract. The same name can cost very different amounts, so compare registrars and check the renewal price, not only the first year.',
        'Design: a template is cheap. A design built around your brand, your customers and your sales process takes designer time, and it can be a large part of a custom quote.',
        'Content: page text, photos and product or service descriptions. Someone has to write and approve them. If your team does it, count the hours. If you pay for it, it is a separate line.',
        'Integrations: a contact form that reaches your CRM, online payments, booking, a live chat, analytics and tracking. Each one adds set-up time, and some add their own monthly fee.',
        'Hosting: included in builder plans. On a CMS or custom site you buy it separately, and the price rises with traffic, speed and security needs.',
        'Maintenance: updates, backups, security fixes, small content changes. Budgeting for upkeep avoids a larger rebuild later.',
      ],
    },
    { type: 'h2', text: 'What moves the price of a small business website' },
    {
      type: 'table',
      head: ['Driver', 'Why it changes the cost'],
      rows: [
        ['Number of pages and page types', 'Every unique layout needs design and development. Ten pages from three templates cost less than ten different ones.'],
        ['Languages', 'A site in Georgian and English needs translated or written content, a language switcher and checks on both versions.'],
        ['Online selling', 'A store adds product data, payments, delivery rules, taxes and order emails.'],
        ['Custom features', 'Calculators, customer areas, booking systems and tools connected to your own software take development time.'],
        ['Speed and search basics', 'Fast loading, clean page structure, titles and descriptions are easier to build in than to retrofit.'],
        ['Existing site and content', 'Moving old pages, keeping their addresses working and redirecting changed ones adds work.'],
        ['Who writes and supplies the content', 'Late or missing text and photos can delay a project.'],
      ],
    },
    {
      type: 'p',
      text: 'A company with 20 to 250 people usually needs more than a brochure: a site that gets found, loads quickly on a phone, and sends enquiries to the people who answer them. If you are comparing a builder plan against a custom build, that is the question to ask: which one handles your forms, languages and tracking without workarounds. You can see what WakeUP includes on the [website and landing page development](/services/website-development) page, and the [free audit](/audit) is free; if you then want WakeUP to do the work, a fixed quote follows.',
    },
    { type: 'h2', text: 'How to compare quotes' },
    {
      type: 'ol',
      items: [
        'Ask what is included in writing: number of pages, design rounds, content, integrations, languages, tracking and launch support.',
        'Ask what is not included: photos, copywriting, translation, extra rounds of changes.',
        'Ask who owns the site, the design files and the domain once the project ends.',
        'Ask about hosting and maintenance: whether it is a separate monthly cost, and what it covers.',
        'Ask how enquiries reach your team and how you will see which pages and campaigns produce them.',
      ],
    },
    {
      type: 'p',
      text: 'The same questions apply when you add other tools to a site. If you are weighing a website chatbot, the [AI chatbot cost breakdown](/blog/ai-chatbot-cost) shows how that bill is built up. If the site is meant to support social channels, see the [social media marketing strategy](/blog/social-media-marketing-strategy) guide for how the two connect.',
    },
  ],
}
