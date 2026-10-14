import React, { useState } from 'react'
import { portfolioContent } from '../data/content'
import { ProjectCard } from './ProjectCard'
import { ProjectDetailModal } from './ProjectDetailModal'
import type { Project } from '../types/content'
import { GithubIcon } from './SocialIcons'
import { ArrowUpRight, Sparkles } from 'lucide-react'

export const Projects: React.FC = () => {
  const { projects, moreProjectsNote, contact } = portfolioContent
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="py-12 sm:py-16 md:py-20 bg-white dark:bg-neutral-950 border-b border-black/5 dark:border-white/10"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Contrasting Full-Colour Lime Showcase Container (Directly modeled on reference image) */}
        <div className="section-showcase-lime rounded-3xl sm:rounded-[2.5rem] p-6 sm:p-10 lg:p-12 shadow-xl relative overflow-hidden">
          {/* Header inside the Lime Container */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-8 border-b border-black/15 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 rounded-full bg-neutral-950" />
                <span className="font-mono text-xs uppercase tracking-widest text-neutral-900 font-bold">
                  / Best Projects
                </span>
              </div>
              <h2
                id="projects-heading"
                className="text-3xl sm:text-5xl font-bold tracking-tight text-neutral-950"
              >
                Selected Works
              </h2>
            </div>

            {/* Pill Badge matching "Seen Resent Works" from reference */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/95 text-neutral-950 font-sans text-xs font-semibold shadow-md">
              <Sparkles className="w-3.5 h-3.5 text-lime-700" />
              <span>Active Engineering Builds</span>
            </div>
          </div>

          {/* Project Cards Stack */}
          <div className="space-y-6">
            {projects.map((project, idx) => (
              <ProjectCard
                key={project.id}
                project={project}
                onOpenCaseStudy={(p) => setSelectedProject(p)}
                isReversed={idx % 2 === 1}
              />
            ))}
          </div>

          {/* Bottom callout inside container */}
          <div className="mt-8 pt-6 border-t border-black/15 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="font-sans text-xs sm:text-sm text-neutral-900 font-medium">
              {moreProjectsNote}
            </p>

            <a
              href={contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-dark text-xs py-2.5 px-5 shrink-0"
            >
              <GithubIcon className="w-4 h-4" />
              <span>Explore GitHub Repos</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>

      {/* Case Study Modal */}
      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  )
}
