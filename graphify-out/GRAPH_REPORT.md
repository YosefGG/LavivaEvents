# Graph Report - LavivaEvents  (2026-08-11)

## Corpus Check
- 55 files · ~15,040 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 176 nodes · 510 edges · 11 communities
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `d8ae2fba`
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
- [[_COMMUNITY_Community 10|Community 10]]

## God Nodes (most connected - your core abstractions)
1. `getText()` - 47 edges
2. `getQuoteWhatsAppUrl()` - 20 edges
3. `useStaggerReveal()` - 20 edges
4. `BookButton()` - 13 edges
5. `Reveal()` - 13 edges
6. `SectionHeading()` - 11 edges
7. `BlogPostPage()` - 9 edges
8. `ContactSection()` - 8 edges
9. `businessInfo` - 8 edges
10. `useScrollReveal()` - 8 edges

## Surprising Connections (you probably didn't know these)
- `BlogBody()` --calls--> `getText()`  [EXTRACTED]
  src/pages/BlogPostPage.jsx → src/config/language.js
- `AboutSection()` --calls--> `getText()`  [EXTRACTED]
  src/components/AboutSection/AboutSection.jsx → src/config/language.js
- `formatDate()` --calls--> `getText()`  [EXTRACTED]
  src/components/BlogCard/BlogCard.jsx → src/config/language.js
- `BlogCard()` --calls--> `getText()`  [EXTRACTED]
  src/components/BlogCard/BlogCard.jsx → src/config/language.js
- `BookButton()` --calls--> `getText()`  [EXTRACTED]
  src/components/BookButton/BookButton.jsx → src/config/language.js

## Import Cycles
- None detected.

## Communities (11 total, 0 thin omitted)

### Community 0 - "Community 0"
Cohesion: 0.62
Nodes (4): ImageZoomDialog(), ProductCard(), getProductWhatsAppUrl(), getEventTypeById()

### Community 1 - "Community 1"
Cohesion: 0.17
Nodes (16): BookButton(), Breadcrumbs(), CategoryCard(), GallerySection(), LAYOUT_CYCLE, SectionHeading(), categories, getCategoryById() (+8 more)

### Community 2 - "Community 2"
Cohesion: 0.08
Nodes (23): dependencies, @emotion/react, @emotion/styled, @mui/icons-material, @mui/material, react, react-dom, react-router-dom (+15 more)

### Community 3 - "Community 3"
Cohesion: 0.26
Nodes (15): Footer(), Header(), HeroSection(), Logo(), WhatsAppFab(), getText(), businessInfo, getQuoteWhatsAppUrl() (+7 more)

### Community 4 - "Community 4"
Cohesion: 0.12
Nodes (20): BlogCard(), formatDate(), blogCategories, blogCtaPhrases, eventTypeKeywords, getBlogMetaKeywords(), internalLinks, longTailKeywords (+12 more)

### Community 5 - "Community 5"
Cohesion: 0.39
Nodes (4): TestimonialCard(), TestimonialsSection(), testimonials, useCarousel()

### Community 6 - "Community 6"
Cohesion: 0.17
Nodes (17): AboutSection(), BookingCTA(), CatalogPreviewSection(), ContactSection(), EventTypesStrip(), ProductGrid(), Reveal(), Stats() (+9 more)

### Community 7 - "Community 7"
Cohesion: 0.33
Nodes (5): plugins, rules, react/only-export-components, react/rules-of-hooks, $schema

### Community 8 - "Community 8"
Cohesion: 0.33
Nodes (5): Business Context, Laviva Events, Site Structure, Tech Stack, Website Goal

### Community 10 - "Community 10"
Cohesion: 0.27
Nodes (6): App(), Layout(), HomePage(), router, colors, muiTheme

## Knowledge Gaps
- **36 isolated node(s):** `$schema`, `plugins`, `react/rules-of-hooks`, `react/only-export-components`, `name` (+31 more)
  These have ≤1 connection - possible missing edges or undocumented components.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `getText()` connect `Community 3` to `Community 0`, `Community 1`, `Community 4`, `Community 5`, `Community 6`?**
  _High betweenness centrality (0.151) - this node is a cross-community bridge._
- **Why does `useStaggerReveal()` connect `Community 6` to `Community 1`, `Community 3`, `Community 5`?**
  _High betweenness centrality (0.023) - this node is a cross-community bridge._
- **Why does `getQuoteWhatsAppUrl()` connect `Community 3` to `Community 1`, `Community 4`, `Community 6`?**
  _High betweenness centrality (0.020) - this node is a cross-community bridge._
- **What connects `$schema`, `plugins`, `react/rules-of-hooks` to the rest of the system?**
  _36 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Community 2` be split into smaller, more focused modules?**
  _Cohesion score 0.08333333333333333 - nodes in this community are weakly interconnected._
- **Should `Community 4` be split into smaller, more focused modules?**
  _Cohesion score 0.11895161290322581 - nodes in this community are weakly interconnected._