"use client"

import { motion } from "framer-motion"
import { ArrowUp } from "lucide-react"

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mb-6 md:mb-0"
          >
            <h2 className="text-2xl font-bold text-purple-500">Nirankar Jaiswar</h2>
            <p className="text-gray-400 mt-2">Building the web, one line at a time.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col items-center md:items-end"
          >
            <button
              onClick={scrollToTop}
              className="bg-gray-800 p-3 rounded-full hover:bg-purple-600/20 transition-colors mb-4"
            >
              <ArrowUp className="text-purple-400" size={24} />
            </button>
            <p className="text-gray-400 text-sm">&copy; {new Date().getFullYear()} Nirankar Jaiswar. All rights reserved.</p>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}
