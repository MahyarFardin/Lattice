import { type CSSProperties } from 'react'
import { services } from '../data/content'
import Card from './Card'
import Scramble from './Scramble'
import Shape from './Shape'
import SplitText from './SplitText'

const icons = {
  web: (
    <svg viewBox="0 0 64 64" aria-hidden="true">
      <rect x="6" y="10" width="52" height="44" rx="6" />
      <line x1="6" y1="22" x2="58" y2="22" />
      <path className="icon-left" d="M26 31 L18 38 L26 45" />
      <path className="icon-right" d="M38 31 L46 38 L38 45" />
      <line className="icon-slash" x1="35" y1="29" x2="29" y2="47" />
    </svg>
  ),
  ai: (
    <svg viewBox="0 0 64 64" aria-hidden="true">
      <path className="icon-edge" d="M12 18 L32 32 L52 16 M12 46 L32 32 L52 48 M12 18 L12 46 M52 16 L52 48" />
      <circle className="icon-node" cx="12" cy="18" r="5" />
      <circle className="icon-node" cx="12" cy="46" r="5" />
      <circle className="icon-node" cx="32" cy="32" r="7" />
      <circle className="icon-node" cx="52" cy="16" r="5" />
      <circle className="icon-node" cx="52" cy="48" r="5" />
    </svg>
  ),
}

export default function Services() {
  return (
    <section id="services" className="section">
      <Shape className="services-shape" />
      <div className="container">
        <Scramble className="eyebrow" text="// what we build" />
        <SplitText className="h2" text="Two disciplines. One team." />

        <div className="services-grid">
          {services.map((s) => (
            <Card key={s.title} tilt className="service" tabIndex={0}>
              <div className="service-icon">{icons[s.icon]}</div>
              <h3>{s.title}</h3>
              <p className="service-tagline">{s.tagline}</p>
              <Scramble className="mono-label" text={s.stack} />
              <div className="service-list">
                <ul>
                  {s.items.map((item, i) => (
                    <li key={item} style={{ '--i': i } as CSSProperties}>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
