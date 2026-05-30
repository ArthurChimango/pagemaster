import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata = {
  title: "PageMaster | Criação de Sites, Sistemas Web e Landing Pages em Uberlândia",
  description: "Desenvolvimento de sites profissionais, landing pages de alta conversão e sistemas sob medida em Uberlândia. Cardápios digitais, agendamentos online e mais.",
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://pagemaster.com.br/",
  },
  openGraph: {
    type: "website",
    title: "PageMaster | Criação de Sites, Sistemas Web e Landing Pages em Uberlândia",
    description: "Desenvolvimento de sites profissionais, landing pages de alta conversão e sistemas sob medida em Uberlândia. Cardápios digitais, agendamentos online e mais.",
    images: [
      {
        url: "https://pagemaster.com.br/assets/fundo.png",
      },
    ],
    url: "https://pagemaster.com.br/",
    siteName: "PageMaster",
  },
  twitter: {
    card: "summary_large_image",
    title: "PageMaster | Criação de Sites, Sistemas Web e Landing Pages em Uberlândia",
    description: "Desenvolvimento de sites profissionais, landing pages de alta conversão e sistemas sob medida em Uberlândia. Cardápios digitais, agendamentos online e mais.",
    images: ["https://pagemaster.com.br/assets/fundo.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-PT" className={`${inter.variable} h-full antialiased`}>
      <head>
        {/* Google Tag Manager */}
        <Script id="gtm" strategy="afterInteractive">
          {`(function (w, d, s, l, i) {
              w[l] = w[l] || []; w[l].push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' }); var f = d.getElementsByTagName(s)[0], j = d.createElement(s), dl = l != 'dataLayer' ? '&l=' + l : ''; j.async = true; j.src = 'https://www.googletagmanager.com/gtm.js?id=' + i + dl; f.parentNode.insertBefore(j, f);
          })(window, document, 'script', 'dataLayer', 'GTM-NHWXXG3J');`}
        </Script>
        
        {/* Alyx Analytics Script */}
        <Script src="/assets/js/analytics.js" data-site-id="CiQ6bywsokk6bad89Um4" strategy="afterInteractive" />

        {/* Dados Estruturados JSON-LD (SEO Local e Serviços) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "LocalBusiness",
                  "@id": "https://pagemaster.com.br/#organization",
                  "name": "PageMaster",
                  "url": "https://pagemaster.com.br/",
                  "logo": "https://pagemaster.com.br/assets/logo.png",
                  "image": "https://pagemaster.com.br/assets/fundo.png",
                  "description": "Desenvolvimento de sites profissionais, landing pages de alta conversão e sistemas web sob medida em Uberlândia.",
                  "address": {
                    "@type": "PostalAddress",
                    "addressLocality": "Uberlândia",
                    "addressRegion": "MG",
                    "addressCountry": "BR"
                  },
                  "contactPoint": {
                    "@type": "ContactPoint",
                    "telephone": "+55-34-99778-403",
                    "contactType": "sales",
                    "areaServed": "BR",
                    "availableLanguage": "Portuguese"
                  }
                },
                {
                  "@type": "WebSite",
                  "@id": "https://pagemaster.com.br/#website",
                  "url": "https://pagemaster.com.br/",
                  "name": "PageMaster",
                  "description": "Engenharia Digital Premium - Criação de Sites e Sistemas Web",
                  "publisher": {
                    "@id": "https://pagemaster.com.br/#organization"
                  }
                },
                {
                  "@type": "Service",
                  "name": "Criação de Sites e Desenvolvimento de Sistemas Web",
                  "provider": {
                    "@id": "https://pagemaster.com.br/#organization"
                  },
                  "areaServed": {
                    "@type": "AdministrativeArea",
                    "name": "Uberlândia"
                  },
                  "hasOfferCatalog": {
                    "@type": "OfferCatalog",
                    "name": "Serviços de Desenvolvimento Web",
                    "itemListElement": [
                      {
                        "@type": "Offer",
                        "itemOffered": {
                          "@type": "Service",
                          "name": "Criação de Sites Institucionais",
                          "description": "Desenvolvimento de sites modernos e responsivos para empresas e profissionais liberais."
                        }
                      },
                      {
                        "@type": "Offer",
                        "itemOffered": {
                          "@type": "Service",
                          "name": "Desenvolvimento de Landing Pages de Alta Conversão",
                          "description": "Criação de landing pages otimizadas para anúncios no Google Ads e Meta Ads."
                        }
                      },
                      {
                        "@type": "Offer",
                        "itemOffered": {
                          "@type": "Service",
                          "name": "Desenvolvimento de Sistemas Web Personalizados",
                          "description": "Criação de sistemas web sob medida, incluindo plataformas de agendamento online e cardápios digitais para delivery."
                        }
                      }
                    ]
                  }
                }
              ]
            })
          }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-NHWXXG3J"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {children}
      </body>
    </html>
  );
}
