/**
 * Skills agrupadas por categoria.
 * Fonte: README do perfil no GitHub + dependências dos repositórios públicos.
 * Remova o que não quiser destacar e adicione o que faltar.
 */

export type SkillGroup = {
  id: string;
  title: string;
  /** Rótulo técnico decorativo exibido no card. */
  code: string;
  skills: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    id: "front-end",
    title: "Front-end",
    code: "MOD-01",
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
      "Angular",
      "React Native",
      "HTML",
      "CSS / SCSS",
      "Zustand",
      "Framer Motion",
    ],
  },
  {
    id: "back-end",
    title: "Back-end",
    code: "MOD-02",
    skills: [
      "Node.js",
      "Express",
      "MongoDB / Mongoose",
      "REST APIs",
      "JWT",
      "C# / .NET",
      "Entity Framework",
    ],
  },
  {
    id: "ferramentas",
    title: "Ferramentas",
    code: "MOD-03",
    skills: ["Git", "GitHub", "Vite", "Jest", "ESLint", "Prettier"],
  },
];
