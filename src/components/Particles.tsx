"use client"
import { useEffect, useRef } from "react"

interface ParticlesProps {
  className?: string
}

interface Particle {
  x: number
  y: number
  size: number
  dx: number
  dy: number
  color: string
}

export default function Particles({ className }: ParticlesProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // set canvas full screen
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const particles: Particle[] = []
    const particleCount = 50
    const mouse = { x: 0, y: 0, radius: 200 }

    // create particles
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 1 + 2,
        dx: (Math.random() - 0.5) * 3,
        dy: (Math.random() - 0.5) * 3,
        color: "#c279f9",
      })
    }

    const drawParticle = (p: Particle) => {
      ctx.fillStyle = p.color
      ctx.beginPath()
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
      ctx.fill()
    }

    const connectParticles = () => {
      for (let a = 0; a < particles.length; a++) {
        for (let b = a; b < particles.length; b++) {
          const dx = particles[a].x - particles[b].x
          const dy = particles[a].y - particles[b].y
          const distance = Math.sqrt(dx * dx + dy * dy)
          if (distance < 150) {
            ctx.strokeStyle = `rgba(255,255,255,${0.4 - distance / 400})`
            ctx.lineWidth = 1
            ctx.beginPath()
            ctx.moveTo(particles[a].x, particles[a].y)
            ctx.lineTo(particles[b].x, particles[b].y)
            ctx.stroke()
          }
        }
      }
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particles.forEach((p) => {
        // move
        p.x += p.dx
        p.y += p.dy

        // bounce
        if (p.x < 0 || p.x > canvas.width) p.dx *= -1
        if (p.y < 0 || p.y > canvas.height) p.dy *= -1

        // mouse repulse
        const dx = p.x - mouse.x
        const dy = p.y - mouse.y
        const dist = Math.sqrt(dx * dx + dy * dy)
        if (dist < mouse.radius && dist > 0.1) {
          const repulseFactor = (mouse.radius - dist) / mouse.radius
          p.x += (dx / dist) * repulseFactor * 1.5
          p.y += (dy / dist) * repulseFactor * 1.5
        }

        drawParticle(p)
      })

      connectParticles()
      requestAnimationFrame(animate)
    }

    animate()

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX
      mouse.y = e.clientY
    }

    window.addEventListener("mousemove", handleMouseMove)
    window.addEventListener("resize", () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    })

    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return <canvas ref={canvasRef} className={className} />
}
