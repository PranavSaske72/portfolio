import React from 'react'
import { portfolioContent } from '../data/content'
import { SectionHeading } from './SectionHeading'
import { GraduationCap, Languages, Users } from 'lucide-react'

export const About: React.FC = () => {
  const { aboutBio, college, education, languages, experience } = portfolioContent
  const glitchverseExp = experience[0]

  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="py-10 sm:py-12 border-b border-border relative"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeading
          index="01"
          subtitle="PROFILE"
          title="About Me"
          id="about-heading"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Left Column: Natural Bio & Experience */}
          <div className="lg:col-span-7 flex flex-col gap-4">
            <div className="editorial-card p-5 sm:p-6">
              <h3 className="font-mono text-xs uppercase tracking-wider text-accent font-semibold mb-2.5">
                Engineering Background
              </h3>
              <div className="text-sm text-text-muted leading-relaxed space-y-2.5">
                <p>{aboutBio}</p>
              </div>
            </div>

            {/* Volunteering Note */}
            {glitchverseExp && (
              <div className="editorial-card p-4 sm:p-5 border-l-2 border-l-accent">
                <div className="flex items-center gap-2 mb-1.5 font-mono text-xs text-text font-semibold">
                  <Users className="w-3.5 h-3.5 text-accent" />
                  <span>College Volunteering: {glitchverseExp.organization}</span>
                </div>
                <p className="text-xs text-text-muted leading-relaxed">
                  Volunteered during a {glitchverseExp.duration.toLowerCase()} managing attendee flow, facilitating participant matchmaking, and coordinating real-time event logistics.
                </p>
              </div>
            )}
          </div>

          {/* Right Column: Verified Academic Record & Languages */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <div className="editorial-card p-5 sm:p-6">
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-border">
                <div className="flex items-center gap-2 font-mono text-xs text-text font-semibold">
                  <GraduationCap className="w-4 h-4 text-accent" />
                  <span>Academic Record</span>
                </div>
                <span className="font-mono text-[11px] text-text-dim">Batch 2025–2029</span>
              </div>

              {/* College & Degree */}
              <div className="mb-3.5">
                <h4 className="text-base text-text font-semibold leading-snug">
                  {education.degree}
                </h4>
                <p className="font-mono text-xs text-text-muted mt-0.5">
                  {college}
                </p>
              </div>

              {/* Scores Grid */}
              <div className="grid grid-cols-2 gap-2.5 mb-3.5">
                <div className="p-3 rounded-lg bg-surface-2 border border-border">
                  <span className="font-mono text-[10px] text-text-dim uppercase tracking-wider block mb-0.5">
                    Semester 1 SGPA
                  </span>
                  <span className="text-xl text-accent font-bold font-mono">
                    {education.sgpa}
                  </span>
                  <span className="font-mono text-[10px] text-text-dim block mt-0.5">/ 10.0</span>
                </div>

                <div className="p-3 rounded-lg bg-surface-2 border border-border">
                  <span className="font-mono text-[10px] text-text-dim uppercase tracking-wider block mb-0.5">
                    Cumulative CGPA
                  </span>
                  <span className="text-xl text-text font-bold font-mono">
                    {education.cgpa || '7.45'}
                  </span>
                  <span className="font-mono text-[10px] text-text-dim block mt-0.5">/ 10.0</span>
                </div>
              </div>

              {/* Prior Education summary */}
              <div className="pt-2.5 border-t border-border space-y-1 font-mono text-xs text-text-muted">
                <div className="flex justify-between">
                  <span>SSC (10th):</span>
                  <span className="text-text font-medium">88%</span>
                </div>
                <div className="flex justify-between">
                  <span>HSC (12th):</span>
                  <span className="text-text font-medium">60%</span>
                </div>
              </div>
            </div>

            {/* Languages */}
            <div className="editorial-card p-4 sm:p-5">
              <div className="flex items-center gap-2 mb-2.5 pb-2 border-b border-border font-mono text-xs text-text font-semibold">
                <Languages className="w-3.5 h-3.5 text-accent" />
                <span>Languages</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {languages.map((lang) => (
                  <span
                    key={lang.name}
                    className="px-2.5 py-1 rounded-md bg-surface-2 border border-border text-xs font-mono"
                  >
                    <strong className="text-text font-medium mr-1">{lang.name}</strong>
                    <span className="text-text-dim">({lang.proficiency})</span>
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
