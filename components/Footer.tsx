const MapPinIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 flex-shrink-0 mt-0.5">
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

const CalendarIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 flex-shrink-0 mt-0.5">
    <rect x="3" y="4" width="18" height="18" rx="2" />
    <path d="M16 2v4M8 2v4M3 10h18" />
  </svg>
);

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 flex-shrink-0">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
  </svg>
);

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 flex-shrink-0">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
  </svg>
);

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-brown text-white overflow-hidden">
      {/* Organic wave separator at the top */}
      <div className="absolute top-0 left-0 right-0 overflow-hidden leading-none pointer-events-none">
        <svg
          viewBox="0 0 1440 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          className="w-full h-[60px] block"
        >
          <path
            d="M0 60 C360 0, 1080 60, 1440 0 L1440 0 L0 0 Z"
            fill="#FAF8F5"
          />
        </svg>
      </div>

      {/* Subtle decorative blob */}
      <div
        className="absolute top-0 right-0 w-[400px] h-[400px] pointer-events-none opacity-5"
        style={{
          background: "radial-gradient(ellipse at 100% 0%, rgba(201,169,110,1) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-20 pb-12">
        <div className="grid md:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div>
            <h3
              className="text-2xl font-bold mb-3"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              Fab
              <span
                style={{
                  color: "var(--color-gold)",
                  fontFamily: "var(--font-display)",
                  fontStyle: "italic",
                  fontWeight: 300,
                }}
              >
                Yoga
              </span>
            </h3>
            <p className="text-white/60 text-sm leading-relaxed max-w-xs">
              Fabiane Batista — Instrutora de Yoga e Bacharel em Enfermagem.
              Transformando vidas através do yoga em João Pessoa/PB.
            </p>
          </div>

          {/* Navigation links */}
          <div>
            <h4 className="font-semibold mb-5 text-xs uppercase tracking-[0.18em] text-white/40">
              Navegação
            </h4>
            <ul className="flex flex-col gap-2.5">
              {[
                ["#sobre", "Sobre Fabiane"],
                ["#aulas", "Modalidades"],
                ["#galeria", "Galeria"],
                ["#agendamento", "Agendar Aula Grátis"],
              ].map(([href, label]) => (
                <li key={href}>
                  <a
                    href={href}
                    className="text-white/60 hover:text-white text-sm transition-colors duration-200"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-5 text-xs uppercase tracking-[0.18em] text-white/40">
              Contato
            </h4>
            <ul className="flex flex-col gap-3.5 text-sm text-white/60">
              <li className="flex items-start gap-2.5">
                <MapPinIcon />
                <span>Casa Shanti – Bessa, João Pessoa/PB</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CalendarIcon />
                <span>Ter/Qui: 07h15–08h00 | Sáb: 06h15–07h30</span>
              </li>
              <li>
                <a
                  href="https://wa.me/5583993243577"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 text-[#4ADE80] hover:text-green-300 transition-colors duration-200 font-medium"
                >
                  <WhatsAppIcon /> WhatsApp
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/fabyogaoficial"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 text-pink-300 hover:text-pink-200 transition-colors duration-200 font-medium"
                >
                  <InstagramIcon /> @fabyogaoficial
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-2 text-xs text-white/30">
          <p>© {year} FabYoga – Fabiane Batista. Todos os direitos reservados.</p>
          <p>João Pessoa, Paraíba – Brasil</p>
        </div>
      </div>
    </footer>
  );
}
