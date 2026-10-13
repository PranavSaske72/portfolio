import React from 'react'
import { portfolioContent } from '../data/content'
import { SectionHeading } from './SectionHeading'
import { Reveal } from './Reveal'
import { CodechefIcon } from './SocialIcons'
import { Award, Calendar, Building, ShieldCheck, Trophy, Sparkles, ExternalLink } from 'lucide-react'

export const Certifications: React.FC = () => {
  const { certifications, achievements, contact } = portfolioContent

  return (
    <section
      id="certifications"
      aria-labelledby="certifications-heading"
      className="py-12 md:py-16 border-b border-border/70 relative"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeading
          index="05"
          subtitle="CODECHEF &amp; CREDENTIALS"
          title="Certifications &amp; Hackathons"
          id="certifications-heading"
          colorTheme="amber"
        />

        {/* Featured CodeChef Profile Banner */}
        {contact.codechef && (
          <Reveal>
            <div className="glass-card rounded-2xl p-6 sm:p-7 border border-amber-500/40 bg-gradient-to-r from-amber-950/30 via-surface/90 to-surface/90 mb-8 shadow-[0_10px_35px_-8px_rgba(245,158,11,0.2)]">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400 shrink-0 shadow-inner">
                    <CodechefIcon className="w-8 h-8" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-mono text-xs px-2.5 py-0.5 rounded-full bg-amber-950 border border-amber-500/50 text-amber-300 font-semibold uppercase tracking-wider">
                        CodeChef Competitive Profile
                      </span>
                      <span className="text-xs text-text-dim font-mono">@rcpit251108051</span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-serif text-text font-normal">
                      Verified CodeChef Programming Certifications
                    </h3>
                    <p className="text-xs text-text-muted mt-0.5">
                      Completed official CodeChef tracks in C, Object-Oriented Java, and C#.
                    </p>
                  </div>
                </div>

                <a
                  href={contact.codechef}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-black font-mono text-xs font-semibold shrink-0 shadow-lg transition-transform hover:-translate-y-0.5"
                >
                  <CodechefIcon className="w-4 h-4" />
                  <span>View CodeChef Profile</span>
                  <ExternalLink className="w-3.5 h-3.5 opacity-80" />
                </a>
              </div>
            </div>
          </Reveal>
        )}

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
          {certifications.map((cert, idx) => (
            <Reveal key={idx} delayMs={idx * 50}>
              <div className="glass-card rounded-xl p-5 border border-white/10 h-full flex flex-col justify-between hover:border-amber-400/40 transition-all">
                <div>
                  {/* Category Chip */}
                  <div className="flex items-center justify-between pb-2 mb-2 border-b border-white/10">
                    <div className="flex items-center gap-1.5">
                      <Award className="w-3.5 h-3.5 text-amber-400" aria-hidden="true" />
                      <span className="font-mono text-[10px] uppercase tracking-wider text-amber-400/90 font-medium">
                        {cert.organizationType}
                      </span>
                    </div>
                    <span className="font-mono text-[10px] text-text-dim">
                      0{idx + 1}
                    </span>
                  </div>

                  {/* Title */}
                  <h4 className="font-serif text-lg text-text font-normal mb-1.5 leading-snug">
                    {cert.title}
                  </h4>

                  {/* Issuer & Date */}
                  <div className="space-y-1 mb-3 text-xs font-mono text-text-muted">
                    <div className="flex items-center gap-1.5">
                      <Building className="w-3 h-3 text-amber-400" aria-hidden="true" />
                      <span>{cert.issuer}</span>
                    </div>
                    {cert.date && (
                      <div className="flex items-center gap-1.5 text-text-dim text-[11px]">
                        <Calendar className="w-3 h-3" aria-hidden="true" />
                        <span>{cert.date}</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Optional link / verification status */}
                <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs font-mono">
                  {cert.credentialUrl ? (
                    <a
                      href={cert.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-amber-300 hover:text-amber-200 text-xs inline-flex items-center gap-1 font-semibold"
                    >
                      <span>Verify Certificate</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  ) : (
                    <span className="text-[11px] text-emerald-400 flex items-center gap-1 font-semibold">
                      <ShieldCheck className="w-3.5 h-3.5" aria-hidden="true" />
                      <span>Verified Completion</span>
                    </span>
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Hackathons & Extra-Curricular Competitions Grid */}
        {achievements && achievements.length > 0 && (
          <Reveal delayMs={100}>
            <div className="glass-card p-6 sm:p-7 rounded-2xl border border-white/10 bg-surface/70">
              <div className="flex items-center justify-between mb-5 pb-3 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <Trophy className="w-4 h-4 text-amber-400" aria-hidden="true" />
                  <h3 className="font-mono text-xs uppercase tracking-wider text-text font-semibold">
                    Hackathons &amp; Technical Competitions
                  </h3>
                </div>
                <span className="font-mono text-xs text-text-dim">5 Events</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {achievements.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl bg-surface-2/70 border border-white/5 hover:border-amber-500/30 transition-all flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between text-[11px] font-mono text-text-dim mb-1">
                        <span>{item.event}</span>
                        <Sparkles className="w-3 h-3 text-amber-400" aria-hidden="true" />
                      </div>
                      <h4 className="font-serif text-base text-text font-normal">
                        {item.title}
                      </h4>
                    </div>

                    <div className="pt-2 mt-2 border-t border-white/5 font-mono text-xs text-amber-300 font-medium">
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
