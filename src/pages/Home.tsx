import React from 'react'
import { Nav } from '../components/Nav'
import { Hero } from '../components/Hero'
import { Projects } from '../components/Projects'
import { About } from '../components/About'
import { Skills } from '../components/Skills'
import { Contact } from '../components/Contact'
import { Footer } from '../components/Footer'

export const Home: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-white dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100 selection:bg-lime-400 selection:text-neutral-950 overflow-x-hidden">
      {/* Navigation */}
      <Nav />

      {/* Main Content Landmark with High-Contrast Editorial Sections */}
      <main id="main-content" tabIndex={-1} className="outline-none relative z-10">
        {/* 1. Hero Section (White background, central vibrant lime glow aura, centered photo, floating pills) */}
        <Hero />

        {/* 2. Selected Works (Contrasting Full-Colour Vibrant Lime Showcase Container from reference) */}
        <Projects />

        {/* 3. Philosophy & Process ("Hello!" statement + "Here's how it works" 01/02/03 process + Academics) */}
        <About />

        {/* 4. Technical Toolkit (Skills matrix & CodeChef verified credentials) */}
        <Skills />

        {/* 5. Contact (Contrasting Deep Dark Anchor Container with direct email, resume download, and phone) */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}
