'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Laboratorio() {
  const [isManualOpen, setIsManualOpen] = useState(false);
  const [colors, setColors] = useState({
    primaria: '#2962FF',
    secundaria: '#0F172A',
    base: '#F8FAFC'
  });
  const [simState, setSimState] = useState({
    fonte: 'font-sans',
    forma: 'pill',
    hero: 'central',
    animacao: 'static'
  });
  const [clientData, setClientData] = useState({ nome: '', empresa: '' });

  const toggleManual = () => {
    setIsManualOpen(!isManualOpen);
    if (!isManualOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  };

  const handleColorChange = (key, value) => {
    setColors({ ...colors, [key]: value });
  };

  const getBtnClass = (baseClass) => {
    let shapeClass = '';
    if (simState.forma === 'pill') shapeClass = 'rounded-full';
    else if (simState.forma === 'standard') shapeClass = 'rounded-xl';
    else if (simState.forma === 'square') shapeClass = 'rounded-none';
    
    if (simState.forma === 'ghost') {
      return `${baseClass} border-2 bg-transparent text-brand-primary border-brand-primary`;
    }
    return `${baseClass} ${shapeClass}`;
  };

  const getAnimClass = () => {
    if (simState.animacao === 'float') return 'sim-animate-float';
    if (simState.animacao === 'fade') return 'animate-pulse'; // Simple Tailwind placeholder for fade
    return '';
  };

  const handleSendProject = (e) => {
    e.preventDefault();
    if (!clientData.nome || !clientData.empresa) {
      alert('Por favor, preencha o seu nome e empresa.');
      return;
    }
    const configs = `*PLANTA DO PROJETO - PAGEMASTER*\n\n*Cliente:* ${clientData.nome}\n*Empresa:* ${clientData.empresa}\n\n*Design System:*\n- Cor Primária: ${colors.primaria}\n- Cor Secundária: ${colors.secundaria}\n- Cor de Base: ${colors.base}\n\n*Arquitetura:*\n- Tipografia: ${simState.fonte}\n- Formato de Botão: ${simState.forma}\n- Layout Hero: ${simState.hero}\n- Animações: ${simState.animacao}\n\nGostaria de iniciar o desenvolvimento com esta planta.`;
    const encoded = encodeURIComponent(configs);
    window.open(`https://wa.me/553499778403?text=${encoded}`, '_blank');
  };

  const simStyle = {
    '--pri-color': colors.primaria,
    '--sec-color': colors.secundaria,
    '--bg-color': colors.base,
    '--text-color': '#64748B',
    backgroundColor: 'var(--bg-color)',
  };

  return (
    <>
      <nav
        className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 w-[90%] max-w-2xl bg-white/90 backdrop-blur-xl border border-brand-border rounded-full px-6 py-3 flex justify-between items-center shadow-soft transition-all">
        <div className="font-extrabold text-xl tracking-tighter text-brand-secondary cursor-pointer"
            onClick={() => window.location.href = "/"}>
            <span className="text-brand-primary">P</span>M.
        </div>


        <a href="/"
            className="text-xs font-bold uppercase tracking-widest text-brand-muted hover:text-brand-primary transition-colors flex items-center gap-2">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18">
                </path>
            </svg>
            Voltar
        </a>


        <button type="button" onClick={toggleManual}
            className="bg-brand-primary text-white text-xs font-bold uppercase tracking-widest px-6 py-2.5 rounded-full hover:bg-brand-primaryDark hover:scale-105 transition-all shadow-lg shadow-blue-500/30 flex items-center gap-2">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253">
                </path>
            </svg>
            Manual
        </button>
    </nav>

    {/* 2. Hero Header */}
    <section
        className="relative pt-40 pb-16 px-6 flex flex-col items-center overflow-visible bg-brand-primary rounded-b-[3rem] shadow-2xl">
        <div className="absolute inset-0 z-0 bg-grid-pattern opacity-30 rounded-b-[3rem]"></div>

        <div className="relative z-10 text-center w-full max-w-4xl mx-auto">
            <span className="text-blue-200 font-mono text-sm font-bold tracking-[0.2em] uppercase mb-4 block">// Laboratório
                de Projetos</span>
            <h1 className="text-4xl md:text-5xl lg:text-[4rem] font-extrabold leading-[1.1] text-white mb-6 tracking-tight">
                Simulador <span className="text-blue-200">Interativo.</span>
            </h1>
            <p className="text-lg text-blue-50 font-medium max-w-2xl mx-auto leading-relaxed">
                As suas escolhas à esquerda são aplicadas instantaneamente no ecrã da direita.
            </p>
        </div>
    </section>

    {/* 3. Layout Principal Dividido */}
    <section className="relative z-10 py-12 px-6 max-w-[1400px] mx-auto flex flex-col lg:flex-row gap-10">

        {/* ========================================== */}
        {/* COLUNA ESQUERDA: OPÇÕES DE CONFIGURAÇÃO    */}
        {/* ========================================== */}
        <div className="lg:w-7/12 space-y-20 pb-20">

            {/* PASSO 1: CORES */}
            <div>
                <div className="flex items-center gap-4 mb-8 border-b border-brand-border pb-4">
                    <div
                        className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-brand-primary font-bold font-mono">
                        1</div>
                    <h2 className="text-2xl font-bold text-brand-secondary">Design System: Cores</h2>
                </div>

                <div
                    className="grid grid-cols-1 md:grid-cols-3 gap-6 bg-brand-surface border border-brand-border p-8 rounded-[2rem] shadow-sm">

                    <div className="flex flex-col items-center text-center gap-3">
                        <div className="color-picker-wrapper w-16 h-16 rounded-full shadow-md border-4 border-white"
                            id="preview-primaria" style={{backgroundColor: colors.primaria}}>
                            <input type="color" id="cor-primaria" value={colors.primaria} onChange={(e) => handleColorChange("primaria", e.target.value)} />
                        </div>
                        <div>
                            <h4 className="text-brand-secondary font-bold text-sm">Primária (Botão)</h4>
                            <span className="text-brand-primary font-mono text-xs uppercase"
                                id="hex-primaria">{colors.primaria.toUpperCase()}</span>
                        </div>
                    </div>

                    <div
                        className="flex flex-col items-center text-center gap-3 border-l border-r border-brand-border px-4">
                        <div className="color-picker-wrapper w-16 h-16 rounded-full shadow-md border-4 border-white"
                            id="preview-secundaria" style={{backgroundColor: colors.secundaria}}>
                            <input type="color" id="cor-secundaria" value={colors.secundaria} onChange={(e) => handleColorChange("secundaria", e.target.value)} />
                        </div>
                        <div>
                            <h4 className="text-brand-secondary font-bold text-sm">Secundária (Título)</h4>
                            <span className="text-brand-primary font-mono text-xs uppercase"
                                id="hex-secundaria">{colors.secundaria.toUpperCase()}</span>
                        </div>
                    </div>

                    <div className="flex flex-col items-center text-center gap-3">
                        <div className="color-picker-wrapper w-16 h-16 rounded-full shadow-md border-4 border-gray-200"
                            id="preview-terciaria" style={{backgroundColor: colors.base}}>
                            <input type="color" id="cor-terciaria" value={colors.base} onChange={(e) => handleColorChange("base", e.target.value)} />
                        </div>
                        <div>
                            <h4 className="text-brand-secondary font-bold text-sm">Base (Fundo)</h4>
                            <span className="text-brand-primary font-mono text-xs uppercase"
                                id="hex-terciaria">{colors.base.toUpperCase()}</span>
                        </div>
                    </div>

                </div>
            </div>

            {/* PASSO 2: TIPOGRAFIA */}
            <div>
                <div className="flex items-center gap-4 mb-8 border-b border-brand-border pb-4">
                    <div
                        className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-brand-primary font-bold font-mono">
                        2</div>
                    <h2 className="text-2xl font-bold text-brand-secondary">Identidade Tipográfica</h2>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="option-card bg-brand-surface border border-brand-border rounded-2xl p-4 text-center shadow-sm"
                        className={`option-card bg-brand-surface border rounded-2xl p-4 text-center shadow-sm relative ${simState.fonte === "font-sans" ? "border-brand-primary ring-2 ring-brand-primary" : "border-brand-border"}`} onClick={() => setSimState({...simState, fonte: "font-sans"})}>
                        <div className={`check-icon absolute top-2 right-2 text-brand-primary`}><svg className="w-4 h-4"
                                fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M5 13l4 4L19 7"></path>
                            </svg></div>
                        <h3 className="text-3xl font-extrabold text-brand-secondary mb-1 font-sans">Aa</h3>
                        <p className="text-xs font-bold text-brand-primary font-sans">Moderna</p>
                    </div>
                    <div className="option-card bg-brand-surface border border-brand-border rounded-2xl p-4 text-center shadow-sm"
                        className={`option-card bg-brand-surface border rounded-2xl p-4 text-center shadow-sm relative ${simState.fonte === "font-serif" ? "border-brand-primary ring-2 ring-brand-primary" : "border-brand-border"}`} onClick={() => setSimState({...simState, fonte: "font-serif"})}>
                        <div className={`check-icon absolute top-2 right-2 text-brand-primary`}><svg className="w-4 h-4"
                                fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M5 13l4 4L19 7"></path>
                            </svg></div>
                        <h3 className="text-3xl font-bold text-brand-secondary mb-1 font-serif">Aa</h3>
                        <p className="text-xs font-bold text-brand-primary font-serif">Clássica</p>
                    </div>
                    <div className="option-card bg-brand-surface border border-brand-border rounded-2xl p-4 text-center shadow-sm"
                        className={`option-card bg-brand-surface border rounded-2xl p-4 text-center shadow-sm relative ${simState.fonte === "font-outfit" ? "border-brand-primary ring-2 ring-brand-primary" : "border-brand-border"}`} onClick={() => setSimState({...simState, fonte: "font-outfit"})}>
                        <div className={`check-icon absolute top-2 right-2 text-brand-primary`}><svg className="w-4 h-4"
                                fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M5 13l4 4L19 7"></path>
                            </svg></div>
                        <h3 className="text-3xl font-bold text-brand-secondary mb-1 font-outfit">Aa</h3>
                        <p className="text-xs font-bold text-brand-primary font-outfit">Amigável</p>
                    </div>
                    <div className="option-card bg-brand-surface border border-brand-border rounded-2xl p-4 text-center shadow-sm"
                        className={`option-card bg-brand-surface border rounded-2xl p-4 text-center shadow-sm relative ${simState.fonte === "font-bebas" ? "border-brand-primary ring-2 ring-brand-primary" : "border-brand-border"}`} onClick={() => setSimState({...simState, fonte: "font-bebas"})}>
                        <div className={`check-icon absolute top-2 right-2 text-brand-primary`}><svg className="w-4 h-4"
                                fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M5 13l4 4L19 7"></path>
                            </svg></div>
                        <h3 className="text-4xl text-brand-secondary mb-1 font-bebas leading-none">AA</h3>
                        <p className="text-xs font-bold text-brand-primary font-bebas tracking-widest mt-1">Impacto</p>
                    </div>
                </div>
            </div>

            {/* PASSO 3: FORMAS */}
            <div>
                <div className="flex items-center gap-4 mb-8 border-b border-brand-border pb-4">
                    <div
                        className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-brand-primary font-bold font-mono">
                        3</div>
                    <h2 className="text-2xl font-bold text-brand-secondary">Geometria (Botões/Cards)</h2>
                </div>

                <div className="grid grid-cols-2 gap-6">
                    <div className="option-card bg-brand-surface border border-brand-border rounded-2xl p-5 relative shadow-sm"
                        className={`option-card bg-brand-surface border rounded-2xl p-5 relative shadow-sm ${simState.forma === "pill" ? "border-brand-primary ring-2 ring-brand-primary" : "border-brand-border"}`} onClick={() => setSimState({...simState, forma: "pill"})}>
                        <div className={`check-icon absolute top-3 right-3 text-brand-primary`}><svg className="w-5 h-5"
                                fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M5 13l4 4L19 7"></path>
                            </svg></div>
                        <div className="w-full h-10 bg-blue-100 rounded-full mb-3"></div>
                        <h3 className="text-sm font-bold text-brand-secondary">Pílula (Arredondado)</h3>
                    </div>
                    <div className="option-card bg-brand-surface border border-brand-border rounded-2xl p-5 relative shadow-sm"
                        className={`option-card bg-brand-surface border rounded-2xl p-5 relative shadow-sm ${simState.forma === "standard" ? "border-brand-primary ring-2 ring-brand-primary" : "border-brand-border"}`} onClick={() => setSimState({...simState, forma: "standard"})}>
                        <div className={`check-icon absolute top-3 right-3 text-brand-primary`}><svg className="w-5 h-5"
                                fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M5 13l4 4L19 7"></path>
                            </svg></div>
                        <div className="w-full h-10 bg-blue-100 rounded-xl mb-3"></div>
                        <h3 className="text-sm font-bold text-brand-secondary">Standard (Curvo)</h3>
                    </div>
                    <div className="option-card bg-brand-surface border border-brand-border rounded-2xl p-5 relative shadow-sm"
                        className={`option-card bg-brand-surface border rounded-2xl p-5 relative shadow-sm ${simState.forma === "square" ? "border-brand-primary ring-2 ring-brand-primary" : "border-brand-border"}`} onClick={() => setSimState({...simState, forma: "square"})}>
                        <div className={`check-icon absolute top-3 right-3 text-brand-primary`}><svg className="w-5 h-5"
                                fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M5 13l4 4L19 7"></path>
                            </svg></div>
                        <div className="w-full h-10 bg-blue-100 rounded-none mb-3"></div>
                        <h3 className="text-sm font-bold text-brand-secondary">Reto (Bruto)</h3>
                    </div>
                    <div className="option-card bg-brand-surface border border-brand-border rounded-2xl p-5 relative shadow-sm"
                        className={`option-card bg-brand-surface border rounded-2xl p-5 relative shadow-sm ${simState.forma === "ghost" ? "border-brand-primary ring-2 ring-brand-primary" : "border-brand-border"}`} onClick={() => setSimState({...simState, forma: "ghost"})}>
                        <div className={`check-icon absolute top-3 right-3 text-brand-primary`}><svg className="w-5 h-5"
                                fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M5 13l4 4L19 7"></path>
                            </svg></div>
                        <div className="w-full h-10 bg-transparent border-2 border-brand-primary/40 rounded-xl mb-3"></div>
                        <h3 className="text-sm font-bold text-brand-secondary">Outline / Ghost</h3>
                    </div>
                </div>
            </div>

            {/* PASSO 4: HERO */}
            <div>
                <div className="flex items-center gap-4 mb-8 border-b border-brand-border pb-4">
                    <div
                        className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-brand-primary font-bold font-mono">
                        4</div>
                    <h2 className="text-2xl font-bold text-brand-secondary">Layout Inicial (Hero)</h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="option-card bg-brand-surface border border-brand-border rounded-2xl p-4 relative flex gap-4 items-center shadow-sm"
                        className={`option-card bg-brand-surface border rounded-2xl p-4 relative flex gap-4 items-center shadow-sm ${simState.hero === "central" ? "border-brand-primary ring-2 ring-brand-primary" : "border-brand-border"}`} onClick={() => setSimState({...simState, hero: "central"})}>
                        <div className={`check-icon absolute top-2 right-2 text-brand-primary`}><svg className="w-5 h-5"
                                fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M5 13l4 4L19 7"></path>
                            </svg></div>
                        <div
                            className="w-16 h-16 shrink-0 bg-gray-50 border border-gray-200 rounded-lg flex flex-col items-center justify-center p-2">
                            <div className="w-full h-1 bg-gray-400 rounded mb-1"></div>
                            <div className="w-3/4 h-1 bg-gray-300 rounded mb-1"></div>
                            <div className="w-1/2 h-2 bg-brand-primary rounded-full"></div>
                        </div>
                        <div>
                            <h3 className="text-sm font-bold text-brand-secondary">Foco Central</h3>
                            <p className="text-[10px] text-brand-muted">Título gigante ao centro.</p>
                        </div>
                    </div>

                    <div className="option-card bg-brand-surface border border-brand-border rounded-2xl p-4 relative flex gap-4 items-center shadow-sm"
                        className={`option-card bg-brand-surface border rounded-2xl p-4 relative flex gap-4 items-center shadow-sm ${simState.hero === "dual" ? "border-brand-primary ring-2 ring-brand-primary" : "border-brand-border"}`} onClick={() => setSimState({...simState, hero: "dual"})}>
                        <div className={`check-icon absolute top-2 right-2 text-brand-primary`}><svg className="w-5 h-5"
                                fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M5 13l4 4L19 7"></path>
                            </svg></div>
                        <div
                            className="w-16 h-16 shrink-0 bg-gray-50 border border-gray-200 rounded-lg flex justify-between items-center p-2">
                            <div className="w-1/2 flex flex-col gap-1">
                                <div className="w-full h-1 bg-gray-400 rounded"></div>
                                <div className="w-3/4 h-1 bg-gray-300 rounded"></div>
                            </div>
                            <div className="w-1/3 h-full bg-gray-300 rounded-sm"></div>
                        </div>
                        <div>
                            <h3 className="text-sm font-bold text-brand-secondary">Clássico Dual</h3>
                            <p className="text-[10px] text-brand-muted">Texto lado a lado com imagem.</p>
                        </div>
                    </div>

                    <div className="option-card bg-brand-surface border border-brand-border rounded-2xl p-4 relative flex gap-4 items-center shadow-sm"
                        className={`option-card bg-brand-surface border rounded-2xl p-4 relative flex gap-4 items-center shadow-sm ${simState.hero === "split" ? "border-brand-primary ring-2 ring-brand-primary" : "border-brand-border"}`} onClick={() => setSimState({...simState, hero: "split"})}>
                        <div className={`check-icon absolute top-2 right-2 text-brand-primary`}><svg className="w-5 h-5"
                                fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M5 13l4 4L19 7"></path>
                            </svg></div>
                        <div
                            className="w-16 h-16 shrink-0 bg-gray-50 border border-gray-200 rounded-lg flex overflow-hidden">
                            <div className="w-1/2 h-full bg-white flex flex-col justify-center p-1">
                                <div className="w-full h-1 bg-brand-primary rounded mb-1"></div>
                            </div>
                            <div className="w-1/2 h-full bg-gray-300"></div>
                        </div>
                        <div>
                            <h3 className="text-sm font-bold text-brand-secondary">Split Visual</h3>
                            <p className="text-[10px] text-brand-muted">Ecrã dividido a meio.</p>
                        </div>
                    </div>

                    <div className="option-card bg-brand-surface border border-brand-border rounded-2xl p-4 relative flex gap-4 items-center shadow-sm"
                        className={`option-card bg-brand-surface border rounded-2xl p-4 relative flex gap-4 items-center shadow-sm ${simState.hero === "imersivo" ? "border-brand-primary ring-2 ring-brand-primary" : "border-brand-border"}`} onClick={() => setSimState({...simState, hero: "imersivo"})}>
                        <div className={`check-icon absolute top-2 right-2 text-brand-primary`}><svg className="w-5 h-5"
                                fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M5 13l4 4L19 7"></path>
                            </svg></div>
                        <div
                            className="w-16 h-16 shrink-0 bg-gray-300 rounded-lg flex flex-col items-center justify-center p-2 relative overflow-hidden">
                            <div className="absolute inset-0 bg-black/30"></div>
                            <div className="w-3/4 h-1 bg-white rounded mb-1 z-10"></div>
                            <div className="w-1/2 h-2 bg-brand-primary rounded-full z-10"></div>
                        </div>
                        <div>
                            <h3 className="text-sm font-bold text-brand-secondary">Imersão Total</h3>
                            <p className="text-[10px] text-brand-muted">Imagem ou vídeo em fundo.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* PASSO 5: ANIMAÇÕES */}
            <div>
                <div className="flex items-center gap-4 mb-8 border-b border-brand-border pb-4">
                    <div
                        className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-brand-primary font-bold font-mono">
                        5</div>
                    <h2 className="text-2xl font-bold text-brand-secondary">Animações & Interação</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="option-card bg-brand-surface border border-brand-border rounded-2xl p-5 text-center shadow-sm"
                        className={`option-card bg-brand-surface border rounded-2xl p-5 text-center shadow-sm relative ${simState.animacao === "static" ? "border-brand-primary ring-2 ring-brand-primary" : "border-brand-border"}`} onClick={() => setSimState({...simState, animacao: "static"})}>
                        <div className={`check-icon absolute top-3 right-3 text-brand-primary`}><svg className="w-4 h-4"
                                fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M5 13l4 4L19 7"></path>
                            </svg></div>
                        <h3 className="text-sm font-bold text-brand-secondary mb-1">Estático</h3>
                        <p className="text-[10px] text-brand-muted">Velocidade extrema. Direto ao ponto.</p>
                    </div>
                    <div className="option-card bg-brand-surface border border-brand-border rounded-2xl p-5 text-center shadow-sm"
                        className={`option-card bg-brand-surface border rounded-2xl p-5 text-center shadow-sm relative ${simState.animacao === "fade" ? "border-brand-primary ring-2 ring-brand-primary" : "border-brand-border"}`} onClick={() => setSimState({...simState, animacao: "fade"})}>
                        <div className={`check-icon absolute top-3 right-3 text-brand-primary`}><svg className="w-4 h-4"
                                fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M5 13l4 4L19 7"></path>
                            </svg></div>
                        <h3 className="text-sm font-bold text-brand-secondary mb-1">Elegância (Fade)</h3>
                        <p className="text-[10px] text-brand-muted">Suave e sofisticado.</p>
                    </div>
                    <div className="option-card bg-brand-surface border border-brand-border rounded-2xl p-5 text-center shadow-sm"
                        className={`option-card bg-brand-surface border rounded-2xl p-5 text-center shadow-sm relative ${simState.animacao === "float" ? "border-brand-primary ring-2 ring-brand-primary" : "border-brand-border"}`} onClick={() => setSimState({...simState, animacao: "float"})}>
                        <div className={`check-icon absolute top-3 right-3 text-brand-primary`}><svg className="w-4 h-4"
                                fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M5 13l4 4L19 7"></path>
                            </svg></div>
                        <h3 className="text-sm font-bold text-brand-secondary mb-1">High-End (Parallax)</h3>
                        <p className="text-[10px] text-brand-muted">Objetos flutuantes, sensação 3D.</p>
                    </div>
                </div>
            </div>

        </div>

        {/* ========================================== */}
        {/* COLUNA DIREITA: SIMULADOR LIVE (STICKY)    */}
        {/* ========================================== */}
        <div className="lg:w-5/12">
            <div className="sticky top-32 space-y-6">

                {/* Cabeçalho do Simulador */}
                <div className="flex items-center justify-between">
                    <div>
                        <h2 className="text-xl font-extrabold text-brand-secondary flex items-center gap-3">
                            <span className="relative flex h-3 w-3">
                                <span
                                    className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                            </span>
                            Live Preview
                        </h2>
                        <p className="text-xs text-brand-muted mt-1 font-medium">As suas escolhas refletidas em tempo real.
                        </p>
                    </div>
                </div>

                {/* JANELA DO SIMULADOR */}
                <div className="bg-white border border-brand-border rounded-[2rem] shadow-floating overflow-hidden">

                    {/* Barra de Topo do Browser Falso */}
                    <div className="bg-gray-100 px-5 py-4 flex gap-2 border-b border-gray-200">
                        <div className="w-3 h-3 rounded-full bg-red-400"></div>
                        <div className="w-3 h-3 rounded-full bg-amber-400"></div>
                        <div className="w-3 h-3 rounded-full bg-green-400"></div>
                    </div>

                    {/* Conteúdo do Simulador Dinâmico */}
                    <div id="sim-content"
                        className="relative w-full h-[400px] flex items-center justify-center overflow-hidden font-sans">

                        {/* Variante 1: Central */}
                        {/* A animação (sim-anim-target) vai para o H3 */}
                        <div id="sim-hero-central"
                            className="w-full text-center relative z-10 flex flex-col items-center px-6">
                            <div
                                className="sim-badge px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase mb-4 border transition-colors inline-block">
                                Novidade</div>
                            <h3
                                className={`sim-title sim-anim-target text-3xl sm:text-4xl font-extrabold mb-4 leading-tight ${getAnimClass()}`}>
                                O Seu Novo<br />Website <span id="sim-title-span-central" style={{color: colors.primaria}}>Premium.</span></h3>
                            <p className="sim-text text-sm mb-8 max-w-xs mx-auto">Esta é a área onde o cliente foca toda a
                                atenção na sua grande promessa de vendas.</p>
                            <button className={getBtnClass("px-8 py-3.5 text-sm font-bold uppercase tracking-wider")}>Contactar
                                Equipe</button>
                        </div>

                        {/* Variante 2: Dual */}
                        {/* A animação (sim-anim-target) vai para a imagem */}
                        <div id="sim-hero-dual"
                            className="w-full flex items-center justify-between gap-4 sm:gap-6 px-4 sm:px-8 relative z-10 hidden">
                            <div className="flex-1 text-left">
                                <h3 className="sim-title text-2xl sm:text-3xl font-extrabold mb-3 leading-tight">
                                    Solução<br /><span id="sim-title-span-dual" style={{color: colors.primaria}}>Avançada.</span></h3>
                                <p className="sim-text text-[11px] sm:text-xs mb-5 max-w-[200px]">Texto direto à esquerda
                                    com imagem à direita, gerando equilíbrio.</p>
                                <button
                                    className={getBtnClass("px-5 py-2.5 sm:px-6 sm:py-3 text-[10px] sm:text-xs font-bold uppercase tracking-wider")}>Ver
                                    Mais</button>
                            </div>
                            <div className="flex-shrink-0">
                                <div
                                    className={`sim-mockup-img sim-anim-target w-[110px] sm:w-[140px] aspect-[4/5] bg-gray-200 rounded-2xl shadow-lg border-4 border-white transition-all duration-500 overflow-hidden ${getAnimClass()}`}>
                                    <img src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=400&q=80"
                                        className="w-full h-full object-cover opacity-90" alt="Mockup" />
                                </div>
                            </div>
                        </div>

                        {/* Variante 3: Split */}
                        {/* A animação (sim-anim-target) vai para a imagem */}
                        <div id="sim-hero-split" className={`absolute inset-0 w-full h-full flex ${simState.hero === "split" ? "" : "hidden"}`}>
                            <div className="w-1/2 h-full flex flex-col justify-center p-8 sm:p-10 relative z-10 bg-inherit">
                                <h3 className="sim-title text-2xl sm:text-3xl font-extrabold mb-3 leading-tight">
                                    Visão<br /><span id="sim-title-span-split" style={{color: colors.primaria}}>Dividida.</span></h3>
                                <p className="sim-text text-[11px] sm:text-xs mb-6 max-w-[180px]">Contraste perfeito entre
                                    texto forte e imagem.</p>
                                <button
                                    className={getBtnClass("px-5 py-2.5 sm:px-6 sm:py-3 text-[10px] sm:text-xs font-bold uppercase tracking-wider self-start")}>Explorar</button>
                            </div>
                            <div className="w-1/2 h-full relative overflow-hidden flex-shrink-0">
                                <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80"
                                    className={`sim-mockup-img sim-anim-target w-full h-full object-cover transition-all duration-500 ${getAnimClass()}`}
                                    alt="Split Image" />
                            </div>
                        </div>

                        {/* Variante 4: Imersivo */}
                        {/* A animação (sim-anim-target) vai para o H3 */}
                        <div id="sim-hero-imersivo"
                            className="absolute inset-0 w-full h-full flex flex-col items-center justify-center text-center p-8 bg-imersivo-mockup hidden relative">
                            <div className="absolute inset-0 bg-black/60 z-0"></div> {/* Overlay escuro obrigatório */}
                            <div className="relative z-10 w-full px-4">
                                <h3
                                    className={`text-white sim-anim-target text-3xl sm:text-4xl font-extrabold mb-4 leading-tight ${getAnimClass()}`}>
                                    Imersão<br /><span id="sim-title-span-imersivo" style={{color: colors.primaria}}>Total.</span></h3>
                                <p className="text-gray-300 text-sm mb-8 max-w-xs mx-auto">A imagem toma conta de todo o
                                    ecrã, gerando grande impacto visual.</p>
                                <button
                                    className={getBtnClass("px-8 py-3.5 text-sm font-bold uppercase tracking-wider")}>Aceder</button>
                            </div>
                        </div>

                    </div>
                </div>

                {/* Formulário de Submissão Integrado no Sidebar */}
                <div className="bg-white border border-brand-border rounded-[2rem] p-8 shadow-soft">
                    <h3 className="text-xl font-extrabold text-brand-secondary mb-4">Gerar o meu Projeto</h3>
                    <p className="text-xs text-brand-muted mb-6">O código da sua configuração será enviado pronto para a
                        nossa equipe.</p>

                    <div className="space-y-4">
                        <input type="text" id="cliente-nome" placeholder="Como se chama?" required value={clientData.nome} onChange={(e) => setClientData({...clientData, nome: e.target.value})}
                            className="w-full bg-brand-background border border-brand-border rounded-xl py-3 px-4 text-sm focus:outline-none focus:border-brand-primary transition-colors text-brand-secondary font-medium" />

                        <input type="text" id="cliente-empresa" placeholder="Empresa / Projeto" required value={clientData.empresa} onChange={(e) => setClientData({...clientData, empresa: e.target.value})}
                            className="w-full bg-brand-background border border-brand-border rounded-xl py-3 px-4 text-sm focus:outline-none focus:border-brand-primary transition-colors text-brand-secondary font-medium" />

                        <button type="submit" onClick={handleSendProject}
                            className="w-full bg-brand-primary text-white text-sm font-bold uppercase tracking-widest py-4 rounded-xl hover:bg-brand-primaryDark transition-all shadow-md mt-2">
                            Enviar Planta (WhatsApp)
                        </button>
                    </div>
                </div>

            </div>
        </div>

    </section>

    {/* Footer */}
    <footer className="border-t border-brand-border py-10 text-center mt-10 relative z-10 bg-brand-background">
        <p className="text-xs font-bold text-brand-muted uppercase tracking-widest">© 2026 PageMaster. Engenharia Web de
            Alto Padrão.</p>
    </footer>
    </>
  );
}
