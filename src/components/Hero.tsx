import { hero, siteConfig } from '../data/content'
import Highlight from './Highlight'
import Reveal from './Reveal'
import './Hero.css'

const HIGHLIGHTED_WORDS: Record<string, 'blue' | 'amber' | 'rose'> = {
  AI: 'blue',
}

export default function Hero() {
  const words = hero.headline.split(' ')

  return (
    <section id="top" className="hero">
      <div className="container hero-grid">
        <Reveal className="hero-copy">
          <span className="hero-label">{hero.label}</span>
          <h1 className="hero-headline">
            {words.map((word, i) => {
              const color = HIGHLIGHTED_WORDS[word]
              return (
                <span key={i} className="hero-word" style={{ transitionDelay: `${i * 45}ms` }}>
                  {color ? (
                    <Highlight color={color} shift="right">
                      {word}
                    </Highlight>
                  ) : (
                    word
                  )}
                </span>
              )
            })}
          </h1>
          <p className="hero-description">{hero.description}</p>
          <div className="hero-actions">
            <a href="#work" className="btn btn-secondary">
              View our work
            </a>
            <a href={siteConfig.upworkUrl} target="_blank" rel="noreferrer" className="btn btn-primary">
              Hire us on Upwork
            </a>
          </div>
        </Reveal>

        <Reveal className="hero-visual" delay={150}>
          <svg
            viewBox="0 0 240 260"
            className="hero-diagram"
            role="img"
            aria-label="Diagram showing your problem splitting into an AI solution and a web app solution"
          >
            <circle
              cx="120"
              cy="48"
              r="52"
              className="hero-diagram-orbit"
              strokeDasharray="2 8"
            />

            <line x1="104.6" y1="87.1" x2="76.2" y2="159.1" className="hero-diagram-line" />
            <line x1="135.4" y1="87.1" x2="163.8" y2="159.1" className="hero-diagram-line" />
            <circle cx="95.2" cy="110.8" r="1.8" className="hero-diagram-junction" />
            <circle cx="85.8" cy="134.6" r="1.8" className="hero-diagram-junction" />
            <circle cx="144.8" cy="110.8" r="1.8" className="hero-diagram-junction" />
            <circle cx="154.2" cy="134.6" r="1.8" className="hero-diagram-junction" />

            <circle cx="120" cy="48" r="42" className="hero-diagram-node-circle" />
            <text x="120" y="44" className="hero-diagram-node-label">
              YOUR
            </text>
            <text x="120" y="58" className="hero-diagram-node-label">
              PROBLEM
            </text>

            <circle cx="60" cy="200" r="44" className="hero-diagram-node-circle is-accent" />
            <text x="60" y="196" className="hero-diagram-node-label">
              AI
            </text>
            <text x="60" y="210" className="hero-diagram-node-label">
              SOLUTIONS
            </text>

            <circle cx="180" cy="200" r="44" className="hero-diagram-node-circle is-amber" />
            <text x="180" y="196" className="hero-diagram-node-label">
              WEB APP
            </text>
            <text x="180" y="210" className="hero-diagram-node-label">
              SOLUTIONS
            </text>

            <circle
              r="4"
              className="hero-diagram-dot"
              style={{ offsetPath: "path('M104.6,87.1 L76.2,159.1')" } as React.CSSProperties}
            />
            <circle
              r="4"
              className="hero-diagram-dot is-amber"
              style={{ offsetPath: "path('M135.4,87.1 L163.8,159.1')" } as React.CSSProperties}
            />
          </svg>
        </Reveal>
      </div>
    </section>
  )
}
