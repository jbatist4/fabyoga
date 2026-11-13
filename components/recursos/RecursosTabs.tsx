"use client";

import { useState } from "react";
import JapamalaCounter from "./JapamalaCounter";
import PranayamaPacer from "./PranayamaPacer";
import BrahmaMuhurtaCalculator from "./BrahmaMuhurtaCalculator";
import RespiracaoColetiva from "./RespiracaoColetiva";
import ShavasanaTimer from "./ShavasanaTimer";

const TABS = [
  { id: "japamala", label: "Japamala" },
  { id: "pranayama", label: "Respiração" },
  { id: "brahma-muhurta", label: "Brahma Muhurta" },
  { id: "respiracao-coletiva", label: "Respiração Coletiva" },
  { id: "shavasana", label: "Shavasana" },
] as const;

type TabId = (typeof TABS)[number]["id"];

export default function RecursosTabs() {
  const [tab, setTab] = useState<TabId>("japamala");

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10 sm:py-14">
      {/* Cabeçalho */}
      <div className="text-center mb-8">
        <span className="inline-flex items-center gap-3 text-sage font-semibold text-xs tracking-[0.22em] uppercase mb-4">
          <span className="w-6 h-px bg-sage" />
          Recursos FabYoga
          <span className="w-6 h-px bg-sage" />
        </span>
        <h1
          className="text-3xl sm:text-4xl lg:text-5xl font-bold text-brown mb-3"
          style={{ fontFamily: "var(--font-serif)" }}
        >
          Ferramentas para a sua prática
        </h1>
        <p className="text-brown-light max-w-xl mx-auto leading-relaxed">
          Pequenos recursos para apoiar a sua jornada dentro e fora do tapete.
        </p>
      </div>

      {/* Navegação por abas */}
      <div className="flex gap-2 overflow-x-auto pb-2 -mx-1 px-1 mb-8 sm:justify-center">
        {TABS.map((t) => (
          <button
            key={t.id}
            onClick={() => setTab(t.id)}
            className={`flex-shrink-0 px-4 py-2.5 rounded-full text-sm font-semibold border transition-colors ${
              tab === t.id
                ? "bg-sage text-white border-sage"
                : "bg-white text-brown-light border-sand hover:border-sage"
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>

      {/* Conteúdo da aba ativa */}
      <div className="bg-white rounded-3xl border border-sand/60 shadow-sm p-5 sm:p-8">
        {tab === "japamala" && <JapamalaCounter />}
        {tab === "pranayama" && <PranayamaPacer />}
        {tab === "brahma-muhurta" && <BrahmaMuhurtaCalculator />}
        {tab === "respiracao-coletiva" && <RespiracaoColetiva />}
        {tab === "shavasana" && <ShavasanaTimer />}
      </div>
    </div>
  );
}
