"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { Japamala } from "@/lib/japamalasData";

const WHATSAPP_NUMBER = "5583993243577"; // Substituir pelo número real de Fabiane

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 flex-shrink-0">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
  </svg>
);

const MalaIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 flex-shrink-0">
    <circle cx="12" cy="4" r="1.6" />
    <circle cx="18" cy="7" r="1.6" />
    <circle cx="20.5" cy="13" r="1.6" />
    <circle cx="18" cy="19" r="1.6" />
    <circle cx="12" cy="21.5" r="1.6" />
    <circle cx="6" cy="19" r="1.6" />
    <circle cx="3.5" cy="13" r="1.6" />
    <circle cx="6" cy="7" r="1.6" />
  </svg>
);

export default function JapamalaCard({ japamala }: { japamala: Japamala }) {
  const message = encodeURIComponent(
    `Olá Fabiane! Tenho interesse na japamala "${japamala.name}" que vi na loja do site. Ela ainda está disponível? 🌿`
  );
  const whatsappHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="group bg-white rounded-2xl overflow-hidden border border-sand/60 flex flex-col"
    >
      <div className="relative aspect-square bg-sage-muted overflow-hidden">
        <Image
          src={japamala.images[0]}
          alt={japamala.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />

        <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-brown text-xs font-semibold px-3 py-1 rounded-full">
          Peça única
        </span>

        {!japamala.available && (
          <div className="absolute inset-0 bg-brown/60 flex items-center justify-center">
            <span className="bg-white text-brown text-sm font-semibold px-4 py-1.5 rounded-full">
              Reservada
            </span>
          </div>
        )}
      </div>

      <div className="p-5 flex flex-col flex-1">
        <h3 className="font-serif text-lg font-bold text-brown mb-1">
          {japamala.name}
        </h3>

        <div className="flex items-center gap-1.5 text-xs text-sage-dark font-medium mb-3">
          <MalaIcon />
          <span>{japamala.beadsCount} contas · {japamala.material}</span>
        </div>

        <p className="text-sm text-brown-light leading-relaxed mb-4">
          {japamala.description}
        </p>

        {japamala.meanings && japamala.meanings.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mb-5 flex-1 content-start">
            {japamala.meanings.map((m) => (
              <span
                key={m.stone}
                className="text-[11px] leading-tight bg-sage-muted text-sage-dark font-medium px-2.5 py-1 rounded-full"
                title={`${m.stone}: ${m.meaning}`}
              >
                {m.stone} · {m.meaning}
              </span>
            ))}
          </div>
        )}

        <div className="flex items-center justify-between gap-3 mt-auto">
          <span className="font-serif text-base font-bold text-gold-dark">
            {japamala.priceLabel}
          </span>

          {japamala.available ? (
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Perguntar sobre a peça ${japamala.name} pelo WhatsApp`}
              className="flex items-center gap-2 bg-sage text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-sage-dark transition-colors"
            >
              <WhatsAppIcon />
              Consultar
            </a>
          ) : (
            <span className="text-sm text-brown-light/60 font-medium px-2">
              Indisponível
            </span>
          )}
        </div>
      </div>
    </motion.article>
  );
}
