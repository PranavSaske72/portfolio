import React, { useEffect, useRef } from 'react'
import type { Project } from '../types/content'
import { PlaceholderLink } from './PlaceholderLink'
import { X, AlertCircle } from 'lucide-react'

interface ProjectDetailModalProps {
  project: Project | null
  onClose: () => void
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({ project, onClose }) => {
  const modalRef = useRef<HTMLDivElement | null>(null)
  const closeButtonRef = useRef<HTMLButtonElement | null>(null)

  useEffect(() => {
    if (!project) return

    closeButtonRef.current?.focus()
    const originalOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
      } else if (e.key === 'Tab' && modalRef.current) {
        const focusable = modalRef.current.querySelectorAll<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        )
        if (focusable.length === 0) return

        const first = focusable[0]
        const last = focusable[focusable.length - 1]

        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault()
          last.focus()
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault()
          first.focus()
        }
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => {
      document.body.style.overflow = originalOverflow
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [project, onClose])

  if (!project) return null

  const { caseStudy } = project

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby={`case-study-title-${project.id}`}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/75 backdrop-blur-sm overflow-y-auto"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose()
      }}
    >
      <div
        ref={modalRef}
        className="w-full max-w-2xl rounded-xl border border-border bg-surface p-5 sm:p-7 shadow-xl relative max-h-[90vh] overflow-y-auto"
      >
        {/* Header bar */}
        <div className="flex items-start justify-between pb-4 border-b border-border gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1 font-mono text-xs text-accent">
              <span>CASE STUDY // {project.index}</span>
            </div>
            <h3
              id={`case-study-title-${project.id}`}
              className="text-xl sm:text-2xl font-bold text-text"
            >
              {project.title}
            </h3>
            <p className="text-xs sm:text-sm text-text-muted mt-0.5">{project.tagline}</p>
          </div>

          <button
            ref={closeButtonRef}
            type="button"
            onClick={onClose}
            aria-label="Close case study dialog"
            className="w-8 h-8 rounded-lg border border-border bg-surface-2 hover:bg-surface flex items-center justify-center text-text hover:text-accent transition-colors shrink-0"
          >
            <X className="w-4 h-4" aria-hidden="true" />
          </button>
        </div>

        {/* Tech stack chips */}
        <div className="py-3 border-b border-border flex flex-wrap gap-1.5">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="px-2 py-0.5 rounded bg-surface-2 border border-border text-xs font-mono text-text-muted"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Content sections */}
        <div className="py-4 space-y-4 text-xs sm:text-sm text-text-muted">
          {/* Problem */}
          <section>
            <h4 className="font-mono text-xs text-accent uppercase tracking-wider mb-1 flex items-center gap-1.5 font-semibold">
              <span>01.</span>
              <span>The Problem</span>
            </h4>
            <p className="leading-relaxed text-text/90">{caseStudy.problemDetail}</p>
          </section>

          {/* Approach */}
          <section>
            <h4 className="font-mono text-xs text-accent uppercase tracking-wider mb-1 flex items-center gap-1.5 font-semibold">
              <span>02.</span>
              <span>Engineering Approach</span>
            </h4>
            <p className="leading-relaxed text-text/90">{caseStudy.approach}</p>
          </section>

          {/* What I Built */}
          <section>
            <h4 className="font-mono text-xs text-accent uppercase tracking-wider mb-1 flex items-center gap-1.5 font-semibold">
              <span>03.</span>
              <span>What I Built</span>
            </h4>
            <p className="leading-relaxed text-text/90">{caseStudy.whatIBuilt}</p>
          </section>

          {/* Planned Features */}
          {caseStudy.plannedFeatures && caseStudy.plannedFeatures.length > 0 && (
            <section className="p-3.5 rounded-lg bg-surface-2 border border-border">
              <h4 className="font-mono text-xs text-text uppercase tracking-wider mb-1.5 flex items-center gap-1.5 font-semibold">
                <AlertCircle className="w-3.5 h-3.5 text-accent" aria-hidden="true" />
                <span>Planned Features</span>
              </h4>
              <div className="space-y-1">
                {caseStudy.plannedFeatures.map((feat, idx) => (
                  <div key={idx} className="flex items-center gap-2 font-mono text-xs text-text-muted">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* What I Learned */}
          <section>
            <h4 className="font-mono text-xs text-accent uppercase tracking-wider mb-1 flex items-center gap-1.5 font-semibold">
              <span>04.</span>
              <span>What I Learned</span>
            </h4>
            <p className="leading-relaxed text-text/90 font-mono text-xs bg-surface-2 p-3 rounded-lg border border-border">
              {caseStudy.whatILearned}
            </p>
          </section>

          {/* What's Next */}
          <section>
            <h4 className="font-mono text-xs text-accent uppercase tracking-wider mb-1 flex items-center gap-1.5 font-semibold">
              <span>05.</span>
              <span>What's Next</span>
            </h4>
            <p className="leading-relaxed text-text/90 font-mono text-xs bg-surface-2 p-3 rounded-lg border border-border">
              {caseStudy.whatsNext}
            </p>
          </section>
        </div>

        {/* Footer Actions */}
        <div className="pt-4 border-t border-border flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap items-center gap-2.5">
            <PlaceholderLink
              href={project.liveUrl}
              placeholderLabel="Live Demo"
              variant="button-primary"
              ariaLabel={`Open Live Demo for ${project.title}`}
            >
              Live Demo
            </PlaceholderLink>

            <PlaceholderLink
              href={project.repoUrl}
              placeholderLabel="Repository"
              variant="button-secondary"
              ariaLabel={`Open GitHub Repository for ${project.title}`}
            >
              Repository
            </PlaceholderLink>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="font-mono text-xs text-text-dim hover:text-text transition-colors"
          >
            Esc to close
          </button>
        </div>
      </div>
    </div>
  )
}
