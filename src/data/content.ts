export const siteConfig = {
  brandName: 'Lattice',
  email: 'hello@example.com',
  upworkUrl: 'https://www.upwork.com/freelancers/~000000000000000000',
  githubUrl: 'https://github.com/your-org',
  linkedinUrl: 'https://www.linkedin.com/company/your-company',
  upworkRating: '5.0',
}

export const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'Team', href: '#team' },
  { label: 'Process', href: '#process' },
  { label: 'Work', href: '#work' },
]

export const hero = {
  prompt: '$ lattice --build web ai',
  headline: 'We weave Web & AI into products that work.',
  shimmer: ['Web', '&', 'AI'],
  sub: 'Two engineers, one team. We build the full product, from the AI model to the API to the interface.',
}

export const floaters = [
  { label: 'Go', top: '14%', left: '56%', depth: 0.12 },
  { label: 'Node.js', top: '84%', left: '48%', depth: 0.22 },
  { label: 'React', top: '20%', left: '80%', depth: 0.18 },
  { label: 'Python', top: '78%', left: '70%', depth: 0.1 },
  { label: 'PyTorch', top: '46%', left: '88%', depth: 0.26 },
]

export const services = [
  {
    icon: 'web' as const,
    title: 'Web Development',
    tagline: 'Frontend and backend, built together.',
    stack: 'React / TypeScript / Go / Node.js / PostgreSQL',
    items: [
      'Frontend apps and dashboards',
      'Backend APIs and services',
      'Databases and data models',
      'SaaS platforms',
      'Deployment and CI/CD',
    ],
  },
  {
    icon: 'ai' as const,
    title: 'AI Solutions',
    tagline: 'Models that ship inside real products.',
    stack: 'Python / PyTorch / OpenCV / Generative AI / LLMs',
    items: [
      'Computer vision',
      'Generative AI',
      'Custom ML models',
      'AI integration into your product',
      'Research prototypes to production',
    ],
  },
]

export type TeamMember = {
  name: string
  initials: string
  role: string
  bio: string
  skills: string[]
  terminal: string[]
  github: string
  linkedin: string
  photoUrl?: string
  website?: string
}

export const team: TeamMember[] = [
  {
    name: 'Nima Mahini',
    initials: 'NM',
    role: 'Back-end Developer',
    bio: 'I build the APIs, databases and services that hold a product up. Fast, scalable systems that stay easy to maintain.',
    skills: ['Golang', 'Node.js', 'APIs', 'Databases', 'Scalable systems'],
    terminal: ['$ whoami', 'nima / back-end developer', '$ stack', 'go, node.js, sql'],
    github: 'https://github.com/your-org',
    linkedin: 'https://www.linkedin.com/in/your-profile',
  },
  {
    name: 'Mahyar Fardinfar',
    initials: 'MF',
    role: 'AI Engineer & Researcher',
    bio: 'Researcher at Bilkent University (LiRA Lab) with published work, presented at an international conference. I turn research into models that run in production.',
    skills: ['Computer vision', 'LLMs', 'Generative AI', 'Robotics', 'Machine learning'],
    terminal: ['$ whoami', 'mahyar / ai engineer + researcher', '$ lab', 'bilkent university / lira lab'],
    github: 'https://github.com/MahyarFardin',
    linkedin: 'https://www.linkedin.com/in/mahyar-fardinfar',
    photoUrl: '/mahyar.jpeg',
    website: 'https://mahyarfardin.github.io',
  },
]

export const chain = ['AI model', 'API', 'Interface']

export const processSteps = [
  {
    title: 'Discuss',
    text: 'A short call to map the problem, scope and budget. You get a clear plan, not a sales pitch.',
  },
  {
    title: 'Design',
    text: 'We sketch the architecture, data and interface before we write code.',
  },
  {
    title: 'Build',
    text: 'Short cycles with a working build every week. You see progress, not status reports.',
  },
  {
    title: 'Deliver',
    text: 'Clean code, docs and a proper handover. We stay reachable after launch.',
  },
]

export type Project = {
  title: string
  description: string
  category: string
  tech: string[]
  kind: 'vision' | 'chat' | 'dash' | 'chart'
  link?: string
  imageUrl?: string
}

export const projects: Project[] = [
  {
    title: 'Monocular Depth Estimation',
    category: 'Computer vision',
    description: 'PyTorch regeneration of a published monocular depth estimation paper via transfer learning, reproducing results originally reported in TensorFlow.',
    tech: ['Python', 'PyTorch', 'Transfer learning', 'Computer vision'],
    kind: 'vision',
    link: 'https://github.com/MahyarFardin/Monocular_depth_estimation_via_transfer_learning',
    imageUrl: '/depth.png',
  },
  {
    title: 'Decoder-only Code Completion',
    category: 'Generative AI',
    description: 'A transformer-based Python code completion model with causal self-attention, trained on the py150 dataset.',
    tech: ['Python', 'PyTorch', 'Transformers', 'NLP'],
    kind: 'chat',
    link: 'https://github.com/MahyarFardin/Decoder_only_Code_Completion',
    imageUrl: '/llm.png',
  },
  {
    title: 'Operations Dashboard',
    category: 'Full-stack web',
    description: 'One internal tool for orders, inventory and staffing across locations.',
    tech: ['TypeScript', 'React', 'Go', 'PostgreSQL'],
    kind: 'dash',
  },
  {
    title: 'Usage Analytics',
    category: 'Data platform',
    description: 'Raw event data turned into cohort and retention reports.',
    tech: ['Node.js', 'ClickHouse', 'Next.js', 'Redis'],
    kind: 'chart',
  },
]

export const techStrip = [
  'Go',
  'Node.js',
  'TypeScript',
  'React',
  'Next.js',
  'PostgreSQL',
  'Redis',
  'Docker',
  'Python',
  'PyTorch',
  'OpenCV',
  'Diffusion models',
  'FastAPI',
  'AWS',
]

export const stats = [
  { value: 24, suffix: '+', label: 'Projects delivered' },
  { value: 18, suffix: '+', label: 'Happy clients' },
  { value: 6, suffix: '+', label: 'Years of experience' },
]

export const testimonials = [
  {
    quote: 'Placeholder. Replace this with a real review from an Upwork client.',
    name: '[Client name]',
    company: '[Company]',
  },
  {
    quote: 'Placeholder. Short, specific praise about the result works best here.',
    name: '[Client name]',
    company: '[Company]',
  },
  {
    quote: 'Placeholder. Mention what was built and how the work went.',
    name: '[Client name]',
    company: '[Company]',
  },
]
