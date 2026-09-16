import { links } from "../data/links"

export default function Footer() {
  return <footer className="footer"><div className="page-width footer-grid">
    <div><a className="brand" href="#home">Nirankar Jaiswar</a><p>Software Engineering · Applied AI · Cloud</p></div>
    <div><div className="social-links"><a href={links.github} target="_blank" rel="noopener noreferrer">GitHub</a><a href={links.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a><a href="#home" aria-label="Back to top">↑ Top</a></div><p>© 2026 Nirankar Jaiswar</p></div>
  </div></footer>
}
