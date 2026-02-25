'use client';

import { useRef, useState, useCallback } from 'react';

/**
 * ShinyText – gradient highlight follows mouse horizontally across the text.
 * When the cursor leaves the text area the highlight gently resets to center.
 */
export default function ShinyText({ children, className = '' }) {
  const ref = useRef(null);
  const [pos, setPos] = useState(100); // 0–200, default = 100 (center)
  const [hovering, setHovering] = useState(false);

  const handleMouseMove = useCallback((e) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    // Normalise mouse X within [0, 200] for background-position percentage
    const x = ((e.clientX - rect.left) / rect.width) * 200;
    setPos(Math.max(0, Math.min(200, x)));
  }, []);

  const handleEnter = useCallback(() => setHovering(true), []);
  const handleLeave = useCallback(() => {
    setHovering(false);
    setPos(100); // reset to centre
  }, []);

  return (
    <span
      ref={ref}
      className={`accent scroll-gradient ${className}`}
      style={{ '--shimmer-pos': `${pos}%` }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      data-hovering={hovering || undefined}
    >
      {children}
    </span>
  );
}
