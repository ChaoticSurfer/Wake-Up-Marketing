import type { BlogPost } from '@/lib/blog'

export const post: BlogPost = {
  locale: 'en',
  slug: 'tour-company-marketing',
  title: 'How to market a tour company in Georgia: get bookings you own',
  metaTitle: 'How to Market a Tour Company',
  description:
    'How to market a tour company in Georgia: a page per tour, marketplaces used on purpose, Google Business Profile, reviews and Instagram video.',
  publishedAt: '2027-02-03T18:00:00+04:00',
  updatedAt: '2027-02-03T18:00:00+04:00',
  service: 'seo',
  reviewState: 'llm_reviewed',
  body: [
    {
      type: 'p',
      text: 'To market a tour company, give every tour its own page that answers what travellers search before booking, make sure Google shows your business correctly, collect reviews on the platforms buyers read, and treat marketplaces such as GetYourGuide and Viator as a paid way to meet new customers, not as your only channel. Then use Instagram video to show the real experience, and count bookings by source.',
    },
    {
      type: 'p',
      text: 'This post is about the business side of a tour operator or guide in Georgia. Choosing which countries to target and when is covered in [tourism marketing strategy for Georgia](/blog/tourism-marketing-strategy).',
    },
    { type: 'h2', text: 'Decide where bookings should end up' },
    {
      type: 'p',
      text: 'Every channel gets a traveller to a booking, but they differ in who keeps the customer relationship and what each booking costs. Write down your mix before you spend anything.',
    },
    {
      type: 'table',
      head: ['Channel', 'How a traveller finds you', 'What you pay', 'What you keep'],
      rows: [
        ['Your own website', 'Google search, Instagram, links, repeat guests', 'Your marketing time and money', 'The customer, the email address, the full price'],
        ['Marketplaces (GetYourGuide, Viator)', 'Searching inside the marketplace', 'A commission on each booking', 'The booking; the platform usually holds the first contact'],
        ['Google Business Profile and Maps', 'Searching for you or for tours near a place', 'Free to claim; time to maintain', 'Direct calls, messages and website visits'],
        ['Instagram and TikTok', 'Videos that show the trip', 'Content production, optional ads', 'A following you can message directly'],
      ],
    },
    { type: 'h2', text: 'Build one page per tour on your own website' },
    {
      type: 'p',
      text: 'Most operators have one page called "Tours" with a gallery. Searchers look for specific things: a day trip from Tbilisi to Kazbegi, a wine tour in Kakheti, a private guide for a family. A separate page for each tour can answer one of those searches. For each page, state:',
    },
    {
      type: 'ul',
      items: [
        'Where the tour starts, at what time, how long it lasts and how people get there.',
        'What is included and what is not, with the price in the currency your buyer uses.',
        'Group size, language of the guide, who it suits and who it does not (children, walking ability).',
        'What happens in rain or snow, and the cancellation rule.',
        'Real photos and a short video from the actual tour, plus recent reviews.',
        'A booking form or WhatsApp button that works on a phone without extra steps.',
      ],
    },
    {
      type: 'p',
      text: 'Travellers read in several languages, so decide which ones your site serves and give each its own properly translated pages rather than machine-translated copies. [Multilingual SEO](/blog/multilingual-seo) explains the setup. Google also does not support Georgian as an ad language, [according to Google Ads Help](https://support.google.com/google-ads/answer/6333734), while English, Russian, Turkish, Arabic and Hebrew are listed, so organic search and social are the practical way to reach Georgian-speaking buyers, and paid search is possible for the listed languages. For the wider basics, see [SEO for small business](/blog/seo-for-small-business); [WakeUP offers SEO as a service](/services/seo) for companies that want help with it.',
    },
    { type: 'h2', text: 'Use marketplaces on purpose' },
    {
      type: 'p',
      text: 'Marketplaces bring travellers who are searching to book, which a new site usually cannot match at first. GetYourGuide says on its supplier page: "There is no cost for adding and maintaining an activity on the platform", and suppliers are charged on bookings. The same page gives no percentage: rates vary by country of operation and the exact amount is shared after you sign up. That is the [GetYourGuide supplier page](https://getyourguide.supply/), checked in November 2026.',
    },
    {
      type: 'p',
      text: 'Viator does not publish its supplier commission. An industry guide from the booking-software company Samba, [updated in November 2026](https://www.sambahq.com/ota-supplier-guide/ota-commission-rates), puts both Viator and GetYourGuide at 20% to 30% and says its Viator figure comes from operator and connectivity-partner reports, not from Viator. Treat that as a range to check against your own contract, because rates differ by market and can change.',
    },
    {
      type: 'p',
      text: 'The practical rule is to work out your margin after commission before you list a tour. If a tour only makes money at the direct price, do not list it at a discount on a marketplace. Use marketplace bookings to find new customers, then give them a reason to come back directly: a personal message after the trip, a return-guest offer, a review request that points to your own profile.',
    },
    { type: 'h2', text: 'Claim your Google Business Profile and your tours on Google' },
    {
      type: 'p',
      text: 'A Business Profile is how you appear on Google Maps and in the panel next to a search for your name. Google\'s [Business Profile guidelines](https://support.google.com/business/answer/3038177) say that a business location should be staffed by your team and able to receive customers during its stated hours, and that a service-area business should hide its address. A virtual office or a rented mailbox is not accepted, so a meeting point that is only a hotel lobby or a street corner is not by itself a reason to create a profile. If you have a real office or you work as a service-area business, use the profile; if you are unsure, check the guidelines before creating one. Keep your name, phone number and website identical everywhere ([local SEO tips](/blog/local-seo-tips) lists the checks).',
    },
    {
      type: 'p',
      text: 'Google also runs "Things to do", a program for tour operators, attractions and activity providers. Its [help page](https://support.google.com/hotelprices/answer/10723429) says partners can list for free or pay for ads, and recommends that individual operators and reservation systems with fewer than 100 operators work with one of Google\'s connectivity providers. Whether it is open to you depends on your booking system, so ask your booking software provider whether it is a Google connectivity partner.',
    },
    { type: 'h2', text: 'Make reviews part of the tour' },
    {
      type: 'p',
      text: 'A traveller who has never met you chooses between several tours using other travellers\' words. Put the review request into the tour itself: the guide mentions it at the end, and a message with the link goes out the same evening, while people remember the day. [How to get more Google reviews](/blog/how-to-get-more-google-reviews) gives wording and the rules on what is not allowed. Ask on the platforms your buyers read, such as Google and the marketplace where the booking was made, and answer every review, including the bad ones, in a calm and specific way.',
    },
    { type: 'h2', text: 'Show the real tour on Instagram' },
    {
      type: 'p',
      text: 'A short video from your actual tour shows a traveller what a description cannot, and Instagram and TikTok are where you can show it. Film the moments a buyer wonders about: the meeting point, the car or minibus, a meal, the guide speaking, the viewpoint, the group laughing. Add the price range and a booking link in the profile, and answer direct messages quickly. If you want video made for you, [WakeUP produces short videos](/services/video-production) for ads, Reels and TikTok.',
    },
    { type: 'h2', text: 'Count bookings by source' },
    {
      type: 'p',
      text: 'Without a count you cannot tell whether the marketplace commission or the content budget paid off. Keep a simple sheet: for each booking, where it came from, tour, price, and gross profit after commission. Add a required "How did you find us?" field to your booking form and ask on WhatsApp. Review it monthly. If you want an outside view of your website\'s search visibility first, use the [free audit](/audit).',
    },
  ],
}
