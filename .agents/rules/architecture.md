# Frontend Architecture Guidelines (Catalogo Huaraz)

## 1. Directory Structure & Modular Design
- `src/components/`: Modular UI components separated by domain and responsibility.
- `src/components/3d/`: Isolated 3D Canvas scenes, canvas overlays, and WebGL asset viewers.
- `src/data/`: Static product definitions, mock data, and catalog metadata.
- `src/hooks/`: Custom React hooks for cart state, animations, search/filter debounce, and window resize listeners.
- `src/styles/` or `index.css`: Centralized CSS variables, design tokens, typography, and responsive utilities.

## 2. React 19 Best Practices
- Avoid unnecessary state sync; derive data using `useMemo` for filters and aggregations.
- Keep components focused and single-purpose.
- Wrap complex 3D scenes in `Suspense` with an elegant lightweight loader fallback.
- Avoid passing massive callbacks inline without memoization if causing re-renders in heavy children.

## 3. State Management Standards
- Local UI state (modals, active tabs, hover states) remains in local component state.
- Shared domain state (cart items, active filters, search queries) lifted to top-level or dedicated context/hook.
- Immutable update patterns for cart operations (add, remove, quantity update).
