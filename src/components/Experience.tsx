import React from 'react'
import { portfolioContent } from '../data/content'
import { SectionHeading } from './SectionHeading'
import { Reveal } from './Reveal'
import { Users, Calendar, MapPin, Quote } from 'lucide-react'

export const Experience: React.FC = () => {
  const { experience } = portfolioContent

  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="py-12 md:py-16 border-b border-border/70 relative"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeading
          index="06"
          subtitle="COMMUNITY &amp; LEADERSHIP"
          title="Campus Experience"
          id="experience-heading"
          colorTheme="purple"
        />

        <div className="space-y-6">
          {experience.map((item, idx) => (
            <Reveal key={item.organization} delayMs={idx * 80}>
              <div className="glass-card rounded-2xl p-6 sm:p-8 border border-purple-500/30 bg-surface/80 shadow-[0_10px_35px_-8px_rgba(168,85,247,0.15)]">
                {/* Header row */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 mb-5 border-b border-white/10 gap-3">
                  <div>
                    <div className="flex items-center gap-2 mb-1.5 font-mono text-xs text-purple-400 font-semibold">
                      <Users className="w-3.5 h-3.5" aria-hidden="true" />
                      <span>COLLEGE EVENT VOLUNTEER</span>
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-serif text-text font-normal">
                      {item.role} — {item.organization}
                    </h3>
                  </div>

                  <div className="flex flex-wrap sm:flex-col items-start sm:items-end gap-1.5 text-xs font-mono text-text-dim">
                    <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-950/60 border border-purple-500/40 text-purple-300 font-semibold">
                      <Calendar className="w-3.5 h-3.5 text-purple-400" aria-hidden="true" />
                      {item.duration}
                    </span>
                    <span className="flex items-center gap-1.5 text-text-muted">
                      <MapPin className="w-3 h-3" aria-hidden="true" />
                      {item.location}
                    </span>
                  </div>
                </div>

                {/* Bullets */}
                <div className="mb-6">
                  <ul className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    {item.points.map((point, pIdx) => (
                      <li
                        key={pIdx}
                        className="p-3.5 rounded-xl bg-surface-2/60 border border-white/5 flex items-start gap-2.5 text-xs sm:text-sm text-text-muted leading-relaxed"
                      >
                        <span className="w-2 h-2 rounded-full bg-purple-400 mt-1.5 shrink-0" aria-hidden="true" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Personal reflection callout */}
                <div className="p-4 rounded-xl bg-purple-950/20 border border-purple-500/30">
                  <div className="flex items-start gap-2.5">
                    <Quote className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" aria-hidden="true" />
                    <p className="text-xs sm:text-sm text-purple-200/90 italic leading-relaxed">
                      "{item.reflection}"
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
