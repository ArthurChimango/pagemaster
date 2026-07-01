import EjClient from "./EjClient";

export const metadata = {
  title: "Nexus Suite — ERP & CRM Inteligente para Empresas Juniores | PageMaster",
  description: "Apresentação do Nexus Suite: o sistema definitivo de CRM, PMO, Gestão de Membros, OKRs e Financeiro feito sob medida para impulsionar sua Empresa Júnior por R$ 600,00 pagamento único.",
  alternates: {
    canonical: "https://pagemaster.com.br/ej",
  },
  openGraph: {
    type: "website",
    title: "Nexus Suite — ERP & CRM Inteligente para Empresas Juniores | PageMaster",
    description: "Apresentação do Nexus Suite: o sistema definitivo de CRM, PMO, Gestão de Membros, OKRs e Financeiro feito sob medida para impulsionar sua Empresa Júnior por R$ 600,00 pagamento único.",
    url: "https://pagemaster.com.br/ej",
    siteName: "PageMaster",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nexus Suite — ERP & CRM Inteligente para Empresas Juniores | PageMaster",
    description: "Apresentação do Nexus Suite: o sistema definitivo de CRM, PMO, Gestão de Membros, OKRs e Financeiro feito sob medida para impulsionar sua Empresa Júnior por R$ 600,00 pagamento único.",
  },
};

export default function EjPage() {
  return <EjClient />;
}
