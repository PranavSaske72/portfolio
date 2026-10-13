import React from 'react'
import { portfolioContent } from '../data/content'
import { PlaceholderLink } from './PlaceholderLink'
import { ArrowUp, Mail } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from './SocialIcons'

export const Footer: React.FC = () => {
  const { fullName, contact } = portfolioContent
  const currentYear = new Date().getFullYear()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="py-12 bg-surface border-t border-border relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-border/60">
          {/* Brand Monogram & Name */}
          <div className="flex items-center gap-3">
            <span className="w-7 h-7 rounded-full border border-border-strong bg-surface-2 flex items-center justify-center font-serif text-sm text-text">
              P.
            </span>
            <span className="font-mono text-xs text-text font-medium">
              {fullName}
            </span>
            <span className="text-text-dim font-mono text-xs hidden sm:inline">•</span>
            <span className="font-mono text-xs text-text-dim hidden sm:inline">
              R.C. Patel Institute of Technology
            </span>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <PlaceholderLink
              href={contact.github}
              placeholderLabel="GitHub"
              variant="button-ghost"
              icon={<GithubIcon className="w-3.5 h-3.5" />}
              ariaLabel="GitHub link"
            >
              GitHub
            </PlaceholderLink>

            <PlaceholderLink
              href={contact.linkedin}
              placeholderLabel="LinkedIn"
              variant="button-ghost"
              icon={<LinkedinIcon className="w-3.5 h-3.5" />}
              ariaLabel="LinkedIn link"
            >
              LinkedIn
            </PlaceholderLink>

            <PlaceholderLink
              href={contact.email}
              placeholderLabel="Email"
              isEmail={true}
              variant="button-ghost"
              icon={<Mail className="w-3.5 h-3.5" aria-hidden="true" />}
              ariaLabel="Email link"
            >
              Email
            </PlaceholderLink>
          </div>

          {/* Back to Top */}
          <button
            type="button"
            onClick={scrollToTop}
            className="flex items-center gap-2 font-mono text-xs text-text-muted hover:text-accent transition-colors group"
            aria-label="Scroll back to top of page"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" aria-hidden="true" />
          </button>
        </div>

        {/* Bottom Credits & Copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-text-dim text-center sm:text-left">
          <div>
            &copy; {currentYear} {fullName}. All rights reserved.
          </div>
          <div className="flex items-center gap-1.5">
            <span>Designed and built by me</span>
            <span className="text-accent">•</span>
            <span>Quiet Precision</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
