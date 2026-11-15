import type { BlogPost } from '@/lib/blog'

export const post: BlogPost = {
  locale: 'en',
  slug: 'what-to-put-on-a-homepage',
  title: 'What to put on a homepage: a section-by-section structure for a company site',
  metaTitle: 'What to Put on a Homepage',
  description:
    'What to put on a homepage, in order: header, hero, proof, services, process, final call to action and footer. A section-by-section guide for company sites.',
  publishedAt: '2027-02-01T15:00:00+04:00',
  updatedAt: '2027-02-01T15:00:00+04:00',
  service: 'websites',
  reviewState: 'llm_reviewed',
  body: [
    {
      type: 'p',
      text: 'What to put on a homepage, in order: a header with clear navigation, a hero that states what you do and for whom with one main action, proof, a short overview of your services, how working with you goes, a few reasons to choose you, a final call to action and a footer with contact details. Each section answers one question a new visitor has, in the order they ask it.',
    },
    {
      type: 'p',
      text: 'This post is about one page. For the full list of pages a company site needs, see [pages a business website needs](/blog/pages-a-business-website-needs); for the difference between a homepage and a campaign page, [landing page vs website](/blog/landing-page-vs-website).',
    },
    { type: 'h2', text: 'The job of a homepage' },
    {
      type: 'p',
      text: 'A homepage is where people who do not know you yet decide whether to keep going. It has to let three kinds of visitor find their way: those who are ready to contact you, those who want to look at your work first, and those who just need to confirm you are a real company. It is not the place to tell the whole company history.',
    },
    {
      type: 'p',
      text: 'Attention is limited, so order matters. Nielsen Norman Group\'s 2018 eyetracking study of 120 participants found that [57% of viewing time is spent above the fold](https://www.nngroup.com/articles/scrolling-and-attention/), the part visible without scrolling. Its conclusion: "people still spend most of their viewing time in the top part of a page." People do scroll, but the first screen sets their opinion. Earlier analysis of web-use data by Jakob Nielsen at NN/g (2008) found that [users read at most 28% of the words on an average page visit](https://www.nngroup.com/articles/how-little-do-users-read/), and 20% is the more likely figure. So write short, and put the most important thing first.',
    },
    { type: 'h2', text: 'The sections, in order' },
    {
      type: 'table',
      head: ['Section', 'Question it answers', 'What goes in it'],
      rows: [
        ['Header', 'Where am I, and where can I go?', 'Logo, five to seven menu items, a contact or "get a quote" button, language switch if the site has more than one language'],
        ['Hero', 'What is this and is it for me?', 'A headline naming what you do and who for, one supporting sentence, one primary button, one image or short video of the real work'],
        ['Proof strip', 'Can I trust you?', 'Client logos you have permission to show, a headline number you can back up, a review rating with its source'],
        ['What you offer', 'What exactly do you do?', 'Three to six services, each a name, one line and a link to its page'],
        ['How it works', 'What happens if I contact you?', 'Three to five steps from first call to result, in plain words'],
        ['Case studies or work', 'Have you done this before?', 'Two or three selected projects with one result each, linking to full stories'],
        ['Why you', 'Why you and not another company?', 'Two to four specific differences that are true and checkable'],
        ['Final call to action', 'What do I do now?', 'The same action as the hero, repeated, with a short form or phone number'],
        ['Footer', 'Is this a real business?', 'Address, phone, email, legal name, social links, privacy policy'],
      ],
    },
    { type: 'h2', text: 'Header and hero: the first screen' },
    {
      type: 'p',
      text: 'The hero does most of the work. Say what you do and for whom in words a buyer would use, not a slogan. "We help manufacturers in Georgia get qualified enquiries from Google" tells a visitor more than "Growth, reimagined". Add one button for the action you most want, and avoid giving four equal options. Use a real photo or video of your work, team or product; a generic stock image tells the visitor nothing.',
    },
    {
      type: 'p',
      text: 'Keep the navigation short and use the labels visitors expect: services, work, about, contact. LogRocket\'s [list of homepage principles](https://blog.logrocket.com/ux-design/essential-principles-good-homepage) makes several of the same points: display the company name and logo prominently, state the value proposition clearly, make the highest-priority task the main focus, and place the most critical element above the fold.',
    },
    { type: 'h2', text: 'Proof: show it early, and make it checkable' },
    {
      type: 'p',
      text: 'Visitors look for evidence before they read your pitch. A client name with a link beats "trusted by leading companies". Place a short proof strip right under the hero, then a fuller case study or work section further down. The choice of signals, and where to place them, is covered in [website trust signals](/blog/website-trust-signals). If you do not have a case study yet, [how to write a case study](/blog/how-to-write-a-case-study) walks through making one. Only show logos, numbers and reviews that you can back up.',
    },
    { type: 'h2', text: 'Services, process and reasons to choose you' },
    {
      type: 'p',
      text: 'Do not put the whole services page on the homepage. Give each service a name, one line on the problem it solves and a link. Then explain what happens next: a three-to-five step process makes contacting you feel low-risk. The "why you" block works only if each point is specific. "Senior team" is vague; "every project has one named account manager" is a claim a buyer can test, as long as it is true.',
    },
    { type: 'h2', text: 'Final call to action and footer' },
    {
      type: 'p',
      text: 'A visitor who has scrolled to the bottom is interested, so do not make them scroll back up. Repeat the main action with a short form or a phone number; [contact form best practices](/blog/contact-form-best-practices) explains how many fields to ask for. The footer repeats the facts that make you look real: company name, address, phone, email and policies.',
    },
    { type: 'h2', text: 'What to leave off' },
    {
      type: 'ul',
      items: [
        'Auto-rotating banners that hide content behind a timer.',
        'A long "about us" story; give it its own page and link it.',
        'Every service in full detail; link to the service pages instead.',
        'Pop-ups that cover the page in the first seconds.',
        'Claims you cannot support, such as "the best" or "number one", with no source.',
        'Heavy animation that slows the first screen. Page speed matters to every visitor.',
      ],
    },
    { type: 'h2', text: 'Check your own homepage' },
    {
      type: 'p',
      text: 'Show the page to someone outside the company for five seconds and ask what you do, who for, and what you would click. If they cannot say, the hero needs work. Then check that the phone number and form work, and that the page loads quickly on a phone.',
    },
    {
      type: 'p',
      text: 'WakeUP builds premium, complex websites and landing pages: structure and copy planned around what your buyers search for, design in your brand, and tracking from day one. See the [website and landing page service](/services/website-development), or send your current homepage through the [free audit](/audit).',
    },
  ],
}
