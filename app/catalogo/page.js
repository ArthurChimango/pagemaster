import CatalogoClient from "./CatalogoClient";

export const metadata = {
  title: "Catálogo Online & Cardápio Digital Premium | PageMaster",
  description: "Crie seu catálogo virtual de alto desempenho integrado ao WhatsApp. Venda sem intermediários e comissões, receba direto por Pix e tenha um carregamento instantâneo.",
  alternates: {
    canonical: "https://pagemaster.com.br/catalogo",
  },
  openGraph: {
    type: "website",
    title: "Catálogo Online & Cardápio Digital Premium | PageMaster",
    description: "Crie seu catálogo virtual de alto desempenho integrado ao WhatsApp. Venda sem intermediários e comissões, receba direto por Pix e tenha um carregamento instantâneo.",
    url: "https://pagemaster.com.br/catalogo",
    siteName: "PageMaster",
  },
  twitter: {
    card: "summary_large_image",
    title: "Catálogo Online & Cardápio Digital Premium | PageMaster",
    description: "Crie seu catálogo virtual de alto desempenho integrado ao WhatsApp. Venda sem intermediários e comissões, receba direto por Pix e tenha um carregamento instantâneo.",
  },
};

export default function CatalogoPage() {
  return <CatalogoClient />;
}
