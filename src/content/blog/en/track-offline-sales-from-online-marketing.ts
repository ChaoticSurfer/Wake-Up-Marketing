import type { BlogPost } from '@/lib/blog'

export const post: BlogPost = {
  locale: 'en',
  slug: 'track-offline-sales-from-online-marketing',
  title: 'How to track offline sales from online marketing',
  metaTitle: 'Track Offline Sales From Online Ads',
  description:
    'How to track offline sales from online marketing: promo codes, a "how did you hear" field and CRM uploads that tie in-person and phone sales to ads.',
  publishedAt: '2027-02-24T09:00:00+04:00',
  updatedAt: '2027-02-24T09:00:00+04:00',
  service: 'audit',
  reviewState: 'llm_reviewed',
  body: [
    {
      type: 'p',
      text: 'To track offline sales from online marketing, give every online enquiry a trail that survives until the sale: a promo code, a "how did you hear about us" answer, or a click ID saved in your CRM. Then record the closed sale against that trail and, where you can, send it back to Google Ads and Meta so the ad platforms learn from real revenue, not just form fills.',
    },
    { type: 'h2', text: 'Why online reports miss offline sales' },
    {
      type: 'p',
      text: 'An ad platform sees a click and, at best, a form submission or a call. If the deal closes in your showroom, at a clinic reception or after three phone calls, the sale happens where no pixel can see it. The report then shows leads and cost per lead, and you cannot tell which campaign brought people who actually paid.',
    },
    {
      type: 'p',
      text: 'Google describes the fix in its help centre: by importing offline conversions, you can ["measure what happens in the offline world after your ad results in a click or call to your business"](https://support.google.com/google-ads/answer/2998031). The same idea works with cheaper tools for a business that is not ready for a CRM upload.',
    },
    { type: 'h2', text: 'Pick the method that fits how you sell' },
    {
      type: 'table',
      head: ['Method', 'Best for', 'What you need', 'Weak spot'],
      rows: [
        ['Promo or landing-page code', 'Shops, salons, restaurants', 'A unique code per campaign, a till field for it', 'Customers forget or never use the code'],
        ['"How did you hear about us" field', 'Clinics, B2B firms, any sales by phone', 'One required field in the form and one question at the desk or on the call', 'Answers are self-reported and often vague'],
        ['Tracked phone number or form-to-CRM link', 'Businesses that sell by phone or messages', 'A number or hidden fields that record the source', 'Setup work; calls from saved numbers are missed'],
        ['Click ID saved in the CRM, sale uploaded to the ad platform', 'Longer sales cycles with a CRM', 'Auto-tagging, hidden form fields, a CRM stage for "sold", a regular upload', 'Needs a developer or a connector, and clean data'],
      ],
    },
    {
      type: 'p',
      text: 'Start with the first two. They cost almost nothing and tell you within a month whether paid channels bring buyers or only enquiries. Move to the click-ID method when ad spend is large enough that a better signal pays for the setup.',
    },
    { type: 'h2', text: 'Promo codes and the "how did you hear" field' },
    {
      type: 'p',
      text: 'A code works when the ad itself carries it: "Show this code at the till" or "Quote OFFER-MARCH when you call". Use one code per channel or campaign, not one for everything, and let the cashier or receptionist enter it into the sale record, not on paper. A code that exists only on a coupon cannot be counted at month end.',
    },
    {
      type: 'p',
      text: 'The "how did you hear" question catches people who never use codes. Make it a required dropdown on the web form (Instagram, Facebook ad, Google search, recommendation, other) and ask the same question verbally at the first visit or call, writing the answer into the same CRM field. Keep the options few and add a free-text "other", otherwise staff will pick the first item to save time.',
    },
    {
      type: 'p',
      text: 'Read both with care. Customers often name the last place they saw you, not the first. The [attribution models post](/blog/marketing-attribution-models) explains why a single answer can mislead, and the [UTM parameters guide](/blog/utm-parameters-guide) shows how to tag links so the web side of the trail is clean.',
    },
    { type: 'h2', text: 'Carry the click ID into your CRM' },
    {
      type: 'p',
      text: 'This is the method that lets an ad platform see an in-person sale. When someone clicks a Google ad, Google Ads gives that click a unique ID, the GCLID. [Google explains the flow](https://support.google.com/google-ads/answer/2998031): you save the GCLID with the lead information you collect, and when the conversion happens offline, you give that GCLID back to Google Ads together with the type and time of the conversion.',
    },
    {
      type: 'ol',
      items: [
        'Turn on auto-tagging in Google Ads, which [Google lists as a prerequisite](https://support.google.com/google-ads/answer/7012522) for importing conversions.',
        'Add hidden fields to your lead form that capture the click ID and the campaign source from the page URL.',
        'Send those fields to the matching CRM record, as described in the [website and CRM integration guide](/blog/website-crm-integration).',
        'Add a CRM stage such as "Sold" and a date and value field, filled in by the person who closes the deal.',
        'Upload sold records to Google Ads on a schedule. Upload the click ID exactly as it was stored.',
      ],
    },
    {
      type: 'p',
      text: 'Google also offers [enhanced conversions for leads](https://support.google.com/google-ads/answer/9888656), which uses hashed, first-party user-provided data from your website, such as your lead form, so the sale can be matched back to the campaign. Either way, upload sold records regularly rather than letting them pile up for months.',
    },
    { type: 'h2', text: 'Send sales back to Meta as well' },
    {
      type: 'p',
      text: 'For Facebook and Instagram leads, Meta documents a Conversions API route for CRMs. Its guide says to [send all stages of a lead as they update](https://developers.facebook.com/docs/marketing-api/conversions-api/guides/conversions-api-for-crm), starting with the raw lead, and to send at least two stages, three or more if possible. Those events use the lead ID and the action source "system_generated". The guide is written for partners that build such integrations, so a small company usually reaches it through a CRM that already supports it, or through a developer.',
    },
    {
      type: 'p',
      text: 'Pick stages that mean something, for example "Lead", "Qualified" and "Sold". The point is to teach the campaign what a good buyer looks like. If you also run the Pixel, see how the [Pixel and Conversions API](/blog/meta-pixel-vs-conversions-api) work together so events are not counted twice.',
    },
    { type: 'h2', text: 'Rules that keep the data honest' },
    {
      type: 'ul',
      items: [
        'One place for the sale: a single CRM field for source and a single "sold" stage, not a spreadsheet per branch.',
        'Name your sources the same way everywhere. "FB", "Facebook" and "facebook ad" become three rows in a report.',
        'Record the sale value and date, not just "won". Without them you can count sales but not return.',
        'Check a sample each month: take ten sold customers and trace each back by hand to the ad or the answer they gave.',
        'Respect privacy. Hashed data and consent notices are part of the setup, and the rules of the platform and your local law both apply.',
      ],
    },
    {
      type: 'p',
      text: 'If you are not sure where the trail breaks today, the [free marketing audit](/audit) reviews your ads, website and sales process and points out where leads lose their source before they become sales.',
    },
  ],
}
