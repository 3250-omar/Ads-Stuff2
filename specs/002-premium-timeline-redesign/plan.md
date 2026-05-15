# Implementation Plan: Premium Brand Story Redesign

**Branch**: `002-premium-timeline-redesign` | **Date**: 2026-05-15 | **Spec**: [spec.md](./spec.md)
**Input**: Feature specification from `/specs/002-premium-timeline-redesign/spec.md`

## Summary

Redesign the "TimeLine" section into a premium "Brand Story" section. The redesign replaces the vertical timeline with a sophisticated layout (Bento Grid or Layered Cards) using glassmorphic effects, glowing accents, and GSAP-powered animations. It leverages existing data from Supabase (social media) and i18n keys from `next-intl` while maintaining the established project structure and performance targets.

## Technical Context

**Language/Version**: TypeScript 5.x
**Primary Dependencies**: Next.js 15+, Ant Design 6.x, Tailwind CSS 4.x, GSAP 3.x, next-intl 4.x, TanStack Query 5.x
**Storage**: Supabase (PostgreSQL) — read-only for social media links
**Testing**: Manual visual testing across breakpoints + `yarn build` validation
**Target Platform**: Web (Modern Browsers), SSR via Next.js
**Project Type**: Web application (portfolio/agency site)
**Performance Goals**: LCP < 2.5s, no performance regression
**Constraints**: Glassmorphism, premium dark branding, RTL support (Arabic)
**Scale/Scope**: 1 landing page section (`TimeLine.tsx`)

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

| Principle | Gate | Status |
|-----------|------|--------|
| I. Premium Visual Design | Use Ant Design 6.x theme config; GSAP/CSS animations; glassmorphism; responsive layout | ✅ PASS — utilizing Ant Design tokens and GSAP for premium effects |
| II. Security-First | No secrets committed; env vars protected | ✅ PASS — no new secrets or API changes |
| III. Structural Preservation | Keep file in `app/[locale]/_comp/sections/TimeLine.tsx` | ✅ PASS — modifying existing file in-place |
| IV. Performance & Core Web Vitals | LCP < 2.5s; clean up GSAP on unmount | ✅ PASS — optimizing animations and asset loading |
| V. Internationalization Integrity | Use `next-intl`; support RTL (Arabic) | ✅ PASS — reusing existing translation keys |
| VI. Simplicity & YAGNI | Direct style modifications; no new abstractions | ✅ PASS — modifying component directly with Tailwind/AntD |

**Gate Result**: ✅ ALL PASS — proceed to Phase 0.

## Project Structure

### Documentation (this feature)

```text
specs/002-premium-timeline-redesign/
├── plan.md              # This file
├── research.md          # Phase 0: Layout & animation research
├── data-model.md        # Phase 1: Brand story data model
├── quickstart.md        # Phase 1: How to verify the redesign
└── tasks.md             # Phase 2: Implementation tasks (via /speckit-tasks)
```

### Source Code (repository root)

```text
app/
└── [locale]/
    └── _comp/
        └── sections/
            └── TimeLine.tsx             # Redesigned Brand Story section
```

**Structure Decision**: Modifying `TimeLine.tsx` in-place to preserve project architecture while transforming the UI from a timeline to a premium brand story layout.

## Complexity Tracking

> No Constitution Check violations — this section is intentionally empty.
