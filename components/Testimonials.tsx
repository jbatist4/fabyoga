"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const StarIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M12 2.5l2.9 6.14 6.6.72-4.9 4.6 1.3 6.54L12 17.3l-5.9 3.2 1.3-6.54-4.9-4.6 6.6-.72L12 2.5z" />
  </svg>
);

const QuoteIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
    <path d="M7 7h4v4c0 2.5-1.5 4.5-4 5" />
    <path d="M15 7h4v4c0 2.5-1.5 4.5-4 5" />
  </svg>
);

const testimonials = [
  {
    name: "Sebastiano Vaccaro",
    photo: "/images/avaliacoes/sebastiano.png",
    text: "A professora Fabiane é uma pessoa extraordinária. Além de sua simpatia, gentileza e profissionalismo, ela possui uma sensibilidade humana muito especial que transmite serenidade, equilíbrio e bem-estar a todos ao seu redor. Fabiane ensina muito mais do que yoga; ela inspira confiança, acolhimento e crescimento pessoal.",
  },
  {
    name: "Patricia Bezerra",
    photo: null,
    text: "Desde que comecei as aulas com a Faby muita coisa mudou, não somente no corpo como também na mente. Comecei a ter mais foco e minhas crises de ansiedade simplesmente diminuíram muitoooo. Yoga só me trouxe benefícios.",
  },
  {
    name: "Silvia Leitão",
    photo: "/images/avaliacoes/silvia.png",
    text: "Melhor professora de Yoga de João Pessoa. Amooo as aulas!",
  },
  {
    name: "Pedro Augusto Do Amaral",
    photo: "/images/avaliacoes/pedro.png",
    text: "Está em João Pessoa e pensou em yoga vai com a Professora Fabi que não tem erro, ótima profissional e ser humano.",
  },
  {
    name: "Maria Gama",
    photo: null,
    text: "A aula com a Fabi é uma experiência, um mix de práticas que trazem bem estar que reverbera durante todo dia. Recomendo!",
  },
  {
    name: "Thayna Lemos",
    photo: "/images/avaliacoes/thayna.png",
    text: "Aula perfeita!! Melhor de João Pessoa!",
  },
  {
    name: "arthur",
    photo: null,
    text: "Foi uma nova experiência, mas me acolheram e foram bem pacientes comigo. Recomendo muito!!",
  },
];

export default function Testimonials() {
  return (
    <section id="avaliacoes" className="py-20 lg:py-28 bg-cream">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-flex items-center gap-3 text-sage font-semibold text-xs tracking-[0.22em] uppercase mb-5">
            <span className="w-6 h-px bg-sage" />
            Depoimentos
            <span className="w-6 h-px bg-sage" />
          </span>
          <h2
            className="text-3xl sm:text-4xl font-bold text-brown mt-0 mb-4"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            Quem Pratica, Recomenda
          </h2>
          <p className="text-brown-light max-w-xl mx-auto text-lg">
            Avaliações reais de alunos no Google
          </p>
          <div className="flex items-center justify-center gap-1.5 mt-5 text-gold">
            {Array.from({ length: 5 }).map((_, i) => (
              <StarIcon key={i} />
            ))}
            <span className="text-brown font-semibold text-sm ml-2">5.0</span>
          </div>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (i % 3) * 0.12, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="rounded-3xl border border-sand/60 bg-white p-7 flex flex-col shadow-sm hover:shadow-lg transition-shadow duration-300"
            >
              <span className="text-sage/30 mb-3">
                <QuoteIcon />
              </span>

              <div className="flex items-center gap-1 text-gold mb-4">
                {Array.from({ length: 5 }).map((_, s) => (
                  <StarIcon key={s} />
                ))}
              </div>

              <p className="text-brown-light text-sm leading-relaxed mb-6 flex-grow">
                &ldquo;{t.text}&rdquo;
              </p>

              <div className="flex items-center gap-3 pt-4 border-t border-sand/50">
                {t.photo ? (
                  <Image
                    src={t.photo}
                    alt={t.name}
                    width={40}
                    height={40}
                    className="w-10 h-10 rounded-full object-cover flex-shrink-0"
                  />
                ) : (
                  <span className="w-10 h-10 rounded-full bg-sage-muted text-sage-dark font-semibold flex items-center justify-center text-sm flex-shrink-0">
                    {t.name.charAt(0).toUpperCase()}
                  </span>
                )}
                <p className="font-semibold text-brown text-sm leading-tight">
                  {t.name}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
