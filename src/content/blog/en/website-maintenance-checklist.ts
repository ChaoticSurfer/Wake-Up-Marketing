import type { BlogPost } from '@/lib/blog'

export const post: BlogPost = {
  locale: 'en',
  slug: 'website-maintenance-checklist',
  title: 'Website maintenance checklist: what to do weekly, monthly and yearly, and who does it',
  metaTitle: 'Website Maintenance Checklist',
  description:
    'A website maintenance checklist by frequency: updates, backups, security, speed and content, with who should do each task. Use it to plan the year.',
  publishedAt: '2026-12-31T12:00:00+04:00',
  updatedAt: '2026-12-31T12:00:00+04:00',
  service: 'websites',
  reviewState: 'llm_reviewed',
  body: [
    {
      type: 'p',
      text: 'A website maintenance checklist covers five recurring jobs: updates, backups, security, speed and content. Weekly you back up, apply updates and check that forms deliver. Monthly you test speed and review analytics. Quarterly you check links, accounts, certificates and the buying path, and yearly you review hosting, domain renewals, legal text and the content itself. Some of it your own team can do. The technical parts belong with a developer.',
    },
    { type: 'h2', text: 'What website maintenance includes' },
    {
      type: 'p',
      text: 'Maintenance is the upkeep that keeps a finished site working: nothing new is built, but nothing quietly breaks. Four things drift if nobody looks. Software ages and gets security patches. Content goes out of date. Third-party pieces such as forms, payment links and tracking stop working after a change elsewhere. And the pages that used to be quick get heavier with every image and script added.',
    },
    {
      type: 'p',
      text: 'The checklists below are sorted by how often each task repeats, and each row says who should own it. "Staff" means someone in your company who has access to the content and the analytics. "Developer" means whoever built or runs the site, in-house or external. "Host" means tasks your hosting provider can usually do or automate, which you should confirm in writing.',
    },
    { type: 'h2', text: 'Weekly tasks' },
    {
      type: 'table',
      head: ['Task', 'Why it matters', 'Who'],
      rows: [
        ['Run a backup, or confirm the automatic one succeeded', 'Without a restorable copy, a failed update or an attack can cost the site', 'Developer or host'],
        ['Apply security and software updates (CMS, plugins, packages)', 'Outdated components are a common way into a site', 'Developer'],
        ['Send a test enquiry through every form and check it arrives', 'A broken form loses leads without any error on screen', 'Staff'],
        ['Look at the traffic and enquiry numbers for sudden drops', 'A drop is the first sign something broke', 'Staff'],
        ['Moderate comments and remove spam', 'Spam links damage trust and add risk', 'Staff'],
      ],
    },
    {
      type: 'p',
      text: 'On backups, the [WordPress developer documentation](https://developer.wordpress.org/advanced-administration/security/backup/) says there are two parts to back up, the database and the files, and that "You need both to be able to fully restore a typical WordPress site." It suggests weekly backups for small sites with few posts and daily for high-activity sites, always one before an upgrade, and keeping at least 3 to 5 recent copies in different places. The advice is written for WordPress, but the logic applies to any site: store the copies away from the server that runs the site, and restore one into a test environment once a year to prove it works.',
    },
    { type: 'h2', text: 'Monthly tasks' },
    {
      type: 'table',
      head: ['Task', 'Why it matters', 'Who'],
      rows: [
        ['Test speed on your five most important pages, on a phone', 'Speed degrades slowly as content and scripts are added', 'Developer'],
        ['Review errors reported by Google Search Console and your hosting dashboard', 'Server errors and indexing problems show up there first', 'Developer or staff'],
        ['Publish or refresh at least one page or post', 'Stale content tells visitors the company may be inactive', 'Staff'],
        ['Check uptime and any alerts from the last month', 'Short outages go unnoticed without monitoring', 'Host or developer'],
        ['Review user accounts and remove people who have left', 'Old logins are an easy way in', 'Staff'],
      ],
    },
    {
      type: 'p',
      text: 'Google\'s documentation on [HTTP status codes and network errors](https://developers.google.com/search/docs/crawling-indexing/http-network-errors) explains why server errors matter beyond visitors. It says 5xx and 429 errors prompt Google\'s crawlers to temporarily slow down, and that for 500, 502 and 503 it reduces the crawl rate in proportion to how many URLs return errors. Once the server returns a normal response again, Google gradually raises the rate. So a short outage recovers, but server errors across many URLs reduce how much of your site Google crawls while they last. Speed work itself is covered in [how to improve website speed](/blog/how-to-improve-website-speed).',
    },
    { type: 'h2', text: 'Quarterly tasks' },
    {
      type: 'table',
      head: ['Task', 'Why it matters', 'Who'],
      rows: [
        ['Crawl the site for broken links and fix or redirect them', 'Dead links frustrate visitors; removed pages should lead somewhere useful', 'Developer or staff'],
        ['Check the SSL certificate renewal and expiry date', 'An expired certificate shows a browser warning in front of your site', 'Host or developer'],
        ['Change shared passwords and review two-factor sign-in', 'Limits the damage from leaked credentials', 'Staff and developer'],
        ['Remove unused plugins, themes and old test pages', 'Every unused component is a possible entry point and a slowdown', 'Developer'],
        ['Test the full buying or booking path, including payment', 'Checkout bugs cost money straight away', 'Staff'],
        ['Check the tracking tags and conversion events still fire', 'Without them, you cannot judge which marketing works', 'Developer or marketing'],
      ],
    },
    {
      type: 'p',
      text: 'On certificates, the [Let\'s Encrypt FAQ](https://letsencrypt.org/docs/faq/) states that its certificates are valid for 90 days and recommends renewing them every 60 days. Most hosts renew automatically, so the quarterly job is to confirm the renewal is actually happening, not to do it by hand.',
    },
    { type: 'h2', text: 'Yearly tasks' },
    {
      type: 'ul',
      items: [
        'Confirm that the domain registration and hosting plan renew, and who receives the renewal notices. Use a company mailbox, not one employee\'s address.',
        'Review the privacy text, cookie notice and other legal pages for the services you actually use now.',
        'Re-read the home, about, service and contact pages against how the business works today: team, offers, addresses and phone numbers.',
        'Run a content review: update, merge or remove pages that no longer serve a purpose. The [small business website mistakes](/blog/small-business-website-mistakes) post lists common problems to look for.',
        'Test a restore from backup into a safe environment.',
        'Decide whether the site still fits the business. If it needs more than upkeep, use the [website redesign checklist](/blog/website-redesign-checklist).',
      ],
    },
    { type: 'h2', text: 'Who should do the maintenance' },
    {
      type: 'p',
      text: 'Split it by skill, not by convenience. Your team can own anything that needs business knowledge and a browser: form tests, content updates, account clean-up, reading the numbers. Updates, backups, restore tests, security fixes and speed work need a developer who can touch the code and the server. Put the weekly and monthly developer tasks in writing, with a named person and a response time, whether that person is an employee or an outside team.',
    },
    {
      type: 'p',
      text: 'If the people who built your site are no longer available, ask for access to the repository or CMS, the hosting account and the domain before something goes wrong, since the company should own all three. WakeUP builds premium, complex websites and landing pages; the [website development service](/services/website-development) page describes the build, and ongoing optimisation is part of its Growth plan. For a view of how your current site, ads and sales process are working, request the [free marketing audit](/audit).',
    },
  ],
}
