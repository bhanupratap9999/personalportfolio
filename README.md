# Bhanu Pratap Singh — Personal Portfolio Website

[![Live Demo](https://img.shields.io/badge/Live_Site-personalportfolio--mz1h.vercel.app-7928CA?style=for-the-badge&logo=vercel&logoColor=white)](https://personalportfolio-mz1h.vercel.app)
[![GitHub Repo](https://img.shields.io/badge/GitHub-personalportfolio-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/bhanupratap9999/personalportfolio)

> A high-end, 2026 design-award caliber personal portfolio for a Full-Stack Developer & GenAI Engineer. Built with **Next.js 15 (App Router)**, **TypeScript**, **Tailwind CSS v4**, and **Framer Motion**.

🔗 **Live Production URL**: [https://personalportfolio-mz1h.vercel.app](https://personalportfolio-mz1h.vercel.app)

---

## 🌟 Highlights & Key Features

- **Dark-Mode-First with Theme Toggle**: Precision contrast ratio with subtle aurora background mesh (violet, indigo, cyan) and delicate grain/noise overlay.
- **Micro-Interactions & 2026 Aesthetics**:
  - **Custom Cursor Glow**: Smooth spring physics spotlight that illuminates bento cards on hover.
  - **Lenis Smooth Scroll**: Butter-smooth inertial scrolling with automatic `prefers-reduced-motion` detection.
  - **Command Palette (`Ctrl+K` / `Cmd+K`)**: Instant keyboard navigation, quick search, copy email/phone, download resume, and trigger confetti.
  - **Konami Code Easter Egg (`↑ ↑ ↓ ↓ ← → ← → B A`)**: Full-screen canvas confetti celebrating engineering mastery.
  - **Preloader**: Rapid, futuristic intro loader (< 1.2s) that counts up system initialization assets.
  - **Interactive Codebase & System Architecture Mockups**:
    - **DevPilot**: Live simulated RAG query, PGVector similarity matching (`0.94`), and Server-Sent Events (SSE) token streaming preview.
    - **Placify**: Dynamic role-based JWT authenticated application tracker.
    - **Smart Price Tracker**: 30-day interactive price drop chart with automated Firecrawl AI scraper status.
- **High-Performance & Accessible**: Mobile-first responsive layout, semantic HTML, WCAG AA compliant contrast, dynamic Edge OpenGraph image generation, and SEO meta tags.

---

## 🛠️ Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router, Server & Client Components)
- **Language**: [TypeScript 5](https://www.typescriptlang.org/) (Strict typing throughout)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) (`@tailwindcss/postcss`)
- **Animations**: [Framer Motion 12](https://motion.dev/)
- **Smooth Scroll**: [Lenis](https://lenis.darkroom.engineering/)
- **Icons**: Custom optimized SVG vectors & [Lucide Icons](https://lucide.dev/)
- **Confetti**: [Canvas-Confetti](https://www.npmjs.com/package/canvas-confetti)
- **Deployment**: [Vercel](https://vercel.com/) (Zero-configuration deployment)

---

## 📂 Project Structure

```text
portfolio/
├── public/
│   └── resume.pdf                 # Placeholder PDF (replace with your official resume)
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   └── contact/
│   │   │       └── route.ts       # Contact form endpoint (Resend integration ready)
│   │   ├── globals.css            # Tailwind v4 theme, aurora mesh, noise overlay
│   │   ├── icon.tsx               # Dynamic favicons via ImageResponse
│   │   ├── layout.tsx             # Root layout, Google Fonts, SEO metadata
│   │   ├── opengraph-image.tsx    # Dynamic edge Open Graph social preview (1200x630)
│   │   └── page.tsx               # Main portfolio landing page
│   ├── components/
│   │   ├── About.tsx              # Bento stats with animated count-up numbers
│   │   ├── AuroraBackground.tsx   # Soft floating gradient mesh
│   │   ├── Certifications.tsx     # Oracle, MongoDB, NPTEL badge cards
│   │   ├── CommandPalette.tsx     # Cmd+K quick navigation modal
│   │   ├── Contact.tsx            # Contact form, click-to-copy email/phone
│   │   ├── CursorGlow.tsx         # Cursor spotlight glow
│   │   ├── Footer.tsx             # Back-to-top button & attribution
│   │   ├── Hero.tsx               # Typewriter taglines, CTAs, interactive code card
│   │   ├── Icons.tsx              # Crisp SVG icons for GitHub, LinkedIn, etc.
│   │   ├── KonamiEasterEgg.tsx    # Konami code listener & confetti blast
│   │   ├── LenisProvider.tsx      # Inertial smooth scrolling
│   │   ├── Navbar.tsx             # Sticky floating pill nav with active spy
│   │   ├── Preloader.tsx          # Fast intro splash loader
│   │   ├── Projects.tsx           # Featured cards with filter & mock previews
│   │   ├── Skills.tsx             # Interactive tech categories & infinite marquee
│   │   ├── ThemeToggle.tsx        # Dark/light mode switcher
│   │   └── Timeline.tsx           # Vertical milestone timeline
│   ├── data/
│   │   └── portfolioData.ts       # Central source of truth for all content
│   ├── lib/
│   │   └── utils.ts               # Class merge utility (clsx + tailwind-merge)
│   └── types/
│       └── index.ts               # TypeScript data interfaces
├── next.config.mjs
├── package.json
├── postcss.config.mjs
├── tsconfig.json
└── README.md
```

---

## 🚀 Getting Started

### 1. Install Dependencies
```bash
npm install
# or
pnpm install
```

### 2. Run the Development Server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Build for Production
```bash
npm run build
npm start
```

---

## ⚙️ Customization & Environment Variables

All portfolio information is structured inside `src/data/portfolioData.ts`. You can quickly adjust:
- **Personal Details**: Name, email, phone, location, LinkedIn, GitHub.
- **Projects**: Replace the placeholder `liveUrl` and `githubUrl` with your actual repositories and deployment URLs.
- **Resume**: Replace `public/resume.pdf` with your actual compiled resume PDF.

### Contact Form (Resend Integration)
The contact form works immediately out-of-the-box in development mode (logging messages to the server console).

To send real emails to your personal inbox:
1. Create a free account at [Resend](https://resend.com).
2. Generate an API Key.
3. Create a `.env.local` file:
   ```env
   RESEND_API_KEY=re_123456789...
   ```
4. When deployed to Vercel, add `RESEND_API_KEY` to your Vercel Project Environment Variables.

---

## ☁️ Deploying to Vercel

### Option 1: Vercel Web Dashboard (Recommended)
1. Push this repository to GitHub:
   ```bash
   git init
   git add .
   git commit -m "feat: initial commit of modern portfolio"
   git branch -M main
   git remote add origin https://github.com/bhanupratap9999/portfolio.git
   git push -u origin main
   ```
2. Log into [vercel.com](https://vercel.com).
3. Click **"Add New..."** -> **"Project"**.
4. Select your `portfolio` repository and click **Deploy**. Vercel will automatically detect Next.js 15.

### Option 2: Vercel CLI
```bash
npm i -g vercel
vercel
```

---

## 🎮 Easter Eggs & Shortcuts
- Press `Ctrl + K` or `Cmd + K` anywhere on the site to open the **Command Palette**.
- Enter the Konami Code: `↑ ↑ ↓ ↓ ← → ← → B A` on your keyboard to unlock the secret confetti celebration!

