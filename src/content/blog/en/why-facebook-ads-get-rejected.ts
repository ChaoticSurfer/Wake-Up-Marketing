import type { BlogPost } from '@/lib/blog'

export const post: BlogPost = {
  locale: 'en',
  slug: 'why-facebook-ads-get-rejected',
  title: 'Why was my Facebook ad rejected? Common reasons, appeals and fixes',
  metaTitle: 'Why Was My Facebook Ad Rejected?',
  description:
    'Why was my Facebook ad rejected? The common causes - personal attributes, misleading claims, landing page, special ad categories - and how to fix them.',
  publishedAt: '2027-01-09T09:00:00+04:00',
  updatedAt: '2027-01-09T09:00:00+04:00',
  service: 'advertising',
  reviewState: 'llm_reviewed',
  body: [
    {
      type: 'p',
      text: 'A Facebook ad is rejected when Meta\'s review finds that the creative, text, targeting or landing page breaks its Advertising Standards. The notice names the policy. The usual causes are wording that implies something about the viewer, misleading or exaggerated claims, a landing page that does not match the ad, and a missing special ad category. Read the notice first, then fix the named cause.',
    },
    { type: 'h2', text: 'Start with the rejection notice' },
    {
      type: 'p',
      text: 'Open the ad in Ads Manager and read which policy it names and which part of the ad it points to. Fixing the wrong element and resubmitting only creates another rejection. Meta groups its rules in the [Advertising Standards](https://transparency.meta.com/policies/ad-standards/), which include unacceptable content, prohibited commercial practices, restricted goods and services, objectionable content, and product and format policies such as relevance and targeting. Match the notice to one of the sections below.',
    },
    { type: 'h2', text: 'Personal attributes: ads that talk about the viewer' },
    {
      type: 'p',
      text: 'This is the rejection that surprises small advertisers most, because the wording looks harmless. Meta\'s [personal attributes policy](https://transparency.meta.com/policies/ad-standards/objectionable-content/privacy-violations-personal-attributes/) says ads "must not contain content that asserts or implies personal attributes." The attributes it lists include age, faith or belief systems, disability, bodily or mental health, financial hardship or vulnerability, and criminal history. Its examples of prohibited ads are questions such as "Do you have diabetes?" and "Are you bankrupt?".',
    },
    {
      type: 'p',
      text: 'The fix is to talk about the product, not the person. "Do you have back pain?" becomes "A chair designed for long office days". "Struggling with debt?" becomes "Plan your monthly payments in one place". Say what you offer, not what you assume about the viewer.',
    },
    { type: 'h2', text: 'Misleading claims and health claims' },
    {
      type: 'p',
      text: 'Meta\'s [prohibited commercial practices](https://transparency.meta.com/policies/ad-standards/deceptive-content/prohibited-commercial-practices/) policy aims to protect people from being deceived out of money, property or personal information, and lists deceptive pricing, unauthorized endorsements and guaranteed investment returns. Check any "guaranteed", "free" or "only today" claim against what is true on the landing page, and never use a person\'s name or image as an endorsement without permission.',
    },
    {
      type: 'p',
      text: 'Health, beauty and weight-related ads have their own rules. In the [health and wellness policy](https://transparency.meta.com/policies/ad-standards/restricted-goods-services/health-wellness/), the version dated 22 July 2026 bars ads that imply or try to create negative self-perception, side-by-side before-and-after images in weight-loss and wrinkle-treatment ads, and promises of specific outcomes within a set timeframe without disclaimers or qualifiers. Rules change, so check the current text before you brief creative.',
    },
    { type: 'h2', text: 'Landing page does not match the ad' },
    {
      type: 'p',
      text: 'The Advertising Standards say the products and services in an ad must match those on its landing page. Typical causes of a mismatch are an ad for a discount that the page does not show, a page that is broken or empty on mobile, and a link that lands on a general homepage when the ad promised one product.',
    },
    {
      type: 'ul',
      items: [
        'Open the ad link on a phone, in a private window, and check the offer is visible without scrolling.',
        'Make sure the price, product and any promotion in the ad appear on the page.',
        'Fix broken links, redirects and pages that need a login to see the offer.',
        'Make the destination match the product: a dedicated page beats the homepage. See [lead generation landing pages](/blog/lead-generation-landing-pages).',
      ],
    },
    { type: 'h2', text: 'Special ad categories' },
    {
      type: 'p',
      text: 'The Advertising Standards state that advertisers in the US, Canada and certain European countries running financial products and services, housing or employment ads must self-identify under a Special Ad Category. Those ads then have restricted targeting options. Meta describes the categories and country scope in its Business Help Center article on [special ad categories](https://www.facebook.com/business/help/298000447747885). If you advertise credit, loans, jobs or property, check that article for your target country and declare the category before you launch.',
    },
    { type: 'h2', text: 'How to appeal a rejected ad' },
    {
      type: 'p',
      text: 'Appeal only when you believe the ad follows the policy. Meta explains how ad review works in its Business Help Center article [About ads in review](https://www.facebook.com/business/help/204798856225114), and its Advertising Standards have a section on what to do if your ad is rejected. Follow the steps Meta shows for your ad.',
    },
    {
      type: 'ol',
      items: [
        'Read the policy named in the notice and compare it with your ad, line by line.',
        'If the ad clearly breaks the rule, edit it and resubmit. An appeal on an ad that breaks the rule is wasted.',
        'If you believe the rejection is a mistake, use the review request option Meta provides for that ad and, where it allows a note, quote the policy and explain why the ad complies.',
        'Wait for the result before duplicating the ad into new variants, so you do not repeat the same problem across several ads.',
      ],
    },
    { type: 'h2', text: 'How to avoid repeat rejections' },
    {
      type: 'ul',
      items: [
        'Keep a log of every rejection: the date, the policy named, the wording and what fixed it. Patterns show up quickly.',
        'Write ad copy about the product and the benefit, not about the viewer.',
        'Back every claim with something visible on the landing page, and keep before-and-after images and guarantees out of sensitive categories.',
        'Test the landing page on a phone before each launch.',
        'Review the Advertising Standards once a quarter, since Meta updates them.',
        'Unsure whether to boost a post or build a full ad? See [Facebook ads vs boosted posts](/blog/facebook-ads-vs-boosted-posts).',
      ],
    },
    {
      type: 'p',
      text: 'For the full setup steps, including how review works at launch, read [how to run Facebook ads](/blog/how-to-run-facebook-ads). If rejections keep repeating, WakeUP\'s [advertising service](/services/advertising) includes ad creative and copy, and you can start with a [free audit](/audit) of your ad account.',
    },
  ],
}
