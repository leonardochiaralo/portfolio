import { CableBridge } from "@/components/decor/Cable";
import { SmileySticker, TagSticker } from "@/components/decor/stickers";
import { Section } from "@/components/layout/Section";
import { about, facts } from "@/data/profile";

export function About() {
  return (
    <Section
      id="sobre"
      tone="ink"
      index="01"
      label="whoami"
      title="Sobre mim"
      decor={
        <>
          <SmileySticker
            className="right-6 top-10 w-14 sm:right-16 sm:w-20"
            rot={12}
            fill="var(--orange)"
          />
          <CableBridge
            className="right-6 sm:right-24"
            colors={["var(--orange)", "var(--khaki)"]}
          />
        </>
      }
    >
      <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr]">
        <div className="reveal max-w-2xl space-y-5 text-lg leading-relaxed">
          {about.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>

        <div className="reveal relative self-start">
          <TagSticker className="-top-4 right-4 z-10" rot={5} tone="orange">
            SN: LC-0x7EA
          </TagSticker>
          <div className="card p-6">
            <p className="micro mb-4" aria-hidden="true">
              ficha técnica
            </p>
            <dl className="space-y-3 font-mono text-sm">
              {facts.map((fact) => (
                <div
                  key={fact.label}
                  className="flex justify-between gap-4 border-b-2 border-dashed border-ink pb-2 last:border-0 last:pb-0"
                >
                  <dt className="uppercase tracking-wider">{fact.label}</dt>
                  <dd className="text-right font-bold">{fact.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </Section>
  );
}
