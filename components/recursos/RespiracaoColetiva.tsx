"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const LOGO_IMAGEM = "/images/logo.png";

type Fase = "inspire" | "retenha-cheio" | "expire" | "retenha-vazio";

const FASE_LABEL: Record<Fase, string> = {
  inspire: "Inspire",
  "retenha-cheio": "Retenha (Cheio)",
  expire: "Expire",
  "retenha-vazio": "Retenha (Vazio)",
};

const MODOS = {
  equilibrio: {
    label: "Modo Equilíbrio (4-4-4-4)",
    sequencia: [
      { fase: "inspire" as Fase, duracao: 4 },
      { fase: "retenha-cheio" as Fase, duracao: 4 },
      { fase: "expire" as Fase, duracao: 4 },
      { fase: "retenha-vazio" as Fase, duracao: 4 },
    ],
  },
  calmante: {
    label: "Modo Calmante (4-2-4)",
    sequencia: [
      { fase: "inspire" as Fase, duracao: 4 },
      { fase: "retenha-cheio" as Fase, duracao: 2 },
      { fase: "expire" as Fase, duracao: 4 },
    ],
  },
} as const;

type ModoId = keyof typeof MODOS;

export default function RespiracaoColetiva() {
  const [modo, setModo] = useState<ModoId>("equilibrio");
  const [ativo, setAtivo] = useState(false);
  const [fase, setFase] = useState<Fase>("inspire");
  const [duracaoFase, setDuracaoFase] = useState(4);

  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (!ativo) return;

    const sequencia = MODOS[modo].sequencia;
    let i = 0;
    const passo = () => {
      const atual = sequencia[i % sequencia.length];
      setFase(atual.fase);
      setDuracaoFase(atual.duracao);
      timeoutRef.current = setTimeout(() => {
        i++;
        passo();
      }, atual.duracao * 1000);
    };
    passo();

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [ativo, modo]);

  // Expande na inspiração e na retenção com pulmões cheios, contrai na expiração e na retenção vazia
  const expandido = fase === "inspire" || fase === "retenha-cheio";
  const escalaAlvo = ativo ? (expandido ? 1.4 : 0.6) : 1;
  const transicaoSegundos =
    ativo && (fase === "inspire" || fase === "expire") ? duracaoFase : 0.6;

  const iniciar = () => {
    setFase("inspire");
    setDuracaoFase(MODOS[modo].sequencia[0].duracao);
    setAtivo(true);
  };

  const parar = () => {
    setAtivo(false);
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  };

  return (
    <div className="flex flex-col items-center text-center">
      <span className="inline-block bg-sage-muted text-sage-dark text-[11px] font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-3">
        Para uso em aula
      </span>
      <h2
        className="text-2xl sm:text-3xl font-bold text-brown mb-2"
        style={{ fontFamily: "var(--font-serif)" }}
      >
        Gerador de Respiração Coletiva
      </h2>
      <p className="text-brown-light text-sm max-w-xl mx-auto leading-relaxed mb-6">
        Projete esta tela ou mostre no tablet para guiar a respiração da
        turma de olhos abertos. O círculo se expande e contrai acompanhando
        cada fase da respiração.
      </p>

      {/* Seleção de modo */}
      <div className="flex flex-wrap gap-2 justify-center mb-8">
        {(Object.keys(MODOS) as ModoId[]).map((id) => (
          <button
            key={id}
            onClick={() => setModo(id)}
            disabled={ativo}
            className={`px-4 py-2.5 rounded-full text-sm font-semibold border transition-colors disabled:opacity-50 disabled:cursor-not-allowed ${
              modo === id
                ? "bg-sage text-white border-sage"
                : "bg-white text-brown-light border-sand hover:border-sage"
            }`}
          >
            {MODOS[id].label}
          </button>
        ))}
      </div>

      {/* Área visual: logo FabYoga sutil ao fundo + círculo animado */}
      <div className="relative w-full max-w-lg aspect-square sm:aspect-video rounded-3xl overflow-hidden border border-sand/60 shadow-sm flex items-center justify-center mb-8 bg-cream">
        <Image
          src={LOGO_IMAGEM}
          alt=""
          fill
          sizes="(max-width: 640px) 100vw, 512px"
          className="object-contain opacity-10 p-12"
        />

        <div
          className="relative rounded-full bg-sage/40 border-2 border-sage flex items-center justify-center"
          style={{
            width: "40%",
            height: "40%",
            transform: `scale(${escalaAlvo})`,
            transitionProperty: "transform",
            transitionDuration: `${transicaoSegundos}s`,
            transitionTimingFunction: "ease-in-out",
          }}
        >
          <span className="text-white font-semibold text-base sm:text-2xl drop-shadow text-center px-4">
            {ativo ? FASE_LABEL[fase] : "Pronto"}
          </span>
        </div>
      </div>

      <button
        onClick={ativo ? parar : iniciar}
        className={`inline-flex items-center justify-center gap-2 font-semibold px-8 py-3 rounded-full transition-all duration-300 text-sm hover:-translate-y-0.5 hover:shadow-lg ${
          ativo
            ? "bg-brown hover:bg-brown-light text-white"
            : "bg-sage hover:bg-sage-dark text-white"
        }`}
      >
        {ativo ? "Parar" : "Iniciar"}
      </button>
    </div>
  );
}
