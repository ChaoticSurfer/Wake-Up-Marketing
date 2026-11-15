import type { BlogPost } from '@/lib/blog'

export const post: BlogPost = {
  locale: 'en',
  slug: 'how-to-rebrand-a-business',
  title: 'How to rebrand your business: a step-by-step plan',
  metaTitle: 'How to Rebrand Your Business',
  description:
    'How to rebrand your business in six steps: reason, audit, strategy, identity, rollout and the domain and search checks that protect your traffic.',
  publishedAt: '2026-12-30T09:00:00+04:00',
  updatedAt: '2026-12-30T09:00:00+04:00',
  service: 'branding',
  reviewState: 'llm_reviewed',
  body: [
    {
      type: 'p',
      text: 'To rebrand your business, work in this order: confirm the reason, audit what you have, set the new strategy, design the identity, roll it out in a planned sequence, and protect your website and search traffic if the name or domain changes. Doing the identity first, or skipping the last step, is how companies end up with a new logo and fewer customers finding them.',
    },
    { type: 'h2', text: 'Rebrand or refresh?' },
    {
      type: 'p',
      text: 'A refresh updates how the brand looks: colours, type, logo details. A rebrand changes what the company is understood to be: positioning, audience, sometimes the name. The creative agency Huddle Creative [draws the same line](https://huddlecreative.com/blog/how-to-rebrand), describing a refresh as updating look and feel and a rebrand as reinventing the business when its positioning, values or mission have changed. If your positioning still holds and only the visuals are tired, a refresh costs less and carries less risk.',
    },
    {
      type: 'p',
      text: 'This guide is about changing an existing brand. For the definitions behind the terms, see [what is branding](/blog/what-is-branding) and [branding vs brand identity](/blog/branding-vs-brand-identity).',
    },
    { type: 'h2', text: 'Step 1: be clear why you are rebranding' },
    {
      type: 'p',
      text: 'Good reasons are strategic: a merger or acquisition, a move into a new market or customer segment, a business that has outgrown its original offer, or a brand that sounds the same as its competitors. Huddle Creative lists boredom, ego, a crisis (a rebrand is read as a distraction) and an attempt to save floundering sales as wrong reasons. The last one deserves attention: if sales fall because the product, price or service has a problem, a new identity will not fix it.',
    },
    {
      type: 'p',
      text: 'Write the reason in two sentences and name one measurable result you expect, such as more enquiries from a target segment or fewer price-only negotiations. You will use it to settle arguments later.',
    },
    { type: 'h2', text: 'Step 2: audit what exists' },
    {
      type: 'p',
      text: 'List every place the brand appears, and decide for each whether it will change, stay or go. [Moo\'s rebranding guide](https://www.moo.com/blog/ca/business-tips/the-rebranding-process-from-strategy-to-design) says that just about every touchpoint may need updating, from digital assets and offline materials to the brand personality itself. For a company of 20 to 250 people the list usually includes:',
    },
    {
      type: 'ul',
      items: [
        'Website, email signatures, forms and automated emails',
        'Social media profiles, Google Business Profile and directory listings',
        'Ads, templates for presentations, proposals and invoices',
        'Signage, vehicles, uniforms, packaging and printed material',
        'Contracts, legal name and trademark registrations',
      ],
    },
    {
      type: 'p',
      text: 'Alongside the inventory, collect evidence about how the brand is seen: ask customers, lost prospects and your own sales team why people choose you or do not. Look at competitors\' positioning too. The aim is to find what customers already recognise and value, so you keep it. A [free marketing audit](/audit) can give you a first outside view of your website and the path from visit to enquiry.',
    },
    { type: 'h2', text: 'Step 3: set the strategy' },
    {
      type: 'p',
      text: 'Strategy answers who you serve, what you promise them, why you rather than a competitor, and how you sound. Moo\'s process puts this in a creative phase before any visual work: positioning, an elevator pitch, audience profiles and key benefits. Agree it with the people who must live with it - management, sales and the team who talk to customers - before any designer draws anything.',
    },
    {
      type: 'p',
      text: 'If the name is changing, test candidates for meaning in Georgian, English and Russian, for domain and social handle availability, and for trademark conflicts. Checking a name is cheap; discovering a clash after printing is not.',
    },
    { type: 'h2', text: 'Step 4: design the identity' },
    {
      type: 'p',
      text: 'Only now do the logo, colours, typography, imagery and tone of voice get designed, as the visible form of the strategy. Moo advises that stakeholder feedback on concepts should go through one point of contact who consolidates comments, refers back to the brief and gives specific, actionable notes, rather than a dozen opinions arriving separately.',
    },
    {
      type: 'p',
      text: 'The deliverable should be more than files of a logo: brand guidelines and working templates, so that the next person who makes a presentation or an ad does it correctly. For what a full identity package costs and contains, see [how much branding costs](/blog/how-much-does-branding-cost).',
    },
    { type: 'h2', text: 'Step 5: roll out in a planned order' },
    {
      type: 'p',
      text: 'Tell your own team first and give them the reasons, because they are the first people customers ask. Then change the assets in a planned sequence, not piecemeal, so customers never see two brands at once for long. A typical order:',
    },
    {
      type: 'ol',
      items: [
        'Internal launch: guidelines, templates, email signatures, a short briefing.',
        'Website and online profiles on the same day, with a clear announcement to customers and partners.',
        'Documents that carry your name: contracts, invoices, proposals.',
        'Ads and campaigns, so new creative starts with the new identity.',
        'Physical items - signage, vehicles, packaging - as stock runs out or on a set date.',
      ],
    },
    {
      type: 'p',
      text: 'Explain the change to customers in plain terms: what is new, what is not. If the name changes, add "formerly [old name]" in prominent places for a period, so people who search for the old name still find you.',
    },
    { type: 'h2', text: 'Step 6: protect your website and search traffic' },
    {
      type: 'p',
      text: 'This step is the one most guides skip. If your domain, page addresses or business name change, search engines need to be told, and visitors from old links need to land in the right place.',
    },
    {
      type: 'ul',
      items: [
        'Map old URLs to new ones. Google\'s [site move guide](https://developers.google.com/search/docs/crawling-indexing/site-move-with-url-changes) says: "It\'s important to map your old site\'s URLs to the URLs for the new site."',
        'Use permanent server-side redirects. The same guide says "`301` and other permanent redirects don\'t cause a loss in PageRank" and advises keeping the redirects "for as long as possible, generally at least 1 year".',
        'If the domain changes, use the Change of Address tool. [Google\'s help page](https://support.google.com/webmasters/answer/9370220) says you must be an owner of both the old and new properties in Search Console, and that after you file, the effects last 180 days. It recommends keeping the old domain registered for at least a year.',
        'Update your Google Business Profile. Google tells businesses to enter their name "exactly as it appears on your real world business signage, stationery, and other branding", and warns that after a name change on a verified profile "you might need to verify your business again" ([Google Business Profile Help](https://support.google.com/business/answer/3039617)). Change the profile once the new name is actually in use.',
        'Update your own links: email signatures, social bios, directory listings, partner sites and any high-traffic external links.',
      ],
    },
    {
      type: 'p',
      text: 'Treat the website part of a rebrand as a mini migration, with a checklist and someone who tests redirects before launch. The [website redesign checklist](/blog/website-redesign-checklist) covers the technical side in detail.',
    },
    { type: 'h2', text: 'A short checklist for the whole project' },
    {
      type: 'table',
      head: ['Step', 'Output', 'Who signs off'],
      rows: [
        ['Reason', 'Two-sentence rationale and one target result', 'Owner or CEO'],
        ['Audit', 'Asset inventory and customer evidence', 'Marketing lead'],
        ['Strategy', 'Positioning, messages, name decision', 'Management team'],
        ['Identity', 'Logo, system, guidelines, templates', 'One named decision-maker'],
        ['Rollout', 'Dated launch plan by channel', 'Marketing lead'],
        ['Search and domain', 'Redirect map, Change of Address, profile updates', 'Marketing lead with developer'],
      ],
    },
    {
      type: 'p',
      text: 'WakeUP Marketing\'s [branding and positioning service](/services/branding) covers a market and competitor review, positioning and key messages, logo and visual identity, brand guidelines and rollout to your website, social media and ads.',
    },
  ],
}
