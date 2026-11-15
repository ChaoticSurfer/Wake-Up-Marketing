import type { BlogPost } from '@/lib/blog'

export const post: BlogPost = {
  locale: 'en',
  slug: 'customer-journey-map',
  title: 'Customer journey map: how to build a one-page version for a service company',
  metaTitle: 'Customer Journey Map: One-Page Guide',
  description:
    'A customer journey map shows the stages a buyer goes through, where they drop out and who owns each step. Build a one-page version in an afternoon.',
  publishedAt: '2027-01-21T15:00:00+04:00',
  updatedAt: '2027-01-21T15:00:00+04:00',
  service: 'audit',
  reviewState: 'llm_reviewed',
  body: [
    {
      type: 'p',
      text: 'A customer journey map is a picture of the steps one type of customer goes through to reach a goal, such as booking your service, with what they do, what they feel and where they get stuck at each step. Nielsen Norman Group defines it as "a visualization of the process that a person goes through in order to accomplish a goal". For a service company, one page is enough: stages, touchpoints, drop-offs and an owner per stage.',
    },
    {
      type: 'p',
      text: 'This guide is for a company with a sales team, a website, some ads and social media, that wants to see where enquiries are lost. The finished page also doubles as the input for a marketing audit.',
    },
    { type: 'h2', text: 'What a journey map is for' },
    {
      type: 'p',
      text: 'Nielsen Norman Group\'s Kate Kaplan puts the rule first: "Journey maps should always be created to support a known business goal." A map made for its own sake produces a nice poster and no decisions. Pick the question before you draw anything, for example:',
    },
    {
      type: 'ul',
      items: [
        'Why do people ask for a quote and then never reply?',
        'Why does the website get visits but few enquiries?',
        'Where do leads from ads go cold after the first call?',
        'Why do first-time customers not come back or recommend us?',
      ],
    },
    {
      type: 'p',
      text: 'The same article warns that "maps that do not align to a business goal will not result in applicable insight". If your question is "how do we get more leads from the website", the map starts at the first search or ad click and ends at a signed deal.',
    },
    { type: 'h2', text: 'Step 1: choose one customer and one scenario' },
    {
      type: 'p',
      text: 'The Nielsen Norman Group guide "Journey Mapping 101" advises: "Focus on one actor per map." Mixing a private buyer and a procurement manager into one line gives you an average nobody recognises. Write one sentence: who the customer is, and what they are trying to get done. For example: "The operations manager of a 60-person company who needs a new accounting provider before the end of the quarter."',
    },
    {
      type: 'p',
      text: 'If you have more than one important customer type, make one page each. If you need help describing them, see [how to create a buyer persona](/blog/how-to-create-buyer-persona).',
    },
    { type: 'h2', text: 'Step 2: lay out the stages' },
    {
      type: 'p',
      text: 'Common stages in guides such as Lucid\'s are awareness, consideration, decision, retention and advocacy. For a service company they translate into plain steps that match how people really buy:',
    },
    {
      type: 'ol',
      items: [
        'Notice: the person realises they have a problem or sees your name for the first time.',
        'Research: they search, compare providers, read reviews, check your site and social pages.',
        'Enquire: they call, message or fill in a form.',
        'Decide: they get a quote or a meeting and compare it with others.',
        'Start: contract, payment, onboarding.',
        'Stay and recommend: delivery, renewal, referrals.',
      ],
    },
    {
      type: 'p',
      text: 'Rename the stages to match your business. A clinic, a law firm and a logistics company will have different words and a different number of steps. The stages are the columns of your page. For the funnel view of the same idea, see [what is a marketing funnel](/blog/what-is-marketing-funnel).',
    },
    { type: 'h2', text: 'Step 3: fill in the rows for each stage' },
    {
      type: 'p',
      text: 'Nielsen Norman Group names the key components of a journey map as the user\'s actions, mindsets and emotions, plus opportunities. For a one-page marketing map, use these rows:',
    },
    {
      type: 'table',
      head: ['Row', 'The question it answers', 'Example for the Enquire stage'],
      rows: [
        ['Customer goal', 'What do they want to be done at this step?', 'Find out quickly whether you can help and what it costs'],
        ['Touchpoints', 'Where do they meet you? Channels, pages, people', 'Contact page, phone, WhatsApp, form, Instagram DMs'],
        ['What they feel', 'Confidence, doubt, impatience', 'Unsure whether anyone will reply'],
        ['Drop-off risk', 'What makes them leave here?', 'Slow reply, no direct answer on price range, form too long'],
        ['Evidence', 'What do you actually know about it?', 'Form submissions vs. visits, first-reply time, missed calls'],
        ['Owner', 'Which person is responsible for this stage?', 'Sales manager'],
      ],
    },
    {
      type: 'p',
      text: 'The "evidence" row is what separates a map from guesswork. Kaplan\'s advice: "quantitative data alone cannot build a story", so combine numbers (analytics, CRM, call logs) with a few real conversations: ask five recent customers and two who did not buy how they found you and what almost stopped them. Her warning is worth keeping on the wall: journey maps "should result in truthful narratives, not fairy tales".',
    },
    { type: 'h2', text: 'Step 4: mark the drop-offs' },
    {
      type: 'p',
      text: 'Count how many people reach each stage and how many move to the next. You rarely have perfect numbers; use what exists and mark the gaps as unknown. Typical sources:',
    },
    {
      type: 'ul',
      items: [
        'Website analytics for visits, and enquiries per page. [UTM parameters](/blog/utm-parameters-guide) tell you which ad or post a visit came from.',
        'The CRM or a spreadsheet for leads, meetings and signed deals.',
        'Phone and messenger logs for missed calls and time to first reply.',
        'Ad platforms for clicks and cost per lead.',
      ],
    },
    {
      type: 'p',
      text: 'Circle the stage with the biggest loss. If it is between enquiry and meeting, look at speed of reply and qualification ([how to qualify leads](/blog/how-to-qualify-leads), [marketing and sales alignment](/blog/marketing-and-sales-alignment)). If it is between visit and enquiry, look at the page and its trust signals ([website trust signals](/blog/website-trust-signals)). Attribution gets harder when the path crosses channels; [marketing attribution models](/blog/marketing-attribution-models) explains the options.',
    },
    { type: 'h2', text: 'Step 5: give every stage one owner' },
    {
      type: 'p',
      text: 'Kate Kaplan of Nielsen Norman Group says it directly: "Without ownership, no one has responsibility or empowerment to change anything." The group\'s Journey Mapping 101 article adds that success metrics are often siloed, so "it is no one\'s responsibility to look at the entire experience from the user\'s standpoint".',
    },
    {
      type: 'p',
      text: 'In a mid-sized company, a common gap looks like this: marketing owns the ad and the landing page, sales owns the call, operations owns delivery, and nobody owns the handover between them. Write one name per stage, and one number that person watches, for example time to first reply for the Enquire stage.',
    },
    { type: 'h2', text: 'Step 6: turn the page into a short list of fixes' },
    {
      type: 'p',
      text: 'The map is finished when it produces actions, not when it looks neat. Take the two biggest drop-offs and write for each: the cause you believe, the evidence, the change, the owner and the date to check results. Share the page with the people named on it, and revisit it when channels or offers change. Kaplan\'s advice is to "make it a living interactive document that people can be a part of".',
    },
    {
      type: 'p',
      text: 'A page like this is also what an outside reviewer needs to start work. WakeUP\'s free [marketing audit](/audit) looks at your ads, website and sales process, and a filled-in journey map shows where the biggest losses are. If you want to see where else budget leaks, the [marketing KPIs](/blog/marketing-kpis) guide lists which numbers to track at each stage.',
    },
  ],
}
