"use client";

import { useMemo, useState } from "react";
import Image from "next/image";

const LOGO_IMAGEM = "/images/logo.png";

// Brahma Muhurta começa 1h36min (96 min) antes do nascer do sol e dura 48 min.
const ANTECEDENCIA_MIN = 96;
const DURACAO_MIN = 48;

function paraMinutos(hora: string): number | null {
  const m = hora.match(/^(\d{1,2}):(\d{2})$/);
  if (!m) return null;
  const h = Number(m[1]);
  const min = Number(m[2]);
  if (h > 23 || min > 59) return null;
  return h * 60 + min;
}

function paraHorario(minutosTotais: number): string {
  const m = ((minutosTotais % 1440) + 1440) % 1440;
  const h = Math.floor(m / 60);
  const min = m % 60;
  return `${String(h).padStart(2, "0")}:${String(min).padStart(2, "0")}`;
}

export default function BrahmaMuhurtaCalculator() {
  const [horaSol, setHoraSol] = useState("05:15");

  const resultado = useMemo(() => {
    const minutosSol = paraMinutos(horaSol);
    if (minutosSol === null) return null;
    const inicio = minutosSol - ANTECEDENCIA_MIN;
    const fim = inicio + DURACAO_MIN;
    return { inicio: paraHorario(inicio), fim: paraHorario(fim) };
  }, [horaSol]);

  return (
    <div className="flex flex-col items-center text-center max-w-xl mx-auto">
      <h2
        className="text-2xl sm:text-3xl font-bold text-brown mb-2"
        style={{ fontFamily: "var(--font-serif)" }}
      >
        Calculadora de Brahma Muhurta
      </h2>
      <p className="text-brown-light text-sm leading-relaxed mb-6">
        O Brahma Muhurta é o período mais propício para meditação e prática,
        começando 1h36 antes do nascer do sol e durando 48 minutos.
      </p>

      {/* Logo FabYoga como imagem de fundo sutil */}
      <div className="relative w-full aspect-[16/9] rounded-3xl overflow-hidden border border-sand/60 shadow-sm mb-6 bg-cream">
        <Image
          src={LOGO_IMAGEM}
          alt=""
          fill
          sizes="(max-width: 640px) 100vw, 640px"
          className="object-contain opacity-10 p-12"
        />
      </div>

      {/* Entrada do horário do nascer do sol */}
      <label className="flex flex-col items-center gap-2 mb-6">
        <span className="text-xs font-semibold uppercase tracking-wider text-brown-light">
          Horário do nascer do sol na sua cidade
        </span>
        <input
          type="time"
          value={horaSol}
          onChange={(e) => setHoraSol(e.target.value)}
          className="rounded-full border border-sand bg-white px-6 py-3 text-center text-brown text-lg font-semibold focus:outline-none focus:ring-2 focus:ring-sage/30 focus:border-sage"
        />
      </label>

      {/* Resultado */}
      {resultado ? (
        <div className="w-full bg-gold-muted border border-gold/40 rounded-2xl p-6">
          <p className="text-xs font-bold uppercase tracking-widest text-gold-dark mb-2">
            Brahma Muhurta de hoje
          </p>
          <p className="text-2xl sm:text-3xl font-bold text-brown" style={{ fontFamily: "var(--font-serif)" }}>
            {resultado.inicio} às {resultado.fim}
          </p>
          <p className="text-sm text-brown-light mt-2">
            Aproveite esses 48 minutos para meditar, respirar ou praticar em
            silêncio.
          </p>
        </div>
      ) : (
        <p className="text-sm text-red-500">
          Informe um horário válido no formato HH:MM.
        </p>
      )}
    </div>
  );
}
