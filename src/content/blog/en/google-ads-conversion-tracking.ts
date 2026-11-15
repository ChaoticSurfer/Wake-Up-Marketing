import type { BlogPost } from '@/lib/blog'

export const post: BlogPost = {
  locale: 'en',
  slug: 'google-ads-conversion-tracking',
  title: 'Google Ads conversion tracking: which conversions to count, how to set them up and how to test them',
  metaTitle: 'Google Ads Conversion Tracking Setup',
  description:
    'Google Ads conversion tracking for a lead or sales business: which actions to count, Google tag or GA4 import, enhanced conversions and how to test.',
  publishedAt: '2027-02-08T15:00:00+04:00',
  updatedAt: '2027-02-08T15:00:00+04:00',
  service: 'advertising',
  reviewState: 'llm_reviewed',
  body: [
    {
      type: 'p',
      text: 'Google Ads conversion tracking tells the account which clicks ended in something you value. Decide the list first: a submitted enquiry form, a call, a WhatsApp click, a purchase. Then create each one as a conversion action using the Google tag, or import it from GA4, mark the few that matter as Primary, and test with a real enquiry before any budget is spent.',
    },
    { type: 'h2', text: 'Start with the list: what counts as a conversion for your business' },
    {
      type: 'p',
      text: 'Google\'s [conversion setup guide](https://support.google.com/google-ads/answer/6095821) says correctly configuring conversion actions as "Primary (biddable)" or "Secondary (observation-only)" is critical, and that misconfiguring them "can prevent Smart Bidding from optimizing effectively". Bidding learns from the primary actions, so the list decides what the account tries to buy more of.',
    },
    {
      type: 'p',
      text: 'For a company in Georgia the list is usually short and depends on how customers actually reach you:',
    },
    {
      type: 'table',
      head: ['Business type', 'Primary conversions', 'Keep as secondary'],
      rows: [
        ['Services and B2B (leads)', 'Enquiry or quote form submitted; call longer than a minimum length; booking or demo request', 'WhatsApp or Viber button click, brochure download'],
        ['Online shop', 'Purchase, with its value', 'Add to cart, begin checkout'],
        ['Clinic, salon, restaurant (bookings)', 'Booking completed; call that reaches a person', 'Click on the map or the phone number'],
        ['Mostly messaging-led (customers write on WhatsApp)', 'WhatsApp click, if that really is the enquiry', 'Page views of the contact page'],
      ],
    },
    {
      type: 'p',
      text: 'Two rules keep the list honest. Count actions your sales team would call an enquiry, not page views. And do not make a soft action primary just because it is frequent: a click on a WhatsApp button is only an intention, so check how many of those clicks become real conversations before you let bidding chase them. For the wider set of numbers to watch, see [marketing KPIs](/blog/marketing-kpis).',
    },
    { type: 'h2', text: 'Two ways to create the conversion: Google tag or GA4 import' },
    {
      type: 'p',
      text: 'The same setup guide describes two routes for website conversions. The first uses the Google tag, created either "Set up with URL" or "Set up with code". Google says the URL method suits simple page loads, such as a thank-you page, while the code method is for button clicks, dynamic values and transaction IDs. The second imports events from Google Analytics, and the guide states: "Only events marked as key events in Google Analytics are eligible for import."',
    },
    {
      type: 'p',
      text: 'Importing is documented on Google\'s page about [importing GA4 key events](https://support.google.com/google-ads/answer/10632359). It lists several things to know before you choose it:',
    },
    {
      type: 'ul',
      items: [
        'Google Analytics and Google Ads must be linked, and auto-tagging must be on in the Ads account.',
        'Analytics-based conversions are set as secondary actions "to prevent counting the same event twice for bidding". Google says these settings can only be updated through Google Ads, not in Analytics.',
        'View-through conversions do not appear for imported Analytics conversions, because they need native Google Ads measurement.',
        'The page notes that statistics in Google Ads and Analytics can differ.',
      ],
    },
    {
      type: 'table',
      head: ['', 'Google tag in Google Ads', 'Import from GA4'],
      rows: [
        ['Best when', 'Ads is the only channel you judge, or you need native Ads measurement', 'You already have clean key events in GA4 and want one definition across channels'],
        ['Set up in', 'Goals, then Conversions, in Google Ads', 'Analytics key events, then linked to Google Ads'],
        ['Default role', 'You choose Primary or Secondary', 'Secondary by default; change it in Google Ads'],
        ['Main risk', 'Tag on the wrong page or firing twice', 'A key event that does not mean what you think it means'],
      ],
    },
    {
      type: 'p',
      text: 'A sensible default for a small team: use the Google tag for the conversions you bid on, and keep GA4 for the broader picture. Whichever you pick, do not count the same enquiry twice as two primary actions, or the account will report more leads than you have. How to set up GA4 itself is in [GA4 for small business](/blog/ga4-for-small-business).',
    },
    { type: 'h2', text: 'Calls, forms and WhatsApp: tracking each action' },
    {
      type: 'ul',
      items: [
        'Form submissions: the cleanest signal is a thank-you page that loads only after a successful submit, tracked with the URL method. If the form shows a message without changing page, you need the code method or a Tag Manager trigger on the successful submit.',
        'Calls: Google describes [website call conversions](https://support.google.com/google-ads/answer/6095883) as a Google forwarding number that replaces your number on the site, so you see which keywords and ads led to calls. A call counts only when it lasts longer than a minimum length you set, which filters out very short calls. Check in the account whether this is offered for your country before you plan around it.',
        'WhatsApp and phone-number clicks: these are button or link clicks, so per the setup guide they need the code method. Track them, but start them as secondary until you know how many become real conversations.',
        'Purchases: send the order value and a transaction ID so revenue is counted once per order.',
      ],
    },
    {
      type: 'p',
      text: 'If your enquiries mostly arrive in a messaging app, read [WhatsApp marketing](/blog/whatsapp-marketing) for how those conversations can be handled and measured outside the ad account.',
    },
    { type: 'h2', text: 'Enhanced conversions: when to add them' },
    {
      type: 'p',
      text: 'Google\'s page on [enhanced conversions](https://support.google.com/google-ads/answer/9888656) says it supplements existing conversion data and can "improve the accuracy of your conversion measurement". You pass first-party data from your site, such as an email address or phone number, and Google hashes it with "a secure one-way hashing algorithm called SHA256" before matching it against signed-in Google accounts that engaged with your ads. There are two kinds: enhanced conversions for web, for sales and events on your website, and enhanced conversions for leads, for offline sales that follow a website lead.',
    },
    {
      type: 'p',
      text: 'Add them after the basic tracking is verified, not instead of it. They make sense for a lead business that closes deals by phone or in a CRM, since the lead version is built for exactly that. You still need a cookie notice and privacy policy that cover the data you send; take legal advice if unsure.',
    },
    { type: 'h2', text: 'How to test before you spend' },
    {
      type: 'ol',
      items: [
        'Open the page in a browser with Tag Assistant running. Google\'s setup guide points to Tag Assistant for reviewing a Google tag setup.',
        'Submit a real test enquiry from your phone, click the WhatsApp button, place a test call if you track calls, and complete a low-value test order if you sell online.',
        'In Google Ads open Goals, then Summary, find the conversion action in the Name column and read the Status column, as the guide describes.',
        'Allow time for the status to update: Google notes that it "may take up to 48 hours for the tag status to update in Google Ads after making corrections."',
        'After a week of live traffic, compare the conversions Google Ads reports with the enquiries and orders in your own records. Small gaps are normal; a large one means a tag fires twice or not at all.',
      ],
    },
    {
      type: 'p',
      text: 'Delete your test enquiries from the CRM so they do not distort reports, and do not leave test conversions counting toward bidding. Once data is flowing, the next steps are in [Google Ads optimization tips](/blog/google-ads-optimization-tips), and the full campaign sequence is in [how to run Google Ads](/blog/how-to-run-google-ads). For the same job on Meta, see [Meta Pixel vs Conversions API](/blog/meta-pixel-vs-conversions-api).',
    },
    { type: 'h2', text: 'Common mistakes' },
    {
      type: 'ul',
      items: [
        'Making every micro action primary, so bidding optimises for clicks that never become customers.',
        'Counting the same enquiry through both a tag and a GA4 import as primary.',
        'Auto-tagging switched off in the Ads account, which Google lists as a prerequisite for importing Analytics conversions.',
        'Never checking the numbers against the CRM or order list.',
        'Handing the account to a supplier without keeping admin access yourself.',
      ],
    },
    {
      type: 'p',
      text: 'WakeUP\'s [advertising service](/services/advertising) includes tracking setup as listed on the service page. If you are not sure your current conversions can be trusted, the [free audit](/audit) is a good place to start.',
    },
  ],
}
