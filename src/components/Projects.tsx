import React, { useState } from 'react'
import { portfolioContent } from '../data/content'
import { SectionHeading } from './SectionHeading'
import { ProjectCard } from './ProjectCard'
import { ProjectDetailModal } from './ProjectDetailModal'
import { Reveal } from './Reveal'
import type { Project } from '../types/content'
import { GitBranch, ArrowUpRight } from 'lucide-react'

export const Projects: React.FC = () => {
  const { projects, moreProjectsNote, contact } = portfolioContent
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="py-12 md:py-16 border-b border-border/70 relative"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeading
          index="02"
          subtitle="SELECTED WORK"
          title="Engineered Projects"
          id="projects-heading"
          colorTheme="cyan"
        />

        {/* Project Cards List */}
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

        {/* Compact closing callout */}
        <Reveal delayMs={150}>
          <div className="mt-10 p-4 rounded-xl bg-surface/80 border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
            <p className="font-mono text-xs text-text-muted">
              {moreProjectsNote}
            </p>

            <a
              href={contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-surface-2 hover:bg-cyan-950/60 border border-border hover:border-cyan-400 text-xs font-mono text-cyan-300 transition-all shadow-sm"
            >
              <GitBranch className="w-3.5 h-3.5" aria-hidden="true" />
              <span>More on GitHub</span>
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
