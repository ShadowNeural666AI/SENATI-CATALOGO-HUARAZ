# 3D Animation & WebGL Performance Guidelines

## 1. Engine & Integration
- Uses **Three.js** and **React Three Fiber (@react-three/fiber, @react-three/drei)**.
- All 3D canvases must declare proper pixelRatio capping: `dpr={[1, 1.5]}` or `dpr={[1, 2]}` to prevent GPU throttling on high-DPI displays.
- Enable `frameloop="demand"` for static/interactive-on-event scenes, or `frameloop="always"` only for continuous floating/ambient rotations.

## 2. Resource Management & Cleanup
- Always dispose of geometries, materials, and textures when unmounting custom Three.js objects to avoid memory leaks.
- Prefer procedural/procedural-shader materials or low-poly GLTF/DRACO models over raw uncompressed 4K textures.
- Limit shadow map resolutions (e.g. 512x512 or 1024x1024 max) and avoid excessive dynamic point lights. Use directional lights with contact shadows.

## 3. User Experience & Graceful Degradation
- Wrap all 3D canvas components inside `<Suspense fallback={<LoaderPlaceholder />}>`.
- Provide touch and mouse interactive controls (OrbitControls or PresentationControls) with smooth damping (`dampingFactor: 0.05`).
- Support fallback for environments where WebGL is unsupported or reduced-motion is requested (`prefers-reduced-motion`).
