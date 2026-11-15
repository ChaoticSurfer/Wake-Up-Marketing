import type { BlogPost } from '@/lib/blog'

export const post: BlogPost = {
  locale: 'en',
  slug: 'how-to-make-a-testimonial-video',
  title: 'How to make a testimonial video: choose the customer, ask better questions, shoot on a phone',
  metaTitle: 'How to Make a Testimonial Video',
  description:
    'How to make a testimonial video: pick the right customer, ask story questions, shoot on a phone, edit it short and place it where buyers decide.',
  publishedAt: '2026-12-25T18:00:00+04:00',
  updatedAt: '2026-12-25T18:00:00+04:00',
  service: 'video',
  reviewState: 'llm_reviewed',
  body: [
    {
      type: 'p',
      text: 'To make a testimonial video, pick a customer whose situation looks like your next buyer, ask open questions about the problem, the decision and the result, record them on a phone in a quiet, well-lit room, and cut the answer down to the few sentences that carry the story. Then put the video where people decide: your service page, your Google Business Profile and your ads.',
    },
    { type: 'h2', text: 'Pick the customer before the camera' },
    {
      type: 'p',
      text: 'The customer matters more than the equipment. A testimonial works when a prospect watches it and thinks "that is my situation". So choose by similarity, not by who is friendliest.',
    },
    {
      type: 'ul',
      items: [
        'Same kind of company, size or problem as the buyers you want next.',
        'A concrete result you can state, such as faster delivery, fewer missed calls or more enquiries, that the customer will confirm in their own words.',
        'Someone who speaks comfortably. Ask for a short call first; people who explain things well on a call usually do well on camera.',
        'Someone who is willing. Ask personally, tell them how the video will be used and how long it takes, and let them say no.',
      ],
    },
    {
      type: 'p',
      text: 'Aim for three to five customers across your main segments rather than one polished hero. Each answers a different objection.',
    },
    { type: 'h2', text: 'Questions that get a story, not praise' },
    {
      type: 'p',
      text: '"Were you happy with us?" gets "Yes, very". Ask questions that make the customer tell what happened, in order. Send the questions a day ahead so they can think, but do not hand over a script; read answers sound read.',
    },
    {
      type: 'ol',
      items: [
        'Who are you, what does your company do, and what is your role? (Gets the name and title for the on-screen caption.)',
        'What was going on before you came to us? What was not working?',
        'What did you try before, and why did you choose us?',
        'What were you worried about before starting?',
        'What changed after we started? Give one specific example.',
        'What number or result can you point to?',
        'Who would you recommend us to, and what would you tell them?',
      ],
    },
    {
      type: 'p',
      text: 'If an answer is vague, ask the question again in a different way. Ask the customer to start each answer by repeating the question, so each clip makes sense on its own after editing. Do not interrupt; the most useful sentence is often the one after the pause. For scripting your own questions and scenes, the [marketing video script template](/blog/marketing-video-script-template) covers the structure.',
    },
    { type: 'h2', text: 'Phone-shoot setup' },
    {
      type: 'p',
      text: 'A recent phone is enough. Viewers forgive a simple frame, but not bad sound or a dark face.',
    },
    {
      type: 'ul',
      items: [
        'Sound first. Record in a quiet room, close doors, switch off fans and phones. Put a clip-on or small wired microphone near the speaker if you can; a phone held two metres away picks up the room.',
        'Light from the front or side. Sit the customer facing a window with the light on their face, not behind them. Avoid mixed light from a window and a ceiling lamp.',
        'Frame and angle. Place the phone on a tripod or a stack of books at eye level. Shoot vertical (9:16) if the video is mainly for Reels, TikTok and ads, or horizontal for a website page. Decide before you shoot, because cropping later loses quality.',
        'Look slightly off the lens. The customer talks to you, standing or sitting just beside the camera, not into the lens.',
        'Background. Their own workplace tells a story. Remove clutter and anything with a visible logo or screen you have no right to show.',
        'Extra shots. Film 30 seconds of their workplace, hands, product or team. These cutaways cover cuts and make the edit smoother.',
        'Back up. Copy the files to a computer before you leave and before you delete anything.',
      ],
    },
    { type: 'h2', text: 'Editing: keep the story, lose the filler' },
    {
      type: 'p',
      text: 'An hour of interview becomes a clip of 45 seconds to two minutes. Work in this order:',
    },
    {
      type: 'ol',
      items: [
        'Pick the three or four best answers: the problem, the turning point, the result, the recommendation.',
        'Cut silences, repeats and "um". Cover the jump cuts with your cutaway shots.',
        'Clean the sound and level it so the customer is not quieter than the music. Use quiet music or none.',
        'Add subtitles in the language the viewers read, and put the customer\'s name, role and company on screen.',
        'End with one next step, such as the page or the phone number to use.',
        'Export a short cut (15 to 30 seconds) from the strongest lines for ads and social media, and keep the full version for your site.',
      ],
    },
    {
      type: 'p',
      text: 'The tools and common mistakes are covered in [video editing basics for business](/blog/video-editing-basics-for-business), and the right length for each place in [how long a marketing video should be](/blog/how-long-should-a-marketing-video-be).',
    },
    { type: 'h2', text: 'Where to place the video' },
    {
      type: 'p',
      text: 'A testimonial does its job near the moment of decision. Put it where a buyer hesitates, not only on a "Videos" page.',
    },
    {
      type: 'table',
      head: ['Place', 'What to use', 'Note'],
      rows: [
        ['Service or pricing page', 'The full video, beside the enquiry button or form', 'Pick the testimonial from the segment that page targets'],
        ['Landing page for ads', 'A 30-60 second cut near the form', 'See [lead generation landing pages](/blog/lead-generation-landing-pages)'],
        [
          'Google Business Profile',
          'A short clip added to the profile photos',
          'Google lists videos of [up to 30 seconds, up to 75 MB and 720p or higher](https://support.google.com/business/answer/6103862), so cut a short version',
        ],
        ['Instagram, Facebook, TikTok', 'A vertical 15-30 second cut with subtitles', 'Lead with the result, not the introduction'],
        ['Paid ads', 'The strongest sentence plus the customer\'s name and role', 'Test two or three cuts and keep what produces enquiries'],
        ['Sales emails and proposals', 'A link to the full video', 'Send the customer closest to the prospect\'s situation'],
      ],
    },
    {
      type: 'p',
      text: 'For local searches, a Business Profile that shows real customer clips sits alongside your reviews; the [local SEO tips](/blog/local-seo-tips) post explains what else the profile needs.',
    },
    { type: 'h2', text: 'Consent and honesty' },
    {
      type: 'p',
      text: 'Get written permission before you publish: who is on screen, where the video will appear, for how long, and that the customer can ask for its removal. Check the rules that apply to your business and market. The US Federal Trade Commission, whose guidance is a useful benchmark even outside the US, says in its endorsement guidance: "Endorsements must reflect the honest opinions or experiences of the endorser." ([FTC, Endorsement Guides: What People Are Asking](https://www.ftc.gov/business-guidance/resources/ftcs-endorsement-guides-what-people-are-asking)). The same page says to disclose a connection the viewer would not expect, such as a payment or a free product.',
    },
    {
      type: 'p',
      text: 'In practice: do not script the opinions, do not pay or reward a customer for a positive testimonial without saying so on screen, and let the customer see the edit before it goes live.',
    },
    { type: 'h2', text: 'When to get help' },
    {
      type: 'p',
      text: 'A phone shoot is enough for most testimonials. If you want several customers filmed in a day, a consistent look across your videos, or cuts made for ads and tested in campaigns, WakeUP can script, shoot and edit short videos, including customer stories. See [video production](/services/video-production) for what is included, and the [marketing video cost guide](/blog/marketing-video-cost) for what drives the price. If you are not sure whether video is the weak point in your marketing, start with the [free marketing audit](/audit).',
    },
  ],
}
