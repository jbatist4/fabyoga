import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import JapamalaCard from "@/components/loja/JapamalaCard";
import { japamalas } from "@/lib/japamalasData";

const SITE_URL = "https://fabyoga.com.br";
const PAGE_PATH = "/loja";

export const metadata: Metadata = {
  title: "Japamalas Artesanais | Loja FabYoga",
  description:
    "Japamalas artesanais e peças únicas feitas à mão por Fabiane Batista. Cada mala é confeccionada sob demanda — fale pelo WhatsApp para consultar disponibilidade.",
  alternates: {
    canonical: PAGE_PATH,
  },
  openGraph: {
    title: "Japamalas Artesanais | Loja FabYoga",
    description:
      "Japamalas artesanais e peças únicas feitas à mão por Fabiane Batista, sob demanda.",
    url: `${SITE_URL}${PAGE_PATH}`,
    type: "website",
    locale: "pt_BR",
    siteName: "FabYoga",
  },
};

export default function LojaPage() {
  return (
    <div className="min-h-screen bg-cream flex flex-col">
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
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-12 max-w-2xl mx-auto">
              <span className="text-sage font-semibold text-sm tracking-widest uppercase">
                Loja
              </span>
              <h1 className="font-serif text-3xl sm:text-4xl font-bold text-brown mt-3 mb-4">
                Japamalas{" "}
                <span
                  style={{
                    fontFamily: "var(--font-display)",
                    fontStyle: "italic",
                    fontWeight: 300,
                    color: "var(--color-gold)",
                  }}
                >
                  Artesanais
                </span>
              </h1>
              <p className="text-brown-light leading-relaxed">
                Cada japamala é feita à mão, uma peça de cada vez, sob demanda.
                Não trabalhamos com estoque fixo — ao encontrar a peça que
                conversa com você, fale direto com Fabiane pelo WhatsApp para
                confirmar disponibilidade e combinar a confecção.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
              {japamalas.map((japamala) => (
                <JapamalaCard key={japamala.id} japamala={japamala} />
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
