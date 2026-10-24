// Registry of design directions. Each lives at /<slug>.
export type Version = {
  slug: string
  name: string
  tagline: string
  direction: string
  status: 'flagship' | 'alt'
}

export const versions: Version[] = [
  {
    slug: 'v1',
    name: 'Signal',
    tagline: 'Cyber-brutalist HUD',
    direction: 'Black ground, live QR-eye, HUD labels, decrypting type, bento services with micro-animations.',
    status: 'flagship',
  },
  {
    slug: 'v2',
    name: 'Awaken',
    tagline: 'Scroll story for decision-makers',
    direction: 'The eye opens as you scroll, a live growth dashboard animates with the page, then before/after results, clear packages and a free audit.',
    status: 'alt',
  },
  {
    slug: 'v3',
    name: 'Spatial',
    tagline: 'WebGL + glass + 3D eye',
    direction: 'Live red shader backdrop, a 3D eyeball built from QR cubes, frosted glass panels, tilt cards and a pinned horizontal process.',
    status: 'alt',
  },
  {
    slug: 'v4',
    name: 'Pulse',
    tagline: 'Morphing particle field',
    direction: 'Thousands of particles re-form behind the content as you scroll: eye, UP, a rising chart, a target. Kinetic word-by-word type.',
    status: 'alt',
  },
]

/** Href to a version page. */
export const versionHref = (slug: string) => `/${slug}`
export const hubHref = () => '/versions'
