// All editable site content lives here. Replace placeholder values before
// launch — see CONTENT_TODO.txt at the project root for the full checklist.

export const siteConfig = {
  brandName: 'Lattice',
  email: 'hello@example.com', // TODO: real contact email
  upworkUrl: 'https://www.upwork.com/freelancers/~000000000000000000', // TODO
  githubUrl: 'https://github.com/your-org', // TODO
  linkedinUrl: 'https://www.linkedin.com/company/your-company', // TODO
}

export const navLinks = [
  { label: 'Work', href: '#work' },
  { label: 'Services', href: '#services' },
  { label: 'Team', href: '#team' },
  { label: 'Contact', href: '#contact' },
]

export const hero = {
  label: 'AI / ML × WEB ENGINEERING',
  headline: 'Building digital products with AI at the core.',
  description:
    "We design and build intelligent web products — from machine-learning systems and AI workflows to polished, production-ready applications.",
}

export const capabilities = [
  'AI & ML',
  'Web Development',
  'Data Science',
  'Full-Stack Engineering',
]

export type Project = {
  number: string
  title: string
  description: string
  category: string
  tech: string[]
  githubUrl?: string
  demoUrl?: string
  imageUrl?: string // TODO: add a real screenshot; falls back to a generated placeholder
}

export const projects: Project[] = [
  {
    number: '01',
    title: 'Vision-Based Defect Detection',
    description:
      'A computer-vision pipeline that flags manufacturing defects from line-camera footage in real time.',
    category: 'AI / Computer Vision',
    tech: ['Python', 'PyTorch', 'OpenCV', 'FastAPI'],
    githubUrl: undefined, // TODO: add link or remove field
    demoUrl: undefined,
  },
  {
    number: '02',
    title: 'Document Q&A Assistant',
    description:
      'An LLM-powered assistant that answers questions over a private document set with cited sources.',
    category: 'AI / LLM Application',
    tech: ['Python', 'LangChain', 'pgvector', 'React'],
    githubUrl: undefined,
    demoUrl: undefined,
  },
  {
    number: '03',
    title: 'Operations Dashboard',
    description:
      'A full-stack internal tool for tracking orders, inventory and staffing across multiple locations.',
    category: 'Full-Stack Web Application',
    tech: ['TypeScript', 'React', 'Node.js', 'PostgreSQL'],
    githubUrl: undefined,
    demoUrl: undefined,
  },
  {
    number: '04',
    title: 'Usage Analytics Platform',
    description:
      'A self-serve analytics product that turns raw event data into cohort and retention reporting.',
    category: 'Data / Analytics Platform',
    tech: ['Python', 'dbt', 'Next.js', 'ClickHouse'],
    githubUrl: undefined,
    demoUrl: undefined,
  },
]

export const services = [
  {
    title: 'AI / ML',
    description: 'Machine learning systems and intelligent applications.',
    items: [
      'LLM applications',
      'Computer vision',
      'Machine learning models',
      'Generative AI',
      'Data analysis',
      'AI automation',
      'Model integration',
      'AI APIs',
    ],
  },
  {
    title: 'Web / Software',
    description: 'Production-ready digital products.',
    items: [
      'Frontend applications',
      'Full-stack applications',
      'SaaS platforms',
      'REST APIs',
      'Backend systems',
      'Dashboards',
      'Database integration',
      'Deployment',
    ],
  },
]

export const processSteps = [
  {
    number: '01',
    title: 'Understand',
    description: 'We clarify the problem, requirements and desired outcome.',
  },
  {
    number: '02',
    title: 'Build',
    description: 'We design and implement the technical solution.',
  },
  {
    number: '03',
    title: 'Iterate',
    description: 'We test, refine and improve based on feedback.',
  },
  {
    number: '04',
    title: 'Deliver',
    description: 'We ship a clean, maintainable and documented result.',
  },
]

export type TeamMemberData = {
  name: string
  role: string
  bio: string
  skills: string[]
  photoUrl?: string
}

export const team: TeamMemberData[] = [
  {
    name: 'Specialist One', // TODO: real name
    role: 'Web Development',
    bio: 'Full-stack developer focused on building modern, reliable and scalable web applications.',
    skills: ['React', 'Next.js', 'Node.js', 'TypeScript', 'APIs', 'Databases'],
    photoUrl: undefined, // TODO: add a professional photo if available
  },
  {
    name: 'Specialist Two', // TODO: real name
    role: 'AI / ML',
    bio: 'AI/ML engineer focused on machine learning, computer vision, generative AI and data-driven systems.',
    skills: ['Python', 'PyTorch', 'Machine Learning', 'Computer Vision', 'LLMs', 'Data Science'],
    photoUrl: undefined,
  },
]

export const whyUs = [
  {
    title: 'Technical depth',
    description: 'We are engineers, not just project managers. We build the systems ourselves.',
  },
  {
    title: 'Complementary expertise',
    description: 'AI/ML and web engineering under one team means fewer handoffs between specialists.',
  },
  {
    title: 'Direct communication',
    description: 'Clients communicate directly with the people building the product.',
  },
  {
    title: 'Practical delivery',
    description: 'We focus on useful, maintainable software rather than unnecessary complexity.',
  },
]
