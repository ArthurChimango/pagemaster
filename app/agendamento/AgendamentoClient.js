'use client';

import { useState } from 'react';

const professionals = [
  { id: 1, name: "Dra. Mariana Castro", role: "Odontologia & Estética", avatar: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=150&q=80" },
  { id: 2, name: "Dr. Carlos Eduardo", role: "Fisioterapia & Quiropraxia", avatar: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=150&q=80" },
  { id: 3, name: "Juliana Costa", role: "Estética Facial & Corporal", avatar: "https://images.unsplash.com/photo-1594824813573-246434de83fb?auto=format&fit=crop&w=150&q=80" },
];

const services = [
  { id: 1, name: "Consulta de Avaliação", price: 120.00, duration: "30 min", description: "Primeira consulta para diagnóstico detalhado e planejamento." },
  { id: 2, name: "Sessão de Tratamento", price: 200.00, duration: "60 min", description: "Procedimento completo conforme plano de tratamento personalizado." },
  { id: 3, name: "Retorno e Acompanhamento", price: 0.00, duration: "30 min", description: "Reavaliação periódica dos resultados alcançados." },
];

const timeSlots = [
  "08:30", "09:30", "10:30", "11:30", "14:00", "15:00", "16:00", "17:00"
];

// July 2026 Calendar days configuration
// July 2026 starts on a Wednesday (3 empty slots at start of the week: Sun, Mon, Tue)
const calendarDays = [
  null, null, null,
  { day: 1, available: true }, { day: 2, available: true }, { day: 3, available: true }, { day: 4, available: false },
  { day: 5, available: false },
  { day: 6, available: true }, { day: 7, available: true }, { day: 8, available: true }, { day: 9, available: true }, { day: 10, available: true }, { day: 11, available: false },
  { day: 12, available: false },
  { day: 13, available: true }, { day: 14, available: true }, { day: 15, available: true }, { day: 16, available: true }, { day: 17, available: true }, { day: 18, available: false },
  { day: 19, available: false },
  { day: 20, available: true }, { day: 21, available: true }, { day: 22, available: true }, { day: 23, available: true }, { day: 24, available: true }, { day: 25, available: false },
  { day: 26, available: false },
  { day: 27, available: true }, { day: 28, available: true }, { day: 29, available: true }, { day: 30, available: true }, { day: 31, available: true }
];

export default function AgendamentoClient() {
  const [selectedProfessional, setSelectedProfessional] = useState(professionals[0]);
  const [selectedService, setSelectedService] = useState(services[0]);
  const [selectedDay, setSelectedDay] = useState(6); // Default 6th of July 2026
  const [selectedTime, setSelectedTime] = useState(null);
  const [isScheduledSimulated, setIsScheduledSimulated] = useState(false);
  
  const [leadName, setLeadName] = useState('');
  const [leadDetail, setLeadDetail] = useState('');

  const handleContactSubmit = (e) => {
    e.preventDefault();
    const message = `Olá PageMaster! Gostaria de um orçamento para o *Sistema de Agendamento Online*.\n\n*Nome:* ${leadName}\n*Segmento / Detalhes:* ${leadDetail}`;
    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/553499778403?text=${encoded}`, '_blank');
  };

  const getConfirmationMessage = () => {
    const priceText = selectedService.price > 0 ? `R$ ${selectedService.price.toFixed(2)}` : 'Gratuito (Retorno)';
    return `*CONFIRMAÇÃO DE AGENDAMENTO*\n\n` +
      `• *Profissional:* ${selectedProfessional.name}\n` +
      `• *Especialidade:* ${selectedProfessional.role}\n` +
      `• *Serviço:* ${selectedService.name} (${priceText})\n` +
      `• *Data:* ${selectedDay} de Julho de 2026 (Segunda-feira)\n` +
      `• *Horário:* ${selectedTime}h\n` +
      `• *Duração:* ${selectedService.duration}\n\n` +
      `*Status:* Reserva Confirmada via Painel PageMaster!`;
  };

  return (
    <>
      {/* 1. Navegação */}
      <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 w-[90%] max-w-2xl bg-white/90 backdrop-blur-xl border border-brand-border rounded-full px-6 py-3 flex justify-between items-center shadow-soft transition-all">
        <div className="font-extrabold text-xl tracking-tighter text-brand-secondary cursor-pointer"
            onClick={() => window.location.href = "/"}>
            <span className="text-indigo-600">P</span>M.
        </div>
        <a href="/" className="text-xs font-bold uppercase tracking-widest text-brand-muted hover:text-indigo-600 transition-colors flex items-center gap-2">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Voltar
        </a>
      </nav>

      {/* 2. Hero Section */}
      <section className="relative pt-40 pb-20 px-6 flex flex-col items-center overflow-hidden bg-indigo-950 rounded-b-[3rem] shadow-2xl">
        <div className="absolute inset-0 z-0 bg-grid-pattern opacity-10 rounded-b-[3rem]"></div>
        <div className="relative z-10 text-center w-full max-w-4xl mx-auto">
            <span className="text-indigo-300 font-mono text-sm font-bold tracking-[0.2em] uppercase mb-4 block">// Agendamentos Inteligentes</span>
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-white mb-6 tracking-tight">
                Sua agenda aberta 24/7.<br />
                <span className="text-indigo-300">Sem ligações ou faltas.</span>
            </h1>
            <p className="text-lg text-indigo-100 font-medium max-w-2xl mx-auto leading-relaxed">
                Automatize a reserva de horários para clínicas, consultórios ou salões. Ofereça confirmações automáticas e lembretes integrados via WhatsApp.
            </p>
        </div>
      </section>

      {/* 3. Área de Simulação */}
      <section className="py-24 px-6 max-w-[1400px] mx-auto">
        <div className="text-center mb-16">
          <span className="text-indigo-600 font-mono text-xs font-bold tracking-[0.2em] uppercase mb-3 block">// Experiência Real</span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-brand-secondary tracking-tight">Painel de Reserva de Teste</h2>
          <p className="text-brand-muted max-w-2xl mx-auto mt-4 font-medium">Interaja com a nossa interface inteligente: selecione o profissional, o serviço, a data e o horário para ver a simulação da reserva.</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-stretch">
          {/* Lado Esquerdo: Seletor de Etapas de Reserva */}
          <div className="lg:w-8/12 space-y-8">
            <div className="bg-white border border-brand-border p-8 rounded-[2rem] shadow-sm space-y-8">
              
              {/* Passo 1: Selecione o Profissional */}
              <div>
                <h3 className="text-lg font-extrabold text-brand-secondary mb-4 flex items-center gap-2">
                  <span className="flex items-center justify-center w-6 h-6 rounded-full bg-indigo-100 text-indigo-600 text-xs font-bold">1</span>
                  Escolha o Especialista
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {professionals.map(prof => (
                    <div 
                      key={prof.id} 
                      onClick={() => { setSelectedProfessional(prof); setIsScheduledSimulated(false); }}
                      className={`border p-4 rounded-2xl flex items-center gap-3 cursor-pointer transition-all hover:shadow-soft ${selectedProfessional.id === prof.id ? 'border-indigo-600 bg-indigo-50/40 ring-1 ring-indigo-600' : 'border-brand-border hover:border-indigo-600/30'}`}
                    >
                      <img src={prof.avatar} alt={prof.name} className="w-12 h-12 rounded-full object-cover border border-brand-border" />
                      <div className="flex-1 min-w-0">
                        <h4 className="font-bold text-xs text-brand-secondary truncate">{prof.name}</h4>
                        <p className="text-[10px] text-brand-muted font-semibold truncate">{prof.role}</p>
                      </div>
                      {selectedProfessional.id === prof.id && (
                        <div className="w-4 h-4 rounded-full bg-indigo-600 flex items-center justify-center text-white shrink-0">
                          <svg className="w-2.5 h-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Passo 2: Selecione o Serviço */}
              <div>
                <h3 className="text-lg font-extrabold text-brand-secondary mb-4 flex items-center gap-2">
                  <span className="flex items-center justify-center w-6 h-6 rounded-full bg-indigo-100 text-indigo-600 text-xs font-bold">2</span>
                  Selecione o Serviço
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {services.map(serv => (
                    <div 
                      key={serv.id} 
                      onClick={() => { setSelectedService(serv); setIsScheduledSimulated(false); }}
                      className={`border p-4 rounded-2xl flex flex-col justify-between cursor-pointer transition-all hover:shadow-soft ${selectedService.id === serv.id ? 'border-indigo-600 bg-indigo-50/40 ring-1 ring-indigo-600' : 'border-brand-border hover:border-indigo-600/30'}`}
                    >
                      <div>
                        <div className="flex justify-between items-start gap-2 mb-2">
                          <h4 className="font-bold text-xs text-brand-secondary leading-snug">{serv.name}</h4>
                          {selectedService.id === serv.id && (
                            <span className="w-4 h-4 rounded-full bg-indigo-600 flex items-center justify-center text-white shrink-0">
                              <svg className="w-2.5 h-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                              </svg>
                            </span>
                          )}
                        </div>
                        <p className="text-[10px] text-brand-muted font-medium mb-4 leading-normal">{serv.description}</p>
                      </div>
                      <div className="flex justify-between items-center border-t border-brand-border/60 pt-3 mt-2">
                        <span className="text-[10px] text-brand-muted font-bold tracking-wider uppercase font-mono">{serv.duration}</span>
                        <span className="text-xs font-extrabold text-indigo-600 font-mono">
                          {serv.price > 0 ? `R$ ${serv.price.toFixed(2)}` : 'Grátis'}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Passo 3: Data e Hora */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
                {/* Calendário */}
                <div>
                  <h4 className="text-sm font-extrabold text-brand-secondary mb-3 flex items-center gap-2">
                    <span className="flex items-center justify-center w-5 h-5 rounded-full bg-indigo-100 text-indigo-600 text-[10px] font-bold">3A</span>
                    Selecione o Dia
                  </h4>
                  <div className="border border-brand-border rounded-2xl p-4 bg-brand-background">
                    <div className="text-center font-extrabold text-xs text-brand-secondary mb-3 uppercase tracking-wider">Julho 2026</div>
                    <div className="grid grid-cols-7 gap-1 text-center text-[10px] font-bold text-brand-muted mb-2">
                      <span>Dom</span><span>Seg</span><span>Ter</span><span>Qua</span><span>Qui</span><span>Sex</span><span>Sáb</span>
                    </div>
                    <div className="grid grid-cols-7 gap-1">
                      {calendarDays.map((c, index) => {
                        if (c === null) return <div key={`empty-${index}`} />;
                        const isSelected = selectedDay === c.day;
                        return (
                          <button
                            key={`day-${c.day}`}
                            disabled={!c.available}
                            onClick={() => { setSelectedDay(c.day); setIsScheduledSimulated(false); }}
                            className={`py-2 text-[11px] font-bold rounded-lg transition-all ${
                              !c.available 
                                ? 'text-gray-300 cursor-not-allowed' 
                                : isSelected 
                                  ? 'bg-indigo-600 text-white font-mono' 
                                  : 'bg-white border border-brand-border text-brand-secondary font-mono hover:border-indigo-600'
                            }`}
                          >
                            {c.day}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </div>

                {/* Grade de Horários */}
                <div>
                  <h4 className="text-sm font-extrabold text-brand-secondary mb-3 flex items-center gap-2">
                    <span className="flex items-center justify-center w-5 h-5 rounded-full bg-indigo-100 text-indigo-600 text-[10px] font-bold">3B</span>
                    Selecione o Horário
                  </h4>
                  <div className="grid grid-cols-3 gap-2">
                    {timeSlots.map(time => (
                      <button
                        key={time}
                        onClick={() => { setSelectedTime(time); setIsScheduledSimulated(false); }}
                        className={`py-3 text-xs font-bold font-mono rounded-xl border transition-all ${
                          selectedTime === time 
                            ? 'bg-indigo-600 text-white border-indigo-600 shadow-sm' 
                            : 'bg-white border-brand-border hover:border-indigo-600 text-brand-secondary'
                        }`}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                  <p className="text-[10px] text-brand-muted mt-4 font-semibold leading-normal">
                    * Todos os horários estão no fuso de Brasília (GMT-3).
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* Lado Direito: Resumo e Automação de Agendamento */}
          <div className="lg:w-4/12 flex flex-col">
            <div className="bg-white border border-brand-border p-8 rounded-[2rem] shadow-floating flex-1 flex flex-col justify-between min-h-[480px]">
              <div>
                <h3 className="text-xl font-extrabold text-brand-secondary mb-6 flex items-center justify-between border-b border-brand-border pb-4">
                  <span>Resumo da Reserva</span>
                  <span className="bg-indigo-50 text-indigo-600 text-xs px-3 py-1 rounded-full font-bold">
                    Revisão
                  </span>
                </h3>

                <div className="space-y-4 text-xs font-semibold text-brand-secondary">
                  <div className="flex justify-between py-2 border-b border-brand-border/60">
                    <span className="text-brand-muted">Profissional:</span>
                    <span>{selectedProfessional.name}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-brand-border/60">
                    <span className="text-brand-muted">Serviço:</span>
                    <span>{selectedService.name}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-brand-border/60">
                    <span className="text-brand-muted">Duração:</span>
                    <span className="font-mono">{selectedService.duration}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-brand-border/60">
                    <span className="text-brand-muted">Data:</span>
                    <span className="font-mono">{selectedDay} de Julho de 2026</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-brand-border/60">
                    <span className="text-brand-muted">Horário:</span>
                    <span className="font-mono text-indigo-600">{selectedTime ? `${selectedTime}h` : 'Selecione um horário'}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-brand-border/60">
                    <span className="text-brand-muted">Valor:</span>
                    <span className="font-mono text-brand-primary">{selectedService.price > 0 ? `R$ ${selectedService.price.toFixed(2)}` : 'Gratuito'}</span>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                {selectedTime ? (
                  !isScheduledSimulated ? (
                    <button 
                      onClick={() => setIsScheduledSimulated(true)}
                      className="w-full bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold uppercase tracking-widest py-4 rounded-xl transition-all shadow-md flex items-center justify-center gap-2"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      Confirmar Agendamento Simulado
                    </button>
                  ) : (
                    <div className="bg-[#E5DDD5] border border-indigo-200 rounded-2xl p-4 shadow-sm relative overflow-hidden transition-all duration-300">
                      <div className="bg-[#075E54] text-white px-3 py-2 -mx-4 -mt-4 mb-3 text-xs font-bold flex items-center gap-2">
                        <div className="w-2.5 h-2.5 rounded-full bg-green-400 animate-ping" />
                        <span>Visualização do Lembrete de WhatsApp</span>
                      </div>
                      <pre className="text-[11px] font-mono text-[#262626] whitespace-pre-wrap leading-relaxed bg-white border border-gray-200 p-3 rounded-xl">
                        {getConfirmationMessage()}
                      </pre>
                      <p className="text-[10px] text-indigo-800 font-semibold text-center mt-3 leading-tight">
                        Seu cliente recebe uma mensagem exatamente como esta logo após reservar o horário!
                      </p>
                    </div>
                  )
                ) : (
                  <div className="text-center p-4 border border-dashed border-indigo-200 bg-indigo-50/20 rounded-xl text-indigo-800 font-bold text-xs">
                    Selecione um horário na grade para liberar a confirmação de teste.
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Por que Escolher Nosso Sistema de Agendamento? */}
      <section className="bg-white py-24 px-6 border-t border-brand-border">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-extrabold text-brand-secondary tracking-tight">Chega de responder mensagens de agendamento de madrugada</h2>
            <p className="text-brand-muted mt-4 font-medium text-base">Deixe que nossa inteligência digital gerencie seus horários disponíveis, envie notificações automáticas e organize seus profissionais.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-brand-background border border-brand-border p-8 rounded-3xl">
              <div className="w-12 h-12 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center mb-6">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
              </div>
              <h4 className="text-lg font-bold text-brand-secondary mb-3">Lembretes por WhatsApp</h4>
              <p className="text-sm text-brand-muted font-medium leading-relaxed">Disparo automático de lembretes antes do horário marcado, reduzindo as ausências não planejadas em mais de 40%.</p>
            </div>

            <div className="bg-brand-background border border-brand-border p-8 rounded-3xl">
              <div className="w-12 h-12 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center mb-6">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h4 className="text-lg font-bold text-brand-secondary mb-3">Google Agenda Integrado</h4>
              <p className="text-sm text-brand-muted font-medium leading-relaxed">O sistema bloqueia e libera horários automaticamente sincronizando de forma bidirecional com a sua agenda pessoal.</p>
            </div>

            <div className="bg-brand-background border border-brand-border p-8 rounded-3xl">
              <div className="w-12 h-12 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center mb-6">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h4 className="text-lg font-bold text-brand-secondary mb-3">Multi-Profissionais</h4>
              <p className="text-sm text-brand-muted font-medium leading-relaxed">Defina agendas e comissões independentes para cada colaborador ou sala de atendimento no seu painel administrativo.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. FAQ Accordion */}
      <section className="py-24 px-6 max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-brand-secondary tracking-tight">Perguntas Frequentes</h2>
          <p className="text-brand-muted mt-3 font-medium">Esclareça as principais dúvidas sobre os nossos sistemas de agendamento.</p>
        </div>

        <div className="space-y-4">
          <details className="group bg-white border border-brand-border rounded-2xl p-6 shadow-sm [&_summary::-webkit-details-marker]:hidden">
            <summary className="flex items-center justify-between cursor-pointer focus:outline-none">
              <h3 className="font-extrabold text-brand-secondary text-sm md:text-base pr-4">Consigo cobrar adiantado no ato da reserva?</h3>
              <span className="shrink-0 transition duration-300 group-open:-rotate-180">
                <svg className="w-5 h-5 text-brand-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </span>
            </summary>
            <p className="mt-4 text-xs md:text-sm text-brand-muted leading-relaxed font-medium">
              Sim! O sistema pode ser configurado para liberar o horário na agenda apenas após a confirmação do pagamento via Pix ou cartão de crédito (com integração Stripe ou Mercado Pago).
            </p>
          </details>

          <details className="group bg-white border border-brand-border rounded-2xl p-6 shadow-sm [&_summary::-webkit-details-marker]:hidden">
            <summary className="flex items-center justify-between cursor-pointer focus:outline-none">
              <h3 className="font-extrabold text-brand-secondary text-sm md:text-base pr-4">Como funciona a gestão de horários de folga e férias?</h3>
              <span className="shrink-0 transition duration-300 group-open:-rotate-180">
                <svg className="w-5 h-5 text-brand-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </span>
            </summary>
            <p className="mt-4 text-xs md:text-sm text-brand-muted leading-relaxed font-medium">
              Diretamente no painel administrativo, você pode bloquear datas específicas, definir horários especiais de almoço, feriados ou folgas de colaboradores de maneira instantânea.
            </p>
          </details>

          <details className="group bg-white border border-brand-border rounded-2xl p-6 shadow-sm [&_summary::-webkit-details-marker]:hidden">
            <summary className="flex items-center justify-between cursor-pointer focus:outline-none">
              <h3 className="font-extrabold text-brand-secondary text-sm md:text-base pr-4">É possível enviar lembretes em horários personalizados?</h3>
              <span className="shrink-0 transition duration-300 group-open:-rotate-180">
                <svg className="w-5 h-5 text-brand-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </span>
            </summary>
            <p className="mt-4 text-xs md:text-sm text-brand-muted leading-relaxed font-medium">
              Sim, você pode configurar regras automáticas para enviar lembretes 24 horas e também 2 horas antes do agendamento, garantindo que o cliente se organize a tempo.
            </p>
          </details>
        </div>
      </section>

      {/* 6. CTA / Rodapé de Contato */}
      <section className="bg-white text-brand-secondary py-24 px-6 border-t border-brand-border rounded-t-[3rem]">
        <div className="max-w-[1200px] mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-indigo-600 font-mono text-xs font-bold tracking-[0.2em] uppercase mb-4 block">// Orçamento Otimizado</span>
            <h2 className="text-4xl md:text-5xl font-extrabold leading-tight text-brand-secondary mb-6">Tenha seu sistema de agendamento exclusivo.</h2>
            <p className="text-base text-brand-muted leading-relaxed font-medium mb-10">
              Solicite o desenvolvimento de um painel de reservas rápido, moderno e 100% integrado ao seu WhatsApp e Google Agenda. Fale direto com nossos desenvolvedores.
            </p>
          </div>

          <div className="bg-brand-background border border-brand-border p-8 rounded-[2rem] shadow-soft">
            <form onSubmit={handleContactSubmit} className="space-y-6">
              <div>
                <input 
                  type="text" 
                  value={leadName} 
                  onChange={(e) => setLeadName(e.target.value)} 
                  placeholder="Qual o seu nome?" 
                  required
                  className="w-full bg-white border border-brand-border rounded-xl py-4 px-5 text-sm focus:outline-none focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600 transition-colors text-brand-secondary font-medium shadow-sm"
                />
              </div>
              <div>
                <textarea 
                  value={leadDetail} 
                  onChange={(e) => setLeadDetail(e.target.value)} 
                  placeholder="Como funciona sua clínica ou negócio e quantos profissionais atendem hoje?" 
                  required
                  rows="3"
                  className="w-full bg-white border border-brand-border rounded-xl py-4 px-5 text-sm focus:outline-none focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600 transition-colors text-brand-secondary font-medium resize-none shadow-sm"
                />
              </div>
              <button 
                type="submit"
                className="w-full bg-indigo-600 text-white text-xs font-bold uppercase tracking-widest py-5 rounded-xl hover:bg-indigo-700 transition-colors shadow-lg shadow-indigo-500/20"
              >
                Solicitar Meu Sistema de Agendamento
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-brand-border py-10 text-center bg-brand-background">
        <p className="text-[10px] font-bold text-brand-muted uppercase tracking-widest font-mono">© 2026 PageMaster. Engenharia Web de Alto Padrão.</p>
      </footer>
    </>
  );
}
