# DECISIONS — Vitreo Hub

## Decision 1: Database — Convex vs Supabase

**PROS (Convex):**
- Real-time subscriptions built-in (live data updates)
- TypeScript-first with auto-generated types
- Simpler setup for document-style data
- Free tier sufficient for this project

**PROS (Supabase):**
- PostgreSQL for complex relational queries
- Full-text search built-in
- Row-level security

**CHOSEN: Convex**
- Innovation/technique data is document-style, not relational
- Real-time not critical initially but nice for future features
- Simpler DX for rapid development

## Decision 2: Auth — Clerk vs None (Initial)

**PROS (No Auth Initially):**
- Faster to ship, public knowledge hub
- Lower friction for visitors
- Can add auth later for personalization

**PROS (Clerk):**
- Bookmarking, saved content, learning paths
- User engagement tracking

**CHOSEN: No Auth Initially**
- Ship as public knowledge hub first
- Add Clerk in future session for personalization features

## Decision 3: AI Features — Vercel AI SDK

**PROS:**
- PubMed integration for live research search
- AI-powered paper summaries
- Semantic search across innovations

**CHOSEN: Defer to Session 2**
- Focus on core content platform first
- AI features add complexity, better as enhancement

## Decision 4: Design System — Medical Professional

**PROS (Dark-first, teal accent):**
- Surgeons work in dim OR environments
- Teal = medical trust, professional
- Stands out from dated competitor UX (3-5/10)

**CHOSEN: Deep slate background + teal accent**
- Primary: Teal (#0D9488)
- Background dark: Slate (#0F172A)
- Background light: White (#FFFFFF)
- Text: Gray scale hierarchy
- Card style: Subtle borders, clean spacing
