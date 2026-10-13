import React, { useState, useEffect, useRef } from 'react'
import { portfolioContent } from '../data/content'
import { useTheme } from '../hooks/useTheme'
import { useActiveSection } from '../hooks/useActiveSection'
import { Menu, X, Sun, Moon, FileText } from 'lucide-react'

interface NavProps {
  onNavigate?: (id: string) => void
}

const NAV_LINKS = [
  { id: 'about', label: 'About', num: '01' },
  { id: 'skills', label: 'Skills', num: '02' },
  { id: 'projects', label: 'Projects', num: '03' },
  { id: 'contact', label: 'Contact', num: '04' },
]

export const Nav: React.FC<NavProps> = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { theme, toggleTheme } = useTheme()
  const activeSection = useActiveSection(NAV_LINKS.map((l) => l.id))

  const menuButtonRef = useRef<HTMLButtonElement | null>(null)
  const mobileMenuRef = useRef<HTMLDivElement | null>(null)

  // Track scroll for nav background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Lock body scroll when mobile menu is open
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
      {/* Skip to main content */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-3 focus:py-1.5 focus:bg-accent focus:text-accent-text focus:font-mono focus:text-xs focus:rounded-md focus:outline-none"
      >
        Skip to main content
      </a>

      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-200 ${
          isScrolled ? 'py-2.5 bg-bg/90 backdrop-blur-md border-b border-border' : 'py-4 bg-transparent'
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <nav
            aria-label="Main Navigation"
            className="flex items-center justify-between"
          >
            {/* Monogram */}
            <a
              href="#top"
              onClick={(e) => {
                e.preventDefault()
                window.scrollTo({ top: 0, behavior: 'smooth' })
              }}
              className="group flex items-center gap-2 focus:outline-none"
              aria-label="Pranav portfolio home"
            >
              <span className="w-7 h-7 rounded-md border border-border bg-surface-2 flex items-center justify-center font-mono text-xs font-bold text-accent group-hover:border-accent transition-colors">
                P
              </span>
              <span className="font-mono text-xs tracking-tight text-text font-medium hidden sm:inline-block">
                Pranav Saske
              </span>
            </a>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center gap-6">
              {NAV_LINKS.map((link) => {
                const isActive = activeSection === link.id
                return (
                  <a
                    key={link.id}
                    href={`#${link.id}`}
                    onClick={(e) => handleNavClick(e, link.id)}
                    className={`font-mono text-xs tracking-wide transition-colors hover:text-accent ${
                      isActive ? 'text-accent font-semibold' : 'text-text-muted'
                    }`}
                  >
                    <span className="text-[10px] text-text-dim mr-1">
                      {link.num}
                    </span>
                    {link.label}
                  </a>
                )
              })}
            </div>

            {/* Actions: Resume + Theme Toggle + Mobile Menu Trigger */}
            <div className="flex items-center gap-2">
              {/* Resume button */}
              <a
                href={portfolioContent.contact.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary py-1 px-2.5 text-xs hidden sm:inline-flex"
                aria-label="View or download resume"
              >
                <FileText className="w-3.5 h-3.5 text-text-muted" aria-hidden="true" />
                <span>Resume</span>
              </a>

              {/* Theme Toggle */}
              <button
                type="button"
                onClick={toggleTheme}
                aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
                className="w-7 h-7 rounded-md border border-border bg-surface hover:bg-surface-2 flex items-center justify-center text-text-muted hover:text-text transition-colors"
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
                className="md:hidden w-7 h-7 rounded-md border border-border bg-surface hover:bg-surface-2 flex items-center justify-center text-text hover:text-accent transition-colors"
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

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          id="mobile-menu-overlay"
          ref={mobileMenuRef}
          role="dialog"
          aria-modal="true"
          aria-label="Site Navigation"
          className="fixed inset-0 z-50 bg-bg/98 backdrop-blur-xl flex flex-col justify-between p-6 sm:p-8 md:hidden overflow-y-auto"
        >
          {/* Header */}
          <div className="flex items-center justify-between pb-4 border-b border-border">
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
              className="w-8 h-8 rounded-md border border-border bg-surface flex items-center justify-center text-text hover:text-accent transition-colors"
            >
              <X className="w-4 h-4" aria-hidden="true" />
            </button>
          </div>

          {/* Links list */}
          <div className="py-6 flex flex-col gap-3">
            {NAV_LINKS.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => handleNavClick(e, link.id)}
                className="group flex items-baseline justify-between py-2 border-b border-border/50 hover:border-accent transition-colors"
              >
                <span className="text-xl font-medium text-text group-hover:text-accent transition-colors">
                  {link.label}
                </span>
                <span className="font-mono text-xs text-text-dim group-hover:text-accent">
                  {link.num}
                </span>
              </a>
            ))}
          </div>

          {/* Bottom actions */}
          <div className="pt-4 border-t border-border flex flex-col gap-2.5">
            <a
              href={portfolioContent.contact.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary w-full text-center"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>View Resume</span>
            </a>

            <span className="font-mono text-[11px] text-text-dim text-center">
              R. C. Patel Institute of Technology, Shirpur
            </span>
          </div>
        </div>
      )}
    </>
  )
}
