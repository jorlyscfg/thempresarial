# TH Empresarial Landing Page

## Objective

Build a production-quality, responsive, accessible single-page landing site for TH Empresarial that presents its integral technology integration offer and converts qualified hospitality leads through WhatsApp.

## Problem

The initial landing implementation still reads like a speculative concept: its contrast is weak, its copy is vague, its hero and hotel-platform UI are synthetic, and it underuses the supplied service imagery.

## Why

The page should make TH Empresarial's real service categories immediately legible, use the supplied images as evidence, communicate with specific Spanish copy, present the Hotel Alert platform accurately, and give visitors a direct path to `https://wa.me/529848031616` without inventing business facts.

## Authorized scope

- Create the smallest maintainable Vite + React + TypeScript frontend in this repository.
- Add one landing page with semantic sections for the header, hero, integral capabilities, hotel platform, trust/partners, process, final WhatsApp CTA, and footer.
- Add accessible mobile navigation, metadata, Open Graph basics, responsive styling, and reduced-motion-safe CSS-first motion.
- Add focused behavior tests and the scripts required for the specified checks.
- Integrate a curated, privacy-safe subset of the user-supplied TH Empresarial assets from `recuersos/` and align the visual identity with the authentic logo and observed brand cues.
- Use every unique, publishable product or installation image from `recuersos/` once in a service-specific carousel; do not repeat duplicate files as separate slides.
- Prefer real supplied service/product imagery over fabricated dashboards, consoles, metrics, or status indicators.
- Add an accurate Hotel Alert product section describing the local hotel-request platform, guest tablet, operational routing, configurable catalogs, service states, audit history, real-time synchronization, interruption recovery, and local Node.js/React/TypeScript/SQLite/Socket.IO deployment.
- Add a Hotel Alert image carousel using the supplied demo screenshots as provided, clearly labelled as functional reference imagery rather than proof of a production installation.
- Write only claims supported by the supplied material or explicitly authorized by the owner; label product references and promotional graphics as references rather than proof of deployment.
- Do not present Hotel Alert as SaaS/cloud, a native mobile app, PMS/payment integration, or guaranteed 100% offline service; do not add a backend, auth, CMS, payments, speculative integrations, unverified claims, or stock-photo dependency.

## Constraints

- Product-facing copy is neutral professional Spanish; code, tests, comments, and technical artifacts are English.
- Aesthetic: **Industrial editorial authority** — compact Swiss-inspired grid, logo-derived deep blue/sky blue/yellow palette, clear white surfaces, restrained borders, and real service imagery.
- Use a distinctive display font and readable body font; do not use Inter, Roboto, Arial, or system-only defaults.
- The visual anchor is the supplied TH Empresarial imagery and an evidence-led service catalog, not a fabricated dashboard.
- The authentic TH Empresarial logo and sampled brand colors (`#144F7C`, `#9FD9F7`, `#DCDA17`, white) take precedence over the previous authored navy/cyan/lime palette.
- The supplied Hotel Alert screenshots are authorized demo material and may be published as provided; label them as functional reference imagery and never present their demo room numbers, queues, timestamps, or identifiers as production evidence.
- Use only the exact WhatsApp URL supplied by the user and the two authorized trust claims.
- Service carousels must have only manual side previous/next arrow controls (`‹` and `›`), keyboard support, visible focus, `aria-live="polite"`, active-slide feedback, complete supplied image visibility without forced cropping, stage height based on the active slide, lazy inactive images, and no forced autoplay; pagination dots must not be interactive controls.
- The service carousel grid must keep each card's height content-driven instead of stretching every card to the tallest card in its row.
- Work directly on `jorlyscfg/feat/th-empresarial-landing`; commit `177011e166de0822d887e320b0e9dbd01f7a21f1` records the current work, branch push remains separate from merge.

## Design direction and DFII

- Direction: **Industrial editorial authority** — compact Swiss-inspired grid, logo-derived deep blue/sky blue/yellow, restrained typography, dense service sections, and real supplied imagery.
- Purpose: make the company-wide service offer legible, credible, and conversion-focused without presenting unsupported product proof.
- Differentiation anchor: the authentic logo, brand-derived palette, service-specific image carousels, and a precise Hotel Alert product story rather than a fabricated dashboard.
- Owner correction: remove synthetic consoles, metrics, excessive whitespace, and vague positioning; use the supplied materials to explain communications, IT, access control, surveillance, solar, and hotel operations.

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
8. Each publishable service category has a dedicated accessible carousel using every unique mapped image without exposing private operational screenshots.
9. Hotel Alert is described as a local hotel-request platform connecting guest tablets with operational teams, with accurate capabilities and explicit non-claims.
10. Hotel Alert includes an accessible carousel using the supplied demo screenshots as functional reference imagery.
11. Every carousel exposes only side `‹`/`›` arrow controls; no pagination-dot buttons are rendered.
12. Carousel image frames preserve the complete supplied asset without a forced crop.
13. Carousel stages size themselves from the active slide rather than the tallest slide in the carousel.
14. Service carousel cards preserve content-driven heights instead of stretching to the tallest card in their grid row.

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
- [x] **TH-006 — Rebuild the landing layout around the logo-derived industrial editorial system**
- [x] **TH-007 — Implement accessible service-specific image carousels from all unique publishable assets**
- [x] **TH-008 — Add the accurate Hotel Alert product story and operational flow**
- [x] **TH-009 — Run full verification and record the redesign delivery evidence**
- [x] **TH-010 — Add the Hotel Alert demo screenshot carousel** (completed with five labelled functional-reference screenshots)
- [x] **TH-011 — Simplify every carousel to side-only arrow controls** (completed with keyboard-accessible `‹`/`›` controls and no pagination buttons)
- [x] **TH-012 — Preserve the complete supplied image inside every carousel frame** (completed by removing the forced frame crop and adding regression coverage)
- [x] **TH-013 — Size carousel stages from the active slide** (completed by taking inactive slides out of flow and adding regression coverage)
- [x] **TH-014 — Keep service carousel card heights content-driven** (completed with `max-content` grid rows, start alignment, and regression coverage)

## Progress

Tasks TH-001 through TH-014 are implemented locally. TH-010 adds the supplied Hotel Alert demo screenshots as labelled functional reference imagery, TH-011 simplifies every carousel to side-only arrow controls, TH-012 preserves each supplied image without forced cropping, TH-013 sizes each stage from its active slide, and TH-014 prevents the parent grid from stretching cards to the tallest row item. Verification is complete and the TH-014 work-unit commit is `485c6f5`; push remains pending explicit remote authorization. Merge remains a separate user-owned decision.

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
- TH-006–TH-008 implementation: `src/App.tsx` now uses a compact industrial-editorial layout with logo-derived colors, four service-specific carousels, and an accurate Hotel Alert section; `src/styles.css` contains the responsive visual system and reduced-motion handling; `index.html` contains the matching metadata and fonts.
- TH-006–TH-008 asset mapping: 20 unique publishable images are referenced once — 8 control-access assets, 3 communication/IT assets, 6 surveillance assets, and 3 solar assets. Private hotel screenshots, `archivo pegado.png`, `descarga.html`, and duplicate raw files remain excluded.
- TH-006–TH-008 TDD: focused RED was observed before the new carousel and Hotel Alert behavior; the first implementation GREEN run passed 7 tests. The correction RED run observed 2 expected failures for the Docker wording and indicator hit area; correction GREEN passed 9 tests.
- TH-006–TH-008 correction: removed the unsupported Docker deployment wording and changed carousel indicators to retain 8px visual dots inside 44px keyboard/touch targets.
- TH-006–TH-008 fresh verification: `npm test -- --run` — 1 test file and 9 tests passed.
- TH-006–TH-008 fresh verification: `npm run lint` — ESLint reported `No issues found`.
- TH-006–TH-008 fresh verification: `npm run typecheck` — `tsc --noEmit` passed.
- TH-006–TH-008 fresh verification: `npm run build` — TypeScript check and Vite production build passed.
- TH-006–TH-008 fresh verification: `npm audit --audit-level=high` — found 0 vulnerabilities.
- TH-006–TH-008 fresh verification: `git diff --check` — produced no output.
- Independent candidate verification confirmed all 20 published asset references exist with declared dimensions, no private hotel capture is referenced, and no unexpected generated file exists under `recuersos/`; visual browser preview remains unavailable because the dev server hits `EMFILE`.
- Parent spot check: `npm test -- --run` — 1 test file and 9 tests passed after task-document reconciliation.
- CodeGraph maintenance: `codegraph sync` — synced 2 changed files; the index is current for subsequent structural queries.
- TH-010/TH-011 independent verification: five Hotel Alert PNGs are present under `public/assets/th-empresarial/`, byte-match their supplied raw captures, and match the declared dimensions `1279×687`, `1633×990`, `1608×985`, `1019×773`, and `1017×769`.
- TH-010/TH-011 independent verification: every carousel exposes exactly two native buttons containing `‹` and `›`; keyboard ArrowLeft/ArrowRight, visible focus, `aria-controls`, active-slide status, and `aria-live="polite"` remain present; no pagination indicators remain.
- TH-010/TH-011 independent verification: `npm test -- --run` — 1 test file and 10 tests passed.
- TH-010/TH-011 independent verification: `npm run lint` — exit 0.
- TH-010/TH-011 independent verification: `npx tsc --noEmit` — exit 0.
- TH-010/TH-011 independent verification: `npm run build` — exit 0; Vite transformed 16 modules.
- TH-010/TH-011 independent verification: `npm audit --audit-level=high` — found 0 vulnerabilities.
- TH-010/TH-011 independent verification: `git diff --check` — produced no output.
- TH-010/TH-011 worktree inspection: only the task document, three source files, and five intended public PNGs are changed/untracked; raw `recuersos/` remains untracked and untouched.
- Native risk assessment: `gentle-ai review mode status` reported clone-local RDD off; `gentle-ai review assess --cwd ... --json` could not classify the candidate because untracked assets require an explicit inventory, so the assessment is recorded as unassessable rather than treated as approval.
- Visual browser preview remains unavailable because the Vite dev server hits `EMFILE`; deterministic checks above passed.
- TH-012 RED: `npm test -- --run -t "keeps supplied carousel images fully visible instead of cropping them"` — observed the expected failure against the forced `16 / 10` frame ratio.
- TH-012 GREEN: the same focused test passed after removing the fixed frame ratio and using natural image height with `object-fit: contain`.
- TH-012 fresh verification: `npm test -- --run` — 1 test file and 11 tests passed.
- TH-012 fresh verification: `rtk lint` — ESLint reported `No issues found`.
- TH-012 fresh verification: `rtk npm run typecheck` — `tsc --noEmit` passed.
- TH-012 fresh verification: `rtk npm run build` — TypeScript check and Vite v8.3.0 production build passed; 16 modules transformed.
- TH-012 fresh verification: `npm audit --audit-level=high` — found 0 vulnerabilities.
- TH-012 fresh verification: `rtk git diff --check` — produced no output.
- TH-013 RED: `npm test -- --run -t "sizes each carousel stage from the active slide instead of the tallest slide"` — observed the expected failure because inactive slides remained in normal grid flow.
- TH-013 GREEN: the same focused test passed after inactive slides were positioned absolutely, leaving only the active slide to determine stage height.
- TH-013 fresh verification: `npm test -- --run` — 1 test file and 12 tests passed.
- TH-013 fresh verification: `rtk lint` — ESLint reported `No issues found`.
- TH-013 fresh verification: `rtk npm run typecheck` — `tsc --noEmit` passed.
- TH-013 fresh verification: `rtk npm run build` — TypeScript check and Vite v8.3.0 production build passed; 16 modules transformed.
- TH-013 fresh verification: `npm audit --audit-level=high` — found 0 vulnerabilities.
- TH-013 fresh verification: `rtk git diff --check` — produced no output.
- TH-014 RED: `npm test -- --run -t "does not stretch carousel cards to the tallest card in their grid row"` — observed the expected failure because `.service-carousels` relied on the default `align-items: stretch` and had no explicit max-content rows.
- TH-014 GREEN: the same focused test passed after adding `grid-auto-rows: max-content` and `align-items: start` to `.service-carousels`.
- TH-014 fresh verification: `npm test -- --run` — 1 test file and 13 tests passed.
- TH-014 fresh verification: `rtk lint` — ESLint reported `No issues found`.
- TH-014 fresh verification: `rtk npm run typecheck` — `tsc --noEmit` passed.
- TH-014 fresh verification: `rtk npm run build` — TypeScript check and Vite v8.3.0 production build passed; 16 modules transformed.
- TH-014 fresh verification: `rtk git diff --check` — produced no output.

## Delivery evidence

- Historical implementation commit: `fc1ecec983bb04ca21ff6fc4c0b0d071b9892cf4` — `feat: Add TH Empresarial hospitality landing page`; it predates the current TH-004/TH-005 corrections.
- Historical branch push: confirmed on `origin/jorlyscfg/feat/th-empresarial-landing`.
- Current continuation commit: `177011e166de0822d887e320b0e9dbd01f7a21f1` — `feat: Rework TH Empresarial landing evidence catalog`.
- Redesign commit: `fa342d2` — `feat: Redesign TH Empresarial landing`.
- Redesign commit includes the landing implementation, tests, 13 additional curated assets, metadata, and the task evidence update; raw `recuersos/` remains untracked and excluded.
- TH-010/TH-011 work-unit commit: `584a1cd` — `feat(landing): Add Hotel Alert screenshots and carousel arrows`.
- TH-012 work-unit commit: `26403ed` — `fix(landing): Show complete carousel images`.
- TH-013 work-unit commit: `c935bdf` — `fix(landing): Size carousel stage to active slide`.
- TH-014 work-unit commit: `485c6f5` — `fix(landing): Keep carousel cards content-sized`.
- The current branch contains local commits ahead of `origin/jorlyscfg/feat/th-empresarial-landing`; push has not been performed because remote operation authorization for this redesign is still pending.

## Rollback boundary

Remove the files created for this feature (`.gitignore`, `src/`, `index.html`, `package.json`, `package-lock.json`, `tsconfig*.json`, `vite.config.ts`, `eslint.config.js`, and `odd/tasks/th-empresarial-landing.md`) to remove the landing page and its verification setup without affecting any pre-existing application code. The `.codegraph/` index is tooling state, not feature behavior.

## Next step

The TH-014 work-unit commit is complete locally. The next action requiring user authorization is pushing the local branch to `origin/jorlyscfg/feat/th-empresarial-landing`; merge remains a separate user-owned decision.
