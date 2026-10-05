# Francis — DONE

**Data:** 2026-10-05
**Branch:** master (seguiu instrução direta do Bruno; sem feat-site-local-fe por ora)

## Entrega

- 49 HTMLs em `dist/` (home + 45 serviço×cidade + sobre + contato + 404)
- `dist/sitemap-index.xml` + `dist/sitemap-0.xml` com 48 URLs públicas
- `dist/robots.txt` apontando sitemap
- `dist/og-default.jpg` 1200×630 (60KB, Sharp)
- JSON-LD em TODA página (PestControl + Breadcrumb + Service + FAQPage onde cabem)
- NAP único em `src/config/siteConfig.ts` — Header, Footer, JSON-LD e ComoEncontrar leem daí

## Build

```
npm run build → 49 page(s) built in ~7s
sitemap-index.xml criado em dist
```

## Fallback

Páginas serviço×cidade usam `await import()` dinâmico de `src/data/pages/${servico}-${cidade}.json`. Se o JSON não existir (Maria em paralelo), fallback mínimo monta title/description/h1/subtitle/faq=[] para não quebrar build. No momento do build final a Maria já tinha entregue os 45 JSONs, então o fallback não foi usado — mas segue como rede de proteção.

## Pontos de atenção pro Leonardo

- Tipografia precisa de escala modular rigorosa
- Hero mobile 375px tem 2 CTAs empilhados — talvez simplificar
- Sobre.astro usa placeholder SVG — trocar por foto real quando tiver
- BlogGrid é placeholder puro

## Hash

Preenchido abaixo após commit.
