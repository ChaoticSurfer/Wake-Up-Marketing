import type { BlogPost } from '@/lib/blog'

export const post: BlogPost = {
  locale: 'en',
  slug: 'negative-comments-on-social-media',
  title: 'How to handle negative comments on social media: a reply workflow for a company page',
  metaTitle: 'Handle Negative Comments on Social Media',
  description:
    'How to handle negative comments on social media: sort criticism from trolls, then reply, hide, move to private or delete, in a company-page workflow.',
  publishedAt: '2027-02-09T12:00:00+04:00',
  updatedAt: '2027-02-09T12:00:00+04:00',
  service: 'smm',
  reviewState: 'llm_reviewed',
  body: [
    {
      type: 'p',
      text: 'To handle negative comments on social media, sort each one first: genuine criticism, misleading claim, troll, or abuse and threats. Reply publicly and briefly to criticism, then move the details to a private channel. Correct false claims with facts. Hide spam and abuse, and keep deletion for content that breaks your rules or the law. Never erase honest complaints.',
    },
    { type: 'h2', text: 'Step 1: Sort the comment before you answer it' },
    {
      type: 'p',
      text: 'The same sentence of anger can need four different responses. Buffer\'s guide to [social media negativity](https://buffer.com/resources/social-media-negativity/) separates fair criticism, trolls and instigators, misleading information, and harassment or threats, and recommends a different handling for each. A working version for a company page:',
    },
    {
      type: 'table',
      head: ['Type', 'How to recognise it', 'Default action'],
      rows: [
        ['Genuine complaint', 'Describes a real experience with your product, delivery or service', 'Reply in public, then take it private'],
        ['Fair criticism of your choices', 'Disagrees with a price, a policy or an ad, without insults', 'Reply once, politely; do not argue'],
        ['Misleading claim', 'States something factually wrong about you', 'Correct with a short fact and a source, aimed at readers'],
        ['Troll or bait', 'Wants a reaction, repeats, is off-topic or personal', 'Do not feed it; hide it if it persists'],
        ['Spam or scam link', 'Promotes something unrelated, or a suspicious link', 'Hide or delete, and report'],
        ['Abuse, threats, hate, personal data', 'Targets a person, or breaks the platform\'s rules or the law', 'Hide, report, ban the account, save a screenshot'],
      ],
    },
    { type: 'h2', text: 'Step 2: Reply to genuine complaints - public first, details private' },
    {
      type: 'p',
      text: 'Other people read the thread to decide whether to buy, so the public reply is written for them as much as for the complainer. Buffer advises responding to real criticism quickly, apologising, offering a solution and moving the detailed discussion to private channels. A reply in four parts works for most cases:',
    },
    {
      type: 'ol',
      items: [
        'Name the person and the issue: "Nino, thank you for telling us the order arrived late."',
        'Apologise for the experience without arguing about blame.',
        'Say the next step and its owner: "Our manager will message you today to fix it."',
        'Offer a private route: a Messenger or Instagram DM, or an email address, and keep the thread short.',
      ],
    },
    {
      type: 'p',
      text: 'Use a template for the skeleton, never the whole message. A copy-pasted reply to an angry customer reads worse than a late one. Write replies in the language of the commenter: Georgian for Georgian comments, English for English. If the complaint is justified, say so and say what you changed; if it is a misunderstanding, explain once and stop. Keep a short list of who may answer what, so a reply about a refund or a medical or legal question is never improvised. Response speed is covered in [social media community management](/blog/social-media-community-management).',
    },
    { type: 'h2', text: 'Step 3: Hide, delete or ban - what each does' },
    {
      type: 'p',
      text: 'Facebook offers several tools and they differ. Meta\'s help page on [hiding a comment](https://www.facebook.com/help/297845860255949) says a hidden comment is removed from public view but "will still be visible to the person who wrote it and their friends", and that its replies are hidden too. It can be reversed: open the post, switch the comment filter to "Hidden by This Page" and choose Unhide. [Deleting a comment](https://www.facebook.com/help/841213946569182), on the other hand, removes it from the post. Hiding is therefore the quiet option, because the author sees no change and has less reason to escalate.',
    },
    {
      type: 'table',
      head: ['Tool', 'What happens', 'Use it for'],
      rows: [
        ['Reply', 'Visible to everyone', 'Complaints, questions, corrections'],
        ['Hide', 'Gone from public view; the author and their friends still see it; can be unhidden', 'Spam, repeated trolling, abuse that you do not want to feed'],
        ['Delete', 'Removed from the post', 'Illegal content, personal data, scam links, content breaking your published rules'],
        ['Report', 'Sent to the platform for review', 'Harassment, threats, hate, impersonation, scams'],
        ['Ban or block the account', 'Stops that account interacting with the page (menus differ by platform)', 'Repeat offenders after a warning, or at once for threats'],
      ],
    },
    {
      type: 'p',
      text: 'Do not delete a complaint just because it is uncomfortable. A social media manager quoted in Buffer\'s guide calls never deleting negative comments "a bit of a golden rule", and a thread where you handled criticism well shows readers how you treat customers. Deleting a real customer\'s complaint can also push them to complain somewhere you cannot reply.',
    },
    { type: 'h2', text: 'Step 4: Set up filters before the first attack' },
    {
      type: 'ul',
      items: [
        'Profanity filter: on Facebook, Meta\'s [profanity filter page](https://www.facebook.com/help/1017549069082358) says you switch on "Hide posts and comments with profanity" under Settings & Privacy, Settings, Followers and public content. Those comments stay visible to their authors and their friends.',
        'Blocked words: Meta\'s page on [blocking words in comments](https://www.facebook.com/help/131671940241729) allows up to 1,000 keywords in any language, words, phrases or emoji. Misspellings, plurals and abbreviations are hidden automatically. The setting covers comments on content you created. Add competitor names used for spam, scam phrases and slurs. Add Georgian and Russian terms as well as English.',
        'Instagram: look in the app\'s settings for its own comment controls and word filters; menus change, so check the current screen.',
        'A written comment policy, linked in your page description: no abuse, no spam, no personal data. It gives you a fair basis for hiding or deleting.',
      ],
    },
    { type: 'h2', text: 'Step 5: Know when to stop, escalate and protect your team' },
    {
      type: 'ul',
      items: [
        'Escalate to a manager when a comment alleges something serious (safety, fraud, discrimination, a legal claim), when media or a known figure joins, or when several complaints share one cause.',
        'Do not argue in public with a troll. One factual reply to a false claim is enough for the readers; after that, leave it or hide it.',
        'Save a screenshot and the link before hiding or deleting anything involving threats, in case you need it later.',
        'Share the load. Buffer\'s guide puts the mental health of the person running the page first; rotate who reads the worst comments.',
        'Look for the pattern. Three complaints about the same delivery step are a business problem, and the fix belongs outside social media.',
      ],
    },
    { type: 'h2', text: 'A weekly routine' },
    {
      type: 'ol',
      items: [
        'Check comments and messages on every channel at least once a working day, and after any ad launches.',
        'Tag each negative comment with its type and the outcome (replied, hidden, escalated).',
        'Once a week, count them and read the pattern with the person responsible for service.',
        'Update the blocked-words list and your reply templates.',
      ],
    },
    {
      type: 'p',
      text: 'Complaints on ads need the same handling, since the page and its ads share one comment stream. If criticism also appears in search results or review sites, [online reputation management](/blog/online-reputation-management) covers monitoring and replies, and [how to get more Google reviews](/blog/how-to-get-more-google-reviews) helps balance a bad review with honest good ones. WakeUP\'s [social media management service](/services/smm) includes community management as the service page lists it. For a view of how your pages look to a customer, ask for the [free audit](/audit).',
    },
  ],
}
