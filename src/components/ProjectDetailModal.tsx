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

    // Focus close button on mount
    closeButtonRef.current?.focus()

    // Lock body scroll
    const originalOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    // Escape listener and focus trapping
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
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-bg/80 backdrop-blur-md overflow-y-auto"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose()
      }}
    >
      <div
        ref={modalRef}
        className="blueprint-card corner-ticks w-full max-w-3xl rounded-xl border border-border-strong bg-surface p-6 sm:p-8 md:p-10 shadow-2xl relative max-h-[90vh] overflow-y-auto"
      >
        {/* Header bar */}
        <div className="flex items-start justify-between pb-6 border-b border-border gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2 font-mono text-xs text-accent">
              <span>CASE STUDY // {project.index}</span>
            </div>
            <h3
              id={`case-study-title-${project.id}`}
              className="font-serif text-2xl sm:text-3xl text-text font-normal"
            >
              {project.title}
            </h3>
            <p className="text-sm text-text-muted mt-1">{project.tagline}</p>
          </div>

          <button
            ref={closeButtonRef}
            type="button"
            onClick={onClose}
            aria-label="Close case study dialog"
            className="w-9 h-9 rounded-full border border-border bg-surface-2 hover:bg-surface flex items-center justify-center text-text hover:text-accent transition-colors shrink-0"
          >
            <X className="w-4 h-4" aria-hidden="true" />
          </button>
        </div>

        {/* Tech stack chips */}
        <div className="py-4 border-b border-border flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 rounded bg-surface-2 border border-border text-xs font-mono text-text-muted"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Content sections */}
        <div className="py-6 space-y-6 text-sm text-text-muted">
          {/* Problem */}
          <section>
            <h4 className="font-mono text-xs text-accent uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <span>01.</span>
              <span>The Problem</span>
            </h4>
            <p className="leading-relaxed text-text/90">{caseStudy.problemDetail}</p>
          </section>

          {/* Approach */}
          <section>
            <h4 className="font-mono text-xs text-accent uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <span>02.</span>
              <span>Engineering Approach</span>
            </h4>
            <p className="leading-relaxed text-text/90">{caseStudy.approach}</p>
          </section>

          {/* What I Built */}
          <section>
            <h4 className="font-mono text-xs text-accent uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <span>03.</span>
              <span>What I Built</span>
            </h4>
            <p className="leading-relaxed text-text/90">{caseStudy.whatIBuilt}</p>
          </section>

          {/* Planned Features (if present, e.g. for AI Study Buddy) */}
          {caseStudy.plannedFeatures && caseStudy.plannedFeatures.length > 0 && (
            <section className="p-4 rounded-lg bg-surface-2/60 border border-border">
              <h4 className="font-mono text-xs text-text uppercase tracking-wider mb-2 flex items-center gap-1.5 font-medium">
                <AlertCircle className="w-3.5 h-3.5 text-accent" aria-hidden="true" />
                <span>Planned / To Confirm Features</span>
              </h4>
              <p className="text-xs text-text-dim mb-3">
                Verified fact: built with Python and Streamlit to assist with studying.
                The following features are under active planning:
              </p>
              <div className="space-y-1.5">
                {caseStudy.plannedFeatures.map((feat, idx) => (
                  <div key={idx} className="flex items-center gap-2 font-mono text-xs text-text-muted">
                    <span className="w-1.5 h-1.5 rounded-full bg-border-strong" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* What I Learned */}
          <section>
            <h4 className="font-mono text-xs text-accent uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <span>04.</span>
              <span>What I Learned</span>
            </h4>
            <div className="p-3.5 rounded bg-surface-2 border border-dashed border-border-strong">
              <p className="leading-relaxed text-text/90 font-mono text-xs">
                {caseStudy.whatILearned}
              </p>
              <span className="text-[10px] text-text-dim block mt-1 font-sans">
                Editable placeholder in src/data/content.ts
              </span>
            </div>
          </section>

          {/* What's Next */}
          <section>
            <h4 className="font-mono text-xs text-accent uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <span>05.</span>
              <span>What's Next</span>
            </h4>
            <div className="p-3.5 rounded bg-surface-2 border border-dashed border-border-strong">
              <p className="leading-relaxed text-text/90 font-mono text-xs">
                {caseStudy.whatsNext}
              </p>
              <span className="text-[10px] text-text-dim block mt-1 font-sans">
                Editable placeholder in src/data/content.ts
              </span>
            </div>
          </section>
        </div>

        {/* Footer Actions */}
        <div className="pt-6 border-t border-border flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-3">
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
