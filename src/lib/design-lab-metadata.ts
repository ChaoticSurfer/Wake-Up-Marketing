import type { Metadata } from 'next'

/** Metadata for design lab pages: kept out of search results so they don't compete with the homepage. */
export const designLabMetadata = (title: string): Metadata => ({
  title: `${title} (design lab)`,
  robots: { index: false, follow: true },
})
