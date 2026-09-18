# Dokploy Deployment

## Objective

Prepare the existing Vite + React static landing page for a production Docker Compose deployment on Dokploy from GitHub.

## Problem

The repository builds a static `dist/` directory and has a Dockerfile runtime, but Dokploy's clarified GitHub-provider flow also requires a root Compose entrypoint at the configured Compose Path.

## Why

Dokploy needs a reproducible Compose application whose `web` service builds the existing Dockerfile `runtime` target, serves the compiled frontend through Nginx on container port 80, joins Dokploy's external network, and retains a JavaScript-independent health check and documented rollback path.

## Authorized scope

- Add only the Dockerfile, root `docker-compose.yml`, Nginx configuration, static health response, Docker build exclusions, Dokploy runbook, and this ODD task record.
- Preserve the existing Vite + React product behavior and copy.
- Do not deploy remotely, push, merge, open a pull request, or modify or stage `recuersos/`.
- Keep the Compose file to the single required `web` service; do not add application services that the static frontend does not require.

## Constraints

- Use Node 22 Alpine for the build stage, `npm ci`, and the existing `npm run build` script.
- Use a minimal Nginx Alpine runtime stage containing only `dist/` and the runtime configuration.
- Serve the SPA from `/usr/share/nginx/html` on port 80 with `/index.html` fallback.
- Keep `/healthz` directly resolvable, cache-free, and independent of application JavaScript.
- Run as the Nginx non-root user when compatible with port 80 and the base image.
- Use `web` as the Dokploy service name, advertise container port 80 without a fixed host-port mapping, attach to the external `dokploy-network`, and use a production restart policy.
- Do not set `container_name`, hardcode a domain, add secrets, or change the existing Dockerfile or application source without a concrete Compose compatibility reason.
- Keep all generated technical artifacts in English.

## Clarification and official documentation evidence

- User clarification: Dokploy is configured with GitHub as the provider, Compose Type `Docker Compose`, and root Compose Path `./docker-compose.yml`; domain configuration targets service `web` on container port 80.
- Official Dokploy Compose tutorial: [Docker Compose example](https://github.com/dokploy/website/blob/main/apps/docs/content/docs/core/docker-compose/example.mdx) recommends the external `dokploy-network`, no fixed host-port mapping, and no `container_name`.
- Official Dokploy GitHub tutorial evidence supplied with the clarification sets Compose Path to `./docker-compose.yml`.

## Acceptance criteria

1. The multi-stage Dockerfile installs locked dependencies, builds the Vite app, copies only `dist/` into the runtime image, exposes port 80, and declares a `/healthz` health check.
2. Nginx serves the compiled site, supports SPA fallback, and serves `/healthz` without cache headers.
3. `public/healthz` is included in the Vite output.
4. `.dockerignore` excludes repository metadata, generated/build caches, logs, raw `recuersos/`, and non-build task context without excluding current build inputs.
5. Root `docker-compose.yml` defines only `web`, builds `Dockerfile` target `runtime` from `.`, advertises container port 80 without `80:80`, uses the external `dokploy-network`, preserves `/healthz`, and has a production restart policy without `container_name`, domains, secrets, or extra services.
6. `DOKPLOY.md` documents the GitHub provider, Docker Compose type and path, `web` service, port 80, existing Dockerfile `runtime` target, no required environment variables, deployment/redeploy, health verification, local validation, official documentation, and rollback guidance.
7. The required npm checks, Compose validation/build and `/healthz` smoke test when Docker is available, and `git diff --check` produce observed results without staging or committing changes.

## Effective strict TDD mode and runner

- Strict TDD: enabled by session instruction.
- Existing application runner: Vitest through `npm test`.
- Deployment artifacts use deterministic configuration checks and the requested local Docker smoke test in place of adding product tests.

## Stable task IDs

- [x] **DP-001 — Add the production multi-stage Docker and Nginx configuration**
- [x] **DP-002 — Add the static health response and build-context exclusions**
- [x] **DP-003 — Document Dokploy deployment, validation, and rollback**
- [ ] **DP-004 — Run the complete local verification suite and record evidence**
- [x] **DP-005 — Add the Dokploy Docker Compose entrypoint**
- [ ] **DP-006 — Keep build-time dev dependencies available under Dokploy**

## Applicable checks

- `npm test -- --run`
- `npm run lint`
- `npm run typecheck`
- `npm run build`
- `git diff --check`
- `docker compose config`
- `docker compose build web` when Docker daemon access is available
- Bounded Compose container smoke test against `/healthz` when the image builds

## Progress

DP-001 through DP-003 and the clarified DP-005 Compose entrypoint are implemented locally. Dokploy deployment exposed a new DP-006 issue: its production build environment caused `npm ci` to omit devDependencies, so the Docker build could not find `tsc`. The DP-006 Dockerfile fix is implemented and locally verified under `NODE_ENV=production`; DP-004 and DP-006 remain open until the corrected image builds and the Compose smoke test passes. Existing application files and the untracked `recuersos/` directory were inspected only for repository state; no product source or raw assets are part of this change.

## Verification evidence

- `npm test -- --run` — Vitest v5.0.1; 1 test file and 14 tests passed.
- `npm run lint` — exit 0; ESLint reported no issues.
- `npm run typecheck` — exit 0; `tsc --noEmit` passed.
- `npm run build` — exit 0; Vite v8.3.0 transformed 16 modules and emitted `dist/healthz` with body `ok`.
- `git diff --check` — exit 0; no whitespace errors.
- `docker compose config` — exit 0; resolved one `web` service, Dockerfile `runtime` target, exposed container port 80, and external `dokploy-network` without a host-port mapping.
- `docker compose build web` — blocked before build by `permission denied` connecting to `/var/run/docker.sock`; Compose also reported that Buildx is not installed. No image build or container smoke test was observed.
- `NODE_ENV=production npm ci --include=dev && test -x node_modules/.bin/tsc && npm run build` — exit 0; 237 packages installed, `tsc` was present, and Vite transformed 16 modules successfully.
- Dokploy deployment reproduction — `npm ci` added only 3 production packages, then `npm run build` failed with `sh: tsc: not found`; `typescript` is a declared devDependency required by the existing build script.
- Docker is installed at `/usr/bin/docker`, but `docker build -t th-empresarial-dokploy:local .` could not reach `/var/run/docker.sock` because of permission denied. No image build or container smoke test was observed.
- Prior pre-commit scope inspection showed only the six intended deployment/task files plus the pre-existing untracked `recuersos/` directory; `recuersos/` remained untouched.
- Current uncommitted scope is limited to `DOKPLOY.md`, `docker-compose.yml`, and this task record; `Dockerfile`, application source, and `recuersos/` remain untouched.
- Local work-unit commit: `a46cc96` (`build(deploy): Prepare Vite app for Dokploy`).
- Prior task-record update commit: `59ccc67` (`docs(odd): Record Dokploy delivery`).
- Clarified Compose work-unit commit: `5936b81` (`build(deploy): Add Dokploy Compose entrypoint`).

## Delivery and rollback boundary

This task produces local deployment configuration only. No remote Dokploy action is part of this task; the local work-unit commit is part of the authorized implementation, while push, merge, and pull request decisions remain separate. Rollback is documented as selecting the previous known-good Dokploy deployment or redeploying its source revision.

## Next step

Apply the DP-006 build-stage dependency fix, rerun the Compose image build and bounded `/healthz` smoke test, then close DP-004 and DP-006 only from observed results. No remote Dokploy action is pending in this local-only task.
