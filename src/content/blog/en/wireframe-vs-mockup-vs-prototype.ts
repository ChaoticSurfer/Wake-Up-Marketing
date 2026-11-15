import type { BlogPost } from '@/lib/blog'

export const post: BlogPost = {
  locale: 'en',
  slug: 'wireframe-vs-mockup-vs-prototype',
  title: 'Wireframe vs mockup vs prototype: what each is and what a client should approve when',
  metaTitle: 'Wireframe vs Mockup vs Prototype',
  description:
    'Wireframe vs mockup vs prototype explained for website clients: what each shows, what to review and approve at each step, and what feedback fits where.',
  publishedAt: '2027-02-09T09:00:00+04:00',
  updatedAt: '2027-02-09T09:00:00+04:00',
  service: 'websites',
  reviewState: 'llm_reviewed',
  body: [
    {
      type: 'p',
      text: 'A wireframe is a plain layout of a page that shows structure and content order. A mockup is a static, fully styled picture of how the page will look. A prototype is a clickable version that shows how it behaves. In a website project you approve them in that order: structure first, then visual design, then behaviour on the pages where it matters.',
    },
    { type: 'h2', text: 'The three deliverables side by side' },
    {
      type: 'p',
      text: 'UXPin\'s [prototype, wireframe and mockup comparison](https://www.uxpin.com/studio/blog/prototypes-wireframes-mockup-difference/) describes a wireframe as a low-fidelity, static layout without colour, typography or imagery, a mockup as a static and visually detailed image of the intended interface, and a prototype as an interactive simulation that lets people click and navigate before production code is written. Baymard Institute\'s [UX design process guide](https://baymard.com/learn/ux-design-process) gives matching definitions: a wireframe is "a simplified representation of a page interface that defines the layout and essential elements", and a prototype is "a draft version of a website that allows designers to test website usability and functionality in real time".',
    },
    {
      type: 'table',
      head: ['', 'Wireframe', 'Mockup', 'Prototype'],
      rows: [
        ['What it is', 'Grey layout of blocks and text slots', 'Static picture with real colours, type, images and spacing', 'Clickable model of the pages and flows'],
        ['Answers', 'Is the page in the right order? Is anything missing?', 'Does it look like our brand? Is it clear and attractive?', 'Does it work? Can a visitor complete the task?'],
        ['You can click it?', 'No', 'No', 'Yes'],
        ['Detail', 'Low', 'High', 'Low to high'],
        ['Cost of a change', 'Lowest', 'Medium', 'Depends on how much is built in it'],
      ],
    },
    {
      type: 'p',
      text: 'Fidelity and interactivity are two separate things. The Interaction Design Foundation notes that [interactive prototypes](https://ixdf.org/literature/topics/interactive-prototypes) "can have any level of fidelity from low fidelity to high fidelity". So a prototype can be a clickable grey wireframe or a near-final design that behaves like the finished site. Agencies also use the words loosely, so ask which one you are being shown.',
    },
    { type: 'h2', text: 'Step 1: Approve the wireframes - structure and content' },
    {
      type: 'p',
      text: 'Baymard calls the wireframe the site\'s scaffolding, usually grayscale, and "cheap and quick to execute". That makes it the cheapest point to change your mind. Because there are no colours or photos, the conversation stays on what the page says and in what order. The sitemap and page list that come before it are covered in [the website discovery phase](/blog/website-discovery-phase).',
    },
    { type: 'p', text: 'What to check in a wireframe:' },
    {
      type: 'ul',
      items: [
        'Is the main offer clear within the first screen, and is there one obvious next step?',
        'Is every piece of content you promised there, in an order your buyer would follow?',
        'Where do the form, phone number or messaging button sit on each page type?',
        'Are the complex pages covered (a catalogue, a calculator, a booking step), not just the home page?',
        'Do the page types match what your sales team says buyers ask for?',
      ],
    },
    {
      type: 'p',
      text: 'Feedback that fits here: content, order, missing pages, wording of headings. Feedback that does not fit yet: colours, fonts, photo choices. Park those for the next step. Approve a sitemap and the wireframes of each page type, not only a single home page.',
    },
    { type: 'h2', text: 'Step 2: Approve the mockups - the visual design' },
    {
      type: 'p',
      text: 'Baymard describes the mockup as showing "how it will look and feel when implemented". This is where your brand meets the structure: colour, typography, imagery, icons, spacing, button and form styles, usually for desktop and mobile. Judge it as a visitor would, and compare it to your brand guidelines if you have them. Our guide to the [website UX/UI design process](/blog/website-ux-ui-design-process) covers how this stage fits between structure and testing.',
    },
    {
      type: 'ul',
      items: [
        'Does it feel like your company, and would a stranger trust it within a few seconds?',
        'Is the text readable on a phone, and are buttons large enough to tap?',
        'Are real content, photos and numbers used, not placeholders, so you see how it will actually look?',
        'Do all states exist: menus, form errors, empty results, the thank-you message?',
      ],
    },
    {
      type: 'p',
      text: 'Approving a mockup is the point where changes become expensive, because developers build from it. Move structure requests back to the wireframe stage before you sign off, and give feedback in one consolidated list from one person, as suggested in [the website project timeline](/blog/website-project-timeline).',
    },
    { type: 'h2', text: 'Step 3: Review the prototype where behaviour matters' },
    {
      type: 'p',
      text: 'Not every site needs a prototype of every page. A simple brochure site is usually clear from wireframes and mockups. A prototype earns its cost where the experience depends on interaction: multi-step forms, product filters, calculators, booking flows, a mega-menu, animated sections. The Interaction Design Foundation says interactive prototypes give a shared "picture of what the product will work and look like" and "make it easier for designers, developers, and stakeholders to communicate and avoid misunderstandings".',
    },
    {
      type: 'p',
      text: 'When you review one, do not just look at it - use it. Ask a person who has not seen the project to complete a real task, such as requesting a quote, and watch where they hesitate. That is the point of a prototype: finding problems while fixing them is still cheap. WakeUP builds premium, complex websites and landing pages, which is exactly where interaction needs to be agreed before the build; see the [website development service](/services/website-development).',
    },
    { type: 'h2', text: 'A simple approval path for a website project' },
    {
      type: 'table',
      head: ['Order', 'You review', 'You are approving', 'Not the time to discuss'],
      rows: [
        ['1', 'Sitemap and wireframes', 'Pages, content order, where actions sit', 'Colours, photography'],
        ['2', 'Mockups (desktop and mobile)', 'Look and feel, brand, readability', 'Adding new pages or sections'],
        ['3', 'Prototype of the complex flows', 'How forms, filters and interactive parts behave', 'Rewriting page copy'],
        ['4', 'Built pages on a test address', 'That the build matches what you approved', 'New ideas that were not in the approved designs'],
      ],
    },
    { type: 'h2', text: 'Mistakes clients make' },
    {
      type: 'ul',
      items: [
        'Skipping the wireframe review because it "looks unfinished", then asking for structural changes on mockups.',
        'Giving feedback from several people separately, which sends the designer in different directions.',
        'Approving mockups with placeholder text and photos, then being surprised by real content.',
        'Treating a prototype as the finished site and assuming everything in it is built.',
        'Sending feedback on taste ("make it pop") rather than on the goal ("the quote button is hard to find").',
      ],
    },
    {
      type: 'p',
      text: 'Before you start, ask your supplier which of these three they produce, and what you approve at each one. A clear answer is a good sign; a vague one is worth following up. The [website RFP and brief](/blog/website-rfp-and-brief) guide helps you ask. If you want an outside view of your current site before a redesign, request the [free audit](/audit).',
    },
  ],
}
