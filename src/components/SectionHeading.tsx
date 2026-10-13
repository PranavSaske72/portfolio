import React from 'react'

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
    <div className={`mb-6 sm:mb-8 ${className}`}>
      <div className="flex items-center gap-2 mb-1.5">
        <span className="w-1.5 h-1.5 rounded-full bg-accent" aria-hidden="true" />
        <span className="font-mono text-xs font-semibold text-accent">
          {index}
        </span>
        {subtitle && (
          <>
            <span className="text-text-dim text-xs">/</span>
            <span className="font-mono text-xs uppercase tracking-wider text-text-dim">
              {subtitle}
            </span>
          </>
        )}
      </div>
      <h2
        id={id}
        className="text-2xl sm:text-3xl font-bold tracking-tight text-text"
      >
        {title}
      </h2>
    </div>
  )
}
