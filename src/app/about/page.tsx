
import Image from 'next/image'
import Link from 'next/link'

import {
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  Brain,
  Code2,
  ExternalLink,
  GraduationCap,
  Mail
} from 'lucide-react'

import { StarfieldBackground } from '@/components/site/StarfieldBackground'
import { AppLayoutPage } from '@/components/site/templates/AppLayoutPage'

import {
  PERSON_ID,
  SITE_AUTHOR,
  SITE_NAME,
  SITE_URL
} from '@/libs/constants/site'

import type { Metadata } from 'next'

// ============================================
// PAGE CONFIGURATION
// ============================================

const BASE_URL = SITE_URL.replace(/\/$/, '')
const ABOUT_URL = `${BASE_URL}/about`

const PAGE_TITLE = `About | ${SITE_NAME}`

const PAGE_DESCRIPTION =
  'Learn about Pretom Areefin Pranto, a BRAC University Computer Science undergraduate working in machine learning, multimodal healthcare AI, and software engineering.'

const LINKEDIN_URL =
  'https://www.linkedin.com/in/pretom-areefin-pranto-a97651290/'

const GITHUB_URL =
  'https://github.com/pretom26'

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,

  alternates: {
    canonical: ABOUT_URL
  },

  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    url: ABOUT_URL,
    siteName: SITE_NAME,
    type: 'profile'
  },

  twitter: {
    card: 'summary',
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION
  },

  keywords: [
    'Pretom Areefin Pranto',
    'About Pretom',
    'BRAC University',
    'Computer Science',
    'Machine Learning',
    'Healthcare AI',
    'Software Engineering',
    'Multimodal Deep Learning'
  ]
}

// ============================================
// TECHNICAL INTERESTS
// ============================================

const interestAreas = [
  {
    title: 'Machine Learning & AI',
    description:
      'Working with supervised learning, neural networks, deep learning, feature engineering, and model evaluation.',
    icon: Brain,
    tags: [
      'PyTorch',
      'scikit-learn',
      'XGBoost',
      'Deep Learning'
    ]
  },

  {
    title: 'Healthcare AI',
    description:
      'Exploring machine learning applications in medical imaging, clinical data analysis, and multimodal healthcare prediction.',
    icon: GraduationCap,
    tags: [
      'MONAI',
      'Medical Imaging',
      'Multimodal ML'
    ]
  },

  {
    title: 'Software Engineering',
    description:
      'Developing full-stack applications, database-backed platforms, APIs, and practical developer tools.',
    icon: Code2,
    tags: [
      'React',
      'Node.js',
      'MongoDB',
      'Python'
    ]
  },

  {
    title: 'Applied ML & Data',
    description:
      'Applying data processing, embeddings, clustering, and leakage-aware evaluation to real-world machine learning workflows.',
    icon: BarChart3,
    tags: [
      'Pandas',
      'NumPy',
      'Embeddings',
      'Model Evaluation'
    ]
  }
]

// ============================================
// EXPERIENCE TIMELINE
// ============================================

const experiences = [
  {
    period: 'Jul – Oct 2026',
    title: 'Machine Learning Engineering Intern',
    organization: 'FlyRank AI',
    description:
      'Completed a Google Search Ranking & Discoverability capstone using approximately 30,000 Google Search Console and GA4 records. Worked with data processing, embeddings, clustering, opportunity modeling, and leakage-aware model evaluation.',
    link: '/portfolio#flyrank',
    linkLabel: 'Explore internship project'
  },

  {
    period: '2026',
    title: 'Completed Undergraduate Thesis',
    organization: 'BRAC University',
    description:
      'Developed NeuroVentura, a multimodal machine learning framework for Alzheimer’s disease risk and progression prediction using MRI and clinical features.',
    link: '/research#neuroventura',
    linkLabel: 'Explore thesis'
  },

  {
    period: '2024',
    title: 'AI Data Trainer',
    organization: 'Genmorphics AI',
    description:
      'Worked on textual and graphical media annotation and developed localized prompts for AI workflows.'
  },

  {
    period: '2022 – Jan 2027 (expected)',
    title: 'Bachelor in Computer Science',
    organization: 'BRAC University',
    description:
      'Undergraduate education covering machine learning, neural networks, software engineering, database management, and computer networks.'
  }
]

// ============================================
// SELECTED PROJECTS
// ============================================

const featuredWork = [
  {
    title: 'NeuroVentura',
    category: 'Undergraduate Research',
    description:
      'Multimodal Alzheimer’s prediction using MRI and clinical features.',
    href: '/research#neuroventura'
  },

  {
    title: 'Google Search Ranking & Discoverability',
    category: 'Industry Machine Learning',
    description:
      'Search analytics and content-opportunity scoring with leakage-aware evaluation.',
    href: '/portfolio#flyrank'
  },

  {
    title: 'Abar Nosto!',
    category: 'Full-Stack Development',
    description:
      'A deployed MERN platform for community issue reporting and management.',
    href: '/portfolio#abar-nosto'
  }
]

// ============================================
// GMAIL COMPOSE HELPER
// ============================================

function gmailComposeUrl() {
  const params = new URLSearchParams({
    view: 'cm',
    fs: '1',
    to: SITE_AUTHOR.email,
    su: 'Portfolio inquiry',

    body:
      'Hi Pretom,\n\n' +
      'I visited your portfolio and would like to connect.\n\n' +
      'Best regards,'
  })

  return `https://mail.google.com/mail/?${params.toString()}`
}

// ============================================
// SEO STRUCTURED DATA
// ============================================

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'ProfilePage',
  '@id': `${ABOUT_URL}#profile`,

  url: ABOUT_URL,
  name: PAGE_TITLE,
  description: PAGE_DESCRIPTION,

  mainEntity: {
    '@type': 'Person',
    '@id': PERSON_ID,
    name: SITE_NAME,
    description: PAGE_DESCRIPTION,
    affiliation: {
      '@type': 'CollegeOrUniversity',
      name: 'BRAC University'
    }
  },

  isPartOf: {
    '@type': 'WebSite',
    url: BASE_URL
  }
}

// ============================================
// MAIN ABOUT PAGE
// ============================================

export default function AboutPage() {
  return (
    <>
      <StarfieldBackground />

      <AppLayoutPage className='pt-6 md:pt-10'>

        {/* SEO structured data */}

        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(
              structuredData
            ).replace(/</g, '\\u003c')
          }}
        />

        {/* ====================================
            HERO SECTION
        ==================================== */}

        <header className='border-b border-gray-200 pb-12 dark:border-gray-800'>

          <p className='text-xs font-semibold tracking-[.2em] text-purple-600 uppercase dark:text-purple-300'>
            GET TO KNOW ME / ABOUT
          </p>

          <div className='mt-6 grid items-center gap-9 md:grid-cols-[1fr_240px]'>

            <div>

              <h1 className='from-primary-600 dark:from-primary-300 bg-gradient-to-br via-purple-600 to-pink-500 bg-clip-text text-4xl font-extrabold tracking-tight text-transparent md:text-6xl dark:via-purple-300 dark:to-pink-300'>
                About Me
              </h1>

              <h2 className='mt-5 text-xl font-bold leading-snug text-gray-950 md:text-2xl dark:text-white'>
                Hi, I’m Pretom Areefin Pranto.
              </h2>

              <p className='mt-4 text-base leading-8 text-gray-700 dark:text-gray-300'>
                I’m a Computer Science undergraduate at
                BRAC University, with interests in machine
                learning, healthcare AI, and software
                engineering.
              </p>

              <p className='mt-4 text-sm leading-8 text-gray-600 md:text-base dark:text-gray-300'>
                My academic and professional work spans
                multimodal learning, computer vision,
                data processing, full-stack applications,
                and practical machine learning systems.
              </p>

              <p className='mt-4 text-sm leading-8 text-gray-600 md:text-base dark:text-gray-300'>
                I completed my undergraduate thesis,
                NeuroVentura, in 2026 and worked as
                a Machine Learning Engineering Intern
                at FlyRank AI.
              </p>

              <div className='mt-6 flex flex-wrap gap-2'>

                {[
                  'Machine Learning',
                  'Healthcare AI',
                  'Software Engineering'
                ].map((interest) => (
                  <span
                    key={interest}
                    className='rounded-full border border-purple-200 bg-purple-50 px-3 py-1.5 text-xs font-semibold text-purple-700 dark:border-purple-900 dark:bg-purple-950/40 dark:text-purple-300'
                  >
                    {interest}
                  </span>
                ))}

              </div>

            </div>

            {/* Profile image */}

            <div className='mx-auto w-fit'>

              <div className='rounded-3xl border border-purple-200 bg-gradient-to-br from-purple-100 to-pink-100 p-2 shadow-xl dark:border-purple-900 dark:from-purple-950 dark:to-gray-900'>

                <Image
                  src='/pretom-profile.jpg'
                  width={240}
                  height={240}
                  alt='Portrait of Pretom Areefin Pranto'
                  className='h-56 w-56 rounded-2xl object-cover'
                  priority
                />

              </div>

              <p className='mt-3 text-center text-xs text-gray-500 dark:text-gray-400'>
                Dhaka, Bangladesh
              </p>

            </div>

          </div>

          {/* Hero actions */}

          <div className='mt-8 flex flex-wrap gap-3'>

            <Link
              href='/resume'
              className='inline-flex items-center gap-2 rounded-lg bg-purple-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-purple-700'
            >
              View My Resume

              <ArrowRight
                size={16}
                aria-hidden='true'
              />
            </Link>

            <Link
              href='/portfolio'
              className='inline-flex items-center gap-2 rounded-lg border border-gray-300 px-5 py-3 text-sm font-semibold text-gray-900 transition hover:border-purple-400 dark:border-gray-700 dark:text-white'
            >
              Explore Projects

              <ArrowUpRight
                size={16}
                aria-hidden='true'
              />
            </Link>

            <a
              href={LINKEDIN_URL}
              target='_blank'
              rel='noopener noreferrer'
              className='inline-flex items-center gap-2 rounded-lg border border-gray-300 px-5 py-3 text-sm font-semibold text-gray-900 transition hover:border-purple-400 dark:border-gray-700 dark:text-white'
            >
              LinkedIn

              <ExternalLink
                size={16}
                aria-hidden='true'
              />
            </a>

          </div>

        </header>

        {/* ====================================
            EDUCATION
        ==================================== */}

        <section className='border-b border-gray-200 py-12 dark:border-gray-800'>

          <p className='text-xs font-semibold tracking-[.2em] text-purple-600 uppercase dark:text-purple-300'>
            01 / BACKGROUND
          </p>

          <h2 className='mt-2 text-2xl font-bold text-gray-950 md:text-3xl dark:text-white'>
            Education & Academic Focus
          </h2>

          <div className='mt-7 rounded-2xl border border-gray-200 bg-white/80 p-6 dark:border-gray-800 dark:bg-gray-950/65'>

            <div className='flex flex-wrap items-start justify-between gap-4'>

              <div className='flex items-start gap-4'>

                <span className='rounded-xl bg-purple-100 p-3 text-purple-700 dark:bg-purple-950 dark:text-purple-300'>
                  <GraduationCap
                    size={24}
                    aria-hidden='true'
                  />
                </span>

                <div>

                  <h3 className='text-lg font-bold text-gray-950 dark:text-white'>
                    BRAC University
                  </h3>

                  <p className='mt-1 text-sm font-medium text-purple-700 dark:text-purple-300'>
                    Bachelor in Computer Science
                  </p>

                  <p className='mt-2 text-sm text-gray-600 dark:text-gray-400'>
                    Dhaka, Bangladesh
                  </p>

                </div>

              </div>

              <span className='rounded-full border border-gray-200 px-3 py-1.5 text-xs font-semibold text-gray-600 dark:border-gray-700 dark:text-gray-300'>
                2022 – January 2027 (expected)
              </span>

            </div>

            <p className='mt-5 text-sm leading-7 text-gray-600 dark:text-gray-300'>
              Relevant coursework includes Machine Learning,
              Neural Networks, Software Engineering, Database
              Management, and Computer Networks.
            </p>

          </div>

        </section>

        {/* ====================================
            TECHNICAL INTERESTS
        ==================================== */}

        <section className='border-b border-gray-200 py-12 dark:border-gray-800'>

          <p className='text-xs font-semibold tracking-[.2em] text-purple-600 uppercase dark:text-purple-300'>
            02 / WHAT I WORK ON
          </p>

          <h2 className='mt-2 text-2xl font-bold text-gray-950 md:text-3xl dark:text-white'>
            Areas of Interest
          </h2>

          <p className='mt-3 max-w-3xl text-sm leading-7 text-gray-600 dark:text-gray-400'>
            My projects combine applied machine learning
            with software development and domain-specific
            problem solving.
          </p>

          <div className='mt-7 grid gap-5 md:grid-cols-2'>

            {interestAreas.map((area) => {
              const Icon = area.icon

              return (
                <article
                  key={area.title}
                  className='rounded-2xl border border-gray-200 bg-white/80 p-6 transition hover:border-purple-300 hover:shadow-lg dark:border-gray-800 dark:bg-gray-950/65 dark:hover:border-purple-700'
                >

                  <span className='inline-flex rounded-xl bg-purple-100 p-3 text-purple-700 dark:bg-purple-950 dark:text-purple-300'>
                    <Icon
                      size={24}
                      aria-hidden='true'
                    />
                  </span>

                  <h3 className='mt-5 text-lg font-bold text-gray-950 dark:text-white'>
                    {area.title}
                  </h3>

                  <p className='mt-3 text-sm leading-7 text-gray-600 dark:text-gray-300'>
                    {area.description}
                  </p>

                  <div className='mt-5 flex flex-wrap gap-2'>

                    {area.tags.map((tag) => (
                      <span
                        key={tag}
                        className='rounded-full border border-gray-200 px-3 py-1 text-xs text-gray-600 dark:border-gray-700 dark:text-gray-300'
                      >
                        {tag}
                      </span>
                    ))}

                  </div>

                </article>
              )
            })}

          </div>

        </section>

        {/* ====================================
            EXPERIENCE TIMELINE
        ==================================== */}

        <section className='border-b border-gray-200 py-12 dark:border-gray-800'>

          <p className='text-xs font-semibold tracking-[.2em] text-purple-600 uppercase dark:text-purple-300'>
            03 / MY JOURNEY
          </p>

          <h2 className='mt-2 text-2xl font-bold text-gray-950 md:text-3xl dark:text-white'>
            Academic & Professional Experience
          </h2>

          <div className='mt-8 space-y-5'>

            {experiences.map((experience) => (
              <article
                key={`${experience.title}-${experience.period}`}
                className='relative rounded-2xl border border-gray-200 bg-white/75 p-5 md:p-6 dark:border-gray-800 dark:bg-gray-950/65'
              >

                <div className='flex flex-wrap items-start justify-between gap-3'>

                  <div>

                    <h3 className='text-lg font-bold text-gray-950 dark:text-white'>
                      {experience.title}
                    </h3>

                    <p className='mt-1 text-sm font-semibold text-purple-700 dark:text-purple-300'>
                      {experience.organization}
                    </p>

                  </div>

                  <span className='rounded-full border border-gray-200 px-3 py-1.5 text-xs font-semibold text-gray-600 dark:border-gray-700 dark:text-gray-300'>
                    {experience.period}
                  </span>

                </div>

                <p className='mt-4 text-sm leading-7 text-gray-600 dark:text-gray-300'>
                  {experience.description}
                </p>

                {experience.link && (
                  <Link
                    href={experience.link}
                    className='mt-4 inline-flex items-center gap-1 text-sm font-semibold text-purple-700 hover:underline dark:text-purple-300'
                  >
                    {experience.linkLabel}

                    <ArrowUpRight
                      size={15}
                      aria-hidden='true'
                    />
                  </Link>
                )}

              </article>
            ))}

          </div>

        </section>

        {/* ====================================
            SELECTED PROJECTS
        ==================================== */}

        <section className='border-b border-gray-200 py-12 dark:border-gray-800'>

          <p className='text-xs font-semibold tracking-[.2em] text-purple-600 uppercase dark:text-purple-300'>
            04 / SELECTED WORK
          </p>

          <h2 className='mt-2 text-2xl font-bold text-gray-950 md:text-3xl dark:text-white'>
            Projects That Represent My Work
          </h2>

          <p className='mt-3 max-w-2xl text-sm leading-7 text-gray-600 dark:text-gray-400'>
            A few highlights from my undergraduate
            research, industry experience, and
            software engineering work.
          </p>

          <div className='mt-7 grid gap-5 md:grid-cols-3'>

            {featuredWork.map((project) => (
              <article
                key={project.title}
                className='flex flex-col rounded-2xl border border-gray-200 bg-white/80 p-5 transition hover:border-purple-300 hover:shadow-lg dark:border-gray-800 dark:bg-gray-950/65 dark:hover:border-purple-700'
              >

                <p className='text-[11px] font-semibold tracking-wider text-purple-700 uppercase dark:text-purple-300'>
                  {project.category}
                </p>

                <h3 className='mt-3 text-lg font-bold text-gray-950 dark:text-white'>
                  {project.title}
                </h3>

                <p className='mt-3 flex-1 text-sm leading-7 text-gray-600 dark:text-gray-300'>
                  {project.description}
                </p>

                <Link
                  href={project.href}
                  className='mt-6 inline-flex items-center gap-1 text-sm font-semibold text-purple-700 hover:underline dark:text-purple-300'
                >
                  View Project

                  <ArrowUpRight
                    size={15}
                    aria-hidden='true'
                  />
                </Link>

              </article>
            ))}

          </div>

          <div className='mt-7 flex flex-wrap gap-3'>

            <Link
              href='/portfolio'
              className='inline-flex items-center gap-2 rounded-lg bg-purple-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-purple-700'
            >
              View All Projects

              <ArrowRight
                size={16}
                aria-hidden='true'
              />
            </Link>

            <Link
              href='/research'
              className='inline-flex items-center gap-2 rounded-lg border border-gray-300 px-5 py-3 text-sm font-semibold text-gray-900 transition hover:border-purple-400 dark:border-gray-700 dark:text-white'
            >
              Research & Projects
            </Link>

          </div>

        </section>

        {/* ====================================
            CONTACT SECTION
        ==================================== */}

        <section className='py-12'>

          <div className='rounded-2xl border border-purple-200 bg-purple-50/70 p-6 md:p-8 dark:border-purple-900 dark:bg-purple-950/20'>

            <p className='text-xs font-semibold tracking-[.2em] text-purple-700 uppercase dark:text-purple-300'>
              05 / GET IN TOUCH
            </p>

            <h2 className='mt-3 text-2xl font-bold text-gray-950 md:text-3xl dark:text-white'>
              Let’s Connect
            </h2>

            <p className='mt-4 max-w-2xl text-sm leading-7 text-gray-600 dark:text-gray-300'>
              Whether you’re interested in my research,
              software projects, or potential collaboration,
              feel free to get in touch.
            </p>

            <div className='mt-6 flex flex-wrap gap-3'>

              <a
                href={gmailComposeUrl()}
                target='_blank'
                rel='noopener noreferrer'
                className='inline-flex items-center gap-2 rounded-lg bg-purple-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-purple-700'
              >
                <Mail
                  size={17}
                  aria-hidden='true'
                />

                Email via Gmail
              </a>

              <a
                href={LINKEDIN_URL}
                target='_blank'
                rel='noopener noreferrer'
                className='inline-flex items-center gap-2 rounded-lg border border-gray-300 px-5 py-3 text-sm font-semibold text-gray-900 transition hover:border-purple-400 dark:border-gray-700 dark:text-white'
              >
                LinkedIn

                <ExternalLink
                  size={16}
                  aria-hidden='true'
                />
              </a>

              <a
                href={GITHUB_URL}
                target='_blank'
                rel='noopener noreferrer'
                className='inline-flex items-center gap-2 rounded-lg border border-gray-300 px-5 py-3 text-sm font-semibold text-gray-900 transition hover:border-purple-400 dark:border-gray-700 dark:text-white'
              >
                GitHub

                <ExternalLink
                  size={16}
                  aria-hidden='true'
                />
              </a>

            </div>

            <p className='mt-5 text-xs text-gray-500 dark:text-gray-400'>
              Direct email: {SITE_AUTHOR.email}
            </p>

          </div>

        </section>

      </AppLayoutPage>
    </>
  )
}
