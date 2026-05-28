'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Home() {
  const [isDictOpen, setIsDictOpen] = useState(false);
  const [formData, setFormData] = useState({ nome: '', area: '', ideia: '' });

  const toggleDictionary = () => {
    setIsDictOpen(!isDictOpen);
    if (!isDictOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const mensagem = `Olá PageMaster! O meu nome é *${formData.nome}*.\n\n*Área:* ${formData.area}\n*Como podem ajudar / Ideia:* ${formData.ideia}\n\nGostaria de solicitar uma análise de projeto gratuita.`;
    const encoded = encodeURIComponent(mensagem);
    window.open(`https://wa.me/553499778403?text=${encoded}`, '_blank');
  };

  return (
    <>
      <nav
        className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 w-[90%] max-w-2xl bg-white/90 backdrop-blur-xl border border-brand-border rounded-full px-6 py-3 flex justify-between items-center shadow-soft transition-all">
        <div className="font-extrabold text-xl tracking-tighter text-brand-secondary cursor-pointer"
            onClick={() => window.scrollTo({top: 0, behavior: "smooth"})} data-analytics-id="nav-logo-pm">
            <span className="text-brand-primary">P</span>M.
        </div>

        <div className="hidden md:flex items-center gap-8">
            <a href="#solucoes"
                className="text-xs font-bold uppercase tracking-widest text-brand-muted hover:text-brand-primary transition-colors"
                data-analytics-id="nav-link-solucoes">Soluções</a>
            <a href="#portfolio"
                className="text-xs font-bold uppercase tracking-widest text-brand-muted hover:text-brand-primary transition-colors"
                data-analytics-id="nav-link-projetos">Projetos</a>
            <a href="#planos"
                className="text-xs font-bold uppercase tracking-widest text-brand-muted hover:text-brand-primary transition-colors"
                data-analytics-id="nav-link-engenharia">Engenharia</a>

            {/* Link Laboratório Menu (Novo) */}

        </div>
        <a href="/laboratorio"
            className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-brand-primary bg-blue-50 border border-blue-200 px-3 py-1.5 rounded-full hover:bg-brand-primary hover:text-white transition-colors"
            data-analytics-id="nav-link-laboratorio">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z">
                </path>
            </svg>
            Laboratório
        </a>
        <a href="#contato"
            className="bg-brand-primary text-white text-xs font-bold uppercase tracking-widest px-6 py-2.5 rounded-full hover:bg-brand-primaryDark hover:scale-105 transition-all shadow-lg shadow-blue-500/30"
            data-analytics-id="btn-nav-iniciar">
            Iniciar
        </a>
    </nav>

    {/* 2. Hero Section (Design System Azul com Imagem Sobreposta) */}
    <section
        className="relative pt-40 px-6 flex flex-col items-center overflow-visible bg-brand-primary rounded-b-[3rem] shadow-2xl">

        {/* Grid Pattern (Fundo Tech) */}
        <div className="absolute inset-0 z-0 bg-grid-pattern opacity-40 rounded-b-[3rem]"></div>

        {/* Círculos decorativos estilo imagem referência */}
        <div className="absolute top-1/4 left-10 w-4 h-4 rounded-full border-2 border-white/40 hidden md:block z-0"></div>
        <div className="absolute top-20 right-32 w-3 h-3 rounded-full bg-white hidden md:block z-0"></div>
        <div
            className="absolute bottom-1/3 right-[15%] w-3 h-3 rounded-full border-2 border-[#60A5FA]/80 hidden lg:block z-0">
        </div>

        <div className="relative z-10 text-center w-full max-w-[1400px] mx-auto">

            {/* Logo PageMaster */}
            <img src="assets/logo.png" alt="PageMaster Logo"
                className="h-12 md:h-16 mx-auto mb-8 animate-pulse object-contain brightness-0 invert drop-shadow-md" />

            {/* Título PageMaster */}
            <h1 className="text-[12vw] md:text-[8vw] font-extrabold leading-[0.85] text-white mb-8 tracking-tight">
                <span className="sr-only">Criação de Sites, Landing Pages e Desenvolvimento de Sistemas Web em Uberlândia - PageMaster:</span>
                MUITO ALÉM<br />
                <span className="text-blue-200">DE SITES.</span><br />
                MÁQUINAS DE<br />
                <span className="text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.4)]">VENDAS.</span>
            </h1>

            {/* Subtítulo PageMaster */}
            <p
                className="text-lg md:text-2xl text-blue-50 font-medium max-w-2xl mx-auto leading-relaxed drop-shadow-md mb-10">
                Não criamos apenas "sites". Construímos ecossistemas imersivos e automações de alta precisão que vendem
                enquanto você dorme.
            </p>

            {/* BOTÃO DO LABORATÓRIO (Em grande destaque) */}
            <div className="flex justify-center relative z-30 mb-16">
                <a href="/laboratorio"
                    className="group relative inline-flex items-center gap-4 px-8 py-5 bg-brand-secondary text-white rounded-full overflow-hidden shadow-[0_0_40px_rgba(15,23,42,0.4)] hover:shadow-[0_0_60px_rgba(6,182,212,0.6)] hover:-translate-y-1 transition-all duration-300"
                    data-analytics-id="btn-hero-acessar-laboratorio">
                    {/* Efeito luminoso de fundo no botão */}
                    <div
                        className="absolute inset-0 bg-gradient-to-r from-brand-secondary via-[#06b6d4] to-brand-secondary opacity-0 group-hover:opacity-20 transition-opacity duration-500">
                    </div>

                    {/* Ícone Laboratório */}
                    <svg className="w-8 h-8 text-[#06b6d4] group-hover:animate-pulse relative z-10" fill="none"
                        stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z">
                        </path>
                    </svg>

                    <div className="flex flex-col text-left relative z-10">
                        <span
                            className="text-[10px] text-[#06b6d4] font-mono font-bold uppercase tracking-widest leading-none mb-1">Crie
                            a sua estrutura</span>
                        <span className="text-lg font-extrabold uppercase tracking-widest leading-none">Acessar
                            Laboratório</span>
                    </div>

                    {/* Seta */}
                    <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-2 transition-transform relative z-10"
                        fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                    </svg>
                </a>
            </div>

        </div>

        <div
            className="relative w-full max-w-5xl mx-auto z-20 -mb-24 md:-mb-40 lg:-mb-56 px-4 flex justify-center drop-shadow-2xl">


            <img src="assets/fundo.png" alt="Celulares" className="w-full h-auto object-contain" />

        </div>

    </section>

    {/* 3. Manifesto / Declaração */}
    {/* O padding-top (pt-40 md:pt-56 lg:pt-72) foi MUITO AUMENTADO para dar espaço à imagem de cima que sobrepõe */}
    <section className="pt-40 md:pt-56 lg:pt-72 pb-32 px-6 bg-brand-background border-b border-brand-border">
        <div className="max-w-[1200px] mx-auto text-center md:text-left">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-medium leading-tight text-brand-muted">
                A maioria dos sites na internet são <span className="text-brand-secondary font-extrabold">panfletos digitais
                    mortos</span>. O seu negócio precisa de uma <span
                    className="text-brand-secondary font-extrabold underline decoration-brand-primary decoration-4 underline-offset-8">máquina
                    viva</span> que interaja, filtre e feche negócios automaticamente.
            </h2>
        </div>
    </section>

    {/* 4. Soluções */}
    <section id="solucoes" className="py-40 px-6 max-w-[1400px] mx-auto relative">
        <div className="flex flex-col lg:flex-row gap-20">

            {/* Lado Esquerdo Fixo */}
            <div className="lg:w-1/3">
                <div className="sticky top-32">
                    <span
                        className="text-brand-primary font-mono text-xs font-bold tracking-[0.2em] uppercase mb-4 block">//
                        Nossas Verticais</span>
                    <h2 className="text-5xl md:text-6xl font-extrabold text-brand-secondary leading-tight mb-6">
                        Especialização por Setor.</h2>
                    <p className="text-brand-muted font-medium text-lg">Tecnologia adaptada milimetricamente para o modelo
                        de negócio da sua empresa.</p>
                </div>
            </div>

            {/* Lado Direito Rolável (Cards) */}
            <div className="lg:w-2/3 flex flex-col gap-8">

                {/* Serviço 1: Alimentação */}
                <div
                    className="group bg-brand-surface border border-brand-border p-10 md:p-14 rounded-[2rem] hover:border-brand-primary/50 transition-colors shadow-soft hover:shadow-floating">
                    <div className="w-20 h-20 mb-8 text-brand-primary">
                        <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" stroke-width="2"
                            className="w-full h-full transform group-hover:scale-110 transition-transform duration-500">
                            <circle cx="50" cy="50" r="40" stroke-dasharray="4 4"
                                className="animate-[spin_20s_linear_infinite]"></circle>
                            <circle cx="50" cy="50" r="25"></circle>
                            <circle cx="50" cy="50" r="10" fill="currentColor"></circle>
                        </svg>
                    </div>
                    <h3 className="text-3xl font-extrabold text-brand-secondary mb-4">Alimentação &amp; Delivery</h3>
                    <p className="text-brand-muted font-medium text-lg mb-8 leading-relaxed">Liberte-se das taxas abusivas
                        de
                        27% das plataformas. Implementamos o seu próprio cardápio digital de alto desempenho integrado
                        diretamente com o seu WhatsApp.</p>
                </div>

                {/* Serviço 2: Saúde */}
                <div
                    className="group bg-brand-surface border border-brand-border p-10 md:p-14 rounded-[2rem] hover:border-blue-400/50 transition-colors shadow-soft hover:shadow-floating">
                    <div className="w-20 h-20 mb-8 text-blue-500">
                        <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" stroke-width="2"
                            className="w-full h-full transform group-hover:scale-110 transition-transform duration-500">
                            <rect x="40" y="10" width="20" height="80" rx="10"></rect>
                            <rect x="10" y="40" width="80" height="20" rx="10"></rect>
                            <circle cx="50" cy="50" r="5" fill="#E2E8F0"></circle>
                        </svg>
                    </div>
                    <h3 className="text-3xl font-extrabold text-brand-secondary mb-4">Saúde &amp; Clínicas</h3>
                    <p className="text-brand-muted font-medium text-lg mb-8 leading-relaxed">Eleve a perceção de valor da
                        sua
                        consulta antes mesmo do paciente chegar. Páginas de autoridade extrema combinadas com sistemas
                        de agendamento automático.</p>
                </div>

                {/* Serviço 3: Varejo */}
                <div
                    className="group bg-brand-surface border border-brand-border p-10 md:p-14 rounded-[2rem] hover:border-indigo-400/50 transition-colors shadow-soft hover:shadow-floating">
                    <div className="w-20 h-20 mb-8 text-indigo-500">
                        <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" stroke-width="2"
                            className="w-full h-full transform group-hover:scale-110 transition-transform duration-500">
                            <rect x="10" y="50" width="35" height="40" rx="4"></rect>
                            <rect x="55" y="10" width="35" height="80" rx="4"></rect>
                            <rect x="10" y="10" width="35" height="30" fill="currentColor" fill-opacity="0.2" rx="4">
                            </rect>
                        </svg>
                    </div>
                    <h3 className="text-3xl font-extrabold text-brand-secondary mb-4">Varejo &amp; Catálogos</h3>
                    <p className="text-brand-muted font-medium text-lg mb-8 leading-relaxed">Automatize o envio de preços e
                        fotografias. Desenvolvemos montras digitais geríveis por si, proporcionando uma experiência de
                        compra sem fricção.</p>
                </div>

            </div>
        </div>
    </section>

    {/* 5. Portfólio (Layout Claro c/ Overlays Escuros p/ Imagens) */}
    <section id="portfolio" className="py-32 bg-white">
        <div className="max-w-[1400px] mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
                <div>
                    <span className="text-brand-muted font-mono text-xs font-bold tracking-[0.2em] uppercase mb-4 block">//
                        Showcase</span>
                    <h2 className="text-4xl md:text-6xl font-extrabold text-brand-secondary">Portfólio.</h2>
                </div>
                <a href="/portfolio"
                    className="text-sm font-bold uppercase tracking-widest border-b-2 border-brand-primary text-brand-primary hover:text-brand-primaryDark hover:border-brand-primaryDark pb-1 transition-all"
                    data-analytics-id="a-ver-arquivo-completo">
                    Ver Arquivo Completo
                </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {/* Projeto Maior */}
                <a href="templates/Cardapio.html" target="_blank"
                    className="product-card group block md:col-span-2 relative overflow-hidden rounded-[2rem] shadow-soft aspect-[16/9] md:aspect-[21/9] bg-brand-surface border border-brand-border"
                    data-product-id="port-delivery" data-product-name="Plataforma Delivery"
                    data-analytics-id="btn-ver-portfolio-delivery">
                    <img src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&amp;fit=crop&amp;w=1600&amp;q=80"
                        alt="Projeto" className="w-full h-full object-cover img-reveal absolute inset-0" />
                    <div
                        className="absolute inset-0 bg-gradient-to-t from-brand-secondary via-brand-secondary/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity">
                    </div>
                    <div className="absolute bottom-0 left-0 p-10 md:p-14 z-10">
                        <p className="text-blue-300 font-mono text-xs font-bold uppercase tracking-widest mb-3">Plataforma
                            Delivery</p>
                        <h3 className="text-3xl md:text-5xl font-extrabold text-white">Sistema de Pedidos</h3>
                    </div>
                </a>

                {/* Projeto Metade */}
                <a href="templates/Agendamento.html" target="_blank"
                    className="product-card group block relative overflow-hidden rounded-[2rem] shadow-soft aspect-square md:aspect-[4/5] bg-brand-surface border border-brand-border"
                    data-product-id="port-agendamento" data-product-name="Agenda Automática"
                    data-analytics-id="btn-ver-portfolio-agendamento">
                    <img src="https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&amp;fit=crop&amp;w=800&amp;q=80"
                        alt="Projeto" className="w-full h-full object-cover img-reveal absolute inset-0" />
                    <div
                        className="absolute inset-0 bg-gradient-to-t from-brand-secondary via-brand-secondary/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity">
                    </div>
                    <div className="absolute bottom-0 left-0 p-8 md:p-10 z-10">
                        <p className="text-blue-300 font-mono text-xs font-bold uppercase tracking-widest mb-3">Beleza &amp;
                            Estética</p>
                        <h3 className="text-2xl md:text-3xl font-extrabold text-white">Agenda Automática</h3>
                    </div>
                </a>

                {/* Projeto Metade */}
                <a href="templates/consultoria.html" target="_blank"
                    className="product-card group block relative overflow-hidden rounded-[2rem] shadow-soft aspect-square md:aspect-[4/5] bg-brand-surface border border-brand-border"
                    data-product-id="port-consultoria" data-product-name="Captacao de Leads B2B"
                    data-analytics-id="btn-ver-portfolio-consultoria">
                    <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&amp;fit=crop&amp;w=800&amp;q=80"
                        alt="Projeto" className="w-full h-full object-cover img-reveal absolute inset-0" />
                    <div
                        className="absolute inset-0 bg-gradient-to-t from-brand-secondary via-brand-secondary/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity">
                    </div>
                    <div className="absolute bottom-0 left-0 p-8 md:p-10 z-10">
                        <p className="text-blue-300 font-mono text-xs font-bold uppercase tracking-widest mb-3">Serviços B2B
                        </p>
                        <h3 className="text-2xl md:text-3xl font-extrabold text-white">Captação de Leads</h3>
                    </div>
                </a>
            </div>
        </div>
    </section>

    {/* 6. Arquitetura do Projeto / Planos */}
    <section id="planos" className="bg-brand-background py-40 px-6 relative overflow-hidden border-y border-brand-border">
        <div className="absolute inset-0 bg-grid-pattern-light opacity-50"></div>

        <div className="max-w-[1400px] mx-auto relative z-10">
            <div className="mb-16">
                <span className="text-brand-primary font-mono text-sm font-bold tracking-[0.2em] uppercase mb-4 block">//
                    Engenharia de Planos</span>
                <h2
                    className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight text-brand-secondary tracking-tighter">
                    Escalabilidade <span
                        className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-blue-400">Transparente.</span>
                </h2>

                {/* Caixa de Aviso sobre Landing Pages vs Sistemas */}
                <div className="bg-white border border-brand-border rounded-2xl p-6 max-w-3xl mb-8 shadow-soft">
                    <p className="text-brand-muted font-medium text-sm md:text-base leading-relaxed">
                        <span className="text-brand-primary font-bold">Atenção:</span> Os planos abaixo são exclusivos para
                        a
                        construção de <strong>Landing Pages</strong>. Para sistemas personalizados (como Plataformas de
                        Delivery, Agendamento ou Catálogos Inteligentes), por favor, entre em contacto com a nossa
                        equipe para um orçamento à medida.
                    </p>
                </div>

                <button onClick={toggleDictionary}
                    className="inline-flex items-center gap-3 px-8 py-4 bg-white hover:bg-gray-50 border border-brand-border rounded-full text-sm font-bold text-brand-secondary transition-all shadow-sm"
                    data-analytics-id="btn-abrir-dicionario">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                        className="w-5 h-5 text-brand-primary">
                        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
                        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
                    </svg>
                    Dicionário para Não-Técnicos
                </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">

                {/* PLANO 1: BÁSICO */}
                <div className="product-card bg-brand-surface border border-brand-border p-8 md:p-10 rounded-[2rem] flex flex-col justify-between hover:border-blue-300 transition-all shadow-soft hover:-translate-y-1"
                    data-product-id="plano-basico" data-product-name="Plano Básico">
                    <div>
                        <div className="text-brand-muted mb-4 font-mono text-sm font-bold">&lt;starter&gt;</div>
                        <h3 className="text-3xl font-extrabold text-brand-secondary mb-4">Presença Digital</h3>
                        <p className="text-brand-muted font-medium mb-10 text-base">O "Cartão de Visitas" interativo para
                            quem
                            está a começar e precisa de existir no Google.</p>

                        <div className="mb-8">
                            <h4 className="text-brand-muted font-mono text-xs font-bold uppercase tracking-widest mb-4">
                                Estrutura Essencial:</h4>
                            <ul className="space-y-4 font-medium text-brand-secondary text-sm">
                                <li className="flex items-center gap-3">
                                    <svg className="w-4 h-4 text-brand-primary" viewBox="0 0 24 24" fill="none"
                                        stroke="currentColor" stroke-width="2">
                                        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                                    </svg>
                                    Hero (Apresentação Inicial)
                                </li>
                                <li className="flex items-center gap-3">
                                    <svg className="w-4 h-4 text-brand-primary" viewBox="0 0 24 24" fill="none"
                                        stroke="currentColor" stroke-width="2">
                                        <circle cx="12" cy="12" r="10"></circle>
                                        <line x1="12" y1="16" x2="12" y2="12"></line>
                                        <line x1="12" y1="8" x2="12.01" y2="8"></line>
                                    </svg>
                                    Sobre a Empresa / Serviços
                                </li>
                                <li className="flex items-center gap-3">
                                    <svg className="w-4 h-4 text-brand-primary" viewBox="0 0 24 24" fill="none"
                                        stroke="currentColor" stroke-width="2">
                                        <path
                                            d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z">
                                        </path>
                                    </svg>
                                    Rodapé com Contactos
                                </li>
                            </ul>
                        </div>

                        <div className="mb-10">
                            <h4 className="text-brand-muted font-mono text-xs font-bold uppercase tracking-widest mb-4">Core
                                Técnico:</h4>
                            <ul className="space-y-4 font-medium text-brand-secondary text-sm">
                                <li className="flex items-center gap-3"><span className="text-brand-primary font-bold">+</span>
                                    Design Responsivo</li>
                                <li className="flex items-center gap-3"><span className="text-brand-primary font-bold">+</span>
                                    Botão Flutuante WhatsApp</li>
                                <li className="flex items-center gap-3"><span className="text-brand-primary font-bold">+</span>
                                    Formulário de Captura</li>
                            </ul>
                        </div>
                    </div>
                    <a href="https://wa.me/3499778403?text=Ol%C3%A1!%20Quero%20o%20plano%20B%C3%A1sico."
                        className="block w-full text-center border-2 border-brand-secondary text-brand-secondary font-bold py-4 rounded-xl hover:bg-brand-secondary hover:text-white transition-colors uppercase tracking-widest text-xs"
                        data-analytics-id="btn-assinar-plano-basico">
                        Iniciar Projeto Básico
                    </a>
                </div>

                {/* PLANO 2: PROFISSIONAL */}
                <div className="product-card bg-brand-surface border-2 border-brand-primary p-8 md:p-10 rounded-[2rem] flex flex-col justify-between shadow-floating relative hover:-translate-y-1 transition-transform"
                    data-product-id="plano-pro" data-product-name="Plano Profissional">
                    <div
                        className="absolute top-0 right-6 transform -translate-y-1/2 bg-brand-primary text-white text-[10px] font-bold uppercase tracking-widest py-1.5 px-4 rounded-full shadow-md">
                        Máquina de Vendas
                    </div>
                    <div>
                        <div className="text-brand-primary mb-4 font-mono text-sm font-bold">&lt;growth_engine /&gt;</div>
                        <h3 className="text-3xl font-extrabold text-brand-secondary mb-4">Landing Page Pro</h3>
                        <p className="text-brand-muted font-medium mb-10 text-base">Foco extremo em conversão. Estruturada
                            para campanhas de anúncios (Meta Ads e Google Ads).</p>

                        <div className="mb-8">
                            {/* Badge de Inclusão do Básico */}
                            <div
                                className="bg-blue-50 border border-blue-100 text-brand-primary font-bold text-sm px-4 py-2.5 rounded-xl mb-6 inline-flex items-center gap-2 shadow-sm w-full md:w-auto">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M5 13l4 4L19 7"></path>
                                </svg>
                                Inclui tudo do plano Básico, mais:
                            </div>

                            <h4 className="text-brand-primary font-mono text-xs font-bold uppercase tracking-widest mb-4">
                                Estrutura Linear:</h4>
                            <ul className="space-y-4 font-medium text-brand-secondary text-sm">
                                <li className="flex items-center gap-3">1. Hero com Promessa Forte</li>
                                <li className="flex items-center gap-3">2. Problema vs. Solução</li>
                                <li className="flex items-center gap-3">3. Vitrine de Serviços</li>
                                <li className="flex items-center gap-3">4. Prova Social (Depoimentos)</li>
                                <li className="flex items-center gap-3">5. Call To Action e FAQ</li>
                            </ul>
                        </div>
                        <div className="mb-10">
                            <h4 className="text-brand-primary font-mono text-xs font-bold uppercase tracking-widest mb-4">
                                Core Técnico:</h4>
                            <ul className="space-y-4 font-medium text-brand-secondary text-sm">
                                <li className="flex items-center gap-3"><span
                                        className="text-brand-primary font-extrabold">+</span> Copywriting Persuasivo</li>
                                <li className="flex items-center gap-3"><span
                                        className="text-brand-primary font-extrabold">+</span> Instalação de Pixel</li>
                                <li className="flex items-center gap-3"><span
                                        className="text-brand-primary font-extrabold">+</span> Otimização SEO</li>
                            </ul>
                        </div>
                    </div>
                    <a href="https://wa.me/3499778403?text=Ol%C3%A1!%20Quero%20o%20plano%20Profissional."
                        className="block w-full text-center bg-brand-primary text-white font-bold py-4 rounded-xl hover:bg-brand-primaryDark transition-colors uppercase tracking-widest text-xs shadow-lg shadow-blue-500/30"
                        data-analytics-id="btn-assinar-plano-pro">
                        Iniciar Projeto Pro
                    </a>
                </div>

                {/* PLANO 3: PREMIUM (Adaptado para o DS) */}
                <div className="product-card premium-border-wrap relative z-10 lg:transform lg:-translate-y-4"
                    data-product-id="plano-premium" data-product-name="Plano Premium">
                    <div className="premium-content p-8 md:p-10 flex flex-col justify-between">

                        {/* Topo: Ilustração Animada Exclusiva */}
                        <div className="relative w-full h-24 flex items-center justify-center mb-6">
                            <div className="absolute w-20 h-20 rounded-full border border-blue-200 animate-pulse-ring">
                            </div>
                            <svg className="animate-float-complex w-20 h-20" viewBox="0 0 100 100" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <defs>
                                    <linearGradient id="premiumGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                                        <stop offset="0%" stop-color="#2962FF"></stop>
                                        <stop offset="50%" stop-color="#60A5FA"></stop>
                                        <stop offset="100%" stop-color="#1E40AF"></stop>
                                    </linearGradient>
                                    <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                                        <feGaussianBlur stdDeviation="3" result="blur"></feGaussianBlur>
                                        <feComposite in="SourceGraphic" in2="blur" operator="over"></feComposite>
                                    </filter>
                                </defs>
                                <polygon points="50,5 90,27 90,72 50,95 10,72 10,27" stroke="url(#premiumGrad)"
                                    stroke-width="2" fill="rgba(41,98,255,0.05)" filter="url(#glow)"></polygon>
                                <polygon points="50,20 75,50 50,80 25,50" stroke="url(#premiumGrad)" stroke-width="3"
                                    fill="url(#premiumGrad)" fill-opacity="0.1" filter="url(#glow)"></polygon>
                                <circle cx="50" cy="50" r="8" fill="#2962FF" filter="url(#glow)"></circle>
                            </svg>
                        </div>

                        <div>
                            <div className="text-brand-primary mb-2 font-mono text-sm font-bold tracking-widest uppercase">
                                System.Core_</div>
                            <h3
                                className="text-3xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-blue-500">
                                Ecossistema Premium
                            </h3>
                            <p className="text-brand-muted font-medium mb-8 text-base">Para líderes de mercado. Site
                                institucional robusto ou One-Page complexa.</p>

                            <div className="mb-8">
                                {/* Badge de Inclusão do Pro */}
                                <div
                                    className="bg-brand-primary/10 border border-brand-primary/20 text-brand-primary font-bold text-sm px-4 py-2.5 rounded-xl mb-6 inline-flex items-center gap-2 shadow-sm w-full md:w-auto">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M5 13l4 4L19 7"></path>
                                    </svg>
                                    Inclui tudo do plano Pro, mais:
                                </div>

                                <h4
                                    className="text-brand-secondary font-mono text-xs font-bold uppercase tracking-widest mb-4">
                                    Estrutura Multi-Página:</h4>
                                <ul className="space-y-4 font-medium text-brand-secondary text-sm">
                                    <li className="flex items-center gap-3">
                                        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="url(#premiumGrad)"
                                            stroke-width="2">
                                            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                                            <polyline points="9 22 9 12 15 12 15 22"></polyline>
                                        </svg>
                                        Home Cinematográfica
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="url(#premiumGrad)"
                                            stroke-width="2">
                                            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                                            <circle cx="9" cy="7" r="4"></circle>
                                        </svg>
                                        Apresentação de Equipe
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="url(#premiumGrad)"
                                            stroke-width="2">
                                            <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
                                        </svg>
                                        Serviços Detalhados
                                    </li>
                                </ul>
                            </div>
                            <div className="mb-10">
                                <h4
                                    className="text-brand-secondary font-mono text-xs font-bold uppercase tracking-widest mb-4">
                                    Engenharia Avançada:</h4>
                                <ul className="space-y-4 font-medium text-brand-secondary text-sm">
                                    <li className="flex items-center gap-3">
                                        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="url(#premiumGrad)"
                                            stroke-width="2">
                                            <path
                                                d="M21 16V8a2 2 0 0 0-1-1.73l-7-4l-7 4A2 2 0 0 0 3 16v-8a2 2 0 0 0 1-1.73l7-4l7 4A2 2 0 0 0 21 8z">
                                            </path>
                                        </svg>
                                        Animações Exclusivas
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="url(#premiumGrad)"
                                            stroke-width="2">
                                            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z">
                                            </path>
                                        </svg>
                                        Integração de CRM / Automação
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <a href="https://wa.me/3499778403?text=Ol%C3%A1!%20Quero%20o%20Ecossistema%20Premium."
                            className="block w-full text-center bg-gradient-to-r from-brand-primary to-blue-500 text-white font-bold py-4 rounded-xl transition-all shadow-lg shadow-blue-500/30 uppercase tracking-widest text-xs hover:scale-[1.02]"
                            data-analytics-id="btn-assinar-plano-premium">
                            Falar com Dev. Sénior
                        </a>
                    </div>
                </div>

            </div>
        </div>
    </section>

    {/* 6.5. Hub de Tecnologia e SEO (Texto Longo para Visibilidade) */}
    <section className="py-32 px-6 bg-white border-b border-brand-border">
        <div className="max-w-[1400px] mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-20">
                <span className="text-brand-primary font-mono text-xs font-bold tracking-[0.2em] uppercase mb-4 block">
                    // Soluções Completas & Tecnologia
                </span>
                <h2 className="text-4xl md:text-6xl font-extrabold text-brand-secondary tracking-tighter mb-6 leading-tight">
                    Criação de Sites, Sistemas e Landing Pages de Alta Performance
                </h2>
                <p className="text-brand-muted font-medium text-lg leading-relaxed">
                    Explore o ecossistema digital da PageMaster. Projetamos, programamos e otimizamos plataformas robustas focadas em tráfego orgânico, velocidade extrema e conversão de clientes.
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                
                {/* Coluna 1: Sistemas e Delivery */}
                <div className="space-y-8 bg-brand-background border border-brand-border p-8 md:p-12 rounded-[2rem] shadow-soft">
                    <h3 className="text-2xl md:text-3xl font-extrabold text-brand-secondary flex items-center gap-3">
                        <span className="w-2.5 h-8 bg-brand-primary rounded-full"></span>
                        Desenvolvimento de Sistemas Web sob Medida
                    </h3>
                    
                    <p className="text-brand-muted font-medium text-base leading-relaxed">
                        Ir além de um site institucional padrão significa criar ferramentas interativas que automatizam processos do seu negócio. Na PageMaster, somos especialistas no desenvolvimento de sistemas web personalizados para empresas em Uberlândia e em todo o Brasil. Nossa engenharia de software constrói soluções robustas que operam na nuvem, garantindo acessibilidade e segurança de dados.
                    </p>

                    <div className="space-y-6 border-t border-brand-border pt-6">
                        <div>
                            <h4 className="text-lg font-bold text-brand-secondary mb-2">Cardápio Digital & Delivery</h4>
                            <p className="text-brand-muted font-medium text-sm leading-relaxed mb-3">
                                Desenvolvemos plataformas de pedidos completas e personalizadas para pizzarias, restaurantes e hamburguerias. Ao contrário de marketplaces tradicionais que cobram taxas abusivas, nosso sistema de delivery envia os pedidos organizados diretamente para o WhatsApp do seu estabelecimento, otimizando o fluxo de atendimento.
                            </p>
                            <a href="templates/Cardapio.html" target="_blank" className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-brand-primary hover:text-brand-primaryDark transition-colors">
                                Ver Template de Cardápio Digital &rarr;
                            </a>
                        </div>

                        <div>
                            <h4 className="text-lg font-bold text-brand-secondary mb-2">Sistemas de Agendamento Online</h4>
                            <p className="text-brand-muted font-medium text-sm leading-relaxed mb-3">
                                Ideal para profissionais liberais, esteticistas, médicos e salões de beleza. Criamos agendas automáticas que funcionam 24 horas por dia, 7 dias por semana. O seu cliente escolhe o serviço, profissional e horário livre de forma simples, reduzindo o tempo gasto em trocas de mensagens manuais.
                            </p>
                            <a href="templates/Agendamento.html" target="_blank" className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-brand-primary hover:text-brand-primaryDark transition-colors">
                                Testar Plataforma de Agendamento &rarr;
                            </a>
                        </div>

                        <div>
                            <h4 className="text-lg font-bold text-brand-secondary mb-2">Catálogos Interativos de Produtos</h4>
                            <p className="text-brand-muted font-medium text-sm leading-relaxed mb-3">
                                Vitrines virtuais modernas com integração de carrinho e envio de orçamentos para o WhatsApp. Perfeito para lojas de móveis, roupas, eletrônicos ou prestadores de serviços que precisam expor seus produtos de forma elegante e organizada sem a complexidade de um e-commerce tradicional.
                            </p>
                            <a href="templates/catalogo.html" target="_blank" className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-brand-primary hover:text-brand-primaryDark transition-colors">
                                Explorar Catálogo Virtual &rarr;
                            </a>
                        </div>
                        
                        <div>
                            <h4 className="text-lg font-bold text-brand-secondary mb-2">Simuladores Personalizados</h4>
                            <p className="text-brand-muted font-medium text-sm leading-relaxed mb-3">
                                Simuladores de custos, simuladores financeiros de investimentos ou orçamentos automáticos que aumentam o tempo de permanência no site, engajam os visitantes e captam leads extremamente qualificados de forma automatizada.
                            </p>
                            <a href="templates/simulador.html" target="_blank" className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-brand-primary hover:text-brand-primaryDark transition-colors">
                                Testar Simulador Interativo &rarr;
                            </a>
                        </div>
                    </div>
                </div>

                {/* Coluna 2: Criação de Sites e LP */}
                <div className="space-y-8 bg-brand-background border border-brand-border p-8 md:p-12 rounded-[2rem] shadow-soft">
                    <h3 className="text-2xl md:text-3xl font-extrabold text-brand-secondary flex items-center gap-3">
                        <span className="w-2.5 h-8 bg-brand-primary rounded-full"></span>
                        Criação de Sites Profissionais & Landing Pages
                    </h3>
                    
                    <p className="text-brand-muted font-medium text-base leading-relaxed">
                        Ter uma presença digital sólida é o pilar fundamental para atrair novos clientes através do tráfego orgânico e de campanhas pagas (como Google Ads e Meta Ads). Nós criamos sites institucionais cinematográficos e landing pages de conversão cirúrgica baseados em técnicas de copywriting persuasivo e otimização técnica de SEO.
                    </p>

                    <div className="space-y-6 border-t border-brand-border pt-6">
                        <div>
                            <h4 className="text-lg font-bold text-brand-secondary mb-2">Sites Institucionais para Profissionais de Saúde</h4>
                            <p className="text-brand-muted font-medium text-sm leading-relaxed mb-3">
                                Desenvolvemos portais de autoridade médica focados em transmitir confiança e profissionalismo. Temos estruturas otimizadas para clínicas de saúde, consultórios odontológicos, psicólogos clínicos, nutricionistas, clínicas veterinárias e estúdios de fisioterapia pediátrica.
                            </p>
                            <div className="flex flex-wrap gap-x-4 gap-y-2 mt-2">
                                <a href="templates/clinica.html" target="_blank" className="text-xs font-bold text-brand-primary hover:text-brand-primaryDark transition-colors">Clínica Geral</a>
                                <span className="text-brand-border">|</span>
                                <a href="templates/Dentistas.html" target="_blank" className="text-xs font-bold text-brand-primary hover:text-brand-primaryDark transition-colors">Odontologia</a>
                                <span className="text-brand-border">|</span>
                                <a href="templates/psicologo.html" target="_blank" className="text-xs font-bold text-brand-primary hover:text-brand-primaryDark transition-colors">Psicologia</a>
                                <span className="text-brand-border">|</span>
                                <a href="templates/nutricionista.html" target="_blank" className="text-xs font-bold text-brand-primary hover:text-brand-primaryDark transition-colors">Nutrição</a>
                                <span className="text-brand-border">|</span>
                                <a href="templates/Fisioped.html" target="_blank" className="text-xs font-bold text-brand-primary hover:text-brand-primaryDark transition-colors">Fisioterapia</a>
                                <span className="text-brand-border">|</span>
                                <a href="templates/vet.html" target="_blank" className="text-xs font-bold text-brand-primary hover:text-brand-primaryDark transition-colors">Veterinária</a>
                            </div>
                        </div>

                        <div>
                            <h4 className="text-lg font-bold text-brand-secondary mb-2">Landing Pages de Conversão para Advogados & Consultores</h4>
                            <p className="text-brand-muted font-medium text-sm leading-relaxed mb-3">
                                Páginas de captura focadas em converter cliques em contatos reais. Estruturas validadas para escritórios de advocacia que precisam atrair novos clientes para áreas específicas do direito, bem como consultores empresariais e assessores de investimento que buscam captar leads qualificados no mercado B2B.
                            </p>
                            <div className="flex flex-wrap gap-x-4 gap-y-2 mt-2">
                                <a href="templates/Direito.html" target="_blank" className="text-xs font-bold text-brand-primary hover:text-brand-primaryDark transition-colors">Advocacia</a>
                                <span className="text-brand-border">|</span>
                                <a href="templates/consultoria.html" target="_blank" className="text-xs font-bold text-brand-primary hover:text-brand-primaryDark transition-colors">Captação B2B</a>
                                <span className="text-brand-border">|</span>
                                <a href="templates/Investimento.html" target="_blank" className="text-xs font-bold text-brand-primary hover:text-brand-primaryDark transition-colors">Investimentos</a>
                            </div>
                        </div>

                        <div>
                            <h4 className="text-lg font-bold text-brand-secondary mb-2">O Laboratório de Engenharia Digital & Inovação</h4>
                            <p className="text-brand-muted font-medium text-sm leading-relaxed mb-3">
                                Para projetos que demandam alta complexidade técnica, como integrações avançadas de CRM (Salesforce, HubSpot, RD Station), automações de e-mail marketing, painéis de gestão personalizados e desenvolvimento de softwares sob medida. Nosso Laboratório é focado em transformar desafios de negócios em código limpo, escalável e de carregamento ultrarrápido.
                            </p>
                            <a href="/laboratorio" target="_blank" className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-brand-primary hover:text-brand-primaryDark transition-colors">
                                Acessar o Laboratório de Inovação &rarr;
                            </a>
                        </div>
                    </div>
                </div>

            </div>

            {/* Rodapé Técnico Otimizado para SEO */}
            <div className="mt-16 bg-brand-background border border-brand-border p-8 rounded-[2rem] text-center max-w-4xl mx-auto">
                <h4 className="text-xl font-bold text-brand-secondary mb-3">Por que escolher a PageMaster para Criar seu Site em Uberlândia?</h4>
                <p className="text-brand-muted font-medium text-sm leading-relaxed max-w-3xl mx-auto mb-4">
                    Nossa metodologia une design UI/UX de alto padrão, velocidade otimizada medida no Google PageSpeed Insights, segurança de protocolo HTTPS e códigos limpos desenvolvidos em HTML, Javascript e CSS. Não dependemos de construtores de sites lentos (como WordPress com Elementor ou Wix), garantindo que o seu site seja lido perfeitamente pelos robôs do Google e ranqueie no topo das pesquisas locais e nacionais.
                </p>
                <div className="flex flex-wrap justify-center gap-6 text-xs font-mono font-bold text-brand-primary">
                    <span>#CriaçãoDeSites</span>
                    <span>#DesenvolvimentoDeSistemas</span>
                    <span>#LandingPagesUberlândia</span>
                    <span>#SEOEspecializado</span>
                    <span>#ProgramaçãoCustomizada</span>
                </div>
            </div>
        </div>
    </section>

    {/* 7. FAQ */}
    <section className="py-40 px-6 max-w-[1000px] mx-auto">
        <h2 className="text-3xl md:text-5xl font-extrabold mb-16 tracking-tighter text-center text-brand-secondary">Clareza
            Absoluta.</h2>

        <div className="space-y-4">
            <details
                className="group bg-brand-surface rounded-2xl cursor-pointer border border-brand-border shadow-sm hover:border-brand-primary/50 hover:shadow-soft transition-all">
                <summary className="flex justify-between items-center p-8 font-bold text-xl text-brand-secondary"
                    data-analytics-id="faq-pergunta-mensalidade">
                    Existem mensalidades para a criação do site?
                    <span
                        className="text-brand-primary group-open:rotate-45 transition-transform text-3xl font-light">+</span>
                </summary>
                <div
                    className="px-8 pb-8 text-brand-muted font-medium text-lg leading-relaxed border-t border-brand-border pt-6 mt-2">
                    Nós construímos o ativo e ele é 100% seu. O único custo anual externo (padrão em qualquer site) será
                    com a sua plataforma de alojamento e registo do domínio.
                </div>
            </details>

            <details
                className="group bg-brand-surface rounded-2xl cursor-pointer border border-brand-border shadow-sm hover:border-brand-primary/50 hover:shadow-soft transition-all">
                <summary className="flex justify-between items-center p-8 font-bold text-xl text-brand-secondary"
                    data-analytics-id="faq-pergunta-prazo">
                    Qual é a estimativa de entrega?
                    <span
                        className="text-brand-primary group-open:rotate-45 transition-transform text-3xl font-light">+</span>
                </summary>
                <div
                    className="px-8 pb-8 text-brand-muted font-medium text-lg leading-relaxed border-t border-brand-border pt-6 mt-2">
                    Projetos standard demoram entre 3 a 5 dias. Soluções de Ecossistema Premium requerem um planeamento
                    estrutural e podem levar de 7 a 14 dias úteis, garantindo perfeição.
                </div>
            </details>
        </div>
    </section>

    {/* 8. Contato / Footer */}
    <section id="contato"
        className="bg-white text-brand-secondary py-32 px-6 rounded-t-[3rem] relative z-20 border-t border-brand-border shadow-[0_-20px_40px_-15px_rgba(0,0,0,0.05)]">
        <div className="max-w-[1400px] mx-auto grid lg:grid-cols-2 gap-20 items-center">

            <div>
                <h2
                    className="text-[10vw] lg:text-[7rem] font-extrabold leading-[0.8] tracking-tighter mb-10 text-brand-secondary">
                    LET'S<br />TALK.
                </h2>
                <p className="text-2xl font-medium text-brand-muted max-w-lg mb-10">
                    Preencha o formulário para agendar uma análise estratégica da sua presença digital em Uberlândia ou
                    remotamente.
                </p>
                <div className="flex gap-6">
                    <a href="https://wa.me/3499778403"
                        className="w-14 h-14 rounded-full bg-brand-primary text-white flex items-center justify-center hover:bg-brand-primaryDark hover:scale-110 transition-all shadow-lg shadow-blue-500/30"
                        data-analytics-id="btn-social-whatsapp">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path
                                d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z">
                            </path>
                        </svg>
                    </a>
                    <a href="https://www.instagram.com/pagemaster26/"
                        className="w-14 h-14 rounded-full border-2 border-brand-secondary text-brand-secondary flex items-center justify-center hover:bg-brand-secondary hover:text-white transition-colors shadow-sm"
                        data-analytics-id="btn-social-instagram">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path fill-rule="evenodd"
                                d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 0 1 1.772 1.153 4.902 4.902 0 0 1 1.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 0 1-1.153 1.772 4.902 4.902 0 0 1-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 0 1-1.772-1.153 4.902 4.902 0 0 1-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 0 1 1.153-1.772A4.902 4.902 0 0 1 5.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 0 0-.748-1.15 3.098 3.098 0 0 0-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 1 1 0 10.27 5.135 5.135 0 0 1 0-10.27zm0 1.802a3.333 3.333 0 1 0 0 6.666 3.333 3.333 0 0 0 0-6.666zm5.338-3.205a1.2 1.2 0 1 1 0 2.4 1.2 1.2 0 0 1 0-2.4z"
                                clip-rule="evenodd"></path>
                        </svg>
                    </a>
                </div>
            </div>

            {/* Formulário no novo Design System */}
            <div className="bg-brand-background border border-brand-border p-10 md:p-14 rounded-[2rem] shadow-soft">
                <form id="contactForm" onSubmit={handleSubmit} className="space-y-8">
                    <div>
                        <input type="text" id="form-nome" value={formData.nome} onChange={(e) => setFormData({...formData, nome: e.target.value})} placeholder="Como se chama?" required
                            className="w-full bg-transparent border-b-2 border-brand-border py-4 text-xl focus:outline-none focus:border-brand-primary transition-colors placeholder-brand-muted text-brand-secondary font-medium" />
                    </div>
                    <div>
                        <select id="form-area" value={formData.area} onChange={(e) => setFormData({...formData, area: e.target.value})} required
                            className="w-full bg-transparent border-b-2 border-brand-border py-4 text-xl focus:outline-none focus:border-brand-primary transition-colors text-brand-muted focus:text-brand-secondary font-medium appearance-none">
                            <option value="" disabled >Qual é a sua área de atuação?</option>
                            <option value="Clínica / Saúde">Clínica / Saúde</option>
                            <option value="Restauração / Delivery">Restauração / Delivery</option>
                            <option value="Serviços / Consultoria">Serviços / Consultoria</option>
                            <option value="Outro Setor">Outro Setor</option>
                        </select>
                    </div>
                    <div>
                        <textarea id="form-ideia" value={formData.ideia} onChange={(e) => setFormData({...formData, ideia: e.target.value})} placeholder="Como podemos ajudar? Qual a sua ideia de sistema?"
                            required rows="3"
                            className="w-full bg-transparent border-b-2 border-brand-border py-4 text-xl focus:outline-none focus:border-brand-primary transition-colors placeholder-brand-muted text-brand-secondary font-medium resize-none"></textarea>
                    </div>
                    <button type="submit"
                        className="w-full bg-brand-primary text-white text-lg font-bold uppercase tracking-widest py-6 rounded-full hover:bg-brand-primaryDark transition-colors mt-8 shadow-lg shadow-blue-500/30"
                        data-analytics-id="btn-enviar-formulario-contato">
                        Solicitar Análise de Projeto
                    </button>
                </form>
            </div>
        </div>

        <div
            className="max-w-[1400px] mx-auto mt-32 pt-10 border-t border-brand-border flex flex-col md:flex-row justify-between text-sm font-bold text-brand-muted uppercase tracking-widest gap-4">
            <p>© 2026 PageMaster. Sediados em Uberlândia.</p>
            <p>Engenharia Web de Alto Padrão.</p>
        </div>
    </section>
    </>
  );
}
