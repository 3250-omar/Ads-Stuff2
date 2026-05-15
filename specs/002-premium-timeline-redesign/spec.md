# Feature Specification: Premium Brand Story Redesign

**Feature Branch**: `002-premium-timeline-redesign`  
**Created**: 2026-05-15  
**Status**: Draft  
**Input**: User description: "redesign timeline section as that time line isnt good for the new branding create a new premium design for it not nesssecary to be a timeline"

## User Scenarios & Testing *(mandatory)*

### User Story 1 - Immersive Brand Introduction (Priority: P1)

As a potential client, I want to see a visually stunning and clear introduction to the agency so that I immediately understand their premium brand positioning.

**Why this priority**: First impressions are critical for a portfolio. The current timeline feels dated; a modern layout reinforces the agency's design expertise.

**Independent Test**: Can be tested by navigating to the brand section and verifying the "Who We Are" content is displayed in a high-fidelity, responsive card.

**Acceptance Scenarios**:

1. **Given** the user is on the landing page, **When** they scroll to the Brand Story section, **Then** they see a glassmorphic introduction card with the "Who We Are" title and description.
2. **Given** a mobile device, **When** viewing the section, **Then** the layout stacks elegantly without losing the premium aesthetic.

---

### User Story 2 - Interactive Services Discovery (Priority: P2)

As a visitor, I want to explore the agency's services through an interactive and modern grid so that I can easily see the breadth of their capabilities.

**Why this priority**: Services are the core offering. Replacing a simple bulleted list with an interactive grid improves engagement and perceived value.

**Independent Test**: Can be tested by interacting with the services grid and verifying all 6 services are present and have hover states.

**Acceptance Scenarios**:

1. **Given** the services grid, **When** a user hovers over a service item, **Then** a subtle glow or scale effect highlights that specific service.
2. **Given** the services data, **When** the component renders, **Then** all services from the i18n configuration are correctly mapped to the new layout.

---

### User Story 3 - Social Platform Connectivity (Priority: P3)

As a user, I want to easily find and connect with the agency on social platforms through premium-styled links.

**Why this priority**: Social proof and connectivity are important for lead generation.

**Independent Test**: Can be tested by clicking the social platform icons and verifying they open the correct URLs in a new tab.

**Acceptance Scenarios**:

1. **Given** the social platform links, **When** clicked, **Then** they navigate to the respective social media URL in a new browser tab.
2. **Given** the social icons, **When** rendered, **Then** they use the brand-consistent dark-mode style with premium hover transitions.

### Edge Cases

- **Loading State**: How does the platforms section handle the loading state from `useGetSocialMedia`? (Assumed: Subtle skeleton or loading spinner within the card).
- **RTL Support**: How does the grid/bento layout handle Arabic (RTL)? (Assumed: Flex/Grid directions swap correctly per Next.js i18n patterns).

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: The component MUST replace the existing `TimeLine.tsx` implementation with a non-linear, premium layout (e.g., Bento Grid or Layered Cards).
- **FR-002**: The design MUST strictly follow the "Premium Dark Mode" aesthetic, utilizing glassmorphism (translucency + blur) and glowing accents.
- **FR-003**: All text MUST be fetched from the existing `Timeline` translation namespace using `next-intl`.
- **FR-004**: Social media data MUST be fetched using the existing `useGetSocialMedia` hook.
- **FR-005**: The section MUST be fully responsive, transitioning from a grid/complex layout on desktop to a readable stacked layout on mobile.
- **FR-006**: Animations MUST use GSAP and/or Tailwind CSS transitions for smooth, high-end interactions (e.g., entrance fades, hover glows).

### Key Entities *(include if feature involves data)*

- **Brand Info**: Represents the agency's core identity (Title, Description).
- **Service**: A discrete capability offered by the agency (Name, Icon/Symbol).
- **Social Link**: A connection point to an external platform (Platform Name, Icon, URL).

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: The redesign achieves 100% parity with existing content (no data from the original timeline is lost).
- **SC-002**: First Input Delay (FID) for interactions within the section is under 100ms.
- **SC-003**: The section passes visual QA for both Dark Mode and RTL (Arabic) across standard breakpoints (Mobile, Tablet, Desktop).
- **SC-004**: Implementation utilizes Ant Design 6.x components or tokens to maintain design system consistency.

## Assumptions

- **A-001**: The existing "Timeline" i18n keys are sufficient and do not require modification.
- **A-002**: The current Supabase data structure for social media links remains unchanged.
- **A-003**: Performance remains a priority; GSAP animations will be optimized to avoid layout shifts.
- **A-004**: The section name in the code may remain `TimeLine.tsx` for structural preservation, even if the UI is no longer a timeline.
