import type { ReactNode } from "react";
import { CircuitPattern } from "@/components/decor/CircuitPattern";

type SectionProps = {
  id: string;
  /** Fundo chapado da seção. */
  tone: "ink" | "khaki" | "teal";
  /** Número exibido no rótulo técnico, ex.: "01". */
  index: string;
  /** Rótulo técnico em mono acima do título. */
  label: string;
  title: string;
  children: ReactNode;
  /** Adesivos, cabos e outros enfeites (aria-hidden). */
  decor?: ReactNode;
};

export function Section({
  id,
  tone,
  index,
  label,
  title,
  children,
  decor,
}: SectionProps) {
  const headingId = `${id}-titulo`;

  return (
    <section
      id={id}
      aria-labelledby={headingId}
      className={`tone-${tone} relative border-b-3 border-ink`}
    >
      <CircuitPattern />
      {decor}
      <div className="relative mx-auto max-w-6xl px-5 py-20 sm:px-8 md:py-28">
        <header className="reveal mb-12 md:mb-16">
          <p className="micro mb-3" aria-hidden="true">
            {index} {"//"} {label}
          </p>
          <h2
            id={headingId}
            className="font-display text-5xl uppercase leading-none sm:text-6xl md:text-7xl"
          >
            {title}
          </h2>
        </header>
        {children}
      </div>
    </section>
  );
}
