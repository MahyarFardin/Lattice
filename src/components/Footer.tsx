import { navLinks, siteConfig } from '../data/content'
import Logo from './Logo'

const year = new Date().getFullYear()

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div>
          <Logo />
          <p className="footer-tag">Web and AI, built as one network.</p>
        </div>
        <nav aria-label="Footer">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="link">
              {link.label}
            </a>
          ))}
        </nav>
        <nav aria-label="Elsewhere">
          <a href={siteConfig.upworkUrl} target="_blank" rel="noreferrer" className="link">
            Upwork
          </a>
          <a href={siteConfig.githubUrl} target="_blank" rel="noreferrer" className="link">
            GitHub
          </a>
          <a href={siteConfig.linkedinUrl} target="_blank" rel="noreferrer" className="link">
            LinkedIn
          </a>
          <a href={`mailto:${siteConfig.email}`} className="link">
            {siteConfig.email}
          </a>
        </nav>
      </div>
      <p className="container footer-copy">
        © {year} {siteConfig.brandName}
      </p>
    </footer>
  )
}
