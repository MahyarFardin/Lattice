import { projects } from '../data/content'
import Highlight from './Highlight'
import ProjectCard from './ProjectCard'
import Reveal from './Reveal'

export default function Work() {
  return (
    <section id="work" className="section section-border-top">
      <div className="container">
        <Reveal className="section-head">
          <span className="section-label">Selected Work</span>
          <h2 className="section-heading">
            A few things we've{' '}
            <Highlight color="amber" shift="left">
              built
            </Highlight>
          </h2>
          <p className="section-sub">
            A selection of systems, applications and experiments we've built.
          </p>
        </Reveal>

        <div>
          {projects.map((project) => (
            <ProjectCard key={project.number} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}
