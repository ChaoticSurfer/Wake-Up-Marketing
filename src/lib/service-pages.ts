// Service pages in English and Georgian. Keyword targets per page come from the 2026-11-07 research
// (seo-work/competitors-ge.md, autocomplete in seo-work/kw-*.json): Georgian buyers search the service
// name plus "ფასი" (price), so every page answers the price question. Prices point to the published
// plans in content.ts / copy-ka.ts; the owner confirms final service scope and prices.
import type { Locale } from '@/lib/copy'

export type ServiceId = 'smm' | 'content' | 'advertising' | 'seo' | 'websites' | 'branding' | 'video' | 'automation' | 'calling' | 'audit'

type ServiceText = {
  slug: string
  /** Short name for cards, breadcrumbs and links. */
  name: string
  metaTitle: string
  metaDescription: string
  h1: string
  intro: string
  included: string[]
  fit: string
  pricing: string
  faq: { q: string; a: string }[]
}

/** Paid services: the pages under /services, listed on the index and linked from each other. The free audit is not one. */
export const serviceIds: ServiceId[] = ['smm', 'content', 'advertising', 'seo', 'websites', 'branding', 'video', 'automation', 'calling']

export const servicePages: Record<ServiceId, Record<Locale, ServiceText>> = {
  // The free audit the homepage and every service page offer. Only what the site already states about it:
  // a short summary of ads, site and sales process within one business day, three quick wins, no obligation.
  audit: {
    en: {
      slug: 'audit',
      name: 'Free marketing audit',
      metaTitle: 'Free Marketing Audit in Tbilisi',
      metaDescription:
        'A free marketing audit for Georgian businesses: we review your ads, website and sales process and send the three changes that would help most within a day.',
      h1: 'Free marketing audit in Tbilisi',
      intro:
        'Send us your website and a few details about your business. Within one business day we reply with a short audit of your ads, website and sales process: where budget leaks and the three changes that would improve results fastest. It is free and there is no obligation.',
      included: [
        'A look at your paid ads and where the budget goes',
        'A check of your website and the path from visit to enquiry',
        'Your sales process: what happens to a lead after it arrives',
        'A short written summary within one business day',
        'The three changes that would improve results fastest',
        'A fixed quote, if you want us to do the work',
      ],
      fit: 'Companies across Georgia with roughly 20–250 people that already spend on ads, a website or social media and want to know what the money brings back.',
      pricing:
        'The audit is free, with no obligation. If you then want us to do the work, you get a fixed quote: one-off projects start from ₾5k and monthly plans run ₾4k–10k for most clients, with ad spend separate.',
      faq: [
        {
          q: 'Is the marketing audit really free?',
          a: 'Yes. There is no fee and no obligation: you get the summary whether or not you work with us afterwards.',
        },
        {
          q: 'What do you need from us?',
          a: 'Your name, work email and company website, and roughly what you spend on marketing each month. That is all the form asks for.',
        },
        {
          q: 'How long does it take?',
          a: 'You get the summary within one business day of sending the form.',
        },
        {
          q: 'What happens after the audit?',
          a: 'If you want to go further, we give you a fixed quote. Paid work starts with a fuller audit and a 90-day plan with channels, budget split, owners and target KPIs.',
        },
      ],
    },
    ka: {
      slug: 'audit',
      name: 'უფასო მარკეტინგული აუდიტი',
      metaTitle: 'უფასო მარკეტინგული აუდიტი თბილისში',
      metaDescription:
        'უფასო მარკეტინგული აუდიტი: ვამოწმებთ თქვენს რეკლამას, საიტსა და გაყიდვების პროცესს და ერთ სამუშაო დღეში გიგზავნით სამ ცვლილებას, რომელიც შედეგს გააუმჯობესებს.',
      h1: 'უფასო მარკეტინგული აუდიტი',
      intro:
        'გამოგვიგზავნეთ საიტის მისამართი და მოკლე ინფორმაცია ბიზნესზე. ერთ სამუშაო დღეში მიიღებთ რეკლამის, საიტისა და გაყიდვების პროცესის მოკლე აუდიტს: სად იკარგება ბიუჯეტი და რომელი სამი ცვლილება გააუმჯობესებს შედეგს ყველაზე სწრაფად. აუდიტი უფასოა და არაფერს გავალდებულებთ.',
      included: [
        'სარეკლამო კამპანიების შემოწმება: სად მიდის ბიუჯეტი',
        'საიტის შემოწმება და გზა ვიზიტიდან მომართვამდე',
        'გაყიდვების პროცესი: რა ხდება ლიდთან მისი შემოსვლის შემდეგ',
        'მოკლე წერილობითი დასკვნა ერთ სამუშაო დღეში',
        'სამი ცვლილება, რომელიც შედეგს ყველაზე სწრაფად გააუმჯობესებს',
        'ფიქსირებული ფასი, თუ სამუშაოს ჩვენთან გაგრძელება გსურთ',
      ],
      fit: 'საქართველოში მოქმედი კომპანიებისთვის, დაახლოებით 20–250 თანამშრომლით, რომლებიც უკვე ხარჯავენ რეკლამაზე, საიტსა თუ სოციალურ მედიაზე და უნდათ გაიგონ, რას აბრუნებს ეს ხარჯი.',
      pricing:
        'აუდიტი უფასოა და ვალდებულებას არ გულისხმობს. თუ შემდეგ სამუშაოს ჩვენთან გაგრძელებას გადაწყვეტთ, ფიქსირებულ ფასს გეტყვით: ერთჯერადი პროექტები 5 000 ₾-დან იწყება, ყოველთვიური მომსახურება კი კლიენტების უმეტესობისთვის 4 000–10 000 ₾-ია. სარეკლამო ბიუჯეტი ცალკეა.',
      faq: [
        {
          q: 'რა ღირს მარკეტინგული აუდიტი?',
          a: 'არაფერი. აუდიტი უფასოა და არაფერს გავალდებულებთ: დასკვნას მიიღებთ იმისდა მიუხედავად, გააგრძელებთ თუ არა ჩვენთან მუშაობას.',
        },
        {
          q: 'რა ინფორმაცია გჭირდებათ ჩვენგან?',
          a: 'თქვენი სახელი, სამუშაო ელ-ფოსტა, კომპანიის ვებგვერდი და დაახლოებით რამდენს ხარჯავთ მარკეტინგზე თვეში. ფორმაში მხოლოდ ამას გკითხავთ.',
        },
        {
          q: 'რამდენ ხანში მივიღებ აუდიტს?',
          a: 'დასკვნას ფორმის გაგზავნიდან ერთ სამუშაო დღეში მიიღებთ.',
        },
        {
          q: 'რა ხდება აუდიტის შემდეგ?',
          a: 'თუ გაგრძელება გსურთ, ფიქსირებულ ფასს გეტყვით. ფასიანი სამუშაო უფრო სრული აუდიტითა და 90-დღიანი გეგმით იწყება: არხები, ბიუჯეტის გადანაწილება, პასუხისმგებლები და მიზნობრივი KPI-ები.',
        },
      ],
    },
  },
  smm: {
    en: {
      slug: 'smm',
      name: 'Social media marketing (SMM)',
      metaTitle: 'Social Media Marketing (SMM) in Tbilisi',
      metaDescription:
        'SMM for Georgian businesses: strategy, content, Reels and video, page management and paid social, reported in leads and sales. From ₾4k a month.',
      h1: 'Social media marketing (SMM) in Tbilisi',
      intro:
        'We run your Facebook, Instagram, TikTok and LinkedIn as a sales channel, not a posting schedule. Every month you see which posts and campaigns brought enquiries.',
      included: [
        'Channel strategy and a monthly content plan',
        'Posts, carousels, Reels and short video',
        'Page management and replies to messages',
        'Paid social campaigns on Meta and TikTok',
        'Monthly report in reach, leads and sales',
      ],
      fit: 'Companies with 20–250 people whose social pages look busy but do not bring customers, or whose in-house marketer has no time to run them properly.',
      pricing:
        'Most clients run SMM within the Growth plan, ₾4k–10k a month for two to three channels, with ad spend paid separately. After the free audit you get a fixed quote.',
      faq: [
        {
          q: 'How much does SMM cost?',
          a: 'It depends on the number of channels and how much content you need. Most clients pay ₾4k–10k a month on the Growth plan, with ad spend separate. We confirm a fixed price after the free audit.',
        },
        {
          q: 'Which platforms do you manage?',
          a: 'Facebook, Instagram, TikTok and LinkedIn. We pick the two or three where your buyers actually spend time.',
        },
        {
          q: 'When will we see results?',
          a: 'We review results every month. Most clients can see which content brings enquiries within the first 90 days.',
        },
      ],
    },
    ka: {
      slug: 'smm',
      name: 'სოციალური მედიის მართვა (SMM)',
      metaTitle: 'სოციალური მედიის მართვა (SMM) — ფასი',
      metaDescription:
        'SMM მომსახურება ბიზნესისთვის: სტრატეგია, კონტენტის შექმნა, Reels, გვერდების მართვა და რეკლამა. შედეგს ლიდებითა და გაყიდვებით ვზომავთ. ფასი 4 000 ₾-დან თვეში.',
      h1: 'სოციალური მედიის მართვა (SMM)',
      intro:
        'თქვენს Facebook-ს, Instagram-ს, TikTok-სა და LinkedIn-ს გაყიდვების არხად ვმართავთ და არა უბრალოდ პოსტების გრაფიკად. ყოველთვიურად ხედავთ, რომელმა პოსტმა და კამპანიამ მოიტანა მომართვები.',
      included: [
        'არხების სტრატეგია და ყოველთვიური კონტენტ-გეგმა',
        'პოსტები, კარუსელები, Reels და მოკლე ვიდეო',
        'გვერდების მართვა და შეტყობინებებზე პასუხი',
        'სარეკლამო კამპანიები Meta-სა და TikTok-ზე',
        'ყოველთვიური რეპორტი წვდომაზე, ლიდებსა და გაყიდვებზე',
      ],
      fit: 'კომპანიებისთვის 20–250 თანამშრომლით, რომელთა სოციალური გვერდები აქტიურია, მაგრამ კლიენტები არ მოჰყავს, ან შიდა მარკეტოლოგს მათი მართვისთვის დრო არ ჰყოფნის.',
      pricing:
        'კლიენტების უმეტესობა SMM-ს ზრდის პაკეტში იყენებს: 4\u00a0000–10\u00a0000\u00a0₾ თვეში 2–3 არხისთვის, სარეკლამო ბიუჯეტი ცალკეა. უფასო აუდიტის შემდეგ ფიქსირებულ ფასს გეტყვით.',
      faq: [
        {
          q: 'რა ღირს სოციალური მედიის მართვა (SMM)?',
          a: 'ფასი არხების რაოდენობასა და კონტენტის მოცულობაზეა დამოკიდებული. კლიენტების უმეტესობა ზრდის პაკეტზე თვეში 4\u00a0000–10\u00a0000\u00a0₾-ს იხდის, სარეკლამო ბიუჯეტი ცალკეა. ზუსტ ფასს უფასო აუდიტის შემდეგ ვადასტურებთ.',
        },
        {
          q: 'რომელ პლატფორმებს მართავთ?',
          a: 'Facebook-ს, Instagram-ს, TikTok-სა და LinkedIn-ს. ვირჩევთ იმ ორ-სამ არხს, სადაც თქვენი მყიდველები რეალურად არიან.',
        },
        {
          q: 'როდის ჩანს შედეგი?',
          a: 'შედეგებს ყოველთვიურად ვაფასებთ. კლიენტების უმეტესობა პირველ 90 დღეში ხედავს, რომელ კონტენტს მოაქვს მომართვები.',
        },
      ],
    },
  },
  advertising: {
    en: {
      slug: 'advertising',
      name: 'Meta and Google Ads',
      metaTitle: 'Facebook & Google Ads in Tbilisi',
      metaDescription:
        'Facebook, Instagram and Google Ads run against cost per lead and sales: campaign setup, creative testing, tracking and weekly optimisation. From ₾4k a month.',
      h1: 'Meta and Google Ads management',
      intro:
        'We plan, launch and optimise ads on Facebook, Instagram and Google so that every lari of budget is judged by the leads and sales it brings.',
      included: [
        'Account audit and tracking setup (Meta Pixel, GA4, conversions)',
        'Audience and keyword research',
        'Ad creative and copy, tested every week',
        'Search, display and remarketing campaigns on Google',
        'Budget moved weekly to what converts',
        'Monthly report in cost per lead and revenue',
      ],
      fit: 'Businesses already spending on ads without knowing what they get back, or ready to start paid advertising with clear targets.',
      pricing:
        'Ad management is part of the Growth plan, ₾4k–10k a month across channels. Ad spend is paid directly to Meta and Google and stays in your accounts.',
      faq: [
        {
          q: 'How much does Facebook advertising cost?',
          a: 'There are two parts: the ad budget you pay Meta directly, and our management fee within the Growth plan (₾4k–10k a month for most clients). We recommend a starting budget after the free audit.',
        },
        {
          q: 'Who owns the ad accounts?',
          a: 'You do. Campaigns run in your own Meta and Google accounts, so the data and history stay with you.',
        },
        {
          q: 'Do you run Google Ads too?',
          a: 'Yes. Search campaigns reach people already looking for what you sell, while Meta builds demand. Most clients use both.',
        },
      ],
    },
    ka: {
      slug: 'reklama',
      name: 'რეკლამის მართვა (Meta, Google Ads)',
      metaTitle: 'ფეისბუქ და Google რეკლამა — ფასი',
      metaDescription:
        'ფეისბუქ, Instagram და Google Ads რეკლამის მართვა ლიდის ღირებულებასა და გაყიდვებზე: კამპანიების აწყობა, კრეატივის ტესტირება, ოპტიმიზაცია. ფასი 4 000 ₾-დან თვეში.',
      h1: 'ფეისბუქ და Google რეკლამის მართვა',
      intro:
        'ვგეგმავთ, ვუშვებთ და ვაოპტიმიზებთ რეკლამას Facebook-ზე, Instagram-სა და Google-ში, რომ ბიუჯეტის ყოველი ლარი იმით შეფასდეს, რამდენ ლიდსა და გაყიდვას მოიტანს.',
      included: [
        'ანგარიშების აუდიტი და თრექინგის მოწყობა (Meta Pixel, GA4, კონვერსიები)',
        'სამიზნე აუდიტორიისა და საკვანძო სიტყვების კვლევა',
        'სარეკლამო კრეატივი და ტექსტები ყოველკვირეული ტესტირებით',
        'საძიებო, დისპლეი და რემარკეტინგის კამპანიები Google-ში',
        'ბიუჯეტის ყოველკვირეული გადანაწილება იმაზე, რაც ყიდის',
        'ყოველთვიური რეპორტი ლიდის ღირებულებასა და შემოსავალზე',
      ],
      fit: 'ბიზნესებისთვის, რომლებიც უკვე ხარჯავენ რეკლამაზე, მაგრამ არ იციან, რას იღებენ სანაცვლოდ, ან მზად არიან, მკაფიო მიზნებით დაიწყონ.',
      pricing:
        'რეკლამის მართვა ზრდის პაკეტის ნაწილია: 4\u00a0000–10\u00a0000\u00a0₾ თვეში რამდენიმე არხზე. სარეკლამო ბიუჯეტს პირდაპირ Meta-სა და Google-ს უხდით და ის თქვენს ანგარიშებში რჩება.',
      faq: [
        {
          q: 'რა ღირს ფეისბუქ რეკლამა?',
          a: 'ორი ნაწილისგან შედგება: სარეკლამო ბიუჯეტი, რომელსაც პირდაპირ Meta-ს უხდით, და ჩვენი მართვის საფასური ზრდის პაკეტში (კლიენტების უმეტესობისთვის 4\u00a0000–10\u00a0000\u00a0₾ თვეში). საწყის ბიუჯეტს უფასო აუდიტის შემდეგ გირჩევთ.',
        },
        {
          q: 'ვის ეკუთვნის სარეკლამო ანგარიშები?',
          a: 'თქვენ. კამპანიები თქვენს Meta-სა და Google-ის ანგარიშებში მიმდინარეობს, ამიტომ მონაცემები და ისტორია თქვენთან რჩება.',
        },
        {
          q: 'Google Ads-საც მართავთ?',
          a: 'დიახ. საძიებო კამპანიები აღწევს ადამიანებამდე, რომლებიც უკვე ეძებენ თქვენს პროდუქტს, Meta კი მოთხოვნას ქმნის. კლიენტების უმეტესობა ორივეს იყენებს.',
        },
      ],
    },
  },
  seo: {
    en: {
      slug: 'seo',
      name: 'SEO',
      metaTitle: 'SEO Services in Tbilisi',
      metaDescription:
        'Technical SEO, keyword research, content and local SEO for Georgian businesses, in Georgian and English, reported in rankings and enquiries. Audits from ₾5k.',
      h1: 'SEO services in Tbilisi',
      intro:
        'We help your website rank for what Georgian buyers search, in Georgian and English, and turn that traffic into enquiries.',
      included: [
        'Technical SEO audit and fixes',
        'Keyword research in Georgian and English',
        'Service and landing pages written for search intent',
        'Local SEO and Google Business Profile',
        'Monthly report in rankings, organic traffic and leads',
      ],
      fit: 'Companies whose website gets little traffic from Google, or that rank only for their own brand name.',
      pricing:
        'SEO usually runs within the Growth plan, ₾4k–10k a month alongside one or two other channels. A one-off SEO audit and fix project is a Launch project from ₾5k.',
      faq: [
        {
          q: 'How much does SEO cost?',
          a: 'Ongoing SEO is part of the Growth plan, ₾4k–10k a month for most clients. A one-off audit and fix project starts from ₾5k.',
        },
        {
          q: 'How long does SEO take?',
          a: 'Technical fixes take effect within weeks; rankings for competitive searches usually take three to six months of consistent work.',
        },
        {
          q: 'Do you do SEO in Georgian?',
          a: 'Yes. We research and write for Georgian searches as well as English, with language tags so Google shows each version to the right people.',
        },
      ],
    },
    ka: {
      slug: 'seo',
      name: 'SEO ოპტიმიზაცია',
      metaTitle: 'SEO ოპტიმიზაცია თბილისში — ფასი',
      metaDescription:
        'SEO მომსახურება ქართულ და ინგლისურ ენებზე: ტექნიკური SEO, საკვანძო სიტყვების კვლევა, კონტენტი და ლოკალური SEO. ერთჯერადი SEO აუდიტი 5 000 ₾-დან.',
      h1: 'SEO ოპტიმიზაცია',
      intro:
        'გეხმარებით, რომ თქვენი საიტი Google-ში იმ ძიებებზე გამოჩნდეს, რასაც ქართველი მყიდველები ეძებენ, ქართულად და ინგლისურად, და ეს ტრაფიკი მომართვებად იქცეს.',
      included: [
        'ტექნიკური SEO აუდიტი და გამოსწორება',
        'საკვანძო სიტყვების კვლევა ქართულად და ინგლისურად',
        'სერვისის გვერდები და ლენდინგები ძიების მიზნის მიხედვით',
        'ლოკალური SEO და Google Business Profile',
        'ყოველთვიური რეპორტი პოზიციებზე, ორგანულ ტრაფიკსა და ლიდებზე',
      ],
      fit: 'კომპანიებისთვის, რომელთა საიტზე Google-დან ცოტა ვიზიტორი შედის, ან რომლებიც მხოლოდ საკუთარი ბრენდის სახელზე ჩანან.',
      pricing:
        'SEO ჩვეულებრივ ზრდის პაკეტში შედის: 4\u00a0000–10\u00a0000\u00a0₾ თვეში ერთ-ორ სხვა არხთან ერთად. ერთჯერადი SEO აუდიტი და გამოსწორება სტარტის პროექტია 5\u00a0000\u00a0₾-დან.',
      faq: [
        {
          q: 'რა ღირს SEO ოპტიმიზაცია?',
          a: 'მიმდინარე SEO ზრდის პაკეტის ნაწილია, კლიენტების უმეტესობისთვის 4\u00a0000–10\u00a0000\u00a0₾ თვეში. ერთჯერადი აუდიტისა და გამოსწორების პროექტი 5\u00a0000\u00a0₾-დან იწყება.',
        },
        {
          q: 'რამდენ ხანში ჩანს SEO-ს შედეგი?',
          a: 'ტექნიკური გამოსწორებები რამდენიმე კვირაში მოქმედებს, კონკურენტულ ძიებებში პოზიციების მოსაპოვებლად კი ჩვეულებრივ სამიდან ექვს თვემდე სტაბილური მუშაობაა საჭირო.',
        },
        {
          q: 'SEO-ს ქართულ ენაზეც აკეთებთ?',
          a: 'დიახ. ქართულ და ინგლისურ ძიებებს ცალ-ცალკე ვიკვლევთ და ვწერთ, ენობრივი მონიშვნებით, რომ Google-მა თითოეული ვერსია სწორ ადამიანებს აჩვენოს.',
        },
      ],
    },
  },
  websites: {
    en: {
      slug: 'website-development',
      name: 'Websites and landing pages',
      metaTitle: 'Website Development in Tbilisi',
      metaDescription:
        'Fast business websites and landing pages built to turn visits into enquiries: design, development, SEO basics and tracking included. From ₾5k, in 4–6 weeks.',
      h1: 'Website and landing page development',
      intro:
        'We build fast, mobile-first websites and landing pages with one job: turning visitors into qualified enquiries you can measure.',
      included: [
        'Structure and copy planned around what buyers search',
        'Design in your brand, mobile first',
        'Fast development with SEO basics built in',
        'Lead forms connected to email or your CRM',
        'Analytics and conversion tracking from day one',
      ],
      fit: 'Companies whose site is slow, outdated or does not bring enquiries, and campaigns that need a dedicated landing page.',
      pricing:
        'A website or landing page is a Launch project from ₾5k, delivered in four to six weeks. Ongoing optimisation runs within the Growth plan.',
      faq: [
        {
          q: 'How much does a website cost?',
          a: 'Website and landing page projects start from ₾5k as a one-off Launch project. The final price depends on the number of pages and integrations.',
        },
        { q: 'How long does it take?', a: 'Most projects take four to six weeks from the first workshop to launch.' },
        {
          q: 'Can you work with our existing site?',
          a: 'Yes. Often the fastest win is a set of new landing pages and fixes to the existing site rather than a full rebuild.',
        },
      ],
    },
    ka: {
      slug: 'saitis-damzadeba',
      name: 'საიტის დამზადება და ლენდინგები',
      metaTitle: 'საიტის დამზადება თბილისში — ფასი',
      metaDescription:
        'ბიზნეს საიტისა და ლენდინგის დამზადება, რომელიც ვიზიტორებს მომართვებად აქცევს: დიზაინი, დეველოპმენტი, SEO და თრექინგი. ფასი 5 000 ₾-დან, 4–6 კვირაში.',
      h1: 'საიტის დამზადება და ლენდინგები',
      intro:
        'ვქმნით სწრაფ, მობილურზე მორგებულ საიტებსა და ლენდინგებს ერთი მიზნით: ვიზიტორები გაზომვად, კვალიფიციურ მომართვებად აქციონ.',
      included: [
        'სტრუქტურა და ტექსტები იმის მიხედვით, რასაც მყიდველები ეძებენ',
        'დიზაინი თქვენს ბრენდში, მობილურზე პრიორიტეტით',
        'სწრაფი დეველოპმენტი SEO-ს საფუძვლებით',
        'ფორმები, დაკავშირებული ელ-ფოსტასთან ან CRM-თან',
        'ანალიტიკა და კონვერსიების თრექინგი პირველივე დღიდან',
      ],
      fit: 'კომპანიებისთვის, რომელთა საიტი ნელია, მოძველებულია ან მომართვები არ მოაქვს, და კამპანიებისთვის, რომლებსაც ცალკე ლენდინგი სჭირდებათ.',
      pricing:
        'საიტის ან ლენდინგის დამზადება სტარტის პროექტია 5\u00a0000\u00a0₾-დან, 4–6 კვირაში. შემდგომი ოპტიმიზაცია ზრდის პაკეტში გრძელდება.',
      faq: [
        {
          q: 'რა ღირს საიტის დამზადება?',
          a: 'საიტისა და ლენდინგის პროექტები 5\u00a0000\u00a0₾-დან იწყება. საბოლოო ფასი გვერდების რაოდენობასა და ინტეგრაციებზეა დამოკიდებული.',
        },
        { q: 'რამდენ ხანს გრძელდება?', a: 'პროექტების უმეტესობა პირველი შეხვედრიდან გაშვებამდე 4–6 კვირას გრძელდება.' },
        {
          q: 'არსებულ საიტზეც შეგიძლიათ მუშაობა?',
          a: 'დიახ. ხშირად ყველაზე სწრაფი შედეგი ახალი ლენდინგები და არსებული საიტის გამოსწორებაა და არა სრულად თავიდან აწყობა.',
        },
      ],
    },
  },
  branding: {
    en: {
      slug: 'branding',
      name: 'Branding and positioning',
      metaTitle: 'Branding Agency in Tbilisi',
      metaDescription:
        'Branding and rebranding for Georgian companies: positioning, messaging, logo design and brand guidelines. From ₾5k.',
      h1: 'Branding and positioning',
      intro:
        'We define what makes your company the obvious choice and turn it into a clear message and visual identity your team can use everywhere.',
      included: [
        'Market and competitor review',
        'Positioning and key messages',
        'Logo and visual identity',
        'Brand guidelines and templates',
        'Rollout to your website, social media and ads',
      ],
      fit: 'Companies that have outgrown their first logo, are entering a new market, or sound the same as their competitors.',
      pricing: 'Branding is a one-off Launch project from ₾5k, usually four to six weeks.',
      faq: [
        {
          q: 'How much does branding cost?',
          a: 'Branding projects start from ₾5k. The price depends on scope: positioning only, or a full identity with guidelines and templates.',
        },
        {
          q: 'Do you only design logos?',
          a: 'No. A logo is one part; the positioning and messaging behind it is what makes marketing work.',
        },
        {
          q: 'Can you rebrand an existing company?',
          a: 'Yes. We keep what customers already recognise and change what holds you back.',
        },
      ],
    },
    ka: {
      slug: 'brendingi',
      name: 'ბრენდინგი და პოზიციონირება',
      metaTitle: 'ბრენდინგი და ლოგოს დიზაინი — ფასი',
      metaDescription:
        'ბრენდინგი და რებრენდინგი ქართული კომპანიებისთვის: პოზიციონირება, მესიჯები, ლოგოს დიზაინი და ბრენდბუქი. ფასი 5 000 ₾-დან.',
      h1: 'ბრენდინგი და პოზიციონირება',
      intro:
        'განვსაზღვრავთ, რა ხდის თქვენს კომპანიას აშკარა არჩევანად, და ამას მკაფიო მესიჯად და ვიზუალურ იდენტობად ვაქცევთ, რომელსაც თქვენი გუნდი ყველგან გამოიყენებს.',
      included: [
        'ბაზრისა და კონკურენტების მიმოხილვა',
        'პოზიციონირება და მთავარი მესიჯები',
        'ლოგოს დიზაინი და ვიზუალური იდენტობა',
        'ბრენდბუქი და შაბლონები',
        'დანერგვა საიტზე, სოციალურ მედიასა და რეკლამაში',
      ],
      fit: 'კომპანიებისთვის, რომლებიც პირველ ლოგოს გაიზარდნენ, ახალ ბაზარზე გადიან, ან კონკურენტებივით ჟღერენ.',
      pricing: 'ბრენდინგი ერთჯერადი სტარტის პროექტია 5\u00a0000\u00a0₾-დან, ჩვეულებრივ 4–6 კვირაში.',
      faq: [
        {
          q: 'რა ღირს ბრენდინგი?',
          a: 'ბრენდინგის პროექტები 5\u00a0000\u00a0₾-დან იწყება. ფასი მოცულობაზეა დამოკიდებული: მხოლოდ პოზიციონირება თუ სრული იდენტობა ბრენდბუქითა და შაბლონებით.',
        },
        {
          q: 'მხოლოდ ლოგოს აკეთებთ?',
          a: 'არა. ლოგო მხოლოდ ერთი ნაწილია; მარკეტინგს სწორედ მის უკან მდგარი პოზიციონირება და მესიჯები ამუშავებს.',
        },
        {
          q: 'არსებული კომპანიის რებრენდინგსაც აკეთებთ?',
          a: 'დიახ. ვინარჩუნებთ იმას, რასაც მომხმარებლები უკვე იცნობენ, და ვცვლით იმას, რაც წინსვლას გიშლით.',
        },
      ],
    },
  },
  video: {
    en: {
      slug: 'video-production',
      name: 'Video production',
      metaTitle: 'Video Production in Tbilisi',
      metaDescription:
        'Ad videos, Reels and TikTok video for Georgian businesses: scripts, filming and editing, tested in campaigns. Campaign video sets from ₾5k.',
      h1: 'Video production for ads and social media',
      intro:
        'We script, shoot and edit short videos for ads, Reels and TikTok, and test them in campaigns so you know which ones sell.',
      included: [
        'Concepts and scripts based on your offer',
        'Filming and editing',
        'Reels, TikTok and ad formats in every size',
        'Subtitles in Georgian and English',
        'Testing in paid campaigns',
      ],
      fit: 'Brands that need a steady flow of video for social media and ads but have no in-house production team.',
      pricing: 'Video runs within the Growth plan, or as a one-off Launch project from ₾5k for a campaign set.',
      faq: [
        {
          q: 'How much does video production cost?',
          a: 'A campaign set of videos starts from ₾5k as a one-off project; ongoing monthly video is part of the Growth plan.',
        },
        {
          q: 'What kinds of video do you make?',
          a: 'Short ad videos, Reels and TikTok, product and service explainers, and customer stories.',
        },
        {
          q: 'Do you also run the ads?',
          a: 'Yes. Video works best when it is tested in campaigns, so we can produce it and run the ads together.',
        },
      ],
    },
    ka: {
      slug: 'video-gadageba',
      name: 'ვიდეო გადაღება',
      metaTitle: 'ვიდეო გადაღება თბილისში — ფასი',
      metaDescription:
        'სარეკლამო ვიდეოს, Reels-ისა და TikTok ვიდეოების გადაღება და მონტაჟი ბიზნესისთვის, კამპანიებში ტესტირებით. ვიდეოების ნაკრები 5 000 ₾-დან.',
      h1: 'ვიდეო გადაღება რეკლამისა და სოციალური მედიისთვის',
      intro:
        'ვწერთ სცენარს, ვიღებთ და ვამონტაჟებთ მოკლე ვიდეოებს რეკლამისთვის, Reels-ისა და TikTok-ისთვის, და კამპანიებში ვტესტავთ, რომ იცოდეთ, რომელი ყიდის.',
      included: [
        'კონცეფციები და სცენარები თქვენი შეთავაზების მიხედვით',
        'გადაღება და მონტაჟი',
        'Reels, TikTok და სარეკლამო ფორმატები ყველა ზომაში',
        'სუბტიტრები ქართულად და ინგლისურად',
        'ტესტირება სარეკლამო კამპანიებში',
      ],
      fit: 'ბრენდებისთვის, რომლებსაც სოციალური მედიისა და რეკლამისთვის მუდმივად სჭირდებათ ვიდეო, მაგრამ შიდა პროდაქშენის გუნდი არ ჰყავთ.',
      pricing: 'ვიდეო ზრდის პაკეტში შედის, ან კეთდება ერთჯერად სტარტის პროექტად 5\u00a0000\u00a0₾-დან კამპანიის ვიდეოების ნაკრებისთვის.',
      faq: [
        {
          q: 'რა ღირს ვიდეო გადაღება?',
          a: 'კამპანიის ვიდეოების ნაკრები ერთჯერად პროექტად 5\u00a0000\u00a0₾-დან იწყება; ყოველთვიური ვიდეო ზრდის პაკეტის ნაწილია.',
        },
        {
          q: 'როგორ ვიდეოებს იღებთ?',
          a: 'მოკლე სარეკლამო ვიდეოებს, Reels-სა და TikTok-ს, პროდუქტისა და სერვისის ამხსნელ ვიდეოებს და მომხმარებლების ისტორიებს.',
        },
        {
          q: 'რეკლამასაც თქვენ უშვებთ?',
          a: 'დიახ. ვიდეო ყველაზე კარგად კამპანიებში ტესტირებისას მუშაობს, ამიტომ შეგვიძლია გადაღებაც და რეკლამის მართვაც ერთად ავიღოთ.',
        },
      ],
    },
  },
  // Georgian demand is for "ჩატბოტი" (ჩატბოტის შექმნა, ai ჩატბოტი); "AI ავტომატიზაცია" had no autocomplete
  // suggestions on 2026-11-08 (seo-work/kw-ai-ka.json), so the Georgian page leads with chatbots.
  automation: {
    en: {
      slug: 'ai-automation',
      name: 'AI automation and chatbots',
      metaTitle: 'AI Chatbot & Automation Agency in Tbilisi',
      metaDescription:
        'AI chatbots for Messenger, Instagram, WhatsApp and your website that answer in Georgian and English, plus lead and CRM automation. From ₾5k.',
      h1: 'AI automation and chatbots for business',
      intro:
        'We build AI chatbots that answer your customers in Georgian and English around the clock, and automations that send every lead to your CRM and sales team without manual work.',
      included: [
        'Chatbots for Facebook Messenger, Instagram, WhatsApp and your website',
        'Answers in Georgian and English, based on your prices, services and FAQs',
        'Lead qualification and bookings, with handover to a person when needed',
        'Automatic lead routing to your CRM, email or team chat',
        'Follow-up and reporting automations that save your team hours every week',
      ],
      fit: 'Companies that answer the same questions in messages all day, lose leads after working hours, or copy data between tools by hand.',
      pricing:
        'A chatbot or automation set-up is a Launch project from ₾5k, usually live in four to six weeks. Ongoing improvement and support run within the Growth plan.',
      faq: [
        {
          q: 'How much does an AI chatbot cost?',
          a: 'Set-up starts from ₾5k as a one-off Launch project. The price depends on the channels, integrations and how much the bot needs to know. Running costs for the AI model are usually small, and we estimate them before launch.',
        },
        {
          q: 'Can the chatbot speak Georgian?',
          a: 'Yes. It answers in Georgian and English, in your wording and with your prices and policies. Before launch we test it on real questions from your inbox.',
        },
        {
          q: 'What happens when the bot cannot answer?',
          a: 'It hands the conversation to your team with the full history, so the customer never has to repeat themselves.',
        },
        {
          q: 'Is customer data safe?',
          a: 'We connect the bot only to the data it needs, keep conversations in your own accounts, and agree with you before launch on what it may and may not say.',
        },
      ],
    },
    ka: {
      slug: 'ai-chatbotebi',
      name: 'AI ჩატბოტები და ავტომატიზაცია',
      metaTitle: 'AI ჩატბოტის შექმნა თბილისში — ფასი',
      metaDescription:
        'AI ჩატბოტები Messenger-ის, Instagram-ის, WhatsApp-ისა და საიტისთვის, რომლებიც ქართულად პასუხობს, და ლიდების ავტომატური გადაცემა CRM-ში. ფასი 5 000 ₾-დან.',
      h1: 'ჩატბოტის შექმნა და AI ავტომატიზაცია',
      intro:
        'ვქმნით AI ჩატბოტებს, რომლებიც თქვენს მომხმარებლებს ქართულად და ინგლისურად 24/7 პასუხობს, და ავტომატიზაციას, რომელიც ყველა ლიდს ხელით მუშაობის გარეშე გადასცემს თქვენს CRM-სა და გაყიდვების გუნდს.',
      included: [
        'ჩატბოტები Facebook Messenger-ისთვის, Instagram-ისთვის, WhatsApp-ისა და საიტისთვის',
        'პასუხები ქართულად და ინგლისურად, თქვენს ფასებზე, სერვისებსა და ხშირ კითხვებზე დაყრდნობით',
        'ლიდების კვალიფიკაცია და ჯავშნები, საჭიროებისას საუბრის ოპერატორისთვის გადაცემით',
        'ლიდების ავტომატური გადაცემა CRM-ში, ელ-ფოსტაზე ან გუნდის ჩატში',
        'შეხსენებებისა და რეპორტების ავტომატიზაცია, რომელიც გუნდს ყოველ კვირა საათებს უზოგავს',
      ],
      fit: 'კომპანიებისთვის, რომლებიც შეტყობინებებში მთელი დღე ერთსა და იმავე კითხვებს პასუხობენ, სამუშაო საათების შემდეგ ლიდებს კარგავენ ან მონაცემებს პროგრამებს შორის ხელით გადააქვთ.',
      pricing:
        'ჩატბოტის ან ავტომატიზაციის აწყობა სტარტის პროექტია 5 000 ₾-დან, ჩვეულებრივ 4–6 კვირაში. შემდგომი გაუმჯობესება და მხარდაჭერა ზრდის პაკეტში გრძელდება.',
      faq: [
        {
          q: 'რა ღირს AI ჩატბოტის შექმნა?',
          a: 'აწყობა 5 000 ₾-დან იწყება ერთჯერად პროექტად. ფასი არხებზე, ინტეგრაციებსა და იმაზეა დამოკიდებული, რამდენი ინფორმაცია უნდა იცოდეს ბოტმა. AI მოდელის ყოველთვიური ხარჯი ჩვეულებრივ მცირეა და მას გაშვებამდე წინასწარ გითვლით.',
        },
        {
          q: 'ჩატბოტი ქართულად ისაუბრებს?',
          a: 'დიახ. ქართულად და ინგლისურად პასუხობს, თქვენი სიტყვებით, ფასებითა და წესებით. გაშვებამდე თქვენი შეტყობინებებიდან აღებულ რეალურ კითხვებზე ვტესტავთ.',
        },
        {
          q: 'რა ხდება, თუ ბოტმა პასუხი არ იცის?',
          a: 'საუბარს მთელი ისტორიით გადასცემს თქვენს გუნდს, ასე რომ მომხმარებელს არაფრის გამეორება არ უწევს.',
        },
        {
          q: 'რამდენად დაცულია მომხმარებლების მონაცემები?',
          a: 'ბოტს მხოლოდ საჭირო მონაცემებთან ვაკავშირებთ, საუბრები თქვენს ანგარიშებში ინახება, ხოლო იმას, რისი თქმა შეუძლია და რისი არა, გაშვებამდე ერთად ვთანხმდებით.',
        },
      ],
    },
  },
  // Georgian searches "ხმოვანი ასისტენტი" (also "ქართული ხმოვანი ასისტენტი"); "ai ზარები" and "ავტომატური ზარები"
  // had no autocomplete suggestions on 2026-11-08 (seo-work/kw-calling-content-ka.json), so the Georgian title leads with it.
  calling: {
    en: {
      slug: 'ai-calling',
      name: 'AI calling: inbound and outbound',
      metaTitle: 'AI Voice Agents for Sales Calls in Tbilisi',
      metaDescription:
        'AI voice agents that answer calls in Georgian and English 24/7 and call new leads back within minutes to qualify them and book meetings. Set-up from ₾5k.',
      h1: 'AI calling for inbound calls and outbound sales',
      intro:
        'An AI voice agent answers every call in Georgian and English, handles questions, books appointments and passes ready buyers to your team. For outbound sales it calls new leads within minutes of a form or ad enquiry, qualifies them and books a meeting with your sales team.',
      included: [
        'Inbound: every call answered 24/7, including after hours and at peak times',
        'Outbound: new leads from your forms and ads called within minutes, plus reminders and follow-up calls',
        'Natural conversation in Georgian and English, based on your prices, services and sales scripts',
        'Lead qualification, bookings and live transfer to a salesperson when the buyer is ready',
        'Call recordings, transcripts and summaries in your CRM',
      ],
      fit: 'Companies that miss calls, take hours to call new leads back, or whose sales team spends its day on unqualified calls.',
      pricing:
        'An AI calling set-up is a Launch project from ₾5k, usually live in four to six weeks. Call minutes are billed at cost and estimated before launch. Ongoing tuning runs within the Growth plan.',
      faq: [
        {
          q: 'How much does an AI calling agent cost?',
          a: 'Set-up starts from ₾5k as a one-off Launch project. The price depends on call volume, integrations and how many scripts the agent needs. We estimate the monthly cost of call minutes before launch.',
        },
        {
          q: 'Can the voice agent speak Georgian?',
          a: 'Yes, Georgian and English. Before launch you listen to test calls and approve the voice and the way it speaks.',
        },
        {
          q: 'Who does the AI call?',
          a: 'Only people who gave you their number and agreed to be contacted, such as form leads and existing customers. We do not cold-call bought lists, and the agent says at the start of every call that it is an automated assistant.',
        },
        {
          q: 'What if the caller wants to talk to a person?',
          a: 'The agent transfers the call to your team or books a callback, and your salesperson sees a summary of the conversation in the CRM.',
        },
      ],
    },
    ka: {
      slug: 'ai-khmovani-asistenti',
      name: 'AI ზარები და ხმოვანი ასისტენტი',
      metaTitle: 'ქართული AI ხმოვანი ასისტენტი — ფასი',
      metaDescription:
        'ქართული AI ხმოვანი ასისტენტი, რომელიც ზარებს 24/7 პასუხობს, ახალ ლიდებს რამდენიმე წუთში ურეკავს, აკვალიფიცირებს და შეხვედრას უნიშნავს. ფასი 5 000 ₾-დან.',
      h1: 'AI ხმოვანი ასისტენტი ზარებისა და გაყიდვებისთვის',
      intro:
        'AI ხმოვანი ასისტენტი ყველა ზარს ქართულად და ინგლისურად პასუხობს: კითხვებზე პასუხობს, ვიზიტს ჯავშნის და მზად მყოფ მყიდველს თქვენს გუნდს გადასცემს. გაყიდვებისთვის ახალ ლიდებს ფორმიდან ან რეკლამიდან მომართვის შემდეგ რამდენიმე წუთში ურეკავს, აკვალიფიცირებს და გაყიდვების გუნდთან შეხვედრას უნიშნავს.',
      included: [
        'შემომავალი ზარები: პასუხი 24/7, სამუშაო საათების შემდეგაც და დატვირთულ პერიოდში',
        'გამავალი ზარები: ფორმებიდან და რეკლამიდან მოსულ ლიდებს რამდენიმე წუთში ურეკავს, ასევე შეხსენებები და განმეორებითი ზარები',
        'ბუნებრივი საუბარი ქართულად და ინგლისურად, თქვენს ფასებზე, სერვისებსა და გაყიდვების სკრიპტებზე დაყრდნობით',
        'ლიდების კვალიფიკაცია, ჯავშნები და ზარის გადართვა გაყიდვების მენეჯერზე, როცა მყიდველი მზადაა',
        'ზარების ჩანაწერები, ტრანსკრიპტები და შეჯამებები თქვენს CRM-ში',
      ],
      fit: 'კომპანიებისთვის, რომლებსაც ბევრი გამოტოვებული ზარი აქვთ, ახალ ლიდებს საათების შემდეგ ურეკავენ, ან რომელთა გაყიდვების გუნდი დროს არაკვალიფიციურ ზარებზე ხარჯავს.',
      pricing:
        'AI ზარების აწყობა სტარტის პროექტია 5 000 ₾-დან, ჩვეულებრივ 4–6 კვირაში. საუბრის წუთები თვითღირებულებით ითვლება და მათ ხარჯს გაშვებამდე წინასწარ გითვლით. შემდგომი გაუმჯობესება ზრდის პაკეტში გრძელდება.',
      faq: [
        {
          q: 'რა ღირს AI ხმოვანი ასისტენტი?',
          a: 'აწყობა 5 000 ₾-დან იწყება ერთჯერად პროექტად. ფასი ზარების მოცულობაზე, ინტეგრაციებსა და სკრიპტების რაოდენობაზეა დამოკიდებული. საუბრის წუთების ყოველთვიურ ხარჯს გაშვებამდე წინასწარ გითვლით.',
        },
        {
          q: 'ასისტენტი ქართულად ისაუბრებს?',
          a: 'დიახ, ქართულად და ინგლისურად. გაშვებამდე სატესტო ზარებს მოისმენთ და ხმასა და საუბრის სტილს თქვენ დაამტკიცებთ.',
        },
        {
          q: 'ვის ურეკავს AI ასისტენტი?',
          a: 'მხოლოდ მათ, ვინც ნომერი თავად დაგიტოვათ და დაკავშირებაზე თანხმობა მოგცათ, მაგალითად ფორმიდან მოსულ ლიდებსა და არსებულ კლიენტებს. ნაყიდ ბაზებზე ცივ ზარებს არ ვაკეთებთ, ხოლო ასისტენტი ყოველი ზარის დასაწყისში ამბობს, რომ ავტომატური ასისტენტია.',
        },
        {
          q: 'რა ხდება, თუ კლიენტს ადამიანთან საუბარი სურს?',
          a: 'ასისტენტი ზარს თქვენს გუნდზე გადართავს ან უკუზარს დანიშნავს, ხოლო მენეჯერი საუბრის შეჯამებას CRM-ში ხედავს.',
        },
      ],
    },
  },
  // Georgian searches "კონტენტის შექმნა", "სარეკლამო კონტენტის შექმნა" and "ვიდეო კონტენტის შექმნა"
  // (seo-work/kw-calling-content-ka.json, 2026-11-08). SMM is running the channels; this page is making the content.
  content: {
    en: {
      slug: 'content-creation',
      name: 'Content creation',
      metaTitle: 'Content Creation Agency in Tbilisi',
      metaDescription:
        'Content creation for Georgian brands: photo shoots, Reels, design and copy in Georgian and English, made for social media and ads. From ₾4k a month.',
      h1: 'Content creation for social media and ads',
      intro:
        'We plan, shoot and write the content your brand needs every month: photos, short videos, design and copy in Georgian and English. Your team posts it, or we run the channels for you as part of SMM.',
      included: [
        'A monthly content plan built around your offers and campaigns',
        'Product, lifestyle and team photo shoots',
        'Reels, TikTok and short video, filmed and edited',
        'Post, carousel and ad creative design in every size',
        'Copywriting in Georgian and English: captions, ad text and articles',
      ],
      fit: 'Brands that post rarely or irregularly, have a marketer but no designer or camera, or need fresh ad creatives every week.',
      pricing:
        'Monthly content runs within the Growth plan, from ₾4k a month depending on volume. A one-off shoot or launch content set is a Launch project from ₾5k.',
      faq: [
        {
          q: 'How much does content creation cost?',
          a: 'From ₾4k a month on the Growth plan, depending on how many shoots, videos and posts you need. A one-off content set for a launch starts from ₾5k.',
        },
        {
          q: 'What is the difference between content creation and SMM?',
          a: 'Content creation is making the photos, videos, design and text. SMM also covers strategy, posting, replies to messages and paid social. You can take content on its own or both together.',
        },
        {
          q: 'Who owns the content?',
          a: 'You do. Photos, videos and design files are handed over in full, and you can use them anywhere.',
        },
      ],
    },
    ka: {
      slug: 'kontentis-sheqmna',
      name: 'კონტენტის შექმნა',
      metaTitle: 'კონტენტის შექმნა თბილისში — ფასი',
      metaDescription:
        'კონტენტის შექმნა ქართული ბრენდებისთვის: ფოტოგადაღება, Reels და ვიდეო, დიზაინი და ტექსტები ქართულად და ინგლისურად. ფასი 4 000 ₾-დან თვეში.',
      h1: 'კონტენტის შექმნა სოციალური მედიისა და რეკლამისთვის',
      intro:
        'ვგეგმავთ, ვიღებთ და ვწერთ იმ კონტენტს, რომელიც თქვენს ბრენდს ყოველთვიურად სჭირდება: ფოტოებს, მოკლე ვიდეოებს, დიზაინსა და ტექსტებს ქართულად და ინგლისურად. გამოქვეყნება თქვენს გუნდს შეუძლია, ან SMM-ის ფარგლებში გვერდებს ჩვენ ვმართავთ.',
      included: [
        'ყოველთვიური კონტენტ-გეგმა თქვენი შეთავაზებებისა და კამპანიების მიხედვით',
        'პროდუქტის, ლაიფსტაილ და გუნდის ფოტოგადაღება',
        'Reels, TikTok და მოკლე ვიდეო: გადაღება და მონტაჟი',
        'პოსტების, კარუსელებისა და სარეკლამო კრეატივების დიზაინი ყველა ზომაში',
        'ქოფირაითინგი ქართულად და ინგლისურად: პოსტების ტექსტები, სარეკლამო ტექსტები და სტატიები',
      ],
      fit: 'ბრენდებისთვის, რომლებიც იშვიათად ან არარეგულარულად აქვეყნებენ, ჰყავთ მარკეტოლოგი, მაგრამ არა დიზაინერი და ოპერატორი, ან რეკლამისთვის ყოველკვირეულად ახალი კრეატივები სჭირდებათ.',
      pricing:
        'ყოველთვიური კონტენტი ზრდის პაკეტში შედის, 4 000 ₾-დან თვეში, მოცულობის მიხედვით. ერთჯერადი გადაღება ან კონტენტის ნაკრები გაშვებისთვის სტარტის პროექტია 5 000 ₾-დან.',
      faq: [
        {
          q: 'რა ღირს კონტენტის შექმნა?',
          a: 'ზრდის პაკეტში 4 000 ₾-დან თვეში, იმის მიხედვით, რამდენი გადაღება, ვიდეო და პოსტი გჭირდებათ. ერთჯერადი კონტენტის ნაკრები გაშვებისთვის 5 000 ₾-დან იწყება.',
        },
        {
          q: 'რით განსხვავდება კონტენტის შექმნა SMM-ისგან?',
          a: 'კონტენტის შექმნა ფოტოების, ვიდეოების, დიზაინისა და ტექსტების მომზადებაა. SMM ასევე მოიცავს სტრატეგიას, გამოქვეყნებას, შეტყობინებებზე პასუხსა და რეკლამას. შეგიძლიათ აიღოთ მხოლოდ კონტენტი ან ორივე ერთად.',
        },
        {
          q: 'ვის ეკუთვნის კონტენტი?',
          a: 'თქვენ. ფოტოებს, ვიდეოებსა და დიზაინის ფაილებს სრულად გადმოგცემთ და მათი გამოყენება ნებისმიერ ადგილას შეგიძლიათ.',
        },
      ],
    },
  },
}

/** Labels shared by every service page and the services index. */
export const serviceChrome: Record<
  Locale,
  {
    home: string
    services: string
    included: string
    fit: string
    process: string
    processSteps: { t: string; d: string }[]
    pricing: string
    seePlans: string
    faq: string
    related: string
    cta: string
    indexMetaTitle: string
    indexMetaDescription: string
    indexH1: string
    indexIntro: string
    allServices: string
  }
> = {
  en: {
    home: 'Home',
    services: 'Services',
    included: "What's included",
    fit: "Who it's for",
    process: 'How we work',
    processSteps: [
      { t: 'Audit', d: 'Week 1–2. We review your accounts, site and numbers and show where budget leaks.' },
      { t: 'Plan', d: 'Week 3. A 90-day plan with channels, budget split, owners and target KPIs.' },
      { t: 'Launch', d: 'Week 4. Work goes live with tracking in place from day one.' },
      { t: 'Improve', d: 'Every month. Weekly tests and a monthly review with your leadership.' },
    ],
    pricing: 'Pricing',
    seePlans: 'See all plans',
    faq: 'Questions',
    related: 'Other services',
    cta: 'Get a free marketing audit',
    indexMetaTitle: 'Marketing Services in Tbilisi',
    indexMetaDescription:
      'SMM, content creation, Meta and Google Ads, SEO, websites, branding, video, AI chatbots and AI calling for mid-sized Georgian companies. Published prices.',
    indexH1: 'Marketing services for mid-sized businesses',
    indexIntro: 'One team runs every service against one plan and one report. Pick what you need now, or start with a free audit.',
    allServices: 'All services →',
  },
  ka: {
    home: 'მთავარი',
    services: 'სერვისები',
    included: 'რას მოიცავს',
    fit: 'ვისთვისაა',
    process: 'როგორ ვმუშაობთ',
    processSteps: [
      { t: 'აუდიტი', d: '1–2 კვირა. ვამოწმებთ თქვენს ანგარიშებს, საიტსა და ციფრებს და გაჩვენებთ, სად იკარგება ბიუჯეტი.' },
      { t: 'გეგმა', d: 'მე-3 კვირა. 90-დღიანი გეგმა არხებით, ბიუჯეტის გადანაწილებით, პასუხისმგებლებითა და მიზნობრივი KPI-ებით.' },
      { t: 'გაშვება', d: 'მე-4 კვირა. სამუშაო ეშვება და თრექინგი პირველივე დღიდან მუშაობს.' },
      { t: 'გაუმჯობესება', d: 'ყოველთვიურად. ყოველკვირეული ტესტები და ყოველთვიური შეხვედრა ხელმძღვანელობასთან.' },
    ],
    pricing: 'ფასი',
    seePlans: 'ყველა პაკეტი',
    faq: 'ხშირი კითხვები',
    related: 'სხვა სერვისები',
    cta: 'მიიღეთ უფასო მარკეტინგული აუდიტი',
    indexMetaTitle: 'მარკეტინგული სერვისები თბილისში',
    indexMetaDescription:
      'SMM, კონტენტის შექმნა, რეკლამის მართვა, SEO ოპტიმიზაცია, საიტის დამზადება, ბრენდინგი, ვიდეო, AI ჩატბოტები და AI ზარები საშუალო ბიზნესისთვის. ფასები ღიაა.',
    indexH1: 'მარკეტინგული სერვისები საშუალო ბიზნესისთვის',
    indexIntro: 'ყველა სერვისს ერთი გუნდი მართავს ერთიანი გეგმითა და ერთი რეპორტით. აირჩიეთ ის, რაც ახლა გჭირდებათ, ან დავიწყოთ უფასო აუდიტით.',
    allServices: 'ყველა სერვისი →',
  },
}

const prefix: Record<Locale, string> = { en: '/services', ka: '/ka/services' }

/** Path of the services index in a language. */
export const servicesIndexPath = (locale: Locale) => prefix[locale]

// The free audit is the offer every page leads to, so it sits at the top level rather than under /services.
const auditPath: Record<Locale, string> = { en: '/audit', ka: '/ka/audit' }

/** Path of one service page in a language. */
export const servicePath = (id: ServiceId, locale: Locale) =>
  id === 'audit' ? auditPath[locale] : `${prefix[locale]}/${servicePages[id][locale].slug}`

export const serviceBySlug = (locale: Locale, slug: string): ServiceId | undefined =>
  serviceIds.find((id) => servicePages[id][locale].slug === slug)

/** Homepage service cards (content.ts codes) that have a page of their own. */
export const serviceIdByCode: Record<string, ServiceId> = {
  'S-01': 'advertising',
  'S-02': 'branding',
  'S-03': 'smm',
  'S-04': 'websites',
  'S-05': 'seo',
  'S-06': 'automation',
  'S-07': 'calling',
  'S-08': 'content',
}
