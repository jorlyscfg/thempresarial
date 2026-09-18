# TH Empresarial Landing Page

## Objective

Build a production-quality, responsive, accessible single-page landing site for TH Empresarial that presents its integral technology integration offer and converts qualified hospitality leads through WhatsApp.

## Problem

The initial landing implementation still reads like a speculative concept: its contrast is weak, its copy is vague, its hero and hotel-platform UI are synthetic, and it underuses the supplied service imagery.

## Why

The page should make TH Empresarial's real service categories immediately legible, use the supplied images as evidence, communicate with specific Spanish copy, and give visitors a direct path to `https://wa.me/529848031616` without inventing business facts.

## Authorized scope

- Create the smallest maintainable Vite + React + TypeScript frontend in this repository.
- Add one landing page with semantic sections for the header, hero, integral capabilities, hotel platform, trust/partners, process, final WhatsApp CTA, and footer.
- Add accessible mobile navigation, metadata, Open Graph basics, responsive styling, and reduced-motion-safe CSS-first motion.
- Add focused behavior tests and the scripts required for the specified checks.
- Integrate a curated, privacy-safe subset of the user-supplied TH Empresarial assets from `recuersos/` and align the visual identity with the authentic logo and observed brand cues.
- Prefer real supplied service/product imagery over fabricated dashboards, consoles, metrics, or status indicators.
- Write only claims supported by the supplied material or explicitly authorized by the owner; label product references and promotional graphics as references rather than proof of deployment.
- Do not add a backend, auth, CMS, payments, speculative integrations, unverified claims, or stock-photo dependency.

## Constraints

- Product-facing copy is neutral professional Spanish; code, tests, comments, and technical artifacts are English.
- Aesthetic: **TH Empresarial / Riviera Maya infrastructure** — high-contrast navy and cyan identity, clear white surfaces, restrained lime accents, and real service imagery.
- Use a distinctive display font and readable body font; do not use Inter, Roboto, Arial, or system-only defaults.
- The visual anchor is the supplied TH Empresarial imagery and an evidence-led service catalog, not a fabricated dashboard.
- The authentic TH Empresarial logo and blue/cyan identity take precedence over the initial authored palette where the supplied assets provide evidence.
- Do not publish Facebook captures or operational screenshots with room numbers, queues, timestamps, or identifiers. User-supplied vendor/product graphics may be used as clearly labelled reference imagery where they explain a service category.
- Use only the exact WhatsApp URL supplied by the user and the two authorized trust claims.
- Work directly on `jorlyscfg/feat/th-empresarial-landing`; commit `177011e166de0822d887e320b0e9dbd01f7a21f1` records the current work, branch push remains separate from merge.

## Design direction and DFII

- Direction: **TH Empresarial / Riviera Maya infrastructure** — high-contrast navy and cyan, clear white surfaces, restrained lime accents, Syne + DM Sans, and real supplied service imagery.
- Purpose: make the company-wide service offer legible, credible, and conversion-focused without presenting unsupported product proof.
- Differentiation anchor: the authentic logo, observed blue/cyan identity, evidence-led service catalog, and clearly labelled hotel workflow reference rather than a fabricated dashboard.
- Owner correction: remove synthetic consoles, metrics, and vague positioning; use the supplied materials to explain communications, IT, access control, surveillance, solar, and hotel operations.

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
- [x] **TH-004 — Rework the visual identity and asset mapping from owner feedback** (reopened and completed with supplied brand assets and high-contrast styling)
- [x] **TH-005 — Replace synthetic copy and interfaces with an evidence-led service catalog** (completed with labelled supplied imagery and supported copy)

## Progress

Tasks TH-001 through TH-005 are implemented. Owner feedback was addressed by correcting contrast, replacing vague or invented copy, using the supplied imagery that explains communications, IT, electronic security, access control, surveillance, solar, and hotel operations, and removing the fabricated console/metrics. Fresh checks pass; commit `177011e166de0822d887e320b0e9dbd01f7a21f1` was created. Merge remains a separate user-owned decision.

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
- Asset mapping: 29 image assets and `descarga.html` were inspected under `recuersos/`. The authentic logo is `300000183_470543405079107_8494915369743851921_n.png`; hotel platform evidence is represented by the `Captura de pantalla_20260917_*.png` files. Exact pixel dimensions and official color values remain unverified.
- TH-004 fresh verification: `npm test -- --run` — Vitest reported 1 test file and 3 tests passed.
- TH-004 fresh verification: `npm run lint` — ESLint reported `No issues found`.
- TH-004 fresh verification: `npm run typecheck` — `tsc --noEmit` passed.
- TH-004 fresh verification: `npm run build` — TypeScript check and Vite production build passed; 16 modules transformed.
- TH-004 fresh verification: `npm audit --audit-level=high` — found 0 vulnerabilities.
- TH-004 fresh verification: `git diff --check` — produced no output.
- Current scoped assets: the app references `public/assets/th-empresarial/th-empresarial-logo.png`, `access-control-reference.jpeg`, `video-doorphones-reference.jpeg`, `video-surveillance-kit.jpg`, `vehicle-barrier-access.jpg`, `surveillance-recorder.jpg`, `solar-energy-reference.jpg`, and `solar-mounting-reference.jpg`; raw `recuersos/` remains excluded.
- Owner review correction: the previous TH-004 implementation was not accepted because the page had weak contrast, vague copy, synthetic UI, and insufficient use of supplied service imagery; the current TH-004/TH-005 implementation addresses those findings.
- TH-004/TH-005 fresh verification: `npm test -- --run` — Vitest reported 1 test file and 4 tests passed.
- TH-004/TH-005 fresh verification: `npm run lint` — ESLint reported `No issues found`.
- TH-004/TH-005 fresh verification: `npm run typecheck` — `tsc --noEmit` passed.
- TH-004/TH-005 fresh verification: `npm run build` — TypeScript check and Vite production build passed; 16 modules transformed.
- TH-004/TH-005 fresh verification: `npm audit --audit-level=high` — found 0 vulnerabilities.
- TH-004/TH-005 fresh verification: `git diff --check` — produced no output.
- Contrast spot check with `python3`: `#006b8e` on `#fbfdfe` is 5.89:1, `#45616e` on `#fbfdfe` is 6.46:1, and `#19b9e6` on `#061827` is 7.81:1; cyan is not used as light-surface body text.
- Metadata correction: `index.html` now uses the evidence-led title and description for communication, IT, access control, video surveillance, and solar services.
- Copy correction: the hero image caption now uses `Acceso electrónico / referencia visual` instead of an unsupported location claim.

## Delivery evidence

- Historical implementation commit: `fc1ecec983bb04ca21ff6fc4c0b0d071b9892cf4` — `feat: Add TH Empresarial hospitality landing page`; it predates the current TH-004/TH-005 corrections.
- Historical branch push: confirmed on `origin/jorlyscfg/feat/th-empresarial-landing`.
- Current continuation commit: `177011e166de0822d887e320b0e9dbd01f7a21f1` — `feat: Rework TH Empresarial landing evidence catalog`.
- Current continuation branch push: pending; raw `recuersos/` remains untracked and excluded.

## Rollback boundary

Remove the files created for this feature (`.gitignore`, `src/`, `index.html`, `package.json`, `package-lock.json`, `tsconfig*.json`, `vite.config.ts`, `eslint.config.js`, and `odd/tasks/th-empresarial-landing.md`) to remove the landing page and its verification setup without affecting any pre-existing application code. The `.codegraph/` index is tooling state, not feature behavior.

## Next step

TH-004 and TH-005 implementation, verification, and scoped commit are complete. The next step is to push the feature branch; merge remains a separate user-owned decision.
