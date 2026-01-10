# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is the documentation website for **vuln-pkg** - a package manager for deliberately-vulnerable applications used in security training. The site uses a dark terminal/hacker aesthetic with phosphor green accents and CRT effects.

## Tech Stack

- **Framework**: React Router v7 (with SSR)
- **Styling**: Tailwind CSS v4 with custom CSS variables
- **Package Manager**: pnpm
- **Build Tool**: Vite

## Common Commands

```bash
# Development server
pnpm dev

# Production build
pnpm build

# Start production server
pnpm start

# Type checking
pnpm typecheck
```

## Architecture

### Routes
Routes are defined in `app/routes.ts` using React Router v7's file-based routing:
- `/` - Landing page (`app/routes/home.tsx`)
- `/docs` - Documentation page (`app/routes/docs.tsx`)

### Styling System
Custom CSS variables are defined in `app/app.css` under the `@theme` block:
- `--color-terminal-green`: Primary accent (#00ff41)
- `--color-terminal-amber`: Secondary accent for warnings (#ffb000)
- `--color-terminal-cyan`: Info/links (#00ffff)
- `--color-bg-deep`, `--color-bg-surface`, `--color-bg-elevated`: Background layers

Key CSS classes:
- `.crt-screen`: Applies scanline and vignette effects
- `.glow-text`: Phosphor green text with glow shadow
- `.code-block`: Terminal window styling
- `.btn-terminal`: Cyberpunk-style button with hover effects
- `.feature-card`: Card with animated border on hover
- `.grid-bg`: Subtle grid background pattern

### Fonts
The site uses Google Fonts loaded via `app/root.tsx`:
- **JetBrains Mono**: Primary monospace font for all text
- **Space Grotesk**: Display font (available but sparingly used)

## Content Source

The vuln-pkg tool documentation and content comes from the adjacent `../vuln-pkg` repository. Key information:
- **GitHub**: https://github.com/neutrino2211/vuln-pkg
- **Tagline**: "The NPM for your home lab"
- **Description**: One command to spin up any vulnerable application for security training
- **Commands**: list, search, install, run, stop, remove, rebuild, status, manifest
- **Global Options**: --json, -y/--yes, --manifest-url, --resolve-address, --domain, --https
- Uses Docker, Traefik reverse proxy, and sslip.io for zero-config DNS
- Manifest trust system for accepting/rejecting third-party manifests
