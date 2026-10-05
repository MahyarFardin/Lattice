import { processSteps } from '../data/content'
import Reveal from './Reveal'
import './Process.css'

export default function Process() {
  return (
    <section className="section section-border-top">
      <div className="container">
        <Reveal className="section-head">
          <span className="section-label">How We Work</span>
          <h2 className="section-heading">A straightforward process</h2>
        </Reveal>

        <Reveal as="div" className="process-rail-wrap">
          <div className="process-grid">
            {processSteps.map((step, i) => (
              <Reveal key={step.number} as="div" className="process-step" delay={i * 80}>
                <span className="process-step-number">{step.number}</span>
                <h3 className="process-step-title">{step.title}</h3>
                <p className="process-step-description">{step.description}</p>
              </Reveal>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
