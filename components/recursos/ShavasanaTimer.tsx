"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const LOGO_IMAGEM = "/images/logo.png";

const DURACOES_MIN = [5, 7, 10] as const;

type AudioWindow = typeof window & { webkitAudioContext?: typeof AudioContext };

type SomAtivo = {
  oscEsquerda: OscillatorNode;
  oscDireita: OscillatorNode;
  ruido: AudioBufferSourceNode;
  master: GainNode;
};

function criarContextoAudio(): AudioContext {
  const w = window as AudioWindow;
  const Ctx = w.AudioContext || w.webkitAudioContext;
  return new Ctx();
}

// Gera um buffer de ruído rosa (algoritmo de Paul Kellet) para um som
// ambiente suave de fundo durante o relaxamento.
function criarBufferRuidoRosa(ctx: AudioContext): AudioBuffer {
  const duracaoSegundos = 4;
  const tamanho = duracaoSegundos * ctx.sampleRate;
  const buffer = ctx.createBuffer(2, tamanho, ctx.sampleRate);

  for (let canal = 0; canal < 2; canal++) {
    const dados = buffer.getChannelData(canal);
    let b0 = 0, b1 = 0, b2 = 0, b3 = 0, b4 = 0, b5 = 0, b6 = 0;
    for (let i = 0; i < tamanho; i++) {
      const white = Math.random() * 2 - 1;
      b0 = 0.99886 * b0 + white * 0.0555179;
      b1 = 0.99332 * b1 + white * 0.0750759;
      b2 = 0.969 * b2 + white * 0.153852;
      b3 = 0.8665 * b3 + white * 0.3104856;
      b4 = 0.55 * b4 + white * 0.5329522;
      b5 = -0.7616 * b5 - white * 0.016898;
      const valor = b0 + b1 + b2 + b3 + b4 + b5 + b6 + white * 0.5362;
      b6 = white * 0.115926;
      dados[i] = valor * 0.11;
    }
  }

  return buffer;
}

// Inicia as ondas binaurais (100Hz no canal esquerdo, 106Hz no direito —
// pulso de 6Hz, frequência Theta de relaxamento profundo) misturadas a um
// ruído rosa muito suave de fundo.
function iniciarSomBinaural(ctx: AudioContext): SomAtivo {
  const merger = ctx.createChannelMerger(2);
  const master = ctx.createGain();
  master.gain.setValueAtTime(0, ctx.currentTime);
  master.gain.linearRampToValueAtTime(0.15, ctx.currentTime + 2);

  const oscEsquerda = ctx.createOscillator();
  oscEsquerda.type = "sine";
  oscEsquerda.frequency.value = 100;

  const oscDireita = ctx.createOscillator();
  oscDireita.type = "sine";
  oscDireita.frequency.value = 106;

  oscEsquerda.connect(merger, 0, 0);
  oscDireita.connect(merger, 0, 1);

  const ruido = ctx.createBufferSource();
  ruido.buffer = criarBufferRuidoRosa(ctx);
  ruido.loop = true;
  const ganhoRuido = ctx.createGain();
  ganhoRuido.gain.value = 0.04;
  ruido.connect(ganhoRuido).connect(master);

  merger.connect(master);
  master.connect(ctx.destination);

  oscEsquerda.start();
  oscDireita.start();
  ruido.start();

  return { oscEsquerda, oscDireita, ruido, master };
}

// Encerra suavemente as ondas binaurais e o ruído de fundo.
function pararSomBinaural(ctx: AudioContext, som: SomAtivo) {
  const agora = ctx.currentTime;
  som.master.gain.cancelScheduledValues(agora);
  som.master.gain.setValueAtTime(som.master.gain.value, agora);
  som.master.gain.linearRampToValueAtTime(0, agora + 0.5);
  setTimeout(() => {
    try {
      som.oscEsquerda.stop();
      som.oscDireita.stop();
      som.ruido.stop();
    } catch {
      // já parado
    }
  }, 550);
}

// Toca um sino/gongo suave para sinalizar o fim do Shavasana.
function tocarGongo(ctx: AudioContext) {
  const agora = ctx.currentTime;
  [220, 330, 440].forEach((frequencia, indice) => {
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = "sine";
    osc.frequency.value = frequencia;
    gain.gain.setValueAtTime(0.0001, agora);
    gain.gain.exponentialRampToValueAtTime(0.25 / (indice + 1), agora + 0.05);
    gain.gain.exponentialRampToValueAtTime(0.0001, agora + 5);
    osc.connect(gain).connect(ctx.destination);
    osc.start(agora);
    osc.stop(agora + 5);
  });
}

function formatarTempo(segundos: number): string {
  const m = Math.floor(segundos / 60);
  const s = segundos % 60;
  return `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
}

export default function ShavasanaTimer() {
  const [duracaoMin, setDuracaoMin] = useState<(typeof DURACOES_MIN)[number]>(7);
  const [segundosRestantes, setSegundosRestantes] = useState(7 * 60);
  const [ativo, setAtivo] = useState(false);

  const audioCtxRef = useRef<AudioContext | null>(null);
  const somRef = useRef<SomAtivo | null>(null);

  useEffect(() => {
    if (!ativo) return;

    const id = setInterval(() => {
      setSegundosRestantes((s) => {
        if (s <= 1) {
          const ctx = audioCtxRef.current;
          const som = somRef.current;
          if (ctx && som) {
            pararSomBinaural(ctx, som);
            somRef.current = null;
            tocarGongo(ctx);
          }
          setAtivo(false);
          return 0;
        }
        return s - 1;
      });
    }, 1000);

    return () => clearInterval(id);
  }, [ativo]);

  // Garante que o áudio pare se o componente for desmontado durante a prática
  useEffect(() => {
    return () => {
      const ctx = audioCtxRef.current;
      const som = somRef.current;
      if (ctx && som) pararSomBinaural(ctx, som);
      ctx?.close();
    };
  }, []);

  const iniciar = () => {
    if (!audioCtxRef.current) {
      audioCtxRef.current = criarContextoAudio();
    }
    const ctx = audioCtxRef.current;
    if (ctx.state === "suspended") ctx.resume();

    somRef.current = iniciarSomBinaural(ctx);
    setSegundosRestantes(duracaoMin * 60);
    setAtivo(true);
  };

  const parar = () => {
    const ctx = audioCtxRef.current;
    const som = somRef.current;
    if (ctx && som) {
      pararSomBinaural(ctx, som);
      somRef.current = null;
    }
    setAtivo(false);
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
        Temporizador de Shavasana
      </h2>
      <p className="text-brown-light text-sm max-w-xl mx-auto leading-relaxed mb-1">
        Um cronômetro para o relaxamento final, com ondas binaurais em
        frequência Theta e ruído rosa suave para aprofundar o descanso.
      </p>
      <p className="text-brown-light text-xs max-w-xl mx-auto leading-relaxed mb-6 italic">
        Recomenda-se o uso de fones de ouvido para o efeito binaural.
      </p>

      {/* Logo FabYoga como imagem de fundo sutil */}
      <div className="relative w-full max-w-lg aspect-video rounded-3xl overflow-hidden border border-sand/60 shadow-sm flex items-center justify-center mb-8 bg-cream">
        <Image
          src={LOGO_IMAGEM}
          alt=""
          fill
          sizes="(max-width: 640px) 100vw, 512px"
          className="object-contain opacity-10 p-12"
        />
        <span
          className="relative text-4xl sm:text-6xl font-bold text-brown"
          style={{ fontFamily: "var(--font-serif)" }}
        >
          {formatarTempo(segundosRestantes)}
        </span>
      </div>

      {/* Seleção de duração */}
      <div className="flex gap-2 mb-8">
        {DURACOES_MIN.map((min) => (
          <button
            key={min}
            onClick={() => {
              setDuracaoMin(min);
              setSegundosRestantes(min * 60);
            }}
            disabled={ativo}
            className={`px-5 py-2 rounded-full text-sm font-semibold border transition-colors disabled:opacity-50 disabled:cursor-not-allowed ${
              duracaoMin === min
                ? "bg-gold text-white border-gold"
                : "bg-white text-brown-light border-sand hover:border-gold"
            }`}
          >
            {min} min
          </button>
        ))}
      </div>

      <button
        onClick={ativo ? parar : iniciar}
        className={`inline-flex items-center justify-center gap-2 font-semibold px-8 py-3 rounded-full transition-all duration-300 text-sm hover:-translate-y-0.5 hover:shadow-lg ${
          ativo
            ? "bg-brown hover:bg-brown-light text-white"
            : "bg-sage hover:bg-sage-dark text-white"
        }`}
      >
        {ativo ? "Parar" : "Iniciar Shavasana"}
      </button>
    </div>
  );
}
