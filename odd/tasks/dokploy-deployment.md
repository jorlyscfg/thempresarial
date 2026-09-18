# Dokploy Deployment

## Objective

Prepare the existing Vite + React static landing page for a production Docker deployment on Dokploy.

## Problem

The repository currently builds a static `dist/` directory but has no deployment container, health endpoint, Nginx configuration, or Dokploy handoff documentation.

## Why

Dokploy needs a reproducible Dockerfile build that serves the compiled frontend through Nginx on port 80, with a JavaScript-independent health check and a documented rollback path.

## Authorized scope

- Add only the Dockerfile, Nginx configuration, static health response, Docker build exclusions, Dokploy runbook, and this ODD task record.
- Preserve the existing Vite + React product behavior and copy.
- Do not deploy remotely, push, merge, open a pull request, or modify or stage `recuersos/`.
- Do not add a Compose file or application services that the static frontend does not require.

## Constraints

- Use Node 22 Alpine for the build stage, `npm ci`, and the existing `npm run build` script.
- Use a minimal Nginx Alpine runtime stage containing only `dist/` and the runtime configuration.
- Serve the SPA from `/usr/share/nginx/html` on port 80 with `/index.html` fallback.
- Keep `/healthz` directly resolvable, cache-free, and independent of application JavaScript.
- Run as the Nginx non-root user when compatible with port 80 and the base image.
- Keep all generated technical artifacts in English.

## Acceptance criteria

1. The multi-stage Dockerfile installs locked dependencies, builds the Vite app, copies only `dist/` into the runtime image, exposes port 80, and declares a `/healthz` health check.
2. Nginx serves the compiled site, supports SPA fallback, and serves `/healthz` without cache headers.
3. `public/healthz` is included in the Vite output.
4. `.dockerignore` excludes repository metadata, generated/build caches, logs, raw `recuersos/`, and non-build task context without excluding current build inputs.
5. `DOKPLOY.md` documents exact Dockerfile settings, port 80, no required environment variables, deployment/redeploy, health verification, local validation, official documentation, and rollback guidance.
6. The required npm checks, Docker validation when available, and `git diff --check` produce observed results without staging or committing changes.

## Effective strict TDD mode and runner

- Strict TDD: enabled by session instruction.
- Existing application runner: Vitest through `npm test`.
- Deployment artifacts use deterministic configuration checks and the requested local Docker smoke test in place of adding product tests.

## Stable task IDs

- [x] **DP-001 — Add the production multi-stage Docker and Nginx configuration**
- [x] **DP-002 — Add the static health response and build-context exclusions**
- [x] **DP-003 — Document Dokploy deployment, validation, and rollback**
- [ ] **DP-004 — Run the complete local verification suite and record evidence**

## Applicable checks

- `npm test -- --run`
- `npm run lint`
- `npm run typecheck`
- `npm run build`
- `git diff --check`
- `docker build -t th-empresarial-dokploy:local .` when Docker is installed
- Bounded container smoke test against `/healthz` when the image builds

## Progress

DP-001 through DP-003 are implemented locally. Existing application files and the untracked `recuersos/` directory were inspected only for repository state; no product source or raw assets are part of this change. DP-004 is partially verified: the npm checks and diff check pass, while Docker access is blocked by the local Docker socket permissions.

## Verification evidence

- `npm test -- --run` — Vitest v5.0.1; 1 test file and 14 tests passed.
- `npm run lint` — exit 0; ESLint reported no issues.
- `npm run typecheck` — exit 0; `tsc --noEmit` passed.
- `npm run build` — exit 0; Vite v8.3.0 transformed 16 modules and emitted `dist/healthz` with body `ok`.
- `git diff --check` — exit 0; no whitespace errors.
- Docker is installed at `/usr/bin/docker`, but `docker build -t th-empresarial-dokploy:local .` could not reach `/var/run/docker.sock` because of permission denied. No image build or container smoke test was observed.
- Pre-commit scope inspection showed only the six intended deployment/task files plus the pre-existing untracked `recuersos/` directory; `recuersos/` remained untouched.
- Local work-unit commit: `a46cc96` (`build(deploy): Prepare Vite app for Dokploy`).

## Delivery and rollback boundary

This task produces local deployment configuration only. No remote Dokploy action, push, merge, or pull request is authorized; the local work-unit commit is part of the authorized implementation. Rollback is documented as selecting the previous known-good Dokploy deployment or redeploying its source revision.

## Next step

Resolve local Docker daemon socket access, then rerun the image build and bounded `/healthz` smoke test to close DP-004. No remote Dokploy action is pending in this local-only task.
