"use client";

import { motion } from "framer-motion";

export default function Location() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-sage font-semibold text-sm tracking-widest uppercase">
            Localização
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-brown mt-3 mb-4">
            Casa Shanti
          </h2>
          <p className="text-brown-light max-w-md mx-auto">
            Bessa, João Pessoa/PB — um espaço tranquilo e acolhedor para sua
            prática
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 items-start">
          {/* Info cards */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-4"
          >
            {[
              {
                icon: "📍",
                title: "Endereço",
                text: "Casa Shanti\nBessa, João Pessoa – PB",
              },
              {
                icon: "📅",
                title: "Yoga Integrativo",
                text: "Terças e Quintas\n07h15 às 08h00",
              },
              {
                icon: "🌸",
                title: "Yoga Dinâmico",
                text: "Sábados\n06h15 às 07h30",
              },
              {
                icon: "🚗",
                title: "Estacionamento",
                text: "Estacionamento disponível\npróximo ao espaço",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-cream rounded-2xl p-4 flex gap-4 items-start border border-sand"
              >
                <span className="text-2xl">{item.icon}</span>
                <div>
                  <p className="font-semibold text-brown text-sm">
                    {item.title}
                  </p>
                  <p className="text-brown-light text-sm whitespace-pre-line leading-relaxed">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}

            <a
              href="https://wa.me/5583993243577?text=Olá%20Fabiane!%20Quero%20saber%20mais%20sobre%20as%20aulas%20de%20yoga."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] hover:bg-[#1ebe5d] text-white font-semibold py-3 px-6 rounded-full text-center transition-colors flex items-center justify-center gap-2"
            >
              <span>💬</span> Falar pelo WhatsApp
            </a>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="lg:col-span-2 rounded-3xl overflow-hidden border border-sand shadow-sm"
            style={{ height: 400 }}
          >
            <iframe
              src="https://maps.google.com/maps?q=-7.0751778,-34.8451656&z=17&output=embed"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização Casa Shanti – Bessa, João Pessoa/PB"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
