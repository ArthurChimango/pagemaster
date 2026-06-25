import AgendamentoClient from "./AgendamentoClient";

export const metadata = {
  title: "Sistema de Agendamento Online e Reservas Premium | PageMaster",
  description: "Automatize seus agendamentos e reduza faltas em até 40% com nosso sistema integrado ao WhatsApp e Google Agenda. Ideal para clínicas, consultórios e salões.",
  alternates: {
    canonical: "https://pagemaster.com.br/agendamento",
  },
  openGraph: {
    type: "website",
    title: "Sistema de Agendamento Online e Reservas Premium | PageMaster",
    description: "Automatize seus agendamentos e reduza faltas em até 40% com nosso sistema integrado ao WhatsApp e Google Agenda. Ideal para clínicas, consultórios e salões.",
    url: "https://pagemaster.com.br/agendamento",
    siteName: "PageMaster",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sistema de Agendamento Online e Reservas Premium | PageMaster",
    description: "Automatize seus agendamentos e reduza faltas em até 40% com nosso sistema integrado ao WhatsApp e Google Agenda. Ideal para clínicas, consultórios e salões.",
  },
};

export default function AgendamentoPage() {
  return <AgendamentoClient />;
}
