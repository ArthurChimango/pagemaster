'use client';

import { useState } from 'react';

const products = [
  { id: 1, name: "Relógio Minimalist Black", price: 349.90, image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=400&q=80", category: "Acessórios" },
  { id: 2, name: "Fone Bluetooth ANC Premium", price: 499.00, image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=400&q=80", category: "Eletrônicos" },
  { id: 3, name: "Óculos de Sol Shield", price: 189.90, image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&w=400&q=80", category: "Acessórios" },
  { id: 4, name: "Garrafa Térmica Matte", price: 129.90, image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&w=400&q=80", category: "Estilo de Vida" },
];

export default function CatalogoClient() {
  const [cart, setCart] = useState([]);
  const [isCheckoutSimulated, setIsCheckoutSimulated] = useState(false);
  const [formData, setFormData] = useState({ nome: '', telefone: '', ideia: '' });

  const addToCart = (product) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item);
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    setIsCheckoutSimulated(false);
  };

  const removeFromCart = (productId) => {
    setCart(prev => prev.filter(item => item.id !== productId));
    setIsCheckoutSimulated(false);
  };

  const updateQuantity = (productId, change) => {
    setCart(prev => prev.map(item => {
      if (item.id === productId) {
        const newQty = item.quantity + change;
        return newQty > 0 ? { ...item, quantity: newQty } : item;
      }
      return item;
    }));
    setIsCheckoutSimulated(false);
  };

  const cartTotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const getWhatsAppMessage = () => {
    let msg = `*NOVO PEDIDO - CATÁLOGO DEMO*\n\n`;
    cart.forEach(item => {
      msg += `• *${item.quantity}x* ${item.name} (R$ ${(item.price * item.quantity).toFixed(2)})\n`;
    });
    msg += `\n*Total do Pedido:* R$ ${cartTotal.toFixed(2)}\n\n`;
    msg += `*Cliente:* Visitante PageMaster\n*Status:* Simulação de Compra`;
    return msg;
  };

  const handleContactSubmit = (e) => {
    e.preventDefault();
    const mensagem = `Olá PageMaster! Tenho interesse no *Serviço de Catálogo Online*.\n\n*Nome:* ${formData.nome}\n*Projeto / Segmento:* ${formData.ideia}\n\nGostaria de entender melhor como funciona.`;
    const encoded = encodeURIComponent(mensagem);
    window.open(`https://wa.me/553499778403?text=${encoded}`, '_blank');
  };

  return (
    <>
      {/* 1. Navegação */}
      <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 w-[90%] max-w-2xl bg-white/90 backdrop-blur-xl border border-brand-border rounded-full px-6 py-3 flex justify-between items-center shadow-soft transition-all">
        <div className="font-extrabold text-xl tracking-tighter text-brand-secondary cursor-pointer"
            onClick={() => window.location.href = "/"}>
            <span className="text-brand-primary">P</span>M.
        </div>
        <a href="/" className="text-xs font-bold uppercase tracking-widest text-brand-muted hover:text-brand-primary transition-colors flex items-center gap-2">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Voltar
        </a>
      </nav>

      {/* 2. Hero Section */}
      <section className="relative pt-40 pb-20 px-6 flex flex-col items-center overflow-hidden bg-brand-primary rounded-b-[3rem] shadow-2xl">
        <div className="absolute inset-0 z-0 bg-grid-pattern opacity-30 rounded-b-[3rem]"></div>
        <div className="relative z-10 text-center w-full max-w-4xl mx-auto">
            <span className="text-blue-200 font-mono text-sm font-bold tracking-[0.2em] uppercase mb-4 block">// Catálogos Virtuais</span>
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-white mb-6 tracking-tight">
                Venda sem intermediários.<br />
                <span className="text-blue-200">Sem comissões.</span>
            </h1>
            <p className="text-lg text-blue-50 font-medium max-w-2xl mx-auto leading-relaxed">
                Transforme seu portfólio de produtos em uma loja virtual veloz integrada diretamente ao seu WhatsApp. Proporcione pedidos sem fricção.
            </p>
        </div>
      </section>

      {/* 3. Área de Simulação (Visualização do Serviço) */}
      <section className="py-24 px-6 max-w-[1400px] mx-auto">
        <div className="text-center mb-16">
          <span className="text-brand-primary font-mono text-xs font-bold tracking-[0.2em] uppercase mb-3 block">// Experiência Real</span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-brand-secondary tracking-tight">Demonstração Interativa</h2>
          <p className="text-brand-muted max-w-2xl mx-auto mt-4 font-medium">Adicione itens ao carrinho e clique em "Finalizar Pedido" para ver a automação de mensagens formatada em tempo real.</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-stretch">
          {/* Lado Esquerdo: Vitrine de Produtos */}
          <div className="lg:w-7/12 space-y-8">
            <div className="bg-white border border-brand-border p-8 rounded-[2rem] shadow-sm">
              <h3 className="text-xl font-extrabold text-brand-secondary mb-6 flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-brand-primary animate-pulse" />
                Vitrine de Produtos (Simulação)
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {products.map(prod => (
                  <div key={prod.id} className="border border-brand-border rounded-2xl p-4 flex flex-col justify-between bg-brand-background transition-all hover:border-brand-primary/40 hover:shadow-soft">
                    <div>
                      <div className="w-full aspect-square rounded-xl overflow-hidden mb-4 relative bg-white border border-brand-border/60">
                        <img src={prod.image} alt={prod.name} className="w-full h-full object-cover" />
                        <span className="absolute top-2 left-2 bg-brand-secondary text-white text-[9px] uppercase font-bold px-2 py-1 rounded">
                          {prod.category}
                        </span>
                      </div>
                      <h4 className="font-extrabold text-brand-secondary text-base leading-tight mb-2">{prod.name}</h4>
                      <p className="text-brand-primary font-mono font-bold text-sm">R$ {prod.price.toFixed(2)}</p>
                    </div>
                    <button 
                      onClick={() => addToCart(prod)}
                      className="w-full bg-brand-primary hover:bg-brand-primaryDark text-white text-xs font-bold uppercase tracking-wider py-3 rounded-xl transition-all mt-4 flex items-center justify-center gap-2 shadow-sm"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                      </svg>
                      Adicionar
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Lado Direito: Carrinho de Compras e Mockup de WhatsApp */}
          <div className="lg:w-5/12 flex flex-col justify-between">
            <div className="bg-white border border-brand-border p-8 rounded-[2rem] shadow-floating flex-1 flex flex-col justify-between min-h-[450px]">
              <div>
                <h3 className="text-xl font-extrabold text-brand-secondary mb-6 flex items-center justify-between border-b border-brand-border pb-4">
                  <span>Carrinho de Compras</span>
                  <span className="bg-blue-50 text-brand-primary text-xs px-3 py-1 rounded-full font-bold">
                    {cart.reduce((sum, item) => sum + item.quantity, 0)} Itens
                  </span>
                </h3>

                {cart.length === 0 ? (
                  <div className="text-center py-16 text-brand-muted flex flex-col items-center">
                    <svg className="w-12 h-12 text-brand-muted/60 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                    </svg>
                    <p className="font-semibold text-sm">O carrinho está vazio</p>
                    <p className="text-xs mt-1">Adicione itens na vitrine ao lado.</p>
                  </div>
                ) : (
                  <div className="space-y-4 max-h-[220px] overflow-y-auto pr-2">
                    {cart.map(item => (
                      <div key={item.id} className="flex justify-between items-center border-b border-brand-border pb-3">
                        <div className="flex-1 pr-3">
                          <h4 className="font-bold text-xs text-brand-secondary leading-tight">{item.name}</h4>
                          <span className="text-[10px] text-brand-muted font-mono font-bold">R$ {item.price.toFixed(2)}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <button onClick={() => updateQuantity(item.id, -1)} className="w-6 h-6 border border-brand-border rounded flex items-center justify-center text-brand-muted hover:bg-gray-100 font-bold text-xs">-</button>
                          <span className="text-xs font-bold text-brand-secondary font-mono w-6 text-center">{item.quantity}</span>
                          <button onClick={() => updateQuantity(item.id, 1)} className="w-6 h-6 border border-brand-border rounded flex items-center justify-center text-brand-muted hover:bg-gray-100 font-bold text-xs">+</button>
                          <button onClick={() => removeFromCart(item.id)} className="text-red-500 hover:text-red-700 ml-2" title="Remover item">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                            </svg>
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {cart.length > 0 && (
                <div className="mt-8 pt-4 border-t border-brand-border">
                  <div className="flex justify-between items-center mb-6">
                    <span className="text-sm font-bold text-brand-muted uppercase tracking-wider">Subtotal:</span>
                    <span className="text-xl font-extrabold text-brand-primary font-mono">R$ {cartTotal.toFixed(2)}</span>
                  </div>

                  {!isCheckoutSimulated ? (
                    <button 
                      onClick={() => setIsCheckoutSimulated(true)}
                      className="w-full bg-brand-primary hover:bg-brand-primaryDark text-white text-xs font-bold uppercase tracking-widest py-4 rounded-xl transition-all shadow-md flex items-center justify-center gap-2"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                      </svg>
                      Finalizar Pedido Simulado
                    </button>
                  ) : (
                    <div className="bg-[#E5DDD5] border border-green-200 rounded-2xl p-4 shadow-sm relative overflow-hidden transition-all duration-300">
                      <div className="bg-[#075E54] text-white px-3 py-2 -mx-4 -mt-4 mb-3 text-xs font-bold flex items-center gap-2">
                        <div className="w-2.5 h-2.5 rounded-full bg-green-400 animate-ping" />
                        <span>Visualização do WhatsApp do Lojista</span>
                      </div>
                      <pre className="text-[11px] font-mono text-[#262626] whitespace-pre-wrap leading-relaxed bg-white border border-gray-200 p-3 rounded-xl">
                        {getWhatsAppMessage()}
                      </pre>
                      <p className="text-[10px] text-green-800 font-semibold text-center mt-3 leading-tight">
                        Este é o formato de mensagem automática gerada pela nossa plataforma direto no painel da sua marca!
                      </p>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 4. Por que Escolher um Catálogo Virtual? */}
      <section className="bg-white py-24 px-6 border-t border-brand-border">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-extrabold text-brand-secondary tracking-tight">O Fim das Comissões do iFood e Rappi</h2>
            <p className="text-brand-muted mt-4 font-medium text-base">As plataformas de terceiros cobram até 27% do valor das suas vendas. Com a PageMaster, você é dono do seu faturamento.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-brand-background border border-brand-border p-8 rounded-3xl">
              <div className="w-12 h-12 rounded-2xl bg-blue-50 text-brand-primary flex items-center justify-center mb-6">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="text-lg font-bold text-brand-secondary mb-3">Retorno Direto (Pix)</h4>
              <p className="text-sm text-brand-muted font-medium leading-relaxed">Os pagamentos são efetuados diretamente na sua conta bancária via Pix no ato do fechamento do pedido de WhatsApp.</p>
            </div>

            <div className="bg-brand-background border border-brand-border p-8 rounded-3xl">
              <div className="w-12 h-12 rounded-2xl bg-blue-50 text-brand-primary flex items-center justify-center mb-6">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 1121.21 7.89H18" />
                </svg>
              </div>
              <h4 className="text-lg font-bold text-brand-secondary mb-3">Gestão em Tempo Real</h4>
              <p className="text-sm text-brand-muted font-medium leading-relaxed">Altere preços, atualize estoques, insira produtos ou pause vendas no painel web prático e adaptado para celular.</p>
            </div>

            <div className="bg-brand-background border border-brand-border p-8 rounded-3xl">
              <div className="w-12 h-12 rounded-2xl bg-blue-50 text-brand-primary flex items-center justify-center mb-6">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h4 className="text-lg font-bold text-brand-secondary mb-3">Carregamento Instantâneo</h4>
              <p className="text-sm text-brand-muted font-medium leading-relaxed">Nossos códigos de alta performance carregam o cardápio em menos de 1 segundo mesmo em conexões de internet 3G/4G.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. FAQ Accordion */}
      <section className="py-24 px-6 max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-brand-secondary tracking-tight">Perguntas Frequentes</h2>
          <p className="text-brand-muted mt-3 font-medium">Esclareça as principais dúvidas sobre os nossos catálogos.</p>
        </div>

        <div className="space-y-4">
          <details className="group bg-white border border-brand-border rounded-2xl p-6 shadow-sm [&_summary::-webkit-details-marker]:hidden">
            <summary className="flex items-center justify-between cursor-pointer focus:outline-none">
              <h3 className="font-extrabold text-brand-secondary text-sm md:text-base pr-4">Como os pedidos chegam até a minha equipe?</h3>
              <span className="shrink-0 transition duration-300 group-open:-rotate-180">
                <svg className="w-5 h-5 text-brand-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </span>
            </summary>
            <p className="mt-4 text-xs md:text-sm text-brand-muted leading-relaxed font-medium">
              O cliente final navega pela sua vitrine digital, seleciona as quantidades e formas de pagamento/entrega. Ao finalizar, o sistema envia o pedido pronto estruturado direto no WhatsApp da sua operação para processamento.
            </p>
          </details>

          <details className="group bg-white border border-brand-border rounded-2xl p-6 shadow-sm [&_summary::-webkit-details-marker]:hidden">
            <summary className="flex items-center justify-between cursor-pointer focus:outline-none">
              <h3 className="font-extrabold text-brand-secondary text-sm md:text-base pr-4">Há limites de produtos cadastrados ou tráfego de clientes?</h3>
              <span className="shrink-0 transition duration-300 group-open:-rotate-180">
                <svg className="w-5 h-5 text-brand-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </span>
            </summary>
            <p className="mt-4 text-xs md:text-sm text-brand-muted leading-relaxed font-medium">
              Não. Desenvolvemos com servidores dimensionados em cloud, permitindo tráfego ilimitado de usuários simultâneos e cadastro de produtos sem comissões adicionais.
            </p>
          </details>

          <details className="group bg-white border border-brand-border rounded-2xl p-6 shadow-sm [&_summary::-webkit-details-marker]:hidden">
            <summary className="flex items-center justify-between cursor-pointer focus:outline-none">
              <h3 className="font-extrabold text-brand-secondary text-sm md:text-base pr-4">O catálogo suporta cupons e taxas de entrega por bairro?</h3>
              <span className="shrink-0 transition duration-300 group-open:-rotate-180">
                <svg className="w-5 h-5 text-brand-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </span>
            </summary>
            <p className="mt-4 text-xs md:text-sm text-brand-muted leading-relaxed font-medium">
              Sim! Nossa arquitetura é modular, possibilitando o cálculo automático de frete com base em geolocalização ou CEP, além de descontos personalizados de fidelização.
            </p>
          </details>
        </div>
      </section>

      {/* 6. CTA / Rodapé de Contato */}
      <section className="bg-white text-brand-secondary py-24 px-6 border-t border-brand-border rounded-t-[3rem]">
        <div className="max-w-[1200px] mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-brand-primary font-mono text-xs font-bold tracking-[0.2em] uppercase mb-4 block">// Orçamento Exclusivo</span>
            <h2 className="text-4xl md:text-5xl font-extrabold leading-tight text-brand-secondary mb-6">Comece a vender com comissão zero.</h2>
            <p className="text-base text-brand-muted leading-relaxed font-medium mb-10">
              Solicite a criação do seu catálogo online de alto desempenho agora mesmo. Nossa equipe está pronta para integrar seu cardápio ou inventário de produtos.
            </p>
          </div>

          <div className="bg-brand-background border border-brand-border p-8 rounded-[2rem] shadow-soft">
            <form onSubmit={handleContactSubmit} className="space-y-6">
              <div>
                <input 
                  type="text" 
                  value={formData.nome} 
                  onChange={(e) => setFormData({...formData, nome: e.target.value})} 
                  placeholder="Como se chama?" 
                  required
                  className="w-full bg-white border border-brand-border rounded-xl py-4 px-5 text-sm focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transition-colors text-brand-secondary font-medium shadow-sm"
                />
              </div>
              <div>
                <textarea 
                  value={formData.ideia} 
                  onChange={(e) => setFormData({...formData, ideia: e.target.value})} 
                  placeholder="Descreva um pouco seu negócio / produtos..." 
                  required
                  rows="3"
                  className="w-full bg-white border border-brand-border rounded-xl py-4 px-5 text-sm focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transition-colors text-brand-secondary font-medium resize-none shadow-sm"
                />
              </div>
              <button 
                type="submit"
                className="w-full bg-brand-primary text-white text-xs font-bold uppercase tracking-widest py-5 rounded-xl hover:bg-brand-primaryDark transition-colors shadow-lg shadow-blue-500/20"
              >
                Solicitar Meu Catálogo
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
