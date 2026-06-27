"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

export type GalleryImage = {
  src: string;
  alt: string;
  category: "aulas" | "eventos";
  width: number;
  height: number;
};

// Placeholder images - substituir pelas fotos reais de Fabiane
const IMAGES: GalleryImage[] = [
  { src: "/images/gallery/aula-1.jpg", alt: "Aula de Yoga Integrativo", category: "aulas", width: 800, height: 600 },
  { src: "/images/gallery/aula-2.jpg", alt: "Prática matinal na Casa Shanti", category: "aulas", width: 800, height: 600 },
  { src: "/images/gallery/aula-3.jpg", alt: "Aula de Yoga Dinâmico", category: "aulas", width: 800, height: 600 },
  { src: "/images/gallery/aula-4.jpg", alt: "Meditação em grupo", category: "aulas", width: 800, height: 600 },
  { src: "/images/gallery/evento-1.jpg", alt: "Evento especial FabYoga", category: "eventos", width: 800, height: 600 },
  { src: "/images/gallery/evento-2.jpg", alt: "Retiro de yoga", category: "eventos", width: 800, height: 600 },
  { src: "/images/gallery/evento-3.jpg", alt: "Workshop Yoga Dinâmico", category: "eventos", width: 800, height: 600 },
  { src: "/images/gallery/evento-4.jpg", alt: "Celebração e comunidade", category: "eventos", width: 800, height: 600 },
];

const filters = [
  { key: "all", label: "Todas" },
  { key: "aulas", label: "Aulas" },
  { key: "eventos", label: "Eventos" },
] as const;

type Filter = "all" | "aulas" | "eventos";

export default function Gallery() {
  const [filter, setFilter] = useState<Filter>("all");
  const [lightboxIndex, setLightboxIndex] = useState(-1);

  const filtered = filter === "all" ? IMAGES : IMAGES.filter((img) => img.category === filter);

  return (
    <section id="galeria" className="py-20 lg:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-sage font-semibold text-sm tracking-widest uppercase">
            Galeria
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-brown mt-3 mb-4">
            Momentos FabYoga
          </h2>
          <p className="text-brown-light max-w-md mx-auto">
            Veja como é nossa comunidade nas aulas e eventos especiais
          </p>
        </motion.div>

        {/* Filter tabs */}
        <div className="flex justify-center gap-3 mb-10">
          {filters.map((f) => (
            <button
              key={f.key}
              onClick={() => setFilter(f.key)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-colors ${
                filter === f.key
                  ? "bg-sage text-white"
                  : "bg-cream text-brown hover:bg-sand/40"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div layout className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
          <AnimatePresence>
            {filtered.map((img, idx) => (
              <motion.button
                key={img.src}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                onClick={() => setLightboxIndex(idx)}
                className="relative aspect-square rounded-2xl overflow-hidden group cursor-pointer"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-end p-3 opacity-0 group-hover:opacity-100">
                  <span className="text-white text-xs font-medium bg-black/40 px-2 py-1 rounded-full">
                    {img.alt}
                  </span>
                </div>
              </motion.button>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Lightbox */}
        <Lightbox
          open={lightboxIndex >= 0}
          close={() => setLightboxIndex(-1)}
          index={lightboxIndex}
          slides={filtered.map((img) => ({ src: img.src, alt: img.alt }))}
        />
      </div>
    </section>
  );
}
