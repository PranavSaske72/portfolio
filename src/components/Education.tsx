import React from 'react'
import { portfolioContent } from '../data/content'
import { SectionHeading } from './SectionHeading'
import { Reveal } from './Reveal'
import { GraduationCap, MapPin, Calendar, CheckCircle2, Award } from 'lucide-react'

export const Education: React.FC = () => {
  const { education } = portfolioContent

  return (
    <section
      id="education"
      aria-labelledby="education-heading"
      className="py-24 md:py-32 border-b border-border relative bg-bg"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeading
          index="04"
          subtitle="ACADEMICS"
          title="Education"
          id="education-heading"
        />

        {/* Primary Undergrad Card with 9.35 SGPA stat */}
        <Reveal>
          <div className="blueprint-card corner-ticks rounded-2xl p-6 sm:p-10 border border-border bg-surface mb-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Left Column: Timeline details */}
              <div className="lg:col-span-7 flex flex-col justify-between">
                <div>
                  {/* Tag and Year */}
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <span className="font-mono text-xs px-2.5 py-1 rounded-full bg-accent-dim text-accent border border-accent/30 font-medium inline-flex items-center gap-1.5">
                      <GraduationCap className="w-3.5 h-3.5" aria-hidden="true" />
                      <span>UNDERGRADUATE STUDIES</span>
                    </span>
                    <span className="font-mono text-xs text-text-dim flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-accent" aria-hidden="true" />
                      {education.period}
                    </span>
                  </div>

                  {/* Degree Name */}
                  <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-text font-normal mb-3 leading-snug">
                    {education.degree}
                  </h3>

                  {/* Institution */}
                  <p className="text-base sm:text-lg text-text font-medium mb-1">
                    {education.institution}
                  </p>

                  <div className="flex items-center gap-1.5 text-xs font-mono text-text-dim mb-6">
                    <MapPin className="w-3.5 h-3.5 text-accent" aria-hidden="true" />
                    <span>{education.location}</span>
                  </div>

                  {/* Details */}
                  {education.details && (
                    <p className="text-sm text-text-muted leading-relaxed max-w-xl pb-6 border-b border-border">
                      {education.details}
                    </p>
                  )}
                </div>

                <div className="pt-4 flex flex-wrap items-center gap-4 font-mono text-xs text-text-dim">
                  <div className="flex items-center gap-1.5 text-accent">
                    <CheckCircle2 className="w-4 h-4" aria-hidden="true" />
                    <span>Semester 1 SGPA: 9.35</span>
                  </div>
                  {education.cgpa && (
                    <div className="flex items-center gap-1.5 text-text">
                      <Award className="w-4 h-4 text-accent" aria-hidden="true" />
                      <span>Cumulative CGPA: {education.cgpa}</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Right Column: Prominent SGPA 9.35 Typographic Stat */}
              <div className="lg:col-span-5 flex flex-col items-center justify-center p-6 sm:p-8 rounded-xl bg-surface-2/60 border border-border text-center relative overflow-hidden">
                <div className="absolute top-2 right-2 font-mono text-[9px] text-text-dim">
                  METRIC // ACADEMIC
                </div>

                <span className="font-mono text-xs uppercase tracking-widest text-text-dim mb-1">
                  {education.sgpaLabel}
                </span>

                <div className="font-serif text-6xl sm:text-7xl lg:text-8xl text-accent font-normal tracking-tight my-2">
                  {education.sgpa}
                </div>

                <div className="font-mono text-xs text-text-muted border-t border-border pt-3 w-full max-w-[200px]">
                  SGPA (First Semester)
                </div>

                <p className="text-[11px] font-mono text-text-dim mt-2 max-w-xs">
                  First-semester official grade point average at R. C. Patel Institute of Technology.
                </p>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Complete Academic Journey Timeline (B.Tech, HSC, SSC) */}
        {education.timeline && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
            {education.timeline.map((entry, idx) => (
              <Reveal key={idx} delayMs={idx * 80}>
                <div className="blueprint-card p-5 rounded-xl border border-border h-full flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between pb-3 mb-3 border-b border-border text-xs font-mono">
                      <span className="text-accent font-medium">{entry.scoreLabel}</span>
                      <span className="text-text-dim">{entry.period}</span>
                    </div>
                    <h4 className="font-serif text-lg text-text font-normal mb-2">
                      {entry.degree}
                    </h4>
                    <p className="text-xs text-text-muted mb-4">
                      {entry.institution}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-border/70 font-mono text-xs text-text flex items-center justify-between">
                    <span className="text-text-dim">Score:</span>
                    <span className="text-accent font-semibold">{entry.score}</span>
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
