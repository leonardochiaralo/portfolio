type CableProps = {
  /** Caminho SVG do fio. */
  d: string;
  color?: string;
  width?: number;
};

/** Um fio grosso com contorno escuro. Use dentro de um <svg>. */
export function Cable({ d, color = "var(--orange)", width = 8 }: CableProps) {
  return (
    <>
      <path
        d={d}
        fill="none"
        stroke="var(--ink)"
        strokeWidth={width + 7}
        strokeLinecap="round"
      />
      <path
        d={d}
        fill="none"
        stroke={color}
        strokeWidth={width}
        strokeLinecap="round"
      />
    </>
  );
}

type CableBridgeProps = {
  /** Classes de posicionamento horizontal, ex.: "right-8". */
  className?: string;
  colors?: [string, string];
};

/**
 * Par de cabos que "liga" uma seção à seguinte.
 * Posicione dentro de uma seção `relative`; ele vaza pela borda inferior.
 */
export function CableBridge({
  className = "right-6",
  colors = ["var(--orange)", "var(--slate)"],
}: CableBridgeProps) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 160 112"
      className={`pointer-events-none absolute -bottom-14 z-10 h-28 w-40 ${className}`}
    >
      <Cable d="M40 16C40 62 104 50 104 96" color={colors[0]} />
      <Cable d="M76 16C76 70 136 42 136 96" color={colors[1]} />
      <g fill="var(--ink)">
        <rect x="29" y="2" width="22" height="18" />
        <rect x="65" y="2" width="22" height="18" />
        <rect x="93" y="92" width="22" height="18" />
        <rect x="125" y="92" width="22" height="18" />
      </g>
    </svg>
  );
}
