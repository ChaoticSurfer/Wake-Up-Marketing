import type { BlogPost } from '@/lib/blog'

export const post: BlogPost = {
  locale: 'en',
  slug: 'buying-backlinks-risks',
  title: 'Buying backlinks: the risks, and what a link-building service may be doing for you',
  metaTitle: 'Buying Backlinks Risks Explained',
  description:
    'Buying backlinks risks explained: what Google\'s spam policy says, what a link-building service may do for you, and safer ways to earn links.',
  publishedAt: '2027-02-13T12:00:00+04:00',
  updatedAt: '2027-02-13T12:00:00+04:00',
  service: 'seo',
  reviewState: 'llm_reviewed',
  body: [
    {
      type: 'p',
      text: 'Buying backlinks for ranking purposes breaks Google\'s spam policy. The risks are wasted money, lower rankings, and in the worst case a manual action that removes pages from results. A link-building service may buy links on your behalf, so the risk can reach you even if you never paid a seller yourself. Paid links are allowed only when they are labelled as paid.',
    },
    { type: 'h2', text: 'What Google\'s policy says' },
    {
      type: 'p',
      text: 'Google\'s [spam policies](https://developers.google.com/search/docs/essentials/spam-policies) list "buying or selling links for ranking purposes" under link spam, and extend it to exchanging money, goods or services for links. They also name excessive link exchanges, paid articles with ranking-passing links, links created by automated programs or services, and content made mainly to manipulate links.',
    },
    {
      type: 'p',
      text: 'The same policy is not against advertising. It says it is not a violation to have such links as long as they are qualified, with the rel="sponsored" or rel="nofollow" attribute. Google\'s guide to [qualifying outbound links](https://developers.google.com/search/docs/crawling-indexing/qualify-outbound-links) says to mark links that are advertisements or paid placements with sponsored. The line is therefore not paid versus free. It is paid links that pass ranking credit versus paid links that are labelled.',
    },
    { type: 'h2', text: 'The real risks' },
    {
      type: 'ul',
      items: [
        'A manual action. Google\'s [manual actions help](https://support.google.com/webmasters/answer/9044175) describes it as a response to "a pattern of unnatural, artificial, deceptive, or manipulative links pointing to your site", and says it can cover part or all of your site. The policy page adds that sites that violate it may rank lower or not appear at all.',
        'A slow clean-up. To recover, Google\'s steps are to export your links, ask site owners to remove them, disavow what you cannot get removed, and submit a reconsideration request with documentation. Google says blindly disavowing all backlinks is not a good-faith effort. This is slow, manual work.',
        'Wasted spend. Buying links is a bet that Google will not discount them. Even without a penalty, you pay for something that may not count.',
        'Reputation. A link from a site that sells placements to anyone does not look like a recommendation to a reader.',
      ],
    },
    { type: 'h2', text: 'What a link-building service may do for you' },
    {
      type: 'p',
      text: 'The question to ask any provider is what exactly happens between your payment and the link appearing. The answers fall into three groups.',
    },
    {
      type: 'table',
      head: ['What the provider does', 'Against Google\'s policy?', 'What to ask'],
      rows: [
        ['Pays site owners for followed links that pass ranking credit', 'Yes: buying links for ranking purposes', 'Which sites, what was paid, and are the links labelled sponsored?'],
        ['Uses programs or networks to generate links', 'Yes: automated links', 'How are the links created, by a person or by software?'],
        ['Places guest articles with optimised anchor text at scale', 'Yes where payment or optimised anchors are involved', 'Who wrote it, who pays, what anchor text is used?'],
        ['Pitches your content, data or experts to real publications, no payment for the link', 'No', 'Show recent placements and who accepted them'],
        ['Buys labelled adverts or sponsorships for visitors', 'No, if the link is qualified', 'Is the link marked sponsored or nofollow?'],
      ],
    },
    {
      type: 'p',
      text: 'A provider that will not name the sites, promises a fixed number of links a month, or guarantees a ranking is hiding the method. See [SEO agency red flags](/blog/seo-agency-red-flags). Put the method in writing: our guide to [SEO contract terms](/blog/seo-contract-terms) includes a clause on link methods, and a good [SEO report](/blog/what-a-good-seo-report-includes) lists where each link came from.',
    },
    { type: 'h2', text: 'What links cost, and why price is not the point' },
    {
      type: 'p',
      text: 'Ahrefs\' article on buying backlinks cites a survey by Authority Hacker of 755 link builders in which [paid links cost $83 on average](https://ahrefs.com/blog/buy-backlinks/); the article does not state the survey year. Ahrefs itself concludes: "our advice is not to buy backlinks." Prices in Georgia will differ, and a low price tells you little about quality. A cheap link and an expensive link carry the same policy risk.',
    },
    { type: 'h2', text: 'Safer ways to get links' },
    {
      type: 'p',
      text: 'The links worth having are those a reader would follow or a journalist would give unprompted. Our guide on [how to build backlinks](/blog/how-to-build-backlinks) has a 90-day plan for a company in Georgia. In short:',
    },
    {
      type: 'ul',
      items: [
        'Publish something others want to cite: original data from your own business, a clear guide, a calculator or a checklist.',
        'Get listed where your customers already look: industry bodies, chambers of commerce, partner and supplier pages, event pages.',
        'Offer local media a real story or an expert comment. Links follow from coverage; do not buy them.',
        'Buy advertising or sponsorships for the audience and mark the link as sponsored.',
        'Strengthen your own site so existing links work harder, starting with [internal linking](/blog/internal-linking-seo).',
      ],
    },
    { type: 'h2', text: 'If you have already bought links' },
    {
      type: 'ol',
      items: [
        'Check the Manual Actions report in Search Console.',
        'Export your links and list the ones you or a provider paid for.',
        'Ask the owners to remove them, or to add the sponsored attribute.',
        'Disavow only what you cannot remove, following Google\'s instructions, and keep a record of every step.',
        'Stop the purchases and change the provider or the contract.',
      ],
    },
    {
      type: 'p',
      text: 'If you want an outside view of your link profile, WakeUP offers [SEO as a service](/services/seo), and other providers do too, so ask for the method in writing from each. The [free audit](/audit) is a way to see where your site stands before you commit to anything.',
    },
  ],
}
