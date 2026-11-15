import type { BlogPost } from '@/lib/blog'

export const post: BlogPost = {
  locale: 'en',
  slug: 'how-to-run-facebook-ads',
  title: 'How to run Facebook ads: a step-by-step setup guide for businesses',
  metaTitle: 'How to Run Facebook Ads, Step by Step',
  description:
    'How to run Facebook ads step by step: ad account, Page, payment, tracking, objective, campaign, ad set, ad and review. Based on Meta\'s own guidance.',
  publishedAt: '2026-12-07T12:00:00+04:00',
  updatedAt: '2026-12-07T12:00:00+04:00',
  service: 'advertising',
  reviewState: 'llm_reviewed',
  body: [
    {
      type: 'p',
      text: 'To run Facebook ads, you need an ad account, a Facebook Page, a payment method and tracking on your website. Then you open Meta Ads Manager and build three levels in order: a campaign with one objective, an ad set with your audience, placements, budget and schedule, and the ad itself. Meta reviews the ad against its Advertising Standards, and you read the results and adjust once it has run. This guide takes each step in that order.',
    },
    { type: 'h2', text: 'Step 1: Get the accounts and payment in place' },
    {
      type: 'p',
      text: 'According to the [Meta Business Help Center](https://www.facebook.com/business/help/407323696966570), when you sign up for Facebook you are given an ad account by default, and you reach it through Ads Manager. Before you can advertise in Ads Manager, Meta lists two requirements:',
    },
    {
      type: 'ul',
      items: [
        'A Facebook Page for your business, or an admin, editor or advertiser role on someone else\'s Page.',
        'A valid payment method on the ad account.',
      ],
    },
    {
      type: 'p',
      text: 'If a company or an agency manages ads for several brands, Meta encourages creating a business portfolio, which lets you create one or several ad accounts. Meta also states that all advertisers are limited to one ad account ID until they make a confirmed payment. Set this up under a company-owned login, not one employee\'s personal profile, so the ad account does not depend on a single person.',
    },
    { type: 'h2', text: 'Step 2: Decide whether to boost a post or build an ad' },
    {
      type: 'p',
      text: 'Meta separates two routes. A [boosted post](https://www.facebook.com/business/help/317083072148603) is an ad created from content already published on your Page or Instagram account, and Meta calls it the simplest way to reach more people. Boosted posts have fewer customisation and detailed targeting options than a Meta ad built in Ads Manager, and Meta states that campaign creation, budget settings and performance metrics are only available in Ads Manager.',
    },
    {
      type: 'table',
      head: ['', 'Boosted post', 'Ad built in Ads Manager'],
      rows: [
        ['Starting point', 'An existing post, Story or Reel', 'A new campaign'],
        ['Goals', 'Messages, engagement, website visitors and similar', 'Full objectives, including leads and sales'],
        ['Targeting', 'Interests, age and gender', 'More advanced tools, such as lookalike audiences'],
        ['Best for', 'Visibility and audience growth', 'Leads and sales you want to measure'],
      ],
    },
    {
      type: 'p',
      text: 'For a business that needs enquiries or sales, build the ad in Ads Manager. The rest of this guide follows that route.',
    },
    { type: 'h2', text: 'Step 3: Set up tracking before you spend' },
    {
      type: 'p',
      text: 'Meta says the Meta Pixel lets you track interactions on your website and optimise your advertising, so set it up before you spend. Meta\'s [best practices for Meta Pixel setup](https://www.facebook.com/business/help/218844828315224) give a short checklist:',
    },
    {
      type: 'ul',
      items: [
        'Check that the pixel base code is exact, and that event code sits in the right place.',
        'Spell standard events correctly. Events are case sensitive: Meta\'s example is that "viewcontent" instead of "ViewContent" creates a custom event.',
        'Use the Conversions API alongside the pixel and share the same events through both. Meta calls this a redundant setup and says the Conversions API shares website events the pixel may miss because of network issues or page loading errors.',
        'Check events with the test events tool and the Diagnostics tab in Events Manager.',
      ],
    },
    {
      type: 'p',
      text: 'If the result you want happens in a chat rather than on a website, plan for that too: Meta\'s objective settings let you choose Messenger or WhatsApp as the place where people take action.',
    },
    { type: 'h2', text: 'Step 4: Create the campaign and choose an objective' },
    {
      type: 'p',
      text: 'Meta describes [three advertising levels](https://www.facebook.com/business/help/621956575422138): campaign, ad set and ad. One campaign holds one or more ad sets, and each ad set holds one or more ads. At the campaign level you select the objective and the buying type, and Meta notes that most advertisers use Auction.',
    },
    {
      type: 'p',
      text: 'Meta now offers [six simplified objectives](https://www.facebook.com/business/help/1438417719786914):',
    },
    {
      type: 'table',
      head: ['Objective', 'What Meta says it is for'],
      rows: [
        ['Awareness', 'Reaching the largest number of people likely to remember your ad'],
        ['Traffic', 'Sending people to a destination such as your website, Page or app'],
        ['Engagement', 'Finding people likely to engage, send a message or take actions on your ad or Page'],
        ['Leads', 'Collecting leads through messages, phone calls or signups'],
        ['App promotion', 'Getting people on mobile devices to install or act in your app'],
        ['Sales', 'Finding people likely to buy, and optimising for actions such as adding to cart'],
      ],
    },
    {
      type: 'p',
      text: 'Pick the one that matches the single most important action you want right now. A company that wants contact requests chooses Leads; an online shop chooses Sales. When you work in Ads Manager, Meta says you also choose the conversion location (where people act, such as your website or a messaging app) and the performance goal (the outcome delivery is optimised for).',
    },
    { type: 'h2', text: 'Step 5: Build the ad set: audience, placements, budget, schedule' },
    {
      type: 'p',
      text: 'The ad set level, per Meta\'s overview, is where you define four things: the audience (demographics, interests, behaviours, custom audiences), the placements (such as Facebook Feed, Instagram Stories or Messenger), the budget (daily or lifetime) and the schedule. All ads inside one ad set share these settings.',
    },
    {
      type: 'p',
      text: 'Two practical points. First, how a budget behaves and what bid strategies do is covered in [how much Facebook ads cost](/blog/facebook-ads-cost), so it is not repeated here. Second, Meta says edits to a new ad set can reset its learning phase, so decide the audience and budget before launch rather than adjusting them every day.',
    },
    { type: 'h2', text: 'Step 6: Create the ad and publish' },
    {
      type: 'p',
      text: 'The ad level is where you pick the format (single image or video, carousel or collection), write the creative (images, videos, text, headlines and links) and choose which Facebook Page and Instagram account represent your business. Meta\'s example of structure is one campaign with two ad sets, each with different ads, so you can see which combination performs best.',
    },
    {
      type: 'ul',
      items: [
        'Start with a small number of ads that differ in one clear way, such as the image or the first line of text.',
        'Send people to a page that matches the ad\'s promise and has one obvious action.',
        'Preview the ad on each placement before you publish.',
      ],
    },
    { type: 'h2', text: 'Step 7: Pass ad review and read the results' },
    {
      type: 'p',
      text: 'When you publish, [Meta reviews the ad](https://www.facebook.com/business/help/204798856225114) against its Advertising Standards. Review can include images, video and text, targeting, the ad destination and special ad categories, and the status shows in the Delivery column of Ads Manager. Meta says: "Most ads are reviewed within 24 hours, although in some cases it may take longer."',
    },
    {
      type: 'p',
      text: 'Editing a running ad can start a new review. Meta lists targeting, creative, optimisation and billing event as changes that trigger one, while changes to bid amount, budget or schedule do not. If an ad is rejected and you believe it was a mistake, you can request another review in Meta Business Support Home.',
    },
    {
      type: 'p',
      text: 'Once the ad delivers, judge it by the result you chose in step 4: cost per lead, cost per enquiry or cost per sale, not by clicks alone. Meta says new or significantly edited ad sets [usually have a higher cost per result](https://www.facebook.com/business/help/112167992830700) until they leave the learning phase, which usually happens after about 50 results in the week after the last significant edit, so give the ad set time to reach that point before you decide.',
    },
    { type: 'h2', text: 'Where to go from here' },
    {
      type: 'p',
      text: 'Once your first campaign is live, the next questions are where the platform fits: [Facebook ads vs Google ads](/blog/facebook-ads-vs-google-ads) compares them, and [lead generation strategies](/blog/lead-generation-strategies) covers what happens to a lead after the click. If you would rather have the setup, tracking and weekly optimisation handled for you, WakeUP\'s [advertising service](/services/advertising) covers them, and the [free marketing audit](/audit) reviews where your current ad budget goes.',
    },
  ],
}
