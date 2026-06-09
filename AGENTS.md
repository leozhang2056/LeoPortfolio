<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Leo Portfolio — Agent Guide

## Tech Stack
- Next.js 16 + React 19 + TypeScript + Tailwind CSS v4 + shadcn/ui (Base UI)
- shadcn uses `@base-ui/react/*` (NOT Radix) — use `render` prop, NOT `asChild`
- lucide-react removed brand icons (no `Github`, `Linkedin` — use `ExternalLink`, `Link2`)
- next-themes for dark mode

## Project Conventions
- App Router with `src/` directory
- All pages are Server Components by default — add `"use client"` only when needed
- `@/` import alias maps to `src/`
- CSS variables in `globals.css` for shadcn theme
- Static data lives in `src/lib/data.ts`

## Page Architecture
- Home: `src/app/page.tsx` — uses layout components from `src/components/home/`
- Feature pages: `src/app/{android,ai,projects,research,blog,resume,contact}/page.tsx`
- API routes: `src/app/api/*/route.ts`
- Shared components: `src/components/`
- Layout: Header has nav + dark mode toggle + mobile sheet menu

## Leo's Data
- Real personal info: `src/lib/data.ts` (siteConfig, skills, featuredProjects, resumeVariants)
- Chat system prompt: `src/lib/chat-prompt.ts` (full career data for AI assistant)
- Source of truth: `E:\Coding\leozhang2056\` (KB project with YAML facts)

## Button Pattern (IMPORTANT)
```tsx
// CORRECT — Base UI render prop:
<Button render={<Link href="/projects" />}>
  View Projects
</Button>

// WRONG — Radix-style asChild (does not exist):
<Button asChild>
  <Link href="/projects">View Projects</Link>
</Button>
```

## Commands
- `npm run dev` — start development server
- `npm run build` — production build + type check
- `npm run lint` — ESLint
