# AC Service Frontend Design & Architecture System

This document outlines the entire design tokens system, typography scale, CSS classes, animation specifications, and component layout hierarchies for the **AC Service** frontend.

---

## 1. Core Theme & Design Tokens

The application is built on a custom **Premium Full-Dark Theme** with specific cooling (turquoise) and heat-response (orange) accent colors extracted from Peek.

### Color System Mapping

| Token Name | Hex Value | CSS Variable | Tailwind Class | Primary Purpose |
| :--- | :--- | :--- | :--- | :--- |
| **Page Base BG** | `#0d1a33` | `--color-dark-gray-1` | `bg-charcoal` | Dark site-wide background canvas |
| **Opaque Navy BG** | `#0f1a36` | `--color-dark-gray-2` | `bg-[#0f1a36]` | Sticky headers, footer strips, input elements |
| **Elevated Cards** | `#1e3368` | `--color-midnight-blue-1` | `bg-cardnavy` | Component cards, form wrapper, testimonials |
| **Primary White** | `#ffffff` | `--color-white` | `text-white` | High-importance text, titles |
| **Secondary Gray** | `#8a9bbf` | `--color-dark-gray` | `text-slate-400` / `text-slate-300` | Paragraphs, labels, inactive link states |
| **Cooling Turquoise** | `#33aef0` | `--color-medium-turquoise`| `text-[#33aef0]` / `bg-[#33aef0]` | Brand accent, active states, active icons |
| **Urgent Orange** | `#ff6b00` | `--color-orange` | `bg-cta-orange` | Core CTA buttons, highlights |
| **Urgent Coral** | `#ff8c33` | `--color-coral` | -- | CTA button hover gradient |
| **WhatsApp Green** | `#25d366` | `--color-lime-green` | `text-whatsapp-green` | WhatsApp branding green |
| **Royal Blue** | `#4285f4` | `--color-royal-blue` | `bg-royal-blue` | Structural shadows/accents |
| **Ghost White** | `#f4f7ff` | `--color-ghost-white` | `text-cream` | Fallback readable light text |

### Custom Gradients (backgroundImage Config)

These linear gradients are configured in `tailwind.config.js` with direct hex/rgb parameters:

1. **`bg-navy-gradient`**:
   `linear-gradient(135deg, rgb(15, 26, 54) 0%, rgb(25, 42, 86) 50%, rgb(26, 58, 110) 100%)`
   *Used for: Home Hero section background.*
2. **`bg-navy-gradient-3`**:
   `linear-gradient(135deg, rgb(25, 42, 86), rgb(0, 151, 230))`
   *Used for: Service coverage marquee and final CTA strip backgrounds.*
3. **`bg-cta-orange`**:
   `linear-gradient(135deg, #ff6b00, #ff8c33)`
   *Used for: Core buttons (Call Now, Call Hotline, Request callback hover).*

---

## 2. Typography & Fonts

* **Font Family**: Imported Google Font **`DM Sans`** (variable weights 100 to 1000). Applied as the default font-sans throughout the codebase.
* **Typography Scale (Semantic CSS Classes in `index.css`)**:

```css
.type-large-title { font-size: 64px; font-weight: 800; line-height: 1.00; }
.type-h1          { font-size: 58px; font-weight: 800; line-height: 1.10; }
.type-h2          { font-size: 44px; font-weight: 800; line-height: 1.15; }
.type-h3          { font-size: 20px; font-weight: 700; line-height: 1.60; }
.type-title       { font-size: 28px; font-weight: 800; line-height: 1.60; }
.type-body        { font-size: 17px; font-weight: 400; line-height: 1.70; }
.type-body-16     { font-size: 16px; font-weight: 400; line-height: 1.60; }
.type-small-body  { font-size: 14px; font-weight: 500; line-height: 1.60; }
.type-small       { font-size: 11px; font-weight: 700; line-height: 1.60; letter-spacing: 0.88px; }
.type-caption-12  { font-size: 12px; font-weight: 700; line-height: 1.60; letter-spacing: 1.44px; }
.type-link-14-600 { font-size: 14px; font-weight: 600; line-height: 1.60; }
```

---

## 3. Global Layout & Styling Shells

### A. Navigation Header (`Navbar.tsx`)
* **Layout**: Fixed `z-50` full-width menu wrapper.
* **Styling**: Solid background (`bg-[#0f1a36]`) with a thin bottom border (`border-dark-slate-gray/20`).
* **Links**: Inactive links are `text-slate-400`. The active link displays in turquoise (`text-[#33aef0]`) with a bottom border underline (`border-[#33aef0]`).
* **Desktop Actions**: Contains an orange gradient CTA button (`Call Now`) and an outlined green whatsapp button (`WhatsApp`).
* **Mobile Dropdown**: Sliding drawer trigger displaying vertical navigation links and expanded full-width calls.

### B. Footer Layout (`Footer.tsx`)
* **Layout**: 4-column footer layout (Brand Info, Quick Links, Contact Info, Coverage sectors) on a solid `bg-black` background.
* **Contrast**: All body, copyright info, links, and secondary descriptions use bright, readable color variables (`text-slate-300` and `text-slate-400`).

---

## 4. Key Component Structure

### A. Hero Section (`Hero.tsx`)
* **Structure**: Split 12-column grid layout.
  * **Left Column (7 cols)**: Accent beacon badge, titles (`type-large-title`), description, Call Hotline + WhatsApp CTAs, and a row of micro-badges (Clock, ShieldCheck, Check) displaying response times.
  * **Right Column (5 cols)**: Photo container frame (`bg-cardnavy` with asymmetric blue offset border) holding the technician image (fitted with a mix-blend filter layout) and a relative rating badge overlay (`★ 4.9 / 5.0`).
* **Spotlights**: Two slowly moving glowing circular background elements (`animate-mesh-1` and `animate-mesh-2`) drifting in the canvas background to give an premium depth.

### B. Service Cards (`ServiceCard.tsx` & `Services.tsx`)
* **Structure**: Grid box layout using `bg-cardnavy` with thin dark slate borders.
* **Filter Toggle**: Sub-page toggle filters cards based on categories: `All Solutions`, `Residential` (Home), `Commercial` (Office).
* **Booking Interaction**: Click button trigger calls `handleBookService` which passes target selection directly to `/contact?service=` using React Router navigations.

### C. Contact Booking Form (`ContactForm.tsx`)
* **State Values**:
  * Fields: `name` (text), `phone` (tel), `serviceNeeded` (dropdown select list), `preferredTime` (Morning/Afternoon/Evening options), and optional `message` (textarea).
* **API Integration**: POST request to `/api/contact` with loading transitions.
* **Layout**: Rounded dark navy box (`bg-cardnavy`) nested with inputs styled with dark slate colors, returning a full-width Success layout window upon successful booking.

### D. Testimonials Carousel (`Testimonials.tsx`)
* **Structure**: Framer-motion controlled sliding transition deck.
* **Features**: Dynamic testimonial fetch (`/api/testimonials`), automatic rotation loops, swipe actions, pagination dot indicator, and Chevron navigation buttons.
* **Card Frame**: Elevates the target text with `bg-cardnavy` and thin borders.

---

## 5. Animation Presets & CSS Transitions

1. **Slowly Morphing Gradient Blobs**:
   Runs `@keyframes morph` shifting corner radius and translate settings over `16s` and `22s` loops.
2. **Infinite Marquee Strip**:
   Runs `@keyframes marquee` continuous scrolling loop (`35s`) moving coverage areas across the screen horizontally.
3. **Framer Motion Presets**:
   * Stagger configurations: stagger delay of `0.12s` on hero titles.
   * Reveal variants: fade-in translation offset (`y: 30` to `y: 0`, duration `0.8s`) for sections as they scroll into view.
