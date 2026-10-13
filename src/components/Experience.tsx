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
      className="py-24 md:py-32 border-b border-border relative bg-surface/10"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeading
          index="05"
          subtitle="LEADERSHIP & SERVICE"
          title="Campus Experience"
          id="experience-heading"
        />

        <div className="space-y-8">
          {experience.map((item, idx) => (
            <Reveal key={item.organization} delayMs={idx * 100}>
              <div className="blueprint-card corner-ticks rounded-2xl p-6 sm:p-10 border border-border bg-surface">
                {/* Header row */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 mb-6 border-b border-border gap-4">
                  <div>
                    <div className="flex items-center gap-2 mb-2 font-mono text-xs text-accent">
                      <Users className="w-3.5 h-3.5" aria-hidden="true" />
                      <span>COLLEGE CLUB VOLUNTEER</span>
                    </div>
                    <h3 className="font-serif text-2xl sm:text-3xl text-text font-normal">
                      {item.role} — {item.organization}
                    </h3>
                  </div>

                  <div className="flex flex-wrap sm:flex-col items-start sm:items-end gap-2 text-xs font-mono text-text-dim">
                    <span className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-surface-2 border border-border text-text">
                      <Calendar className="w-3.5 h-3.5 text-accent" aria-hidden="true" />
                      {item.duration}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <MapPin className="w-3 h-3" aria-hidden="true" />
                      {item.location}
                    </span>
                  </div>
                </div>

                {/* Bullets */}
                <div className="mb-8">
                  <h4 className="font-mono text-xs uppercase tracking-wider text-text-dim mb-4">
                    Key Responsibilities:
                  </h4>
                  <ul className="space-y-3">
                    {item.points.map((point, pIdx) => (
                      <li key={pIdx} className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" aria-hidden="true" />
                        <span className="text-sm sm:text-base text-text-muted leading-relaxed">
                          {point}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Ground Reflection block (strictly honest, no fabricated attendee stats) */}
                <div className="p-5 sm:p-6 rounded-xl bg-surface-2/60 border border-border relative">
                  <div className="flex items-start gap-3">
                    <Quote className="w-5 h-5 text-accent shrink-0 mt-0.5" aria-hidden="true" />
                    <div>
                      <span className="font-mono text-xs uppercase tracking-wider text-accent font-semibold block mb-1">
                        Personal Takeaway &amp; Reflection:
                      </span>
                      <p className="text-xs sm:text-sm text-text/90 italic leading-relaxed">
                        "{item.reflection}"
                      </p>
                    </div>
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
