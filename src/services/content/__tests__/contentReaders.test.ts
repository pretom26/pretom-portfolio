
import {
  getContentBySlug,
  getContents
} from '../index'

import type {
  Blog,
  Portfolio
} from 'me'

import {
  describe,
  expect,
  it
} from 'vitest'

/**
 * Content reader integration tests.
 *
 * Blog has been intentionally disabled.
 *
 * The original Portfolio MDX files have been
 * backed up outside this repository.
 *
 * The personalized Portfolio and Research
 * landing pages use their own project data.
 */

describe('getContents (filesystem integration)', () => {
  it('returns no Blog posts because Blog is disabled', async () => {
    const posts = await getContents<Blog>('/blog')

    expect(posts).toEqual([])
  })

  it('returns no original Portfolio MDX entries', async () => {
    const items = await getContents<Portfolio>(
      '/portfolio'
    )

    expect(items).toEqual([])
  })
})

describe('getContentBySlug', () => {
  it('rejects a nonexistent Blog article slug', async () => {
    await expect(
      getContentBySlug<Blog>(
        '/blog',
        'this-post-does-not-exist'
      )
    ).rejects.toThrow()
  })

  it('rejects a removed original Portfolio slug', async () => {
    await expect(
      getContentBySlug<Portfolio>(
        '/portfolio',
        'bookworm'
      )
    ).rejects.toThrow()
  })
})
