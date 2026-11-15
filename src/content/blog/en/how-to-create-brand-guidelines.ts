import type { BlogPost } from '@/lib/blog'

export const post: BlogPost = {
  locale: 'en',
  slug: 'how-to-create-brand-guidelines',
  title: 'How to create brand guidelines your team will actually use',
  metaTitle: 'How to Create Brand Guidelines',
  description:
    'How to create brand guidelines: what goes in the document (logo, colour, type, voice, do and don\'t) and how to make a brand book the team uses.',
  publishedAt: '2027-01-15T12:00:00+04:00',
  updatedAt: '2027-01-15T12:00:00+04:00',
  service: 'branding',
  reviewState: 'llm_reviewed',
  body: [
    {
      type: 'p',
      text: 'To create brand guidelines, write one document that tells anyone who makes something for your company how it should look and sound: logo rules, colours, fonts, imagery, tone of voice, and examples of what is right and wrong. Build it from decisions you have already made, keep it short enough to read in ten minutes, and store it where the team works. A guideline nobody opens is not a guideline.',
    },
    {
      type: 'p',
      text: 'This post is about the document itself. If you are still deciding what your brand stands for, start with [what is branding](/blog/what-is-branding) and [branding vs brand identity](/blog/branding-vs-brand-identity); brand guidelines write those decisions down. They are also what you hand over at the end of a [rebrand](/blog/how-to-rebrand-a-business).',
    },
    { type: 'h2', text: 'What goes into brand guidelines' },
    {
      type: 'p',
      text: 'Agency guides vary in length, but they cover the same ground. The design studio Canny Creative [splits brand guidelines into brand strategy and visual identity](https://www.canny-creative.com/blog/creating-brand-guidelines/): strategy covers audience, positioning, story, values, mission and tone of voice; visual identity covers the logo and its variations, spacing, typography, colours, imagery and social media assets. Filestage\'s guide [adds channel-specific examples and templates](https://filestage.io/blog/brand-guidelines/) so the rules are shown, not only described.',
    },
    {
      type: 'table',
      head: ['Section', 'What to write', 'Check that it answers'],
      rows: [
        ['Brand basics', 'Who you serve, what you promise, three to five values, one-line positioning', 'Why would someone choose us?'],
        ['Logo', 'Versions (full, compact, one-colour, reversed), clear space, minimum size, backgrounds it may sit on', 'Can a supplier place it without asking us?'],
        ['Colour', 'Primary and secondary palette with HEX for screens, RGB and CMYK for print, approved pairings', 'Which colour goes on a button, and which on a poster?'],
        ['Typography', 'Heading and body fonts, sizes, weights, fallbacks for email and documents', 'What do we use when the brand font is not installed?'],
        ['Imagery', 'Photo style, illustration or icon style, what to avoid', 'Would this photo look like ours?'],
        ['Voice and tone', 'Voice in three adjectives, how tone shifts by situation, words to use and avoid, sample sentences', 'How do we sound to an angry customer?'],
        ['Applications', 'Website, social media, presentations, printed materials, signage, email signature', 'What does a finished example look like?'],
        ['Do and don\'t', 'Correct and incorrect examples side by side', 'What are the five most common mistakes?'],
        ['Contacts and files', 'Who approves exceptions, where the logo files and templates live', 'Whom do I ask?'],
      ],
    },
    { type: 'h2', text: 'Make decisions testable' },
    {
      type: 'p',
      text: 'Vague rules cause disputes. "Use our colours with good contrast" tells nobody anything; a rule they can check does. The Web Content Accessibility Guidelines (WCAG) from the W3C, in [success criterion 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html), ask for a contrast ratio of at least 4.5:1 for normal text and at least 3:1 for large text, defined as at least 18 point or 14 point bold. Test your approved text and background pairings against these numbers and list only the passing ones.',
    },
    {
      type: 'p',
      text: 'Do the same for voice. Mailchimp publishes its style guide, which describes its voice in one short line - ["We are plainspoken"](https://styleguide.mailchimp.com/voice-and-tone/) - and notes that its tone changes with the emotional state of the person being addressed. Both ideas transfer to a smaller company: pick a voice you can describe in a line, then say how it shifts between a sales email and an apology.',
    },
    {
      type: 'ul',
      items: [
        'Give measurements, not adjectives: "clear space equal to the height of the letter O", "minimum width 24 mm or 120 px".',
        'Show a wrong example next to every rule that people break.',
        'Write sample sentences for the voice: one headline, one reply to a complaint, one social caption.',
        'For Georgian and English, state the font that supports both scripts, and check Georgian letters render in every font you approve. Georgian is a separate typographic case, so do not assume a Latin-only brand font covers it.',
      ],
    },
    { type: 'h2', text: 'A simple process to build it' },
    {
      type: 'ol',
      items: [
        'Collect what exists: logo files, the colours actually used on the website, fonts, five of your best pieces and five worst.',
        'Decide the basics first: positioning, audience and voice. Without them the visual rules have nothing to stand on.',
        'Clean up the visual system: cut the palette to what you need, name each colour, fix the logo versions.',
        'Write each section from the table above, using real examples from your own materials.',
        'Test it: ask someone outside the team, or a freelancer, to make a social post and a one-page flyer using only the document. Fix every question they had to ask.',
        'Publish it with the files: logo packs, colour swatches, fonts and ready templates next to the document.',
        'Name an owner and a review date.',
      ],
    },
    {
      type: 'p',
      text: 'Scope matters. Canny Creative says that for smaller companies "something basic and quick to read is the best route", while larger organisations need something fully comprehensive. A company of 20 to 250 people is usually best served by a short document of 10 to 20 pages plus a one-page summary.',
    },
    { type: 'h2', text: 'How to get the team to use it' },
    {
      type: 'p',
      text: '[Filestage](https://filestage.io/blog/brand-guidelines/) recommends making the guidelines easy to reach, in shared digital storage or in print, talking the team through them, and including the corporate brand manager as one of the reviewers. Add to that:',
    },
    {
      type: 'ul',
      items: [
        'Keep a link to the guidelines in the places where people make things: the design tool, the presentation template, the email signature page and the social media scheduler.',
        'Turn the rules into templates. A presentation template and a social post template enforce the rules without anyone reading them.',
        'Put the guidelines in new-employee onboarding and in every brief you send an agency, freelancer or printer.',
        'Review work against the document in one quick check before publishing, and update the document when the check shows a gap.',
      ],
    },
    {
      type: 'p',
      text: 'Filestage cites a benchmark report from Demand Network, "The Impact of Brand Consistency", which found that companies with formal, enforced branding guidelines were more than twice as likely to present their brand consistently. The word that matters is enforced: writing the document is the first half of the work.',
    },
    { type: 'h2', text: 'Keep it current' },
    {
      type: 'p',
      text: 'Revisit the document whenever the brand is refreshed or a new use case appears, such as a new platform, a new product line or a video format. Keep a change note at the top of the file with the date and what changed, and archive old versions so nobody uses an outdated logo. Brand guidelines should also stay consistent with your [marketing strategy](/blog/marketing-strategy-for-small-business) and the rest of your channels.',
    },
    {
      type: 'p',
      text: 'WakeUP Marketing\'s [branding and positioning service](/services/branding) lists brand guidelines and templates among what it includes, along with positioning, key messages, logo and visual identity and rollout to the website, social media and ads. If you want an outside view of how consistent your brand looks today, start with the [free marketing audit](/audit). For what a branding project costs, read [how much does branding cost](/blog/how-much-does-branding-cost).',
    },
  ],
}
