import React, { useEffect, useRef } from 'react'
import { useReducedMotion } from '../hooks/useReducedMotion'

interface Point3D {
  x: number
  y: number
  z: number
}

export const HeroVisual: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const containerRef = useRef<HTMLDivElement | null>(null)
  const prefersReduced = useReducedMotion()

  useEffect(() => {
    const canvas = canvasRef.current
    const container = containerRef.current
    if (!canvas || !container) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationFrameId: number
    let isVisible = true
    let isTabVisible = document.visibilityState === 'visible'

    // Golden ratio for icosahedron vertices
    const phi = (1 + Math.sqrt(5)) / 2
    const baseVertices: Point3D[] = [
      { x: -1, y: phi, z: 0 },
      { x: 1, y: phi, z: 0 },
      { x: -1, y: -phi, z: 0 },
      { x: 1, y: -phi, z: 0 },
      { x: 0, y: -1, z: phi },
      { x: 0, y: 1, z: phi },
      { x: 0, y: -1, z: -phi },
      { x: 0, y: 1, z: -phi },
      { x: phi, y: 0, z: -1 },
      { x: phi, y: 0, z: 1 },
      { x: -phi, y: 0, z: -1 },
      { x: -phi, y: 0, z: 1 },
    ].map((p) => {
      // Normalize to radius 1
      const mag = Math.sqrt(p.x * p.x + p.y * p.y + p.z * p.z)
      return { x: p.x / mag, y: p.y / mag, z: p.z / mag }
    })

    // Icosahedron edges: connect vertices whose distance is approx 1.05
    const edges: [number, number][] = []
    for (let i = 0; i < baseVertices.length; i++) {
      for (let j = i + 1; j < baseVertices.length; j++) {
        const dx = baseVertices[i].x - baseVertices[j].x
        const dy = baseVertices[i].y - baseVertices[j].y
        const dz = baseVertices[i].z - baseVertices[j].z
        const dist = Math.sqrt(dx * dx + dy * dy + dz * dz)
        if (dist > 0.95 && dist < 1.15) {
          edges.push([i, j])
        }
      }
    }

    // Interactive tilt tracking
    let targetTiltX = 0
    let targetTiltY = 0
    let currentTiltX = 0
    let currentTiltY = 0
    let rotY = 0.4
    let rotX = 0.25

    const handlePointerMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect()
      const nx = (e.clientX - rect.left) / rect.width - 0.5
      const ny = (e.clientY - rect.top) / rect.height - 0.5
      targetTiltX = ny * 0.45
      targetTiltY = nx * 0.45
    }

    const handlePointerLeave = () => {
      targetTiltX = 0
      targetTiltY = 0
    }

    container.addEventListener('mousemove', handlePointerMove)
    container.addEventListener('mouseleave', handlePointerLeave)

    // Visibility and intersection checks
    const observer = new IntersectionObserver(([entry]) => {
      isVisible = entry.isIntersecting
    })
    observer.observe(container)

    const handleVisibilityChange = () => {
      isTabVisible = document.visibilityState === 'visible'
    }
    document.addEventListener('visibilitychange', handleVisibilityChange)

    let width = 0
    let height = 0

    const resize = () => {
      const rect = container.getBoundingClientRect()
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      width = rect.width
      height = rect.height
      canvas.width = Math.floor(width * dpr)
      canvas.height = Math.floor(height * dpr)
      canvas.style.width = `${width}px`
      canvas.style.height = `${height}px`
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }

    resize()
    window.addEventListener('resize', resize)

    // 3D Rotation helper
    const rotatePoint = (p: Point3D, rx: number, ry: number): Point3D => {
      // Y-axis rotation
      const cosY = Math.cos(ry)
      const sinY = Math.sin(ry)
      const x1 = p.x * cosY + p.z * sinY
      const z1 = -p.x * sinY + p.z * cosY

      // X-axis rotation
      const cosX = Math.cos(rx)
      const sinX = Math.sin(rx)
      const y2 = p.y * cosX - z1 * sinX
      const z2 = p.y * sinX + z1 * cosX

      return { x: x1, y: y2, z: z2 }
    }

    const render = () => {
      if (!ctx || width === 0 || height === 0) return

      ctx.clearRect(0, 0, width, height)

      const cx = width / 2
      const cy = height / 2
      const radius = Math.min(width, height) * 0.32
      const cameraDistance = 3.2

      // Ease tilt toward target
      currentTiltX += (targetTiltX - currentTiltX) * 0.06
      currentTiltY += (targetTiltY - currentTiltY) * 0.06

      if (!prefersReduced) {
        rotY += 0.006
        rotX += 0.002
      }

      const totalRx = rotX + currentTiltX
      const totalRy = rotY + currentTiltY

      // Draw faint orbit ring 1
      ctx.save()
      ctx.translate(cx, cy)
      ctx.rotate(rotY * 0.3)
      ctx.beginPath()
      ctx.ellipse(0, 0, radius * 1.35, radius * 0.55, 0.4, 0, Math.PI * 2)
      ctx.strokeStyle = 'rgba(0, 245, 255, 0.25)'
      ctx.lineWidth = 1.2
      ctx.setLineDash([4, 6])
      ctx.stroke()
      ctx.setLineDash([])
      ctx.restore()

      // Transform all vertices
      const transformed = baseVertices.map((v) => {
        const rotated = rotatePoint(v, totalRx, totalRy)
        // Perspective projection
        const scale = cameraDistance / (cameraDistance - rotated.z * 0.6)
        return {
          sx: cx + rotated.x * radius * scale,
          sy: cy + rotated.y * radius * scale,
          z: rotated.z,
          scale,
        }
      })

      // Draw wireframe edges
      edges.forEach(([i, j]) => {
        const p1 = transformed[i]
        const p2 = transformed[j]
        const avgZ = (p1.z + p2.z) / 2

        ctx.beginPath()
        ctx.moveTo(p1.sx, p1.sy)
        ctx.lineTo(p2.sx, p2.sy)

        // Depth cueing with cyan & violet lines
        const alpha = Math.max(0.18, ((avgZ + 1) / 2) * 0.85)
        ctx.strokeStyle =
          avgZ > 0.1
            ? `rgba(0, 245, 255, ${alpha})`
            : `rgba(168, 85, 247, ${alpha * 0.85})`
        ctx.lineWidth = avgZ > 0.1 ? 1.8 : 1.2
        ctx.stroke()
      })

      // Draw node dots at vertices
      transformed.forEach((p) => {
        const alpha = Math.max(0.3, ((p.z + 1) / 2) * 0.98)
        ctx.beginPath()
        ctx.arc(p.sx, p.sy, 2.8 * p.scale, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(0, 245, 255, ${alpha})`
        ctx.fill()

        // Outer halo on front nodes
        if (p.z > 0.1) {
          ctx.beginPath()
          ctx.arc(p.sx, p.sy, 5.5 * p.scale, 0, Math.PI * 2)
          ctx.strokeStyle = `rgba(168, 85, 247, ${alpha * 0.5})`
          ctx.lineWidth = 1.5
          ctx.stroke()
        }
      })

      // Blueprint crosshair mark in center
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.08)'
      ctx.lineWidth = 1
      ctx.beginPath()
      ctx.moveTo(cx - 12, cy)
      ctx.lineTo(cx + 12, cy)
      ctx.moveTo(cx, cy - 12)
      ctx.lineTo(cx, cy + 12)
      ctx.stroke()
    }

    const loop = () => {
      if (isVisible && isTabVisible && !prefersReduced) {
        render()
        animationFrameId = requestAnimationFrame(loop)
      } else if (prefersReduced) {
        render()
      }
    }

    if (prefersReduced) {
      render()
    } else {
      loop()
    }

    return () => {
      cancelAnimationFrame(animationFrameId)
      container.removeEventListener('mousemove', handlePointerMove)
      container.removeEventListener('mouseleave', handlePointerLeave)
      observer.disconnect()
      document.removeEventListener('visibilitychange', handleVisibilityChange)
      window.removeEventListener('resize', resize)
    }
  }, [prefersReduced])

  return (
    <div
      ref={containerRef}
      className="relative w-full h-full min-h-[320px] md:min-h-[440px] flex items-center justify-center select-none"
      aria-hidden="true"
    >
      {/* Background blueprint coordinate markings */}
      <div className="absolute top-4 right-4 font-mono text-[10px] text-text-dim/60 tracking-wider">
        SYS.GEO // IC-12V
      </div>
      <div className="absolute bottom-4 left-4 font-mono text-[10px] text-text-dim/60 tracking-wider">
        PROJ: WIREFRAME // 2D-CANVAS
      </div>

      <canvas
        ref={canvasRef}
        className="block w-full h-full cursor-grab active:cursor-grabbing"
      />
    </div>
  )
}
