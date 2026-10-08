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
  url: "https://dedetizadora-campo-grande.glauberglauber84.workers.dev",
  // Lat/Long aproximada do centro de Campo Grande/MS (placeholder razoável)
  geo: {
    latitude: -20.4697,
    longitude: -54.6201
  },
  servicos: [
    { slug: "dedetizacao-residencial", label: "Dedetização Residencial", icone: "🏠", descricao: "Controle completo de pragas em casas e apartamentos.", imagem: "/images/servicos/dedetizacao-residencial.jpg" },
    { slug: "dedetizacao-comercial", label: "Dedetização Comercial", icone: "🏢", descricao: "Proteção para lojas, escritórios e estabelecimentos.", imagem: "/images/servicos/dedetizacao-comercial.jpg" },
    { slug: "controle-cupins", label: "Controle de Cupins", icone: "🪵", descricao: "Descupinização de madeiras, móveis e estruturas.", imagem: "/images/servicos/controle-cupins.jpg" },
    { slug: "desinsetizacao", label: "Desinsetização", icone: "🪳", descricao: "Baratas, formigas, aranhas e escorpiões.", imagem: "/images/servicos/desinsetizacao.jpg" },
    { slug: "desratizacao", label: "Desratização", icone: "🐀", descricao: "Controle seguro de ratos e roedores.", imagem: "/images/servicos/desratizacao.jpg" },
    { slug: "controle-mosquitos", label: "Controle de Mosquitos", icone: "🦟", descricao: "Pernilongos, dengue e muriçocas.", imagem: "/images/servicos/controle-mosquitos.jpg" },
    { slug: "barreira-quimica-cupins", label: "Barreira Química", icone: "🧪", descricao: "Proteção preventiva contra cupins em obras." },
    { slug: "pragas-urbanas-empresas", label: "Pragas Urbanas Empresas", icone: "🏭", descricao: "Programas MIP para empresas e condomínios." },
    { slug: "sanitizacao-desinfeccao", label: "Sanitização e Desinfecção", icone: "💧", descricao: "Higienização completa de ambientes." }
  ],
  cidades: [
    { slug: "campo-grande", label: "Campo Grande" },
    { slug: "sidrolandia", label: "Sidrolândia" },
    { slug: "terenos", label: "Terenos" },
    { slug: "nova-almeida", label: "Nova Almeida" },
    { slug: "jaraguari", label: "Jaraguari" }
  ],
  nav: [
    { href: "/", label: "Início" },
    { href: "/servicos", label: "Serviços" },
    { href: "/conteudo", label: "Conteúdo" },
    { href: "/sobre", label: "Sobre" },
    { href: "/contato", label: "Contato" }
  ],
  descricaoCurta: "Controle de pragas em Campo Grande e região. Dedetização residencial e comercial com equipe certificada, atendimento rápido e orçamento sem compromisso pelo WhatsApp."
};

export type SiteConfig = typeof siteConfig;
