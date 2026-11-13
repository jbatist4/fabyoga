import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

const SITE_URL = "https://fabyoga.com.br";
const PAGE_PATH = "/planos-e-horarios";

export const metadata: Metadata = {
  title: "Planos & Horários | FabYoga",
  description:
    "Confira os horários e valores das aulas de Yoga Dinâmico Integrativo presenciais na Casa Shanti, Bessa, e online ao vivo com Fabiane Batista.",
  alternates: {
    canonical: PAGE_PATH,
  },
  openGraph: {
    title: "Planos & Horários | FabYoga",
    description:
      "Horários e valores das aulas presenciais e online de Yoga Dinâmico Integrativo com Fabiane Batista.",
    url: `${SITE_URL}${PAGE_PATH}`,
    type: "website",
    locale: "pt_BR",
    siteName: "FabYoga",
  },
  robots: { index: true, follow: true },
};

const presencialPlans = [
  { label: "1x por semana (terça ou quinta)", value: "R$ 150,00/mês" },
  { label: "1x por semana (sábado)", value: "R$ 180,00/mês" },
  { label: "2x por semana (terça e quinta)", value: "R$ 180,00/mês" },
  { label: "2x por semana (terça ou quinta + sábado)", value: "R$ 230,00/mês" },
  { label: "3x por semana (terça, quinta e sábado)", value: "R$ 280,00/mês" },
  { label: "Aula avulsa", value: "R$ 50,00" },
];

const upgradePlans = [
  { label: "+1 aula online/semana", value: "+ R$ 40,00/mês" },
  { label: "+2 aulas online/semana", value: "+ R$ 60,00/mês" },
  { label: "Acesso total ao Online", value: "+ R$ 80,00/mês" },
];

const onlinePlans = [
  { label: "1x por semana", value: "R$ 100,00/mês" },
  { label: "2x por semana", value: "R$ 130,00/mês" },
  { label: "3x por semana (Passe Livre Online)", value: "R$ 160,00/mês" },
  { label: "Aula avulsa", value: "R$ 35,00" },
];

const presencialSchedule = [
  { days: "Terças e Quintas", time: "07h15 às 08h00" },
  { days: "Sábados", time: "06h15 às 07h30 (2 aulas em sequência)" },
];

const onlineSchedule = [
  { days: "Segundas, Quartas e Sextas", time: "19h30 às 20h15" },
];

export default function PlanosEHorariosPage() {
  return (
    <div className="min-h-screen bg-cream flex flex-col">
      {/* Header */}
      <header className="border-b border-sand/60 bg-white/80 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <Image
              src="/images/logo.png"
              alt="FabYoga"
              width={120}
              height={48}
              className="h-9 w-auto object-contain"
            />
          </Link>
          <Link
            href="/"
            className="text-sm font-medium text-brown hover:text-sage transition-colors"
          >
            ← Voltar para o site
          </Link>
        </div>
      </header>

      <main className="flex-1">
        <section className="py-16 lg:py-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-14 max-w-2xl mx-auto">
              <span className="text-sage font-semibold text-sm tracking-widest uppercase">
                Valores
              </span>
              <h1 className="font-serif text-3xl sm:text-4xl font-bold text-brown mt-3 mb-4">
                Planos & Horários
              </h1>
              <p className="text-brown-light leading-relaxed">
                Confira os horários e valores do Yoga Dinâmico Integrativo,
                presencial na Casa Shanti, Bessa, ou online ao vivo.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Presencial */}
              <div className="rounded-3xl border border-sage/20 bg-gradient-to-br from-sage-muted/60 to-white p-8 flex flex-col shadow-sm">
                <h2
                  className="text-xl font-bold text-brown mb-1"
                  style={{ fontFamily: "var(--font-serif)" }}
                >
                  Presencial
                </h2>
                <p className="text-sm text-brown-light mb-5">
                  Casa Shanti — Bessa, João Pessoa/PB
                </p>

                <div className="flex flex-col gap-2 mb-6">
                  {presencialSchedule.map((s) => (
                    <div
                      key={s.days}
                      className="bg-white/80 backdrop-blur-sm rounded-2xl px-4 py-3 border border-white/60"
                    >
                      <p className="font-semibold text-brown text-sm">{s.days}</p>
                      <p className="text-brown-light text-xs mt-0.5">{s.time}</p>
                    </div>
                  ))}
                </div>

                <ul className="flex flex-col gap-2 mb-4 flex-grow">
                  {presencialPlans.map((p) => (
                    <li
                      key={p.label}
                      className="flex items-center justify-between gap-3 text-sm bg-white/70 rounded-xl px-3.5 py-2.5 border border-white/60"
                    >
                      <span className="text-brown-light">{p.label}</span>
                      <span className="font-semibold text-brown whitespace-nowrap">
                        {p.value}
                      </span>
                    </li>
                  ))}
                </ul>

                <p className="text-xs text-brown-light leading-relaxed mb-6">
                  Aos sábados são 2 aulas em sequência: o pacote de 1x (sábado)
                  já contempla as duas aulas, e o pacote de 3x na semana
                  equivale a 4 aulas no total.
                </p>

                <div className="rounded-2xl border border-gold/30 bg-gold-muted/60 p-5 mb-6">
                  <p className="font-semibold text-brown text-sm mb-3">
                    Já é aluno presencial? Complemente com o Online
                  </p>
                  <ul className="flex flex-col gap-2">
                    {upgradePlans.map((p) => (
                      <li
                        key={p.label}
                        className="flex items-center justify-between gap-3 text-sm bg-white/70 rounded-xl px-3.5 py-2.5 border border-white/60"
                      >
                        <span className="text-brown-light">{p.label}</span>
                        <span className="font-semibold text-brown whitespace-nowrap">
                          {p.value}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  href="/#agendamento"
                  className="bg-sage hover:bg-sage-dark text-white font-semibold text-center py-3.5 px-6 rounded-full transition-all duration-300 hover:-translate-y-0.5 shadow-sm hover:shadow-md"
                >
                  Agendar Aula Experimental Grátis
                </Link>
              </div>

              {/* Online */}
              <div className="rounded-3xl border border-sand/50 bg-gradient-to-br from-sand/25 to-white p-8 flex flex-col shadow-sm">
                <h2
                  className="text-xl font-bold text-brown mb-1"
                  style={{ fontFamily: "var(--font-serif)" }}
                >
                  Online (Ao Vivo)
                </h2>
                <p className="text-sm text-brown-light mb-5">
                  De onde você estiver
                </p>

                <div className="flex flex-col gap-2 mb-6">
                  {onlineSchedule.map((s) => (
                    <div
                      key={s.days}
                      className="bg-white/80 backdrop-blur-sm rounded-2xl px-4 py-3 border border-white/60"
                    >
                      <p className="font-semibold text-brown text-sm">{s.days}</p>
                      <p className="text-brown-light text-xs mt-0.5">{s.time}</p>
                    </div>
                  ))}
                </div>

                <ul className="flex flex-col gap-2 mb-6 flex-grow">
                  {onlinePlans.map((p) => (
                    <li
                      key={p.label}
                      className="flex items-center justify-between gap-3 text-sm bg-white/70 rounded-xl px-3.5 py-2.5 border border-white/60"
                    >
                      <span className="text-brown-light">{p.label}</span>
                      <span className="font-semibold text-brown whitespace-nowrap">
                        {p.value}
                      </span>
                    </li>
                  ))}
                </ul>

                <a
                  href="https://wa.me/5583993243577?text=Ol%C3%A1%20Fabiane!%20Vi%20os%20planos%20e%20hor%C3%A1rios%20e%20gostaria%20de%20saber%20mais%20sobre%20as%20aulas%20online.%20%F0%9F%8C%BF"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-brown hover:bg-brown-light text-white font-semibold text-center py-3.5 px-6 rounded-full transition-all duration-300 hover:-translate-y-0.5 shadow-sm hover:shadow-md"
                >
                  Falar no WhatsApp
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-sand/60 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 flex flex-col sm:flex-row justify-between items-center gap-2 text-xs text-brown-light">
          <p>© {new Date().getFullYear()} FabYoga – Fabiane Batista. Todos os direitos reservados.</p>
          <p>Casa Shanti — Bessa, João Pessoa/PB</p>
        </div>
      </footer>
    </div>
  );
}
