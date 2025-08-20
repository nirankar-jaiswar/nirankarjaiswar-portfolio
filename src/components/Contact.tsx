"use client"

import { motion } from "framer-motion"
import { Mail, Phone, MapPin } from "lucide-react"
import thumbnail from "../assets/preview.png"
import cv from "../assets/Nirankar_Jaiswar.pdf"

export default function Contact() {

  // const [formData, setFormData] = useState({
  //   name: "",
  //   email: "",
  //   subject: "",
  //   message: "",
  // })

  // const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
  //   const { name, value } = e.target
  //   setFormData((prev) => ({ ...prev, [name]: value }))
  // }

  // const handleSubmit = (e: React.FormEvent) => {
  //   e.preventDefault()
  //   console.log("Form submitted:", formData)
  //   // Reset form
  //   setFormData({ name: "", email: "", subject: "", message: "" })
  //   alert("Message sent successfully!")
  // }

  return (
    <section id="contact" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-purple-500 mx-auto mb-8"></div>
           <p className="text-gray-300 max-w-2xl mx-auto">
            Interested in discussing a role, collaboration, or project idea? I’m always open to new challenges.
            {/* You can also{" "}
            <a
              href="/Nirankar_Jaiswar.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-400 hover:underline"
            >
              view my CV here
            </a> */}
            
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold mb-6 text-purple-400">Contact Information</h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-purple-600/20 p-3 rounded-full">
                  <Mail className="text-purple-400" size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-1">Email</h4>
                  <a
                    href="mailto:nirankarjaiswar@gmail.com"
                    className="text-gray-400 hover:text-purple-400 transition-colors"
                  >
                    nirankarjaiswar@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-purple-600/20 p-3 rounded-full">
                  <Phone className="text-purple-400" size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-1">Phone</h4>
                  <a href="tel:+1234567890" className="text-gray-400 hover:text-purple-400 transition-colors">
                    +64225457705
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-purple-600/20 p-3 rounded-full">
                  <MapPin className="text-purple-400" size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-1">Location</h4>
                  <p className="text-gray-400">Wellington, New Zealand</p>
                </div>
              </div>
            </div>
            <div className="mt-12">
              <h3 className="text-2xl font-bold mb-6 text-purple-400">Let's Connect</h3>
              <p className="text-gray-300 mb-4">
                Follow me on social media to stay updated with my latest projects and articles.
              </p>
              <div className="flex gap-4">
                <a href="https://github.com/nirankar-jaiswar"  target="_blank" className="bg-gray-800 p-3 rounded-full hover:bg-purple-600/20 transition-colors">
                  <svg className="w-5 h-5 text-gray-300" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
                {/* <a href="#" className="bg-gray-800 p-3 rounded-full hover:bg-purple-600/20 transition-colors">
                  <svg className="w-5 h-5 text-gray-300" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a> */}
                {/* <a href="#" className="bg-gray-800 p-3 rounded-full hover:bg-purple-600/20 transition-colors">
                  <svg className="w-5 h-5 text-gray-300" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a> */}
                <a href="https://www.linkedin.com/in/nirankar-jaiswar-122074201/" target="_blank" className="bg-gray-800 p-3 rounded-full hover:bg-purple-600/20 transition-colors">
                  <svg className="w-5 h-5 text-gray-300" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm-1 15h-2v-6h2v6zm-1-7a1 1 0 100-2 1 1 0 000 2zm7 7h-2v-4c0-.6-.4-1-1-1s-1 .4-1 1v4h-2v-6h2v1.1c.4-.7 1.3-1.1 2-1.1 1.7 0 3 1.3 3 3v3z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {/* <form onSubmit={handleSubmit} className="bg-gray-800 p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold mb-6 text-purple-400">Send Me a Message</h3>

              <div className="mb-6">
                <label htmlFor="name" className="block text-gray-300 mb-2 font-medium">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 text-gray-200"
                  placeholder="Name"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="email" className="block text-gray-300 mb-2 font-medium">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 text-gray-200"
                  placeholder="Email"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="subject" className="block text-gray-300 mb-2 font-medium">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 text-gray-200"
                  placeholder="Inquiry"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-300 mb-2 font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 text-gray-200 resize-none"
                  placeholder="Hello, I'd like to talk about..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-md transition-colors font-medium flex items-center justify-center gap-2"
              >
                <Send size={18} />
                Send Message
              </button>
            </form> */}
            {/* <div className="bg-gray-800 p-8 rounded-xl shadow-lg"> */}
              <div className="">
                  <p className="text-xs text-gray-500">Preview of my CV (click to view full PDF)</p>
                <a href={cv} target="_blank" rel="noopener noreferrer">
                  <img
                    src={thumbnail}
                    alt="CV Preview"
                    className="rounded-lg shadow-md hover:shadow-purple-500/30 transition-transform hover:scale-105"
                  />
                </a>
              </div>
              <div className="flex gap-4">
              {/* <a
                href={cv}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-md font-medium transition-colors"
              >
                <FileText size={18} />
                View CV
              </a> */}
              <a
                href={cv}
                download
                className="inline-flex items-center mt-2 gap-2 px-5 py-3 bg-purple-600 hover:bg-purple-700 text-gray-200 rounded-md font-medium transition-colors"
              >
                ⬇ Download
              </a>
            </div>
            {/* </div> */}

          </motion.div>
        </div>
      </div>
    </section>
  )
}
