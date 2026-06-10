# Leo Zhang — Portfolio

> Full-stack software engineer with 10+ years shipping production software across Android, Java backends, and AI integration.

[![Build](https://github.com/leozhang2056/LeoPortfolio/actions/workflows/ci.yml/badge.svg)](https://github.com/leozhang2056/LeoPortfolio/actions/workflows/ci.yml)

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 16 (App Router) |
| UI | React 19 + Tailwind CSS v4 + shadcn/ui (Base UI) |
| Language | TypeScript (strict mode) |
| Icons | Lucide React |
| Theme | next-themes (dark/light/system) |
| AI Chat | Vercel AI SDK (`ai`, `@ai-sdk/openai`, `@ai-sdk/react`) |
| CI/CD | GitHub Actions |

---

## Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Configure chat (optional — without it the bot button still shows but API responds 500)
cp .env.example .env.local
# Edit .env.local and add your OpenAI API key:
# OPENAI_API_KEY=sk-...

# 3. Start dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## Project Structure

```
src/
├── app/
│   ├── layout.tsx              # Root layout — Header + Footer + ThemeProvider + ChatBot
│   ├── page.tsx                # Home — Hero, About, Skills, Featured Projects
│   ├── chat/page.tsx           # Full-page AI chat assistant
│   ├── projects/page.tsx       # 8 detailed project cards (problem→solution→results→lessons)
│   ├── research/page.tsx       # Technical reflections & insights
│   ├── sitemap.ts              # SEO sitemap
│   ├── robots.ts               # SEO robots.txt
│   └── api/chat/route.ts       # POST /api/chat — OpenAI streaming chat endpoint
├── components/
│   ├── ui/                     # shadcn/ui components
│   ├── layout/                 # Header (nav + dark mode + mobile menu), Footer
│   ├── home/                   # HeroSection, AboutSection, SkillsSection, FeaturedProjects
│   └── chat/                   # ChatBot — floating button widget
└── lib/
    ├── data.ts                 # Site config, skills, projects, nav items
    ├── utils.ts                # cn() utility (clsx + tailwind-merge)
    └── chat-prompt.ts          # System prompt with full career data for AI assistant
```

---

## Routes

| Route | Type | Description |
|-------|------|-------------|
| `/` | Static | Home — Hero, About, Skills, Featured Projects |
| `/projects` | Static | 8 detailed project cards |
| `/research` | Static | Technical reflections & insights |
| `/chat` | Static | Full-page AI chat assistant |
| `/api/chat` | Dynamic | OpenAI streaming API |
| `/sitemap.xml` | Static | SEO sitemap |
| `/robots.txt` | Static | SEO robots.txt |

---

## Features

### AI Chat Assistant
Two ways to interact:
1. **Floating button** (bottom-right) — quick questions without leaving the page
2. **Full-page chat** (`/chat`) — dedicated conversation interface

The system prompt is pre-loaded with full career data, including:
- Work history (AUT + Chunxiao Technology, 2013–2026)
- Technical skills inventory (50+ skills with proficiency levels)
- 8 featured projects with quantified results
- Publications, education, certifications

Powered by `gpt-4o-mini` via the Vercel AI SDK.

### Dark Mode
Toggle between light, dark, and system theme via the sun/moon button in the navigation bar.

### Responsive Design
Mobile-first with responsive grid layouts, collapsible navigation, and touch-friendly controls.

---

## Deployment

### Vercel (Frontend)
1. Push to GitHub
2. Import repo at [vercel.com/new](https://vercel.com/new)
3. Add environment variable: `OPENAI_API_KEY`
4. Deploy — zero configuration required

### Phase 2 (Planned)
- Backend: Spring Boot 3 + Java 21 microservices
- Database: PostgreSQL + Redis
- Docker Compose for local development
- Full AI tool suite (Resume Analyzer, Job Match, Cover Letter Generator)

---

## License

MIT
