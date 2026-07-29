# Antigravity Build Prompt — AC Service UAE Website Demo

Copy everything below into Antigravity as your build prompt.

---

Build a modern, premium 4-page marketing website for **"AC Service UAE"**, a 24/7 central AC maintenance and repair company based in Dubai, UAE. This is a lead-generation website meant to convert homeowners and businesses into service calls/WhatsApp inquiries. The client currently has NO website — this must look professional, trustworthy, and more polished than typical local HVAC sites in the region.

## Tech Stack (MERN)
- **Frontend**: React (Vite) + TypeScript — components: Navbar, Hero, ServiceCard, Testimonials, StatsCounter, ContactForm, Footer, MapEmbed
- **Styling**: Tailwind CSS for the blue/green/orange/white theme, consistent spacing and responsive breakpoints across all pages
- **Routing**: React Router (`react-router-dom`) with 4 real routes — `/`, `/about`, `/services`, `/contact`
- **Icons/Animation**: lucide-react for iconography (Wind, Snowflake, Wrench, ShieldCheck, Clock, Phone, MapPin); Framer Motion for scroll fade-ins, card hover-lift, and animated stat counters
- **Backend**: Node.js + Express API with:
  - `POST /api/contact` — validates and stores contact form submissions (name, phone, service needed, preferred time, message); optionally triggers an email/WhatsApp notification to the business owner
  - `GET /api/services` — serves the services list from the database so content can be edited later without a redeploy
  - `GET /api/testimonials` — serves testimonial data the same way
- **Database**: MongoDB (Atlas free tier) with three collections — `contacts`, `services`, `testimonials` — seed `services` and `testimonials` with this prompt's content so the site isn't empty on first run
- **API communication**: Axios on the frontend calling the Express API; `.env` for the API base URL so it points at localhost in dev and the deployed backend in production
- **Maps**: Google Maps `<iframe>` embed on the Contact page (no API key needed for a basic embed) — swap in the real coordinates once the client confirms their office/service hub
- **Deployment**: Frontend on Vercel, backend on Render or Railway, MongoDB Atlas free cluster — keeps the demo live and clickable when presenting to the client
- **Fonts**: Google Fonts — Inter or Poppins via `@fontsource` package

## Structure & Layout
- 4 pages: **Home, About, Services, Contact & Location**
- Fully responsive (mobile-first — most leads will click through from Google Maps/Instagram on mobile)
- Smooth scroll navigation + sticky header with a persistent "Call Now" and "WhatsApp Us" button (always visible, top-right on desktop, floating bottom-right on mobile)
- Fast-loading, clean component structure, semantic HTML for SEO

## Design System
- **Color palette**: White (base/background), Deep Blue (#0B5ED7-ish trust/cooling tone, primary), Green (#2E9E4F-ish, used for trust badges, checkmarks, "eco/efficient" messaging), Orange (#F97316-ish, used ONLY for CTAs/buttons/accents to drive clicks)
- White dominant background with blue used for headers/hero, green for service check-icons and highlights, orange for every clickable action (buttons, "Call Now", "Book a Free Inspection")
- Modern sans-serif font (Inter or Poppins), generous white space, rounded cards with soft shadows, subtle icon set (AC unit, snowflake, wrench, shield/warranty, clock for 24/7)
- Include subtle motion: fade-in on scroll for sections, hover-lift on service cards, animated counter for stats (e.g., "500+ Jobs Completed", "4.8★ Rating", "24/7 Availability")

## Page 1 — Home
- **Hero section**: Full-width banner (blue-to-white gradient), headline: "Dubai's Trusted 24/7 Central AC Repair & Maintenance", subheadline mentioning fast response and certified technicians. Two CTA buttons: "Call Now" (orange, tel: +971541970566) and "WhatsApp Us" (green outline)
- **Trust bar**: 4.8★ rating badge + "53+ Happy Customers", "Same-Day Service", "Licensed Technicians", "24/7 Emergency Support" — 4 small icon cards in a row
- **Services preview**: 6 cards (Central AC Inspection, Filter Cleaning & Replacement, Coil & Duct Cleaning, Thermostat & Electrical Check, Refrigerant Inspection, 24/7 Emergency Repair) — each links to Services page
- **Why Choose Us**: 3-4 column icon+text block (Fast Response, Transparent Pricing, Certified Technicians, Preventive Care Plans)
- **Testimonials carousel**: Pull 4-5 real quotes in spirit of the reviews (e.g., "quick response," "very professional team," "fixed the issue in 5 minutes with quality parts," "clean and reliable service") — paraphrase naturally, don't fabricate names
- **Service areas strip**: "Proudly serving Palm Jumeirah, Dubai Marina, JVC, Damac Hills 2, The Springs & all of Dubai"
- **Final CTA banner**: Orange full-width band — "Need AC Service Today? We're Available 24/7" with Call + WhatsApp buttons

## Page 2 — About
- Company story block: positioned as a team of experienced, licensed AC/HVAC technicians serving Dubai homes and businesses with fast, honest, quality repairs
- Mission/values: reliability, transparent pricing, quality parts, customer-first service
- "Our Process" — simple 4-step visual (Call/Book → Inspection → Transparent Quote → Same-Day Fix)
- Certifications/trust badges section (placeholder icons: Licensed, Insured, Genuine Parts, 24/7 Support)
- Stats row: Years of experience, Jobs completed, Average response time, Customer rating

## Page 3 — Services
Detailed service grid/list, each with icon, short description, and a "Request This Service" button:
1. Central AC Inspection & Diagnostics
2. Filter Cleaning & Replacement
3. Coil & Duct Cleaning
4. Thermostat & Electrical System Check
5. Refrigerant Level Inspection & Refill
6. Preventive Maintenance Contracts (Homes & Businesses)
7. 24/7 Emergency AC Repair
8. AC Installation & Replacement
9. Minor Electrical & Plumbing Support (secondary/optional service)
- Include a small "Residential vs Commercial" toggle or two-column split, since the business serves both
- End with a comparison-style "Maintenance Plan" callout box (Basic / Standard / Premium placeholders) to upsell recurring contracts

## Page 4 — Contact & Location
- Contact form: Name, Phone, Service Needed (dropdown), Preferred Time, Message
- Prominent click-to-call button: +971 54 197 0566
- WhatsApp button linking to wa.me/971541970566
- "Open 24 Hours" badge
- Embedded Google Map (use an iframe placeholder for Dubai, UAE — actual pin to be added when client confirms exact office/service hub location)
- List of areas covered (same list as homepage strip, expanded)
- Footer: logo, quick links, service list, phone, social icons (Instagram/Facebook placeholders), copyright

## Content Tone
Confident, professional, reassuring — written for homeowners worried about AC breakdowns in Dubai heat and for facility managers needing reliable commercial contracts. Avoid generic filler text; make every section feel specific to Dubai's climate and AC needs.

## Deliverable
A cohesive, demo-ready 4-page site I can present live to the client as a "here's what your business could look like" pitch — polished enough to convert a "we don't need a website" client into a paying customer.
