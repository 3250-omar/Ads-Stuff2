# Research: Premium Dark Mode Redesign

**Feature**: 001-premium-redesign
**Date**: 2026-05-11
**Status**: Complete

## 1. Dark Mode Color Palette Strategy

### Decision
Use a curated dark palette built around the existing brand green (#4A6B50) with deep forest-dark backgrounds, maintaining brand continuity while achieving the premium cinematic look from the reference design.

### Color System

| Token | Current (Light) | New (Dark) | Usage |
|-------|-----------------|------------|-------|
| `--color-bg-primary` | N/A (white body) | `#0A0F0D` | Page background base |
| `--color-bg-secondary` | N/A | `#111A15` | Section backgrounds |
| `--color-bg-card` | N/A (white) | `#1A2420` | Card/panel backgrounds |
| `--color-bg-elevated` | N/A | `#243029` | Elevated surfaces, navbar scroll |
| `--color-primary` | `#4A6B50` | `#4A6B50` | Keep — brand accent (buttons, links) |
| `--color-primary-light` | N/A | `#6B9071` | Lighter accent for hover states |
| `--color-secondary` | `#AEC3B0` | `#AEC3B0` | Keep — secondary accent |
| `--color-schemaWhite` | `#E3EED4` | `#1E2B22` | Adapted for dark context |
| `--color-darkModePrimary` | `#0F2A1D` | `#E8F0E9` | Inverted — now used for light text |
| `--color-text-primary` | N/A (dark default) | `#E8F0E9` | Primary text (high contrast) |
| `--color-text-secondary` | N/A | `#9BA89E` | Secondary/muted text |
| `--color-text-muted` | N/A | `#6B7A6E` | Tertiary text, captions |
| `--color-border` | N/A (gray-100) | `rgba(74, 107, 80, 0.2)` | Card borders, dividers |
| `--color-glow` | N/A | `rgba(74, 107, 80, 0.3)` | Glow effects on cards/buttons |

### Rationale
- The deep green-black backgrounds (#0A0F0D) create visual cohesion with the green brand accent
- Using green-tinted darks (not pure gray/black) gives a distinctive agency feel vs generic dark modes
- The existing `--color-primary` (#4A6B50) remains unchanged to maintain brand recognition
- Text colors use green-tinted whites for warmth vs clinical pure white

### Alternatives Considered
1. **Pure black backgrounds (#000)**: Rejected — too harsh, creates OLED-style look that feels flat
2. **Blue-tinted dark (#1A1A2E)**: Rejected — conflicts with green brand identity
3. **Dark gray neutral (#1A1A1A)**: Rejected — generic, doesn't feel agency-premium

## 2. Glassmorphic Card Pattern for Dark Mode

### Decision
Use semi-transparent dark backgrounds with subtle green-tinted borders and backdrop-blur for all card components.

### Implementation Pattern
```css
.glass-card {
  background: rgba(26, 36, 32, 0.7);       /* --color-bg-card with transparency */
  backdrop-filter: blur(12px);
  border: 1px solid rgba(74, 107, 80, 0.15); /* Green-tinted subtle border */
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3); /* Deep shadow for depth */
}

.glass-card:hover {
  border-color: rgba(74, 107, 80, 0.3);
  box-shadow: 0 8px 32px rgba(74, 107, 80, 0.15); /* Green glow on hover */
}
```

### Rationale
- Glassmorphism on dark backgrounds creates depth without competing with content
- Green-tinted borders tie cards visually to the brand
- The hover glow effect creates the "alive" feel required by Constitution Principle I

## 3. Ant Design v6 Dark Theme Configuration

### Decision
Use Ant Design v6's ConfigProvider `theme` prop with `algorithm: theme.darkAlgorithm` combined with custom token overrides.

### Implementation Pattern
```typescript
import { theme } from 'antd';

<ConfigProvider
  theme={{
    algorithm: theme.darkAlgorithm,
    token: {
      colorPrimary: '#4A6B50',
      colorBgContainer: '#1A2420',
      colorBgElevated: '#243029',
      colorBgLayout: '#0A0F0D',
      colorText: '#E8F0E9',
      colorTextSecondary: '#9BA89E',
      colorBorder: 'rgba(74, 107, 80, 0.2)',
      borderRadius: 16,
      fontFamily: 'var(--font-geist-sans)',
    },
  }}
>
```

### Rationale
- `darkAlgorithm` handles 90%+ of Ant Design component dark styling automatically
- Custom tokens override the specific colors to match our green-tinted dark palette
- This is the simplest approach per Constitution Principle VI

### Alternatives Considered
1. **Manual component-level overrides**: Rejected — too many components, fragile, violates YAGNI
2. **CSS custom properties only (skip darkAlgorithm)**: Rejected — would leave Ant Design internals unstyled
3. **Separate theme object file**: Rejected for now — direct inline is simpler for single-theme site

## 4. Hero Section Redesign — Cinematic Grid Layout

### Decision
Replace the current 3-card rotating image stack with a cinematic mosaic grid matching the reference design — a full-width section with multiple project images arranged in a grid/collage pattern, overlaid with bold typography and gradient overlays.

### Layout Pattern
```
┌─────────────────────────────────────────────────────────────┐
│  [Nav: transparent]                            [ENGLISH ▼]  │
├───────────┬───────────┬───────────┬──────────┬──────────────┤
│           │  img 2    │  img 3    │ img 4    │              │
│  img 1    ├───────────┴───────────┤          │   img 5      │
│           │                       ├──────────┤              │
│           │  "Cinema. Story.      │  img 6   │              │
│           │   Impact."            │          │              │
├───────────┤                       ├──────────┴──────────────┤
│  img 7    │  [View Our Work]      │         img 8           │
│           │  [Contact Us]         │                         │
└───────────┴───────────────────────┴─────────────────────────┘
```

### Rationale
- The reference design uses a grid mosaic which showcases more work at a glance
- Bold overlay text creates the "cinema" feeling
- The existing hero images from Supabase Storage can populate the grid cells
- The rotating/swapping animation can still work but at the individual cell level

## 5. Navbar Transparent-to-Frosted Transition

### Decision
Keep the existing scroll-detection logic but change the visual transition from `bg-white shadow-md` to `bg-[#0A0F0D]/80 backdrop-blur-xl shadow-lg shadow-black/20`.

### Rationale
- Minimal code change (one className conditional swap)
- Preserves the existing IntersectionObserver pattern
- The frosted effect is achieved purely via Tailwind utilities — no new dependencies

## 6. Project Cards — Horizontal Cinematic Layout

### Decision
Redesign the project listing from a vertical card grid to horizontal cinematic cards, each spanning the full container width with the project image on one side and text on the other, matching the reference design's "case study" style.

### Layout Pattern
```
┌───────────────────────────────────────────────────────────┐
│ ◄ │  [Project Image]  │  Project Name                │ ► │
│   │                    │  Description text...         │   │
│   │                    │  [View Case Study →]         │   │
└───────────────────────────────────────────────────────────┘
```

### Rationale
- Horizontal cards give each project more visual weight — appropriate for a portfolio
- The asymmetric image/text split creates visual interest
- Navigation arrows provide discovery without infinite scroll
- Each card becomes a glassmorphic dark container

## 7. Loading/Skeleton States

### Decision
Replace all `bg-gray-50/50` shimmer placeholders with dark-themed equivalents using `bg-[#1A2420] animate-pulse` with a subtle green-tinted shimmer.

### Rationale
- Light gray skeletons on dark backgrounds create jarring contrast
- Dark shimmer states maintain the premium feel during loading

## 8. RTL Considerations

### Decision
No RTL-specific dark mode changes needed. All color/background changes are direction-agnostic. The existing `dir="rtl"` handling in `layout.tsx` will continue to work because we're only changing colors, not layouts.

### Rationale
- Dark mode is purely about color tokens and backgrounds
- RTL affects flex-direction, text-align, padding — none of which change in this redesign
- Verified by inspection: no `ltr:`/`rtl:` conditional color classes exist in the codebase
