import type { Metadata } from 'next'

/** Canonical plus hreflang links for a page that exists in English and Georgian. */
export const bilingualAlternates = (canonical: string, en: string, ka: string): Metadata['alternates'] => ({
  canonical,
  languages: { en, ka, 'x-default': en },
})
