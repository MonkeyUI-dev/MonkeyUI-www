"use client";

import Aurora from "./Aurora";
import Particles from "./Particles";

/**
 * AuroraBackground
 * Composes react-bits Aurora (WebGL shader) + Particles (WebGL 3D)
 * as layered hero background effects.
 *
 * Dependencies: ogl (via Aurora & Particles components)
 */
export default function AuroraBackground() {
  return (
    <div className="hero-bg" aria-hidden="true">
      {/* Layer 1: Aurora gradient shader */}
      <div className="hero-bg-layer hero-bg-aurora">
        <Aurora
          colorStops={["#1a3a2a", "#A8C0AF", "#1a3a2a"]}
          amplitude={1.2}
          blend={0.6}
          speed={0.4}
        />
      </div>
      {/* Layer 2: Floating 3D particles */}
      <div className="hero-bg-layer hero-bg-particles">
        <Particles
          particleCount={120}
          particleSpread={8}
          speed={0.08}
          particleColors={["#A8C0AF", "#ffffff", "#8ab495"]}
          moveParticlesOnHover={true}
          particleHoverFactor={0.4}
          alphaParticles={true}
          particleBaseSize={80}
          sizeRandomness={0.6}
          cameraDistance={22}
        />
      </div>
    </div>
  );
}
