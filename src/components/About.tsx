import React from 'react'
import { portfolioContent, isPlaceholder } from '../data/content'
import { SectionHeading } from './SectionHeading'
import { Reveal } from './Reveal'
import { User, Languages, BookOpen, Sparkles, MapPin, Phone, Mail } from 'lucide-react'

export const About: React.FC = () => {
  const { fullName, aboutBio, pullQuote, languages, contact, college } = portfolioContent
  const hasCustomPhoto = !isPlaceholder(contact.profilePhoto)

  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="py-24 md:py-32 border-b border-border relative bg-surface/20"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeading
          index="01"
          subtitle="PROFILE"
          title="About Me"
          id="about-heading"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Photo Frame, Contact Mini-List & Languages */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            {/* Profile Photo / Designed Frame */}
            <Reveal>
              <div className="blueprint-card corner-ticks p-6 rounded-xl flex flex-col items-center justify-center text-center relative overflow-hidden group">
                <div className="w-full aspect-[4/5] max-w-[240px] rounded-lg border border-border-strong bg-surface-2 flex flex-col items-center justify-center relative overflow-hidden shadow-md">
                  {hasCustomPhoto ? (
                    <img
                      src={contact.profilePhoto}
                      alt={fullName}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <div className="flex flex-col items-center justify-center p-6 text-center select-none">
                      <div className="w-20 h-20 rounded-full border border-border-strong bg-surface flex items-center justify-center mb-3 group-hover:border-accent transition-colors">
                        <span className="font-serif text-4xl text-text font-medium">P.</span>
                      </div>
                      <span className="font-mono text-xs text-text font-medium mb-1">
                        {fullName}
                      </span>
                      <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded border border-dashed border-border-strong bg-surface/60 text-[11px] font-mono text-text-dim mt-2">
                        <User className="w-3 h-3 text-accent" aria-hidden="true" />
                        <span>Add photo</span>
                      </div>
                    </div>
                  )}
                </div>

                <div className="mt-4 flex items-center justify-between w-full font-mono text-[11px] text-text-dim pt-3 border-t border-border">
                  <span className="text-text font-medium">{fullName}</span>
                  <span className="text-accent flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                    AI &amp; DS UNDERGRAD
                  </span>
                </div>
              </div>
            </Reveal>

            {/* Quick Contact & Details */}
            <Reveal delayMs={80}>
              <div className="blueprint-card p-5 rounded-xl text-xs font-mono space-y-2.5">
                <div className="flex items-center gap-2 text-text-muted">
                  <MapPin className="w-3.5 h-3.5 text-accent shrink-0" aria-hidden="true" />
                  <span>{contact.address || 'Shirpur, Maharashtra, India'}</span>
                </div>
                {contact.phone && (
                  <div className="flex items-center gap-2 text-text-muted">
                    <Phone className="w-3.5 h-3.5 text-accent shrink-0" aria-hidden="true" />
                    <a href={`tel:${contact.phone}`} className="hover:text-accent transition-colors">
                      {contact.phone}
                    </a>
                  </div>
                )}
                <div className="flex items-center gap-2 text-text-muted">
                  <Mail className="w-3.5 h-3.5 text-accent shrink-0" aria-hidden="true" />
                  <a href={`mailto:${contact.email}`} className="hover:text-accent transition-colors break-all">
                    {contact.email}
                  </a>
                </div>
              </div>
            </Reveal>

            {/* Languages Panel */}
            <Reveal delayMs={120}>
              <div className="blueprint-card p-6 rounded-xl">
                <div className="flex items-center gap-2 mb-4">
                  <Languages className="w-4 h-4 text-accent" aria-hidden="true" />
                  <h3 className="font-mono text-xs uppercase tracking-wider text-text font-medium">
                    Languages
                  </h3>
                </div>

                <div className="space-y-3">
                  {languages.map((lang) => (
                    <div
                      key={lang.name}
                      className="flex items-center justify-between py-2 border-b border-border/60 last:border-0"
                    >
                      <span className="text-sm text-text font-medium">{lang.name}</span>
                      <span className="font-mono text-xs px-2 py-0.5 rounded bg-surface-2 border border-border text-text-muted">
                        {lang.proficiency}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right Column: Editorial Pull Quote and First-Person Bio */}
          <div className="lg:col-span-7 flex flex-col gap-8">
            {/* Pull Quote */}
            <Reveal>
              <div className="border-l-2 border-accent pl-6 py-2">
                <p className="font-serif text-2xl sm:text-3xl lg:text-4xl text-text font-normal leading-snug tracking-tight">
                  "{pullQuote}"
                </p>
              </div>
            </Reveal>

            {/* First-person bio */}
            <Reveal delayMs={120}>
              <div className="prose prose-invert max-w-none text-text-muted text-base sm:text-lg leading-relaxed space-y-4">
                <p>{aboutBio}</p>
              </div>
            </Reveal>

            {/* Fast facts callout cards */}
            <Reveal delayMs={180}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                <div className="p-4 rounded-lg border border-border bg-surface/50">
                  <div className="flex items-center gap-2 font-mono text-xs text-text-dim mb-1">
                    <BookOpen className="w-3.5 h-3.5 text-accent" aria-hidden="true" />
                    <span>INSTITUTION</span>
                  </div>
                  <p className="text-sm font-medium text-text">
                    {college}
                  </p>
                  <p className="text-xs text-text-dim">Autonomous Institute</p>
                </div>

                <div className="p-4 rounded-lg border border-border bg-surface/50">
                  <div className="flex items-center gap-2 font-mono text-xs text-text-dim mb-1">
                    <Sparkles className="w-3.5 h-3.5 text-accent" aria-hidden="true" />
                    <span>DISCIPLINE &amp; CLASS</span>
                  </div>
                  <p className="text-sm font-medium text-text">
                    B.Tech in Artificial Intelligence &amp; Data Science
                  </p>
                  <p className="text-xs text-text-dim">Batch 2025 – 2029</p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
