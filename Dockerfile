# What & Why: Containerize the frontend for local parity.
# Security: No secrets; env via VITE_ only. Dev server binds to 0.0.0.0.

FROM node:20-alpine@sha256:06f08e7ec1a24d5b00a99b1e1c4c66ad56b54b3b05b398e720a5b1205feba9d0
WORKDIR /app

# Copy root workspace manifest and the frontend/workspace package manifests
COPY package.json package-lock.json* ./
COPY apps/frontend/package.json apps/frontend/package.json
COPY packages/eslint-config/package.json packages/eslint-config/package.json
COPY packages/eslint-config/index.js packages/eslint-config/index.js

# Install workspace deps (frontend only)
RUN npm install --workspaces --no-audit --no-fund || true

# Copy application sources
COPY apps/frontend apps/frontend

WORKDIR /app/apps/frontend
EXPOSE 5173
CMD ["npm", "run", "dev", "--", "--host"]
