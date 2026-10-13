export type SkillProficiency =
  | 'Beginner'
  | 'Learning'
  | 'Working knowledge'
  | 'Comfortable'
  | 'Exploring and building'
  | 'Hands-on, project-level'
  | 'Foundational'
  | 'Project-level'
  | string

export interface SkillItem {
  name: string
  level: SkillProficiency
  isPlaceholder?: boolean
  note?: string
}

export interface SkillCategory {
  id: string
  name: string
  description?: string
  skills: SkillItem[]
}

export interface ProjectCaseStudy {
  problemDetail: string
  approach: string
  whatIBuilt: string
  whatILearned: string
  whatsNext: string
  plannedFeatures?: string[]
}

export interface Project {
  id: string
  index: string
  title: string
  tagline: string
  problem: string
  solution: string
  techStack: string[]
  contribution: string
  liveUrl: string
  repoUrl: string
  caseStudy: ProjectCaseStudy
}

export interface Language {
  name: string
  proficiency: 'Native' | 'Fluent' | 'Proficient' | 'Learning'
}

export interface ExperienceItem {
  organization: string
  role: string
  duration: string
  location: string
  points: string[]
  reflection: string
}

export interface EducationTimelineEntry {
  degree: string
  institution: string
  period: string
  score: string
  scoreLabel: string
}

export interface EducationItem {
  degree: string
  institution: string
  location: string
  period: string
  sgpa: string
  sgpaLabel: string
  cgpa?: string
  details?: string
  timeline?: EducationTimelineEntry[]
}

export interface CertificationItem {
  title: string
  issuer: string
  date?: string
  credentialUrl?: string
  organizationType: string
}

export interface AchievementItem {
  title: string
  event: string
  role: string
}

export interface ProfileData {
  firstName: string
  middleName?: string
  surname: string
  fullName: string
  role: string
  college: string
  expectedGraduation: string
  academicHeadline: string
  languages: Language[]
  availability: string
  heroHeadline: {
    line1: string
    line2Prefix: string
    accentWord: string
  }
  heroIntro: string
  meta: {
    location: string
    classYear: string
    academicRecord: string
  }
  aboutBio: string
  pullQuote: string
  currentlyLearning: string
  skills: SkillCategory[]
  skillsLegend: { label: string; description: string }[]
  projects: Project[]
  moreProjectsNote: string
  education: EducationItem
  experience: ExperienceItem[]
  certifications: CertificationItem[]
  achievements?: AchievementItem[]
  contact: {
    email: string
    phone?: string
    github: string
    linkedin: string
    codechef?: string
    resumeUrl: string
    profilePhoto: string
    siteUrl: string
    address?: string
  }
}
