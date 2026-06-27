"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const YogaIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
    <circle cx="12" cy="5" r="2" />
    <path d="M12 7v5" />
    <path d="M8 10c0 0 1 2 4 2s4-2 4-2" />
    <path d="M7 17l2-4h6l2 4" />
    <path d="M5 19l2-2M19 19l-2-2" />
  </svg>
);

const StethoscopeIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
    <path d="M4.8 2.3A.3.3 0 1 0 5 2H4a2 2 0 0 0-2 2v5a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6V4a2 2 0 0 0-2-2h-1a.2.2 0 1 0 .3.3" />
    <path d="M8 15v1a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6v-4" />
    <circle cx="20" cy="10" r="2" />
  </svg>
);

const credentials = [
  {
    Icon: YogaIcon,
    title: "Instrutora de Yoga",
    desc: "Formação completa em Yoga, com experiência em práticas integrativas para todos os níveis.",
    colorClass: "bg-sage-muted text-sage-dark",
  },
  {
    Icon: StethoscopeIcon,
    title: "Bacharel em Enfermagem",
    desc: "Visão clínica e científica aplicada ao bem-estar, unindo saúde convencional e holística.",
    colorClass: "bg-gold-muted text-gold-dark",
  },
];

export default function About() {
  return (
    <section id="sobre" className="py-20 lg:py-28 bg-white relative overflow-hidden">
      {/* Subtle background texture */}
      <div
        className="absolute top-0 right-0 w-[400px] h-[400px] pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at 100% 0%, rgba(201,169,110,0.07) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="flex justify-center lg:justify-start"
          >
            <div className="relative w-72 h-96 sm:w-80 sm:h-[420px]">
              {/* Shadow accent */}
              <div className="absolute -bottom-5 -right-5 w-full h-full rounded-2xl bg-gradient-to-br from-sage-muted to-gold-muted" />
              <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-xl"
                style={{ boxShadow: "0 20px 50px rgba(44,36,22,0.12)" }}
              >
                <Image
                  src="/images/fabiane-about.jpg"
                  alt="Fabiane Batista – FabYoga"
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 288px, 320px"
                />
              </div>

              {/* Quote decoration */}
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-sage rounded-xl flex items-center justify-center shadow-lg"
                style={{ boxShadow: "0 8px 20px rgba(122,158,110,0.35)" }}
              >
                <svg viewBox="0 0 24 24" fill="white" className="w-6 h-6">
                  <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 0 1-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 0 1-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z" />
                </svg>
              </div>
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          >
            <span className="inline-flex items-center gap-3 text-sage font-semibold text-xs tracking-[0.22em] uppercase mb-5">
              <span className="w-6 h-px bg-sage" />
              Sobre Fabiane
            </span>
            <h2
              className="text-3xl sm:text-4xl font-bold text-brown mt-0 mb-6 leading-tight"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              Saúde e yoga{" "}
              <span
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 300,
                  fontStyle: "italic",
                }}
              >
                caminhando juntos
              </span>
            </h2>
            <p className="text-brown-light leading-relaxed mb-4 text-lg">
              Sou Fabiane Batista, instrutora de Yoga e Bacharel em Enfermagem.
              Minha prática une o rigor científico da saúde com a sabedoria
              ancestral do yoga, criando experiências que cuidam do corpo e da
              alma.
            </p>
            <p className="text-brown-light leading-relaxed mb-10">
              Acredito que o yoga é para todos. Na Casa Shanti, em Bessa, João
              Pessoa, ofereço aulas acolhedoras e transformadoras — seja no
              Yoga Integrativo para o dia a dia ou no Yoga Dinâmico, uma
              prática vibrante para fortalecer corpo e mente.
            </p>

            <div className="flex flex-col gap-5">
              {credentials.map((c, i) => (
                <motion.div
                  key={c.title}
                  initial={{ opacity: 0, x: 16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.1, duration: 0.5 }}
                  className="flex gap-4 items-start group"
                >
                  <span
                    className={`w-11 h-11 flex-shrink-0 rounded-xl flex items-center justify-center shadow-sm transition-transform duration-200 group-hover:scale-110 ${c.colorClass}`}
                  >
                    <c.Icon />
                  </span>
                  <div>
                    <h3 className="font-semibold text-brown mb-0.5" style={{ fontFamily: "var(--font-serif)" }}>
                      {c.title}
                    </h3>
                    <p className="text-sm text-brown-light leading-relaxed">
                      {c.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
