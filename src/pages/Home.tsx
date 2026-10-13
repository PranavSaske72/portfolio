import React from 'react'
import { Nav } from '../components/Nav'
import { Hero } from '../components/Hero'
import { About } from '../components/About'
import { Projects } from '../components/Projects'
import { Skills } from '../components/Skills'
import { Education } from '../components/Education'
import { Experience } from '../components/Experience'
import { Certifications } from '../components/Certifications'
import { Contact } from '../components/Contact'
import { Footer } from '../components/Footer'

export const Home: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-bg text-text selection:bg-accent selection:text-accent-text">
      {/* SVG Film Grain Filter */}
      <svg
        className="film-grain"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
      >
        <filter id="noiseFilter">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.8"
            numOctaves="3"
            stitchTiles="stitch"
          />
          <feColorMatrix
            type="matrix"
            values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 0.04 0"
          />
        </filter>
        <rect width="100%" height="100%" filter="url(#noiseFilter)" />
      </svg>

      {/* Navigation */}
      <Nav />

      {/* Main semantic landmark */}
      <main id="main-content" tabIndex={-1} className="outline-none">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Education />
        <Experience />
        <Certifications />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}
