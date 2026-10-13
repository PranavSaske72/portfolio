import React from 'react'
import { portfolioContent } from '../data/content'
import { HeroVisual } from './HeroVisual'
import { ArrowDown, ArrowUpRight, Sparkles } from 'lucide-react'

export const Hero: React.FC = () => {
  const { availability, heroHeadline, heroIntro, meta } = portfolioContent

  const scrollTo = (id: string) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
      history.pushState(null, '', `#${id}`)
    }
  }

  return (
    <section
      id="top"
      aria-label="Hero Introduction"
      className="relative min-h-[92vh] flex flex-col justify-between pt-28 md:pt-36 pb-12 overflow-hidden border-b border-border"
    >
      {/* Soft atmospheric radial glow behind the hero */}
      <div
        className="absolute top-1/4 right-1/4 w-[480px] h-[480px] rounded-full pointer-events-none blur-[120px] -z-10 opacity-30"
        style={{
          background: 'radial-gradient(circle, var(--accent) 0%, transparent 70%)',
        }}
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 w-full">
        {/* Availability status chip */}
        {availability && availability.trim() !== '' && (
          <div className="mb-6 inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full border border-border-strong bg-surface/80 backdrop-blur-sm text-xs font-mono text-text shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
            </span>
            <span className="tracking-tight">{availability}</span>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Headlines & Editorial Copy */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Primary Name Headline */}
            <div className="overflow-hidden mb-2">
              <h1 className="hero-headline font-serif font-normal text-text tracking-tight">
                {heroHeadline.line1}
              </h1>
            </div>

            {/* Second Line with italic electric-lime accent word */}
            <div className="overflow-hidden mb-6">
              <p className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-text-muted leading-[1.15] tracking-tight">
                {heroHeadline.line2Prefix}{' '}
                <span className="italic font-normal text-accent underline decoration-accent/40 decoration-wavy underline-offset-4">
                  {heroHeadline.accentWord}
                </span>
              </p>
            </div>

            {/* Concise 2-sentence intro */}
            <p className="text-base sm:text-lg text-text-muted leading-relaxed max-w-[58ch] mb-8">
              {heroIntro}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 mb-10">
              <button
                type="button"
                onClick={() => scrollTo('projects')}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-accent text-accent-text font-mono text-xs font-semibold hover:brightness-110 active:scale-[0.98] transition-all shadow-sm"
              >
                <span>View Projects</span>
                <ArrowDown className="w-3.5 h-3.5" aria-hidden="true" />
              </button>

              <button
                type="button"
                onClick={() => scrollTo('contact')}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border-strong bg-surface hover:bg-surface-2 hover:border-accent text-text font-mono text-xs transition-all"
              >
                <span>Contact Me</span>
                <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
              </button>
            </div>

            {/* Meta Row in mono */}
            <div className="pt-6 border-t border-border flex flex-wrap items-center gap-y-2 gap-x-6 text-xs font-mono text-text-dim">
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-accent" aria-hidden="true" />
                <span>{meta.location}</span>
              </div>
              <span className="hidden sm:inline text-border-strong" aria-hidden="true">/</span>
              <div className="flex items-center gap-1.5">
                <span>{meta.classYear}</span>
              </div>
              <span className="hidden sm:inline text-border-strong" aria-hidden="true">/</span>
              <div className="flex items-center gap-1.5 text-text">
                <Sparkles className="w-3 h-3 text-accent" aria-hidden="true" />
                <span className="font-medium text-text">{meta.academicRecord}</span>
              </div>
            </div>
          </div>

          {/* Right Column: 3D Canvas Wireframe */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            <div className="w-full max-w-[420px] aspect-square rounded-2xl border border-border bg-surface/30 backdrop-blur-sm p-2 shadow-2xl relative overflow-hidden">
              {/* Corner ticks */}
              <div className="corner-ticks absolute inset-0 pointer-events-none" />
              <HeroVisual />
            </div>
          </div>
        </div>
      </div>

      {/* Subtle scroll cue at bottom */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 w-full pt-10 flex items-center justify-between text-[11px] font-mono text-text-dim">
        <span className="tracking-widest uppercase">
          00 // INDEX
        </span>
        <div className="flex items-center gap-2 animate-bounce motion-reduce:animate-none">
          <span>Scroll</span>
          <ArrowDown className="w-3 h-3 text-accent" aria-hidden="true" />
        </div>
        <span className="hidden sm:inline tracking-wider">
          EST. 2025 – 2029
        </span>
      </div>
    </section>
  )
}
