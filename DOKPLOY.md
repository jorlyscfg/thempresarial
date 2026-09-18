# Dokploy Deployment Runbook

This repository builds a static Vite frontend and serves the generated `dist/` directory with Nginx. It does not require a Node.js process at runtime, a database, or a Compose stack.

## Dokploy application settings

Create or edit the application in Dokploy with these values:

| Setting | Value |
| --- | --- |
| Build Type | `Dockerfile` |
| Dockerfile Path | `Dockerfile` |
| Docker Context Path | `.` |
| Docker Build Stage | Leave blank/default; use the final `runtime` stage |
| Application port | `80` |

No environment variables, build arguments, or build-time secrets are required for this frontend.

The Dockerfile build configuration is described in the [official Dokploy Dockerfile documentation](https://docs.dokploy.com/docs/core/applications/build-type#dockerfile).

## Deploy or redeploy

1. Select the repository and revision configured for the Dokploy application.
2. Apply the settings above and save the application configuration.
3. Trigger **Deploy** in Dokploy and wait for the Docker build and application health to complete.
4. For a later revision, update the source revision or trigger **Redeploy** using the same Dockerfile settings.
5. Open the configured domain only after the health check is green, then verify the landing page and a direct client-side route if one is added later.

Do not add a Dokploy API token or server-specific values to this repository. Authentication and server selection remain Dokploy configuration concerns.

## Health check

The build copies `public/healthz` into `dist/healthz`. Nginx resolves `GET /healthz` directly, without application JavaScript, SPA fallback, or cache storage. The image health check requests `http://127.0.0.1/healthz` and expects a successful response; the endpoint body is `ok`.

After deployment, verify the endpoint through the application domain:

```bash
curl --fail --show-error --silent https://YOUR-DOMAIN/healthz
```

Replace `YOUR-DOMAIN` locally with the domain configured for the application; do not commit that value here.

## Local validation

Run the application checks from the repository root:

```bash
npm ci
npm test -- --run
npm run lint
npm run typecheck
npm run build
git diff --check
```

If Docker is available, build and smoke-test the same image Dokploy will build:

```bash
docker build -t th-empresarial-dokploy:local .
docker run --rm -d --name th-empresarial-dokploy-local -p 8080:80 th-empresarial-dokploy:local
curl --fail --show-error --silent http://127.0.0.1:8080/healthz
docker rm --force th-empresarial-dokploy-local
```

## Rollback

If a deployment is unhealthy or `/healthz` fails, stop rollout and use Dokploy's application rollback to restore the previous known-good deployment. If deployment history is unavailable, redeploy the exact previous known-good source revision. After rollback, verify `/healthz`, the configured domain, and the main landing page before investigating the failed revision.

See Dokploy's [rollback documentation](https://docs.dokploy.com/docs/core/applications/rollbacks) for the platform workflow.
