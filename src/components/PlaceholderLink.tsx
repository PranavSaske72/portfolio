import React from 'react'
import { isPlaceholder } from '../data/content'
import { ExternalLink, Lock } from 'lucide-react'

interface PlaceholderLinkProps {
  href: string | undefined | null
  children?: React.ReactNode
  className?: string
  variant?: 'button-primary' | 'button-secondary' | 'button-ghost' | 'chip' | 'inline'
  placeholderLabel?: string
  isEmail?: boolean
  icon?: React.ReactNode
  ariaLabel?: string
}

export const PlaceholderLink: React.FC<PlaceholderLinkProps> = ({
  href,
  children,
  className = '',
  variant = 'button-secondary',
  placeholderLabel,
  isEmail = false,
  icon,
  ariaLabel,
}) => {
  const isUnset = isPlaceholder(href)

  // Clean label from placeholder or custom fallback
  const rawPlaceholderName =
    placeholderLabel || (href ? href.replace(/\[\[|\]\]/g, '').replace(/_/g, ' ') : 'Add Link')

  // When link is still a placeholder
  if (isUnset) {
    const disabledText = `${children || rawPlaceholderName} (Link coming soon)`

    if (variant === 'chip' || variant === 'inline') {
      return (
        <span
          role="link"
          aria-disabled="true"
          aria-label={ariaLabel || disabledText}
          tabIndex={0}
          title="Link coming soon — editable in src/data/content.ts"
          className={`inline-flex items-center gap-1.5 px-2 py-0.5 text-xs font-mono border border-dashed border-border-strong text-text-dim rounded cursor-not-allowed select-none bg-surface/50 transition-colors ${className}`}
          onClick={(e) => e.preventDefault()}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') e.preventDefault()
          }}
        >
          <Lock className="w-2.5 h-2.5 opacity-60" aria-hidden="true" />
          <span>{children || rawPlaceholderName}</span>
          <span className="text-[10px] text-text-dim/80 uppercase tracking-wider font-sans border-l border-border pl-1.5 ml-0.5">
            Coming soon
          </span>
        </span>
      )
    }

    const baseButtonClasses =
      'inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-mono rounded border border-dashed border-border-strong bg-surface/40 text-text-dim cursor-not-allowed select-none transition-all'

    return (
      <button
        type="button"
        disabled
        aria-disabled="true"
        aria-label={ariaLabel || disabledText}
        title="Link coming soon — edit in src/data/content.ts"
        className={`${baseButtonClasses} ${className}`}
        onClick={(e) => e.preventDefault()}
      >
        {icon || <Lock className="w-3 h-3 opacity-60" aria-hidden="true" />}
        <span>{children || rawPlaceholderName}</span>
        <span className="text-[10px] uppercase tracking-wider px-1.5 py-0.5 rounded bg-surface-2/60 text-text-dim border border-border">
          Coming soon
        </span>
      </button>
    )
  }

  // When link is live and populated
  const targetHref = isEmail ? `mailto:${href}` : (href as string)
  const isExternal = !targetHref.startsWith('#') && !targetHref.startsWith('mailto:')

  let activeClasses = ''
  switch (variant) {
    case 'button-primary':
      activeClasses =
        'inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-mono font-medium rounded bg-accent text-accent-text hover:brightness-110 active:scale-[0.98] transition-all shadow-sm'
      break
    case 'button-secondary':
      activeClasses =
        'inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-mono rounded border border-border hover:border-accent hover:text-accent bg-surface hover:bg-surface-2 transition-all'
      break
    case 'button-ghost':
      activeClasses =
        'inline-flex items-center justify-center gap-2 px-3 py-2 text-xs font-mono text-text-muted hover:text-text hover:bg-surface-2 rounded transition-all'
      break
    case 'chip':
      activeClasses =
        'inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-mono rounded border border-border hover:border-accent bg-surface hover:text-accent transition-colors'
      break
    case 'inline':
      activeClasses = 'hover-underline-wipe text-text hover:text-accent transition-colors inline-flex items-center gap-1'
      break
  }

  return (
    <a
      href={targetHref}
      aria-label={ariaLabel}
      target={isExternal ? '_blank' : undefined}
      rel={isExternal ? 'noopener noreferrer' : undefined}
      className={`${activeClasses} ${className}`}
    >
      {icon}
      <span>{children || href}</span>
      {isExternal && !icon && (
        <ExternalLink className="w-3 h-3 opacity-70 group-hover:opacity-100" aria-hidden="true" />
      )}
    </a>
  )
}
