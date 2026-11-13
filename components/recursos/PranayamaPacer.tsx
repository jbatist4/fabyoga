"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const LOGO_IMAGEM = "/images/logo.png";

type Fase = "inspire" | "segure" | "expire";

const FASE_LABEL: Record<Fase, string> = {
  inspire: "Inspire",
  segure: "Segure",
  expire: "Expire",
};

export default function PranayamaPacer() {
  const [inspiracao, setInspiracao] = useState(4);
  const [retencao, setRetencao] = useState(4);
  const [expiracao, setExpiracao] = useState(6);
  const [ativo, setAtivo] = useState(false);
  const [fase, setFase] = useState<Fase>("inspire");
  const [duracaoFase, setDuracaoFase] = useState(inspiracao);

  const audioCtxRef = useRef<AudioContext | null>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Bipe sutil via Web Audio API a cada troca de fase
  const tocarBeep = () => {
    try {
      type AudioWindow = typeof window & { webkitAudioContext?: typeof AudioContext };
      const w = window as AudioWindow;
      if (!audioCtxRef.current) {
        audioCtxRef.current = new (w.AudioContext || w.webkitAudioContext)();
      }
      const ctx = audioCtxRef.current;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = "sine";
      osc.frequency.value = 432;
      gain.gain.setValueAtTime(0.0001, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.12, ctx.currentTime + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.35);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.35);
    } catch {
      // Web Audio indisponível neste navegador — segue apenas com o visual
    }
  };

  useEffect(() => {
    if (!ativo) return;

    const sequencia: { fase: Fase; duracao: number }[] = [
      { fase: "inspire", duracao: inspiracao },
      ...(retencao > 0 ? [{ fase: "segure" as Fase, duracao: retencao }] : []),
      { fase: "expire", duracao: expiracao },
    ];

    let i = 0;
    const passo = () => {
      const atual = sequencia[i % sequencia.length];
      setFase(atual.fase);
      setDuracaoFase(atual.duracao);
      tocarBeep();
      timeoutRef.current = setTimeout(() => {
        i++;
        passo();
      }, atual.duracao * 1000);
    };
    passo();

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [ativo, inspiracao, retencao, expiracao]);

  // Escala do círculo: expande na inspiração/retenção, contrai na expiração
  const escalaAlvo = ativo ? (fase === "expire" ? 0.65 : 1.35) : 1;
  const transicaoSegundos = ativo ? duracaoFase : 0.6;

  return (
    <div className="flex flex-col items-center text-center">
      <h2
        className="text-2xl sm:text-3xl font-bold text-brown mb-2"
        style={{ fontFamily: "var(--font-serif)" }}
      >
        Metrônomo Respiratório (Pranayama Pacer)
      </h2>
      <p className="text-brown-light text-sm max-w-xl mx-auto leading-relaxed mb-6">
        Defina os tempos da sua respiração e siga o círculo: ele expande na
        inspiração, permanece na retenção e contrai na expiração.
      </p>

      {/* Configurações */}
      <div className="grid grid-cols-3 gap-3 w-full max-w-md mb-8">
        <label className="flex flex-col gap-1 text-xs font-semibold text-brown-light">
          Inspiração (s)
          <input
            type="number"
            min={1}
            max={30}
            value={inspiracao}
            disabled={ativo}
            onChange={(e) => setInspiracao(Math.max(1, Number(e.target.value) || 1))}
            className="rounded-xl border border-sand bg-white px-3 py-2 text-center text-brown text-sm focus:outline-none focus:ring-2 focus:ring-sage/30 focus:border-sage disabled:opacity-50"
          />
        </label>
        <label className="flex flex-col gap-1 text-xs font-semibold text-brown-light">
          Retenção (s)
          <input
            type="number"
            min={0}
            max={30}
            value={retencao}
            disabled={ativo}
            onChange={(e) => setRetencao(Math.max(0, Number(e.target.value) || 0))}
            className="rounded-xl border border-sand bg-white px-3 py-2 text-center text-brown text-sm focus:outline-none focus:ring-2 focus:ring-sage/30 focus:border-sage disabled:opacity-50"
          />
        </label>
        <label className="flex flex-col gap-1 text-xs font-semibold text-brown-light">
          Expiração (s)
          <input
            type="number"
            min={1}
            max={30}
            value={expiracao}
            disabled={ativo}
            onChange={(e) => setExpiracao(Math.max(1, Number(e.target.value) || 1))}
            className="rounded-xl border border-sand bg-white px-3 py-2 text-center text-brown text-sm focus:outline-none focus:ring-2 focus:ring-sage/30 focus:border-sage disabled:opacity-50"
          />
        </label>
      </div>

      {/* Área visual: logo FabYoga sutil ao fundo + círculo animado */}
      <div className="relative w-full max-w-sm aspect-square rounded-3xl overflow-hidden border border-sand/60 shadow-sm flex items-center justify-center mb-8 bg-cream">
        <Image
          src={LOGO_IMAGEM}
          alt=""
          fill
          sizes="384px"
          className="object-contain opacity-10 p-12"
        />

        <div
          className="relative rounded-full bg-sage/40 border-2 border-sage flex items-center justify-center"
          style={{
            width: "45%",
            height: "45%",
            transform: `scale(${escalaAlvo})`,
            transitionProperty: "transform",
            transitionDuration: `${transicaoSegundos}s`,
            transitionTimingFunction: "ease-in-out",
          }}
        >
          <span className="text-white font-semibold text-sm sm:text-base drop-shadow">
            {ativo ? FASE_LABEL[fase] : "Pronto"}
          </span>
        </div>
      </div>

      <button
        onClick={() => setAtivo((v) => !v)}
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
