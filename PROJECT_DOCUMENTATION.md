# Project Documentation: Ads & Stuff Portfolio

## 1. Executive Summary
**Ads & Stuff** is a premium, high-performance portfolio platform designed for a digital advertising agency. The product focuses on "Cinema, Story, and Impact," providing an immersive visual experience to showcase creative work, client success stories, and technical expertise. The platform is built with a "Premium Dark" aesthetic, utilizing modern web technologies to ensure a seamless, high-end user experience across all devices.

## 2. Core Product Vision
The primary goal of the platform is to serve as a high-conversion digital storefront for the agency. It aims to:
- **Wow Visitors**: Use cinematic visuals, glassmorphism, and smooth animations to create an immediate "premium" feel.
- **Showcase Expertise**: Provide a structured, data-driven display of projects, skills, and industry impact.
- **Build Trust**: Leverage dynamic testimonials (Feedbacks), client logos (Our Customers), and statistical achievements.
- **Enable Frictionless Contact**: Integrate direct WhatsApp and email communication channels.

---

## 3. Key Features

### 🎨 Design & User Experience
- **Premium Dark Aesthetic**: A deep dark color palette (#0A0F0D range) with luminous green accents (#4A6B50).
- **Glassmorphism**: UI elements feature frosted-glass effects (backdrop-blur, semi-transparent backgrounds) for a modern, airy feel.
- **Cinematic Animations**: GSAP-powered scroll-triggered animations and hover effects (glows, transitions).
- **Responsive & Adaptive**: Fully optimized for mobile, tablet, and desktop viewports, including a mobile-specific bottom navigation pill.
- **Multi-language (i18n)**: Full support for English and Arabic (RTL) locales.

### 🏠 Homepage Sections
1.  **Hero Section**: Cinematic media grid/mosaic showcasing high-impact visuals with bold overlay typography.
2.  **Projects Showcase**: Horizontal cinematic cards for project case studies with smooth navigation.
3.  **Skills Section**: Visual representation of the agency's core competencies.
4.  **Statistics Section**: Glowing numerical counters highlighting key performance indicators (KPIs).
5.  **Timeline (About)**: A glassmorphic chronological view of the agency's journey and milestones.
6.  **Feedbacks**: Dynamic testimonial carousel for client social proof.
7.  **Our Customers**: Grayscale, hover-revealing logo bar for partner recognition.
8.  **Articles Section**: Integration for blog posts or thought leadership pieces.
9.  **Contacts**: Sleek "Let's Work Together" area with WhatsApp integration and EmailJS support.
10. **Image Stock**: Media gallery for showcasing high-quality assets.

### ⚙️ Technical Capabilities
- **Dynamic Content Management**: All projects, feedbacks, customers, and media are managed via **Supabase**.
- **Real-time Performance**: Optimized data fetching and caching using **TanStack Query**.
- **Global Reach**: Localized routing and content delivery via **next-intl**.

---

## 4. Technology Stack

| Layer | Technology |
| :--- | :--- |
| **Framework** | Next.js 15+ (App Router) |
| **Language** | TypeScript |
| **UI Library** | Ant Design (v6) |
| **Styling** | Tailwind CSS v4 |
| **Database/Auth** | Supabase |
| **State Management** | TanStack Query (React Query) |
| **Animations** | GSAP |
| **Email Service** | EmailJS |
| **i18n** | next-intl |

---

## 5. Architecture & Structure

### Project Directory Layout
- `app/`: Contains the core logic, routes, and main page sections.
    - `[locale]/`: Localized route groups.
    - `_comp/sections/`: Modular homepage sections.
    - `api/`: Custom hooks for data fetching from Supabase.
- `components/`: Reusable global UI components (Navbar, Footer, GlassCards).
- `constants/`: Centralized static data and asset references.
- `lib/`: Configuration for external libraries (Ant Design Registry, etc.).
- `utils/`: Helper functions and Supabase client setup.
- `specs/`: Detailed technical specifications and implementation plans.

### Data Flow
1.  **Supabase** serves as the single source of truth for all dynamic content.
2.  **TanStack Query** fetches data through custom API hooks, providing caching and loading states.
3.  **Ant Design ConfigProvider** ensures consistent theming across all components.
4.  **next-intl** handles locale-specific rendering and URL management.

---

## 6. Design System & Data Model

While the backend data remains consistent, the visual layer is driven by a sophisticated **Design Token System** defined in `globals.css` and integrated with **Ant Design**.

### Core Design Tokens
- **Primary Accent**: `#4A6B50` (Brand Green)
- **Backgrounds**: `#0A0F0D` (Page), `#111A15` (Section), `#1A2420` (Card)
- **Typography**: `#E8F0E9` (Primary Text), `#9BA89E` (Muted Text)
- **Effects**: Custom `glass-card` classes and `glow-primary` shadows for depth.

### Ant Design Integration
The platform uses the `theme.darkAlgorithm` from Ant Design v6, with custom overrides in the `ConfigProvider` to ensure components (Buttons, Modals, Inputs) align perfectly with the agency's premium brand.

---

## 7. Implementation Status
The project is currently undergoing a **Premium Dark Mode Redesign** to align with the new visual identity. The foundation is built on Next.js 15 and Supabase, with an emphasis on high-fidelity animations and visual excellence.
