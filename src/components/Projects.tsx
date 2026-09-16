import { ExternalLink, Github } from "lucide-react"
import auto from "../assets/auto.jpg"
import antivirus from "../assets/antivirus.jpg"
import { kiwiScamCheckLinks } from "../data/links"
import Tags from "./Tags"

const professionalWork = [
  { title: "Enterprise Vehicle Auction Platform", image: auto,
    description: "Contributed to a large-scale vehicle remarketing platform supporting 60+ private-label auction sites. Worked across bidding, vehicle search, dealer portals, APIs and data flows in a multi-engineer production environment.",
    technologies: ["React", "Vue.js", "TypeScript", "Node.js", "Express.js", "Java", "MongoDB", "SQL"] },
  { title: "Antivirus Dashboard Platform", image: antivirus,
    description: "Built reusable dashboard components for an antivirus software product, integrating API-driven data and dynamic visualisations for different reporting requirements. The implementation used reusable UI architecture so dashboards could adapt to different datasets and use cases.",
    technologies: ["React", "TypeScript", "Redux", "Ant Design", "Recharts", "REST APIs"] },
]

export default function Projects() {
  return (
    <section id="projects" className="section section-muted" aria-labelledby="work-title">
      <div className="page-width">
        <h2 id="work-title">Featured Work</h2>
        <p className="section-intro">A selection of products and systems where I’ve applied software engineering, product thinking, cloud technologies and applied AI.</p>
        <article className="panel flagship">
          <p className="eyebrow">Featured product</p>
          <h3 className="project-title">Kiwi ScamCheck</h3>
          <p className="lead">A scam-detection prototype designed around New Zealand scam patterns.</p>
          <div className="project-grid">
            <div className="prose">
              <p>I built Kiwi ScamCheck to explore how practical software can help people assess suspicious messages before acting on them. The application analyses message content using a growing rule-based detection engine and returns risk signals, severity and actionable recommendations.</p>
              <p>Current detection logic covers patterns such as urgency, credential requests, suspicious URLs and brand-link mismatches, including New Zealand-specific brand scenarios. The project is backed by automated unit and evaluation tests and includes an AWS-oriented serverless backend architecture for feedback collection.</p>
            </div>
            <div className="project-facts"><h4>Built, tested and deployed</h4><p>Actively improving detection coverage using real test cases.</p><Tags items={["Next.js", "TypeScript", "Vitest", "AWS Lambda", "DynamoDB", "AWS SAM", "Serverless", "Automated Testing"]} /></div>
          </div>
          <div className="actions">
            <a className="button primary" href={kiwiScamCheckLinks.live} target="_blank" rel="noopener noreferrer">Live App <ExternalLink size={17} aria-hidden="true" /></a>
            <a className="button" href={kiwiScamCheckLinks.github} target="_blank" rel="noopener noreferrer">GitHub <Github size={17} aria-hidden="true" /></a>
          </div>
          <details className="how-it-works">
            <summary>How It Works</summary>
            <ol>
              <li><strong>Analyse message content.</strong> Check for urgency, credential requests, suspicious URLs and New Zealand brand-link mismatches.</li>
              <li><strong>Explain the risk.</strong> Return risk signals, severity and actionable recommendations.</li>
              <li><strong>Evaluate and improve.</strong> Use automated unit and evaluation tests to expand detection coverage; an AWS-oriented serverless architecture supports feedback collection.</li>
            </ol>
          </details>
        </article>
        <div className="two-columns supporting-work">{professionalWork.map(project => (
          <article className="panel work-card" key={project.title}>
            <img src={project.image} alt="" loading="lazy" width={640} height={320} />
            <div className="card-content"><h3>{project.title}</h3><p>{project.description}</p><Tags items={project.technologies} /><p className="small-note">Professional work - source code not public</p></div>
          </article>
        ))}</div>
      </div>
    </section>
  )
}
