import React from 'react'
import { Reveal } from './Reveal'

interface SectionHeadingProps {
  index: string
  title: string
  subtitle?: string
  id?: string
  className?: string
  colorTheme?: string
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  index,
  title,
  subtitle,
  id,
  className = '',
}) => {
  return (
    <div className={`mb-8 md:mb-12 ${className}`}>
      <Reveal>
        <div className="flex items-center gap-2.5 mb-2.5">
          <span className="w-1.5 h-1.5 rounded-full bg-accent" aria-hidden="true" />
          <span className="font-mono text-xs tracking-wider font-semibold text-accent">
            {index}
          </span>
          <span className="h-px w-6 bg-border-strong" aria-hidden="true" />
          {subtitle && (
            <span className="font-mono text-xs uppercase tracking-widest text-text-dim">
              {subtitle}
            </span>
          )}
        </div>
        <h2
          id={id}
          className="font-serif text-3xl sm:text-4xl md:text-5xl text-text font-normal tracking-tight leading-[1.1]"
        >
          {title}
        </h2>
      </Reveal>
    </div>
  )
}
