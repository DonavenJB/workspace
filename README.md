# Empiryu

Real-time feudal conquest MMO. Rebuild in progress — **Phase 0** (skeleton only, nothing plays yet).

```
packages/
  shared/   @empiryu/shared   — domain types (no I/O)
  server/   @empiryu/server   — NestJS on Fastify
  client/   @empiryu/client   — Vite + TS (Pixi map later)
```

## Run

Node 20+. Docker (Mongo/Redis) not needed until Phase 2.

```bash
npm install
npm run dev:server   # http://localhost:3000/health
npm run dev:client   # http://localhost:5173
```
