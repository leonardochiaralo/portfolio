import { Cable } from "@/components/decor/Cable";

/**
 * Ilustração principal do hero: capacete com visor, cabos e adesivos,
 * em cores chapadas e contorno grosso.
 */
export function HeroIllustration({ className = "" }: { className?: string }) {
  const outline = {
    stroke: "var(--ink)",
    strokeWidth: 5,
    strokeLinejoin: "round",
    strokeLinecap: "round",
  } as const;

  return (
    <svg
      viewBox="0 0 480 560"
      role="img"
      aria-label="Ilustração de uma cabeça com capacete, visor e cabos, coberta de adesivos"
      className={className}
    >
      {/* Cabos saindo do capacete */}
      <Cable d="M150 120C120 70 90 50 30 34" color="var(--orange)" width={10} />
      <Cable d="M200 96C192 50 214 30 204 -10" color="var(--slate)" width={10} />
      <Cable d="M236 96C240 56 262 40 258 -10" color="var(--khaki)" width={8} />
      <Cable d="M330 120C356 70 410 62 462 30" color="var(--slate)" width={10} />
      <Cable d="M62 300C20 340 44 450 14 560" color="var(--khaki)" width={10} />
      <Cable d="M418 300C464 350 436 450 468 560" color="var(--orange)" width={10} />

      {/* Antena */}
      <path d="M372 122L396 44" fill="none" {...outline} />
      <circle cx="398" cy="38" r="9" fill="var(--khaki)" {...outline} />

      {/* Gola e pescoço */}
      <path d="M84 560L128 496H352L396 560z" fill="var(--slate)" {...outline} />
      <path d="M172 404H308L326 506H154z" fill="var(--ink-soft)" {...outline} />
      <path d="M166 440H314M160 472H320" fill="none" {...outline} strokeWidth={4} />
      <text
        x="240"
        y="542"
        textAnchor="middle"
        fill="var(--ink)"
        fontSize="22"
        letterSpacing="2"
        style={{ fontFamily: "var(--font-display)" }}
      >
        DON&apos;T PANIC
      </text>

      {/* Módulos laterais */}
      <rect x="38" y="226" width="46" height="96" fill="var(--slate)" {...outline} />
      <rect x="396" y="226" width="46" height="96" fill="var(--slate)" {...outline} />
      <path d="M38 252H84M38 296H84M396 252H442M396 296H442" fill="none" {...outline} strokeWidth={4} />
      <circle cx="61" cy="274" r="8" fill="var(--khaki)" {...outline} strokeWidth={4} />
      <circle cx="419" cy="274" r="8" fill="var(--khaki)" {...outline} strokeWidth={4} />

      {/* Casco */}
      <path
        d="M130 110H350L402 162V332L352 404H128L78 332V162z"
        fill="var(--orange)"
        {...outline}
      />
      {/* Sombra chapada (lado direito) e placa superior */}
      <path d="M350 110L402 162V332L352 404z" fill="var(--orange-dark)" {...outline} />
      <path d="M168 78H312L350 110H130z" fill="var(--orange-dark)" {...outline} />
      <path d="M130 110V196M240 78V110" fill="none" {...outline} strokeWidth={4} />
      <g fill="var(--ink)">
        <circle cx="100" cy="176" r="5" />
        <circle cx="380" cy="176" r="5" />
        <circle cx="102" cy="330" r="5" />
        <circle cx="378" cy="330" r="5" />
      </g>

      {/* Protetor de queixo com respiros */}
      <path d="M150 324H330L310 386H170z" fill="var(--khaki)" {...outline} />
      <path d="M196 344H284M204 364H276" fill="none" {...outline} strokeWidth={4} />

      {/* Visor */}
      <path
        d="M72 198H408L424 216V276L398 304H82L56 276V216z"
        fill="var(--ink)"
        {...outline}
      />
      <path d="M90 216H390L402 228V268L386 286H94L78 268V228z" fill="#1b2b2b" />
      <g fill="none" stroke="var(--green)" strokeWidth="10" strokeLinecap="square">
        <path d="M168 230L140 251L168 272" />
        <path d="M258 226L228 276" />
        <path d="M312 230L340 251L312 272" />
      </g>
      <path d="M96 226H128M362 276H384" fill="none" stroke="var(--green)" strokeWidth="3" />

      {/* Adesivos no casco */}
      <g transform="rotate(-10 176 152)">
        <circle cx="176" cy="152" r="24" fill="var(--khaki)" {...outline} strokeWidth={4} />
        <path
          d="M163 142l9 9M172 142l-9 9M180 142l9 9M189 142l-9 9M165 164q11 -6 22 0"
          fill="none"
          {...outline}
          strokeWidth={3.5}
        />
      </g>
      <g transform="rotate(6 262 150)">
        <rect x="222" y="138" width="80" height="26" fill="var(--bone)" {...outline} strokeWidth={3} />
        <text
          x="262"
          y="156"
          textAnchor="middle"
          fill="var(--ink)"
          fontSize="13"
          fontWeight="700"
          letterSpacing="1"
          style={{ fontFamily: "var(--font-mono)" }}
        >
          LC-2026
        </text>
      </g>
      <g transform="rotate(12 328 160)">
        <path d="M328 138L350 178H306z" fill="var(--khaki)" {...outline} strokeWidth={4} />
        <path d="M328 152v12" fill="none" {...outline} strokeWidth={4} />
        <circle cx="328" cy="171" r="2.5" fill="var(--ink)" />
      </g>
    </svg>
  );
}
