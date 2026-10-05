import type { Project } from '../data/content'
import Reveal from './Reveal'
import './ProjectCard.css'

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Reveal as="article" className="project-card">
      <div>
        <div className="project-card-meta">
          <span className="project-card-number">{project.number}</span>
          <span className="project-card-category">{project.category}</span>
        </div>
        <h3 className="project-card-title">{project.title}</h3>
        <p className="project-card-description">{project.description}</p>
        <div className="project-card-tech">
          {project.tech.map((t) => (
            <span key={t}>{t}</span>
          ))}
        </div>
        {(project.githubUrl || project.demoUrl) && (
          <div className="project-card-links">
            {project.demoUrl && (
              <a href={project.demoUrl} target="_blank" rel="noreferrer">
                View project <span className="project-card-link-arrow">→</span>
              </a>
            )}
            {project.githubUrl && (
              <a href={project.githubUrl} target="_blank" rel="noreferrer">
                GitHub <span className="project-card-link-arrow">→</span>
              </a>
            )}
          </div>
        )}
      </div>

      <div className="project-card-visual">
        <span className="project-card-shine" aria-hidden="true" />
        {project.imageUrl ? (
          <img src={project.imageUrl} alt={`Screenshot of ${project.title}`} loading="lazy" />
        ) : (
          <div className="project-card-visual-placeholder" aria-hidden="true">
            <span>{project.number}</span>
          </div>
        )}
      </div>
    </Reveal>
  )
}
