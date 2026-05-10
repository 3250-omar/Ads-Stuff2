# Quickstart: Premium Dark Mode Redesign

**Feature**: 001-premium-redesign
**Date**: 2026-05-11

## Prerequisites

- Node.js v18+
- Yarn 1.x
- Project dependencies installed (`yarn install`)
- Supabase environment variables configured in `.env`

## Running the Redesigned Site

```bash
cd web
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Verification Checklist

### Visual Verification (Desktop — 1440px)

1. **Page background**: Deep dark green-black (#0A0F0D) — NO white areas visible
2. **Navbar (top of page)**: Transparent with light text
3. **Navbar (scrolled)**: Frosted dark glass with backdrop blur
4. **Hero section**: Cinematic media grid with bold overlay text, glowing CTAs
5. **Statistics section**: Dark background, glowing green counter numbers
6. **Timeline section**: Dark glass cards, green vertical line with glow
7. **Projects section**: Horizontal cinematic cards with dark glass styling
8. **Customers section**: Dark background, partner images with subtle borders
9. **Contact section**: Dark CTA area, "Let's Work Together" heading
10. **Footer**: Dark background, green "Ads & Stuff" text, light links

### Visual Verification (Mobile — 375px)

1. **Bottom nav pill**: Frosted dark glass (not green/white)
2. **Hero**: Media grid adapts to mobile layout
3. **All cards**: Full-width dark glass styling maintained
4. **No horizontal scroll**: Content stays within viewport

### Visual Verification (RTL — Arabic)

1. Switch language to Arabic via the language switcher
2. **Layout flips**: Text and elements mirror correctly
3. **Dark theme maintained**: All dark styling works in RTL
4. **No broken borders/shadows**: Directional shadows look correct

### Functional Regression Checks

1. **Navigation**: Click each nav item — smooth scroll works
2. **Projects**: Load more button fetches additional projects
3. **Customers**: Marquee carousel scrolls continuously
4. **Contact**: WhatsApp link opens correctly
5. **Language switch**: EN ↔ AR toggles without visual glitches
6. **Social media**: Footer social icons link to correct URLs
7. **Hero images**: Images rotate/swap on the timer interval

### Performance Check

```bash
yarn build
```

- Build MUST complete without errors
- Verify no new warnings related to bundle size

### Contrast Spot-Check

For any text that appears hard to read:
- Use browser DevTools → Accessibility panel
- Verify contrast ratio ≥ 4.5:1 for body text
- Verify contrast ratio ≥ 3:1 for large text (>18px)

## Common Issues

| Issue | Likely Cause | Fix |
|-------|-------------|-----|
| White flash on page load | Body background not set early enough | Ensure `bg-bg-primary` is on `<body>` in layout.tsx |
| Ant Design components still light | Missing `darkAlgorithm` in ConfigProvider | Add `algorithm: theme.darkAlgorithm` |
| Images look washed out | Missing card border contrast | Ensure glass-card borders are visible |
| Text invisible | Color too close to background | Check contrast ratios |
| Skeleton shimmer is light gray | Loading components not updated | Replace `bg-gray-50/50` with `bg-bg-card` |
