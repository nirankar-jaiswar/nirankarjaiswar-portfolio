"use client"

import { motion } from "framer-motion"
import { Github, ExternalLink } from "lucide-react"
import antivirus from "../assets/antivirus.jpg"
import auto from "../assets/auto.jpg"
import insurance from "../assets/insurance.jpg"
import portfolio from "../assets/portfolio.jpg"

interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  github?: string;
  demo?: string;
}

const projects: Project[] = [
  {
    title: "Enterprise Vehicle Auction Platform",
    description:
      "A large-scale platform powering 60+ white-label vehicle auctions. Built bidding, vehicle search, and dealer portal modules with React, Vue, and TypeScript, and contributed backend APIs with Node.js, Express, and Spring Boot.",
    image: auto,
    tags: ["React", "Vue", "TypeScript", "Node.js", "Express", "MongoDB", "AWS", "Docker"],
    github: "",
    demo: "",  
  },
  {
    title: "Enterprise Insurance Dashboards",
    description:
      "Custom BFSI dashboards for claims and policy management. Designed modular UI components with React and Vue, integrated APIs, and improved frontend stability with reusable patterns and reviews.",
    image: insurance,
    tags: ["React", "Redux", "Vue", "Vuetify", "Node.js", "MongoDB", "AWS", "Docker", "Jenkins","Grafana"],
    github: "",
    demo: "",
  },
  {
     title: "Antivirus Dashboard Web Application",
  description:
    "Developed dynamic dashboards for an antivirus software platform. Built reusable UI components and integrated live charts (Recharts) to display real-time reports from API data. Each dashboard handled different requirements, making the system fully dynamic and modular.",
  image: antivirus,
  tags: ["React/Redux", "Ant Design", "Modular UI", "Recharts", "APIs"],
  github: "",
  demo: "", 
  },
  {
    title: "Portfolio Website (Personal)",
    description:
      "Personal portfolio showcasing projects and skills. Built with Vite for lightning-fast builds, Tailwind CSS for responsive UI, and Framer Motion for smooth animations.",
    image: portfolio,
    tags: ["React", "TypeScript", "Vite", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com/nirankar-jaiswar/edusera-chatbot-nirankar",
    demo: "https://www.google.com/",
  },
]

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gradient-to-br  from-gray-900 via-gray-800 to-black opacity-100">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Projects</h2>
          <div className="w-20 h-1 bg-purple-500 mx-auto mb-8"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Here are some of my recent projects. Each one presented unique challenges and opportunities to apply and
            expand my skills.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-gray-900 rounded-xl overflow-hidden shadow-lg"
            >
              <div className="relative overflow-hidden h-60">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-purple-400">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="px-3 py-1 bg-gray-800 text-gray-300 text-xs rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-300 hover:text-purple-400 transition-colors"
                    >
                      <Github size={18} />
                      <span>Code</span>
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-300 hover:text-purple-400 transition-colors"
                    >
                      <ExternalLink size={18} />
                      <span>Live Demo</span>
                    </a>
                  )}                  
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/nirankar-jaiswar"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-md transition-transform transform hover:scale-105 font-medium "
          >
            View More Projects
          </a>
        </motion.div>
      </div>
    </section>
  )
}
export default Projects;
