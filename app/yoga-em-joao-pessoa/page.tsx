import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

const SITE_URL = "https://fabyoga.com.br";
const PAGE_PATH = "/yoga-em-joao-pessoa";

export const metadata: Metadata = {
  title: "Yoga em João Pessoa: Guia Completo para Começar na Bessa | FabYoga",
  description:
    "Quer praticar yoga em João Pessoa? Descubra os benefícios da prática, conheça as aulas de Yoga Integrativo e Yoga Dinâmico da FabYoga na Casa Shanti, Bessa, e agende sua aula experimental gratuita.",
  keywords: [
    "yoga joão pessoa",
    "yoga em joão pessoa",
    "aulas de yoga joão pessoa",
    "yoga bessa",
    "aula de yoga bessa",
    "yoga para iniciantes joão pessoa",
    "yoga integrativo",
    "yoga dinâmico",
    "FabYoga",
    "Fabiane Batista",
    "Casa Shanti",
  ],
  alternates: {
    canonical: PAGE_PATH,
  },
  openGraph: {
    title: "Yoga em João Pessoa: Guia Completo para Começar na Bessa | FabYoga",
    description:
      "Benefícios do yoga, tipos de aula e onde praticar na Bessa, João Pessoa. Conheça a FabYoga e agende sua aula experimental gratuita.",
    url: `${SITE_URL}${PAGE_PATH}`,
    type: "article",
    locale: "pt_BR",
    siteName: "FabYoga",
    images: [
      {
        url: "/images/fabiane-hero.jpg",
        width: 1200,
        height: 630,
        alt: "Aula de yoga em João Pessoa com a FabYoga",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Yoga em João Pessoa: Guia Completo para Começar na Bessa | FabYoga",
    description:
      "Benefícios do yoga, tipos de aula e onde praticar na Bessa, João Pessoa. Agende sua aula experimental gratuita.",
    images: ["/images/fabiane-hero.jpg"],
  },
  robots: { index: true, follow: true },
};

const jsonLdArticle = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Yoga em João Pessoa: Guia Completo para Começar na Bessa",
  description:
    "Guia sobre os benefícios do yoga, os tipos de aula oferecidos pela FabYoga (Yoga Integrativo e Yoga Dinâmico) na Casa Shanti, Bessa, em João Pessoa, e como agendar uma aula experimental gratuita.",
  image: `${SITE_URL}/images/fabiane-hero.jpg`,
  author: {
    "@type": "Person",
    name: "Fabiane Batista",
  },
  publisher: {
    "@type": "Organization",
    name: "FabYoga",
    logo: {
      "@type": "ImageObject",
      url: `${SITE_URL}/images/logo.png`,
    },
  },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": `${SITE_URL}${PAGE_PATH}`,
  },
  about: "Yoga em João Pessoa",
  inLanguage: "pt-BR",
};

const jsonLdBreadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Início",
      item: SITE_URL,
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Yoga em João Pessoa",
      item: `${SITE_URL}${PAGE_PATH}`,
    },
  ],
};

const jsonLdFaq = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Preciso ter experiência para começar a praticar yoga em João Pessoa?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Não. As aulas da FabYoga são acolhedoras e adaptadas para todos os níveis, do iniciante ao praticante avançado. O Yoga Integrativo é especialmente indicado para quem está começando, com posturas, respiração e meditação guiadas com calma.",
      },
    },
    {
      "@type": "Question",
      name: "Qual a diferença entre Yoga Integrativo e Yoga Dinâmico?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "O Yoga Integrativo (terças e quintas, 07h15 às 08h00) une posturas, respiração e meditação em um ritmo equilibrado, ideal para reduzir o estresse no dia a dia. O Yoga Dinâmico (sábados, 06h15 às 07h30) é uma prática mais vibrante e fluida, com sequências de movimento que fortalecem o corpo e energizam a mente.",
      },
    },
    {
      "@type": "Question",
      name: "Onde acontecem as aulas de yoga da FabYoga em João Pessoa?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "As aulas acontecem na Casa Shanti, no bairro da Bessa, em João Pessoa/PB — um espaço tranquilo e acolhedor pensado para a prática de yoga e meditação.",
      },
    },
    {
      "@type": "Question",
      name: "O que levar para a primeira aula de yoga?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Leve roupas confortáveis que permitam movimento livre, uma garrafa de água e, se tiver, um tapete de yoga. Caso ainda não tenha um tapete, entre em contato pelo WhatsApp para combinar os detalhes da sua aula experimental.",
      },
    },
    {
      "@type": "Question",
      name: "Como agendar uma aula experimental gratuita de yoga em João Pessoa?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Basta enviar uma mensagem pelo WhatsApp da FabYoga informando o melhor dia para você. A instrutora Fabiane Batista responde com os horários disponíveis para o Yoga Integrativo (ter/qui) e o Yoga Dinâmico (sáb).",
      },
    },
  ],
};

export default function YogaJoaoPessoaPage() {
  return (
    <div className="min-h-screen bg-cream flex flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdArticle) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }}
      />

      {/* Header */}
      <header className="border-b border-sand/60 bg-white/80 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <Image
              src="/images/logo.png"
              alt="FabYoga"
              width={120}
              height={48}
              className="h-9 w-auto object-contain"
            />
          </Link>
          <Link
            href="/"
            className="text-sm font-medium text-brown hover:text-sage transition-colors"
          >
            ← Voltar para o site
          </Link>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/images/fabiane-hero.jpg"
              alt="Aula de yoga em João Pessoa com a FabYoga"
              fill
              priority
              className="object-cover"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-brown/60" />
          </div>
          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 py-20 sm:py-28 text-center">
            <span className="inline-block bg-gold/90 text-white text-[11px] font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-5">
              Bessa · João Pessoa/PB
            </span>
            <h1
              className="text-3xl sm:text-5xl font-bold text-white mb-5 leading-tight"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              Yoga em João Pessoa: o Guia Completo para Começar sua Prática
            </h1>
            <p className="text-white/90 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
              Tudo o que você precisa saber sobre os benefícios do yoga, as
              aulas de Yoga Integrativo e Yoga Dinâmico da FabYoga na Casa
              Shanti, Bessa, e como agendar sua aula experimental gratuita.
            </p>
          </div>
        </section>

        {/* Article body */}
        <article className="max-w-3xl mx-auto px-4 sm:px-6 py-14 sm:py-20">
          <section className="mb-12">
            <h2
              className="text-2xl sm:text-3xl font-bold text-brown mb-4"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              Por que praticar yoga em João Pessoa?
            </h2>
            <p className="text-brown-light leading-relaxed mb-4">
              João Pessoa é uma cidade que convida ao equilíbrio: o clima
              tropical, as praias próximas e o ritmo mais leve do dia a dia
              criam o cenário perfeito para uma prática de yoga consistente.
              Mesmo assim, a rotina urbana — trânsito, trabalho, telas — ainda
              traz estresse, tensão muscular e ansiedade para quem mora aqui.
              É por isso que cada vez mais pessoas em João Pessoa, e
              especialmente no bairro da Bessa, estão buscando aulas de yoga
              como uma forma de cuidar do corpo e da mente.
            </p>
            <p className="text-brown-light leading-relaxed">
              Praticar yoga perto de casa, em um espaço acolhedor e com
              orientação de uma instrutora qualificada, faz toda a diferença
              para manter a regularidade e sentir os resultados — mais
              flexibilidade, menos dores, mais energia e uma mente mais calma.
            </p>
          </section>

          <section className="mb-12">
            <h2
              className="text-2xl sm:text-3xl font-bold text-brown mb-4"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              Os principais benefícios do yoga para o corpo e a mente
            </h2>
            <ul className="grid sm:grid-cols-2 gap-3">
              {[
                "Redução do estresse e da ansiedade",
                "Melhora da postura e da flexibilidade",
                "Fortalecimento muscular suave e progressivo",
                "Mais energia e disposição no dia a dia",
                "Equilíbrio físico e emocional",
                "Sono mais profundo e tranquilo",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2.5 bg-white border border-sand/60 rounded-2xl px-4 py-3 text-sm text-brown-light leading-relaxed"
                >
                  <span className="text-sage font-bold mt-0.5">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section className="mb-12">
            <h2
              className="text-2xl sm:text-3xl font-bold text-brown mb-4"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              Yoga Integrativo ou Yoga Dinâmico: qual aula escolher?
            </h2>
            <p className="text-brown-light leading-relaxed mb-6">
              Na FabYoga, em João Pessoa, você encontra duas modalidades
              pensadas para diferentes momentos e objetivos. Não sabe por
              onde começar? Veja a diferença entre elas:
            </p>
            <div className="grid sm:grid-cols-2 gap-5">
              <div className="bg-sage-muted border border-sage/20 rounded-2xl p-6">
                <h3 className="text-lg font-bold text-brown mb-1" style={{ fontFamily: "var(--font-serif)" }}>
                  Yoga Integrativo
                </h3>
                <p className="text-xs font-semibold uppercase tracking-wider text-sage-dark mb-3">
                  Terças e quintas · 07h15 às 08h00
                </p>
                <p className="text-sm text-brown-light leading-relaxed">
                  Uma prática que integra posturas, respiração e meditação
                  para equilibrar corpo e mente. Ideal para iniciantes e para
                  quem busca uma rotina leve e constante de autocuidado.
                </p>
              </div>
              <div className="bg-gold-muted border border-gold/30 rounded-2xl p-6">
                <h3 className="text-lg font-bold text-brown mb-1" style={{ fontFamily: "var(--font-serif)" }}>
                  Yoga Dinâmico
                </h3>
                <p className="text-xs font-semibold uppercase tracking-wider text-gold-dark mb-3">
                  Sábados · 06h15 às 07h30
                </p>
                <p className="text-sm text-brown-light leading-relaxed">
                  Uma prática vibrante e fluida, com sequências de movimento,
                  respiração e energia. Ideal para fortalecer o corpo, soltar
                  tensões acumuladas na semana e renovar a mente.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2
              className="text-2xl sm:text-3xl font-bold text-brown mb-4"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              Onde praticar yoga na Bessa: conheça a Casa Shanti
            </h2>
            <div className="grid sm:grid-cols-2 gap-6 items-center">
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-sand/60 shadow-sm order-2 sm:order-1">
                <Image
                  src="/images/gallery/aula-1.jpg"
                  alt="Espaço de prática de yoga na Casa Shanti, Bessa, João Pessoa"
                  fill
                  sizes="(max-width: 640px) 100vw, 384px"
                  className="object-cover"
                />
              </div>
              <div className="order-1 sm:order-2">
                <p className="text-brown-light leading-relaxed mb-4">
                  As aulas da FabYoga acontecem na Casa Shanti, um espaço
                  tranquilo e acolhedor no bairro da Bessa, em João Pessoa/PB.
                  O ambiente foi pensado para a prática de yoga e meditação,
                  longe da agitação do trânsito, mas perto de você.
                </p>
                <p className="text-brown-light leading-relaxed">
                  Todas as aulas — Yoga Integrativo e Yoga Dinâmico —
                  acontecem no mesmo espaço, o que facilita a rotina de quem
                  mora ou trabalha na região da Bessa, Manaíra e bairros
                  próximos.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2
              className="text-2xl sm:text-3xl font-bold text-brown mb-4"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              Conheça sua instrutora: Fabiane Batista
            </h2>
            <div className="grid sm:grid-cols-[auto_1fr] gap-6 items-center bg-white border border-sand/60 rounded-3xl p-6">
              <div className="relative w-28 h-28 sm:w-36 sm:h-36 rounded-full overflow-hidden border-4 border-sage-muted mx-auto sm:mx-0 flex-shrink-0">
                <Image
                  src="/images/fabiane-about.jpg"
                  alt="Fabiane Batista, instrutora de yoga em João Pessoa"
                  fill
                  sizes="144px"
                  className="object-cover"
                />
              </div>
              <div>
                <p className="text-brown-light leading-relaxed mb-3">
                  Sou Fabiane Batista, instrutora de Yoga e Bacharel em
                  Enfermagem. Minha prática une o rigor científico da saúde
                  com a sabedoria ancestral do yoga, oferecendo aulas seguras,
                  acolhedoras e transformadoras para todos os corpos e
                  idades.
                </p>
                <p className="text-brown-light leading-relaxed">
                  Acredito que o yoga é para todos. Por isso, na Casa Shanti,
                  em Bessa, João Pessoa, recebo praticantes de todos os
                  níveis — seja no Yoga Integrativo do dia a dia, seja no
                  Yoga Dinâmico, uma prática vibrante para fortalecer corpo e
                  mente.
                </p>
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section className="mb-12">
            <h2
              className="text-2xl sm:text-3xl font-bold text-brown mb-4"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              Perguntas frequentes sobre yoga em João Pessoa
            </h2>
            <div className="flex flex-col gap-4">
              {[
                {
                  q: "Preciso ter experiência para começar a praticar yoga em João Pessoa?",
                  a: "Não. As aulas da FabYoga são acolhedoras e adaptadas para todos os níveis, do iniciante ao praticante avançado. O Yoga Integrativo é especialmente indicado para quem está começando, com posturas, respiração e meditação guiadas com calma.",
                },
                {
                  q: "Qual a diferença entre Yoga Integrativo e Yoga Dinâmico?",
                  a: "O Yoga Integrativo (terças e quintas, 07h15 às 08h00) une posturas, respiração e meditação em um ritmo equilibrado, ideal para reduzir o estresse no dia a dia. O Yoga Dinâmico (sábados, 06h15 às 07h30) é uma prática mais vibrante e fluida, com sequências de movimento que fortalecem o corpo e energizam a mente.",
                },
                {
                  q: "Onde acontecem as aulas de yoga da FabYoga em João Pessoa?",
                  a: "As aulas acontecem na Casa Shanti, no bairro da Bessa, em João Pessoa/PB — um espaço tranquilo e acolhedor pensado para a prática de yoga e meditação.",
                },
                {
                  q: "O que levar para a primeira aula de yoga?",
                  a: "Leve roupas confortáveis que permitam movimento livre, uma garrafa de água e, se tiver, um tapete de yoga. Caso ainda não tenha um tapete, entre em contato pelo WhatsApp para combinar os detalhes da sua aula experimental.",
                },
                {
                  q: "Como agendar uma aula experimental gratuita de yoga em João Pessoa?",
                  a: "Basta enviar uma mensagem pelo WhatsApp da FabYoga informando o melhor dia para você. A instrutora Fabiane Batista responde com os horários disponíveis para o Yoga Integrativo (ter/qui) e o Yoga Dinâmico (sáb).",
                },
              ].map((item) => (
                <div
                  key={item.q}
                  className="bg-white border border-sand/60 rounded-2xl p-5"
                >
                  <h3 className="font-bold text-brown mb-2 text-base">
                    {item.q}
                  </h3>
                  <p className="text-sm text-brown-light leading-relaxed">
                    {item.a}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA */}
          <section className="bg-sage text-white rounded-3xl p-8 sm:p-10 text-center">
            <h2
              className="text-2xl sm:text-3xl font-bold mb-3"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              Pronta(o) para começar sua prática de yoga em João Pessoa?
            </h2>
            <p className="text-white/90 leading-relaxed max-w-xl mx-auto mb-6">
              Agende agora sua aula experimental gratuita na Casa Shanti,
              Bessa, e descubra na prática os benefícios do Yoga Integrativo e
              do Yoga Dinâmico com Fabiane Batista.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="https://wa.me/5583993243577?text=Ol%C3%A1%20Fabiane!%20Vi%20o%20artigo%20sobre%20yoga%20em%20Jo%C3%A3o%20Pessoa%20e%20gostaria%20de%20agendar%20uma%20aula%20experimental.%20%F0%9F%8C%BF"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-white text-sage-dark font-semibold px-8 py-3 rounded-full transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg text-sm"
              >
                Agendar pelo WhatsApp
              </a>
              <Link
                href="/#agendamento"
                className="inline-flex items-center justify-center gap-2 bg-brown/20 border border-white/40 text-white font-semibold px-8 py-3 rounded-full transition-all duration-300 hover:-translate-y-0.5 hover:bg-brown/30 text-sm"
              >
                Ver horários das aulas
              </Link>
            </div>
          </section>
        </article>
      </main>

      {/* Footer */}
      <footer className="border-t border-sand/60 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 flex flex-col sm:flex-row justify-between items-center gap-2 text-xs text-brown-light">
          <p>© {new Date().getFullYear()} FabYoga – Fabiane Batista. Todos os direitos reservados.</p>
          <p>Casa Shanti — Bessa, João Pessoa/PB</p>
        </div>
      </footer>
    </div>
  );
}
