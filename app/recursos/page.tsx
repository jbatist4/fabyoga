import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import RecursosTabs from "@/components/recursos/RecursosTabs";

export const metadata: Metadata = {
  title: "Recursos para a Prática de Yoga | FabYoga",
  description:
    "Dicionário de Sânscrito, contador de Japamala, gerador de Sankalpa, metrônomo de respiração (Pranayama) e calculadora de Brahma Muhurta para apoiar a sua prática de yoga.",
  alternates: {
    canonical: "/recursos",
  },
};

export default function RecursosPage() {
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
        <RecursosTabs />
      </main>
    </div>
  );
}
