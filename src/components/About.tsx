import React from 'react'
import { portfolioContent } from '../data/content'
import { SectionHeading } from './SectionHeading'
import { Reveal } from './Reveal'
import { Languages, BookOpen, Sparkles, MapPin, Phone, Mail } from 'lucide-react'

export const About: React.FC = () => {
  const { aboutBio, pullQuote, languages, contact, college } = portfolioContent

  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="py-12 md:py-16 border-b border-border/70 relative"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeading
          index="01"
          subtitle="PROFILE &amp; PHILOSOPHY"
          title="About Me"
          id="about-heading"
          colorTheme="pink"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Pull Quote & Bio */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <Reveal>
              <div className="p-6 rounded-2xl bg-gradient-to-br from-purple-950/20 via-surface/80 to-surface/80 border border-purple-500/30 shadow-[0_10px_35px_-8px_rgba(168,85,247,0.15)]">
                <p className="font-serif text-2xl sm:text-3xl text-text font-normal leading-snug tracking-tight mb-4">
                  "{pullQuote}"
                </p>
                <div className="text-text-muted text-sm sm:text-base leading-relaxed space-y-3">
                  <p>{aboutBio}</p>
                </div>
              </div>
            </Reveal>

            {/* Quick Highlights */}
            <Reveal delayMs={100}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="p-4 rounded-xl glass-card border border-white/10">
                  <div className="flex items-center gap-2 font-mono text-xs text-cyan-400 mb-1">
                    <BookOpen className="w-3.5 h-3.5" />
                    <span>INSTITUTION</span>
                  </div>
                  <p className="text-sm font-medium text-text">
                    {college}
                  </p>
                  <p className="text-xs text-text-dim">Autonomous Engineering Institute</p>
                </div>

                <div className="p-4 rounded-xl glass-card border border-white/10">
                  <div className="flex items-center gap-2 font-mono text-xs text-purple-400 mb-1">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>ENGINEERING DISCIPLINE</span>
                  </div>
                  <p className="text-sm font-medium text-text">
                    B.Tech AI &amp; Data Science
                  </p>
                  <p className="text-xs text-text-dim">Batch 2025 – 2029</p>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right Column: Contact Mini-Card & Languages */}
          <div className="lg:col-span-5 flex flex-col gap-5">
            {/* Quick Contact Card */}
            <Reveal delayMs={80}>
              <div className="glass-card p-5 rounded-2xl border border-white/10 space-y-3 text-xs font-mono">
                <div className="flex items-center justify-between pb-2 border-b border-white/10">
                  <span className="text-pink-400 font-semibold uppercase tracking-wider">
                    Direct Contact
                  </span>
                  <span className="text-text-dim font-mono">Pranav Mohan Saske</span>
                </div>

                <div className="flex items-center gap-2 text-text-muted">
                  <MapPin className="w-3.5 h-3.5 text-pink-400 shrink-0" />
                  <span>{contact.address || 'Shirpur, Maharashtra, India'}</span>
                </div>

                {contact.phone && (
                  <div className="flex items-center gap-2 text-text-muted">
                    <Phone className="w-3.5 h-3.5 text-pink-400 shrink-0" />
                    <a href={`tel:${contact.phone}`} className="hover:text-pink-300 transition-colors">
                      {contact.phone}
                    </a>
                  </div>
                )}

                <div className="flex items-center gap-2 text-text-muted">
                  <Mail className="w-3.5 h-3.5 text-pink-400 shrink-0" />
                  <a href={`mailto:${contact.email}`} className="hover:text-pink-300 transition-colors break-all">
                    {contact.email}
                  </a>
                </div>
              </div>
            </Reveal>

            {/* Languages Panel */}
            <Reveal delayMs={120}>
              <div className="glass-card p-5 rounded-2xl border border-white/10">
                <div className="flex items-center gap-2 mb-3 pb-2 border-b border-white/10">
                  <Languages className="w-4 h-4 text-pink-400" aria-hidden="true" />
                  <h3 className="font-mono text-xs uppercase tracking-wider text-text font-semibold">
                    Languages
                  </h3>
                </div>

                <div className="space-y-2">
                  {languages.map((lang) => (
                    <div
                      key={lang.name}
                      className="flex items-center justify-between py-1.5 px-2 rounded-lg bg-surface-2/60"
                    >
                      <span className="text-xs font-medium text-text">{lang.name}</span>
                      <span className="font-mono text-[11px] px-2 py-0.5 rounded-full bg-surface border border-white/10 text-pink-300">
                        {lang.proficiency}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
