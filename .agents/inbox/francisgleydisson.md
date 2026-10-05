# Handoff — Francisgleydisson (Frontend / Astro Builder)

**De:** Genilson (Tech Lead)
**Para:** Francisgleydisson
**Branch:** `feat-site-local-fe`
**Projeto:** Dedetizadora Campo Grande — site local SEO
**Working dir:** `C:\Users\HP\orca\projects\Dedetização`

---

## Missão

Construir o esqueleto completo do site multipágina em **Astro + Tailwind** (SSG puro), gerando 45 páginas estáticas a partir da matriz serviço × cidade em `src/data/locais.json` (já pronta). Zero React, zero JS pesado. Mobile first. Fontes self-hosted.

---

## Stack obrigatória

- **Astro** com `output: 'static'`
- **Tailwind CSS** (via `@astrojs/tailwind`)
- **@astrojs/sitemap** (gera sitemap.xml automaticamente)
- **@fontsource/inter** (fonte self-hosted — NUNCA Google Fonts link)
- TypeScript habilitado para `src/config/`

Comandos base:
```bash
npm create astro@latest . -- --template minimal --typescript strict --no-install
npm install
npm install -D tailwindcss @astrojs/tailwind @astrojs/sitemap @fontsource/inter
npx astro add tailwind sitemap
```

---

## Estrutura de pastas (criar na íntegra)

```
src/
  components/
    Seo.astro
    Header.astro
    Footer.astro
    Hero.astro
    ServicosGrid.astro
    Sobre.astro
    ComoEncontrar.astro
    BlogGrid.astro
    Contato.astro
    Faq.astro
  layouts/
    BaseLayout.astro
  pages/
    index.astro
    sobre.astro
    contato.astro
    [servico]/
      [cidade].astro
  config/
    siteConfig.ts
  data/
    locais.json          ← JÁ CRIADO (NÃO MEXER)
    pages/               ← TERRITÓRIO DA MARIA — NÃO ESCREVER AQUI
public/
  robots.txt
  og-default.jpg
astro.config.mjs
```

---

## Arquivos — função de cada um

| Arquivo | Função |
|---|---|
| `src/config/siteConfig.ts` | NAP único — fonte da verdade (nome, WhatsApp, endereço, cor, URL). Header/Footer/JSON-LD leem daqui. |
| `src/layouts/BaseLayout.astro` | Layout global: `<html lang="pt-BR">`, meta tags, OG, viewport, JSON-LD LocalBusiness, Header, slot, Footer. |
| `src/components/Seo.astro` | Componente de meta tags (title, description, canonical, OG, Twitter Card). Recebe props. |
| `src/components/Header.astro` | Logo em texto "Dedetizadora Campo Grande" + nav (Home, Serviços, Sobre, Contato) + botão WhatsApp verde. NAP do siteConfig. |
| `src/components/Footer.astro` | 3 colunas: (1) NAP idêntico ao Header, (2) Serviços (links pras 9 páginas de serviço em Campo Grande), (3) Cidades atendidas (links pras 5 cidades). Rodapé de copyright. |
| `src/components/Hero.astro` | Acima da dobra. Título H1 dinâmico, subtítulo, CTA WhatsApp grande (verde #1b5e20). Visível em 375px sem scroll. |
| `src/components/ServicosGrid.astro` | Grid responsivo (3 col desktop, 2 col tablet, 1 col mobile) dos 9 serviços, cada card linka pra `/[servico]/campo-grande`. Ícone + título + descrição curta. |
| `src/components/Sobre.astro` | Bloco "Quem somos" — texto curto, 10+ anos de atuação, licença, equipe certificada. |
| `src/components/ComoEncontrar.astro` | Mapa embed (iframe Google Maps) + NAP completo + schema LocalBusiness inline (JSON-LD). |
| `src/components/BlogGrid.astro` | Grid de 6 posts (por enquanto placeholders estáticos com `#` como href — Maria/Leonardo podem substituir depois). |
| `src/components/Contato.astro` | Form com nome, telefone, mensagem. Submit = redirect pra `wa.me/5567999999999?text=<prefill>`. Zero backend. Labels visíveis (não placeholder-only). |
| `src/components/Faq.astro` | Accordion de 3–5 perguntas (vêm do JSON de página). Schema FAQPage inline (JSON-LD). |
| `src/pages/index.astro` | Home. Combinação Campo Grande × Dedetização Residencial (serviço principal). Monta: Hero + ServicosGrid + Sobre + ComoEncontrar + BlogGrid + Faq + Contato. |
| `src/pages/[servico]/[cidade].astro` | Página dinâmica — `getStaticPaths` lê `src/data/locais.json`. Para cada combinação, lê `src/data/pages/[servico]-[cidade].json` (Maria preenche). Se faltar JSON, usar fallback mínimo e NÃO quebrar o build. |
| `src/pages/sobre.astro` | Página institucional. |
| `src/pages/contato.astro` | Página de contato — reaproveita componente Contato + ComoEncontrar. |
| `astro.config.mjs` | `site: 'https://dedetizadora-campo-grande.pages.dev'`, `output: 'static'`, integrações tailwind + sitemap. |
| `public/robots.txt` | `User-agent: *` + `Allow: /` + `Sitemap: https://dedetizadora-campo-grande.pages.dev/sitemap-index.xml`. |
| `public/og-default.jpg` | 1200×630 — placeholder temático. Fundo verde #1b5e20, texto branco "Dedetizadora Campo Grande" + subtítulo "Controle de Pragas em Campo Grande/MS". Gere via Sharp/ImageMagick/SVG→JPG. |

---

## `src/config/siteConfig.ts` — preenchido (copiar exatamente)

```ts
export const siteConfig = {
  nome: "Dedetizadora Campo Grande",
  whatsapp: "(67) 99999-9999",
  whatsappLink: "https://wa.me/5567999999999",
  endereco: {
    rua: "Rua Exemplo, 456",
    bairro: "Jardim dos Estados",
    cidade: "Campo Grande",
    estado: "MS",
    cep: "79000-000"
  },
  enderecoCompleto: "Rua Exemplo, 456 — Jardim dos Estados, Campo Grande — MS, CEP 79000-000",
  corPrimaria: "#1b5e20",
  url: "https://dedetizadora-campo-grande.pages.dev"
};
```

Use este objeto em **Header, Footer, BaseLayout (JSON-LD), ComoEncontrar e Contato**. Zero string hardcoded de NAP fora daqui.

---

## Como gerar as 45 páginas — `src/pages/[servico]/[cidade].astro`

```astro
---
import locais from '../../data/locais.json';
import BaseLayout from '../../layouts/BaseLayout.astro';
// ... outros imports

export async function getStaticPaths() {
  return locais.map((item) => ({
    params: { servico: item.servico, cidade: item.cidade },
    props: { local: item }
  }));
}

const { local } = Astro.props;

// Carregar conteúdo da página (JSON preenchido pela Maria)
let conteudo;
try {
  conteudo = (await import(`../../data/pages/${local.servico}-${local.cidade}.json`)).default;
} catch (e) {
  // Fallback mínimo pra não quebrar build caso Maria ainda não tenha preenchido
  conteudo = {
    title: `${local.servicoLabel} em ${local.cidadeLabel} — Dedetizadora Campo Grande`,
    description: `${local.servicoLabel} em ${local.cidadeLabel}/${local.estado}. Orçamento rápido no WhatsApp.`,
    h1: `${local.servicoLabel} em ${local.cidadeLabel}`,
    hero_subtitle: `Atendimento rápido em ${local.cidadeLabel} e região.`,
    sobre_texto: "",
    faq: []
  };
}
---
<BaseLayout
  title={conteudo.title}
  description={conteudo.description}
  canonical={`/${local.servico}/${local.cidade}`}
>
  <Hero h1={conteudo.h1} subtitle={conteudo.hero_subtitle} />
  <ServicosGrid />
  <Sobre texto={conteudo.sobre_texto} />
  <ComoEncontrar cidade={local.cidadeLabel} />
  <Faq itens={conteudo.faq} />
  <Contato />
</BaseLayout>
```

A URL final é `/{servico}/{cidade}` — ex: `/dedetizacao-residencial/campo-grande`.

---

## OG image — `public/og-default.jpg`

Dimensões: **1200×630**. Fundo sólido verde `#1b5e20`. Texto branco centralizado:
- Linha 1 (grande, bold): **Dedetizadora Campo Grande**
- Linha 2 (menor): **Controle de Pragas em Campo Grande/MS**

Gere com qualquer ferramenta disponível (sharp, imagemagick, canvas, SVG → JPG via inkscape). Export final: JPG, qualidade 85, <200KB.

---

## Branch e commits

- Branch: `feat-site-local-fe` (crie a partir de `master`).
- Commits semânticos: `feat: adiciona Header com NAP do siteConfig`, `feat: gera 45 páginas via getStaticPaths`, etc.
- Rode `npm run build` antes do commit final — build DEVE passar sem erro, mesmo sem os JSONs da Maria (fallback cobre).

---

## Escopo PROIBIDO

- **NÃO escrever** em `src/data/pages/` — território da Maria.
- **NÃO mexer** em `src/data/locais.json` — já está pronto.
- **NÃO** adicionar React, Vue, nenhum framework pesado.
- **NÃO** usar Google Fonts via `<link>` — fontes 100% self-hosted via `@fontsource`.

---

## Checklist de entrega (DoD)

- [ ] `npm run build` passa limpo
- [ ] 45 páginas geradas em `/dist/[servico]/[cidade]/index.html` + home + sobre + contato = 48 HTMLs
- [ ] `dist/sitemap-index.xml` existe e lista todas as URLs
- [ ] `dist/robots.txt` existe apontando sitemap
- [ ] Lighthouse (home mobile): **SEO = 100, Performance ≥ 90, A11y = 100, Best Practices ≥ 95**
- [ ] JSON-LD válido em TODA página (LocalBusiness na home + FAQPage onde houver FAQ)
- [ ] NAP **idêntico** em Header, Footer e JSON-LD (lido do `siteConfig.ts`)
- [ ] Mobile 375px: zero scroll horizontal, CTA WhatsApp visível acima da dobra
- [ ] `og-default.jpg` 1200×630 existe e abre
- [ ] Fontes self-hosted (zero request pra `fonts.googleapis.com` na aba Network)

---

## Handoff de saída

Quando terminar, deixe um bilhete em `.agents/notes/francis-done.md` com:
- Hash do commit final
- URL do preview (se Cloudflare Pages já estiver conectado)
- Qualquer bloqueio ou TODO deixado pro Leonardo

Depois disso é a vez do **Leonardo** (polish) e depois **Marivone** (QA).

Bom trabalho, Francis. Sem improviso.

— Genilson
