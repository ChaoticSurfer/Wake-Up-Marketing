import type { BlogPost } from '@/lib/blog'

export const post: BlogPost = {
  locale: 'en',
  slug: 'remove-fake-google-reviews',
  title: 'How to remove fake Google reviews: what Google takes down, how to report and appeal',
  metaTitle: 'How to Remove Fake Google Reviews',
  description:
    'How to remove fake Google reviews: which reviews Google will take down, the reporting steps, the one-time appeal and what to do while you wait.',
  publishedAt: '2027-02-07T15:00:00+04:00',
  updatedAt: '2027-02-07T15:00:00+04:00',
  service: 'seo',
  reviewState: 'llm_reviewed',
  body: [
    {
      type: 'p',
      text: 'To remove a fake Google review, flag it from your Business Profile and choose the reason that matches Google\'s content policy. Google only removes reviews that break its policies, such as fake engagement, conflict of interest or off-topic content. It does not remove a review just because it is negative or unfair. Evaluation typically takes several days, and a rejected report can be appealed once.',
    },
    { type: 'h2', text: 'What Google will remove and what stays' },
    {
      type: 'p',
      text: 'Google\'s own review help page is direct about the limit: [do not report a review just because you disagree with it or dislike it](https://support.google.com/business/answer/4596773), and Google does not get involved in conflicts between businesses and customers. So the first question is whether the review breaks a rule, not whether it is wrong.',
    },
    {
      type: 'p',
      text: 'The rules sit in Google\'s [Maps user-generated content policy](https://support.google.com/contributionpolicy/answer/7400114). The ones most useful to a business owner:',
    },
    {
      type: 'table',
      head: ['Situation', 'Policy it falls under', 'Realistic outcome'],
      rows: [
        ['Review from someone who never used your business (a competitor, a bot, a stranger)', 'Fake engagement: content not based on a real experience', 'Eligible for removal'],
        ['Review from a competitor, ex-employee or relative that hides the link', 'Conflict of interest, within rating manipulation', 'Eligible if you can show the link'],
        ['Review that is general, political or social commentary or a personal rant, not an experience at your place', 'Off-topic: only post content based on an experience at the place', 'Eligible'],
        ['Review with a promotion, phone number or link to another business', 'Advertising and solicitation', 'Eligible'],
        ['Same text posted several times or from several accounts', 'Repetitive content', 'Eligible'],
        ['Threats, slurs, personal information about staff', 'Harassment, hate speech, personal information', 'Eligible'],
        ['A real customer with a bad experience, even if you think they are wrong', 'No violation', 'Stays; reply instead'],
      ],
    },
    { type: 'h2', text: 'Before you report: collect evidence' },
    {
      type: 'p',
      text: 'The report form is short, so the decision rests mostly on what Google can see. Before you flag anything, check your own records so you know whether the person is a customer.',
    },
    {
      type: 'ul',
      items: [
        'Search your orders, bookings and messages for the reviewer\'s name. No match is a signal, not proof: customers often use a different name.',
        'Take screenshots of the review, the reviewer\'s profile and their other reviews. Several one-star reviews across unrelated businesses in one day look different from a normal local reviewer.',
        'Note the date. A sudden group of reviews in a few hours can point to one source, and Google lists unusual volumes or patterns of reviews as a sign of rating manipulation.',
        'Write down which policy line the review matches, in one sentence.',
      ],
    },
    { type: 'h2', text: 'Report the review step by step' },
    {
      type: 'p',
      text: 'Google documents two routes. The basic one, from the [help page on reporting reviews](https://support.google.com/business/answer/4596773):',
    },
    {
      type: 'ol',
      items: [
        'Open your Business Profile and select Read reviews.',
        'Next to the review you want to flag, select Report.',
        'Choose the reason that fits the violation.',
        'Select Send report.',
      ],
    },
    {
      type: 'p',
      text: 'The second is the Reviews Management Tool: choose your business, select Report a new review for removal, click Report next to the review, pick a reason and submit. The tool is better if you have several reviews to report, because it also tracks the status of each one.',
    },
    {
      type: 'p',
      text: 'If the negative reviews arrive together with a demand for money to make them stop, that is an extortion scam, and Google\'s [reporting page](https://support.google.com/business/answer/4596773) points to a separate route for reporting it.',
    },
    { type: 'h2', text: 'Check the status and appeal once' },
    {
      type: 'p',
      text: 'Google says review evaluation typically takes several days. In the Reviews Management Tool the status will be one of:',
    },
    {
      type: 'ul',
      items: [
        'Decision pending: flagged but not yet evaluated.',
        'Report reviewed - no policy violation: the review stays up, and you can submit a one-time appeal.',
        'Escalated - check your email for updates: the appeal went further and the final decision comes by email.',
      ],
    },
    {
      type: 'p',
      text: 'To appeal, use the option to check the status of reviews you reported and select Appeal eligible reviews. You can include up to 10 reviews in one appeal. Add the context you collected earlier, such as proof that the reviewer was never a customer. The result arrives by email; if the review violates policy it is removed, and if not it stays live. Because the appeal is one-time, do not file it until the evidence is in the form.',
    },
    { type: 'h2', text: 'While you wait, and if the review stays' },
    {
      type: 'p',
      text: 'Once your business is verified, [you can reply to reviews](https://support.google.com/business/answer/3474050) on your Business Profile. A short, calm, public reply helps even when the review is fake, because later readers see a business that answered. State that you cannot find a record of the visit and invite the person to contact you with details. Do not accuse, name individuals or argue about facts you cannot show.',
    },
    {
      type: 'p',
      text: 'The most durable fix is more real reviews. A handful of fake ratings matters less when there are dozens of genuine ones. The [guide to getting more Google reviews](/blog/how-to-get-more-google-reviews) covers asking at the right moment and what Google does not allow, and [online reputation management](/blog/online-reputation-management) sets out a weekly routine for monitoring and replying.',
    },
    { type: 'h2', text: 'What not to do' },
    {
      type: 'ul',
      items: [
        'Do not report reviews you simply dislike. Reports without a policy basis cost you time and gain nothing.',
        'Do not offer a refund or discount in exchange for deleting a genuine review.',
        'Do not post fake positive reviews to balance the rating. Google can place restrictions on a business that it determines has violated its Fake Engagement policy, such as [pausing new reviews, unpublishing existing ones or showing a warning to consumers](https://support.google.com/business/answer/14114287).',
        'Do not pay anyone who promises guaranteed removal. Removal is decided by Google against its policy, and no outside party can promise the result.',
      ],
    },
    { type: 'h2', text: 'When to ask for help' },
    {
      type: 'p',
      text: 'If you face many suspicious reviews at once, a profile with restrictions, or a listing that seems to have lost reviews, the cause is often wider than one review: profile details, categories and review habits all matter. WakeUP\'s [SEO service](/services/seo) includes local SEO and Google Business Profile work, and the [free audit](/audit) is a way to see where your profile and reviews stand before deciding what to do. For the wider picture of local rankings, read [local SEO tips](/blog/local-seo-tips).',
    },
  ],
}
