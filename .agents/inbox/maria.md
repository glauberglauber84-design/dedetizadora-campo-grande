# Handoff — Maria (Content Writer / SEO Local)

**De:** Genilson (Tech Lead)
**Para:** Maria
**Branch:** `feat-site-local-content`
**Projeto:** Dedetizadora Campo Grande — 45 páginas serviço × cidade
**Working dir:** `C:\Users\HP\orca\projects\Dedetização`

---

## Missão

Escrever o conteúdo único de **45 páginas** (9 serviços × 5 cidades) como arquivos JSON em `src/data/pages/`. Cada JSON é lido pela página Astro `[servico]/[cidade].astro` que o Francis construiu. Zero copy-paste entre cidades. Regra de ouro: **cada cidade cita bairros/distritos REAIS daquela cidade**.

---

## Escopo

- **PODE:** escrever e editar arquivos dentro de `src/data/pages/`.
- **NÃO PODE:** tocar em nenhum outro diretório. Nem `components/`, nem `pages/`, nem `config/`, nem `locais.json`.

---

## Branch

Trabalhe em `feat-site-local-content`. Nunca commitar na `master` direto.

---

## Caminho e nome dos arquivos

Padrão: `src/data/pages/[servico]-[cidade].json`

Exemplos:
- `src/data/pages/dedetizacao-residencial-campo-grande.json`
- `src/data/pages/controle-cupins-sidrolandia.json`

---

## Formato JSON exato (seguir rigorosamente)

```json
{
  "title": "título SEO único (máx 60 caracteres — serviço + cidade + diferencial)",
  "description": "meta description única (máx 155 caracteres — cidade + CTA no WhatsApp)",
  "h1": "Serviço + em + Cidade",
  "hero_subtitle": "1 frase — dor específica do morador/empresa da cidade + solução imediata",
  "sobre_texto": "2 parágrafos únicos. OBRIGATÓRIO mencionar 2–3 bairros/distritos REAIS da cidade. Falar de dor local, clima (Campo Grande = calor + chuva de verão favorece mosquito e barata), produtos certificados ANVISA, equipe uniformizada. Zero texto genérico.",
  "faq": [
    {"pergunta": "Quanto custa [serviço] em [cidade]?", "resposta": "Resposta direta — faixa de preço, variáveis (m², nível de infestação), convite pra orçamento no WhatsApp."},
    {"pergunta": "Quanto tempo demora [serviço] em [cidade]?", "resposta": "Tempo de aplicação + prazo de retorno/garantia."},
    {"pergunta": "Terceira pergunta real daquele serviço naquela cidade — ex: 'É seguro pra pet?' / 'Precisa sair de casa?' / 'Como pagar?'", "resposta": "Resposta clara, 2–4 linhas, tom confiante."}
  ]
}
```

**Regras duras do JSON:**
- UTF-8 sem BOM.
- Aspas duplas (não simples).
- Sem vírgula final (trailing comma).
- `title` ≤ 60 chars (conte).
- `description` ≤ 155 chars.
- `faq` tem **no mínimo 3 e no máximo 5** itens.

---

## Lista completa das 45 combinações a escrever

### 1. Dedetização Residencial (`dedetizacao-residencial`)
- [ ] `dedetizacao-residencial-campo-grande.json` **(PRIORIDADE #1 — comece por aqui)**
- [ ] `dedetizacao-residencial-sidrolandia.json`
- [ ] `dedetizacao-residencial-terenos.json`
- [ ] `dedetizacao-residencial-nova-almeida.json`
- [ ] `dedetizacao-residencial-jaraguari.json`

### 2. Dedetização Comercial (`dedetizacao-comercial`)
- [ ] `dedetizacao-comercial-campo-grande.json`
- [ ] `dedetizacao-comercial-sidrolandia.json`
- [ ] `dedetizacao-comercial-terenos.json`
- [ ] `dedetizacao-comercial-nova-almeida.json`
- [ ] `dedetizacao-comercial-jaraguari.json`

### 3. Controle de Cupins / Descupinização (`controle-cupins`)
- [ ] `controle-cupins-campo-grande.json`
- [ ] `controle-cupins-sidrolandia.json`
- [ ] `controle-cupins-terenos.json`
- [ ] `controle-cupins-nova-almeida.json`
- [ ] `controle-cupins-jaraguari.json`

### 4. Desinsetização (`desinsetizacao`)
- [ ] `desinsetizacao-campo-grande.json`
- [ ] `desinsetizacao-sidrolandia.json`
- [ ] `desinsetizacao-terenos.json`
- [ ] `desinsetizacao-nova-almeida.json`
- [ ] `desinsetizacao-jaraguari.json`

### 5. Desratização (`desratizacao`)
- [ ] `desratizacao-campo-grande.json`
- [ ] `desratizacao-sidrolandia.json`
- [ ] `desratizacao-terenos.json`
- [ ] `desratizacao-nova-almeida.json`
- [ ] `desratizacao-jaraguari.json`

### 6. Controle de Mosquitos (`controle-mosquitos`)
- [ ] `controle-mosquitos-campo-grande.json`
- [ ] `controle-mosquitos-sidrolandia.json`
- [ ] `controle-mosquitos-terenos.json`
- [ ] `controle-mosquitos-nova-almeida.json`
- [ ] `controle-mosquitos-jaraguari.json`

### 7. Barreira Química Contra Cupins (`barreira-quimica-cupins`)
- [ ] `barreira-quimica-cupins-campo-grande.json`
- [ ] `barreira-quimica-cupins-sidrolandia.json`
- [ ] `barreira-quimica-cupins-terenos.json`
- [ ] `barreira-quimica-cupins-nova-almeida.json`
- [ ] `barreira-quimica-cupins-jaraguari.json`

### 8. Pragas Urbanas Empresas/Condomínios (`pragas-urbanas-empresas`)
- [ ] `pragas-urbanas-empresas-campo-grande.json`
- [ ] `pragas-urbanas-empresas-sidrolandia.json`
- [ ] `pragas-urbanas-empresas-terenos.json`
- [ ] `pragas-urbanas-empresas-nova-almeida.json`
- [ ] `pragas-urbanas-empresas-jaraguari.json`

### 9. Sanitização e Desinfecção (`sanitizacao-desinfeccao`)
- [ ] `sanitizacao-desinfeccao-campo-grande.json`
- [ ] `sanitizacao-desinfeccao-sidrolandia.json`
- [ ] `sanitizacao-desinfeccao-terenos.json`
- [ ] `sanitizacao-desinfeccao-nova-almeida.json`
- [ ] `sanitizacao-desinfeccao-jaraguari.json`

**Total: 45 arquivos JSON.**

---

## Bairros/distritos reais por cidade (use estes, não invente)

### Campo Grande (MS) — capital
Jardim dos Estados, Centro, Vila Carvalho, Monte Castelo, Tiradentes, Universitário, Jardim Veraneio, Chácara Cachoeira, Vila Progresso, Mata do Jacinto, Carandá Bosque, Coophavila II, Nova Lima, Vilas Boas.

### Sidrolândia (MS)
Centro, Vila Margarida, Jardim Alvorada, Vila Nova, Novo Oeste, Distrito de Quebra Coco, Distrito de Capivara.

### Terenos (MS)
Centro, Vila Taquarussu, Distrito de Dois Irmãos do Buriti (vizinhança), Rochedinho, Lagoa Rica.

### Nova Almeida (MS — nota: pequena localidade/distrito)
Centro de Nova Almeida, área rural, zona de chácaras. Se for localidade pequena, foque em "zona rural de Nova Almeida", "sítios da região", "distrito próximo a [cidade maior vizinha]".

### Jaraguari (MS)
Centro de Jaraguari, Distrito de Rochedinho, zona rural, fazendas da região, Vila do Rádio.

**NUNCA** cite bairro de Campo Grande em texto de Sidrolândia (ou vice-versa). Isso é a definição de **doorway page** e o Google penaliza.

---

## Prioridade de escrita (ordem recomendada)

1. `dedetizacao-residencial-campo-grande.json` (home!)
2. Resto dos serviços em Campo Grande (8 arquivos)
3. Dedetização residencial e comercial nas outras 4 cidades (8 arquivos)
4. Serviços restantes nas outras cidades (28 arquivos)

Entregue em lotes de 5 para o Francis ir integrando/testando o build.

---

## Regras anti-doorway (zero tolerância)

- Zero texto duplicado entre cidades. Zero.
- Bairro de Campo Grande **nunca** aparece em texto de outra cidade.
- H1 sempre com padrão: `[Serviço] em [Cidade]` — mas o resto do conteúdo é único.
- FAQ: ao menos 1 das 3+ perguntas deve ser específica daquela combinação (ex: "Como funciona desratização em condomínio no Jardim dos Estados?").
- Tom: profissional, direto, confiante. Sem exagero. Sem emoji.
- Nada de "melhor empresa", "a #1", "a mais barata" — Google não gosta.

---

## Checklist de entrega (DoD)

- [ ] 45 arquivos JSON em `src/data/pages/`
- [ ] Todos passam no `JSON.parse` (sem erro de sintaxe)
- [ ] `title` ≤ 60 chars, `description` ≤ 155 chars (verificado arquivo por arquivo)
- [ ] Cada FAQ tem 3–5 itens
- [ ] Cada `sobre_texto` menciona ≥ 2 bairros reais daquela cidade
- [ ] Build do Francis roda sem erro de JSON malformado (`npm run build`)

---

## Handoff de saída

Ao terminar, deixe nota em `.agents/notes/maria-done.md` listando quais JSONs ficaram prontos. Se faltar algum, listar o que falta e por quê.

Vai firme, Maria. Cada palavra conta.

— Genilson
