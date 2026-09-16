import { ArrowDown, Download, Github, Linkedin } from "lucide-react"
import profileImage from "../assets/nirankar.png"
import { links } from "../data/links"

export default function Hero() {
  return (
    <section id="home" className="hero" aria-labelledby="hero-title">
      <div className="page-width">
        <div className="hero-grid">
          <div>
            <p className="eyebrow">Nirankar Jaiswar</p>
            <h1 id="hero-title">Software Engineer building <span className="accent">AI-powered and cloud-ready</span> products</h1>
            <p className="hero-copy">Software Engineer with 3+ years of commercial experience across full-stack development, backend APIs, testing and delivery. I recently completed a Master of Information Technology by Research with an A grade, and I’m now focused on building practical software across AI, cloud and modern web engineering.</p>
            <div className="actions">
              <a className="button primary" href="#projects">View My Work <ArrowDown size={18} aria-hidden="true" /></a>
              <a className="button" href={links.cv} download>Download CV <Download size={18} aria-hidden="true" /></a>
            </div>
            <div className="social-links">
              <a href={links.github} target="_blank" rel="noopener noreferrer"><Github size={19} aria-hidden="true" /> GitHub</a>
              <a href={links.linkedin} target="_blank" rel="noopener noreferrer"><Linkedin size={19} aria-hidden="true" /> LinkedIn</a>
            </div>
          </div>
          <img className="portrait" src={profileImage} alt="Nirankar Jaiswar" width={320} height={320} fetchPriority="high" />
        </div>
        <ul className="credibility" aria-label="Career highlights">
          <li><strong>3+ Years</strong><span>Software Engineering</span></li>
          <li><strong>MIT Research - A Grade</strong><span>Browser-Based Machine Learning</span></li>
          <li><strong>AWS Certified</strong><span>Solutions Architect - Associate</span></li>
          <li><strong>Kiwi ScamCheck</strong><span>Live Product</span></li>
        </ul>
      </div>
    </section>
  )
}
