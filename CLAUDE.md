# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Startup Summit 2026 website for the Wharton Entrepreneurship Club. This is a Next.js 14 event website built on a Tailwind UI "Keynote" template, featuring the Summit schedule, speaker information, ticket pricing (via Eventbrite API), and sponsor displays. The event is a single-day conference on March 27, 2026 at Fitler Club.

## Commands

```bash
npm run dev      # Start development server (http://localhost:3000)
npm run build    # Production build
npm run start    # Start production server
npm run lint     # Run ESLint (note: ESLint errors are ignored during builds)
```

## Architecture

### Route Structure (App Router)
- `src/app/layout.tsx` - Root layout with fonts (Inter, DM Sans), metadata, Vercel Analytics
- `src/app/(main)/` - Homepage with Hero, TicketPricing, Speakers, Schedule, Sponsors
- `src/app/(pages)/` - Secondary pages (schedule, speakers, sponsors, faq, summit, organizers) with shared Header/Footer layout

### Key Patterns

**Image/Avatar Configuration**: All speaker avatars and company logos are centralized in `src/config/images.ts`. When adding new speakers or sponsors, add image paths here first, then reference them using the exported `avatars` and `logos` objects.

**Eventbrite Integration**: `src/lib/eventbrite.ts` fetches ticket data from Eventbrite API using `EVENTBRITE_API_KEY` env var. Data is cached with Next.js fetch revalidation (60s for tickets, 1hr for events).

**Component Conventions**:
- Client components use `'use client'` directive
- Use `clsx` for conditional classes
- Use `@/` path alias for imports from `src/`
- Headless UI (`@headlessui/react`) for tabs and interactive components
- Framer Motion for animations

### Styling
- Tailwind CSS v4 with custom theme in `src/styles/tailwind.css`
- Custom fonts: `--font-inter` (sans), `--font-dm-sans` (display)
- Prettier with `prettier-plugin-tailwindcss` for class sorting
- Code style: single quotes, no semicolons

### Data Structure
Speaker and schedule data are defined inline in components (`Schedule.tsx`, `Speakers.tsx`). The `summitSchedule` contains the Friday Summit events and `speakers` array contains all Summit speakers.
