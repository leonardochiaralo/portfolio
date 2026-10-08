/** Dados gerais do site: identidade, links e navegação. */

// Na Vercel, VERCEL_PROJECT_PRODUCTION_URL é definido automaticamente no build.
// NEXT_PUBLIC_SITE_URL tem prioridade (domínio próprio).
const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000");

export const site = {
  url: siteUrl,
  name: "Leonardo Chiaralo",
  initials: "LC",
  role: "Desenvolvedor Full Stack com foco em Front-End",
  location: "Maringá – PR, Brasil",
  tagline:
    "Crio aplicações web modernas, escaláveis e de alta performance, da interface à arquitetura do back-end.",
  description:
    "Portfólio de Leonardo Chiaralo, desenvolvedor full stack com foco em front-end: React, Next.js, TypeScript e Node.js. Projetos, skills e contato.",
  /** Frases alternadas pelo efeito de digitação do hero. */
  typedPhrases: [
    "Desenvolvedor Full Stack",
    "foco em Front-End",
    "React · Next.js · TypeScript",
  ],
  email: "chiaralo.leonardo@gmail.com",
  links: {
    github: "https://github.com/leonardochiaralo",
    linkedin: "https://www.linkedin.com/in/leonardochiaralo/",
  },
} as const;

export const nav = [
  { href: "#sobre", label: "Sobre" },
  { href: "#skills", label: "Skills" },
  { href: "#projetos", label: "Projetos" },
  { href: "#trajetoria", label: "Trajetória" },
  { href: "#contato", label: "Contato" },
] as const;
