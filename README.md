# Dr. Maya Reynolds, PsyD — Practice Website

> **Grow My Therapy — Stage 2 Practical Assignment**  
> Responsive clinical psychologist practice website built with **Next.js 16 (App Router)**, **React 19**, and **Tailwind CSS v4**.

---

## 📌 Project Overview

This project was built as part of the **Grow My Therapy** Front-End Developer Internship Selection Process (Stage 2). It accomplishes three core objectives:

1. **Part 1: UI & Layout Replication**: 1:1 structural replication of the layout, spacing, section hierarchy, and responsiveness of the reference template ([Conejo Valley Counseling](https://www.conejovalleycounseling.com/home)).
2. **Part 2: Thematic Redesign & Copywriting**: Complete redesign tailored specifically to **Dr. Maya Reynolds, PsyD**, a licensed clinical psychologist in Santa Monica, CA. All copy, services, audience cards, and clinical modalities are extracted strictly from her professional profile as a single source of truth.
3. **Part 3: Custom "Our Office" Section**: Creation of a brand-new, seamlessly integrated physical practice space section highlighting her Santa Monica location (`123th Street 45 W`), in-person & telehealth session options, and an asymmetric collage of her real office photos.

---

## 🛠️ Tech Stack

- **Framework**: [Next.js 16 (App Router)](https://nextjs.org/)
- **UI Library**: [React 19](https://react.dev/)
- **Language**: [TypeScript 5](https://www.typescriptlang.org/) (Strict Mode)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) with custom `@theme inline` design tokens
- **Typography**: Google Fonts via `next/font/google` (*Fraunces* serif display, *Nunito Sans* body, *Great Vibes* script accent)
- **Icons**: [Lucide React](https://lucide.dev/)
- **SEO & Schema**: OpenGraph, Twitter Cards, dynamic `sitemap.ts`, `robots.ts`, and Schema.org `Psychologist` JSON-LD structured data

---

## 🎨 Design System & Aesthetic Choices

- **Theme Palette ("Warm Ground")**:
  - `Cream (#FAF6EF)`: Warm, calming primary background
  - `Sand (#F1E8D9)`: Subtle secondary background for section transitions
  - `Clay (#B0785A)`: Earthy accent color for script typography and interactive hover states
  - `Espresso (#3B332A)`: Deep, high-contrast readable text
  - `Coffee (#2E2820)`: Dark grounding tone for the quote overlay band and bottom bar
- **Fluid Typography**: Responsive typography using CSS `clamp()` scales for smooth transitions between mobile and desktop viewports.
- **Accessibility**: Semantic HTML5 landmark structure (`header`, `main`, `section`, `article`, `footer`, `address`), ARIA attributes, body scroll locking on mobile menu, and `prefers-reduced-motion` compliance.

---

## 📂 Project Architecture

```text
├── src/
│   ├── app/
│   │   ├── layout.tsx         # Root layout, Google fonts, metadata, JSON-LD schema
│   │   ├── page.tsx           # Page assembly composing all 12 sections
│   │   ├── globals.css        # Tailwind v4 theme tokens and global utility styles
│   │   ├── robots.ts          # Search crawler directives
│   │   └── sitemap.ts         # XML sitemap generator
│   ├── components/
│   │   └── site/              # Modular section components
│   │       ├── header.tsx     # Navigation & responsive mobile drawer
│   │       ├── hero.tsx       # Edge-bleed portrait & hero intro
│   │       ├── intro.tsx      # Practice philosophy with edge-bleed image
│   │       ├── who-i-help.tsx # 3 audience profile cards
│   │       ├── quote-band.tsx # Dark photo overlay band
│   │       ├── expertise.tsx  # 2-column hairline expertise list
│   │       ├── approach.tsx   # "How we'll work together" section
│   │       ├── honoring.tsx   # Left-bleed storytelling section
│   │       ├── specialties.tsx# Sticky-header 3 services section
│   │       ├── office.tsx     # Custom "Our Office" section
│   │       ├── cta-band.tsx   # Appointment CTA band
│   │       └── footer.tsx     # 4-column footer + legal bottom bar
│   └── lib/
│       ├── site.ts            # Single source of truth for practice content
│       └── utils.ts           # Classnames utility (cn)
├── public/images/             # Optimized profile & editorial photography
└── next.config.ts             # Next.js configuration
```

---

## 🚀 Getting Started Locally

### Prerequisites
- Node.js 18.18+ or 20+
- npm, yarn, pnpm, or bun

### Installation
```bash
# 1. Install dependencies
npm install

# 2. Run the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the site.

### Production Build
```bash
# Build the production bundle with full TypeScript and ESLint validation
npm run build

# Start the production server
npm start
```

---

## 📄 License
This repository is developed for evaluation purposes for the Grow My Therapy Stage 2 internship assignment.
