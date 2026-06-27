"use client";

import { motion } from "framer-motion";

const CheckIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5 flex-shrink-0">
    <path d="M20 6 9 17l-5-5" />
  </svg>
);

const MapPinIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 flex-shrink-0">
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

const LeafIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
    <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10z" />
    <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
  </svg>
);

const MoonIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
    <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
    <path d="M20 3v4M22 5h-4" />
  </svg>
);

const classes = [
  {
    name: "Yoga Integrativo",
    Icon: LeafIcon,
    days: "Terças e Quintas",
    time: "07h15 às 08h00",
    duration: "45 min",
    audience: "Todos os públicos",
    color: "sage",
    description:
      "Uma prática que integra posturas, respiração e meditação para equilibrar corpo e mente. Ideal para iniciantes e praticantes de todos os níveis.",
    benefits: [
      "Redução do estresse e ansiedade",
      "Melhora da postura e flexibilidade",
      "Fortalecimento muscular suave",
      "Mais energia e disposição",
    ],
  },
  {
    name: "Yoga Dinâmico",
    Icon: MoonIcon,
    days: "Sábados",
    time: "06h15 às 07h30",
    duration: "75 min",
    audience: "Todos os públicos",
    color: "gold",
    description:
      "Uma prática vibrante e fluida que combina sequências de movimento, respiração e energia. Ideal para fortalecer o corpo, soltar tensões e renovar a mente.",
    benefits: [
      "Mais energia e disposição",
      "Equilíbrio físico e emocional",
      "Comunidade acolhedora",
      "Práticas e meditações guiadas",
    ],
  },
];

const colorMap: Record<string, {
  gradient: string;
  iconBg: string;
  iconColor: string;
  badge: string;
  border: string;
  btn: string;
  btnHover: string;
  checkColor: string;
  schedBg: string;
}> = {
  sage: {
    gradient: "from-sage-muted/60 to-white",
    iconBg: "bg-sage-muted",
    iconColor: "text-sage-dark",
    badge: "bg-sage/15 text-sage-dark",
    border: "border-sage/20",
    btn: "bg-sage",
    btnHover: "hover:bg-sage-dark",
    checkColor: "text-sage",
    schedBg: "bg-white/80",
  },
  gold: {
    gradient: "from-gold-muted/60 to-white",
    iconBg: "bg-gold-muted",
    iconColor: "text-gold-dark",
    badge: "bg-gold/15 text-gold-dark",
    border: "border-gold/20",
    btn: "bg-gold",
    btnHover: "hover:bg-gold-dark",
    checkColor: "text-gold-dark",
    schedBg: "bg-white/80",
  },
};

export default function Classes() {
  return (
    <section id="aulas" className="py-20 lg:py-28 bg-cream">
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
            Modalidades
            <span className="w-6 h-px bg-sage" />
          </span>
          <h2
            className="text-3xl sm:text-4xl font-bold text-brown mt-0 mb-4"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            Nossas Aulas
          </h2>
          <p className="text-brown-light max-w-xl mx-auto text-lg">
            Encontre a prática certa para você na Casa Shanti, Bessa –
            João Pessoa/PB
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {classes.map((cls, i) => {
            const c = colorMap[cls.color];
            return (
              <motion.div
                key={cls.name}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className={`rounded-3xl border ${c.border} bg-gradient-to-br ${c.gradient} p-8 flex flex-col shadow-sm hover:shadow-lg transition-shadow duration-300`}
              >
                {/* Header */}
                <div className="flex items-start gap-4 mb-6">
                  <span className={`w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 ${c.iconBg} ${c.iconColor}`}>
                    <cls.Icon />
                  </span>
                  <div>
                    <h3
                      className="text-2xl font-bold text-brown leading-tight"
                      style={{ fontFamily: "var(--font-serif)" }}
                    >
                      {cls.name}
                    </h3>
                    <span className={`inline-block text-xs font-semibold px-2.5 py-1 rounded-full mt-1.5 ${c.badge}`}>
                      {cls.audience}
                    </span>
                  </div>
                </div>

                {/* Schedule pills */}
                <div className="grid grid-cols-3 gap-2.5 mb-6">
                  {[
                    { label: "Dias", value: cls.days },
                    { label: "Horário", value: cls.time },
                    { label: "Duração", value: cls.duration },
                  ].map((item) => (
                    <div key={item.label} className={`${c.schedBg} backdrop-blur-sm rounded-2xl p-3 text-center border border-white/60`}>
                      <p className="text-[10px] text-brown-light mb-1 font-medium uppercase tracking-wide">
                        {item.label}
                      </p>
                      <p className="font-semibold text-brown text-xs leading-tight">
                        {item.value}
                      </p>
                    </div>
                  ))}
                </div>

                <p className="text-brown-light text-sm leading-relaxed mb-6">
                  {cls.description}
                </p>

                <ul className="flex flex-col gap-2.5 mb-8 flex-grow">
                  {cls.benefits.map((b) => (
                    <li key={b} className="flex items-center gap-2.5 text-sm text-brown">
                      <span className={c.checkColor}>
                        <CheckIcon />
                      </span>
                      {b}
                    </li>
                  ))}
                </ul>

                <a
                  href="#agendamento"
                  className={`${c.btn} ${c.btnHover} text-white font-semibold text-center py-3.5 px-6 rounded-full transition-all duration-300 hover:-translate-y-0.5 shadow-sm hover:shadow-md`}
                >
                  Agendar Aula Experimental Grátis
                </a>
              </motion.div>
            );
          })}
        </div>

        {/* Location info */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-10 text-center bg-white rounded-2xl p-5 border border-sand/60 shadow-sm"
        >
          <div className="flex items-center justify-center gap-2 text-brown font-medium">
            <span className="text-sage">
              <MapPinIcon />
            </span>
            Casa Shanti — Bessa, João Pessoa/PB
          </div>
          <p className="text-sm text-brown-light mt-1">
            Todas as aulas acontecem no mesmo espaço acolhedor e tranquilo
          </p>
        </motion.div>
      </div>
    </section>
  );
}
