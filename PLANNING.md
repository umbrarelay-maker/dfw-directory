# DFW Directory - Planning Document

## Overview
A local attraction and directory site for the Dallas-Fort Worth metroplex. Think Timeout, Eater, or a local city magazine — editorial, trustworthy, and useful.

## Design Direction
- **Light theme** (primary) — clean, professional
- **Editorial aesthetic** — magazine-like, not startup-y
- **Typography-forward** — good fonts, readable, classic feel
- **Muted color palette** — earth tones, navy, cream
- **NOT our usual style** — less modern/dark, more timeless

### Inspiration
- Timeout.com
- Eater.com
- Thrillist.com
- Texas Monthly
- D Magazine

## Domain Ideas
| Domain | Status | Notes |
|--------|--------|-------|
| exploredfw.com | Possibly available | Clean, action-oriented |
| dfwnow.com | Possibly available | Short, punchy |
| dfwguide.com | Taken | - |
| dfwlocal.com | Taken | - |
| dallasdaybook.com | Check | Editorial feel |
| dfwscene.com | Check | Good for events/nightlife |

## Content Categories

### Core Sections
1. **Eat & Drink** — Restaurants, bars, cafes, breweries
2. **Things to Do** — Attractions, activities, experiences
3. **Events** — Calendar of local happenings
4. **Neighborhoods** — Area guides (Deep Ellum, Bishop Arts, etc.)
5. **Day Trips** — Destinations within 2-3 hours

### Future Sections
- Best of DFW (annual awards/lists)
- New Openings
- Weekend Guides
- Family-Friendly
- Free Things to Do

## Tech Stack
- **Framework:** Next.js 14+ (App Router)
- **Styling:** Tailwind CSS
- **Database:** Supabase (listings, events, categories)
- **CMS:** Consider Sanity or Contentlayer for editorial content
- **Maps:** Mapbox or Google Maps for location features
- **SEO:** Schema.org LocalBusiness, Event markup

## Site Structure

```
/                       → Homepage (featured + categories)
/eat-drink              → Restaurant/bar directory
/eat-drink/[slug]       → Individual listing
/things-to-do           → Activities directory
/things-to-do/[slug]    → Individual listing
/events                 → Event calendar
/events/[slug]          → Event detail
/neighborhoods          → Area guides
/neighborhoods/[slug]   → Neighborhood guide
/day-trips              → Day trip guides
/search                 → Search results
```

## Database Schema (Draft)

### Listings
- id, name, slug, category, subcategory
- description, address, neighborhood
- latitude, longitude
- phone, website, hours
- price_range, tags
- featured, rating
- images[], created_at, updated_at

### Events
- id, name, slug, venue_id
- description, start_date, end_date
- recurring, category, price
- url, images[]

### Neighborhoods
- id, name, slug
- description, bounds (geo)
- highlights[], image

## SEO Strategy
- Target: "things to do in Dallas", "best restaurants DFW", "[neighborhood] guide"
- Local schema markup on all listings
- Event schema for calendar items
- Neighborhood guides for long-tail local searches
- Google Business integration potential

## Monetization (Future)
- Featured/sponsored listings
- Event promotion
- Local business advertising
- Affiliate links (OpenTable, Resy, tickets)

## MVP Scope
1. Homepage with featured listings
2. Eat & Drink section with 20-30 seed listings
3. Things to Do section with 15-20 listings
4. Neighborhood guides for 5 key areas
5. Basic search
6. Mobile-responsive light theme

## Next Steps
1. [ ] Finalize domain
2. [ ] Create design mockups / pick color palette
3. [ ] Set up Next.js project
4. [ ] Design database schema in Supabase
5. [ ] Build homepage + listing templates
6. [ ] Seed initial content (research DFW spots)

---
Created: 2026-02-07
Status: Planning
