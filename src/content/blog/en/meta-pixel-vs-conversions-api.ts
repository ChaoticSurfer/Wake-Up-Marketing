import type { BlogPost } from '@/lib/blog'

export const post: BlogPost = {
  locale: 'en',
  slug: 'meta-pixel-vs-conversions-api',
  title: 'Meta Pixel vs Conversions API: what each does, and why most sites should run both',
  metaTitle: 'Meta Pixel vs Conversions API',
  description:
    'Meta Pixel vs Conversions API: browser tracking against server tracking, why Meta advises running both, how deduplication works and what to set up.',
  publishedAt: '2027-01-04T12:00:00+04:00',
  updatedAt: '2027-01-04T12:00:00+04:00',
  service: 'advertising',
  reviewState: 'llm_reviewed',
  body: [
    {
      type: 'p',
      text: 'The Meta Pixel and the Conversions API both report what people do after your ads, but from different places: the Pixel runs in the visitor\'s browser, the Conversions API sends events from your server or platform. Meta\'s developer documentation advises using the Conversions API in addition to the Pixel and sharing the same events through both. To avoid double counting, matching events must be deduplicated with a shared event ID.',
    },
    { type: 'h2', text: 'How each one works' },
    {
      type: 'p',
      text: 'Meta describes the [Meta Pixel](https://developers.facebook.com/docs/meta-pixel/) as "a snippet of JavaScript code that allows you to track visitor activity on your website." You place it on your pages, and it fires an event, such as PageView or Purchase, when a visitor takes an action. Those events appear as conversions in Ads Manager and feed audiences and optimisation.',
    },
    {
      type: 'p',
      text: 'The [Conversions API](https://developers.facebook.com/docs/marketing-api/conversions-api/) connects marketing data from your server, platform, app or CRM to Meta. Per the documentation, its events are "processed like events sent using the Meta Pixel", so they can support measurement, reporting and optimisation in the same way. The difference is where the event is sent from, and therefore what can interfere with it on the way.',
    },
    {
      type: 'table',
      head: ['', 'Meta Pixel', 'Conversions API'],
      rows: [
        ['Where it runs', 'In the visitor\'s browser', 'On your server, platform or CRM'],
        ['Set up by', 'Adding code or a plugin to the site', 'Events Manager, a partner integration or a developer'],
        ['Sees', 'What the browser does on your pages', 'What your systems know, including later and offline events'],
        ['Weakness', 'Can lose events when the page does not finish loading or the connection drops', 'Needs setup, and customer details must be passed correctly to match events'],
        ['Used alone?', 'Common, but misses events', 'Possible, but Meta advises pairing it with the Pixel'],
      ],
    },
    { type: 'h2', text: 'Why run both' },
    {
      type: 'p',
      text: 'Meta\'s [best practices](https://developers.facebook.com/docs/marketing-api/conversions-api/best-practices) say: "Use the Conversions API in addition to the Meta Pixel, and share the same events using both tools." The reason given is that browser-based Pixel events can go missing, for example because of network connectivity issues or page loading errors, while the Conversions API can also report offline and later-occurring events the Pixel cannot see. Sending each event through both routes means that if one is lost, the other may still arrive.',
    },
    {
      type: 'p',
      text: 'No independent figure for how many events a Pixel loses is used here, so measure your own gap: compare the purchases or enquiries Meta reports with the orders or leads in your own system over the same weeks. Differences are normal, because attribution windows and counting rules differ, but a large and growing gap is a reason to fix tracking before you change creative or budget.',
    },
    { type: 'h2', text: 'Deduplication: how Meta avoids counting twice' },
    {
      type: 'p',
      text: 'If the same purchase arrives from the browser and from the server, Meta must recognise it as one event. Its [deduplication documentation](https://developers.facebook.com/docs/marketing-api/conversions-api/deduplicate-pixel-and-server-events/) describes the recommended method: the event name must match, and the Pixel\'s eventID must match the Conversions API\'s event_id. Events with the same ID and name are treated as the same event, and the system generally keeps the one received first and discards the later one.',
    },
    {
      type: 'ul',
      items: [
        'Generate one unique ID per action (for example the order number plus the event name) and send it from both the browser and the server.',
        'Keep event names identical in both places. Copy the standard event names exactly rather than retyping them.',
        'Deduplication applies within 48 hours of the first event with a given ID, so send server events promptly.',
        'Meta documents a second method using fbp and/or external_id, but it only works when the event is sent from the browser first and then from the server. Events from a single source, browser-only or server-only, are not deduplicated.',
      ],
    },
    {
      type: 'p',
      text: 'When deduplication is wrong, the symptoms are visible: reported purchases that are double your real orders, or conversions that are far below them. Check this first when numbers look odd.',
    },
    { type: 'h2', text: 'What a small business actually has to do' },
    {
      type: 'ol',
      items: [
        'Make sure the Pixel is installed and fires the events you optimise for (lead, purchase), once each.',
        'Add the Conversions API. According to Meta, if you already have a Pixel you can set it up for website events from Events Manager with no code or setup fees, and the [get-started guide](https://developers.facebook.com/docs/marketing-api/conversions-api/get-started) says to use the same Pixel ID for browser and server events. Many shop platforms, form tools and tag managers also offer a partner or server-side connection; ask whoever runs your site which is available.',
        'Confirm deduplication: the same event ID from both sides, and the events shown as received from both browser and server in Events Manager.',
        'Pass customer details where you have them with consent. Meta\'s [customer information parameters](https://developers.facebook.com/docs/marketing-api/conversions-api/parameters/customer-information-parameters) require email and phone to be hashed, and say the IP address must never be hashed. Better matching raises Event Match Quality, Meta\'s score out of 10 for how well events match an account.',
        'Test with a real action, such as a test enquiry, then watch Events Manager and compare after a week with your own records.',
      ],
    },
    { type: 'h2', text: 'What it does not fix' },
    {
      type: 'p',
      text: 'Server-side tracking does not remove your duty to handle consent and personal data properly: check your cookie notice and privacy policy cover what you send, and take legal advice where unsure. It also does not repair weak ads. If the site is slow, the offer is unclear or leads are not followed up, better tracking will only measure the problem more precisely. For the full campaign process see [how to run Facebook ads](/blog/how-to-run-facebook-ads), for using the data see [retargeting ads](/blog/facebook-retargeting-ads), and for which numbers matter see [Facebook ads metrics](/blog/facebook-ads-metrics).',
    },
    {
      type: 'p',
      text: 'WakeUP\'s [advertising service](/services/advertising) includes tracking setup (Meta Pixel, GA4 and conversions) as listed on the service page. If you want to know whether your current tracking can be trusted, the [free audit](/audit) is a good place to start.',
    },
  ],
}
