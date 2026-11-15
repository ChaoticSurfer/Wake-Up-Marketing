import type { BlogPost } from '@/lib/blog'

export const post: BlogPost = {
  locale: 'en',
  slug: 'multilingual-website-best-practices',
  title: 'Multilingual website best practices for Georgian, English and Russian',
  metaTitle: 'Multilingual Website Best Practices',
  description:
    'Multilingual website best practices for a Georgian, English and Russian site: URLs, language switcher, flexible layout, Georgian fonts and key pages.',
  publishedAt: '2027-01-12T12:00:00+04:00',
  updatedAt: '2027-01-12T12:00:00+04:00',
  service: 'websites',
  reviewState: 'llm_reviewed',
  body: [
    {
      type: 'p',
      text: 'Multilingual website best practices come down to this: give every language its own URL folder, put a clearly labelled language switcher on every page, declare the language in the code, design layouts that survive longer or shorter text, check that your fonts include Georgian, and translate the pages that earn enquiries first. Search settings such as hreflang are a separate topic, covered in the multilingual SEO guide.',
    },
    { type: 'h2', text: 'Why the language decision is a business decision' },
    {
      type: 'p',
      text: 'A site in three languages costs three times the writing, review and upkeep, so decide it with evidence. CSA Research, with fieldwork by Kantar, surveyed 8,709 consumers in 2020 and reported that [76% of consumers prefer products with information in their own language, and 40% will never buy from websites in other languages](https://csa-research.com/Blogs-Events/CSA-in-the-Media/Press-Releases/Consumers-Prefer-their-Own-Language). The survey covered 29 countries and is not a Georgian measurement, so treat it as a direction, not a forecast.',
    },
    {
      type: 'p',
      text: 'For your own decision, use your records: in which language do customers write to you, and which language do competitors cover poorly? The method is in [multilingual SEO](/blog/multilingual-seo) and in [how to create a buyer persona](/blog/how-to-create-buyer-persona).',
    },
    { type: 'h2', text: 'Give each language its own URL' },
    {
      type: 'p',
      text: 'Google\'s guidance on [multilingual sites](https://developers.google.com/search/docs/specialty/international/managing-multi-regional-sites) recommends separate URLs for each language version rather than cookies or browser settings that change the content on one address. For most Georgian companies the simplest form is a folder per language: example.ge/ka/, example.ge/en/, example.ge/ru/. It keeps one domain and one codebase.',
    },
    {
      type: 'ul',
      items: [
        'Keep the folder structure identical across languages, so /ka/services/ has the matching /en/services/. That makes the switcher a simple lookup.',
        'Use readable slugs. Translated slugs help users; if you use them, store the mapping from each page to its equivalents.',
        'Keep each page in one language and translate its main content, not only the menu and footer. Why Google cares is covered in [multilingual SEO](/blog/multilingual-seo).',
      ],
    },
    { type: 'h2', text: 'Make the language switcher easy to find' },
    {
      type: 'p',
      text: 'The W3C\'s internationalization guidance on [language selection menus](https://www.w3.org/International/questions/qa-navigation-select) gives practical rules, and they hold for a three-language site.',
    },
    {
      type: 'ul',
      items: [
        'Label each language in its own language and script: ქართული, English, Русский. W3C gives the example of "français" rather than "French". Show these names in the same form on every page.',
        'Place it where people look: the W3C advises putting the menu at or near the top of the page.',
        'Link to the equivalent page, not to the homepage of the other language. A visitor on a pricing page who switches to Russian expects the Russian pricing page. If no equivalent exists, say so and link to the nearest page.',
        'Skip national flags. A language is not a country: Russian is read in many places, and English readers in Georgia are not UK or US visitors. Use language names.',
        'Do not rely on automatic detection alone. W3C advises giving in-page links for when negotiation does not work as expected. Next.js documents how to select a locale from the browser\'s Accept-Language header, but Google advises avoiding automatic redirects between language versions. If you suggest a language, do it with a dismissible banner, and always let every URL be opened directly.',
        'Use UTF-8 so all three scripts display correctly. W3C also warns that visitors may see empty boxes for scripts they lack fonts for.',
      ],
    },
    { type: 'h2', text: 'Declare the language in the code' },
    {
      type: 'p',
      text: 'W3C\'s advice is to [always use a language attribute on the html tag](https://www.w3.org/International/questions/qa-html-language-declarations) to declare the default language of the page, and to add a language attribute to an element surrounding content in another language. On a Next.js site the page layout can set it from the language in the route; the framework\'s internationalization guide shows `<html lang={...}>` taking the value from the route parameter. Use ka, en and ru. Note that Google says it does not use the lang attribute to detect the language of a page, so this is for browsers, assistive technology and styling, not a search shortcut.',
    },
    { type: 'h2', text: 'Design for text that changes length' },
    {
      type: 'p',
      text: 'Text rarely keeps its size when translated. The W3C article on [text size in translation](https://www.w3.org/International/articles/article-text-size) says text will normally expand, and cites IBM averages for English to European languages: strings up to 10 characters expand 200 to 300 percent, and those over 70 characters about 130 percent. Short strings, such as buttons and menu items, change the most. The article also warns that shorter translations leave unwanted white space.',
    },
    {
      type: 'ul',
      items: [
        'Build buttons, menus and cards that grow in height and width instead of fixed boxes. Avoid text baked into images.',
        'Test with real text from all three languages in the design stage, not lorem ipsum. A menu that fits in English may wrap in Russian.',
        'Choose a typeface that includes Georgian (Mkhedruli) and Cyrillic glyphs. A display font that has only Latin letters will make the browser fall back to a different font for Georgian text and break the look. Check the font\'s language coverage before the brand is locked.',
        'Keep brand names, product names and platforms such as Google and WhatsApp in Latin script in every language.',
        'Check line height, since scripts differ in the space they need, and review each language on a phone, where most breakage shows.',
      ],
    },
    { type: 'h2', text: 'Localize the pages that earn enquiries first' },
    {
      type: 'p',
      text: 'A site does not need every page in every language at launch. A half-translated page, or a page that quietly shows English inside the Georgian version, is worse than no page. Sequence the work by money:',
    },
    {
      type: 'table',
      head: ['Priority', 'Pages', 'Why'],
      rows: [
        ['1', 'Homepage, main service or product pages, contact', 'These decide whether an enquiry happens'],
        ['2', 'Pricing logic or "how we work", FAQ, about and trust pages', 'They remove the doubts that stop a message'],
        ['3', 'Case or project pages, reviews', 'Reviews and project text should be in the reader\'s language, with permission'],
        ['4', 'Blog and guides', 'Only where there is a reason to exist in that language'],
        ['5', 'Legal pages (privacy, terms)', 'Needed in each language you serve; have them checked by the person responsible'],
      ],
    },
    {
      type: 'p',
      text: 'The list of pages a company site needs is in [pages a business website needs](/blog/pages-a-business-website-needs). Localize, don\'t only translate: change examples, delivery areas, currency, phone numbers and opening hours where they differ, and rewrite headlines that depend on a pun or phrase that does not carry over.',
    },
    { type: 'h2', text: 'Forms, contact details and everyday formats' },
    {
      type: 'ul',
      items: [
        'Make form labels, errors and thank-you messages part of the translation. They are the part visitors read right before they enquire.',
        'Accept Georgian phone numbers in the +995 form and the local form, and do not reject Latin or Georgian script in name fields.',
        'Offer the messengers your customers use, such as WhatsApp or Viber, in every language version.',
        'Reply in the language of the enquiry. If nobody on the team writes Russian, say so on the Russian page instead of promising a reply you cannot give.',
        'Format dates, currency (₾ or the currency you quote) and units the same way inside a language version.',
      ],
    },
    { type: 'h2', text: 'Keep the versions in step' },
    {
      type: 'p',
      text: 'The usual failure is not the launch but the six months after: the Georgian page is updated, the English one is not. Decide at the start who owns each language, how a change in one version is flagged for the others, and how a page is marked as "needs update". A content system that stores each page once with fields per language, or links translations to a source page, makes that easier; the options are discussed in [headless CMS for a business website](/blog/headless-cms-for-business-website). Plan the design and content together, as described in the [website UX and UI design process](/blog/website-ux-ui-design-process).',
    },
    {
      type: 'p',
      text: 'WakeUP builds premium, complex websites and landing pages, including multilingual builds; see the [website development service](/services/website-development). If you already have a site and are unsure how well each language version works, the [free marketing audit](/audit) is the place to ask. For search setup across languages, continue with [multilingual SEO](/blog/multilingual-seo).',
    },
  ],
}
