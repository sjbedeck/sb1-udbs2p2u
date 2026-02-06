---
name: shadcn-ui-builder
description: Build premium React components using shadcn/ui and shadcn/studio patterns, aligned with the Master Design Spec.
---

# Shadcn UI Builder Skill

## Overview
Generate world-class premium React components using `shadcn/ui` and `shadcn/studio`. This skill ensures all UI work is aligned with the **Swarm Dashboard Master Design Specification**.

## Vision alignment (Bolt Plan / Master Spec)
- **Design System**: Use the purple accent (`--primary: 262 83% 58%`) and premium dark theme tokens defined in `docs/plans/dashboard/00-MASTER-DESIGN-SPEC.md`.
- **Patterns**: Incorporate patterns from Relevance AI (multi-tab sidebars), Devin (knowledge tables), and Phoenix (trace trees).
- **Premium Assets**: Leverage existing premium blocks in `/home/yogi/agent_system/shadcn-premium-assets/` and granular components in `/home/yogi/agent_system/shadcn-premium-assets/granular-registry/`.

## Workflow
1. **Reference Registry**: Always check the local `shadcn-premium-assets` for existing high-quality blocks before building from scratch.
2. **Component Structure**:
   - Use `lucide-react` for icons.
   - Use `framer-motion` for micro-animations.
   - Follow the `Geist Sans` and `Geist Mono` typography standards.
3. **Responsive Design**: Ensure mobile-first stacking and desktop-first grid layouts.
4. **Integration**: Connect components to the backend API layer (FastAPI) via TanStack Query and Zustand stores.

## Technical Constraints
- No hardcoded absolute paths; use `@/components/...` aliases.
- Strict TypeScript types for all props.
- Adhere to the `Geist` font family established in the project.

## Validation
- `npm run type-check` in `apps/dashboard` (or current frontend app).
- Visual verification against the design spec screenshots listed in `docs/plans/dashboard/04-SCREENSHOT-DESIGN-MAP.md`.

## Sources
- Primary: `docs/plans/dashboard/00-MASTER-DESIGN-SPEC.md`
- Tech: `docs/tech/TECH_TYPESCRIPT_REACT.md`
