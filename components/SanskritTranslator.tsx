"use client";

import { useMemo, useState } from "react";
import { asanasData, type Asana, type Categoria, type Nivel } from "@/lib/asanasData";

const CATEGORIAS: (Categoria | "Todas")[] = [
  "Todas",
  "Força",
  "Alongamento",
  "Equilíbrio",
  "Invertidas",
  "Sentadas/Torções",
];

const NIVEIS: (Nivel | "Todos")[] = ["Todos", "Iniciante", "Intermediário", "Avançado"];

const CAT_STYLES: Record<Categoria, string> = {
  "Força": "bg-sage-muted text-sage-dark",
  "Alongamento": "bg-gold-muted text-gold-dark",
  "Equilíbrio": "bg-blue-50 text-blue-600",
  "Invertidas": "bg-purple-50 text-purple-600",
  "Sentadas/Torções": "bg-rose-50 text-rose-600",
};

const NIVEL_STYLES: Record<Nivel, string> = {
  "Iniciante": "bg-emerald-50 text-emerald-600",
  "Intermediário": "bg-amber-50 text-amber-600",
  "Avançado": "bg-red-50 text-red-600",
};

function normalize(str: string): string {
  return str
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .trim();
}

function fuzzyMatch(query: string, target: string): boolean {
  const q = normalize(query);
  const t = normalize(target);
  if (!q) return true;
  if (t.includes(q)) return true;

  // Subsequence fallback for typos / partial matches
  let qi = 0;
  for (let i = 0; i < t.length && qi < q.length; i++) {
    if (t[i] === q[qi]) qi++;
  }
  return qi === q.length;
}

const SearchIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 flex-shrink-0">
    <circle cx="11" cy="11" r="7" />
    <path d="m21 21-4.3-4.3" />
  </svg>
);

const CloseIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
    <path d="M18 6 6 18M6 6l12 12" />
  </svg>
);

const ShareIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
    <circle cx="18" cy="5" r="3" />
    <circle cx="6" cy="12" r="3" />
    <circle cx="18" cy="19" r="3" />
    <path d="M8.59 13.51 15.42 17.49M15.41 6.51 8.59 10.49" />
  </svg>
);

const DiceIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
    <rect x="3" y="3" width="18" height="18" rx="3" />
    <circle cx="8" cy="8" r="1" fill="currentColor" />
    <circle cx="16" cy="8" r="1" fill="currentColor" />
    <circle cx="8" cy="16" r="1" fill="currentColor" />
    <circle cx="16" cy="16" r="1" fill="currentColor" />
    <circle cx="12" cy="12" r="1" fill="currentColor" />
  </svg>
);

export default function SanskritTranslator() {
  const [query, setQuery] = useState("");
  const [cat, setCat] = useState<(Categoria | "Todas")>("Todas");
  const [nivel, setNivel] = useState<(Nivel | "Todos")>("Todos");
  const [modoSincero, setModoSincero] = useState(false);
  const [selected, setSelected] = useState<Asana | null>(null);
  const [shareOpen, setShareOpen] = useState(false);

  const filtered = useMemo(() => {
    return asanasData.filter((a) => {
      if (cat !== "Todas" && a.cat !== cat) return false;
      if (nivel !== "Todos" && a.nivel !== nivel) return false;
      if (query && !fuzzyMatch(query, a.nome) && !fuzzyMatch(query, a.traducao)) return false;
      return true;
    });
  }, [query, cat, nivel]);

  const sortearAsana = () => {
    const pool = filtered.length > 0 ? filtered : asanasData;
    const random = pool[Math.floor(Math.random() * pool.length)];
    setSelected(random);
    setShareOpen(false);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 sm:py-14">
      {/* Header */}
      <div className="text-center mb-8">
        <span className="inline-flex items-center gap-3 text-sage font-semibold text-xs tracking-[0.22em] uppercase mb-4">
          <span className="w-6 h-px bg-sage" />
          Ferramentas FabYoga
        </span>
        <h1
          className="text-3xl sm:text-4xl lg:text-5xl font-bold text-brown mb-3 transition-transform duration-300 hover:-rotate-1 inline-block"
          style={{ fontFamily: "var(--font-serif)" }}
        >
          Tradutor de{" "}
          <span
            className="text-sage"
            style={{ fontFamily: "var(--font-display)", fontWeight: 300, fontStyle: "italic" }}
          >
            Sânscrito
          </span>{" "}
          para a Realidade
        </h1>
        <p className="text-brown-light max-w-xl mx-auto leading-relaxed">
          36 asanas, dois lados da história: o que o professor promete e o que
          o seu corpo realmente sente. 🧘
        </p>
      </div>

      {/* Search + random */}
      <div className="flex flex-col sm:flex-row gap-3 mb-5">
        <div className="relative flex-1">
          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-brown-light/60">
            <SearchIcon />
          </span>
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Buscar por nome em sânscrito ou português..."
            className="w-full rounded-full border border-sand bg-white pl-11 pr-4 py-3 text-brown placeholder:text-brown-light/50 focus:outline-none focus:ring-2 focus:ring-sage/30 focus:border-sage transition-all text-sm"
          />
        </div>
        <button
          onClick={sortearAsana}
          className="inline-flex items-center justify-center gap-2 bg-sage hover:bg-sage-dark text-white font-semibold px-6 py-3 rounded-full transition-all duration-300 text-sm whitespace-nowrap hover:-translate-y-0.5 hover:shadow-lg"
        >
          <DiceIcon />
          Postura Aleatória
        </button>
      </div>

      {/* Modo Sincero toggle */}
      <div className="flex items-center justify-center gap-3 mb-8">
        <span className={`text-sm font-medium transition-colors ${!modoSincero ? "text-brown" : "text-brown-light/50"}`}>
          Expectativa Teórica
        </span>
        <button
          role="switch"
          aria-checked={modoSincero}
          onClick={() => setModoSincero((v) => !v)}
          className={`relative w-12 h-7 rounded-full transition-colors duration-300 flex-shrink-0 ${
            modoSincero ? "bg-red-400" : "bg-sage"
          }`}
        >
          <span
            className={`absolute top-1 left-1 w-5 h-5 bg-white rounded-full shadow transition-transform duration-300 ${
              modoSincero ? "translate-x-5" : "translate-x-0"
            }`}
          />
        </button>
        <span className={`text-sm font-medium transition-colors ${modoSincero ? "text-red-500" : "text-brown-light/50"}`}>
          Realidade Nua e Crua
        </span>
      </div>

      {/* Filters */}
      <div className="flex flex-col gap-3 mb-8">
        <div className="flex gap-2 overflow-x-auto pb-1 -mx-1 px-1">
          {CATEGORIAS.map((c) => (
            <button
              key={c}
              onClick={() => setCat(c)}
              className={`flex-shrink-0 px-4 py-2 rounded-full text-xs font-semibold border transition-colors ${
                cat === c
                  ? "bg-sage text-white border-sage"
                  : "bg-white text-brown-light border-sand hover:border-sage"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
        <div className="flex gap-2 overflow-x-auto pb-1 -mx-1 px-1">
          {NIVEIS.map((n) => (
            <button
              key={n}
              onClick={() => setNivel(n)}
              className={`flex-shrink-0 px-4 py-2 rounded-full text-xs font-semibold border transition-colors ${
                nivel === n
                  ? "bg-gold text-white border-gold"
                  : "bg-white text-brown-light border-sand hover:border-gold"
              }`}
            >
              {n}
            </button>
          ))}
        </div>
      </div>

      {/* Results count */}
      <p className="text-xs text-brown-light/70 mb-4">
        {filtered.length} {filtered.length === 1 ? "postura encontrada" : "posturas encontradas"}
      </p>

      {/* Grid */}
      {filtered.length === 0 ? (
        <div className="text-center py-16 text-brown-light">
          Nenhuma postura encontrada. Tente outro termo de busca. 🤔
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((a) => (
            <button
              key={a.id}
              onClick={() => {
                setSelected(a);
                setShareOpen(false);
              }}
              className="text-left bg-white rounded-2xl border border-sand/60 p-5 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 flex flex-col gap-3"
            >
              <div className="flex flex-wrap gap-2">
                <span className={`text-[11px] font-semibold px-2.5 py-1 rounded-full ${CAT_STYLES[a.cat]}`}>
                  {a.cat}
                </span>
                <span className={`text-[11px] font-semibold px-2.5 py-1 rounded-full ${NIVEL_STYLES[a.nivel]}`}>
                  {a.nivel}
                </span>
              </div>
              <div>
                <h3 className="font-bold text-brown text-lg leading-tight" style={{ fontFamily: "var(--font-serif)" }}>
                  {a.nome}
                </h3>
                <p className="text-sm text-sage font-medium">{a.traducao}</p>
              </div>
              <p className="text-sm text-brown-light leading-relaxed line-clamp-3">
                {modoSincero ? a.real : a.exp}
              </p>
            </button>
          ))}
        </div>
      )}

      {/* Detail modal */}
      {selected && (
        <div
          className="fixed inset-0 z-[60] bg-brown/40 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelected(null)}
        >
          <div
            className="bg-white rounded-3xl max-w-md w-full p-6 sm:p-8 relative shadow-2xl max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelected(null)}
              aria-label="Fechar"
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-cream flex items-center justify-center text-brown-light hover:text-brown transition-colors"
            >
              <CloseIcon />
            </button>

            <div className="flex flex-wrap gap-2 mb-4">
              <span className={`text-[11px] font-semibold px-2.5 py-1 rounded-full ${CAT_STYLES[selected.cat]}`}>
                {selected.cat}
              </span>
              <span className={`text-[11px] font-semibold px-2.5 py-1 rounded-full ${NIVEL_STYLES[selected.nivel]}`}>
                {selected.nivel}
              </span>
            </div>

            <h2 className="text-2xl font-bold text-brown leading-tight" style={{ fontFamily: "var(--font-serif)" }}>
              {selected.nome}
            </h2>
            <p className="text-sage font-medium mb-5">{selected.traducao}</p>

            <div className="flex flex-col gap-4">
              <div className={`rounded-2xl p-4 border transition-colors ${!modoSincero ? "border-sage bg-sage-muted" : "border-sand/60 bg-cream/50"}`}>
                <p className="text-xs font-bold uppercase tracking-wider text-sage-dark mb-1.5">
                  Expectativa Teórica
                </p>
                <p className="text-sm text-brown leading-relaxed">{selected.exp}</p>
              </div>
              <div className={`rounded-2xl p-4 border transition-colors ${modoSincero ? "border-red-300 bg-red-50" : "border-sand/60 bg-cream/50"}`}>
                <p className="text-xs font-bold uppercase tracking-wider text-red-500 mb-1.5">
                  Realidade Nua e Crua
                </p>
                <p className="text-sm text-brown leading-relaxed">{selected.real}</p>
              </div>
            </div>

            <button
              onClick={() => setShareOpen(true)}
              className="mt-6 w-full inline-flex items-center justify-center gap-2 bg-brown hover:bg-brown-light text-white font-semibold py-3 rounded-full transition-colors duration-300 text-sm"
            >
              <ShareIcon />
              Compartilhar nos Stories
            </button>
          </div>
        </div>
      )}

      {/* Share / story preview */}
      {selected && shareOpen && (
        <div
          className="fixed inset-0 z-[70] bg-black/80 flex flex-col items-center justify-center p-4 gap-4"
          onClick={() => setShareOpen(false)}
        >
          <p className="text-white/70 text-xs text-center">
            Faça print desta tela para compartilhar nos Stories · toque fora para fechar
          </p>
          <div
            className="w-full max-w-[320px] aspect-[9/16] rounded-3xl overflow-hidden relative flex flex-col justify-between p-7 shadow-2xl"
            style={{
              background: modoSincero
                ? "linear-gradient(160deg, #2C2416 0%, #5C4A2A 100%)"
                : "linear-gradient(160deg, #ECF3EA 0%, #FAF8F5 60%, #F6EEE0 100%)",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div>
              <span
                className={`inline-flex items-center gap-2 text-[10px] font-bold tracking-[0.25em] uppercase mb-6 ${
                  modoSincero ? "text-white/70" : "text-sage-dark"
                }`}
              >
                Tradutor de Sânscrito
              </span>
              <p
                className={`text-[11px] font-bold uppercase tracking-widest mb-2 ${
                  modoSincero ? "text-red-300" : "text-sage-dark"
                }`}
              >
                {modoSincero ? "Realidade Nua e Crua" : "Expectativa Teórica"}
              </p>
              <h3
                className={`text-3xl font-bold leading-tight mb-1 ${modoSincero ? "text-white" : "text-brown"}`}
                style={{ fontFamily: "var(--font-serif)" }}
              >
                {selected.nome}
              </h3>
              <p className={`text-sm font-medium mb-5 ${modoSincero ? "text-white/60" : "text-sage"}`}>
                {selected.traducao}
              </p>
              <p className={`text-base leading-relaxed ${modoSincero ? "text-white/90" : "text-brown-light"}`}>
                {modoSincero ? selected.real : selected.exp}
              </p>
            </div>

            <div className={`flex items-center gap-2 text-xs font-semibold ${modoSincero ? "text-white/50" : "text-brown-light/60"}`}>
              <span className="w-6 h-px bg-current" />
              fabyoga.com.br
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
