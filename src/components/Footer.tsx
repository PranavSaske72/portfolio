import React from 'react'
import { portfolioContent } from '../data/content'
import { ArrowUp, Mail } from 'lucide-react'
import { GithubIcon, LinkedinIcon, CodechefIcon } from './SocialIcons'

export const Footer: React.FC = () => {
  const { fullName, contact, role } = portfolioContent
  const currentYear = new Date().getFullYear()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="py-10 bg-surface/90 border-t border-border/80 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-6 border-b border-white/10">
          {/* Brand Monogram & Name */}
          <div className="flex items-center gap-3">
            <span className="w-8 h-8 rounded-full bg-gradient-to-tr from-cyan-500 to-purple-500 flex items-center justify-center font-serif text-sm font-bold text-black shadow-md">
              P.
            </span>
            <div>
              <span className="font-mono text-xs text-text font-semibold block">
                {fullName}
              </span>
              <span className="font-mono text-[11px] text-cyan-400">
                {role}
              </span>
            </div>
          </div>

          {/* Social Links including CodeChef */}
          <div className="flex flex-wrap items-center gap-2.5">
            <a
              href={contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-surface-2 border border-border hover:border-cyan-400 text-xs font-mono text-text-muted hover:text-cyan-400 transition-colors"
            >
              <GithubIcon className="w-3.5 h-3.5 text-cyan-400" />
              <span>GitHub</span>
            </a>

            <a
              href={contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-surface-2 border border-border hover:border-purple-400 text-xs font-mono text-text-muted hover:text-purple-400 transition-colors"
            >
              <LinkedinIcon className="w-3.5 h-3.5 text-purple-400" />
              <span>LinkedIn</span>
            </a>

            {contact.codechef && (
              <a
                href={contact.codechef}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-surface-2 border border-amber-500/40 hover:border-amber-400 text-xs font-mono text-amber-300 transition-colors"
              >
                <CodechefIcon className="w-3.5 h-3.5 text-amber-400" />
                <span>CodeChef</span>
              </a>
            )}

            <a
              href={`mailto:${contact.email}`}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-surface-2 border border-border hover:border-pink-400 text-xs font-mono text-text-muted hover:text-pink-400 transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-pink-400" />
              <span>Email</span>
            </a>
          </div>

          {/* Back to Top */}
          <button
            type="button"
            onClick={scrollToTop}
            className="flex items-center gap-1.5 font-mono text-xs text-text-muted hover:text-cyan-400 transition-colors group px-3 py-1.5 rounded-full bg-surface-2 border border-white/5"
            aria-label="Scroll back to top of page"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform text-cyan-400" aria-hidden="true" />
          </button>
        </div>

        {/* Bottom Credits & Copyright */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono text-text-dim text-center sm:text-left">
          <div>
            &copy; {currentYear} {fullName} • R. C. Patel Institute of Technology, Shirpur
          </div>
          <div className="flex items-center gap-2">
            <span className="gradient-text font-semibold">Crafted with Precision &amp; Code</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
