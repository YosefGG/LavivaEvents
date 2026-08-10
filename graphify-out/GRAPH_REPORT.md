# Graph Report - LavivaEvents  (2026-08-10)

## Corpus Check
- 48 files · ~8,874 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 140 nodes · 373 edges · 10 communities
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `3c1ed853`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- [[_COMMUNITY_Community 0|Community 0]]
- [[_COMMUNITY_Community 1|Community 1]]
- [[_COMMUNITY_Community 2|Community 2]]
- [[_COMMUNITY_Community 3|Community 3]]
- [[_COMMUNITY_Community 4|Community 4]]
- [[_COMMUNITY_Community 5|Community 5]]
- [[_COMMUNITY_Community 6|Community 6]]
- [[_COMMUNITY_Community 7|Community 7]]
- [[_COMMUNITY_Community 8|Community 8]]

## God Nodes (most connected - your core abstractions)
1. `getText()` - 36 edges
2. `useStaggerReveal()` - 20 edges
3. `BookButton()` - 11 edges
4. `Reveal()` - 11 edges
5. `SectionHeading()` - 10 edges
6. `useScrollReveal()` - 8 edges
7. `ContactSection()` - 7 edges
8. `businessInfo` - 7 edges
9. `getRevealClassName()` - 7 edges
10. `getWhatsAppUrl()` - 6 edges

## Surprising Connections (you probably didn't know these)
- `AboutSection()` --calls--> `getText()`  [EXTRACTED]
  src/components/AboutSection/AboutSection.jsx → src/config/language.js
- `ContactSection()` --calls--> `getText()`  [EXTRACTED]
  src/components/ContactSection/ContactSection.jsx → src/config/language.js
- `ContactSection()` --calls--> `getWhatsAppUrl()`  [EXTRACTED]
  src/components/ContactSection/ContactSection.jsx → src/data/businessInfo.js
- `EventTypesStrip()` --calls--> `getText()`  [EXTRACTED]
  src/components/EventTypesStrip/EventTypesStrip.jsx → src/config/language.js
- `EventTypesStrip()` --calls--> `useStaggerReveal()`  [EXTRACTED]
  src/components/EventTypesStrip/EventTypesStrip.jsx → src/hooks/useScrollReveal.js

## Import Cycles
- None detected.

## Communities (10 total, 0 thin omitted)

### Community 0 - "Community 0"
Cohesion: 0.08
Nodes (23): dependencies, @emotion/react, @emotion/styled, @mui/icons-material, @mui/material, react, react-dom, react-router-dom (+15 more)

### Community 1 - "Community 1"
Cohesion: 0.18
Nodes (16): BookButton(), BookingCTA(), Breadcrumbs(), CategoryCard(), SectionHeading(), TestimonialCard(), getText(), categories (+8 more)

### Community 2 - "Community 2"
Cohesion: 0.17
Nodes (18): AboutSection(), CatalogPreviewSection(), ContactSection(), GallerySection(), HeroSection(), Reveal(), Stats(), WhyChooseUs() (+10 more)

### Community 3 - "Community 3"
Cohesion: 0.36
Nodes (7): Header(), Logo(), businessInfo, homeSectionIds, navLinks, scrollToSection(), useScrollSpy()

### Community 4 - "Community 4"
Cohesion: 0.53
Nodes (3): TestimonialsSection(), testimonials, useCarousel()

### Community 5 - "Community 5"
Cohesion: 0.21
Nodes (8): App(), Footer(), Layout(), WhatsAppFab(), getWhatsAppUrl(), router, colors, muiTheme

### Community 6 - "Community 6"
Cohesion: 0.29
Nodes (6): EventTypesStrip(), ProductCard(), ProductGrid(), getProductWhatsAppUrl(), eventTypes, getEventTypeById()

### Community 7 - "Community 7"
Cohesion: 0.33
Nodes (5): plugins, rules, react/only-export-components, react/rules-of-hooks, $schema

### Community 8 - "Community 8"
Cohesion: 0.33
Nodes (5): Business Context, Laviva Events, Site Structure, Tech Stack, Website Goal

## Knowledge Gaps
- **31 isolated node(s):** `$schema`, `plugins`, `react/rules-of-hooks`, `react/only-export-components`, `name` (+26 more)
  These have ≤1 connection - possible missing edges or undocumented components.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `getText()` connect `Community 1` to `Community 2`, `Community 3`, `Community 5`, `Community 6`?**
  _High betweenness centrality (0.116) - this node is a cross-community bridge._
- **Why does `useStaggerReveal()` connect `Community 2` to `Community 1`, `Community 4`, `Community 6`?**
  _High betweenness centrality (0.036) - this node is a cross-community bridge._
- **What connects `$schema`, `plugins`, `react/rules-of-hooks` to the rest of the system?**
  _31 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Community 0` be split into smaller, more focused modules?**
  _Cohesion score 0.08333333333333333 - nodes in this community are weakly interconnected._