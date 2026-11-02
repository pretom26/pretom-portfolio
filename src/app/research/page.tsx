
import Image from 'next/image'

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
const PAGE_URL = `${BASE_URL}/research`

const PAGE_TITLE = `Research & Projects | ${SITE_NAME}`

const PAGE_DESCRIPTION =
  'Explore Pretom Areefin Pranto’s completed undergraduate thesis, machine learning projects, software engineering applications, and professional ML experience.'

const LINKEDIN_URL =
  'https://www.linkedin.com/in/pretom-areefin-pranto-a97651290/'

const GITHUB_URL =
  'https://github.com/pretom26'

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,

  alternates: {
    canonical: PAGE_URL
  },

  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    url: PAGE_URL,
    siteName: SITE_NAME,
    type: 'website'
  },

  twitter: {
    card: 'summary',
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION
  },

  keywords: [
    'Pretom Areefin Pranto',
    'NeuroVentura',
    'BRAC University',
    'Machine Learning',
    'Healthcare AI',
    'Computer Vision',
    'Software Engineering',
    'Multimodal Machine Learning',
    'Deep Learning'
  ]
}

// ============================================
// DATA TYPES
// ============================================

type Visual =
  | 'brain'
  | 'lungs'
  | 'eye'
  | 'music'
  | 'protein'
  | 'voice'
  | 'city'
  | 'campus'
  | 'health'
  | 'terminal'
  | 'analytics'

type ProjectLink = {
  label: string
  href: string
  primary?: boolean
}

type Project = {
  id: string
  title: string
  subtitle: string
  description: string
  tags: string[]
  visual: Visual
  accent: string
  links?: ProjectLink[]
  cover?: string
  highlights?: string[]
  featured?: boolean
  note?: string
}

type Section = {
  id: string
  number: string
  title: string
  eyebrow: string
  description: string
  projects: Project[]
}

// ============================================
// ALL RESEARCH AND PROJECT DATA
// ============================================

const sections: Section[] = [
  {
    id: 'research-experience',
    number: '01',
    title: 'Research Experience',
    eyebrow: 'Completed undergraduate thesis',

    description:
      'Multimodal machine learning and healthcare-focused undergraduate research.',

    projects: [
      {
        id: 'neuroventura',
        title: 'NeuroVentura',
        subtitle: 'Undergraduate Thesis · Completed 2026',

        visual: 'brain',
        accent: '#8b5cf6',
        featured: true,

        description:
          'A Modern Approach to Predict Alzheimer’s Disease Risk and Progression Through Multimodal Machine Learning Models. Developed a late-fusion framework combining a frozen MONAI 3D DenseNet-121 MRI branch, XGBoost on MMSE, age and gender, and a residual MLP on a matched cohort.',

        highlights: [
          'Supervisor: Md. Saiful Bari Siddiqui',
          'Co-supervisor: Dr. Swakkhar Shatabda',
          'Completed at BRAC University'
        ],

        tags: [
          'MONAI',
          '3D DenseNet-121',
          'XGBoost',
          'PyTorch',
          'Multimodal ML'
        ],

        note:
          'Completed undergraduate thesis; no publication is claimed.'
      }
    ]
  },

  {
    id: 'machine-learning',
    number: '02',
    title: 'Machine Learning & AI',
    eyebrow: 'Academic and personal projects',

    description:
      'Computer vision, biological data analysis, neural networks, and AI-powered applications.',

    projects: [
      {
        id: 'lungcare',
        title: 'LungCare',
        subtitle: 'Lung Cancer Detection · Conference Project 2025',

        visual: 'lungs',
        accent: '#0ea5e9',

        description:
          'A deep learning pipeline for lung cancer subtype classification using histopathology images, including image preprocessing and prediction visualization. Associated with the International Biotechnology Conference 2025.',

        tags: [
          'Deep Learning',
          'Histopathology',
          'Computer Vision'
        ],

        note:
          'Conference-associated project; publication is not claimed.'
      },

      {
        id: 'retinopathy',
        title: 'Diabetic Retinopathy Severity Classification',
        subtitle: 'CSE427 · Machine Learning',

        visual: 'eye',
        accent: '#14b8a6',

        description:
          'Four-class diabetic retinopathy severity classification using ResNet50 transfer learning, class-weighted training, and Grad-CAM visualizations.',

        tags: [
          'ResNet50',
          'Transfer Learning',
          'Grad-CAM'
        ],

        links: [
          {
            label: 'View GitHub Repository',
            href:
              'https://github.com/pretom26/Automated-Diabetic-Retinopathy-Severity-Classification-Using-Retinal-Fundus-Images',
            primary: true
          }
        ]
      },

      {
        id: 'music-generation',
        title: 'Music Generation Using Unsupervised Learning',
        subtitle: 'CSE425 · Neural Networks',

        visual: 'music',
        accent: '#ec4899',

        description:
          'Compared LSTM autoencoder, VAE, and Transformer approaches using MAESTRO v3.0.0 MIDI files and piano-roll representations.',

        tags: [
          'LSTM',
          'VAE',
          'Transformer',
          'MIDI'
        ],

        links: [
          {
            label: 'View GitHub Repository',
            href:
              'https://github.com/pretom26/CSE425-Neural-Network-Project-Music-Generation-Using-Unsupervised-Learning',
            primary: true
          }
        ]
      },

      {
        id: 'mice-protein',
        title: 'Mice Protein Expression Classifier',
        subtitle: 'CSE422 · Machine Learning',

        visual: 'protein',
        accent: '#84cc16',

        description:
          'Machine learning classification workflows for mouse protein-expression data using preprocessing, feature engineering, and supervised learning algorithms.',

        tags: [
          'Python',
          'Biological Data',
          'Classification'
        ],

        links: [
          {
            label: 'Open Google Colab',
            href:
              'https://colab.research.google.com/drive/1lE0DurX6ReGAsOw1PTHVa3rryiqlcn3e',
            primary: true
          }
        ]
      },

      {
        id: 'pretbuddy',
        title: 'PretBuddy — AI Voice Assistant',
        subtitle: 'Personal Project',

        visual: 'voice',
        accent: '#a78bfa',

        description:
          'A real-time Python AI voice assistant using AssemblyAI, Groq-powered web search, and ElevenLabs.',

        tags: [
          'Python',
          'AssemblyAI',
          'Groq',
          'ElevenLabs'
        ],

        links: [
          {
            label: 'View GitHub Repository',
            href:
              'https://github.com/pretom26/PretBuddy_Realtime_AI_Chat_Voice_Assistant',
            primary: true
          }
        ]
      }
    ]
  },

  {
    id: 'software-engineering',
    number: '03',
    title: 'Software Engineering',
    eyebrow: 'Web applications and developer tools',

    description:
      'Full-stack platforms, healthcare software, and tested Python developer tools.',

    projects: [
      {
        id: 'abar-nosto',
        title: 'Abar Nosto!',
        subtitle: 'CSE471 · MERN · Deployed Application',

        visual: 'city',
        accent: '#f59e0b',

        description:
          'A community issue monitoring platform featuring issue reporting, an activity feed, a reputation system, offline drafts, and administrative tools. Deployed on Vercel.',

        tags: [
          'MongoDB',
          'Express',
          'React',
          'Node.js'
        ],

        links: [
          {
            label: 'Open Live Application',
            href:
              'https://abar-nosto-a-community-issue-monito.vercel.app/login',
            primary: true
          }
        ]
      },

      {
        id: 'student-hub',
        title: 'BRACU Student Hub',
        subtitle: 'CSE470 · Software Engineering',

        visual: 'campus',
        accent: '#6366f1',

        description:
          'A MERN-based academic platform for resources, exam deadlines, calendar features, faculty reviews, and administrator-led content management.',

        tags: [
          'MERN',
          'React',
          'MongoDB'
        ],

        links: [
          {
            label: 'View Team Repository',
            href:
              'https://github.com/sora-rara/bracu-student-hub',
            primary: true
          }
        ]
      },

      {
        id: 'aidtrack',
        title: 'AidTrack',
        subtitle: 'CSE370 · Database Management',

        visual: 'health',
        accent: '#f43f5e',

        description:
          'A database-backed healthcare management platform for appointments, patient records, and doctor–patient communication using PHP, HTML, and CSS.',

        tags: [
          'PHP',
          'HTML',
          'CSS',
          'Databases'
        ]
      },

      {
        id: 'weather-cli',
        title: 'Weather CLI',
        subtitle: 'Python Package · Personal Project',

        visual: 'terminal',
        accent: '#22c55e',

        description:
          'A typed Python command-line application featuring TTL caching, rich terminal output, pytest tests with 94% reported coverage, and GitHub Actions CI.',

        tags: [
          'Python',
          'Pytest',
          'GitHub Actions',
          'Caching'
        ],

        links: [
          {
            label: 'View GitHub Repository',
            href:
              'https://github.com/pretom26/weather-cli',
            primary: true
          }
        ]
      }
    ]
  },

  {
    id: 'industry-project',
    number: '04',
    title: 'Professional ML Project',
    eyebrow: 'FlyRank AI · July–October 2026',

    description:
      'Practical machine learning, search analytics, and leakage-aware model evaluation.',

    projects: [
      {
        id: 'flyrank',
        title: 'Google Search Ranking & Discoverability',
        subtitle:
          'FlyRank AI · Machine Learning Engineering Internship',

        visual: 'analytics',
        accent: '#38bdf8',
        featured: true,

        description:
          'A content-opportunity scoring capstone using approximately 30,000 Google Search Console and GA4 records. Applied data wrangling, embeddings, clustering, and opportunity modeling, and corrected overly optimistic evaluation using client-grouped train/test splits.',

        highlights: [
          'Initial Precision@10: 0.70',
          'Leakage-aware out-of-sample Precision@10: 0.40',
          'Capstone accepted by the lead track mentor'
        ],

        tags: [
          'Machine Learning',
          'Embeddings',
          'Clustering',
          'Evaluation'
        ],

        links: [
          {
            label: 'View Internship Capstone',
            href:
              'https://github.com/pretom26/ml_internship_flyrankAI',
            primary: true
          }
        ]
      }
    ]
  }
]

// ============================================
// FLATTEN PROJECTS FOR SEO
// ============================================

const allProjects = sections.flatMap(
  (section) => section.projects
)

// ============================================
// GMAIL COMPOSE HELPER
// Opens Gmail in browser.
// Does not automatically send an email.
// ============================================

function gmailComposeUrl(projectTitle?: string) {
  const subject = projectTitle
    ? `Project inquiry: ${projectTitle}`
    : 'Portfolio inquiry'

  const body = projectTitle
    ? `Hi Pretom,

I came across your project "${projectTitle}" on your portfolio.

I would like to learn more about this project.

Best regards,`
    : `Hi Pretom,

I visited your portfolio and would like to get in touch.

Best regards,`

  const params = new URLSearchParams({
    view: 'cm',
    fs: '1',
    to: SITE_AUTHOR.email,
    su: subject,
    body: body
  })

  return `https://mail.google.com/mail/?${params.toString()}`
}

// ============================================
// SVG PROJECT ILLUSTRATIONS
// Explicit white stroke and fill ensure
// visibility in both light and dark modes.
// ============================================

function ProjectIllustration({
  visual
}: {
  visual: Visual
}) {
  const shape = (() => {
    switch (visual) {
      case 'brain':
        return (
          <>
            <path d='M77 33c-10-20-35-7-33 11-18 3-19 28-5 35-7 21 20 32 32 17V32m6 1c10-20 35-7 33 11 18 3 19 28 5 35 7 21-20 32-32 17V32' />

            <path d='M56 47l13 10-13 17m39-27-13 10 13 17M43 80l19-7m51 7-19-7' />

            <circle
              cx='69'
              cy='57'
              r='4'
              fill='#f8fafc'
            />

            <circle
              cx='82'
              cy='57'
              r='4'
              fill='#f8fafc'
            />
          </>
        )

      case 'lungs':
        return (
          <path d='M75 28v30L59 42c-15 3-30 27-30 49 0 15 26 13 34 1l12-21m10-43v30l16-16c15 3 30 27 30 49 0 15-26 13-34 1L85 71M80 23v31' />
        )

      case 'eye':
        return (
          <>
            <path d='M16 64s24-35 64-35 64 35 64 35-24 35-64 35S16 64 16 64Z' />

            <circle
              cx='80'
              cy='64'
              r='23'
            />

            <circle
              cx='80'
              cy='64'
              r='11'
              fill='#f8fafc'
            />
          </>
        )

      case 'music':
        return (
          <>
            <path d='M65 93V31l51-10v62M65 43l51-10' />

            <ellipse
              cx='51'
              cy='94'
              rx='14'
              ry='9'
              fill='#f8fafc'
            />

            <ellipse
              cx='102'
              cy='84'
              rx='14'
              ry='9'
              fill='#f8fafc'
            />

            <path d='M31 46h12m-6-6v12' />
          </>
        )

      case 'protein':
        return (
          <>
            <path d='M42 74 69 42 100 54 120 83 91 102 54 95 42 74M69 42 91 102M100 54 54 95' />

            {[
              [42, 74],
              [69, 42],
              [100, 54],
              [120, 83],
              [91, 102],
              [54, 95]
            ].map(([x, y], index) => (
              <circle
                key={index}
                cx={x}
                cy={y}
                r='8'
                fill='#f8fafc'
              />
            ))}
          </>
        )

      case 'voice':
        return (
          <>
            <rect
              x='64'
              y='24'
              width='32'
              height='59'
              rx='16'
            />

            <path d='M48 61c0 21 13 36 32 36s32-15 32-36M80 97v19m-19 0h38' />

            <path d='M27 54v20m106-20v20M16 59v10m128-10v10' />
          </>
        )

      case 'city':
        return (
          <>
            <path d='M23 105V59h36v46M68 105V35h38v70m8 0V67h24v38M17 105h126' />

            <path d='M35 72h11m-11 15h11m34-39h12m-12 16h12m-12 16h12m32 0h6' />

            <path d='M47 40c0-9 13-9 13 0 0 5-7 13-7 13s-6-8-6-13Z' />
          </>
        )

      case 'campus':
        return (
          <>
            <path d='M16 52 80 22l64 30-64 30-64-30Zm25 13v30c22 15 56 15 78 0V65M136 57v32m-56-7v21' />

            <path d='M48 101h64' />
          </>
        )

      case 'health':
        return (
          <>
            <rect
              x='32'
              y='28'
              width='96'
              height='80'
              rx='12'
            />

            <path d='M80 47v42M59 68h42M48 20h64' />
          </>
        )

      case 'terminal':
        return (
          <>
            <rect
              x='18'
              y='29'
              width='124'
              height='78'
              rx='10'
            />

            <path d='M18 48h124M36 67l12 10-12 10m25 1h35' />

            <circle
              cx='31'
              cy='39'
              r='2'
              fill='#f8fafc'
            />

            <circle
              cx='41'
              cy='39'
              r='2'
              fill='#f8fafc'
            />
          </>
        )

      case 'analytics':
        return (
          <>
            <path d='M23 104V30m0 74h118' />

            <path d='M34 87 62 74l25 9 30-34 22-13' />

            {[
              [34, 87],
              [62, 74],
              [87, 83],
              [117, 49],
              [139, 36]
            ].map(([x, y], index) => (
              <circle
                key={index}
                cx={x}
                cy={y}
                r='4'
                fill='#f8fafc'
              />
            ))}
          </>
        )
    }
  })()

  return (
    <svg
      viewBox='0 0 160 130'
      fill='none'
      stroke='#f8fafc'
      strokeWidth='3'
      strokeLinecap='round'
      strokeLinejoin='round'
      style={{
        color: '#f8fafc',
        stroke: '#f8fafc'
      }}
      className='h-28 w-36 drop-shadow-xl md:h-32 md:w-40'
      aria-hidden='true'
    >
      {shape}
    </svg>
  )
}

// ============================================
// VISUAL PROJECT COVER
// ============================================

function Cover({
  project
}: {
  project: Project
}) {
  return (
    <div
      className='relative isolate h-44 overflow-hidden rounded-t-2xl md:h-48'
      style={{
        background:
          `radial-gradient(circle at 75% 35%, ${project.accent}88 0%, transparent 55%), ` +
          'linear-gradient(135deg, #101827, #090d19)'
      }}
    >
      {project.cover ? (
        <Image
          src={project.cover}
          alt={`${project.title} project screenshot`}
          fill
          sizes='(max-width: 768px) 100vw, 50vw'
          className='object-cover'
        />
      ) : (
        <>
          {/* Background grid */}
          <div
            className='absolute inset-0 opacity-20'
            style={{
              backgroundImage:
                'linear-gradient(#ffffff25 1px, transparent 1px), linear-gradient(90deg, #ffffff25 1px, transparent 1px)',
              backgroundSize: '25px 25px'
            }}
          />

          {/* Decorative circles */}
          <div className='absolute -right-10 -bottom-20 h-64 w-64 rounded-full border border-white/20' />

          <div className='absolute -right-2 -bottom-16 h-48 w-48 rounded-full border border-white/20' />

          {/* Project SVG */}
          <div className='absolute inset-0 flex items-center justify-center'>
            <ProjectIllustration
              visual={project.visual}
            />
          </div>
        </>
      )}

      <span className='absolute top-4 left-4 rounded-full border border-white/20 bg-black/30 px-3 py-1 text-[10px] font-semibold tracking-[.16em] text-white uppercase backdrop-blur-md'>
        Project Illustration
      </span>

      <span className='absolute right-4 bottom-3 font-mono text-[11px] text-white/65'>
        {project.id.toUpperCase()}
      </span>
    </div>
  )
}

// ============================================
// PROJECT CARD
// ============================================

function Card({
  project
}: {
  project: Project
}) {
  // Existing public links are preserved.
  // Projects without links display Gmail + LinkedIn.
  const links: ProjectLink[] =
    project.links && project.links.length > 0
      ? project.links
      : [
          {
            label: 'Email via Gmail',
            href: gmailComposeUrl(project.title),
            primary: true
          },
          {
            label: 'Connect on LinkedIn',
            href: LINKEDIN_URL,
            primary: false
          }
        ]

  return (
    <article
      id={project.id}
      className={`group scroll-mt-28 overflow-hidden rounded-2xl border border-gray-200 bg-white/80 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-purple-300 hover:shadow-xl md:shadow-md dark:border-gray-800 dark:bg-gray-950/70 dark:hover:border-purple-700 ${
        project.featured ? 'md:col-span-2' : ''
      }`}
    >
      <div
        className={
          project.featured
            ? 'md:grid md:grid-cols-[2fr_3fr]'
            : ''
        }
      >
        {/* Illustration */}
        <div
          className={
            project.featured
              ? 'h-full [&>div]:h-full [&>div]:min-h-52 [&>div]:rounded-none'
              : ''
          }
        >
          <Cover project={project} />
        </div>

        {/* Project information */}
        <div className='flex flex-col p-5 md:p-6'>

          {/* Subtitle */}
          <p className='text-[11px] font-semibold tracking-[0.13em] text-purple-600 uppercase dark:text-purple-300'>
            {project.subtitle}
          </p>

          {/* Title */}
          <h3 className='mt-2 text-xl font-bold leading-snug text-gray-950 dark:text-white'>
            {project.title}
          </h3>

          {/* Description */}
          <p className='mt-3 text-sm leading-7 text-gray-600 dark:text-gray-300'>
            {project.description}
          </p>

          {/* Highlights */}
          {project.highlights && (
            <ul className='mt-4 space-y-1.5 text-xs leading-5 text-gray-600 dark:text-gray-400'>
              {project.highlights.map((highlight) => (
                <li
                  key={highlight}
                  className='flex items-start gap-2'
                >
                  <span
                    aria-hidden='true'
                    className='text-purple-500'
                  >
                    •
                  </span>

                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          )}

          {/* Technical skills */}
          <div className='mt-5 flex flex-wrap gap-2'>
            {project.tags.map((tag) => (
              <span
                key={tag}
                className='rounded-full border border-gray-200 px-2.5 py-1 text-[11px] font-medium text-gray-600 dark:border-gray-700 dark:text-gray-300'
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Optional note */}
          {project.note && (
            <p className='mt-3 text-xs leading-5 text-gray-500 dark:text-gray-400'>
              {project.note}
            </p>
          )}

          {/* Project links or contact buttons */}
          <div className='mt-auto flex flex-wrap items-center gap-3 pt-6'>
            {links.map((link) => {
              const isGmail =
                link.href.startsWith(
                  'https://mail.google.com/'
                )

              const isLinkedIn =
                link.href.includes('linkedin.com')

              const isExternal =
                link.href.startsWith('https://')

              return (
                <a
                  key={link.href}
                  href={link.href}
                  target={
                    isExternal ? '_blank' : undefined
                  }
                  rel={
                    isExternal
                      ? 'noopener noreferrer'
                      : undefined
                  }
                  aria-label={`${link.label} for ${project.title}`}
                  className={
                    link.primary
                      ? 'inline-flex items-center justify-center gap-2 rounded-lg bg-purple-600 px-4 py-2.5 text-xs font-semibold text-white transition hover:bg-purple-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-500'
                      : 'inline-flex items-center justify-center gap-2 rounded-lg border border-gray-300 px-4 py-2.5 text-xs font-semibold text-gray-800 transition hover:border-purple-400 hover:text-purple-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-500 dark:border-gray-700 dark:text-gray-200 dark:hover:border-purple-500 dark:hover:text-purple-300'
                  }
                >
                  <span aria-hidden='true'>
                    {isGmail
                      ? '✉'
                      : isLinkedIn
                        ? 'in'
                        : '↗'}
                  </span>

                  <span>{link.label}</span>
                </a>
              )
            })}
          </div>

        </div>
      </div>
    </article>
  )
}

// ============================================
// STRUCTURED SEO DATA
// ============================================

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  '@id': `${PAGE_URL}#webpage`,
  url: PAGE_URL,
  name: PAGE_TITLE,
  description: PAGE_DESCRIPTION,

  author: {
    '@id': PERSON_ID
  },

  mainEntity: {
    '@type': 'ItemList',

    numberOfItems: allProjects.length,

    itemListElement: allProjects.map(
      (project, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: project.title,
        url: `${PAGE_URL}#${project.id}`
      })
    )
  }
}

// ============================================
// MAIN RESEARCH PAGE
// ============================================

export default function ResearchPage() {
  return (
    <>
      <StarfieldBackground />

      <AppLayoutPage className='pt-6 md:pt-10'>

        {/* Structured data */}
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(
              structuredData
            ).replace(/</g, '\\u003c')
          }}
        />

        {/* Page header */}
        <header className='pb-10 md:pb-14'>

          <p className='text-xs font-semibold tracking-[.2em] text-purple-600 uppercase dark:text-purple-300'>
            PRETOM AREEFIN PRANTO / SELECTED WORK
          </p>

          <h1 className='from-primary-600 dark:from-primary-300 mt-3 bg-gradient-to-br via-purple-600 to-pink-500 bg-clip-text text-4xl font-extrabold tracking-tight text-transparent md:text-6xl dark:via-purple-300 dark:to-pink-300'>
            Research & Projects
          </h1>

          <p className='mt-5 max-w-3xl text-base leading-8 text-gray-600 dark:text-gray-300'>
            A collection of my completed undergraduate
            thesis, machine learning experiments, software
            engineering applications, and professional
            machine learning experience.
          </p>

          {/* Project counts */}
          <div className='mt-6 flex flex-wrap gap-3 text-xs font-semibold text-gray-600 dark:text-gray-300'>

            <span className='rounded-full border border-gray-300 px-3 py-2 dark:border-gray-700'>
              {allProjects.length} Projects
            </span>

            <span className='rounded-full border border-gray-300 px-3 py-2 dark:border-gray-700'>
              {sections.length} Categories
            </span>

            <span className='rounded-full border border-gray-300 px-3 py-2 dark:border-gray-700'>
              Completed Thesis · 2026
            </span>

          </div>

          {/* Navigation */}
          <nav
            aria-label='Project categories'
            className='mt-7 flex flex-wrap gap-2'
          >
            {sections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className='rounded-lg border border-gray-200 bg-gray-50 px-3 py-2 text-xs font-semibold text-gray-800 transition hover:border-purple-400 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-200'
              >
                {section.number} · {section.title}
              </a>
            ))}
          </nav>

        </header>

        {/* All project sections */}
        {sections.map((section) => (
          <section
            id={section.id}
            key={section.id}
            className='scroll-mt-24 border-t border-gray-200 py-10 md:py-14 dark:border-gray-800'
          >

            <div className='mb-7'>

              <p className='text-xs font-semibold tracking-[.2em] text-purple-600 uppercase dark:text-purple-300'>
                {section.number} / {section.eyebrow}
              </p>

              <h2 className='mt-2 text-2xl font-bold text-gray-950 md:text-3xl dark:text-white'>
                {section.title}
              </h2>

              <p className='mt-2 max-w-2xl text-sm leading-7 text-gray-600 dark:text-gray-400'>
                {section.description}
              </p>

            </div>

            <div className='grid grid-cols-1 gap-6 md:grid-cols-2'>
              {section.projects.map((project) => (
                <Card
                  key={project.id}
                  project={project}
                />
              ))}
            </div>

          </section>
        ))}

        {/* Contact footer */}
        <footer className='border-t border-gray-200 py-10 dark:border-gray-800'>

          <h2 className='text-lg font-bold text-gray-950 dark:text-white'>
            Interested in my work?
          </h2>

          <p className='mt-3 max-w-2xl text-sm leading-7 text-gray-600 dark:text-gray-400'>
            Explore the public repositories linked above,
            or contact me for additional information about
            projects without publicly available source code.
            Project illustrations are representative artwork
            rather than actual experimental results.
          </p>

          <div className='mt-6 flex flex-wrap gap-3'>

            <a
              href={gmailComposeUrl()}
              target='_blank'
              rel='noopener noreferrer'
              className='inline-flex items-center gap-2 rounded-lg bg-purple-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-purple-700'
            >
              ✉ Email via Gmail
            </a>

            <a
              href={LINKEDIN_URL}
              target='_blank'
              rel='noopener noreferrer'
              className='inline-flex items-center gap-2 rounded-lg border border-gray-300 px-5 py-3 text-sm font-semibold text-gray-900 transition hover:border-purple-400 dark:border-gray-700 dark:text-white'
            >
              Connect on LinkedIn ↗
            </a>

            <a
              href={`${GITHUB_URL}?tab=repositories`}
              target='_blank'
              rel='noopener noreferrer'
              className='inline-flex items-center gap-2 rounded-lg border border-gray-300 px-5 py-3 text-sm font-semibold text-gray-900 transition hover:border-purple-400 dark:border-gray-700 dark:text-white'
            >
              GitHub ↗
            </a>

          </div>

          {/* Copyable contact address */}
          <p className='mt-5 text-xs text-gray-500 dark:text-gray-400'>
            Email: {SITE_AUTHOR.email}
          </p>

        </footer>

      </AppLayoutPage>
    </>
  )
}
