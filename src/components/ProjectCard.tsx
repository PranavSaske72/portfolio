import React from 'react'
import type { Project } from '../types/content'
import { PlaceholderLink } from './PlaceholderLink'
import { SmartIrrigationVisual, AIStudyBuddyVisual } from './ProjectVisuals'
import { BookOpen } from 'lucide-react'

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
  return (
    <article
      aria-labelledby={`project-title-${project.id}`}
      className="blueprint-card corner-ticks rounded-2xl p-6 sm:p-8 border border-border bg-surface transition-all duration-300 group hover:border-border-strong hover:shadow-xl"
    >
      <div
        className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center ${
          isReversed ? 'lg:flex-row-reverse' : ''
        }`}
      >
        {/* Cover Visual Container */}
        <div
          className={`lg:col-span-6 overflow-hidden rounded-xl bg-surface-2 border border-border group-hover:border-border-strong transition-all duration-300 ${
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
          className={`lg:col-span-6 flex flex-col justify-between ${
            isReversed ? 'lg:order-1' : 'lg:order-2'
          }`}
        >
          <div>
            {/* Header / Index */}
            <div className="flex items-center justify-between pb-3 mb-3 border-b border-border/80">
              <span className="font-mono text-xs text-accent font-medium">
                PROJECT // {project.index}
              </span>
              <span className="font-mono text-[11px] text-text-dim">
                PROD. REV 1.0
              </span>
            </div>

            {/* Title */}
            <h3
              id={`project-title-${project.id}`}
              className="font-serif text-2xl sm:text-3xl lg:text-4xl text-text font-normal mb-2 leading-tight tracking-tight"
            >
              {project.title}
            </h3>

            {/* Tagline */}
            <p className="font-mono text-xs text-text-dim mb-6">
              {project.tagline}
            </p>

            {/* Problem & Solution */}
            <div className="space-y-4 mb-6">
              <div className="p-3.5 rounded-lg bg-surface-2/60 border border-border">
                <span className="font-mono text-[11px] text-text-dim uppercase tracking-wider block mb-1">
                  Problem
                </span>
                <p className="text-xs sm:text-sm text-text-muted leading-relaxed">
                  {project.problem}
                </p>
              </div>

              <div className="p-3.5 rounded-lg bg-surface-2/60 border border-border">
                <span className="font-mono text-[11px] text-accent uppercase tracking-wider block mb-1">
                  Engineered Solution
                </span>
                <p className="text-xs sm:text-sm text-text/90 leading-relaxed">
                  {project.solution}
                </p>
              </div>
            </div>

            {/* My Contribution */}
            <div className="mb-6 p-3 rounded-lg border border-dashed border-border-strong bg-surface/40">
              <span className="font-mono text-[11px] text-text-dim block mb-1 uppercase tracking-wider">
                My Contribution:
              </span>
              <p className="font-mono text-xs text-text-muted">
                {project.contribution}
              </p>
              <span className="text-[10px] text-text-dim block mt-1 font-sans">
                Editable placeholder in src/data/content.ts
              </span>
            </div>

            {/* Tech Stack Chips */}
            <div className="flex flex-wrap gap-2 mb-8">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 rounded bg-surface-2 border border-border text-xs font-mono text-text-muted"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Actions: Case Study Expand, Live Demo, Repo */}
          <div className="pt-4 border-t border-border flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={() => onOpenCaseStudy(project)}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded bg-accent text-accent-text font-mono text-xs font-medium hover:brightness-110 active:scale-[0.98] transition-all shadow-sm"
              aria-label={`Read full case study for ${project.title}`}
            >
              <BookOpen className="w-3.5 h-3.5" aria-hidden="true" />
              <span>Read Case Study</span>
            </button>

            <PlaceholderLink
              href={project.liveUrl}
              placeholderLabel="Live Demo"
              variant="button-secondary"
              ariaLabel={`Live demo for ${project.title}`}
            >
              Live Demo
            </PlaceholderLink>

            <PlaceholderLink
              href={project.repoUrl}
              placeholderLabel="Repository"
              variant="button-secondary"
              ariaLabel={`Source repository for ${project.title}`}
            >
              Repository
            </PlaceholderLink>
          </div>
        </div>
      </div>
    </article>
  )
}
