# Workspace

## Overview

pnpm workspace monorepo using TypeScript. Each package manages its own dependencies.

## Stack

- **Monorepo tool**: pnpm workspaces
- **Node.js version**: 24
- **Package manager**: pnpm
- **TypeScript version**: 5.9
- **API framework**: Express 5
- **Database**: PostgreSQL + Drizzle ORM
- **Validation**: Zod (`zod/v4`), `drizzle-zod`
- **API codegen**: Orval (from OpenAPI spec)
- **Build**: esbuild (CJS bundle)

## Key Commands

- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- `pnpm --filter @workspace/api-server run dev` — run API server locally

See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details.

## Brand & Design

- **Primary**: Cobalt blue `#3D6BE5` (HSL `224 76% 57%`)
- **Brand coral**: `#E05B52` — announcements, destructive
- **Brand green**: `#47B85C` — success states
- **Brand yellow**: `#F5D840` — callouts
- **Background**: `#F8FAFC` — crisp off-white with cool tint
- **Foreground**: `#0F172A` — deep navy
- **Fonts**: Playfair Display italic for display headings, Inter for body
- Brand tokens available as Tailwind utilities: `bg-brand-blue`, `bg-brand-coral`, `bg-brand-green`, `bg-brand-yellow`
