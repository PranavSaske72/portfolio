import React from 'react'
import { portfolioContent } from '../data/content'
import { ArrowUpRight, ArrowDown, Award, Sparkles, Terminal, Code2, Cpu } from 'lucide-react'

export const Hero: React.FC = () => {
  const { fullName, availability, education, contact } = portfolioContent

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
      className="relative pt-28 sm:pt-32 md:pt-36 pb-12 sm:pb-16 overflow-hidden bg-white dark:bg-neutral-950"
    >
      {/* Expansive Vibrant Lime Radial Aura Backdrop (Matching reference image) */}
      <div
        className="absolute inset-0 pointer-events-none hero-lime-glow -z-0 opacity-90"
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10 flex flex-col items-center">
        {/* Top Headline: Hi I'm Pranav / Software Developer */}
        <div className="text-center mb-6 sm:mb-8">
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-neutral-900 dark:text-white leading-[1.05]">
            Hi I'm Pranav
          </h1>
          <span className="font-serif italic font-normal text-5xl sm:text-7xl md:text-8xl text-neutral-900 dark:text-neutral-100 block -mt-1 sm:-mt-3">
            Software Developer
          </span>
        </div>

        {/* Center Stage: Photo + Floating Information Badges (Layout directly from reference image) */}
        <div className="relative w-full max-w-4xl mx-auto flex flex-col items-center justify-center min-h-[340px] sm:min-h-[400px]">
          {/* Centered Portrait */}
          <div className="relative z-10 w-64 sm:w-80 aspect-square rounded-3xl overflow-hidden shadow-2xl border-4 border-white dark:border-neutral-900 bg-neutral-100 dark:bg-neutral-800">
            <img
              src={contact.profilePhoto}
              alt={fullName}
              className="w-full h-full object-cover object-top"
              loading="eager"
            />
          </div>

          {/* Floating Pill Left: Available for opportunities (Matching reference) */}
          {availability && (
            <div className="sm:absolute sm:top-14 sm:left-4 z-20 mt-4 sm:mt-0 floating-pill">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-lime-500 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-lime-500" />
              </span>
              <span className="font-medium text-xs text-neutral-900 dark:text-neutral-100">
                {availability}
              </span>
            </div>
          )}

          {/* Floating Pill Bottom Left: Academic Distinction / SGPA 8.35 (Matching reference) */}
          <div className="sm:absolute sm:bottom-6 sm:left-2 z-20 mt-3 sm:mt-0 max-w-[240px] floating-pill">
            <div className="flex -space-x-1.5 overflow-hidden shrink-0">
              <span className="w-5 h-5 rounded-full bg-lime-400 text-neutral-950 flex items-center justify-center font-bold text-[10px]">
                8.3
              </span>
              <span className="w-5 h-5 rounded-full bg-neutral-900 text-white flex items-center justify-center text-[10px]">
                ★
              </span>
            </div>
            <div className="text-[11px] leading-tight text-neutral-700 dark:text-neutral-300">
              <strong className="text-neutral-900 dark:text-white block font-semibold">
                SGPA {education.sgpa} • CGPA {education.cgpa}
              </strong>
              <span>RCPIT Shirpur (2025–2029)</span>
            </div>
          </div>

          {/* Floating Text Right: Short bio snippet (Matching reference) */}
          <div className="sm:absolute sm:top-20 sm:right-2 z-20 mt-4 sm:mt-0 max-w-[260px] text-center sm:text-left">
            <p className="text-xs sm:text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed font-normal">
              Passionate about creating intuitive software, AI tools, and connected IoT systems that connect ideas with real-world value.
            </p>
          </div>

          {/* Floating Action Button Bottom Right: -> Get in Touch (Matching reference) */}
          <div className="sm:absolute sm:bottom-8 sm:right-4 z-20 mt-4 sm:mt-0 flex items-center gap-2">
            <button
              type="button"
              onClick={() => scrollTo('contact')}
              className="btn-dark"
            >
              <span>Get in Touch</span>
              <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
            </button>

            <button
              type="button"
              onClick={() => scrollTo('projects')}
              className="btn-outline-pill"
            >
              <span>Projects</span>
              <ArrowDown className="w-3.5 h-3.5" aria-hidden="true" />
            </button>
          </div>
        </div>

        {/* Tech Stack Logo / Brand Strip (Matching reference image bottom strip) */}
        <div className="w-full mt-12 pt-8 border-t border-black/5 dark:border-white/10 flex flex-wrap items-center justify-center sm:justify-between gap-6 opacity-75 grayscale hover:grayscale-0 transition-all">
          <div className="flex items-center gap-2 font-mono text-xs text-neutral-800 dark:text-neutral-200 font-semibold tracking-wider">
            <Terminal className="w-4 h-4 text-lime-600 dark:text-lime-400" />
            <span>Python</span>
          </div>
          <div className="flex items-center gap-2 font-mono text-xs text-neutral-800 dark:text-neutral-200 font-semibold tracking-wider">
            <Sparkles className="w-4 h-4 text-lime-600 dark:text-lime-400" />
            <span>Streamlit</span>
          </div>
          <div className="flex items-center gap-2 font-mono text-xs text-neutral-800 dark:text-neutral-200 font-semibold tracking-wider">
            <Code2 className="w-4 h-4 text-lime-600 dark:text-lime-400" />
            <span>C / C++</span>
          </div>
          <div className="flex items-center gap-2 font-mono text-xs text-neutral-800 dark:text-neutral-200 font-semibold tracking-wider">
            <Cpu className="w-4 h-4 text-lime-600 dark:text-lime-400" />
            <span>ESP32 Hardware</span>
          </div>
          <div className="flex items-center gap-2 font-mono text-xs text-neutral-800 dark:text-neutral-200 font-semibold tracking-wider">
            <Award className="w-4 h-4 text-lime-600 dark:text-lime-400" />
            <span>Java (OOPs)</span>
          </div>
          <div className="flex items-center gap-2 font-mono text-xs text-neutral-800 dark:text-neutral-200 font-semibold tracking-wider">
            <span>CodeChef</span>
          </div>
          <div className="flex items-center gap-2 font-mono text-xs text-neutral-800 dark:text-neutral-200 font-semibold tracking-wider">
            <span>GitHub</span>
          </div>
        </div>
      </div>
    </section>
  )
}
