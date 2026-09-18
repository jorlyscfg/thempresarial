# syntax=docker/dockerfile:1

FROM node:22-alpine AS build

WORKDIR /app

COPY package.json package-lock.json ./
# Dokploy may use production npm settings, but the Vite build needs devDependencies.
RUN npm ci --include=dev

COPY index.html vite.config.ts tsconfig.json eslint.config.js ./
COPY src ./src
COPY public ./public

RUN npm run build

FROM nginx:1.29-alpine AS runtime

# Keep the official root master so Nginx can bind port 80. nginx.conf drops
# worker processes to the image's non-root nginx user.
RUN rm -f /etc/nginx/conf.d/default.conf \
    && rm -rf /etc/nginx/templates

COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80

HEALTHCHECK --interval=30s --timeout=5s --start-period=5s --retries=3 \
  CMD wget --spider --quiet http://127.0.0.1/healthz || exit 1
