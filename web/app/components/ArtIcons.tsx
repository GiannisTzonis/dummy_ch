import type { ReactNode } from "react";

// The site's own icons, drawn for the choir rather than taken from a stock set: a 32-unit grid, a
// fine engraved line in the current colour, a soft tint of it behind (the "wash"), and the musical
// details solid as in printed music (note heads and beams leaning as an engraver sets them).
// Small sizes (16-20 px, next to a line of text) take the heavier line, so they stay as clear.
// Decorative: always hidden from screen readers, the text next to them says what they mean.
export type ArtIconName = "choir" | "notes" | "laurel" | "calendar" | "score";

const wash = { fill: "currentColor", fillOpacity: 0.16, stroke: "none" } as const;
const solid = { fill: "currentColor", stroke: "none" } as const;

// the laurel: a leaf with its stem at 0,0, pointing along +x, and the left branch, an arc of a
// circle (centre 16,15.5, radius 11.5) with a pair of leaves every 22 degrees, each leaning 38
// degrees off the branch, out and in; the right branch is its mirror image
const LEAF = "M0 0C1.5-1.3 3.6-1.5 5.2-.8 3.7.5 1.8.7 0 0Z";
const BRANCH = { x: 16, y: 15.5, r: 11.5 };
const at = (deg: number) => {
  const a = (deg * Math.PI) / 180;
  return [+(BRANCH.x + BRANCH.r * Math.cos(a)).toFixed(2), +(BRANCH.y + BRANCH.r * Math.sin(a)).toFixed(2)] as const;
};
const leaves = [128, 154, 180, 206, 232].flatMap((deg, k) => {
  const [x, y] = at(deg);
  // the inner leaves of the upper pairs would touch the lyre
  return k < 2 ? [[x, y, deg + 50], [x, y, deg + 130]] : [[x, y, deg + 50]];
});
const [bx0, by0] = at(118), [bx1, by1] = at(240);
const branch = `M${bx0} ${by0}A${BRANCH.r} ${BRANCH.r} 0 0 1 ${bx1} ${by1}`;

const icons: Record<ArtIconName, ReactNode> = {
  // three singers, the front one singing out a note
  choir: (
    <>
      <path {...wash} d="M8.5 29c0-4.6 3.4-8 7.5-8s7.5 3.4 7.5 8Z" />
      <circle cx="7.6" cy="11.8" r="2.7" />
      <circle cx="24.4" cy="11.8" r="2.7" />
      <path d="M2.2 24.5c0-3.6 2.4-6.2 5.4-6.2 1.2 0 2.3.3 3.2.9" />
      <path d="M29.8 24.5c0-3.6-2.4-6.2-5.4-6.2-1.2 0-2.3.3-3.2.9" />
      <circle cx="16" cy="15" r="3.6" />
      <path d="M8.5 29c0-4.6 3.4-8 7.5-8s7.5 3.4 7.5 8" />
      <ellipse {...solid} cx="14.5" cy="8.3" rx="1.75" ry="1.25" transform="rotate(-22 14.5 8.3)" />
      <path d="M16.1 7.9V2.2c.9 1 3 1.6 3 3.8" />
    </>
  ),
  // two notes joined by a beam, over a curving stave
  notes: (
    <>
      <path {...wash} d="M2 13.5C9 10 15 17 30 11v10C15 27 9 20 2 23.5Z" />
      <path strokeOpacity=".35" d="M2 13.5C9 10 15 17 30 11M2 18.5C9 15 15 22 30 16M2 23.5C9 20 15 27 30 21" />
      <ellipse {...solid} cx="9.2" cy="24.4" rx="3.5" ry="2.5" transform="rotate(-22 9.2 24.4)" />
      <ellipse {...solid} cx="22.4" cy="21.2" rx="3.5" ry="2.5" transform="rotate(-22 22.4 21.2)" />
      <path d="M12.3 23.4V7.6M25.5 20.2V4.4" />
      <path {...solid} d="M11.55 6.1 26.25 2.6v3.5l-14.7 3.5Z" />
    </>
  ),
  // a laurel wreath around the lyre of the festival's logo
  laurel: (
    <>
      <path d={branch} />
      <path d={branch} transform="matrix(-1 0 0 1 32 0)" />
      {leaves.map(([x, y, a]) => (
        <g key={`${y} ${a}`}>
          <path {...solid} d={LEAF} transform={`translate(${x} ${y}) rotate(${a})`} />
          <path {...solid} d={LEAF} transform={`translate(${32 - x} ${y}) rotate(${180 - a})`} />
        </g>
      ))}
      <path {...wash} fillOpacity={0.1} d="M12.3 12.2h7.4c-.6.8-.8 1.6-.3 2.6 1 2.4.2 5.8-2.6 6.8h-1.6c-2.8-1-3.6-4.4-2.6-6.8.5-1 .3-1.8-.3-2.6Z" />
      <path d="M15 21.8c-3.2-.9-4.3-4.4-3.3-7.2.7-2 .6-3.6-.8-5M17 21.8c3.2-.9 4.3-4.4 3.3-7.2-.7-2-.6-3.6.8-5" />
      <path strokeWidth={1.2} d="M11.8 12.2h8.4M14.6 12.2v9.2M17.4 12.2v9.2M14.2 22.4h3.6" />
    </>
  ),
  // a calendar page, its day marked by a note head
  calendar: (
    <>
      <path {...wash} d="M4 10.5h24V8a2.5 2.5 0 0 0-2.5-2.5h-19A2.5 2.5 0 0 0 4 8Z" />
      <rect x="4" y="5.5" width="24" height="22.5" rx="2.5" />
      <path d="M4 10.5h24M10 3v5M22 3v5" />
      <path strokeOpacity=".45" d="M8.5 16h.01M13 16h.01M17.5 16h.01M8.5 22h.01M13 22h.01M23.5 16h.01" strokeWidth="2.2" />
      <ellipse {...solid} cx="21.6" cy="22.2" rx="3" ry="2.15" transform="rotate(-22 21.6 22.2)" />
    </>
  ),
  // a page of music coming down to you
  score: (
    <>
      <path {...wash} d="M7 3.5h12.5L26 10v18.5H7Z" />
      <path d="M19.5 3.5H8.5A1.5 1.5 0 0 0 7 5v22a1.5 1.5 0 0 0 1.5 1.5h16A1.5 1.5 0 0 0 26 27V10Z" />
      <path d="M19.5 3.5V10H26" />
      <path strokeOpacity=".4" d="M10.5 9.5h5.5M10.5 12.5h12" />
      <path d="M16.5 15.5v8.5M12.6 20.4l3.9 3.9 3.9-3.9" />
    </>
  ),
};

export function ArtIcon({ name, small = false, className = "" }: { name: ArtIconName; small?: boolean; className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 32 32"
      fill="none"
      stroke="currentColor"
      strokeWidth={small ? 2.25 : 1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`shrink-0 ${className}`}
    >
      {icons[name]}
    </svg>
  );
}
