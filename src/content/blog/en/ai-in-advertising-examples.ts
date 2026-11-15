import type { BlogPost } from '@/lib/blog'

export const post: BlogPost = {
  locale: 'en',
  slug: 'ai-in-advertising-examples',
  title: 'AI in advertising examples: what it does and what you can use',
  metaTitle: 'AI in Advertising Examples',
  description:
    'AI in advertising examples from Coca-Cola, Heinz and Cadbury, plus what Meta and Google Ads offer and which limits apply to advertisers in Georgia.',
  publishedAt: '2027-01-20T15:00:00+04:00',
  updatedAt: '2027-01-20T15:00:00+04:00',
  service: 'advertising',
  reviewState: 'llm_reviewed',
  body: [
    {
      type: 'p',
      text: 'AI in advertising does three jobs: it generates creative (images, text, video), it personalises ads for different viewers, and it optimises delivery by choosing bids, audiences and placements. The famous brand examples are mostly the first two. The tools a Georgian advertiser can use today are mostly the third, inside Meta Ads and Google Ads, plus their built-in creative generators, which have limits worth knowing.',
    },
    {
      type: 'h2',
      text: 'The three jobs AI does in ads',
    },
    {
      type: 'table',
      head: ['Job', 'What it means', 'Example in this article'],
      rows: [
        ['Creative generation', 'AI makes or edits images, copy and video', 'Coca-Cola, Heinz, Performance Max assets, Advantage+ creative'],
        ['Personalisation', 'One idea becomes many versions for different people or places', 'Cadbury\'s local-shop ads'],
        ['Delivery optimisation', 'Machine learning picks bids, audiences, placements and budget', 'Google Smart Bidding, Meta Advantage+'],
      ],
    },
    {
      type: 'p',
      text: 'The last job needs clean conversion data rather than creative talent. The first two get the attention and the awards. A small advertiser can start with the third, then use the first for volume of variations rather than for the big idea.',
    },
    {
      type: 'h2',
      text: 'Brand examples',
    },
    {
      type: 'p',
      text: 'Coca-Cola, "Create Real Magic" (creative generation). In March 2023, Coca-Cola launched a platform that combined GPT-4 and DALL-E so digital artists could make original artwork from its archive assets. The company\'s [announcement](https://www.coca-colacompany.com/media-center/coca-cola-invites-digital-artists-to-create-real-magic-using-new-ai-platform) says it was built exclusively for Coca-Cola by OpenAI and Bain & Company, and that selected submissions could appear on digital billboards in New York and London. The lesson for a smaller brand: AI was the tool, but the idea was an invitation to make something with the brand, not an automated ad.',
    },
    {
      type: 'p',
      text: 'Heinz, "A.I. Ketchup" (creative generation as the idea). Agency Rethink used DALL-E 2 to generate images from prompts such as "Renaissance Ketchup Bottle", and found that the results still looked like Heinz. Rethink\'s [One Show entry](https://www.oneclub.org/awards/theoneshow/-award/48184/ai-ketchup/) reports over 850 million earned impressions and a social engagement rate 38 percent higher than past campaigns. Both figures are the agency\'s own, not an independent measurement. The lesson: the AI output was the proof of an existing brand strength, not a replacement for it.',
    },
    {
      type: 'p',
      text: 'Cadbury, "Shah Rukh Khan My Ad" (personalisation). Ogilvy India and Cadbury Celebrations used machine learning to make ads that, in the words of Ogilvy\'s [case page](https://www.ogilvy.com/work/shah-rukh-khan-my-ad), "doubled as ads for Cadbury and thousands of local businesses". The page lists awards rather than sales figures, so treat the business result as unverified. The lesson: personalisation at scale is a template with variable parts, and the template is a creative decision.',
    },
    {
      type: 'h2',
      text: 'Automation inside the ad platforms',
    },
    {
      type: 'p',
      text: 'Google describes [Smart Bidding](https://support.google.com/google-ads/answer/7065882) as "bidding strategies that use Google AI to optimize for conversions or conversion value in every auction". It sets a bid for each auction using signals such as device, location, time of day, remarketing list membership and the actual search query, and it requires conversion tracking to be set up. If your conversions are miscounted, the automation optimises for the wrong thing.',
    },
    {
      type: 'p',
      text: 'On Meta, [Advantage+](https://www.facebook.com/business/ads/meta-advantage-plus) applies AI "across your campaign\'s audience, placement and budget", with the advertiser choosing the solution type and the goal (sales, app or leads). You give up some control over who sees the ad in exchange for the system finding people likely to act. For how this plays out on Google, see [Performance Max explained](/blog/performance-max-explained) and [Google Ads optimisation tips](/blog/google-ads-optimization-tips); for Meta basics, [how to run Facebook ads](/blog/how-to-run-facebook-ads).',
    },
    {
      type: 'h2',
      text: 'AI creative tools in Meta and Google',
    },
    {
      type: 'p',
      text: 'Meta\'s [Advantage+ creative page](https://www.facebook.com/business/ads/meta-advantage-plus/creative) lists generating brand new images, expanding images and videos for different placements (such as Reels), generating backgrounds for catalogue ads, animating images, producing text variations and translating speech in ads. The lift percentages on that page are Meta\'s own and do not say who measured them, so test the features on your account instead of relying on them.',
    },
    {
      type: 'p',
      text: 'In Google Ads, the [Performance Max asset group builder](https://support.google.com/google-ads/answer/14150602) can generate headlines, descriptions and long headlines and suggest images. Google says generative AI in Performance Max is rolling out globally to advertisers who meet its criteria, that eligibility depends on the account\'s interface language being one of seven supported languages, and that you should review generated assets to ensure they are accurate and not misleading before publishing. Treat the generated set as a first draft that a person approves.',
    },
    {
      type: 'h2',
      text: 'What a Georgian advertiser can use today',
    },
    {
      type: 'ul',
      items: [
        'Google Ads does not support Georgian as an ad language: Google\'s [language targeting page](https://support.google.com/google-ads/answer/6333734) says ads written in a language not supported for ads language targeting are disapproved. English and Russian are on that list, so write Google ads in a language your audience reads. AI text generation inside Google Ads cannot change that limit.',
        'Smart Bidding bids on signals and conversion data, so its first requirement is correct conversion tracking rather than ad copy. Give it a steady flow of conversions before relying on it.',
        'On Meta, check inside your Ads Manager which creative features appear for your account, and test each one on a small budget before relying on it.',
        'Have a native Georgian speaker read any AI-written Georgian copy (for Meta or any other channel) before it runs; the platform tools do not replace that check.',
      ],
    },
    {
      type: 'h2',
      text: 'A safe way to start',
    },
    {
      type: 'ol',
      items: [
        'Fix measurement first: one clear conversion (call, form, message) tracked in both platforms.',
        'Use bid automation on the campaign that already produces conversions, and leave the others manual until they do.',
        'Generate variations of a creative you know works (a different opening line, a new crop) instead of generating new campaigns from nothing.',
        'Have one named person approve every AI-generated image or line before it runs, and keep the originals.',
        'Compare against a control for long enough to collect a meaningful number of conversions, using cost per qualified enquiry, not clicks.',
      ],
    },
    {
      type: 'p',
      text: 'For AI-generated video, the production and disclosure questions are covered in [AI video for marketing](/blog/ai-video-for-marketing), and for AI-written copy in [AI content creation for marketing](/blog/ai-content-creation-for-marketing).',
    },
    {
      type: 'h2',
      text: 'Where WakeUP fits',
    },
    {
      type: 'p',
      text: 'WakeUP Marketing\'s [advertising service](/services/advertising) covers paid campaigns on Meta and Google, with reporting tied to enquiries. If you want to know whether your current setup is ready for automation, request the [free audit](/audit) and ask for a review of your conversion tracking first.',
    },
  ],
}
