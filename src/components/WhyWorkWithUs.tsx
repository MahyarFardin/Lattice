import { whyUs } from '../data/content'
import Reveal from './Reveal'
import './WhyWorkWithUs.css'

export default function WhyWorkWithUs() {
  return (
    <section className="section section-border-top">
      <div className="container">
        <Reveal className="section-head">
          <span className="section-label">Why Work With Us</span>
          <h2 className="section-heading">What you can expect</h2>
        </Reveal>

        <div className="why-grid">
          {whyUs.map((item, i) => (
            <Reveal key={item.title} as="div" className="why-item" delay={i * 70}>
              <span className="why-item-marker" aria-hidden="true">
                {String(i + 1).padStart(2, '0')}
              </span>
              <h3 className="why-item-title">{item.title}</h3>
              <p className="why-item-description">{item.description}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
