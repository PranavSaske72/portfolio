import React from 'react'
import { portfolioContent } from '../data/content'
import { ArrowUp, Mail } from 'lucide-react'
import { GithubIcon, LinkedinIcon, CodechefIcon } from './SocialIcons'

export const Footer: React.FC = () => {
  const { fullName, contact } = portfolioContent
  const currentYear = new Date().getFullYear()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="py-8 bg-surface border-t border-border relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pb-6 border-b border-border">
          {/* Identity */}
          <div className="flex items-center gap-3">
            <span className="w-7 h-7 rounded-full bg-surface-2 border border-border flex items-center justify-center font-serif text-sm font-semibold text-accent">
              P.
            </span>
            <div>
              <span className="font-mono text-xs text-text font-semibold block">
                {fullName}
              </span>
              <span className="font-mono text-[11px] text-text-dim">
                R. C. Patel Institute of Technology, Shirpur
              </span>
            </div>
          </div>

          {/* Social Profiles */}
          <div className="flex items-center gap-2">
            <a
              href={contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-surface-2 border border-border hover:border-accent text-text-muted hover:text-text transition-colors"
              aria-label="GitHub Profile"
            >
              <GithubIcon className="w-3.5 h-3.5" />
            </a>

            <a
              href={contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-surface-2 border border-border hover:border-accent text-text-muted hover:text-text transition-colors"
              aria-label="LinkedIn Profile"
            >
              <LinkedinIcon className="w-3.5 h-3.5" />
            </a>

            {contact.codechef && (
              <a
                href={contact.codechef}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-surface-2 border border-border hover:border-accent text-text-muted hover:text-text transition-colors"
                aria-label="CodeChef Profile"
              >
                <CodechefIcon className="w-3.5 h-3.5" />
              </a>
            )}

            <a
              href={`mailto:${contact.email}`}
              className="p-2 rounded-lg bg-surface-2 border border-border hover:border-accent text-text-muted hover:text-text transition-colors"
              aria-label="Send Email"
            >
              <Mail className="w-3.5 h-3.5" />
            </a>

            {/* Back to Top */}
            <button
              type="button"
              onClick={scrollToTop}
              className="ml-2 flex items-center gap-1 font-mono text-xs text-text-muted hover:text-text px-2.5 py-1.5 rounded-lg bg-surface-2 border border-border hover:border-accent transition-colors"
              aria-label="Scroll back to top"
            >
              <span>Top</span>
              <ArrowUp className="w-3 h-3 text-accent" />
            </button>
          </div>
        </div>

        {/* Minimal Copyright */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] font-mono text-text-dim">
          <div>
            &copy; {currentYear} {fullName}. All rights reserved.
          </div>
          <div>
            B.Tech in Artificial Intelligence &amp; Data Science (2025–2029)
          </div>
        </div>
      </div>
    </footer>
  )
}
