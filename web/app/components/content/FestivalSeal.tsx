import { useEffect, useRef } from "react";

// The festival logo (fest-logo.webp) redrawn with its text turning around the lyre, after React
// Bits' "Circular Text": the logo's navy disc and its lyre (cut out by scripts/images/harp.mjs),
// and the logo's words set on a circle that turns slowly and speeds up under the pointer. Drawn
// in the logo's own units (its disc as radius 100, centred on 0,0), so the lyre and the text sit
// where they sit in the logo. Still for visitors who ask for less motion.
export const SEAL_LOGO = "/img/fest-logo.webp";

const NAVY = "#333289";
// (no-break spaces: an SVG text drops a space at its end)
const TEXT = "INTERNATIONAL CHORAL  •  FESTIVAL OF PREVEZA  •  ";
// the text's baseline circle: the logo's letters stand between radius 76 and 92
const R = 78.3;
const CIRCLE = `M 0 ${-R} A ${R} ${R} 0 1 1 0 ${R} A ${R} ${R} 0 1 1 0 ${-R}`;
const TURN = 30; // seconds a turn, at rest
const FAST = 4; // times faster under the pointer

export function FestivalSeal({ label, className = "" }: { label: string; className?: string }) {
  const ring = useRef<SVGGElement>(null);
  const hover = useRef(false);

  useEffect(() => {
    const g = ring.current;
    if (!g || matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let angle = 0, speed = 1, last = 0, frame = 0, visible = true;
    const step = (t: number) => {
      const dt = last ? Math.min(t - last, 100) / 1000 : 0;
      last = t;
      // ease towards the target speed, so the change is smooth both ways
      speed += ((hover.current ? FAST : 1) - speed) * Math.min(1, dt * 3);
      angle = (angle + (360 / TURN) * speed * dt) % 360;
      g.setAttribute("transform", `rotate(${angle.toFixed(2)})`);
      frame = visible ? requestAnimationFrame(step) : 0;
    };
    // only while on screen
    const io = new IntersectionObserver(([e]) => {
      visible = e.isIntersecting;
      if (visible && !frame) { last = 0; frame = requestAnimationFrame(step); }
    });
    io.observe(g.ownerSVGElement!);
    return () => { io.disconnect(); cancelAnimationFrame(frame); };
  }, []);

  return (
    <svg
      viewBox="-100 -100 200 200"
      role="img"
      aria-label={label}
      className={`block select-none ${className}`}
      onPointerEnter={() => (hover.current = true)}
      onPointerLeave={() => (hover.current = false)}
    >
      <circle r="100" fill={NAVY} />
      <image href="/img/fest-logo-harp.webp" x="-51.15" y="-51.09" width="102.3" height="102.3" />
      <g ref={ring}>
        <path id="seal-circle" d={CIRCLE} fill="none" />
        <text fill="#fff" fontSize="16.5" fontWeight="500" aria-hidden="true">
          {/* the words spread evenly over the whole circle */}
          <textPath href="#seal-circle" textLength={2 * Math.PI * R - 0.5} lengthAdjust="spacing">
            {TEXT}
          </textPath>
        </text>
      </g>
    </svg>
  );
}
