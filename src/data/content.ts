import type { ProfileData } from '../types/content'

/**
 * Utility function to determine if a string contains an unreplaced placeholder
 * Pattern matches [[PLACEHOLDER]] or empty/whitespace-only values.
 */
export function isPlaceholder(val: string | null | undefined): boolean {
  if (!val) return true
  const trimmed = val.trim()
  if (trimmed === '') return true
  return trimmed.includes('[[') && trimmed.includes(']]')
}

/**
 * Clean placeholder label for display if a string has [[PLACEHOLDER]]
 */
export function getPlaceholderLabel(val: string | null | undefined, fallback = 'Add value'): string {
  if (!val) return fallback
  const match = val.match(/\[\[(.*?)\]\]/)
  if (match && match[1]) {
    return match[1].replace(/_/g, ' ').toLowerCase()
  }
  return fallback
}

/**
 * SINGLE SOURCE OF TRUTH: All portfolio profile content, verified facts from resume,
 * and clearly marked editable placeholders.
 */
export const portfolioContent: ProfileData = {
  firstName: 'Pranav',
  middleName: 'Mohan',
  surname: 'Saske',
  fullName: 'Pranav Mohan Saske',
  role: 'B.Tech AI & Data Science student, aspiring software developer, creative problem solver',
  college: 'R. C. Patel Institute of Technology, Shirpur',
  expectedGraduation: '2029',
  academicHeadline: 'Semester 1 SGPA: 8.35 • CGPA: 7.45/10',

  languages: [
    { name: 'Marathi', proficiency: 'Native' },
    { name: 'Hindi', proficiency: 'Fluent' },
    { name: 'English', proficiency: 'Proficient' },
  ],

  availability: 'Open to internships, hackathons & AI collaborations',

  heroHeadline: {
    line1: 'Pranav Saske',
    line2Prefix: 'Aspiring to Build a Smarter Tomorrow with',
    accentWord: 'AI.',
  },

  heroIntro:
    'Artificial Intelligence and Data Science student at R. C. Patel Institute of Technology (Class of 2029) engineering web applications, AI-assisted tools, and ESP32 hardware systems while learning in public.',

  meta: {
    location: 'Shirpur, Maharashtra, India',
    classYear: 'Class of 2029',
    academicRecord: 'SGPA 8.35 (Sem 1) • CGPA 7.45',
  },

  aboutBio:
    'I am an enthusiastic engineering student pursuing B.Tech in Artificial Intelligence and Data Science at R. C. Patel Institute of Technology. Driven by practical curiosity, I bridge the physical and digital worlds—connecting microcontrollers with software, exploring AI-powered applications, and streamlining workflows through automation. I am currently strengthening my core problem-solving fundamentals in C, Python, Java, and C++, building towards high-impact software development and intelligent systems. I believe in continuous learning, open collaboration, and building solutions that solve real problems.',

  pullQuote:
    'Aspiring to build a smarter tomorrow at the intersection of Artificial Intelligence, clean software, and circuits.',

  currentlyLearning:
    'Deepening data structures in C, object-oriented design in Java and C#, and exploring practical LLM integration workflows.',

  skills: [
    {
      id: 'programming',
      name: 'Programming Languages',
      description: 'Foundational languages for computational problem solving and software architecture',
      skills: [
        { name: 'C', level: 'Intermediate, learning' },
        { name: 'Python', level: 'Working knowledge' },
        { name: 'Java', level: 'Working knowledge (OOPS certified)' },
        { name: 'C++', level: 'Foundational / Learning' },
        { name: 'C#', level: 'Foundational / Learning' },
      ],
    },
    {
      id: 'web-development',
      name: 'Web Technologies',
      description: 'Building responsive interfaces and interactive application frontends',
      skills: [
        { name: 'HTML', level: 'Comfortable' },
        { name: 'CSS', level: 'Comfortable' },
        { name: 'Streamlit', level: 'Working knowledge' },
      ],
    },
    {
      id: 'ai-tools',
      name: 'AI & Developer Tools',
      description: 'Intelligent tooling, version control, and productivity environments',
      skills: [
        { name: 'AI-powered applications', level: 'Exploring and building' },
        { name: 'Automation', level: 'Learning' },
        { name: 'GitHub', level: 'Working knowledge' },
        { name: 'VS Code', level: 'Comfortable' },
        { name: 'Canva', level: 'Comfortable' },
      ],
    },
    {
      id: 'hardware-iot',
      name: 'Hardware, IoT & Game Dev',
      description: 'Microcontroller prototyping, physical signal sensing, and 2D mechanics',
      skills: [
        { name: 'ESP32', level: 'Hands-on, project-level' },
        { name: 'Basic electronics', level: 'Foundational' },
        { name: 'Sensor interfacing', level: 'Project-level' },
        { name: 'Unity (2D Game Dev)', level: 'Beginner' },
      ],
    },
  ],

  skillsLegend: [
    { label: 'Beginner', description: 'Early stage; grasping syntax and core paradigms.' },
    { label: 'Learning / Foundational', description: 'Actively studying through hands-on coursework and experiments.' },
    { label: 'Working knowledge', description: 'Can build functional, standalone utilities and applications.' },
    { label: 'Comfortable', description: 'Fluent with core specifications, layout models, and styling.' },
    { label: 'Exploring and building', description: 'Actively testing real-world prototypes and architectures.' },
    { label: 'Hands-on / Project-level', description: 'Tested in bench hardware setups and functional firmware.' },
  ],

  projects: [
    {
      id: 'smart-irrigation',
      index: '01',
      title: 'Smart Irrigation System',
      tagline: 'Automated soil-moisture sensing and sensor-triggered watering',
      problem:
        'Manual watering wastes water through over-irrigation and depends completely on human vigilance to monitor soil conditions.',
      solution:
        'An ESP32 reads analog soil-moisture sensor levels in real time and automatically triggers watering when moisture dips below a configured threshold, aimed at efficient water use.',
      techStack: [
        'ESP32',
        'Soil-Moisture Sensor',
        'C/C++ (Firmware)',
        'Relay Actuation',
        'Basic Electronics',
      ],
      contribution: 'Bench circuit wiring, sensor threshold calibration, and ESP32 firmware loop logic.',
      liveUrl: '[[PROJECT_1_LINK]]',
      repoUrl: 'https://github.com/PranavSaske72',
      caseStudy: {
        problemDetail:
          'Manual plant watering often leads to over-watering during humid periods and neglected dry spells during busy days. This wastes water resources and risks plant damage without continuous monitoring.',
        approach:
          'Constructed a low-voltage hardware loop using an analog soil moisture probe inserted into the soil bed. The analog signal is sampled by the ESP32 ADC, filtered for noise, and used to switch an optocoupled relay connected to a water valve.',
        whatIBuilt:
          'Assembled a bench prototype combining an ESP32 development board, capacitive/resistive soil probe, 5V relay channel, and custom C++ control firmware.',
        whatILearned:
          'Analog-to-digital converter noise filtering, hysteresis logic to prevent rapid valve toggling around threshold boundaries, and sensor corrosion management.',
        whatsNext:
          'Integrating low-power deep sleep cycles for extended battery operation and telemetry logging via Wi-Fi.',
      },
    },
    {
      id: 'ai-study-buddy',
      index: '02',
      title: 'AI Learning Assistant WebApp',
      tagline: 'Study-assistance web application built with Python and Streamlit',
      problem:
        'Students need a faster, more interactive way to organise reference materials, generate revision notes, and test retention.',
      solution:
        'A Python and Streamlit web application where students can access study materials, generate concise notes, and practice via revision flashcards, making learning more personalized and efficient.',
      techStack: ['Python', 'Streamlit', 'AI Tooling', 'Web Application'],
      contribution: 'Streamlit UI structure, interactive user prompts, note generation flow, and session state management.',
      liveUrl: '[[PROJECT_2_LINK]]',
      repoUrl: 'https://github.com/PranavSaske72',
      caseStudy: {
        problemDetail:
          'Reviewing dense academic notes and preparing for engineering assessments often leaves students fragmented across multiple reference PDFs and text files without interactive revision feedback.',
        approach:
          'Engineered a lightweight, reactive web interface using Streamlit in Python to deliver a focused study companion interface with straightforward session interaction.',
        whatIBuilt:
          'The functional Streamlit web application frontend and Python logic that assists students during revision sessions with study material access and note creation.',
        whatILearned:
          'Streamlit state management, efficient component rendering, prompt structuring for study notes, and responsive layout widgets.',
        whatsNext:
          'Adaptive spaced-repetition schedules, direct multi-page PDF parsing, and offline quiz caching.',
        plannedFeatures: [
          'Personalized adaptive study schedules',
          'Automated question and quiz generation',
          'Spaced-repetition flashcard practice mode',
        ],
      },
    },
  ],

  moreProjectsNote: 'More projects and hackathon experiments in progress on GitHub.',

  education: {
    degree: 'Bachelor of Technology in Artificial Intelligence and Data Science',
    institution: 'R. C. Patel Institute of Technology, Shirpur',
    location: 'Shirpur, Maharashtra, India',
    period: '2025 – 2029',
    sgpa: '8.35',
    sgpaLabel: 'Semester 1 SGPA',
    cgpa: '7.45 / 10',
    details:
      'Department of Artificial Intelligence & Data Science. Autonomous Institute affiliated with DBATU / KBCNMU. Building foundational algorithms, data structures, and intelligent applications.',
    timeline: [
      {
        degree: 'B.Tech in Artificial Intelligence and Data Science',
        institution: 'R. C. Patel Institute of Technology, Shirpur',
        period: '2025 – 2029',
        score: 'SGPA 8.35 (Sem 1) • CGPA 7.45/10',
        scoreLabel: 'Undergraduate Degree',
      },
      {
        degree: 'Higher Secondary Certificate (HSC)',
        institution: 'Shri Chhatrapati Shivaji Highschool and Junior College, Mhasdi',
        period: '2024 – 2025',
        score: 'Percentage: 60%',
        scoreLabel: 'Junior College',
      },
      {
        degree: 'Secondary School Certificate (SSC)',
        institution: 'Shri C.D.Deore High School, Mhasdi',
        period: '2022 – 2023',
        score: 'Percentage: 88%',
        scoreLabel: 'High School',
      },
    ],
  },

  experience: [
    {
      organization: 'Glitchverse (College Club)',
      role: 'Event Volunteer',
      duration: '3-day Event',
      location: 'R. C. Patel Institute of Technology',
      points: [
        'Crowd management across multi-track event halls and breakout sessions.',
        'Participant matchmaking to help individuals find balanced team partners.',
        'Supporting overall event flow, logistical coordination, and real-time query resolution.',
      ],
      reflection:
        'Serving as an on-ground volunteer reinforced how vital clear interpersonal communication and proactive coordination are when handling fluid, high-energy technical events.',
    },
  ],

  certifications: [
    {
      title: 'Learn C Programming',
      issuer: 'CodeChef',
      date: 'Verified Certificate',
      credentialUrl: 'https://www.codechef.com/users/rcpit251108051',
      organizationType: 'Programming & Logic',
    },
    {
      title: 'OOPS through Java',
      issuer: 'CodeChef',
      date: 'Verified Certificate',
      credentialUrl: 'https://www.codechef.com/users/rcpit251108051',
      organizationType: 'Object-Oriented Programming',
    },
    {
      title: 'Learn C#',
      issuer: 'CodeChef',
      date: 'Verified Certificate',
      credentialUrl: 'https://www.codechef.com/users/rcpit251108051',
      organizationType: 'Software Development',
    },
    {
      title: 'Web Development Bootcamp',
      issuer: 'College Club',
      date: 'Bootcamp Completion',
      organizationType: 'Web Technologies',
    },
    {
      title: 'Communication Skills',
      issuer: 'TCS iON',
      date: 'Professional Certification',
      organizationType: 'Professional Skills',
    },
    {
      title: '[[CERTIFICATE_TITLE]]',
      issuer: '[[ISSUING_ORGANIZATION]]',
      date: '[[ISSUE_DATE]]',
      credentialUrl: '[[CREDENTIAL_URL]]',
      organizationType: "Institution's Innovation Council (IIC)",
    },
  ],

  achievements: [
    {
      title: 'CodeCraze 3.0',
      event: '24-Hour Hackathon',
      role: 'Round 1 Participant',
    },
    {
      title: 'From Profile to Project',
      event: 'Dataverse',
      role: 'Active Participant',
    },
    {
      title: 'MarvelX',
      event: "Converges'26",
      role: 'Participant',
    },
    {
      title: 'Brain Charge 2.0',
      event: "Converges'26",
      role: 'Participant',
    },
    {
      title: 'Reflection 26',
      event: "Converges'26",
      role: 'Participant',
    },
  ],

  contact: {
    email: 'pranavsaske72@gmail.com',
    phone: '+91 8080666013',
    github: 'https://github.com/PranavSaske72',
    linkedin: 'https://www.linkedin.com/in/pranav-saske',
    codechef: 'https://www.codechef.com/users/rcpit251108051',
    resumeUrl: '/resume.jpg',
    profilePhoto: '/pranav-photo.jpg',
    siteUrl: '[[SITE_URL]]',
    address: 'Shirpur, Maharashtra, India',
  },
}
