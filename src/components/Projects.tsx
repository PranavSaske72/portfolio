import React, { useState } from 'react'
import { portfolioContent } from '../data/content'
import { SectionHeading } from './SectionHeading'
import { ProjectCard } from './ProjectCard'
import { ProjectDetailModal } from './ProjectDetailModal'
import { Reveal } from './Reveal'
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
      className="py-12 sm:py-16 md:py-20 border-b border-border relative"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeading
          index="03"
          subtitle="SELECTED WORK"
          title="Featured Projects"
          id="projects-heading"
        />

        {/* 2 Prominent Project Cards */}
        <div className="space-y-8">
          {projects.map((project, idx) => (
            <Reveal key={project.id} delayMs={idx * 100}>
              <ProjectCard
                project={project}
                onOpenCaseStudy={(p) => setSelectedProject(p)}
                isReversed={idx % 2 === 1}
              />
            </Reveal>
          ))}
        </div>

        {/* Subtle callout pointing to active GitHub experiments */}
        <Reveal delayMs={140}>
          <div className="mt-8 p-4 rounded-xl bg-surface-2 border border-border flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
            <p className="font-mono text-xs text-text-muted">
              {moreProjectsNote}
            </p>

            <a
              href={contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              <GithubIcon className="w-3.5 h-3.5" aria-hidden="true" />
              <span>Explore More on GitHub</span>
              <ArrowUpRight className="w-3.5 h-3.5 opacity-70" aria-hidden="true" />
            </a>
          </div>
        </Reveal>
      </div>

      {/* Case Study Modal */}
      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  )
}
