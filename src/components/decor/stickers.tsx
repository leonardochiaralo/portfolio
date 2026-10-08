import { useId, type CSSProperties, type ReactNode } from "react";

/**
 * Adesivos decorativos. Todos são aria-hidden e posicionados com
 * `position: absolute` (classe .sticker em globals.css): passe a posição
 * e o tamanho em `className` (ex.: "right-4 top-8 w-16") e o giro em `rot`.
 */

type StickerProps = {
  className?: string;
  /** Rotação em graus. */
  rot?: number;
};

function Sticker({
  className = "",
  rot = 0,
  children,
}: StickerProps & { children: ReactNode }) {
  return (
    <span
      aria-hidden="true"
      className={`sticker ${className}`}
      style={{ "--rot": `${rot}deg` } as CSSProperties}
    >
      {children}
    </span>
  );
}

const stroke = {
  stroke: "var(--ink)",
  strokeWidth: 4,
  strokeLinejoin: "round",
  strokeLinecap: "round",
} as const;

/** Smiley com olhos em X. */
export function SmileySticker({
  fill = "var(--khaki)",
  ...props
}: StickerProps & { fill?: string }) {
  return (
    <Sticker {...props}>
      <svg viewBox="0 0 64 64" className="block h-auto w-full">
        <circle cx="32" cy="32" r="28" fill={fill} {...stroke} />
        <path
          d="M17 20l10 10M27 20L17 30M37 20l10 10M47 20L37 30M20 44q12 -7 24 0"
          fill="none"
          {...stroke}
        />
      </svg>
    </Sticker>
  );
}

/** Triângulo de alerta. */
export function WarningSticker({
  fill = "var(--orange)",
  ...props
}: StickerProps & { fill?: string }) {
  return (
    <Sticker {...props}>
      <svg viewBox="0 0 64 60" className="block h-auto w-full">
        <path d="M32 5L60 55H4z" fill={fill} {...stroke} />
        <path d="M32 24v14" fill="none" {...stroke} strokeWidth={5} />
        <circle cx="32" cy="46" r="3" fill="var(--ink)" />
      </svg>
    </Sticker>
  );
}

/** Faixa de listras de perigo. */
export function HazardSticker({
  fill = "var(--khaki)",
  ...props
}: StickerProps & { fill?: string }) {
  const id = useId();

  return (
    <Sticker {...props}>
      <svg viewBox="0 0 160 28" className="block h-auto w-full">
        <defs>
          <pattern
            id={id}
            width="24"
            height="24"
            patternUnits="userSpaceOnUse"
            patternTransform="rotate(-45)"
          >
            <rect width="24" height="24" fill={fill} />
            <rect width="12" height="24" fill="var(--ink)" />
          </pattern>
        </defs>
        <rect
          x="2"
          y="2"
          width="156"
          height="24"
          fill={`url(#${id})`}
          {...stroke}
        />
      </svg>
    </Sticker>
  );
}

/** Etiqueta com número de série ou rótulo técnico. */
export function TagSticker({
  children,
  tone = "bone",
  ...props
}: StickerProps & { children: ReactNode; tone?: "bone" | "ink" | "orange" }) {
  const tones = {
    bone: "bg-bone text-ink",
    ink: "bg-ink text-bone",
    orange: "bg-orange text-ink",
  };

  return (
    <Sticker {...props}>
      <span
        className={`block whitespace-nowrap border-2 border-ink px-2 py-1 font-mono text-[11px] font-bold uppercase tracking-wider ${tones[tone]}`}
      >
        {children}
      </span>
    </Sticker>
  );
}

/** Selo redondo, tipo "v1.0 · 2026". */
export function SealSticker({
  top = "v1.0",
  bottom = "2026",
  fill = "var(--bone)",
  ...props
}: StickerProps & { top?: string; bottom?: string; fill?: string }) {
  return (
    <Sticker {...props}>
      <svg viewBox="0 0 96 96" className="block h-auto w-full">
        <circle cx="48" cy="48" r="44" fill={fill} {...stroke} />
        <circle
          cx="48"
          cy="48"
          r="35"
          fill="none"
          stroke="var(--ink)"
          strokeWidth="2"
          strokeDasharray="3 5"
        />
        <text
          x="48"
          y="52"
          textAnchor="middle"
          fill="var(--ink)"
          fontSize="26"
          style={{ fontFamily: "var(--font-display)" }}
        >
          {top}
        </text>
        <text
          x="48"
          y="70"
          textAnchor="middle"
          fill="var(--ink)"
          fontSize="11"
          fontWeight="700"
          letterSpacing="2"
          style={{ fontFamily: "var(--font-mono)" }}
        >
          {bottom}
        </text>
      </svg>
    </Sticker>
  );
}

/** Etiqueta vertical com uma palavra em japonês (detalhe decorativo). */
export function KanjiSticker({
  children,
  ...props
}: StickerProps & { children: ReactNode }) {
  return (
    <Sticker {...props}>
      <span
        lang="ja"
        className="block border-2 border-ink bg-ink px-1.5 py-2 text-base font-bold leading-none tracking-widest text-bone [writing-mode:vertical-rl]"
      >
        {children}
      </span>
    </Sticker>
  );
}
