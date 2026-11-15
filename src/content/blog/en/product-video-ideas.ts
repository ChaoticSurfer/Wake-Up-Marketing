import type { BlogPost } from '@/lib/blog'

export const post: BlogPost = {
  locale: 'en',
  slug: 'product-video-ideas',
  title: 'Product video ideas for an online shop, matched to product and placement',
  metaTitle: 'Product Video Ideas for Online Shops',
  description:
    'Product video ideas for online shops: demo, how-to, comparison, lookbook, launch and customer videos, matched to the product and where the video plays.',
  publishedAt: '2027-01-01T18:00:00+04:00',
  updatedAt: '2027-01-01T18:00:00+04:00',
  service: 'video',
  reviewState: 'llm_reviewed',
  body: [
    {
      type: 'p',
      text: 'The best product video ideas for an online shop are a short demo, a how-to, a comparison, a lookbook, a launch teaser and a customer video. Which one to make depends on two things: what buyers doubt about the product (fit, quality, how it works, how it compares) and where the video will play (product page, ads, email or social). Choose the idea by the doubt, then cut it to the placement.',
    },
    { type: 'h2', text: 'Six product video formats and the doubt each one removes' },
    {
      type: 'p',
      text: 'Roundups of ecommerce video, such as the [formats listed by Videowise](https://videowise.com/blog/product-video-examples) and [Soona](https://soona.co/blog/ecommerce-product-videos), list many styles, but most of them reduce to six jobs.',
    },
    {
      type: 'table',
      head: ['Format', 'What it shows', 'Doubt it answers', 'Typical placement'],
      rows: [
        ['Demo', 'The product in use, close up, with the result visible', '"Does it do what the photos promise?"', 'Product page, retargeting ads'],
        ['How-to', 'Set-up, use or care in steps', '"Will I manage to use it?"', 'Product page, help section, social'],
        ['Comparison', 'Two versions, sizes or before and after, side by side', '"Which one should I buy?"', 'Category page, product page, ads'],
        ['Lookbook', 'Several items styled or used together', '"How does it look in real life?"', 'Homepage, social, email'],
        ['Launch teaser', 'A new product or collection in 10 to 20 seconds', '"What is new and why now?"', 'Social, ads, email'],
        ['Customer video', 'A real buyer using or reviewing the product', '"Is it as good as the shop says?"', 'Product page, ads'],
      ],
    },
    {
      type: 'p',
      text: 'A demo made for the product page differs from a software demo, which is covered in [how to make a product demo video](/blog/how-to-make-a-product-demo-video) and [explainer video vs product demo](/blog/explainer-video-vs-product-demo). Here the aim is smaller: one product, one doubt, one clip.',
    },
    { type: 'h2', text: 'Match the idea to the product type' },
    {
      type: 'table',
      head: ['Product type', 'Best first video', 'What to film'],
      rows: [
        ['Clothing, shoes, accessories', 'Lookbook or fit video', 'A person walking and turning, fabric movement, the item in two or three outfits, the model\'s height and size stated on screen'],
        ['Furniture and home goods', 'Demo in a room', 'Real scale next to a person or a known object, how it assembles or folds'],
        ['Beauty and personal care', 'How-to', 'Application from start to finish, texture, the result after use'],
        ['Electronics and tools', 'Demo plus how-to', 'Ports, controls, set-up, one real task done start to finish'],
        ['Food, drink and gifts', 'Lookbook or launch teaser', 'Packaging, serving, unboxing, the gift reaction'],
        ['Similar products in one range', 'Comparison', 'Sizes or models together, the difference stated in one sentence each'],
      ],
    },
    {
      type: 'p',
      text: 'Videowise also lists less common formats such as an [x-ray or inside view, before-and-after comparison and step-by-step tutorial](https://videowise.com/blog/product-video-examples), which suit products whose value is hidden: a filter, a material, a mechanism. If buyers always ask the same question in messages or comments, that question is your next video.',
    },
    { type: 'h2', text: 'Match the cut to the placement' },
    {
      type: 'p',
      text: 'The same footage works in four places if you cut it differently. Videowise, an ecommerce video vendor, suggests [30 to 90 seconds on product pages, 15 to 30 seconds for social and ads, and 2 to 3 minutes for tutorials](https://videowise.com/blog/product-video-examples); treat these as one source\'s starting points and test your own. For a general view of length, see [how long a marketing video should be](/blog/how-long-should-a-marketing-video-be).',
    },
    {
      type: 'ul',
      items: [
        'Product page: put the video in the gallery next to the photos. Show the product within the first seconds. Wistia advises making sure [the product appears early on in the video so that viewers know exactly what to expect](https://wistia.com/learn/marketing/product-video-best-practices).',
        'Ads: cut a 15 to 30 second version that opens on the most striking moment, with the price or offer in text. For Facebook feed video, Meta lists a [4:5 ratio at 1440 x 1800 pixels](https://www.facebook.com/business/ads-guide/video); ideas for what to show are in [Facebook video ad creative](/blog/facebook-video-ad-creative) and [short-form video hooks](/blog/short-form-video-hooks).',
        'Email: link a still frame of the video to the product page rather than depending on playback inside the email, and name the product in the subject line.',
        'Social: vertical clips for Reels, Stories and TikTok with captions burned in; see [Instagram Reels for business](/blog/instagram-reels-for-business) and [YouTube Shorts for business](/blog/youtube-shorts-for-business).',
      ],
    },
    {
      type: 'p',
      text: 'On length and attention, Wistia\'s State of Video data, drawn from [over 13 million videos uploaded to Wistia](https://wistia.com/learn/marketing/optimal-video-length), reports a 50 percent engagement rate for product videos under a minute, where engagement means viewers typically watch about half the video\'s length. It also says most viewers drop off around the halfway point. That is measured on Wistia\'s platform, not on a shop, but it supports putting the answer first.',
    },
    { type: 'h2', text: 'Customer videos: ask first' },
    {
      type: 'p',
      text: 'A customer video carries a different kind of trust because the shop is not the one speaking. Ask a few buyers for a short clip after delivery, give them two or three questions (why they bought, what surprised them, who it suits), and get written permission to use their face, voice and words in ads. Do not edit away criticism that makes the video true, and never write a fake review or cast an employee as a customer. The steps for filming and editing are in [how to make a testimonial video](/blog/how-to-make-a-testimonial-video).',
    },
    { type: 'h2', text: 'Plan one shoot for many videos' },
    {
      type: 'p',
      text: 'A shop with a hundred products cannot film each one separately. Start with the best sellers and the products with the most returns or questions. Then shoot in batches by category: same background, same lighting, same framing, so the clips look like one shop. In one session you can capture a demo take, a close-up, a how-to take and a vertical version of each. For a longer view of what a production costs, see [marketing video cost](/blog/marketing-video-cost).',
    },
    {
      type: 'ol',
      items: [
        'List the five products that matter most and write each product\'s main buyer doubt.',
        'Pick one format per product from the table above.',
        'Write a one-line script per video, then a shot list.',
        'Film each product in a horizontal and vertical frame.',
        'Edit a long cut for the product page and a short cut for ads, both with captions in the language of your shoppers.',
        'Put the video on the page first, then run it as an ad to the same product page and compare conversion.',
      ],
    },
    { type: 'h2', text: 'Make the video findable and measurable' },
    {
      type: 'p',
      text: 'On your own site, Google\'s documentation says videos should not need swiping, clicking or typing to load, and that a video needs a [valid thumbnail image to be eligible for video features](https://developers.google.com/search/docs/appearance/video). It also says a watch page’s main purpose is to show a single video, and that a page where the video is complementary to the rest of the content, its example being a blog post that reviews an embedded video, can still appear as text or image results. A product page with a video in the gallery is in the second group, so do not count on a video result from it. Give the video a descriptive file name and a transcript or captions, and measure what happens next: add-to-cart rate for visitors who played the video against those who did not, and enquiries or orders from the video ads.',
    },
    {
      type: 'p',
      text: 'WakeUP scripts, shoots and edits short videos for ads, Reels and TikTok and tests them in campaigns; see the [video production service](/services/video-production). If you are unsure which products and placements to start with, the [free marketing audit](/audit) is a good place to begin.',
    },
  ],
}
