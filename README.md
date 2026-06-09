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
│   ├── layout.tsx            # Root layout — Header + Footer + ThemeProvider + ChatBot
│   ├── page.tsx              # Home — Hero, Skills, Featured Projects, Resume CTA
│   ├── android/page.tsx      # Android showcase — skills, projects, achievements
│   ├── ai/page.tsx           # AI showcase — ChatClothes, research tabs, tech stack
│   ├── projects/page.tsx     # 8 detailed project cards (problem→solution→results→lessons)
│   ├── research/page.tsx     # Master thesis, publications, posters, awards
│   ├── blog/page.tsx         # Blog list with search + category filter
│   ├── resume/page.tsx       # Three resume variants + full professional summary
│   ├── contact/page.tsx      # Contact form, social links, availability
│   └── api/chat/route.ts     # POST /api/chat — OpenAI streaming chat endpoint
├── components/
│   ├── ui/                   # shadcn/ui components (17 components)
│   ├── layout/               # Header (nav + dark mode + mobile menu), Footer
│   ├── home/                 # HeroSection, SkillsSection, FeaturedProjects, CTASection
│   └── chat/                 # ChatBot — floating button + dialog
└── lib/
    ├── data.ts               # Site config, skills, projects, resume variants
    ├── utils.ts              # cn() utility (clsx + tailwind-merge)
    └── chat-prompt.ts        # System prompt with full career data for AI assistant
```

---

## Routes

| Route | Type | Description |
|-------|------|-------------|
| `/` | Static | Home |
| `/android` | Static | Android skills & projects |
| `/ai` | Static | AI research & tools |
| `/projects` | Static | 8 detailed projects |
| `/research` | Static | Publications & awards |
| `/blog` | Static | Blog with search |
| `/resume` | Static | Resume downloads |
| `/contact` | Static | Contact form |
| `/api/chat` | Dynamic | OpenAI streaming API |

---

## Features

### AI Chat Assistant (右下角浮动按钮)
Visitors can ask questions about Leo's background, skills, and projects through a conversational AI interface. The system prompt is pre-loaded with full career data, including:
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
