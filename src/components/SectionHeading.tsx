import React from 'react'
import { Reveal } from './Reveal'

interface SectionHeadingProps {
  index: string
  title: string
  subtitle?: string
  id?: string
  className?: string
  colorTheme?: 'cyan' | 'purple' | 'emerald' | 'amber' | 'pink'
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  index,
  title,
  subtitle,
  id,
  className = '',
  colorTheme = 'cyan',
}) => {
  const colorMap = {
    cyan: {
      text: 'text-cyan-400',
      line: 'bg-cyan-500/40',
      dot: 'bg-cyan-400',
      gradient: 'from-cyan-400 to-blue-500',
    },
    purple: {
      text: 'text-purple-400',
      line: 'bg-purple-500/40',
      dot: 'bg-purple-400',
      gradient: 'from-purple-400 to-pink-500',
    },
    emerald: {
      text: 'text-emerald-400',
      line: 'bg-emerald-500/40',
      dot: 'bg-emerald-400',
      gradient: 'from-emerald-400 to-teal-500',
    },
    amber: {
      text: 'text-amber-400',
      line: 'bg-amber-500/40',
      dot: 'bg-amber-400',
      gradient: 'from-amber-400 to-orange-500',
    },
    pink: {
      text: 'text-pink-400',
      line: 'bg-pink-500/40',
      dot: 'bg-pink-400',
      gradient: 'from-pink-400 to-rose-500',
    },
  }

  const theme = colorMap[colorTheme]

  return (
    <div className={`mb-8 md:mb-12 ${className}`}>
      <Reveal>
        <div className="flex items-center gap-3 mb-2">
          <span className={`w-2 h-2 rounded-full ${theme.dot} animate-pulse`} aria-hidden="true" />
          <span className={`font-mono text-xs tracking-wider font-semibold ${theme.text}`}>
            {index}
          </span>
          <span className={`h-px w-8 ${theme.line}`} aria-hidden="true" />
          {subtitle && (
            <span className="font-mono text-xs uppercase tracking-widest text-text-dim">
              {subtitle}
            </span>
          )}
        </div>
        <h2
          id={id}
          className="font-serif text-3xl md:text-5xl text-text font-normal tracking-tight leading-[1.1]"
        >
          {title}
        </h2>
      </Reveal>
    </div>
  )
}
