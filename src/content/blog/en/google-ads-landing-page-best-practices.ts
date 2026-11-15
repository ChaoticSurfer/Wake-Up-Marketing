import type { BlogPost } from '@/lib/blog'

export const post: BlogPost = {
  locale: 'en',
  slug: 'google-ads-landing-page-best-practices',
  title: 'Google Ads landing page best practices: message match, one offer and speed',
  metaTitle: 'Google Ads Landing Page Best Practices',
  description:
    'Google Ads landing page best practices: match the page to the ad, give one offer, load fast on mobile and meet Google\'s destination rules.',
  publishedAt: '2027-02-16T12:00:00+04:00',
  updatedAt: '2027-02-16T12:00:00+04:00',
  service: 'websites',
  reviewState: 'llm_reviewed',
  body: [
    {
      type: 'p',
      text: 'The best practices for a Google Ads landing page come down to four rules: the page repeats what the ad and keyword promised, it asks for one action, it loads fast on a phone, and it meets Google\'s destination policy. Every click costs money, so a page that breaks one of these rules wastes the budget before the visitor reads a word.',
    },
    {
      type: 'p',
      text: 'This guide is about the rules that belong to paid search traffic. For the parts a landing page contains, by type of business, see [lead generation landing pages](/blog/lead-generation-landing-pages); for how to test changes, see [landing page A/B testing](/blog/landing-page-ab-testing).',
    },
    { type: 'h2', text: 'Match the page to the ad and the keyword' },
    {
      type: 'p',
      text: 'Message match means the person who clicks sees, in the first screen, the thing they searched for and the thing the ad promised. Google\'s help page on [optimizing ads and landing pages](https://support.google.com/google-ads/answer/6238826) tells advertisers to choose a landing page that closely matches the ad and keywords, and says this helps ad relevance and landing page experience. It adds that the page should mirror the call to action in the ad text.',
    },
    {
      type: 'p',
      text: 'In practice, check three things between each ad group and its page:',
    },
    {
      type: 'ul',
      items: [
        'The headline uses the words of the search, not your internal name for the service.',
        'The offer in the ad (a free quote, a price range, a booking) appears on the page in the same form.',
        'The button says the same thing as the ad\'s call to action.',
      ],
    },
    { type: 'h2', text: 'A message-match check you can do in ten minutes' },
    {
      type: 'table',
      head: ['Ad says', 'Page that matches', 'Page that loses the click'],
      rows: [
        ['"Office cleaning quote in 24 hours"', 'Headline about office cleaning quotes, a short quote form, a note on response time', 'Home page with six services and a general contact link'],
        ['"Book a dental whitening session"', 'Whitening page with a booking form above the fold', 'Page about all dental services; booking found under a menu'],
        ['"Free demo of our HR software"', 'Page about the HR product with a demo request', 'Pricing page for the whole company suite'],
      ],
    },
    {
      type: 'p',
      text: 'The examples are illustrative. The pattern is the point: one ad group, one intent, one page. If you have ten ad groups on ten different services, ten pages (or ten sections reached by a clear anchor) is the answer, not a general page. Whether the destination should be a standalone page or part of the site is covered in [landing page vs website](/blog/landing-page-vs-website).',
    },
    { type: 'h2', text: 'One offer, one action' },
    {
      type: 'p',
      text: 'Paid visitors arrive with a single intent. Extra paths (a full menu, a blog, three different forms) give them places to leave. Google\'s help page says the same thing in other words: it recommends making it quick and easy to perform the action you want, and not making people hunt around for information.',
    },
    {
      type: 'ul',
      items: [
        'Pick the one conversion the campaign is paid for: a form, a call or a booking. Put it on the first screen and repeat it after the proof.',
        'Remove or reduce the site navigation on pages that only exist for ads. Keep the logo and a way to reach the contact details.',
        'Ask only for what you need to follow up. Each extra field is one more reason to stop halfway.',
        'Send different offers to different pages. A discount for new customers and a service enquiry for companies should not share one form.',
      ],
    },
    { type: 'h2', text: 'Speed on a mobile connection' },
    {
      type: 'p',
      text: 'A slow page throws away clicks you have already paid for. Google\'s [Core Web Vitals guidance](https://web.dev/articles/vitals) sets these "good" values, measured at the 75th percentile of page loads on mobile and desktop separately: Largest Contentful Paint of 2.5 seconds or less, Interaction to Next Paint of 200 milliseconds or less, and Cumulative Layout Shift of 0.1 or less.',
    },
    {
      type: 'p',
      text: 'On the money side, a study commissioned by Google and carried out by 55 and Deloitte monitored mobile load times for 30 days at the end of 2019. Google\'s [write-up of it](https://web.dev/case-studies/milliseconds-make-millions) reports that a 0.1 second improvement in site speed lifted retail conversion rates by 8.4%. It is an older study of mostly large brands, so treat it as evidence that small speed gains matter, not as a number to expect on your page.',
    },
    {
      type: 'p',
      text: 'The usual causes on landing pages are a heavy hero image or video, many third-party scripts (chat widgets, several tracking tags) and a slow server response. For fixes, see [how to improve website speed](/blog/how-to-improve-website-speed) and [improve Core Web Vitals](/blog/improve-core-web-vitals). Test the page on a mid-range phone on mobile data, not only on an office connection.',
    },
    { type: 'h2', text: 'Mobile layout and easy navigation' },
    {
      type: 'p',
      text: 'Google\'s [ad and landing page guidance](https://support.google.com/google-ads/answer/6238826) notes that many of your customers will be visiting your website on a mobile device. For an ad page that means checking the following on a real phone before launch:',
    },
    {
      type: 'ul',
      items: [
        'The headline, the proof and the main button are visible without scrolling.',
        'The phone number is a tap-to-call link, and the form works with the phone keyboard (number fields open the number pad).',
        'Buttons and fields are large enough to tap without zooming.',
        'No pop-up covers the content on arrival.',
      ],
    },
    { type: 'h2', text: 'What Google requires of the destination' },
    {
      type: 'p',
      text: 'The landing page is also covered by policy, not only by quality. Google Ads\' [destination requirements](https://support.google.com/adspolicy/answer/6368661) say a destination must work on common browsers and devices, must be crawlable by Google\'s AdsBot, must be easy to navigate and safe, and must offer unique value to users. Pages that mainly exist to show ads, copy other content or only redirect elsewhere are disapproved. A destination that does not accurately reflect the site the ad promises, for example through a redirect to a different domain, is a mismatch.',
    },
    {
      type: 'p',
      text: 'Two practical points follow. Do not block AdsBot in robots.txt or behind a login on a page you advertise, and keep the final URL on the domain the display URL shows. Google says it will issue a warning at least 7 days before suspending an account over destination violations.',
    },
    { type: 'h2', text: 'How the page feeds Quality Score' },
    {
      type: 'p',
      text: 'Landing page experience is one of the three parts of Quality Score. Google defines it as how relevant and useful your landing page is to people who click your ad, and says that an Average or Below average rating "may indicate an opportunity to make improvements", per its [Quality Score page](https://support.google.com/google-ads/answer/6167118). The same page says Quality Score is not a key performance indicator and should not be optimized or aggregated with the rest of your data, so use it to spot a weak page, then judge the fix by cost per lead and lead quality. The full explanation is in [Google Ads Quality Score](/blog/google-ads-quality-score).',
    },
    {
      type: 'p',
      text: 'One note for advertisers in Georgia: Georgian is not among the [languages Google Ads supports](https://support.google.com/google-ads/answer/6333734) for ad text, and Google disapproves ads written in a language it does not support. Write the ad in a supported language and make the page repeat that ad\'s promise in the same words, so the visitor sees the match at once.',
    },
    { type: 'h2', text: 'A pre-launch checklist' },
    {
      type: 'ol',
      items: [
        'Each ad group points to the page that fits its keywords, and the headline repeats the searcher\'s words.',
        'The ad\'s offer and call to action appear on the first screen in the same form.',
        'There is one main action, with a short form and a tap-to-call link on mobile.',
        'The page loads in 2.5 seconds or less on a phone on mobile data.',
        'AdsBot can crawl the page, and the final URL matches the display URL domain.',
        'The conversion (form sent, call made) is tracked before the first click is bought.',
      ],
    },
    {
      type: 'p',
      text: 'WakeUP builds premium, complex websites and landing pages, with tracking set up from the start - see the [website and landing page service](/services/website-development). To have your current ad pages looked at first, request the [free marketing audit](/audit).',
    },
  ],
}
