import type { BlogPost } from '@/lib/blog'

export const post: BlogPost = {
  locale: 'en',
  slug: 'click-to-whatsapp-ads',
  title: 'Click to WhatsApp ads: how to set them up and what to pre-fill',
  metaTitle: 'Click to WhatsApp Ads: Setup Guide',
  description:
    'Click to WhatsApp ads open a chat with your business from a Facebook or Instagram ad. How to set them up, what to pre-fill and how fast to reply.',
  publishedAt: '2027-02-24T15:00:00+04:00',
  updatedAt: '2027-02-24T15:00:00+04:00',
  service: 'advertising',
  reviewState: 'llm_reviewed',
  body: [
    {
      type: 'p',
      text: 'Click to WhatsApp ads are Facebook and Instagram ads whose button opens a WhatsApp chat with your business instead of a website or a form. You build them in Meta Ads Manager by choosing a messaging destination, linking your WhatsApp number to your Page and setting the first message the customer sends. They work best when someone can answer within minutes.',
    },
    { type: 'h2', text: 'What a click to WhatsApp ad does' },
    {
      type: 'p',
      text: 'Meta\'s developer documentation describes the format plainly: [ads that click to WhatsApp](https://developers.facebook.com/docs/marketing-api/ad-creative/messaging-ads/click-to-whatsapp) send people who click directly into conversations with your business in WhatsApp. The ad itself can be an image, a video, a carousel or a slideshow, so the creative work is the same as for any other Meta ad.',
    },
    {
      type: 'p',
      text: 'The difference is what happens after the click. There is no landing page to load and no form to fill in. The customer is already in an app they use daily, with a message ready to send. For businesses that sell through conversation, such as clinics, real estate, tourism, repairs, custom orders and many B2B services, that removes the page-load and form step. For the broader choice between a chat, a lead form and a landing page, see [lead ads vs landing page](/blog/facebook-lead-ads-vs-landing-page); for WhatsApp as a channel beyond ads, see [WhatsApp marketing](/blog/whatsapp-marketing).',
    },
    { type: 'h2', text: 'What you need before you build' },
    {
      type: 'ul',
      items: [
        'A Facebook Page. Meta\'s guide assumes a Page with a WhatsApp number linked to it.',
        'A WhatsApp number that your team can answer. Whether to use the free Business app or the API depends on how many people reply and whether a chatbot or CRM is connected; the [WhatsApp Business app vs API comparison](/blog/whatsapp-business-app-vs-api) covers that choice.',
        'Access to the Page and ad account, with a payment method set up.',
        'Someone assigned to reply during working hours, and a plan for the hours when nobody is there.',
      ],
    },
    { type: 'h2', text: 'Set up the ad in Ads Manager' },
    {
      type: 'p',
      text: 'The exact screens change from time to time, so follow the labels you see. The flow is:',
    },
    {
      type: 'ol',
      items: [
        'Create a campaign. Meta lists engagement, leads, sales and traffic as supported objectives for these ads. Choose the one that matches what you want the platform to optimise for. The [how to run Facebook ads post](/blog/how-to-run-facebook-ads) explains objectives in general.',
        'At ad set level, choose a messaging destination and then WhatsApp as the app.',
        'Select your Page and the linked WhatsApp number.',
        'Set audience, budget, schedule and placements as for any campaign.',
        'Build the creative and choose the call to action button, such as "Send WhatsApp message".',
        'Set the first message (see the next section), preview it on a phone, and publish. Meta reviews the ad before it runs.',
      ],
    },
    { type: 'h2', text: 'The pre-filled message and the greeting' },
    {
      type: 'p',
      text: 'When someone taps the ad, WhatsApp opens with a message the customer can send in one tap. If you set nothing, Meta\'s documentation says the default is "Hello! Can I get more info on this?" A generic opener tells you nothing about what the person wants, so customise it. Meta lets you choose between three kinds of greeting:',
    },
    {
      type: 'table',
      head: ['Greeting type', 'What the customer sees', 'Use it for'],
      rows: [
        ['Autofill message', 'Text already typed in the message box, ready to send', 'Telling you which ad or product they came from'],
        ['Automated greeting with a button', 'A reply from your business with a call, website, catalogue or form button', 'Sending people to a catalogue or a short intake form'],
        ['Icebreakers', 'A few tap-to-send questions', 'Letting people pick a topic such as price, booking or delivery'],
      ],
    },
    {
      type: 'p',
      text: 'Write the autofill to carry information you need. Compare "Hello, I want to know more" with "Hello, I would like a quote for the 3-room cleaning package I saw in your ad". The second one tells your team what to answer, and tells you which ad produced which conversation if you use a different message per ad.',
    },
    { type: 'h2', text: 'Reply speed matters more than the ad' },
    {
      type: 'p',
      text: 'A person who taps a WhatsApp button expects a chat, not an email reply tomorrow. Treat the first answer as part of the ad. A simple routine:',
    },
    {
      type: 'ul',
      items: [
        'Name the person who covers the inbox each hour of the day the ads run, or pause the ads outside those hours with a schedule.',
        'Write three ready replies: a greeting with a first question, a price or availability answer, and a "send me your number and we will call" reply.',
        'Move conversations that become real leads into your CRM the same day; the [follow-up guide](/blog/how-to-follow-up-with-leads) has a routine for that.',
        'If you cannot staff the chat, a chatbot can answer the first questions and hand over to a person. WakeUP builds these on WhatsApp and other channels; see the [AI automation and chatbots](/services/ai-automation) page.',
      ],
    },
    { type: 'h2', text: 'What it costs to talk to the customer' },
    {
      type: 'p',
      text: 'You pay Meta for the ad as usual. The conversation itself has its own rules. WhatsApp Business says that when a customer messages you from an ad, [for the following 3 days (72 hours), all of your messages are not charged](https://whatsappbusiness.com/products/platform-pricing/). Outside that window, a 24-hour customer service window opens each time the customer writes, and it resets with each user message. Meta changes these rules and rates, so confirm them on the pricing page before you plan a budget.',
    },
    { type: 'h2', text: 'How to judge whether it works' },
    {
      type: 'p',
      text: 'Cost per conversation is a start, but it is not the result. Track four numbers every week: conversations started, conversations answered within ten minutes, conversations that became a qualified lead, and sales. Some chats will be only price checks. If conversations are cheap but few turn into sales, change the pre-filled message or the offer in the ad before changing the budget. The [Facebook ads metrics post](/blog/facebook-ads-metrics) explains how to read the Ads Manager side.',
    },
    {
      type: 'p',
      text: 'WakeUP sets up and runs Meta campaigns including messaging ads; see the [advertising service](/services/advertising). If you already run ads and are not sure where chats are lost, the [free marketing audit](/audit) is a way to find out.',
    },
  ],
}
