import React from 'react'
import { portfolioContent } from '../data/content'
import { GithubIcon, LinkedinIcon, CodechefIcon } from './SocialIcons'
import {
  ArrowDown,
  ArrowUpRight,
  FileText,
  Mail,
} from 'lucide-react'

export const Hero: React.FC = () => {
  const { fullName, role, availability, education, contact } = portfolioContent

  const scrollTo = (id: string) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
      history.pushState(null, '', `#${id}`)
    }
  }

  return (
    <section
      id="top"
      aria-label="Hero Introduction"
      className="relative pt-20 sm:pt-24 pb-10 sm:pb-12 border-b border-border"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 w-full">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          {/* Left Column: Headline, Bio & Primary CTAs */}
          <div className="md:col-span-7 lg:col-span-8 flex flex-col justify-center">
            {/* Status indicator */}
            {availability && (
              <div className="mb-3.5 inline-flex items-center gap-2 px-2.5 py-1 rounded-md border border-border bg-surface text-xs font-mono text-text-muted self-start">
                <span className="w-2 h-2 rounded-full bg-accent" />
                <span>{availability}</span>
              </div>
            )}

            {/* Name & Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text tracking-tight leading-tight mb-2">
              {fullName}
            </h1>

            {/* Role & Objective */}
            <p className="text-base sm:text-lg text-accent font-medium mb-3">
              {role}
            </p>

            {/* Concise supporting paragraph */}
            <p className="text-sm text-text-muted leading-relaxed max-w-[58ch] mb-5">
              Artificial Intelligence &amp; Data Science undergraduate at R. C. Patel Institute of Technology, Shirpur (2025–2029). Building practical applications with Python and Streamlit, interfacing ESP32 hardware, and strengthening core software engineering fundamentals.
            </p>

            {/* Appropriately sized buttons */}
            <div className="flex flex-wrap items-center gap-2.5 mb-5">
              <button
                type="button"
                onClick={() => scrollTo('projects')}
                className="btn-primary"
              >
                <span>View Projects</span>
                <ArrowDown className="w-3.5 h-3.5" aria-hidden="true" />
              </button>

              <button
                type="button"
                onClick={() => scrollTo('contact')}
                className="btn-secondary"
              >
                <span>Contact Me</span>
                <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
              </button>

              <a
                href={contact.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
                aria-label="View or download resume"
              >
                <FileText className="w-3.5 h-3.5 text-text-muted" aria-hidden="true" />
                <span>Resume</span>
              </a>
            </div>

            {/* Small row of core technologies */}
            <div className="pt-3.5 border-t border-border flex flex-wrap items-center gap-1.5 text-xs font-mono">
              <span className="text-text-dim mr-1">Stack:</span>
              {['Python', 'C', 'Streamlit', 'ESP32', 'Java', 'HTML/CSS', 'Git'].map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-0.5 rounded bg-surface-2 border border-border text-text-muted"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Right Column: Clean 1:1 square photo */}
          <div className="md:col-span-5 lg:col-span-4 flex flex-col items-center md:items-end justify-center">
            <div className="w-full max-w-[240px] sm:max-w-[260px] flex flex-col items-center">
              <div className="w-full aspect-square rounded-xl overflow-hidden bg-surface-2 border border-border shadow-sm">
                <img
                  src={contact.profilePhoto}
                  alt={fullName}
                  className="w-full h-full object-cover object-center"
                  loading="eager"
                />
              </div>

              {/* Clean caption */}
              <div className="mt-2 text-center font-mono text-[11px] text-text-dim">
                <span>SGPA {education.sgpa}</span>
                <span className="mx-1.5">•</span>
                <span>CGPA {education.cgpa}</span>
              </div>

              {/* Social links row */}
              <div className="mt-3 flex items-center justify-center gap-1.5">
                <a
                  href={contact.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1.5 rounded-md bg-surface border border-border hover:border-accent text-text-muted hover:text-text transition-colors"
                  aria-label="GitHub Profile"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>

                <a
                  href={contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1.5 rounded-md bg-surface border border-border hover:border-accent text-text-muted hover:text-text transition-colors"
                  aria-label="LinkedIn Profile"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>

                {contact.codechef && (
                  <a
                    href={contact.codechef}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 rounded-md bg-surface border border-border hover:border-accent text-text-muted hover:text-text transition-colors"
                    aria-label="CodeChef Profile"
                  >
                    <CodechefIcon className="w-4 h-4" />
                  </a>
                )}

                <a
                  href={`mailto:${contact.email}`}
                  className="p-1.5 rounded-md bg-surface border border-border hover:border-accent text-text-muted hover:text-text transition-colors"
                  aria-label="Send Email"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
