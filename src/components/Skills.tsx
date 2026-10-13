import React from 'react'
import { portfolioContent, isPlaceholder } from '../data/content'
import { SectionHeading } from './SectionHeading'
import { Reveal } from './Reveal'
import { Code, Globe, Cpu, Wrench, Info, AlertTriangle, Sparkles } from 'lucide-react'

const CATEGORY_ICONS: Record<string, React.ReactNode> = {
  programming: <Code className="w-4 h-4 text-accent" aria-hidden="true" />,
  'web-development': <Globe className="w-4 h-4 text-accent" aria-hidden="true" />,
  'ai-tools': <Sparkles className="w-4 h-4 text-accent" aria-hidden="true" />,
  'hardware-iot': <Cpu className="w-4 h-4 text-accent" aria-hidden="true" />,
}

export const Skills: React.FC = () => {
  const { skills, skillsLegend, currentlyLearning } = portfolioContent

  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      className="py-24 md:py-32 border-b border-border relative bg-surface/10"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeading
          index="03"
          subtitle="CAPABILITIES"
          title="Technical Skills & Proficiencies"
          id="skills-heading"
        />

        {/* 4 Grouped Panels in a Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-12">
          {skills.map((category, idx) => (
            <Reveal key={category.id} delayMs={idx * 100}>
              <div className="blueprint-card corner-ticks rounded-xl p-6 sm:p-7 border border-border h-full flex flex-col justify-between">
                <div>
                  {/* Category Header */}
                  <div className="flex items-center justify-between pb-4 mb-4 border-b border-border">
                    <div className="flex items-center gap-2.5">
                      {CATEGORY_ICONS[category.id] || (
                        <Wrench className="w-4 h-4 text-accent" aria-hidden="true" />
                      )}
                      <h3 className="font-mono text-sm uppercase tracking-wider text-text font-medium">
                        {category.name}
                      </h3>
                    </div>
                    <span className="font-mono text-[10px] text-text-dim">
                      0{idx + 1}
                    </span>
                  </div>

                  {category.description && (
                    <p className="text-xs text-text-dim mb-6 font-mono">
                      {category.description}
                    </p>
                  )}

                  {/* Skills List with Honest Labels (No percentage bars, no stars) */}
                  <ul className="space-y-3.5">
                    {category.skills.map((item) => {
                      const isUnconfirmed = isPlaceholder(item.level)

                      return (
                        <li
                          key={item.name}
                          className="flex items-center justify-between py-2 px-3 rounded-lg bg-surface-2/40 border border-border/60 hover:border-border transition-colors group"
                        >
                          <span className="text-sm font-medium text-text group-hover:text-accent transition-colors">
                            {item.name}
                          </span>

                          {isUnconfirmed ? (
                            <span className="inline-flex items-center gap-1 font-mono text-[11px] px-2 py-0.5 rounded border border-dashed border-border-strong text-text-dim bg-surface/50">
                              <AlertTriangle className="w-3 h-3 text-accent" aria-hidden="true" />
                              <span>{item.level}</span>
                            </span>
                          ) : (
                            <span className="font-mono text-xs px-2.5 py-0.5 rounded-full bg-surface-2 border border-border text-text-muted font-medium">
                              {item.level}
                            </span>
                          )}
                        </li>
                      )
                    })}
                  </ul>
                </div>

                <div className="pt-6 mt-6 border-t border-border/60 flex items-center justify-between text-[11px] font-mono text-text-dim">
                  <span>VERIFIED SELF-ASSESSMENT</span>
                  <span className="text-accent">• ACTIVE</span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Honest Currently Learning Callout */}
        <Reveal delayMs={200}>
          <div className="p-5 sm:p-6 rounded-xl border border-accent/20 bg-accent-dim/40 mb-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-accent animate-pulse shrink-0" aria-hidden="true" />
              <div>
                <span className="font-mono text-xs uppercase tracking-wider text-accent font-semibold block sm:inline mr-2">
                  Currently Learning:
                </span>
                <span className="text-sm text-text">
                  {currentlyLearning}
                </span>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Legend Explaining Labels */}
        <Reveal delayMs={240}>
          <div className="blueprint-card p-6 rounded-xl border border-border bg-surface-2/30">
            <div className="flex items-center gap-2 mb-4 pb-3 border-b border-border">
              <Info className="w-4 h-4 text-accent" aria-hidden="true" />
              <h4 className="font-mono text-xs uppercase tracking-wider text-text font-medium">
                Proficiency Criteria &amp; Standards
              </h4>
            </div>

            <p className="text-xs text-text-dim mb-4 leading-relaxed">
              In accordance with honest engineering principles, proficiencies are categorized by real-world capability rather than arbitrary percentage bars or vanity star ratings:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
              {skillsLegend.map((legend) => (
                <div
                  key={legend.label}
                  className="p-3 rounded-lg bg-surface border border-border/80"
                >
                  <span className="font-mono text-xs text-accent font-medium block mb-1">
                    {legend.label}
                  </span>
                  <span className="text-xs text-text-muted leading-relaxed">
                    {legend.description}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
