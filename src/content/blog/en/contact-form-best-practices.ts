import type { BlogPost } from '@/lib/blog'

export const post: BlogPost = {
  locale: 'en',
  slug: 'contact-form-best-practices',
  title: 'Contact Form Best Practices: Fields, Placement, Confirmation and Follow-Up',
  metaTitle: 'Contact Form Best Practices',
  description:
    'Contact form best practices for more enquiries: how many fields to ask, where to place the form, what to confirm and how fast to reply.',
  publishedAt: '2027-01-18T09:00:00+04:00',
  updatedAt: '2027-01-18T09:00:00+04:00',
  service: 'websites',
  reviewState: 'llm_reviewed',
  body: [
    {
      type: 'p',
      text: 'The contact form best practices that matter most are few: ask only what you need to reply usefully, label every field clearly, put the form where visitors expect it, tell people what happens after they send it, and answer fast. A form that is easy to fill but followed by a slow reply still loses the enquiry, so treat the form and the follow-up as one process.',
    },
    { type: 'h2', text: 'How many fields to ask' },
    {
      type: 'p',
      text: 'Every field is effort for the visitor. The Nielsen Norman Group\'s guidance on web forms starts with the rule "Keep it short" and advises you to [eliminate as many optional fields as possible](https://www.nngroup.com/articles/web-form-design/), limiting a form to only one or two optional ones and labelling them as optional. It gives an example of a form reduced from six fields to two.',
    },
    {
      type: 'p',
      text: 'Other vendors report bigger numbers. Wufoo, a form-builder, says that removing a field can raise conversion by up to 50%, citing HubSpot, and WPForms advises, if you can help it, never including more than three fields. Those are vendor claims about other sites, so use them as a reason to test, not as a target. The right number depends on what you must know before your first reply.',
    },
    {
      type: 'table',
      head: ['Business', 'Fields that usually earn their place', 'Ask later, on the call or in the reply'],
      rows: [
        ['Services firm (consulting, cleaning, legal)', 'Name, email or phone, short message', 'Budget, company size, deadline'],
        ['Clinic or training centre', 'Name, phone, service of interest', 'Preferred time, history'],
        ['Construction, interiors, events', 'Name, phone, project type and location', 'Dimensions, detailed brief'],
        ['B2B software or agency', 'Name, work email, one qualifying question', 'Role, tools used, timeline'],
      ],
    },
    {
      type: 'p',
      text: 'Phone number deserves a decision. If your team will call, ask for it. If you will answer by email, make it optional or drop it; Wufoo notes that people tend to abandon forms that ask for a phone number, and WPForms cites a smallfarmdesign.com study, which it reports as cutting abandonment from 39% to 4% when the phone field was made optional. Treat that as a hypothesis for your own form. When a long form is truly needed, a clinic, an insurer, say, split it into steps and keep the first step short.',
    },
    { type: 'h2', text: 'Labels, errors and autofill' },
    {
      type: 'ul',
      items: [
        'Label every field. The W3C says to [provide labels to identify all form controls](https://www.w3.org/WAI/tutorials/forms/labels/), and labels also let assistive technology tell people what each field is for. A placeholder that disappears when typing is not a substitute.',
        'On mobile and shorter forms, put the label directly above its field, as the [Nielsen Norman Group recommends](https://www.nngroup.com/articles/web-form-design/).',
        'Turn on autofill. web.dev explains that using the right values for the autocomplete attribute [ensures the browser fills in the correct values for a form](https://web.dev/learn/forms/autofill), so name, email and phone take a tap instead of typing.',
        'Show errors clearly. The same NN/g article asks for highly visible, specific error messages, not signalled by colour alone, and says erroneous input should be preserved so people can correct it. "Please enter an email like name@company.ge" beats "Invalid input".',
        'Check the form on a real phone. Many visitors will fill it with one thumb, so buttons need room and the right keyboard (numeric for phone, email layout for email).',
      ],
    },
    { type: 'h2', text: 'Where to put the form' },
    {
      type: 'p',
      text: 'Put the form where a person who has decided to contact you will look: on a Contact page linked from the main menu, and as a short version at the end of service pages. WPForms advises keeping conversion forms above the fold, in an obvious location, rather than at the very bottom of a long page where most visitors never scroll.',
    },
    {
      type: 'p',
      text: 'Show the other ways to reach you beside it - phone, WhatsApp, email, address and opening hours. Some visitors never fill in forms, and the form should not be the only door. Next to the form, add one line on who answers and when, and one proof point such as a client logo you may show. If the page exists to convert paid traffic, the rules differ; see [lead generation landing pages](/blog/lead-generation-landing-pages).',
    },
    { type: 'h2', text: 'What happens after the visitor clicks send' },
    {
      type: 'p',
      text: 'The moment after sending is where a visitor decides whether it worked. Wufoo recommends sending each person to a confirmation page that states the next step, such as "Expect a call within the hour", rather than leaving them in the dark. Do the same by email.',
    },
    {
      type: 'ol',
      items: [
        'Show a separate thank-you page (or a visible message) that says the enquiry was received and when they will hear from you. Only promise what your team can keep.',
        'Send an automatic email within a minute with a copy of the message, the name of who will reply, and a phone number for urgent cases.',
        'Notify your team instantly in the channel they already watch - email, a chat group or the CRM - and assign one owner, so two people do not reply or no one does.',
        'Give the thank-you page a distinct address so your analytics can count completed enquiries, as covered in [lead generation landing pages](/blog/lead-generation-landing-pages).',
      ],
    },
    { type: 'h2', text: 'Follow-up speed' },
    {
      type: 'p',
      text: 'Wufoo says the ideal response time to a form enquiry is [less than 5 minutes](https://www.wufoo.com/blog/how-to-build-the-best-contact-form/). That is a vendor\'s view, and few small teams can promise it all day, but the direction is sound: the person is thinking about the problem now. Decide a standard you can meet - for example, a first reply within one working hour - write it on the form, and measure it.',
    },
    {
      type: 'ul',
      items: [
        'Measure minutes from submission to first human reply, every week.',
        'For enquiries outside working hours, an automatic reply that sets a time ("we reply by 10:00 tomorrow") is better than silence.',
        'Route by topic if you sell different things, so the right person sees the message first.',
        'Review what happens to enquiries after the first reply. Where a form stops and sales starts is the subject of [marketing and sales alignment](/blog/marketing-and-sales-alignment).',
      ],
    },
    { type: 'h2', text: 'Test and fix, one change at a time' },
    {
      type: 'p',
      text: 'Track three numbers: visits to the contact page, submissions, and the share of submissions that become a real conversation. Change one thing at a time - remove a field, reword the button from "Submit" to what the visitor gets, move the form - and give each change enough weeks to show a difference. A change that raises submissions but fills your inbox with unusable enquiries is not a win.',
    },
    {
      type: 'p',
      text: 'Spam is a trade-off too. CAPTCHA puzzles add friction for real visitors, and WPForms reports, with a link to Moz, that they can cost around 3% of conversions; invisible checks, such as a hidden field that only bots fill in, add no work for people, so try those first and test how much spam still gets through. If your form is part of a site that needs a redesign, [small business website mistakes](/blog/small-business-website-mistakes) lists the other problems to look for.',
    },
    {
      type: 'p',
      text: 'WakeUP builds premium, complex websites and landing pages, with forms connected to email or a CRM and conversion tracking set up from the start - see [website development](/services/website-development). To find out what is stopping enquiries on your current site, request a [free marketing audit](/audit).',
    },
  ],
}
