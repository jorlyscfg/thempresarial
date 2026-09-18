# Dokploy Deployment Runbook

This repository builds a static Vite frontend and serves the generated `dist/` directory with Nginx. Dokploy runs it as a Docker Compose application with one `web` service; the Compose build uses the existing multi-stage Dockerfile and does not require a Node.js process at runtime, a database, or extra services.

## Dokploy application settings

Create or edit the application in Dokploy with these values:

| Setting | Value |
| --- | --- |
| Provider | `GitHub` |
| Compose Type | `Docker Compose` |
| Compose Path | `./docker-compose.yml` |
| Service name | `web` |
| Container port | `80` |

No environment variables, build arguments, or build-time secrets are required for this frontend.

The Compose service builds `Dockerfile` from context `.` with the `runtime` target. It advertises port 80 to Dokploy without a fixed host-port mapping and joins the external `dokploy-network` expected by Dokploy and Traefik. Configure the Dokploy domain to target service `web` on container port 80.

This setup follows Dokploy's [official Docker Compose example](https://github.com/dokploy/website/blob/main/apps/docs/content/docs/core/docker-compose/example.mdx). The Dockerfile build behavior is also described in the [official Dokploy Dockerfile documentation](https://docs.dokploy.com/docs/core/applications/build-type#dockerfile).

## Deploy or redeploy

1. Select GitHub as the provider, then select the repository and revision configured for the Dokploy application.
2. Set Compose Type to `Docker Compose` and Compose Path to `./docker-compose.yml`, then save the application configuration.
3. Configure the domain to use service `web` and container port `80`.
4. Trigger **Deploy** in Dokploy and wait for the Compose build and application health to complete.
5. For a later GitHub revision, trigger **Redeploy** with the same Compose settings.
6. Open the configured domain only after the health check is green, then verify the landing page and a direct client-side route if one is added later.

Do not add a Dokploy API token or server-specific values to this repository. Authentication and server selection remain Dokploy configuration concerns.

## Health check

The build copies `public/healthz` into `dist/healthz`. Nginx resolves `GET /healthz` directly, without application JavaScript, SPA fallback, or cache storage. Both the Dockerfile image and Compose service health checks request `http://127.0.0.1/healthz` and expect a successful response; the endpoint body is `ok`.

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

If Docker is available, validate the Compose definition, build the same `runtime` image Dokploy will build, and smoke-test `/healthz` inside the Compose service:

```bash
docker compose config
docker compose build web
docker network inspect dokploy-network >/dev/null 2>&1 || docker network create dokploy-network
docker compose up -d web
docker compose exec web wget --spider --quiet http://127.0.0.1/healthz
docker compose down
```

The external `dokploy-network` is created by Dokploy. The local `docker network` line only prepares that expected external network for a local smoke test; it does not add a service or publish a host port. If the current user cannot access `/var/run/docker.sock`, Docker commands that need the daemon fail with `permission denied`; record that limitation instead of claiming a build or smoke test succeeded.

## Rollback

If a deployment is unhealthy or `/healthz` fails, stop rollout and use Dokploy's application rollback to restore the previous known-good deployment. If deployment history is unavailable, redeploy the exact previous known-good source revision. After rollback, verify `/healthz`, the configured domain, and the main landing page before investigating the failed revision.

See Dokploy's [rollback documentation](https://docs.dokploy.com/docs/core/applications/rollbacks) for the platform workflow.
