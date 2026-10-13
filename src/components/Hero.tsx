import React from 'react'
import { portfolioContent } from '../data/content'
import { HeroVisual } from './HeroVisual'
import { PlaceholderLink } from './PlaceholderLink'
import { GithubIcon, LinkedinIcon, CodechefIcon } from './SocialIcons'
import {
  ArrowDown,
  ArrowUpRight,
  Sparkles,
  FileText,
  Mail,
  GraduationCap,
  MapPin,
  Award,
} from 'lucide-react'

export const Hero: React.FC = () => {
  const { fullName, role, availability, heroIntro, meta, education, contact } = portfolioContent

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
      className="relative pt-24 md:pt-32 pb-12 overflow-hidden border-b border-border/80"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 w-full relative z-10">
        {/* Availability status badge with vibrant neon pulse */}
        {availability && (
          <div className="mb-6 inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-cyan-500/30 bg-surface/90 backdrop-blur-md text-xs font-mono text-cyan-300 shadow-[0_0_20px_rgba(0,245,255,0.15)]">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400" />
            </span>
            <span className="tracking-tight font-medium">{availability}</span>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Headlines & Editorial Copy */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Primary Name Headline with Colorful Gradient */}
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-serif font-normal text-text tracking-tight leading-[1.05] mb-2">
              <span className="gradient-text font-medium">{fullName}</span>
            </h1>

            {/* Subtitle / Role */}
            <div className="mb-4">
              <p className="text-lg sm:text-xl md:text-2xl font-mono text-cyan-400 font-medium tracking-tight">
                {role}
              </p>
              <p className="text-base sm:text-lg italic font-serif text-text-muted mt-1">
                "Aspiring to Build a Smarter Tomorrow with{' '}
                <span className="gradient-text-purple-pink font-semibold not-italic">
                  AI &amp; Emerging Tech
                </span>
                "
              </p>
            </div>

            {/* Concise intro */}
            <p className="text-sm sm:text-base text-text-muted leading-relaxed max-w-[62ch] mb-6">
              {heroIntro}
            </p>

            {/* Key Metrics / Credential Chips in vibrant colors */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 mb-8">
              <div className="p-2.5 rounded-xl bg-surface/80 border border-purple-500/20 backdrop-blur-sm shadow-[0_0_15px_rgba(168,85,247,0.08)]">
                <div className="text-[10px] font-mono text-purple-400 uppercase tracking-wider flex items-center gap-1 mb-0.5">
                  <Sparkles className="w-3 h-3" />
                  <span>Sem 1 SGPA</span>
                </div>
                <div className="font-serif text-xl sm:text-2xl text-purple-300 font-semibold">
                  {education.sgpa}
                </div>
              </div>

              <div className="p-2.5 rounded-xl bg-surface/80 border border-cyan-500/20 backdrop-blur-sm shadow-[0_0_15px_rgba(0,245,255,0.08)]">
                <div className="text-[10px] font-mono text-cyan-400 uppercase tracking-wider flex items-center gap-1 mb-0.5">
                  <Award className="w-3 h-3" />
                  <span>Cumulative</span>
                </div>
                <div className="font-serif text-xl sm:text-2xl text-cyan-300 font-semibold">
                  {education.cgpa || '8.35'}
                </div>
              </div>

              <div className="p-2.5 rounded-xl bg-surface/80 border border-emerald-500/20 backdrop-blur-sm">
                <div className="text-[10px] font-mono text-emerald-400 uppercase tracking-wider flex items-center gap-1 mb-0.5">
                  <GraduationCap className="w-3 h-3" />
                  <span>Class</span>
                </div>
                <div className="font-mono text-sm sm:text-base text-emerald-300 font-medium">
                  {meta.classYear}
                </div>
              </div>

              <div className="p-2.5 rounded-xl bg-surface/80 border border-pink-500/20 backdrop-blur-sm">
                <div className="text-[10px] font-mono text-pink-400 uppercase tracking-wider flex items-center gap-1 mb-0.5">
                  <MapPin className="w-3 h-3" />
                  <span>Location</span>
                </div>
                <div className="font-mono text-xs sm:text-sm text-pink-300 truncate font-medium">
                  Shirpur, MH
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <button
                type="button"
                onClick={() => scrollTo('projects')}
                className="btn-gradient-primary inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-mono font-semibold"
              >
                <span>Explore Projects</span>
                <ArrowDown className="w-3.5 h-3.5" aria-hidden="true" />
              </button>

              <PlaceholderLink
                href={contact.resumeUrl}
                placeholderLabel="Resume"
                variant="button-secondary"
                icon={<FileText className="w-3.5 h-3.5 text-purple-400" aria-hidden="true" />}
                className="border-purple-500/30 hover:border-purple-400 text-purple-300"
                ariaLabel="View Resume"
              >
                View Resume
              </PlaceholderLink>

              <button
                type="button"
                onClick={() => scrollTo('contact')}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-border hover:border-cyan-400/50 bg-surface/80 hover:bg-surface-2 text-text font-mono text-xs transition-all"
              >
                <span>Contact</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-cyan-400" aria-hidden="true" />
              </button>
            </div>

            {/* Social Links Row including CodeChef */}
            <div className="flex flex-wrap items-center gap-2.5 pt-4 border-t border-border/60">
              <span className="font-mono text-xs text-text-dim mr-1">Find me:</span>

              <a
                href={contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-surface-2 border border-border hover:border-cyan-400/50 text-xs font-mono text-text hover:text-cyan-400 transition-colors shadow-sm"
              >
                <GithubIcon className="w-3.5 h-3.5 text-cyan-400" />
                <span>GitHub</span>
              </a>

              <a
                href={contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-surface-2 border border-border hover:border-purple-400/50 text-xs font-mono text-text hover:text-purple-400 transition-colors shadow-sm"
              >
                <LinkedinIcon className="w-3.5 h-3.5 text-purple-400" />
                <span>LinkedIn</span>
              </a>

              {contact.codechef && (
                <a
                  href={contact.codechef}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-surface-2 border border-amber-500/30 hover:border-amber-400 text-xs font-mono text-amber-300 transition-colors shadow-[0_0_15px_rgba(245,158,11,0.12)]"
                >
                  <CodechefIcon className="w-3.5 h-3.5 text-amber-400" />
                  <span>CodeChef</span>
                </a>
              )}

              <a
                href={`mailto:${contact.email}`}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-surface-2 border border-border hover:border-pink-400/50 text-xs font-mono text-text hover:text-pink-400 transition-colors shadow-sm"
              >
                <Mail className="w-3.5 h-3.5 text-pink-400" />
                <span>Email</span>
              </a>
            </div>
          </div>

          {/* Right Column: Pranav's Photo Card with Glowing Multi-Color Ring & Floating Tech Chips */}
          <div className="lg:col-span-5 relative flex flex-col items-center justify-center">
            {/* Background 3D wireframe canvas behind/around photo */}
            <div className="absolute -inset-4 opacity-30 pointer-events-none">
              <HeroVisual />
            </div>

            <div className="relative z-10 w-full max-w-[340px]">
              {/* Vibrant Gradient Glow Aura */}
              <div className="absolute -inset-1.5 rounded-3xl bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 opacity-60 blur-xl animate-pulse" />

              {/* Main Photo Card */}
              <div className="relative rounded-2xl bg-surface/90 border border-white/10 p-3 backdrop-blur-xl shadow-2xl">
                <div className="w-full aspect-[4/5] rounded-xl overflow-hidden relative group border border-white/10">
                  <img
                    src={contact.profilePhoto}
                    alt={fullName}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Subtle gradient vignette at bottom of photo */}
                  <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-end p-3">
                    <span className="font-serif text-lg text-white font-medium">
                      {fullName}
                    </span>
                    <span className="font-mono text-[11px] text-cyan-300">
                      R. C. Patel Institute of Technology
                    </span>
                  </div>
                </div>

                {/* Card Info Footer */}
                <div className="mt-3 flex items-center justify-between px-1 text-xs font-mono">
                  <span className="text-text-muted">B.Tech AI &amp; DS</span>
                  <span className="px-2 py-0.5 rounded-full bg-cyan-950/80 border border-cyan-500/40 text-cyan-300 font-semibold flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                    Verified Student
                  </span>
                </div>
              </div>

              {/* Floating Colorful Tech Badges */}
              <div className="absolute -top-3 -right-3 px-3 py-1.5 rounded-full bg-surface-2/95 border border-purple-500/40 text-[11px] font-mono text-purple-300 shadow-lg flex items-center gap-1.5 backdrop-blur-md">
                <span className="w-2 h-2 rounded-full bg-purple-400" />
                <span>AI &amp; Streamlit</span>
              </div>

              <div className="absolute -bottom-3 -left-3 px-3 py-1.5 rounded-full bg-surface-2/95 border border-emerald-500/40 text-[11px] font-mono text-emerald-300 shadow-lg flex items-center gap-1.5 backdrop-blur-md">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                <span>ESP32 Hardware</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
