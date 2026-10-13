import React from 'react'
import { portfolioContent } from '../data/content'
import { SectionHeading } from './SectionHeading'
import { CodechefIcon } from './SocialIcons'
import { Code, Terminal, Sparkles, Cpu, ExternalLink, CheckCircle } from 'lucide-react'

export const Skills: React.FC = () => {
  const { contact, currentlyLearning } = portfolioContent

  const skillGroups = [
    {
      id: 'programming',
      title: 'Programming',
      icon: <Code className="w-4 h-4 text-accent" />,
      skills: [
        { name: 'C', level: 'Intermediate, learning' },
        { name: 'Python', level: 'Working knowledge' },
        { name: 'Java', level: 'Working knowledge' },
        { name: 'C++', level: 'Foundational' },
        { name: 'C#', level: 'Foundational' },
      ],
    },
    {
      id: 'tools',
      title: 'Development Tools',
      icon: <Terminal className="w-4 h-4 text-accent" />,
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
      icon: <Sparkles className="w-4 h-4 text-accent" />,
      skills: [
        { name: 'AI Applications', level: 'Exploring & building' },
        { name: 'Streamlit', level: 'Working knowledge' },
        { name: 'HTML & CSS', level: 'Comfortable' },
      ],
    },
    {
      id: 'hardware',
      title: 'Hardware & Electronics',
      icon: <Cpu className="w-4 h-4 text-accent" />,
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
      className="py-10 sm:py-12 border-b border-border relative"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeading
          index="02"
          subtitle="SKILLS"
          title="Technical Skills"
          id="skills-heading"
        />

        {/* 4 Skill Groups in 2x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
          {skillGroups.map((group, idx) => (
            <div key={group.id} className="editorial-card p-5 h-full flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-2.5 mb-3 border-b border-border">
                  <div className="flex items-center gap-2">
                    {group.icon}
                    <h3 className="font-mono text-xs uppercase tracking-wider text-text font-semibold">
                      {group.title}
                    </h3>
                  </div>
                  <span className="font-mono text-[10px] text-text-dim">
                    0{idx + 1}
                  </span>
                </div>

                <div className="space-y-1.5">
                  {group.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="flex items-center justify-between py-1.5 px-2.5 rounded-lg bg-surface-2 border border-border"
                    >
                      <span className="text-xs font-medium text-text">
                        {skill.name}
                      </span>
                      <span className="font-mono text-[11px] text-text-muted px-2 py-0.5 rounded bg-surface border border-border">
                        {skill.level}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CodeChef Verified Credentials Banner */}
        {contact.codechef && (
          <div className="editorial-card p-4 sm:p-5 mb-4">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-surface-2 border border-border flex items-center justify-center text-accent shrink-0">
                  <CodechefIcon className="w-4 h-4" />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-0.5">
                    <span className="font-mono text-xs text-text font-semibold">
                      CodeChef Verified Certifications
                    </span>
                    <span className="font-mono text-[11px] text-text-dim">
                      @rcpit251108051
                    </span>
                  </div>
                  <p className="text-xs text-text-muted">
                    Completed tracks in C Programming, OOPS through Java, and C#.
                  </p>
                </div>
              </div>

              <a
                href={contact.codechef}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary shrink-0 text-xs py-1.5 px-3"
              >
                <CodechefIcon className="w-3.5 h-3.5" />
                <span>Verify Profile</span>
                <ExternalLink className="w-3 h-3 text-text-dim" />
              </a>
            </div>
          </div>
        )}

        {/* Active Focus */}
        <div className="p-3.5 rounded-lg bg-surface-2 border border-border flex items-center gap-2.5 text-xs font-mono">
          <CheckCircle className="w-3.5 h-3.5 text-accent shrink-0" />
          <div className="text-text-muted">
            <span className="text-text font-semibold uppercase tracking-wider mr-2">
              Focus:
            </span>
            <span>{currentlyLearning}</span>
          </div>
        </div>
      </div>
    </section>
  )
}
