import React from 'react'
import type { Project } from '../types/content'
import { SmartIrrigationVisual, AIStudyBuddyVisual } from './ProjectVisuals'
import { GithubIcon } from './SocialIcons'
import { BookOpen, ExternalLink, Cpu, Sparkles } from 'lucide-react'

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
  const isRepoValid = project.repoUrl && !project.repoUrl.includes('[[')

  return (
    <article
      aria-labelledby={`project-title-${project.id}`}
      className="editorial-card p-5 sm:p-6 transition-colors"
    >
      <div
        className={`grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-6 items-center ${
          isReversed ? 'lg:flex-row-reverse' : ''
        }`}
      >
        {/* Visual schematic */}
        <div
          className={`lg:col-span-5 overflow-hidden rounded-lg bg-surface-2 border border-border ${
            isReversed ? 'lg:order-2' : 'lg:order-1'
          }`}
        >
          {project.id === 'smart-irrigation' ? (
            <SmartIrrigationVisual />
          ) : (
            <AIStudyBuddyVisual />
          )}
        </div>

        {/* Project Information */}
        <div
          className={`lg:col-span-7 flex flex-col justify-between ${
            isReversed ? 'lg:order-1' : 'lg:order-2'
          }`}
        >
          <div>
            {/* Header / Index */}
            <div className="flex items-center justify-between pb-2 mb-2 border-b border-border">
              <span className="font-mono text-xs font-semibold text-accent flex items-center gap-1.5">
                {isAI ? <Sparkles className="w-3.5 h-3.5" /> : <Cpu className="w-3.5 h-3.5" />}
                PROJECT // {project.index}
              </span>
              <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-surface-2 border border-border text-text-dim">
                Active Build
              </span>
            </div>

            {/* Title & Tagline */}
            <h3
              id={`project-title-${project.id}`}
              className="text-xl sm:text-2xl font-bold text-text mb-1 tracking-tight"
            >
              {project.title}
            </h3>

            <p className="font-mono text-xs text-text-muted mb-3">
              {project.tagline}
            </p>

            {/* Problem & What I Built */}
            <div className="space-y-2 mb-3.5 text-xs">
              <div className="p-2.5 rounded-lg bg-surface-2 border border-border">
                <span className="font-mono text-[10px] text-text-dim uppercase tracking-wider block mb-0.5 font-semibold">
                  Problem Addressed
                </span>
                <p className="text-text-muted leading-relaxed">
                  {project.problem}
                </p>
              </div>

              <div className="p-2.5 rounded-lg bg-surface-2 border border-border">
                <span className="font-mono text-[10px] text-accent uppercase tracking-wider block mb-0.5 font-semibold">
                  What I Personally Built
                </span>
                <p className="text-text leading-relaxed">
                  {project.contribution}
                </p>
              </div>
            </div>

            {/* Tech Stack Chips */}
            <div className="flex flex-wrap gap-1 mb-4">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-0.5 rounded text-xs font-mono bg-surface-2 border border-border text-text-muted"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className="pt-2.5 border-t border-border flex flex-wrap items-center gap-2">
            <button
              type="button"
              onClick={() => onOpenCaseStudy(project)}
              className="btn-primary"
              aria-label={`Read full case study for ${project.title}`}
            >
              <BookOpen className="w-3.5 h-3.5" aria-hidden="true" />
              <span>Case Study</span>
            </button>

            {isRepoValid && (
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
                aria-label={`View ${project.title} repository on GitHub`}
              >
                <GithubIcon className="w-3.5 h-3.5" aria-hidden="true" />
                <span>GitHub Repo</span>
                <ExternalLink className="w-3 h-3 opacity-60" aria-hidden="true" />
              </a>
            )}
          </div>
        </div>
      </div>
    </article>
  )
}
