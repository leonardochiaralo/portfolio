import { useId } from "react";

/**
 * Padrão de placa de circuito, tom sobre tom.
 * A cor vem de --pattern-color, definida pelo tom da seção (.tone-*).
 */
export function CircuitPattern() {
  const id = useId();

  return (
    <svg
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 h-full w-full"
    >
      <defs>
        <pattern
          id={id}
          width="240"
          height="240"
          patternUnits="userSpaceOnUse"
        >
          <g
            fill="none"
            stroke="var(--pattern-color)"
            strokeWidth="3"
            strokeLinecap="square"
          >
            <path d="M0 40H60L90 70H150L180 40H240" />
            <path d="M0 120H40L70 150H120" />
            <path d="M240 120H190L160 150V184" />
            <path d="M120 0V30L100 50" />
            <path d="M120 240V215L100 195" />
            <path d="M210 0V14M210 240V184" />
            <rect x="20" y="176" width="48" height="34" />
            <path d="M30 176V166M44 176V166M58 176V166M30 210V220M44 210V220M58 210V220" />
          </g>
          <g fill="var(--pattern-color)">
            <circle cx="124" cy="150" r="6" />
            <circle cx="160" cy="190" r="6" />
            <circle cx="98" cy="52" r="6" />
            <circle cx="98" cy="193" r="6" />
            <circle cx="210" cy="18" r="6" />
            <circle cx="210" cy="180" r="6" />
          </g>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${id})`} />
    </svg>
  );
}
