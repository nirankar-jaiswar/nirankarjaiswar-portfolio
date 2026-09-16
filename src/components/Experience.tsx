import Tags from "./Tags"

const roles = [
  {
    title: "Engineer II - Node.js Developer", company: "Apexon · Mumbai, India", dates: "Aug 2024 – Jan 2025",
    description: "Built and maintained REST APIs using Node.js and Express.js, supporting integration between frontend applications and backend services. Worked with Postman, Jenkins, Docker and Grafana across testing, release and production-support workflows, while collaborating with QA, client and delivery teams to investigate issues and deliver reliable solutions.",
    technologies: ["Node.js", "Express.js", "REST APIs", "Postman", "Jenkins", "Docker", "Grafana"],
  },
  {
    title: "Software Engineer", company: "Iorta Technology Solutions · Mumbai, India", dates: "Apr 2023 – Apr 2024",
    description: "Developed client-facing dashboards and operational workflows for BFSI applications using React, Redux, Vue.js, Vuetify and Ant Design. Built reusable components, integrated backend APIs and contributed to development practices that reduced frontend defects through modular design and code reviews.",
    technologies: ["React", "Redux", "Vue.js", "TypeScript", "APIs", "Ant Design", "Vuetify"],
  },
  {
    title: "Software Developer", company: "Amiti Software Technologies · Bangalore, India", dates: "Aug 2021 – Feb 2023",
    description: "Contributed to a vehicle remarketing platform supporting more than 60 private-label auction sites. Worked across bidding, vehicle-search and dealer-portal functionality using React, Vue.js, TypeScript, Node.js, Express.js, Java, MongoDB, SQL and REST services.",
    technologies: ["React", "Vue.js", "TypeScript", "Node.js", "Express.js", "Java", "MongoDB", "SQL"],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="section" aria-labelledby="experience-title">
      <div className="page-width">
        <h2 id="experience-title">Experience</h2>
        <div className="roles">{roles.map(role => (
          <article className="role" key={role.company}>
            <div><p className="date">{role.dates}</p><p>{role.company}</p></div>
            <div><h3>{role.title}</h3><p>{role.description}</p><Tags items={role.technologies} /></div>
          </article>
        ))}</div>
        <aside className="context-note">Based in New Zealand, where I completed my Master of Information Technology research while working part-time at Woolworths NZ. This experience has also strengthened my communication, adaptability and understanding of working in a fast-paced New Zealand environment.</aside>
      </div>
    </section>
  )
}
