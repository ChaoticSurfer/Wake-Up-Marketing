// Service pages in English and Georgian. Keyword targets per page come from the 2026-11-07 research
// (seo-work/competitors-ge.md, autocomplete in seo-work/kw-*.json): Georgian buyers search the service
// name plus "ფასი" (price), so every page answers the price question. Prices point to the published
// plans in content.ts / copy-ka.ts; the owner confirms final service scope and prices.
import type { Locale } from '@/lib/copy'

export type ServiceId = 'smm' | 'advertising' | 'seo' | 'websites' | 'branding' | 'video'

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

export const serviceIds: ServiceId[] = ['smm', 'advertising', 'seo', 'websites', 'branding', 'video']

export const servicePages: Record<ServiceId, Record<Locale, ServiceText>> = {
  smm: {
    en: {
      slug: 'smm',
      name: 'Social media marketing (SMM)',
      metaTitle: 'Social Media Marketing (SMM) in Tbilisi',
      metaDescription:
        'SMM for Georgian businesses: strategy, content, Reels and video, page management and paid social, reported in leads and sales.',
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
      metaTitle: 'სოციალური მედიის მართვა (SMM) თბილისში',
      metaDescription:
        'SMM მომსახურება ქართული ბიზნესისთვის: სტრატეგია, კონტენტის შექმნა, Reels და ვიდეო, გვერდების მართვა და რეკლამა. შედეგს ლიდებითა და გაყიდვებით ვზომავთ.',
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
        'კლიენტების უმეტესობა SMM-ს ზრდის პაკეტში იყენებს: ₾4k–10k თვეში 2–3 არხისთვის, სარეკლამო ბიუჯეტი ცალკეა. უფასო აუდიტის შემდეგ ფიქსირებულ ფასს გეტყვით.',
      faq: [
        {
          q: 'რა ღირს SMM?',
          a: 'ფასი არხების რაოდენობასა და კონტენტის მოცულობაზეა დამოკიდებული. კლიენტების უმეტესობა ზრდის პაკეტზე თვეში ₾4k–10k-ს იხდის, სარეკლამო ბიუჯეტი ცალკეა. ზუსტ ფასს უფასო აუდიტის შემდეგ ვადასტურებთ.',
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
        'Meta and Google Ads managed against cost per lead and sales: campaign setup, creative testing, tracking and weekly optimisation.',
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
      metaTitle: 'ფეისბუქ და Google რეკლამის მართვა',
      metaDescription:
        'Meta-სა და Google Ads-ის რეკლამის მართვა ლიდის ღირებულებასა და გაყიდვებზე ორიენტირებით: კამპანიების აწყობა, კრეატივის ტესტირება და ყოველკვირეული ოპტიმიზაცია.',
      h1: 'რეკლამის მართვა: Meta და Google Ads',
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
        'რეკლამის მართვა ზრდის პაკეტის ნაწილია: ₾4k–10k თვეში რამდენიმე არხზე. სარეკლამო ბიუჯეტს პირდაპირ Meta-სა და Google-ს უხდით და ის თქვენს ანგარიშებში რჩება.',
      faq: [
        {
          q: 'რა ღირს ფეისბუქ რეკლამა?',
          a: 'ორი ნაწილისგან შედგება: სარეკლამო ბიუჯეტი, რომელსაც პირდაპირ Meta-ს უხდით, და ჩვენი მართვის საფასური ზრდის პაკეტში (კლიენტების უმეტესობისთვის ₾4k–10k თვეში). საწყის ბიუჯეტს უფასო აუდიტის შემდეგ გირჩევთ.',
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
        'Technical SEO, keyword research, content and local SEO for Georgian businesses, in Georgian and English, reported in rankings, traffic and enquiries.',
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
      metaTitle: 'SEO ოპტიმიზაცია თბილისში',
      metaDescription:
        'ტექნიკური SEO, საკვანძო სიტყვების კვლევა, კონტენტი და ლოკალური SEO ქართულ და ინგლისურ ენებზე. შედეგს პოზიციებით, ტრაფიკითა და მომართვებით ვზომავთ.',
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
        'SEO ჩვეულებრივ ზრდის პაკეტში შედის: ₾4k–10k თვეში ერთ-ორ სხვა არხთან ერთად. ერთჯერადი SEO აუდიტი და გამოსწორება სტარტის პროექტია ₾5k-დან.',
      faq: [
        {
          q: 'რა ღირს SEO ოპტიმიზაცია?',
          a: 'მიმდინარე SEO ზრდის პაკეტის ნაწილია, კლიენტების უმეტესობისთვის ₾4k–10k თვეში. ერთჯერადი აუდიტისა და გამოსწორების პროექტი ₾5k-დან იწყება.',
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
        'Fast business websites and landing pages built to turn visits into enquiries: design, development, SEO basics and tracking included.',
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
      metaTitle: 'საიტის დამზადება თბილისში',
      metaDescription:
        'სწრაფი ბიზნეს საიტები და ლენდინგები, რომლებიც ვიზიტებს მომართვებად აქცევს: დიზაინი, დეველოპმენტი, SEO-ს საფუძვლები და თრექინგი.',
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
        'საიტის ან ლენდინგის დამზადება სტარტის პროექტია ₾5k-დან, 4–6 კვირაში. შემდგომი ოპტიმიზაცია ზრდის პაკეტში გრძელდება.',
      faq: [
        {
          q: 'რა ღირს საიტის დამზადება?',
          a: 'საიტისა და ლენდინგის პროექტები ₾5k-დან იწყება. საბოლოო ფასი გვერდების რაოდენობასა და ინტეგრაციებზეა დამოკიდებული.',
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
        'Positioning, messaging and visual identity for Georgian companies: logo, brand guidelines and the copy that makes you the obvious choice.',
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
      metaTitle: 'ბრენდინგი და ლოგოს დიზაინი თბილისში',
      metaDescription:
        'პოზიციონირება, მესიჯები და ვიზუალური იდენტობა ქართული კომპანიებისთვის: ლოგო, ბრენდბუქი და ტექსტები, რომლებიც აშკარა არჩევანად გაქცევთ.',
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
      pricing: 'ბრენდინგი ერთჯერადი სტარტის პროექტია ₾5k-დან, ჩვეულებრივ 4–6 კვირაში.',
      faq: [
        {
          q: 'რა ღირს ბრენდინგი?',
          a: 'ბრენდინგის პროექტები ₾5k-დან იწყება. ფასი მოცულობაზეა დამოკიდებული: მხოლოდ პოზიციონირება თუ სრული იდენტობა ბრენდბუქითა და შაბლონებით.',
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
        'Ad videos, Reels and short-form video for social media and campaigns, planned around what makes Georgian buyers stop scrolling and act.',
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
      metaTitle: 'ვიდეო გადაღება თბილისში',
      metaDescription:
        'სარეკლამო ვიდეოები, Reels და მოკლე ვიდეო სოციალური მედიისა და კამპანიებისთვის, რომლებიც მყიდველს სქროლს აჩერებინებს და მოქმედებისკენ უბიძგებს.',
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
      pricing: 'ვიდეო ზრდის პაკეტში შედის, ან კეთდება ერთჯერად სტარტის პროექტად ₾5k-დან კამპანიის ვიდეოების ნაკრებისთვის.',
      faq: [
        {
          q: 'რა ღირს ვიდეო გადაღება?',
          a: 'კამპანიის ვიდეოების ნაკრები ერთჯერად პროექტად ₾5k-დან იწყება; ყოველთვიური ვიდეო ზრდის პაკეტის ნაწილია.',
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
    cta: 'Get a free growth audit',
    indexMetaTitle: 'Marketing Services in Tbilisi',
    indexMetaDescription:
      'SMM, Meta and Google Ads, SEO, website development, branding and video production for mid-sized Georgian companies. Prices published upfront.',
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
    cta: 'მიიღეთ ზრდის უფასო აუდიტი',
    indexMetaTitle: 'მარკეტინგული სერვისები თბილისში',
    indexMetaDescription:
      'SMM, რეკლამის მართვა, SEO ოპტიმიზაცია, საიტის დამზადება, ბრენდინგი და ვიდეო გადაღება საშუალო ბიზნესისთვის. ფასები ღიად არის მითითებული.',
    indexH1: 'მარკეტინგული სერვისები საშუალო ბიზნესისთვის',
    indexIntro: 'ყველა სერვისს ერთი გუნდი მართავს ერთიანი გეგმითა და ერთი რეპორტით. აირჩიეთ ის, რაც ახლა გჭირდებათ, ან დავიწყოთ უფასო აუდიტით.',
    allServices: 'ყველა სერვისი →',
  },
}

const prefix: Record<Locale, string> = { en: '/services', ka: '/ka/services' }

/** Path of the services index in a language. */
export const servicesIndexPath = (locale: Locale) => prefix[locale]

/** Path of one service page in a language. */
export const servicePath = (id: ServiceId, locale: Locale) => `${prefix[locale]}/${servicePages[id][locale].slug}`

export const serviceBySlug = (locale: Locale, slug: string): ServiceId | undefined =>
  serviceIds.find((id) => servicePages[id][locale].slug === slug)

/** Homepage service cards (content.ts codes) that have a page of their own. */
export const serviceIdByCode: Record<string, ServiceId> = {
  'S-01': 'advertising',
  'S-02': 'branding',
  'S-03': 'smm',
  'S-04': 'websites',
  'S-05': 'seo',
}
