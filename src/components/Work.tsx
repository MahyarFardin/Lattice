import { type ReactNode } from 'react'
import { projects, techStrip, type Project } from '../data/content'
import Card from './Card'
import Reveal from './Reveal'
import Scramble from './Scramble'
import SplitText from './SplitText'

const mockups: Record<Project['kind'], ReactNode> = {
  vision: (
    <svg viewBox="0 0 320 180" aria-hidden="true">
      <rect x="40" y="36" width="90" height="90" rx="4" className="m-box" />
      <rect x="170" y="62" width="110" height="70" rx="4" className="m-box alt" />
      <rect x="40" y="36" width="42" height="14" className="m-fill" />
      <rect x="170" y="62" width="42" height="14" className="m-fill alt" />
      <path d="M0 150 H320" className="m-line" />
    </svg>
  ),
  chat: (
    <svg viewBox="0 0 320 180" aria-hidden="true">
      <rect x="30" y="26" width="150" height="30" rx="14" className="m-fill" />
      <rect x="140" y="70" width="150" height="40" rx="14" className="m-box alt" />
      <rect x="30" y="124" width="190" height="30" rx="14" className="m-fill" />
    </svg>
  ),
  dash: (
    <svg viewBox="0 0 320 180" aria-hidden="true">
      <rect x="24" y="24" width="84" height="44" rx="6" className="m-box" />
      <rect x="118" y="24" width="84" height="44" rx="6" className="m-box" />
      <rect x="212" y="24" width="84" height="44" rx="6" className="m-box alt" />
      <rect x="24" y="82" width="272" height="76" rx="6" className="m-box" />
      <path d="M36 140 L90 118 L140 130 L200 100 L260 112 L284 96" className="m-line" />
    </svg>
  ),
  chart: (
    <svg viewBox="0 0 320 180" aria-hidden="true">
      <path d="M24 148 H296 M24 100 H296 M24 52 H296" className="m-grid" />
      <path d="M24 130 L80 110 L130 118 L190 70 L250 82 L296 40" className="m-line" />
      <path d="M24 146 L80 138 L130 134 L190 118 L250 122 L296 100" className="m-line alt" />
    </svg>
  ),
}

export default function Work() {
  const strip = [...techStrip, ...techStrip]

  return (
    <section id="work" className="section">
      <div className="container">
        <Scramble className="eyebrow" text="// selected work" />
        <SplitText className="h2" text="Selected work." />

        <div className="work-grid">
          {projects.map((project, i) => (
            <Reveal key={project.title} delay={(i % 2) * 120}>
              <Card tilt className="project">
                <div className="project-shot">
                  <div className="project-bar" aria-hidden="true">
                    <i />
                    <i />
                    <i />
                  </div>
                  {mockups[project.kind]}
                  <div className="project-over">
                    <p>{project.description}</p>
                    <span className="mono-label">[case study link]</span>
                  </div>
                </div>
                <div className="project-meta">
                  <span className="mono-label">{project.category}</span>
                  <h3>{project.title}</h3>
                  <ul className="chips">
                    {project.tech.map((t) => (
                      <li key={t}>{t}</li>
                    ))}
                  </ul>
                </div>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>

      <div className="marquee" aria-label={`Technologies: ${techStrip.join(', ')}`}>
        <div className="marquee-track" aria-hidden="true">
          {strip.map((tech, i) => (
            <span key={i}>{tech}</span>
          ))}
        </div>
      </div>
    </section>
  )
}
