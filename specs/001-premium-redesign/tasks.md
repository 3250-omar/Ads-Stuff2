# Tasks: Premium Dark Mode Redesign

**Input**: Design documents from `/specs/001-premium-redesign/`
**Prerequisites**: plan.md (required), spec.md (required for user stories), research.md, data-model.md, quickstart.md

**Organization**: Tasks are grouped by user story to enable independent implementation and testing of each story.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (e.g., US1, US2, US3)
- Include exact file paths in descriptions

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Project initialization and basic structure

- [x] T001 Initialize design tokens and theme constants in documentation/design system notes
- [x] T002 [P] Verify `next-themes` presence and configuration in `package.json`

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Core infrastructure that MUST be complete before ANY user story can be implemented

- [x] T003 Update `globals.css` with dark mode `@theme` tokens (colors, gradients, glows)
- [x] T004 [P] Define glassmorphic utility classes and animations in `globals.css`
- [x] T005 Update `layout.tsx` Ant Design `ConfigProvider` with `darkAlgorithm` and custom tokens
- [x] T006 Configure `body` background and text color tokens in `app/[locale]/layout.tsx`

**Checkpoint**: Foundation ready - visual base is dark, AntD components are themed.

## Phase 3: User Story 1 - Dark Mode Visual Foundation (Priority: P1) 🎯 MVP

**Goal**: Establish the base dark theme across the entire site including loading states.

**Independent Test**: Page background is dark green-black, text is light, and loading skeletons use dark shimmer.

### Implementation for User Story 1

- [x] T007 [P] [US1] Update `app/[locale]/loading.tsx` with dark pulse loading state
- [x] T008 [P] [US1] Update `app/[locale]/_comp/PageContent.tsx` with dark shimmer skeletons
- [x] T009 [US1] Audit `app/[locale]/layout.tsx` for any hardcoded white backgrounds in providers/wrappers

**Checkpoint**: User Story 1 functional - the "empty" page is correctly dark-themed.

## Phase 4: User Story 2 - Premium Hero & Navigation Experience (Priority: P2)

**Goal**: Create a cinematic first impression with a mosaic hero and frosted dark navbar.

**Independent Test**: Navbar transitions from transparent to frosted-glass dark on scroll; Hero shows media grid mosaic.

### Implementation for User Story 2

- [x] T010 [US2] Update `components/NavBar.tsx` to transition to frosted dark glass on scroll
- [x] T011 [P] [US2] Redesign `app/[locale]/_comp/sections/HeroSection.tsx` with cinematic media grid layout
- [x] T012 [P] [US2] Update `app/[locale]/_comp/sections/imageStock.tsx` (if used) to match dark hero styling
- [x] T013 [US2] Style mobile navigation pill with dark glass effect in `components/NavBar.tsx`

**Checkpoint**: First fold is premium dark and cinematic.

## Phase 5: User Story 3 - Redesigned Project Showcase (Priority: P3)

**Goal**: Present work as cinematic horizontal cards with navigation arrows.

**Independent Test**: Projects display as wide horizontal glassmorphic cards with large imagery.

### Implementation for User Story 3

- [x] T014 [US3] Redesign `app/[locale]/_comp/sections/ProjectsSection.tsx` with horizontal cinematic card layout
- [x] T015 [P] [US3] Update project cards in `components/projects/ProjectCard.tsx` (or similar) to use dark glassmorphism
- [x] T016 [US3] Implement navigation arrows/controls for project carousel in `ProjectsSection.tsx`

**Checkpoint**: Portfolio projects look premium and high-impact.

## Phase 6: User Story 4 - Partners & Trusted Clients Showcase (Priority: P4)

**Goal**: Display partner logos in a clean, prestigious logo-bar format.

**Independent Test**: Partner logos are clearly visible and cleanly aligned against dark backgrounds.

### Implementation for User Story 4

- [x] T017 [US4] Redesign `app/[locale]/_comp/sections/OurCustomers.tsx` with clean horizontal logo bar styling
- [x] T018 [P] [US4] Add contrast/brightness filters to partner logos in `OurCustomers.tsx` for dark background visibility

**Checkpoint**: Client social proof is professionally integrated into the dark theme.

## Phase 7: User Story 5 - Statistics, Timeline & Contact Redesign (Priority: P5)

**Goal**: Complete the visual redesign for secondary informational sections.

**Independent Test**: Counters glow, timeline cards are glassmorphic, and contact area is sleek and dark.

### Implementation for User Story 5

- [x] T019 [US5] Update `app/[locale]/_comp/sections/StatictsSection.tsx` with glowing numbers and dark glass cards
- [x] T020 [P] [US5] Update `app/[locale]/_comp/sections/TimeLine.tsx` with dark glass cards and glowing green line
- [x] T021 [P] [US5] Redesign `app/[locale]/_comp/sections/ContactsSection.tsx` with dark-themed CTA area and form elements
- [x] T022 [US5] Update `app/[locale]/_comp/sections/ArticlesSection.tsx` with dark grid and glass article cards

**Checkpoint**: All main landing page sections are fully redesigned.

## Phase 8: User Story 6 - Footer & WhatsApp Widget Redesign (Priority: P6)

**Goal**: Ensure final elements and floating widgets match the premium dark theme.

**Independent Test**: Footer is dark with green highlights; WhatsApp widget is dark-styled.

### Implementation for User Story 6

- [x] T023 [US6] Redesign `components/Footer.tsx` with dark background and green brand accent
- [x] T024 [P] [US6] Update social icons in `Footer.tsx` with hover glow effects
- [x] T025 [P] [US6] Restyle floating WhatsApp widget in `components/ToWhatsapp.tsx` to match dark theme

**Checkpoint**: Full page visual consistency achieved.

## Phase 9: Polish & Cross-Cutting Concerns

**Purpose**: Final audit and refinements across the entire application.

- [x] T026 [P] Audit all sub-pages (`/projects`, `/articles`, `/skills`) for dark mode consistency
- [ ] T027 [P] Audit all components in `components/` for hardcoded `bg-white` or `text-gray-*` classes
- [ ] T028 Verify RTL (Arabic) layout consistency for all new dark-themed layouts
- [ ] T029 Perform final visual inspection on Mobile (375px) and Tablet (768px)
- [ ] T030 Run full `quickstart.md` validation checklist

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies - start first.
- **Foundational (Phase 2)**: Depends on Phase 1 - BLOCKS all User Stories.
- **User Stories (Phase 3+)**: All depend on Phase 2 completion.
  - US1 (P1) is the primary MVP foundation.
  - US2-US6 can proceed in parallel once Phase 2 is done.
- **Polish (Phase 9)**: Depends on all user stories being complete.

### User Story Dependencies

- **User Story 1 (P1)**: Prerequisite for visual verification of all other stories.
- **User Story 2-6**: Mostly independent visual updates.

### Parallel Opportunities

- T007-T009 (US1 implementation)
- T011-T012 (US2 Hero elements)
- T015-T016 (US3 Project components)
- T020-T022 (US5 Secondary sections)
- T024-T025 (US6 Footer/Widgets)

## Implementation Strategy

### MVP First (User Story 1 Only)

1. Complete Phase 1: Setup
2. Complete Phase 2: Foundational (CRITICAL)
3. Complete Phase 3: User Story 1
4. **STOP and VALIDATE**: Test basic dark mode and loading states.

### Incremental Delivery

1. Foundation + US1 -> Dark base ready.
2. Add US2 -> Hero & Nav premium.
3. Add US3 -> Projects premium.
4. Add US4-US6 -> Full site premium.

## Notes

- [P] tasks = different files, no dependencies
- [Story] label maps task to specific user story for traceability
- Verify contrast ratios during implementation of each section
- Commit after each section redesign is complete
