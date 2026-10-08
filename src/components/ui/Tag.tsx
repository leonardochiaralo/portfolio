import type { ReactNode } from "react";

export function Tag({ children }: { children: ReactNode }) {
  return (
    <span className="inline-block border-2 border-ink px-2 py-0.5 font-mono text-xs font-bold text-ink">
      {children}
    </span>
  );
}
