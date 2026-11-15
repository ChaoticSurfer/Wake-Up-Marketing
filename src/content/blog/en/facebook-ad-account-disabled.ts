import type { BlogPost } from '@/lib/blog'

export const post: BlogPost = {
  locale: 'en',
  slug: 'facebook-ad-account-disabled',
  title: 'Facebook ad account disabled: why it happens and how to request a review',
  metaTitle: 'Facebook Ad Account Disabled: Fix It',
  description:
    'Facebook ad account disabled? Learn the usual reasons, how to request a review in Account Quality and how to protect your ad account.',
  publishedAt: '2027-01-14T09:00:00+04:00',
  updatedAt: '2027-01-14T09:00:00+04:00',
  service: 'advertising',
  reviewState: 'llm_reviewed',
  body: [
    {
      type: 'p',
      text: 'When a Facebook ad account is disabled, Meta has judged that the account broke its rules or looks unsafe, and your ads stop running. Open Account Quality in Meta’s business tools to see which asset is affected and why. If you believe the decision is wrong, request a review there, after you have fixed what caused it. Do not open new accounts to get around the block.',
    },
    { type: 'h2', text: 'Disabled, restricted or rejected: which one do you have?' },
    {
      type: 'p',
      text: 'The words are used loosely, and the fix depends on the exact situation.',
    },
    {
      type: 'ul',
      items: [
        'A rejected ad. One ad failed the review and the account still works. Fix the ad or ask for another look. The reasons are covered in [why Facebook ads get rejected](/blog/why-facebook-ads-get-rejected).',
        'A restricted ad account or Business Account. Meta’s [Advertising Standards](https://transparency.meta.com/policies/ad-standards/) say that after a restriction, “that account or asset can’t be used to advertise across our technologies.”',
        'A disabled personal profile. This is a different system, with its own rules. Meta’s page on [disabling accounts](https://transparency.meta.com/enforcement/taking-action/disabling-accounts) describes Facebook and Instagram accounts in general and does not mention ad accounts. If your profile is the admin of your business assets, the problem can spread to what it manages, so check both.',
      ],
    },
    { type: 'h2', text: 'Why Meta disables or restricts ad accounts' },
    {
      type: 'p',
      text: 'Meta’s Advertising Standards state that it “may restrict advertiser accounts that don’t follow our Advertising Standards”, and that advertising accounts “must be associated with a legitimate business or individual”. Beyond that, Meta’s public pages do not list every trigger, so the causes below come from two places: what Meta documents, and what practitioners report. The second group is experience, not Meta policy, so treat it as a list of things to check.',
    },
    {
      type: 'table',
      head: ['Cause', 'What it looks like', 'Source type'],
      rows: [
        ['Policy violations', 'Repeated rejected ads, misleading claims, restricted products and services', 'Documented by Meta'],
        ['Illegitimate or unclear business identity', 'The account is not tied to a real business or person', 'Documented by Meta'],
        ['Evading a previous restriction', 'A new account opened after an old one was blocked', 'Documented by Meta for Facebook and Instagram accounts in general'],
        ['Payment problems', 'Frequent failed payments, disputed payments or an unpaid balance', 'Reported by practitioners'],
        ['Unusual login activity', 'Logins from several distant places in quick succession', 'Reported by practitioners'],
        ['Poor post-click experience', 'Ads lead to pages that fail to load or do not match the ad', 'Reported by practitioners'],
      ],
    },
    {
      type: 'p',
      text: 'One agency guide, [Relevant Audience](https://www.relevantaudience.com/facebook-ads/facebook-ad-account-disabled/), lists the last three among the causes it sees. It is a third-party view, so check your own Account Quality page for the reason Meta actually gave you.',
    },
    { type: 'h2', text: 'What to do in the first hour' },
    {
      type: 'ol',
      items: [
        'Read the exact message and note which asset is affected: the ad account, the Page, the Business Account or your profile.',
        'Check who has admin access. Remove people who should not be there and change shared passwords.',
        'Switch on two-factor authentication for every admin. Meta describes it as [a security feature that helps protect your Facebook account and password](https://www.facebook.com/help/148233965247823).',
        'Look at billing: any failed payment, unpaid balance or expired card.',
        'Pause or fix the ads and landing pages that could have triggered the decision. Compare them with the Advertising Standards, not with memory.',
        'Save screenshots and dates of everything you change. You will need them for the review.',
      ],
    },
    { type: 'h2', text: 'How to request a review' },
    {
      type: 'p',
      text: 'Meta states that where an ad account or other asset is restricted, “you can request a review of the decision in Account Quality.” That is the official route. Third-party guides also mention Business Support Home, and the menu names change from time to time, so follow what you see on screen.',
    },
    {
      type: 'ul',
      items: [
        'Request the review as an admin of the affected asset, using an account that is in good standing.',
        'Fix the cause first, then ask. A request that says only “I did nothing wrong” gives the reviewer nothing to check.',
        'Keep any explanation short and factual: what the business sells, what you changed and what you will do to prevent it.',
        'Submit once and wait. Review times are not something to rely on, so be wary of any guide that promises a number of hours, and do not send the same request repeatedly.',
      ],
    },
    { type: 'h2', text: 'If the review fails' },
    {
      type: 'p',
      text: 'Check the new message in Account Quality for what Meta says about the decision. Then decide whether the cause is something you can correct. If it is a policy problem with your offer, the next campaign will hit the same wall, and you need to change the offer or the claim. If the reviewer found nothing to restore, plan for a business that can run ads without that account: a clean setup with verified business details and honest ads. Do not create a duplicate account to continue where you left off. Meta says it works to disable accounts created to evade restrictions, and a duplicate account is likely to end up in the same situation.',
    },
    { type: 'h2', text: 'How to protect the ad account' },
    {
      type: 'ul',
      items: [
        'Register the ad account and Business Account to your company, with at least two admins from your side, so one person leaving does not lock you out.',
        'Give agencies and freelancers partner or limited access rather than your personal login. WakeUP’s [advertising page](/services/advertising) states that campaigns run in your own Meta and Google accounts, which is the arrangement to ask any supplier for.',
        'Keep a working payment method and watch for failed charges.',
        'Read the Advertising Standards before you launch an unusual offer, and keep claims you can prove.',
        'Make landing pages match the ad and load properly on a phone. Setting up tracking correctly also reduces the pressure to experiment: see [Meta Pixel vs Conversions API](/blog/meta-pixel-vs-conversions-api).',
        'Do not buy or rent ad accounts, and do not share one account across unrelated companies.',
      ],
    },
    {
      type: 'p',
      text: 'The basic setup steps that keep a new account healthy are in [how to run Facebook ads](/blog/how-to-run-facebook-ads). If you want someone to check your account structure, access and ads before a problem appears, the [free audit](/audit) covers your current advertising, and WakeUP’s [advertising service](/services/advertising) covers Meta and Google Ads management.',
    },
  ],
}
