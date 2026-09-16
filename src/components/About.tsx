import { Code, BrainCircuit, Cloud, ShieldCheck } from "lucide-react"

const focusAreas = [
  { title: "Software Engineering", copy: "Building maintainable full-stack applications, APIs and integrations.", icon: Code },
  { title: "Applied AI", copy: "Using machine learning and intelligent systems to solve practical problems.", icon: BrainCircuit },
  { title: "Cloud & Serverless", copy: "Designing and deploying secure, cost-conscious cloud solutions.", icon: Cloud },
  { title: "Quality Engineering", copy: "Using automated tests, validation and structured evaluation to build reliable software.", icon: ShieldCheck },
]

export default function About() {
  return (
    <section id="about" className="section section-muted" aria-labelledby="about-title">
      <div className="page-width">
        <h2 id="about-title">About Me</h2>
        <div className="about-grid">
          <div className="prose">
            <p className="lead">I enjoy taking problems that are unclear or messy and turning them into software people can actually use.</p>
            <p>My professional background is in software engineering, where I’ve worked across React, Vue.js, TypeScript, Node.js, Express.js, APIs, testing, CI/CD and production support. That experience gave me a strong foundation in building and maintaining real-world applications rather than only academic projects.</p>
            <p>During my Master of Information Technology research in New Zealand, I moved deeper into applied machine learning by investigating the performance and scalability of browser-based AI frameworks. After completing the research with an A grade, I continued applying that learning through projects such as Kiwi ScamCheck, where I’m combining software engineering, automated testing, cloud architecture and scam-detection logic into a working product.</p>
            <p>I’m particularly interested in roles where I can combine software engineering, applied AI and cloud technologies to solve practical problems.</p>
          </div>
          <div className="focus-grid">{focusAreas.map(({ title, copy, icon: Icon }) => (
            <div className="focus-area" key={title}>
              <Icon className="accent" size={26} aria-hidden="true" />
              <h3>{title}</h3><p>{copy}</p>
            </div>
          ))}</div>
        </div>
      </div>
    </section>
  )
}
