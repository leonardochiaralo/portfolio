/** "Sobre mim", experiência e formação. */

export type TimelineItem = {
  /** Cargo (experiência) ou curso (formação). */
  title: string;
  /** Empresa ou instituição. */
  organization: string;
  /** Ex.: "jan/2024 – atual". */
  period: string;
  /** Uma ou duas frases sobre a atuação ou o curso. Opcional. */
  description?: string;
  /** Tecnologias usadas. Opcional. */
  tags?: string[];
  /** true = exibe o selo "PREENCHER" no item. */
  placeholder?: boolean;
};

/** Parágrafos do "Sobre mim". */
export const about: string[] = [
  "Sou desenvolvedor Full Stack / Front-End, focado em criar aplicações web modernas, escaláveis e de alta performance. Trabalho no ecossistema JavaScript e TypeScript, da concepção da interface até a arquitetura do back-end.",
  "Atualmente desenvolvo projetos como profissional independente (freelancer) e aprofundo meus estudos em arquitetura de microsserviços, testes automatizados e otimização de performance no front-end.",
];

/** Fatos curtos exibidos ao lado do "Sobre mim". */
export const facts: { label: string; value: string }[] = [
  { label: "base", value: "Maringá – PR, Brasil" },
  { label: "foco", value: "Front-End / Full Stack" },
  { label: "modo", value: "Freelancer" },
  { label: "status", value: "online" },
];

export const experience: TimelineItem[] = [
  {
    title: "Desenvolvedor Full Stack / Front-End",
    organization: "Freelancer",
    period: "11/25 – atual",
    description: "Atuação independente no desenvolvimento de soluções de software de ponta a ponta para clientes finais e projetos proprietários.",
    placeholder: false,
  },
  {
    title: "Desenvolvedor Front-End",
    organization: "Lughy",
    period: "02/24 – 10/25",
    description: "Desenvolvimento de aplicações web e mobile escaláveis utilizando React, React Native, Next.js e Typescript, entregando interfaces de alta performance com foco em reutilização e padronização de componentes.",
    placeholder: false,
  },
  {
    title: "Desenvolvedor Front-End",
    organization: "DB1 Global Software",
    period: "07/23 – 02/24",
    description: "Criação de aplicações web modernas com React e Typescript, desenvolvendo interfaces responsivas e escaláveis que garantiram alta performance e experiência de usuário otimizada.",
    placeholder: false,
  },
];

export const education: TimelineItem[] = [
  {
    title: "Análise e Desenvolvimento de Sistemas",
    organization: "UNINTER – Centro Universitário Internacional",
    period: "2026 – 2028",
    description: "Graduação em andamento, com foco em desenvolvimento de software, arquitetura de sistemas e metodologias ágeis.",
    placeholder: false,
  },
];
