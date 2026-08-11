# Graph Report - LavivaEvents  (2026-08-11)

## Corpus Check
- 56 files · ~29,779 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 674 nodes · 2700 edges · 23 communities
- Extraction: 78% EXTRACTED · 22% INFERRED · 0% AMBIGUOUS · INFERRED: 591 edges (avg confidence: 0.8)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `48865553`
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
- [[_COMMUNITY_Community 11|Community 11]]
- [[_COMMUNITY_Community 12|Community 12]]
- [[_COMMUNITY_Community 13|Community 13]]
- [[_COMMUNITY_Community 14|Community 14]]
- [[_COMMUNITY_Community 15|Community 15]]
- [[_COMMUNITY_Community 16|Community 16]]
- [[_COMMUNITY_Community 17|Community 17]]
- [[_COMMUNITY_Community 18|Community 18]]
- [[_COMMUNITY_Community 19|Community 19]]
- [[_COMMUNITY_Community 20|Community 20]]
- [[_COMMUNITY_Community 21|Community 21]]
- [[_COMMUNITY_Community 22|Community 22]]

## God Nodes (most connected - your core abstractions)
1. `i()` - 65 edges
2. `dc()` - 54 edges
3. `getText()` - 47 edges
4. `gu()` - 36 edges
5. `C()` - 32 edges
6. `pc()` - 32 edges
7. `Td()` - 30 edges
8. `t()` - 29 edges
9. `n()` - 29 edges
10. `fc()` - 28 edges

## Surprising Connections (you probably didn't know these)
- `BlogBody()` --calls--> `getText()`  [EXTRACTED]
  src/pages/BlogPostPage.jsx → src/config/language.js
- `AboutSection()` --calls--> `getText()`  [EXTRACTED]
  src/components/AboutSection/AboutSection.jsx → src/config/language.js
- `formatDate()` --calls--> `getText()`  [EXTRACTED]
  src/components/BlogCard/BlogCard.jsx → src/config/language.js
- `BlogCard()` --calls--> `getText()`  [EXTRACTED]
  src/components/BlogCard/BlogCard.jsx → src/config/language.js
- `BookingCTA()` --calls--> `getQuoteWhatsAppUrl()`  [EXTRACTED]
  src/components/BookingCTA/BookingCTA.jsx → src/data/businessInfo.js

## Import Cycles
- None detected.

## Communities (23 total, 0 thin omitted)

### Community 0 - "Community 0"
Cohesion: 0.37
Nodes (8): BookButton(), BookingCTA(), CategoryCard(), ImageZoomDialog(), ProductCard(), getText(), getProductWhatsAppUrl(), getEventTypeById()

### Community 1 - "Community 1"
Cohesion: 0.18
Nodes (13): Breadcrumbs(), ProductGrid(), SectionHeading(), categories, getCategoryById(), getProductCountByCategory(), galleryImages, getProductById() (+5 more)

### Community 2 - "Community 2"
Cohesion: 0.08
Nodes (23): dependencies, @emotion/react, @emotion/styled, @mui/icons-material, @mui/material, react, react-dom, react-router-dom (+15 more)

### Community 3 - "Community 3"
Cohesion: 0.23
Nodes (14): Footer(), Header(), HeroSection(), Logo(), WhatsAppFab(), businessInfo, getQuoteWhatsAppUrl(), getWhatsAppUrl() (+6 more)

### Community 4 - "Community 4"
Cohesion: 0.11
Nodes (20): BlogCard(), formatDate(), blogCategories, blogCtaPhrases, eventTypeKeywords, getBlogMetaKeywords(), internalLinks, longTailKeywords (+12 more)

### Community 5 - "Community 5"
Cohesion: 0.39
Nodes (4): TestimonialCard(), TestimonialsSection(), testimonials, useCarousel()

### Community 6 - "Community 6"
Cohesion: 0.19
Nodes (16): AboutSection(), CatalogPreviewSection(), ContactSection(), EventTypesStrip(), GallerySection(), LAYOUT_CYCLE, Reveal(), Stats() (+8 more)

### Community 7 - "Community 7"
Cohesion: 0.33
Nodes (5): plugins, rules, react/only-export-components, react/rules-of-hooks, $schema

### Community 8 - "Community 8"
Cohesion: 0.33
Nodes (5): Business Context, Laviva Events, Site Structure, Tech Stack, Website Goal

### Community 10 - "Community 10"
Cohesion: 0.23
Nodes (7): App(), Layout(), CatalogPage(), HomePage(), router, colors, muiTheme

### Community 11 - "Community 11"
Cohesion: 0.08
Nodes (86): Aa(), ac(), ai(), b(), ba(), bi(), bo(), br() (+78 more)

### Community 12 - "Community 12"
Cohesion: 0.07
Nodes (67): add(), Al(), as(), Au(), bs(), bu(), componentDidCatch(), cs() (+59 more)

### Community 13 - "Community 13"
Cohesion: 0.06
Nodes (57): an(), ar(), bn(), bt(), Cn(), Cr(), dn(), E() (+49 more)

### Community 14 - "Community 14"
Cohesion: 0.12
Nodes (55): A(), af(), ao(), bf(), cf(), D(), df(), dl() (+47 more)

### Community 15 - "Community 15"
Cohesion: 0.05
Nodes (25): am(), At(), bg(), dg(), fm(), Fv(), gg(), gl() (+17 more)

### Community 16 - "Community 16"
Cohesion: 0.08
Nodes (50): bc(), bl(), Bp(), ca(), cl(), create(), Da(), ea() (+42 more)

### Community 17 - "Community 17"
Cohesion: 0.16
Nodes (33): Ae(), Be(), cd(), dd(), de(), ee(), et(), fe() (+25 more)

### Community 18 - "Community 18"
Cohesion: 0.14
Nodes (24): ad(), ap(), cm(), dm(), dp(), fp(), ip(), jd() (+16 more)

### Community 19 - "Community 19"
Cohesion: 0.18
Nodes (25): ag(), cp(), dh(), Ed(), eh(), _g(), gm(), hm() (+17 more)

### Community 20 - "Community 20"
Cohesion: 0.15
Nodes (21): ah(), bh(), ch(), eg(), gh(), ig(), ih(), jh() (+13 more)

### Community 21 - "Community 21"
Cohesion: 0.14
Nodes (18): activeRoutes(), bd(), branches(), commitHmrRoutes(), constructor(), gp(), hasHMRRoutes(), hp() (+10 more)

### Community 22 - "Community 22"
Cohesion: 0.24
Nodes (10): bv(), dv(), Ev(), hv(), Km(), Mg(), Mv(), Nv() (+2 more)

## Knowledge Gaps
- **36 isolated node(s):** `$schema`, `plugins`, `react/rules-of-hooks`, `react/only-export-components`, `name` (+31 more)
  These have ≤1 connection - possible missing edges or undocumented components.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `getText()` connect `Community 0` to `Community 1`, `Community 3`, `Community 4`, `Community 5`, `Community 6`, `Community 10`?**
  _High betweenness centrality (0.010) - this node is a cross-community bridge._
- **Why does `i()` connect `Community 11` to `Community 12`, `Community 13`, `Community 14`, `Community 15`, `Community 16`, `Community 18`?**
  _High betweenness centrality (0.004) - this node is a cross-community bridge._
- **Why does `dc()` connect `Community 11` to `Community 12`, `Community 14`, `Community 15`, `Community 16`, `Community 17`, `Community 21`?**
  _High betweenness centrality (0.002) - this node is a cross-community bridge._
- **Are the 13 inferred relationships involving `dc()` (e.g. with `af()` and `ci()`) actually correct?**
  _`dc()` has 13 INFERRED edges - model-reasoned connections that need verification._
- **Are the 23 inferred relationships involving `gu()` (e.g. with `bc()` and `cl()`) actually correct?**
  _`gu()` has 23 INFERRED edges - model-reasoned connections that need verification._
- **Are the 8 inferred relationships involving `C()` (e.g. with `ei()` and `ma()`) actually correct?**
  _`C()` has 8 INFERRED edges - model-reasoned connections that need verification._
- **What connects `$schema`, `plugins`, `react/rules-of-hooks` to the rest of the system?**
  _36 weakly-connected nodes found - possible documentation gaps or missing edges._