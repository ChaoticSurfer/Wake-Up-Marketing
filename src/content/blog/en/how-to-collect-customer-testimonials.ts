import type { BlogPost } from '@/lib/blog'

export const post: BlogPost = {
  locale: 'en',
  slug: 'how-to-collect-customer-testimonials',
  title: 'How to collect customer testimonials: when to ask, what to ask, where to use them',
  metaTitle: 'How to Collect Customer Testimonials',
  description:
    'How to collect customer testimonials: ask after a result, send three story questions, get written permission and place each quote by the doubt it answers.',
  publishedAt: '2027-02-27T09:00:00+04:00',
  updatedAt: '2027-02-27T09:00:00+04:00',
  service: 'content',
  reviewState: 'llm_reviewed',
  body: [
    {
      type: 'p',
      text: 'To collect customer testimonials, ask satisfied customers soon after they see a result, send a short personal message with three story questions instead of "please write a review", get their permission in writing to publish the answer with their name, and place each quote near the doubt it answers. Do it on a schedule, so a few new testimonials arrive every quarter without a campaign.',
    },
    { type: 'h2', text: 'Pick who to ask and when' },
    {
      type: 'p',
      text: 'Start with customers who look like the buyers you want next. SurveyMonkey advises asking customers in your target segment and those who can speak to the specific benefit you need to prove ([SurveyMonkey](https://www.surveymonkey.com/learn/marketing/customer-testimonials-how-to-identify-and-collect-the-right-ones/)). A testimonial from a company of your future customer\'s size and sector is worth more than a warm sentence from a friend.',
    },
    {
      type: 'p',
      text: 'Timing matters as much as the choice of person. The best moments are:',
    },
    {
      type: 'ul',
      items: [
        'Right after a visible result: the first month the numbers moved, the project delivered, the problem solved.',
        'After a repeat order or a renewal, which is already a vote of confidence.',
        'After a thank-you from the customer. They have just said the words; ask if you may use them.',
        'On a calendar. Woodpecker, an email-tool vendor, advises making collecting testimonials a habit in the company, for example once a year, and updating the page as new clients join ([Woodpecker](https://woodpecker.co/blog/get-customer-testimonials/)).',
      ],
    },
    {
      type: 'p',
      text: 'Do not ask in the middle of a complaint or an unpaid invoice. A customer who is irritated will write the irritation.',
    },
    { type: 'h2', text: 'Ask in a message that is easy to answer' },
    {
      type: 'p',
      text: 'Use the channel you already use with that customer, from the person they know. Say why you are asking, what it takes, and how you will use the answer. Three questions they can answer in a few minutes get more replies than an open invitation to "write something". Here is a message to adapt:',
    },
    {
      type: 'ul',
      items: [
        'Opening: a specific thank-you for the work you did together, naming the result.',
        'Request: "Could you answer three short questions? It takes about five minutes. We would like to show your answers on our website, with your name and role, if you agree."',
        'Questions: three from the next section (the situation before, what made them hesitate, what changed), written out in the message.',
        'Easy exit: "If it is not a good time, no problem at all."',
      ],
    },
    {
      type: 'p',
      text: 'If the customer prefers to talk, a short call that you write up and send back for approval works well. SurveyMonkey describes the tradeoffs of the formats: a survey collects many answers quickly but the quotes may be too short, while filming gives the customer time to tell a fuller story but is time intensive and does not scale. An interview is normally less time consuming than filming, and a phone call is the lightest version of one. When the customer would rather appear on camera, see [how to make a testimonial video](/blog/how-to-make-a-testimonial-video).',
    },
    { type: 'h2', text: 'Questions that produce a usable quote' },
    {
      type: 'p',
      text: 'A question that can be answered "yes, we were happy" gives you nothing to publish. Ask for a before, a change and a result.',
    },
    {
      type: 'table',
      head: ['Question', 'What it gives you', 'Where it helps'],
      rows: [
        ['What was the problem or situation before you worked with us?', 'The reader recognises their own case', 'Top of a page, as the opening line'],
        ['What made you hesitate, and what decided it?', 'The doubt and its answer, in the customer\'s words', 'Next to your enquiry form or price'],
        ['What changed after we started? One concrete example, please.', 'Proof that a prospect can picture', 'Service page, proposal'],
        ['Is there a number you can share (time saved, enquiries, orders)?', 'A specific result, if they have one', 'Headline of the quote'],
        ['Who would you recommend us to?', 'Tells prospects who it is for', 'Closing line'],
      ],
    },
    {
      type: 'p',
      text: 'Do not insist on a number. If a customer does not have one, a clear description of what changed is better than an invented or rounded figure. Ask only for what they know.',
    },
    { type: 'h2', text: 'Permission and honesty' },
    {
      type: 'p',
      text: 'A testimonial with a name and a photo is personal data. Georgia\'s [Law on Personal Data Protection](https://matsne.gov.ge/en/document/view/5827307) (adopted 14 June 2023) defines consent as freely and unambiguously given after the person receives the relevant information, defines written consent as consent signed or otherwise expressed in writing, including in electronic form, and gives the person the right to withdraw consent at any time and without explanation. Laws are amended, so check the current text on Matsne, or ask a lawyer, for your case. In practice:',
    },
    {
      type: 'ul',
      items: [
        'Ask for permission in writing. An email reply that says "yes, you may publish this with my name and role on your website and social media" is a record.',
        'Say where it will appear and offer to remove it on request.',
        'Show the customer the exact text before it goes live, and publish only what they approved.',
        'If a customer wants to stay anonymous, use a role and industry only, and say nothing that identifies them.',
      ],
    },
    {
      type: 'p',
      text: 'The honesty rules are stricter than most owners assume. The US Federal Trade Commission, whose guidance is a useful benchmark even outside the US, has a rule on consumer reviews and testimonials in force since 21 October 2024. According to its [questions and answers](https://www.ftc.gov/business-guidance/resources/consumer-reviews-testimonials-rule-questions-answers), the rule prohibits writing or selling fake or false testimonials, and it does not forbid rewarding reviews as such, provided there is no "express or implied requirement that the reviews have to express a particular sentiment". The FTC also says a business should not supply testimonial text without a reasonable basis to think it is truthful. So do not write the testimonial for the customer and ask them to sign it. Offer questions, take their words, fix spelling only, and keep the meaning.',
    },
    {
      type: 'p',
      text: 'If you offer a thank-you, such as a discount, make it available whatever the customer says, and say so in the message. Do not ask only happy customers to review you and then hide the rest of the feedback; handle problems in private first.',
    },
    { type: 'h2', text: 'Turn answers into a testimonial' },
    {
      type: 'p',
      text: 'Raw answers are rarely ready to publish. SurveyMonkey advises condensing responses into short, direct quotes. Keep the customer\'s own words, cut the filler and keep the order: before, change, result. A useful testimonial has four parts:',
    },
    {
      type: 'ol',
      items: [
        'A headline sentence with the result, in their words (for example, a short line that states what changed).',
        'Two or three sentences of the story: the problem, the doubt, the change.',
        'The name, role and company, with a photo or logo if they allow it. A quote with no name looks invented.',
        'A date or a link to the original, such as their LinkedIn profile or a Google review, if they agree.',
      ],
    },
    { type: 'h2', text: 'Where to place it' },
    {
      type: 'p',
      text: 'BrightLocal\'s Local Consumer Review Survey 2026 (1,002 US adults, published 11 February 2026) found that 97% of consumers read reviews for local businesses and that 49% trust online reviews about as much as recommendations from people they know ([BrightLocal](https://www.brightlocal.com/research/local-consumer-review-survey/)). It measures US consumers and reviews rather than testimonials on your own site, so treat it as a sign that buyers look for other customers\' opinions, not as a promise of results in Georgia.',
    },
    {
      type: 'p',
      text: 'Place each quote at the point where a buyer doubts, not only on a testimonials page.',
    },
    {
      type: 'table',
      head: ['Place', 'Which quote', 'Note'],
      rows: [
        ['Service page, near the enquiry button', 'The one that answers the usual hesitation', 'Match the customer\'s sector to the page'],
        ['Landing page for ads', 'A short one with a result, next to the form', 'See [website conversion rate optimization](/blog/website-conversion-rate-optimization)'],
        ['Pricing or quote page', 'A customer who worried about cost or risk', 'Placed beside the price, not far below'],
        ['Proposals and sales emails', 'The customer closest to the prospect', 'Send the quote, not a link to a page'],
        ['Google Business Profile', 'Ask the customer to post it as a review', 'Process in [how to get more Google reviews](/blog/how-to-get-more-google-reviews)'],
        ['Social posts and ads', 'One sentence plus name and role', 'Customer-made videos are covered in [UGC videos for business](/blog/ugc-videos-for-business)'],
      ],
    },
    {
      type: 'p',
      text: 'Woodpecker also advises collecting testimonials from customers in each industry you serve, so visitors see peers. Once you have a handful, put them in a simple library with the customer, the date, the permission and where each is used, so the next page or proposal does not start from zero.',
    },
    {
      type: 'p',
      text: 'WakeUP\'s [content creation service](/services/content-creation) covers copywriting in Georgian and English and design for posts, carousels and ad creative, which is where finished testimonials often end up. If you are not sure whether your site shows proof in the right places, the [free marketing audit](/audit) is a starting point.',
    },
  ],
}
