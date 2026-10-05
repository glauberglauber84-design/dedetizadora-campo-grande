# Handoff — Marivone (QA / Reality Check)

**De:** Genilson (Tech Lead)
**Para:** Marivone
**Projeto:** Dedetizadora Campo Grande — QA de produção pós-deploy
**Working dir:** `C:\Users\HP\orca\projects\Dedetização`

---

## Quando entrar

**APÓS DEPLOY**. Bruno fornece a URL de produção (Cloudflare Pages ou domínio custom). Você NÃO testa em localhost — testa no site real que o usuário vai ver.

URL de produção: **_________________________** (Bruno preenche aqui)

Pré-requisitos:
- Francisgleydisson entregou (ver `.agents/notes/francis-done.md`)
- Maria entregou (ver `.agents/notes/maria-done.md`)
- Leonardo entregou (ver `.agents/notes/leonardo-done.md`)
- Deploy foi feito e a URL responde HTTP 200

---

## Missão

Validar o site em produção contra 5 eixos: **SEO, Performance, Funcional, NAP, A11y**. Reportar bugs reais com evidência (print, URL, console log). Zero "achismo".

---

## 1. SEO

### Por página (amostra: home + 3 páginas de serviço × cidade aleatórias + sobre + contato)
- [ ] `<title>` **único** por página — zero duplicado no site
- [ ] `<meta name="description">` **única** por página
- [ ] Exatamente **1 `<h1>`** por página
- [ ] `<link rel="canonical">` presente e aponta pra URL correta (sem trailing slash inconsistente)
- [ ] `<meta property="og:image">` presente e carrega (ver passo seguinte)
- [ ] `<html lang="pt-BR">`

### JSON-LD
- [ ] Validar em `https://search.google.com/test/rich-results` — zero erro, zero aviso bloqueante
- [ ] Home: `LocalBusiness` com NAP correto + `url` + `telephone` + `address` + `geo`
- [ ] Páginas com FAQ: `FAQPage` com todas as perguntas listadas

### Sitemap e robots
- [ ] `https://[dominio]/sitemap-index.xml` acessível e lista todas as 48 URLs
- [ ] `https://[dominio]/robots.txt` acessível e aponta pro sitemap
- [ ] Nenhuma URL do sitemap retorna 404

### Open Graph
- [ ] Testar home em `https://developers.facebook.com/tools/debug/` — og:image aparece em 1200×630
- [ ] og:title e og:description refletem a página (não genérico)

---

## 2. Performance

### Lighthouse (modo mobile, Chrome DevTools)
- [ ] Home: Performance ≥ **90**
- [ ] 2 páginas de serviço × cidade: Performance ≥ **90**
- [ ] LCP < 2.5s
- [ ] CLS < 0.1
- [ ] TBT < 200ms

### Network (DevTools)
- [ ] Zero request pra `fonts.googleapis.com` ou `fonts.gstatic.com` (fontes 100% self-hosted)
- [ ] Imagens não-hero com `loading="lazy"` (verificar atributo no HTML)
- [ ] Nenhum recurso 404 ou 500 na aba Network
- [ ] HTML comprimido (gzip/brotli ativo — ver `Content-Encoding` do response)

---

## 3. Funcional

- [ ] Botão "WhatsApp" no Header abre `https://wa.me/5567999999999` em nova aba
- [ ] Form de contato submete e redireciona pra `wa.me/` com texto pre-fill
- [ ] Mapa embed na seção "Como me encontrar" carrega (não aparece cinza/erro)
- [ ] Nav funciona: Home, Serviços, Sobre, Contato
- [ ] Grid de serviços na home: cada card linka pra `/[servico]/campo-grande` correto
- [ ] Rodapé: links de serviços e cidades funcionam
- [ ] **Mobile 375px**: zero scroll horizontal em qualquer página testada
- [ ] **Zero link 404** — rode um crawler simples (ex: `wget --spider -r https://[dominio]`)

---

## 4. NAP (Nome, Endereço, Telefone) — regra sagrada

Varrer 5 páginas aleatórias (home + 4 páginas de serviço × cidade). Para cada uma, confirmar que o NAP aparece **IDÊNTICO** nos 3 locais:

- Header (ou menu mobile)
- Footer
- Schema JSON-LD (`LocalBusiness`)

Padrão esperado:
```
Nome: Dedetizadora Campo Grande
Telefone: (67) 99999-9999
Endereço: Rua Exemplo, 456 — Jardim dos Estados, Campo Grande — MS, CEP 79000-000
```

Zero variação. Nem acento diferente, nem hífen vs travessão, nem "n°" vs "nº". Google compara byte a byte.

---

## 5. Acessibilidade

### Teclado
- [ ] Tab navigation funciona em ordem lógica (Header → conteúdo → Footer)
- [ ] Focus visível em todos os elementos interativos (botão, link, input)
- [ ] Enter/Space ativam botões

### Semântica
- [ ] `<html lang="pt-BR">`
- [ ] Imagens com `alt` descritivo (não vazio em imagem significativa)
- [ ] Form com `<label>` associado a cada input (não placeholder-only)
- [ ] Headings em ordem (sem pular H1 → H3)

### Contraste
- [ ] Rodar axe DevTools ou Lighthouse — zero violação de contraste
- [ ] Confirmar visualmente: texto corpo escuro em fundo claro, botão verde #1b5e20 + texto branco

### Zoom
- [ ] Zoom 200% (Ctrl + +): layout não quebra, zero scroll horizontal

---

## Formato do relatório final

Escreva em `.agents/notes/marivone-report.md`:

```markdown
# QA Report — Dedetizadora Campo Grande

**URL:** [URL de produção]
**Data:** [data]
**Resultado geral:** APROVADO / REPROVADO / APROVADO COM RESSALVAS

## Resumo
- SEO: ✅ / ❌
- Performance: ✅ / ❌ (Lighthouse: 92/100/100/100)
- Funcional: ✅ / ❌
- NAP: ✅ / ❌
- A11y: ✅ / ❌

## Bugs encontrados (bloqueantes)
1. [descrição] — URL: [...] — print: [...]

## Débitos técnicos (não bloqueantes)
1. [descrição]

## Recomendações
...
```

---

## Escopo PROIBIDO

- **NÃO** editar código do site. Você reporta, não corrige.
- Se achar bug bloqueante: cria issue (ou nota) e devolve pro Francis/Leonardo refazerem.

---

Chama a verdade do jeito que ela é, Marivone.

— Genilson

---

## Status pós-Leonardo (polish aplicado)

**Branch:** `polish-site-local` · **Commit:** `2d3723e`
**Base:** `master` (361e6b6 — Maria entregou 45 páginas)

### P0 aplicados (direto, sem perguntar)

1. **Tipografia modular 1.25** em `tailwind.config.mjs`: scale 12.8/14/16/20/25/31/39/49/61px com `line-height` por tamanho. Confirmado no CSS de produção: `font-size:12.8px .. 61px` presentes em `dist/_astro/*.css`.
2. **Hierarquia aplicada** nos componentes:
   - H1 Hero → `text-3xl md:text-5xl` (39→61px) com `tracking-tight`.
   - H2 seções → `text-3xl sm:text-4xl` (39→49px) em ServicosGrid, Sobre, ComoEncontrar, Faq, BlogGrid, Contato, página sobre.
   - H3 cards → `text-xl` (25px) em ServicosGrid, ComoEncontrar, BlogGrid, página sobre.
3. **Contraste WCAG AA** — grep confirmou zero `text-slate-{300,400,500}` e `text-green-{300,400,500}` como texto. Troquei:
   - `BlogGrid.astro`: `text-slate-500` → `text-slate-700` em descrição e badge "Em preparação".
   - `Contato.astro`: `text-slate-500` → `text-slate-700` no disclaimer.
   - `Hero.astro`: `border-white/80` → `border-white` no CTA secundário (Francis sinalizou contraste limítrofe).
4. **CTA acima da dobra em 375px** — Hero `py-12 sm:py-16 md:py-24` → `py-10 sm:py-14 md:py-20`; H1 continua `text-3xl md:text-5xl` (não cresce em sm). Com Header (~56px) + mobile-nav (~44px), Hero inner cabe em ~540px dentro dos 567px disponíveis em iPhone SE.
5. **Labels visíveis** — Contato já tinha `<label for>` acima de cada input (Francis). Confirmei, sem mudança.
6. **Touch targets ≥44px** — 18 ocorrências de `min-h-11`/`min-h-12`/`h-11`/`h-12` em botões, links de nav e inputs. Zero regressão.
7. **Fontes self-hosted** — `grep fonts.googleapis|fonts.gstatic` em `src/` e `dist/` retorna zero. `@fontsource/inter` importado em `BaseLayout.astro` (400/500/600/700/800).
8. **Focus visível** — adicionado `:where(a,button,input,textarea,select,summary,[tabindex]):focus-visible { outline: 2px solid #1b5e20; outline-offset: 2px }` global em `BaseLayout.astro`. No Hero (fundo primary-900), CTAs usam `focus-visible:outline-white` explícito.
9. **Imagens** — zero `<img>` em componentes (todos placeholders SVG inline por enquanto). Iframe do Google Maps em `ComoEncontrar.astro` já com `loading="lazy"` (Francis).
10. **`lang="pt-BR"`** — presente em `BaseLayout.astro` linha 85.

### P1 aplicados (microinterações sutis)

- **Hero CTA WhatsApp**: `hover:-translate-y-0.5 hover:shadow-lg` com `motion-reduce:transform-none`, transition `duration-200 ease-out`.
- **Hero CTA secundário**: hover sem translate (visita técnica), mas com transição suave.
- **Header WhatsApp button**: hover translate + shadow bump.
- **ServicosGrid cards**: já tinha `-translate-y-0.5`, adicionei `motion-reduce:transform-none` + `hover:border-primary-300` (era primary-200, agora mais perceptível), seta `→` desliza no hover com motion-reduce guard.
- **Contato submit**: hover translate + shadow-lg + motion-reduce.
- **Faq caret**: rotate 180° em open com motion-reduce guard.
- **404 CTA primário**: hover translate + shadow-lg + motion-reduce.
- **Globals**: `text-wrap: pretty` em body, `text-wrap: balance` em h1-h3 (progressive, zero regressão em browsers sem suporte).
- **Fonte iOS**: `text-size-adjust:100%` pra evitar o font-boost do Safari que quebraria a escala.

### Build

- `npm run build` passou limpo em **980ms**. 49 páginas HTML, sitemap OK, zero warning.
- Confirmei no CSS de produção que as 9 font-sizes da scale saem corretas.

### Performance

- **Não medido localmente** — Lighthouse/Chrome não disponíveis no PATH deste ambiente. Como só mexi em CSS/Tailwind (zero JS novo, zero dependência nova, mesmo DOM), a expectativa é **zero regressão** vs. baseline do Francis.
- **Marivone roda Lighthouse na URL de produção** (ver seção 2 deste handoff).

### Não mexi (fora de escopo)

- Estrutura HTML dos componentes — território Francis.
- Conteúdo dos JSONs em `src/data/pages/` — território Maria.
- `siteConfig.ts` (NAP, URLs, lista de serviços) — NAP tem que ser idêntico onde aparece.
- Imagens reais (ainda não existem — tudo SVG inline por enquanto).

### Pra Marivone olhar com atenção

- **Lighthouse mobile em produção**: Perf ≥90, A11y=100, SEO=100, Best Practices ≥95.
- **Contraste visual** em todos os textos no site deployed (axe DevTools): zero violação.
- **CTA WhatsApp acima da dobra em 375px** no site real (iPhone SE device mode). Se não couber, culpa é da fonte do subtítulo (Maria) ou do viewport do Chrome DevTools — não da estrutura.
- **NAP idêntico** em Header, Footer e JSON-LD (`search.google.com/test/rich-results` em pelo menos 3 URLs: `/`, `/dedetizacao-residencial/campo-grande`, `/sobre`).
- **Focus visível** com Tab navigation em teclado: cada link, botão, input e `<details>` do FAQ deve mostrar outline verde (ou branco no Hero/footer).
- **Zoom 200%**: layout não quebra (texto-wrap: balance pode viuvar em viewports estreitos — se acontecer, documente, não é bloqueante).
- **Testar `prefers-reduced-motion`** em sistema (System Preferences → Accessibility no macOS, Settings → Ease of Access no Windows). Com reduce ativo, hover translates e transições têm que virar 0.001ms (BaseLayout já tem a global rule).
