import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SanskritTranslator from "@/components/SanskritTranslator";

export const metadata: Metadata = {
  title: "Tradutor de Sânscrito para a Realidade | FabYoga",
  description:
    "36 posturas de yoga: o que o professor promete (sânscrito) vs. o que você realmente sente. O maior diretório humorístico de asanas da internet.",
  alternates: {
    canonical: "/ferramentas/tradutor-sanscrito",
  },
};

export default function TradutorSanscritoPage() {
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
        <SanskritTranslator />
      </main>
    </div>
  );
}
