
/**
 * Pretom Areefin Pranto
 * Portfolio discovery index generator
 *
 * Creates:
 *   public/llms.txt
 *   public/llms-full.txt
 *
 * The second file contains curated page summaries,
 * not verbatim copies of the TSX pages.
 */

const fs = require('node:fs')
const path = require('node:path')

const ROOT = path.resolve(__dirname, '..')
const PUBLIC = path.join(ROOT, 'public')

const SITE_NAME = 'Pretom Areefin Pranto'

const SITE_DESCRIPTION =
  'Computer Science undergraduate at BRAC University specializing in Machine Learning, Healthcare AI, and Software Engineering.'

const GITHUB_URL = 'https://github.com/pretom26'

const LINKEDIN_URL =
  'https://www.linkedin.com/in/pretom-areefin-pranto-a97651290/'

const EMAIL = 'pretomareefin@gmail.com'

// ============================================
// CANONICAL SITE URL
// ============================================

const configuredUrl =
  process.env.SITE_URL ||
  process.env.NEXT_PUBLIC_SITE_URL ||
  'http://localhost:3000'

const site = new URL(configuredUrl.trim())

if (!['http:', 'https:'].includes(site.protocol)) {
  throw new Error('SITE_URL must be HTTP or HTTPS.')
}

if (/ahnafnafee/i.test(site.hostname)) {
  throw new Error(
    'Old template domain detected. Update SITE_URL or NEXT_PUBLIC_SITE_URL.'
  )
}

const BASE_URL = site.href.replace(/\/+$/, '')

function urlFor(route) {
  return `${BASE_URL}${route === '/' ? '/' : route}`
}

// ============================================
// PAGE CATALOG
// ============================================

// These are real published routes in the
// personalized Next.js application.

const pages = [
  {
    title: 'Home',
    route: '/',
    summary:
      'Introduction to Pretom Areefin Pranto, academic background, professional focus, research interests, and selected work.'
  },
  {
    title: 'Research',
    route: '/research',
    summary:
      'Research and academic projects involving machine learning, healthcare AI, computational methods, and related technical topics.'
  },
  {
    title: 'Portfolio',
    route: '/portfolio',
    summary:
      'Software engineering, machine learning, and academic project showcase with descriptions, technologies, and available external links.'
  },
  {
    title: 'About',
    route: '/about',
    summary:
      'Academic background at BRAC University, technical interests, professional experience, and personal introduction.'
  },
  {
    title: 'Resume',
    route: '/resume',
    summary:
      'Professional resume with education, experience, technical skills, academic projects, and research activities.'
  },
  {
    title: 'Contact',
    route: '/contact',
    summary:
      'Contact information, GitHub and LinkedIn profiles, and opportunities for professional or research collaboration.'
  },
  {
    title: 'Privacy Policy',
    route: '/privacy-policy',
    summary:
      'Information about technical data, external services, privacy choices, and contact.'
  },
  {
    title: 'Security Policy',
    route: '/security-policy',
    summary:
      'Guidance for reporting security concerns related to the personal portfolio.'
  }
]

// ============================================
// VERIFY SOURCE PAGES EXIST
// ============================================

for (const page of pages) {
  const routeDir =
    page.route === '/'
      ? path.join(ROOT, 'src', 'app')
      : path.join(
          ROOT,
          'src',
          'app',
          page.route.slice(1)
        )

  const pageFile = path.join(
    routeDir,
    'page.tsx'
  )

  if (!fs.existsSync(pageFile)) {
    throw new Error(
      `Missing expected page: ${pageFile}`
    )
  }
}

// ============================================
// INDEX FILE
// ============================================

const lines = [
  `# ${SITE_NAME}`,
  '',
  `> ${SITE_DESCRIPTION}`,
  '',
  '## Main Pages',
  ''
]

for (const page of pages.slice(0, 6)) {
  lines.push(
    `- [${page.title}](${urlFor(page.route)}): ${page.summary}`
  )
}

lines.push(
  '',
  '## Research and Project Discovery',
  '',
  'The Research and Portfolio pages contain the current personalized project listings.',
  'Individual project descriptions and external repository links should be checked on those pages.',
  '',
  'Research interests include machine learning, healthcare AI, and software engineering.',
  'The academic work includes the completed NeuroVentura undergraduate thesis.',
  '',
  '## Resume',
  '',
  `- [Resume Page](${urlFor('/resume')})`,
  `- [Resume PDF](${urlFor('/Resume_2026.pdf')})`,
  '',
  '## Website Policies',
  ''
)

for (const page of pages.slice(6)) {
  lines.push(
    `- [${page.title}](${urlFor(page.route)}): ${page.summary}`
  )
}

lines.push(
  '',
  '## Additional Information',
  '',
  `- [GitHub](${GITHUB_URL})`,
  `- [LinkedIn](${LINKEDIN_URL})`,
  `- Contact email: ${EMAIL}`,
  `- [Sitemap](${urlFor('/sitemap.xml')})`,
  `- [Curated Site Summary](${urlFor('/llms-full.txt')})`,
  '',
  '## Content Notes',
  '',
  'This file is a curated navigation index.',
  'It does not represent a complete copy of every project card or website page.',
  'Use the linked pages for current project information.',
  'This document does not grant additional copyright or AI-training permissions.',
  ''
)

// ============================================
// CURATED FULL SUMMARY
// ============================================

const fullLines = [
  `# ${SITE_NAME} — Portfolio Overview`,
  '',
  `> ${SITE_DESCRIPTION}`,
  '',
  `Website: ${BASE_URL}`,
  '',
  'This document is a curated overview of the public portfolio.',
  'It is not a verbatim reproduction of every page or individual project.',
  '',
  '## Profile',
  '',
  `${SITE_NAME} is a Computer Science undergraduate at BRAC University.`,
  'Areas of interest include Machine Learning, Healthcare AI, and Software Engineering.',
  '',
  'The portfolio covers academic research, software applications, and practical technical projects.',
  '',
  '## Academic and Professional Highlights',
  '',
  '- Undergraduate thesis: NeuroVentura, completed in 2026.',
  '- Machine learning engineering internship at FlyRank AI in 2026.',
  '- Academic and software projects are organized on the Research and Portfolio pages.',
  '',
  '## Public Website Pages',
  ''
]

for (const page of pages) {
  fullLines.push(
    `### ${page.title}`,
    '',
    `URL: ${urlFor(page.route)}`,
    '',
    page.summary,
    ''
  )
}

fullLines.push(
  '## Professional Profiles and Contact',
  '',
  `GitHub: ${GITHUB_URL}`,
  `LinkedIn: ${LINKEDIN_URL}`,
  `Email: ${EMAIL}`,
  '',
  '## Source and Accuracy',
  '',
  'For up-to-date details, follow the corresponding public website page.',
  'Individual research outputs, project repositories, and technologies are documented on their respective portfolio listings.',
  'This overview does not grant additional copyright or AI-training permissions.',
  ''
)

// ============================================
// WRITE OUTPUT FILES
// ============================================

fs.mkdirSync(PUBLIC, {
  recursive: true
})

const indexPath = path.join(
  PUBLIC,
  'llms.txt'
)

const fullPath = path.join(
  PUBLIC,
  'llms-full.txt'
)

fs.writeFileSync(
  indexPath,
  lines.join('\n'),
  'utf8'
)

fs.writeFileSync(
  fullPath,
  fullLines.join('\n'),
  'utf8'
)

console.log(
  `[llms.txt] Indexed ${pages.length} public pages.`
)

console.log(
  `[llms.txt] Site: ${BASE_URL}`
)

console.log(
  `[llms.txt] Generated: ${indexPath}`
)

console.log(
  `[llms.txt] Generated: ${fullPath}`
)

if (site.hostname === 'localhost') {
  console.warn(
    '[llms.txt] Local development URL detected. Set SITE_URL to the production domain before deployment.'
  )
}
