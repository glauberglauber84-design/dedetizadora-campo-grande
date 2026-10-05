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
