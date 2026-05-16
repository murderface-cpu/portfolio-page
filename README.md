# Bruce Kiptoo Portfolio

A modern developer portfolio for Bruce Kiptoo, built with TanStack Start, React, TypeScript, Tailwind CSS, and Cloudflare deployment tooling. The site presents services, selected projects, testimonials, an about page, and a contact experience for potential clients.

## Features

- **TanStack Start routing** for file-based routes, SSR, metadata, and error handling.
- **React 19 + TypeScript** application code with reusable page and UI components.
- **Tailwind CSS v4** styling with custom surface, button, and theme utilities.
- **Portfolio content pages** for home, about, projects, case studies, and contact.
- **Cloudflare-ready configuration** using the Cloudflare Vite plugin and Wrangler settings.
- **ESLint and Prettier tooling** for code quality and formatting.

## Tech Stack

- [TanStack Start](https://tanstack.com/start)
- [TanStack Router](https://tanstack.com/router)
- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Vite](https://vite.dev/)
- [Cloudflare Workers](https://workers.cloudflare.com/)
- [Bun](https://bun.sh/)

## Getting Started

### Prerequisites

- Bun 1.2 or newer
- Node.js compatible with the installed Vite and TanStack tooling

### Installation

```bash
bun install
```

### Development

Start the local development server:

```bash
bun run dev
```

The app will be served by Vite. Check the terminal output for the local URL and port.

### Production Build

Create a production build:

```bash
bun run build
```

### Preview

Preview the production build locally:

```bash
bun run preview
```

## Available Scripts

| Command             | Description                                |
| ------------------- | ------------------------------------------ |
| `bun run dev`       | Start the Vite development server.         |
| `bun run build`     | Build the production application.          |
| `bun run build:dev` | Build the application in development mode. |
| `bun run preview`   | Preview the built application locally.     |
| `bun run lint`      | Run ESLint across the repository.          |
| `bun run format`    | Format files with Prettier.                |

## Project Structure

```text
src/
  assets/       Static image assets used by the portfolio pages
  components/   Shared layout and UI components
  hooks/        Shared React hooks
  lib/          Utilities and error handling helpers
  routes/       TanStack Router file routes
  router.tsx    Router configuration
  server.ts     Server entry with SSR error capture
```

## Deployment Notes

The project includes `wrangler.jsonc` and Cloudflare Vite plugin configuration for Cloudflare-based deployment. The Vite configuration points TanStack Start's bundled server entry at `src/server.ts`, which preserves the custom SSR error wrapper used by the app.

## Quality Checks

Run the main local checks before opening a pull request:

```bash
bun run lint
bun run build
```
