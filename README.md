# Clean Astro

An example of **Clean Architecture** in [Astro](https://astro.build/): one framework-agnostic domain and data layer, rendered by three different UI technologies side by side — an Astro component, a React island, and a Solid island.

The goal is to show that business logic should not depend on the UI framework. All three islands consume the same use cases; only the presentation layer changes. React and Solid use **custom hooks** as their presentation pattern.

## Architecture

```text
src/
├── domain/frameworks/     # Business rules — pure TypeScript
│   ├── entities/              # Framework entity
│   ├── vos/                   # Value objects: Id, Name, ImageSrc, Popularity, UrlPage
│   ├── repository/            # FrameworksRepository port (interface)
│   └── use_cases/             # GetFrameworks, GetFrameworkByName
├── data/frameworks/       # Adapters: Axios API clients + FrameworksAPIRepository
├── pages/                 # Presentation
│   ├── astro/                 # Astro island (server-rendered)
│   ├── react/                 # React island + useFrameworks hook
│   ├── solid/                 # Solid island + useFrameworks hook
│   └── index.astro            # Page that renders the three islands
└── CompositionRoot.ts     # Wires use cases ← repository ← API clients
```

Dependencies point inwards: `pages → domain ← data`.

## Tech stack

- Astro 4 (SSR with the Netlify adapter)
- React 18 and Solid via Astro integrations
- TypeScript and Axios
- [json-server](https://github.com/typicode/json-server) as a fake REST API (`db.json`)

## Getting started

### Prerequisites

- Node.js 18+
- pnpm

### Setup

```sh
pnpm install
```

Create a `.env` file pointing to the fake API (json-server runs on port 3000 by default):

```sh
PUBLIC_API_URL=http://localhost:3000
```

### Run

```sh
pnpm dev
```

`pnpm dev` starts both the Astro dev server and json-server. Make sure json-server is running, because every island fetches its data from it.

## Scripts

| Script | Description |
| --- | --- |
| `pnpm dev` | Start Astro and json-server together |
| `pnpm start` | Start only the Astro dev server |
| `pnpm json-server` | Start only the fake API |
| `pnpm build` | Type-check (`astro check`) and build |
| `pnpm preview` | Preview the production build |
