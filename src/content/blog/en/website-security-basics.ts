import type { BlogPost } from '@/lib/blog'

export const post: BlogPost = {
  locale: 'en',
  slug: 'website-security-basics',
  title: 'Website security basics for a company site',
  metaTitle: 'Website Security Basics for Business',
  description:
    'Website security basics for a company site: the layers to cover, from access and updates to backups and email, and what to demand from your agency.',
  publishedAt: '2027-01-28T15:00:00+04:00',
  updatedAt: '2027-01-28T15:00:00+04:00',
  service: 'websites',
  reviewState: 'llm_reviewed',
  body: [
    {
      type: 'p',
      text: 'Website security basics come down to six layers: who can log in, whether the software is current, HTTPS, backups you have tested, forms that cannot be abused, and email authentication for your domain. A weak link in any of them can cost you the site. You do not need to be a developer to check them, and you can ask your agency or host for proof of each.',
    },
    { type: 'h2', text: 'The six layers at a glance' },
    {
      type: 'table',
      head: ['Layer', 'What good looks like', 'Who should own it'],
      rows: [
        ['Access', 'Unique long passwords, two-step sign-in, named accounts, old accounts removed', 'You, with the agency'],
        ['Updates', 'CMS, plugins, themes and packages patched on a schedule', 'Agency or host'],
        ['HTTPS', 'Every page on HTTPS, certificate renewal automatic', 'Host'],
        ['Backups', 'Automatic, stored away from the server, restore tested', 'Host or agency'],
        ['Forms', 'Spam filtering, validated input, submissions delivered to a monitored inbox', 'Agency'],
        ['Email authentication', 'SPF, DKIM and DMARC set for your sending domain', 'You and whoever runs your email'],
      ],
    },
    { type: 'h2', text: 'Access: the layer most often lost' },
    {
      type: 'p',
      text: 'A strong server does not help if someone signs in as an administrator with a reused password. The US Cybersecurity and Infrastructure Security Agency (CISA) [advises passwords](https://www.cisa.gov/secure-our-world/require-strong-passwords) that are “At least 16 characters long (more is better)” and “Used for only one account”, stored in a password manager, and paired with multifactor authentication. Microsoft reports in its own documentation that [more than 99.9% of compromised accounts](https://learn.microsoft.com/en-us/partner-center/security/security-at-your-organization) in its data did not have multifactor authentication. That is Microsoft’s finding across its customers, not a guarantee for every site, but it explains why two-step sign-in is the first thing to switch on.',
    },
    {
      type: 'ul',
      items: [
        'Give every person their own admin account. Shared logins make it impossible to know who did what and are rarely changed when someone leaves.',
        'Switch on two-step sign-in for the CMS, the hosting panel, the domain registrar and your email.',
        'Give people the lowest role they need. An editor does not need to be an administrator.',
        'Remove accounts the day a person or agency stops working with you.',
      ],
    },
    { type: 'h2', text: 'Updates: keep the software current' },
    {
      type: 'p',
      text: 'Websites built on a CMS or a framework depend on many components, and attackers scan for sites running versions with known flaws. The Open Worldwide Application Security Project (OWASP) calls its [Top 10 list](https://owasp.org/www-project-top-ten/) “the reference standard for the most critical web application security risks”, and its 2025 edition is current as of November 2026; its categories are a useful vocabulary when you ask a developer how a site is protected. The practical duty is simpler: updates are applied on a schedule, on a staging copy first for anything important, and unused plugins and themes are deleted. The weekly and monthly routine is in the [website maintenance checklist](/blog/website-maintenance-checklist), so it is not repeated here.',
    },
    { type: 'h2', text: 'HTTPS and certificates' },
    {
      type: 'p',
      text: 'Every page should load over HTTPS, and the plain HTTP address should redirect to it. A form that asks for a phone number should never sit on a page without it. Certificates expire; most hosts renew them automatically, but ask who is responsible and who is alerted if renewal fails. The [website audit checklist](/blog/website-audit-checklist) includes a quick check of this.',
    },
    { type: 'h2', text: 'Backups: a copy you have seen restore' },
    {
      type: 'p',
      text: 'The UK National Cyber Security Centre says that when you take a backup, [“it’s important you know how to restore it, and to check that it contains all your important data”](https://www.ncsc.gov.uk/collection/small-organisations-guide-to-cyber-security/backing-up-your-data). It also advises turning on 2-step verification for online backups and notes that a backup device should not stay connected to your computer when not in use. For a website, that translates into three questions:',
    },
    {
      type: 'ol',
      items: [
        'Is the backup stored somewhere other than the web server it protects? A backup on the same server is lost with it.',
        'Does it include both the files and the database?',
        'When was a restore last tested, and by whom?',
      ],
    },
    { type: 'h2', text: 'Forms: where strangers meet your site' },
    {
      type: 'p',
      text: 'A contact form accepts text from anyone, so it needs three protections: input checked on the server and not only in the browser, spam filtering that does not block real enquiries, and a reliable path for submissions to a monitored inbox. Sending the result to a personal mailbox that nobody watches is a security problem too, because you will not notice abuse. Design questions such as the number of fields are covered in [contact form best practices](/blog/contact-form-best-practices).',
    },
    { type: 'h2', text: 'Email authentication for your domain' },
    {
      type: 'p',
      text: 'If someone can send email that looks like it comes from your domain, your customers are the target. Three DNS records help protect against this: SPF, DKIM and DMARC. Google’s [email sender guidelines](https://support.google.com/a/answer/81126) require all senders to Gmail accounts to set up SPF or DKIM authentication and recommend setting up SPF, DKIM and DMARC for your domains. Senders of more than 5,000 messages a day to Gmail accounts must have all three. Even if your volume is far below that, the records protect your name and help your genuine messages reach the inbox. Ask whoever hosts your email to confirm all three are in place, and who monitors the DMARC reports.',
    },
    { type: 'h2', text: 'What to demand from a web agency or host' },
    {
      type: 'p',
      text: 'Security is easier to buy than to retrofit. Put these items in the proposal or contract and ask for written answers; the same list works for judging a new agency, as part of [choosing a web development agency](/blog/choose-web-development-agency).',
    },
    {
      type: 'ul',
      items: [
        'Ownership: the domain, hosting account and repository are registered in your company’s name, with you as the owner. See [domain vs hosting](/blog/domain-vs-hosting) for the ownership check.',
        'An update policy: how often, on what schedule, and who is accountable when something breaks.',
        'Backups: frequency, retention period, storage location and a restore test, with the date of the last one.',
        'Access: named accounts, two-step sign-in, and an offboarding process when staff or the agency changes.',
        'Staging: changes are tested on a copy before they go live.',
        'An incident plan: who you call, how fast they respond, and how you will be told if a problem is found.',
        'A handover: credentials, documentation and the code are delivered to you at the end of the project.',
      ],
    },
    {
      type: 'p',
      text: 'No agency can promise a site will never be breached, so be wary of anyone who does. A good one can show what they do, when they last did it, and how quickly they recover.',
    },
    { type: 'h2', text: 'If something looks wrong' },
    {
      type: 'ol',
      items: [
        'Change the admin, hosting and email passwords from a clean device and sign out all other sessions.',
        'Contact your host and agency; ask them to isolate the site and preserve logs.',
        'Restore from a backup taken before the problem, then update everything before putting it back online.',
        'Check where customer data may have been exposed, and take legal advice on what you must report.',
      ],
    },
    {
      type: 'p',
      text: 'WakeUP builds premium, complex websites and landing pages; the [website development](/services/website-development) page describes what is included. If you want a second pair of eyes on the site you already have, the free [marketing audit](/audit) covers your website and the path from visit to enquiry.',
    },
  ],
}
