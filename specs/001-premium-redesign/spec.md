# Feature Specification: Premium Dark Mode Redesign

**Feature Branch**: `001-premium-redesign`
**Created**: 2026-05-11
**Status**: Draft
**Input**: User description: "Redesign the whole website to be premium with dark mode aesthetic, keeping the existing structure"

## User Scenarios & Testing *(mandatory)*

### User Story 1 - Dark Mode Visual Foundation (Priority: P1)

A first-time visitor lands on the Ads & Stuff portfolio and is immediately immersed in a premium dark-themed experience. The deep dark backgrounds, luminous green accent highlights, and cinematic image presentation communicate that this is a high-end creative agency. The visitor feels the same "wow" factor as top-tier agency sites like the reference design — dark gradients, glassmorphic cards, and subtle glow effects throughout.

**Why this priority**: The visual foundation (color scheme, backgrounds, typography contrast) is the prerequisite for every other section. Without the dark mode base layer, no individual section can look correct.

**Independent Test**: Navigate to the homepage — the entire page renders with dark backgrounds, light text, green accent colors, and no white/light-mode artifacts remain visible.

**Acceptance Scenarios**:

1. **Given** a visitor on the homepage, **When** the page loads, **Then** the background is a deep dark color (near-black with subtle gradient), all text is light/white for readability, and the primary green accent (`#4A6B50` family) is used for highlights, buttons, and interactive elements.
2. **Given** a visitor scrolling through any section, **When** they view content cards/panels, **Then** those elements use glassmorphic styling (semi-transparent dark backgrounds, subtle borders, backdrop blur) rather than opaque white cards.
3. **Given** a visitor on any device (mobile, tablet, desktop), **When** the page renders, **Then** the dark theme is consistent across all breakpoints with no light-mode color leaks.

---

### User Story 2 - Premium Hero & Navigation Experience (Priority: P2)

A visitor arriving at the site sees a cinematic hero section with a full-width media mosaic/grid showing the agency's best work, overlaid with bold typography ("Cinema. Story. Impact." style), and call-to-action buttons with glow effects. The navigation bar is transparent over the hero, transitioning to a frosted-glass dark bar on scroll.

**Why this priority**: The hero and navbar are the first elements visitors see — they set the entire tone and must be redesigned to match the dark premium aesthetic before other sections.

**Independent Test**: Load the homepage and verify the hero has a cinematic media grid layout with overlay text, and the navbar transitions from transparent to frosted-dark on scroll.

**Acceptance Scenarios**:

1. **Given** a visitor on the homepage, **When** the hero section loads, **Then** they see a full-width cinematic layout with multiple project images arranged in a visually striking mosaic/grid pattern (replacing the current 3-card stack), bold headline text with high contrast against the dark background, and two CTA buttons (primary filled, secondary outlined) with glow/shadow effects.
2. **Given** a visitor at the top of the page, **When** they view the navbar, **Then** it is transparent with light text; **When** they scroll past the hero, **Then** the navbar smoothly transitions to a frosted-glass dark background with backdrop blur.
3. **Given** a mobile visitor, **When** viewing the hero, **Then** the media grid adapts to a compelling mobile layout, and the bottom navigation pill uses the dark glass aesthetic.

---

### User Story 3 - Redesigned Project Showcase (Priority: P3)

A visitor scrolling to the "Our Creative Impact" section sees project case studies presented as cinematic horizontal cards — each featuring a large project thumbnail on one side, project name, brief description, and a "View Case Study" link on the other, with left/right navigation arrows for browsing. This replaces the current basic grid layout.

**Why this priority**: The projects section is the core portfolio content — it must showcase work in a premium, immersive format that matches the dark aesthetic.

**Independent Test**: Scroll to the projects section and verify projects display as horizontal cinematic cards with dark glassmorphic backgrounds, project imagery, and navigation controls.

**Acceptance Scenarios**:

1. **Given** a visitor on the projects section, **When** projects load from Supabase, **Then** each project is displayed as a wide horizontal card with a dark glassmorphic background, featuring the project thumbnail prominently alongside the project name, description snippet, and a "View Case Study" call-to-action link with a green accent.
2. **Given** a visitor viewing projects, **When** they interact with navigation arrows, **Then** they can browse through projects with smooth transition animations.
3. **Given** a visitor on mobile, **When** viewing the projects section, **Then** cards stack vertically with full-width imagery and text below, maintaining the dark premium feel.

---

### User Story 4 - Partners & Trusted Clients Showcase (Priority: P4)

A visitor scrolling down sees a "Our Trusted Partners" section displaying client/partner logos in a clean horizontal row with subtle styling. The logos appear with a muted treatment that fits the dark background (light/white logos or faded treatment), and the overall presentation feels prestigious.

**Why this priority**: Social proof through partner logos adds credibility; the redesign must adapt the current marquee scroll of partner images to a cleaner, more prestigious logo-bar format matching the dark theme.

**Independent Test**: Scroll to the partners section and verify logos display cleanly against the dark background with appropriate contrast treatment.

**Acceptance Scenarios**:

1. **Given** a visitor on the partners section, **When** partner data loads, **Then** partner logos are displayed in a clean horizontal arrangement against the dark background with appropriate contrast/brightness treatment.
2. **Given** a visitor on any device, **When** viewing partners, **Then** logos are appropriately sized and the section maintains visual hierarchy without overwhelming the page.

---

### User Story 5 - Statistics, Timeline & Contact Redesign (Priority: P5)

A visitor sees the statistics counters presented with glowing accent styling against dark backgrounds, the timeline/about section uses dark glassmorphic cards with the vertical line in green, and the contact section features a sleek "Let's Work Together" CTA area with dark-themed form elements.

**Why this priority**: These sections complete the full-page dark redesign. They depend on the design foundation (US1) being in place but are individually simpler transformations.

**Independent Test**: Scroll through statistics, timeline, and contact sections — all render with dark backgrounds, glass-card styling, green accents, and no light-mode artifacts.

**Acceptance Scenarios**:

1. **Given** a visitor viewing statistics, **When** the section loads, **Then** counter cards have dark backgrounds with glowing green number text and subtle border/shadow effects.
2. **Given** a visitor viewing the timeline, **When** cards animate in, **Then** they use dark glassmorphic styling, the vertical line is green with a glow effect, and text is light-colored.
3. **Given** a visitor viewing the contact section, **When** they see the CTA, **Then** it features a prominent "Let's Work Together" heading with a dark-themed WhatsApp integration area.

---

### User Story 6 - Footer & WhatsApp Widget Redesign (Priority: P6)

A visitor at the bottom of the page sees a footer matching the dark premium aesthetic with the brand name, quick links, social icons, and copyright — all styled with dark backgrounds and green accent links. The floating WhatsApp widget matches the dark theme.

**Why this priority**: The footer and floating widgets complete the full-page visual consistency.

**Independent Test**: Scroll to the bottom and verify the footer renders with dark background, green accents, and light text. Verify the WhatsApp widget matches.

**Acceptance Scenarios**:

1. **Given** a visitor at the page bottom, **When** they see the footer, **Then** it has a dark background, the "Ads & Stuff" brand in green, light-colored links, social media icons with hover glow effects, and copyright text in muted gray.
2. **Given** a visitor on any page, **When** they see the WhatsApp floating widget, **Then** it uses dark-themed styling consistent with the overall redesign.

---

### Edge Cases

- What happens when Supabase data fails to load? Skeleton/loading states MUST use dark-themed placeholder animations (dark shimmer, not light gray pulses).
- How does the site handle images with predominantly dark content? The glassmorphic card borders and subtle glow effects MUST ensure images remain visually distinct from the background.
- What happens with RTL (Arabic) layout? All dark theme styling MUST work correctly in RTL mode with no layout breakage.
- What happens on very wide screens (>1920px)? Content MUST remain centered with appropriate max-widths; dark backgrounds MUST extend full-width.

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: The entire website MUST render with a dark color scheme by default — deep dark backgrounds (#0A0F0D to #1A2420 range), light text (#E0E0E0 to #FFFFFF), and green accent highlights (#4A6B50 family).
- **FR-002**: All existing Ant Design component theming MUST be updated to use dark mode tokens (dark backgrounds, light text, green primary color) via the ConfigProvider theme.
- **FR-003**: The navbar MUST transition from transparent (over hero) to frosted-glass dark (on scroll) using backdrop-blur and semi-transparent dark background.
- **FR-004**: The hero section MUST be redesigned with a cinematic media grid/mosaic layout replacing the current 3-card image stack, with bold overlay typography and glowing CTA buttons.
- **FR-005**: All content cards (projects, timeline, statistics, feedbacks) MUST use glassmorphic dark styling: semi-transparent dark backgrounds, subtle light borders, backdrop blur, and soft shadow/glow effects.
- **FR-006**: The projects section MUST display projects as horizontal cinematic cards with large thumbnails, text overlays, and navigation arrows.
- **FR-007**: Loading/skeleton states MUST use dark-themed shimmer animations consistent with the dark background.
- **FR-008**: The footer MUST use a dark background with green accent brand text, light links, and hover glow effects on social icons.
- **FR-009**: All CSS custom properties and Tailwind theme tokens MUST be updated to reflect the dark color palette while preserving the existing green brand identity.
- **FR-010**: The mobile bottom navigation pill MUST use frosted dark glass styling instead of the current green/white.
- **FR-011**: All existing i18n functionality (next-intl) MUST continue to work identically — no translation regressions.
- **FR-012**: All existing Supabase data fetching (projects, customers, feedbacks, social media, hero media) MUST continue to work — no API regressions.
- **FR-013**: The WhatsApp floating widget MUST be restyled to match the dark theme.

### Key Entities *(include if feature involves data)*

- **Design Tokens**: The CSS custom properties in `globals.css` `@theme` block that define colors, animations, and component classes — these are the primary entities being modified.
- **Ant Design Theme Config**: The ConfigProvider theme object in `layout.tsx` that controls all Ant Design component styling.
- **Section Components**: The 10 section components in `app/[locale]/_comp/sections/` that each need individual dark mode styling updates.

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: 100% of visible page areas render with dark backgrounds — zero white/light-mode panels visible on any viewport size.
- **SC-002**: All interactive elements (buttons, links, cards) have visible hover/focus states with glow or transition effects that are clearly perceptible.
- **SC-003**: Text readability maintains WCAG AA contrast ratio (minimum 4.5:1) between text and dark backgrounds across all sections.
- **SC-004**: Page load performance (LCP) remains under 3 seconds — the redesign MUST NOT degrade current performance.
- **SC-005**: All existing features (navigation, project browsing, contact form, language switching, customer carousel) continue to function without regression.
- **SC-006**: The redesigned site passes visual inspection on mobile (375px), tablet (768px), and desktop (1440px) viewports with no layout breakage.
- **SC-007**: RTL (Arabic) layout renders correctly with the dark theme — no visual asymmetry or broken styles.

## Assumptions

- The existing green brand identity (#4A6B50 primary, #AEC3B0 secondary) will be preserved as accent colors within the dark theme — this is not a full rebrand.
- The existing project structure (file locations, component organization, routing) will be maintained per Constitution Principle III.
- Dark mode will be the ONLY theme — no light/dark toggle is needed for this feature.
- All Supabase data schemas remain unchanged — only the visual presentation layer is modified.
- The existing GSAP animation patterns will be enhanced, not replaced — scroll-triggered animations continue to work.
- The existing Ant Design v6 ConfigProvider approach will be used for component theming — no alternative theming system will be introduced.
- The `next-themes` package is already installed but dark mode toggle is not required — the site will be dark by default.
