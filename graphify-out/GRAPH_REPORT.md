# Graph Report - LavivaEvents  (2026-08-10)

## Corpus Check
- 49 files · ~21,302 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 626 nodes · 2534 edges · 19 communities
- Extraction: 77% EXTRACTED · 23% INFERRED · 0% AMBIGUOUS · INFERRED: 591 edges (avg confidence: 0.8)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `857bc41c`
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

## God Nodes (most connected - your core abstractions)
1. `i()` - 68 edges
2. `dc()` - 54 edges
3. `gu()` - 36 edges
4. `getText()` - 36 edges
5. `C()` - 33 edges
6. `pc()` - 32 edges
7. `n()` - 30 edges
8. `Td()` - 30 edges
9. `t()` - 28 edges
10. `fc()` - 28 edges

## Surprising Connections (you probably didn't know these)
- `AboutSection()` --calls--> `getText()`  [EXTRACTED]
  src/components/AboutSection/AboutSection.jsx → src/config/language.js
- `AboutSection()` --calls--> `getRevealClassName()`  [EXTRACTED]
  src/components/AboutSection/AboutSection.jsx → src/hooks/useScrollReveal.js
- `AboutSection()` --calls--> `useScrollReveal()`  [EXTRACTED]
  src/components/AboutSection/AboutSection.jsx → src/hooks/useScrollReveal.js
- `BookButton()` --calls--> `getText()`  [EXTRACTED]
  src/components/BookButton/BookButton.jsx → src/config/language.js
- `BookingCTA()` --calls--> `getText()`  [EXTRACTED]
  src/components/BookingCTA/BookingCTA.jsx → src/config/language.js

## Import Cycles
- None detected.

## Communities (19 total, 0 thin omitted)

### Community 0 - "Community 0"
Cohesion: 0.08
Nodes (83): Aa(), ac(), ai(), b(), ba(), bi(), bo(), bs() (+75 more)

### Community 1 - "Community 1"
Cohesion: 0.06
Nodes (58): App(), AboutSection(), BookButton(), BookingCTA(), Breadcrumbs(), CatalogPreviewSection(), CategoryCard(), ContactSection() (+50 more)

### Community 2 - "Community 2"
Cohesion: 0.08
Nodes (82): A(), add(), af(), Al(), ao(), bf(), bt(), cf() (+74 more)

### Community 3 - "Community 3"
Cohesion: 0.08
Nodes (57): ad(), ah(), ap(), bg(), ch(), cm(), cp(), dh() (+49 more)

### Community 4 - "Community 4"
Cohesion: 0.09
Nodes (57): Ae(), Au(), Be(), bu(), cd(), Cu(), dd(), de() (+49 more)

### Community 5 - "Community 5"
Cohesion: 0.05
Nodes (32): am(), At(), ca(), componentDidCatch(), create(), Da(), ea(), fm() (+24 more)

### Community 6 - "Community 6"
Cohesion: 0.14
Nodes (33): bc(), bl(), Bp(), cl(), cs(), fl(), gc(), gu() (+25 more)

### Community 7 - "Community 7"
Cohesion: 0.33
Nodes (5): plugins, rules, react/only-export-components, react/rules-of-hooks, $schema

### Community 8 - "Community 8"
Cohesion: 0.33
Nodes (5): Business Context, Laviva Events, Site Structure, Tech Stack, Website Goal

### Community 10 - "Community 10"
Cohesion: 0.13
Nodes (26): as(), br(), Do(), ds(), es(), Fo(), Fu(), go() (+18 more)

### Community 11 - "Community 11"
Cohesion: 0.08
Nodes (23): dependencies, @emotion/react, @emotion/styled, @mui/icons-material, @mui/material, react, react-dom, react-router-dom (+15 more)

### Community 12 - "Community 12"
Cohesion: 0.18
Nodes (21): an(), dn(), er(), fn(), fr(), hd(), Hh(), hn() (+13 more)

### Community 13 - "Community 13"
Cohesion: 0.13
Nodes (18): dg(), dv(), kg(), Km(), lg(), Mg(), nv(), pv() (+10 more)

### Community 14 - "Community 14"
Cohesion: 0.26
Nodes (13): ag(), bh(), eg(), gh(), ig(), jh(), kh(), lv() (+5 more)

### Community 15 - "Community 15"
Cohesion: 0.22
Nodes (11): bn(), Cn(), gn(), nr(), pn(), rr(), sn(), vn() (+3 more)

### Community 16 - "Community 16"
Cohesion: 0.22
Nodes (10): activeRoutes(), branches(), gp(), hasHMRRoutes(), hp(), nm(), set(), stableRoutes() (+2 more)

### Community 17 - "Community 17"
Cohesion: 0.22
Nodes (10): ar(), Cr(), gr(), hr(), mr(), Nt(), Rt(), Ur() (+2 more)

### Community 18 - "Community 18"
Cohesion: 0.27
Nodes (10): bd(), commitHmrRoutes(), constructor(), E(), In(), ir(), Kd(), setHmrRoutes() (+2 more)

## Knowledge Gaps
- **31 isolated node(s):** `$schema`, `plugins`, `react/rules-of-hooks`, `react/only-export-components`, `name` (+26 more)
  These have ≤1 connection - possible missing edges or undocumented components.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `i()` connect `Community 2` to `Community 0`, `Community 3`, `Community 4`, `Community 5`, `Community 6`, `Community 10`, `Community 12`, `Community 13`, `Community 18`?**
  _High betweenness centrality (0.005) - this node is a cross-community bridge._
- **Why does `dc()` connect `Community 0` to `Community 2`, `Community 3`, `Community 4`, `Community 5`, `Community 6`, `Community 10`, `Community 16`?**
  _High betweenness centrality (0.003) - this node is a cross-community bridge._
- **Are the 3 inferred relationships involving `i()` (e.g. with `bg()` and `E()`) actually correct?**
  _`i()` has 3 INFERRED edges - model-reasoned connections that need verification._
- **Are the 13 inferred relationships involving `dc()` (e.g. with `af()` and `ci()`) actually correct?**
  _`dc()` has 13 INFERRED edges - model-reasoned connections that need verification._
- **Are the 23 inferred relationships involving `gu()` (e.g. with `bc()` and `cl()`) actually correct?**
  _`gu()` has 23 INFERRED edges - model-reasoned connections that need verification._
- **Are the 8 inferred relationships involving `C()` (e.g. with `ei()` and `ma()`) actually correct?**
  _`C()` has 8 INFERRED edges - model-reasoned connections that need verification._
- **What connects `$schema`, `plugins`, `react/rules-of-hooks` to the rest of the system?**
  _31 weakly-connected nodes found - possible documentation gaps or missing edges._