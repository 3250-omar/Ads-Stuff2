<!--
  Sync Impact Report
  ==================
  Version change: 0.0.0 (template) → 1.0.0
  Modified principles: N/A (initial adoption)
  Added sections:
    - Principle I: Premium Visual Design
    - Principle II: Security-First
    - Principle III: Structural Preservation
    - Principle IV: Performance & Core Web Vitals
    - Principle V: Internationalization Integrity
    - Principle VI: Simplicity & YAGNI
    - Section: Technology Stack Constraints
    - Section: Development Workflow
    - Section: Governance
  Removed sections: N/A
  Templates requiring updates:
    - .specify/templates/plan-template.md ✅ (Constitution Check section compatible)
    - .specify/templates/spec-template.md ✅ (no principle-specific changes needed)
    - .specify/templates/tasks-template.md ✅ (Security Hardening + Polish phase aligned)
  Follow-up TODOs: None
-->

# Ads & Stuff Constitution

## Core Principles

### I. Premium Visual Design

Every user-facing element MUST deliver a polished, agency-grade
visual experience that communicates creative authority on first
impression.

- All UI components MUST use the established Ant Design v6 theme
  configuration; ad-hoc color overrides outside the theme are
  PROHIBITED.
- Animations MUST use GSAP or CSS transitions only — no additional
  animation libraries without explicit justification.
- Typography MUST follow the project's design tokens; browser-default
  fonts are NEVER acceptable in production views.
- Interactive elements MUST include hover/focus micro-interactions
  that feel responsive and alive.
- Media assets (images, videos) MUST be served through Supabase
  Storage with Next.js `<Image>` optimization; unoptimized `<img>`
  tags are PROHIBITED for remote content.
- Color palettes MUST be curated and harmonious; generic flat
  colors (plain #ff0000, #0000ff) are PROHIBITED.
- Responsive design MUST cover mobile, tablet, and desktop breakpoints
  using Tailwind CSS v4 utilities and Ant Design Grid — no viewport
  may appear broken or visually degraded.

**Rationale**: The portfolio IS the product — every pixel reflects
the agency's creative capability to prospective clients.

### II. Security-First

All data flows, credentials, and external integrations MUST be
secured by default with zero trust assumptions.

- Environment variables containing secrets (Supabase keys, EmailJS
  keys) MUST NEVER be committed to version control; `.env` and
  `.env.local` MUST remain in `.gitignore`.
- Only `NEXT_PUBLIC_` prefixed variables may be exposed to the
  browser; server-only secrets MUST use non-prefixed env vars
  accessed exclusively in Server Components or API routes.
- Supabase Row-Level Security (RLS) MUST be enabled on every table
  that stores user-generated or sensitive data.
- All form inputs (Contact form, any future admin forms) MUST be
  validated on both client and server before processing.
- External API calls (EmailJS, Supabase) MUST implement error
  handling with user-friendly fallbacks — raw error messages
  MUST NEVER be displayed to end users.
- Content Security Policy headers SHOULD be configured to restrict
  script sources and frame ancestors.
- Dependencies MUST be audited periodically; known-vulnerable
  packages MUST NOT remain unpatched for more than 7 days after
  advisory publication.

**Rationale**: A portfolio handling client contact data and connected
to external services is a real attack surface — security negligence
damages professional credibility.

### III. Structural Preservation

The established project architecture MUST be maintained; structural
changes require explicit justification and documented reasoning.

- The App Router layout MUST follow the existing pattern:
  `app/[locale]/` for i18n routing, `app/[locale]/_comp/sections/`
  for landing page sections.
- Reusable UI components MUST reside in `components/` at the
  project root — section-specific components stay in
  `app/[locale]/_comp/sections/`.
- Static data and hardcoded assets MUST be placed in `constants/`.
- Supabase client configuration MUST remain in `utils/supabase/`.
- Library configurations (AntdRegistry, Providers) MUST remain
  in `lib/`.
- API hooks and data-fetching logic MUST reside in `app/api/`
  or co-located `_hooks` directories.
- New top-level directories MUST NOT be created without amending
  this constitution and documenting the rationale.
- File naming MUST follow existing conventions: PascalCase for
  components, camelCase for utilities and hooks.

**Rationale**: Consistent structure enables rapid onboarding,
reduces cognitive load, and prevents architectural drift in a
project with multiple contributors.

### IV. Performance & Core Web Vitals

The portfolio MUST load fast and feel instant — slow portfolios
lose clients.

- Largest Contentful Paint (LCP) MUST target < 2.5s on 4G
  connections.
- All above-the-fold images MUST use `priority` prop in Next.js
  `<Image>`; below-fold sections SHOULD use lazy loading via
  the existing `LazySection` component.
- TanStack Query MUST be used for all Supabase data fetching
  with appropriate `staleTime` and `gcTime` configured —
  manual `fetch` calls for cacheable data are PROHIBITED.
- Bundle size impact MUST be considered for new dependencies;
  packages > 50KB gzipped require documented justification.
- GSAP animations MUST be cleaned up on component unmount to
  prevent memory leaks.
- `next dev --turbopack` MUST remain the development command;
  Webpack fallback is only permitted when Turbopack has a
  confirmed blocker bug.

**Rationale**: Portfolio visitors decide within seconds — poor
performance creates a negative first impression that no visual
design can overcome.

### V. Internationalization Integrity

All user-facing text MUST support the project's configured locales
through `next-intl`; hardcoded strings are PROHIBITED.

- Translation files MUST reside in `messages/` following the
  existing locale key structure.
- New user-visible strings MUST be added to ALL supported locale
  files simultaneously — partial translations are PROHIBITED
  in production builds.
- Locale-specific formatting (dates, numbers, currency) MUST
  use `next-intl` formatters, not manual string concatenation.
- RTL layout support MUST be maintained if Arabic or Hebrew
  locales are configured.
- The `[locale]` dynamic route segment MUST remain the outermost
  route parameter in the App Router.

**Rationale**: The agency serves a multilingual market — broken
translations or layout issues in any language damage professional
credibility.

### VI. Simplicity & YAGNI

Start with the simplest solution that satisfies requirements;
complexity MUST be earned through demonstrated need.

- New abstractions (custom hooks, wrapper components, utility
  layers) MUST solve a problem that exists today, not one
  anticipated for the future.
- Premature optimization MUST be avoided — profile first, then
  optimize with evidence.
- Direct Supabase client usage is preferred over Repository or
  Service patterns unless query complexity justifies abstraction.
- Co-location is preferred — keep related code together rather
  than scattering across distant directories.
- Each new dependency MUST be justified against the question:
  "Can this be achieved with existing tools (Next.js, Ant Design,
  Tailwind, GSAP) in under 30 minutes?"

**Rationale**: Over-engineering a portfolio project creates
maintenance burden disproportionate to the value delivered.

## Technology Stack Constraints

The following technology decisions are locked and MUST NOT be
changed without a constitutional amendment:

| Layer            | Technology            | Version Lock |
|------------------|-----------------------|--------------|
| Framework        | Next.js (App Router)  | 15+          |
| Language         | TypeScript            | 5.x          |
| UI Library       | Ant Design            | 6.x          |
| CSS Framework    | Tailwind CSS          | 4.x          |
| Backend/Database | Supabase              | Latest       |
| Data Fetching    | TanStack Query        | 5.x          |
| Animations       | GSAP                  | 3.x          |
| i18n             | next-intl             | 4.x          |
| Email            | EmailJS               | Latest       |
| Package Manager  | Yarn                  | 1.x          |

**Prohibited** without constitutional amendment:
- Alternative state management libraries (Redux, Zustand, Jotai)
- Alternative CSS-in-JS solutions (styled-components, Emotion)
- Alternative animation libraries (Framer Motion, Lottie) unless
  for a specific use case GSAP cannot handle
- Alternative backend services replacing Supabase

## Development Workflow

- All feature work MUST begin with a spec-kit specification
  (`/speckit-specify`) before implementation.
- Commits MUST follow Conventional Commits format:
  `type(scope): description` (e.g., `feat(hero): add video
  background support`).
- The `main` branch MUST always be deployable; broken builds
  on main are treated as P0 incidents.
- Environment-specific configuration MUST use `.env.development`
  for local dev and `.env` (gitignored) for secrets — NEVER
  commit secrets.
- `yarn dev` (via `next dev --turbopack`) is the standard
  development command.
- `yarn build` MUST pass without errors before any merge to main.
- Code reviews MUST verify compliance with Principles I–VI above.

## Governance

- This constitution supersedes all ad-hoc practices and verbal
  agreements.
- Amendments require: (1) documented rationale, (2) impact
  assessment on existing code, (3) update to this file with
  version bump.
- Version follows SemVer: MAJOR for principle removals/redefinitions,
  MINOR for new principles/sections, PATCH for clarifications.
- All PRs and code reviews MUST verify compliance with the
  principles above.
- Complexity that violates Principle VI MUST be explicitly
  justified in the PR description.
- Use AGENTS.md for runtime development guidance that does not
  rise to constitutional level.

**Version**: 1.0.0 | **Ratified**: 2026-05-11 | **Last Amended**: 2026-05-11
