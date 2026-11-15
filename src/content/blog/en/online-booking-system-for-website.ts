import type { BlogPost } from '@/lib/blog'

export const post: BlogPost = {
  locale: 'en',
  slug: 'online-booking-system-for-website',
  title: 'Online booking system for a website: link, embed or custom?',
  metaTitle: 'Online Booking System for Website',
  description:
    'Online booking system for website: compare a link, an embed and a plugin or custom flow, what to configure, and when custom booking pays off.',
  publishedAt: '2027-02-03T09:00:00+04:00',
  updatedAt: '2027-02-03T09:00:00+04:00',
  service: 'websites',
  reviewState: 'llm_reviewed',
  body: [
    {
      type: 'p',
      text: 'An online booking system for a website can be added in three ways: a link to a hosted booking page, an embed of that page inside your own, or a plugin or custom-built flow that lives in the site itself. Start with a link or embed. Move to a plugin or custom flow only when your rules, payments or data outgrow what a hosted tool does.',
    },
    { type: 'h2', text: 'Three ways to add booking' },
    {
      type: 'table',
      head: ['Way', 'How it works', 'Good for', 'Watch out for'],
      rows: [
        ['Link', 'A button on your site opens the booking page of a scheduling tool', 'One service, one calendar, a fast start', 'Visitors leave your site and the page carries the tool\'s look'],
        ['Embed', 'The tool\'s booking page appears inside your page, inline or as a pop-up', 'Keeping visitors on your page with little work', 'Page speed, mobile layout and limited styling'],
        ['Plugin or custom', 'Booking is part of the site: a plugin for your platform, or a flow built for you', 'Several staff, locations, payments, packages or your own rules', 'Cost, upkeep and who owns the data'],
      ],
    },
    {
      type: 'p',
      text: 'Vendors label these options differently. The real question is how much of the booking process you need to control.',
    },
    { type: 'h2', text: 'Option 1: a booking link' },
    {
      type: 'p',
      text: 'The simplest setup is a scheduling tool and a link. Google Calendar is a good example of how little this needs. Its help page on [appointment schedules](https://support.google.com/calendar/answer/10729749) says each schedule has a booking page and that you share its link for people to book. It supports personal Google Accounts and Workspace accounts, and a schedule has to be created on a computer, not in the mobile app.',
    },
    {
      type: 'p',
      text: 'Put the link where a customer decides to act: the header or menu, the page of each service, the contact page, and your email signature. Name the button after the result, such as "Book a consultation" or "Reserve a table", not "Click here". Check the link on a phone, because most visitors will use one.',
    },
    { type: 'h2', text: 'Option 2: an embed' },
    {
      type: 'p',
      text: 'Most scheduling tools give you a snippet of code that shows the booking page on yours. Calendly\'s [embed options](https://calendly.com/help/embed-options-overview) show the usual three variants: an inline embed that appears in the page content, a pop-up text link that opens the scheduler in an overlay, and a pop-up widget, a floating button that opens it. Other tools offer similar choices.',
    },
    {
      type: 'ul',
      items: [
        'Inline suits a dedicated "Book" page where booking is the whole point.',
        'A pop-up text link suits service pages, where booking is one option among others.',
        'A floating button follows the visitor on every page. Use it only if booking is your main goal, because it covers content on small screens.',
      ],
    },
    { type: 'h2', text: 'Option 3: a plugin, or a custom flow' },
    {
      type: 'p',
      text: 'A plugin adds booking to a platform such as WordPress and keeps the data in your own site. It can look more like the rest of the page than an embed does, but it adds code you must keep updated, and you depend on the plugin\'s author for fixes. A custom flow is built for your site and your rules, and stored where you decide. It costs more to build and to maintain, so the next sections explain how to tell when it is worth it.',
    },
    { type: 'h2', text: 'What to configure, whichever you choose' },
    {
      type: 'p',
      text: 'The tool matters less than the rules you give it. Google\'s appointment schedule settings are a useful checklist because they cover the usual questions:',
    },
    {
      type: 'ul',
      items: [
        'Duration of each appointment, and whether different services need different lengths.',
        'Weekly availability, and the days you want to block.',
        'The scheduling window: how far ahead people can book and the minimum notice. In Google\'s tool the default minimum notice is 4 hours; set yours to what your team can actually prepare for.',
        'Buffer time between appointments and a daily cap, so one busy day does not break the schedule.',
        'Meeting location: in person, phone or video, with the address or link in the confirmation.',
        'The booking form: ask only what you need to run the appointment, in line with [contact form best practices](/blog/contact-form-best-practices).',
        'Reminders. Google\'s schedules allow up to five reminders; check that your tool sends at least one before the appointment.',
        'A conflict check against your real calendar, so you are never booked twice.',
      ],
    },
    {
      type: 'p',
      text: 'Add three things most guides skip. Write a cancellation and reschedule rule in plain words next to the button. Say who receives each booking and who must reply when a customer needs to change it. And decide what happens to the booking after it is made: an email only, or a record in your CRM. The last point is covered in [connecting a website to a CRM](/blog/website-crm-integration).',
    },
    { type: 'h2', text: 'Check the booking widget on the page' },
    {
      type: 'ul',
      items: [
        'Speed. A booking embed is third-party code. Google\'s web.dev guide on [loading third-party JavaScript](https://web.dev/articles/optimizing-content-efficiency-loading-third-party-javascript) says embedded third-party resources "can be major contributors to slow page speed when constructed poorly". Load the embed only on the booking page, or when the visitor clicks, and measure with the tools in [how to improve Core Web Vitals](/blog/improve-core-web-vitals).',
        'Accessibility. Give an embedded frame a descriptive title. The W3C technique for the [title attribute of iframes](https://www.w3.org/WAI/WCAG22/Techniques/html/H64) says it provides a label for the frame so users can determine which frame to enter and explore in detail.',
        'Mobile. Open the booking page on a real phone, pick a date, enter fake details and read the confirmation email. Fix any step that needs zooming or sideways scrolling.',
        'Tracking. Count clicks on the booking button and completed bookings separately, so you can see where visitors drop out.',
      ],
    },
    { type: 'h2', text: 'When a custom booking flow is justified' },
    {
      type: 'p',
      text: 'A hosted tool is the right answer for many small teams. Consider a custom flow when two or more of these are true:',
    },
    {
      type: 'table',
      head: ['Signal', 'What to test in a hosted tool'],
      rows: [
        ['Booking depends on several things at once: staff, rooms, equipment, locations', 'Check whether the tool can book a person, a room and equipment together'],
        ['Prices, packages or deposits change by date, group size or customer type', 'Check whether the tool supports your pricing rules, not just a fixed price'],
        ['Booking must feed your CRM, invoicing or stock without manual copying', 'Check which integrations are included and which cost extra'],
        ['Customers need an account, a booking history or membership', 'Check whether the tool keeps a customer record you can use'],
        ['The booking journey is part of a premium brand experience', 'An embed gives you limited control of layout and wording'],
        ['Several languages or markets with their own rules', 'Check which languages the tool supports for pages and emails'],
      ],
    },
    {
      type: 'p',
      text: 'Before building, write down the booking rules on one page and test them in a hosted tool for a month. If you hit the same limit repeatedly, that limit is your specification for the custom version. If you rarely do, you were never ready to pay for custom.',
    },
    {
      type: 'p',
      text: 'WakeUP builds premium, complex websites and landing pages. See [website and landing page development](/services/website-development) for what a project covers. If you are unsure whether your current site needs more than a link, the [free marketing audit](/audit) is a way to get an outside view first.',
    },
  ],
}
