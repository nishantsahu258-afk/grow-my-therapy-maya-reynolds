# Dr. Maya Reynolds, PsyD — Practice Website

<div align="center">

![Next.js](https://img.shields.io/badge/Next.js-16.3.4-black?style=for-the-badge&logo=next.js&logoColor=white)
![React](https://img.shields.io/badge/React-19.0.0-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4.0-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Turbopack](https://img.shields.io/badge/Turbopack-Supported-blueviolet?style=for-the-badge&logo=vercel&logoColor=white)
![License](https://img.shields.io/badge/License-Evaluation-amber?style=for-the-badge)

**Grounded therapy for anxiety, trauma, and burnout in Santa Monica, California.**  
*A modern, accessible, and high-performance practice website built for the Grow My Therapy internship selection.*

[Explore Live Demo](#-getting-started-locally) • [Architecture](#-project-architecture) • [Design System](#-design-system--typography) • [SEO & AI Readiness](#-complete-seo--ai-search-suite)

</div>

---

## 📌 Executive Summary

This repository hosts the front-end web experience for **Dr. Maya Reynolds, PsyD**, a licensed clinical psychologist based in Santa Monica, CA. The project was engineered as part of the **Grow My Therapy** Front-End Developer Internship Selection Process (Stage 2) with three core objectives:

1. **1:1 Template Layout Replication**: Precise structural replication of the layout, responsive spacing, section flow, and editorial hierarchy of the reference template ([Conejo Valley Counseling](https://www.conejovalleycounseling.com/home)).
2. **Thematic Redesign & Copywriting**: Complete redesign tailored strictly to Dr. Maya Reynolds, PsyD using her professional profile as a single source of truth. All clinical services, target audiences, treatment modalities, and biographical details reflect her actual clinical scope.
3. **Custom "Our Office" Section**: Seamless integration of a brand-new physical practice section showcasing her Santa Monica office address (`123th Street 45 W`), in-person & telehealth session details, and an asymmetric collage of her authentic office photographs.
4. **Production Cleanliness & Performance**: Pure Next.js 16 + React 19 architecture without unnecessary database overhead or sandbox clutter, resulting in 100% static prerendering and lightning-fast page delivery.
5. **Modern SEO & AI Search Suite**: Comprehensive technical SEO, rich JSON-LD structured data (`Psychologist` + `MedicalBusiness`), and native support for the new `/llms.txt` standard for AI agents (ChatGPT, Perplexity, Claude).

---

## 🌟 Key Features & Sections

| Section | Component | Description |
|---|---|---|
| **Header & Nav** | `header.tsx` | Clean editorial masthead with desktop navigation links and an accessible full-screen animated mobile menu drawer. |
| **Hero Section** | `hero.tsx` | Signature edge-bleed portrait, serif typography with script accent (*"Grounded"*), and warm introduction. |
| **Philosophy Intro** | `intro.tsx` | Warm narrative framing Dr. Maya's collaborative approach alongside an edge-bleed sunlit office image. |
| **Who I Help** | `who-i-help.tsx` | 3 targeted audience profile cards (*Adults*, *High Achievers & Professionals*, *Entrepreneurs & Creatives*). |
| **Quote Overlay Band** | `quote-band.tsx` | Atmospheric dark photo overlay featuring a full-width grounding practice quote. |
| **Clinical Expertise** | `expertise.tsx` | 2-column hairline grid indexing specific conditions (Anxiety, Panic, Trauma, EMDR, Perfectionism, etc.). |
| **Treatment Approach** | `approach.tsx` | *"How we'll work together"* dual-column breakdown of session structure and clinical modalities. |
| **Storytelling & Honoring** | `honoring.tsx` | Left-bleed coastal image paired with copy on processing past experiences and building resilience. |
| **Core Specialties** | `specialties.tsx` | Sticky-header 3-card service showcase covering Anxiety, Trauma/EMDR, and Burnout Counseling. |
| **Our Office (Custom)** | `office.tsx` | Dedicated physical space showcase: Santa Monica address, California telehealth coverage, and an asymmetric 2-photo collage. |
| **Appointment CTA Band** | `cta-band.tsx` | Low-friction consultation invitation with subtle decorative office accents and prominent action button. |
| **Footer & Colophon** | `footer.tsx` | 4-column structured footer with direct links, office hours, California telehealth disclosure, and copyright. |

---

## 🛠️ Technology Stack

- **Framework**: [Next.js 16 (App Router)](https://nextjs.org/) — Turbopack-powered, static prerendering, and optimized server routing.
- **UI Library**: [React 19](https://react.dev/) — Latest concurrent rendering model and modular functional components.
- **Language**: [TypeScript 5](https://www.typescriptlang.org/) — Strict mode enabled across all interfaces and configurations.
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) — Next-generation engine using native CSS `@theme inline` variables.
- **Typography**: Google Fonts via `next/font/google` (zero layout shift, preloaded):
  - **Display Serif**: *Fraunces* (warm, editorial headline typography)
  - **Body Sans**: *Nunito Sans* (clean, highly readable modern grotesque)
  - **Accent Script**: *Great Vibes* (organic script calligraphy for accent words)
- **Icons**: [Lucide React](https://lucide.dev/) — Lightweight SVG icons.
- **Image Optimization**: `next/image` — Automatic WebP/AVIF compression, responsive `sizes`, and priority LCP handling.

---

## 🎨 Design System & Typography

The visual identity is governed by the custom **"Warm Ground"** palette designed specifically for psychological wellness:

```
┌────────────────────────────────────────────────────────────────────────┐
│  #FAF6EF (Cream)    — Primary canvas; soft, soothing background        │
│  #F1E8D9 (Sand)     — Secondary canvas; subtle card & section divider │
│  #B0785A (Clay)     — Warm accent tone; script highlights & badges     │
│  #3B332A (Espresso) — Deep charcoal-brown; high contrast readable text │
│  #2E2820 (Coffee)   — Grounding dark tone; quote bands & bottom bar    │
│  #6F6255 (Bark)     — Mid-tone taupe; secondary metadata & labels      │
│  #E5DCCB (Linen)    — Subtle border borders & divider lines            │
└────────────────────────────────────────────────────────────────────────┘
```

- **Fluid Type Scales**: Headlines dynamically adapt using CSS `clamp()` mathematics for seamless scaling between 320px mobile screens and 4K desktop displays.
- **Accessibility & WCAG Compliance**:
  - Semantic HTML5 landmark structure (`<header>`, `<main>`, `<section>`, `<article>`, `<address>`, `<footer>`).
  - High-contrast color pairings meeting WCAG AA/AAA standards.
  - Body scroll lock during mobile menu interaction.
  - `prefers-reduced-motion` support honoring user OS preferences.

---

## 🔍 Complete SEO & AI Search Suite

This practice website includes a production-grade Search Engine and AI optimization stack:

### 1. Traditional & Local SEO
- **Meta Title**: `Dr. Maya Reynolds, PsyD | Therapy for Anxiety, Trauma & Burnout — Santa Monica, CA` (~60 chars).
- **Meta Description**: Exactly 156 characters optimizing search snippet CTR:
  > *"Dr. Maya Reynolds, PsyD offers warm, evidence-based therapy in Santa Monica, CA. Specializing in anxiety, trauma (EMDR), and burnout. In-person & telehealth."*
- **Curated Keywords**: 24 targeted terms spanning Santa Monica geo-modifiers, clinical terms (EMDR, CBT, panic), and target demographics (adults, creatives, high achievers).
- **Descriptive Image Alt Texts**: Every photograph contains rich contextual alt attributes describing the scene and location for both visually impaired users and image search spiders.

### 2. Rich Structured Data (`Schema.org` JSON-LD `@graph`)
Configured in `layout.tsx` to earn Google Knowledge Panel and Rich Snippet recognition:
- **Entities**:
  - `Psychologist` + `MedicalBusiness` + `LocalBusiness`
  - `Person` (`Dr. Maya Reynolds, PsyD`)
  - `WebSite`
- **Embedded Attributes**: Physical address (`123th Street 45 W, Santa Monica, CA 90401`), exact GeoCoordinates (`34.0195, -118.4912`), telephone, office hours (Mon–Fri 9–6), accepted payment methods, and `hasOfferCatalog` listing specific therapy modalities.

### 3. Open Graph & Social Sharing Cards
- Standard `1200x630` social card preview generated for Facebook, LinkedIn, iMessage, WhatsApp, and Slack.
- Twitter Card set to `summary_large_image` with Dr. Maya's portrait.

### 4. AI Search & Crawler Optimization (`/llms.txt` Standard)
Per the modern [llmstxt.org](https://llmstxt.org) standard adopted by generative AI systems:
- **`/llms.txt`**: Standard summary markdown file for AI crawlers (Perplexity, ChatGPT Search, Claude).
- **`/llms-full.txt`**: Complete long-form clinical profile, FAQs, and office details formatted for zero-hallucination AI ingestion.
- **`robots.txt`**: Explicit permissions granted for `Googlebot`, `Bingbot`, `Applebot`, `GPTBot`, `ClaudeBot`, `PerplexityBot`, and `Google-Extended`.
- **`sitemap.xml`**: Dynamic XML sitemap linking all valid entrypoints.

---

## 📂 Project Architecture

```text
├── docs/                                  # Source assignment specifications & PDF briefs
│   ├── Dr. Maya Reynolds, PsyD.pdf
│   └── Stage 2_ Internship Selection Process _ Notion.pdf
├── public/                                # Static public assets
│   ├── images/                            # Optimized photography (portraits, office, details)
│   │   ├── maya-portrait.jpg
│   │   ├── office-1.jpg
│   │   ├── office-2.jpg
│   │   ├── help-adults.jpg
│   │   ├── help-professionals.jpg
│   │   ├── help-creatives.jpg
│   │   ├── approach.jpg
│   │   ├── honoring.jpg
│   │   ├── detail-light.jpg
│   │   └── cta-detail.jpg
│   ├── llms.txt                           # Emerging standard for AI search engines
│   ├── llms-full.txt                      # Comprehensive AI documentation
│   └── logo.svg                           # Scalable vector practice mark
├── src/
│   ├── app/
│   │   ├── globals.css                    # Tailwind v4 theme tokens & reusable utility classes
│   │   ├── layout.tsx                     # Fonts, metadata, JSON-LD Schema.org graph
│   │   ├── page.tsx                       # Page composition assembling all 12 sections
│   │   ├── robots.ts                      # Dynamic robots.txt generator with AI crawler rules
│   │   └── sitemap.ts                     # Dynamic sitemap.xml generator
│   ├── components/
│   │   ├── site/                          # Modular section components
│   │   │   ├── header.tsx                 # Navigation bar & mobile drawer
│   │   │   ├── hero.tsx                   # Hero section with edge-bleed portrait
│   │   │   ├── intro.tsx                  # Practice philosophy
│   │   │   ├── who-i-help.tsx             # 3 audience profile cards
│   │   │   ├── quote-band.tsx             # Grounding quote overlay
│   │   │   ├── expertise.tsx              # Clinical issues hairline list
│   │   │   ├── approach.tsx               # Session format & therapeutic methods
│   │   │   ├── honoring.tsx               # Depth work & past experiences
│   │   │   ├── specialties.tsx            # Sticky 3-service showcase
│   │   │   ├── office.tsx                 # Custom "Our Office" section & collage
│   │   │   ├── cta-band.tsx               # Consultation scheduling banner
│   │   │   └── footer.tsx                 # Footer links, hours & bottom bar
│   │   └── ui/                            # Clean, headless UI primitive components
│   ├── hooks/                             # Custom React hooks (mobile detection, toast)
│   └── lib/
│       ├── site.ts                        # Single source of truth for all practice copy & SEO
│       └── utils.ts                       # Class merging utility (clsx + tailwind-merge)
├── package.json                           # Scripts and dependencies
├── tsconfig.json                          # Strict TypeScript configuration
└── README.md                              # Repository documentation
```

---

## 🚀 Getting Started Locally

### Prerequisites
- **Node.js**: `v18.18+` or `v20+`
- **Package Manager**: `npm` (recommended), `yarn`, or `pnpm`

### 1. Clone the Repository
```bash
git clone https://github.com/nishantsahu258-afk/grow-my-therapy-maya-reynolds.git
cd grow-my-therapy-maya-reynolds
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Run Development Server
```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) in your browser. The server starts with Turbopack in sub-second compilation time.

### 4. Build for Production
```bash
npm run build
```
Generates a fully optimized, statically prerendered bundle ready for production deployment.

### 5. Run Linting
```bash
npm run lint
```
Executes ESLint to verify zero warnings and clean code quality.

---

## ⚡ Available NPM Scripts

| Command | Action |
|---|---|
| `npm run dev` | Starts local Next.js development server on port 3000 |
| `npm run build` | Compiles production bundle and executes TypeScript checks |
| `npm run start` | Launches production server after build |
| `npm run lint` | Runs ESLint across all TypeScript and TSX files |

---

## 🌐 Deployment

This project is optimized for zero-configuration deployment on **Vercel**:

1. Push your repository to GitHub.
2. Import the project into the [Vercel Dashboard](https://vercel.com/new).
3. Vercel will automatically detect Next.js with all default settings.
4. Click **Deploy**.

No environment variables or external database services are required.

---

## 📄 Evaluation & License

This project was built strictly for evaluation purposes as part of the **Grow My Therapy** Front-End Internship Practical Assignment (Stage 2). All photography is optimized for demonstration purposes.

---

<div align="center">
  <sub>Developed with care for Dr. Maya Reynolds, PsyD · Santa Monica, CA</sub>
</div>
