# Data Model: Premium Dark Mode Redesign

**Feature**: 001-premium-redesign
**Date**: 2026-05-11

> This feature is a pure visual redesign — no database schema changes.
> The "data model" for this feature is the **design token system** that
> drives all visual rendering.

## Design Token Entities

### 1. Color Palette Tokens (`globals.css` → `@theme`)

The core entity being modified. These CSS custom properties define
every color used across the site.

| Token | Type | Current Value | New Value | Scope |
|-------|------|---------------|-----------|-------|
| `--color-primary` | hex | `#4A6B50` | `#4A6B50` | Unchanged — brand accent |
| `--color-secondary` | hex | `#AEC3B0` | `#AEC3B0` | Unchanged — secondary accent |
| `--color-schemaWhite` | hex | `#E3EED4` | `#1E2B22` | Dark-adapted background tint |
| `--color-darkModePrimary` | hex | `#0F2A1D` | `#E8F0E9` | Inverted — now light text |
| `--color-darkModeSecondary` | hex | `#375534` | `#375534` | Unchanged |
| `--color-bg-primary` | hex | N/A (new) | `#0A0F0D` | Page background |
| `--color-bg-secondary` | hex | N/A (new) | `#111A15` | Section alternate |
| `--color-bg-card` | hex | N/A (new) | `#1A2420` | Card surfaces |
| `--color-bg-elevated` | hex | N/A (new) | `#243029` | Elevated surfaces |
| `--color-text-primary` | hex | N/A (new) | `#E8F0E9` | Primary text |
| `--color-text-secondary` | hex | N/A (new) | `#9BA89E` | Muted text |
| `--color-border-subtle` | rgba | N/A (new) | `rgba(74,107,80,0.15)` | Card borders |
| `--color-glow` | rgba | N/A (new) | `rgba(74,107,80,0.3)` | Glow effects |

### 2. Component Class Tokens (`globals.css` → `@layer components`)

Reusable class definitions that apply the design tokens to
common UI patterns.

| Class | Current Definition | New Definition |
|-------|-------------------|----------------|
| `.head-section` | White background implied | Add `bg-bg-primary text-text-primary` |
| `.section-title` | `text-primary` on white | `text-primary` on dark — no change needed |
| `.glass-card` | `bg-white/70 backdrop-blur-md border-white/50` | `bg-bg-card/70 backdrop-blur-md border-border-subtle` |
| `.gradient-section` | `from-schemaWhite/30 via-white to-secondary/10` | `from-bg-secondary/50 via-bg-primary to-bg-card/30` |
| `.glow-primary` | `box-shadow: rgba(107,144,113, 0.3)` | Keep — already green-tinted |

### 3. Ant Design Theme Config Entity (`layout.tsx`)

The ConfigProvider theme object controls all Ant Design
component rendering.

```typescript
// Current
{
  token: {
    colorPrimary: "#4A6B50",
  }
}

// New
{
  algorithm: theme.darkAlgorithm,
  token: {
    colorPrimary: "#4A6B50",
    colorBgContainer: "#1A2420",
    colorBgElevated: "#243029",
    colorBgLayout: "#0A0F0D",
    colorText: "#E8F0E9",
    colorTextSecondary: "#9BA89E",
    colorBorder: "rgba(74, 107, 80, 0.2)",
    borderRadius: 16,
  }
}
```

### 4. Animation Tokens (`globals.css` → `@theme` keyframes)

No animation keyframes change — only the colors within
animated elements change. The existing `marquee`, `float`,
`pulse-glow`, `slide-in-left`, `slide-in-right`, and
`fade-in-up` keyframes are motion-only (no color values
embedded), so they work identically in dark mode.

## Entity Relationships

```
globals.css @theme tokens
    ├──→ @layer components classes (glass-card, gradient-section, etc.)
    ├──→ Tailwind utility classes in component JSX (bg-primary, text-text-primary, etc.)
    └──→ Ant Design ConfigProvider token overrides in layout.tsx
              └──→ All Ant Design components (Button, Card, Typography, Spin, etc.)
```

## Validation Rules

1. **Contrast**: All `text-*` on `bg-*` combinations MUST maintain ≥ 4.5:1 ratio (WCAG AA)
2. **Brand consistency**: `--color-primary` (#4A6B50) MUST NOT change
3. **Token coverage**: Every hardcoded color class in JSX (`text-gray-500`, `bg-white`, `border-gray-100`) MUST be replaced with a design token reference
4. **No orphaned light colors**: After implementation, `grep` for `bg-white`, `text-gray-600`, `bg-gray-50` in component files MUST return zero results

## State Transitions

N/A — Design tokens are static values, not stateful entities.
The only "transition" is the one-time migration from light to dark values.
