import React from 'react'
import { portfolioContent, isPlaceholder } from '../data/content'
import { SectionHeading } from './SectionHeading'
import { Reveal } from './Reveal'
import { Code, Globe, Cpu, Sparkles, Info, AlertTriangle, Terminal } from 'lucide-react'

const CATEGORY_STYLES: Record<string, { icon: React.ReactNode; borderHover: string; pillColor: string; titleColor: string }> = {
  programming: {
    icon: <Code className="w-4 h-4 text-purple-400" aria-hidden="true" />,
    borderHover: 'hover:border-purple-500/40 hover:shadow-[0_10px_30px_rgba(168,85,247,0.18)]',
    pillColor: 'bg-purple-950/40 text-purple-300 border-purple-500/30',
    titleColor: 'text-purple-400',
  },
  'web-development': {
    icon: <Globe className="w-4 h-4 text-cyan-400" aria-hidden="true" />,
    borderHover: 'hover:border-cyan-500/40 hover:shadow-[0_10px_30px_rgba(0,245,255,0.18)]',
    pillColor: 'bg-cyan-950/40 text-cyan-300 border-cyan-500/30',
    titleColor: 'text-cyan-400',
  },
  'ai-tools': {
    icon: <Sparkles className="w-4 h-4 text-pink-400" aria-hidden="true" />,
    borderHover: 'hover:border-pink-500/40 hover:shadow-[0_10px_30px_rgba(236,72,153,0.18)]',
    pillColor: 'bg-pink-950/40 text-pink-300 border-pink-500/30',
    titleColor: 'text-pink-400',
  },
  'hardware-iot': {
    icon: <Cpu className="w-4 h-4 text-emerald-400" aria-hidden="true" />,
    borderHover: 'hover:border-emerald-500/40 hover:shadow-[0_10px_30px_rgba(16,185,129,0.18)]',
    pillColor: 'bg-emerald-950/40 text-emerald-300 border-emerald-500/30',
    titleColor: 'text-emerald-400',
  },
}

export const Skills: React.FC = () => {
  const { skills, skillsLegend, currentlyLearning } = portfolioContent

  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      className="py-12 md:py-16 border-b border-border/70 relative"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeading
          index="03"
          subtitle="TECHNICAL MATRIX"
          title="Skills &amp; Technologies"
          id="skills-heading"
          colorTheme="purple"
        />

        {/* 4 Grouped Panels in a Grid with Distinct Neon Colors */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8">
          {skills.map((category, idx) => {
            const style = CATEGORY_STYLES[category.id] || CATEGORY_STYLES['programming']

            return (
              <Reveal key={category.id} delayMs={idx * 70}>
                <div
                  className={`glass-card rounded-2xl p-6 border border-white/10 h-full flex flex-col justify-between transition-all duration-300 ${style.borderHover}`}
                >
                  <div>
                    {/* Category Header */}
                    <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/10">
                      <div className="flex items-center gap-2">
                        {style.icon}
                        <h3 className={`font-mono text-sm uppercase tracking-wider font-semibold ${style.titleColor}`}>
                          {category.name}
                        </h3>
                      </div>
                      <span className="font-mono text-[10px] text-text-dim">
                        CLUSTER // 0{idx + 1}
                      </span>
                    </div>

                    {category.description && (
                      <p className="text-xs text-text-muted mb-4 font-mono">
                        {category.description}
                      </p>
                    )}

                    {/* Skills List with Honest Labels & Colorful Chips */}
                    <ul className="space-y-2.5">
                      {category.skills.map((item) => {
                        const isUnconfirmed = isPlaceholder(item.level)

                        return (
                          <li
                            key={item.name}
                            className="flex items-center justify-between py-2 px-3 rounded-xl bg-surface-2/60 border border-white/5 hover:border-white/15 transition-colors"
                          >
                            <span className="text-sm font-medium text-text">
                              {item.name}
                            </span>

                            {isUnconfirmed ? (
                              <span className="inline-flex items-center gap-1 font-mono text-[11px] px-2 py-0.5 rounded border border-dashed border-amber-500/40 text-amber-300 bg-amber-950/20">
                                <AlertTriangle className="w-3 h-3 text-amber-400" aria-hidden="true" />
                                <span>{item.level}</span>
                              </span>
                            ) : (
                              <span
                                className={`font-mono text-xs px-2.5 py-0.5 rounded-full border ${style.pillColor}`}
                              >
                                {item.level}
                              </span>
                            )}
                          </li>
                        )
                      })}
                    </ul>
                  </div>
                </div>
              </Reveal>
            )
          })}
        </div>

        {/* Currently Learning Callout with Glowing Border */}
        <Reveal delayMs={140}>
          <div className="p-4 sm:p-5 rounded-2xl border border-purple-500/30 bg-purple-950/20 backdrop-blur-md mb-8 flex items-center justify-between gap-4 shadow-[0_0_20px_rgba(168,85,247,0.12)]">
            <div className="flex items-center gap-3">
              <Terminal className="w-5 h-5 text-purple-400 shrink-0" aria-hidden="true" />
              <div>
                <span className="font-mono text-xs uppercase tracking-wider text-purple-300 font-semibold block sm:inline mr-2">
                  Active Focus:
                </span>
                <span className="text-sm text-text-muted">
                  {currentlyLearning}
                </span>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Legend Explaining Labels */}
        <Reveal delayMs={180}>
          <div className="p-5 rounded-2xl border border-white/10 bg-surface/60">
            <div className="flex items-center gap-2 mb-3 pb-2 border-b border-white/10">
              <Info className="w-4 h-4 text-cyan-400" aria-hidden="true" />
              <h4 className="font-mono text-xs uppercase tracking-wider text-text font-medium">
                Honest Proficiency Framework
              </h4>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
              {skillsLegend.map((legend) => (
                <div
                  key={legend.label}
                  className="p-2.5 rounded-xl bg-surface-2/60 border border-white/5 text-xs"
                >
                  <span className="font-mono text-xs text-cyan-300 font-semibold block mb-0.5">
                    {legend.label}
                  </span>
                  <span className="text-text-muted leading-relaxed text-[11px]">
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
