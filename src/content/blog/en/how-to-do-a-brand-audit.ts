import type { BlogPost } from '@/lib/blog'

export const post: BlogPost = {
  locale: 'en',
  slug: 'how-to-do-a-brand-audit',
  title: 'How to do a brand audit: a one-week checklist for marketing managers',
  metaTitle: 'How to Do a Brand Audit',
  description:
    'How to do a brand audit in one week: an internal and external checklist with a scorecard, so you can decide what to fix, refresh or rebrand.',
  publishedAt: '2027-02-18T12:00:00+04:00',
  updatedAt: '2027-02-18T12:00:00+04:00',
  service: 'branding',
  reviewState: 'llm_reviewed',
  body: [
    {
      type: 'p',
      text: 'To do a brand audit, compare what your company says it is with what staff, customers and your own materials actually show. Check the inside first (mission, messaging, assets, how colleagues describe the brand), then the outside (website, social profiles, search results, reviews, competitors, customer feedback). Score each area, and end with a short list of fixes.',
    },
    { type: 'h2', text: 'What a brand audit is for' },
    {
      type: 'p',
      text: 'An audit answers one question: is the brand we show consistent, clear and different enough to win the customers we want? It is not a redesign and it does not need a budget. A marketing manager can run the first pass in a week with access to the website, social accounts, analytics and a handful of colleagues and customers. [Frontify\'s guide](https://www.frontify.com/en/blog/brand-audit) splits the work into an internal review of employee understanding, assets and consistency, and an external review of competitors, perception, visibility and reputation. [Shopify\'s guide](https://www.shopify.com/blog/how-to-do-a-brand-audit) adds customer experience as a third part. The checklist below follows the internal and external split, adds customer calls, and keeps it small.',
    },
    {
      type: 'p',
      text: 'If you are not sure the problem is the brand at all, read [signs you need a rebrand](/blog/signs-you-need-a-rebrand) first. If the audit points to a full change, [how to rebrand a business](/blog/how-to-rebrand-a-business) is the next step.',
    },
    { type: 'h2', text: 'A five-day plan' },
    {
      type: 'table',
      head: ['Day', 'Focus', 'Output'],
      rows: [
        ['Monday', 'Define the brand you intend: mission, audience, promise, tone', 'One paragraph that everyone can agree is "the brand"'],
        ['Tuesday', 'Inventory every asset: logo versions, fonts, colours, templates, decks, signage, social profiles, email signatures', 'A list or folder of everything in use, with dates'],
        ['Wednesday', 'Internal view: ask five to eight colleagues from different teams to describe the brand', 'Their words, copied exactly'],
        ['Thursday', 'External view: website, search results, Google Business Profile, social, reviews, competitors', 'Screenshots and notes'],
        ['Friday', 'Customer feedback and scoring', 'A scorecard and a ranked fix list'],
      ],
    },
    { type: 'h2', text: 'Step 1: write down the brand you intend' },
    {
      type: 'p',
      text: 'You cannot test consistency against nothing. Write, in plain words, who the company serves, what it promises them, what makes it different, and how it should sound. If your company already has brand guidelines, use them and note which parts nobody follows. If not, the gap is itself a finding, and [how to create brand guidelines](/blog/how-to-create-brand-guidelines) and [how to define brand voice](/blog/how-to-define-brand-voice) cover what to write. For the wider idea of what a brand includes, see [what is branding](/blog/what-is-branding).',
    },
    { type: 'h2', text: 'Step 2: audit the inside' },
    {
      type: 'ul',
      items: [
        'Asset inventory. Collect every version of the logo, every colour and font actually used, presentation templates, proposal documents, invoices, email signatures, business cards and packaging. Count how many different logo files and colour values are in circulation.',
        'Staff description test. Ask each person to say in one sentence what the company does, for whom, and why it is better. Do not coach them. If five people give five answers, the problem is positioning and not design.',
        'Sales and support view. Ask the people who talk to customers which questions come up most and which objections they hear. These show where the brand message fails to answer a doubt.',
        'Internal materials. Check job adverts, onboarding documents and internal announcements for tone. A brand that sounds warm on social media and cold in contracts is inconsistent.',
      ],
    },
    { type: 'h2', text: 'Step 3: audit the outside' },
    {
      type: 'p',
      text: 'Look at the brand as a stranger would. Open a private window and go through these in order:',
    },
    {
      type: 'ol',
      items: [
        'Search for your company name and for your main service. Note what appears on the first page: your site, profiles, reviews, news, competitors. Check what snippet and title Google shows for your own pages. In Google Search Console, the [Performance report](https://support.google.com/webmasters/answer/7576553) shows clicks and impressions for queries, so you can see how many people find you by name versus by service.',
        'Website first screen. Does it say what you do, for whom, and what to do next, in under five seconds? Compare the logo, colours, photography and tone with your written brand. The [website audit checklist](/blog/website-audit-checklist) covers the technical side.',
        'Google Business Profile and listings. Google asks you to [enter the business name exactly as it appears on your real world business signage, stationery, and other branding](https://support.google.com/business/answer/3039617). Check that name, address and phone match across Google, social profiles, directories and your site.',
        'Social profiles. Compare profile pictures, bios, handles and link-in-bio across platforms. The [social media audit](/blog/social-media-audit) goes deeper on content and results.',
        'Reviews and mentions. Read your last 20 reviews and any press or forum mentions. Write down the three words customers use most. Ongoing habits for this are in [online reputation management](/blog/online-reputation-management), and [how to get more Google reviews](/blog/how-to-get-more-google-reviews) helps if there are too few.',
        'Competitors. Collect homepages and bios of three to five direct competitors and read them side by side with yours. If you could swap logos and nobody would notice, positioning is weak. [How to do competitor analysis](/blog/how-to-do-competitor-analysis) gives the free tools.',
        'Accessibility basics. Check that body text has enough contrast. WCAG 2.2 asks for a contrast ratio of at least 4.5:1 for normal text and 3:1 for large text, per the [W3C explanation](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html). Brand colours that fail it are a design fix.',
      ],
    },
    { type: 'h2', text: 'Step 4: ask customers' },
    {
      type: 'p',
      text: 'Perception cannot be guessed, so talk to people. Five to ten customer calls of 15 minutes will tell you more than a long survey. Ask what they were looking for when they found you, what they would say if a friend asked what you do, what nearly stopped them buying, and who else they considered. Record their phrases without correcting them: your best headline is often in them. Include one or two people who did not buy. Keep the sample honest: it is a qualitative check, not a statistic, and small samples can mislead if you only call happy clients.',
    },
    { type: 'h2', text: 'Step 5: score it and decide' },
    {
      type: 'p',
      text: 'Score each area from 1 (broken) to 5 (strong), with a one-line reason and a link to the evidence. The scorecard stays in one document so you can rerun it next year and compare.',
    },
    {
      type: 'table',
      head: ['Area', 'What a 5 looks like', 'What a 1 looks like'],
      rows: [
        ['Positioning clarity', 'Staff and customers describe the company in similar words', 'Everyone gives a different answer'],
        ['Visual consistency', 'One logo, palette and font set used everywhere', 'Several logo versions and colour values in use'],
        ['Messaging and tone', 'Website, ads, social and sales sound like one company', 'Different voice on each channel'],
        ['Differentiation', 'You can state what you do that competitors do not', 'Your homepage could be a competitor\'s'],
        ['Reputation', 'Reviews and mentions match the brand promise', 'Reviews contradict the promise'],
        ['Findability', 'Search for your name returns accurate, controlled results', 'Wrong or outdated results; listings disagree'],
      ],
    },
    {
      type: 'p',
      text: 'Then sort the findings into three bins. Fix now: inconsistencies you can correct this month, such as outdated logos, wrong listings, mismatched bios. Refresh: parts of the identity or messaging that no longer fit but where the core idea is sound. Rebrand: the promise or positioning itself is wrong, outdated or shared with competitors. Most audits end with fix-now and refresh lists. A rebrand is the exception, so do not conclude it from design taste alone.',
    },
    { type: 'h2', text: 'Common mistakes' },
    {
      type: 'ul',
      items: [
        'Auditing without a written brand to compare against.',
        'Asking only managers. The people who see the brand most closely, such as sales and support, often disagree with the leadership view.',
        'Treating a low score as a design problem when it is a positioning problem.',
        'Skipping the follow-up. An audit that does not end in owners and dates is a report on a shelf.',
        'Never repeating it. Run the scorecard again each year, or after a major change such as a new service or market.',
      ],
    },
    {
      type: 'p',
      text: 'If you want a second pair of eyes, WakeUP offers a [free marketing audit](/audit) that looks at your brand and marketing together, and the [branding and positioning service](/services/branding) covers positioning, messaging, visual identity and guidelines when the audit shows work is needed.',
    },
  ],
}
