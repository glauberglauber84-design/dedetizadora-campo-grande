# Handoff — Leonardo (Polish / UX / Visual Craft)

**De:** Genilson (Tech Lead)
**Para:** Leonardo
**Branch:** `polish-site-local`
**Projeto:** Dedetizadora Campo Grande — polimento visual pós-build
**Working dir:** `C:\Users\HP\orca\projects\Dedetização`

---

## Quando entrar

**DEPOIS** do Francisgleydisson confirmar entrega em `.agents/notes/francis-done.md`. Antes disso: espera.

Pode entrar mesmo se a Maria ainda não terminou os 45 JSONs — o fallback do Francis cobre páginas sem conteúdo e você está polindo estrutura/visual, não copy.

---

## Missão

Elevar o site do estado "funcional" pro estado "entregável": tipografia escalada, contraste WCAG, espaçamento consistente, CTA perfeito mobile, labels claros, touch targets humanos. Sem redesenhar — refinar.

---

## Branch e commits

- Branch: `polish-site-local` (crie a partir de `feat-site-local-fe` depois que o Francis mergear ou direto da feature se o merge ainda não rolou).
- Prefixo de commit: `polish:` (ex: `polish: aumenta touch target do botão WhatsApp mobile para 48px`).

---

## Checklist P0 (não entregar sem)

### Tipografia
- [ ] Escala modular ratio **1.25** (ou 1.333 se achar melhor — escolha UMA e aplique)
- [ ] Hierarquia clara: H1 > H2 > H3 > body > caption
- [ ] Line-height: 1.2 em títulos, 1.5–1.65 em corpo
- [ ] Max-width de parágrafo ~65–75ch para legibilidade

### Contraste (WCAG AA)
- [ ] Todo texto corpo ≥ **4.5:1** contra fundo
- [ ] Texto grande (18pt+ ou 14pt+ bold) ≥ 3:1
- [ ] Verde `#1b5e20` sobre branco: contraste **9.8:1** — OK pra texto e CTA
- [ ] **PROIBIDO** verde claro (`#4caf50`, `#66bb6a`) sobre branco em texto corpo — contraste quebra
- [ ] Botão WhatsApp: fundo verde #1b5e20 + texto branco = contraste alto, OK

### Espaçamento
- [ ] Base 4px/8px — zero valores arbitrários (`gap: 13px` é proibido)
- [ ] Scale consistente: 4, 8, 12, 16, 24, 32, 48, 64, 96
- [ ] Padding interno de card = múltiplo da scale
- [ ] Section padding vertical: 48–96px desktop, 32–48px mobile

### Mobile 375px (iPhone SE)
- [ ] CTA WhatsApp **visível acima da dobra** sem scroll
- [ ] Zero scroll horizontal em qualquer página
- [ ] Touch targets ≥ **44×44px** (botões, links do nav, CTAs)
- [ ] Form inputs com altura ≥ 48px

### Form (Contato.astro)
- [ ] Labels **visíveis acima** do input (placeholder NÃO conta como label)
- [ ] `label[for]` + `input[id]` corretamente associados
- [ ] Estados de focus visíveis (outline ou ring)
- [ ] Botão submit com tamanho generoso + cor verde #1b5e20

### Fontes
- [ ] Confirmar que Inter está vindo de `@fontsource/inter` (self-hosted)
- [ ] Zero request pra `fonts.googleapis.com` ou `fonts.gstatic.com` na Network tab
- [ ] `font-display: swap` configurado

### Imagens
- [ ] Lazy loading em todas as imagens não-hero (`loading="lazy"`)
- [ ] `width` e `height` explícitos (evita CLS)
- [ ] `alt` descritivo em todas as `<img>` (nada de `alt=""` em imagem significativa)

---

## Checklist P1 (ganho fácil se der tempo)

- [ ] Microinterações sutis: hover em cards (translate 2px + sombra leve)
- [ ] Transição `prefers-reduced-motion` respeitada
- [ ] Skip link "Pular pro conteúdo" (acessibilidade)
- [ ] Breadcrumb nas páginas de serviço × cidade (ajuda SEO + UX)
- [ ] Ícones SVG inline (não font icon, não imagem) nos cards de serviço
- [ ] Favicon configurado (gere versão simples do og: fundo verde + "D")

---

## Verificação — rodar antes de commitar

1. **Lighthouse mobile** em home + 2 páginas de serviço aleatórias:
   - Performance ≥ 90 (NÃO pode regredir do que Francis entregou)
   - A11y = 100
   - Best Practices ≥ 95
   - SEO = 100
2. **Chrome DevTools Device Mode**: testar iPhone SE (375px), iPhone 14 (390px), iPad (768px), desktop (1280px)
3. **Chrome Lens** ou axe DevTools: zero violações críticas de a11y

---

## Escopo PROIBIDO

- **NÃO** mexer em `src/data/` (nem Maria nem Francis — você é polish de UI/CSS)
- **NÃO** mudar o NAP de `siteConfig.ts`
- **NÃO** adicionar bibliotecas JS pesadas (framer-motion, lottie, etc.) — SSG puro
- **NÃO** redesenhar — polir

---

## Handoff de saída

Ao terminar, escreva `.agents/inbox/marivone.md` continuando a cadeia (template abaixo já foi preparado pelo Genilson; você só confirma status e adiciona a URL de produção quando Bruno fornecer).

Deixe também `.agents/notes/leonardo-done.md` com:
- Hash do commit final
- Antes/depois Lighthouse (print ou tabela markdown)
- Qualquer débito técnico que a Marivone precisa olhar

Capricho, Leonardo. Polish é o que separa amador de profissional.

— Genilson

---

## Status pós-Francis

**Entregue por Francisgleydisson em 2026-10-05.** Build limpo, 49 páginas HTML geradas, sitemap OK.

### Arquivos entregues

- **Config**: `package.json`, `astro.config.mjs`, `tailwind.config.mjs`, `tsconfig.json`, `.gitignore`
- **Config do site**: `src/config/siteConfig.ts` (NAP único, 9 serviços, 5 cidades, nav, geo)
- **Layout**: `src/layouts/BaseLayout.astro` (lang pt-BR, LocalBusiness JSON-LD por default, skip link, reduced-motion)
- **Componentes (`src/components/`)**:
  - `Seo.astro` — title/description/canonical/OG completo/Twitter/JSON-LD multi
  - `Header.astro` — logo + nav + CTA WhatsApp (sticky, mobile nav separado, touch ≥44px)
  - `Footer.astro` — 3 colunas (NAP, serviços, cidades) com NAP IDÊNTICO ao Header lido do siteConfig
  - `Hero.astro` — fundo primary-900, H1 grande, CTA WhatsApp acima da dobra, pattern SVG inline sem shift
  - `ServicosGrid.astro` — grid 1/2/3 cols dos 9 serviços, cada card linka pra `/[servico]/[cidade-atual]`
  - `Sobre.astro` — 2 col desktop, texto + placeholder SVG temático
  - `ComoEncontrar.astro` — iframe Google Maps + NAP + link direto Maps
  - `Faq.astro` — accordion `<details>` nativo (zero JS), FAQPage JSON-LD inline
  - `BlogGrid.astro` — 6 cards placeholder "Em breve"
  - `Contato.astro` — form com labels visíveis, submit abre WhatsApp pre-preenchido via JS inline mínimo
- **Páginas**:
  - `src/pages/index.astro` — home carrega JSON `dedetizacao-residencial-campo-grande`
  - `src/pages/[servico]/[cidade].astro` — getStaticPaths lê `src/data/locais.json`, 45 páginas, breadcrumb + Service schema + fallback se JSON da Maria faltar
  - `src/pages/sobre.astro`, `src/pages/contato.astro`, `src/pages/404.astro`
- **Public**: `robots.txt`, `favicon.svg`, `og-default.jpg` (1200×630, 60KB, gerado via Sharp), `og-default.svg` (fallback)
- **Scripts**: `scripts/gen-og.mjs` (gera OG a partir de SVG, usa Sharp)

### Build

- `npm run build` passou limpo. 49 HTMLs em `dist/`, `sitemap-index.xml` + `sitemap-0.xml` listando as 48 URLs públicas (home + 45 serviço×cidade + sobre + contato; 404 fica fora como esperado).
- Downgrade de `@astrojs/sitemap` para `3.2.0` (3.2.1 usa hook `astro:routes:resolved` que só existe no Astro 5; nosso Astro é 4.16).
- Fontes 100% self-hosted (`@fontsource/inter` 400/500/600/700/800).
- Maria já tinha entregue os 45 JSONs em `src/data/pages/` antes do build, então o conteúdo real já está nos HTMLs — o fallback cobre o caso dela não ter terminado.

### JSON-LD por página

- **Toda página**: `PestControl` com `@id` consistente, `address` PostalAddress, `geo`, `areaServed` (5 cidades na home/sobre/contato, 1 cidade específica nas páginas serviço×cidade), opening hours, sameAs do WhatsApp.
- **Páginas serviço×cidade**: adiciona `BreadcrumbList` e `Service` com `provider.@id` apontando pro business.
- **Toda página com Faq**: `FAQPage` com Question/Answer.

### Decisões que tomei (fora do spec do Genilson, mas razoáveis)

1. Adicionei `favicon.svg` (shield verde com check) — não pedia explicitamente, mas 404.astro e OG referem.
2. Breadcrumb visual + JSON-LD nas páginas serviço×cidade (está na checklist P1 do seu handoff).
3. Form de contato envia direto pra `wa.me` abrindo nova aba (sem backend, zero servidor, como pedido).
4. Página 404 custom com CTA WhatsApp + voltar início.
5. Skip link "Pular para o conteúdo" (a11y P1 do seu handoff).

### O que ficou pra você polir

- **Tipografia**: ainda não apliquei escala modular rigorosa (1.25/1.333). Tamanhos estão em Tailwind defaults — você pode trocar por scale custom em `tailwind.config.mjs`.
- **Contraste do CTA no Hero**: botão branco com texto `text-primary-900` sobre fundo `primary-900` → OK. Botão outline branco com `border-white/80` tem contraste meio apertado em algumas situações, pode fortalecer.
- **ServicosGrid card hover**: tem `-translate-y-0.5`. Pode querer uma motion mais sofisticada ou simplesmente remover se achar excessiva.
- **Imagem placeholder em Sobre.astro**: é SVG inline (sem fotos reais). Quando tiver foto real, troca por `<img width height alt loading="lazy">`.
- **BlogGrid**: 6 cards estáticos "Em breve". Vai ser preenchido depois.
- **Hero mobile 375px**: CTA está acima da dobra, mas os dois CTAs empilhados comem espaço — se quiser deixar o secundário (visita técnica) menos pesado em mobile, ajuste.
- **Possível micro-débito**: `src/env.d.ts` foi criado automaticamente pelo Astro no build e eu commito ele junto (padrão).

### Hash do commit
Será preenchido logo abaixo após o `git commit`.
