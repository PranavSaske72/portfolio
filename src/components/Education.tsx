import React from 'react'
import { portfolioContent } from '../data/content'
import { SectionHeading } from './SectionHeading'
import { Reveal } from './Reveal'
import { GraduationCap, MapPin, Calendar, CheckCircle2 } from 'lucide-react'

export const Education: React.FC = () => {
  const { education } = portfolioContent

  return (
    <section
      id="education"
      aria-labelledby="education-heading"
      className="py-12 md:py-16 border-b border-border/70 relative"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeading
          index="04"
          subtitle="ACADEMICS &amp; MILESTONES"
          title="Education Journey"
          id="education-heading"
          colorTheme="emerald"
        />

        {/* Primary Undergrad Card with Glowing Stat Banner */}
        <Reveal>
          <div className="glass-card rounded-2xl p-6 sm:p-8 border border-emerald-500/30 bg-surface/80 mb-6 shadow-[0_10px_35px_-8px_rgba(16,185,129,0.15)]">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
              {/* Left Column: Undergrad Details */}
              <div className="lg:col-span-8 flex flex-col justify-between">
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    <span className="font-mono text-xs px-3 py-1 rounded-full bg-emerald-950/60 text-emerald-300 border border-emerald-500/40 font-semibold inline-flex items-center gap-1.5 shadow-sm">
                      <GraduationCap className="w-3.5 h-3.5" aria-hidden="true" />
                      <span>UNDERGRADUATE DEGREE</span>
                    </span>
                    <span className="font-mono text-xs text-text-muted flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-emerald-400" aria-hidden="true" />
                      {education.period}
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-serif text-text font-normal mb-2 leading-tight">
                    {education.degree}
                  </h3>

                  <p className="text-base text-emerald-300 font-medium mb-1">
                    {education.institution}
                  </p>

                  <div className="flex items-center gap-1.5 text-xs font-mono text-text-dim mb-4">
                    <MapPin className="w-3.5 h-3.5 text-emerald-400" aria-hidden="true" />
                    <span>{education.location}</span>
                  </div>

                  {education.details && (
                    <p className="text-xs sm:text-sm text-text-muted leading-relaxed max-w-xl pb-4 border-b border-white/10">
                      {education.details}
                    </p>
                  )}
                </div>

                <div className="pt-3 flex flex-wrap items-center gap-3 font-mono text-xs">
                  <span className="text-emerald-400 flex items-center gap-1 font-semibold">
                    <CheckCircle2 className="w-4 h-4" />
                    Official Grade Record Verified
                  </span>
                </div>
              </div>

              {/* Right Column: Prominent SGPA & CGPA typographic card */}
              <div className="lg:col-span-4 flex flex-col gap-3">
                <div className="p-4 rounded-xl bg-surface-2/80 border border-emerald-500/30 text-center relative overflow-hidden">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-emerald-400 font-semibold block mb-0.5">
                    Semester 1 SGPA
                  </span>
                  <div className="font-serif text-4xl sm:text-5xl text-emerald-300 font-bold my-1 tracking-tight">
                    {education.sgpa}
                  </div>
                  <p className="text-[11px] font-mono text-text-muted">
                    Out of 10.0 (Grade Sheet)
                  </p>
                </div>

                {education.cgpa && (
                  <div className="p-3 rounded-xl bg-surface-2/80 border border-cyan-500/30 text-center">
                    <span className="font-mono text-[10px] uppercase tracking-widest text-cyan-400 font-semibold block mb-0.5">
                      Cumulative CGPA
                    </span>
                    <div className="font-serif text-2xl sm:text-3xl text-cyan-300 font-bold my-0.5">
                      {education.cgpa}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </Reveal>

        {/* Complete Academic Journey 3-Card Grid */}
        {education.timeline && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {education.timeline.map((entry, idx) => (
              <Reveal key={idx} delayMs={idx * 60}>
                <div className="glass-card p-5 rounded-xl border border-white/10 h-full flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between pb-2 mb-2 border-b border-white/10 text-xs font-mono">
                      <span className="text-emerald-400 font-semibold">{entry.scoreLabel}</span>
                      <span className="text-text-dim">{entry.period}</span>
                    </div>
                    <h4 className="font-serif text-lg text-text font-normal mb-1">
                      {entry.degree}
                    </h4>
                    <p className="text-xs text-text-muted mb-3">
                      {entry.institution}
                    </p>
                  </div>

                  <div className="pt-2 border-t border-white/10 font-mono text-xs flex items-center justify-between">
                    <span className="text-text-dim">Score:</span>
                    <span className="text-emerald-300 font-bold">{entry.score}</span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
