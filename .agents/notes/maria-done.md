# Maria — concluído

**De:** Maria (Copywriter / SEO Writer)
**Para:** Bruno, Francis, Marivone, Leonardo
**Branch:** master

---

## Entrega

45 arquivos JSON escritos em `src/data/pages/`, um por combinação serviço × cidade (9 serviços × 5 cidades).

Observação de contexto: os 45 arquivos entraram no commit `3021052` do Francis, não em commit próprio da Maria — o Francis fez `git add .` enquanto eu finalizava as edits, e o commit dele incluiu todos os JSONs já com as correções de description aplicadas.

## Lista de arquivos (todos em `src/data/pages/`)

### Dedetização Residencial
- dedetizacao-residencial-campo-grande.json (página principal)
- dedetizacao-residencial-sidrolandia.json
- dedetizacao-residencial-terenos.json
- dedetizacao-residencial-nova-almeida.json
- dedetizacao-residencial-jaraguari.json

### Dedetização Comercial
- dedetizacao-comercial-campo-grande.json
- dedetizacao-comercial-sidrolandia.json
- dedetizacao-comercial-terenos.json
- dedetizacao-comercial-nova-almeida.json
- dedetizacao-comercial-jaraguari.json

### Controle de Cupins
- controle-cupins-campo-grande.json
- controle-cupins-sidrolandia.json
- controle-cupins-terenos.json
- controle-cupins-nova-almeida.json
- controle-cupins-jaraguari.json

### Desinsetização
- desinsetizacao-campo-grande.json
- desinsetizacao-sidrolandia.json
- desinsetizacao-terenos.json
- desinsetizacao-nova-almeida.json
- desinsetizacao-jaraguari.json

### Desratização
- desratizacao-campo-grande.json
- desratizacao-sidrolandia.json
- desratizacao-terenos.json
- desratizacao-nova-almeida.json
- desratizacao-jaraguari.json

### Controle de Mosquitos
- controle-mosquitos-campo-grande.json
- controle-mosquitos-sidrolandia.json
- controle-mosquitos-terenos.json
- controle-mosquitos-nova-almeida.json
- controle-mosquitos-jaraguari.json

### Barreira Química Cupins
- barreira-quimica-cupins-campo-grande.json
- barreira-quimica-cupins-sidrolandia.json
- barreira-quimica-cupins-terenos.json
- barreira-quimica-cupins-nova-almeida.json
- barreira-quimica-cupins-jaraguari.json

### Pragas Urbanas para Empresas
- pragas-urbanas-empresas-campo-grande.json
- pragas-urbanas-empresas-sidrolandia.json
- pragas-urbanas-empresas-terenos.json
- pragas-urbanas-empresas-nova-almeida.json
- pragas-urbanas-empresas-jaraguari.json

### Sanitização e Desinfecção
- sanitizacao-desinfeccao-campo-grande.json
- sanitizacao-desinfeccao-sidrolandia.json
- sanitizacao-desinfeccao-terenos.json
- sanitizacao-desinfeccao-nova-almeida.json
- sanitizacao-desinfeccao-jaraguari.json

## Self-check executado

- 45 arquivos: confirmado por `ls src/data/pages/ | wc -l`
- JSON válido: todos os 45 passam no `json.load` (0 falhas)
- `title` ≤ 60 chars: 45/45 OK
- `description` ≤ 155 chars: 45/45 OK (2 arquivos foram ajustados após a verificação inicial)
- FAQ com 3 itens em cada: 45/45 OK
- Títulos únicos: 45/45
- Descriptions únicas: 45/45
- `sobre_texto` único (primeiros 60 chars distintos): 45/45
- Zero palavras proibidas: confirmado por grep (falso positivo em "barata-americana" — nome da espécie, não preço)
- Bairros reais por cidade: respeitado — Campo Grande rotaciona Jardim dos Estados, Centro, Vila Carvalho, Monte Castelo, Tiradentes, Universitário, Jardim Veraneio, Chácara Cachoeira, Mata do Jacinto, São Francisco, Taveirópolis, Jardim Aero Rancho, Bairro Amambaí, Coronel Antonino, Vilas Boas, Jardim Imá, Bairro Carandá, Bosque da Saúde; Sidrolândia rotaciona Centro, Vila Terezinha, Jardim São Francisco, Jardim Primavera, Bairro Alvorada, Vila Popular, Jardim das Palmeiras, distrito de Pindaival, distrito de Quebra Coco; Terenos usa Centro, Vila Operária, Jardim Primavera, Boa Vista, Jardim Universitário, assentamentos rurais; Nova Almeida usa Centro, zona rural, Bairro da Igreja, entorno da BR, entorno da sede municipal, propriedades rurais; Jaraguari usa Centro, Vila São José, Vila Esperança, distritos rurais, propriedades rurais da BR-163, área central.

## FAQ pergunta 3 (varia por serviço, conforme regra)

- residencial: "Precisa sair de casa com crianças e com o pet?"
- comercial: "Preciso fechar o comércio no dia da dedetização?"
- cupins: "A madeira que o cupim atacou pode ser salva?"
- desinsetização: "É seguro para criança e para pet?"
- desratização: "Os ratos somem de vez depois da desratização?"
- mosquitos: "A nebulização protege contra dengue, zika e chikungunya?"
- barreira cupins: "A barreira química dura quantos anos?"
- pragas urbanas empresas: "Vocês emitem laudo para vigilância sanitária e ANVISA?"
- sanitização: "É seguro usar o escritório logo depois da sanitização?"

## Para o Marivone (QA)

- Verificar que o build do Francis consome os JSONs sem erro.
- Rodar `JSON.parse` em cada arquivo (ou `python -c "import json; json.load(open(f))"`).
- Checar se o H1 renderizado bate com `{serviço} em {cidade}` da `locais.json`.
- Spot-check 3 páginas aleatórias (uma de cada cidade distante) para confirmar que o `sobre_texto` não é clone com cidade trocada.
- Verificar meta description renderizada em até 155 chars no HTML final.

— Maria
