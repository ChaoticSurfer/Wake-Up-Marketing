import type { BlogPost } from '@/lib/blog'

export const post: BlogPost = {
  locale: 'en',
  slug: 'hashtags-for-business',
  title: 'How to use hashtags for business: how many, which kinds, and what to do for Georgian-language posts',
  metaTitle: 'How to Use Hashtags for Business',
  description:
    'How to use hashtags for business: a few relevant tags per post, a mix of topic, location and branded tags, platform limits, and how to test Georgian ones.',
  publishedAt: '2027-01-06T18:00:00+04:00',
  updatedAt: '2027-01-06T18:00:00+04:00',
  service: 'smm',
  reviewState: 'llm_reviewed',
  body: [
    {
      type: 'p',
      text: 'To use hashtags for business, add a small number of tags that describe the post\'s topic, your location and your brand, instead of a long block of popular ones. Tags help people who search for or follow a topic find your post. They do not make a weak post reach more people, so write the post first and the tags second.',
    },
    { type: 'h2', text: 'What hashtags do and do not do' },
    {
      type: 'p',
      text: 'A hashtag turns a word into a link to a feed or a search page on the platform. Its use is categorisation: it tells the platform and the reader what the post is about. It is not a reach button. Instagram\'s own advice points the same way: in December 2025 its creators account announced, as reported by [Social Media Today](https://www.socialmediatoday.com/news/instagram-implements-new-limits-on-hashtag-use/808309/), that "Instagram will gradually update the number of hashtags that you can include in a caption for a reel or post to five," saying that fewer, more targeted tags can improve performance. The rollout was gradual, so check what your own app allows.',
    },
    { type: 'h2', text: 'How many hashtags per post' },
    {
      type: 'p',
      text: 'The number depends on the platform, and the platforms change their rules, so use the limit as a ceiling and relevance as the guide.',
    },
    {
      type: 'table',
      head: ['Platform', 'What the platform documents', 'A sensible habit'],
      rows: [
        ['Instagram', 'Up to five in a reel or post caption, being rolled out gradually (Instagram creators account, December 2025)', 'Use two to five specific tags and stop there'],
        [
          'YouTube',
          'Over 60 hashtags on a video and YouTube ignores all of them; up to three appear above the title; many tags make each one less relevant ([YouTube Help](https://support.google.com/youtube/answer/6390658))',
          'Two or three in the description, plus the topic in the title where it reads naturally',
        ],
        ['Facebook, LinkedIn, TikTok', 'Check the platform\'s current help pages; the limits and the way tags are displayed differ and change', 'One to three topic tags; do not copy an Instagram block'],
      ],
    },
    { type: 'h2', text: 'Which kinds of hashtags to use' },
    {
      type: 'p',
      text: 'Think in four kinds, and use one or two of each, not all of them on every post.',
    },
    {
      type: 'ul',
      items: [
        'Topic tags that name what the post is about, such as the product category or the problem it solves. These are the tags people are most likely to follow or search.',
        'Location tags that fit a local business: the city or district, written the way your customers write it.',
        'Branded tags: your company name, a campaign or a slogan. They collect all your content in one place and make it easy for customers to tag you back.',
        'Community or event tags for an event, a trade fair or a conference you attend. These matter for a short period, then drop them.',
      ],
    },
    {
      type: 'p',
      text: 'Avoid the broadest tags with millions of posts: yours is buried in minutes. Avoid tags unrelated to the post: they send the wrong people to it. Over-tagging can also backfire: YouTube ignores every hashtag on a video that has more than 60, as the table above shows.',
    },
    { type: 'h2', text: 'Hashtags for Georgian-language posts' },
    {
      type: 'p',
      text: 'If you post in Georgian, perhaps with Russian or English for foreign customers, advice written for English-language accounts may not hold for you, so test it instead of assuming.',
    },
    {
      type: 'ol',
      items: [
        'Search the Georgian-script version of your tag in the platform\'s search. If it returns real posts from real accounts, it is in use. If it returns almost nothing, nobody follows it.',
        'Search the Latin version, or the English one, the same way. Many Georgian accounts mix scripts, so the more used spelling may be the Latin one.',
        'Compare the two on a small sample: use one version on some posts and the other on similar posts for a month, and compare reach and profile visits in the platform\'s analytics.',
        'Keep your branded tag in one spelling only, so every post lands in the same feed.',
        'Write tags in one script each. A tag mixing Georgian and Latin letters splits into separate searches.',
      ],
    },
    {
      type: 'p',
      text: 'There is no ready list of "best Georgian hashtags" to copy, and one would age fast. A short list you built and checked yourself for your product and city is worth more.',
    },
    { type: 'h2', text: 'Make a branded hashtag work' },
    {
      type: 'ul',
      items: [
        'Keep it short, unique and easy to type on a phone.',
        'Put it in your bio, on receipts or packaging, in your Stories and on your website, so customers have a reason to use it.',
        'Use it consistently on your own posts first. A campaign tag nobody sees does nothing.',
        'Check it before launch: search the tag to see that it is not already used for something unrelated.',
        'Look at it monthly: how many posts carry it, and are they from customers or only from you?',
      ],
    },
    { type: 'h2', text: 'Where to put them and how to check what works' },
    {
      type: 'p',
      text: 'Put the tags at the end of the caption or in the first comment, and keep the first lines of the caption for the reader. Then use the numbers the platform gives you: where the post\'s reach came from, if the platform\'s insights for that post show it, compared with your followers and other sources. If hashtags bring very little, spend the effort on the hook and the caption, as covered in the guides to [Instagram Reels for business](/blog/instagram-reels-for-business) and the [Instagram marketing strategy](/blog/instagram-marketing-strategy).',
    },
    {
      type: 'p',
      text: 'For a month of posts planned in advance, see how to build a [social media content calendar](/blog/social-media-content-calendar). WakeUP\'s [social media management](/services/smm) covers channel strategy, content, Reels and short video, and a monthly report in reach, leads and sales. For short video made for these channels, see [video production](/services/video-production). To see what your current social and ad setup brings in, request the [free marketing audit](/audit).',
    },
  ],
}
