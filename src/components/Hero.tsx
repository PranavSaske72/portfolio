import React from 'react'
import { portfolioContent } from '../data/content'
import { GithubIcon, LinkedinIcon, CodechefIcon } from './SocialIcons'
import {
  ArrowDown,
  ArrowUpRight,
  FileText,
  Mail,
  MapPin,
  GraduationCap,
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
      className="relative pt-24 sm:pt-28 md:pt-36 pb-12 sm:pb-16 border-b border-border"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Headline, Bio & Primary CTAs */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Status Indicator */}
            {availability && (
              <div className="mb-5 inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-surface text-xs font-mono text-text-muted self-start">
                <span className="relative flex h-2 w-2">
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
                </span>
                <span>{availability}</span>
              </div>
            )}

            {/* Name */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif text-text tracking-tight leading-[1.05] mb-3">
              {fullName}
            </h1>

            {/* Headline describing role and focus */}
            <div className="mb-4">
              <p className="text-lg sm:text-xl font-mono text-text font-medium tracking-tight">
                {role}
              </p>
              <p className="text-sm sm:text-base text-accent font-mono mt-1">
                Aspiring to Build a Smarter Tomorrow with AI.
              </p>
            </div>

            {/* One concise supporting paragraph */}
            <p className="text-sm sm:text-base text-text-muted leading-relaxed max-w-[62ch] mb-6">
              Artificial Intelligence &amp; Data Science undergraduate at R. C. Patel Institute of Technology, Shirpur (Class of 2029). Bridging microcontrollers with modern software, building Streamlit applications, and strengthening core algorithms in C, Python, and Java.
            </p>

            {/* Two Primary Actions + Resume */}
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <button
                type="button"
                onClick={() => scrollTo('projects')}
                className="btn-primary"
              >
                <span>View My Projects</span>
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

            {/* Small row of relevant technologies / areas of interest */}
            <div className="pt-4 border-t border-border flex flex-wrap items-center gap-2 text-xs font-mono">
              <span className="text-text-dim">Core Stack:</span>
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

          {/* Right Column: Square 1:1 crisp photo with clean architectural framing */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center">
            <div className="w-full max-w-[300px] sm:max-w-[320px]">
              {/* Photo Frame */}
              <div className="editorial-card rounded-2xl p-2.5 shadow-lg">
                <div className="w-full aspect-square rounded-xl overflow-hidden bg-surface-2 border border-border flex items-center justify-center relative">
                  <img
                    src={contact.profilePhoto}
                    alt={fullName}
                    className="w-full h-full object-cover object-center"
                    loading="eager"
                  />
                </div>

                {/* Clean Photo Caption */}
                <div className="mt-3 px-2 pb-1.5 flex flex-col gap-1 font-mono">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-text font-medium">{fullName}</span>
                    <span className="text-accent text-[11px] font-semibold">
                      SGPA {education.sgpa}
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-[11px] text-text-dim">
                    <span className="flex items-center gap-1">
                      <GraduationCap className="w-3 h-3 text-text-dim" />
                      B.Tech AI &amp; DS
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-text-dim" />
                      RCPIT Shirpur
                    </span>
                  </div>
                </div>
              </div>

              {/* Quick Profile Links below photo */}
              <div className="mt-3 flex items-center justify-center gap-2">
                <a
                  href={contact.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-surface border border-border hover:border-accent text-text-muted hover:text-text transition-colors"
                  aria-label="GitHub Profile"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>

                <a
                  href={contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-surface border border-border hover:border-accent text-text-muted hover:text-text transition-colors"
                  aria-label="LinkedIn Profile"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>

                {contact.codechef && (
                  <a
                    href={contact.codechef}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-surface border border-border hover:border-accent text-text-muted hover:text-text transition-colors"
                    aria-label="CodeChef Profile"
                  >
                    <CodechefIcon className="w-4 h-4" />
                  </a>
                )}

                <a
                  href={`mailto:${contact.email}`}
                  className="p-2 rounded-lg bg-surface border border-border hover:border-accent text-text-muted hover:text-text transition-colors"
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
