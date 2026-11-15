import type { BlogPost } from '@/lib/blog'

export const post: BlogPost = {
  locale: 'en',
  slug: 'facebook-ad-copy-examples',
  title: 'Facebook ad copy examples: primary text, headlines and before-and-after rewrites',
  metaTitle: 'Facebook Ad Copy Examples',
  description:
    'Facebook ad copy examples with AIDA and PAS formulas, headline rules and before-and-after rewrites for Georgian businesses, plus what to avoid in review.',
  publishedAt: '2027-02-06T15:00:00+04:00',
  updatedAt: '2027-02-06T15:00:00+04:00',
  service: 'content',
  reviewState: 'llm_reviewed',
  body: [
    {
      type: 'p',
      text: 'Good Facebook ad copy puts the offer and the reason to care in the first line of the primary text, uses the headline for the concrete benefit or the next step, and asks for one action. The examples below show how to rewrite weak copy using two proven structures, AIDA and PAS, and how to answer the objection that stops people from messaging you.',
    },
    { type: 'h2', text: 'The three text fields in a Facebook ad' },
    {
      type: 'p',
      text: 'Most feed ads have three pieces of text, and each has a different job:',
    },
    {
      type: 'ul',
      items: [
        'Primary text: the words above the image or video. It earns the stop and carries the argument. Only the start is visible before "See more", so the first line has to work on its own.',
        'Headline: the short line next to the button, in many formats under the image. Use it for the offer, the benefit or the next step. Alex Membrillo of Cardinal Digital Marketing notes in [Databox\'s expert round-up](https://databox.com/how-to-write-facebook-ads-that-convert) that because the headline often shows below the image, it suits special rates, discounts or the call to action.',
        'Call-to-action button: a fixed list of labels such as Learn more, Send message or Sign up. Pick the one that matches what the landing step really is, and make the text lead into it.',
      ],
    },
    {
      type: 'p',
      text: 'The text sits on top of the picture or video, which does the first work. For that side, see [Facebook ad creative best practices](/blog/facebook-ad-creative-best-practices). This post is about the words.',
    },
    { type: 'h2', text: 'How long should the copy be' },
    {
      type: 'p',
      text: 'Meta\'s [Ads Guide for feed ads](https://www.facebook.com/business/ads-guide/image/facebook-feed/traffic) lists a recommended 50 to 150 characters for primary text and 27 characters for the headline. Those are recommendations for what displays cleanly, and they differ by placement, so check the preview for each placement before you publish. Preview Georgian copy on a phone rather than counting characters alone.',
    },
    {
      type: 'p',
      text: 'The experts do not agree on how much you should write. Chris Mechanic of WebMechanix advises "spending most of your writing time crafting the first 200 characters of text", while James Pollard of The Advisor Coach says, "In almost every single test I\'ve conducted, long copy has beaten short copy." Both are quoted in the same [Databox round-up](https://databox.com/how-to-write-facebook-ads-that-convert), whose author concludes that the right length depends on audience and product and recommends A/B testing. The workable rule: make the first line complete, then add detail below it only if a buyer for your product needs it to decide.',
    },
    { type: 'h2', text: 'Formula 1: AIDA' },
    {
      type: 'p',
      text: 'AIDA stands for Attention, Interest, Desire, Action. In an ad it becomes four short moves: a first line that names the buyer or the result, one line that shows why the offer is credible, one line that says what they get, and one clear next step.',
    },
    {
      type: 'table',
      head: ['', 'Before', 'After (AIDA)'],
      rows: [
        [
          'Primary text, a made-up Tbilisi dental clinic',
          'We are a modern clinic with experienced doctors. Visit us for all your dental needs. Contact us today!',
          'Whitening in one visit, with the result checked before you leave. Our dentists explain every step and the cost before they start. Book a 20-minute consultation: send us a message.',
        ],
        [
          'Headline',
          'Best Dental Clinic in Tbilisi',
          'Book a free consultation',
        ],
        [
          'Where each part is',
          'Brand claim, no result, no step',
          'Attention (result), Interest (process), Desire (clarity on cost), Action (message)',
        ],
      ],
    },
    {
      type: 'p',
      text: 'The clinic and all examples in this post are invented to show the structure. They are not real clients or results, and the wording avoids describing the viewer\'s health, for the reason explained in the rejection section below.',
    },
    { type: 'h2', text: 'Formula 2: PAS' },
    {
      type: 'p',
      text: 'PAS is Problem, Agitate, Solve. Social Media Examiner lists [addressing customer pain points with Problem-Agitate-Solve](https://www.socialmediaexaminer.com/how-to-write-persuasive-facebook-ads-that-convert/) among the elements of a persuasive Facebook ad. You name a problem, make its cost felt for one line, then present your offer as the way out. It works best for services where the buyer already knows they have the problem, such as office cleaning, accounting or IT support. Keep the "agitate" line about the situation, not the person.',
    },
    {
      type: 'table',
      head: ['', 'Before', 'After (PAS)'],
      rows: [
        [
          'Primary text, a made-up accounting firm for companies with 20 to 100 staff',
          'Professional accounting services for your company. Call us for a quote.',
          'Month-end close taking a week? Late reports mean late decisions. We keep your books current so you see the numbers within days of month-end. Send us a message and we will review your current process for free.',
        ],
        ['Headline', 'Accounting services in Georgia', 'Faster month-end reports'],
      ],
    },
    {
      type: 'p',
      text: 'The "free review" in the example is the call to action. It is easier to say yes to than "contact us", because it names what happens next and what it costs.',
    },
    { type: 'h2', text: 'Answer the objection before it stops the sale' },
    {
      type: 'p',
      text: 'People scroll past because they have a reason not to act. Write down the two or three reasons your buyers give when they hesitate, and answer one in the ad. Social Media Examiner lists handling objections and social proof as separate copy elements, and in a small ad they often combine in one line.',
    },
    {
      type: 'table',
      head: ['Common objection', 'Weak line', 'Stronger line'],
      rows: [
        ['"I do not know the price"', 'Affordable prices', 'Send a message and get a written quote the same day'],
        ['"Will it fit my situation?"', 'Solutions for everyone', 'Tell us your office size and we will say honestly whether we are a fit'],
        ['"I do not trust a new supplier"', 'Trusted by many', 'Visit the showroom before you decide, address in the comments'],
        ['"It will take too long"', 'Fast service', 'State the real step and time, for example "We reply within one working day"'],
      ],
    },
    {
      type: 'p',
      text: 'Only promise what you can keep. A same-day quote is a good line if your team can deliver it; if not, a claim like that costs more than it wins, and it can also draw a rejection for misleading claims.',
    },
    { type: 'h2', text: 'More rewrites for Georgian businesses' },
    {
      type: 'p',
      text: 'These are invented businesses, chosen because they sell to different kinds of buyers in Georgia. The pattern is the same each time: name the result, give a reason to believe, end with one action.',
    },
    {
      type: 'table',
      head: ['Business', 'Weak', 'Rewrite'],
      rows: [
        ['Furniture workshop (B2C)', 'High quality furniture made to order. Call now.', 'Your wardrobe, cut to the size of your room. Send a photo and the measurements and we reply with a design and a quote.'],
        ['Training centre (B2B)', 'Corporate training for your team.', 'A half-day sales workshop for your team, run at your office. Message us the team size and the topic.'],
        ['Restaurant', 'Delicious food in the heart of Tbilisi.', 'Business lunch, ready in 40 minutes, near the office. See the menu and book a table for your team.'],
        ['Wholesale supplier', 'We offer wide range of products at competitive prices.', 'Order by 5 p.m. and we deliver next day in Tbilisi. Request the price list.'],
      ],
    },
    {
      type: 'p',
      text: 'The Georgian version should be written in Georgian, not translated word for word from English copy. If your ad text is Georgian, write the first line the way a customer would say it aloud, and ask a native speaker to read it before it goes live. [WakeUP\'s content creation service](/services/content-creation) includes copywriting in Georgian and English for ad text.',
    },
    { type: 'h2', text: 'Copy that gets rejected' },
    {
      type: 'p',
      text: 'The riskiest habit in ad copy is talking about the viewer. Meta\'s [personal attributes policy](https://transparency.meta.com/policies/ad-standards/objectionable-content/privacy-violations-personal-attributes/) says ads "must not contain content that asserts or implies personal attributes", and its examples include questions such as "Do you have diabetes?" and "Are you bankrupt?". So "Struggling with back pain?" is a risk where "A chair built for long office days" is not. Misleading claims and mismatches between the ad and the landing page cause the rest. The full list is in [why Facebook ads get rejected](/blog/why-facebook-ads-get-rejected).',
    },
    { type: 'h2', text: 'Test the copy, one change at a time' },
    {
      type: 'ol',
      items: [
        'Write two or three versions of the first line only, with the same image, audience and budget. Different openings test the angle: result, problem, price or proof.',
        'Run them long enough to collect a meaningful number of results for your goal. The goal for a lead ad is messages or forms, not likes.',
        'Keep the winner, then test the headline or the call to action against it. Changing everything at once tells you nothing.',
        'Read the replies. The words buyers use in messages, "how much", "do you deliver", "can I see it first", are your next ad copy and your next objection line.',
      ],
    },
    {
      type: 'p',
      text: 'For the setup that surrounds the copy, see [how to run Facebook ads](/blog/how-to-run-facebook-ads), and for testing video as well as text, [how to test video ad creative on Meta](/blog/how-to-test-video-ad-creative-on-meta). If you want help with the copy itself, the [free audit](/audit) is a way to have your current ads looked at.',
    },
  ],
}
