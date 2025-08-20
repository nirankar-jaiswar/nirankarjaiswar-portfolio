"use client"

import { useState, useEffect } from "react"
import { AnimatePresence } from "framer-motion"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import Loader from "./components/Loader"

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  }, [])
  
  return (
    <>
    <div className="bg-gray-900 text-gray-100 min-h-screen">
        <AnimatePresence>
          {loading ? (
            <Loader key="loader" />
          ) : (
            <>
              <Navbar />
              <main>
                <Hero />
                <About />
                <Skills />
                <Projects />
                <Contact />
              </main>
              <Footer />
            </>
          )}
        </AnimatePresence>
      </div></>
  )
}

export default App

// import Test from './Test'

// function App() {
//   return <Test />
// }

// export default App