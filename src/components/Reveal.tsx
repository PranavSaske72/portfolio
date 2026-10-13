import React from 'react'
import { useInView } from '../hooks/useInView'
import { useReducedMotion } from '../hooks/useReducedMotion'

interface RevealProps {
  children: React.ReactNode
  className?: string
  delayMs?: number
  direction?: 'up' | 'none'
  threshold?: number
}

export const Reveal: React.FC<RevealProps> = ({
  children,
  className = '',
  delayMs = 0,
  direction = 'up',
  threshold = 0.12,
}) => {
  const [ref, isInView] = useInView<HTMLDivElement>({ threshold, once: true })
  const prefersReduced = useReducedMotion()

  if (prefersReduced) {
    return <div className={className}>{children}</div>
  }

  const translateY = direction === 'up' ? 'translateY(20px)' : 'none'
  const style: React.CSSProperties = {
    opacity: isInView ? 1 : 0,
    transform: isInView ? 'translateY(0)' : translateY,
    transition: `opacity 650ms cubic-bezier(0.22, 1, 0.36, 1) ${delayMs}ms, transform 650ms cubic-bezier(0.22, 1, 0.36, 1) ${delayMs}ms`,
    willChange: 'opacity, transform',
  }

  return (
    <div ref={ref} style={style} className={className}>
      {children}
    </div>
  )
}
