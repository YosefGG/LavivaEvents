# Laviva Events

## Website Goal

This website is the marketing and lead-generation presence for **Laviva Events**, an Israeli event photography and visual experiences business. Its primary goal is to **convert visitors into booking inquiries** for photo booths, photo walls, and magnet printing at weddings, bar/bat mitzvahs, britot, corporate events, and other celebrations.

The site should:

- **Showcase services and products** through a browsable catalog (photo booths, photo walls, magnets, and related offerings).
- **Build trust and credibility** with social proof (reviews, stats, gallery, testimonials), brand story, and a premium, polished visual experience.
- **Drive contact and quotes** via clear calls to action — WhatsApp, contact form, and “Get a Quote” flows — so potential clients can easily reach the team.
- **Support bilingual audiences** (Hebrew primary, English secondary) with RTL/LTR layout as configured in `src/config/language.js`.

Every change to this codebase should serve that business goal: help event planners and hosts discover Laviva Events, understand what is offered, and take the next step toward booking.

## Business Context

- **Tagline:** Photo Booths & Visual Experiences for Events
- **Slogan:** Every Detail Matters
- **Service area:** Nationwide (Israel)
- **Core message:** Laviva does not just take photos — it creates memorable guest experiences with professional staff, custom design, and premium equipment.

Business copy and contact details live in `src/data/businessInfo.js`. Product and catalog data live in `src/data/products.js`.

## Site Structure

| Route | Purpose |
|-------|---------|
| `/` | Landing page — hero, event types, catalog preview, about, gallery, testimonials, booking CTA, contact |
| `/catalog` | Full product catalog |
| `/catalog/:categoryId` | Category-specific product listings |

## Tech Stack

React + Vite, React Router, CSS Modules, Material UI icons. Run `npm run dev` for local development.
