import { KanjiSticker, SmileySticker } from "@/components/decor/stickers";
import { Section } from "@/components/layout/Section";
import { TimelineList } from "@/components/ui/TimelineList";
import { education, experience } from "@/data/profile";

export function Timeline() {
  return (
    <Section
      id="trajetoria"
      tone="teal"
      index="04"
      label="git log --oneline"
      title="Trajetória"
      decor={
        <>
          <SmileySticker
            className="right-8 top-12 w-14 sm:right-20 sm:w-16"
            rot={-14}
          />
          <KanjiSticker className="right-6 top-40 hidden lg:block" rot={3}>
            経歴
          </KanjiSticker>
        </>
      }
    >
      <div className="grid gap-16 lg:grid-cols-2 lg:gap-12">
        <TimelineList title="Experiência" code="LOG-A" items={experience} />
        <TimelineList title="Formação" code="LOG-B" items={education} />
      </div>
    </Section>
  );
}
