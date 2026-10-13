import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, Compass } from 'lucide-react'

export const NotFound: React.FC = () => {
  return (
    <div className="min-h-screen bg-bg text-text flex flex-col justify-between p-6 sm:p-12 relative overflow-hidden">
      {/* Background blueprint coordinate markings */}
      <div className="font-mono text-xs text-text-dim flex items-center justify-between border-b border-border pb-4">
        <span>ERROR // HTTP 404</span>
        <span>LOCATION: OUT_OF_BOUNDS</span>
      </div>

      <div className="max-w-xl mx-auto text-center py-20">
        <div className="w-16 h-16 rounded-2xl border border-border-strong bg-surface flex items-center justify-center mx-auto mb-6">
          <Compass className="w-8 h-8 text-accent animate-spin motion-reduce:animate-none" />
        </div>

        <span className="font-mono text-xs text-accent uppercase tracking-widest block mb-2">
          Blueprint Boundary Exceeded
        </span>

        <h1 className="font-serif text-5xl sm:text-7xl text-text font-normal mb-4 tracking-tight">
          404 Not Found
        </h1>

        <p className="text-text-muted text-sm sm:text-base leading-relaxed mb-8">
          The requested coordinate does not exist in this portfolio blueprint. The page may have moved or been retired.
        </p>

        <Link
          to="/"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-accent text-accent-text font-mono text-xs font-semibold hover:brightness-110 active:scale-[0.98] transition-all shadow-sm"
        >
          <ArrowLeft className="w-3.5 h-3.5" aria-hidden="true" />
          <span>Return to Blueprint</span>
        </Link>
      </div>

      <div className="font-mono text-xs text-text-dim flex items-center justify-between border-t border-border pt-4">
        <span>PRANAV // PORTFOLIO</span>
        <span>&copy; {new Date().getFullYear()}</span>
      </div>
    </div>
  )
}
