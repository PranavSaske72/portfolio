import React from 'react'
import { portfolioContent } from '../data/content'
import { CodechefIcon } from './SocialIcons'
import { Code, Terminal, Sparkles, Cpu, ExternalLink, CheckCircle } from 'lucide-react'
import { Reveal } from './Reveal'

export const Skills: React.FC = () => {
  const { contact, currentlyLearning } = portfolioContent

  const skillGroups = [
    {
      id: 'programming',
      title: 'Programming',
      icon: <Code className="w-4 h-4 text-lime-600 dark:text-lime-400" />,
      skills: [
        { name: 'C', level: 'Intermediate, learning' },
        { name: 'Python', level: 'Working knowledge' },
        { name: 'Java', level: 'Working knowledge (OOPS)' },
        { name: 'C#', level: 'Foundational' },
      ],
    },
    {
      id: 'tools',
      title: 'Development Tools',
      icon: <Terminal className="w-4 h-4 text-lime-600 dark:text-lime-400" />,
      skills: [
        { name: 'GitHub', level: 'Working knowledge' },
        { name: 'VS Code', level: 'Comfortable' },
        { name: 'Automation', level: 'Learning' },
        { name: 'Canva', level: 'Comfortable' },
      ],
    },
    {
      id: 'ai-tech',
      title: 'AI & Technology',
      icon: <Sparkles className="w-4 h-4 text-lime-600 dark:text-lime-400" />,
      skills: [
        { name: 'AI Applications', level: 'Exploring & building' },
        { name: 'Streamlit', level: 'Working knowledge' },
        { name: 'HTML & CSS', level: 'Comfortable' },
      ],
    },
    {
      id: 'hardware',
      title: 'Hardware & Electronics',
      icon: <Cpu className="w-4 h-4 text-lime-600 dark:text-lime-400" />,
      skills: [
        { name: 'ESP32', level: 'Hands-on, project-level' },
        { name: 'Basic Electronics', level: 'Foundational' },
        { name: 'Sensor Interfacing', level: 'Project-level' },
        { name: 'Unity (2D)', level: 'Beginner' },
      ],
    },
  ]

  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      className="py-12 sm:py-16 bg-neutral-50/80 dark:bg-neutral-900/40 border-b border-black/5 dark:border-white/10"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <Reveal delayMs={50}>
          <div className="text-center mb-10">
            <span className="font-serif italic text-xs tracking-wider text-neutral-500 uppercase block mb-1">
              / Competencies &amp; Toolkit
            </span>
            <h2
              id="skills-heading"
              className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900 dark:text-white"
            >
              Technical Matrix
            </h2>
          </div>
        </Reveal>

        {/* 4 Skill Groups in 2x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
          {skillGroups.map((group, idx) => (
            <Reveal key={group.id} delayMs={idx * 70} className="h-full">
              <div className="card-light rounded-2xl p-6 h-full flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between pb-3 mb-4 border-b border-black/5 dark:border-white/10">
                    <div className="flex items-center gap-2">
                      {group.icon}
                      <h3 className="font-mono text-xs uppercase tracking-wider text-neutral-900 dark:text-white font-bold">
                        {group.title}
                      </h3>
                    </div>
                    <span className="font-mono text-[10px] text-neutral-400">
                      CLUSTER // 0{idx + 1}
                    </span>
                  </div>

                  <div className="space-y-2">
                    {group.skills.map((skill) => (
                      <div
                        key={skill.name}
                        className="flex items-center justify-between py-2 px-3 rounded-xl bg-neutral-50 dark:bg-neutral-800/80 border border-black/5 dark:border-white/5 hover:border-lime-300 dark:hover:border-lime-700 transition-colors"
                      >
                        <span className="text-xs sm:text-sm font-medium text-neutral-900 dark:text-neutral-100">
                          {skill.name}
                        </span>
                        <span className="font-mono text-[11px] text-neutral-600 dark:text-neutral-400 px-2.5 py-0.5 rounded-full bg-white dark:bg-neutral-900 border border-black/5 dark:border-white/10 shadow-2xs">
                          {skill.level}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* CodeChef Verified Credentials Banner */}
        {contact.codechef && (
          <Reveal delayMs={120}>
            <div className="card-light rounded-2xl p-5 sm:p-6 mb-5 border-l-4 border-l-lime-500">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="flex items-center gap-3.5">
                  <div className="w-11 h-11 rounded-xl bg-lime-100 dark:bg-lime-950/60 border border-lime-300 dark:border-lime-700 flex items-center justify-center text-lime-900 dark:text-lime-300 shrink-0">
                    <CodechefIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-0.5">
                      <span className="font-sans text-sm font-bold text-neutral-900 dark:text-white">
                        CodeChef Programming Credentials
                      </span>
                      <span className="font-mono text-[11px] px-2 py-0.5 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400">
                        @rcpit251108051
                      </span>
                    </div>
                    <p className="text-xs text-neutral-600 dark:text-neutral-400">
                      Verified certificates in Learn C Programming, OOPS through Java, and Learn C#.
                    </p>
                  </div>
                </div>

                <a
                  href={contact.codechef}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-dark text-xs py-2 px-4 shrink-0"
                >
                  <CodechefIcon className="w-3.5 h-3.5" />
                  <span>Verify CodeChef Profile</span>
                  <ExternalLink className="w-3.5 h-3.5 opacity-80" />
                </a>
              </div>
            </div>
          </Reveal>
        )}

        {/* Active Focus Callout */}
        <Reveal delayMs={150}>
          <div className="p-4 rounded-xl bg-white dark:bg-neutral-900 border border-black/5 dark:border-white/10 flex items-center gap-3 text-xs font-mono shadow-2xs">
            <CheckCircle className="w-4 h-4 text-lime-600 shrink-0" />
            <div className="text-neutral-600 dark:text-neutral-400">
              <span className="text-neutral-900 dark:text-white font-bold uppercase tracking-wider mr-2">
                Active Focus:
              </span>
              <span>{currentlyLearning}</span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
