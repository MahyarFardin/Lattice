import { siteConfig } from '../data/content'

export default function Logo() {
  return (
    <a href="#top" className="logo" aria-label={`${siteConfig.brandName} home`}>
      <svg viewBox="0 0 28 28" aria-hidden="true">
        <line x1="7" y1="20" x2="21" y2="8" />
        <circle cx="7" cy="20" r="4" className="logo-a" />
        <circle cx="21" cy="8" r="4" className="logo-b" />
      </svg>
      <span>{siteConfig.brandName}</span>
    </a>
  )
}
