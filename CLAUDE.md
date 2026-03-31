# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Start Vite dev server with HMR
npm run build     # Type-check (tsc -b) then build for production
npm run lint      # Run ESLint on all TS/TSX files
npm run preview   # Preview the production build locally
```

No test runner is configured.

## Stack

- **React 19** + **TypeScript 5.9** + **Vite 7**
- **Less** for component styling (alongside global `index.css`)
- ESLint 9 with `typescript-eslint`, `react-hooks`, and `react-refresh` plugins

## Architecture

]
This is a minimal starter — no routing, no state management, no testing framework.

```
index.html
└── src/main.tsx        # createRoot → <StrictMode><App /></StrictMode>
    └── src/App.tsx     # Root component
        └── App.less    # Component styles (Less)
```

`src/` currently has a single component (`App.tsx`). New features should be added under `src/` with component-level `.less` files for styling.

## TypeScript Config

Strict mode is on with `noUnusedLocals`, `noUnusedParameters`, `noUncheckedSideEffectImports`. Uses project references (`tsconfig.app.json` for app code, `tsconfig.node.json` for Vite config).
