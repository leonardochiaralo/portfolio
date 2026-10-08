import { site } from "@/data/site";

export function Footer() {
  return (
    <footer className="tone-ink">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-5 py-8 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <p className="font-mono text-xs text-bone">
          © {new Date().getFullYear()} {site.name}. Feito com Next.js,
          TypeScript e Tailwind CSS.
        </p>
        <p className="micro" aria-hidden="true">
          don&apos;t panic {"//"} status: online {"//"} 終わり
        </p>
      </div>
    </footer>
  );
}
