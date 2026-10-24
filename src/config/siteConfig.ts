const whatsappNumero = "5567999100333";
const whatsappMensagemPadrao = "Olá! Vim do site Dedetização em Campo Grande-MS. Gostaria de solicitar um orçamento.";

export const siteConfig = {
  nome: "Dedetizadora Campo Grande",
  whatsapp: "(67) 99910-0333",
  whatsappMensagemPadrao,
  whatsappLink: `https://wa.me/${whatsappNumero}?text=${encodeURIComponent(whatsappMensagemPadrao)}`,
  // Empresa de área de atendimento: a equipe vai até o cliente, sem endereço aberto ao público.
  areaAtendimento: {
    cidade: "Campo Grande",
    estado: "MS"
  },
  corPrimaria: "#1b5e20",
  url: "https://dedetizacaocampograndems.com.br",
  servicos: [
    { slug: "dedetizacao-residencial", label: "Dedetização Residencial", icone: "🏠", descricao: "Controle completo de pragas em casas e apartamentos.", imagem: "/images/servicos/dedetizacao-residencial.jpg" },
    { slug: "dedetizacao-comercial", label: "Dedetização Comercial", icone: "🏢", descricao: "Proteção para lojas, escritórios e estabelecimentos.", imagem: "/images/servicos/dedetizacao-comercial.jpg" },
    { slug: "controle-cupins", label: "Controle de Cupins", icone: "🪵", descricao: "Descupinização de madeiras, móveis e estruturas.", imagem: "/images/servicos/controle-cupins.jpg" },
    { slug: "desinsetizacao", label: "Desinsetização", icone: "🪳", descricao: "Baratas, formigas, aranhas e escorpiões.", imagem: "/images/servicos/desinsetizacao.jpg" },
    { slug: "desratizacao", label: "Desratização", icone: "🐀", descricao: "Controle seguro de ratos e roedores.", imagem: "/images/servicos/desratizacao.jpg" },
    { slug: "controle-mosquitos", label: "Controle de Mosquitos", icone: "🦟", descricao: "Pernilongos, dengue e muriçocas.", imagem: "/images/servicos/controle-mosquitos.jpg" },
    { slug: "barreira-quimica-cupins", label: "Barreira Química", icone: "🧪", descricao: "Proteção preventiva contra cupins em obras.", imagem: "/images/servicos/barreira-quimica-cupins.jpg" },
    { slug: "pragas-urbanas-empresas", label: "Pragas Urbanas Empresas", icone: "🏭", descricao: "Programas MIP para empresas e condomínios.", imagem: "/images/servicos/pragas-urbanas-empresas.jpg" },
    { slug: "sanitizacao-desinfeccao", label: "Sanitização e Desinfecção", icone: "💧", descricao: "Higienização completa de ambientes.", imagem: "/images/servicos/sanitizacao-desinfeccao.jpg" }
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
