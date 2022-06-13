# Multiplayer shooter game

WebGL sci-fi multiplayer shooter game.

Client: https://github.com/oslavdev/multiplayer-shooter-server

## Features

- Select and customize character
- Private maps
- Choose weapons
- Audio, video and written chat
- Selection of maps

## Tech

- Turborepo
- Next.js
- Node.js 
- Three.js / React-three-fiber
- GLSL
- Docker
- GraphQL
- PostgreSQL
- Ably (realtime communication)
- Prisma

## Deploy

### Build command

#### Docs

```bash
cd ../.. && npx turbo run build --scope=docs --include-dependencies  --no-deps
```

### Web
```bash
cd ../.. && npx turbo run build --scope=web --include-dependencies  --no-deps
```
