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
    <footer className="py-8 bg-white dark:bg-neutral-950 border-t border-black/5 dark:border-white/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pb-6 border-b border-black/5 dark:border-white/10 text-xs">
          {/* Identity */}
          <div className="flex items-center gap-2.5">
            <span className="w-6 h-6 rounded-full bg-lime-400 text-neutral-950 flex items-center justify-center font-bold text-xs">
              P
            </span>
            <span className="font-serif italic text-base text-neutral-900 dark:text-white">
              {fullName}
            </span>
            <span className="text-neutral-400">•</span>
            <span className="font-sans text-neutral-500 text-xs">
              R. C. Patel Institute of Technology, Shirpur
            </span>
          </div>

          {/* Social Profiles */}
          <div className="flex items-center gap-2">
            <a
              href={contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-neutral-100 dark:bg-neutral-900 border border-black/5 dark:border-white/10 text-neutral-600 dark:text-neutral-300 hover:text-black dark:hover:text-white transition-colors"
              aria-label="GitHub Profile"
            >
              <GithubIcon className="w-3.5 h-3.5" />
            </a>

            <a
              href={contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-neutral-100 dark:bg-neutral-900 border border-black/5 dark:border-white/10 text-neutral-600 dark:text-neutral-300 hover:text-black dark:hover:text-white transition-colors"
              aria-label="LinkedIn Profile"
            >
              <LinkedinIcon className="w-3.5 h-3.5" />
            </a>

            {contact.codechef && (
              <a
                href={contact.codechef}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-neutral-100 dark:bg-neutral-900 border border-black/5 dark:border-white/10 text-neutral-600 dark:text-neutral-300 hover:text-black dark:hover:text-white transition-colors"
                aria-label="CodeChef Profile"
              >
                <CodechefIcon className="w-3.5 h-3.5" />
              </a>
            )}

            <a
              href={`mailto:${contact.email}`}
              className="p-2 rounded-full bg-neutral-100 dark:bg-neutral-900 border border-black/5 dark:border-white/10 text-neutral-600 dark:text-neutral-300 hover:text-black dark:hover:text-white transition-colors"
              aria-label="Send Email"
            >
              <Mail className="w-3.5 h-3.5" />
            </a>

            {/* Back to Top */}
            <button
              type="button"
              onClick={scrollToTop}
              className="ml-2 flex items-center gap-1 font-sans text-xs text-neutral-600 dark:text-neutral-300 hover:text-neutral-950 dark:hover:text-white px-3 py-1.5 rounded-full bg-neutral-100 dark:bg-neutral-900 border border-black/5 dark:border-white/10 transition-colors"
              aria-label="Scroll back to top"
            >
              <span>Top</span>
              <ArrowUp className="w-3.5 h-3.5 text-lime-600" />
            </button>
          </div>
        </div>

        {/* Minimal Copyright */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs font-sans text-neutral-500">
          <div>
            &copy; {currentYear} {fullName}. All rights reserved.
          </div>
          <div>
            Computer Engineering • Artificial Intelligence &amp; Data Science (2025–2029)
          </div>
        </div>
      </div>
    </footer>
  )
}
