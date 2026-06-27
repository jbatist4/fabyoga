"use client";

import { motion } from "framer-motion";

const WHATSAPP_NUMBER = "5583993243577"; // Substituir pelo número real de Fabiane
const MESSAGE = encodeURIComponent(
  "Olá Fabiane! Vi seu site e gostaria de saber mais sobre as aulas de yoga. 🌿"
);

export default function WhatsAppButton() {
  return (
    <motion.a
      href={`https://wa.me/${WHATSAPP_NUMBER}?text=${MESSAGE}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar com Fabiane pelo WhatsApp"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1.5, type: "spring", stiffness: 200 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] rounded-full shadow-lg flex items-center justify-center text-2xl hover:shadow-xl transition-shadow"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="white"
        className="w-7 h-7"
        aria-hidden="true"
      >
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
        <path d="M12.004 2C6.479 2 2 6.479 2 12.004c0 1.772.462 3.437 1.27 4.888L2 22l5.255-1.235A9.958 9.958 0 0 0 12.004 22C17.525 22 22 17.521 22 12.004 22 6.479 17.525 2 12.004 2zm0 18.182a8.178 8.178 0 0 1-4.176-1.144l-.3-.178-3.115.732.746-3.043-.196-.313A8.138 8.138 0 0 1 3.82 12.004c0-4.515 3.672-8.186 8.184-8.186 4.517 0 8.186 3.671 8.186 8.186 0 4.516-3.669 8.178-8.186 8.178z" />
      </svg>
    </motion.a>
  );
}
