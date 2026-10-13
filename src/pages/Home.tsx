import React, { useState } from 'react'
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
import { Sparkles, Code2, GraduationCap, Award, Mail, LayoutGrid } from 'lucide-react'

export const Home: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'projects' | 'skills' | 'education' | 'certifications' | 'contact'>('all')

  const handleTabChange = (tab: 'all' | 'projects' | 'skills' | 'education' | 'certifications' | 'contact') => {
    setActiveTab(tab)
    if (tab !== 'all') {
      const el = document.getElementById(tab)
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  return (
    <div className="relative min-h-screen bg-bg text-text selection:bg-cyan-400 selection:text-black overflow-x-hidden">
      {/* Ambient Multi-Color Gradient Mesh in Background */}
      <div className="ambient-glow-mesh" aria-hidden="true">
        <div className="orb-1" />
        <div className="orb-2" />
        <div className="orb-3" />
      </div>

      {/* Navigation */}
      <Nav />

      {/* Main semantic landmark */}
      <main id="main-content" tabIndex={-1} className="outline-none relative z-10">
        {/* 1. Hero Section (Photo + Headline + Stats + Quick Links) */}
        <Hero />

        {/* 2. Quick Jump & Category Filter Bar */}
        <div className="sticky top-16 z-30 py-3 bg-bg/80 backdrop-blur-lg border-y border-white/10 shadow-lg">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-1">
              <button
                type="button"
                onClick={() => handleTabChange('all')}
                className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-mono font-medium shrink-0 transition-all ${
                  activeTab === 'all'
                    ? 'btn-gradient-primary text-black'
                    : 'bg-surface-2/80 text-text-muted hover:text-white border border-white/10'
                }`}
              >
                <LayoutGrid className="w-3.5 h-3.5" />
                <span>All Sections</span>
              </button>

              <button
                type="button"
                onClick={() => handleTabChange('projects')}
                className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-mono font-medium shrink-0 transition-all ${
                  activeTab === 'projects'
                    ? 'bg-cyan-400 text-black font-semibold'
                    : 'bg-surface-2/80 text-text-muted hover:text-cyan-400 border border-white/10'
                }`}
              >
                <Code2 className="w-3.5 h-3.5" />
                <span>Projects</span>
              </button>

              <button
                type="button"
                onClick={() => handleTabChange('skills')}
                className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-mono font-medium shrink-0 transition-all ${
                  activeTab === 'skills'
                    ? 'bg-purple-500 text-white font-semibold'
                    : 'bg-surface-2/80 text-text-muted hover:text-purple-400 border border-white/10'
                }`}
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Skills</span>
              </button>

              <button
                type="button"
                onClick={() => handleTabChange('education')}
                className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-mono font-medium shrink-0 transition-all ${
                  activeTab === 'education'
                    ? 'bg-emerald-400 text-black font-semibold'
                    : 'bg-surface-2/80 text-text-muted hover:text-emerald-400 border border-white/10'
                }`}
              >
                <GraduationCap className="w-3.5 h-3.5" />
                <span>Academics</span>
              </button>

              <button
                type="button"
                onClick={() => handleTabChange('certifications')}
                className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-mono font-medium shrink-0 transition-all ${
                  activeTab === 'certifications'
                    ? 'bg-amber-400 text-black font-semibold'
                    : 'bg-surface-2/80 text-text-muted hover:text-amber-400 border border-white/10'
                }`}
              >
                <Award className="w-3.5 h-3.5" />
                <span>CodeChef &amp; Honors</span>
              </button>

              <button
                type="button"
                onClick={() => handleTabChange('contact')}
                className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-mono font-medium shrink-0 transition-all ${
                  activeTab === 'contact'
                    ? 'bg-pink-500 text-white font-semibold'
                    : 'bg-surface-2/80 text-text-muted hover:text-pink-400 border border-white/10'
                }`}
              >
                <Mail className="w-3.5 h-3.5" />
                <span>Contact</span>
              </button>
            </div>
          </div>
        </div>

        {/* 3. Portfolio Sections with Compact Bento Layout */}
        {(activeTab === 'all' || activeTab === 'projects') && <Projects />}
        {(activeTab === 'all' || activeTab === 'skills') && <Skills />}
        {(activeTab === 'all' || activeTab === 'education') && <Education />}
        {(activeTab === 'all' || activeTab === 'certifications') && <Certifications />}
        {(activeTab === 'all' || activeTab === 'skills') && <About />}
        {(activeTab === 'all' || activeTab === 'education') && <Experience />}
        {(activeTab === 'all' || activeTab === 'contact') && <Contact />}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}
