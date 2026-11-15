import type { BlogPost } from '@/lib/blog'

export const post: BlogPost = {
  locale: 'en',
  slug: 'logo-design-process',
  title: 'Logo design process: what an agency does at each stage, and what you should receive',
  metaTitle: 'Logo Design Process, Step by Step',
  description:
    'The logo design process stage by stage - brief, research, sketches, refinement, delivery files - so you can judge what an agency should do and give you.',
  publishedAt: '2027-01-23T09:00:00+04:00',
  updatedAt: '2027-01-23T09:00:00+04:00',
  service: 'branding',
  reviewState: 'llm_reviewed',
  body: [
    {
      type: 'p',
      text: 'The logo design process at an agency runs through seven stages: a brief and discovery, research, sketching, digital refinement, presenting concepts, revisions, and delivery of files. Each stage should leave you something you can see: a signed-off brief, a research summary, two or three distinct directions, and a final file set. If a quote shows a logo with no brief, research or file list, you are buying less than the price suggests.',
    },
    {
      type: 'p',
      text: 'This guide is written for the person buying a logo, not for someone designing their own. It shows what happens at each stage, what you contribute, and what to ask for. For what a full project costs, see [how much branding costs](/blog/how-much-does-branding-cost); for how a logo differs from the wider identity, see [branding vs brand identity](/blog/branding-vs-brand-identity).',
    },
    { type: 'h2', text: 'The seven stages at a glance' },
    {
      type: 'p',
      text: 'The stages below follow the process that the design studio Made Good Designs [publishes for its own logo projects](https://madegooddesigns.com/logo-design-process/): creative brief and discovery, research and moodboarding, hand sketching, digital drafting and refinement, presenting concepts, revisions and finalising, and delivery of files and guidelines. Studios name and group the steps differently, but the order is common. The numbers it gives for how many options appear at each step (two or three moodboard directions, three or four sketches taken forward, two or three concepts presented, two revision rounds as a usual default) are one studio\'s practice, not a standard, so treat them as a starting point for your own contract.',
    },
    {
      type: 'table',
      head: ['Stage', 'What the agency does', 'What you should have afterwards'],
      rows: [
        ['1. Brief and discovery', 'Interviews you, asks about customers, competitors, tone and where the logo will appear', 'A written brief you approve'],
        ['2. Research and moodboards', 'Reviews competitors and the sector, collects visual directions', 'A short research summary or moodboard'],
        ['3. Sketching', 'Explores many rough ideas on paper or screen', 'Usually internal; ask to see the direction chosen'],
        ['4. Digital refinement', 'Builds the strongest ideas as vector drawings, tests them small and in one colour', 'Internal drafts'],
        ['5. Presentation', 'Shows a small number of distinct concepts with reasoning', 'Concepts shown in realistic uses, with the thinking behind each'],
        ['6. Revisions', 'Refines the chosen concept on your feedback', 'Revised versions and a clear record of what changed'],
        ['7. Delivery', 'Exports the final marks and guidance', 'The file set and usage rules described below'],
      ],
    },
    { type: 'h2', text: 'Stage 1 and 2: the brief and the research' },
    {
      type: 'p',
      text: 'The brief records who the company serves, how it wants to be seen, what it must not look like, where the logo will appear (a sign, an app icon, an invoice, a vehicle) and who has the final say. Without it, a logo is judged on taste, and taste differs by person.',
    },
    {
      type: 'ul',
      items: [
        'What you bring: your customers, your competitors, examples you like and dislike with reasons, and the name of the one person who approves.',
        'What to ask for: the brief in writing before design starts, and the research summary after it.',
        'Georgian context: say in the brief whether the logo needs to work as a Georgian wordmark, a Latin wordmark or both. If you only decide this after the concepts are drawn, the work is repeated. [What is branding](/blog/what-is-branding) explains why the logo should follow positioning rather than the other way round.',
      ],
    },
    { type: 'h2', text: 'Stage 3 and 4: sketching and refinement' },
    {
      type: 'p',
      text: 'Most of the thinking happens here, and little of it is shown to you. Designers explore a wide set of rough ideas, drop most of them, and draw the best few as clean vector shapes. A good test at this point is whether the mark still reads when it is very small, in one colour, and on both light and dark backgrounds. You do not need to see every sketch, but you can ask how many directions were explored and why the presented ones were chosen.',
    },
    { type: 'h2', text: 'Stage 5 and 6: concepts and revisions' },
    {
      type: 'p',
      text: 'Expect a small number of distinct concepts, not five variations of one idea. Each should come with a reason tied to the brief, and be shown where it will actually be used: on a website header, a social avatar, a business card, a sign. A logo judged only on a blank white page can look different once it sits in those places.',
    },
    {
      type: 'ul',
      items: [
        'Give feedback as problems, not solutions: "this feels too formal for our customers" is more useful than "make the font bigger".',
        'Collect comments from your team into one message, from one person. Contradictory feedback from five people makes revision rounds longer.',
        'Confirm in the contract how many revision rounds are included, and what counts as a new round.',
      ],
    },
    { type: 'h2', text: 'Stage 7: the files you should receive' },
    {
      type: 'p',
      text: 'Delivery is where gaps in the work show. The Made Good Designs process lists vector masters (AI, EPS, SVG), PNG with a transparent background and JPG, colour variants (full colour, all black, all white, single colour) and a favicon and social profile crop. Vector matters because it can be resized freely: Mozilla\'s documentation says [SVG images can be "rendered at any size without loss of quality"](https://developer.mozilla.org/en-US/docs/Web/SVG), unlike JPEG or PNG. Use this as a checklist before final payment:',
    },
    {
      type: 'table',
      head: ['Item', 'Why you need it'],
      rows: [
        ['Vector master files (for example AI or SVG, plus PDF or EPS if your printer asks)', 'Any size, from a pen to a billboard, without blur'],
        ['PNG with transparent background', 'Presentations, documents and social posts'],
        ['Colour, black, white and one-colour versions', 'Dark photos, stamps, embroidery, single-colour print'],
        ['Horizontal and stacked versions if the logo is wide', 'Header and square avatars both look right'],
        ['Favicon and social profile versions', 'Browser tab, Facebook, Instagram, LinkedIn'],
        ['Usage rules: clear space, minimum size, colours, what not to do', 'Anyone on your team or a printer can use it correctly'],
        ['Font and colour specifications, and the font licences', 'Fonts can carry licence terms; ask what you are allowed to use commercially'],
        ['Written confirmation that you own the final logo and the source files', 'You can change suppliers later without asking permission'],
      ],
    },
    {
      type: 'p',
      text: 'The usage rules are a short version of full brand guidelines. When the logo is part of a wider identity, see [how to create brand guidelines](/blog/how-to-create-brand-guidelines).',
    },
    { type: 'h2', text: 'Questions to ask before you sign' },
    {
      type: 'ul',
      items: [
        'Is there a written brief and a research step, and do I receive them?',
        'How many distinct concepts will I see, and how many revision rounds are included?',
        'Which files are delivered, and do I get the source files?',
        'Who owns the final logo, and are the fonts licensed for my use?',
        'Is the logo checked against existing marks before I commit? A logo can look original and still be too close to a registered mark. Registering the name or logo is a separate step and cost; [how much branding costs](/blog/how-much-does-branding-cost) covers it.',
        'Is this only a logo, or does the project include positioning and guidelines? If you are changing an existing identity, [how to rebrand a business](/blog/how-to-rebrand-a-business) covers the wider sequence.',
      ],
    },
    { type: 'h2', text: 'Where WakeUP fits' },
    {
      type: 'p',
      text: 'WakeUP\'s [branding and positioning service](/services/branding) covers a market and competitor review, positioning and key messages, logo and visual identity, brand guidelines and templates, and rollout to the website, social media and ads. If you want an outside view of how your current logo and identity work across your site and channels, request the [free audit](/audit).',
    },
  ],
}
