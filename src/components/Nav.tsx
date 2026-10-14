import React, { useState, useEffect, useRef } from 'react'
import { portfolioContent } from '../data/content'
import { useTheme } from '../hooks/useTheme'
import { useActiveSection } from '../hooks/useActiveSection'
import { Menu, X, Sun, Moon, FileText, Sparkles } from 'lucide-react'

interface NavProps {
  onNavigate?: (id: string) => void
}

const NAV_LINKS = [
  { id: 'projects', label: 'Projects', num: '01' },
  { id: 'about', label: 'About', num: '02' },
  { id: 'skills', label: 'Skills', num: '03' },
  { id: 'contact', label: 'Contact', num: '04' },
]

export const Nav: React.FC<NavProps> = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { theme, toggleTheme } = useTheme()
  const activeSection = useActiveSection(NAV_LINKS.map((l) => l.id))

  const menuButtonRef = useRef<HTMLButtonElement | null>(null)
  const mobileMenuRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

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
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-3 focus:py-1.5 focus:bg-neutral-900 focus:text-white focus:font-mono focus:text-xs focus:rounded-full focus:outline-none"
      >
        Skip to main content
      </a>

      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-200 ${
          isScrolled
            ? 'py-3 bg-white/90 dark:bg-neutral-950/90 backdrop-blur-md border-b border-black/5 dark:border-white/10 shadow-xs'
            : 'py-5 bg-transparent'
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <nav aria-label="Main Navigation" className="flex items-center justify-between gap-4">
            {/* Wordmark (Like "Elian Ross" in reference image) */}
            <a
              href="#top"
              onClick={(e) => {
                e.preventDefault()
                window.scrollTo({ top: 0, behavior: 'smooth' })
              }}
              className="group flex items-center gap-1.5 focus:outline-none"
              aria-label="Pranav portfolio home"
            >
              <span className="font-serif italic text-2xl font-normal text-text tracking-tight hover:opacity-80 transition-opacity">
                Pranav Saske
              </span>
            </a>

            {/* Center Honor Pill (Like "Google Website Of The Day 2025" in reference image) */}
            <div className="hidden lg:flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-black/10 dark:border-white/10 bg-white/80 dark:bg-neutral-900/80 backdrop-blur-sm text-xs font-sans text-text-muted shadow-2xs">
              <Sparkles className="w-3.5 h-3.5 text-lime-600 dark:text-lime-400" />
              <span className="font-medium text-text">B.Tech AI &amp; Data Science</span>
              <span className="text-text-dim">•</span>
              <span>SGPA 8.35 • RCPIT Shirpur</span>
            </div>

            {/* Desktop Navigation Links & Action Buttons */}
            <div className="flex items-center gap-3">
              <div className="hidden md:flex items-center gap-6 mr-2">
                {NAV_LINKS.map((link) => {
                  const isActive = activeSection === link.id
                  return (
                    <a
                      key={link.id}
                      href={`#${link.id}`}
                      onClick={(e) => handleNavClick(e, link.id)}
                      className={`text-xs font-medium tracking-tight transition-colors hover:text-black dark:hover:text-white ${
                        isActive ? 'text-black dark:text-white font-semibold' : 'text-text-muted'
                      }`}
                    >
                      {link.label}
                    </a>
                  )
                })}
              </div>

              {/* Resume Button */}
              <a
                href={portfolioContent.contact.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-dark text-xs py-1.5 px-3.5 hidden sm:inline-flex"
                aria-label="View or download resume"
              >
                <FileText className="w-3.5 h-3.5" aria-hidden="true" />
                <span>Resume</span>
              </a>

              {/* Theme Toggle */}
              <button
                type="button"
                onClick={toggleTheme}
                aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
                className="w-9 h-9 rounded-full border border-black/10 dark:border-white/10 bg-white dark:bg-neutral-900 flex items-center justify-center text-text-muted hover:text-text transition-colors shadow-2xs"
              >
                {theme === 'dark' ? (
                  <Sun className="w-4 h-4 text-lime-400" aria-hidden="true" />
                ) : (
                  <Moon className="w-4 h-4 text-neutral-700" aria-hidden="true" />
                )}
              </button>

              {/* Mobile Menu Hamburger (Rounded circle button matching reference image) */}
              <button
                ref={menuButtonRef}
                type="button"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-expanded={isMobileMenuOpen}
                aria-controls="mobile-menu-overlay"
                aria-label={isMobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
                className="md:hidden w-9 h-9 rounded-full border border-black/10 dark:border-white/10 bg-white dark:bg-neutral-900 flex items-center justify-center text-text hover:text-lime-600 transition-colors shadow-2xs"
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

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div
          id="mobile-menu-overlay"
          ref={mobileMenuRef}
          role="dialog"
          aria-modal="true"
          aria-label="Site Navigation"
          className="fixed inset-0 z-50 bg-white/95 dark:bg-neutral-950/95 backdrop-blur-xl flex flex-col justify-between p-6 sm:p-8 md:hidden overflow-y-auto"
        >
          <div className="flex items-center justify-between pb-4 border-b border-black/10 dark:border-white/10">
            <span className="font-serif italic text-2xl text-text">Pranav Saske</span>
            <button
              type="button"
              onClick={() => {
                setIsMobileMenuOpen(false)
                menuButtonRef.current?.focus()
              }}
              aria-label="Close menu"
              className="w-9 h-9 rounded-full border border-black/10 dark:border-white/10 bg-white dark:bg-neutral-900 flex items-center justify-center text-text"
            >
              <X className="w-4 h-4" aria-hidden="true" />
            </button>
          </div>

          <div className="py-8 flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => handleNavClick(e, link.id)}
                className="group flex items-baseline justify-between py-2 border-b border-black/5 dark:border-white/5"
              >
                <span className="text-2xl font-serif text-text group-hover:text-lime-600 transition-colors">
                  {link.label}
                </span>
                <span className="font-mono text-xs text-text-dim">
                  {link.num}
                </span>
              </a>
            ))}
          </div>

          <div className="pt-4 border-t border-black/10 dark:border-white/10 flex flex-col gap-3">
            <a
              href={portfolioContent.contact.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-dark w-full text-center"
            >
              <FileText className="w-4 h-4" />
              <span>View Resume</span>
            </a>
            <span className="font-mono text-xs text-text-dim text-center">
              R. C. Patel Institute of Technology, Shirpur
            </span>
          </div>
        </div>
      )}
    </>
  )
}
