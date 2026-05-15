# Quickstart: Verifying Brand Story Redesign

## Setup
1. Ensure the development server is running: `yarn dev`.
2. Navigate to the local site (default `http://localhost:3000`).

## Verification Steps

### 1. Visual QA (Dark Mode)
- Scroll to the "Brand Story" section (between Hero and Projects).
- Verify the layout is a non-linear grid (Bento style).
- Check glassmorphism: Cards should have a translucent background and subtle border.
- Verify typography: Titles and text should follow the premium dark theme contrast.

### 2. Interaction & Animation
- Refresh the page and scroll to the section.
- Observe the entrance animation: Cards should animate in smoothly using GSAP.
- Hover over services and social icons: Verify micro-interactions (glow, scale).

### 3. Data Integrity
- Compare content with the original timeline (if possible) or check `messages/` files.
- Verify social media links are fetched correctly from the API.

### 4. Responsiveness
- Test on mobile (375px) and tablet (768px).
- Verify the Bento grid collapses into a readable single-column stack.

### 5. RTL Support
- Switch language to Arabic (`/ar`).
- Verify the layout direction flips correctly and text alignment is proper.
