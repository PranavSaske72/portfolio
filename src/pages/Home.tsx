import React from 'react'
import { Nav } from '../components/Nav'
import { Hero } from '../components/Hero'
import { About } from '../components/About'
import { Skills } from '../components/Skills'
import { Projects } from '../components/Projects'
import { Contact } from '../components/Contact'
import { Footer } from '../components/Footer'

export const Home: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-bg text-text selection:bg-accent selection:text-white overflow-x-hidden">
      {/* Navigation */}
      <Nav />

      {/* Main Landmark with 5 Compact Human-Designed Sections */}
      <main id="main-content" tabIndex={-1} className="outline-none relative z-10">
        {/* A. Hero Section */}
        <Hero />

        {/* B. About Me & Academics */}
        <About />

        {/* C. Skills & CodeChef */}
        <Skills />

        {/* D. Featured Projects */}
        <Projects />

        {/* E. Contact & Connect */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}
