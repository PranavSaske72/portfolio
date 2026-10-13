import React from 'react'
import type { Project } from '../types/content'
import { PlaceholderLink } from './PlaceholderLink'
import { SmartIrrigationVisual, AIStudyBuddyVisual } from './ProjectVisuals'
import { BookOpen, Sparkles, Cpu } from 'lucide-react'

interface ProjectCardProps {
  project: Project
  onOpenCaseStudy: (project: Project) => void
  isReversed?: boolean
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  onOpenCaseStudy,
  isReversed = false,
}) => {
  const isAI = project.id === 'ai-study-buddy'
  const cardBorderClass = isAI
    ? 'hover:border-cyan-400/40 hover:shadow-[0_12px_35px_-8px_rgba(0,245,255,0.22)]'
    : 'hover:border-emerald-400/40 hover:shadow-[0_12px_35px_-8px_rgba(16,185,129,0.22)]'

  return (
    <article
      aria-labelledby={`project-title-${project.id}`}
      className={`glass-card rounded-2xl p-6 sm:p-7 border border-white/10 transition-all duration-300 group ${cardBorderClass}`}
    >
      <div
        className={`grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center ${
          isReversed ? 'lg:flex-row-reverse' : ''
        }`}
      >
        {/* Cover Visual Container */}
        <div
          className={`lg:col-span-5 overflow-hidden rounded-xl bg-surface-2/90 border border-white/10 transition-all duration-300 group-hover:border-white/20 ${
            isReversed ? 'lg:order-2' : 'lg:order-1'
          }`}
        >
          <div className="transition-transform duration-500 ease-out group-hover:scale-[1.02]">
            {project.id === 'smart-irrigation' ? (
              <SmartIrrigationVisual />
            ) : (
              <AIStudyBuddyVisual />
            )}
          </div>
        </div>

        {/* Project Information */}
        <div
          className={`lg:col-span-7 flex flex-col justify-between ${
            isReversed ? 'lg:order-1' : 'lg:order-2'
          }`}
        >
          <div>
            {/* Header / Index with Neon Accent */}
            <div className="flex items-center justify-between pb-2.5 mb-2.5 border-b border-white/10">
              <span
                className={`font-mono text-xs font-semibold flex items-center gap-1.5 ${
                  isAI ? 'text-cyan-400' : 'text-emerald-400'
                }`}
              >
                {isAI ? <Sparkles className="w-3.5 h-3.5" /> : <Cpu className="w-3.5 h-3.5" />}
                PROJECT // {project.index}
              </span>
              <span className="font-mono text-[10px] px-2 py-0.5 rounded-full bg-surface-2 border border-white/10 text-text-dim">
                Active Build
              </span>
            </div>

            {/* Title */}
            <h3
              id={`project-title-${project.id}`}
              className="text-2xl sm:text-3xl font-serif text-text font-normal mb-1.5 leading-tight tracking-tight"
            >
              {project.title}
            </h3>

            {/* Tagline */}
            <p className="font-mono text-xs text-text-muted mb-4">
              {project.tagline}
            </p>

            {/* Problem & Solution Compact Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
              <div className="p-3 rounded-lg bg-surface-2/60 border border-white/5">
                <span className="font-mono text-[10px] text-pink-400 uppercase tracking-wider block mb-1 font-semibold">
                  Problem
                </span>
                <p className="text-xs text-text-muted leading-relaxed line-clamp-3">
                  {project.problem}
                </p>
              </div>

              <div className="p-3 rounded-lg bg-surface-2/60 border border-white/5">
                <span
                  className={`font-mono text-[10px] uppercase tracking-wider block mb-1 font-semibold ${
                    isAI ? 'text-cyan-400' : 'text-emerald-400'
                  }`}
                >
                  Solution
                </span>
                <p className="text-xs text-text-muted leading-relaxed line-clamp-3">
                  {project.solution}
                </p>
              </div>
            </div>

            {/* Tech Stack Chips with Colorful Badges */}
            <div className="flex flex-wrap gap-1.5 mb-5">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className={`px-2.5 py-0.5 rounded-full text-xs font-mono font-medium border ${
                    isAI
                      ? 'bg-cyan-950/40 text-cyan-300 border-cyan-500/30'
                      : 'bg-emerald-950/40 text-emerald-300 border-emerald-500/30'
                  }`}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Actions: Case Study Expand, Live Demo, Repo */}
          <div className="pt-3 border-t border-white/10 flex flex-wrap items-center gap-2.5">
            <button
              type="button"
              onClick={() => onOpenCaseStudy(project)}
              className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-full font-mono text-xs font-semibold transition-all shadow-sm ${
                isAI
                  ? 'btn-gradient-primary'
                  : 'bg-emerald-400 hover:bg-emerald-300 text-black font-semibold'
              }`}
              aria-label={`Read full case study for ${project.title}`}
            >
              <BookOpen className="w-3.5 h-3.5" aria-hidden="true" />
              <span>Read Case Study</span>
            </button>

            <PlaceholderLink
              href={project.repoUrl}
              placeholderLabel="GitHub Repo"
              variant="button-secondary"
              className="text-xs py-2 px-3.5"
              ariaLabel={`Source repository for ${project.title}`}
            >
              Repository
            </PlaceholderLink>

            <PlaceholderLink
              href={project.liveUrl}
              placeholderLabel="Live Demo"
              variant="button-secondary"
              className="text-xs py-2 px-3.5"
              ariaLabel={`Live demo for ${project.title}`}
            >
              Live Demo
            </PlaceholderLink>
          </div>
        </div>
      </div>
    </article>
  )
}
