# Pranav Saske — Personal Engineering Portfolio

A production-quality personal portfolio website engineered for **Pranav Mohan Saske**, a B.Tech Artificial Intelligence & Data Science student at R. C. Patel Institute of Technology, Shirpur.

Designed around the **"Quiet Precision"** aesthetic: an editorial blueprint-meets-magazine layout with clean tokenized styling, interactive 2D Canvas wireframe physics, fluid typography, honest proficiency self-assessment, and accessible case studies.

---

## 🛠 Tech Stack & Architecture

- **Framework**: [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/) (Strict mode, `verbatimModuleSyntax`)
- **Build Tool**: [Vite 8](https://vite.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) with tokenized CSS custom properties (`--bg`, `--surface`, `--accent`, `--border`, etc.)
- **Typography**: Self-hosted / preconnected Google Fonts:
  - *Display*: `Instrument Serif` (Editorial serif headlines)
  - *Body / UI*: `Inter` (Clean geometric sans)
  - *Code & Metadata*: `JetBrains Mono` (Blueprint labels, metrics, indices)
- **Interactive Visual**: Custom 2D Canvas rotating icosahedron wireframe with perspective projection, pointer-responsive tilt, RAF pausing when tab hidden or off-screen, and `@media (prefers-reduced-motion)` static fallback.
- **Routing**: `react-router-dom` for in-page anchors and dedicated 404 blueprint error page with SPA fallback support.
- **Single Source of Truth**: All profile facts, projects, skills, education, and links are managed in a single typed file: `src/data/content.ts`.

---

## 🚀 Running Locally

Ensure [Node.js](https://nodejs.org/) (v18+) is installed.

```bash
# 1. Install dependencies
npm install

# 2. Run local development server
npm run dev

# 3. Production build
npm run build

# 4. Preview production build locally
npm run preview
```

The local development server runs at `http://localhost:5173`.

---

## 📋 Content & Placeholder Configuration

All data lives in [`src/data/content.ts`](src/data/content.ts). Any link containing `[[...]]` or left empty automatically renders as a disabled-looking button with an accessible `"Link coming soon"` label (never navigating to `#` or dead routes). Once a valid URL or string is supplied, it automatically transforms into a live external link.

### Editable Placeholders Reference

| Identifier | Current Value / State | Description | File Location |
| :--- | :--- | :--- | :--- |
| `[[SITE_URL]]` | Placeholder | Production canonical domain (e.g. `https://pranavsaske.dev`) | `src/data/content.ts`, `index.html` |
| `[[PROJECT_1_LINK]]` | Placeholder | Live deployed demo URL for Smart Irrigation System | `src/data/content.ts` |
| `[[PROJECT_2_LINK]]` | Placeholder | Live hosted demo URL for AI Learning Assistant | `src/data/content.ts` |
| `[[CERTIFICATE_TITLE]]` | Placeholder | Exact title of IIC certification | `src/data/content.ts` |
| `[[ISSUING_ORGANIZATION]]` | Placeholder | Exact issuing body of IIC certificate | `src/data/content.ts` |
| `[[ISSUE_DATE]]` | Placeholder | Date certificate was awarded | `src/data/content.ts` |
| `[[CREDENTIAL_URL]]` | Placeholder | Verification URL for IIC certificate | `src/data/content.ts` |

### Verified Profile Details (Already Populated from Resume)

- **Name**: Pranav Mohan Saske
- **Degree**: B.Tech in Artificial Intelligence & Data Science (2025 – 2029)
- **College**: R. C. Patel Institute of Technology, Shirpur (Maharashtra, India)
- **Academic Scores**: First-Semester SGPA **9.35** • CGPA **8.35 / 10** • SSC **88%** • HSC **60%**
- **Email**: `pranavsaske72@gmail.com` (Functional `mailto:` buttons and one-click copy with Clipboard API)
- **Phone**: `+91 8080666013`
- **GitHub**: `https://github.com/PranavSaske72`
- **LinkedIn**: `https://www.linkedin.com/in/pranav-saske`
- **Photo**: Extracted directly from resume to `public/pranav-photo.jpg`
- **Resume**: Available at `public/resume.jpg`
- **Certifications**: CodeChef (C, Java OOPS, C#), TCS iON (Communication), College Club (Web Dev Bootcamp)
- **Hackathons**: CodeCraze 3.0 (24h Hackathon), Dataverse, Converges'26 (MarvelX, Brain Charge 2.0, Reflection 26)

---

## 🚢 Deployment Guide

### Option 1: Vercel (Recommended)
1. Push your repository to GitHub.
2. Import the repository in [Vercel](https://vercel.com).
3. Framework preset: **Vite**.
4. Build command: `npm run build`.
5. Output directory: `dist`.
6. Deploy! Vercel handles SPA routing automatically.

### Option 2: Netlify
1. Create a `public/_redirects` file with the following content (or it will use `public/404.html`):
   ```
   /*    /index.html   200
   ```
2. Build command: `npm run build`.
3. Publish directory: `dist`.

### Option 3: GitHub Pages
1. The project already includes `public/404.html` and SPA redirect restoration in `src/App.tsx`.
2. In `vite.config.ts`, if deploying to `https://<username>.github.io/<repo-name>/`, set the base path:
   ```ts
   export default defineConfig({
     base: '/<repo-name>/',
     // ...
   })
   ```
3. Run `npm run build` and deploy the contents of `dist` to your `gh-pages` branch.

---

## ⚖️ Design & Engineering Justifications

- **No Vanity Stats**: No percentage loading bars or star ratings for skills. Uses honest capability chips (`Beginner`, `Working knowledge`, `Comfortable`, `Hands-on`).
- **Original CSS/SVG Visuals**: Both project case study covers are built with custom SVG schematics (ESP32 signal path with soil probe & pulse animation, and an AI Study Buddy reactive interface mockup).
- **Reduced Motion Support**: Fully honors `@media (prefers-reduced-motion: reduce)` by disabling canvas rotation, pulsing animations, and smooth scroll transitions.
- **WCAG AA Compliance**: High-contrast color tokens (electric lime `#C6F432` on dark `#0B0B0C` provides ~13:1 contrast; text muted `#A1A1A6` on dark background provides ~6.8:1 contrast).
- **Light Theme Support**: Carefully tuned warm off-white `#F4F3EE` palette with high-contrast forest olive accent (`#3E6B00`) passing WCAG AA standards.
