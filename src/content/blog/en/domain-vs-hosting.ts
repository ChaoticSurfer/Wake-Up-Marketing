import type { BlogPost } from '@/lib/blog'

export const post: BlogPost = {
  locale: 'en',
  slug: 'domain-vs-hosting',
  title: 'Domain vs hosting: the difference, and who should own each',
  metaTitle: 'Domain vs Hosting: The Difference',
  description:
    'Domain vs hosting: a domain is your web address, hosting is the server that stores your site. Learn who should own each and what lapses take a site down.',
  publishedAt: '2027-01-09T12:00:00+04:00',
  updatedAt: '2027-01-09T12:00:00+04:00',
  service: 'websites',
  reviewState: 'llm_reviewed',
  body: [
    {
      type: 'p',
      text: 'A domain is your web address (for example wakeup.ge); hosting is the server that stores your website\'s files and sends them to visitors. You need both for a live site, and they are usually bought from different companies. For a business, the important question is not the difference but who holds the account for each, because losing either one takes the site offline.',
    },
    { type: 'h2', text: 'What a domain is' },
    {
      type: 'p',
      text: 'MDN, Mozilla\'s web documentation, [says domain names](https://developer.mozilla.org/en-US/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_domain_name) "provide a human-readable address for any web server available on the Internet." Behind the name sits a numeric IP address, and a DNS server tells browsers which address matches which name. That mapping is stored in DNS records, which is how you point one domain at a website, an email service or both.',
    },
    {
      type: 'p',
      text: 'MDN also makes a point that surprises many owners: "You cannot \'buy a domain name\'." You pay for the right to use it for one or more years, and you "never own the domain name." Companies called registrars keep track of the connection between you and the name. Your registrar is where you renew, and the registrant listed on the registration is you or your company.',
    },
    { type: 'h2', text: 'What hosting is' },
    {
      type: 'p',
      text: 'A website is a set of files and often a database. They have to live on a computer that is always on and connected. [MDN describes](https://developer.mozilla.org/en-US/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_web_server) the hardware side of a web server as "a computer that stores web server software and a website\'s component files," and the software side, at minimum, as an HTTP server that finds the requested document and sends it back to the browser. Hosting is renting that capability from a provider, so you do not run the server yourself.',
    },
    {
      type: 'p',
      text: 'MDN says that "finding a good hosting provider is a key part of building your website." Hosting quality affects speed, uptime and security; see [how to improve website speed](/blog/how-to-improve-website-speed) for the server-side part.',
    },
    { type: 'h2', text: 'Domain vs hosting side by side' },
    {
      type: 'table',
      head: ['', 'Domain', 'Hosting'],
      rows: [
        ['What it is', 'The address people type', 'The server that stores and serves the site'],
        ['What you get', 'The right to use a name for a set period', 'Space and computing power for files and databases'],
        ['Bought from', 'A registrar', 'A hosting provider (sometimes the same company)'],
        ['Renewed', 'Usually yearly', 'Per your plan: monthly or yearly'],
        ['If it lapses', 'The address stops working', 'The site goes offline, files may be deleted'],
        ['Can it move?', 'Yes, to another registrar', 'Yes, to another host, with a site migration'],
      ],
    },
    { type: 'h2', text: 'Who should own each account' },
    {
      type: 'p',
      text: 'Both accounts should be in your company\'s name, with a company mailbox (not one employee\'s personal address) as the login and renewal contact. ICANN, the body that coordinates domain names, says in its [registrant rights and responsibilities](https://www.icann.org/resources/pages/benefits-2013-09-16-en) that a registrant must provide accurate contact information, keep it updated and reply to registrar inquiries, and that the registrant has sole responsibility for how they register and use the name. If a freelancer or agency registered the domain in their own name, you are not the registrant and you may have trouble proving the name is yours.',
    },
    {
      type: 'ul',
      items: [
        'Domain: registered to your company, with your company email as the contact.',
        'Hosting: an account you can log into, even if a developer manages it.',
        'Access: at least two people in the company know where both accounts are.',
        'Payment: a company card or invoice, not a former employee\'s card.',
      ],
    },
    { type: 'h2', text: 'What happens when each lapses' },
    {
      type: 'p',
      text: 'If the domain expires, the address stops resolving, and email that uses the domain can stop too. If hosting is not renewed, the server stops serving your site and, depending on the provider, may delete the files after a period. How long you have to recover an expired domain depends on the registrar and the extension. ICANN says registrants are entitled to accurate, accessible instructions from their registrar on how to register, manage, transfer, renew and restore a name, so read your registrar\'s terms rather than assuming a grace period.',
    },
    {
      type: 'p',
      text: 'The most reliable protection is automatic renewal. ICANN notes registrants can choose auto-renewal, in which case they must keep payment details current: an expired card is the usual reason an auto-renewal fails. Our [website maintenance checklist](/blog/website-maintenance-checklist) puts renewal dates and notice recipients on a yearly list.',
    },
    { type: 'h2', text: 'A five-minute ownership check' },
    {
      type: 'ol',
      items: [
        'Find out which registrar holds your domain and log in. If you cannot, ask whoever set the site up for the registrar name and the registrant details.',
        'Check the expiry date and that auto-renewal is on, with a valid payment method.',
        'Find where the site is hosted and confirm you can log in or that your developer can give you access on request.',
        'Make sure the renewal notices go to a company mailbox that several people read.',
        'Write down both accounts and who can access them.',
      ],
    },
    {
      type: 'p',
      text: 'Choosing the name itself is a separate decision: see [how to choose a domain name](/blog/how-to-choose-a-domain-name), including .ge or .com. WakeUP builds premium, complex websites and landing pages; see [website development](/services/website-development). If you are not sure who owns your accounts or how the site is set up, ask for a [free audit](/audit).',
    },
  ],
}
