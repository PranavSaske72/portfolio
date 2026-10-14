import React from 'react'
import { portfolioContent } from '../data/content'
import { GraduationCap, Languages, Users } from 'lucide-react'
import { Reveal } from './Reveal'

export const About: React.FC = () => {
  const { aboutBio, college, education, languages, experience } = portfolioContent
  const glitchverseExp = experience[0]

  const focusPills = [
    { label: 'AI Applications', color: 'border-orange-200 text-orange-700 bg-orange-50' },
    { label: 'Python & Streamlit', color: 'border-cyan-200 text-cyan-800 bg-cyan-50' },
    { label: 'C Programming', color: 'border-purple-200 text-purple-700 bg-purple-50' },
    { label: 'ESP32 Hardware', color: 'border-lime-300 text-lime-900 bg-lime-100' },
    { label: 'Java (OOPs)', color: 'border-blue-200 text-blue-700 bg-blue-50' },
    { label: 'Data Structures', color: 'border-amber-200 text-amber-800 bg-amber-50' },
  ]

  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="py-14 sm:py-18 bg-white dark:bg-neutral-950 border-b border-black/5 dark:border-white/10"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Editorial "Hello!" Philosophy Statement (Directly modeled on the top right of reference image) */}
        <Reveal delayMs={60}>
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="font-serif italic text-3xl sm:text-4xl text-neutral-800 dark:text-neutral-200 block mb-3">
              Hello!
            </span>
            <p className="text-xl sm:text-2xl md:text-3xl font-medium tracking-tight text-neutral-900 dark:text-white leading-snug">
              My focus is on blending clear logic, algorithmic fundamentals, and hardware empathy to{' '}
              <span className="font-serif italic font-normal text-2xl sm:text-3xl md:text-4xl text-neutral-800 dark:text-neutral-200">
                craft software
              </span>{' '}
              that solves real problems.
            </p>

            {/* Surrounding Skill Pills */}
            <div className="flex flex-wrap items-center justify-center gap-2 mt-6">
              {focusPills.map((pill) => (
                <span
                  key={pill.label}
                  className={`px-3 py-1 rounded-full text-xs font-sans font-medium border ${pill.color} dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-200 shadow-2xs hover:scale-105 transition-transform duration-200`}
                >
                  {pill.label}
                </span>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Academic Journey & Background Bento */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Left Column: Natural Personal Narrative & Club Volunteering */}
          <div className="lg:col-span-7 flex flex-col gap-5">
            <Reveal delayMs={100}>
              <div className="card-light rounded-2xl p-6 sm:p-7">
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-2 h-2 rounded-full bg-lime-500" />
                  <h3 className="font-mono text-xs uppercase tracking-wider text-neutral-500 font-bold">
                    About Pranav Mohan Saske
                  </h3>
                </div>
                <div className="text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed space-y-3">
                  <p>{aboutBio}</p>
                </div>
              </div>
            </Reveal>

            {/* Glitchverse Volunteering Note */}
            {glitchverseExp && (
              <Reveal delayMs={150}>
                <div className="card-light rounded-2xl p-5 border-l-4 border-l-lime-500">
                  <div className="flex items-center gap-2 mb-1.5 font-mono text-xs text-neutral-900 dark:text-white font-semibold">
                    <Users className="w-4 h-4 text-lime-600" />
                    <span>College Event Volunteering: {glitchverseExp.organization}</span>
                  </div>
                  <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
                    Volunteered during a {glitchverseExp.duration.toLowerCase()} at {glitchverseExp.location} facilitating team matchmaking, managing crowd flow across technical breakout halls, and coordinating real-time event logistics.
                  </p>
                </div>
              </Reveal>
            )}
          </div>

          {/* Right Column: Verified Academic Record & Languages */}
          <div className="lg:col-span-5 flex flex-col gap-5">
            <Reveal delayMs={120}>
              <div className="card-light rounded-2xl p-6">
              <div className="flex items-center justify-between pb-3 mb-4 border-b border-black/5 dark:border-white/10">
                <div className="flex items-center gap-2 font-mono text-xs text-neutral-900 dark:text-white font-bold">
                  <GraduationCap className="w-4 h-4 text-lime-600" />
                  <span>Verified Academics</span>
                </div>
                <span className="font-mono text-[11px] px-2.5 py-0.5 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 font-medium">
                  Class of 2029
                </span>
              </div>

              {/* College & Degree */}
              <div className="mb-4">
                <h4 className="text-base font-bold text-neutral-900 dark:text-white leading-snug">
                  {education.degree}
                </h4>
                <p className="font-sans text-xs text-neutral-500 mt-0.5">
                  {college} (Autonomous Institute)
                </p>
              </div>

              {/* Prominent SGPA & CGPA Cards */}
              <div className="grid grid-cols-2 gap-3 mb-4">
                <div className="p-3.5 rounded-xl bg-lime-50 dark:bg-lime-950/40 border border-lime-200 dark:border-lime-800">
                  <span className="font-mono text-[10px] text-lime-800 dark:text-lime-300 uppercase tracking-wider block mb-0.5 font-bold">
                    Semester 1 SGPA
                  </span>
                  <span className="text-2xl font-bold font-mono text-lime-900 dark:text-lime-200">
                    {education.sgpa}
                  </span>
                  <span className="font-mono text-[10px] text-lime-700/80 dark:text-lime-400 block mt-0.5">
                    Scale of 10.0
                  </span>
                </div>

                <div className="p-3.5 rounded-xl bg-neutral-50 dark:bg-neutral-800 border border-black/5 dark:border-white/5">
                  <span className="font-mono text-[10px] text-neutral-500 uppercase tracking-wider block mb-0.5 font-bold">
                    Cumulative CGPA
                  </span>
                  <span className="text-2xl font-bold font-mono text-neutral-900 dark:text-white">
                    {education.cgpa || '7.45'}
                  </span>
                  <span className="font-mono text-[10px] text-neutral-500 block mt-0.5">
                    Scale of 10.0
                  </span>
                </div>
              </div>

              {/* School Milestones */}
              <div className="pt-3 border-t border-black/5 dark:border-white/10 space-y-1.5 font-mono text-xs text-neutral-600 dark:text-neutral-400">
                <div className="flex justify-between">
                  <span>SSC (10th Grade):</span>
                  <strong className="text-neutral-900 dark:text-white">88%</strong>
                </div>
                <div className="flex justify-between">
                  <span>HSC (12th Grade):</span>
                  <strong className="text-neutral-900 dark:text-white">60%</strong>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Languages Spoken */}
          <Reveal delayMs={160}>
            <div className="card-light rounded-2xl p-5">
              <div className="flex items-center gap-2 mb-3 pb-2 border-b border-black/5 dark:border-white/10 font-mono text-xs text-neutral-900 dark:text-white font-bold">
                <Languages className="w-3.5 h-3.5 text-lime-600" />
                <span>Languages</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {languages.map((lang) => (
                  <span
                    key={lang.name}
                    className="px-3 py-1 rounded-full bg-neutral-100 dark:bg-neutral-800 text-xs font-sans text-neutral-800 dark:text-neutral-200 hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors"
                  >
                    <strong className="font-medium mr-1">{lang.name}</strong>
                    <span className="text-neutral-500 text-[11px]">({lang.proficiency})</span>
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
        </div>
      </div>
    </section>
  )
}
