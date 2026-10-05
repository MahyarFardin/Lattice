import { navLinks, siteConfig } from '../data/content'
import './Footer.css'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer section-border-top">
      <div className="container">
        <div className="footer-top">
          <span className="footer-brand">{siteConfig.brandName}</span>
          <nav className="footer-links" aria-label="Footer">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="link-underline link-underline-accent">
                {link.label}
              </a>
            ))}
            <a href={siteConfig.githubUrl} target="_blank" rel="noreferrer" className="link-underline link-underline-accent">
              GitHub
            </a>
            <a href={siteConfig.upworkUrl} target="_blank" rel="noreferrer" className="link-underline link-underline-accent">
              Upwork
            </a>
            <a href={siteConfig.linkedinUrl} target="_blank" rel="noreferrer" className="link-underline link-underline-accent">
              LinkedIn
            </a>
          </nav>
        </div>

        <div className="footer-bottom">
          <span>
            © {year} {siteConfig.brandName}
          </span>
          <span>Built with code, not templates.</span>
        </div>
      </div>
    </footer>
  )
}
