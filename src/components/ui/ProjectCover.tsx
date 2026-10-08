const fills = ["var(--slate)", "var(--teal-bg)", "var(--khaki)"];

type ProjectCoverProps = {
  title: string;
  /** Posição do projeto na lista; define a cor de fundo. */
  index: number;
};

/** Capa provisória em SVG para projetos ainda sem screenshot. */
export function ProjectCover({ title, index }: ProjectCoverProps) {
  return (
    <svg
      viewBox="0 0 640 400"
      aria-hidden="true"
      className="block h-full w-full"
      preserveAspectRatio="xMidYMid slice"
    >
      <rect width="640" height="400" fill={fills[index % fills.length]} />
      <g
        fill="none"
        stroke="var(--ink)"
        strokeOpacity="0.14"
        strokeWidth="6"
        strokeLinecap="square"
      >
        <path d="M0 80H140L190 130H330M640 300H470L420 250H300M90 400V300L140 250M560 0V90L510 140" />
      </g>
      <g fill="var(--ink)" fillOpacity="0.14">
        <circle cx="336" cy="130" r="12" />
        <circle cx="294" cy="250" r="12" />
        <circle cx="144" cy="246" r="12" />
        <circle cx="506" cy="144" r="12" />
      </g>
      <text
        x="40"
        y="230"
        fill="var(--ink)"
        fontSize="68"
        style={{ fontFamily: "var(--font-display)", textTransform: "uppercase" }}
      >
        {title}
      </text>
      <text
        x="42"
        y="270"
        fill="var(--ink)"
        fontSize="16"
        fontWeight="700"
        letterSpacing="2"
        style={{ fontFamily: "var(--font-mono)" }}
      >
        {"// CAPA PROVISÓRIA · SCREENSHOT EM BREVE"}
      </text>
    </svg>
  );
}
