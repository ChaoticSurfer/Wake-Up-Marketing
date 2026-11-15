import type { BlogPost } from '@/lib/blog'

export const post: BlogPost = {
  locale: 'en',
  slug: 'improve-facebook-lead-ads-quality',
  title: 'How to improve Facebook lead ads quality',
  metaTitle: 'Improve Facebook Lead Ads Quality',
  description:
    'How to improve Facebook lead ads quality: use higher intent forms, qualifying questions and exclusions, then feed CRM outcomes back to Meta.',
  publishedAt: '2027-01-28T12:00:00+04:00',
  updatedAt: '2027-01-28T12:00:00+04:00',
  service: 'advertising',
  reviewState: 'llm_reviewed',
  body: [
    {
      type: 'p',
      text: 'To improve Facebook lead ads quality, make the form harder to submit by accident, ask two or three questions that screen out poor fits, exclude people you do not want, and tell Meta which leads became customers. Cheap leads that never answer the phone are usually a form and feedback problem, not a budget problem. Fix them in that order and judge the result on cost per qualified lead, not cost per lead.',
    },
    { type: 'h2', text: 'First, find out where the quality drops' },
    {
      type: 'p',
      text: 'Before changing settings, take the last 30 to 50 leads and mark each one in a sheet: reached, interested, qualified, sold. The pattern tells you what to fix.',
    },
    {
      type: 'table',
      head: ['What you see', 'Likely cause', 'Start with'],
      rows: [
        ['Many leads, nobody answers', 'Accidental taps, wrong or fake phone numbers, slow follow-up', 'Higher intent form, speed of response'],
        ['Reached, but not interested', 'The ad promised something the offer does not deliver', 'Ad copy and form intro'],
        ['Interested, but wrong fit (size, budget, city)', 'No screening, audience too broad', 'Qualifying questions, targeting'],
        ['Good leads, but few sales', 'A sales-side problem, not an ad problem', 'Follow-up process, [lead qualification](/blog/how-to-qualify-leads)'],
      ],
    },
    { type: 'h2', text: 'Use the higher intent form type' },
    {
      type: 'p',
      text: 'Instant forms default to a version built for volume, as Jon Loomer’s guide (quoted below) explains. Meta’s developer documentation says you can create forms that result in higher intent leads, and that this setting adds a step where a person reviews and confirms their answers before submitting ([Meta lead ads guide](https://developers.facebook.com/docs/marketing-api/guides/lead-ads/create)). In Ads Manager the choice appears as the form type, with the higher intent option adding that review screen.',
    },
    {
      type: 'p',
      text: 'Expect fewer leads and a higher cost per lead. Jon Loomer, a Meta ads educator, wrote in April 2023 that the volume-focused type [“may not lead to the highest quality leads”](https://www.jonloomer.com/how-to-get-high-quality-leads-from-facebook-lead-ads/). The trade is worth making when each lead needs a phone call from your team, because every unqualified lead costs staff time as well as ad spend.',
    },
    { type: 'h2', text: 'Ask questions that screen, then keep the form short' },
    {
      type: 'p',
      text: 'Each question filters the audience, and each one also reduces the count. Loomer puts it plainly: “The more information you demand, the fewer leads you should expect.” So add only questions that change whether you would call the person. The wording of the questions themselves is covered in [how to qualify leads](/blog/how-to-qualify-leads); inside the Meta form, three things help:',
    },
    {
      type: 'ul',
      items: [
        'Use multiple-choice questions for the screening points (company size, city, timing, budget band). Loomer notes that with a multiple-choice question you can turn lead filtering on, which sends people whose answers do not qualify to a different closing message instead of counting them as leads.',
        'Add one short-answer question that makes the person type a sentence about their need. A casual tapper tends to skip it or write a few random characters, which you can spot at a glance.',
        'Write the form intro with the real conditions: who the offer is for, the minimum order, the city you serve. Honest limits tend to reduce unqualified submissions.',
      ],
    },
    {
      type: 'p',
      text: 'If screening needs many questions or the buyer needs convincing first, compare the option of a landing page, covered in [Facebook lead ads vs landing page](/blog/facebook-lead-ads-vs-landing-page).',
    },
    { type: 'h2', text: 'Narrow the audience and exclude the wrong people' },
    {
      type: 'ul',
      items: [
        'Exclude existing customers and recent leads using a customer list, so you stop paying to collect people you already have.',
        'Exclude audiences that are clearly not buyers, such as your own employees, job seekers who engaged with a careers post, and partner companies.',
        'Match the geography and language to where you can actually serve. A Georgian-language ad shown across the whole country produces leads you cannot visit.',
        'Be careful with very wide broad targeting when the form is weakly screened: the platform finds the cheapest people to submit, and cheap is not the same as fit.',
      ],
    },
    {
      type: 'p',
      text: 'The ad also screens. If the creative shows a price range, a minimum project size or a clear condition, the people who still tap are better informed. Test this against your current ad, one change at a time; the metrics worth reading are listed in [Facebook ads metrics](/blog/facebook-ads-metrics).',
    },
    { type: 'h2', text: 'Call fast, and record the outcome' },
    {
      type: 'p',
      text: 'Quality is partly decided after the form. A lead contacted within minutes is more likely to still remember the ad than one contacted two days later. Set up an alert on every new lead, give one person the job of the first call, and record the result in a CRM or a sheet with fixed stages, for example: new, reached, qualified, proposal, won, lost. Without those stages you cannot show Meta what a good lead is. If you do not yet have a system, see [how to choose a CRM](/blog/how-to-choose-crm), and for ranking leads once you have data, the [lead scoring model](/blog/lead-scoring-model) post.',
    },
    { type: 'h2', text: 'Send CRM outcomes back to Meta' },
    {
      type: 'p',
      text: 'Meta can optimise delivery for leads that your sales team marks as qualified, not just for form submissions. Its documentation on the [Conversions API for CRM](https://developers.facebook.com/documentation/ads-commerce/conversions-api/conversion-leads-integration) describes sending down-funnel event data from your CRM back to Meta, for use with the Conversion Leads performance goal. The page lists these conditions as of November 2026:',
    },
    {
      type: 'ul',
      items: [
        'The goal currently works only with Facebook and Instagram lead ads (instant forms).',
        'You already have an integration that downloads leads from Meta into your CRM.',
        'You generate at least 200 leads per month.',
        'You can upload data at least once per day.',
        'The stage you optimise for happens within 28 days of the lead, and has a conversion rate between 1% and 40%.',
        'For best results, store the 15 to 17 digit Meta Lead ID in your CRM; if you do not have it, customer parameters such as click ID, phone number or email can be sent instead.',
      ],
    },
    {
      type: 'p',
      text: 'The 200-leads rule matters in Georgia. A company getting 40 leads a month will not qualify, and should work on the form, questions and follow-up instead. Meta states the expected time to value is about one month on historical data, and the page offers no performance figures, so treat the benefit as something to test, not to assume. This feedback loop is separate from the website pixel; see [Meta pixel vs Conversions API](/blog/meta-pixel-vs-conversions-api) for website events. Requirements can change, so check the current page before you build.',
    },
    { type: 'h2', text: 'Judge it on cost per qualified lead' },
    {
      type: 'p',
      text: 'Higher intent forms and screening questions will raise your cost per lead. Compare the funnel instead:',
    },
    {
      type: 'table',
      head: ['Measure', 'How to work it out'],
      rows: [
        ['Cost per lead', 'Ad spend / leads'],
        ['Cost per qualified lead', 'Ad spend / leads your team marks as qualified'],
        ['Cost per customer', 'Ad spend / customers won from the campaign'],
      ],
    },
    {
      type: 'p',
      text: 'If cost per qualified lead falls after a change, keep it, even when cost per lead rose. To turn the last line into a return, see [how to calculate marketing ROI](/blog/how-to-calculate-marketing-roi). WakeUP’s [advertising service](/services/advertising) includes account audit and tracking setup, creative testing and a monthly report in cost per lead and revenue. If you want an outside look at your current forms and funnel, request the free [marketing audit](/audit).',
    },
  ],
}
