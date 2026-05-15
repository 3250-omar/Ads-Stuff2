# Tasks: Premium Brand Story Redesign

**Input**: Design documents from `/specs/002-premium-timeline-redesign/`
**Prerequisites**: plan.md, spec.md, research.md, data-model.md

**Organization**: Tasks are grouped by user story to enable independent implementation and testing of each story.

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Project initialization and structural verification

- [X] T001 Verify the target file `app/[locale]/_comp/sections/TimeLine.tsx` exists and is accessible for modification
- [X] T002 [P] Verify all required i18n keys are present in `messages/en.json` and `messages/ar.json` under the `Timeline` namespace

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Core structure and animation setup required for all stories

- [X] T003 Extract existing data fetching (`useGetSocialMedia`) and i18n logic from `TimeLine.tsx` to preserve during redesign
- [X] T004 [P] Define the high-level Bento Grid container using Tailwind 4 grid utilities in `app/[locale]/_comp/sections/TimeLine.tsx`
- [X] T005 [P] Setup GSAP context and ScrollTrigger boilerplate in `TimeLine.tsx` for section animations

**Checkpoint**: Foundation ready - the section has a basic grid structure and is ready for content cards.

---

## Phase 3: User Story 1 - Immersive Brand Introduction (Priority: P1) 🎯 MVP

**Goal**: Deliver a high-fidelity glassmorphic introduction card for the agency's "Who We Are" content.

**Independent Test**: Verify the "Who We Are" content renders in a large, blurred card with proper dark-mode contrast.

### Implementation for User Story 1

- [X] T006 [US1] Create the primary "Who We Are" glassmorphic card component in `app/[locale]/_comp/sections/TimeLine.tsx`
- [X] T007 [P] [US1] Apply Tailwind 4 glassmorphic styles (`bg-white/5`, `backdrop-blur-xl`, `border-white/10`) to the intro card
- [X] T008 [US1] Map `whoWeAre.title` and `whoWeAre.description` translations to the card using `next-intl`

**Checkpoint**: User Story 1 is functional and provides a premium introduction.

---

## Phase 4: User Story 2 - Interactive Services Discovery (Priority: P2)

**Goal**: Replace the bulleted list with an interactive grid of service items.

**Independent Test**: Verify all 6 services are displayed in a grid with hover effects.

### Implementation for User Story 2

- [X] T009 [US2] Create the "Services" grid card in `app/[locale]/_comp/sections/TimeLine.tsx`
- [X] T010 [P] [US2] Map `services.items` from i18n to individual service cards/items with hover glow effects
- [X] T011 [US2] Use Ant Design 6.x Typography for consistent service labels within the grid

**Checkpoint**: User Story 2 is functional and provides an engaging view of agency capabilities.

---

## Phase 5: User Story 3 - Social Platform Connectivity (Priority: P3)

**Goal**: Provide premium-styled social media links with dynamic data.

**Independent Test**: Verify social icons open correct URLs from Supabase and have premium hover transitions.

### Implementation for User Story 3

- [X] T012 [US3] Create the "Platforms" connectivity card in `app/[locale]/_comp/sections/TimeLine.tsx`
- [X] T013 [US3] Integrate `useGetSocialMedia` hook and map icons to the new layout
- [X] T014 [P] [US3] Apply premium hover transitions (`scale-110`, `shadow-lg`, `glow`) to social icons

**Checkpoint**: All user stories are now independently functional.

---

## Phase 6: Polish & Cross-Cutting Concerns

**Purpose**: High-fidelity animations, responsiveness, and final validation

- [X] T015 [P] Implement GSAP staggered entrance animations for all cards in `TimeLine.tsx` using `stagger: 0.1`
- [X] T016 [P] Ensure responsive grid behavior (Mobile/Tablet/Desktop) using Tailwind 4 grid-cols
- [ ] T017 [P] Verify RTL (Arabic) layout direction and text alignment parity
- [ ] T018 Run `quickstart.md` validation and perform visual QA on all breakpoints

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies - can start immediately
- **Foundational (Phase 2)**: Depends on Setup completion - BLOCKS all content cards
- **User Stories (Phase 3+)**: All depend on Phase 2. Can proceed in priority order (P1 → P2 → P3) or in parallel.
- **Polish (Phase 6)**: Depends on all user stories being implemented.

### User Story Dependencies

- **US1**: Independent.
- **US2**: Independent, but layout looks best when US1 is also present.
- **US3**: Independent, but integrates with external data.

### Parallel Opportunities

- T004 and T005 (Layout vs Animation setup)
- T007 (Styling US1) and T010 (Styling US2)
- T015, T016, T017 (Polish phase concerns)

---

## Implementation Strategy

### MVP First (User Story 1 Only)

1. Complete Setup + Foundational.
2. Complete US1 (Intro Card).
3. Verify the landing page shows a premium intro even if other parts are still work-in-progress.

### Incremental Delivery

1. Add Services Grid (US2).
2. Add Social Links (US3).
3. Finalize animations and responsiveness (Polish).
