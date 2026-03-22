# AGENTS.md

## Cursor Cloud specific instructions

### Project overview

pnpm monorepo (client / server / shared) — React SPA dashboard + Hono API on Cloudflare Workers with D1 (SQLite).

### Services

| Service | Command | Port | Notes |
|---------|---------|------|-------|
| Client (React SPA) | `pnpm dev` (from root) | 3000 | Vite dev server; proxies `/api/*` to server |
| Server (Hono/Wrangler) | `pnpm dev:server` (from root) | 8787 | Local Workers runtime with D1 emulation |
| Both in parallel | `pnpm dev:all` | 3000 + 8787 | |

### Non-obvious setup caveats

- **`server/.dev.vars`** must exist with `BETTER_AUTH_SECRET=<any-non-empty-string>` for auth to work locally. This file is gitignored.
- **D1 migrations** must be applied before the server serves auth requests: `pnpm --filter server db:migrate:local`. The migration directory is configured as `src/db/migrations` in `wrangler.toml`.
- **`pnpm.onlyBuiltDependencies`** in root `package.json` whitelists `esbuild`, `sharp`, and `workerd` so their postinstall scripts run (required by wrangler).
- **`nodejs_compat`** compatibility flag is set in `server/wrangler.toml` — required by `better-auth` which uses `node:async_hooks`.
- **`database_id`** in `wrangler.toml` must be non-empty even for local dev; a placeholder value is used.
- **SSR is disabled** (`ssr: false` in `client/react-router.config.ts`). The `entry.server.tsx` SSR path may log errors but they don't affect the SPA.

### Lint / Typecheck / Build

- `pnpm lint` — runs ESLint on the client (server has no lint script). Pre-existing lint errors exist in auto-generated `.react-router/types` files and some chart components.
- `pnpm typecheck` — runs TypeScript checks across all workspaces.
- `pnpm build` — builds the client; `pnpm build:server` — dry-run deploy for the server.
