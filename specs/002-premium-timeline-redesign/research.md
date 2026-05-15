# Research: Premium Brand Story Redesign

## Layout Patterns

### Decision: Bento Grid Layout
**Rationale**: A Bento Grid (asymmetric grid of varied card sizes) is currently the gold standard for premium portfolio layouts. It allows for a non-linear narrative that feels "curated" rather than "listed".
**Alternatives considered**: 
- **Layered Story Cards**: Vertical scrolling cards with parallax effects. Rejected because it might clash with other sections' vertical flow.
- **Traditional Timeline**: Current implementation. Rejected by user request.

## Visual Styling: Glassmorphism

### Decision: Tailwind 4 + Ant Design 6 Hybrid
**Rationale**: Use Ant Design 6.x tokens for consistent sizing and primary colors, but use Tailwind 4's powerful utility classes for the glassmorphic layer (`bg-white/5 backdrop-blur-xl border border-white/10`).
**Best Practices**:
- Ensure high contrast for text over glass backgrounds.
- Use `mask-image` or subtle radial gradients for "glow" effects.

## Animations: GSAP High-Fidelity Entrance

### Decision: Staggered Entrance with Reveal
**Rationale**: Use GSAP to animate cards from `y: 40, opacity: 0` with a slight `stagger` to create a "loading" effect that feels intentional and premium.
**Implementation**: 
- `gsap.from(".brand-card", { y: 40, opacity: 0, stagger: 0.1, duration: 0.8, ease: "power3.out" })`

## Conclusion
The redesigned section will be a responsive Bento Grid. The largest card will hold the "Who We Are" text, a secondary card will list "Services" in a dense grid, and a tertiary card (or floating bar) will hold "Connect" links.
