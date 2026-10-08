import Image from "next/image";
import { ProjectCover } from "@/components/ui/ProjectCover";
import { Tag } from "@/components/ui/Tag";
import type { Project } from "@/data/projects";

type ProjectCardProps = {
  project: Project;
  index: number;
};

export function ProjectCard({ project, index }: ProjectCardProps) {
  const serial = String(index + 1).padStart(2, "0");

  return (
    <article className="card reveal flex h-full flex-col">
      <div className="relative aspect-[16/10] overflow-hidden border-b-3 border-ink bg-ink">
        {project.image ? (
          <Image
            src={project.image.src}
            alt={project.image.alt}
            width={project.image.width}
            height={project.image.height}
            sizes="(min-width: 1024px) 360px, (min-width: 640px) 50vw, 100vw"
            className="h-full w-full object-cover object-top"
          />
        ) : (
          <ProjectCover title={project.title} index={index} />
        )}
      </div>

      <div className="flex flex-1 flex-col gap-4 p-5">
        <div>
          <p className="micro mb-1">
            <span aria-hidden="true">PRJ-{serial} {"//"} </span>
            {project.kind}
          </p>
          <h3 className="font-display text-3xl uppercase leading-none">
            {project.title}
          </h3>
        </div>

        <p className="text-[0.95rem] leading-relaxed">{project.description}</p>

        <ul className="flex flex-wrap gap-1.5" aria-label="Tecnologias">
          {project.stack.map((tech) => (
            <li key={tech}>
              <Tag>{tech}</Tag>
            </li>
          ))}
        </ul>

        <ul className="mt-auto flex flex-wrap gap-3 pt-2">
          {project.demo && (
            <li>
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-sm bg-green"
              >
                Demo
                <span className="sr-only"> de {project.title} (abre em nova aba)</span>
                <span aria-hidden="true">↗</span>
              </a>
            </li>
          )}
          {project.repos.map((repo) => (
            <li key={repo.href}>
              <a
                href={repo.href}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-sm bg-bone"
              >
                {repo.label}
                <span className="sr-only">
                  {" "}
                  de {project.title} no GitHub (abre em nova aba)
                </span>
                <span aria-hidden="true">↗</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
