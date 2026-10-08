import {
  HazardSticker,
  SealSticker,
  WarningSticker,
} from "@/components/decor/stickers";
import { Section } from "@/components/layout/Section";
import { site } from "@/data/site";

const channels = [
  {
    label: "E-mail",
    value: site.email,
    href: `mailto:${site.email}`,
    external: false,
  },
  {
    label: "LinkedIn",
    value: "/in/leonardochiaralo",
    href: site.links.linkedin,
    external: true,
  },
  {
    label: "GitHub",
    value: "@leonardochiaralo",
    href: site.links.github,
    external: true,
  },
];

export function Contact() {
  return (
    <Section
      id="contato"
      tone="khaki"
      index="05"
      label="ping leonardo"
      title="Contato"
      decor={
        <>
          <WarningSticker
            className="right-8 top-12 w-14 sm:right-20 sm:w-16"
            rot={9}
          />
          <SealSticker
            className="bottom-8 right-6 hidden w-24 md:block"
            rot={-8}
            fill="var(--orange)"
          />
          <HazardSticker
            className="bottom-8 left-6 hidden w-36 md:block"
            rot={-3}
            fill="var(--orange)"
          />
        </>
      }
    >
      <p className="reveal mb-10 max-w-xl text-lg leading-relaxed">
        Tem um projeto, uma vaga ou só quer trocar uma ideia sobre front-end?
        Escolha um canal. Respondo assim que possível.
      </p>

      <ul className="grid gap-6 md:grid-cols-3 md:pb-24">
        {channels.map((channel) => (
          <li key={channel.label} className="reveal">
            <a
              href={channel.href}
              {...(channel.external
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
              className="card group block p-5 transition-transform duration-150 hover:translate-x-0.5 hover:translate-y-0.5"
            >
              <span className="flex items-center justify-between gap-3">
                <span className="font-display text-3xl uppercase leading-none">
                  {channel.label}
                </span>
                <span
                  aria-hidden="true"
                  className="grid size-9 place-items-center border-3 border-ink bg-orange font-mono text-lg font-bold"
                >
                  ↗
                </span>
              </span>
              <span className="mt-3 block break-all font-mono text-sm font-bold underline-offset-4 group-hover:underline">
                {channel.value}
              </span>
              {channel.external && (
                <span className="sr-only"> (abre em nova aba)</span>
              )}
            </a>
          </li>
        ))}
      </ul>
    </Section>
  );
}
