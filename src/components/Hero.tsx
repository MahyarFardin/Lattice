import { type CSSProperties } from 'react'
import { floaters, hero, siteConfig } from '../data/content'
import Btn from './Btn'
import NodeMesh from './NodeMesh'
import Reveal from './Reveal'
import Scramble from './Scramble'
import Shape from './Shape'
import SplitText from './SplitText'

export default function Hero() {
  return (
    <section id="top" className="hero">
      <NodeMesh />
      <Shape className="hero-shape" />
      <div className="floaters" aria-hidden="true">
        {floaters.map((f, i) => (
          <span
            key={f.label}
            className="floater"
            style={{ top: f.top, left: f.left, '--depth': f.depth, '--i': i } as CSSProperties}
          >
            {f.label}
          </span>
        ))}
      </div>

      <div className="container hero-inner">
        <Reveal className="hero-prompt">
          <Scramble text={hero.prompt} />
          <span className="caret" aria-hidden="true" />
        </Reveal>
        <SplitText as="h1" className="hero-title" text={hero.headline} shimmer={hero.shimmer} />
        <Reveal as="p" className="hero-sub" delay={300}>
          {hero.sub}
        </Reveal>
        <Reveal className="hero-actions" delay={450}>
          <Btn href={siteConfig.upworkUrl} external size="lg">
            Hire us on Upwork
          </Btn>
          <Btn href="#team" variant="ghost" size="lg">
            Meet the team
          </Btn>
        </Reveal>
      </div>

      <a href="#services" className="scroll-hint" aria-label="Scroll to services">
        <span />
      </a>
    </section>
  )
}
