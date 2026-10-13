import React from 'react'
import { Reveal } from './Reveal'

interface SectionHeadingProps {
  index: string
  title: string
  subtitle?: string
  id?: string
  className?: string
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  index,
  title,
  subtitle,
  id,
  className = '',
}) => {
  return (
    <div className={`mb-12 md:mb-16 ${className}`}>
      <Reveal>
        <div className="flex items-center gap-3 mb-3">
          <span className="font-mono text-xs text-accent tracking-wider font-medium">
            {index}
          </span>
          <span className="h-px w-8 bg-border-strong" aria-hidden="true" />
          {subtitle && (
            <span className="font-mono text-xs uppercase tracking-widest text-text-dim">
              {subtitle}
            </span>
          )}
        </div>
        <h2
          id={id}
          className="font-serif text-3xl md:text-5xl lg:text-6xl text-text font-normal tracking-tight leading-[1.05]"
        >
          {title}
        </h2>
      </Reveal>
    </div>
  )
}
