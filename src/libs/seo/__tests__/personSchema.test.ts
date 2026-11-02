import { describe, expect, it } from 'vitest'

import {
  PERSON_ID,
  PROFILE_IMAGE,
  SITE_AUTHOR,
  SITE_URL
} from '../../constants/site'
import { getPersonNode, PERSON_REFERENCE } from '../personSchema'

describe('Pretom portfolio Person schema', () => {
  it('uses the canonical identity from site.ts', () => {
    const node = getPersonNode()

    expect(node['@type']).toBe('Person')
    expect(node['@id']).toBe(PERSON_ID)
    expect(node.name).toBe(SITE_AUTHOR.name)
    expect(node.alternateName).toBe(SITE_AUTHOR.githubUsername)
    expect(node.url).toBe(SITE_URL)
    expect(node.email).toBe(SITE_AUTHOR.email)
  })

  it('uses an absolute URL for the profile image', () => {
    const node = getPersonNode()
    const expectedImageUrl = new URL(PROFILE_IMAGE, SITE_URL).toString()

    expect(node.image.url).toBe(expectedImageUrl)
    expect(node.image.contentUrl).toBe(expectedImageUrl)
    expect(node.image.width).toBeGreaterThan(0)
    expect(node.image.height).toBeGreaterThan(0)
  })

  it('links only to confirmed public profiles', () => {
    const node = getPersonNode()

    expect(node.sameAs).toContain('https://github.com/pretom26')
    expect(node.sameAs).toContain(
      'https://www.linkedin.com/in/pretom-areefin-pranto-a97651290/'
    )
  })

  it('identifies BRAC University without inventing completed degrees or a current employer', () => {
    const node = getPersonNode()

    expect(node.affiliation.name).toBe('BRAC University')
    expect(node).not.toHaveProperty('alumniOf')
    expect(node).not.toHaveProperty('hasCredential')
    expect(node).not.toHaveProperty('worksFor')
  })

  it('describes the actual areas of work and not the template author', () => {
    const node = getPersonNode()

    expect(node.knowsAbout).toContain('Machine Learning')
    expect(node.knowsAbout).toContain('MONAI')
    expect(JSON.stringify(node)).not.toMatch(/ahnafnafee|George Mason|Drexel University|PhD/i)
  })

  it('exposes a lightweight reference with the same Person ID', () => {
    expect(PERSON_REFERENCE).toEqual({
      '@type': 'Person',
      '@id': PERSON_ID,
      name: SITE_AUTHOR.name,
      url: SITE_URL
    })
  })
})
