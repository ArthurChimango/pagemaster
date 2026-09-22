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
    image: '/assets/projects/isablack.webp',
    href: 'https://www.isablack.com.br/',
    featured: true,
  },
  {
    title: 'Dr. Marcio Irber',
    category: 'Landing page médica',
    description: 'Autoridade profissional, serviços e agendamento organizados em uma jornada simples.',
    image: '/assets/projects/dr-marcio-irber.webp',
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

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">Estratégia, design e tecnologia</p>
          <h1>Sites que deixam claro por que escolher você.</h1>
          <p className="hero-text">
            Projetos digitais objetivos, rápidos e pensados para transformar visitas em oportunidades de negócio.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#portfolio">Ver projetos</a>
            <a className="button button-secondary" href="#contato">Falar sobre meu site</a>
          </div>
        </div>
        <div className="hero-note" aria-label="Resumo de atuação">
          <span>PageMaster</span>
          <strong>Do primeiro clique ao contato.</strong>
          <p>Uma mensagem clara, uma boa experiência e o caminho mais curto até o seu cliente.</p>
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
