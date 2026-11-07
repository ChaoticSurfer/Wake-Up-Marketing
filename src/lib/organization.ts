import { contact } from '@/lib/content'
import { SITE_NAME, SITE_URL } from '@/lib/site'

/** The company as schema.org Organization: standalone on the homepage, nested as `provider` on service pages. */
export const organization = {
  '@type': 'Organization',
  '@id': `${SITE_URL}/#organization`,
  name: SITE_NAME,
  url: SITE_URL,
  logo: `${SITE_URL}/brand/logo-stacked-red.png`,
  email: contact.email,
  telephone: contact.phone,
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'sales',
    email: contact.email,
    telephone: contact.phone,
    areaServed: 'GE',
    availableLanguage: ['Georgian', 'English'],
  },
  address: { '@type': 'PostalAddress', addressLocality: 'Tbilisi', addressCountry: 'GE' },
  areaServed: { '@type': 'Country', name: 'Georgia' },
  sameAs: contact.socials.map((s) => s.href).filter((href) => href.startsWith('http')),
}

export const organizationJsonLd = { '@context': 'https://schema.org', ...organization }
