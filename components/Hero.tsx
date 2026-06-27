"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const ClockIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
    <circle cx="12" cy="12" r="10" />
    <path d="M12 6v6l4 2" />
  </svg>
);

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center bg-cream overflow-hidden"
    >
      {/* Soft radial gradient blobs */}
      <div
        className="absolute top-0 right-0 w-[700px] h-[700px] pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at 80% 20%, rgba(122,158,110,0.12) 0%, transparent 65%)",
        }}
      />
      <div
        className="absolute bottom-0 left-0 w-[600px] h-[600px] pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at 20% 80%, rgba(201,169,110,0.10) 0%, transparent 65%)",
        }}
      />

      {/* Large decorative mandala (very faint watermark) */}
      <div className="absolute right-[5%] top-1/2 -translate-y-1/2 w-[520px] h-[520px] opacity-[0.035] pointer-events-none select-none">
        <svg viewBox="0 0 200 200" fill="none" stroke="#5C7A52" strokeWidth="0.5">
          <circle cx="100" cy="100" r="95" />
          <circle cx="100" cy="100" r="70" />
          <circle cx="100" cy="100" r="45" />
          <circle cx="100" cy="100" r="20" />
          {Array.from({ length: 12 }).map((_, i) => {
            const angle = (i * 30 * Math.PI) / 180;
            const x1 = 100 + 20 * Math.cos(angle);
            const y1 = 100 + 20 * Math.sin(angle);
            const x2 = 100 + 95 * Math.cos(angle);
            const y2 = 100 + 95 * Math.sin(angle);
            return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} />;
          })}
          {Array.from({ length: 8 }).map((_, i) => {
            const angle = (i * 45 * Math.PI) / 180;
            const cx = 100 + 57 * Math.cos(angle);
            const cy = 100 + 57 * Math.sin(angle);
            return <circle key={i} cx={cx} cy={cy} r="12" />;
          })}
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-24 grid md:grid-cols-2 gap-12 items-center">
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="order-2 md:order-1"
        >
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="inline-flex items-center gap-3 text-sage font-semibold text-xs tracking-[0.22em] uppercase mb-7"
          >
            <span className="w-6 h-px bg-sage" />
            Yoga em João Pessoa · Casa Shanti, Bessa
          </motion.span>

          <h1
            className="text-4xl sm:text-5xl lg:text-[3.6rem] font-bold text-brown leading-[1.12] mb-6"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            Encontre o{" "}
            <span
              className="text-sage"
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 300,
                fontStyle: "italic",
              }}
            >
              equilíbrio
            </span>{" "}
            que você merece
          </h1>

          <p className="text-brown-light text-lg leading-relaxed mb-10 max-w-md">
            Procurando aulas de yoga em João Pessoa? Com Fabiane Batista —
            Instrutora de Yoga e Bacharel em Enfermagem — descubra uma
            prática que une corpo, mente e bem-estar com base científica.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <a
              href="#agendamento"
              className="inline-flex items-center justify-center bg-sage text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 text-base shadow-lg hover:bg-sage-dark hover:shadow-xl hover:-translate-y-0.5"
              style={{ boxShadow: "0 8px 24px rgba(122,158,110,0.30)" }}
            >
              Agendar Aula Experimental Grátis
            </a>
            <a
              href="#aulas"
              className="inline-flex items-center justify-center border-2 border-sage text-sage hover:bg-sage/10 font-semibold px-8 py-4 rounded-full transition-all duration-300 text-base hover:-translate-y-0.5"
            >
              Ver Horários
            </a>
          </div>

        </motion.div>

        {/* Photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="order-1 md:order-2 flex justify-center"
        >
          <div className="relative w-72 h-72 sm:w-96 sm:h-96 lg:w-[420px] lg:h-[520px]">
            {/* Organic blob decoration behind the photo */}
            <div
              className="absolute animate-float-slow"
              style={{
                inset: "-8%",
                background:
                  "linear-gradient(135deg, rgba(122,158,110,0.18) 0%, rgba(201,169,110,0.12) 100%)",
                borderRadius: "58% 42% 38% 62% / 55% 35% 65% 45%",
              }}
            />

            {/* Main photo */}
            <div className="relative w-full h-full rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white/80"
              style={{ boxShadow: "0 25px 60px rgba(44,36,22,0.15)" }}
            >
              <Image
                src="/images/fabiane-hero.jpg"
                alt="Fabiane Batista – Instrutora FabYoga"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 640px) 288px, (max-width: 1024px) 384px, 420px"
              />
            </div>

            {/* Floating badge — clock */}
            <div className="animate-float absolute -bottom-5 -left-5 bg-white rounded-2xl shadow-xl px-4 py-3 flex items-center gap-2.5 border border-sand/40">
              <span className="text-sage">
                <ClockIcon />
              </span>
              <div>
                <p className="text-[10px] text-brown-light leading-none mb-0.5">Horários</p>
                <p className="text-xs font-semibold text-brown leading-none">Ter · Qui · Sáb</p>
              </div>
            </div>

            {/* Floating badge — free class */}
            <div
              className="animate-float-delayed absolute -top-4 -right-4 bg-sage text-white rounded-2xl shadow-xl px-4 py-3 text-center"
            >
              <p className="text-[10px] font-medium leading-none mb-0.5 opacity-90">Aula</p>
              <p className="text-sm font-bold leading-none">Grátis</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] tracking-[0.2em] uppercase font-medium text-brown-light/50">
          Explorar
        </span>
        <div className="w-px h-8 bg-gradient-to-b from-brown-light/30 to-transparent" />
      </motion.div>
    </section>
  );
}
