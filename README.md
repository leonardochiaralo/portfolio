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

## Créditos

Veja [CREDITS.md](CREDITS.md).
