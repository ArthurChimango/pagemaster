'use client';

import { useState } from 'react';

const services = [
  {
    number: '01',
    title: 'Sites institucionais',
    description: 'Uma presença digital clara e profissional para apresentar sua empresa, seus diferenciais e facilitar o contato.',
  },
  {
    number: '02',
    title: 'Landing pages',
    description: 'Páginas focadas em uma oferta, com estrutura direta para transformar visitas de anúncios em contatos.',
  },
  {
    number: '03',
    title: 'Sistemas web',
    description: 'Catálogos, agendamentos e soluções sob medida para simplificar processos e atender melhor seus clientes.',
  },
];

const projects = [
  {
    title: 'Ecossistema IsaBlack',
    category: 'Site institucional',
    description: 'Arquitetura, mídia, conteúdo e ensino reunidos em uma experiência digital editorial.',
    image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=82',
    href: 'https://www.isablack.com.br/',
    featured: true,
  },
  {
    title: 'Dr. Marcio Irber',
    category: 'Landing page médica',
    description: 'Autoridade profissional, serviços e agendamento organizados em uma jornada simples.',
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1200&q=82',
    href: 'https://drmarcioirber.com.br/',
    featured: true,
  },
  {
    title: 'Carlos Alberto Arquitetura',
    category: 'Site institucional',
    description: 'Portfólio de arquitetura apresentado com foco visual e navegação objetiva.',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=82',
    href: 'https://carlosalbertoarquitetura.com.br',
  },
  {
    title: 'CR Buffet',
    category: 'Institucional + cardápio',
    description: 'Apresentação do buffet integrada a um cardápio online fácil de consultar.',
    image: 'https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=1200&q=82',
    href: 'https://crbuffet.com.br',
  },
  {
    title: 'Ecap Jr',
    category: 'Landing page institucional',
    description: 'Página institucional para comunicar serviços, equipe e posicionamento da empresa júnior.',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=82',
    href: 'https://ecapjr.com.br',
  },
  {
    title: 'Casa Pronta Udi',
    category: 'Catálogo interativo',
    description: 'Catálogo digital sob medida para apresentar produtos e gerar pedidos com menos atrito.',
    image: 'https://www.paulomauro.com.br/wp-content/uploads/2023/02/paulomauro-blog-capa-como-economizar-em-moveis-planejados.jpg',
    href: 'https://casaprontaudia.com.br/',
  },
  {
    title: 'Agenda Automática',
    category: 'Sistema de agendamento',
    description: 'Fluxo de agendamento online disponível 24 horas para serviços e consultas.',
    image: 'https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&w=1200&q=82',
    href: '/agendamento',
  },
  {
    title: 'Cardápio Digital',
    category: 'Delivery direto',
    description: 'Cardápio interativo integrado ao WhatsApp, sem comissão por pedido.',
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=82',
    href: '/catalogo',
  },
];

export default function Home() {
  const [formData, setFormData] = useState({ nome: '', servico: '', mensagem: '' });

  const handleSubmit = (event) => {
    event.preventDefault();
    const message = [
      `Olá, PageMaster! Meu nome é *${formData.nome}*.`,
      '',
      `*Serviço:* ${formData.servico}`,
      `*Sobre o projeto:* ${formData.mensagem}`,
      '',
      'Gostaria de conversar sobre um orçamento.',
    ].join('\n');

    window.open(`https://wa.me/553499778403?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="PageMaster — início">
          <span>P</span>M.
        </a>
        <nav aria-label="Navegação principal">
          <a href="#servicos">Serviços</a>
          <a href="#portfolio">Portfólio</a>
          <a className="nav-cta" href="#contato">Pedir orçamento</a>
        </nav>
      </header>

      <section
        className="legacy-hero relative pt-40 px-6 flex flex-col items-center overflow-visible bg-brand-primary rounded-b-[3rem] shadow-2xl"
        id="top"
      >
        <div className="absolute inset-0 z-0 bg-grid-pattern opacity-40 rounded-b-[3rem]" />
        <div className="absolute top-1/4 left-10 w-4 h-4 rounded-full border-2 border-white/40 hidden md:block z-0" />
        <div className="absolute top-20 right-32 w-3 h-3 rounded-full bg-white hidden md:block z-0" />
        <div className="absolute bottom-1/3 right-[15%] w-3 h-3 rounded-full border-2 border-[#60A5FA]/80 hidden lg:block z-0" />

        <div className="relative z-10 text-center w-full max-w-[1400px] mx-auto">
          <img
            src="/assets/logo.png"
            alt="PageMaster"
            className="h-12 md:h-16 mx-auto mb-8 object-contain brightness-0 invert drop-shadow-md"
          />

          <h1 className="text-[12vw] md:text-[8vw] font-extrabold leading-[0.85] text-white mb-8 tracking-tight">
            <span className="sr-only">Criação de sites, landing pages e sistemas web:</span>
            MUITO ALÉM<br />
            <span className="text-blue-200">DE SITES.</span><br />
            MÁQUINAS DE<br />
            <span className="text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.4)]">VENDAS.</span>
          </h1>

          <p className="text-lg md:text-2xl text-blue-50 font-medium max-w-2xl mx-auto leading-relaxed drop-shadow-md mb-10">
            Não criamos apenas sites. Construímos experiências digitais e automações que trabalham pelo seu negócio.
          </p>

          <div className="flex flex-col items-center gap-6 relative z-30 mb-16">
            <a
              href="#contato"
              className="group relative inline-flex items-center gap-4 px-8 py-5 bg-brand-secondary text-white rounded-full overflow-hidden shadow-[0_0_40px_rgba(15,23,42,0.4)] hover:shadow-[0_0_60px_rgba(6,182,212,0.6)] hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex flex-col text-left relative z-10">
                <span className="legacy-hero-kicker text-[10px] font-mono font-bold uppercase tracking-widest leading-none mb-1">Fale conosco</span>
                <span className="text-lg font-extrabold uppercase tracking-widest leading-none">Iniciar projeto</span>
              </div>
              <span className="text-xl transform group-hover:translate-x-2 transition-transform relative z-10" aria-hidden="true">→</span>
            </a>

            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="/catalogo"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 text-white rounded-full text-xs font-bold uppercase tracking-widest transition-all shadow-md hover:-translate-y-0.5 duration-200"
              >
                Simulador catálogo
              </a>
              <a
                href="/agendamento"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 text-white rounded-full text-xs font-bold uppercase tracking-widest transition-all shadow-md hover:-translate-y-0.5 duration-200"
              >
                Simulador agendamento
              </a>
            </div>
          </div>
        </div>

        <div className="relative w-full max-w-5xl mx-auto z-20 -mb-24 md:-mb-40 lg:-mb-56 px-4 flex justify-center drop-shadow-2xl">
          <img src="/assets/fundo.png" alt="Prévia de projetos PageMaster em celulares" className="w-full h-auto object-contain" />
        </div>
      </section>

      <section className="section services-section" id="servicos">
        <div className="section-heading">
          <p className="eyebrow">O que eu faço</p>
          <h2>O essencial para sua empresa vender melhor na internet.</h2>
        </div>
        <div className="services-list">
          {services.map((service) => (
            <article className="service-row" key={service.title}>
              <span className="service-number">{service.number}</span>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section portfolio-section" id="portfolio">
        <div className="section-heading portfolio-heading">
          <div>
            <p className="eyebrow">Trabalhos selecionados</p>
            <h2>Projetos feitos para negócios reais.</h2>
          </div>
          <p>Abra cada projeto e veja a experiência funcionando.</p>
        </div>

        <div className="project-grid">
          {projects.map((project) => (
            <a
              className={`project-card${project.featured ? ' project-card-featured' : ''}`}
              href={project.href}
              key={project.title}
              target={project.href.startsWith('http') ? '_blank' : undefined}
              rel={project.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              aria-label={`Abrir projeto ${project.title}`}
            >
              <img src={project.image} alt="" loading="lazy" />
              <div className="project-overlay" />
              <div className="project-content">
                <p>{project.category}</p>
                <h3>{project.title}</h3>
                <span>{project.description}</span>
                <strong>Ver projeto ↗</strong>
              </div>
            </a>
          ))}
        </div>
      </section>

      <section className="contact-section" id="contato">
        <div className="contact-copy">
          <p className="eyebrow">Vamos conversar</p>
          <h2>Conte o que você precisa. Eu respondo com o próximo passo.</h2>
          <p>Preencha o essencial. Ao enviar, sua mensagem será aberta no WhatsApp para você revisar e confirmar.</p>
          <a href="https://wa.me/553499778403" target="_blank" rel="noopener noreferrer">
            WhatsApp: (34) 9977-8403 ↗
          </a>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <label htmlFor="nome">Seu nome</label>
          <input
            id="nome"
            type="text"
            value={formData.nome}
            onChange={(event) => setFormData({ ...formData, nome: event.target.value })}
            placeholder="Como você se chama?"
            autoComplete="name"
            required
          />

          <label htmlFor="servico">O que você precisa?</label>
          <select
            id="servico"
            value={formData.servico}
            onChange={(event) => setFormData({ ...formData, servico: event.target.value })}
            required
          >
            <option value="" disabled>Selecione um serviço</option>
            <option>Site institucional</option>
            <option>Landing page</option>
            <option>Sistema web</option>
            <option>Ainda não sei</option>
          </select>

          <label htmlFor="mensagem">Sobre o projeto</label>
          <textarea
            id="mensagem"
            rows="4"
            value={formData.mensagem}
            onChange={(event) => setFormData({ ...formData, mensagem: event.target.value })}
            placeholder="Explique brevemente sua ideia ou objetivo."
            required
          />

          <button type="submit">Enviar pelo WhatsApp ↗</button>
        </form>
      </section>

      <footer>
        <a className="brand footer-brand" href="#top"><span>P</span>M.</a>
        <p>PageMaster · Sites e sistemas web em Uberlândia.</p>
        <p>© 2026</p>
      </footer>
    </main>
  );
}
