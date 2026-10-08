import { CableBridge } from "@/components/decor/Cable";
import { SealSticker, TagSticker } from "@/components/decor/stickers";
import { Section } from "@/components/layout/Section";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { projects } from "@/data/projects";
import { site } from "@/data/site";

export function Projects() {
  return (
    <Section
      id="projetos"
      tone="ink"
      index="03"
      label="ls ~/projetos"
      title="Projetos"
      decor={
        <>
          <SealSticker
            className="right-6 top-10 w-20 sm:right-20 sm:w-24"
            rot={10}
            top={String(projects.length).padStart(2, "0")}
            bottom="BUILDS"
            fill="var(--green)"
          />
          <TagSticker
            className="right-32 top-36 hidden lg:block"
            rot={-6}
            tone="bone"
          >
            作品 {"//"} handle with care
          </TagSticker>
          <CableBridge
            className="left-6 sm:left-24"
            colors={["var(--slate)", "var(--khaki)"]}
          />
        </>
      }
    >
      <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <li key={project.slug}>
            <ProjectCard project={project} index={index} />
          </li>
        ))}
      </ul>

      <p className="mt-12">
        <a
          href={`${site.links.github}?tab=repositories`}
          target="_blank"
          rel="noopener noreferrer"
          className="btn bg-bone"
        >
          Todos os repositórios
          <span className="sr-only"> no GitHub (abre em nova aba)</span>
          <span aria-hidden="true">↗</span>
        </a>
      </p>
    </Section>
  );
}
