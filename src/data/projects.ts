/**
 * Projetos em destaque.
 * Fonte: repositórios públicos em github.com/leonardochiaralo.
 *
 * Imagens: coloque o screenshot em /public/projects e aponte em `image`.
 * Sem `image`, o card mostra uma capa provisória gerada em SVG.
 * Proporção recomendada: 16:10 (ex.: 1280×800), em .png, .jpg ou .webp.
 */

export type ProjectLink = { label: string; href: string };

export type Project = {
  slug: string;
  title: string;
  /** Rótulo curto, ex.: "Jogo web". */
  kind: string;
  description: string;
  stack: string[];
  /** Repositórios (um ou mais) no GitHub. */
  repos: ProjectLink[];
  /** URL da demo publicada, se houver. */
  demo?: string;
  image?: { src: string; alt: string; width: number; height: number };
};

const gh = (repo: string) => `https://github.com/leonardochiaralo/${repo}`;

export const projects: Project[] = [
  {
    slug: "pokethrow",
    title: "PokéThrow",
    kind: "Jogo web",
    description:
      "Mini-jogo de captura de Pokémon: a mecânica de arremesso roda em Unity WebGL e a interface em React, com comunicação entre os dois, dados da PokéAPI e histórico de capturas salvo no navegador.",
    stack: ["React", "Vite", "Zustand", "Axios", "Unity WebGL", "C#"],
    repos: [{ label: "Repositório", href: gh("pokethrow") }],
    demo: "https://leonardochiaralo.github.io/pokethrow/",
    image: {
      src: "/projects/pokethrow.png",
      alt: "Tela inicial do PokéThrow, com o título do jogo e os botões Jogar e Histórico",
      width: 1280,
      height: 800,
    },
  },
  {
    // TODO: revisar — descrição escrita a partir do código (repos sem README próprio).
    slug: "todo-list",
    title: "Todo List",
    kind: "Web + API",
    description:
      "Lista de tarefas full stack: front-end em React e TypeScript com criação, edição e remoção de tarefas, modais animados e avisos de feedback, consumindo uma API REST própria em Express com MongoDB.",
    stack: [
      "React",
      "TypeScript",
      "CSS Modules",
      "Framer Motion",
      "Express",
      "MongoDB",
    ],
    repos: [
      { label: "Front-end", href: gh("todo-list-front") },
      { label: "API", href: gh("todo-list-api") },
    ],
  },
  {
    // TODO: revisar — descrição escrita a partir do código.
    slug: "todo-list-mobile",
    title: "Todo List Mobile",
    kind: "App mobile",
    description:
      "Versão mobile da lista de tarefas, em React Native e TypeScript, consumindo a mesma API REST do projeto web para criar, editar e remover tarefas.",
    stack: ["React Native", "TypeScript", "Axios", "Jest"],
    repos: [{ label: "Repositório", href: gh("todo-list-mobile") }],
  },
  {
    // TODO: revisar — descrição escrita a partir do código.
    slug: "weather-app",
    title: "WeatherApp",
    kind: "Web app",
    description:
      "Aplicação de previsão do tempo em Angular: busca por cidade e exibição das condições atuais em um card, com dados da API OpenWeatherMap.",
    stack: ["Angular", "TypeScript", "RxJS", "SCSS"],
    repos: [{ label: "Repositório", href: gh("weatherApp") }],
  },
  {
    // TODO: revisar — descrição escrita a partir do código.
    slug: "app-filmes",
    title: "AppFilmes",
    kind: "Web + API",
    description:
      "Catálogo de filmes em destaque: front-end em React que lista os filmes e abre um modal com sinopse, ficha técnica e elenco, servido por uma API em C# / .NET com Entity Framework.",
    stack: ["React", "JavaScript", "Axios", "C# / .NET", "Entity Framework"],
    repos: [
      { label: "Front-end", href: gh("AppFilmesFront") },
      { label: "API", href: gh("AppFilmesAPI") },
    ],
  },
  {
    slug: "petisco",
    title: "PETisco",
    kind: "Site institucional",
    description:
      "Site de um pet shop fictício de Maringá, criado como desafio do curso Dev Frontend Trainee da DB1 Global Software.",
    stack: ["HTML", "CSS", "JavaScript", "Express", "EJS", "MongoDB"],
    repos: [{ label: "Repositório", href: gh("petShopDB1") }],
    // Sem demo: o link do GitHub Pages só exibe o README (o app precisa de servidor Express).
  },
];
