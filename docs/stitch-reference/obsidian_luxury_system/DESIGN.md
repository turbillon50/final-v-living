---
name: Obsidian Luxury System
colors:
  surface: '#131313'
  surface-dim: '#131313'
  surface-bright: '#3a3939'
  surface-container-lowest: '#0e0e0e'
  surface-container-low: '#1c1b1b'
  surface-container: '#201f1f'
  surface-container-high: '#2a2a2a'
  surface-container-highest: '#353534'
  on-surface: '#e5e2e1'
  on-surface-variant: '#b9cac9'
  inverse-surface: '#e5e2e1'
  inverse-on-surface: '#313030'
  outline: '#839493'
  outline-variant: '#3a4a49'
  surface-tint: '#00dddd'
  primary: '#ffffff'
  on-primary: '#003737'
  primary-container: '#00fbfb'
  on-primary-container: '#007070'
  inverse-primary: '#006a6a'
  secondary: '#c6c6c6'
  on-secondary: '#2f3131'
  secondary-container: '#454747'
  on-secondary-container: '#b5b5b5'
  tertiary: '#ffffff'
  on-tertiary: '#313030'
  tertiary-container: '#e5e2e1'
  on-tertiary-container: '#656464'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#00fbfb'
  primary-fixed-dim: '#00dddd'
  on-primary-fixed: '#002020'
  on-primary-fixed-variant: '#004f4f'
  secondary-fixed: '#e2e2e2'
  secondary-fixed-dim: '#c6c6c6'
  on-secondary-fixed: '#1a1c1c'
  on-secondary-fixed-variant: '#454747'
  tertiary-fixed: '#e5e2e1'
  tertiary-fixed-dim: '#c8c6c5'
  on-tertiary-fixed: '#1c1b1b'
  on-tertiary-fixed-variant: '#474646'
  background: '#131313'
  on-background: '#e5e2e1'
  surface-variant: '#353534'
typography:
  display-lg:
    fontFamily: Hanken Grotesk
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  display-md:
    fontFamily: Hanken Grotesk
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: -0.01em
  headline-lg:
    fontFamily: Hanken Grotesk
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.3'
  headline-lg-mobile:
    fontFamily: Hanken Grotesk
    fontSize: 20px
    fontWeight: '600'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.5'
  label-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '500'
    lineHeight: '1.2'
    letterSpacing: 0.05em
  label-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1.1'
    letterSpacing: 0.03em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  margin-mobile: 20px
  margin-desktop: 40px
  gutter: 16px
  stack-sm: 8px
  stack-md: 16px
  stack-lg: 32px
  stack-xl: 64px
---

## Brand & Style

This design system is engineered for the upper echelon of fractional ownership and premium lifestyle services. It blends the architectural serenity of **Aman Resorts**, the precision-focused functionalism of **Apple**, and the futuristic, dark-mode ergonomics of **Tesla**. 

The brand personality is **Elegant, Sophisticated, and Exclusive**. It prioritizes high-impact cinematic imagery over decorative UI elements. The visual language relies on depth, light, and motion rather than color, creating an environment that feels like a private lounge.

**Style Pillars:**
- **Luxury Minimalism:** Heavy use of negative space to create a "gallery" feel for high-end properties.
- **Glassmorphism:** Elements appear as semi-transparent obsidian sheets, utilizing backdrop blurs to maintain context and depth.
- **Light as Interaction:** Cyan and Caribbean Blue are not just colors; they are "light sources" used to indicate focus, activity, and premium status.
- **Cinematic Depth:** Subtle chrome reflections and soft inner glows give components a physical, tactile quality.

## Colors

The palette is strictly dark-mode, designed to make high-resolution photography "pop" against a void-like backdrop.

- **Obsidian (#050505):** The foundation. It should feel absolute and deep.
- **Charcoal (#121212):** Used for elevated surfaces and containers to create a perceived distance from the background.
- **Chrome (#E5E5E5):** Reserved for primary typography and iconography to ensure peak legibility.
- **Cyan/Caribbean Blue:** Used sparingly for interactive elements, active navigation states, and highlights. This acts as the "electrical" pulse of the UI.
- **Surface Gradients:** Use subtle linear gradients (top-left to bottom-right) on cards to simulate a soft light source hitting a metallic edge.

## Typography

The typography system uses a high-contrast pairing of **Hanken Grotesk** for dramatic headlines and **Inter** for precision-focused utility.

- **Headlines:** Use tight tracking and bold weights for "Display" roles to create a cinematic impact.
- **Body Text:** Inter provides a clean, neutral tone that stays out of the way of the content.
- **Labels:** Uppercase labels with increased letter-spacing are used for sub-headers and metadata (e.g., "FRACTIONAL OWNERSHIP") to evoke high-end editorial styling.
- **Hierarchy:** Rely on weight and color (Chrome vs. Muted Gray) rather than just size to distinguish importance.

## Layout & Spacing

This design system uses a **Fluid Grid** with fixed outer margins to ensure the interface feels expansive yet contained.

- **Mobile (PWA):** 4-column grid with 20px side margins. The bottom navigation bar is fixed, with a central "V" logo that sits slightly higher than the other icons.
- **Desktop/Dashboard:** 12-column grid. Components are grouped into "bento-style" layouts with consistent 16px gaps.
- **Rhythm:** An 8px base unit governs all dimensions. Use larger vertical stacks (stack-lg/xl) between major content sections to maintain the "Aman-esque" sense of space and tranquility.
- **Safe Areas:** Ensure interactive elements are at least 44px in height/width for mobile touch targets, despite the minimalist visual appearance.

## Elevation & Depth

Visual hierarchy is established through a system of "Layered Obsidian."

- **Level 0 (Base):** #050505.
- **Level 1 (Cards):** #121212 with a 1px border of `rgba(255, 255, 255, 0.1)`. This creates a crisp "blade" edge.
- **Level 2 (Overlays):** Glassmorphic surfaces using `backdrop-filter: blur(20px)` and a slightly lighter fill. These surfaces should feel like semi-transparent smoked glass.
- **Shadows:** Avoid heavy black shadows. Instead, use a very subtle "Ambient Glow" for active elements—a Cyan outer glow with 10-15% opacity to make the element appear as if it is backlit.
- **Reflections:** High-priority cards should feature a subtle diagonal linear gradient (white at 5% opacity to transparent) to simulate a overhead light reflection.

## Shapes

The shape language is **Rounded (0.5rem / 8px base)**, providing a sophisticated balance between aggressive technical corners and overly soft consumer aesthetics.

- **Standard Containers:** 16px (rounded-lg) for property cards and major sections.
- **Buttons & Inputs:** 8px (base roundedness) to maintain a structural, reliable feel.
- **Special Elements:** The central "V" logo and specific premium badges may use a "Pill" shape to stand out from the rectangular grid.
- **Borders:** Always use thin 1px strokes. Never use heavy borders.

## Components

### Buttons
- **Primary:** Solid Cyan (#00FFFF) with black text. High visibility for "Comprar" or "Reservar."
- **Secondary:** Transparent with a 1px Chrome border. White/Chrome text.
- **Ghost:** Minimal padding, Chrome text, used for "Ver todos" or secondary actions.

### Cards
- **Property Cards:** Full-bleed imagery with a bottom-aligned glassmorphic overlay for title and price. Subtle 1px border.
- **Service Chips:** Small, charcoal-background pills with cyan icons for category filtering (e.g., "Veleros", "Bienestar").

### Inputs
- **Field Style:** Dark charcoal background (#121212) with a 1px border that turns Cyan on focus. 
- **Icons:** Always use thin-stroke (lightweight) icons in Chrome or Cyan.

### Navigation
- **PWA Bottom Bar:** A high-blur glassmorphic bar. Icons are Muted Gray when inactive, Cyan when active. The central "V" logo should be treated as a primary action button, potentially featuring a metallic chrome texture.

### Dashboard Widgets
- **Bento Style:** Use varied card sizes (1x1, 2x1) to display ownership stats, calendar availability, and yield percentages. Include micro-charts in Cyan to visualize performance.