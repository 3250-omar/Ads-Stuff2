# Implementation Plan: Premium Dark Mode Redesign

**Branch**: `001-premium-redesign` | **Date**: 2026-05-11 | **Spec**: [spec.md](./spec.md)
**Input**: Feature specification from `/specs/001-premium-redesign/spec.md`

## Summary

Redesign the entire Ads & Stuff portfolio website from a light-themed layout to a premium dark mode aesthetic. The redesign transforms all visual layers — color palette, backgrounds, card styling, typography contrast, animations, and component theming — while preserving the existing project structure, data flows, and i18n functionality. The approach modifies CSS design tokens in `globals.css`, the Ant Design ConfigProvider theme in `layout.tsx`, and individual section component styling across all 10 section files, the navbar, and the footer.

## Technical Context

**Language/Version**: TypeScript 5.x
**Primary Dependencies**: Next.js 15+ (App Router), Ant Design 6.x, Tailwind CSS 4.x, GSAP 3.x, next-intl 4.x, TanStack Query 5.x
**Storage**: Supabase (PostgreSQL) — read-only for portfolio data (projects, customers, feedbacks, hero media, social media)
**Testing**: Manual visual testing across breakpoints (375px, 768px, 1440px) + `yarn build` validation
**Target Platform**: Web (all modern browsers), SSR via Next.js
**Project Type**: Web application (portfolio/agency site)
**Performance Goals**: LCP < 2.5s, no performance regression from current baseline
**Constraints**: Must preserve existing file structure (Constitution Principle III), no new dependencies > 50KB gzipped
**Scale/Scope**: 1 landing page with 8 sections + navbar + footer, 3 sub-pages (projects, articles, skills), 2 locales (en, ar)

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

| Principle | Gate | Status |
|-----------|------|--------|
| I. Premium Visual Design | All components use Ant Design theme config; animations use GSAP/CSS only; curated dark palette; responsive across breakpoints | ✅ PASS — redesign uses existing Ant Design ConfigProvider dark tokens, GSAP animations preserved, curated dark green palette |
| II. Security-First | No new env vars exposed; no new external services | ✅ PASS — pure visual layer change, no security surface changes |
| III. Structural Preservation | Files stay in existing locations; no new top-level directories | ✅ PASS — modifying existing files in-place, no structural changes |
| IV. Performance & Core Web Vitals | LCP < 2.5s; LazySection preserved; no heavy new deps | ✅ PASS — no new dependencies; lazy loading patterns unchanged |
| V. Internationalization Integrity | All text via next-intl; RTL maintained | ✅ PASS — only visual styling changes, no text/translation changes |
| VI. Simplicity & YAGNI | No new abstractions; direct style modifications | ✅ PASS — modifying existing CSS tokens and Tailwind classes directly |

**Gate Result**: ✅ ALL PASS — proceed to Phase 0.

## Project Structure

### Documentation (this feature)

```text
specs/001-premium-redesign/
├── plan.md              # This file
├── research.md          # Phase 0: Dark mode patterns research
├── data-model.md        # Phase 1: Design token model
├── quickstart.md        # Phase 1: How to verify the redesign
└── tasks.md             # Phase 2: Implementation tasks (via /speckit-tasks)
```

### Source Code (repository root)

```text
app/
├── globals.css                          # Design tokens, theme colors, animations
├── [locale]/
│   ├── layout.tsx                       # Ant Design ConfigProvider dark theme
│   ├── loading.tsx                      # Dark loading state
│   ├── _comp/
│   │   ├── PageContent.tsx              # Dark loading skeletons
│   │   └── sections/
│   │       ├── HeroSection.tsx          # Cinematic dark hero
│   │       ├── ProjectsSection.tsx      # Dark glass project cards
│   │       ├── SkillsSection.tsx        # Dark marquee skill icons
│   │       ├── StatictsSection.tsx       # Glowing dark counters
│   │       ├── TimeLine.tsx             # Dark glass timeline cards
│   │       ├── OurCustomers.tsx         # Dark customer carousel
│   │       ├── FeedBacks.tsx            # Dark testimonial cards
│   │       ├── ContactsSection.tsx      # Dark contact CTA
│   │       ├── ArticlesSection.tsx      # Dark articles grid
│   │       └── imageStock.tsx           # Dark image stack styling
│   ├── projects/                        # Dark project detail pages
│   ├── articles/                        # Dark article pages
│   └── skills/                          # Dark skills page

components/
├── NavBar.tsx                           # Transparent → frosted dark nav
├── Footer.tsx                           # Dark footer
├── ScrollToTop.tsx                      # Dark-themed button
├── ToWhatsapp.tsx                       # Dark WhatsApp widget
├── TabsComp.tsx                         # Dark tab styling
├── languageSwitcher.tsx                 # Dark dropdown
├── projects/                            # Dark project components
├── contacts/                            # Dark contact form components
├── feedbacks/                           # Dark testimonial card
└── articles/                            # Dark article card/grid
```

**Structure Decision**: Existing Next.js App Router structure preserved exactly per Constitution Principle III. All changes are in-place modifications to existing files — no new files or directories required for the core redesign.

## Complexity Tracking

> No Constitution Check violations — this section is intentionally empty.
