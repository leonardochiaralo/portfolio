import { nav, site } from "@/data/site";

export function Header() {
  return (
    <header className="tone-ink sticky top-0 z-40 border-b-3 border-ink-soft">
      <div className="mx-auto flex max-w-6xl items-center gap-4 px-5 sm:px-8">
        <a
          href="#topo"
          className="shrink-0 py-4 font-display text-2xl leading-none text-bone"
          aria-label={`${site.name}: voltar ao topo`}
        >
          {site.initials}
          <span aria-hidden="true" className="text-orange">
            {"//"}
          </span>
        </a>
        <nav aria-label="Seções" className="ml-auto min-w-0 overflow-x-auto">
          <ul className="flex items-center gap-1">
            {nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="block whitespace-nowrap px-2.5 py-4 font-mono text-xs font-bold uppercase tracking-wider text-bone underline-offset-8 hover:text-khaki hover:underline sm:px-3 sm:text-sm"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
