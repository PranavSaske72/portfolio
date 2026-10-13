import React, { useState } from 'react'
import { portfolioContent } from '../data/content'
import { SectionHeading } from './SectionHeading'
import { ProjectCard } from './ProjectCard'
import { ProjectDetailModal } from './ProjectDetailModal'
import { PlaceholderLink } from './PlaceholderLink'
import { Reveal } from './Reveal'
import type { Project } from '../types/content'
import { GitBranch } from 'lucide-react'

export const Projects: React.FC = () => {
  const { projects, moreProjectsNote, contact } = portfolioContent
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="py-24 md:py-32 border-b border-border relative bg-bg"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeading
          index="02"
          subtitle="SELECTED WORK"
          title="Engineered Projects"
          id="projects-heading"
        />

        {/* Project Cards List */}
        <div className="space-y-12 sm:space-y-16">
          {projects.map((project, idx) => (
            <Reveal key={project.id} delayMs={idx * 120}>
              <ProjectCard
                project={project}
                onOpenCaseStudy={(p) => setSelectedProject(p)}
                isReversed={idx % 2 === 1}
              />
            </Reveal>
          ))}
        </div>

        {/* Quiet closing line */}
        <Reveal delayMs={200}>
          <div className="mt-16 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
            <p className="font-mono text-xs text-text-dim">
              {moreProjectsNote}
            </p>

            <PlaceholderLink
              href={contact.github}
              placeholderLabel="GitHub Profile"
              variant="inline"
              className="font-mono text-xs"
              icon={<GitBranch className="w-3.5 h-3.5 text-accent" aria-hidden="true" />}
              ariaLabel="View more projects on GitHub (Link coming soon)"
            >
              Follow on GitHub
            </PlaceholderLink>
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
