import { CableBridge } from "@/components/decor/Cable";
import { CircuitPattern } from "@/components/decor/CircuitPattern";
import {
  HazardSticker,
  KanjiSticker,
  SealSticker,
  TagSticker,
} from "@/components/decor/stickers";
import { HeroIllustration } from "@/components/illustrations/HeroIllustration";
import { TypedText } from "@/components/ui/TypedText";
import { site } from "@/data/site";

export function Hero() {
  return (
    <section
      id="topo"
      aria-labelledby="hero-titulo"
      className="tone-teal relative border-b-3 border-ink"
    >
      <CircuitPattern />
      <CableBridge className="left-6 sm:left-16" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-5 pb-20 pt-12 sm:px-8 md:pt-16 lg:grid-cols-[1.15fr_1fr] lg:pb-28">
        <div>
          <p className="micro fade-up mb-4" aria-hidden="true">
            ID: LC-2026 {"//"} status: online {"//"} 23.42°S 51.93°W
          </p>

          <h1
            id="hero-titulo"
            className="fade-up font-display text-[clamp(3.5rem,13vw,8rem)] uppercase leading-[0.9]"
            style={{ "--delay": "80ms" } as React.CSSProperties}
          >
            {site.name}
          </h1>

          <p
            className="fade-up mt-6 inline-block min-h-[2.5rem] border-3 border-ink bg-ink px-3 py-1.5 font-mono text-sm font-bold text-bone sm:text-base"
            style={{ "--delay": "160ms" } as React.CSSProperties}
          >
            <span className="sr-only">{site.role}</span>
            <span aria-hidden="true" className="text-green">
              &gt;{" "}
            </span>
            <TypedText phrases={site.typedPhrases} />
          </p>

          <p
            className="fade-up mt-6 max-w-xl text-lg leading-relaxed sm:text-xl"
            style={{ "--delay": "240ms" } as React.CSSProperties}
          >
            {site.tagline}
          </p>

          <div
            className="fade-up mt-8 flex flex-wrap gap-4"
            style={{ "--delay": "320ms" } as React.CSSProperties}
          >
            <a href="#projetos" className="btn bg-orange">
              Ver projetos
            </a>
            <a href="#contato" className="btn bg-bone">
              Contato
            </a>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-sm lg:max-w-md">
          <HeroIllustration className="fade-up block h-auto w-full" />
          <SealSticker className="-left-2 top-6 w-20 sm:w-24" rot={-12} />
          <TagSticker className="right-0 top-2" rot={8} tone="ink">
            DON&apos;T PANIC
          </TagSticker>
          <KanjiSticker className="-right-2 bottom-24 hidden sm:block" rot={4}>
            開発者
          </KanjiSticker>
          <HazardSticker className="-left-4 bottom-10 w-32" rot={-6} />
        </div>
      </div>
    </section>
  );
}
