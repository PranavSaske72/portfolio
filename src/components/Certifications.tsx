import React from 'react'
import { portfolioContent } from '../data/content'
import { SectionHeading } from './SectionHeading'
import { PlaceholderLink } from './PlaceholderLink'
import { Reveal } from './Reveal'
import { Award, Calendar, Building, ShieldCheck, Trophy, Sparkles } from 'lucide-react'

export const Certifications: React.FC = () => {
  const { certifications, achievements } = portfolioContent

  return (
    <section
      id="certifications"
      aria-labelledby="certifications-heading"
      className="py-24 md:py-32 border-b border-border relative bg-bg"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeading
          index="06"
          subtitle="CREDENTIALS &amp; MERIT"
          title="Certifications &amp; Achievements"
          id="certifications-heading"
        />

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {certifications.map((cert, idx) => (
            <Reveal key={idx} delayMs={idx * 60}>
              <div className="blueprint-card corner-ticks rounded-xl p-6 border border-border bg-surface h-full flex flex-col justify-between">
                <div>
                  {/* Category Chip */}
                  <div className="flex items-center justify-between pb-3 mb-3 border-b border-border">
                    <div className="flex items-center gap-1.5">
                      <Award className="w-3.5 h-3.5 text-accent" aria-hidden="true" />
                      <span className="font-mono text-[11px] uppercase tracking-wider text-text-dim">
                        {cert.organizationType}
                      </span>
                    </div>
                    <span className="font-mono text-[10px] text-accent font-medium">
                      0{idx + 1}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-serif text-xl sm:text-2xl text-text font-normal mb-2 leading-snug">
                    {cert.title}
                  </h3>

                  {/* Issuer & Date */}
                  <div className="space-y-1.5 mb-4 text-xs font-mono text-text-dim">
                    <div className="flex items-center gap-1.5">
                      <Building className="w-3 h-3 text-accent" aria-hidden="true" />
                      <span>Issuer: {cert.issuer}</span>
                    </div>
                    {cert.date && (
                      <div className="flex items-center gap-1.5">
                        <Calendar className="w-3 h-3 text-accent" aria-hidden="true" />
                        <span>{cert.date}</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Optional link / verification status */}
                <div className="pt-4 border-t border-border flex items-center justify-between text-xs">
                  {cert.credentialUrl ? (
                    <PlaceholderLink
                      href={cert.credentialUrl}
                      placeholderLabel="Credential URL"
                      variant="button-secondary"
                      className="text-xs py-1.5 px-3"
                      ariaLabel={`Verify ${cert.title}`}
                    >
                      Verify
                    </PlaceholderLink>
                  ) : (
                    <span className="font-mono text-[11px] text-accent flex items-center gap-1">
                      <ShieldCheck className="w-3.5 h-3.5" aria-hidden="true" />
                      <span>Verified Completion</span>
                    </span>
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Hackathons & Extra-Curricular Competitions */}
        {achievements && achievements.length > 0 && (
          <Reveal delayMs={150}>
            <div className="blueprint-card p-6 sm:p-8 rounded-2xl border border-border bg-surface-2/30">
              <div className="flex items-center gap-2 mb-6 pb-4 border-b border-border">
                <Trophy className="w-4 h-4 text-accent" aria-hidden="true" />
                <h3 className="font-mono text-xs uppercase tracking-wider text-text font-medium">
                  Hackathons &amp; Extra-Curricular Competitions
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {achievements.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-surface border border-border flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between text-xs font-mono text-text-dim mb-1">
                        <span>{item.event}</span>
                        <Sparkles className="w-3 h-3 text-accent" aria-hidden="true" />
                      </div>
                      <h4 className="font-serif text-lg text-text font-normal mb-1">
                        {item.title}
                      </h4>
                    </div>

                    <div className="pt-2 mt-2 border-t border-border/60 font-mono text-xs text-accent">
                      {item.role}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        )}
      </div>
    </section>
  )
}
