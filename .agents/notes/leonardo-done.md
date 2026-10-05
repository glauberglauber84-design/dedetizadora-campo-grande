# Leonardo — done

**Branch:** `polish-site-local`
**Commit:** `2d3723e`
**Build:** ✓ passing (49 páginas, 980ms)
**Baseline:** Francis (3021052) + Maria (361e6b6)

## O que mudou (resumo)

- `tailwind.config.mjs` — fontSize scale modular 1.25 (12.8/14/16/20/25/31/39/49/61px) com line-height por tamanho.
- `BaseLayout.astro` — `text-wrap:pretty/balance`, `:focus-visible` global com outline primary-900, `text-size-adjust:100%`.
- `Hero.astro` — padding reduzido, CTA cabe acima da dobra em 375px, hover `-translate-y-0.5`, border do CTA secundário reforçada.
- Todos os componentes com H2 e H3 — hierarquia bumped per spec (H2 → 3xl/4xl, H3 → xl).
- `BlogGrid.astro` e `Contato.astro` — contrastes `text-slate-500` → `text-slate-700`.
- Microinterações hover (`translate-y` + `shadow`) com `motion-reduce` guards em Hero CTA, Header WhatsApp, ServicosGrid cards, Faq caret, Contato submit, 404 CTA.

## Antes/depois Lighthouse

- **Antes:** não medido (Francis não documentou número local).
- **Depois:** não medido localmente — Lighthouse/Chrome não disponíveis no PATH do ambiente.
- Mudanças são puramente CSS/Tailwind. Zero JS novo, zero dependência nova, mesmo DOM. Expectativa: **zero regressão** de performance.
- Marivone roda Lighthouse na URL de produção (ver `.agents/inbox/marivone.md` seção 2).

## Débitos técnicos pra Marivone

1. **Hero em 375px** — matemática diz que o CTA cabe (~540px de altura dentro de ~567px disponíveis). Confirmar no site real.
2. **`text-wrap: balance`** em H1-H3 — pode viuvar em viewports muito estreitos; se acontecer, documentar, não é bloqueante.
3. **Focus visível em dark bg** — Hero e Footer são `primary-900`; CTAs do Hero têm `focus-visible:outline-white` explícito; os links do Footer caem na regra global (outline primary-900 que fica invisível). Possível débito P2 pro Francis depois: trocar focus-visible dos links do Footer pra outline branco também.
4. **`src/env.d.ts`** — commitado pelo Francis, Astro gera automaticamente, zero preocupação.

## Fora de escopo (não mexi)

- Estrutura HTML — Francis.
- Conteúdo JSON — Maria.
- NAP/siteConfig.ts — intacto.
- Imagens reais — ainda não existem, tudo SVG inline.
