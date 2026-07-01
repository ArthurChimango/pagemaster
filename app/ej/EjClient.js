'use client';

import { useState } from 'react';

const modules = [
  {
    id: 1,
    title: "Comercial & CRM",
    badge: "Vendas",
    desc: "Funil de vendas visual no modelo Kanban, cadastro de leads, precificador de propostas inteligente e conversão automatizada em projetos.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    color: "text-blue-500",
    bgColor: "bg-blue-50"
  },
  {
    id: 2,
    title: "Gestão de Projetos (PMO)",
    badge: "Operações",
    desc: "Quadro Kanban de tarefas do projeto, apontamento de horas (Timesheet) integrado e progresso em barras dinâmicas por squads.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
    color: "text-indigo-500",
    bgColor: "bg-indigo-50"
  },
  {
    id: 3,
    title: "Fluxo de Caixa & Planejamento",
    badge: "Finanças",
    desc: "Lançamento de receitas e despesas, controle de caixa atualizado via contratos comerciais e planejamento mensal de orçamentos.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    color: "text-emerald-500",
    bgColor: "bg-emerald-50"
  },
  {
    id: 4,
    title: "Estratégia & OKRs",
    badge: "Estratégia",
    desc: "Controle unificado de metas anuais de Alto Crescimento, progresso de OKRs por diretoria e coleta automática de NPS de projetos.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    color: "text-pink-500",
    bgColor: "bg-pink-50"
  },
  {
    id: 5,
    title: "RH & Gamificação",
    badge: "Pessoas",
    desc: "Diretório de membros completo, cadastro de disponibilidade semanal e ranking de XP com pódio dinâmico para engajamento.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    color: "text-amber-500",
    bgColor: "bg-amber-50"
  },
  {
    id: 6,
    title: "Gestão de Marketing",
    badge: "Marketing",
    desc: "Calendário editorial interativo para posts de redes sociais, controle de status das artes e mural de insights criativos integrados.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
      </svg>
    ),
    color: "text-red-500",
    bgColor: "bg-red-50"
  },
  {
    id: 7,
    title: "Integrações & Webhooks",
    badge: "Tecnologia",
    desc: "Envio de notificações de novas vendas ou conquistas diretamente no Discord/Slack da EJ e conexões com Google Planilhas.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    color: "text-sky-500",
    bgColor: "bg-sky-50"
  }
];

export default function EjClient() {
  const [activeTab, setActiveTab] = useState('crm');
  
  const [estimatedHours, setEstimatedHours] = useState(60);
  const [margin, setMargin] = useState(20);
  const hourRate = 75;
  const calculatedPrice = estimatedHours * hourRate * (1 + margin / 100);

  const [okrsTab, setOkrsTab] = useState('pres');

  const [members, setMembers] = useState([
    { id: 1, name: "Ana Carolina", role: "Diretoria de Projetos", xp: 2840 },
    { id: 2, name: "Mateus Silva", role: "Diretoria Comercial", xp: 2410 },
    { id: 3, name: "Gabriel Lins", role: "Diretoria de Marketing", xp: 1950 }
  ]);

  const [formData, setFormData] = useState({ nome: '', ej: '', telefone: '', observacao: '' });

  const addXP = (memberId, amount) => {
    setMembers(prev => {
      const updated = prev.map(m => m.id === memberId ? { ...m, xp: m.xp + amount } : m);
      return [...updated].sort((a, b) => b.xp - a.xp);
    });
  };

  const handleContactSubmit = (e) => {
    e.preventDefault();
    const mensagem = `Olá PageMaster! Tenho interesse no *Nexus Suite para Empresas Juniores*.\n\n*Nome:* ${formData.nome}\n*Empresa Júnior:* ${formData.ej}\n*Telefone:* ${formData.telefone}\n*Detalhes:* ${formData.observacao}\n\nGostaria de entender melhor e solicitar uma demonstração.`;
    const encoded = encodeURIComponent(mensagem);
    window.open(`https://wa.me/553499778403?text=${encoded}`, '_blank');
  };

  return (
    <>
      {/* 1. Navegação */}
      <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 w-[90%] max-w-3xl bg-white/90 backdrop-blur-xl border border-brand-border rounded-full px-6 py-3 flex justify-between items-center shadow-soft transition-all">
        <div className="font-extrabold text-xl tracking-tighter text-brand-secondary cursor-pointer"
            onClick={() => window.location.href = "/"}>
            <span className="text-brand-primary">P</span>M.
        </div>
        <div className="flex items-center gap-4">
          <a href="https://pagemasternexus.netlify.app" target="_blank" rel="noopener noreferrer" className="text-xs font-extrabold uppercase tracking-widest text-brand-primary hover:text-brand-primaryDark transition-colors flex items-center gap-1.5 bg-blue-50 border border-blue-100 px-3.5 py-2 rounded-full shadow-sm">
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
              Acessar Sistema
          </a>
          <a href="/" className="text-xs font-bold uppercase tracking-widest text-brand-muted hover:text-brand-primary transition-colors flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Voltar
          </a>
        </div>
      </nav>

      {/* 2. Hero Section */}
      <section className="relative pt-40 pb-28 px-6 flex flex-col items-center overflow-hidden bg-brand-secondary rounded-b-[3rem] shadow-2xl">
        <div className="absolute inset-0 z-0 bg-grid-pattern opacity-10 rounded-b-[3rem]"></div>
        <div className="relative z-10 text-center w-full max-w-4xl mx-auto space-y-6">
            <span className="text-blue-400 font-mono text-sm font-bold tracking-[0.2em] uppercase block">// Nexus Suite para EJs</span>
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-white tracking-tight">
                Gestão integrada de verdade.<br />
                <span className="text-blue-400">Sem planilhas perdidas.</span>
            </h1>
            <p className="text-lg text-blue-100 font-medium max-w-2xl mx-auto leading-relaxed">
                O ERP e CRM definitivo projetado sob medida para o ecossistema de Empresas Juniores. Controle vendas, projetos, membros, metas de OKR e finanças em uma única plataforma moderna.
            </p>
            <div className="flex flex-wrap justify-center gap-4 pt-4">
              <a href="https://pagemasternexus.netlify.app" target="_blank" rel="noopener noreferrer" className="bg-brand-primary hover:bg-brand-primaryDark text-white text-xs font-bold uppercase tracking-widest px-8 py-4 rounded-xl transition-all shadow-lg shadow-blue-500/20 flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                Criar Conta Teste (Acessar Sistema)
              </a>
              <a href="#interativo" className="bg-white/10 hover:bg-white/20 text-white border border-white/20 text-xs font-bold uppercase tracking-widest px-8 py-4 rounded-xl transition-all">
                Ver Simulador Rápido
              </a>
            </div>
        </div>
      </section>

      {/* 3. Área de Recursos / Módulos */}
      <section className="py-24 px-6 max-w-[1200px] mx-auto">
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <span className="text-brand-primary font-mono text-xs font-bold tracking-[0.2em] uppercase mb-3 block">// Estrutura Operacional</span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-brand-secondary tracking-tight">Os 7 Pilares da Gestão da sua EJ</h2>
          <p className="text-brand-muted mt-4 font-medium">Esqueça a fragmentação de ferramentas (Trello, Drive, planilhas orçamentárias). Conectamos todos os setores da sua EJ.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {modules.map(mod => (
            <div key={mod.id} className="bg-white border border-brand-border rounded-[2rem] p-8 shadow-soft transition-all hover:scale-[1.02] hover:border-brand-primary/40 hover:shadow-md flex flex-col justify-between">
              <div>
                <div className={`w-12 h-12 rounded-2xl ${mod.bgColor} ${mod.color} flex items-center justify-center mb-6`}>
                  {mod.icon}
                </div>
                <h4 className="text-xl font-bold text-brand-secondary mb-3">{mod.title}</h4>
                <p className="text-sm text-brand-muted font-medium leading-relaxed mb-6">{mod.desc}</p>
              </div>
              <span className="self-start bg-slate-50 border border-brand-border text-[9px] font-black uppercase tracking-wider px-3 py-1.5 rounded-lg text-brand-secondary">
                {mod.badge}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Simulador Interativo */}
      <section id="interativo" className="py-24 bg-white border-t border-b border-brand-border px-6">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16 max-w-2xl mx-auto space-y-4">
            <span className="text-brand-primary font-mono text-xs font-bold tracking-[0.2em] uppercase mb-3 block">// Demonstração Prática</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-brand-secondary tracking-tight">Sinta o Painel em Ação</h2>
            <p className="text-brand-muted font-medium">Interaja com a maquete funcional do sistema abaixo. Explore a precificação do CRM, o painel de metas e a gamificação dos membros.</p>
            <div className="inline-block bg-blue-50 border border-blue-200 rounded-2xl p-4 mt-2">
              <p className="text-xs text-brand-secondary font-bold">
                💡 Quer testar na prática? <a href="https://pagemasternexus.netlify.app" target="_blank" rel="noopener noreferrer" className="text-brand-primary underline hover:text-brand-primaryDark font-black">Clique aqui para acessar o sistema real</a>, onde você pode criar uma conta gratuita e experimentar o Nexus Suite!
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
            {/* Lado Esquerdo: Abas de Seleção */}
            <div className="lg:col-span-5 flex flex-col gap-4">
              <button 
                onClick={() => setActiveTab('crm')}
                className={`w-full text-left p-6 rounded-2xl border transition-all flex items-center justify-between ${activeTab === 'crm' ? 'border-brand-primary bg-blue-50/20 text-brand-secondary' : 'border-brand-border hover:border-brand-primary/30 text-brand-muted'}`}
              >
                <div>
                  <h4 className="font-extrabold text-sm uppercase tracking-wider mb-1">📊 CRM Comercial</h4>
                  <p className="text-xs font-medium">Simule a margem e precificação de um novo projeto de forma inteligente.</p>
                </div>
                <span className="text-lg">➔</span>
              </button>

              <button 
                onClick={() => setActiveTab('okrs')}
                className={`w-full text-left p-6 rounded-2xl border transition-all flex items-center justify-between ${activeTab === 'okrs' ? 'border-brand-primary bg-blue-50/20 text-brand-secondary' : 'border-brand-border hover:border-brand-primary/30 text-brand-muted'}`}
              >
                <div>
                  <h4 className="font-extrabold text-sm uppercase tracking-wider mb-1">🎯 OKRs por Diretoria</h4>
                  <p className="text-xs font-medium">Monitore o alcance das metas operacionais e do NPS dos squads.</p>
                </div>
                <span className="text-lg">➔</span>
              </button>

              <button 
                onClick={() => setActiveTab('xp')}
                className={`w-full text-left p-6 rounded-2xl border transition-all flex items-center justify-between ${activeTab === 'xp' ? 'border-brand-primary bg-blue-50/20 text-brand-secondary' : 'border-brand-border hover:border-brand-primary/30 text-brand-muted'}`}
              >
                <div>
                  <h4 className="font-extrabold text-sm uppercase tracking-wider mb-1">🏆 Gamificação de RH</h4>
                  <p className="text-xs font-medium">Acompanhe a tabela de engajamento baseada no acúmulo de XP.</p>
                </div>
                <span className="text-lg">➔</span>
              </button>
            </div>

            {/* Lado Direito: Tela de Simulação do ERP */}
            <div className="lg:col-span-7 bg-brand-secondary text-white rounded-[2.5rem] p-8 border border-white/10 shadow-xl flex flex-col justify-between min-h-[420px]">
              
              {/* Topo do simulador (Header de Navegador) */}
              <div className="flex justify-between items-center border-b border-white/10 pb-4 mb-6">
                <div className="flex gap-2">
                  <span className="w-3 h-3 rounded-full bg-red-500" />
                  <span className="w-3 h-3 rounded-full bg-yellow-500" />
                  <span className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <span className="font-mono text-[10px] text-blue-200 tracking-wider font-bold">NEXUS SUITE v1.2</span>
                <span className="text-[10px] bg-blue-500/20 text-blue-400 font-bold px-2 py-0.5 rounded">Live Demo</span>
              </div>

              {/* Conteúdo dinâmico da Aba 1: CRM */}
              {activeTab === 'crm' && (
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <h5 className="font-bold text-xs uppercase tracking-wider text-blue-300 mb-4">Calculadora de Escopo & Preços</h5>
                    
                    <div className="space-y-6">
                      <div>
                        <div className="flex justify-between text-xs font-semibold mb-2">
                          <span>Horas de Projeto:</span>
                          <span className="font-mono text-blue-400 font-bold">{estimatedHours} horas</span>
                        </div>
                        <input 
                          type="range" 
                          min="20" 
                          max="200" 
                          value={estimatedHours} 
                          onChange={(e) => setEstimatedHours(Number(e.target.value))}
                          className="w-full accent-brand-primary cursor-pointer"
                        />
                      </div>

                      <div>
                        <div className="flex justify-between text-xs font-semibold mb-2">
                          <span>Margem Operacional:</span>
                          <span className="font-mono text-blue-400 font-bold">{margin}%</span>
                        </div>
                        <input 
                          type="range" 
                          min="5" 
                          max="50" 
                          value={margin} 
                          onChange={(e) => setMargin(Number(e.target.value))}
                          className="w-full accent-brand-primary cursor-pointer"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="bg-white/5 border border-white/10 rounded-2xl p-5 mt-6 flex justify-between items-center">
                    <div>
                      <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block">Preço Final Recomendado:</span>
                      <span className="text-xs text-slate-400 font-bold block mt-1">({estimatedHours}h x R$ {hourRate}/h + margem)</span>
                    </div>
                    <span className="text-2xl font-extrabold text-emerald-400 font-mono">R$ {calculatedPrice.toFixed(2)}</span>
                  </div>
                </div>
              )}

              {/* Conteúdo dinâmico da Aba 2: OKRs */}
              {activeTab === 'okrs' && (
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <h5 className="font-bold text-xs uppercase tracking-wider text-blue-300 mb-4">Painel Estratégico</h5>
                    
                    <div className="flex gap-2 mb-6">
                      <button 
                        onClick={() => setOkrsTab('pres')}
                        className={`text-[9px] font-bold px-3 py-1.5 rounded-lg border ${okrsTab === 'pres' ? 'bg-blue-600 border-blue-600 text-white' : 'border-white/10 text-slate-400 hover:text-white'}`}
                      >
                        Presidência
                      </button>
                      <button 
                        onClick={() => setOkrsTab('com')}
                        className={`text-[9px] font-bold px-3 py-1.5 rounded-lg border ${okrsTab === 'com' ? 'bg-blue-600 border-blue-600 text-white' : 'border-white/10 text-slate-400 hover:text-white'}`}
                      >
                        Comercial
                      </button>
                    </div>

                    {okrsTab === 'pres' ? (
                      <div className="space-y-4">
                        <div>
                          <div className="flex justify-between text-xs font-semibold mb-2">
                            <span>Atingir faturamento de R$ 50k</span>
                            <span className="text-emerald-400 font-mono">84%</span>
                          </div>
                          <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                            <div className="h-full bg-emerald-400 transition-all duration-500" style={{ width: '84%' }} />
                          </div>
                        </div>
                        <div>
                          <div className="flex justify-between text-xs font-semibold mb-2">
                            <span>NPS médio de projetos &gt; 80</span>
                            <span className="text-blue-400 font-mono">75%</span>
                          </div>
                          <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                            <div className="h-full bg-blue-400 transition-all duration-500" style={{ width: '75%' }} />
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className="space-y-4">
                        <div>
                          <div className="flex justify-between text-xs font-semibold mb-2">
                            <span>Alcançar 12 contratos fechados</span>
                            <span className="text-amber-400 font-mono">92%</span>
                          </div>
                          <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                            <div className="h-full bg-amber-400 transition-all duration-500" style={{ width: '92%' }} />
                          </div>
                        </div>
                        <div>
                          <div className="flex justify-between text-xs font-semibold mb-2">
                            <span>Taxa de conversão de Leads &gt; 15%</span>
                            <span className="text-pink-400 font-mono">60%</span>
                          </div>
                          <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                            <div className="h-full bg-pink-400 transition-all duration-500" style={{ width: '60%' }} />
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  <span className="text-[10px] text-slate-400 font-semibold block mt-4">
                    * Metas e Key Results são atualizados automaticamente com base nas conclusões de tarefas e contratos.
                  </span>
                </div>
              )}

              {/* Conteúdo dinâmico da Aba 3: XP Gamificação */}
              {activeTab === 'xp' && (
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-center mb-4">
                      <h5 className="font-bold text-xs uppercase tracking-wider text-blue-300">Quadro de Líderes</h5>
                      <button 
                        onClick={() => addXP(1, 500)}
                        className="bg-blue-600 hover:bg-blue-700 text-[9px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-lg transition-all"
                      >
                        Simular Ação Ana (+500 XP)
                      </button>
                    </div>

                    <div className="space-y-3">
                      {members.map((m, idx) => (
                        <div key={m.id} className="flex justify-between items-center bg-white/5 border border-white/10 p-3 rounded-xl transition-all hover:border-blue-500/30">
                          <div className="flex items-center gap-3">
                            <span className="font-mono text-xs text-slate-500 font-bold">#{idx + 1}</span>
                            <div>
                              <p className="text-xs font-bold">{m.name}</p>
                              <p className="text-[9px] text-slate-400 font-semibold">{m.role}</p>
                            </div>
                          </div>
                          <span className="text-xs font-extrabold text-amber-400 font-mono">{m.xp} XP</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <span className="text-[10px] text-slate-400 font-semibold block mt-4">
                    * Os membros ganham pontos ao preencher time-sheets, entregar projetos no prazo e fechar negócios.
                  </span>
                </div>
              )}

              {/* Rodapé interno do simulador */}
              <div className="border-t border-white/10 pt-4 mt-6 flex justify-between items-center text-[10px] text-slate-500 font-semibold">
                <span>Status: Sincronizado com Firebase Firestore</span>
                <span className="text-blue-400 font-bold">Nexus Live</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Nova Seção de Precificação (Preço, Parcelado, Sem Mensalidade) */}
      <section id="investimento" className="py-24 bg-brand-background px-6">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <span className="text-brand-primary font-mono text-xs font-bold tracking-[0.2em] uppercase mb-3 block">// Preço Sem Surpresas</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-brand-secondary tracking-tight">Investimento Único e Acessível</h2>
            <p className="text-brand-muted mt-4 font-medium">Acreditamos no potencial das Empresas Juniores brasileiras. Por isso, oferecemos uma licença definitiva sem taxas de recorrência.</p>
          </div>

          <div className="max-w-md mx-auto bg-white border border-brand-border rounded-[2.5rem] shadow-soft hover:shadow-floating transition-all duration-300 p-8 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-brand-primary text-white text-[9px] uppercase font-mono font-bold tracking-widest px-6 py-2.5 rounded-bl-[1.5rem] shadow-sm">
              Licença Vitalícia
            </div>
            
            <div className="space-y-6">
              <div>
                <h4 className="text-xl font-extrabold text-brand-secondary uppercase tracking-wider">Nexus Suite Completo</h4>
                <p className="text-xs text-brand-muted font-bold tracking-widest mt-1">PAGAMENTO ÚNICO — LICENÇA DA EJ</p>
              </div>

              <div className="py-4 border-t border-b border-brand-border">
                <span className="text-[10px] text-brand-muted font-bold uppercase tracking-wider block">Investimento:</span>
                <div className="flex items-center justify-center gap-1 mt-2">
                  <span className="text-sm font-bold text-brand-secondary">R$</span>
                  <span className="text-5xl font-extrabold text-brand-primary tracking-tight font-mono">600</span>
                  <span className="text-xs font-bold text-brand-muted">,00</span>
                </div>
                <p className="text-xs text-brand-primary font-bold mt-3 leading-normal">
                  Pague no Pix ou parcelado em até 12x no cartão!
                </p>
              </div>

              <div className="space-y-3.5 text-left text-xs font-semibold text-brand-secondary">
                <div className="flex items-center gap-2.5">
                  <span className="text-emerald-500">✔</span>
                  <span>**Sem Mensalidades** (Não há custos mensais adicionais)</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <span className="text-emerald-500">✔</span>
                  <span>**Acesso Ilimitado** para todos os membros e diretores</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <span className="text-emerald-500">✔</span>
                  <span>Banco de Dados Firebase dedicado configurado</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <span className="text-emerald-500">✔</span>
                  <span>Suporte completo na instalação e implantação da EJ</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <span className="text-emerald-500">✔</span>
                  <span>Painel Administrativo para controle de cargos</span>
                </div>
              </div>

              <a 
                href="https://wa.me/553499778403?text=Olá! Tenho interesse em adquirir o *Nexus Suite (R$ 600 - Licença Vitalícia)* para minha Empresa Júnior."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-brand-primary hover:bg-brand-primaryDark text-white text-xs font-bold uppercase tracking-widest py-4.5 rounded-xl transition-all shadow-md flex items-center justify-center gap-2 mt-8 select-none"
              >
                Solicitar Licença do Sistema
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Benefícios Gerais */}
      <section className="bg-white py-24 px-6 border-t border-brand-border">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="text-center md:text-left space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-blue-50 text-brand-primary flex items-center justify-center mx-auto md:mx-0 text-xl">⚡</div>
            <h4 className="text-lg font-bold text-brand-secondary">Centralizado e Conectado</h4>
            <p className="text-xs text-brand-muted font-medium leading-relaxed">
              Os dados fluem livremente. O fechamento de um lead no CRM gera automaticamente o projeto no PMO e a respectiva parcela de entrada no caixa financeiro da EJ.
            </p>
          </div>
          
          <div className="text-center md:text-left space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-blue-50 text-brand-primary flex items-center justify-center mx-auto md:mx-0 text-xl">🔐</div>
            <h4 className="text-lg font-bold text-brand-secondary">Níveis de Permissão (RBAC)</h4>
            <p className="text-xs text-brand-muted font-medium leading-relaxed">
              Atribua cargos específicos para os membros da sua EJ. Trainees e assessores têm acessos restritos, enquanto diretores contam com visão orçamentária total.
            </p>
          </div>

          <div className="text-center md:text-left space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-blue-50 text-brand-primary flex items-center justify-center mx-auto md:mx-0 text-xl">🎓</div>
            <h4 className="text-lg font-bold text-brand-secondary">Onboarding Facilitado</h4>
            <p className="text-xs text-brand-muted font-medium leading-relaxed">
              Fornecemos um spotlight guide interativo nas páginas e trilhas de procedimentos operacionais padrão (POPs), reduzindo a curva de aprendizado dos novos membros.
            </p>
          </div>
        </div>
      </section>

      {/* 7. CTA / Contato */}
      <section className="bg-white text-brand-secondary py-24 px-6 border-t border-brand-border rounded-t-[3rem]">
        <div className="max-w-[1200px] mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-brand-primary font-mono text-xs font-bold tracking-[0.2em] uppercase mb-4 block">// Atendimento Exclusivo</span>
            <h2 className="text-4xl md:text-5xl font-extrabold leading-tight text-brand-secondary mb-6">Transforme a maturidade da sua EJ hoje.</h2>
            <p className="text-base text-brand-muted leading-relaxed font-medium mb-10">
              Solicite a implantação do Nexus Suite na sua Empresa Júnior. Nossa equipe de engenharia configurará o banco de dados Firebase dedicado para a sua operação.
            </p>
          </div>

          <div className="bg-brand-background border border-brand-border p-8 rounded-[2rem] shadow-soft">
            <form onSubmit={handleContactSubmit} className="space-y-6">
              <div>
                <input 
                  type="text" 
                  value={formData.nome} 
                  onChange={(e) => setFormData({...formData, nome: e.target.value})} 
                  placeholder="Seu nome completo" 
                  required
                  className="w-full bg-white border border-brand-border rounded-xl py-4 px-5 text-sm focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transition-colors text-brand-secondary font-medium shadow-sm"
                />
              </div>
              <div>
                <input 
                  type="text" 
                  value={formData.ej} 
                  onChange={(e) => setFormData({...formData, ej: e.target.value})} 
                  placeholder="Nome da Empresa Júnior (Ex: Alfa Consultoria)" 
                  required
                  className="w-full bg-white border border-brand-border rounded-xl py-4 px-5 text-sm focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transition-colors text-brand-secondary font-medium shadow-sm"
                />
              </div>
              <div>
                <input 
                  type="tel" 
                  value={formData.telefone} 
                  onChange={(e) => setFormData({...formData, telefone: e.target.value})} 
                  placeholder="WhatsApp de contato" 
                  required
                  className="w-full bg-white border border-brand-border rounded-xl py-4 px-5 text-sm focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transition-colors text-brand-secondary font-medium shadow-sm"
                />
              </div>
              <div>
                <textarea 
                  value={formData.observacao} 
                  onChange={(e) => setFormData({...formData, observacao: e.target.value})} 
                  placeholder="Conte um pouco sobre as principais dores de gestão da EJ hoje..." 
                  required
                  rows="3"
                  className="w-full bg-white border border-brand-border rounded-xl py-4 px-5 text-sm focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transition-colors text-brand-secondary font-medium resize-none shadow-sm"
                />
              </div>
              <button 
                type="submit"
                className="w-full bg-brand-primary text-white text-xs font-bold uppercase tracking-widest py-5 rounded-xl hover:bg-brand-primaryDark transition-colors shadow-lg shadow-blue-500/20"
              >
                Solicitar Meu ERP/CRM
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-brand-border py-10 text-center bg-brand-background">
        <p className="text-[10px] font-bold text-brand-muted uppercase tracking-widest">© 2026 PageMaster. Engenharia Web de Alto Padrão.</p>
      </footer>
    </>
  );
}
