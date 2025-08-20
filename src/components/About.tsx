"use client"

import { motion } from "framer-motion"
import { Code, Layout, Server, Database } from "lucide-react"
import img from "../assets/portfolio.jpg"

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-800 relative overflow-hidden">
      {/* Background image */}
        <div className="absolute inset-0">
          <img
            src={img}
            alt="Background"
            className="w-full h-full object-cover"
          />
          {/* Blur + dark overlay */}
          <div className="absolute inset-0 bg-black/70 backdrop-blur-sm"></div>
        </div>
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-purple-500 mx-auto mb-8"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            As a full-stack developer, I bridge frontend creativity with backend scalability. With expertise in React, Vue, Node.js, and AWS, I build web applications that don’t just function but perform at scale. Currently,
             I’m expanding into AI and cloud technologies through my Master of IT in Wellington.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold mb-4 text-purple-400">My Journey</h3>
            <p className="text-gray-300 mb-4">
              I’m a full-stack engineer with 3+ years of experience delivering scalable web applications across BFSI 
              and vehicle re-marketing industries. I’ve built everything from customer dashboards to white-label auction platforms, combining clean code, user-focused design, and performance-first development.
            </p>
            <p className="text-gray-300 mb-4">
              My expertise spans frontend (React, Vue, TypeScript), backend (Node.js, Express), and DevOps (AWS, Docker, Jenkins). I’ve streamlined deployments, optimized performance, and even reduced frontend bugs by 40% through modular design and reviews.
            </p>
            <p className="text-gray-300 mb-4">
             Currently, I’m pursuing a Master of IT in Wellington, where I’m diving deeper into AI, blockchain, and cloud technologies to complement my industry experience.
            </p>
            <p className="text-gray-300">
              Outside of work, I enjoy exploring new technologies, contributing to open-source, mentoring junior developers, and occasionally leading community events.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-2 gap-6"
          >
            <motion.div whileHover={{ y: -5 }} className="bg-gray-700 p-6 rounded-lg">
              <Layout className="text-purple-400 mb-4" size={36} />
              <h4 className="text-xl font-semibold mb-2">Frontend</h4>
              <p className="text-gray-400">Creating responsive, accessible, and beautiful user interfaces</p>
            </motion.div>

            <motion.div whileHover={{ y: -5 }} className="bg-gray-700 p-6 rounded-lg">
              <Server className="text-purple-400 mb-4" size={36} />
              <h4 className="text-xl font-semibold mb-2">Backend</h4>
              <p className="text-gray-400">Building robust APIs and server-side applications</p>
            </motion.div>

            <motion.div whileHover={{ y: -5 }} className="bg-gray-700 p-6 rounded-lg">
              <Database className="text-purple-400 mb-4" size={36} />
              <h4 className="text-xl font-semibold mb-2">Database</h4>
              <p className="text-gray-400">Designing efficient data models and queries</p>
            </motion.div>

            <motion.div whileHover={{ y: -5 }} className="bg-gray-700 p-6 rounded-lg">
              <Code className="text-purple-400 mb-4" size={36} />
              <h4 className="text-xl font-semibold mb-2">Clean Code</h4>
              <p className="text-gray-400">Writing maintainable, efficient, and well-tested code</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
