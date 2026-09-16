import Tags from "./Tags"

const groups = [
  { title: "Software Engineering", skills: ["JavaScript", "TypeScript", "React", "Vue.js", "Next.js", "Node.js", "Express.js", "REST APIs", "Redux", "HTML", "CSS", "SQL", "PostgreSQL", "MongoDB"] },
  { title: "Cloud & Delivery", skills: ["AWS", "AWS Lambda", "DynamoDB", "AWS SAM", "IAM", "Serverless Architecture", "Docker", "Jenkins", "GitHub Actions", "Git", "CI/CD", "Vercel", "Grafana", "Postman"] },
  { title: "AI & Machine Learning", skills: ["Python", "TensorFlow.js", "PyTorch", "ONNX Runtime Web", "WebAssembly", "OpenCV", "scikit-learn", "pandas", "NumPy", "Machine-Learning Evaluation", "Performance Analysis"] },
  { title: "Testing & Quality", skills: ["Vitest", "Jest", "Unit Testing", "Integration Testing", "Runtime Validation", "API Testing", "Automated Evaluation", "ESLint"] },
]

export default function Skills() {
  return <section id="skills" className="section section-muted" aria-labelledby="skills-title"><div className="page-width">
    <h2 id="skills-title">Technical Skills</h2>
    <div className="two-columns skills-grid">{groups.map(group => <div key={group.title}><h3>{group.title}</h3><Tags items={group.skills} /></div>)}</div>
  </div></section>
}
