import type { BlogPost } from '@/lib/blog'

export const post: BlogPost = {
  locale: 'en',
  slug: 'social-media-crisis-plan',
  title: 'Social media crisis management plan: a one-page template for a company',
  metaTitle: 'Social Media Crisis Management Plan',
  description:
    'A social media crisis management plan on one page: what counts as a crisis, who decides, a holding statement, monitoring and when to pause scheduled posts.',
  publishedAt: '2027-02-12T12:00:00+04:00',
  updatedAt: '2027-02-12T12:00:00+04:00',
  service: 'smm',
  reviewState: 'llm_reviewed',
  body: [
    {
      type: 'p',
      text: 'A social media crisis management plan is a one-page document agreed before anything goes wrong. It says what counts as a crisis, who decides what happens, which holding statement goes out first, how you monitor mentions, and when scheduled posts are paused. Written in advance, it saves the hours a team would otherwise lose arguing while the story spreads.',
    },
    { type: 'h2', text: 'What counts as a crisis' },
    {
      type: 'p',
      text: 'Sprout Social defines a social media crisis as "any significant negative social media activity" that threatens a brand\'s reputation, operations or customer relationships ([Sprout Social, social media crisis plan](https://sproutsocial.com/insights/social-media-crisis-plan/)). One angry comment is not that. A complaint that a day of normal replies can settle belongs to everyday [community management](/blog/social-media-community-management). A crisis is bigger: it is spreading, it involves safety, law or a public figure, or it could change whether customers trust you.',
    },
    {
      type: 'p',
      text: 'Write three levels in the plan, each with an example from your own business:',
    },
    {
      type: 'table',
      head: ['Level', 'Signs', 'Who handles it'],
      rows: [
        ['1. Complaint', 'One customer or a few comments, no sign of spreading', 'Social media manager, using the normal reply routine'],
        ['2. Escalating issue', 'Many comments, shares or press questions; a product, service or staff problem is alleged', 'Social lead plus the department that owns the problem; the decider is told'],
        ['3. Crisis', 'Safety, legal or integrity claims; a viral post; a data leak; an employee or executive involved', 'The response team below, with the decider in charge'],
      ],
    },
    { type: 'h2', text: 'Who decides' },
    {
      type: 'p',
      text: 'Name people, not departments, and a deputy for each. Sprout\'s guide suggests a response team made up of a team lead, a social media manager, communications or PR, legal, a customer support lead and an executive sponsor. A smaller company rarely has all of those; combine roles, but keep the questions clear:',
    },
    {
      type: 'ul',
      items: [
        'Who declares a level 3 crisis? One person, with a phone number and a backup.',
        'Who approves public statements? Usually a senior manager or owner, plus someone who checks the facts.',
        'Who is the only person who answers journalists?',
        'Who has admin access to every account, and where are the logins stored securely?',
        'Who talks to staff, so employees do not post their own versions?',
      ],
    },
    {
      type: 'p',
      text: 'Check that more than one person can publish and that admin roles are current: a crisis that starts while the only admin is on holiday is a second crisis.',
    },
    { type: 'h2', text: 'Monitoring: how you find out early' },
    {
      type: 'p',
      text: 'Plans fail when the first warning is a customer phoning the director. Decide in advance what you watch and how often.',
    },
    {
      type: 'ul',
      items: [
        'Comments, messages and tags on every company account, checked at fixed times during working hours.',
        'Your company and brand names, and the names of key products and executives, in search and in social search.',
        'Google reviews and any local forum or group where customers talk about you.',
        'A rule for alerts: who is told, by what channel, and how fast, when a level 2 sign appears.',
      ],
    },
    {
      type: 'p',
      text: 'The routines in [online reputation management](/blog/online-reputation-management) cover the everyday version of this. Sprout also cites its own 2025 Index in saying that 73% of social media users expect brands to respond on social within 24 hours, which is a reason to fix your response times in the plan rather than improvise them. That is a survey of social media users in general, not of Georgia, so set your own targets by your audience.',
    },
    { type: 'h2', text: 'The first hour' },
    {
      type: 'ol',
      items: [
        'Confirm what has happened. Get the facts from the people who know before saying anything public.',
        'Classify the level and tell the decider.',
        'Pause scheduled and automated posts. Sprout recommends stopping automated posting, at least temporarily, because promotional posts feel out of place and insensitive in the middle of a crisis.',
        'Take screenshots and save links of the posts and comments for your records.',
        'Publish the holding statement, if the situation calls for one.',
        'Set the next update time and tell the team and customer support.',
      ],
    },
    { type: 'h2', text: 'The holding statement' },
    {
      type: 'p',
      text: 'A holding statement is a short public message that shows you know about the problem and are dealing with it, before you have the whole answer. Prepare a template with blanks and have it pre-approved:',
    },
    {
      type: 'p',
      text: 'We are aware of [short description of the issue]. We are looking into it and will share an update by [time/date]. If you are affected, please contact us at [one channel].',
    },
    {
      type: 'ul',
      items: [
        'State only what you have confirmed. Do not guess at causes or blame anyone.',
        'Give one contact route and a time for the next update, then keep it.',
        'Post it in the same language the story is spreading in, and on the channels where it appears.',
        'Do not delete critical comments to make the problem look smaller; reply to the question or point people to the contact route.',
        'If the company is at fault, say so plainly and say what changes. If it is not, give the facts calmly.',
      ],
    },
    { type: 'h2', text: 'After it is over' },
    {
      type: 'p',
      text: 'Within a week, write down what happened, what the team did, what worked and what slowed you down, and update the plan. Resume normal posting only when the decider agrees, and review the next weeks\' scheduled content in the [content calendar](/blog/social-media-content-calendar) against what happened. A [social media audit](/blog/social-media-audit) is a good moment to check access, roles and response times.',
    },
    {
      type: 'p',
      text: 'WakeUP\'s [social media management service](/services/smm) covers page management and replies to messages, which is where early warnings usually appear. If you would like someone to review your accounts, replies and sales process first, the [free marketing audit](/audit) is a no-obligation place to start.',
    },
  ],
}
