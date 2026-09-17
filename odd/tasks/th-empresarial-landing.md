# TH Empresarial Landing Page

## Objective

Build a production-quality, responsive, accessible single-page landing site for TH Empresarial that presents its integral technology integration offer and converts qualified hospitality leads through WhatsApp.

## Problem

The repository has no application surface yet, so TH Empresarial lacks a focused digital experience that explains its communications, IT, electronic security, and hotel guest communication platform offer.

## Why

The page should make the hotel platform memorable, establish trust with the authorized Syscom and Hikvision partner claims, and give visitors a direct path to `https://wa.me/529848031616` without inventing unsupported business claims.

## Authorized scope

- Create the smallest maintainable Vite + React + TypeScript frontend in this repository.
- Add one landing page with semantic sections for the header, hero, integral capabilities, hotel platform, trust/partners, process, final WhatsApp CTA, and footer.
- Add accessible mobile navigation, metadata, Open Graph basics, responsive styling, and reduced-motion-safe CSS-first motion.
- Add focused behavior tests and the scripts required for the specified checks.
- Do not add a backend, auth, CMS, payments, speculative integrations, unverified claims, or stock-photo dependency.

## Constraints

- Product-facing copy is neutral professional Spanish; code, tests, comments, and technical artifacts are English.
- Aesthetic: **Hospitality Signal Architecture** — premium industrial hospitality with deep ink/navy, warm sand/cream, chartreuse signal, and restrained coral.
- Use a distinctive display font and readable body font; do not use Inter, Roboto, Arial, or system-only defaults.
- The visual anchor is an in-room console/signal-system motif, not a generic dashboard.
- Use only the exact WhatsApp URL supplied by the user and the two authorized trust claims.
- Work directly on `jorlyscfg/feat/th-empresarial-landing`; the current continuation authorizes commit and push, but not merge.

## Design direction and DFII

- Direction: **Hospitality Signal Architecture** — a premium industrial hospitality language built around deep ink/navy, warm sand/cream, chartreuse signal, restrained coral, Syne + DM Sans, and an in-room request-console motif.
- Purpose: persuasive and conversion-focused; make the hotel platform memorable and move qualified leads to WhatsApp.
- Differentiation anchor: the room console and visible guest → platform → team request flow, rather than a generic SaaS dashboard.
- DFII: **15** = `(Impact 5 + Fit 5 + Feasibility 5 + Performance 4) - Consistency Risk penalty 4`; excellent, with custom visual density contained by shared tokens, repeated rails, and CSS-first motion.
- Differentiation callout: This avoids generic UI by turning hotel service communication into a recognizable signal system instead of presenting a conventional feature-card grid.

## Effective strict TDD mode and runner

- Strict TDD: enabled by session instruction.
- Runner: Vitest through `npm test`.
- Required cycle: write a focused failing test, observe the expected RED failure, implement the minimum behavior, observe GREEN, then refactor only while green.

## Acceptance criteria

1. The page has a descriptive title, one primary page heading, semantic section headings, responsive layout, keyboard-visible focus, usable mobile navigation, and readable contrast.
2. Header, hero, hotel platform, platform CTA, and final contact section use `https://wa.me/529848031616` where applicable.
3. The page explains the hotel guest request flow for food and beverage, room service, and other hotel-area services.
4. The page presents communications equipment/systems, IT, and electronic security as integral capabilities.
5. Trust content uses exactly the authorized Syscom distributor and Hikvision Partner claims and links to official reference pages.
6. Motion is sparse, CSS-first, and disabled or reduced under `prefers-reduced-motion`.
7. The specified test, lint, typecheck, and build commands exist and pass after implementation.

## Applicable checks

- `npm test -- --run`
- `npm run lint`
- `npm run typecheck`
- `npm run build`
- Diff and scoped-file inspection with Git.

## Stable task IDs

- [x] **TH-001 — Establish the frontend contract and observe RED**
- [x] **TH-002 — Implement the Hospitality Signal Architecture landing page**
- [x] **TH-003 — Run full verification and close the implementation receipt**

## Progress

Tasks TH-001, TH-002, and TH-003 are complete. The current continuation authorizes the feature delivery commit and branch push; merge remains a separate user-owned decision.

## Verification evidence

- RED: `npm test -- src/App.test.tsx --run` — observed 2 expected assertion failures (`expected null not to be null`) because the application module does not exist yet.
- GREEN: `npm test -- src/App.test.tsx --run` — 1 test file and 2 tests passed.
- `npm test -- --run` — Vitest v5.0.1; 1 test file and 2 tests passed.
- `npm run lint` — ESLint reported `No issues found`.
- `npm run typecheck` — `tsc --noEmit` passed.
- `npm run build` — TypeScript check and Vite v8.3.0 production build passed; 16 modules transformed; generated `dist/` assets were ignored by Git.
- `npm audit --audit-level=high` — found 0 vulnerabilities.
- Git scope inspection before commit — status contained only `.gitignore`, `eslint.config.js`, `index.html`, `odd/`, `package-lock.json`, `package.json`, `src/`, `tsconfig.json`, and `vite.config.ts`; staged `git diff --check` produced no output.
- Runtime harness: N/A — this repository has no existing runtime harness; deterministic Vitest, lint, typecheck, and production build checks are applicable.

## Delivery evidence

- Implementation commit: `fc1ecec983bb04ca21ff6fc4c0b0d071b9892cf4` — `feat: Add TH Empresarial hospitality landing page`.
- Branch push: confirmed on `origin/jorlyscfg/feat/th-empresarial-landing`.

## Rollback boundary

Remove the files created for this feature (`.gitignore`, `src/`, `index.html`, `package.json`, `package-lock.json`, `tsconfig*.json`, `vite.config.ts`, `eslint.config.js`, and `odd/tasks/th-empresarial-landing.md`) to remove the landing page and its verification setup without affecting any pre-existing application code. The `.codegraph/` index is tooling state, not feature behavior.

## Next step

Return the concise implementation receipt with the verified checks, design direction/DFII, scoped files, runtime limitation, and delivery evidence. The branch is pushed; merge remains intentionally pending.
