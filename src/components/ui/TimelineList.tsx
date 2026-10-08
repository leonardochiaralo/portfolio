import { Tag } from "@/components/ui/Tag";
import type { TimelineItem } from "@/data/profile";

type TimelineListProps = {
  title: string;
  /** Rótulo técnico decorativo. */
  code: string;
  items: TimelineItem[];
};

export function TimelineList({ title, code, items }: TimelineListProps) {
  return (
    <div>
      <p className="micro mb-2" aria-hidden="true">
        {code}
      </p>
      <h3 className="mb-8 font-display text-4xl uppercase leading-none">
        {title}
      </h3>

      {/* A borda esquerda grossa faz o papel de "cabo" da linha do tempo */}
      <ol className="ml-2 space-y-8 border-l-[6px] border-ink pl-7">
        {items.map((item, i) => (
          <li key={`${item.title}-${i}`} className="reveal relative">
            <span
              aria-hidden="true"
              className="absolute -left-[2.9rem] top-5 size-5 border-3 border-ink bg-khaki"
            />
            <article className="card p-5">
              {item.placeholder && (
                <p className="mb-3 inline-block bg-ink px-2 py-0.5 font-mono text-xs font-bold uppercase tracking-wider text-bone">
                  Preencher
                </p>
              )}
              <p className="micro mb-1">{item.period}</p>
              <h4 className="text-lg font-bold leading-snug">{item.title}</h4>
              <p className="font-mono text-sm">{item.organization}</p>
              {item.description && (
                <p className="mt-3 text-[0.95rem] leading-relaxed">
                  {item.description}
                </p>
              )}
              {item.tags && item.tags.length > 0 && (
                <ul className="mt-3 flex flex-wrap gap-1.5" aria-label="Tecnologias">
                  {item.tags.map((tag) => (
                    <li key={tag}>
                      <Tag>{tag}</Tag>
                    </li>
                  ))}
                </ul>
              )}
            </article>
          </li>
        ))}
      </ol>
    </div>
  );
}
