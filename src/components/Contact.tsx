import { siteConfig } from '../data/content'
import Highlight from './Highlight'
import Reveal from './Reveal'
import './Contact.css'

export default function Contact() {
  return (
    <section id="contact" className="section section-border-top">
      <div className="container">
        <Reveal className="section-head">
          <span className="section-label">Contact</span>
          <h2 className="section-heading">
            Let's build something{' '}
            <Highlight color="amber" shift="right">
              useful.
            </Highlight>
          </h2>
        </Reveal>

        <Reveal>
          <div className="contact-links">
            <a className="contact-link" href={`mailto:${siteConfig.email}`}>
              Email
              <span>{siteConfig.email}</span>
            </a>
            <a className="contact-link" href={siteConfig.upworkUrl} target="_blank" rel="noreferrer">
              Upwork
              <span>Profile</span>
            </a>
            <a className="contact-link" href={siteConfig.githubUrl} target="_blank" rel="noreferrer">
              GitHub
              <span>Repositories</span>
            </a>
            <a className="contact-link" href={siteConfig.linkedinUrl} target="_blank" rel="noreferrer">
              LinkedIn
              <span>Profile</span>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
