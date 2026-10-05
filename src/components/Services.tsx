import { services } from '../data/content'
import Highlight from './Highlight'
import Reveal from './Reveal'
import './Services.css'

export default function Services() {
  return (
    <section id="services" className="section section-border-top">
      <div className="container">
        <Reveal className="section-head">
          <span className="section-label">What We Build</span>
          <h2 className="section-heading">Two disciplines, one delivery</h2>
        </Reveal>

        <div className="services-grid">
          {services.map((column, i) => (
            <Reveal key={column.title} delay={i * 100}>
              <h3 className="services-column-title">{column.title}</h3>
              <p className="services-column-description">{column.description}</p>
              <ul className="services-column-list">
                {column.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <p className="services-note">
            Need both? That's where our team is{' '}
            <Highlight color="rose" shift="right">
              strongest
            </Highlight>
            .
          </p>
        </Reveal>
      </div>
    </section>
  )
}
