import type { Metadata } from 'next'
import { bilingualAlternates } from '@/lib/alternates'
import type { Locale } from '@/lib/copy'
import { serviceChrome, servicePages, servicePath, servicesIndexPath } from '@/lib/service-pages'
import type { ServiceId } from '@/lib/service-pages'
import { organization } from '@/lib/organization'
import { SITE_NAME, SITE_URL } from '@/lib/site'

const ogLocale: Record<Locale, string> = { en: 'en_US', ka: 'ka_GE' }

const pageMetadata = (locale: Locale, path: string, en: string, ka: string, title: string, description: string): Metadata => ({
  title,
  description,
  alternates: bilingualAlternates(path, en, ka),
  openGraph: { type: 'website', siteName: SITE_NAME, locale: ogLocale[locale], images: ['/opengraph-image'], url: path, title, description },
})

export const serviceMetadata = (id: ServiceId, locale: Locale): Metadata => {
  const s = servicePages[id][locale]
  return pageMetadata(locale, servicePath(id, locale), servicePath(id, 'en'), servicePath(id, 'ka'), s.metaTitle, s.metaDescription)
}

export const servicesIndexMetadata = (locale: Locale): Metadata => {
  const ui = serviceChrome[locale]
  return pageMetadata(locale, servicesIndexPath(locale), servicesIndexPath('en'), servicesIndexPath('ka'), ui.indexMetaTitle, ui.indexMetaDescription)
}

const homePath: Record<Locale, string> = { en: '/', ka: '/ka' }

/** BreadcrumbList from this language's homepage through `trail`, matching the breadcrumbs shown on the page. */
export const breadcrumbJsonLd = (locale: Locale, trail: { name: string; path: string }[]) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [{ name: serviceChrome[locale].home, path: homePath[locale] }, ...trail].map((crumb, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: crumb.name,
    item: `${SITE_URL}${crumb.path === '/' ? '' : crumb.path}`,
  })),
})

const servicesCrumb = (locale: Locale) => ({ name: serviceChrome[locale].services, path: servicesIndexPath(locale) })

/** BreadcrumbList for the services index. */
export const servicesIndexJsonLd = (locale: Locale) => breadcrumbJsonLd(locale, [servicesCrumb(locale)])

/** Service and BreadcrumbList structured data for one service page. */
export const serviceJsonLd = (id: ServiceId, locale: Locale) => {
  const s = servicePages[id][locale]
  const path = servicePath(id, locale)
  const url = `${SITE_URL}${path}`
  return [
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: s.name,
      description: s.metaDescription,
      url,
      inLanguage: locale,
      areaServed: { '@type': 'Country', name: 'Georgia' },
      provider: organization,
    },
    breadcrumbJsonLd(locale, [servicesCrumb(locale), { name: s.name, path }]),
  ]
}

/** Serialises JSON-LD for a <script> tag, escaping "<" as Next.js recommends. */
export const jsonLdHtml = (data: unknown) => ({ __html: JSON.stringify(data).replace(/</g, '\\u003c') })
