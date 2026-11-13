"use client";

import { useState } from "react";
import Image from "next/image";

const METAS = [27, 54, 108] as const;

const LOGO_IMAGEM = "/images/logo.png";

export default function JapamalaCounter() {
  const [meta, setMeta] = useState<(typeof METAS)[number]>(108);
  const [contagem, setContagem] = useState(0);

  const completo = contagem >= meta;
  const progresso = Math.min(contagem / meta, 1);

  // Geometria do anel de progresso (SVG)
  const raio = 90;
  const circunferencia = 2 * Math.PI * raio;
  const offset = circunferencia * (1 - progresso);

  const incrementar = () => {
    if (typeof navigator !== "undefined" && navigator.vibrate) {
      navigator.vibrate(10);
    }
    setContagem((c) => (c >= meta ? c : c + 1));
  };

  const reiniciar = () => setContagem(0);

  return (
    <div className="flex flex-col items-center text-center">
      <h2
        className="text-2xl sm:text-3xl font-bold text-brown mb-2"
        style={{ fontFamily: "var(--font-serif)" }}
      >
        Contador de Ciclos Japamala
      </h2>
      <p className="text-brown-light text-sm max-w-xl mx-auto leading-relaxed mb-6">
        Toque no centro do mala a cada repetição do seu mantra e acompanhe o
        progresso até a meta escolhida.
      </p>

      {/* Seleção da meta */}
      <div className="flex gap-2 mb-8">
        {METAS.map((m) => (
          <button
            key={m}
            onClick={() => {
              setMeta(m);
              setContagem(0);
            }}
            className={`px-5 py-2 rounded-full text-sm font-semibold border transition-colors ${
              meta === m
                ? "bg-gold text-white border-gold"
                : "bg-white text-brown-light border-sand hover:border-gold"
            }`}
          >
            {m} contas
          </button>
        ))}
      </div>

      {/* Botão central com imagem de fundo do mala */}
      <button
        onClick={incrementar}
        disabled={completo}
        aria-label="Contar repetição"
        className="relative w-56 h-56 sm:w-64 sm:h-64 rounded-full flex items-center justify-center transition-transform duration-150 active:scale-95 disabled:cursor-default"
      >
        {/* Logo FabYoga como imagem de fundo sutil */}
        <div className="absolute inset-0 rounded-full overflow-hidden p-10">
          <Image
            src={LOGO_IMAGEM}
            alt=""
            fill
            sizes="256px"
            className="object-contain opacity-10"
          />
        </div>

        {/* Anel de progresso */}
        <svg viewBox="0 0 200 200" className="absolute inset-0 w-full h-full -rotate-90">
          <circle cx="100" cy="100" r={raio} fill="none" stroke="#D4C5A9" strokeWidth="8" />
          <circle
            cx="100"
            cy="100"
            r={raio}
            fill="none"
            stroke={completo ? "#7A9E6E" : "#C9A96E"}
            strokeWidth="8"
            strokeLinecap="round"
            strokeDasharray={circunferencia}
            strokeDashoffset={offset}
            style={{ transition: "stroke-dashoffset 0.2s ease" }}
          />
        </svg>

        {/* Conteúdo central */}
        <div className="relative bg-white/85 backdrop-blur-sm rounded-full w-40 h-40 sm:w-48 sm:h-48 flex flex-col items-center justify-center shadow-inner">
          <span className="text-4xl sm:text-5xl font-bold text-brown" style={{ fontFamily: "var(--font-serif)" }}>
            {contagem}
          </span>
          <span className="text-sm text-brown-light">de {meta}</span>
        </div>
      </button>

      {completo && (
        <p className="mt-6 text-sage-dark font-semibold">
          Ciclo completo. Que esta prática traga paz ao seu dia.
        </p>
      )}

      <button
        onClick={reiniciar}
        className="mt-6 text-sm font-medium text-brown-light hover:text-brown underline underline-offset-4 transition-colors"
      >
        Reiniciar contagem
      </button>
    </div>
  );
}
