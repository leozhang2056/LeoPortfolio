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

Open [http://localhost:3030](http://localhost:3030).

---

## Project Structure

```
src/
├── app/
│   ├── layout.tsx              # Root layout — Header + Footer + ThemeProvider + ChatBot
│   ├── page.tsx                # Home — Hero, About, Skills, Featured Projects
│   ├── chat/page.tsx           # Full-page AI chat assistant
│   ├── projects/page.tsx       # 19 project cards (clickable → detail pages)
│   ├── projects/[slug]/page.tsx # Dynamic project detail page with image gallery
│   ├── research/page.tsx       # Technical reflections & insights
│   ├── sitemap.ts              # SEO sitemap
│   ├── robots.ts               # SEO robots.txt
│   └── api/chat/route.ts       # POST /api/chat — OpenAI streaming chat endpoint
├── components/
│   ├── ui/                     # shadcn/ui components
│   ├── layout/                 # Header (nav + dark mode + mobile menu), Footer
│   ├── home/                   # HeroSection, AboutSection, SkillsSection, FeaturedProjects
│   ├── chat/                   # ChatBot — floating button widget
│   └── projects/               # ImageGallery — project detail image viewer
└── lib/
    ├── data.ts                 # Site config, skills, nav items
    ├── projects.ts             # Centralized project data (19 projects)
    ├── utils.ts                # cn() utility (clsx + tailwind-merge)
    └── chat-prompt.ts          # System prompt with full career data for AI assistant
```

---

## Routes

| Route | Type | Description |
|-------|------|-------------|
| `/` | Static | Home — Hero, About, Skills, Featured Projects |
| `/projects` | Static | 19 project cards with clickable links |
| `/projects/[slug]` | SSG | Dynamic project detail page with image gallery |
| `/research` | Static | Technical reflections & insights |
| `/chat` | Static | Full-page AI chat assistant |
| `/knowledge` | Static | Knowledge base page |
| `/api/chat` | Dynamic | AI streaming chat API (local newapi) |
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
- 19 featured projects with quantified results
- Publications, education, certifications

Powered by GLM-4.5-Flash via a local newapi instance and the Vercel AI SDK.

### Dark Mode
Toggle between light, dark, and system theme via the sun/moon button in the navigation bar.

### Responsive Design
Mobile-first with responsive grid layouts, collapsible navigation, and touch-friendly controls.

---

## Deployment

### Docker

The project uses a multi-stage Dockerfile that builds a standalone Next.js output and runs it on port 3000.

```bash
# Build
docker build -t leoportfolio .

# Run
docker run -p 3030:3000 leoportfolio
```

### Raspberry Pi (Self-hosted)

The production instance runs on a Raspberry Pi 5 at `http://192.168.1.128:3030`.

---

## CI/CD Auto-Deploy Architecture

A Raspberry Pi serves as a self-hosted server with a **pull-based CI/CD** auto-deployment pipeline.

### Architecture Diagram

```
[Dev Machine]                    [GitHub]                    [Raspberry Pi 5]
     │                            │                            │
     │  1. git push origin main    │                            │
     │────────────────────────────▶│                            │
     │                            │                            │
     │                            │  2. Poll every 2 min       │
     │                            │  ┌────────────────────────▶│
     │                            │  │  systemd timer           │
     │                            │  │  leoportfolio-check      │
     │                            │  │                         │
     │                            │  │  3. Detect new commit    │
     │                            │  │  git fetch → diff HEAD   │
     │                            │  │                         │
     │                            │  │  4. Auto deploy          │
     │                            │  │  ├─ git pull             │
     │                            │  │  ├─ npm install          │
     │                            │  │  ├─ npm run build        │
     │                            │  │  ├─ copy static assets ★ │
     │                            │  │  ├─ stop old service     │
     │                            │  │  └─ start new service    │
     │                            │  │                         │
     │                            │  │  5. Health check (200)   │
     │                            │  │                         │
     │  6. Visit updated site ◀───│──│─────────────────────────│
     │  http://192.168.1.128:3030 │  │                         │
```

### Key Components

| Component | Description | Location |
|-----------|-------------|----------|
| `leoportfolio-deploy.sh` | Full deployment script | `/home/pi5/` |
| `leoportfolio-check.timer` | systemd timer (every 2 min) | `/etc/systemd/system/` |
| `leoportfolio-check.service` | systemd service (triggers deploy) | `/etc/systemd/system/` |
| Next.js Standalone | Production runtime | `.next/standalone/` |

### Deploy Script

```bash
# Core deploy logic
git fetch origin main
LOCAL=$(git rev-parse HEAD)
REMOTE=$(git rev-parse origin/main)

if [ "$LOCAL" != "$REMOTE" ]; then
  git pull origin main
  npm install --production
  npm run build

  # ★ Static asset copy (required for Next.js standalone)
  cp -r .next/static .next/standalone/.next/
  cp -r public/* .next/standalone/public/

  # Stop old process → start new service
  pkill -f "next-server"
  HOSTNAME=0.0.0.0 PORT=3030 node .next/standalone/server.js
fi
```

### Troubleshooting

| Issue | Cause | Fix |
|-------|-------|-----|
| CSS/JS 404 | Static assets not copied after rebuild | `cp -r .next/static .next/standalone/.next/` |
| Images 404 | `public/` not synced to standalone | `cp -r public/* .next/standalone/public/` |
| LAN unreachable | Next.js binds to 127.0.0.1 by default | `HOSTNAME=0.0.0.0` |
| Port conflict | Stale process | `pkill -f "node.*next"` |

### Ops Commands

```bash
# View deploy logs
journalctl -u leoportfolio-check.service -f

# Trigger manual deploy
sudo systemctl start leoportfolio-check.service

# Check timer status
systemctl status leoportfolio-check.timer

# Verify service health
curl -s -o /dev/null -w "%{http_code}" http://localhost:3030/
```

---

## License

MIT
