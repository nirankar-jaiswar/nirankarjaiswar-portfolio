import { useEffect, useRef, useState } from "react"
import { Menu, X } from "lucide-react"

const navItems = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Featured Work", href: "#projects" },
  { name: "Research & AI", href: "#research" },
  { name: "Skills", href: "#skills" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const toggleRef = useRef<HTMLButtonElement>(null)
  const headerRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const breakpoint = window.matchMedia("(min-width: 1100px)")
    const close = () => setIsOpen(false)
    breakpoint.addEventListener("change", close)
    return () => breakpoint.removeEventListener("change", close)
  }, [])

  useEffect(() => {
    if (!isOpen) return
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false)
        toggleRef.current?.focus()
      }
    }
    const onPointerDown = (event: PointerEvent) => {
      if (!headerRef.current?.contains(event.target as Node)) setIsOpen(false)
    }
    document.addEventListener("keydown", onKeyDown)
    document.addEventListener("pointerdown", onPointerDown)
    return () => {
      document.removeEventListener("keydown", onKeyDown)
      document.removeEventListener("pointerdown", onPointerDown)
    }
  }, [isOpen])

  const navigate = (href: string) => {
    setIsOpen(false)
    // Move keyboard focus to the destination before collapsing the mobile menu.
    const section = document.querySelector<HTMLElement>(href)
    section?.setAttribute("tabindex", "-1")
    section?.focus({ preventScroll: true })
  }

  return <header className="site-header" ref={headerRef} onBlur={event => {
    if (!event.currentTarget.contains(event.relatedTarget)) setIsOpen(false)
  }}>
    <div className="page-width nav-bar">
      <a className="brand" href="#home" onClick={() => navigate("#home")}>Nirankar Jaiswar</a>
      <button ref={toggleRef} className="menu-toggle" type="button" aria-label={isOpen ? "Close navigation" : "Open navigation"} aria-expanded={isOpen} aria-controls="primary-navigation" onClick={() => setIsOpen(open => !open)}>
        {isOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
      </button>
      <nav id="primary-navigation" className={`navigation${isOpen ? " is-open" : ""}`} aria-label="Main navigation">
        {navItems.map(item => <a key={item.href} href={item.href} onClick={() => navigate(item.href)}>{item.name}</a>)}
      </nav>
    </div>
  </header>
}
