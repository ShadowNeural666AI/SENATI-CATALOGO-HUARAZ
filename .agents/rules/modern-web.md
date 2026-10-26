# Google Modern Web Guidance Rules

Derived from `GoogleChrome/modern-web-guidance`:

## 1. Core Web Vitals (CWV)
- **INP (Interaction to Next Paint)**: Keep JavaScript event handlers lean. Do not block the main thread with heavy geometry calculations or synchronous processing.
- **LCP (Largest Contentful Paint)**: Prioritize hero image/canvas mounting, preconnect fonts, and use CSS `content-visibility: auto` for off-screen product cards.
- **CLS (Cumulative Layout Shift)**: Provide explicit aspect ratios or reserved container dimensions for 3D canvases, product thumbnails, and banners.

## 2. Modern CSS & Visual Design
- Modern color schemes using CSS custom properties (`oklch` or HSL curated palettes), backdrop-filter glassmorphism, subtle micro-interactions.
- Container queries & responsive flex/grid layouts instead of rigid pixel widths.
- Smooth transitions for hover, cart actions, modal popups, and drawer expansions.

## 3. Accessibility & Usability (a11y)
- All interactive controls (buttons, links, drawer toggles) have visible focus indicators and accessible labels (`aria-label`).
- Modal dialogs trap focus and close on `Escape` key.
- Maintain high contrast ratios for text over gradients or blurred backdrops.
