import Link from 'next/link'

import Image from 'next/image'

import {
  Activity,
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  Brain,
  Building2,
  Code2,
  Dna,
  ExternalLink,
  Eye,
  GraduationCap,
  HeartPulse,
  Mail,
  Mic,
  Music2,
  Terminal,
  type LucideIcon
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
const PAGE_URL = `${BASE_URL}/portfolio`

const LINKEDIN_URL =
  'https://www.linkedin.com/in/pretom-areefin-pranto-a97651290/'

const GITHUB_URL = 'https://github.com/pretom26'

const PAGE_TITLE = `Portfolio | ${SITE_NAME}`

const PAGE_DESCRIPTION =
  'Selected machine learning, healthcare AI, full-stack, and developer tooling projects by Pretom Areefin Pranto.'

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
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    card: 'summary'
  },

  keywords: [
    'Pretom Areefin Pranto',
    'Software Engineering Portfolio',
    'Machine Learning',
    'Multimodal AI',
    'Healthcare AI',
    'MERN Stack',
    'BRAC University'
  ]
}

// ============================================
// TYPES
// ============================================

type Track = 'research' | 'ai' | 'software' | 'industry'

type ProjectAction = {
  label: string
  href: string
  kind: 'code' | 'demo' | 'notebook'
}

type Project = {
  id: string
  title: string
  eyebrow: string
  description: string
  track: Track
  technologies: string[]
  icon: LucideIcon
  accent: string
  featured?: boolean
  highlights?: string[]
  actions?: ProjectAction[]
  cover?: string
}

// ============================================
// PROJECT DATA — BASED ON RESUME
// ============================================

const projects: Project[] = [
  {
    id: 'neuroventura',
    title: 'NeuroVentura',
    eyebrow: 'Completed Undergraduate Thesis · 2026',

    description:
      'Multimodal Alzheimer’s disease risk and progression prediction using a frozen MONAI 3D DenseNet-121 MRI branch, XGBoost on clinical features (MMSE, age, gender), and a residual late-fusion MLP on a matched cohort.',

    track: 'research',

    technologies: [
      'PyTorch',
      'MONAI',
      'DenseNet-121',
      'XGBoost',
      'Multimodal ML'
    ],

    icon: Brain,
    accent: '#a78bfa',
    featured: true,

    highlights: [
      'Completed thesis, BRAC University',
      'Supervisor: Md. Saiful Bari Siddiqui',
      'Co-supervisor: Dr. Swakkhar Shatabda'
    ]
  },

  {
    id: 'abar-nosto',
    title: 'Abar Nosto!',
    eyebrow: 'Full-stack Application · CSE471',

    description:
      'MERN community issue monitoring platform with reporting, an activity feed, reputation features, offline drafts, and administrative tools.',

    track: 'software',

    technologies: [
      'MongoDB',
      'Express',
      'React',
      'Node.js',
      'Vercel'
    ],

    icon: Building2,
    accent: '#f59e0b',
    featured: true,

    highlights: [
      'Live application deployed on Vercel',
      'Community reporting and moderation tools'
    ],

    actions: [
      {
        label: 'Live application',
        href:
          'https://abar-nosto-a-community-issue-monito.vercel.app/login',
        kind: 'demo'
      }
    ]
  },

  {
    id: 'flyrank',
    title: 'Search Ranking & Discoverability',
    eyebrow: 'FlyRank AI · ML Engineering Internship · 2026',

    description:
      'Content-opportunity modeling across approximately 30,000 Google Search Console/GA4 records. Improved evaluation using client-grouped train/test splits to reduce leakage.',

    track: 'industry',

    technologies: [
      'Python',
      'Embeddings',
      'Clustering',
      'Model Evaluation'
    ],

    icon: BarChart3,
    accent: '#38bdf8',
    featured: true,

    highlights: [
      'Initial Precision@10: 0.70',
      'Leakage-aware out-of-sample Precision@10: 0.40',
      'Capstone accepted by track mentor'
    ],

    actions: [
      {
        label: 'View capstone code',
        href:
          'https://github.com/pretom26/ml_internship_flyrankAI',
        kind: 'code'
      }
    ]
  },

  {
    id: 'lungcare',
    title: 'LungCare',
    eyebrow: 'Healthcare AI · Conference Project · 2025',

    description:
      'Deep learning pipeline for multiclass lung cancer subtype classification from histopathology images, with preprocessing and prediction visualization.',

    track: 'ai',

    technologies: [
      'Deep Learning',
      'Computer Vision',
      'Histopathology'
    ],

    icon: Activity,
    accent: '#06b6d4'
  },

  {
    id: 'retinopathy',
    title: 'Diabetic Retinopathy Classification',
    eyebrow: 'Medical Image Classification · CSE427',

    description:
      'Four-class retinal fundus classification using ResNet50 transfer learning, class-weighted training, and Grad-CAM visualizations.',

    track: 'ai',

    technologies: [
      'ResNet50',
      'Transfer Learning',
      'Grad-CAM'
    ],

    icon: Eye,
    accent: '#14b8a6',

    actions: [
      {
        label: 'GitHub repository',
        href:
          'https://github.com/pretom26/Automated-Diabetic-Retinopathy-Severity-Classification-Using-Retinal-Fundus-Images',
        kind: 'code'
      }
    ]
  },

  {
    id: 'music-generation',
    title: 'Music Generation Using Unsupervised Learning',
    eyebrow: 'Neural Networks · CSE425',

    description:
      'Compared LSTM autoencoder, VAE, and Transformer approaches on MAESTRO v3.0.0 MIDI sequences and piano-roll representations.',

    track: 'ai',

    technologies: [
      'LSTM',
      'VAE',
      'Transformer',
      'MIDI'
    ],

    icon: Music2,
    accent: '#ec4899',

    actions: [
      {
        label: 'GitHub repository',
        href:
          'https://github.com/pretom26/CSE425-Neural-Network-Project-Music-Generation-Using-Unsupervised-Learning',
        kind: 'code'
      }
    ]
  },

  {
    id: 'mice-protein',
    title: 'Mice Protein Expression Classifier',
    eyebrow: 'Biological Data · CSE422',

    description:
      'Supervised classification workflows for mouse protein-expression data, including preprocessing and feature engineering.',

    track: 'ai',

    technologies: [
      'Python',
      'Feature Engineering',
      'Classification'
    ],

    icon: Dna,
    accent: '#84cc16',

    actions: [
      {
        label: 'Google Colab notebook',
        href:
          'https://colab.research.google.com/drive/1lE0DurX6ReGAsOw1PTHVa3rryiqlcn3e',
        kind: 'notebook'
      }
    ]
  },

  {
    id: 'pretbuddy',
    title: 'PretBuddy — AI Voice Assistant',
    eyebrow: 'Personal AI Project',

    description:
      'Real-time Python voice assistant using AssemblyAI, Groq-powered web search, and ElevenLabs.',

    track: 'ai',

    technologies: [
      'Python',
      'AssemblyAI',
      'Groq',
      'ElevenLabs'
    ],

    icon: Mic,
    accent: '#c084fc',

    actions: [
      {
        label: 'GitHub repository',
        href:
          'https://github.com/pretom26/PretBuddy_Realtime_AI_Chat_Voice_Assistant',
        kind: 'code'
      }
    ]
  },

  {
    id: 'student-hub',
    title: 'BRACU Student Hub',
    eyebrow: 'Software Engineering · CSE470',

    description:
      'MERN academic platform with resources, exam deadlines, calendars, faculty reviews, and administrator-managed content.',

    track: 'software',

    technologies: [
      'MERN',
      'React',
      'MongoDB'
    ],

    icon: GraduationCap,
    accent: '#818cf8',

    actions: [
      {
        label: 'Team GitHub repository',
        href:
          'https://github.com/sora-rara/bracu-student-hub',
        kind: 'code'
      }
    ]
  },

  {
    id: 'aidtrack',
    title: 'AidTrack',
    eyebrow: 'Database Management · CSE370',

    description:
      'PHP and database-backed healthcare platform for appointments, patient records, and doctor–patient communication.',

    track: 'software',

    technologies: [
      'PHP',
      'HTML',
      'CSS',
      'Database Management'
    ],

    icon: HeartPulse,
    accent: '#fb7185'
  },

  {
    id: 'weather-cli',
    title: 'Weather CLI',
    eyebrow: 'Python Package · Personal Project',

    description:
      'Typed Python CLI with TTL caching, rich terminal output, pytest tests (94% reported coverage), and GitHub Actions CI.',

    track: 'software',

    technologies: [
      'Python',
      'Pytest',
      'GitHub Actions',
      'Caching'
    ],

    icon: Terminal,
    accent: '#4ade80',

    actions: [
      {
        label: 'GitHub repository',
        href: 'https://github.com/pretom26/weather-cli',
        kind: 'code'
      }
    ]
  }
]

// ============================================
// PROJECT GROUPS
// ============================================

const featured = projects.filter(
  (project) => project.featured
)

const aiProjects = projects.filter(
  (project) => project.track === 'ai'
)

const softwareProjects = projects.filter(
  (project) =>
    project.track === 'software' && !project.featured
)

// ============================================
// GMAIL CONTACT HELPER
// ============================================

function gmailComposeUrl(projectTitle?: string) {
  const subject = projectTitle
    ? `Project inquiry: ${projectTitle}`
    : 'Portfolio inquiry'

  const body = projectTitle
    ? `Hi Pretom,

I saw your project "${projectTitle}" on your portfolio and would like to learn more.

Best regards,`
    : `Hi Pretom,

I visited your portfolio and would like to get in touch.

Best regards,`

  const params = new URLSearchParams({
    view: 'cm',
    fs: '1',
    to: SITE_AUTHOR.email,
    su: subject,
    body
  })

  return `https://mail.google.com/mail/?${params.toString()}`
}

// ============================================
// PROJECT ILLUSTRATION / COVER
// ============================================

function ProjectCover({
  project,
  large = false
}: {
  project: Project
  large?: boolean
}) {
  const Icon = project.icon

  return (
    <div
      className={`relative isolate flex items-center justify-center overflow-hidden ${
        large ? 'min-h-64 lg:h-full' : 'h-44'
      }`}
      style={{
        background:
          `radial-gradient(circle at 70% 25%, ${project.accent}99, transparent 58%), ` +
          'linear-gradient(135deg, #111827, #090b15)'
      }}
    >
      {project.cover ? (
        <Image
          src={project.cover}
          alt={`${project.title} screenshot`}
          fill
          sizes={
            large
              ? '(max-width: 1024px) 100vw, 50vw'
              : '(max-width: 768px) 100vw, 33vw'
          }
          className='object-cover'
        />
      ) : (
        <>
          {/* Decorative grid */}
          <div
            className='absolute inset-0 opacity-20'
            style={{
              backgroundImage:
                'linear-gradient(#ffffff22 1px, transparent 1px), linear-gradient(90deg, #ffffff22 1px, transparent 1px)',
              backgroundSize: '25px 25px'
            }}
          />

          {/* Decorative circles */}
          <div className='absolute -right-12 -bottom-20 h-64 w-64 rounded-full border border-white/20' />

          <div className='absolute -right-4 -bottom-16 h-48 w-48 rounded-full border border-white/20' />

          {/* Explicit white color for light/dark modes */}
          <div
            className='relative rounded-3xl border border-white/20 bg-white/10 p-7 shadow-2xl backdrop-blur-sm'
            style={{
              color: '#f8fafc'
            }}
          >
            <Icon
              size={large ? 70 : 54}
              strokeWidth={1.5}
              color='#f8fafc'
              aria-hidden='true'
            />
          </div>
        </>
      )}

      <span className='absolute top-4 left-4 rounded-full border border-white/20 bg-black/30 px-3 py-1 text-[10px] font-semibold tracking-[.12em] text-white uppercase backdrop-blur-sm'>
        {project.track === 'research'
          ? 'Thesis'
          : project.track === 'industry'
            ? 'Industry ML'
            : project.track === 'ai'
              ? 'AI / ML'
              : 'Software'}
      </span>
    </div>
  )
}

// ============================================
// PUBLIC ACTION LINK
// ============================================

function ActionLink({
  action,
  primary
}: {
  action: ProjectAction
  primary?: boolean
}) {
  // Lucide brand icons were removed in newer versions.
  // Code2 is used for source repositories instead.
  const Icon =
    action.kind === 'code' ? Code2 : ExternalLink

  return (
    <a
      href={action.href}
      target='_blank'
      rel='noopener noreferrer'
      className={
        primary
          ? 'inline-flex items-center justify-center gap-2 rounded-lg bg-purple-600 px-4 py-2.5 text-xs font-semibold text-white transition hover:bg-purple-700 focus-visible:outline-2 focus-visible:outline-offset-2'
          : 'inline-flex items-center justify-center gap-2 rounded-lg border border-gray-300 px-4 py-2.5 text-xs font-semibold text-gray-800 transition hover:border-purple-400 dark:border-gray-700 dark:text-gray-100 dark:hover:border-purple-500'
      }
    >
      <Icon size={15} aria-hidden='true' />
      {action.label}
    </a>
  )
}

// ============================================
// EMAIL AND LINKEDIN LINKS
// ============================================

function ContactLinks({
  projectTitle
}: {
  projectTitle: string
}) {
  return (
    <div className='flex flex-wrap gap-2'>
      <a
        href={gmailComposeUrl(projectTitle)}
        target='_blank'
        rel='noopener noreferrer'
        className='inline-flex items-center gap-2 rounded-lg bg-purple-600 px-4 py-2.5 text-xs font-semibold text-white transition hover:bg-purple-700'
      >
        <Mail size={15} aria-hidden='true' />
        Email via Gmail
      </a>

      <a
        href={LINKEDIN_URL}
        target='_blank'
        rel='noopener noreferrer'
        className='inline-flex items-center gap-2 rounded-lg border border-gray-300 px-4 py-2.5 text-xs font-semibold text-gray-800 transition hover:border-purple-400 dark:border-gray-700 dark:text-gray-100 dark:hover:border-purple-500'
      >
        <ExternalLink size={15} aria-hidden='true' />
        LinkedIn
      </a>
    </div>
  )
}

// ============================================
// PROJECT CARD
// ============================================

function ProjectCard({
  project,
  large = false
}: {
  project: Project
  large?: boolean
}) {
  return (
    <article
      className={`group overflow-hidden rounded-2xl border border-gray-200 bg-white/80 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-purple-300 hover:shadow-lg dark:border-gray-800 dark:bg-gray-950/70 dark:hover:border-purple-700 ${
        large ? 'lg:grid lg:grid-cols-[2fr_3fr]' : ''
      }`}
    >
      <ProjectCover
        project={project}
        large={large}
      />

      <div className='flex flex-col p-5 md:p-6'>
        <p className='text-[11px] font-semibold tracking-[.13em] text-purple-600 uppercase dark:text-purple-300'>
          {project.eyebrow}
        </p>

        <h3 className='mt-2 text-xl font-bold leading-snug text-gray-950 dark:text-white'>
          {project.title}
        </h3>

        <p className='mt-3 text-sm leading-7 text-gray-600 dark:text-gray-300'>
          {project.description}
        </p>

        {/* Featured highlights */}
        {large && project.highlights && (
          <ul className='mt-4 space-y-1 text-xs leading-6 text-gray-600 dark:text-gray-400'>
            {project.highlights.map((highlight) => (
              <li
                key={highlight}
                className='flex gap-2'
              >
                <span
                  className='text-purple-500'
                  aria-hidden='true'
                >
                  •
                </span>

                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        )}

        {/* Technologies */}
        <div className='mt-5 flex flex-wrap gap-2'>
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className='rounded-full border border-gray-200 bg-gray-50 px-2.5 py-1 text-[11px] font-medium text-gray-600 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300'
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Public links or project-specific contact */}
        <div className='mt-auto flex flex-wrap items-center gap-3 pt-6'>
          {project.actions &&
          project.actions.length > 0 ? (
            project.actions.map((action, index) => (
              <ActionLink
                key={action.href}
                action={action}
                primary={index === 0}
              />
            ))
          ) : (
            <ContactLinks projectTitle={project.title} />
          )}

          <Link
            href={`/research#${project.id}`}
            className='inline-flex items-center gap-1 text-xs font-semibold text-purple-700 hover:underline dark:text-purple-300'
          >
            Project overview
            <ArrowUpRight
              size={14}
              aria-hidden='true'
            />
          </Link>
        </div>
      </div>
    </article>
  )
}

// ============================================
// STRUCTURED DATA
// ============================================

const schema = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  '@id': `${PAGE_URL}#webpage`,

  name: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  url: PAGE_URL,

  author: {
    '@id': PERSON_ID
  },

  mainEntity: {
    '@type': 'ItemList',
    numberOfItems: projects.length,

    itemListElement: projects.map(
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
// SECTION HEADING
// ============================================

function SectionHeading({
  id,
  eyebrow,
  title,
  description
}: {
  id: string
  eyebrow: string
  title: string
  description: string
}) {
  return (
    <div
      id={id}
      className='scroll-mt-28 mb-7'
    >
      <p className='text-xs font-semibold tracking-[.2em] text-purple-600 uppercase dark:text-purple-300'>
        {eyebrow}
      </p>

      <h2 className='mt-2 text-2xl font-bold tracking-tight text-gray-950 md:text-3xl dark:text-white'>
        {title}
      </h2>

      <p className='mt-2 max-w-3xl text-sm leading-7 text-gray-600 dark:text-gray-400'>
        {description}
      </p>
    </div>
  )
}

// ============================================
// MAIN PORTFOLIO PAGE
// ============================================

export default function PortfolioPage() {
  return (
    <>
      <StarfieldBackground />

      <AppLayoutPage className='pt-6 md:pt-10'>
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema).replace(
              /</g,
              '\\u003c'
            )
          }}
        />

        {/* Header */}
        <header className='pb-12'>
          <p className='text-xs font-semibold tracking-[.2em] text-purple-600 uppercase dark:text-purple-300'>
            BUILDING · EXPERIMENTING · LEARNING
          </p>

          <h1 className='from-primary-600 dark:from-primary-300 mt-3 bg-gradient-to-br via-purple-600 to-pink-500 bg-clip-text text-4xl font-extrabold tracking-tight text-transparent md:text-6xl dark:via-purple-300 dark:to-pink-300'>
            Portfolio
          </h1>

          <p className='mt-5 max-w-3xl text-base leading-8 text-gray-600 md:text-lg dark:text-gray-300'>
            Selected software and machine learning work,
            from a completed multimodal healthcare AI thesis
            to full-stack applications and developer tools.
            Explore what I built, how I built it, and where
            to find the code.
          </p>

          {/* Portfolio statistics */}
          <div className='mt-6 flex flex-wrap gap-2 text-xs font-medium text-gray-600 dark:text-gray-300'>
            <span className='rounded-full border border-gray-300 px-3 py-2 dark:border-gray-700'>
              {projects.length} projects
            </span>

            <span className='rounded-full border border-gray-300 px-3 py-2 dark:border-gray-700'>
              Completed thesis · 2026
            </span>

            <span className='rounded-full border border-gray-300 px-3 py-2 dark:border-gray-700'>
              BRAC University
            </span>
          </div>

          {/* Section navigation */}
          <nav
            aria-label='Portfolio sections'
            className='mt-8 flex flex-wrap gap-2'
          >
            <a
              href='#featured'
              className='rounded-lg border border-gray-300 px-4 py-2 text-sm font-semibold text-gray-800 hover:border-purple-400 dark:border-gray-700 dark:text-gray-100'
            >
              Featured
            </a>

            <a
              href='#ai-projects'
              className='rounded-lg border border-gray-300 px-4 py-2 text-sm font-semibold text-gray-800 hover:border-purple-400 dark:border-gray-700 dark:text-gray-100'
            >
              AI & ML
            </a>

            <a
              href='#software-projects'
              className='rounded-lg border border-gray-300 px-4 py-2 text-sm font-semibold text-gray-800 hover:border-purple-400 dark:border-gray-700 dark:text-gray-100'
            >
              Software & Tools
            </a>

            <Link
              href='/research'
              className='inline-flex items-center gap-1 rounded-lg bg-purple-600 px-4 py-2 text-sm font-semibold text-white hover:bg-purple-700'
            >
              Research page
              <ArrowRight
                size={15}
                aria-hidden='true'
              />
            </Link>
          </nav>
        </header>

        {/* Featured projects */}
        <section className='border-t border-gray-200 py-12 dark:border-gray-800'>
          <SectionHeading
            id='featured'
            eyebrow='01 / Featured work'
            title='Selected projects'
            description='Three projects representing my research, software development, and industry machine learning experience.'
          />

          <div className='grid gap-6'>
            {featured.map((project) => (
              <div
                key={project.id}
                id={project.id}
                className='scroll-mt-28'
              >
                <ProjectCard
                  project={project}
                  large
                />
              </div>
            ))}
          </div>
        </section>

        {/* AI and machine learning */}
        <section className='border-t border-gray-200 py-12 dark:border-gray-800'>
          <SectionHeading
            id='ai-projects'
            eyebrow='02 / AI & Machine Learning'
            title='Models, data & intelligent systems'
            description='Computer vision, healthcare-related ML, neural networks, and AI-powered personal projects.'
          />

          <div className='grid gap-6 md:grid-cols-2'>
            {aiProjects.map((project) => (
              <div
                key={project.id}
                id={project.id}
                className='scroll-mt-28'
              >
                <ProjectCard project={project} />
              </div>
            ))}
          </div>
        </section>

        {/* Software development */}
        <section className='border-t border-gray-200 py-12 dark:border-gray-800'>
          <SectionHeading
            id='software-projects'
            eyebrow='03 / Software Engineering'
            title='Applications & developer tools'
            description='Full-stack websites, database platforms, and tested command-line software.'
          />

          <div className='grid gap-6 md:grid-cols-2'>
            {softwareProjects.map((project) => (
              <div
                key={project.id}
                id={project.id}
                className='scroll-mt-28'
              >
                <ProjectCard project={project} />
              </div>
            ))}
          </div>
        </section>

        {/* Contact panel */}
        <section className='border-t border-gray-200 py-12 dark:border-gray-800'>
          <div className='rounded-2xl border border-purple-200 bg-purple-50/70 p-6 md:p-8 dark:border-purple-900 dark:bg-purple-950/20'>
            <div className='flex flex-wrap items-start justify-between gap-4'>
              <div>
                <p className='text-xs font-semibold tracking-[.2em] text-purple-700 uppercase dark:text-purple-300'>
                  LET&apos;S CONNECT
                </p>

                <h2 className='mt-2 text-2xl font-bold text-gray-950 dark:text-white'>
                  Interested in collaborating?
                </h2>

                <p className='mt-3 max-w-xl text-sm leading-7 text-gray-600 dark:text-gray-300'>
                  Explore my work, connect on LinkedIn,
                  or send a project-specific inquiry. UwU
                </p>
              </div>

              <Code2
                size={32}
                className='text-purple-500'
                aria-hidden='true'
              />
            </div>

            <div className='mt-6 flex flex-wrap gap-3'>
              <a
                href={gmailComposeUrl()}
                target='_blank'
                rel='noopener noreferrer'
                className='inline-flex items-center gap-2 rounded-lg bg-purple-600 px-4 py-3 text-sm font-semibold text-white hover:bg-purple-700'
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
                className='inline-flex items-center gap-2 rounded-lg border border-gray-300 px-4 py-3 text-sm font-semibold text-gray-800 hover:border-purple-400 dark:border-gray-700 dark:text-gray-100'
              >
                <ExternalLink
                  size={17}
                  aria-hidden='true'
                />
                LinkedIn
              </a>

              <a
                href={GITHUB_URL}
                target='_blank'
                rel='noopener noreferrer'
                className='inline-flex items-center gap-2 rounded-lg border border-gray-300 px-4 py-3 text-sm font-semibold text-gray-800 hover:border-purple-400 dark:border-gray-700 dark:text-gray-100'
              >
                <Code2
                  size={17}
                  aria-hidden='true'
                />
                GitHub
              </a>
            </div>

            <p className='mt-5 text-xs text-gray-500 dark:text-gray-400'>
              Email: {SITE_AUTHOR.email}
            </p>
          </div>
        </section>
      </AppLayoutPage>
    </>
  )
}
