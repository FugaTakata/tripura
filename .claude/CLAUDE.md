# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

Turborepo monorepo with a Next.js 16 app (React 19) and shared packages. Uses pnpm workspaces.

## Commands

```bash
# Install dependencies
pnpm install

# Development
pnpm dev              # web on :3000

# Build all packages
pnpm build

# Type checking
pnpm check-types

# Linting and formatting (uses oxlint + oxfmt)
pnpm lint             # lint only
pnpm lint:fix         # lint and auto-fix
pnpm format           # format check only
pnpm format:fix       # format and auto-fix

# Run quality checks (lint + format)
pnpm turbo run "#quality"

# Run a single app
pnpm --filter web dev
pnpm --filter web build
```

## Architecture

- **apps/web** — Main Next.js app (port 3000, App Router)
- **packages/typescript-config** — Shared tsconfig files: `base.json`, `nextjs.json`, `react-library.json`

## Key Conventions

- Internal dependencies use workspace protocol: `"@repo/typescript-config": "workspace:*"`
- Linting uses oxlint (`oxlint.config.ts` at root), formatting uses oxfmt (`oxfmt.config.ts` at root)
- `node/no-process-env` is enforced in apps — use environment abstraction instead of `process.env` directly
- `typescript/consistent-type-definitions` enforces `type` over `interface`
- `typescript/consistent-type-imports` enforces `import type` for type-only imports
- Turbo tasks: `build` and `check-types` are cached and respect dependency order; `dev` is persistent and uncached
- lint/format tasks run at root level (`//#lint`, `//#format`) with file-based caching inputs
- TypeScript strict mode is enabled everywhere with `strictNullChecks`
