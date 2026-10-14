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
      className="card-light rounded-2xl p-5 sm:p-7 bg-white dark:bg-neutral-900 border border-black/5 dark:border-white/10"
    >
      <div
        className={`grid grid-cols-1 lg:grid-cols-12 gap-6 items-center ${
          isReversed ? 'lg:flex-row-reverse' : ''
        }`}
      >
        {/* Schematic / UI visual preview */}
        <div
          className={`lg:col-span-5 overflow-hidden rounded-xl bg-neutral-50 dark:bg-neutral-800/80 border border-black/5 dark:border-white/10 ${
            isReversed ? 'lg:order-2' : 'lg:order-1'
          }`}
        >
          {project.id === 'smart-irrigation' ? (
            <SmartIrrigationVisual />
          ) : (
            <AIStudyBuddyVisual />
          )}
        </div>

        {/* Project information */}
        <div
          className={`lg:col-span-7 flex flex-col justify-between ${
            isReversed ? 'lg:order-1' : 'lg:order-2'
          }`}
        >
          <div>
            {/* Header / Index badge */}
            <div className="flex items-center justify-between pb-2 mb-2 border-b border-black/5 dark:border-white/10">
              <span className="font-mono text-xs font-semibold text-lime-700 dark:text-lime-400 flex items-center gap-1.5">
                {isAI ? <Sparkles className="w-3.5 h-3.5" /> : <Cpu className="w-3.5 h-3.5" />}
                PROJECT // {project.index}
              </span>
              <span className="font-mono text-[10px] px-2.5 py-0.5 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400">
                Verified Build
              </span>
            </div>

            {/* Title */}
            <h3
              id={`project-title-${project.id}`}
              className="text-2xl sm:text-3xl font-bold text-neutral-950 dark:text-white mb-1 tracking-tight"
            >
              {project.title}
            </h3>

            <p className="font-mono text-xs text-neutral-600 dark:text-neutral-400 mb-3">
              {project.tagline}
            </p>

            {/* Problem & What I Built Grid */}
            <div className="space-y-2 mb-4 text-xs">
              <div className="p-3 rounded-xl bg-neutral-50 dark:bg-neutral-800/60 border border-black/5 dark:border-white/5">
                <span className="font-mono text-[10px] text-neutral-500 uppercase tracking-wider block mb-0.5 font-semibold">
                  The Problem
                </span>
                <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed">
                  {project.problem}
                </p>
              </div>

              <div className="p-3 rounded-xl bg-neutral-50 dark:bg-neutral-800/60 border border-black/5 dark:border-white/5">
                <span className="font-mono text-[10px] text-lime-700 dark:text-lime-400 uppercase tracking-wider block mb-0.5 font-semibold">
                  What I Personally Built
                </span>
                <p className="text-neutral-900 dark:text-neutral-100 font-medium leading-relaxed">
                  {project.contribution}
                </p>
              </div>
            </div>

            {/* Tech stack chips */}
            <div className="flex flex-wrap gap-1.5 mb-4">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 rounded-full text-xs font-mono bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 border border-black/5 dark:border-white/5"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Action buttons */}
          <div className="pt-3 border-t border-black/5 dark:border-white/10 flex flex-wrap items-center gap-2.5">
            <button
              type="button"
              onClick={() => onOpenCaseStudy(project)}
              className="btn-dark text-xs py-2 px-4"
              aria-label={`Read full case study for ${project.title}`}
            >
              <BookOpen className="w-3.5 h-3.5" aria-hidden="true" />
              <span>Read Case Study</span>
            </button>

            {isRepoValid && (
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline-pill text-xs py-2 px-4"
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
