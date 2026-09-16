import { links } from "../data/links"

export default function Contact() {
  return <section id="contact" className="section section-muted" aria-labelledby="contact-title"><div className="page-width contact-grid">
    <div><h2 id="contact-title">Let’s Connect</h2><div className="prose">
      <p>I’m currently interested in opportunities across software engineering, full-stack development, applied AI and cloud engineering where I can contribute my commercial engineering experience while continuing to build intelligent, practical products.</p>
      <p>If you’re working on an interesting engineering problem, I’d be happy to connect.</p>
    </div></div>
    <div className="contact-details">
      <address><a className="email-link" href={links.email}>nirankarjaiswar@gmail.com</a><p>Wellington, New Zealand</p><a href={links.phone}>+64 22 545 7705</a></address>
      <div className="actions">
        <a className="button primary" href={links.email}>Email Me</a>
        <a className="button" href={links.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a className="button" href={links.github} target="_blank" rel="noopener noreferrer">GitHub</a>
        <a className="button" href={links.cv} download>Download CV</a>
        <a className="text-link" href={links.cv} target="_blank" rel="noopener noreferrer">View CV (PDF)</a>
      </div>
    </div>
  </div></section>
}
