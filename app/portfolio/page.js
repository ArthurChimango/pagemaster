'use client';

import { useState } from 'react';
import Link from 'next/link';

const portfolioItems = [
    {
        id: 1,
        title: "Carlos Alberto Arquitetura",
        category: "b2b",
        categoryLabel: "Site Institucional — Arquitetura",
        badge: "Cliente Real",
        image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
        link: "https://carlosalbertoarquitetura.com.br",
        description: "Site institucional desenvolvido para apresentar o portfólio e os projetos do escritório de arquitetura."
    },
    {
        id: 2,
        title: "CR Buffet",
        category: "gastronomia",
        categoryLabel: "Institucional & Cardápio Online",
        badge: "Cliente Real",
        image: "https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=800&q=80",
        link: "https://crbuffet.com.br",
        description: "Site institucional completo sobre o buffet integrado com cardápio online interativo."
    },
    {
        id: 3,
        title: "Ecap Jr",
        category: "b2b",
        categoryLabel: "Landing Page Institucional",
        badge: "Cliente Real",
        image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80",
        link: "https://ecapjr.com.br",
        description: "Landing page institucional desenvolvida para a Empresa Júnior Ecap Jr."
    },
    {
        id: 4,
        title: "Catálogo Interativo — Casa Pronta Udi",
        category: "varejo",
        categoryLabel: "Lojas & Varejo (Casa Pronta Udi)",
        badge: "Casa Pronta Udi",
        image: "https://www.paulomauro.com.br/wp-content/uploads/2023/02/paulomauro-blog-capa-como-economizar-em-moveis-planejados.jpg",
        link: "templates/catalogo.html",
        description: "Catálogo digital interativo desenvolvido sob medida para a empresa Casa Pronta Udi."
    },
    {
        id: 5,
        title: "Agenda Automática 24h",
        category: "saude",
        categoryLabel: "Sistema de Agendamento",
        badge: "Sistema Web",
        image: "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&w=800&q=80",
        link: "templates/Agendamento.html",
        description: "Sistema de agendamento online automático 24h para serviços e consultas."
    },
    {
        id: 6,
        title: "Cardápio Digital & Delivery",
        category: "gastronomia",
        categoryLabel: "Gastronomia & Delivery",
        badge: "Cardápio Online",
        image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80",
        link: "templates/Cardapio.html",
        description: "Plataforma de cardápio digital interativo integrado ao WhatsApp sem comissões."
    }
];

export default function Portfolio() {
    const [formData, setFormData] = useState({ nome: '', modelo: '', ideia: '' });
    const [selectedCategory, setSelectedCategory] = useState("all");
    const [searchQuery, setSearchQuery] = useState("");

    const categories = [
        { key: "all", label: "Todos" },
        { key: "cases", label: "Clientes Reais" },
        { key: "gastronomia", label: "Gastronomia" },
        { key: "b2b", label: "B2B & Arquitetura" },
        { key: "varejo", label: "Varejo & Catálogos" },
        { key: "saude", label: "Agendamento" }
    ];

    const filteredItems = portfolioItems.filter(item => {
        const matchesCategory = selectedCategory === "all" 
            || item.category === selectedCategory
            || (selectedCategory === "cases" && (item.badge === "Cliente Real" || item.badge === "Casa Pronta Udi"));
        const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.categoryLabel.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.description.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        const mensagem = `Olá PageMaster! O meu nome é *${formData.nome}* e vi os vossos cases.\n\n*Modelo de interesse:* ${formData.modelo}\n*Como adaptar:* ${formData.ideia}\n\nGostaria de solicitar um orçamento para o meu negócio.`;
        const encoded = encodeURIComponent(mensagem);
        window.open(`https://wa.me/553499778403?text=${encoded}`, '_blank');
    };

    return (
        <>
            <nav
                className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 w-[90%] max-w-2xl bg-white/90 backdrop-blur-xl border border-brand-border rounded-full px-6 py-3 flex justify-between items-center shadow-soft transition-all">
                <div className="font-extrabold text-xl tracking-tighter text-brand-secondary cursor-pointer"
                    onClick={() => window.location.href = "/"}>
                    <span className="text-brand-primary">P</span>M.
                </div>

                <div className="hidden md:flex items-center gap-8">
                    <a href="/"
                        className="text-xs font-bold uppercase tracking-widest text-brand-muted hover:text-brand-primary transition-colors flex items-center gap-2">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
                        </svg>
                        Voltar ao Site
                    </a>
                </div>

                <a href="#contato"
                    className="bg-brand-primary text-white text-xs font-bold uppercase tracking-widest px-6 py-2.5 rounded-full hover:bg-brand-primaryDark hover:scale-105 transition-all shadow-lg shadow-blue-500/30">
                    Falar no WhatsApp
                </a>
            </nav>

            {/* 2. Hero Section (Portfólio Premium) */}
            <section
                className="relative min-h-[60vh] flex flex-col justify-center items-center px-6 pt-40 pb-24 overflow-hidden bg-brand-primary rounded-b-[3rem] shadow-2xl">

                {/* Grid Pattern (Fundo Tech) */}
                <div className="absolute inset-0 z-0 bg-grid-pattern opacity-40 rounded-b-[3rem]"></div>

                <div className="relative z-10 text-center w-full max-w-[1400px] mx-auto">
                    {/* Logo */}
                    <img src="assets/logo.png" alt="PageMaster Logo"
                        className="h-12 md:h-16 mx-auto mb-8 animate-pulse object-contain brightness-0 invert drop-shadow-md" />

                    <h1 className="text-[12vw] md:text-[8vw] font-extrabold leading-[0.85] text-white mb-8 tracking-tight">
                        PORTFÓLIO<br />
                        <span className="text-blue-200">DE CLIENTES.</span><br />
                        CASES DE<br />
                        <span className="text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.4)]">SUCESSO.</span>
                    </h1>

                    <p
                        className="text-lg md:text-2xl text-blue-50 font-medium max-w-2xl mx-auto leading-relaxed mt-12 drop-shadow-md">
                        Conheça os projetos reais desenvolvidos para nossos clientes e testadores. Clique para navegar diretamente no site ou na aplicação.
                    </p>
                </div>
            </section>

            {/* 3. Galeria Cinematográfica */}
            <section className="py-20 bg-brand-background">
                <div className="max-w-[1400px] mx-auto px-6">

                    {/* Filtros e Busca */}
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-16">
                        {/* Abas de Categorias */}
                        <div className="flex flex-wrap gap-2">
                            {categories.map((cat) => (
                                <button
                                    key={cat.key}
                                    type="button"
                                    onClick={() => setSelectedCategory(cat.key)}
                                    className={`px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 border ${selectedCategory === cat.key
                                            ? 'bg-brand-primary text-white border-brand-primary shadow-lg shadow-blue-500/20'
                                            : 'bg-white text-brand-muted border-brand-border hover:bg-gray-50'
                                        }`}
                                >
                                    {cat.label}
                                </button>
                            ))}
                        </div>

                        {/* Input de Busca */}
                        <div className="relative w-full md:max-w-xs">
                            <input
                                type="text"
                                placeholder="Buscar cliente ou projeto..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full bg-white border border-brand-border rounded-full py-3 pl-12 pr-6 text-sm focus:outline-none focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 transition-all text-brand-secondary font-medium shadow-sm"
                            />
                            <svg className="w-5 h-5 text-brand-muted absolute left-4 top-1/2 transform -translate-y-1/2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </div>
                    </div>

                    {/* Lista de Modelos */}
                    {filteredItems.length === 0 ? (
                        <div className="text-center py-20 bg-white border border-brand-border rounded-[2rem] shadow-soft">
                            <svg className="w-16 h-16 text-brand-muted mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <h3 className="text-xl font-bold text-brand-secondary mb-2">Nenhum projeto encontrado</h3>
                            <p className="text-sm text-brand-muted">Tente buscar por outros termos ou mude a categoria.</p>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
                            {filteredItems.map((item) => (
                                <a
                                    key={item.id}
                                    href={item.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group block relative overflow-hidden rounded-[2rem] aspect-[4/5] bg-brand-surface border border-brand-border hover:border-brand-primary/50 hover:shadow-floating shadow-soft transition-all"
                                >
                                    {item.badge && (
                                        <div className="absolute top-6 right-6 z-20 pointer-events-none">
                                            <span className="bg-brand-primary text-white text-[10px] uppercase font-bold px-4 py-2 rounded-full shadow-md tracking-widest">
                                                {item.badge}
                                            </span>
                                        </div>
                                    )}
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="w-full h-full object-cover img-reveal absolute inset-0"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-brand-secondary via-brand-secondary/70 to-transparent opacity-90 group-hover:opacity-95 transition-opacity" />
                                    <div className="absolute bottom-0 left-0 p-8 w-full z-10">
                                        <p className="text-blue-300 font-mono text-xs font-bold uppercase tracking-widest mb-2">
                                            {item.categoryLabel}
                                        </p>
                                        <h3 className="text-2xl font-extrabold text-white mb-2 leading-tight">
                                            {item.title}
                                        </h3>
                                        <p className="text-xs text-blue-100 font-medium mb-4 line-clamp-2 leading-relaxed">
                                            {item.description}
                                        </p>
                                        <div className="text-white text-xs font-bold uppercase tracking-wider flex items-center gap-2 text-brand-primary group-hover:translate-x-1 transition-transform">
                                            Acessar Projeto
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                            </svg>
                                        </div>
                                    </div>
                                </a>
                            ))}
                        </div>
                    )}
                </div>
            </section>

            {/* 4. Contato / Footer Massivo */}
            <section id="contato"
                className="bg-white text-brand-secondary py-32 px-6 rounded-t-[3rem] relative z-20 border-t border-brand-border shadow-[0_-20px_40px_-15px_rgba(0,0,0,0.05)]">
                <div className="max-w-[1400px] mx-auto grid lg:grid-cols-2 gap-20 items-center">

                    <div>
                        <h2
                            className="text-[10vw] lg:text-[7rem] font-extrabold leading-[0.8] tracking-tighter mb-10 text-brand-secondary">
                            LET'S<br />TALK.
                        </h2>
                        <p className="text-2xl font-medium text-brand-muted max-w-lg mb-10">
                            Gostou de algum dos nossos projetos? Preencha o formulário para criarmos a solução perfeita 100% personalizada para a sua marca.
                        </p>
                        <div className="flex gap-6">
                            <a href="https://wa.me/553499778403"
                                className="w-14 h-14 rounded-full bg-brand-primary text-white flex items-center justify-center hover:bg-brand-primaryDark hover:scale-110 transition-all shadow-lg shadow-blue-500/30">
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path
                                        d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
                                </svg>
                            </a>
                            <a href="https://www.instagram.com/pagemaster26/"
                                className="w-14 h-14 rounded-full border-2 border-brand-secondary text-brand-secondary flex items-center justify-center hover:bg-brand-secondary hover:text-white transition-colors shadow-sm">
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path fillRule="evenodd"
                                        d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 0 1 1.772 1.153 4.902 4.902 0 0 1 1.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 0 1-1.153 1.772 4.902 4.902 0 0 1-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 0 1-1.772-1.153 4.902 4.902 0 0 1-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 0 1 1.153-1.772A4.902 4.902 0 0 1 5.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 0 0-.748-1.15 3.098 3.098 0 0 0-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 1 1 0 10.27 5.135 5.135 0 0 1 0-10.27zm0 1.802a3.333 3.333 0 1 0 0 6.666 3.333 3.333 0 0 0 0-6.666zm5.338-3.205a1.2 1.2 0 1 1 0 2.4 1.2 1.2 0 0 1 0-2.4z"
                                        clipRule="evenodd" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Formulário */}
                    <div className="bg-brand-background border border-brand-border p-10 md:p-14 rounded-[2rem] shadow-soft">
                        <form id="contactFormPortfolio" onSubmit={handleSubmit} className="space-y-8">
                            <div>
                                <input type="text" id="form-nome" value={formData.nome} onChange={(e) => setFormData({ ...formData, nome: e.target.value })} placeholder="Como se chama?" required
                                    className="w-full bg-transparent border-b-2 border-brand-border py-4 text-xl focus:outline-none focus:border-brand-primary transition-colors placeholder-brand-muted text-brand-secondary font-medium" />
                            </div>
                            <div>
                                <select id="form-modelo" value={formData.modelo} onChange={(e) => setFormData({ ...formData, modelo: e.target.value })} required
                                    className="w-full bg-transparent border-b-2 border-brand-border py-4 text-xl focus:outline-none focus:border-brand-primary transition-colors text-brand-muted focus:text-brand-secondary font-medium appearance-none">
                                    <option value="" disabled>Qual o projeto de interesse?</option>
                                    <option value="Site Institucional">Site Institucional</option>
                                    <option value="Landing Page">Landing Page</option>
                                    <option value="Cardápio Digital / Delivery">Cardápio Digital / Delivery</option>
                                    <option value="Catálogo Interativo">Catálogo Interativo</option>
                                    <option value="Sistema de Agendamento">Sistema de Agendamento</option>
                                </select>
                            </div>
                            <div>
                                <textarea id="form-ideia" value={formData.ideia} onChange={(e) => setFormData({ ...formData, ideia: e.target.value })} placeholder="Como podemos ajudar a sua empresa?" required
                                    rows="3"
                                    className="w-full bg-transparent border-b-2 border-brand-border py-4 text-xl focus:outline-none focus:border-brand-primary transition-colors placeholder-brand-muted text-brand-secondary font-medium resize-none"></textarea>
                            </div>
                            <button type="submit"
                                className="w-full bg-brand-primary text-white text-lg font-bold uppercase tracking-widest py-6 rounded-full hover:bg-brand-primaryDark transition-colors mt-8 shadow-lg shadow-blue-500/30">
                                Solicitar Orçamento Personalizado
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
