
/**
 * Site Identity Configuration
 * Portfolio of Pretom Areefin Pranto
 */

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.trim() ||
  'http://localhost:3000'

export const SITE_NAME = 'Pretom Areefin Pranto'

export const SITE_DESCRIPTION =
  'Computer Science undergraduate at BRAC University specializing in Machine Learning, Healthcare AI, and Software Engineering'

export const SITE_AUTHOR = {
  name: 'Pretom Areefin Pranto',
  email: 'pretomareefin@gmail.com',
  githubUsername: 'pretom26',
} as const

// Personal profile photograph
// Place pretom-profile.jpg in the public folder.
export const PROFILE_IMAGE = '/pretom-profile.jpg'

export const PROFILE_IMAGE_WIDTH = 800
export const PROFILE_IMAGE_HEIGHT = 800

// Canonical person identity for structured SEO data
export const PERSON_ID = `${SITE_URL}/#person`
