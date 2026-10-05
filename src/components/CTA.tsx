import { siteConfig } from '../data/content'
import Reveal from './Reveal'
import './CTA.css'

export default function CTA() {
  return (
    <section className="section cta-section">
      <div className="container">
        <Reveal>
          <h2 className="cta-heading">Have a product in mind?</h2>
          <p className="cta-description">
            Tell us what you're trying to build. We'll figure out the technical path with you.
          </p>
          <div className="cta-actions">
            <a href={siteConfig.upworkUrl} target="_blank" rel="noreferrer" className="btn btn-primary">
              Hire us on Upwork
            </a>
            <a href="#contact" className="btn btn-secondary">
              Contact us
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
