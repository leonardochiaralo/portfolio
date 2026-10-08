# Portfólio — Leonardo Chiaralo

Site de portfólio pessoal, de página única, em estilo "sticker punk":
cores chapadas, contornos grossos, sombras duras, adesivos e cabos em SVG.

**Stack:** Next.js 15 (App Router) · TypeScript · Tailwind CSS 4

## Rodando localmente

Requer Node.js 18.18 ou superior.

```bash
npm install
npm run dev        # http://localhost:3000
```

Outros comandos:

```bash
npm run build      # build de produção
npm run start      # serve o build
npm run lint       # ESLint
npm run typecheck  # TypeScript
```

## Editando o conteúdo

Todo o conteúdo fica em `src/data/`. Não é preciso mexer nos componentes.

| Arquivo | O que tem |
| --- | --- |
| `src/data/site.ts` | Nome, cargo, frase do hero, frases da digitação, e-mail, links e menu |
| `src/data/profile.ts` | "Sobre mim", ficha técnica, **experiência e formação** |
| `src/data/skills.ts` | Skills por categoria |
| `src/data/projects.ts` | Projetos em destaque |

### Pendências para preencher

- [ ] **Experiência e formação** em `src/data/profile.ts`: são placeholders
      (o LinkedIn bloqueia a coleta automática). Preencha e troque
      `placeholder: true` por `false`; o selo "PREENCHER" some do site.
- [ ] **Descrições de projetos** marcadas com `// TODO: revisar` em
      `src/data/projects.ts`: foram escritas a partir do código dos repositórios.
- [ ] **Screenshots**: só o PokéThrow tem imagem real. Para os demais, salve
      a captura em `public/projects/` (16:10, ex.: 1280×800) e adicione o
      campo `image` ao projeto, como no PokéThrow.

### Trocando a ilustração do hero

A arte está isolada em `src/components/illustrations/HeroIllustration.tsx`.
Substitua o conteúdo do componente pela sua arte (SVG ou `next/image`),
mantendo o nome e a prop `className`.

### Cores e fontes

- Paleta: CSS variables no topo de `src/app/globals.css`.
- Fontes: `src/app/layout.tsx` (`next/font/google`).

Ao mudar cores, confira o contraste (WCAG AA: 4.5:1 para texto). Laranja,
petróleo e ardósia só passam como **fundo com texto tinta**, não como cor de
texto sobre cáqui.

## Estrutura

```
src/
├── app/            layout (fontes, SEO), página, CSS global, favicon, imagem OG
├── data/           conteúdo do site
└── components/
    ├── layout/         Header, Footer, Section
    ├── sections/       Hero, About, Skills, Projects, Timeline, Contact
    ├── ui/             ProjectCard, ProjectCover, Tag, TimelineList, TypedText
    ├── decor/          CircuitPattern, Cable, stickers (tudo aria-hidden)
    └── illustrations/  HeroIllustration
```

## Deploy na Vercel

1. Suba o projeto para um repositório no GitHub.
2. Em <https://vercel.com/new>, importe o repositório. A Vercel detecta o
   Next.js e não precisa de configuração.
3. Deploy.

A URL usada no SEO (canonical e Open Graph) vem da própria Vercel. Se usar
domínio próprio, defina a variável de ambiente `NEXT_PUBLIC_SITE_URL`
(ex.: `https://seudominio.dev`) nas configurações do projeto.

## Créditos

Veja [CREDITS.md](CREDITS.md).
# portfolio
