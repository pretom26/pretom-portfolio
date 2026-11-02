
import type { Metadata } from 'next'
import Link from 'next/link'

import {
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  BriefcaseBusiness,
  Code2,
  ExternalLink,
  FileText,
  GraduationCap,
  Mail,
  MapPin,
  MessageCircle,
  Send
} from 'lucide-react'

import { StarfieldBackground } from '@/components/site/StarfieldBackground'
import { AppLayoutPage } from '@/components/site/templates/AppLayoutPage'

import {
  PERSON_ID,
  SITE_AUTHOR,
  SITE_NAME,
  SITE_URL
} from '@/libs/constants/site'

// ============================================
// CONTACT PAGE SETTINGS
// ============================================

const BASE_URL = SITE_URL.replace(/\/+$/, '')
const CONTACT_URL = `${BASE_URL}/contact`

const LINKEDIN_URL =
  'https://www.linkedin.com/in/pretom-areefin-pranto-a97651290/'

const GITHUB_URL =
  'https://github.com/pretom26'

const PAGE_DESCRIPTION =
  'Contact Pretom Areefin Pranto for machine learning, AI research, software engineering, professional opportunities, and collaboration.'

// ============================================
// SEO METADATA
// ============================================

export const metadata: Metadata = {
  title: `Contact | ${SITE_NAME}`,

  description: PAGE_DESCRIPTION,

  alternates: {
    canonical: CONTACT_URL
  },

  openGraph: {
    title: `Contact | ${SITE_NAME}`,
    description: PAGE_DESCRIPTION,
    url: CONTACT_URL,
    siteName: SITE_NAME,
    type: 'website'
  },

  twitter: {
    card: 'summary',
    title: `Contact | ${SITE_NAME}`,
    description: PAGE_DESCRIPTION
  }
}

// ============================================
// GMAIL COMPOSE LINK
// ============================================

function gmailComposeUrl(
  subject: string = 'Portfolio inquiry'
) {
  const params = new URLSearchParams({
    view: 'cm',
    fs: '1',
    to: SITE_AUTHOR.email,
    su: subject,
    body:
      'Hi Pretom,\n\n' +
      'I visited your portfolio and would like to connect regarding:\n\n' +
      '\n\nBest regards,\n'
  })

  return `https://mail.google.com/mail/?${params.toString()}`
}

// ============================================
// COLLABORATION TOPICS
// ============================================

const collaborationTopics = [
  {
    title: 'Machine Learning & AI',
    description:
      'Machine learning projects, applied AI, computer vision, model evaluation, and intelligent applications.',
    icon: Code2,
    emailSubject: 'Machine Learning / AI Collaboration'
  },

  {
    title: 'Academic & Research',
    description:
      'Research discussions and collaborations involving healthcare AI, medical imaging, and multimodal learning.',
    icon: GraduationCap,
    emailSubject: 'Academic Research Collaboration'
  },

  {
    title: 'Internships & Professional Opportunities',
    description:
      'Machine learning engineering, AI development, software engineering, and related professional opportunities.',
    icon: BriefcaseBusiness,
    emailSubject: 'Professional Opportunity'
  },

  {
    title: 'Projects & General Inquiries',
    description:
      'Questions about my GitHub projects, applications, technical approach, or other relevant ideas.',
    icon: MessageCircle,
    emailSubject: 'Portfolio Project Inquiry'
  }
]

// ============================================
// QUICK LINKS
// ============================================

const quickLinks = [
  {
    title: 'Research',
    description:
      'Explore my undergraduate thesis and technical research projects.',
    href: '/research',
    icon: BookOpen
  },

  {
    title: 'Portfolio',
    description:
      'View my machine learning, AI, and software engineering projects.',
    href: '/portfolio',
    icon: Code2
  },

  {
    title: 'Resume',
    description:
      'Learn more about my education, experience, and technical skills.',
    href: '/resume',
    icon: FileText
  },

  {
    title: 'About Me',
    description:
      'Read about my academic background and professional interests.',
    href: '/about',
    icon: GraduationCap
  }
]

// ============================================
// STRUCTURED DATA
// ============================================

const contactPageSchema = {
  '@context': 'https://schema.org',

  '@type': 'ContactPage',

  '@id': `${CONTACT_URL}#contact`,

  url: CONTACT_URL,

  name: `Contact | ${SITE_NAME}`,

  description: PAGE_DESCRIPTION,

  mainEntity: {
    '@type': 'Person',

    '@id': PERSON_ID,

    name: SITE_AUTHOR.name,

    email: SITE_AUTHOR.email,

    sameAs: [
      LINKEDIN_URL,
      GITHUB_URL
    ]
  }
}

// ============================================
// CONTACT PAGE
// ============================================

export default function ContactPage() {
  return (
    <>
      <StarfieldBackground />

      <AppLayoutPage className='pt-6 md:pt-10'>

        {/* STRUCTURED DATA */}

        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(
              contactPageSchema
            ).replace(/</g, '\\u003c')
          }}
        />

        {/* ====================================
            HERO
        ==================================== */}

        <header className='border-b border-gray-200 pb-12 dark:border-gray-800'>

          <p className='text-xs font-semibold tracking-[0.2em] text-purple-600 uppercase dark:text-purple-300'>
            LET&apos;S CONNECT / CONTACT
          </p>

          <div className='mt-6 grid items-start gap-9 lg:grid-cols-[1.4fr_1fr]'>

            {/* Hero text */}

            <div>

              <h1 className='bg-gradient-to-r from-purple-700 via-purple-600 to-pink-500 bg-clip-text text-4xl font-extrabold tracking-tight text-transparent md:text-6xl dark:from-purple-300 dark:via-purple-400 dark:to-pink-300'>
                Get in Touch.
              </h1>

              <h2 className='mt-6 text-xl font-semibold text-gray-950 md:text-2xl dark:text-white'>
                Have a project, research idea, or opportunity?
              </h2>

              <p className='mt-5 max-w-2xl text-base leading-8 text-gray-700 dark:text-gray-300'>
                I&apos;m Pretom Areefin Pranto,
                a Computer Science undergraduate
                at BRAC University with interests
                in machine learning, healthcare AI,
                and software engineering.
              </p>

              <p className='mt-4 max-w-2xl text-sm leading-8 text-gray-600 md:text-base dark:text-gray-300'>
                If you&apos;d like to discuss
                my research, technical projects,
                potential collaborations, or
                professional opportunities,
                feel free to reach out.
              </p>

              <div className='mt-7 flex flex-wrap gap-3'>

                <a
                  href={gmailComposeUrl()}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='inline-flex items-center gap-2 rounded-lg bg-purple-600 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-purple-700'
                >
                  <Send
                    size={17}
                    aria-hidden='true'
                  />

                  Send an Email
                </a>

                <a
                  href={LINKEDIN_URL}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='inline-flex items-center gap-2 rounded-lg border border-gray-300 px-5 py-3 text-sm font-semibold text-gray-900 transition-colors hover:border-purple-400 dark:border-gray-700 dark:text-white dark:hover:border-purple-500'
                >
                  Connect on LinkedIn

                  <ExternalLink
                    size={16}
                    aria-hidden='true'
                  />
                </a>

              </div>

            </div>

            {/* Contact information panel */}

            <aside className='rounded-2xl border border-purple-200 bg-white/90 p-6 shadow-lg shadow-purple-100/40 dark:border-purple-900 dark:bg-gray-950/80 dark:shadow-none'>

              <p className='text-xs font-semibold tracking-[0.2em] text-purple-700 uppercase dark:text-purple-300'>
                CONTACT INFORMATION
              </p>

              <h3 className='mt-3 text-xl font-bold text-gray-950 dark:text-white'>
                Find Me Online
              </h3>

              <div className='mt-6 space-y-6'>

                {/* Email */}

                <div className='flex items-start gap-3'>

                  <span className='rounded-lg bg-purple-100 p-2.5 text-purple-700 dark:bg-purple-950 dark:text-purple-300'>
                    <Mail
                      size={20}
                      aria-hidden='true'
                    />
                  </span>

                  <div className='min-w-0'>

                    <p className='text-xs font-semibold text-gray-500 uppercase dark:text-gray-400'>
                      Email
                    </p>

                    <a
                      href={gmailComposeUrl()}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='mt-1 block break-all text-sm font-medium text-gray-900 hover:text-purple-700 dark:text-gray-200 dark:hover:text-purple-300'
                    >
                      {SITE_AUTHOR.email}
                    </a>

                  </div>

                </div>

                {/* Location */}

                <div className='flex items-start gap-3'>

                  <span className='rounded-lg bg-purple-100 p-2.5 text-purple-700 dark:bg-purple-950 dark:text-purple-300'>
                    <MapPin
                      size={20}
                      aria-hidden='true'
                    />
                  </span>

                  <div>

                    <p className='text-xs font-semibold text-gray-500 uppercase dark:text-gray-400'>
                      Based In
                    </p>

                    <p className='mt-1 text-sm font-medium text-gray-900 dark:text-gray-200'>
                      Dhaka, Bangladesh
                    </p>

                  </div>

                </div>

                {/* LinkedIn */}

                <div className='flex items-start gap-3'>

                  <span className='rounded-lg bg-purple-100 p-2.5 text-purple-700 dark:bg-purple-950 dark:text-purple-300'>
                    <BriefcaseBusiness
                      size={20}
                      aria-hidden='true'
                    />
                  </span>

                  <div>

                    <p className='text-xs font-semibold text-gray-500 uppercase dark:text-gray-400'>
                      Professional Profile
                    </p>

                    <a
                      href={LINKEDIN_URL}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='mt-1 inline-flex items-center gap-1 text-sm font-medium text-gray-900 hover:text-purple-700 dark:text-gray-200 dark:hover:text-purple-300'
                    >
                      LinkedIn

                      <ArrowUpRight
                        size={15}
                        aria-hidden='true'
                      />
                    </a>

                  </div>

                </div>

                {/* GitHub */}

                <div className='flex items-start gap-3'>

                  <span className='rounded-lg bg-purple-100 p-2.5 text-purple-700 dark:bg-purple-950 dark:text-purple-300'>
                    <Code2
                      size={20}
                      aria-hidden='true'
                    />
                  </span>

                  <div>

                    <p className='text-xs font-semibold text-gray-500 uppercase dark:text-gray-400'>
                      Code & Projects
                    </p>

                    <a
                      href={GITHUB_URL}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='mt-1 inline-flex items-center gap-1 text-sm font-medium text-gray-900 hover:text-purple-700 dark:text-gray-200 dark:hover:text-purple-300'
                    >
                      github.com/pretom26

                      <ArrowUpRight
                        size={15}
                        aria-hidden='true'
                      />
                    </a>

                  </div>

                </div>

              </div>

            </aside>

          </div>

        </header>

        {/* ====================================
            COLLABORATION SECTION
        ==================================== */}

        <section className='border-b border-gray-200 py-12 dark:border-gray-800'>

          <p className='text-xs font-semibold tracking-[0.2em] text-purple-600 uppercase dark:text-purple-300'>
            01 / COLLABORATION
          </p>

          <h2 className='mt-3 text-2xl font-bold text-gray-950 md:text-3xl dark:text-white'>
            What Can We Discuss?
          </h2>

          <p className='mt-4 max-w-3xl text-sm leading-7 text-gray-600 dark:text-gray-300'>
            Here are a few areas where I&apos;m
            interested in connecting with other
            students, researchers, developers,
            and professionals.
          </p>

          <div className='mt-8 grid gap-5 md:grid-cols-2'>

            {collaborationTopics.map((topic) => {
              const Icon = topic.icon

              return (
                <article
                  key={topic.title}
                  className='flex flex-col rounded-2xl border border-gray-200 bg-white/80 p-6 transition-colors hover:border-purple-300 dark:border-gray-800 dark:bg-gray-950/65 dark:hover:border-purple-700'
                >

                  <div className='flex items-center gap-3'>

                    <span className='rounded-xl bg-purple-100 p-3 text-purple-700 dark:bg-purple-950 dark:text-purple-300'>
                      <Icon
                        size={22}
                        aria-hidden='true'
                      />
                    </span>

                    <h3 className='text-lg font-bold text-gray-950 dark:text-white'>
                      {topic.title}
                    </h3>

                  </div>

                  <p className='mt-4 flex-1 text-sm leading-7 text-gray-600 dark:text-gray-300'>
                    {topic.description}
                  </p>

                  <a
                    href={gmailComposeUrl(topic.emailSubject)}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='mt-6 inline-flex w-fit items-center gap-2 text-sm font-semibold text-purple-700 hover:underline dark:text-purple-300'
                  >
                    Discuss This Topic

                    <ArrowUpRight
                      size={16}
                      aria-hidden='true'
                    />
                  </a>

                </article>
              )
            })}

          </div>

        </section>

        {/* ====================================
            EXPLORE MORE
        ==================================== */}

        <section className='border-b border-gray-200 py-12 dark:border-gray-800'>

          <p className='text-xs font-semibold tracking-[0.2em] text-purple-600 uppercase dark:text-purple-300'>
            02 / EXPLORE
          </p>

          <h2 className='mt-3 text-2xl font-bold text-gray-950 md:text-3xl dark:text-white'>
            Explore My Work
          </h2>

          <p className='mt-4 max-w-3xl text-sm leading-7 text-gray-600 dark:text-gray-300'>
            Want to know more about my academic
            background and projects before
            getting in touch? These pages
            are a good starting point.
          </p>

          <div className='mt-8 grid gap-4 sm:grid-cols-2'>

            {quickLinks.map((item) => {
              const Icon = item.icon

              return (
                <Link
                  key={item.title}
                  href={item.href}
                  className='group flex items-start gap-4 rounded-xl border border-gray-200 bg-white/80 p-5 transition-colors hover:border-purple-300 dark:border-gray-800 dark:bg-gray-950/65 dark:hover:border-purple-700'
                >

                  <span className='rounded-lg bg-purple-100 p-3 text-purple-700 dark:bg-purple-950 dark:text-purple-300'>
                    <Icon
                      size={20}
                      aria-hidden='true'
                    />
                  </span>

                  <div className='flex-1'>

                    <div className='flex items-center justify-between gap-3'>

                      <h3 className='font-semibold text-gray-950 dark:text-white'>
                        {item.title}
                      </h3>

                      <ArrowUpRight
                        size={17}
                        className='text-gray-400 transition-colors group-hover:text-purple-600 dark:group-hover:text-purple-300'
                        aria-hidden='true'
                      />

                    </div>

                    <p className='mt-2 text-sm leading-6 text-gray-600 dark:text-gray-300'>
                      {item.description}
                    </p>

                  </div>

                </Link>
              )
            })}

          </div>

        </section>

        {/* ====================================
            FINAL CONTACT CTA
        ==================================== */}

        <section className='py-12'>

          <div className='rounded-2xl border border-purple-200 bg-gradient-to-br from-purple-50 to-pink-50/50 p-7 md:p-10 dark:border-purple-900 dark:from-purple-950/40 dark:to-gray-950/50'>

            <p className='text-xs font-semibold tracking-[0.2em] text-purple-700 uppercase dark:text-purple-300'>
              03 / START A CONVERSATION
            </p>

            <h2 className='mt-4 text-2xl font-extrabold text-gray-950 md:text-3xl dark:text-white'>
              Let&apos;s Build Something Meaningful.
            </h2>

            <p className='mt-5 max-w-2xl text-sm leading-8 text-gray-700 dark:text-gray-300'>
              I enjoy learning through research,
              collaboration, and hands-on projects.
              If my work aligns with what you&apos;re
              exploring, I&apos;d be happy to hear
              from you.
            </p>

            <div className='mt-7 flex flex-wrap gap-3'>

              <a
                href={gmailComposeUrl('Let us connect')}
                target='_blank'
                rel='noopener noreferrer'
                className='inline-flex items-center gap-2 rounded-lg bg-purple-600 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-purple-700'
              >
                <Mail
                  size={18}
                  aria-hidden='true'
                />

                Email Me

                <ArrowRight
                  size={16}
                  aria-hidden='true'
                />
              </a>

              <a
                href={LINKEDIN_URL}
                target='_blank'
                rel='noopener noreferrer'
                className='inline-flex items-center gap-2 rounded-lg border border-gray-300 px-5 py-3 text-sm font-semibold text-gray-900 transition-colors hover:border-purple-400 dark:border-gray-700 dark:text-white'
              >
                LinkedIn

                <ExternalLink
                  size={16}
                  aria-hidden='true'
                />
              </a>

            </div>

          </div>

        </section>

      </AppLayoutPage>
    </>
  )
}
