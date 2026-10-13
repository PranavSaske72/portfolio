import React, { useState } from 'react'
import { portfolioContent } from '../data/content'
import { SectionHeading } from './SectionHeading'
import { ProjectCard } from './ProjectCard'
import { ProjectDetailModal } from './ProjectDetailModal'
import type { Project } from '../types/content'
import { GithubIcon } from './SocialIcons'
import { ArrowUpRight } from 'lucide-react'

export const Projects: React.FC = () => {
  const { projects, moreProjectsNote, contact } = portfolioContent
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="py-10 sm:py-12 border-b border-border relative"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeading
          index="03"
          subtitle="PROJECTS"
          title="Featured Projects"
          id="projects-heading"
        />

        {/* 2 Prominent Project Cards */}
        <div className="space-y-5">
          {projects.map((project, idx) => (
            <ProjectCard
              key={project.id}
              project={project}
              onOpenCaseStudy={(p) => setSelectedProject(p)}
              isReversed={idx % 2 === 1}
            />
          ))}
        </div>

        {/* Callout pointing to active GitHub experiments */}
        <div className="mt-5 p-3.5 rounded-lg bg-surface-2 border border-border flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <p className="font-mono text-xs text-text-muted">
            {moreProjectsNote}
          </p>

          <a
            href={contact.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary text-xs py-1.5 px-3"
          >
            <GithubIcon className="w-3.5 h-3.5" aria-hidden="true" />
            <span>GitHub Profile</span>
            <ArrowUpRight className="w-3 h-3 opacity-70" aria-hidden="true" />
          </a>
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
