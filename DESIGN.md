---
name: Atmosphere Elite
colors:
  surface: '#0c1321'
  surface-dim: '#0c1321'
  surface-bright: '#323949'
  surface-container-lowest: '#070e1c'
  surface-container-low: '#151b2a'
  surface-container: '#19202e'
  surface-container-high: '#232a39'
  surface-container-highest: '#2e3544'
  on-surface: '#dce2f6'
  on-surface-variant: '#e0c0b1'
  inverse-surface: '#dce2f6'
  inverse-on-surface: '#2a3040'
  outline: '#a78b7d'
  outline-variant: '#584236'
  surface-tint: '#ffb68e'
  primary: '#ffb68e'
  on-primary: '#542200'
  primary-container: '#ff7a1a'
  on-primary-container: '#5e2700'
  inverse-primary: '#9c4500'
  secondary: '#4ae183'
  on-secondary: '#003919'
  secondary-container: '#06bb63'
  on-secondary-container: '#00431f'
  tertiary: '#9bcbff'
  on-tertiary: '#003256'
  tertiary-container: '#46a6f8'
  on-tertiary-container: '#003a61'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#ffdbca'
  primary-fixed-dim: '#ffb68e'
  on-primary-fixed: '#331200'
  on-primary-fixed-variant: '#773300'
  secondary-fixed: '#6bfe9c'
  secondary-fixed-dim: '#4ae183'
  on-secondary-fixed: '#00210c'
  on-secondary-fixed-variant: '#005228'
  tertiary-fixed: '#d0e4ff'
  tertiary-fixed-dim: '#9bcbff'
  on-tertiary-fixed: '#001d34'
  on-tertiary-fixed-variant: '#004a7a'
  background: '#0c1321'
  on-background: '#dce2f6'
  surface-variant: '#2e3544'
typography:
  display-lg:
    fontFamily: Manrope
    fontSize: 48px
    fontWeight: '800'
    lineHeight: 56px
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Manrope
    fontSize: 32px
    fontWeight: '800'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Manrope
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
  headline-sm:
    fontFamily: Manrope
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.05em
  caption:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 16px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 8px
  container-max: 1280px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 48px
  stack-sm: 12px
  stack-md: 24px
  stack-lg: 48px
---

## Brand & Style
The design system is engineered for a premium HVAC service provider in the UAE, blending technical authority with a sophisticated, high-end agency aesthetic. The personality is confident, precise, and reliable—essential for high-stakes climate control services in a desert environment.

The visual style utilizes **Modern Corporate** principles with a hint of **Glassmorphism**. It relies on deep, layered navy surfaces, high-contrast typography, and vibrant functional accents. The interface should feel "cool" (temperature-wise) through its dark base, while orange and green highlights provide warmth and urgency where action is required. The use of soft gradient orbs in the background adds a sense of atmospheric depth and modernity.

## Colors
The palette is built on a "Deep Night" foundation to evoke professional stability and cooling comfort.
- **Primary (Vivid Orange):** Reserved strictly for primary call-to-actions, conversion points, and urgent branding.
- **Secondary (Emerald Green):** Used for trust indicators, "Available Now" statuses, and WhatsApp integration buttons.
- **Tertiary (Sky Blue):** Utilized for technical accents, links, and icon backgrounds to reinforce the "cool air" metaphor.
- **Neutrals:** The background hierarchy moves from the deepest charcoal-navy at the base to lighter navy-blue on interactive surfaces, ensuring clear visual containment.

## Typography
The typography strategy pairings high-performance geometric fonts. **Manrope** is used for headlines to provide a modern, technical, yet friendly character with its wide apertures and balanced proportions. **Inter** is used for body copy and UI labels due to its exceptional legibility on dark backgrounds and systematic feel. 

Large display type should use tighter letter-spacing to appear more "designed" and authoritative. Labels and small captions use slightly increased letter-spacing to maintain readability against high-contrast backgrounds.

## Layout & Spacing
This design system utilizes a **12-column fluid grid** for desktop and a **4-column grid** for mobile. The spacing rhythm is based on an 8px baseline grid to ensure mathematical harmony across all components.

Layouts should favor generous vertical breathing room (stack-lg) between sections to maintain a premium feel. Content is primarily centered in a 1280px container on desktop, while inner component padding should remain tight and structured (typically 16px or 24px) to reflect technical precision.

## Elevation & Depth
Depth is created through **Tonal Layering** and **Subtle Glows** rather than heavy shadows. 
- **Level 0 (Base):** Deep charcoal-navy (#0B1220) for the main background.
- **Level 1 (Cards/Sections):** Secondary navy (#101B30) with a 1px border of `rgba(255,255,255,0.08)`.
- **Level 2 (Modals/Popovers):** Muted navy-blue (#16213B) with a soft 20% opacity black shadow and a subtle inner 1px highlight at the top.

To enhance the premium feel, use "Atmospheric Orbs"—large, low-opacity radial gradients of Sky Blue or Vivid Orange (5-10% opacity) placed far behind the content to create a sense of three-dimensional space and environmental control.

## Shapes
The shape language is "Softly Technical." A radius of 8px-10px (`rounded-md` to `rounded-lg`) is standard for most cards and input fields. This strikes a balance between the friendliness of rounded corners and the professional "grid-locked" feel of a technical service. Interactive elements like buttons and tags use slightly more pronounced rounding to make them more "touchable" and distinct from structural containers.

## Components
- **Buttons:** Primary buttons use a solid Vivid Orange (#FF7A1A) with white text and a subtle 4px bottom-glow on hover. Secondary buttons should be "Ghost" style with the blue-gray border and white text.
- **WhatsApp CTA:** A specialized floating or prominent button using Emerald Green (#2ECC71) with a white icon to signify trust and immediate accessibility.
- **Input Fields:** Surfaces use the #16213B fill with an 8px radius. The border should transition from subtle white-gray to Sky Blue (#3B9EF0) on focus.
- **Cards:** Use the Level 1 elevation (101B30). Ensure a consistent 24px internal padding. Icons within cards should be housed in a 48px Sky Blue tinted circle (15% opacity).
- **Service Chips:** Small, semi-transparent pills with 1px borders used to categorize services (e.g., "Emergency," "Residential," "Commercial").
- **Trust Indicators:** High-contrast badges featuring partner logos or "5-star" ratings should use the Emerald Green for the rating stars to reinforce the quality of service.