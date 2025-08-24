"use client"

import { motion } from "framer-motion"

interface Skill {
  name: string
  level: number
}

  const skills: Skill[] = [
  { name: "React.js", level: 85 },
  { name: "Vue.js", level: 85 },
  { name: "Javascript", level: 92 },
  { name: "CSS3/SCSS", level: 80 },
  { name: "TypeScript", level: 75 },
  { name: "Next.js", level: 60 },
  { name: "Tailwind CSS", level: 55 },
  { name: "Node.js", level: 75 },
  { name: "Express.js", level: 78 },
  { name: "MongoDB", level: 75 },
  { name: "PostgreSQL/SQL", level: 70 },
  { name: "Git/GitHub", level: 90 },
]

const technologies: string[] = [
  "React",
  "Vue.js",
  "Next.js",
  "JavaScript",
  "Node.js",
  "Tailwind CSS",
  "TypeScript",
  "Express",
  "MongoDB",
  "PostgreSQL",
  "REST API",
  "Redux",
  "Framer Motion",
  "Jest",
  "Git",
  "GitHub",
  "Docker",
  "AWS",
  "Vercel",
  "Ant Design",
  "Material UI",
]

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-gray-900 bg-[radial-gradient(circle_at_center,rgba(120,50,255,0.15),transparent_70%)]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Skills</h2>
          <div className="w-20 h-1 bg-purple-500 mx-auto mb-8"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            I've worked with a variety of technologies across the full stack. Here's an overview of my technical skills
            and proficiency levels.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold mb-8 text-center">Proficiency</h3>
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-purple-400">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2.5">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.1 * index }}
                      className="bg-purple-600 h-2.5 rounded-full"
                    ></motion.div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold mb-8 text-center">Technologies</h3>
            <div className="flex flex-wrap gap-3">
              {technologies.map((tech, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.05 * index }}
                  whileHover={{ scale: 1.05, backgroundColor: "#7e22ce" }}
                  className="px-4 py-2 bg-gray-800 text-gray-300 rounded-full text-sm font-medium border border-gray-700 transition-colors"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
export default Skills