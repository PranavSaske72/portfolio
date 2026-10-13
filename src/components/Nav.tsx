import React, { useState, useEffect, useRef } from 'react'
import { portfolioContent } from '../data/content'
import { PlaceholderLink } from './PlaceholderLink'
import { useTheme } from '../hooks/useTheme'
import { useActiveSection } from '../hooks/useActiveSection'
import { Menu, X, Sun, Moon, FileText } from 'lucide-react'

interface NavProps {
  onNavigate?: (id: string) => void
}

const NAV_LINKS = [
  { id: 'about', label: 'About', num: '01' },
  { id: 'projects', label: 'Projects', num: '02' },
  { id: 'skills', label: 'Skills', num: '03' },
  { id: 'education', label: 'Education', num: '04' },
  { id: 'experience', label: 'Experience', num: '05' },
  { id: 'certifications', label: 'Certifications', num: '06' },
  { id: 'contact', label: 'Contact', num: '07' },
]

export const Nav: React.FC<NavProps> = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { theme, toggleTheme } = useTheme()
  const activeSection = useActiveSection(NAV_LINKS.map((l) => l.id))

  const menuButtonRef = useRef<HTMLButtonElement | null>(null)
  const mobileMenuRef = useRef<HTMLDivElement | null>(null)

  // Track scroll for pill styling
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Lock body scroll and handle Escape when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'

      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          setIsMobileMenuOpen(false)
          menuButtonRef.current?.focus()
        }
      }

      window.addEventListener('keydown', handleKeyDown)
      return () => {
        document.body.style.overflow = ''
        window.removeEventListener('keydown', handleKeyDown)
      }
    } else {
      document.body.style.overflow = ''
    }
  }, [isMobileMenuOpen])

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault()
    setIsMobileMenuOpen(false)
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      history.pushState(null, '', `#${id}`)
    }
  }

  return (
    <>
      {/* Skip to main content link for keyboard accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-accent focus:text-accent-text focus:font-mono focus:text-xs focus:rounded focus:outline-none focus:ring-2 focus:ring-accent"
      >
        Skip to main content
      </a>

      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled ? 'py-2.5 md:py-3' : 'py-5 md:py-6'
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <nav
            aria-label="Main Navigation"
            className={`flex items-center justify-between transition-all duration-300 rounded-full px-4 sm:px-6 py-2.5 ${
              isScrolled
                ? 'bg-surface/85 backdrop-blur-md border border-border-strong shadow-lg'
                : 'bg-transparent border border-transparent'
            }`}
          >
            {/* Wordmark / Monogram */}
            <a
              href="#top"
              onClick={(e) => {
                e.preventDefault()
                window.scrollTo({ top: 0, behavior: 'smooth' })
              }}
              className="group flex items-center gap-2.5 focus:outline-none"
              aria-label="Pranav portfolio home"
            >
              <span className="w-8 h-8 rounded-full border border-border-strong bg-surface flex items-center justify-center font-serif text-lg text-text group-hover:border-accent transition-colors">
                P.
              </span>
              <span className="font-mono text-sm tracking-tight text-text font-medium hidden sm:inline-block">
                Pranav
              </span>
            </a>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center gap-6">
              {NAV_LINKS.map((link) => {
                const isActive = activeSection === link.id
                return (
                  <a
                    key={link.id}
                    href={`#${link.id}`}
                    onClick={(e) => handleNavClick(e, link.id)}
                    className={`font-mono text-xs tracking-wide transition-colors hover:text-accent ${
                      isActive ? 'text-accent font-medium' : 'text-text-muted'
                    }`}
                  >
                    <span className="text-[10px] text-text-dim mr-1 opacity-70">
                      {link.num}
                    </span>
                    {link.label}
                  </a>
                )
              })}
            </div>

            {/* Actions: Resume + Theme Toggle + Mobile Menu Trigger */}
            <div className="flex items-center gap-3">
              {/* Resume button with placeholder support */}
              <div className="hidden sm:block">
                <PlaceholderLink
                  href={portfolioContent.contact.resumeUrl}
                  placeholderLabel="Resume"
                  variant="button-secondary"
                  className="text-xs py-1.5 px-3"
                  icon={<FileText className="w-3.5 h-3.5" aria-hidden="true" />}
                  ariaLabel="View Resume (Link coming soon)"
                >
                  Resume
                </PlaceholderLink>
              </div>

              {/* Theme Toggle */}
              <button
                type="button"
                onClick={toggleTheme}
                aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
                className="w-8 h-8 rounded-full border border-border bg-surface hover:bg-surface-2 hover:border-accent/50 flex items-center justify-center text-text-muted hover:text-text transition-colors"
              >
                {theme === 'dark' ? (
                  <Sun className="w-3.5 h-3.5 text-accent" aria-hidden="true" />
                ) : (
                  <Moon className="w-3.5 h-3.5 text-accent" aria-hidden="true" />
                )}
              </button>

              {/* Mobile Menu Hamburger */}
              <button
                ref={menuButtonRef}
                type="button"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-expanded={isMobileMenuOpen}
                aria-controls="mobile-menu-overlay"
                aria-label={isMobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
                className="lg:hidden w-8 h-8 rounded-full border border-border bg-surface hover:bg-surface-2 flex items-center justify-center text-text hover:text-accent transition-colors"
              >
                {isMobileMenuOpen ? (
                  <X className="w-4 h-4" aria-hidden="true" />
                ) : (
                  <Menu className="w-4 h-4" aria-hidden="true" />
                )}
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* Mobile Full-Screen Overlay Menu */}
      {isMobileMenuOpen && (
        <div
          id="mobile-menu-overlay"
          ref={mobileMenuRef}
          role="dialog"
          aria-modal="true"
          aria-label="Site Navigation"
          className="fixed inset-0 z-50 bg-bg/95 backdrop-blur-xl flex flex-col justify-between p-6 sm:p-10 lg:hidden overflow-y-auto"
        >
          {/* Header in overlay */}
          <div className="flex items-center justify-between pb-6 border-b border-border">
            <span className="font-mono text-xs tracking-wider text-accent uppercase">
              // Navigation
            </span>
            <button
              type="button"
              onClick={() => {
                setIsMobileMenuOpen(false)
                menuButtonRef.current?.focus()
              }}
              aria-label="Close menu"
              className="w-10 h-10 rounded-full border border-border bg-surface flex items-center justify-center text-text hover:text-accent transition-colors"
            >
              <X className="w-5 h-5" aria-hidden="true" />
            </button>
          </div>

          {/* Links list with large editorial display typography */}
          <div className="py-8 flex flex-col gap-5">
            {NAV_LINKS.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => handleNavClick(e, link.id)}
                className="group flex items-baseline justify-between py-2 border-b border-border/40 hover:border-accent/50 transition-colors"
              >
                <span className="font-serif text-3xl sm:text-4xl text-text group-hover:text-accent transition-colors">
                  {link.label}
                </span>
                <span className="font-mono text-xs text-text-dim group-hover:text-accent">
                  {link.num}
                </span>
              </a>
            ))}
          </div>

          {/* Bottom actions in overlay */}
          <div className="pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
            <PlaceholderLink
              href={portfolioContent.contact.resumeUrl}
              placeholderLabel="Resume"
              variant="button-primary"
              className="w-full sm:w-auto text-center"
              ariaLabel="View Resume (Link coming soon)"
            >
              Resume [[RESUME_URL]]
            </PlaceholderLink>

            <span className="font-mono text-xs text-text-dim">
              R.C. Patel Institute of Technology
            </span>
          </div>
        </div>
      )}
    </>
  )
}
