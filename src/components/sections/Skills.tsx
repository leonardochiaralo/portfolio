import { HazardSticker, WarningSticker } from "@/components/decor/stickers";
import { Section } from "@/components/layout/Section";
import { skillGroups } from "@/data/skills";

export function Skills() {
  return (
    <Section
      id="skills"
      tone="khaki"
      index="02"
      label="stack --list"
      title="Skills"
      decor={
        <>
          <WarningSticker
            className="right-8 top-12 w-14 sm:right-20 sm:w-16"
            rot={-10}
            fill="var(--teal-bg)"
          />
          <HazardSticker
            className="bottom-6 left-6 hidden w-36 md:block"
            rot={3}
            fill="var(--teal-bg)"
          />
        </>
      }
    >
      <div className="grid gap-8 md:grid-cols-3">
        {skillGroups.map((group) => (
          <section
            key={group.id}
            aria-labelledby={`skills-${group.id}`}
            className="card reveal"
          >
            <header className="flex items-baseline justify-between gap-3 border-b-3 border-ink bg-teal-bg px-5 py-3">
              <h3
                id={`skills-${group.id}`}
                className="font-display text-3xl uppercase leading-none"
              >
                {group.title}
              </h3>
              <span className="font-mono text-xs font-bold" aria-hidden="true">
                {group.code}
              </span>
            </header>
            <ul className="flex flex-wrap gap-2 p-5">
              {group.skills.map((skill) => (
                <li
                  key={skill}
                  className="border-2 border-ink bg-bone px-2.5 py-1 font-mono text-sm font-bold"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </Section>
  );
}
