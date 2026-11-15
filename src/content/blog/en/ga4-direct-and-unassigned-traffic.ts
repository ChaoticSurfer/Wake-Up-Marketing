import type { BlogPost } from '@/lib/blog'

export const post: BlogPost = {
  locale: 'en',
  slug: 'ga4-direct-and-unassigned-traffic',
  title: 'GA4 direct traffic and Unassigned: what they mean and which causes you can fix',
  metaTitle: 'GA4 Direct and Unassigned Traffic',
  description:
    'GA4 direct traffic and Unassigned explained: what each channel means, which causes you can fix (missing UTMs, redirects, tags) and which you cannot.',
  publishedAt: '2027-02-28T09:00:00+04:00',
  updatedAt: '2027-02-28T09:00:00+04:00',
  service: 'audit',
  reviewState: 'llm_reviewed',
  body: [
    {
      type: 'p',
      text: 'GA4 direct traffic is visits where Analytics has no source to report: someone typed your address, used a bookmark, or clicked a link that carried no referrer or tag. Unassigned is different: the visit\'s source and medium match none of GA4\'s channel rules. Direct is partly normal and partly a tagging gap; Unassigned is usually something you can fix.',
    },
    { type: 'h2', text: 'What the two channels mean' },
    {
      type: 'p',
      text: 'Google\'s [default channel group](https://support.google.com/analytics/answer/9756891) defines Direct as the channel "by which users arrive at your site/app via a saved link or by entering your URL". The rule behind it is narrow: the source is exactly "(direct)" and the medium is "(not set)" or "(none)". Unassigned, in Google\'s words, "is the value Analytics uses when there are no other channel rules that match the event data."',
    },
    {
      type: 'p',
      text: 'So the two answer different questions. Direct asks "did GA4 learn where this person came from?" and the answer is no. Unassigned asks "did the source and medium fit a channel?" and the answer is also no, because the labels are unusual, incomplete or missing from the event.',
    },
    {
      type: 'p',
      text: 'One report detail matters before you worry. GA4 has two acquisition reports, and they count differently. The [Traffic acquisition report uses session dimensions](https://support.google.com/analytics/answer/11080067) and reassigns the source each time a user returns, while the User acquisition report keeps the first-user source. A returning customer who types your URL will show as Direct in the first and as their original channel in the second. Compare like with like.',
    },
    { type: 'h2', text: 'Why Direct is high' },
    {
      type: 'p',
      text: 'Direct is a catch-all for visits with no usable referrer. Analytics practitioners list the same handful of causes, for example [Relevant Audience](https://www.relevantaudience.com/analytics/direct-traffic-google-analytics-4/):',
    },
    {
      type: 'ul',
      items: [
        'Untagged links you control: newsletters, WhatsApp and Viber messages, QR codes, PDFs, email signatures. They open without a referrer, so they land in Direct.',
        'Redirects that strip the query string, so the UTM tags never reach the page.',
        'A Google tag that does not fire on the first page of some templates, so the session loses its source.',
        'UTM tags placed on links between your own pages, which start a new campaign mid-visit.',
        'Genuine direct visits: bookmarks, typed addresses and people who already know your brand.',
      ],
    },
    {
      type: 'p',
      text: 'The last item is the reason a Direct share of zero is not a goal. A company with a known name will always have some. What you want is to remove the avoidable part, so the remainder reads as brand strength rather than a measurement hole.',
    },
    { type: 'h2', text: 'Why traffic ends up Unassigned' },
    {
      type: 'p',
      text: 'Unassigned usually traces back to labels. [Analytics Mania\'s list of causes](https://www.analyticsmania.com/post/unassigned-in-google-analytics-4/) starts with nonstandard UTM values (a medium written "mail" or "influencer" matches no rule), incomplete UTMs (a source without a medium), and redirects or link shorteners that drop the tags. It also names tag set-up faults: event tags firing before the Google tag, a manually overridden session ID, or events sent from another platform without session data.',
    },
    {
      type: 'p',
      text: 'Two settings are worth checking in the same sitting. Google Ads should be linked to GA4 with auto-tagging on, otherwise paid clicks arrive without a Google click ID. And any custom source you rely on, such as a chatbot referral or a partner, needs either a recognised medium or a custom channel group so it stops falling through the rules.',
    },
    { type: 'h2', text: 'Which causes you can fix and which you cannot' },
    {
      type: 'table',
      head: ['Cause', 'Shows up as', 'Fixable?', 'What to do'],
      rows: [
        ['Untagged newsletter, messenger or QR links', 'Direct', 'Yes', 'Add source, medium and campaign tags to every link you place'],
        ['Redirect or shortener drops the tags', 'Direct or Unassigned', 'Yes', 'Click a tagged link and check the final URL still carries the tags'],
        ['Medium not in the channel rules', 'Unassigned', 'Yes', 'Use standard mediums, or build a custom channel group'],
        ['Google tag fires late or not at all on a template', 'Direct or Unassigned', 'Yes', 'Check the tag on every page type, and the order tags fire in'],
        ['Google Ads not linked, auto-tagging off', 'Unassigned or Direct', 'Yes', 'Link the accounts and switch auto-tagging on'],
        ['Bookmarks, typed addresses, known brand', 'Direct', 'No (and fine)', 'Treat as a baseline, and watch it over time'],
        ['App browsers and cross-device visits', 'Direct', 'Partly', 'Cannot be fully joined without a user ID'],
        ['Recent data still processing', 'Unassigned or (not set)', 'Wait', 'Recheck after a day or two'],
      ],
    },
    {
      type: 'p',
      text: 'Bots deserve a short note. Google states that [traffic from known bots and spiders is automatically excluded](https://support.google.com/analytics/answer/9888366) and that you cannot switch this off. Unknown or poorly disguised bots can still get through, and Analytics Mania lists bots among the causes of (not set) traffic. If a spike lands on a single odd page from one country and has no engagement, suspect a bot before you suspect a campaign.',
    },
    { type: 'h2', text: 'A 30-minute check' },
    {
      type: 'ol',
      items: [
        'Open Reports, Acquisition, Traffic acquisition and note the Direct and Unassigned share of sessions over the last 90 days.',
        'Add the landing page as a second dimension for Direct. Thank-you pages, checkout steps and other URLs nobody should enter directly point to a tag or redirect problem.',
        'Click through to Unassigned and read the session source / medium values. The odd ones tell you which links to retag or which channel rule to add.',
        'Open three live tagged links (an email, a messenger broadcast, an ad) and watch each appear in the real-time report with the labels you set. The [UTM guide](/blog/utm-parameters-guide) gives a naming convention that avoids the Unassigned trap.',
        'Check the Google Ads link and auto-tagging, and test your top redirects for lost query strings.',
        'Look in the unwanted referrals settings for payment providers or login domains. Google notes that the list holds [up to 50 domains per data stream](https://support.google.com/analytics/answer/10327750). Its example shows the catch: a user who first arrives from an excluded domain and later returns directly, for instance from a bookmark, is still credited to that domain under last-non-direct-click.',
      ],
    },
    { type: 'h2', text: 'When to stop chasing it' },
    {
      type: 'p',
      text: 'After the fixes above, the numbers that remain are the ones you can live with. A moderate Direct share is normal, and a small Unassigned share from background processing or bots is not worth hours. What matters is whether you can still answer the business question: which channels produce enquiries. Pair the cleaned channel report with the [monthly reports in the small-business GA4 guide](/blog/ga4-for-small-business), count form enquiries as key events with the [form tracking guide](/blog/track-form-submissions-ga4), and remember that every attribution model has blind spots, as covered in [marketing attribution models](/blog/marketing-attribution-models).',
    },
    {
      type: 'p',
      text: 'If Direct and Unassigned still hide most of your enquiries and nobody can say why, WakeUP\'s [free marketing audit](/audit) reviews your tracking, ads and the path from visit to enquiry and returns the changes that would help most.',
    },
  ],
}
