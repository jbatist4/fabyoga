"use client";

import { motion } from "framer-motion";

const MapPinIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 flex-shrink-0">
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

const CalendarIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 flex-shrink-0">
    <rect x="3" y="4" width="18" height="18" rx="2" />
    <path d="M16 2v4M8 2v4M3 10h18" />
  </svg>
);

const FlowerIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 flex-shrink-0">
    <circle cx="12" cy="12" r="3" />
    <path d="M12 2a3 3 0 0 1 3 3 3 3 0 0 1-3 3 3 3 0 0 1-3-3 3 3 0 0 1 3-3z" />
    <path d="M12 16a3 3 0 0 1 3 3 3 3 0 0 1-3 3 3 3 0 0 1-3-3 3 3 0 0 1 3-3z" />
    <path d="M2 12a3 3 0 0 1 3-3 3 3 0 0 1 3 3 3 3 0 0 1-3 3 3 3 0 0 1-3-3z" />
    <path d="M16 12a3 3 0 0 1 3-3 3 3 0 0 1 3 3 3 3 0 0 1-3 3 3 3 0 0 1-3-3z" />
  </svg>
);

const ShirtIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 flex-shrink-0">
    <path d="M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.57a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.57a2 2 0 0 0-1.34-2.23z" />
  </svg>
);

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 flex-shrink-0">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
    <path d="M12.004 2C6.479 2 2 6.479 2 12.004c0 1.772.462 3.437 1.27 4.888L2 22l5.255-1.235A9.958 9.958 0 0 0 12.004 22C17.525 22 22 17.521 22 12.004 22 6.479 17.525 2 12.004 2zm0 18.182a8.178 8.178 0 0 1-4.176-1.144l-.3-.178-3.115.732.746-3.043-.196-.313A8.138 8.138 0 0 1 3.82 12.004c0-4.515 3.672-8.186 8.184-8.186 4.517 0 8.186 3.671 8.186 8.186 0 4.516-3.669 8.178-8.186 8.178z" />
  </svg>
);

const WHATSAPP_NUMBER = "5583993243577"; // Substituir pelo número real de Fabiane
const WHATSAPP_MESSAGE = encodeURIComponent(
  "Olá Fabiane! Gostaria de agendar minha aula experimental gratuita de yoga. 🌿"
);

const infoItems = [
  { Icon: MapPinIcon, title: "Local", text: "Casa Shanti – Bessa, João Pessoa/PB" },
  { Icon: CalendarIcon, title: "Yoga Integrativo", text: "Terças e Quintas – 07h15 às 08h00" },
  { Icon: FlowerIcon, title: "Yoga Dinâmico", text: "Sábados – 06h15 às 07h30" },
  { Icon: ShirtIcon, title: "O que levar", text: "Roupa confortável e boa disposição. Tapete fornecido." },
];

export default function BookingForm() {
  return (
    <section id="agendamento" className="py-20 lg:py-28 bg-cream relative overflow-hidden">
      {/* Soft gradient accent */}
      <div
        className="absolute bottom-0 left-0 w-[500px] h-[500px] pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at 0% 100%, rgba(122,158,110,0.08) 0%, transparent 65%)",
        }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="inline-flex items-center gap-3 text-sage font-semibold text-xs tracking-[0.22em] uppercase mb-5">
              <span className="w-6 h-px bg-sage" />
              Sua primeira aula
            </span>
            <h2
              className="text-3xl sm:text-4xl font-bold text-brown mt-0 mb-6 leading-tight"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              Aula Experimental{" "}
              <span
                className="text-sage"
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 300,
                  fontStyle: "italic",
                }}
              >
                Gratuita
              </span>
            </h2>
            <p className="text-brown-light leading-relaxed mb-10 text-lg">
              Quer experimentar o yoga antes de se comprometer? Chame no
              WhatsApp e venha conhecer nossa prática pessoalmente. Sem
              compromisso, sem custo.
            </p>

            <div className="flex flex-col gap-5">
              {infoItems.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.15 + i * 0.08, duration: 0.5 }}
                  className="flex gap-4 items-start group"
                >
                  <span className="w-10 h-10 rounded-xl bg-white border border-sand/60 flex items-center justify-center text-sage flex-shrink-0 shadow-sm group-hover:bg-sage-muted transition-colors duration-200">
                    <item.Icon />
                  </span>
                  <div>
                    <p className="font-semibold text-brown text-sm">{item.title}</p>
                    <p className="text-sm text-brown-light leading-relaxed">{item.text}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: WhatsApp CTA */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="bg-white rounded-3xl border border-sand/60 p-8 sm:p-10 shadow-sm flex flex-col items-center text-center gap-6"
            style={{ boxShadow: "0 8px 40px rgba(44,36,22,0.07)" }}
          >
            <span className="w-16 h-16 rounded-2xl bg-[#25D366]/10 text-[#25D366] flex items-center justify-center">
              <WhatsAppIcon />
            </span>
            <div>
              <h3
                className="text-xl font-bold text-brown mb-2"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                Agende pelo WhatsApp
              </h3>
              <p className="text-brown-light leading-relaxed">
                Fale diretamente com Fabiane para combinar o melhor dia e
                horário para sua aula experimental gratuita.
              </p>
            </div>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5a] text-white font-semibold py-4 px-8 rounded-full transition-all duration-300 text-base hover:-translate-y-0.5 hover:shadow-lg w-full sm:w-auto justify-center"
              style={{ boxShadow: "0 4px 16px rgba(37,211,102,0.3)" }}
            >
              <WhatsAppIcon />
              Chamar no WhatsApp
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
